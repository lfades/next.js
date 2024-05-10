;(function () {
  'use strict'
  var t = {
    619: function (t) {
      const e = 2147483647
      const o = 36
      const n = 1
      const r = 26
      const c = 38
      const s = 700
      const i = 72
      const f = 128
      const u = '-'
      const l = /^xn--/
      const a = /[^\0-\x7E]/
      const p = /[\x2E\u3002\uFF0E\uFF61]/g
      const d = {
        overflow: 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input',
      }
      const _ = o - n
      const h = Math.floor
      const w = String.fromCharCode
      function error(t) {
        throw new RangeError(d[t])
      }
      function map(t, e) {
        const o = []
        let n = t.length
        while (n--) {
          o[n] = e(t[n])
        }
        return o
      }
      function mapDomain(t, e) {
        const o = t.split('@')
        let n = ''
        if (o.length > 1) {
          n = o[0] + '@'
          t = o[1]
        }
        t = t.replace(p, '.')
        const r = t.split('.')
        const c = map(r, e).join('.')
        return n + c
      }
      function ucs2decode(t) {
        const e = []
        let o = 0
        const n = t.length
        while (o < n) {
          const r = t.charCodeAt(o++)
          if (r >= 55296 && r <= 56319 && o < n) {
            const n = t.charCodeAt(o++)
            if ((n & 64512) == 56320) {
              e.push(((r & 1023) << 10) + (n & 1023) + 65536)
            } else {
              e.push(r)
              o--
            }
          } else {
            e.push(r)
          }
        }
        return e
      }
      const ucs2encode = (t) => String.fromCodePoint(...t)
      const basicToDigit = function (t) {
        if (t - 48 < 10) {
          return t - 22
        }
        if (t - 65 < 26) {
          return t - 65
        }
        if (t - 97 < 26) {
          return t - 97
        }
        return o
      }
      const digitToBasic = function (t, e) {
        return t + 22 + 75 * (t < 26) - ((e != 0) << 5)
      }
      const adapt = function (t, e, n) {
        let i = 0
        t = n ? h(t / s) : t >> 1
        t += h(t / e)
        for (; t > (_ * r) >> 1; i += o) {
          t = h(t / _)
        }
        return h(i + ((_ + 1) * t) / (t + c))
      }
      const decode = function (t) {
        const c = []
        const s = t.length
        let l = 0
        let a = f
        let p = i
        let d = t.lastIndexOf(u)
        if (d < 0) {
          d = 0
        }
        for (let e = 0; e < d; ++e) {
          if (t.charCodeAt(e) >= 128) {
            error('not-basic')
          }
          c.push(t.charCodeAt(e))
        }
        for (let i = d > 0 ? d + 1 : 0; i < s; ) {
          let f = l
          for (let c = 1, f = o; ; f += o) {
            if (i >= s) {
              error('invalid-input')
            }
            const u = basicToDigit(t.charCodeAt(i++))
            if (u >= o || u > h((e - l) / c)) {
              error('overflow')
            }
            l += u * c
            const a = f <= p ? n : f >= p + r ? r : f - p
            if (u < a) {
              break
            }
            const d = o - a
            if (c > h(e / d)) {
              error('overflow')
            }
            c *= d
          }
          const u = c.length + 1
          p = adapt(l - f, u, f == 0)
          if (h(l / u) > e - a) {
            error('overflow')
          }
          a += h(l / u)
          l %= u
          c.splice(l++, 0, a)
        }
        return String.fromCodePoint(...c)
      }
      const encode = function (t) {
        const c = []
        t = ucs2decode(t)
        let s = t.length
        let l = f
        let a = 0
        let p = i
        for (const e of t) {
          if (e < 128) {
            c.push(w(e))
          }
        }
        let d = c.length
        let _ = d
        if (d) {
          c.push(u)
        }
        while (_ < s) {
          let s = e
          for (const e of t) {
            if (e >= l && e < s) {
              s = e
            }
          }
          const i = _ + 1
          if (s - l > h((e - a) / i)) {
            error('overflow')
          }
          a += (s - l) * i
          l = s
          for (const s of t) {
            if (s < l && ++a > e) {
              error('overflow')
            }
            if (s == l) {
              let t = a
              for (let e = o; ; e += o) {
                const s = e <= p ? n : e >= p + r ? r : e - p
                if (t < s) {
                  break
                }
                const i = t - s
                const f = o - s
                c.push(w(digitToBasic(s + (i % f), 0)))
                t = h(i / f)
              }
              c.push(w(digitToBasic(t, 0)))
              p = adapt(a, i, _ == d)
              a = 0
              ++_
            }
          }
          ++a
          ++l
        }
        return c.join('')
      }
      const toUnicode = function (t) {
        return mapDomain(t, function (t) {
          return l.test(t) ? decode(t.slice(4).toLowerCase()) : t
        })
      }
      const toASCII = function (t) {
        return mapDomain(t, function (t) {
          return a.test(t) ? 'xn--' + encode(t) : t
        })
      }
      const v = {
        version: '2.1.0',
        ucs2: { decode: ucs2decode, encode: ucs2encode },
        decode: decode,
        encode: encode,
        toASCII: toASCII,
        toUnicode: toUnicode,
      }
      t.exports = v
    },
  }
  var e = {}
  function __nccwpck_require__(o) {
    var n = e[o]
    if (n !== undefined) {
      return n.exports
    }
    var r = (e[o] = { exports: {} })
    var c = true
    try {
      t[o](r, r.exports, __nccwpck_require__)
      c = false
    } finally {
      if (c) delete e[o]
    }
    return r.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var o = __nccwpck_require__(619)
  module.exports = o
})()
