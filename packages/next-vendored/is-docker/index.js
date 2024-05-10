;(() => {
  'use strict'
  var e = {
    748: (e, r, t) => {
      const n = t(147)
      let u
      function hasDockerEnv() {
        try {
          n.statSync('/.dockerenv')
          return true
        } catch (e) {
          return false
        }
      }
      function hasDockerCGroup() {
        try {
          return n.readFileSync('/proc/self/cgroup', 'utf8').includes('docker')
        } catch (e) {
          return false
        }
      }
      e.exports = () => {
        if (u === undefined) {
          u = hasDockerEnv() || hasDockerCGroup()
        }
        return u
      }
    },
    147: (e) => {
      e.exports = require('fs')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var n = r[t]
    if (n !== undefined) {
      return n.exports
    }
    var u = (r[t] = { exports: {} })
    var _ = true
    try {
      e[t](u, u.exports, __nccwpck_require__)
      _ = false
    } finally {
      if (_) delete r[t]
    }
    return u.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(748)
  module.exports = t
})()
