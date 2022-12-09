<template>
  <el-card class="box-right">
    <el-table :data="Date" border stripe>
          <el-table-column prop="Date.name" label="Date" width="180" />

      <!-- <el-table-column
        v-for="col in columns"
        :prop="col.id"
        :key="col.id"
        :label="col.label"
        :width="col.width"
      >
      </el-table-column> -->
    </el-table>
  </el-card>
</template>

<script setup>
import {reactive} from'vue'
import { userCounterStore } from "@/stores";
const store = userCounterStore();
const Date = reactive({
  name:'',
  confirm:'',
  TDcomfirm:'',
  dead:''
})

const getdate=()=>{
 Date.name=store.item.name
 Date.confirm=store.item.today.confirm
 Date.TDcomfirm=store.item.total.confirm
 Date.dead=store.item.dead
}
getdate()
</script>

<style lang="less" scoped>
.box-right {
  width: 100%;
  height: 100%;
}
</style>
