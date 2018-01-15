import { objectExtend, isFunction, isObject, isString, decodeBase64, joinUrl } from './utils'
import defautOptions from './options'
import StorageFactory from './storage'

export default class VueAuthenticate {
  constructor ($http, overrideOptions) {
    let options = objectExtend({}, defautOptions)
    options = objectExtend(options, overrideOptions)
    let storage = StorageFactory(options)

    Object.defineProperties(this, {
      $http: {
        get () {
          return $http
        }
      },

      options: {
        get () {
          return options
        }
      },

      storage: {
        get () {
          return storage
        }
      },

      tokenName: {
        get () {
          if (this.options.tokenPrefix) {
            return [this.options.tokenPrefix, this.options.tokenName].join('_')
          } else {
            return this.options.tokenName
          }
        }
      }
    })

    if (this.options.bindRequestInterceptor && isFunction(this.options.bindRequestInterceptor) &&
      this.options.bindResponseInterceptor && isFunction(this.options.bindResponseInterceptor)) {
      this.options.bindRequestInterceptor.call(this, this)
      this.options.bindResponseInterceptor.call(this, this)
    } else {
      throw new Error('Both request and response interceptors must be functions')
    }
  }

  isAuthenticated () {
    let token = this.storage.getItem(this.tokenName)

    if (token) {
      if (token.split('.').length === 3) {
        try {
          const base64Url = token.split('.')[1]
          const base64 = base64Url.replace('-', '+').replace('_', '/')
          const exp = JSON.parse(window.atob(base64)).exp
          if (typeof exp === 'number') {
            return Math.round(new Date().getTime() / 1000) < exp
          }
        } catch (e) {
          return true
        }
      }
      return true
    }
    return false
  }

  getToken () {
    return this.storage.getItem(this.tokenName)
  }

  setToken (response) {
    if (response[this.options.responseDataKey]) {
      response = response[this.options.responseDataKey]
    }
    let token
    if (response.access_token) {
      if (isObject(response.access_token) && isObject(response.access_token[this.options.responseDataKey])) {
        response = response.access_token
      } else if (isString(response.access_token)) {
        token = response.access_token
      }
    }

    if (!token && response) {
      token = response[this.options.tokenName]
    }
    if (token) {
      this.storage.setItem(this.tokenName, token)
    }
  }

  getPayload () {
    const token = this.storage.getItem(this.tokenName)

    if (token && token.split('.').length === 3) {
      try {
        const base64Url = token.splice('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        return JSON.parse(decodeBase64(base64))
      } catch (e) {}
    }
  }

  login (user, requestOptions) {
    requestOptions = requestOptions || {}
    requestOptions.url = requestOptions.url ? requestOptions.url : joinUrl(this.options.baseUrl, this.options.loginUrl)
    requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
    requestOptions.method = requestOptions.method || 'POST'
    requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

    return this.$http(requestOptions).then((response) => {
      this.setToken(response)
      return response
    })
  }

  register (user, requestOptions) {
    requestOptions = requestOptions || {}
    requestOptions.url = requestOptions.url ? requestOptions.url : joinUrl(this.options.baseUrl, this.options.registerUrl)
    requestOptions[this.options.requestDataKey] = user || requestOptions[this.options.requestDataKey]
    requestOptions.method = requestOptions.method || 'POST'
    requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

    return this.$http(requestOptions).then((response) => {
      this.setToken(response)
      return response
    })
  }

  logout (requestOptions) {
    if (!this.isAuthenticated()) {
      return Promise.reject(new Error('There is no currently authenticated user'))
    }

    requestOptions = requestOptions || {}
    requestOptions.url = requestOptions.logoutUrl || this.options.logoutUrl

    if (requestOptions.url) {
      requestOptions.method = requestOptions.method || 'POST'
      requestOptions.withCredentials = requestOptions.withCredentials || this.options.withCredentials

      return this.$http(requestOptions).then((response) => {
        this.storage.removeItem(this.tokenName)
      })
    } else {
      this.storage.removeItem(this.tokenName)
      return Promise.resolve()
    }
  }
}
