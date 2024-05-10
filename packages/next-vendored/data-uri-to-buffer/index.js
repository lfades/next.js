;(() => {
  'use strict'
  var e = {
    151: (e) => {
      function dataUriToBuffer(e) {
        if (!/^data:/i.test(e)) {
          throw new TypeError(
            '`uri` does not appear to be a Data URI (must begin with "data:")'
          )
        }
        e = e.replace(/\r?\n/g, '')
        const r = e.indexOf(',')
        if (r === -1 || r <= 4) {
          throw new TypeError('malformed data: URI')
        }
        const t = e.substring(5, r).split(';')
        let a = ''
        let i = false
        const s = t[0] || 'text/plain'
        let n = s
        for (let e = 1; e < t.length; e++) {
          if (t[e] === 'base64') {
            i = true
          } else {
            n += `;${t[e]}`
            if (t[e].indexOf('charset=') === 0) {
              a = t[e].substring(8)
            }
          }
        }
        if (!t[0] && !a.length) {
          n += ';charset=US-ASCII'
          a = 'US-ASCII'
        }
        const o = i ? 'base64' : 'ascii'
        const f = unescape(e.substring(r + 1))
        const _ = Buffer.from(f, o)
        _.type = s
        _.typeFull = n
        _.charset = a
        return _
      }
      e.exports = dataUriToBuffer
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var a = r[t]
    if (a !== undefined) {
      return a.exports
    }
    var i = (r[t] = { exports: {} })
    var s = true
    try {
      e[t](i, i.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete r[t]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(151)
  module.exports = t
})()
