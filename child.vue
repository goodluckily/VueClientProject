<template>
  <div style="border:2px solid blue">
   This is child component
   <p>
       a:{{ReceiveA}} ,b:{{ReceiveB}} ,c:{{ReceiveC}}
   </p>
   <input type="number" v-model="val" />
   <input type="button" value="Update C 值" @click="updateValue" />
   <input type="button" value="调用父页面方法" @click="test" />
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    a: {
      type: Number,
      default: 0
    },
    b: {
      type: Number,
      default: 0
    },
    c: {
      type: Number,
      default: 0
    }
  },
  data() { 
    return {
     val:0,
     ReceiveA:this.a,
     ReceiveB:this.b,
     ReceiveC:this.c
    }
  },
  watch:{
    c(newVal,oldVal){
      this.ReceiveC=newVal;
    }
  },
  methods:{
        //ReceiveC 加上 v-model 属性，可以更改父页面对应绑定的data 变量的值
      updateValue(){
          //update:属性名 ,可以更改父页面对应绑定的data 变量的值
        debugger
        this.$emit("update:c",this.val);
      },
      test(){
          //tt 为父页面绑定的事件名，方法的实体为testFunc
        this.$emit("tt",this.val);
      },
      testFunc(p) {
        alert("这是子页面的方法" + p);
      }
  }
}
</script>

<style lang="" scoped>
</style>