import VueAuthenticate from './authenticate'

function plugin (Vue, options) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  let authInstance = null
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        if (!authInstance) {
          if (!this.$http) {
            throw new Error('Request handler instance not found')
          }

          authInstance = new VueAuthenticate(this.$http, options)
        }

        return authInstance
      }
    }
  })
}

export default plugin
