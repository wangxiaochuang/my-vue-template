import { constantRouterMap } from '../../router'

const state = {
  routers: constantRouterMap
}

const getters = {
  permission_routers (state) {
    return state.routers
  }
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
