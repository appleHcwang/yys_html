



  const homeModule ={
    namespaced:true ,// 命名空间
    state:{
    
            homeCounter:100,
        
    },
    getters:{
        // 命名空间里面，getters,新增了2个参数 rooteState,rootGetters
        doubleHomeCounter(state){
            return state.homeCounter*2
        },
        gethomeCounter(state) {
            return state.homeCounter; 
        },
    },
    mutations:{
        increment(state,payload){
            state.homeCounter = payload
        }
    },
    actions:{
        incrementAction({commit}){
            commit("increment")
            commit("increment",null,{root:true}) // 在模块里调用state根的mutations里面的方法
        }
    }
}



 export default homeModule