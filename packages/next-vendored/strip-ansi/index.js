;(() => {
  'use strict'
  var e = {
    511: (e) => {
      e.exports = ({ onlyFirst: e = false } = {}) => {
        const r = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|')
        return new RegExp(r, e ? undefined : 'g')
      }
    },
    532: (e, r, _) => {
      const t = _(511)
      e.exports = (e) => (typeof e === 'string' ? e.replace(t(), '') : e)
    },
  }
  var r = {}
  function __nccwpck_require__(_) {
    var t = r[_]
    if (t !== undefined) {
      return t.exports
    }
    var a = (r[_] = { exports: {} })
    var n = true
    try {
      e[_](a, a.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete r[_]
    }
    return a.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var _ = __nccwpck_require__(532)
  module.exports = _
})()
