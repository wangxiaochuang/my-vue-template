import types from '../types'

const state = {
  isAuthenticated: false
}

const getters = {
  isAuthenticated () {
    return this.$auth.isAuthenticated()
  }
}

const actions = {
  login ({ commit }, payload) {
    this.$auth.login(payload.user, payload.requestOptions).then((response) => {
      commit(types.IS_AUTHENTICATED, this.$auth.isAuthenticated())
    })
  }
}

const mutations = {
  [types.IS_AUTHENTICATED] (state, payload) {
    state.isAuthenticated = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
