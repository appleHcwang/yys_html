import { createStore } from 'vuex';

const store = createStore({
    state: {
        token: '',
        userInfo: {},
        patInfo: {}, //当前选中的患者
        patList: [] //患者列表
    },
    mutations: {
        setToken(state, payload) {

            state.token = payload;

        },
        setUserInfo(state, payload) {

            state.userInfo = payload;

        },
        setPatInfo(state, payload) {

            state.patInfo = payload;

        },
        setPatList(state, payload) {

            state.patList.push(...payload);
            console.error(state.patList.length)

        }
    },
    getters: {

        activePatIndex(state) {

            return state.patList.findIndex(ele => ele.hosId === state.patInfo.hosId);

        }

    },
    modules: {

    }

})


export default store