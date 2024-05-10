;(() => {
  'use strict'
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var e = {}
  ;(() => {
    var r = e
    /*!
     * cookie
     * Copyright(c) 2012-2014 Roman Shtylman
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */ r.parse = parse
    r.serialize = serialize
    var i = decodeURIComponent
    var t = encodeURIComponent
    var a = /; */
    var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
    function parse(e, r) {
      if (typeof e !== 'string') {
        throw new TypeError('argument str must be a string')
      }
      var t = {}
      var n = r || {}
      var o = e.split(a)
      var s = n.decode || i
      for (var p = 0; p < o.length; p++) {
        var f = o[p]
        var u = f.indexOf('=')
        if (u < 0) {
          continue
        }
        var v = f.substr(0, u).trim()
        var c = f.substr(++u, f.length).trim()
        if ('"' == c[0]) {
          c = c.slice(1, -1)
        }
        if (undefined == t[v]) {
          t[v] = tryDecode(c, s)
        }
      }
      return t
    }
    function serialize(e, r, i) {
      var a = i || {}
      var o = a.encode || t
      if (typeof o !== 'function') {
        throw new TypeError('option encode is invalid')
      }
      if (!n.test(e)) {
        throw new TypeError('argument name is invalid')
      }
      var s = o(r)
      if (s && !n.test(s)) {
        throw new TypeError('argument val is invalid')
      }
      var p = e + '=' + s
      if (null != a.maxAge) {
        var f = a.maxAge - 0
        if (isNaN(f) || !isFinite(f)) {
          throw new TypeError('option maxAge is invalid')
        }
        p += '; Max-Age=' + Math.floor(f)
      }
      if (a.domain) {
        if (!n.test(a.domain)) {
          throw new TypeError('option domain is invalid')
        }
        p += '; Domain=' + a.domain
      }
      if (a.path) {
        if (!n.test(a.path)) {
          throw new TypeError('option path is invalid')
        }
        p += '; Path=' + a.path
      }
      if (a.expires) {
        if (typeof a.expires.toUTCString !== 'function') {
          throw new TypeError('option expires is invalid')
        }
        p += '; Expires=' + a.expires.toUTCString()
      }
      if (a.httpOnly) {
        p += '; HttpOnly'
      }
      if (a.secure) {
        p += '; Secure'
      }
      if (a.sameSite) {
        var u =
          typeof a.sameSite === 'string' ? a.sameSite.toLowerCase() : a.sameSite
        switch (u) {
          case true:
            p += '; SameSite=Strict'
            break
          case 'lax':
            p += '; SameSite=Lax'
            break
          case 'strict':
            p += '; SameSite=Strict'
            break
          case 'none':
            p += '; SameSite=None'
            break
          default:
            throw new TypeError('option sameSite is invalid')
        }
      }
      return p
    }
    function tryDecode(e, r) {
      try {
        return r(e)
      } catch (r) {
        return e
      }
    }
  })()
  module.exports = e
})()
