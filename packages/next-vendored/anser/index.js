;(() => {
  'use strict'
  var e = {
    211: (e) => {
      var r = (function () {
        function defineProperties(e, r) {
          for (var n = 0; n < r.length; n++) {
            var s = r[n]
            s.enumerable = s.enumerable || false
            s.configurable = true
            if ('value' in s) s.writable = true
            Object.defineProperty(e, s.key, s)
          }
        }
        return function (e, r, n) {
          if (r) defineProperties(e.prototype, r)
          if (n) defineProperties(e, n)
          return e
        }
      })()
      function _classCallCheck(e, r) {
        if (!(e instanceof r)) {
          throw new TypeError('Cannot call a class as a function')
        }
      }
      var n = [
        [
          { color: '0, 0, 0', class: 'ansi-black' },
          { color: '187, 0, 0', class: 'ansi-red' },
          { color: '0, 187, 0', class: 'ansi-green' },
          { color: '187, 187, 0', class: 'ansi-yellow' },
          { color: '0, 0, 187', class: 'ansi-blue' },
          { color: '187, 0, 187', class: 'ansi-magenta' },
          { color: '0, 187, 187', class: 'ansi-cyan' },
          { color: '255,255,255', class: 'ansi-white' },
        ],
        [
          { color: '85, 85, 85', class: 'ansi-bright-black' },
          { color: '255, 85, 85', class: 'ansi-bright-red' },
          { color: '0, 255, 0', class: 'ansi-bright-green' },
          { color: '255, 255, 85', class: 'ansi-bright-yellow' },
          { color: '85, 85, 255', class: 'ansi-bright-blue' },
          { color: '255, 85, 255', class: 'ansi-bright-magenta' },
          { color: '85, 255, 255', class: 'ansi-bright-cyan' },
          { color: '255, 255, 255', class: 'ansi-bright-white' },
        ],
      ]
      var s = (function () {
        r(Anser, null, [
          {
            key: 'escapeForHtml',
            value: function escapeForHtml(e) {
              return new Anser().escapeForHtml(e)
            },
          },
          {
            key: 'linkify',
            value: function linkify(e) {
              return new Anser().linkify(e)
            },
          },
          {
            key: 'ansiToHtml',
            value: function ansiToHtml(e, r) {
              return new Anser().ansiToHtml(e, r)
            },
          },
          {
            key: 'ansiToJson',
            value: function ansiToJson(e, r) {
              return new Anser().ansiToJson(e, r)
            },
          },
          {
            key: 'ansiToText',
            value: function ansiToText(e) {
              return new Anser().ansiToText(e)
            },
          },
        ])
        function Anser() {
          _classCallCheck(this, Anser)
          this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null
          this.bright = 0
        }
        r(Anser, [
          {
            key: 'setupPalette',
            value: function setupPalette() {
              this.PALETTE_COLORS = []
              for (var e = 0; e < 2; ++e) {
                for (var r = 0; r < 8; ++r) {
                  this.PALETTE_COLORS.push(n[e][r].color)
                }
              }
              var s = [0, 95, 135, 175, 215, 255]
              var i = function format(e, r, n) {
                return s[e] + ', ' + s[r] + ', ' + s[n]
              }
              var t = void 0,
                o = void 0,
                a = void 0
              for (var l = 0; l < 6; ++l) {
                for (var c = 0; c < 6; ++c) {
                  for (var u = 0; u < 6; ++u) {
                    this.PALETTE_COLORS.push(i(l, c, u))
                  }
                }
              }
              var f = 8
              for (var h = 0; h < 24; ++h, f += 10) {
                this.PALETTE_COLORS.push(i(f, f, f))
              }
            },
          },
          {
            key: 'escapeForHtml',
            value: function escapeForHtml(e) {
              return e.replace(/[&<>]/gm, function (e) {
                return e == '&'
                  ? '&amp;'
                  : e == '<'
                  ? '&lt;'
                  : e == '>'
                  ? '&gt;'
                  : ''
              })
            },
          },
          {
            key: 'linkify',
            value: function linkify(e) {
              return e.replace(/(https?:\/\/[^\s]+)/gm, function (e) {
                return '<a href="' + e + '">' + e + '</a>'
              })
            },
          },
          {
            key: 'ansiToHtml',
            value: function ansiToHtml(e, r) {
              return this.process(e, r, true)
            },
          },
          {
            key: 'ansiToJson',
            value: function ansiToJson(e, r) {
              r = r || {}
              r.json = true
              r.clearLine = false
              return this.process(e, r, true)
            },
          },
          {
            key: 'ansiToText',
            value: function ansiToText(e) {
              return this.process(e, {}, false)
            },
          },
          {
            key: 'process',
            value: function process(e, r, n) {
              var s = this
              var i = this
              var t = e.split(/\033\[/)
              var o = t.shift()
              if (r === undefined || r === null) {
                r = {}
              }
              r.clearLine = /\r/.test(e)
              var a = t.map(function (e) {
                return s.processChunk(e, r, n)
              })
              if (r && r.json) {
                var l = i.processChunkJson('')
                l.content = o
                l.clearLine = r.clearLine
                a.unshift(l)
                if (r.remove_empty) {
                  a = a.filter(function (e) {
                    return !e.isEmpty()
                  })
                }
                return a
              } else {
                a.unshift(o)
              }
              return a.join('')
            },
          },
          {
            key: 'processChunkJson',
            value: function processChunkJson(e, r, s) {
              r = typeof r == 'undefined' ? {} : r
              var i = (r.use_classes =
                typeof r.use_classes != 'undefined' && r.use_classes)
              var t = (r.key = i ? 'class' : 'color')
              var o = {
                content: e,
                fg: null,
                bg: null,
                fg_truecolor: null,
                bg_truecolor: null,
                clearLine: r.clearLine,
                decoration: null,
                was_processed: false,
                isEmpty: function isEmpty() {
                  return !o.content
                },
              }
              var a = e.match(
                /^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m
              )
              if (!a) return o
              var l = (o.content = a[4])
              var c = a[2].split(';')
              if (a[1] !== '' || a[3] !== 'm') {
                return o
              }
              if (!s) {
                return o
              }
              var u = this
              u.decoration = null
              while (c.length > 0) {
                var f = c.shift()
                var h = parseInt(f)
                if (isNaN(h) || h === 0) {
                  u.fg = u.bg = u.decoration = null
                } else if (h === 1) {
                  u.decoration = 'bold'
                } else if (h === 2) {
                  u.decoration = 'dim'
                } else if (h == 3) {
                  u.decoration = 'italic'
                } else if (h == 4) {
                  u.decoration = 'underline'
                } else if (h == 5) {
                  u.decoration = 'blink'
                } else if (h === 7) {
                  u.decoration = 'reverse'
                } else if (h === 8) {
                  u.decoration = 'hidden'
                } else if (h === 9) {
                  u.decoration = 'strikethrough'
                } else if (h == 39) {
                  u.fg = null
                } else if (h == 49) {
                  u.bg = null
                } else if (h >= 30 && h < 38) {
                  u.fg = n[0][h % 10][t]
                } else if (h >= 90 && h < 98) {
                  u.fg = n[1][h % 10][t]
                } else if (h >= 40 && h < 48) {
                  u.bg = n[0][h % 10][t]
                } else if (h >= 100 && h < 108) {
                  u.bg = n[1][h % 10][t]
                } else if (h === 38 || h === 48) {
                  var p = h === 38
                  if (c.length >= 1) {
                    var g = c.shift()
                    if (g === '5' && c.length >= 1) {
                      var v = parseInt(c.shift())
                      if (v >= 0 && v <= 255) {
                        if (!i) {
                          if (!this.PALETTE_COLORS) {
                            u.setupPalette()
                          }
                          if (p) {
                            u.fg = this.PALETTE_COLORS[v]
                          } else {
                            u.bg = this.PALETTE_COLORS[v]
                          }
                        } else {
                          var d =
                            v >= 16
                              ? 'ansi-palette-' + v
                              : n[v > 7 ? 1 : 0][v % 8]['class']
                          if (p) {
                            u.fg = d
                          } else {
                            u.bg = d
                          }
                        }
                      }
                    } else if (g === '2' && c.length >= 3) {
                      var _ = parseInt(c.shift())
                      var b = parseInt(c.shift())
                      var y = parseInt(c.shift())
                      if (
                        _ >= 0 &&
                        _ <= 255 &&
                        b >= 0 &&
                        b <= 255 &&
                        y >= 0 &&
                        y <= 255
                      ) {
                        var k = _ + ', ' + b + ', ' + y
                        if (!i) {
                          if (p) {
                            u.fg = k
                          } else {
                            u.bg = k
                          }
                        } else {
                          if (p) {
                            u.fg = 'ansi-truecolor'
                            u.fg_truecolor = k
                          } else {
                            u.bg = 'ansi-truecolor'
                            u.bg_truecolor = k
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (u.fg === null && u.bg === null && u.decoration === null) {
                return o
              } else {
                var T = []
                var m = []
                var w = {}
                o.fg = u.fg
                o.bg = u.bg
                o.fg_truecolor = u.fg_truecolor
                o.bg_truecolor = u.bg_truecolor
                o.decoration = u.decoration
                o.was_processed = true
                return o
              }
            },
          },
          {
            key: 'processChunk',
            value: function processChunk(e, r, n) {
              var s = this
              var i = this
              r = r || {}
              var t = this.processChunkJson(e, r, n)
              if (r.json) {
                return t
              }
              if (t.isEmpty()) {
                return ''
              }
              if (!t.was_processed) {
                return t.content
              }
              var o = r.use_classes
              var a = []
              var l = []
              var c = {}
              var u = function render_data(e) {
                var r = []
                var n = void 0
                for (n in e) {
                  if (e.hasOwnProperty(n)) {
                    r.push('data-' + n + '="' + s.escapeForHtml(e[n]) + '"')
                  }
                }
                return r.length > 0 ? ' ' + r.join(' ') : ''
              }
              if (t.fg) {
                if (o) {
                  l.push(t.fg + '-fg')
                  if (t.fg_truecolor !== null) {
                    c['ansi-truecolor-fg'] = t.fg_truecolor
                    t.fg_truecolor = null
                  }
                } else {
                  a.push('color:rgb(' + t.fg + ')')
                }
              }
              if (t.bg) {
                if (o) {
                  l.push(t.bg + '-bg')
                  if (t.bg_truecolor !== null) {
                    c['ansi-truecolor-bg'] = t.bg_truecolor
                    t.bg_truecolor = null
                  }
                } else {
                  a.push('background-color:rgb(' + t.bg + ')')
                }
              }
              if (t.decoration) {
                if (o) {
                  l.push('ansi-' + t.decoration)
                } else if (t.decoration === 'bold') {
                  a.push('font-weight:bold')
                } else if (t.decoration === 'dim') {
                  a.push('opacity:0.5')
                } else if (t.decoration === 'italic') {
                  a.push('font-style:italic')
                } else if (t.decoration === 'reverse') {
                  a.push('filter:invert(100%)')
                } else if (t.decoration === 'hidden') {
                  a.push('visibility:hidden')
                } else if (t.decoration === 'strikethrough') {
                  a.push('text-decoration:line-through')
                } else {
                  a.push('text-decoration:' + t.decoration)
                }
              }
              if (o) {
                return (
                  '<span class="' +
                  l.join(' ') +
                  '"' +
                  u(c) +
                  '>' +
                  t.content +
                  '</span>'
                )
              } else {
                return (
                  '<span style="' +
                  a.join(';') +
                  '"' +
                  u(c) +
                  '>' +
                  t.content +
                  '</span>'
                )
              }
            },
          },
        ])
        return Anser
      })()
      e.exports = s
    },
  }
  var r = {}
  function __nccwpck_require__(n) {
    var s = r[n]
    if (s !== undefined) {
      return s.exports
    }
    var i = (r[n] = { exports: {} })
    var t = true
    try {
      e[n](i, i.exports, __nccwpck_require__)
      t = false
    } finally {
      if (t) delete r[n]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = __nccwpck_require__(211)
  module.exports = n
})()
