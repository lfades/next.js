;(() => {
  'use strict'
  var e = {
    983: (e) => {
      e.exports = function (e) {
        this.cacheable && this.cacheable()
        return ''
      }
    },
  }
  var r = {}
  function __nccwpck_require__(_) {
    var a = r[_]
    if (a !== undefined) {
      return a.exports
    }
    var t = (r[_] = { exports: {} })
    var i = true
    try {
      e[_](t, t.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[_]
    }
    return t.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var _ = __nccwpck_require__(983)
  module.exports = _
})()
