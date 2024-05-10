;(() => {
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var e = {}
  ;(() => {
    var r = e
    r.quote = function (e) {
      return e
        .map(function (e) {
          if (e && typeof e === 'object') {
            return e.op.replace(/(.)/g, '\\$1')
          } else if (/["\s]/.test(e) && !/'/.test(e)) {
            return "'" + e.replace(/(['\\])/g, '\\$1') + "'"
          } else if (/["'\s]/.test(e)) {
            return '"' + e.replace(/(["\\$`!])/g, '\\$1') + '"'
          } else {
            return String(e).replace(
              /([A-Za-z]:)?([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g,
              '$1\\$2'
            )
          }
        })
        .join(' ')
    }
    var t =
      '(?:' +
      [
        '\\|\\|',
        '\\&\\&',
        ';;',
        '\\|\\&',
        '\\<\\(',
        '>>',
        '>\\&',
        '[&;()|<>]',
      ].join('|') +
      ')'
    var n = '|&;()<> \\t'
    var i = '(\\\\[\'"' + n + ']|[^\\s\'"' + n + '])+'
    var a = '"((\\\\"|[^"])*?)"'
    var f = "'((\\\\'|[^'])*?)'"
    var s = ''
    for (var u = 0; u < 4; u++) {
      s += (Math.pow(16, 8) * Math.random()).toString(16)
    }
    r.parse = function (e, r, t) {
      var n = parse(e, r, t)
      if (typeof r !== 'function') return n
      return n.reduce(function (e, r) {
        if (typeof r === 'object') return e.concat(r)
        var t = r.split(RegExp('(' + s + '.*?' + s + ')', 'g'))
        if (t.length === 1) return e.concat(t[0])
        return e.concat(
          t.filter(Boolean).map(function (e) {
            if (RegExp('^' + s).test(e)) {
              return JSON.parse(e.split(s)[1])
            } else return e
          })
        )
      }, [])
    }
    function parse(e, r, n) {
      var u = new RegExp(
        ['(' + t + ')', '(' + i + '|' + a + '|' + f + ')*'].join('|'),
        'g'
      )
      var o = e.match(u).filter(Boolean)
      var l = false
      if (!o) return []
      if (!r) r = {}
      if (!n) n = {}
      return o
        .map(function (e, r) {
          if (l) {
            return
          }
          if (RegExp('^' + t + '$').test(e)) {
            return { op: e }
          }
          var i = "'"
          var a = '"'
          var f = '$'
          var s = n.escape || '\\'
          var u = false
          var c = false
          var p = ''
          var v = false
          for (var g = 0, d = e.length; g < d; g++) {
            var h = e.charAt(g)
            v = v || (!u && (h === '*' || h === '?'))
            if (c) {
              p += h
              c = false
            } else if (u) {
              if (h === u) {
                u = false
              } else if (u == i) {
                p += h
              } else {
                if (h === s) {
                  g += 1
                  h = e.charAt(g)
                  if (h === a || h === s || h === f) {
                    p += h
                  } else {
                    p += s + h
                  }
                } else if (h === f) {
                  p += parseEnvVar()
                } else {
                  p += h
                }
              }
            } else if (h === a || h === i) {
              u = h
            } else if (RegExp('^' + t + '$').test(h)) {
              return { op: e }
            } else if (RegExp('^#$').test(h)) {
              l = true
              if (p.length) {
                return [
                  p,
                  { comment: e.slice(g + 1) + o.slice(r + 1).join(' ') },
                ]
              }
              return [{ comment: e.slice(g + 1) + o.slice(r + 1).join(' ') }]
            } else if (h === s) {
              c = true
            } else if (h === f) {
              p += parseEnvVar()
            } else p += h
          }
          if (v) return { op: 'glob', pattern: p }
          return p
          function parseEnvVar() {
            g += 1
            var r, t
            if (e.charAt(g) === '{') {
              g += 1
              if (e.charAt(g) === '}') {
                throw new Error('Bad substitution: ' + e.substr(g - 2, 3))
              }
              r = e.indexOf('}', g)
              if (r < 0) {
                throw new Error('Bad substitution: ' + e.substr(g))
              }
              t = e.substr(g, r - g)
              g = r
            } else if (/[*@#?$!_\-]/.test(e.charAt(g))) {
              t = e.charAt(g)
              g += 1
            } else {
              r = e.substr(g).match(/[^\w\d_]/)
              if (!r) {
                t = e.substr(g)
                g = e.length
              } else {
                t = e.substr(g, r.index)
                g += r.index - 1
              }
            }
            return getVar(null, '', t)
          }
        })
        .reduce(function (e, r) {
          if (r === undefined) {
            return e
          }
          return e.concat(r)
        }, [])
      function getVar(e, t, n) {
        var i = typeof r === 'function' ? r(n) : r[n]
        if (i === undefined && n != '') i = ''
        else if (i === undefined) i = '$'
        if (typeof i === 'object') {
          return t + s + JSON.stringify(i) + s
        } else return t + i
      }
    }
  })()
  module.exports = e
})()
