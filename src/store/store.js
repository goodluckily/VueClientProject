import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    //需要设置的全局访问变量
    state:{
        //需要设置的初始属性值
        MCount:0,
        MState:ture
    },
    //可以实时监听state值的变化(最新状态)
    getters:{
        getMCount(state){
            return state.MCount;
        },
        //....以下 都可以作此操作
    },
    //外部通过调用方法改变state定义的属性值
    mutations:{
        addMCount(state,num)
        {
            state.MCount+=num;
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作
    Actions:{
        getaddMCount(context,num)
        {
            context.commit("addMCount",num);
        }
        //.....例子如下

    }

})


//获取值
//1.获取全局值
//this.$store.state.MCount    ....等等操作

//2.获取实时变化的值
// this.$store.getters.getMCount


//修改值
//1.mutations
//this.$store.commit(操作的方法,参数...)  例如 this.$store.commit('addMCount',1); //每次增加一

//2.Actions
//this.$store.dispatch(操作的方法,参数...) 例如 this.$store.dispatch('getaddMCount',1); //每次增加一


//页面获取参数的一些 辅助函数
// 来看一下 Vuex 里面的好东西，辅助函数 mapState、mapGetters、mapActions

// 如果我们不喜欢这种在页面上使用“this.$stroe.state.count”和“this.$store.dispatch('funName')”这种很长的写法，

// 那么我们可以使用mapState、mapGetters、mapActions就不会这么麻烦了