
import {
  objectExtend,
  formatCookie,
  parseCookies,
  isUndefined
} from '../utils'

export default class CookieStorage {
  constructor (defaultOptions) {
    this._defaultOptions = objectExtend({
      domain: window.location.hostname,
      expires: null,
      path: '/',
      secure: false
    }, defaultOptions)
  }

  setItem (key, value) {
    const options = objectExtend({}, this._defaultOptions)
    const cookie = formatCookie(key, value, options)
    this._setCookie(cookie)
  }

  getItem (key) {
    const cookies = parseCookies(this._getCookie())
    return cookies.hasOwnProperty(key) ? cookies[key] : null
  }

  removeItem (key) {
    const value = ''
    const defaultOptions = objectExtend({}, this._defaultOptions)
    const options = objectExtend(defaultOptions, {
      expires: new Date(0)
    })
    const cookie = formatCookie(key, value, options)
    this._setCookie(cookie)
  }

  _getCookie () {
    return isUndefined(document)
      ? '' : isUndefined(document.cookie)
        ? '' : document.cookie
  }
  _setCookie (cookie) {
    document.cookie = cookie
  }
}
