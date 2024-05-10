;(function () {
  'use strict'
  var e = {
    815: function (e) {
      function hasOwnProperty(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
      }
      e.exports = function (e, n, t, o) {
        n = n || '&'
        t = t || '='
        var a = {}
        if (typeof e !== 'string' || e.length === 0) {
          return a
        }
        var i = /\+/g
        e = e.split(n)
        var u = 1e3
        if (o && typeof o.maxKeys === 'number') {
          u = o.maxKeys
        }
        var c = e.length
        if (u > 0 && c > u) {
          c = u
        }
        for (var p = 0; p < c; ++p) {
          var f = e[p].replace(i, '%20'),
            s = f.indexOf(t),
            _,
            l,
            y,
            d
          if (s >= 0) {
            _ = f.substr(0, s)
            l = f.substr(s + 1)
          } else {
            _ = f
            l = ''
          }
          y = decodeURIComponent(_)
          d = decodeURIComponent(l)
          if (!hasOwnProperty(a, y)) {
            a[y] = d
          } else if (r(a[y])) {
            a[y].push(d)
          } else {
            a[y] = [a[y], d]
          }
        }
        return a
      }
      var r =
        Array.isArray ||
        function (e) {
          return Object.prototype.toString.call(e) === '[object Array]'
        }
    },
    577: function (e) {
      var stringifyPrimitive = function (e) {
        switch (typeof e) {
          case 'string':
            return e
          case 'boolean':
            return e ? 'true' : 'false'
          case 'number':
            return isFinite(e) ? e : ''
          default:
            return ''
        }
      }
      e.exports = function (e, t, o, a) {
        t = t || '&'
        o = o || '='
        if (e === null) {
          e = undefined
        }
        if (typeof e === 'object') {
          return map(n(e), function (n) {
            var a = encodeURIComponent(stringifyPrimitive(n)) + o
            if (r(e[n])) {
              return map(e[n], function (e) {
                return a + encodeURIComponent(stringifyPrimitive(e))
              }).join(t)
            } else {
              return a + encodeURIComponent(stringifyPrimitive(e[n]))
            }
          }).join(t)
        }
        if (!a) return ''
        return (
          encodeURIComponent(stringifyPrimitive(a)) +
          o +
          encodeURIComponent(stringifyPrimitive(e))
        )
      }
      var r =
        Array.isArray ||
        function (e) {
          return Object.prototype.toString.call(e) === '[object Array]'
        }
      function map(e, r) {
        if (e.map) return e.map(r)
        var n = []
        for (var t = 0; t < e.length; t++) {
          n.push(r(e[t], t))
        }
        return n
      }
      var n =
        Object.keys ||
        function (e) {
          var r = []
          for (var n in e) {
            if (Object.prototype.hasOwnProperty.call(e, n)) r.push(n)
          }
          return r
        }
    },
  }
  var r = {}
  function __nccwpck_require__(n) {
    var t = r[n]
    if (t !== undefined) {
      return t.exports
    }
    var o = (r[n] = { exports: {} })
    var a = true
    try {
      e[n](o, o.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete r[n]
    }
    return o.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = {}
  !(function () {
    var e = n
    e.decode = e.parse = __nccwpck_require__(815)
    e.encode = e.stringify = __nccwpck_require__(577)
  })()
  module.exports = n
})()
