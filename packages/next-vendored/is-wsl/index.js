;(() => {
  'use strict'
  var e = {
    412: (e, r, t) => {
      const s = t(37)
      const o = t(147)
      const _ = t(409)
      const isWsl = () => {
        if (process.platform !== 'linux') {
          return false
        }
        if (s.release().toLowerCase().includes('microsoft')) {
          if (_()) {
            return false
          }
          return true
        }
        try {
          return o
            .readFileSync('/proc/version', 'utf8')
            .toLowerCase()
            .includes('microsoft')
            ? !_()
            : false
        } catch (e) {
          return false
        }
      }
      if (process.env.__IS_WSL_TEST__) {
        e.exports = isWsl
      } else {
        e.exports = isWsl()
      }
    },
    147: (e) => {
      e.exports = require('fs')
    },
    409: (e) => {
      e.exports = require('next/dist/compiled/is-docker')
    },
    37: (e) => {
      e.exports = require('os')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var s = r[t]
    if (s !== undefined) {
      return s.exports
    }
    var o = (r[t] = { exports: {} })
    var _ = true
    try {
      e[t](o, o.exports, __nccwpck_require__)
      _ = false
    } finally {
      if (_) delete r[t]
    }
    return o.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(412)
  module.exports = t
})()
