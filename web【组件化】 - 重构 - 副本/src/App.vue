<template>
  <!-- 头部 -->
  <header>
    <h1>国内疫情实录</h1>
    <div class="showTime">当前时间：{{ timeStr.year }}-{{ timeStr.time }}</div>
  </header>
  <!-- 主要部分 -->
  <section class="mainbox">
    <!-- 左 -->
    <div class="column">
      <div class="panel bar">
        <a href="https://news.qq.com/zt2020/page/feiyan.htm#/"
          ><h2>国内疫情</h2></a
        >
        <div class="chart"><Add-Card></Add-Card></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel line pp p">
        <h2>广东上周疫情情况</h2>
        <Gd-City></Gd-City>
        <div class="panel-footer"></div>
      </div>
    </div>
    <!-- 中 -->
    <div class="column">
      <div class="no">
        <div class="no-hd">
          <ul>
            <li>660081610</li>
            <li>627960005</li>
          </ul>
        </div>
        <div class="no-bd">
          <ul>
            <li>全球疫情累计确诊</li>
            <li>全球累计治愈</li>
          </ul>
        </div>
      </div>
      <div class="map">
        <div class="chart">
          <el-button>切换</el-button>
          <Round></Round>
          <!-- <WordRound></WordRound> -->
          <div>其他</div>
        </div>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
      </div>
    </div>
    <!-- 右 -->
    <div class="column">
      <div class="panel bar">
        <h2>国外疫情 <a href="javascript:;">2022</a></h2>
        <div class="chart"><Add-CarD></Add-CarD></div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel p pp">
        <Ta-Ble></Ta-Ble>
      </div>
    </div>
  </section>
</template>

<script setup>
import AddCard from "@/component/addcard.vue";
import GdCity from "@/component/gdcity.vue";
import Round from "@/component/round.vue";
import TaBle from "@/component/table.vue";
import AddCarD from "@/component/addcard2.vue";
import WordRound from'@/component/wordround.vue';

import { reactive } from "vue";
import dayjs from "dayjs";

// 而外添加：时间+刷新
import { userCounterStore } from "@/stores";
const store = userCounterStore();
// 当前时间：
const timeStr = reactive({
  time: ``,
  year: ``,
});

// 设置定时器实时拿到当前时间：
const getNowTime = () => {
  setInterval(() => {
    timeStr.time = dayjs(`${new Date()}`).format("HH:mm:ss");
    timeStr.year = dayjs(`${new Date()}`).format("YYYY年MM月DD日");
  }, 1000);
};
getNowTime();

// 刷新
const handleRefresh = () => location.reload();

// !国内外累计确诊-累计治愈【需要手动++】
const Dt = reactive({
  // 全球累积：确诊+治愈
  Worldconfim: "",
  Worldheadl: "",
});
// Dt.Worldconfim=store.chinaTotal.localConfirmH5+ store.WordData.confirm
// Dt.Worldconfim=store.chinaTotal.heal + store.WordData.heal
// console.log(Dt.Worldconfim)

// 新功能：点击切换地图!
const click =()=>{

}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
@font-face {
  font-family: electronicFont;
  src: url(@/assets/font/DS-DIGIT.TTF);
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
  background: url(@/assets/images/bg.jpg) no-repeat #000;
  background-size: cover;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
}
header {
  position: relative;
  height: 1.25rem;
  background: url(@/assets/images/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
  .showTime {
    position: absolute;
    top: 0;
    right: 0.375rem;
    line-height: 0.9375rem;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

// 核心布局！！
.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .column {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
      overflow: hidden;
    }
  }
}
// ！！框
.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(@/assets/images/line\(1\).png);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-left: 2px solid #02a6b5;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #02a6b5;
    border-right: 2px solid #02a6b5;
  }
  .panel-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
  }

  h2 {
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: #fff;
    font-size: 0.25rem;
    font-weight: 400;
    a {
      margin: 0 0.1875rem;
      color: #fff;
      text-decoration: underline;
    }
  }
  .chart {
    height: 3rem;
  }
}

// 中间标题
.no {
  background: rgba(101, 132, 226, 0.1);
  padding: 0.1875rem;
  .no-hd {
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      top: 0;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 10px;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      right: 0;
      bottom: 0;
    }
    ul {
      display: flex;
      li {
        position: relative;
        flex: 1;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.875rem;
        color: #ffeb7b;
        padding: 0.05rem 0;
        font-family: electronicFont;
        font-weight: bold;
        &:first-child::after {
          content: "";
          position: absolute;
          height: 50%;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
          right: 0;
          top: 25%;
        }
      }
    }
  }
  .no-bd ul {
    display: flex;
    li {
      flex: 1;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.225rem;
      color: rgba(255, 255, 255, 0.7);
      padding-top: 0.125rem;
    }
  }
}
// 地图
.map {
  position: relative;
  height: 677px; //w-667
  .chart {
    // background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 600px;
    height: 500px;
    // 水平垂直居中
  }
  // ！！！动画效果
  .map1,
  .map2,
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.475rem;
    height: 6.475rem;
    background: url(@/assets/images/map.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    width: 8.0375rem;
    height: 8.0375rem;
    background-image: url(@/assets/images/lbx.png);
    opacity: 0.6;
    animation: rotate 15s linear infinite;
    z-index: 2;
  }
  .map3 {
    width: 7.075rem;
    height: 7.075rem;
    background-image: url(@/assets/images/jt.png);
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}

// 补充
.pp {
  margin-top: 50px;
}
.p {
  width: 500px;
  height: 500px;
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>
