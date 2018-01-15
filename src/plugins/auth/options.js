
export default {
  baseUrl: null,
  tokenName: 'token',
  tokenPrefix: 'vueauth',
  tokenHeader: 'Authorization',
  tokenType: 'Bearer',
  loginUrl: '/auth/login',
  registerUrl: '/auth/register',
  logoutUrl: null,
  storageNamespace: 'vue-authenticate',
  cookieStorage: {
    domain: window.location.hostname,
    path: '/',
    secure: false
  },
  requestDataKey: 'data',
  responseDataKey: 'data',

  bindRequestInterceptor: function ($auth) {
    const tokenHeader = $auth.options.tokenHeader

    // 什么地方传输config
    $auth.$http.interceptors.request.use((config) => {
      if ($auth.isAuthenticated()) {
        config.headers[tokenHeader] = [
          $auth.options.tokenType, $auth.getToken()
        ].join(' ')
      } else {
        delete config.headers[tokenHeader]
      }

      return config
    })
  },

  bindResponseInterceptor: function ($auth) {
    $auth.$http.interceptors.response.use((response) => {
      $auth.setToken(response)
      return response
    })
  }
}
