import LocalStorage from './local-storage'
import SessionStorage from './session-storage'
import CookieStorage from './cookie-storage'
import MemoryStorage from './memory-storage'

export default function StorageFactory (options) {
  switch (options.storageType) {
    case 'localStorage':
      try {
        window.localStorage.setItem('testKey', 'test')
        window.localStorage.removeItem('testKey')
        return new LocalStorage(options.storageNamespace)
      } catch (e) {}
    case 'sessionStorage':
      try {
        window.sessionStorage.setItem('testKey', 'test')
        window.sessionStorage.removeItem('testKey')
        return new SessionStorage(options.storageNamespace)
      } catch (e) {}
    case 'cookieStorage':
      return new CookieStorage(options.cookieStorage)
    case 'memoryStorage':
    default:
      return new MemoryStorage(options.storageNamespace)
  }
}
