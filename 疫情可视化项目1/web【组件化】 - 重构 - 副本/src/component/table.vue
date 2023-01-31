<template>
  <div style="color: white" class="box-right">
    <table class="table" cellspacing="0" border="1">
      <thead>
        <tr>
          <th>地区</th>
          <th>新增确诊</th>
          <th>累计确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <transition-group
        enter-active-class="animate__animated animate__flipInY"
        tag="tbody"
      >
        <tr :key="item.name" v-for="(item, index) in store.item">
          <td align="center">{{ item.name }}</td>
          <td align="center">{{ item.today.confirm }}</td>
          <td align="center">{{ item.total.confirm }}</td>
          <td align="center">{{ item.total.heal }}</td>
          <td align="center">{{ item.total.dead }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script setup>
import { userCounterStore } from "@/stores";
const store = userCounterStore();
</script>

<style lang="less" scoped>
.box-right{
  width: 100%;
  height: 100%;
  .table{
    width: 100%;
    height: 100%;
  }
}

</style>
