<template>
  <div class="pie"></div>

<!-- 不做为饼图的原因！！斌图无法点击切换为其他 -->

</template>

<script setup>
import { userCounterStore } from "@/stores";
import { onMounted } from "vue";
import * as echarts from "echarts"; //echarts 5
const store = userCounterStore();

// 数据处理为--:pieData:[{value:1,name：1}]
// const getPie = () => {
//   //   1获取到item数组
//   var Arr=store.item
//   console.log('饼图中的数组',Arr);//空？
//   //! 2将数组处理map
//  var newArr=store.item.map(item=>{
//   return{
//     value:item.children.value,
//     name:item.name
//   }
//  })
//  console.log('新的数组',newArr)//[空？]

// };
// getPie();

const initPie = () => {
  const charts = echarts.init(document.querySelector(".pie"));
  charts.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        // 数据：value---name
        // data:store.item.map((v=>v.data))//-遍历item（）
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        // date: pieData
      },
    ],
  });
};
onMounted(initPie);
</script>

<style lang="less" scoped>
.pie {
  width: 100%;
  height: 100%;
}
</style>
