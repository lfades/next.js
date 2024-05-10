;(() => {
  var e = {
    375: (e, t, r) => {
      const { Container: s } = r(977)
      class NestedDeclaration extends s {
        constructor(e) {
          super(e)
          this.type = 'decl'
          this.isNested = true
          if (!this.nodes) this.nodes = []
        }
      }
      e.exports = NestedDeclaration
    },
    969: (e, t, r) => {
      let { Input: s } = r(977)
      let i = r(199)
      e.exports = function scssParse(e, t) {
        let r = new s(e, t)
        let n = new i(r)
        n.parse()
        return n.root
      }
    },
    199: (e, t, r) => {
      let { Comment: s } = r(977)
      let i = r(46)
      let n = r(375)
      let l = r(381)
      class ScssParser extends i {
        createTokenizer() {
          this.tokenizer = l(this.input)
        }
        rule(e) {
          let t = false
          let r = 0
          let s = ''
          for (let i of e) {
            if (t) {
              if (i[0] !== 'comment' && i[0] !== '{') {
                s += i[1]
              }
            } else if (i[0] === 'space' && i[1].includes('\n')) {
              break
            } else if (i[0] === '(') {
              r += 1
            } else if (i[0] === ')') {
              r -= 1
            } else if (r === 0 && i[0] === ':') {
              t = true
            }
          }
          if (!t || s.trim() === '' || /^[#:A-Za-z-]/.test(s)) {
            super.rule(e)
          } else {
            e.pop()
            let t = new n()
            this.init(t, e[0][2])
            let r
            for (let t = e.length - 1; t >= 0; t--) {
              if (e[t][0] !== 'space') {
                r = e[t]
                break
              }
            }
            if (r[3]) {
              let e = this.input.fromOffset(r[3])
              t.source.end = { offset: r[3], line: e.line, column: e.col }
            } else {
              let e = this.input.fromOffset(r[2])
              t.source.end = { offset: r[2], line: e.line, column: e.col }
            }
            while (e[0][0] !== 'word') {
              t.raws.before += e.shift()[1]
            }
            if (e[0][2]) {
              let r = this.input.fromOffset(e[0][2])
              t.source.start = { offset: e[0][2], line: r.line, column: r.col }
            }
            t.prop = ''
            while (e.length) {
              let r = e[0][0]
              if (r === ':' || r === 'space' || r === 'comment') {
                break
              }
              t.prop += e.shift()[1]
            }
            t.raws.between = ''
            let s
            while (e.length) {
              s = e.shift()
              if (s[0] === ':') {
                t.raws.between += s[1]
                break
              } else {
                t.raws.between += s[1]
              }
            }
            if (t.prop[0] === '_' || t.prop[0] === '*') {
              t.raws.before += t.prop[0]
              t.prop = t.prop.slice(1)
            }
            t.raws.between += this.spacesAndCommentsFromStart(e)
            this.precheckMissedSemicolon(e)
            for (let r = e.length - 1; r > 0; r--) {
              s = e[r]
              if (s[1] === '!important') {
                t.important = true
                let s = this.stringFrom(e, r)
                s = this.spacesFromEnd(e) + s
                if (s !== ' !important') {
                  t.raws.important = s
                }
                break
              } else if (s[1] === 'important') {
                let s = e.slice(0)
                let i = ''
                for (let e = r; e > 0; e--) {
                  let t = s[e][0]
                  if (i.trim().indexOf('!') === 0 && t !== 'space') {
                    break
                  }
                  i = s.pop()[1] + i
                }
                if (i.trim().indexOf('!') === 0) {
                  t.important = true
                  t.raws.important = i
                  e = s
                }
              }
              if (s[0] !== 'space' && s[0] !== 'comment') {
                break
              }
            }
            this.raw(t, 'value', e)
            if (t.value.includes(':')) {
              this.checkMissedSemicolon(e)
            }
            this.current = t
          }
        }
        comment(e) {
          if (e[4] === 'inline') {
            let t = new s()
            this.init(t, e[2])
            t.raws.inline = true
            let r = this.input.fromOffset(e[3])
            t.source.end = { offset: e[3], line: r.line, column: r.col }
            let i = e[1].slice(2)
            if (/^\s*$/.test(i)) {
              t.text = ''
              t.raws.left = i
              t.raws.right = ''
            } else {
              let e = i.match(/^(\s*)([^]*\S)(\s*)$/)
              let r = e[2].replace(/(\*\/|\/\*)/g, '*//*')
              t.text = r
              t.raws.left = e[1]
              t.raws.right = e[3]
              t.raws.text = e[2]
            }
          } else {
            super.comment(e)
          }
        }
        atrule(e) {
          let t = e[1]
          let r = e
          while (!this.tokenizer.endOfFile()) {
            let e = this.tokenizer.nextToken()
            if (e[0] === 'word' && e[2] === r[3] + 1) {
              t += e[1]
              r = e
            } else {
              this.tokenizer.back(e)
              break
            }
          }
          super.atrule(['at-word', t, e[2], r[3]])
        }
        raw(e, t, r) {
          super.raw(e, t, r)
          if (e.raws[t]) {
            let s = e.raws[t].raw
            e.raws[t].raw = r.reduce((e, t) => {
              if (t[0] === 'comment' && t[4] === 'inline') {
                let r = t[1].slice(2).replace(/(\*\/|\/\*)/g, '*//*')
                return e + '/*' + r + '*/'
              } else {
                return e + t[1]
              }
            }, '')
            if (s !== e.raws[t].raw) {
              e.raws[t].scss = s
            }
          }
        }
      }
      e.exports = ScssParser
    },
    184: (e, t, r) => {
      let s = r(534)
      class ScssStringifier extends s {
        comment(e) {
          let t = this.raw(e, 'left', 'commentLeft')
          let r = this.raw(e, 'right', 'commentRight')
          if (e.raws.inline) {
            let s = e.raws.text || e.text
            this.builder('//' + t + s + r, e)
          } else {
            this.builder('/*' + t + e.text + r + '*/', e)
          }
        }
        decl(e, t) {
          if (!e.isNested) {
            super.decl(e, t)
          } else {
            let t = this.raw(e, 'between', 'colon')
            let r = e.prop + t + this.rawValue(e, 'value')
            if (e.important) {
              r += e.raws.important || ' !important'
            }
            this.builder(r + '{', e, 'start')
            let s
            if (e.nodes && e.nodes.length) {
              this.body(e)
              s = this.raw(e, 'after')
            } else {
              s = this.raw(e, 'after', 'emptyBody')
            }
            if (s) this.builder(s)
            this.builder('}', e, 'end')
          }
        }
        rawValue(e, t) {
          let r = e[t]
          let s = e.raws[t]
          if (s && s.value === r) {
            return s.scss ? s.scss : s.raw
          } else {
            return r
          }
        }
      }
      e.exports = ScssStringifier
    },
    760: (e, t, r) => {
      let s = r(184)
      e.exports = function scssStringify(e, t) {
        let r = new s(t)
        r.stringify(e)
      }
    },
    402: (e, t, r) => {
      let s = r(760)
      let i = r(969)
      e.exports = { parse: i, stringify: s }
    },
    381: (e) => {
      'use strict'
      const t = "'".charCodeAt(0)
      const r = '"'.charCodeAt(0)
      const s = '\\'.charCodeAt(0)
      const i = '/'.charCodeAt(0)
      const n = '\n'.charCodeAt(0)
      const l = ' '.charCodeAt(0)
      const a = '\f'.charCodeAt(0)
      const o = '\t'.charCodeAt(0)
      const f = '\r'.charCodeAt(0)
      const c = '['.charCodeAt(0)
      const d = ']'.charCodeAt(0)
      const u = '('.charCodeAt(0)
      const h = ')'.charCodeAt(0)
      const w = '{'.charCodeAt(0)
      const p = '}'.charCodeAt(0)
      const m = ';'.charCodeAt(0)
      const b = '*'.charCodeAt(0)
      const g = ':'.charCodeAt(0)
      const k = '@'.charCodeAt(0)
      const C = ','.charCodeAt(0)
      const y = '#'.charCodeAt(0)
      const x = /[\t\n\f\r "#'()/;[\\\]{}]/g
      const A = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
      const _ = /.[\n"'(/\\]/
      const S = /[\da-f]/i
      const O = /[\n\f\r]/g
      e.exports = function scssTokenize(e, v = {}) {
        let I = e.css.valueOf()
        let z = v.ignoreErrors
        let B, D, q, F, R
        let T, N, V, $
        let E = I.length
        let P = 0
        let U = []
        let L = []
        let M
        function position() {
          return P
        }
        function unclosed(t) {
          throw e.error('Unclosed ' + t, P)
        }
        function endOfFile() {
          return L.length === 0 && P >= E
        }
        function interpolation() {
          let e = 1
          let i = false
          let n = false
          while (e > 0) {
            D += 1
            if (I.length <= D) unclosed('interpolation')
            B = I.charCodeAt(D)
            V = I.charCodeAt(D + 1)
            if (i) {
              if (!n && B === i) {
                i = false
                n = false
              } else if (B === s) {
                n = !n
              } else if (n) {
                n = false
              }
            } else if (B === t || B === r) {
              i = B
            } else if (B === p) {
              e -= 1
            } else if (B === y && V === w) {
              e += 1
            }
          }
        }
        function nextToken(e) {
          if (L.length) return L.pop()
          if (P >= E) return
          let v = e ? e.ignoreUnclosed : false
          B = I.charCodeAt(P)
          switch (B) {
            case n:
            case l:
            case o:
            case f:
            case a: {
              D = P
              do {
                D += 1
                B = I.charCodeAt(D)
              } while (B === l || B === n || B === o || B === f || B === a)
              $ = ['space', I.slice(P, D)]
              P = D - 1
              break
            }
            case c:
            case d:
            case w:
            case p:
            case g:
            case m:
            case h: {
              let e = String.fromCharCode(B)
              $ = [e, e, P]
              break
            }
            case C: {
              $ = ['word', ',', P, P + 1]
              break
            }
            case u: {
              N = U.length ? U.pop()[1] : ''
              V = I.charCodeAt(P + 1)
              if (N === 'url' && V !== t && V !== r) {
                M = 1
                T = false
                D = P + 1
                while (D <= I.length - 1) {
                  V = I.charCodeAt(D)
                  if (V === s) {
                    T = !T
                  } else if (V === u) {
                    M += 1
                  } else if (V === h) {
                    M -= 1
                    if (M === 0) break
                  }
                  D += 1
                }
                F = I.slice(P, D + 1)
                $ = ['brackets', F, P, D]
                P = D
              } else {
                D = I.indexOf(')', P + 1)
                F = I.slice(P, D + 1)
                if (D === -1 || _.test(F)) {
                  $ = ['(', '(', P]
                } else {
                  $ = ['brackets', F, P, D]
                  P = D
                }
              }
              break
            }
            case t:
            case r: {
              q = B
              D = P
              T = false
              while (D < E) {
                D++
                if (D === E) unclosed('string')
                B = I.charCodeAt(D)
                V = I.charCodeAt(D + 1)
                if (!T && B === q) {
                  break
                } else if (B === s) {
                  T = !T
                } else if (T) {
                  T = false
                } else if (B === y && V === w) {
                  interpolation()
                }
              }
              $ = ['string', I.slice(P, D + 1), P, D]
              P = D
              break
            }
            case k: {
              x.lastIndex = P + 1
              x.test(I)
              if (x.lastIndex === 0) {
                D = I.length - 1
              } else {
                D = x.lastIndex - 2
              }
              $ = ['at-word', I.slice(P, D + 1), P, D]
              P = D
              break
            }
            case s: {
              D = P
              R = true
              while (I.charCodeAt(D + 1) === s) {
                D += 1
                R = !R
              }
              B = I.charCodeAt(D + 1)
              if (
                R &&
                B !== i &&
                B !== l &&
                B !== n &&
                B !== o &&
                B !== f &&
                B !== a
              ) {
                D += 1
                if (S.test(I.charAt(D))) {
                  while (S.test(I.charAt(D + 1))) {
                    D += 1
                  }
                  if (I.charCodeAt(D + 1) === l) {
                    D += 1
                  }
                }
              }
              $ = ['word', I.slice(P, D + 1), P, D]
              P = D
              break
            }
            default:
              V = I.charCodeAt(P + 1)
              if (B === y && V === w) {
                D = P
                interpolation()
                F = I.slice(P, D + 1)
                $ = ['word', F, P, D]
                P = D
              } else if (B === i && V === b) {
                D = I.indexOf('*/', P + 2) + 1
                if (D === 0) {
                  if (z || v) {
                    D = I.length
                  } else {
                    unclosed('comment')
                  }
                }
                $ = ['comment', I.slice(P, D + 1), P, D]
                P = D
              } else if (B === i && V === i) {
                O.lastIndex = P + 1
                O.test(I)
                if (O.lastIndex === 0) {
                  D = I.length - 1
                } else {
                  D = O.lastIndex - 2
                }
                F = I.slice(P, D + 1)
                $ = ['comment', F, P, D, 'inline']
                P = D
              } else {
                A.lastIndex = P + 1
                A.test(I)
                if (A.lastIndex === 0) {
                  D = I.length - 1
                } else {
                  D = A.lastIndex - 2
                }
                $ = ['word', I.slice(P, D + 1), P, D]
                U.push($)
                P = D
              }
              break
          }
          P++
          return $
        }
        function back(e) {
          L.push(e)
        }
        return {
          back: back,
          nextToken: nextToken,
          endOfFile: endOfFile,
          position: position,
        }
      }
    },
    534: (e) => {
      'use strict'
      const t = {
        after: '\n',
        beforeClose: '\n',
        beforeComment: '\n',
        beforeDecl: '\n',
        beforeOpen: ' ',
        beforeRule: '\n',
        colon: ': ',
        commentLeft: ' ',
        commentRight: ' ',
        emptyBody: '',
        indent: '    ',
        semicolon: false,
      }
      function capitalize(e) {
        return e[0].toUpperCase() + e.slice(1)
      }
      class Stringifier {
        constructor(e) {
          this.builder = e
        }
        atrule(e, t) {
          let r = '@' + e.name
          let s = e.params ? this.rawValue(e, 'params') : ''
          if (typeof e.raws.afterName !== 'undefined') {
            r += e.raws.afterName
          } else if (s) {
            r += ' '
          }
          if (e.nodes) {
            this.block(e, r + s)
          } else {
            let i = (e.raws.between || '') + (t ? ';' : '')
            this.builder(r + s + i, e)
          }
        }
        beforeAfter(e, t) {
          let r
          if (e.type === 'decl') {
            r = this.raw(e, null, 'beforeDecl')
          } else if (e.type === 'comment') {
            r = this.raw(e, null, 'beforeComment')
          } else if (t === 'before') {
            r = this.raw(e, null, 'beforeRule')
          } else {
            r = this.raw(e, null, 'beforeClose')
          }
          let s = e.parent
          let i = 0
          while (s && s.type !== 'root') {
            i += 1
            s = s.parent
          }
          if (r.includes('\n')) {
            let t = this.raw(e, null, 'indent')
            if (t.length) {
              for (let e = 0; e < i; e++) r += t
            }
          }
          return r
        }
        block(e, t) {
          let r = this.raw(e, 'between', 'beforeOpen')
          this.builder(t + r + '{', e, 'start')
          let s
          if (e.nodes && e.nodes.length) {
            this.body(e)
            s = this.raw(e, 'after')
          } else {
            s = this.raw(e, 'after', 'emptyBody')
          }
          if (s) this.builder(s)
          this.builder('}', e, 'end')
        }
        body(e) {
          let t = e.nodes.length - 1
          while (t > 0) {
            if (e.nodes[t].type !== 'comment') break
            t -= 1
          }
          let r = this.raw(e, 'semicolon')
          for (let s = 0; s < e.nodes.length; s++) {
            let i = e.nodes[s]
            let n = this.raw(i, 'before')
            if (n) this.builder(n)
            this.stringify(i, t !== s || r)
          }
        }
        comment(e) {
          let t = this.raw(e, 'left', 'commentLeft')
          let r = this.raw(e, 'right', 'commentRight')
          this.builder('/*' + t + e.text + r + '*/', e)
        }
        decl(e, t) {
          let r = this.raw(e, 'between', 'colon')
          let s = e.prop + r + this.rawValue(e, 'value')
          if (e.important) {
            s += e.raws.important || ' !important'
          }
          if (t) s += ';'
          this.builder(s, e)
        }
        document(e) {
          this.body(e)
        }
        raw(e, r, s) {
          let i
          if (!s) s = r
          if (r) {
            i = e.raws[r]
            if (typeof i !== 'undefined') return i
          }
          let n = e.parent
          if (s === 'before') {
            if (!n || (n.type === 'root' && n.first === e)) {
              return ''
            }
            if (n && n.type === 'document') {
              return ''
            }
          }
          if (!n) return t[s]
          let l = e.root()
          if (!l.rawCache) l.rawCache = {}
          if (typeof l.rawCache[s] !== 'undefined') {
            return l.rawCache[s]
          }
          if (s === 'before' || s === 'after') {
            return this.beforeAfter(e, s)
          } else {
            let t = 'raw' + capitalize(s)
            if (this[t]) {
              i = this[t](l, e)
            } else {
              l.walk((e) => {
                i = e.raws[r]
                if (typeof i !== 'undefined') return false
              })
            }
          }
          if (typeof i === 'undefined') i = t[s]
          l.rawCache[s] = i
          return i
        }
        rawBeforeClose(e) {
          let t
          e.walk((e) => {
            if (e.nodes && e.nodes.length > 0) {
              if (typeof e.raws.after !== 'undefined') {
                t = e.raws.after
                if (t.includes('\n')) {
                  t = t.replace(/[^\n]+$/, '')
                }
                return false
              }
            }
          })
          if (t) t = t.replace(/\S/g, '')
          return t
        }
        rawBeforeComment(e, t) {
          let r
          e.walkComments((e) => {
            if (typeof e.raws.before !== 'undefined') {
              r = e.raws.before
              if (r.includes('\n')) {
                r = r.replace(/[^\n]+$/, '')
              }
              return false
            }
          })
          if (typeof r === 'undefined') {
            r = this.raw(t, null, 'beforeDecl')
          } else if (r) {
            r = r.replace(/\S/g, '')
          }
          return r
        }
        rawBeforeDecl(e, t) {
          let r
          e.walkDecls((e) => {
            if (typeof e.raws.before !== 'undefined') {
              r = e.raws.before
              if (r.includes('\n')) {
                r = r.replace(/[^\n]+$/, '')
              }
              return false
            }
          })
          if (typeof r === 'undefined') {
            r = this.raw(t, null, 'beforeRule')
          } else if (r) {
            r = r.replace(/\S/g, '')
          }
          return r
        }
        rawBeforeOpen(e) {
          let t
          e.walk((e) => {
            if (e.type !== 'decl') {
              t = e.raws.between
              if (typeof t !== 'undefined') return false
            }
          })
          return t
        }
        rawBeforeRule(e) {
          let t
          e.walk((r) => {
            if (r.nodes && (r.parent !== e || e.first !== r)) {
              if (typeof r.raws.before !== 'undefined') {
                t = r.raws.before
                if (t.includes('\n')) {
                  t = t.replace(/[^\n]+$/, '')
                }
                return false
              }
            }
          })
          if (t) t = t.replace(/\S/g, '')
          return t
        }
        rawColon(e) {
          let t
          e.walkDecls((e) => {
            if (typeof e.raws.between !== 'undefined') {
              t = e.raws.between.replace(/[^\s:]/g, '')
              return false
            }
          })
          return t
        }
        rawEmptyBody(e) {
          let t
          e.walk((e) => {
            if (e.nodes && e.nodes.length === 0) {
              t = e.raws.after
              if (typeof t !== 'undefined') return false
            }
          })
          return t
        }
        rawIndent(e) {
          if (e.raws.indent) return e.raws.indent
          let t
          e.walk((r) => {
            let s = r.parent
            if (s && s !== e && s.parent && s.parent === e) {
              if (typeof r.raws.before !== 'undefined') {
                let e = r.raws.before.split('\n')
                t = e[e.length - 1]
                t = t.replace(/\S/g, '')
                return false
              }
            }
          })
          return t
        }
        rawSemicolon(e) {
          let t
          e.walk((e) => {
            if (e.nodes && e.nodes.length && e.last.type === 'decl') {
              t = e.raws.semicolon
              if (typeof t !== 'undefined') return false
            }
          })
          return t
        }
        rawValue(e, t) {
          let r = e[t]
          let s = e.raws[t]
          if (s && s.value === r) {
            return s.raw
          }
          return r
        }
        root(e) {
          this.body(e)
          if (e.raws.after) this.builder(e.raws.after)
        }
        rule(e) {
          this.block(e, this.rawValue(e, 'selector'))
          if (e.raws.ownSemicolon) {
            this.builder(e.raws.ownSemicolon, e, 'end')
          }
        }
        stringify(e, t) {
          if (!this[e.type]) {
            throw new Error(
              'Unknown AST node type ' +
                e.type +
                '. ' +
                'Maybe you need to change PostCSS stringifier.'
            )
          }
          this[e.type](e, t)
        }
      }
      e.exports = Stringifier
      Stringifier.default = Stringifier
    },
    977: (e) => {
      'use strict'
      e.exports = require('postcss')
    },
    46: (e) => {
      'use strict'
      e.exports = require('postcss/lib/parser')
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    var s = t[r]
    if (s !== undefined) {
      return s.exports
    }
    var i = (t[r] = { exports: {} })
    var n = true
    try {
      e[r](i, i.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete t[r]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var r = __nccwpck_require__(402)
  module.exports = r
})()
