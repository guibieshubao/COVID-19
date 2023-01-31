<template>
  <div class="box-left-card">
    <section>
      <div class="num1">+{{  store.WordData.confirmAdd}}</div>
      <div>国外新增确诊</div>
    </section>
    <section>
      <div  class="num2">+{{ store.WordData.heal}}</div>
      <div>国外治愈</div>
    </section>

    
    <section>
      <div  class="num3">{{ store.WordData.deadAdd }}</div>
      <div>今日死亡</div>
    </section>
    <section>
      <div  class="num1">{{ store.WordData.confirm}}</div>
      <div>国外现有确诊</div>
    </section>
    <section>
      <div  class="num2">{{  store.WordData.healAdd }}</div>
      <div>国外今日治愈</div>
    </section>
    <section>
      <div  class="num3">{{ store.WordData.dead }}</div>
      <div>累计死亡</div>
    </section>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import { userCounterStore } from "@/stores";
const store = userCounterStore();

onMounted(() => {
    store.getWorld()
})
</script>

<style lang="less" scoped>
.box-left-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  section {
    width: 140px;
    height: 108px;
    background-color: rgb(10, 20, 66);
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    .num1 {
      // color: rgb(red, green, blue);
      color: rgb(229, 118, 49);
      padding: 10px 0;
      font-size: 20px;
      font-weight: bold;
    }
    .num2 {
      color: rgb(202, 63, 129);
      padding: 10px 0;
      font-size: 20px;
      font-weight: bold;
    }
    .num3 {
      color: rgb(190, 33, 33);
      padding: 10px 0;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
