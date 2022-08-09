<template>
  <div style="border:2px solid red;height: 150px;">
   This is child component2
   parent para: {{b}}
   <input type="button" value="调用方法child2" @click="$emit('tt','child2 Para')" />

   <ul>
    <li v-for="(item,index) in guidList" key="item">{{index}}--{{item}}</li>
   </ul>
   <input type="text" v-model="guidval" />
   <button @click="uuidAdd()">增加</button>
   <button @click="uuidDelete(guidval)">删除</button>
   <button @click="uuidUpdate(guidval)">修改</button>
   <button @click="uuidGet(guidval)">查询</button>

  </div>
</template>

<script>
import guidFunc from '../minix/index';
export default {
  name: 'child2',
  mixins:[guidFunc],
  props:["b"],//接收父页面传递的属性值
  data() { 
    return {
    }
  },
  methods:{
     
  }
}
</script>

<style lang="" scoped>
</style>