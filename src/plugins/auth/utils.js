
export function isFunction (value) {
  return typeof value === 'function'
}

export function isUndefined (value) {
  return typeof value === 'undefined'
}

export function isDefined (value) {
  return typeof value !== 'undefined'
}

export function isObject (value) {
  return typeof value === 'object'
}

export function isString (value) {
  return typeof value === 'string'
}

export function isNumber (value) {
  return typeof value === 'number'
}

export function joinUrl (baseUrl, url) {
  if (/^(?:[a-z]+:)?\/\//i.test(url)) {
    return url
  }
  let joined = [baseUrl, url].join('/')
  let normalize = function (str) {
    return str
      .replace(/[/]+/g, '/')
      .replace(/\/\?/g, '?')
      .replace(/\/#/g, '#')
      .replace(/:\//g, '://')
  }
  return normalize(joined)
}

export function decodeBase64 (str) {
  let Buffer
  if (typeof module !== 'undefined' && module.exports) {
    try {
      Buffer = require('buffer').Buffer.alloc
    } catch (err) {
      // noop
    }
  }

  let fromCharCode = String.fromCharCode

  let reBtou = new RegExp([
    '[\xC0-\xDF][\x80-\xBF]',
    '[\xE0-\xEF][\x80-\xBF]{2}',
    '[\xF0-\xF7][\x80-\xBF]{3}'
  ].join('|'), 'g')

  let cbBtou = function (cccc) {
    switch (cccc.length) {
      case 4:
        let cp = ((0x07 & cccc.charCodeAt(0)) << 18) |
          ((0x3f & cccc.charCodeAt(1)) << 12) |
          ((0x3f & cccc.charCodeAt(2)) << 6) |
          (0x3f & cccc.charCodeAt(3))
        let offset = cp - 0x10000
        return (fromCharCode((offset >>> 10) + 0xD800) +
          fromCharCode((offset & 0x3FF) + 0xDC00))
      case 3:
        return fromCharCode(
          ((0x0f & cccc.charCodeAt(0)) << 12) |
          ((0x3f & cccc.charCodeAt(1)) << 6) |
          (0x3f & cccc.charCodeAt(2))
        )
      default:
        return fromCharCode(
          ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
        )
    }
  }

  let btou = function (b) {
    return b.replace(reBtou, cbBtou)
  }

  let _decode = Buffer ? function (a) {
    return (a.constructor === Buffer.constructor
      ? a : Buffer(a, 'base64')).toString()
  } : function (a) {
    return btou(atob(a))
  }

  return _decode(
    String(str).replace(/[-_]/g, function (m0) {
      return m0 === '-' ? '+' : '/'
    })
      .replace(/[^A-Za-z0-9+/]/g, '')
  )
}

export function objectExtend (a, b) {
  if (a === null || b === null) {
    return a
  }

  Object.keys(b).forEach(function (key) {
    if (Object.prototype.toString.call(b[key]) === '[object Object]') {
      if (Object.prototype.toString.call(a[key]) !== '[object Object') {
        a[key] = b[key]
      } else {
        a[key] = objectExtend(a[key], b[key])
      }
    } else {
      a[key] = b[key]
    }
  })

  return a
}

// parseCookies(document.cookie) 如果有多条记录怎么办
export function parseCookies (str) {
  if (str.length === 0) return {}
  const parsed = {}
  const pattern = new RegExp('\\s*;\\s*')
  str.split(pattern).forEach((i) => {
    const [encodedKey, encodedValue] = i.split('=')
    const key = decodeURIComponent(encodedKey)
    const value = decodeURIComponent(encodedValue)
    parsed[key] = value
  })
  return parsed
}
export function formatOptions (options) {
  const { path, domain, expires, secure } = options
  return [
    isUndefined(path) || path === null
      ? '' : ';path=' + path,
    isUndefined(domain) || domain === null
      ? '' : ';domain=' + domain,
    isUndefined(expires) || expires === null
      ? '' : ';expires=' + expires.toUTCString(),
    isUndefined(secure) || secure === null || secure === false
      ? '' : ';secure'
  ].join('')
}
export function formatCookie (key, value, options) {
  return [
    encodeURIComponent(key),
    '=',
    encodeURIComponent(value),
    formatOptions(options)
  ].join('')
}
