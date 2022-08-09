<template>
  <div style="border: 2px solid blue;height: 150px;margin-top:50px">
    This is child component1 parent para:{{ a }}-----{{ReceiveA}}
   <input type="button" value="调用方法child1" @click="$emit('tt','child1 Para')" />
   <ul>
    <li v-for="(item,index) in guidList" key="item">{{index}}--{{item}}</li>
   </ul>
   <input type="text" v-model="guidval" />
   <button @click="uuidAdd()">增加</button>
   <button @click="uuidDelete(guidval)">删除</button>
   <button @click="uuidUpdate(guidval)">修改</button>
   <button @click="uuidGet(guidval)">查询</button>

   <div style="margin-top:150px">
    <!-- 传递监听 和 属性!-->
    <childComponent2 v-on="$attrs" v-bind="$attrs"> </childComponent2>
   </div>
  </div>
</template>

<script>
import childComponent2 from "./chlid2.vue"; //引入一个组件
import guidFunc from '../minix/index';
export default {
  name: "child1",
  props: ["a"], //接收父页面传递的属性值
  components: { childComponent2 }, //定义父子关系
  mixins:[guidFunc],
  data() {
    return {
      ReceiveA: this.a,
      guidval:""
    };
  },
  methods: {
    updateValue() {
      //update:属性名 ,可以更改父页面对应绑定的data 变量的值
      this.$emit("update:c", this.val);
    },
    test() {
      //tt 为父页面绑定的事件名，方法的实体为testFunc
      this.$emit("tt", this.val);
    },
  },
};
</script>

<style lang="" scoped>
</style>