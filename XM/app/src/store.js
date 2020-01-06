import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state={
    num:0,
    json:{}
}
var getters={
    g_num(state){
      return state.num
    },
    g_json(state){
      return state.json
    }
}
var mutations={
    m_json(state,a){
      let s=a.h
        state.json[s]=a
        let num1=0
        for(let i in state.json){
          let da=state.json[i].ma
          let nu=state.json[i].num
          num1+=da*nu
        }
        state.num=num1
    }
}
var actions={
    a_json({commit}, a) {
            commit('m_json', a)
        }
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
