import { defineStore } from "pinia";
import { getAPiList, getApiGDList, getWorldList } from "@/server";
import type {
  RootObject,
  Children,
  ChinaTotal,
  ChinaAdd,
  StatisGradeCityDetail,
} from "./type";

export const userCounterStore = defineStore({
  id: "counter",
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],//!从round组件中传回来的
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    //但前更新时间：
    lastUpdate: <string>{},

    // 搞一下广东的top10 清远top10
    cityDetail: <StatisGradeCityDetail[]>[],

    // !前十天的数据
    GDcityDetail: <any>[], //默认数组为空
    Date: <any>[], //日期+数据

    // 国外疫情
    WordData: <any>{},

    // 饼图
    pieDate:<any>[]//在round中处理！！！！！！
  }),
  getters:{
  },
  actions: {
    async getList() {
      const result = await getAPiList();
      //  建议结构一下这个数据result
      this.list = result.data;
      console.log("1getList ", result.data);
      console.log("this.list", this.list);

      // 时间：
      this.lastUpdate = this.list.diseaseh5Shelf.lastUpdateTime;
      // 左
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd;
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal;

      // 广东top(前十天的数据)
      this.cityDetail = this.list.statisGradeCityDetail.slice(0, 10); //打印一下看看
      console.log("前十数组查看", this.cityDetail);

      // 饼图???又失效了？？
      console.log('打印item',this.item)
      // this.pieDate=this.item.map(item=>{return{
      //   value:item.total.confirm,
      //   name:item.name
      // }})
      // console.log('打印斌图数据value-name',this.pieDate)

    },
    async getGDList() {
      const result = await getApiGDList();
      // !前提先处理数据{对象转数组}this.GDcityDetail.values = result.data;
      const obj = result.data;
      for (let i in obj) {
        this.GDcityDetail.push(obj[i]);
      }
      // console.log(" 广东疫情", result);
      console.log(" 广东疫情", this.GDcityDetail);
      // 前七天x轴
      this.Date = this.GDcityDetail.slice(23, 30);
      // *bug!-----GDcityDetail不是数组是一个对象！！---解决方法[]
      // ^bug产生的原因：接口的数据是{}不是【】---！！所以先处理传递过来的数据
    },
    async getWorld() {
      const res = await getWorldList();
      this.WordData = res.data.WomWorld;
      console.log(' 世界疫情', this.WordData)
    }
  },
});

// bug：解决
// 前提先处理数据{对象转数组}this.GDcityDetail.values = result.data;
//  const obj=result.data
//  var arr=[]//这个arr== GDcityDetail[]
//  for (let i in obj) {
//   arr.push(obj[i])
