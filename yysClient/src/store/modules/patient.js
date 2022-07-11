
const patientModule = {
   namespaced: true,
   state: {
      patInfo: {}, //当前选中的患者
      patList: [] //患者列表
   },

   mutations: {
      setPatInfo(state, payload) {
         state.patInfo = payload
      },
      setPatList(state, payload) {
         state.patList.push(...payload)
      }
   },

   getters: {
      activePatIndex(state) {
         return state.patList.findIndex(ele => ele.hosId === state.patInfo.hosId);
      }
   },
}


export default patientModule