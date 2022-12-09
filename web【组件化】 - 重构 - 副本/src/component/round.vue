<template>
  <div id="china"></div>
</template>

<script setup>
import { userCounterStore } from "@/stores";
import { onMounted } from "vue";
import * as echarts from "echarts"; //echarts 5
import "../assets/china";
import { geoCoordMap } from "../assets/geoMap"; //外部导入的经纬度
const store = userCounterStore();

// 封装地图方法
const initCharts = () => {
  //&3 左边add/total
  // *1获取中国省份：
  const city = store.list.diseaseh5Shelf.areaTree[0].children;
  // ^右边-默认展示广东：table
  store.item = city[2].children;

  // *经纬度：
  const data = city.map((v) => {
    // console.log(v.name); //每一个省份name
    // console.log(v.name, geoCoordMap[v.name].concat(v.total.nowConfirm)); //拼接:每一个省份name+对应的经纬度
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.total.nowConfirm),
      children: v.children,
    };
  });
  console.log("1省份", city);

  // !这里处理一下先处理一下饼图的数据--然后存放在store中？？？？？

  // 地图
  const charts = echarts.init(document.querySelector("#china"));
  charts.setOption({
    // backgroundColor: "black",
    //&左侧小导航图标和全图颜色
    // visualMap: {
    //   show: true,
    //   x: "left",
    //   y: "bottom",
    //   textStyle: {
    //     fontSize: 8,
    //   },
    //   splitList: [
    //     { start: 1, end: 9 },
    //     { start: 10, end: 99 },
    //     { start: 100, end: 999 },
    //     { start: 1000, end: 9999 },
    //     { start: 10000 },
    //   ],
    //   color: ["#8A3310", "#C64918", "#E55B25", "#F2AD92", "#F9DCD1"],
    // },
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "120%",
      itemStyle: {
        normal: {
          areaColor: {
            type: "linear-gradient",
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#152E6E", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#0673AD", // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          shadowColor: "#0f5d9d",
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5,
        },
        emphasis: {
          areaColor: "#0f5d9d",
        },
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            normal: {
              opacity: 0,
              label: {
                show: false,
                color: "#009cc9",
              },
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        // selectedMode: "multiple", //*多选
        mapType: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "120%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true, //地图名称
          color: "#FFFFFF",
          fontSize: 16,
        },
        itemStyle: {
          normal: {
            areaColor: "#0c3653",
            borderColor: "#1cccff",
            borderWidth: 1.8,
          },
          emphasis: {
            areaColor: "#56b1da",
            label: {
              show: false,
              // show:'true',
              color: "#fff",
            },
          },
        },
        data: data,
      },
      {
        // name: "Top 5",
        type: "scatter",
        coordinateSystem: "geo",
        //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        // symbolSize: [30,120],
        // symbolOffset:[0, '-40%'] ,
        // !小角标：气泡，大小
        symbol:'pin',
        symbolSize: [30,30],
        // symbolColor:yellow,
        // *2疫情的个数
        label: {
          show: true,
          color: "#fff",
          formatter(value) {
            // console.log(value);
            return value.data.value[2];
          },
        },
        itemStyle: {
          normal: {
            color: "#D8BC37", //标志颜色
          },
        },
        data: data,
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        hoverAnimation: true,
        zlevel: 1,
      },
    ],
  });

  // ^点击切换table属性：切换item的值
  charts.on("click", (e) => {
    store.item = e.data.children;
  });
};

onMounted(async () => {
  await store.getList();
  initCharts();
});
</script>

<style lang="less" scoped>
#china {
  width: 90%;
  height: 90%;
  //   居中

  
}
</style>
