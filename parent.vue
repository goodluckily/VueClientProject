<template>
  <div>
    <div>This is parent Component</div>
    <div style="border:2px solid yellow;height: 500px;">
      <!-- 自定义属性a ,b ,c    自定义事件名tt @相当于v-on !-->
      <childComponent a="aaaaaaa" b="bbbbbb" v-model:c="para" @tt="testFunc" />
    </div>
  </div>
</template>

<script>
import childComponent from "./chlid1.vue"; //引入一个组件
export default {
  name: "parentComponent",
  components: { childComponent }, //定义父子关系
  data() {
    return {
      para: 31,
    };
  },
  mounted() {},
  methods: {
    testFunc(p) {
      alert("这是父页面的方法11111----->" + p);
    },
  },
};
</script>
<style lang="" scoped>
</style>