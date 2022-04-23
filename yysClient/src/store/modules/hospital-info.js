const hospitalInfo = {
    namespaced: true,
    state: {
        currentHos: {},
        currentDept: {},
    },

    getters:{
        currentDept: (state) => {
            return state.currentDept;
        },
        currentHos: (state) => {
            return state.currentHos;
        }
    },

    mutations: { //同步修改 store 中的值
        setcurrentDept(state, currentDept) {
            state.currentDept = currentDept;
        },
        setcurrentHos(state, currentHos) {
            state.currentHos = currentHos;
        }
    
    }, 

    actions: {

     
    },

}

export default hospitalInfo
