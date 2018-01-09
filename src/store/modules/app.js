import types from '../types'

const state = {
  device: {
    isMobile: false
  },
  sidebar: {
    opened: false
  },
  effect: {
    translate3d: true
  }
}

const getters = {
  sidebar (state) {
    return state.sidebar
  },
  device (state) {
    return state.device
  }
}

const actions = {
  toggleSidebar: ({ commit }, config) => {
    if (config instanceof Object) {
      commit(types.TOGGLE_SIDEBAR, config)
    }
  },
  toggleDevice: ({ commit }, device) => {
    commit(types.TOGGLE_DEVICE, device)
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
  },
  [types.TOGGLE_SIDEBAR] (state, config) {
    if (state.device.isMobile && config.hasOwnProperty('opened')) {
      state.sidebar.opened = config.opened
    } else {
      state.sidebar.opened = true
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
