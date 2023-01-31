<template>
  <div class="box-left-card">
    <section>
      <div class="num1">+{{ store.chinaAdd.localConfirmH5}}</div>
      <div>国内新增确诊</div>
    </section>
    <section>
      <div  class="num2">+{{store.chinaAdd.noInfectH5}}</div>
      <div>国内新增无症状</div>
    </section>
    <section>
      <div  class="num3">{{ store.chinaTotal.deadAdd }}</div>
      <div>今日死亡</div>
    </section>
    <section>
      <div  class="num1">{{ store.chinaTotal.localConfirmH5 }}</div>
      <div>国内现有确诊</div>
    </section>
    <section>
      <div  class="num2">{{ store.chinaTotal.noInfectH5 }}</div>
      <div>国内现有无症状</div>
    </section>
    <section>
      <div  class="num3">{{ store.chinaTotal.dead }}</div>
      <div>累计死亡</div>
    </section>
  </div>
</template>

<script setup>
import { userCounterStore } from "@/stores";
const store = userCounterStore();
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
