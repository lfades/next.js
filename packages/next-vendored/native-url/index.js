;(function () {
  var e = {
    452: function (e) {
      'use strict'
      e.exports = require('next/dist/compiled/querystring-es3')
    },
  }
  var t = {}
  function __nccwpck_require__(o) {
    var a = t[o]
    if (a !== undefined) {
      return a.exports
    }
    var s = (t[o] = { exports: {} })
    var n = true
    try {
      e[o](s, s.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete t[o]
    }
    return s.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var o = {}
  !(function () {
    var e = o
    var t,
      a =
        (t = __nccwpck_require__(452)) && 'object' == typeof t && 'default' in t
          ? t.default
          : t,
      s = /https?|ftp|gopher|file/
    function r(e) {
      'string' == typeof e && (e = d(e))
      var t = (function (e, t, o) {
        var a = e.auth,
          s = e.hostname,
          n = e.protocol || '',
          p = e.pathname || '',
          c = e.hash || '',
          i = e.query || '',
          u = !1
        ;(a = a ? encodeURIComponent(a).replace(/%3A/i, ':') + '@' : ''),
          e.host
            ? (u = a + e.host)
            : s &&
              ((u = a + (~s.indexOf(':') ? '[' + s + ']' : s)),
              e.port && (u += ':' + e.port)),
          i && 'object' == typeof i && (i = t.encode(i))
        var f = e.search || (i && '?' + i) || ''
        return (
          n && ':' !== n.substr(-1) && (n += ':'),
          e.slashes || ((!n || o.test(n)) && !1 !== u)
            ? ((u = '//' + (u || '')), p && '/' !== p[0] && (p = '/' + p))
            : u || (u = ''),
          c && '#' !== c[0] && (c = '#' + c),
          f && '?' !== f[0] && (f = '?' + f),
          {
            protocol: n,
            host: u,
            pathname: (p = p.replace(/[?#]/g, encodeURIComponent)),
            search: (f = f.replace('#', '%23')),
            hash: c,
          }
        )
      })(e, a, s)
      return '' + t.protocol + t.host + t.pathname + t.search + t.hash
    }
    var n = 'http://',
      p = 'w.w',
      c = n + p,
      i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
      u = /https?|ftp|gopher|file/
    function h(e, t) {
      var o = 'string' == typeof e ? d(e) : e
      e = 'object' == typeof e ? r(e) : e
      var a = d(t),
        s = ''
      o.protocol &&
        !o.slashes &&
        ((s = o.protocol),
        (e = e.replace(o.protocol, '')),
        (s += '/' === t[0] || '/' === e[0] ? '/' : '')),
        s &&
          a.protocol &&
          ((s = ''),
          a.slashes || ((s = a.protocol), (t = t.replace(a.protocol, ''))))
      var p = e.match(i)
      p &&
        !a.protocol &&
        ((e = e.substr((s = p[1] + (p[2] || '')).length)),
        /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)))
      var f = new URL(e, c + '/'),
        m = new URL(t, f).toString().replace(c, ''),
        v = a.protocol || o.protocol
      return (
        (v += o.slashes || a.slashes ? '//' : ''),
        !s && v ? (m = m.replace(n, v)) : s && (m = m.replace(n, '')),
        u.test(m) ||
          ~t.indexOf('.') ||
          '/' === e.slice(-1) ||
          '/' === t.slice(-1) ||
          '/' !== m.slice(-1) ||
          (m = m.slice(0, -1)),
        s && (m = s + ('/' === m[0] ? m.substr(1) : m)),
        m
      )
    }
    function l() {}
    ;(l.prototype.parse = d),
      (l.prototype.format = r),
      (l.prototype.resolve = h),
      (l.prototype.resolveObject = h)
    var f = /^https?|ftp|gopher|file/,
      m = /^(.*?)([#?].*)/,
      v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
      _ = /^([a-z0-9.+-]*:)?\/\/\/*/i,
      b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i
    function d(e, t, o) {
      if (
        (void 0 === t && (t = !1),
        void 0 === o && (o = !1),
        e && 'object' == typeof e && e instanceof l)
      )
        return e
      var s = (e = e.trim()).match(m)
      ;(e = s ? s[1].replace(/\\/g, '/') + s[2] : e.replace(/\\/g, '/')),
        b.test(e) && '/' !== e.slice(-1) && (e += '/')
      var n = !/(^javascript)/.test(e) && e.match(v),
        i = _.test(e),
        u = ''
      n &&
        (f.test(n[1]) || ((u = n[1].toLowerCase()), (e = '' + n[2] + n[3])),
        n[2] ||
          ((i = !1),
          f.test(n[1]) ? ((u = n[1]), (e = '' + n[3])) : (e = '//' + n[3])),
        (3 !== n[2].length && 1 !== n[2].length) ||
          ((u = n[1]), (e = '/' + n[3])))
      var g,
        y = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
        w = y && y[1],
        x = new l(),
        C = '',
        U = ''
      try {
        g = new URL(e)
      } catch (t) {
        ;(C = t),
          u ||
            o ||
            !/^\/\//.test(e) ||
            /^\/\/.+[@.]/.test(e) ||
            ((U = '/'), (e = e.substr(1)))
        try {
          g = new URL(e, c)
        } catch (e) {
          return (x.protocol = u), (x.href = u), x
        }
      }
      ;(x.slashes = i && !U),
        (x.host = g.host === p ? '' : g.host),
        (x.hostname =
          g.hostname === p ? '' : g.hostname.replace(/(\[|\])/g, '')),
        (x.protocol = C ? u || null : g.protocol),
        (x.search = g.search.replace(/\\/g, '%5C')),
        (x.hash = g.hash.replace(/\\/g, '%5C'))
      var j = e.split('#')
      !x.search && ~j[0].indexOf('?') && (x.search = '?'),
        x.hash || '' !== j[1] || (x.hash = '#'),
        (x.query = t ? a.decode(g.search.substr(1)) : x.search.substr(1)),
        (x.pathname =
          U +
          (n
            ? (function (e) {
                return e
                  .replace(/['^|`]/g, function (e) {
                    return '%' + e.charCodeAt().toString(16).toUpperCase()
                  })
                  .replace(/((?:%[0-9A-F]{2})+)/g, function (e, t) {
                    try {
                      return decodeURIComponent(t)
                        .split('')
                        .map(function (e) {
                          var t = e.charCodeAt()
                          return t > 256 || /^[a-z0-9]$/i.test(e)
                            ? e
                            : '%' + t.toString(16).toUpperCase()
                        })
                        .join('')
                    } catch (e) {
                      return t
                    }
                  })
              })(g.pathname)
            : g.pathname)),
        'about:' === x.protocol &&
          'blank' === x.pathname &&
          ((x.protocol = ''), (x.pathname = '')),
        C && '/' !== e[0] && (x.pathname = x.pathname.substr(1)),
        u &&
          !f.test(u) &&
          '/' !== e.slice(-1) &&
          '/' === x.pathname &&
          (x.pathname = ''),
        (x.path = x.pathname + x.search),
        (x.auth = [g.username, g.password]
          .map(decodeURIComponent)
          .filter(Boolean)
          .join(':')),
        (x.port = g.port),
        w && !x.host.endsWith(w) && ((x.host += w), (x.port = w.slice(1))),
        (x.href = U ? '' + x.pathname + x.search + x.hash : r(x))
      var q = /^(file)/.test(x.href) ? ['host', 'hostname'] : []
      return (
        Object.keys(x).forEach(function (e) {
          ~q.indexOf(e) || (x[e] = x[e] || null)
        }),
        x
      )
    }
    ;(e.parse = d),
      (e.format = r),
      (e.resolve = h),
      (e.resolveObject = function (e, t) {
        return d(h(e, t))
      }),
      (e.Url = l)
  })()
  module.exports = o
})()
