;(() => {
  var e = {
    306: (e, t, r) => {
      let s = r(224)
      let i =
        !('NO_COLOR' in process.env || process.argv.includes('--no-color')) &&
        ('FORCE_COLOR' in process.env ||
          process.argv.includes('--color') ||
          process.platform === 'win32' ||
          (s.isatty(1) && process.env.TERM !== 'dumb') ||
          'CI' in process.env)
      let formatter =
        (e, t, r = e) =>
        (s) => {
          let i = '' + s
          let n = i.indexOf(t, e.length)
          return ~n ? e + replaceClose(i, t, r, n) + t : e + i + t
        }
      let replaceClose = (e, t, r, s) => {
        let i = e.substring(0, s) + r
        let n = e.substring(s + t.length)
        let o = n.indexOf(t)
        return ~o ? i + replaceClose(n, t, r, o) : i + n
      }
      let createColors = (e = i) => ({
        isColorSupported: e,
        reset: e ? (e) => `[0m${e}[0m` : String,
        bold: e ? formatter('[1m', '[22m', '[22m[1m') : String,
        dim: e ? formatter('[2m', '[22m', '[22m[2m') : String,
        italic: e ? formatter('[3m', '[23m') : String,
        underline: e ? formatter('[4m', '[24m') : String,
        inverse: e ? formatter('[7m', '[27m') : String,
        hidden: e ? formatter('[8m', '[28m') : String,
        strikethrough: e ? formatter('[9m', '[29m') : String,
        black: e ? formatter('[30m', '[39m') : String,
        red: e ? formatter('[31m', '[39m') : String,
        green: e ? formatter('[32m', '[39m') : String,
        yellow: e ? formatter('[33m', '[39m') : String,
        blue: e ? formatter('[34m', '[39m') : String,
        magenta: e ? formatter('[35m', '[39m') : String,
        cyan: e ? formatter('[36m', '[39m') : String,
        white: e ? formatter('[37m', '[39m') : String,
        gray: e ? formatter('[90m', '[39m') : String,
        bgBlack: e ? formatter('[40m', '[49m') : String,
        bgRed: e ? formatter('[41m', '[49m') : String,
        bgGreen: e ? formatter('[42m', '[49m') : String,
        bgYellow: e ? formatter('[43m', '[49m') : String,
        bgBlue: e ? formatter('[44m', '[49m') : String,
        bgMagenta: e ? formatter('[45m', '[49m') : String,
        bgCyan: e ? formatter('[46m', '[49m') : String,
        bgWhite: e ? formatter('[47m', '[49m') : String,
      })
      e.exports = createColors()
      e.exports.createColors = createColors
    },
    534: (e, t, r) => {
      let { Input: s } = r(977)
      let i = r(702)
      e.exports = function safeParse(e, t) {
        let r = new s(e, t)
        let n = new i(r)
        n.parse()
        return n.root
      }
    },
    702: (e, t, r) => {
      let s = r(970)
      let i = r(865)
      let n = r(38)
      class SafeParser extends n {
        createTokenizer() {
          this.tokenizer = s(this.input, { ignoreErrors: true })
        }
        comment(e) {
          let t = new i()
          this.init(t, e[2])
          let r =
            this.input.fromOffset(e[3]) ||
            this.input.fromOffset(this.input.css.length - 1)
          t.source.end = { offset: e[3], line: r.line, column: r.col }
          let s = e[1].slice(2)
          if (s.slice(-2) === '*/') s = s.slice(0, -2)
          if (/^\s*$/.test(s)) {
            t.text = ''
            t.raws.left = s
            t.raws.right = ''
          } else {
            let e = s.match(/^(\s*)([^]*\S)(\s*)$/)
            t.text = e[2]
            t.raws.left = e[1]
            t.raws.right = e[3]
          }
        }
        decl(e) {
          if (e.length > 1 && e.some((e) => e[0] === 'word')) {
            super.decl(e)
          }
        }
        unclosedBracket() {}
        unknownWord(e) {
          this.spaces += e.map((e) => e[1]).join('')
        }
        unexpectedClose() {
          this.current.raws.after += '}'
        }
        doubleColon() {}
        unnamedAtrule(e) {
          e.name = ''
        }
        precheckMissedSemicolon(e) {
          let t = this.colon(e)
          if (t === false) return
          let r, s
          for (r = t - 1; r >= 0; r--) {
            if (e[r][0] === 'word') break
          }
          if (r === 0) return
          for (s = r - 1; s >= 0; s--) {
            if (e[s][0] !== 'space') {
              s += 1
              break
            }
          }
          let i = e.slice(r)
          let n = e.slice(s, r)
          e.splice(s, e.length - s)
          this.spaces = n.map((e) => e[1]).join('')
          this.decl(i)
        }
        checkMissedSemicolon() {}
        endFile() {
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon
          }
          this.current.raws.after =
            (this.current.raws.after || '') + this.spaces
          while (this.current.parent) {
            this.current = this.current.parent
            this.current.raws.after = ''
          }
        }
      }
      e.exports = SafeParser
    },
    60: (e, t, r) => {
      'use strict'
      let s = r(911)
      class AtRule extends s {
        constructor(e) {
          super(e)
          this.type = 'atrule'
        }
        append(...e) {
          if (!this.proxyOf.nodes) this.nodes = []
          return super.append(...e)
        }
        prepend(...e) {
          if (!this.proxyOf.nodes) this.nodes = []
          return super.prepend(...e)
        }
      }
      e.exports = AtRule
      AtRule.default = AtRule
      s.registerAtRule(AtRule)
    },
    865: (e, t, r) => {
      'use strict'
      let s = r(490)
      class Comment extends s {
        constructor(e) {
          super(e)
          this.type = 'comment'
        }
      }
      e.exports = Comment
      Comment.default = Comment
    },
    911: (e, t, r) => {
      'use strict'
      let { isClean: s, my: i } = r(522)
      let n = r(258)
      let o = r(865)
      let l = r(490)
      let a, f, h, c
      function cleanSource(e) {
        return e.map((e) => {
          if (e.nodes) e.nodes = cleanSource(e.nodes)
          delete e.source
          return e
        })
      }
      function markDirtyUp(e) {
        e[s] = false
        if (e.proxyOf.nodes) {
          for (let t of e.proxyOf.nodes) {
            markDirtyUp(t)
          }
        }
      }
      class Container extends l {
        append(...e) {
          for (let t of e) {
            let e = this.normalize(t, this.last)
            for (let t of e) this.proxyOf.nodes.push(t)
          }
          this.markDirty()
          return this
        }
        cleanRaws(e) {
          super.cleanRaws(e)
          if (this.nodes) {
            for (let t of this.nodes) t.cleanRaws(e)
          }
        }
        each(e) {
          if (!this.proxyOf.nodes) return undefined
          let t = this.getIterator()
          let r, s
          while (this.indexes[t] < this.proxyOf.nodes.length) {
            r = this.indexes[t]
            s = e(this.proxyOf.nodes[r], r)
            if (s === false) break
            this.indexes[t] += 1
          }
          delete this.indexes[t]
          return s
        }
        every(e) {
          return this.nodes.every(e)
        }
        getIterator() {
          if (!this.lastEach) this.lastEach = 0
          if (!this.indexes) this.indexes = {}
          this.lastEach += 1
          let e = this.lastEach
          this.indexes[e] = 0
          return e
        }
        getProxyProcessor() {
          return {
            get(e, t) {
              if (t === 'proxyOf') {
                return e
              } else if (!e[t]) {
                return e[t]
              } else if (
                t === 'each' ||
                (typeof t === 'string' && t.startsWith('walk'))
              ) {
                return (...r) =>
                  e[t](
                    ...r.map((e) => {
                      if (typeof e === 'function') {
                        return (t, r) => e(t.toProxy(), r)
                      } else {
                        return e
                      }
                    })
                  )
              } else if (t === 'every' || t === 'some') {
                return (r) => e[t]((e, ...t) => r(e.toProxy(), ...t))
              } else if (t === 'root') {
                return () => e.root().toProxy()
              } else if (t === 'nodes') {
                return e.nodes.map((e) => e.toProxy())
              } else if (t === 'first' || t === 'last') {
                return e[t].toProxy()
              } else {
                return e[t]
              }
            },
            set(e, t, r) {
              if (e[t] === r) return true
              e[t] = r
              if (t === 'name' || t === 'params' || t === 'selector') {
                e.markDirty()
              }
              return true
            },
          }
        }
        index(e) {
          if (typeof e === 'number') return e
          if (e.proxyOf) e = e.proxyOf
          return this.proxyOf.nodes.indexOf(e)
        }
        insertAfter(e, t) {
          let r = this.index(e)
          let s = this.normalize(t, this.proxyOf.nodes[r]).reverse()
          r = this.index(e)
          for (let e of s) this.proxyOf.nodes.splice(r + 1, 0, e)
          let i
          for (let e in this.indexes) {
            i = this.indexes[e]
            if (r < i) {
              this.indexes[e] = i + s.length
            }
          }
          this.markDirty()
          return this
        }
        insertBefore(e, t) {
          let r = this.index(e)
          let s = r === 0 ? 'prepend' : false
          let i = this.normalize(t, this.proxyOf.nodes[r], s).reverse()
          r = this.index(e)
          for (let e of i) this.proxyOf.nodes.splice(r, 0, e)
          let n
          for (let e in this.indexes) {
            n = this.indexes[e]
            if (r <= n) {
              this.indexes[e] = n + i.length
            }
          }
          this.markDirty()
          return this
        }
        normalize(e, t) {
          if (typeof e === 'string') {
            e = cleanSource(a(e).nodes)
          } else if (Array.isArray(e)) {
            e = e.slice(0)
            for (let t of e) {
              if (t.parent) t.parent.removeChild(t, 'ignore')
            }
          } else if (e.type === 'root' && this.type !== 'document') {
            e = e.nodes.slice(0)
            for (let t of e) {
              if (t.parent) t.parent.removeChild(t, 'ignore')
            }
          } else if (e.type) {
            e = [e]
          } else if (e.prop) {
            if (typeof e.value === 'undefined') {
              throw new Error('Value field is missed in node creation')
            } else if (typeof e.value !== 'string') {
              e.value = String(e.value)
            }
            e = [new n(e)]
          } else if (e.selector) {
            e = [new f(e)]
          } else if (e.name) {
            e = [new h(e)]
          } else if (e.text) {
            e = [new o(e)]
          } else {
            throw new Error('Unknown node type in node creation')
          }
          let r = e.map((e) => {
            if (!e[i]) Container.rebuild(e)
            e = e.proxyOf
            if (e.parent) e.parent.removeChild(e)
            if (e[s]) markDirtyUp(e)
            if (typeof e.raws.before === 'undefined') {
              if (t && typeof t.raws.before !== 'undefined') {
                e.raws.before = t.raws.before.replace(/\S/g, '')
              }
            }
            e.parent = this.proxyOf
            return e
          })
          return r
        }
        prepend(...e) {
          e = e.reverse()
          for (let t of e) {
            let e = this.normalize(t, this.first, 'prepend').reverse()
            for (let t of e) this.proxyOf.nodes.unshift(t)
            for (let t in this.indexes) {
              this.indexes[t] = this.indexes[t] + e.length
            }
          }
          this.markDirty()
          return this
        }
        push(e) {
          e.parent = this
          this.proxyOf.nodes.push(e)
          return this
        }
        removeAll() {
          for (let e of this.proxyOf.nodes) e.parent = undefined
          this.proxyOf.nodes = []
          this.markDirty()
          return this
        }
        removeChild(e) {
          e = this.index(e)
          this.proxyOf.nodes[e].parent = undefined
          this.proxyOf.nodes.splice(e, 1)
          let t
          for (let r in this.indexes) {
            t = this.indexes[r]
            if (t >= e) {
              this.indexes[r] = t - 1
            }
          }
          this.markDirty()
          return this
        }
        replaceValues(e, t, r) {
          if (!r) {
            r = t
            t = {}
          }
          this.walkDecls((s) => {
            if (t.props && !t.props.includes(s.prop)) return
            if (t.fast && !s.value.includes(t.fast)) return
            s.value = s.value.replace(e, r)
          })
          this.markDirty()
          return this
        }
        some(e) {
          return this.nodes.some(e)
        }
        walk(e) {
          return this.each((t, r) => {
            let s
            try {
              s = e(t, r)
            } catch (e) {
              throw t.addToError(e)
            }
            if (s !== false && t.walk) {
              s = t.walk(e)
            }
            return s
          })
        }
        walkAtRules(e, t) {
          if (!t) {
            t = e
            return this.walk((e, r) => {
              if (e.type === 'atrule') {
                return t(e, r)
              }
            })
          }
          if (e instanceof RegExp) {
            return this.walk((r, s) => {
              if (r.type === 'atrule' && e.test(r.name)) {
                return t(r, s)
              }
            })
          }
          return this.walk((r, s) => {
            if (r.type === 'atrule' && r.name === e) {
              return t(r, s)
            }
          })
        }
        walkComments(e) {
          return this.walk((t, r) => {
            if (t.type === 'comment') {
              return e(t, r)
            }
          })
        }
        walkDecls(e, t) {
          if (!t) {
            t = e
            return this.walk((e, r) => {
              if (e.type === 'decl') {
                return t(e, r)
              }
            })
          }
          if (e instanceof RegExp) {
            return this.walk((r, s) => {
              if (r.type === 'decl' && e.test(r.prop)) {
                return t(r, s)
              }
            })
          }
          return this.walk((r, s) => {
            if (r.type === 'decl' && r.prop === e) {
              return t(r, s)
            }
          })
        }
        walkRules(e, t) {
          if (!t) {
            t = e
            return this.walk((e, r) => {
              if (e.type === 'rule') {
                return t(e, r)
              }
            })
          }
          if (e instanceof RegExp) {
            return this.walk((r, s) => {
              if (r.type === 'rule' && e.test(r.selector)) {
                return t(r, s)
              }
            })
          }
          return this.walk((r, s) => {
            if (r.type === 'rule' && r.selector === e) {
              return t(r, s)
            }
          })
        }
        get first() {
          if (!this.proxyOf.nodes) return undefined
          return this.proxyOf.nodes[0]
        }
        get last() {
          if (!this.proxyOf.nodes) return undefined
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      Container.registerParse = (e) => {
        a = e
      }
      Container.registerRule = (e) => {
        f = e
      }
      Container.registerAtRule = (e) => {
        h = e
      }
      Container.registerRoot = (e) => {
        c = e
      }
      e.exports = Container
      Container.default = Container
      Container.rebuild = (e) => {
        if (e.type === 'atrule') {
          Object.setPrototypeOf(e, h.prototype)
        } else if (e.type === 'rule') {
          Object.setPrototypeOf(e, f.prototype)
        } else if (e.type === 'decl') {
          Object.setPrototypeOf(e, n.prototype)
        } else if (e.type === 'comment') {
          Object.setPrototypeOf(e, o.prototype)
        } else if (e.type === 'root') {
          Object.setPrototypeOf(e, c.prototype)
        }
        e[i] = true
        if (e.nodes) {
          e.nodes.forEach((e) => {
            Container.rebuild(e)
          })
        }
      }
    },
    430: (e, t, r) => {
      'use strict'
      let s = r(306)
      let i = r(364)
      class CssSyntaxError extends Error {
        constructor(e, t, r, s, i, n) {
          super(e)
          this.name = 'CssSyntaxError'
          this.reason = e
          if (i) {
            this.file = i
          }
          if (s) {
            this.source = s
          }
          if (n) {
            this.plugin = n
          }
          if (typeof t !== 'undefined' && typeof r !== 'undefined') {
            if (typeof t === 'number') {
              this.line = t
              this.column = r
            } else {
              this.line = t.line
              this.column = t.column
              this.endLine = r.line
              this.endColumn = r.column
            }
          }
          this.setMessage()
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError)
          }
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ': ' : ''
          this.message += this.file ? this.file : '<css input>'
          if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column
          }
          this.message += ': ' + this.reason
        }
        showSourceCode(e) {
          if (!this.source) return ''
          let t = this.source
          if (e == null) e = s.isColorSupported
          if (i) {
            if (e) t = i(t)
          }
          let r = t.split(/\r?\n/)
          let n = Math.max(this.line - 3, 0)
          let o = Math.min(this.line + 2, r.length)
          let l = String(o).length
          let a, f
          if (e) {
            let { bold: e, gray: t, red: r } = s.createColors(true)
            a = (t) => e(r(t))
            f = (e) => t(e)
          } else {
            a = f = (e) => e
          }
          return r
            .slice(n, o)
            .map((e, t) => {
              let r = n + 1 + t
              let s = ' ' + (' ' + r).slice(-l) + ' | '
              if (r === this.line) {
                let t =
                  f(s.replace(/\d/g, ' ')) +
                  e.slice(0, this.column - 1).replace(/[^\t]/g, ' ')
                return a('>') + f(s) + e + '\n ' + t + a('^')
              }
              return ' ' + f(s) + e
            })
            .join('\n')
        }
        toString() {
          let e = this.showSourceCode()
          if (e) {
            e = '\n\n' + e + '\n'
          }
          return this.name + ': ' + this.message + e
        }
      }
      e.exports = CssSyntaxError
      CssSyntaxError.default = CssSyntaxError
    },
    258: (e, t, r) => {
      'use strict'
      let s = r(490)
      class Declaration extends s {
        constructor(e) {
          if (
            e &&
            typeof e.value !== 'undefined' &&
            typeof e.value !== 'string'
          ) {
            e = { ...e, value: String(e.value) }
          }
          super(e)
          this.type = 'decl'
        }
        get variable() {
          return this.prop.startsWith('--') || this.prop[0] === '$'
        }
      }
      e.exports = Declaration
      Declaration.default = Declaration
    },
    726: (e) => {
      'use strict'
      let t = {
        comma(e) {
          return t.split(e, [','], true)
        },
        space(e) {
          let r = [' ', '\n', '\t']
          return t.split(e, r)
        },
        split(e, t, r) {
          let s = []
          let i = ''
          let n = false
          let o = 0
          let l = false
          let a = ''
          let f = false
          for (let r of e) {
            if (f) {
              f = false
            } else if (r === '\\') {
              f = true
            } else if (l) {
              if (r === a) {
                l = false
              }
            } else if (r === '"' || r === "'") {
              l = true
              a = r
            } else if (r === '(') {
              o += 1
            } else if (r === ')') {
              if (o > 0) o -= 1
            } else if (o === 0) {
              if (t.includes(r)) n = true
            }
            if (n) {
              if (i !== '') s.push(i.trim())
              i = ''
              n = false
            } else {
              i += r
            }
          }
          if (r || i !== '') s.push(i.trim())
          return s
        },
      }
      e.exports = t
      t.default = t
    },
    490: (e, t, r) => {
      'use strict'
      let { isClean: s, my: i } = r(522)
      let n = r(430)
      let o = r(943)
      let l = r(34)
      function cloneNode(e, t) {
        let r = new e.constructor()
        for (let s in e) {
          if (!Object.prototype.hasOwnProperty.call(e, s)) {
            continue
          }
          if (s === 'proxyCache') continue
          let i = e[s]
          let n = typeof i
          if (s === 'parent' && n === 'object') {
            if (t) r[s] = t
          } else if (s === 'source') {
            r[s] = i
          } else if (Array.isArray(i)) {
            r[s] = i.map((e) => cloneNode(e, r))
          } else {
            if (n === 'object' && i !== null) i = cloneNode(i)
            r[s] = i
          }
        }
        return r
      }
      class Node {
        constructor(e = {}) {
          this.raws = {}
          this[s] = false
          this[i] = true
          for (let t in e) {
            if (t === 'nodes') {
              this.nodes = []
              for (let r of e[t]) {
                if (typeof r.clone === 'function') {
                  this.append(r.clone())
                } else {
                  this.append(r)
                }
              }
            } else {
              this[t] = e[t]
            }
          }
        }
        addToError(e) {
          e.postcssNode = this
          if (e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
            let t = this.source
            e.stack = e.stack.replace(
              /\n\s{4}at /,
              `$&${t.input.from}:${t.start.line}:${t.start.column}$&`
            )
          }
          return e
        }
        after(e) {
          this.parent.insertAfter(this, e)
          return this
        }
        assign(e = {}) {
          for (let t in e) {
            this[t] = e[t]
          }
          return this
        }
        before(e) {
          this.parent.insertBefore(this, e)
          return this
        }
        cleanRaws(e) {
          delete this.raws.before
          delete this.raws.after
          if (!e) delete this.raws.between
        }
        clone(e = {}) {
          let t = cloneNode(this)
          for (let r in e) {
            t[r] = e[r]
          }
          return t
        }
        cloneAfter(e = {}) {
          let t = this.clone(e)
          this.parent.insertAfter(this, t)
          return t
        }
        cloneBefore(e = {}) {
          let t = this.clone(e)
          this.parent.insertBefore(this, t)
          return t
        }
        error(e, t = {}) {
          if (this.source) {
            let { end: r, start: s } = this.rangeBy(t)
            return this.source.input.error(
              e,
              { column: s.column, line: s.line },
              { column: r.column, line: r.line },
              t
            )
          }
          return new n(e)
        }
        getProxyProcessor() {
          return {
            get(e, t) {
              if (t === 'proxyOf') {
                return e
              } else if (t === 'root') {
                return () => e.root().toProxy()
              } else {
                return e[t]
              }
            },
            set(e, t, r) {
              if (e[t] === r) return true
              e[t] = r
              if (
                t === 'prop' ||
                t === 'value' ||
                t === 'name' ||
                t === 'params' ||
                t === 'important' ||
                t === 'text'
              ) {
                e.markDirty()
              }
              return true
            },
          }
        }
        markDirty() {
          if (this[s]) {
            this[s] = false
            let e = this
            while ((e = e.parent)) {
              e[s] = false
            }
          }
        }
        next() {
          if (!this.parent) return undefined
          let e = this.parent.index(this)
          return this.parent.nodes[e + 1]
        }
        positionBy(e, t) {
          let r = this.source.start
          if (e.index) {
            r = this.positionInside(e.index, t)
          } else if (e.word) {
            t = this.toString()
            let s = t.indexOf(e.word)
            if (s !== -1) r = this.positionInside(s, t)
          }
          return r
        }
        positionInside(e, t) {
          let r = t || this.toString()
          let s = this.source.start.column
          let i = this.source.start.line
          for (let t = 0; t < e; t++) {
            if (r[t] === '\n') {
              s = 1
              i += 1
            } else {
              s += 1
            }
          }
          return { column: s, line: i }
        }
        prev() {
          if (!this.parent) return undefined
          let e = this.parent.index(this)
          return this.parent.nodes[e - 1]
        }
        rangeBy(e) {
          let t = {
            column: this.source.start.column,
            line: this.source.start.line,
          }
          let r = this.source.end
            ? { column: this.source.end.column + 1, line: this.source.end.line }
            : { column: t.column + 1, line: t.line }
          if (e.word) {
            let s = this.toString()
            let i = s.indexOf(e.word)
            if (i !== -1) {
              t = this.positionInside(i, s)
              r = this.positionInside(i + e.word.length, s)
            }
          } else {
            if (e.start) {
              t = { column: e.start.column, line: e.start.line }
            } else if (e.index) {
              t = this.positionInside(e.index)
            }
            if (e.end) {
              r = { column: e.end.column, line: e.end.line }
            } else if (e.endIndex) {
              r = this.positionInside(e.endIndex)
            } else if (e.index) {
              r = this.positionInside(e.index + 1)
            }
          }
          if (r.line < t.line || (r.line === t.line && r.column <= t.column)) {
            r = { column: t.column + 1, line: t.line }
          }
          return { end: r, start: t }
        }
        raw(e, t) {
          let r = new o()
          return r.raw(this, e, t)
        }
        remove() {
          if (this.parent) {
            this.parent.removeChild(this)
          }
          this.parent = undefined
          return this
        }
        replaceWith(...e) {
          if (this.parent) {
            let t = this
            let r = false
            for (let s of e) {
              if (s === this) {
                r = true
              } else if (r) {
                this.parent.insertAfter(t, s)
                t = s
              } else {
                this.parent.insertBefore(t, s)
              }
            }
            if (!r) {
              this.remove()
            }
          }
          return this
        }
        root() {
          let e = this
          while (e.parent && e.parent.type !== 'document') {
            e = e.parent
          }
          return e
        }
        toJSON(e, t) {
          let r = {}
          let s = t == null
          t = t || new Map()
          let i = 0
          for (let e in this) {
            if (!Object.prototype.hasOwnProperty.call(this, e)) {
              continue
            }
            if (e === 'parent' || e === 'proxyCache') continue
            let s = this[e]
            if (Array.isArray(s)) {
              r[e] = s.map((e) => {
                if (typeof e === 'object' && e.toJSON) {
                  return e.toJSON(null, t)
                } else {
                  return e
                }
              })
            } else if (typeof s === 'object' && s.toJSON) {
              r[e] = s.toJSON(null, t)
            } else if (e === 'source') {
              let n = t.get(s.input)
              if (n == null) {
                n = i
                t.set(s.input, i)
                i++
              }
              r[e] = { end: s.end, inputId: n, start: s.start }
            } else {
              r[e] = s
            }
          }
          if (s) {
            r.inputs = [...t.keys()].map((e) => e.toJSON())
          }
          return r
        }
        toProxy() {
          if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor())
          }
          return this.proxyCache
        }
        toString(e = l) {
          if (e.stringify) e = e.stringify
          let t = ''
          e(this, (e) => {
            t += e
          })
          return t
        }
        warn(e, t, r) {
          let s = { node: this }
          for (let e in r) s[e] = r[e]
          return e.warn(t, s)
        }
        get proxyOf() {
          return this
        }
      }
      e.exports = Node
      Node.default = Node
    },
    38: (e, t, r) => {
      'use strict'
      let s = r(258)
      let i = r(970)
      let n = r(865)
      let o = r(60)
      let l = r(991)
      let a = r(202)
      const f = { empty: true, space: true }
      function findLastWithPosition(e) {
        for (let t = e.length - 1; t >= 0; t--) {
          let r = e[t]
          let s = r[3] || r[2]
          if (s) return s
        }
      }
      class Parser {
        constructor(e) {
          this.input = e
          this.root = new l()
          this.current = this.root
          this.spaces = ''
          this.semicolon = false
          this.customProperty = false
          this.createTokenizer()
          this.root.source = {
            input: e,
            start: { column: 1, line: 1, offset: 0 },
          }
        }
        atrule(e) {
          let t = new o()
          t.name = e[1].slice(1)
          if (t.name === '') {
            this.unnamedAtrule(t, e)
          }
          this.init(t, e[2])
          let r
          let s
          let i
          let n = false
          let l = false
          let a = []
          let f = []
          while (!this.tokenizer.endOfFile()) {
            e = this.tokenizer.nextToken()
            r = e[0]
            if (r === '(' || r === '[') {
              f.push(r === '(' ? ')' : ']')
            } else if (r === '{' && f.length > 0) {
              f.push('}')
            } else if (r === f[f.length - 1]) {
              f.pop()
            }
            if (f.length === 0) {
              if (r === ';') {
                t.source.end = this.getPosition(e[2])
                t.source.end.offset++
                this.semicolon = true
                break
              } else if (r === '{') {
                l = true
                break
              } else if (r === '}') {
                if (a.length > 0) {
                  i = a.length - 1
                  s = a[i]
                  while (s && s[0] === 'space') {
                    s = a[--i]
                  }
                  if (s) {
                    t.source.end = this.getPosition(s[3] || s[2])
                    t.source.end.offset++
                  }
                }
                this.end(e)
                break
              } else {
                a.push(e)
              }
            } else {
              a.push(e)
            }
            if (this.tokenizer.endOfFile()) {
              n = true
              break
            }
          }
          t.raws.between = this.spacesAndCommentsFromEnd(a)
          if (a.length) {
            t.raws.afterName = this.spacesAndCommentsFromStart(a)
            this.raw(t, 'params', a)
            if (n) {
              e = a[a.length - 1]
              t.source.end = this.getPosition(e[3] || e[2])
              t.source.end.offset++
              this.spaces = t.raws.between
              t.raws.between = ''
            }
          } else {
            t.raws.afterName = ''
            t.params = ''
          }
          if (l) {
            t.nodes = []
            this.current = t
          }
        }
        checkMissedSemicolon(e) {
          let t = this.colon(e)
          if (t === false) return
          let r = 0
          let s
          for (let i = t - 1; i >= 0; i--) {
            s = e[i]
            if (s[0] !== 'space') {
              r += 1
              if (r === 2) break
            }
          }
          throw this.input.error(
            'Missed semicolon',
            s[0] === 'word' ? s[3] + 1 : s[2]
          )
        }
        colon(e) {
          let t = 0
          let r, s, i
          for (let [n, o] of e.entries()) {
            r = o
            s = r[0]
            if (s === '(') {
              t += 1
            }
            if (s === ')') {
              t -= 1
            }
            if (t === 0 && s === ':') {
              if (!i) {
                this.doubleColon(r)
              } else if (i[0] === 'word' && i[1] === 'progid') {
                continue
              } else {
                return n
              }
            }
            i = r
          }
          return false
        }
        comment(e) {
          let t = new n()
          this.init(t, e[2])
          t.source.end = this.getPosition(e[3] || e[2])
          t.source.end.offset++
          let r = e[1].slice(2, -2)
          if (/^\s*$/.test(r)) {
            t.text = ''
            t.raws.left = r
            t.raws.right = ''
          } else {
            let e = r.match(/^(\s*)([^]*\S)(\s*)$/)
            t.text = e[2]
            t.raws.left = e[1]
            t.raws.right = e[3]
          }
        }
        createTokenizer() {
          this.tokenizer = i(this.input)
        }
        decl(e, t) {
          let r = new s()
          this.init(r, e[0][2])
          let i = e[e.length - 1]
          if (i[0] === ';') {
            this.semicolon = true
            e.pop()
          }
          r.source.end = this.getPosition(
            i[3] || i[2] || findLastWithPosition(e)
          )
          r.source.end.offset++
          while (e[0][0] !== 'word') {
            if (e.length === 1) this.unknownWord(e)
            r.raws.before += e.shift()[1]
          }
          r.source.start = this.getPosition(e[0][2])
          r.prop = ''
          while (e.length) {
            let t = e[0][0]
            if (t === ':' || t === 'space' || t === 'comment') {
              break
            }
            r.prop += e.shift()[1]
          }
          r.raws.between = ''
          let n
          while (e.length) {
            n = e.shift()
            if (n[0] === ':') {
              r.raws.between += n[1]
              break
            } else {
              if (n[0] === 'word' && /\w/.test(n[1])) {
                this.unknownWord([n])
              }
              r.raws.between += n[1]
            }
          }
          if (r.prop[0] === '_' || r.prop[0] === '*') {
            r.raws.before += r.prop[0]
            r.prop = r.prop.slice(1)
          }
          let o = []
          let l
          while (e.length) {
            l = e[0][0]
            if (l !== 'space' && l !== 'comment') break
            o.push(e.shift())
          }
          this.precheckMissedSemicolon(e)
          for (let t = e.length - 1; t >= 0; t--) {
            n = e[t]
            if (n[1].toLowerCase() === '!important') {
              r.important = true
              let s = this.stringFrom(e, t)
              s = this.spacesFromEnd(e) + s
              if (s !== ' !important') r.raws.important = s
              break
            } else if (n[1].toLowerCase() === 'important') {
              let s = e.slice(0)
              let i = ''
              for (let e = t; e > 0; e--) {
                let t = s[e][0]
                if (i.trim().indexOf('!') === 0 && t !== 'space') {
                  break
                }
                i = s.pop()[1] + i
              }
              if (i.trim().indexOf('!') === 0) {
                r.important = true
                r.raws.important = i
                e = s
              }
            }
            if (n[0] !== 'space' && n[0] !== 'comment') {
              break
            }
          }
          let a = e.some((e) => e[0] !== 'space' && e[0] !== 'comment')
          if (a) {
            r.raws.between += o.map((e) => e[1]).join('')
            o = []
          }
          this.raw(r, 'value', o.concat(e), t)
          if (r.value.includes(':') && !t) {
            this.checkMissedSemicolon(e)
          }
        }
        doubleColon(e) {
          throw this.input.error(
            'Double colon',
            { offset: e[2] },
            { offset: e[2] + e[1].length }
          )
        }
        emptyRule(e) {
          let t = new a()
          this.init(t, e[2])
          t.selector = ''
          t.raws.between = ''
          this.current = t
        }
        end(e) {
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon
          }
          this.semicolon = false
          this.current.raws.after =
            (this.current.raws.after || '') + this.spaces
          this.spaces = ''
          if (this.current.parent) {
            this.current.source.end = this.getPosition(e[2])
            this.current.source.end.offset++
            this.current = this.current.parent
          } else {
            this.unexpectedClose(e)
          }
        }
        endFile() {
          if (this.current.parent) this.unclosedBlock()
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon
          }
          this.current.raws.after =
            (this.current.raws.after || '') + this.spaces
          this.root.source.end = this.getPosition(this.tokenizer.position())
        }
        freeSemicolon(e) {
          this.spaces += e[1]
          if (this.current.nodes) {
            let e = this.current.nodes[this.current.nodes.length - 1]
            if (e && e.type === 'rule' && !e.raws.ownSemicolon) {
              e.raws.ownSemicolon = this.spaces
              this.spaces = ''
            }
          }
        }
        getPosition(e) {
          let t = this.input.fromOffset(e)
          return { column: t.col, line: t.line, offset: e }
        }
        init(e, t) {
          this.current.push(e)
          e.source = { input: this.input, start: this.getPosition(t) }
          e.raws.before = this.spaces
          this.spaces = ''
          if (e.type !== 'comment') this.semicolon = false
        }
        other(e) {
          let t = false
          let r = null
          let s = false
          let i = null
          let n = []
          let o = e[1].startsWith('--')
          let l = []
          let a = e
          while (a) {
            r = a[0]
            l.push(a)
            if (r === '(' || r === '[') {
              if (!i) i = a
              n.push(r === '(' ? ')' : ']')
            } else if (o && s && r === '{') {
              if (!i) i = a
              n.push('}')
            } else if (n.length === 0) {
              if (r === ';') {
                if (s) {
                  this.decl(l, o)
                  return
                } else {
                  break
                }
              } else if (r === '{') {
                this.rule(l)
                return
              } else if (r === '}') {
                this.tokenizer.back(l.pop())
                t = true
                break
              } else if (r === ':') {
                s = true
              }
            } else if (r === n[n.length - 1]) {
              n.pop()
              if (n.length === 0) i = null
            }
            a = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile()) t = true
          if (n.length > 0) this.unclosedBracket(i)
          if (t && s) {
            if (!o) {
              while (l.length) {
                a = l[l.length - 1][0]
                if (a !== 'space' && a !== 'comment') break
                this.tokenizer.back(l.pop())
              }
            }
            this.decl(l, o)
          } else {
            this.unknownWord(l)
          }
        }
        parse() {
          let e
          while (!this.tokenizer.endOfFile()) {
            e = this.tokenizer.nextToken()
            switch (e[0]) {
              case 'space':
                this.spaces += e[1]
                break
              case ';':
                this.freeSemicolon(e)
                break
              case '}':
                this.end(e)
                break
              case 'comment':
                this.comment(e)
                break
              case 'at-word':
                this.atrule(e)
                break
              case '{':
                this.emptyRule(e)
                break
              default:
                this.other(e)
                break
            }
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(e, t, r, s) {
          let i, n
          let o = r.length
          let l = ''
          let a = true
          let h, c
          for (let e = 0; e < o; e += 1) {
            i = r[e]
            n = i[0]
            if (n === 'space' && e === o - 1 && !s) {
              a = false
            } else if (n === 'comment') {
              c = r[e - 1] ? r[e - 1][0] : 'empty'
              h = r[e + 1] ? r[e + 1][0] : 'empty'
              if (!f[c] && !f[h]) {
                if (l.slice(-1) === ',') {
                  a = false
                } else {
                  l += i[1]
                }
              } else {
                a = false
              }
            } else {
              l += i[1]
            }
          }
          if (!a) {
            let s = r.reduce((e, t) => e + t[1], '')
            e.raws[t] = { raw: s, value: l }
          }
          e[t] = l
        }
        rule(e) {
          e.pop()
          let t = new a()
          this.init(t, e[0][2])
          t.raws.between = this.spacesAndCommentsFromEnd(e)
          this.raw(t, 'selector', e)
          this.current = t
        }
        spacesAndCommentsFromEnd(e) {
          let t
          let r = ''
          while (e.length) {
            t = e[e.length - 1][0]
            if (t !== 'space' && t !== 'comment') break
            r = e.pop()[1] + r
          }
          return r
        }
        spacesAndCommentsFromStart(e) {
          let t
          let r = ''
          while (e.length) {
            t = e[0][0]
            if (t !== 'space' && t !== 'comment') break
            r += e.shift()[1]
          }
          return r
        }
        spacesFromEnd(e) {
          let t
          let r = ''
          while (e.length) {
            t = e[e.length - 1][0]
            if (t !== 'space') break
            r = e.pop()[1] + r
          }
          return r
        }
        stringFrom(e, t) {
          let r = ''
          for (let s = t; s < e.length; s++) {
            r += e[s][1]
          }
          e.splice(t, e.length - t)
          return r
        }
        unclosedBlock() {
          let e = this.current.source.start
          throw this.input.error('Unclosed block', e.line, e.column)
        }
        unclosedBracket(e) {
          throw this.input.error(
            'Unclosed bracket',
            { offset: e[2] },
            { offset: e[2] + 1 }
          )
        }
        unexpectedClose(e) {
          throw this.input.error(
            'Unexpected }',
            { offset: e[2] },
            { offset: e[2] + 1 }
          )
        }
        unknownWord(e) {
          throw this.input.error(
            'Unknown word',
            { offset: e[0][2] },
            { offset: e[0][2] + e[0][1].length }
          )
        }
        unnamedAtrule(e, t) {
          throw this.input.error(
            'At-rule without name',
            { offset: t[2] },
            { offset: t[2] + t[1].length }
          )
        }
      }
      e.exports = Parser
    },
    991: (e, t, r) => {
      'use strict'
      let s = r(911)
      let i, n
      class Root extends s {
        constructor(e) {
          super(e)
          this.type = 'root'
          if (!this.nodes) this.nodes = []
        }
        normalize(e, t, r) {
          let s = super.normalize(e)
          if (t) {
            if (r === 'prepend') {
              if (this.nodes.length > 1) {
                t.raws.before = this.nodes[1].raws.before
              } else {
                delete t.raws.before
              }
            } else if (this.first !== t) {
              for (let e of s) {
                e.raws.before = t.raws.before
              }
            }
          }
          return s
        }
        removeChild(e, t) {
          let r = this.index(e)
          if (!t && r === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[r].raws.before
          }
          return super.removeChild(e)
        }
        toResult(e = {}) {
          let t = new i(new n(), this, e)
          return t.stringify()
        }
      }
      Root.registerLazyResult = (e) => {
        i = e
      }
      Root.registerProcessor = (e) => {
        n = e
      }
      e.exports = Root
      Root.default = Root
      s.registerRoot(Root)
    },
    202: (e, t, r) => {
      'use strict'
      let s = r(911)
      let i = r(726)
      class Rule extends s {
        constructor(e) {
          super(e)
          this.type = 'rule'
          if (!this.nodes) this.nodes = []
        }
        get selectors() {
          return i.comma(this.selector)
        }
        set selectors(e) {
          let t = this.selector ? this.selector.match(/,\s*/) : null
          let r = t ? t[0] : ',' + this.raw('between', 'beforeOpen')
          this.selector = e.join(r)
        }
      }
      e.exports = Rule
      Rule.default = Rule
      s.registerRule(Rule)
    },
    943: (e) => {
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
          let o = e.root()
          if (!o.rawCache) o.rawCache = {}
          if (typeof o.rawCache[s] !== 'undefined') {
            return o.rawCache[s]
          }
          if (s === 'before' || s === 'after') {
            return this.beforeAfter(e, s)
          } else {
            let t = 'raw' + capitalize(s)
            if (this[t]) {
              i = this[t](o, e)
            } else {
              o.walk((e) => {
                i = e.raws[r]
                if (typeof i !== 'undefined') return false
              })
            }
          }
          if (typeof i === 'undefined') i = t[s]
          o.rawCache[s] = i
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
    34: (e, t, r) => {
      'use strict'
      let s = r(943)
      function stringify(e, t) {
        let r = new s(t)
        r.stringify(e)
      }
      e.exports = stringify
      stringify.default = stringify
    },
    522: (e) => {
      'use strict'
      e.exports.isClean = Symbol('isClean')
      e.exports.my = Symbol('my')
    },
    364: (e, t, r) => {
      'use strict'
      let s = r(306)
      let i = r(970)
      let n
      function registerInput(e) {
        n = e
      }
      const o = {
        ';': s.yellow,
        ':': s.yellow,
        '(': s.cyan,
        ')': s.cyan,
        '[': s.yellow,
        ']': s.yellow,
        '{': s.yellow,
        '}': s.yellow,
        'at-word': s.cyan,
        brackets: s.cyan,
        call: s.cyan,
        class: s.yellow,
        comment: s.gray,
        hash: s.magenta,
        string: s.green,
      }
      function getTokenType([e, t], r) {
        if (e === 'word') {
          if (t[0] === '.') {
            return 'class'
          }
          if (t[0] === '#') {
            return 'hash'
          }
        }
        if (!r.endOfFile()) {
          let e = r.nextToken()
          r.back(e)
          if (e[0] === 'brackets' || e[0] === '(') return 'call'
        }
        return e
      }
      function terminalHighlight(e) {
        let t = i(new n(e), { ignoreErrors: true })
        let r = ''
        while (!t.endOfFile()) {
          let e = t.nextToken()
          let s = o[getTokenType(e, t)]
          if (s) {
            r += e[1]
              .split(/\r?\n/)
              .map((e) => s(e))
              .join('\n')
          } else {
            r += e[1]
          }
        }
        return r
      }
      terminalHighlight.registerInput = registerInput
      e.exports = terminalHighlight
    },
    970: (e) => {
      'use strict'
      const t = "'".charCodeAt(0)
      const r = '"'.charCodeAt(0)
      const s = '\\'.charCodeAt(0)
      const i = '/'.charCodeAt(0)
      const n = '\n'.charCodeAt(0)
      const o = ' '.charCodeAt(0)
      const l = '\f'.charCodeAt(0)
      const a = '\t'.charCodeAt(0)
      const f = '\r'.charCodeAt(0)
      const h = '['.charCodeAt(0)
      const c = ']'.charCodeAt(0)
      const u = '('.charCodeAt(0)
      const p = ')'.charCodeAt(0)
      const d = '{'.charCodeAt(0)
      const m = '}'.charCodeAt(0)
      const w = ';'.charCodeAt(0)
      const g = '*'.charCodeAt(0)
      const y = ':'.charCodeAt(0)
      const b = '@'.charCodeAt(0)
      const x = /[\t\n\f\r "#'()/;[\\\]{}]/g
      const k = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
      const C = /.[\r\n"'(/\\]/
      const S = /[\da-f]/i
      e.exports = function tokenizer(e, O = {}) {
        let A = e.css.valueOf()
        let v = O.ignoreErrors
        let R, P, E, _, z
        let D, I, B, F, T
        let N = A.length
        let j = 0
        let M = []
        let $ = []
        function position() {
          return j
        }
        function unclosed(t) {
          throw e.error('Unclosed ' + t, j)
        }
        function endOfFile() {
          return $.length === 0 && j >= N
        }
        function nextToken(e) {
          if ($.length) return $.pop()
          if (j >= N) return
          let O = e ? e.ignoreUnclosed : false
          R = A.charCodeAt(j)
          switch (R) {
            case n:
            case o:
            case a:
            case f:
            case l: {
              P = j
              do {
                P += 1
                R = A.charCodeAt(P)
              } while (R === o || R === n || R === a || R === f || R === l)
              T = ['space', A.slice(j, P)]
              j = P - 1
              break
            }
            case h:
            case c:
            case d:
            case m:
            case y:
            case w:
            case p: {
              let e = String.fromCharCode(R)
              T = [e, e, j]
              break
            }
            case u: {
              B = M.length ? M.pop()[1] : ''
              F = A.charCodeAt(j + 1)
              if (
                B === 'url' &&
                F !== t &&
                F !== r &&
                F !== o &&
                F !== n &&
                F !== a &&
                F !== l &&
                F !== f
              ) {
                P = j
                do {
                  D = false
                  P = A.indexOf(')', P + 1)
                  if (P === -1) {
                    if (v || O) {
                      P = j
                      break
                    } else {
                      unclosed('bracket')
                    }
                  }
                  I = P
                  while (A.charCodeAt(I - 1) === s) {
                    I -= 1
                    D = !D
                  }
                } while (D)
                T = ['brackets', A.slice(j, P + 1), j, P]
                j = P
              } else {
                P = A.indexOf(')', j + 1)
                _ = A.slice(j, P + 1)
                if (P === -1 || C.test(_)) {
                  T = ['(', '(', j]
                } else {
                  T = ['brackets', _, j, P]
                  j = P
                }
              }
              break
            }
            case t:
            case r: {
              E = R === t ? "'" : '"'
              P = j
              do {
                D = false
                P = A.indexOf(E, P + 1)
                if (P === -1) {
                  if (v || O) {
                    P = j + 1
                    break
                  } else {
                    unclosed('string')
                  }
                }
                I = P
                while (A.charCodeAt(I - 1) === s) {
                  I -= 1
                  D = !D
                }
              } while (D)
              T = ['string', A.slice(j, P + 1), j, P]
              j = P
              break
            }
            case b: {
              x.lastIndex = j + 1
              x.test(A)
              if (x.lastIndex === 0) {
                P = A.length - 1
              } else {
                P = x.lastIndex - 2
              }
              T = ['at-word', A.slice(j, P + 1), j, P]
              j = P
              break
            }
            case s: {
              P = j
              z = true
              while (A.charCodeAt(P + 1) === s) {
                P += 1
                z = !z
              }
              R = A.charCodeAt(P + 1)
              if (
                z &&
                R !== i &&
                R !== o &&
                R !== n &&
                R !== a &&
                R !== f &&
                R !== l
              ) {
                P += 1
                if (S.test(A.charAt(P))) {
                  while (S.test(A.charAt(P + 1))) {
                    P += 1
                  }
                  if (A.charCodeAt(P + 1) === o) {
                    P += 1
                  }
                }
              }
              T = ['word', A.slice(j, P + 1), j, P]
              j = P
              break
            }
            default: {
              if (R === i && A.charCodeAt(j + 1) === g) {
                P = A.indexOf('*/', j + 2) + 1
                if (P === 0) {
                  if (v || O) {
                    P = A.length
                  } else {
                    unclosed('comment')
                  }
                }
                T = ['comment', A.slice(j, P + 1), j, P]
                j = P
              } else {
                k.lastIndex = j + 1
                k.test(A)
                if (k.lastIndex === 0) {
                  P = A.length - 1
                } else {
                  P = k.lastIndex - 2
                }
                T = ['word', A.slice(j, P + 1), j, P]
                M.push(T)
                j = P
              }
              break
            }
          }
          j++
          return T
        }
        function back(e) {
          $.push(e)
        }
        return {
          back: back,
          endOfFile: endOfFile,
          nextToken: nextToken,
          position: position,
        }
      }
    },
    977: (e) => {
      'use strict'
      e.exports = require('postcss')
    },
    224: (e) => {
      'use strict'
      e.exports = require('tty')
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
  var r = __nccwpck_require__(534)
  module.exports = r
})()
