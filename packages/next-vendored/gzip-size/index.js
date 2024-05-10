;(() => {
  var e = {
    154: (e, r, t) => {
      var n = t(781)
      var o = ['write', 'end', 'destroy']
      var i = ['resume', 'pause']
      var s = ['data', 'close']
      var c = Array.prototype.slice
      e.exports = duplex
      function forEach(e, r) {
        if (e.forEach) {
          return e.forEach(r)
        }
        for (var t = 0; t < e.length; t++) {
          r(e[t], t)
        }
      }
      function duplex(e, r) {
        var t = new n()
        var a = false
        forEach(o, proxyWriter)
        forEach(i, proxyReader)
        forEach(s, proxyStream)
        r.on('end', handleEnd)
        e.on('drain', function () {
          t.emit('drain')
        })
        e.on('error', reemit)
        r.on('error', reemit)
        t.writable = e.writable
        t.readable = r.readable
        return t
        function proxyWriter(r) {
          t[r] = method
          function method() {
            return e[r].apply(e, arguments)
          }
        }
        function proxyReader(e) {
          t[e] = method
          function method() {
            t.emit(e)
            var n = r[e]
            if (n) {
              return n.apply(r, arguments)
            }
            r.emit(e)
          }
        }
        function proxyStream(e) {
          r.on(e, reemit)
          function reemit() {
            var r = c.call(arguments)
            r.unshift(e)
            t.emit.apply(t, r)
          }
        }
        function handleEnd() {
          if (a) {
            return
          }
          a = true
          var e = c.call(arguments)
          e.unshift('end')
          t.emit.apply(t, e)
        }
        function reemit(e) {
          t.emit('error', e)
        }
      }
    },
    349: (e, r, t) => {
      'use strict'
      const n = t(147)
      const o = t(781)
      const i = t(796)
      const s = t(154)
      const c = t(530)
      const getOptions = (e) => Object.assign({ level: 9 }, e)
      e.exports = (e, r) => {
        if (!e) {
          return Promise.resolve(0)
        }
        return c(i.gzip)(e, getOptions(r))
          .then((e) => e.length)
          .catch((e) => 0)
      }
      e.exports.sync = (e, r) => i.gzipSync(e, getOptions(r)).length
      e.exports.stream = (e) => {
        const r = new o.PassThrough()
        const t = new o.PassThrough()
        const n = s(r, t)
        let c = 0
        const a = i
          .createGzip(getOptions(e))
          .on('data', (e) => {
            c += e.length
          })
          .on('error', () => {
            n.gzipSize = 0
          })
          .on('end', () => {
            n.gzipSize = c
            n.emit('gzip-size', c)
            t.end()
          })
        r.pipe(a)
        r.pipe(t, { end: false })
        return n
      }
      e.exports.file = (r, t) =>
        new Promise((o, i) => {
          const s = n.createReadStream(r)
          s.on('error', i)
          const c = s.pipe(e.exports.stream(t))
          c.on('error', i)
          c.on('gzip-size', o)
        })
      e.exports.fileSync = (r, t) => e.exports.sync(n.readFileSync(r), t)
    },
    530: (e) => {
      'use strict'
      const processFn = (e, r) =>
        function (...t) {
          const n = r.promiseModule
          return new n((n, o) => {
            if (r.multiArgs) {
              t.push((...e) => {
                if (r.errorFirst) {
                  if (e[0]) {
                    o(e)
                  } else {
                    e.shift()
                    n(e)
                  }
                } else {
                  n(e)
                }
              })
            } else if (r.errorFirst) {
              t.push((e, r) => {
                if (e) {
                  o(e)
                } else {
                  n(r)
                }
              })
            } else {
              t.push(n)
            }
            e.apply(this, t)
          })
        }
      e.exports = (e, r) => {
        r = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: true,
            promiseModule: Promise,
          },
          r
        )
        const t = typeof e
        if (!(e !== null && (t === 'object' || t === 'function'))) {
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              e === null ? 'null' : t
            }\``
          )
        }
        const filter = (e) => {
          const match = (r) => (typeof r === 'string' ? e === r : r.test(e))
          return r.include ? r.include.some(match) : !r.exclude.some(match)
        }
        let n
        if (t === 'function') {
          n = function (...t) {
            return r.excludeMain ? e(...t) : processFn(e, r).apply(this, t)
          }
        } else {
          n = Object.create(Object.getPrototypeOf(e))
        }
        for (const t in e) {
          const o = e[t]
          n[t] = typeof o === 'function' && filter(t) ? processFn(o, r) : o
        }
        return n
      }
    },
    147: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    781: (e) => {
      'use strict'
      e.exports = require('stream')
    },
    796: (e) => {
      'use strict'
      e.exports = require('zlib')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var n = r[t]
    if (n !== undefined) {
      return n.exports
    }
    var o = (r[t] = { exports: {} })
    var i = true
    try {
      e[t](o, o.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[t]
    }
    return o.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(349)
  module.exports = t
})()
