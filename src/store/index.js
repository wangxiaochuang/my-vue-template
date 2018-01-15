import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import app from './modules/app'
import auth from './modules/auth'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    app,
    auth,
    permission
  }
})
