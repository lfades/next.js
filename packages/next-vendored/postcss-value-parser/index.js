;(() => {
  var e = {
    697: (e, r, t) => {
      var a = t(257)
      var n = t(961)
      var o = t(256)
      function ValueParser(e) {
        if (this instanceof ValueParser) {
          this.nodes = a(e)
          return this
        }
        return new ValueParser(e)
      }
      ValueParser.prototype.toString = function () {
        return Array.isArray(this.nodes) ? o(this.nodes) : ''
      }
      ValueParser.prototype.walk = function (e, r) {
        n(this.nodes, e, r)
        return this
      }
      ValueParser.unit = t(68)
      ValueParser.walk = n
      ValueParser.stringify = o
      e.exports = ValueParser
    },
    257: (e) => {
      var r = '('.charCodeAt(0)
      var t = ')'.charCodeAt(0)
      var a = "'".charCodeAt(0)
      var n = '"'.charCodeAt(0)
      var o = '\\'.charCodeAt(0)
      var s = '/'.charCodeAt(0)
      var d = ','.charCodeAt(0)
      var u = ':'.charCodeAt(0)
      var i = '*'.charCodeAt(0)
      var c = 'u'.charCodeAt(0)
      var l = 'U'.charCodeAt(0)
      var f = '+'.charCodeAt(0)
      var h = /^[a-f0-9?-]+$/i
      e.exports = function (e) {
        var v = []
        var A = e
        var p, C, x, y, g, I, _, w
        var E = 0
        var b = A.charCodeAt(E)
        var k = A.length
        var m = [{ nodes: v }]
        var P = 0
        var V
        var q = ''
        var N = ''
        var O = ''
        while (E < k) {
          if (b <= 32) {
            p = E
            do {
              p += 1
              b = A.charCodeAt(p)
            } while (b <= 32)
            y = A.slice(E, p)
            x = v[v.length - 1]
            if (b === t && P) {
              O = y
            } else if (x && x.type === 'div') {
              x.after = y
              x.sourceEndIndex += y.length
            } else if (
              b === d ||
              b === u ||
              (b === s &&
                A.charCodeAt(p + 1) !== i &&
                (!V || (V && V.type === 'function' && V.value !== 'calc')))
            ) {
              N = y
            } else {
              v.push({
                type: 'space',
                sourceIndex: E,
                sourceEndIndex: p,
                value: y,
              })
            }
            E = p
          } else if (b === a || b === n) {
            p = E
            C = b === a ? "'" : '"'
            y = { type: 'string', sourceIndex: E, quote: C }
            do {
              g = false
              p = A.indexOf(C, p + 1)
              if (~p) {
                I = p
                while (A.charCodeAt(I - 1) === o) {
                  I -= 1
                  g = !g
                }
              } else {
                A += C
                p = A.length - 1
                y.unclosed = true
              }
            } while (g)
            y.value = A.slice(E + 1, p)
            y.sourceEndIndex = y.unclosed ? p : p + 1
            v.push(y)
            E = p + 1
            b = A.charCodeAt(E)
          } else if (b === s && A.charCodeAt(E + 1) === i) {
            p = A.indexOf('*/', E)
            y = { type: 'comment', sourceIndex: E, sourceEndIndex: p + 2 }
            if (p === -1) {
              y.unclosed = true
              p = A.length
              y.sourceEndIndex = p
            }
            y.value = A.slice(E + 2, p)
            v.push(y)
            E = p + 2
            b = A.charCodeAt(E)
          } else if (
            (b === s || b === i) &&
            V &&
            V.type === 'function' &&
            V.value === 'calc'
          ) {
            y = A[E]
            v.push({
              type: 'word',
              sourceIndex: E - N.length,
              sourceEndIndex: E + y.length,
              value: y,
            })
            E += 1
            b = A.charCodeAt(E)
          } else if (b === s || b === d || b === u) {
            y = A[E]
            v.push({
              type: 'div',
              sourceIndex: E - N.length,
              sourceEndIndex: E + y.length,
              value: y,
              before: N,
              after: '',
            })
            N = ''
            E += 1
            b = A.charCodeAt(E)
          } else if (r === b) {
            p = E
            do {
              p += 1
              b = A.charCodeAt(p)
            } while (b <= 32)
            w = E
            y = {
              type: 'function',
              sourceIndex: E - q.length,
              value: q,
              before: A.slice(w + 1, p),
            }
            E = p
            if (q === 'url' && b !== a && b !== n) {
              p -= 1
              do {
                g = false
                p = A.indexOf(')', p + 1)
                if (~p) {
                  I = p
                  while (A.charCodeAt(I - 1) === o) {
                    I -= 1
                    g = !g
                  }
                } else {
                  A += ')'
                  p = A.length - 1
                  y.unclosed = true
                }
              } while (g)
              _ = p
              do {
                _ -= 1
                b = A.charCodeAt(_)
              } while (b <= 32)
              if (w < _) {
                if (E !== _ + 1) {
                  y.nodes = [
                    {
                      type: 'word',
                      sourceIndex: E,
                      sourceEndIndex: _ + 1,
                      value: A.slice(E, _ + 1),
                    },
                  ]
                } else {
                  y.nodes = []
                }
                if (y.unclosed && _ + 1 !== p) {
                  y.after = ''
                  y.nodes.push({
                    type: 'space',
                    sourceIndex: _ + 1,
                    sourceEndIndex: p,
                    value: A.slice(_ + 1, p),
                  })
                } else {
                  y.after = A.slice(_ + 1, p)
                  y.sourceEndIndex = p
                }
              } else {
                y.after = ''
                y.nodes = []
              }
              E = p + 1
              y.sourceEndIndex = y.unclosed ? p : E
              b = A.charCodeAt(E)
              v.push(y)
            } else {
              P += 1
              y.after = ''
              y.sourceEndIndex = E + 1
              v.push(y)
              m.push(y)
              v = y.nodes = []
              V = y
            }
            q = ''
          } else if (t === b && P) {
            E += 1
            b = A.charCodeAt(E)
            V.after = O
            V.sourceEndIndex += O.length
            O = ''
            P -= 1
            m[m.length - 1].sourceEndIndex = E
            m.pop()
            V = m[P]
            v = V.nodes
          } else {
            p = E
            do {
              if (b === o) {
                p += 1
              }
              p += 1
              b = A.charCodeAt(p)
            } while (
              p < k &&
              !(
                b <= 32 ||
                b === a ||
                b === n ||
                b === d ||
                b === u ||
                b === s ||
                b === r ||
                (b === i && V && V.type === 'function' && V.value === 'calc') ||
                (b === s && V.type === 'function' && V.value === 'calc') ||
                (b === t && P)
              )
            )
            y = A.slice(E, p)
            if (r === b) {
              q = y
            } else if (
              (c === y.charCodeAt(0) || l === y.charCodeAt(0)) &&
              f === y.charCodeAt(1) &&
              h.test(y.slice(2))
            ) {
              v.push({
                type: 'unicode-range',
                sourceIndex: E,
                sourceEndIndex: p,
                value: y,
              })
            } else {
              v.push({
                type: 'word',
                sourceIndex: E,
                sourceEndIndex: p,
                value: y,
              })
            }
            E = p
          }
        }
        for (E = m.length - 1; E; E -= 1) {
          m[E].unclosed = true
          m[E].sourceEndIndex = A.length
        }
        return m[0].nodes
      }
    },
    256: (e) => {
      function stringifyNode(e, r) {
        var t = e.type
        var a = e.value
        var n
        var o
        if (r && (o = r(e)) !== undefined) {
          return o
        } else if (t === 'word' || t === 'space') {
          return a
        } else if (t === 'string') {
          n = e.quote || ''
          return n + a + (e.unclosed ? '' : n)
        } else if (t === 'comment') {
          return '/*' + a + (e.unclosed ? '' : '*/')
        } else if (t === 'div') {
          return (e.before || '') + a + (e.after || '')
        } else if (Array.isArray(e.nodes)) {
          n = stringify(e.nodes, r)
          if (t !== 'function') {
            return n
          }
          return (
            a +
            '(' +
            (e.before || '') +
            n +
            (e.after || '') +
            (e.unclosed ? '' : ')')
          )
        }
        return a
      }
      function stringify(e, r) {
        var t, a
        if (Array.isArray(e)) {
          t = ''
          for (a = e.length - 1; ~a; a -= 1) {
            t = stringifyNode(e[a], r) + t
          }
          return t
        }
        return stringifyNode(e, r)
      }
      e.exports = stringify
    },
    68: (e) => {
      var r = '-'.charCodeAt(0)
      var t = '+'.charCodeAt(0)
      var a = '.'.charCodeAt(0)
      var n = 'e'.charCodeAt(0)
      var o = 'E'.charCodeAt(0)
      function likeNumber(e) {
        var n = e.charCodeAt(0)
        var o
        if (n === t || n === r) {
          o = e.charCodeAt(1)
          if (o >= 48 && o <= 57) {
            return true
          }
          var s = e.charCodeAt(2)
          if (o === a && s >= 48 && s <= 57) {
            return true
          }
          return false
        }
        if (n === a) {
          o = e.charCodeAt(1)
          if (o >= 48 && o <= 57) {
            return true
          }
          return false
        }
        if (n >= 48 && n <= 57) {
          return true
        }
        return false
      }
      e.exports = function (e) {
        var s = 0
        var d = e.length
        var u
        var i
        var c
        if (d === 0 || !likeNumber(e)) {
          return false
        }
        u = e.charCodeAt(s)
        if (u === t || u === r) {
          s++
        }
        while (s < d) {
          u = e.charCodeAt(s)
          if (u < 48 || u > 57) {
            break
          }
          s += 1
        }
        u = e.charCodeAt(s)
        i = e.charCodeAt(s + 1)
        if (u === a && i >= 48 && i <= 57) {
          s += 2
          while (s < d) {
            u = e.charCodeAt(s)
            if (u < 48 || u > 57) {
              break
            }
            s += 1
          }
        }
        u = e.charCodeAt(s)
        i = e.charCodeAt(s + 1)
        c = e.charCodeAt(s + 2)
        if (
          (u === n || u === o) &&
          ((i >= 48 && i <= 57) || ((i === t || i === r) && c >= 48 && c <= 57))
        ) {
          s += i === t || i === r ? 3 : 2
          while (s < d) {
            u = e.charCodeAt(s)
            if (u < 48 || u > 57) {
              break
            }
            s += 1
          }
        }
        return { number: e.slice(0, s), unit: e.slice(s) }
      }
    },
    961: (e) => {
      e.exports = function walk(e, r, t) {
        var a, n, o, s
        for (a = 0, n = e.length; a < n; a += 1) {
          o = e[a]
          if (!t) {
            s = r(o, a, e)
          }
          if (s !== false && o.type === 'function' && Array.isArray(o.nodes)) {
            walk(o.nodes, r, t)
          }
          if (t) {
            r(o, a, e)
          }
        }
      }
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var a = r[t]
    if (a !== undefined) {
      return a.exports
    }
    var n = (r[t] = { exports: {} })
    var o = true
    try {
      e[t](n, n.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete r[t]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(697)
  module.exports = t
})()
