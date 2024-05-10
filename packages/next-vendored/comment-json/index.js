;(() => {
  var e = {
    281: (e, t, i) => {
      const r = i(277)
      const { isObject: s, isArray: n } = i(504)
      const a = 'before'
      const o = 'after-prop'
      const u = 'after-colon'
      const h = 'after-value'
      const c = 'after-comma'
      const l = [a, o, u, h, c]
      const p = ':'
      const f = undefined
      const symbol = (e, t) => Symbol.for(e + p + t)
      const assign_comments = (e, t, i, s, n, a) => {
        const o = symbol(n, s)
        if (!r(t, o)) {
          return
        }
        const u = i === s ? o : symbol(n, i)
        e[u] = t[o]
        if (a) {
          delete t[o]
        }
      }
      const assign = (e, t, i) => {
        i.forEach((i) => {
          if (!r(t, i)) {
            return
          }
          e[i] = t[i]
          l.forEach((r) => {
            assign_comments(e, t, i, i, r)
          })
        })
        return e
      }
      const swap_comments = (e, t, i) => {
        if (t === i) {
          return
        }
        l.forEach((s) => {
          const n = symbol(s, i)
          if (!r(e, n)) {
            assign_comments(e, e, i, t, s)
            return
          }
          const a = e[n]
          assign_comments(e, e, i, t, s)
          e[symbol(s, t)] = a
        })
      }
      const reverse_comments = (e) => {
        const { length: t } = e
        let i = 0
        const r = t / 2
        for (; i < r; i++) {
          swap_comments(e, i, t - i - 1)
        }
      }
      const move_comment = (e, t, i, r, s) => {
        l.forEach((n) => {
          assign_comments(e, t, i + r, i, n, s)
        })
      }
      const move_comments = (e, t, i, r, s, n) => {
        if (s > 0) {
          let a = r
          while (a-- > 0) {
            move_comment(e, t, i + a, s, n && a < s)
          }
          return
        }
        let a = 0
        const o = r + s
        while (a < r) {
          const r = a++
          move_comment(e, t, i + r, s, n && a >= o)
        }
      }
      class CommentArray extends Array {
        splice(...e) {
          const { length: t } = this
          const i = super.splice(...e)
          let [r, s, ...n] = e
          if (r < 0) {
            r += t
          }
          if (arguments.length === 1) {
            s = t - r
          } else {
            s = Math.min(t - r, s)
          }
          const { length: a } = n
          const o = a - s
          const u = r + s
          const h = t - u
          move_comments(this, this, u, h, o, true)
          return i
        }
        slice(...e) {
          const { length: t } = this
          const i = super.slice(...e)
          if (!i.length) {
            return new CommentArray()
          }
          let [r, s] = e
          if (s === f) {
            s = t
          } else if (s < 0) {
            s += t
          }
          if (r < 0) {
            r += t
          } else if (r === f) {
            r = 0
          }
          move_comments(i, this, r, s - r, -r)
          return i
        }
        unshift(...e) {
          const { length: t } = this
          const i = super.unshift(...e)
          const { length: r } = e
          if (r > 0) {
            move_comments(this, this, 0, t, r, true)
          }
          return i
        }
        shift() {
          const e = super.shift()
          const { length: t } = this
          move_comments(this, this, 1, t, -1, true)
          return e
        }
        reverse() {
          super.reverse()
          reverse_comments(this)
          return this
        }
        pop() {
          const e = super.pop()
          const { length: t } = this
          l.forEach((e) => {
            const i = symbol(e, t)
            delete this[i]
          })
          return e
        }
        concat(...e) {
          let { length: t } = this
          const i = super.concat(...e)
          if (!e.length) {
            return i
          }
          e.forEach((e) => {
            const r = t
            t += n(e) ? e.length : 1
            if (!(e instanceof CommentArray)) {
              return
            }
            move_comments(i, e, 0, e.length, r)
          })
          return i
        }
      }
      e.exports = {
        CommentArray: CommentArray,
        assign(e, t, i) {
          if (!s(e)) {
            throw new TypeError('Cannot convert undefined or null to object')
          }
          if (!s(t)) {
            return e
          }
          if (i === f) {
            i = Object.keys(t)
          } else if (!n(i)) {
            throw new TypeError('keys must be array or undefined')
          }
          return assign(e, t, i)
        },
        PREFIX_BEFORE: a,
        PREFIX_AFTER_PROP: o,
        PREFIX_AFTER_COLON: u,
        PREFIX_AFTER_VALUE: h,
        PREFIX_AFTER_COMMA: c,
        COLON: p,
        UNDEFINED: f,
      }
    },
    256: (e, t, i) => {
      const { parse: r, tokenize: s } = i(534)
      const n = i(470)
      const { CommentArray: a, assign: o } = i(281)
      e.exports = {
        parse: r,
        stringify: n,
        tokenize: s,
        CommentArray: a,
        assign: o,
      }
    },
    534: (e, t, i) => {
      const r = i(36)
      const {
        CommentArray: s,
        PREFIX_BEFORE: n,
        PREFIX_AFTER_PROP: a,
        PREFIX_AFTER_COLON: o,
        PREFIX_AFTER_VALUE: u,
        PREFIX_AFTER_COMMA: h,
        COLON: c,
        UNDEFINED: l,
      } = i(281)
      const tokenize = (e) => r.tokenize(e, { comment: true, loc: true })
      const p = []
      let f = null
      let d = null
      const m = []
      let x
      let D = false
      let E = false
      let v = null
      let y = null
      let C = null
      let S
      let A = null
      const clean = () => {
        m.length = p.length = 0
        y = null
        x = l
      }
      const free = () => {
        clean()
        v.length = 0
        d = f = v = y = C = A = null
      }
      const F = 'before-all'
      const g = 'after'
      const k = 'after-all'
      const w = '['
      const b = ']'
      const B = '{'
      const T = '}'
      const P = ','
      const N = ''
      const I = '-'
      const symbolFor = (e) => Symbol.for(x !== l ? `${e}:${x}` : e)
      const transform = (e, t) => (A ? A(e, t) : t)
      const unexpected = () => {
        const e = new SyntaxError(`Unexpected token ${C.value.slice(0, 1)}`)
        Object.assign(e, C.loc.start)
        throw e
      }
      const unexpected_end = () => {
        const e = new SyntaxError('Unexpected end of JSON input')
        Object.assign(e, y ? y.loc.end : { line: 1, column: 0 })
        throw e
      }
      const next = () => {
        const e = v[++S]
        E = (C && e && C.loc.end.line === e.loc.start.line) || false
        y = C
        C = e
      }
      const type = () => {
        if (!C) {
          unexpected_end()
        }
        return C.type === 'Punctuator' ? C.value : C.type
      }
      const is = (e) => type() === e
      const expect = (e) => {
        if (!is(e)) {
          unexpected()
        }
      }
      const set_comments_host = (e) => {
        p.push(f)
        f = e
      }
      const restore_comments_host = () => {
        f = p.pop()
      }
      const assign_after_comma_comments = () => {
        if (!d) {
          return
        }
        const e = []
        for (const t of d) {
          if (t.inline) {
            e.push(t)
          } else {
            break
          }
        }
        const { length: t } = e
        if (!t) {
          return
        }
        if (t === d.length) {
          d = null
        } else {
          d.splice(0, t)
        }
        f[symbolFor(h)] = e
      }
      const assign_comments = (e) => {
        if (!d) {
          return
        }
        f[symbolFor(e)] = d
        d = null
      }
      const parse_comments = (e) => {
        const t = []
        while (C && (is('LineComment') || is('BlockComment'))) {
          const e = { ...C, inline: E }
          t.push(e)
          next()
        }
        if (D) {
          return
        }
        if (!t.length) {
          return
        }
        if (e) {
          f[symbolFor(e)] = t
          return
        }
        d = t
      }
      const set_prop = (e, t) => {
        if (t) {
          m.push(x)
        }
        x = e
      }
      const restore_prop = () => {
        x = m.pop()
      }
      const parse_object = () => {
        const e = {}
        set_comments_host(e)
        set_prop(l, true)
        let t = false
        let i
        parse_comments()
        while (!is(T)) {
          if (t) {
            expect(P)
            next()
            parse_comments()
            assign_after_comma_comments()
            if (is(T)) {
              break
            }
          }
          t = true
          expect('String')
          i = JSON.parse(C.value)
          set_prop(i)
          assign_comments(n)
          next()
          parse_comments(a)
          expect(c)
          next()
          parse_comments(o)
          e[i] = transform(i, walk())
          parse_comments(u)
        }
        next()
        x = undefined
        assign_comments(t ? g : n)
        restore_comments_host()
        restore_prop()
        return e
      }
      const parse_array = () => {
        const e = new s()
        set_comments_host(e)
        set_prop(l, true)
        let t = false
        let i = 0
        parse_comments()
        while (!is(b)) {
          if (t) {
            expect(P)
            next()
            parse_comments()
            assign_after_comma_comments()
            if (is(b)) {
              break
            }
          }
          t = true
          set_prop(i)
          assign_comments(n)
          e[i] = transform(i, walk())
          parse_comments(u)
          i++
        }
        next()
        x = undefined
        assign_comments(t ? g : n)
        restore_comments_host()
        restore_prop()
        return e
      }
      function walk() {
        let e = type()
        if (e === B) {
          next()
          return parse_object()
        }
        if (e === w) {
          next()
          return parse_array()
        }
        let t = N
        if (e === I) {
          next()
          e = type()
          t = I
        }
        let i
        switch (e) {
          case 'String':
          case 'Boolean':
          case 'Null':
          case 'Numeric':
            i = C.value
            next()
            return JSON.parse(t + i)
          default:
        }
      }
      const isObject = (e) => Object(e) === e
      const parse = (e, t, i) => {
        clean()
        v = tokenize(e)
        A = t
        D = i
        if (!v.length) {
          unexpected_end()
        }
        S = -1
        next()
        set_comments_host({})
        parse_comments(F)
        let r = walk()
        parse_comments(k)
        if (C) {
          unexpected()
        }
        if (!i && r !== null) {
          if (!isObject(r)) {
            r = new Object(r)
          }
          Object.assign(r, f)
        }
        restore_comments_host()
        r = transform('', r)
        free()
        return r
      }
      e.exports = {
        parse: parse,
        tokenize: tokenize,
        PREFIX_BEFORE: n,
        PREFIX_BEFORE_ALL: F,
        PREFIX_AFTER_PROP: a,
        PREFIX_AFTER_COLON: o,
        PREFIX_AFTER_VALUE: u,
        PREFIX_AFTER_COMMA: h,
        PREFIX_AFTER: g,
        PREFIX_AFTER_ALL: k,
        BRACKET_OPEN: w,
        BRACKET_CLOSE: b,
        CURLY_BRACKET_OPEN: B,
        CURLY_BRACKET_CLOSE: T,
        COLON: c,
        COMMA: P,
        EMPTY: N,
        UNDEFINED: l,
      }
    },
    470: (e, t, i) => {
      const {
        isArray: r,
        isObject: s,
        isFunction: n,
        isNumber: a,
        isString: o,
      } = i(504)
      const u = i(710)
      const {
        PREFIX_BEFORE_ALL: h,
        PREFIX_BEFORE: c,
        PREFIX_AFTER_PROP: l,
        PREFIX_AFTER_COLON: p,
        PREFIX_AFTER_VALUE: f,
        PREFIX_AFTER_COMMA: d,
        PREFIX_AFTER: m,
        PREFIX_AFTER_ALL: x,
        BRACKET_OPEN: D,
        BRACKET_CLOSE: E,
        CURLY_BRACKET_OPEN: v,
        CURLY_BRACKET_CLOSE: y,
        COLON: C,
        COMMA: S,
        EMPTY: A,
        UNDEFINED: F,
      } = i(534)
      const g =
        /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      const k = ' '
      const w = '\n'
      const b = 'null'
      const BEFORE = (e) => `${c}:${e}`
      const AFTER_PROP = (e) => `${l}:${e}`
      const AFTER_COLON = (e) => `${p}:${e}`
      const AFTER_VALUE = (e) => `${f}:${e}`
      const AFTER_COMMA = (e) => `${d}:${e}`
      const B = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"': '\\"',
        '\\': '\\\\',
      }
      const escape = (e) => {
        g.lastIndex = 0
        if (!g.test(e)) {
          return e
        }
        return e.replace(g, (e) => {
          const t = B[e]
          return typeof t === 'string' ? t : e
        })
      }
      const quote = (e) => `"${escape(e)}"`
      const comment_stringify = (e, t) => (t ? `//${e}` : `/*${e}*/`)
      const process_comments = (e, t, i, r) => {
        const s = e[Symbol.for(t)]
        if (!s || !s.length) {
          return A
        }
        let n = false
        const a = s.reduce((e, { inline: t, type: r, value: s }) => {
          const a = t ? k : w + i
          n = r === 'LineComment'
          return e + a + comment_stringify(s, n)
        }, A)
        return r || n ? a + w + i : a
      }
      let T = null
      let P = A
      const clean = () => {
        T = null
        P = A
      }
      const join = (e, t, i) =>
        e
          ? t
            ? e + t.trim() + w + i
            : e.trimRight() + w + i
          : t
          ? t.trimRight() + w + i
          : A
      const join_content = (e, t, i) => {
        const r = process_comments(t, c, i + P, true)
        return join(r, e, i)
      }
      const array_stringify = (e, t) => {
        const i = t + P
        const { length: r } = e
        let s = A
        let n = A
        for (let t = 0; t < r; t++) {
          if (t !== 0) {
            s += S
          }
          const r = join(n, process_comments(e, BEFORE(t), i), i)
          s += r || w + i
          s += stringify(t, e, i) || b
          s += process_comments(e, AFTER_VALUE(t), i)
          n = process_comments(e, AFTER_COMMA(t), i)
        }
        s += join(n, process_comments(e, m, i), i)
        return D + join_content(s, e, t) + E
      }
      const object_stringify = (e, t) => {
        if (!e) {
          return 'null'
        }
        const i = t + P
        let s = A
        let n = A
        let a = true
        const o = r(T) ? T : Object.keys(e)
        const iteratee = (t) => {
          const r = stringify(t, e, i)
          if (r === F) {
            return
          }
          if (!a) {
            s += S
          }
          a = false
          const o = join(n, process_comments(e, BEFORE(t), i), i)
          s += o || w + i
          s +=
            quote(t) +
            process_comments(e, AFTER_PROP(t), i) +
            C +
            process_comments(e, AFTER_COLON(t), i) +
            k +
            r +
            process_comments(e, AFTER_VALUE(t), i)
          n = process_comments(e, AFTER_COMMA(t), i)
        }
        o.forEach(iteratee)
        s += join(n, process_comments(e, m, i), i)
        return v + join_content(s, e, t) + y
      }
      function stringify(e, t, i) {
        let a = t[e]
        if (s(a) && n(a.toJSON)) {
          a = a.toJSON(e)
        }
        if (n(T)) {
          a = T.call(t, e, a)
        }
        switch (typeof a) {
          case 'string':
            return quote(a)
          case 'number':
            return Number.isFinite(a) ? String(a) : b
          case 'boolean':
          case 'null':
            return String(a)
          case 'object':
            return r(a) ? array_stringify(a, i) : object_stringify(a, i)
          default:
        }
      }
      const get_indent = (e) => (o(e) ? e : a(e) ? u(k, e) : A)
      const { toString: N } = Object.prototype
      const I = ['[object Number]', '[object String]', '[object Boolean]']
      const is_primitive_object = (e) => {
        if (typeof e !== 'object') {
          return false
        }
        const t = N.call(e)
        return I.includes(t)
      }
      e.exports = (e, t, i) => {
        const a = get_indent(i)
        if (!a) {
          return JSON.stringify(e, t)
        }
        if (!n(t) && !r(t)) {
          t = null
        }
        T = t
        P = a
        const o = is_primitive_object(e)
          ? JSON.stringify(e)
          : stringify('', { '': e }, A)
        clean()
        return s(e)
          ? process_comments(e, h, A).trimLeft() +
              o +
              process_comments(e, x, A).trimRight()
          : o
      }
    },
    504: (e, t) => {
      function isArray(e) {
        if (Array.isArray) {
          return Array.isArray(e)
        }
        return objectToString(e) === '[object Array]'
      }
      t.isArray = isArray
      function isBoolean(e) {
        return typeof e === 'boolean'
      }
      t.isBoolean = isBoolean
      function isNull(e) {
        return e === null
      }
      t.isNull = isNull
      function isNullOrUndefined(e) {
        return e == null
      }
      t.isNullOrUndefined = isNullOrUndefined
      function isNumber(e) {
        return typeof e === 'number'
      }
      t.isNumber = isNumber
      function isString(e) {
        return typeof e === 'string'
      }
      t.isString = isString
      function isSymbol(e) {
        return typeof e === 'symbol'
      }
      t.isSymbol = isSymbol
      function isUndefined(e) {
        return e === void 0
      }
      t.isUndefined = isUndefined
      function isRegExp(e) {
        return objectToString(e) === '[object RegExp]'
      }
      t.isRegExp = isRegExp
      function isObject(e) {
        return typeof e === 'object' && e !== null
      }
      t.isObject = isObject
      function isDate(e) {
        return objectToString(e) === '[object Date]'
      }
      t.isDate = isDate
      function isError(e) {
        return objectToString(e) === '[object Error]' || e instanceof Error
      }
      t.isError = isError
      function isFunction(e) {
        return typeof e === 'function'
      }
      t.isFunction = isFunction
      function isPrimitive(e) {
        return (
          e === null ||
          typeof e === 'boolean' ||
          typeof e === 'number' ||
          typeof e === 'string' ||
          typeof e === 'symbol' ||
          typeof e === 'undefined'
        )
      }
      t.isPrimitive = isPrimitive
      t.isBuffer = Buffer.isBuffer
      function objectToString(e) {
        return Object.prototype.toString.call(e)
      }
    },
    36: function (e) {
      ;(function webpackUniversalModuleDefinition(t, i) {
        if (true) e.exports = i()
        else {
        }
      })(this, function () {
        return (function (e) {
          var t = {}
          function __nested_webpack_require_583__(i) {
            if (t[i]) return t[i].exports
            var r = (t[i] = { exports: {}, id: i, loaded: false })
            e[i].call(r.exports, r, r.exports, __nested_webpack_require_583__)
            r.loaded = true
            return r.exports
          }
          __nested_webpack_require_583__.m = e
          __nested_webpack_require_583__.c = t
          __nested_webpack_require_583__.p = ''
          return __nested_webpack_require_583__(0)
        })([
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(1)
            var s = i(3)
            var n = i(8)
            var a = i(15)
            function parse(e, t, i) {
              var a = null
              var proxyDelegate = function (e, t) {
                if (i) {
                  i(e, t)
                }
                if (a) {
                  a.visit(e, t)
                }
              }
              var o = typeof i === 'function' ? proxyDelegate : null
              var u = false
              if (t) {
                u = typeof t.comment === 'boolean' && t.comment
                var h = typeof t.attachComment === 'boolean' && t.attachComment
                if (u || h) {
                  a = new r.CommentHandler()
                  a.attach = h
                  t.comment = true
                  o = proxyDelegate
                }
              }
              var c = false
              if (t && typeof t.sourceType === 'string') {
                c = t.sourceType === 'module'
              }
              var l
              if (t && typeof t.jsx === 'boolean' && t.jsx) {
                l = new s.JSXParser(e, t, o)
              } else {
                l = new n.Parser(e, t, o)
              }
              var p = c ? l.parseModule() : l.parseScript()
              var f = p
              if (u && a) {
                f.comments = a.comments
              }
              if (l.config.tokens) {
                f.tokens = l.tokens
              }
              if (l.config.tolerant) {
                f.errors = l.errorHandler.errors
              }
              return f
            }
            t.parse = parse
            function parseModule(e, t, i) {
              var r = t || {}
              r.sourceType = 'module'
              return parse(e, r, i)
            }
            t.parseModule = parseModule
            function parseScript(e, t, i) {
              var r = t || {}
              r.sourceType = 'script'
              return parse(e, r, i)
            }
            t.parseScript = parseScript
            function tokenize(e, t, i) {
              var r = new a.Tokenizer(e, t)
              var s
              s = []
              try {
                while (true) {
                  var n = r.getNextToken()
                  if (!n) {
                    break
                  }
                  if (i) {
                    n = i(n)
                  }
                  s.push(n)
                }
              } catch (e) {
                r.errorHandler.tolerate(e)
              }
              if (r.errorHandler.tolerant) {
                s.errors = r.errors()
              }
              return s
            }
            t.tokenize = tokenize
            var o = i(2)
            t.Syntax = o.Syntax
            t.version = '4.0.1'
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(2)
            var s = (function () {
              function CommentHandler() {
                this.attach = false
                this.comments = []
                this.stack = []
                this.leading = []
                this.trailing = []
              }
              CommentHandler.prototype.insertInnerComments = function (e, t) {
                if (e.type === r.Syntax.BlockStatement && e.body.length === 0) {
                  var i = []
                  for (var s = this.leading.length - 1; s >= 0; --s) {
                    var n = this.leading[s]
                    if (t.end.offset >= n.start) {
                      i.unshift(n.comment)
                      this.leading.splice(s, 1)
                      this.trailing.splice(s, 1)
                    }
                  }
                  if (i.length) {
                    e.innerComments = i
                  }
                }
              }
              CommentHandler.prototype.findTrailingComments = function (e) {
                var t = []
                if (this.trailing.length > 0) {
                  for (var i = this.trailing.length - 1; i >= 0; --i) {
                    var r = this.trailing[i]
                    if (r.start >= e.end.offset) {
                      t.unshift(r.comment)
                    }
                  }
                  this.trailing.length = 0
                  return t
                }
                var s = this.stack[this.stack.length - 1]
                if (s && s.node.trailingComments) {
                  var n = s.node.trailingComments[0]
                  if (n && n.range[0] >= e.end.offset) {
                    t = s.node.trailingComments
                    delete s.node.trailingComments
                  }
                }
                return t
              }
              CommentHandler.prototype.findLeadingComments = function (e) {
                var t = []
                var i
                while (this.stack.length > 0) {
                  var r = this.stack[this.stack.length - 1]
                  if (r && r.start >= e.start.offset) {
                    i = r.node
                    this.stack.pop()
                  } else {
                    break
                  }
                }
                if (i) {
                  var s = i.leadingComments ? i.leadingComments.length : 0
                  for (var n = s - 1; n >= 0; --n) {
                    var a = i.leadingComments[n]
                    if (a.range[1] <= e.start.offset) {
                      t.unshift(a)
                      i.leadingComments.splice(n, 1)
                    }
                  }
                  if (i.leadingComments && i.leadingComments.length === 0) {
                    delete i.leadingComments
                  }
                  return t
                }
                for (var n = this.leading.length - 1; n >= 0; --n) {
                  var r = this.leading[n]
                  if (r.start <= e.start.offset) {
                    t.unshift(r.comment)
                    this.leading.splice(n, 1)
                  }
                }
                return t
              }
              CommentHandler.prototype.visitNode = function (e, t) {
                if (e.type === r.Syntax.Program && e.body.length > 0) {
                  return
                }
                this.insertInnerComments(e, t)
                var i = this.findTrailingComments(t)
                var s = this.findLeadingComments(t)
                if (s.length > 0) {
                  e.leadingComments = s
                }
                if (i.length > 0) {
                  e.trailingComments = i
                }
                this.stack.push({ node: e, start: t.start.offset })
              }
              CommentHandler.prototype.visitComment = function (e, t) {
                var i = e.type[0] === 'L' ? 'Line' : 'Block'
                var r = { type: i, value: e.value }
                if (e.range) {
                  r.range = e.range
                }
                if (e.loc) {
                  r.loc = e.loc
                }
                this.comments.push(r)
                if (this.attach) {
                  var s = {
                    comment: {
                      type: i,
                      value: e.value,
                      range: [t.start.offset, t.end.offset],
                    },
                    start: t.start.offset,
                  }
                  if (e.loc) {
                    s.comment.loc = e.loc
                  }
                  e.type = i
                  this.leading.push(s)
                  this.trailing.push(s)
                }
              }
              CommentHandler.prototype.visit = function (e, t) {
                if (e.type === 'LineComment') {
                  this.visitComment(e, t)
                } else if (e.type === 'BlockComment') {
                  this.visitComment(e, t)
                } else if (this.attach) {
                  this.visitNode(e, t)
                }
              }
              return CommentHandler
            })()
            t.CommentHandler = s
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.Syntax = {
              AssignmentExpression: 'AssignmentExpression',
              AssignmentPattern: 'AssignmentPattern',
              ArrayExpression: 'ArrayExpression',
              ArrayPattern: 'ArrayPattern',
              ArrowFunctionExpression: 'ArrowFunctionExpression',
              AwaitExpression: 'AwaitExpression',
              BlockStatement: 'BlockStatement',
              BinaryExpression: 'BinaryExpression',
              BreakStatement: 'BreakStatement',
              CallExpression: 'CallExpression',
              CatchClause: 'CatchClause',
              ClassBody: 'ClassBody',
              ClassDeclaration: 'ClassDeclaration',
              ClassExpression: 'ClassExpression',
              ConditionalExpression: 'ConditionalExpression',
              ContinueStatement: 'ContinueStatement',
              DoWhileStatement: 'DoWhileStatement',
              DebuggerStatement: 'DebuggerStatement',
              EmptyStatement: 'EmptyStatement',
              ExportAllDeclaration: 'ExportAllDeclaration',
              ExportDefaultDeclaration: 'ExportDefaultDeclaration',
              ExportNamedDeclaration: 'ExportNamedDeclaration',
              ExportSpecifier: 'ExportSpecifier',
              ExpressionStatement: 'ExpressionStatement',
              ForStatement: 'ForStatement',
              ForOfStatement: 'ForOfStatement',
              ForInStatement: 'ForInStatement',
              FunctionDeclaration: 'FunctionDeclaration',
              FunctionExpression: 'FunctionExpression',
              Identifier: 'Identifier',
              IfStatement: 'IfStatement',
              ImportDeclaration: 'ImportDeclaration',
              ImportDefaultSpecifier: 'ImportDefaultSpecifier',
              ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
              ImportSpecifier: 'ImportSpecifier',
              Literal: 'Literal',
              LabeledStatement: 'LabeledStatement',
              LogicalExpression: 'LogicalExpression',
              MemberExpression: 'MemberExpression',
              MetaProperty: 'MetaProperty',
              MethodDefinition: 'MethodDefinition',
              NewExpression: 'NewExpression',
              ObjectExpression: 'ObjectExpression',
              ObjectPattern: 'ObjectPattern',
              Program: 'Program',
              Property: 'Property',
              RestElement: 'RestElement',
              ReturnStatement: 'ReturnStatement',
              SequenceExpression: 'SequenceExpression',
              SpreadElement: 'SpreadElement',
              Super: 'Super',
              SwitchCase: 'SwitchCase',
              SwitchStatement: 'SwitchStatement',
              TaggedTemplateExpression: 'TaggedTemplateExpression',
              TemplateElement: 'TemplateElement',
              TemplateLiteral: 'TemplateLiteral',
              ThisExpression: 'ThisExpression',
              ThrowStatement: 'ThrowStatement',
              TryStatement: 'TryStatement',
              UnaryExpression: 'UnaryExpression',
              UpdateExpression: 'UpdateExpression',
              VariableDeclaration: 'VariableDeclaration',
              VariableDeclarator: 'VariableDeclarator',
              WhileStatement: 'WhileStatement',
              WithStatement: 'WithStatement',
              YieldExpression: 'YieldExpression',
            }
          },
          function (e, t, i) {
            'use strict'
            var r =
              (this && this.__extends) ||
              (function () {
                var e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t
                    }) ||
                  function (e, t) {
                    for (var i in t) if (t.hasOwnProperty(i)) e[i] = t[i]
                  }
                return function (t, i) {
                  e(t, i)
                  function __() {
                    this.constructor = t
                  }
                  t.prototype =
                    i === null
                      ? Object.create(i)
                      : ((__.prototype = i.prototype), new __())
                }
              })()
            Object.defineProperty(t, '__esModule', { value: true })
            var s = i(4)
            var n = i(5)
            var a = i(6)
            var o = i(7)
            var u = i(8)
            var h = i(13)
            var c = i(14)
            h.TokenName[100] = 'JSXIdentifier'
            h.TokenName[101] = 'JSXText'
            function getQualifiedElementName(e) {
              var t
              switch (e.type) {
                case a.JSXSyntax.JSXIdentifier:
                  var i = e
                  t = i.name
                  break
                case a.JSXSyntax.JSXNamespacedName:
                  var r = e
                  t =
                    getQualifiedElementName(r.namespace) +
                    ':' +
                    getQualifiedElementName(r.name)
                  break
                case a.JSXSyntax.JSXMemberExpression:
                  var s = e
                  t =
                    getQualifiedElementName(s.object) +
                    '.' +
                    getQualifiedElementName(s.property)
                  break
                default:
                  break
              }
              return t
            }
            var l = (function (e) {
              r(JSXParser, e)
              function JSXParser(t, i, r) {
                return e.call(this, t, i, r) || this
              }
              JSXParser.prototype.parsePrimaryExpression = function () {
                return this.match('<')
                  ? this.parseJSXRoot()
                  : e.prototype.parsePrimaryExpression.call(this)
              }
              JSXParser.prototype.startJSX = function () {
                this.scanner.index = this.startMarker.index
                this.scanner.lineNumber = this.startMarker.line
                this.scanner.lineStart =
                  this.startMarker.index - this.startMarker.column
              }
              JSXParser.prototype.finishJSX = function () {
                this.nextToken()
              }
              JSXParser.prototype.reenterJSX = function () {
                this.startJSX()
                this.expectJSX('}')
                if (this.config.tokens) {
                  this.tokens.pop()
                }
              }
              JSXParser.prototype.createJSXNode = function () {
                this.collectComments()
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              JSXParser.prototype.createJSXChildNode = function () {
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              JSXParser.prototype.scanXHTMLEntity = function (e) {
                var t = '&'
                var i = true
                var r = false
                var n = false
                var a = false
                while (!this.scanner.eof() && i && !r) {
                  var o = this.scanner.source[this.scanner.index]
                  if (o === e) {
                    break
                  }
                  r = o === ';'
                  t += o
                  ++this.scanner.index
                  if (!r) {
                    switch (t.length) {
                      case 2:
                        n = o === '#'
                        break
                      case 3:
                        if (n) {
                          a = o === 'x'
                          i = a || s.Character.isDecimalDigit(o.charCodeAt(0))
                          n = n && !a
                        }
                        break
                      default:
                        i =
                          i &&
                          !(n && !s.Character.isDecimalDigit(o.charCodeAt(0)))
                        i =
                          i && !(a && !s.Character.isHexDigit(o.charCodeAt(0)))
                        break
                    }
                  }
                }
                if (i && r && t.length > 2) {
                  var u = t.substr(1, t.length - 2)
                  if (n && u.length > 1) {
                    t = String.fromCharCode(parseInt(u.substr(1), 10))
                  } else if (a && u.length > 2) {
                    t = String.fromCharCode(parseInt('0' + u.substr(1), 16))
                  } else if (!n && !a && c.XHTMLEntities[u]) {
                    t = c.XHTMLEntities[u]
                  }
                }
                return t
              }
              JSXParser.prototype.lexJSX = function () {
                var e = this.scanner.source.charCodeAt(this.scanner.index)
                if (
                  e === 60 ||
                  e === 62 ||
                  e === 47 ||
                  e === 58 ||
                  e === 61 ||
                  e === 123 ||
                  e === 125
                ) {
                  var t = this.scanner.source[this.scanner.index++]
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index,
                  }
                }
                if (e === 34 || e === 39) {
                  var i = this.scanner.index
                  var r = this.scanner.source[this.scanner.index++]
                  var n = ''
                  while (!this.scanner.eof()) {
                    var a = this.scanner.source[this.scanner.index++]
                    if (a === r) {
                      break
                    } else if (a === '&') {
                      n += this.scanXHTMLEntity(r)
                    } else {
                      n += a
                    }
                  }
                  return {
                    type: 8,
                    value: n,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                if (e === 46) {
                  var o = this.scanner.source.charCodeAt(this.scanner.index + 1)
                  var u = this.scanner.source.charCodeAt(this.scanner.index + 2)
                  var t = o === 46 && u === 46 ? '...' : '.'
                  var i = this.scanner.index
                  this.scanner.index += t.length
                  return {
                    type: 7,
                    value: t,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                if (e === 96) {
                  return {
                    type: 10,
                    value: '',
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index,
                  }
                }
                if (s.Character.isIdentifierStart(e) && e !== 92) {
                  var i = this.scanner.index
                  ++this.scanner.index
                  while (!this.scanner.eof()) {
                    var a = this.scanner.source.charCodeAt(this.scanner.index)
                    if (s.Character.isIdentifierPart(a) && a !== 92) {
                      ++this.scanner.index
                    } else if (a === 45) {
                      ++this.scanner.index
                    } else {
                      break
                    }
                  }
                  var h = this.scanner.source.slice(i, this.scanner.index)
                  return {
                    type: 100,
                    value: h,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: i,
                    end: this.scanner.index,
                  }
                }
                return this.scanner.lex()
              }
              JSXParser.prototype.nextJSXToken = function () {
                this.collectComments()
                this.startMarker.index = this.scanner.index
                this.startMarker.line = this.scanner.lineNumber
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var e = this.lexJSX()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(e))
                }
                return e
              }
              JSXParser.prototype.nextJSXText = function () {
                this.startMarker.index = this.scanner.index
                this.startMarker.line = this.scanner.lineNumber
                this.startMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var e = this.scanner.index
                var t = ''
                while (!this.scanner.eof()) {
                  var i = this.scanner.source[this.scanner.index]
                  if (i === '{' || i === '<') {
                    break
                  }
                  ++this.scanner.index
                  t += i
                  if (s.Character.isLineTerminator(i.charCodeAt(0))) {
                    ++this.scanner.lineNumber
                    if (
                      i === '\r' &&
                      this.scanner.source[this.scanner.index] === '\n'
                    ) {
                      ++this.scanner.index
                    }
                    this.scanner.lineStart = this.scanner.index
                  }
                }
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                var r = {
                  type: 101,
                  value: t,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start: e,
                  end: this.scanner.index,
                }
                if (t.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(r))
                }
                return r
              }
              JSXParser.prototype.peekJSXToken = function () {
                var e = this.scanner.saveState()
                this.scanner.scanComments()
                var t = this.lexJSX()
                this.scanner.restoreState(e)
                return t
              }
              JSXParser.prototype.expectJSX = function (e) {
                var t = this.nextJSXToken()
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              JSXParser.prototype.matchJSX = function (e) {
                var t = this.peekJSXToken()
                return t.type === 7 && t.value === e
              }
              JSXParser.prototype.parseJSXIdentifier = function () {
                var e = this.createJSXNode()
                var t = this.nextJSXToken()
                if (t.type !== 100) {
                  this.throwUnexpectedToken(t)
                }
                return this.finalize(e, new n.JSXIdentifier(t.value))
              }
              JSXParser.prototype.parseJSXElementName = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var i = t
                  this.expectJSX(':')
                  var r = this.parseJSXIdentifier()
                  t = this.finalize(e, new n.JSXNamespacedName(i, r))
                } else if (this.matchJSX('.')) {
                  while (this.matchJSX('.')) {
                    var s = t
                    this.expectJSX('.')
                    var a = this.parseJSXIdentifier()
                    t = this.finalize(e, new n.JSXMemberExpression(s, a))
                  }
                }
                return t
              }
              JSXParser.prototype.parseJSXAttributeName = function () {
                var e = this.createJSXNode()
                var t
                var i = this.parseJSXIdentifier()
                if (this.matchJSX(':')) {
                  var r = i
                  this.expectJSX(':')
                  var s = this.parseJSXIdentifier()
                  t = this.finalize(e, new n.JSXNamespacedName(r, s))
                } else {
                  t = i
                }
                return t
              }
              JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
                var e = this.createJSXNode()
                var t = this.nextJSXToken()
                if (t.type !== 8) {
                  this.throwUnexpectedToken(t)
                }
                var i = this.getTokenRaw(t)
                return this.finalize(e, new o.Literal(t.value, i))
              }
              JSXParser.prototype.parseJSXExpressionAttribute = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                this.finishJSX()
                if (this.match('}')) {
                  this.tolerateError(
                    'JSX attributes must only be assigned a non-empty expression'
                  )
                }
                var t = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(e, new n.JSXExpressionContainer(t))
              }
              JSXParser.prototype.parseJSXAttributeValue = function () {
                return this.matchJSX('{')
                  ? this.parseJSXExpressionAttribute()
                  : this.matchJSX('<')
                  ? this.parseJSXElement()
                  : this.parseJSXStringLiteralAttribute()
              }
              JSXParser.prototype.parseJSXNameValueAttribute = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXAttributeName()
                var i = null
                if (this.matchJSX('=')) {
                  this.expectJSX('=')
                  i = this.parseJSXAttributeValue()
                }
                return this.finalize(e, new n.JSXAttribute(t, i))
              }
              JSXParser.prototype.parseJSXSpreadAttribute = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                this.expectJSX('...')
                this.finishJSX()
                var t = this.parseAssignmentExpression()
                this.reenterJSX()
                return this.finalize(e, new n.JSXSpreadAttribute(t))
              }
              JSXParser.prototype.parseJSXAttributes = function () {
                var e = []
                while (!this.matchJSX('/') && !this.matchJSX('>')) {
                  var t = this.matchJSX('{')
                    ? this.parseJSXSpreadAttribute()
                    : this.parseJSXNameValueAttribute()
                  e.push(t)
                }
                return e
              }
              JSXParser.prototype.parseJSXOpeningElement = function () {
                var e = this.createJSXNode()
                this.expectJSX('<')
                var t = this.parseJSXElementName()
                var i = this.parseJSXAttributes()
                var r = this.matchJSX('/')
                if (r) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(e, new n.JSXOpeningElement(t, r, i))
              }
              JSXParser.prototype.parseJSXBoundaryElement = function () {
                var e = this.createJSXNode()
                this.expectJSX('<')
                if (this.matchJSX('/')) {
                  this.expectJSX('/')
                  var t = this.parseJSXElementName()
                  this.expectJSX('>')
                  return this.finalize(e, new n.JSXClosingElement(t))
                }
                var i = this.parseJSXElementName()
                var r = this.parseJSXAttributes()
                var s = this.matchJSX('/')
                if (s) {
                  this.expectJSX('/')
                }
                this.expectJSX('>')
                return this.finalize(e, new n.JSXOpeningElement(i, s, r))
              }
              JSXParser.prototype.parseJSXEmptyExpression = function () {
                var e = this.createJSXChildNode()
                this.collectComments()
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                return this.finalize(e, new n.JSXEmptyExpression())
              }
              JSXParser.prototype.parseJSXExpressionContainer = function () {
                var e = this.createJSXNode()
                this.expectJSX('{')
                var t
                if (this.matchJSX('}')) {
                  t = this.parseJSXEmptyExpression()
                  this.expectJSX('}')
                } else {
                  this.finishJSX()
                  t = this.parseAssignmentExpression()
                  this.reenterJSX()
                }
                return this.finalize(e, new n.JSXExpressionContainer(t))
              }
              JSXParser.prototype.parseJSXChildren = function () {
                var e = []
                while (!this.scanner.eof()) {
                  var t = this.createJSXChildNode()
                  var i = this.nextJSXText()
                  if (i.start < i.end) {
                    var r = this.getTokenRaw(i)
                    var s = this.finalize(t, new n.JSXText(i.value, r))
                    e.push(s)
                  }
                  if (this.scanner.source[this.scanner.index] === '{') {
                    var a = this.parseJSXExpressionContainer()
                    e.push(a)
                  } else {
                    break
                  }
                }
                return e
              }
              JSXParser.prototype.parseComplexJSXElement = function (e) {
                var t = []
                while (!this.scanner.eof()) {
                  e.children = e.children.concat(this.parseJSXChildren())
                  var i = this.createJSXChildNode()
                  var r = this.parseJSXBoundaryElement()
                  if (r.type === a.JSXSyntax.JSXOpeningElement) {
                    var s = r
                    if (s.selfClosing) {
                      var o = this.finalize(i, new n.JSXElement(s, [], null))
                      e.children.push(o)
                    } else {
                      t.push(e)
                      e = { node: i, opening: s, closing: null, children: [] }
                    }
                  }
                  if (r.type === a.JSXSyntax.JSXClosingElement) {
                    e.closing = r
                    var u = getQualifiedElementName(e.opening.name)
                    var h = getQualifiedElementName(e.closing.name)
                    if (u !== h) {
                      this.tolerateError(
                        'Expected corresponding JSX closing tag for %0',
                        u
                      )
                    }
                    if (t.length > 0) {
                      var o = this.finalize(
                        e.node,
                        new n.JSXElement(e.opening, e.children, e.closing)
                      )
                      e = t[t.length - 1]
                      e.children.push(o)
                      t.pop()
                    } else {
                      break
                    }
                  }
                }
                return e
              }
              JSXParser.prototype.parseJSXElement = function () {
                var e = this.createJSXNode()
                var t = this.parseJSXOpeningElement()
                var i = []
                var r = null
                if (!t.selfClosing) {
                  var s = this.parseComplexJSXElement({
                    node: e,
                    opening: t,
                    closing: r,
                    children: i,
                  })
                  i = s.children
                  r = s.closing
                }
                return this.finalize(e, new n.JSXElement(t, i, r))
              }
              JSXParser.prototype.parseJSXRoot = function () {
                if (this.config.tokens) {
                  this.tokens.pop()
                }
                this.startJSX()
                var e = this.parseJSXElement()
                this.finishJSX()
                return e
              }
              JSXParser.prototype.isStartOfExpression = function () {
                return (
                  e.prototype.isStartOfExpression.call(this) || this.match('<')
                )
              }
              return JSXParser
            })(u.Parser)
            t.JSXParser = l
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            }
            t.Character = {
              fromCodePoint: function (e) {
                return e < 65536
                  ? String.fromCharCode(e)
                  : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
                      String.fromCharCode(56320 + ((e - 65536) & 1023))
              },
              isWhiteSpace: function (e) {
                return (
                  e === 32 ||
                  e === 9 ||
                  e === 11 ||
                  e === 12 ||
                  e === 160 ||
                  (e >= 5760 &&
                    [
                      5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199,
                      8200, 8201, 8202, 8239, 8287, 12288, 65279,
                    ].indexOf(e) >= 0)
                )
              },
              isLineTerminator: function (e) {
                return e === 10 || e === 13 || e === 8232 || e === 8233
              },
              isIdentifierStart: function (e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  e === 92 ||
                  (e >= 128 &&
                    i.NonAsciiIdentifierStart.test(
                      t.Character.fromCodePoint(e)
                    ))
                )
              },
              isIdentifierPart: function (e) {
                return (
                  e === 36 ||
                  e === 95 ||
                  (e >= 65 && e <= 90) ||
                  (e >= 97 && e <= 122) ||
                  (e >= 48 && e <= 57) ||
                  e === 92 ||
                  (e >= 128 &&
                    i.NonAsciiIdentifierPart.test(t.Character.fromCodePoint(e)))
                )
              },
              isDecimalDigit: function (e) {
                return e >= 48 && e <= 57
              },
              isHexDigit: function (e) {
                return (
                  (e >= 48 && e <= 57) ||
                  (e >= 65 && e <= 70) ||
                  (e >= 97 && e <= 102)
                )
              },
              isOctalDigit: function (e) {
                return e >= 48 && e <= 55
              },
            }
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(6)
            var s = (function () {
              function JSXClosingElement(e) {
                this.type = r.JSXSyntax.JSXClosingElement
                this.name = e
              }
              return JSXClosingElement
            })()
            t.JSXClosingElement = s
            var n = (function () {
              function JSXElement(e, t, i) {
                this.type = r.JSXSyntax.JSXElement
                this.openingElement = e
                this.children = t
                this.closingElement = i
              }
              return JSXElement
            })()
            t.JSXElement = n
            var a = (function () {
              function JSXEmptyExpression() {
                this.type = r.JSXSyntax.JSXEmptyExpression
              }
              return JSXEmptyExpression
            })()
            t.JSXEmptyExpression = a
            var o = (function () {
              function JSXExpressionContainer(e) {
                this.type = r.JSXSyntax.JSXExpressionContainer
                this.expression = e
              }
              return JSXExpressionContainer
            })()
            t.JSXExpressionContainer = o
            var u = (function () {
              function JSXIdentifier(e) {
                this.type = r.JSXSyntax.JSXIdentifier
                this.name = e
              }
              return JSXIdentifier
            })()
            t.JSXIdentifier = u
            var h = (function () {
              function JSXMemberExpression(e, t) {
                this.type = r.JSXSyntax.JSXMemberExpression
                this.object = e
                this.property = t
              }
              return JSXMemberExpression
            })()
            t.JSXMemberExpression = h
            var c = (function () {
              function JSXAttribute(e, t) {
                this.type = r.JSXSyntax.JSXAttribute
                this.name = e
                this.value = t
              }
              return JSXAttribute
            })()
            t.JSXAttribute = c
            var l = (function () {
              function JSXNamespacedName(e, t) {
                this.type = r.JSXSyntax.JSXNamespacedName
                this.namespace = e
                this.name = t
              }
              return JSXNamespacedName
            })()
            t.JSXNamespacedName = l
            var p = (function () {
              function JSXOpeningElement(e, t, i) {
                this.type = r.JSXSyntax.JSXOpeningElement
                this.name = e
                this.selfClosing = t
                this.attributes = i
              }
              return JSXOpeningElement
            })()
            t.JSXOpeningElement = p
            var f = (function () {
              function JSXSpreadAttribute(e) {
                this.type = r.JSXSyntax.JSXSpreadAttribute
                this.argument = e
              }
              return JSXSpreadAttribute
            })()
            t.JSXSpreadAttribute = f
            var d = (function () {
              function JSXText(e, t) {
                this.type = r.JSXSyntax.JSXText
                this.value = e
                this.raw = t
              }
              return JSXText
            })()
            t.JSXText = d
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.JSXSyntax = {
              JSXAttribute: 'JSXAttribute',
              JSXClosingElement: 'JSXClosingElement',
              JSXElement: 'JSXElement',
              JSXEmptyExpression: 'JSXEmptyExpression',
              JSXExpressionContainer: 'JSXExpressionContainer',
              JSXIdentifier: 'JSXIdentifier',
              JSXMemberExpression: 'JSXMemberExpression',
              JSXNamespacedName: 'JSXNamespacedName',
              JSXOpeningElement: 'JSXOpeningElement',
              JSXSpreadAttribute: 'JSXSpreadAttribute',
              JSXText: 'JSXText',
            }
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(2)
            var s = (function () {
              function ArrayExpression(e) {
                this.type = r.Syntax.ArrayExpression
                this.elements = e
              }
              return ArrayExpression
            })()
            t.ArrayExpression = s
            var n = (function () {
              function ArrayPattern(e) {
                this.type = r.Syntax.ArrayPattern
                this.elements = e
              }
              return ArrayPattern
            })()
            t.ArrayPattern = n
            var a = (function () {
              function ArrowFunctionExpression(e, t, i) {
                this.type = r.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = e
                this.body = t
                this.generator = false
                this.expression = i
                this.async = false
              }
              return ArrowFunctionExpression
            })()
            t.ArrowFunctionExpression = a
            var o = (function () {
              function AssignmentExpression(e, t, i) {
                this.type = r.Syntax.AssignmentExpression
                this.operator = e
                this.left = t
                this.right = i
              }
              return AssignmentExpression
            })()
            t.AssignmentExpression = o
            var u = (function () {
              function AssignmentPattern(e, t) {
                this.type = r.Syntax.AssignmentPattern
                this.left = e
                this.right = t
              }
              return AssignmentPattern
            })()
            t.AssignmentPattern = u
            var h = (function () {
              function AsyncArrowFunctionExpression(e, t, i) {
                this.type = r.Syntax.ArrowFunctionExpression
                this.id = null
                this.params = e
                this.body = t
                this.generator = false
                this.expression = i
                this.async = true
              }
              return AsyncArrowFunctionExpression
            })()
            t.AsyncArrowFunctionExpression = h
            var c = (function () {
              function AsyncFunctionDeclaration(e, t, i) {
                this.type = r.Syntax.FunctionDeclaration
                this.id = e
                this.params = t
                this.body = i
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionDeclaration
            })()
            t.AsyncFunctionDeclaration = c
            var l = (function () {
              function AsyncFunctionExpression(e, t, i) {
                this.type = r.Syntax.FunctionExpression
                this.id = e
                this.params = t
                this.body = i
                this.generator = false
                this.expression = false
                this.async = true
              }
              return AsyncFunctionExpression
            })()
            t.AsyncFunctionExpression = l
            var p = (function () {
              function AwaitExpression(e) {
                this.type = r.Syntax.AwaitExpression
                this.argument = e
              }
              return AwaitExpression
            })()
            t.AwaitExpression = p
            var f = (function () {
              function BinaryExpression(e, t, i) {
                var s = e === '||' || e === '&&'
                this.type = s
                  ? r.Syntax.LogicalExpression
                  : r.Syntax.BinaryExpression
                this.operator = e
                this.left = t
                this.right = i
              }
              return BinaryExpression
            })()
            t.BinaryExpression = f
            var d = (function () {
              function BlockStatement(e) {
                this.type = r.Syntax.BlockStatement
                this.body = e
              }
              return BlockStatement
            })()
            t.BlockStatement = d
            var m = (function () {
              function BreakStatement(e) {
                this.type = r.Syntax.BreakStatement
                this.label = e
              }
              return BreakStatement
            })()
            t.BreakStatement = m
            var x = (function () {
              function CallExpression(e, t) {
                this.type = r.Syntax.CallExpression
                this.callee = e
                this.arguments = t
              }
              return CallExpression
            })()
            t.CallExpression = x
            var D = (function () {
              function CatchClause(e, t) {
                this.type = r.Syntax.CatchClause
                this.param = e
                this.body = t
              }
              return CatchClause
            })()
            t.CatchClause = D
            var E = (function () {
              function ClassBody(e) {
                this.type = r.Syntax.ClassBody
                this.body = e
              }
              return ClassBody
            })()
            t.ClassBody = E
            var v = (function () {
              function ClassDeclaration(e, t, i) {
                this.type = r.Syntax.ClassDeclaration
                this.id = e
                this.superClass = t
                this.body = i
              }
              return ClassDeclaration
            })()
            t.ClassDeclaration = v
            var y = (function () {
              function ClassExpression(e, t, i) {
                this.type = r.Syntax.ClassExpression
                this.id = e
                this.superClass = t
                this.body = i
              }
              return ClassExpression
            })()
            t.ClassExpression = y
            var C = (function () {
              function ComputedMemberExpression(e, t) {
                this.type = r.Syntax.MemberExpression
                this.computed = true
                this.object = e
                this.property = t
              }
              return ComputedMemberExpression
            })()
            t.ComputedMemberExpression = C
            var S = (function () {
              function ConditionalExpression(e, t, i) {
                this.type = r.Syntax.ConditionalExpression
                this.test = e
                this.consequent = t
                this.alternate = i
              }
              return ConditionalExpression
            })()
            t.ConditionalExpression = S
            var A = (function () {
              function ContinueStatement(e) {
                this.type = r.Syntax.ContinueStatement
                this.label = e
              }
              return ContinueStatement
            })()
            t.ContinueStatement = A
            var F = (function () {
              function DebuggerStatement() {
                this.type = r.Syntax.DebuggerStatement
              }
              return DebuggerStatement
            })()
            t.DebuggerStatement = F
            var g = (function () {
              function Directive(e, t) {
                this.type = r.Syntax.ExpressionStatement
                this.expression = e
                this.directive = t
              }
              return Directive
            })()
            t.Directive = g
            var k = (function () {
              function DoWhileStatement(e, t) {
                this.type = r.Syntax.DoWhileStatement
                this.body = e
                this.test = t
              }
              return DoWhileStatement
            })()
            t.DoWhileStatement = k
            var w = (function () {
              function EmptyStatement() {
                this.type = r.Syntax.EmptyStatement
              }
              return EmptyStatement
            })()
            t.EmptyStatement = w
            var b = (function () {
              function ExportAllDeclaration(e) {
                this.type = r.Syntax.ExportAllDeclaration
                this.source = e
              }
              return ExportAllDeclaration
            })()
            t.ExportAllDeclaration = b
            var B = (function () {
              function ExportDefaultDeclaration(e) {
                this.type = r.Syntax.ExportDefaultDeclaration
                this.declaration = e
              }
              return ExportDefaultDeclaration
            })()
            t.ExportDefaultDeclaration = B
            var T = (function () {
              function ExportNamedDeclaration(e, t, i) {
                this.type = r.Syntax.ExportNamedDeclaration
                this.declaration = e
                this.specifiers = t
                this.source = i
              }
              return ExportNamedDeclaration
            })()
            t.ExportNamedDeclaration = T
            var P = (function () {
              function ExportSpecifier(e, t) {
                this.type = r.Syntax.ExportSpecifier
                this.exported = t
                this.local = e
              }
              return ExportSpecifier
            })()
            t.ExportSpecifier = P
            var N = (function () {
              function ExpressionStatement(e) {
                this.type = r.Syntax.ExpressionStatement
                this.expression = e
              }
              return ExpressionStatement
            })()
            t.ExpressionStatement = N
            var I = (function () {
              function ForInStatement(e, t, i) {
                this.type = r.Syntax.ForInStatement
                this.left = e
                this.right = t
                this.body = i
                this.each = false
              }
              return ForInStatement
            })()
            t.ForInStatement = I
            var M = (function () {
              function ForOfStatement(e, t, i) {
                this.type = r.Syntax.ForOfStatement
                this.left = e
                this.right = t
                this.body = i
              }
              return ForOfStatement
            })()
            t.ForOfStatement = M
            var X = (function () {
              function ForStatement(e, t, i, s) {
                this.type = r.Syntax.ForStatement
                this.init = e
                this.test = t
                this.update = i
                this.body = s
              }
              return ForStatement
            })()
            t.ForStatement = X
            var J = (function () {
              function FunctionDeclaration(e, t, i, s) {
                this.type = r.Syntax.FunctionDeclaration
                this.id = e
                this.params = t
                this.body = i
                this.generator = s
                this.expression = false
                this.async = false
              }
              return FunctionDeclaration
            })()
            t.FunctionDeclaration = J
            var L = (function () {
              function FunctionExpression(e, t, i, s) {
                this.type = r.Syntax.FunctionExpression
                this.id = e
                this.params = t
                this.body = i
                this.generator = s
                this.expression = false
                this.async = false
              }
              return FunctionExpression
            })()
            t.FunctionExpression = L
            var R = (function () {
              function Identifier(e) {
                this.type = r.Syntax.Identifier
                this.name = e
              }
              return Identifier
            })()
            t.Identifier = R
            var O = (function () {
              function IfStatement(e, t, i) {
                this.type = r.Syntax.IfStatement
                this.test = e
                this.consequent = t
                this.alternate = i
              }
              return IfStatement
            })()
            t.IfStatement = O
            var U = (function () {
              function ImportDeclaration(e, t) {
                this.type = r.Syntax.ImportDeclaration
                this.specifiers = e
                this.source = t
              }
              return ImportDeclaration
            })()
            t.ImportDeclaration = U
            var z = (function () {
              function ImportDefaultSpecifier(e) {
                this.type = r.Syntax.ImportDefaultSpecifier
                this.local = e
              }
              return ImportDefaultSpecifier
            })()
            t.ImportDefaultSpecifier = z
            var _ = (function () {
              function ImportNamespaceSpecifier(e) {
                this.type = r.Syntax.ImportNamespaceSpecifier
                this.local = e
              }
              return ImportNamespaceSpecifier
            })()
            t.ImportNamespaceSpecifier = _
            var K = (function () {
              function ImportSpecifier(e, t) {
                this.type = r.Syntax.ImportSpecifier
                this.local = e
                this.imported = t
              }
              return ImportSpecifier
            })()
            t.ImportSpecifier = K
            var j = (function () {
              function LabeledStatement(e, t) {
                this.type = r.Syntax.LabeledStatement
                this.label = e
                this.body = t
              }
              return LabeledStatement
            })()
            t.LabeledStatement = j
            var H = (function () {
              function Literal(e, t) {
                this.type = r.Syntax.Literal
                this.value = e
                this.raw = t
              }
              return Literal
            })()
            t.Literal = H
            var W = (function () {
              function MetaProperty(e, t) {
                this.type = r.Syntax.MetaProperty
                this.meta = e
                this.property = t
              }
              return MetaProperty
            })()
            t.MetaProperty = W
            var V = (function () {
              function MethodDefinition(e, t, i, s, n) {
                this.type = r.Syntax.MethodDefinition
                this.key = e
                this.computed = t
                this.value = i
                this.kind = s
                this.static = n
              }
              return MethodDefinition
            })()
            t.MethodDefinition = V
            var G = (function () {
              function Module(e) {
                this.type = r.Syntax.Program
                this.body = e
                this.sourceType = 'module'
              }
              return Module
            })()
            t.Module = G
            var Y = (function () {
              function NewExpression(e, t) {
                this.type = r.Syntax.NewExpression
                this.callee = e
                this.arguments = t
              }
              return NewExpression
            })()
            t.NewExpression = Y
            var q = (function () {
              function ObjectExpression(e) {
                this.type = r.Syntax.ObjectExpression
                this.properties = e
              }
              return ObjectExpression
            })()
            t.ObjectExpression = q
            var $ = (function () {
              function ObjectPattern(e) {
                this.type = r.Syntax.ObjectPattern
                this.properties = e
              }
              return ObjectPattern
            })()
            t.ObjectPattern = $
            var Q = (function () {
              function Property(e, t, i, s, n, a) {
                this.type = r.Syntax.Property
                this.key = t
                this.computed = i
                this.value = s
                this.kind = e
                this.method = n
                this.shorthand = a
              }
              return Property
            })()
            t.Property = Q
            var Z = (function () {
              function RegexLiteral(e, t, i, s) {
                this.type = r.Syntax.Literal
                this.value = e
                this.raw = t
                this.regex = { pattern: i, flags: s }
              }
              return RegexLiteral
            })()
            t.RegexLiteral = Z
            var ee = (function () {
              function RestElement(e) {
                this.type = r.Syntax.RestElement
                this.argument = e
              }
              return RestElement
            })()
            t.RestElement = ee
            var te = (function () {
              function ReturnStatement(e) {
                this.type = r.Syntax.ReturnStatement
                this.argument = e
              }
              return ReturnStatement
            })()
            t.ReturnStatement = te
            var ie = (function () {
              function Script(e) {
                this.type = r.Syntax.Program
                this.body = e
                this.sourceType = 'script'
              }
              return Script
            })()
            t.Script = ie
            var re = (function () {
              function SequenceExpression(e) {
                this.type = r.Syntax.SequenceExpression
                this.expressions = e
              }
              return SequenceExpression
            })()
            t.SequenceExpression = re
            var se = (function () {
              function SpreadElement(e) {
                this.type = r.Syntax.SpreadElement
                this.argument = e
              }
              return SpreadElement
            })()
            t.SpreadElement = se
            var ne = (function () {
              function StaticMemberExpression(e, t) {
                this.type = r.Syntax.MemberExpression
                this.computed = false
                this.object = e
                this.property = t
              }
              return StaticMemberExpression
            })()
            t.StaticMemberExpression = ne
            var ae = (function () {
              function Super() {
                this.type = r.Syntax.Super
              }
              return Super
            })()
            t.Super = ae
            var oe = (function () {
              function SwitchCase(e, t) {
                this.type = r.Syntax.SwitchCase
                this.test = e
                this.consequent = t
              }
              return SwitchCase
            })()
            t.SwitchCase = oe
            var ue = (function () {
              function SwitchStatement(e, t) {
                this.type = r.Syntax.SwitchStatement
                this.discriminant = e
                this.cases = t
              }
              return SwitchStatement
            })()
            t.SwitchStatement = ue
            var he = (function () {
              function TaggedTemplateExpression(e, t) {
                this.type = r.Syntax.TaggedTemplateExpression
                this.tag = e
                this.quasi = t
              }
              return TaggedTemplateExpression
            })()
            t.TaggedTemplateExpression = he
            var ce = (function () {
              function TemplateElement(e, t) {
                this.type = r.Syntax.TemplateElement
                this.value = e
                this.tail = t
              }
              return TemplateElement
            })()
            t.TemplateElement = ce
            var le = (function () {
              function TemplateLiteral(e, t) {
                this.type = r.Syntax.TemplateLiteral
                this.quasis = e
                this.expressions = t
              }
              return TemplateLiteral
            })()
            t.TemplateLiteral = le
            var pe = (function () {
              function ThisExpression() {
                this.type = r.Syntax.ThisExpression
              }
              return ThisExpression
            })()
            t.ThisExpression = pe
            var fe = (function () {
              function ThrowStatement(e) {
                this.type = r.Syntax.ThrowStatement
                this.argument = e
              }
              return ThrowStatement
            })()
            t.ThrowStatement = fe
            var de = (function () {
              function TryStatement(e, t, i) {
                this.type = r.Syntax.TryStatement
                this.block = e
                this.handler = t
                this.finalizer = i
              }
              return TryStatement
            })()
            t.TryStatement = de
            var me = (function () {
              function UnaryExpression(e, t) {
                this.type = r.Syntax.UnaryExpression
                this.operator = e
                this.argument = t
                this.prefix = true
              }
              return UnaryExpression
            })()
            t.UnaryExpression = me
            var xe = (function () {
              function UpdateExpression(e, t, i) {
                this.type = r.Syntax.UpdateExpression
                this.operator = e
                this.argument = t
                this.prefix = i
              }
              return UpdateExpression
            })()
            t.UpdateExpression = xe
            var De = (function () {
              function VariableDeclaration(e, t) {
                this.type = r.Syntax.VariableDeclaration
                this.declarations = e
                this.kind = t
              }
              return VariableDeclaration
            })()
            t.VariableDeclaration = De
            var Ee = (function () {
              function VariableDeclarator(e, t) {
                this.type = r.Syntax.VariableDeclarator
                this.id = e
                this.init = t
              }
              return VariableDeclarator
            })()
            t.VariableDeclarator = Ee
            var ve = (function () {
              function WhileStatement(e, t) {
                this.type = r.Syntax.WhileStatement
                this.test = e
                this.body = t
              }
              return WhileStatement
            })()
            t.WhileStatement = ve
            var ye = (function () {
              function WithStatement(e, t) {
                this.type = r.Syntax.WithStatement
                this.object = e
                this.body = t
              }
              return WithStatement
            })()
            t.WithStatement = ye
            var Ce = (function () {
              function YieldExpression(e, t) {
                this.type = r.Syntax.YieldExpression
                this.argument = e
                this.delegate = t
              }
              return YieldExpression
            })()
            t.YieldExpression = Ce
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(9)
            var s = i(10)
            var n = i(11)
            var a = i(7)
            var o = i(12)
            var u = i(2)
            var h = i(13)
            var c = 'ArrowParameterPlaceHolder'
            var l = (function () {
              function Parser(e, t, i) {
                if (t === void 0) {
                  t = {}
                }
                this.config = {
                  range: typeof t.range === 'boolean' && t.range,
                  loc: typeof t.loc === 'boolean' && t.loc,
                  source: null,
                  tokens: typeof t.tokens === 'boolean' && t.tokens,
                  comment: typeof t.comment === 'boolean' && t.comment,
                  tolerant: typeof t.tolerant === 'boolean' && t.tolerant,
                }
                if (this.config.loc && t.source && t.source !== null) {
                  this.config.source = String(t.source)
                }
                this.delegate = i
                this.errorHandler = new s.ErrorHandler()
                this.errorHandler.tolerant = this.config.tolerant
                this.scanner = new o.Scanner(e, this.errorHandler)
                this.scanner.trackComment = this.config.comment
                this.operatorPrecedence = {
                  ')': 0,
                  ';': 0,
                  ',': 0,
                  '=': 0,
                  ']': 0,
                  '||': 1,
                  '&&': 2,
                  '|': 3,
                  '^': 4,
                  '&': 5,
                  '==': 6,
                  '!=': 6,
                  '===': 6,
                  '!==': 6,
                  '<': 7,
                  '>': 7,
                  '<=': 7,
                  '>=': 7,
                  '<<': 8,
                  '>>': 8,
                  '>>>': 8,
                  '+': 9,
                  '-': 9,
                  '*': 11,
                  '/': 11,
                  '%': 11,
                }
                this.lookahead = {
                  type: 2,
                  value: '',
                  lineNumber: this.scanner.lineNumber,
                  lineStart: 0,
                  start: 0,
                  end: 0,
                }
                this.hasLineTerminator = false
                this.context = {
                  isModule: false,
                  await: false,
                  allowIn: true,
                  allowStrictDirective: true,
                  allowYield: true,
                  firstCoverInitializedNameError: null,
                  isAssignmentTarget: false,
                  isBindingElement: false,
                  inFunctionBody: false,
                  inIteration: false,
                  inSwitch: false,
                  labelSet: {},
                  strict: false,
                }
                this.tokens = []
                this.startMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0,
                }
                this.lastMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0,
                }
                this.nextToken()
                this.lastMarker = {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                }
              }
              Parser.prototype.throwError = function (e) {
                var t = []
                for (var i = 1; i < arguments.length; i++) {
                  t[i - 1] = arguments[i]
                }
                var s = Array.prototype.slice.call(arguments, 1)
                var n = e.replace(/%(\d)/g, function (e, t) {
                  r.assert(t < s.length, 'Message reference must be in range')
                  return s[t]
                })
                var a = this.lastMarker.index
                var o = this.lastMarker.line
                var u = this.lastMarker.column + 1
                throw this.errorHandler.createError(a, o, u, n)
              }
              Parser.prototype.tolerateError = function (e) {
                var t = []
                for (var i = 1; i < arguments.length; i++) {
                  t[i - 1] = arguments[i]
                }
                var s = Array.prototype.slice.call(arguments, 1)
                var n = e.replace(/%(\d)/g, function (e, t) {
                  r.assert(t < s.length, 'Message reference must be in range')
                  return s[t]
                })
                var a = this.lastMarker.index
                var o = this.scanner.lineNumber
                var u = this.lastMarker.column + 1
                this.errorHandler.tolerateError(a, o, u, n)
              }
              Parser.prototype.unexpectedTokenError = function (e, t) {
                var i = t || n.Messages.UnexpectedToken
                var r
                if (e) {
                  if (!t) {
                    i =
                      e.type === 2
                        ? n.Messages.UnexpectedEOS
                        : e.type === 3
                        ? n.Messages.UnexpectedIdentifier
                        : e.type === 6
                        ? n.Messages.UnexpectedNumber
                        : e.type === 8
                        ? n.Messages.UnexpectedString
                        : e.type === 10
                        ? n.Messages.UnexpectedTemplate
                        : n.Messages.UnexpectedToken
                    if (e.type === 4) {
                      if (this.scanner.isFutureReservedWord(e.value)) {
                        i = n.Messages.UnexpectedReserved
                      } else if (
                        this.context.strict &&
                        this.scanner.isStrictModeReservedWord(e.value)
                      ) {
                        i = n.Messages.StrictReservedWord
                      }
                    }
                  }
                  r = e.value
                } else {
                  r = 'ILLEGAL'
                }
                i = i.replace('%0', r)
                if (e && typeof e.lineNumber === 'number') {
                  var s = e.start
                  var a = e.lineNumber
                  var o = this.lastMarker.index - this.lastMarker.column
                  var u = e.start - o + 1
                  return this.errorHandler.createError(s, a, u, i)
                } else {
                  var s = this.lastMarker.index
                  var a = this.lastMarker.line
                  var u = this.lastMarker.column + 1
                  return this.errorHandler.createError(s, a, u, i)
                }
              }
              Parser.prototype.throwUnexpectedToken = function (e, t) {
                throw this.unexpectedTokenError(e, t)
              }
              Parser.prototype.tolerateUnexpectedToken = function (e, t) {
                this.errorHandler.tolerate(this.unexpectedTokenError(e, t))
              }
              Parser.prototype.collectComments = function () {
                if (!this.config.comment) {
                  this.scanner.scanComments()
                } else {
                  var e = this.scanner.scanComments()
                  if (e.length > 0 && this.delegate) {
                    for (var t = 0; t < e.length; ++t) {
                      var i = e[t]
                      var r = void 0
                      r = {
                        type: i.multiLine ? 'BlockComment' : 'LineComment',
                        value: this.scanner.source.slice(
                          i.slice[0],
                          i.slice[1]
                        ),
                      }
                      if (this.config.range) {
                        r.range = i.range
                      }
                      if (this.config.loc) {
                        r.loc = i.loc
                      }
                      var s = {
                        start: {
                          line: i.loc.start.line,
                          column: i.loc.start.column,
                          offset: i.range[0],
                        },
                        end: {
                          line: i.loc.end.line,
                          column: i.loc.end.column,
                          offset: i.range[1],
                        },
                      }
                      this.delegate(r, s)
                    }
                  }
                }
              }
              Parser.prototype.getTokenRaw = function (e) {
                return this.scanner.source.slice(e.start, e.end)
              }
              Parser.prototype.convertToken = function (e) {
                var t = {
                  type: h.TokenName[e.type],
                  value: this.getTokenRaw(e),
                }
                if (this.config.range) {
                  t.range = [e.start, e.end]
                }
                if (this.config.loc) {
                  t.loc = {
                    start: {
                      line: this.startMarker.line,
                      column: this.startMarker.column,
                    },
                    end: {
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart,
                    },
                  }
                }
                if (e.type === 9) {
                  var i = e.pattern
                  var r = e.flags
                  t.regex = { pattern: i, flags: r }
                }
                return t
              }
              Parser.prototype.nextToken = function () {
                var e = this.lookahead
                this.lastMarker.index = this.scanner.index
                this.lastMarker.line = this.scanner.lineNumber
                this.lastMarker.column =
                  this.scanner.index - this.scanner.lineStart
                this.collectComments()
                if (this.scanner.index !== this.startMarker.index) {
                  this.startMarker.index = this.scanner.index
                  this.startMarker.line = this.scanner.lineNumber
                  this.startMarker.column =
                    this.scanner.index - this.scanner.lineStart
                }
                var t = this.scanner.lex()
                this.hasLineTerminator = e.lineNumber !== t.lineNumber
                if (t && this.context.strict && t.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(t.value)) {
                    t.type = 4
                  }
                }
                this.lookahead = t
                if (this.config.tokens && t.type !== 2) {
                  this.tokens.push(this.convertToken(t))
                }
                return e
              }
              Parser.prototype.nextRegexToken = function () {
                this.collectComments()
                var e = this.scanner.scanRegExp()
                if (this.config.tokens) {
                  this.tokens.pop()
                  this.tokens.push(this.convertToken(e))
                }
                this.lookahead = e
                this.nextToken()
                return e
              }
              Parser.prototype.createNode = function () {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column,
                }
              }
              Parser.prototype.startNode = function (e, t) {
                if (t === void 0) {
                  t = 0
                }
                var i = e.start - e.lineStart
                var r = e.lineNumber
                if (i < 0) {
                  i += t
                  r--
                }
                return { index: e.start, line: r, column: i }
              }
              Parser.prototype.finalize = function (e, t) {
                if (this.config.range) {
                  t.range = [e.index, this.lastMarker.index]
                }
                if (this.config.loc) {
                  t.loc = {
                    start: { line: e.line, column: e.column },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                    },
                  }
                  if (this.config.source) {
                    t.loc.source = this.config.source
                  }
                }
                if (this.delegate) {
                  var i = {
                    start: { line: e.line, column: e.column, offset: e.index },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index,
                    },
                  }
                  this.delegate(t, i)
                }
                return t
              }
              Parser.prototype.expect = function (e) {
                var t = this.nextToken()
                if (t.type !== 7 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              Parser.prototype.expectCommaSeparator = function () {
                if (this.config.tolerant) {
                  var e = this.lookahead
                  if (e.type === 7 && e.value === ',') {
                    this.nextToken()
                  } else if (e.type === 7 && e.value === ';') {
                    this.nextToken()
                    this.tolerateUnexpectedToken(e)
                  } else {
                    this.tolerateUnexpectedToken(e, n.Messages.UnexpectedToken)
                  }
                } else {
                  this.expect(',')
                }
              }
              Parser.prototype.expectKeyword = function (e) {
                var t = this.nextToken()
                if (t.type !== 4 || t.value !== e) {
                  this.throwUnexpectedToken(t)
                }
              }
              Parser.prototype.match = function (e) {
                return this.lookahead.type === 7 && this.lookahead.value === e
              }
              Parser.prototype.matchKeyword = function (e) {
                return this.lookahead.type === 4 && this.lookahead.value === e
              }
              Parser.prototype.matchContextualKeyword = function (e) {
                return this.lookahead.type === 3 && this.lookahead.value === e
              }
              Parser.prototype.matchAssign = function () {
                if (this.lookahead.type !== 7) {
                  return false
                }
                var e = this.lookahead.value
                return (
                  e === '=' ||
                  e === '*=' ||
                  e === '**=' ||
                  e === '/=' ||
                  e === '%=' ||
                  e === '+=' ||
                  e === '-=' ||
                  e === '<<=' ||
                  e === '>>=' ||
                  e === '>>>=' ||
                  e === '&=' ||
                  e === '^=' ||
                  e === '|='
                )
              }
              Parser.prototype.isolateCoverGrammar = function (e) {
                var t = this.context.isBindingElement
                var i = this.context.isAssignmentTarget
                var r = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var s = e.call(this)
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(
                    this.context.firstCoverInitializedNameError
                  )
                }
                this.context.isBindingElement = t
                this.context.isAssignmentTarget = i
                this.context.firstCoverInitializedNameError = r
                return s
              }
              Parser.prototype.inheritCoverGrammar = function (e) {
                var t = this.context.isBindingElement
                var i = this.context.isAssignmentTarget
                var r = this.context.firstCoverInitializedNameError
                this.context.isBindingElement = true
                this.context.isAssignmentTarget = true
                this.context.firstCoverInitializedNameError = null
                var s = e.call(this)
                this.context.isBindingElement =
                  this.context.isBindingElement && t
                this.context.isAssignmentTarget =
                  this.context.isAssignmentTarget && i
                this.context.firstCoverInitializedNameError =
                  r || this.context.firstCoverInitializedNameError
                return s
              }
              Parser.prototype.consumeSemicolon = function () {
                if (this.match(';')) {
                  this.nextToken()
                } else if (!this.hasLineTerminator) {
                  if (this.lookahead.type !== 2 && !this.match('}')) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  this.lastMarker.index = this.startMarker.index
                  this.lastMarker.line = this.startMarker.line
                  this.lastMarker.column = this.startMarker.column
                }
              }
              Parser.prototype.parsePrimaryExpression = function () {
                var e = this.createNode()
                var t
                var i, r
                switch (this.lookahead.type) {
                  case 3:
                    if (
                      (this.context.isModule || this.context.await) &&
                      this.lookahead.value === 'await'
                    ) {
                      this.tolerateUnexpectedToken(this.lookahead)
                    }
                    t = this.matchAsyncFunction()
                      ? this.parseFunctionExpression()
                      : this.finalize(
                          e,
                          new a.Identifier(this.nextToken().value)
                        )
                    break
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(
                        this.lookahead,
                        n.Messages.StrictOctalLiteral
                      )
                    }
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    t = this.finalize(e, new a.Literal(i.value, r))
                    break
                  case 1:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    t = this.finalize(e, new a.Literal(i.value === 'true', r))
                    break
                  case 5:
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    i = this.nextToken()
                    r = this.getTokenRaw(i)
                    t = this.finalize(e, new a.Literal(null, r))
                    break
                  case 10:
                    t = this.parseTemplateLiteral()
                    break
                  case 7:
                    switch (this.lookahead.value) {
                      case '(':
                        this.context.isBindingElement = false
                        t = this.inheritCoverGrammar(this.parseGroupExpression)
                        break
                      case '[':
                        t = this.inheritCoverGrammar(this.parseArrayInitializer)
                        break
                      case '{':
                        t = this.inheritCoverGrammar(
                          this.parseObjectInitializer
                        )
                        break
                      case '/':
                      case '/=':
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                        this.scanner.index = this.startMarker.index
                        i = this.nextRegexToken()
                        r = this.getTokenRaw(i)
                        t = this.finalize(
                          e,
                          new a.RegexLiteral(i.regex, r, i.pattern, i.flags)
                        )
                        break
                      default:
                        t = this.throwUnexpectedToken(this.nextToken())
                    }
                    break
                  case 4:
                    if (
                      !this.context.strict &&
                      this.context.allowYield &&
                      this.matchKeyword('yield')
                    ) {
                      t = this.parseIdentifierName()
                    } else if (
                      !this.context.strict &&
                      this.matchKeyword('let')
                    ) {
                      t = this.finalize(
                        e,
                        new a.Identifier(this.nextToken().value)
                      )
                    } else {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      if (this.matchKeyword('function')) {
                        t = this.parseFunctionExpression()
                      } else if (this.matchKeyword('this')) {
                        this.nextToken()
                        t = this.finalize(e, new a.ThisExpression())
                      } else if (this.matchKeyword('class')) {
                        t = this.parseClassExpression()
                      } else {
                        t = this.throwUnexpectedToken(this.nextToken())
                      }
                    }
                    break
                  default:
                    t = this.throwUnexpectedToken(this.nextToken())
                }
                return t
              }
              Parser.prototype.parseSpreadElement = function () {
                var e = this.createNode()
                this.expect('...')
                var t = this.inheritCoverGrammar(this.parseAssignmentExpression)
                return this.finalize(e, new a.SpreadElement(t))
              }
              Parser.prototype.parseArrayInitializer = function () {
                var e = this.createNode()
                var t = []
                this.expect('[')
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    t.push(null)
                  } else if (this.match('...')) {
                    var i = this.parseSpreadElement()
                    if (!this.match(']')) {
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      this.expect(',')
                    }
                    t.push(i)
                  } else {
                    t.push(
                      this.inheritCoverGrammar(this.parseAssignmentExpression)
                    )
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(e, new a.ArrayExpression(t))
              }
              Parser.prototype.parsePropertyMethod = function (e) {
                this.context.isAssignmentTarget = false
                this.context.isBindingElement = false
                var t = this.context.strict
                var i = this.context.allowStrictDirective
                this.context.allowStrictDirective = e.simple
                var r = this.isolateCoverGrammar(
                  this.parseFunctionSourceElements
                )
                if (this.context.strict && e.firstRestricted) {
                  this.tolerateUnexpectedToken(e.firstRestricted, e.message)
                }
                if (this.context.strict && e.stricted) {
                  this.tolerateUnexpectedToken(e.stricted, e.message)
                }
                this.context.strict = t
                this.context.allowStrictDirective = i
                return r
              }
              Parser.prototype.parsePropertyMethodFunction = function () {
                var e = false
                var t = this.createNode()
                var i = this.context.allowYield
                this.context.allowYield = true
                var r = this.parseFormalParameters()
                var s = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  t,
                  new a.FunctionExpression(null, r.params, s, e)
                )
              }
              Parser.prototype.parsePropertyMethodAsyncFunction = function () {
                var e = this.createNode()
                var t = this.context.allowYield
                var i = this.context.await
                this.context.allowYield = false
                this.context.await = true
                var r = this.parseFormalParameters()
                var s = this.parsePropertyMethod(r)
                this.context.allowYield = t
                this.context.await = i
                return this.finalize(
                  e,
                  new a.AsyncFunctionExpression(null, r.params, s)
                )
              }
              Parser.prototype.parseObjectPropertyKey = function () {
                var e = this.createNode()
                var t = this.nextToken()
                var i
                switch (t.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && t.octal) {
                      this.tolerateUnexpectedToken(
                        t,
                        n.Messages.StrictOctalLiteral
                      )
                    }
                    var r = this.getTokenRaw(t)
                    i = this.finalize(e, new a.Literal(t.value, r))
                    break
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    i = this.finalize(e, new a.Identifier(t.value))
                    break
                  case 7:
                    if (t.value === '[') {
                      i = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      this.expect(']')
                    } else {
                      i = this.throwUnexpectedToken(t)
                    }
                    break
                  default:
                    i = this.throwUnexpectedToken(t)
                }
                return i
              }
              Parser.prototype.isPropertyKey = function (e, t) {
                return (
                  (e.type === u.Syntax.Identifier && e.name === t) ||
                  (e.type === u.Syntax.Literal && e.value === t)
                )
              }
              Parser.prototype.parseObjectProperty = function (e) {
                var t = this.createNode()
                var i = this.lookahead
                var r
                var s = null
                var o = null
                var u = false
                var h = false
                var c = false
                var l = false
                if (i.type === 3) {
                  var p = i.value
                  this.nextToken()
                  u = this.match('[')
                  l =
                    !this.hasLineTerminator &&
                    p === 'async' &&
                    !this.match(':') &&
                    !this.match('(') &&
                    !this.match('*') &&
                    !this.match(',')
                  s = l
                    ? this.parseObjectPropertyKey()
                    : this.finalize(t, new a.Identifier(p))
                } else if (this.match('*')) {
                  this.nextToken()
                } else {
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                }
                var f = this.qualifiedPropertyName(this.lookahead)
                if (i.type === 3 && !l && i.value === 'get' && f) {
                  r = 'get'
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                  this.context.allowYield = false
                  o = this.parseGetterMethod()
                } else if (i.type === 3 && !l && i.value === 'set' && f) {
                  r = 'set'
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                  o = this.parseSetterMethod()
                } else if (i.type === 7 && i.value === '*' && f) {
                  r = 'init'
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                  o = this.parseGeneratorMethod()
                  h = true
                } else {
                  if (!s) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  r = 'init'
                  if (this.match(':') && !l) {
                    if (!u && this.isPropertyKey(s, '__proto__')) {
                      if (e.value) {
                        this.tolerateError(n.Messages.DuplicateProtoProperty)
                      }
                      e.value = true
                    }
                    this.nextToken()
                    o = this.inheritCoverGrammar(this.parseAssignmentExpression)
                  } else if (this.match('(')) {
                    o = l
                      ? this.parsePropertyMethodAsyncFunction()
                      : this.parsePropertyMethodFunction()
                    h = true
                  } else if (i.type === 3) {
                    var p = this.finalize(t, new a.Identifier(i.value))
                    if (this.match('=')) {
                      this.context.firstCoverInitializedNameError =
                        this.lookahead
                      this.nextToken()
                      c = true
                      var d = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      o = this.finalize(t, new a.AssignmentPattern(p, d))
                    } else {
                      c = true
                      o = p
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(t, new a.Property(r, s, u, o, h, c))
              }
              Parser.prototype.parseObjectInitializer = function () {
                var e = this.createNode()
                this.expect('{')
                var t = []
                var i = { value: false }
                while (!this.match('}')) {
                  t.push(this.parseObjectProperty(i))
                  if (!this.match('}')) {
                    this.expectCommaSeparator()
                  }
                }
                this.expect('}')
                return this.finalize(e, new a.ObjectExpression(t))
              }
              Parser.prototype.parseTemplateHead = function () {
                r.assert(
                  this.lookahead.head,
                  'Template literal must start with a template head'
                )
                var e = this.createNode()
                var t = this.nextToken()
                var i = t.value
                var s = t.cooked
                return this.finalize(
                  e,
                  new a.TemplateElement({ raw: i, cooked: s }, t.tail)
                )
              }
              Parser.prototype.parseTemplateElement = function () {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken()
                }
                var e = this.createNode()
                var t = this.nextToken()
                var i = t.value
                var r = t.cooked
                return this.finalize(
                  e,
                  new a.TemplateElement({ raw: i, cooked: r }, t.tail)
                )
              }
              Parser.prototype.parseTemplateLiteral = function () {
                var e = this.createNode()
                var t = []
                var i = []
                var r = this.parseTemplateHead()
                i.push(r)
                while (!r.tail) {
                  t.push(this.parseExpression())
                  r = this.parseTemplateElement()
                  i.push(r)
                }
                return this.finalize(e, new a.TemplateLiteral(i, t))
              }
              Parser.prototype.reinterpretExpressionAsPattern = function (e) {
                switch (e.type) {
                  case u.Syntax.Identifier:
                  case u.Syntax.MemberExpression:
                  case u.Syntax.RestElement:
                  case u.Syntax.AssignmentPattern:
                    break
                  case u.Syntax.SpreadElement:
                    e.type = u.Syntax.RestElement
                    this.reinterpretExpressionAsPattern(e.argument)
                    break
                  case u.Syntax.ArrayExpression:
                    e.type = u.Syntax.ArrayPattern
                    for (var t = 0; t < e.elements.length; t++) {
                      if (e.elements[t] !== null) {
                        this.reinterpretExpressionAsPattern(e.elements[t])
                      }
                    }
                    break
                  case u.Syntax.ObjectExpression:
                    e.type = u.Syntax.ObjectPattern
                    for (var t = 0; t < e.properties.length; t++) {
                      this.reinterpretExpressionAsPattern(e.properties[t].value)
                    }
                    break
                  case u.Syntax.AssignmentExpression:
                    e.type = u.Syntax.AssignmentPattern
                    delete e.operator
                    this.reinterpretExpressionAsPattern(e.left)
                    break
                  default:
                    break
                }
              }
              Parser.prototype.parseGroupExpression = function () {
                var e
                this.expect('(')
                if (this.match(')')) {
                  this.nextToken()
                  if (!this.match('=>')) {
                    this.expect('=>')
                  }
                  e = { type: c, params: [], async: false }
                } else {
                  var t = this.lookahead
                  var i = []
                  if (this.match('...')) {
                    e = this.parseRestElement(i)
                    this.expect(')')
                    if (!this.match('=>')) {
                      this.expect('=>')
                    }
                    e = { type: c, params: [e], async: false }
                  } else {
                    var r = false
                    this.context.isBindingElement = true
                    e = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    if (this.match(',')) {
                      var s = []
                      this.context.isAssignmentTarget = false
                      s.push(e)
                      while (this.lookahead.type !== 2) {
                        if (!this.match(',')) {
                          break
                        }
                        this.nextToken()
                        if (this.match(')')) {
                          this.nextToken()
                          for (var n = 0; n < s.length; n++) {
                            this.reinterpretExpressionAsPattern(s[n])
                          }
                          r = true
                          e = { type: c, params: s, async: false }
                        } else if (this.match('...')) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          s.push(this.parseRestElement(i))
                          this.expect(')')
                          if (!this.match('=>')) {
                            this.expect('=>')
                          }
                          this.context.isBindingElement = false
                          for (var n = 0; n < s.length; n++) {
                            this.reinterpretExpressionAsPattern(s[n])
                          }
                          r = true
                          e = { type: c, params: s, async: false }
                        } else {
                          s.push(
                            this.inheritCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        if (r) {
                          break
                        }
                      }
                      if (!r) {
                        e = this.finalize(
                          this.startNode(t),
                          new a.SequenceExpression(s)
                        )
                      }
                    }
                    if (!r) {
                      this.expect(')')
                      if (this.match('=>')) {
                        if (
                          e.type === u.Syntax.Identifier &&
                          e.name === 'yield'
                        ) {
                          r = true
                          e = { type: c, params: [e], async: false }
                        }
                        if (!r) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead)
                          }
                          if (e.type === u.Syntax.SequenceExpression) {
                            for (var n = 0; n < e.expressions.length; n++) {
                              this.reinterpretExpressionAsPattern(
                                e.expressions[n]
                              )
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(e)
                          }
                          var o =
                            e.type === u.Syntax.SequenceExpression
                              ? e.expressions
                              : [e]
                          e = { type: c, params: o, async: false }
                        }
                      }
                      this.context.isBindingElement = false
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseArguments = function () {
                this.expect('(')
                var e = []
                if (!this.match(')')) {
                  while (true) {
                    var t = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAssignmentExpression)
                    e.push(t)
                    if (this.match(')')) {
                      break
                    }
                    this.expectCommaSeparator()
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return e
              }
              Parser.prototype.isIdentifierName = function (e) {
                return (
                  e.type === 3 || e.type === 4 || e.type === 1 || e.type === 5
                )
              }
              Parser.prototype.parseIdentifierName = function () {
                var e = this.createNode()
                var t = this.nextToken()
                if (!this.isIdentifierName(t)) {
                  this.throwUnexpectedToken(t)
                }
                return this.finalize(e, new a.Identifier(t.value))
              }
              Parser.prototype.parseNewExpression = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                r.assert(
                  t.name === 'new',
                  'New expression must start with `new`'
                )
                var i
                if (this.match('.')) {
                  this.nextToken()
                  if (
                    this.lookahead.type === 3 &&
                    this.context.inFunctionBody &&
                    this.lookahead.value === 'target'
                  ) {
                    var s = this.parseIdentifierName()
                    i = new a.MetaProperty(t, s)
                  } else {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                } else {
                  var n = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpression
                  )
                  var o = this.match('(') ? this.parseArguments() : []
                  i = new a.NewExpression(n, o)
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return this.finalize(e, i)
              }
              Parser.prototype.parseAsyncArgument = function () {
                var e = this.parseAssignmentExpression()
                this.context.firstCoverInitializedNameError = null
                return e
              }
              Parser.prototype.parseAsyncArguments = function () {
                this.expect('(')
                var e = []
                if (!this.match(')')) {
                  while (true) {
                    var t = this.match('...')
                      ? this.parseSpreadElement()
                      : this.isolateCoverGrammar(this.parseAsyncArgument)
                    e.push(t)
                    if (this.match(')')) {
                      break
                    }
                    this.expectCommaSeparator()
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return e
              }
              Parser.prototype.parseLeftHandSideExpressionAllowCall =
                function () {
                  var e = this.lookahead
                  var t = this.matchContextualKeyword('async')
                  var i = this.context.allowIn
                  this.context.allowIn = true
                  var r
                  if (
                    this.matchKeyword('super') &&
                    this.context.inFunctionBody
                  ) {
                    r = this.createNode()
                    this.nextToken()
                    r = this.finalize(r, new a.Super())
                    if (
                      !this.match('(') &&
                      !this.match('.') &&
                      !this.match('[')
                    ) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  } else {
                    r = this.inheritCoverGrammar(
                      this.matchKeyword('new')
                        ? this.parseNewExpression
                        : this.parsePrimaryExpression
                    )
                  }
                  while (true) {
                    if (this.match('.')) {
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = true
                      this.expect('.')
                      var s = this.parseIdentifierName()
                      r = this.finalize(
                        this.startNode(e),
                        new a.StaticMemberExpression(r, s)
                      )
                    } else if (this.match('(')) {
                      var n = t && e.lineNumber === this.lookahead.lineNumber
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = false
                      var o = n
                        ? this.parseAsyncArguments()
                        : this.parseArguments()
                      r = this.finalize(
                        this.startNode(e),
                        new a.CallExpression(r, o)
                      )
                      if (n && this.match('=>')) {
                        for (var u = 0; u < o.length; ++u) {
                          this.reinterpretExpressionAsPattern(o[u])
                        }
                        r = { type: c, params: o, async: true }
                      }
                    } else if (this.match('[')) {
                      this.context.isBindingElement = false
                      this.context.isAssignmentTarget = true
                      this.expect('[')
                      var s = this.isolateCoverGrammar(this.parseExpression)
                      this.expect(']')
                      r = this.finalize(
                        this.startNode(e),
                        new a.ComputedMemberExpression(r, s)
                      )
                    } else if (
                      this.lookahead.type === 10 &&
                      this.lookahead.head
                    ) {
                      var h = this.parseTemplateLiteral()
                      r = this.finalize(
                        this.startNode(e),
                        new a.TaggedTemplateExpression(r, h)
                      )
                    } else {
                      break
                    }
                  }
                  this.context.allowIn = i
                  return r
                }
              Parser.prototype.parseSuper = function () {
                var e = this.createNode()
                this.expectKeyword('super')
                if (!this.match('[') && !this.match('.')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                return this.finalize(e, new a.Super())
              }
              Parser.prototype.parseLeftHandSideExpression = function () {
                r.assert(
                  this.context.allowIn,
                  'callee of new expression always allow in keyword.'
                )
                var e = this.startNode(this.lookahead)
                var t =
                  this.matchKeyword('super') && this.context.inFunctionBody
                    ? this.parseSuper()
                    : this.inheritCoverGrammar(
                        this.matchKeyword('new')
                          ? this.parseNewExpression
                          : this.parsePrimaryExpression
                      )
                while (true) {
                  if (this.match('[')) {
                    this.context.isBindingElement = false
                    this.context.isAssignmentTarget = true
                    this.expect('[')
                    var i = this.isolateCoverGrammar(this.parseExpression)
                    this.expect(']')
                    t = this.finalize(e, new a.ComputedMemberExpression(t, i))
                  } else if (this.match('.')) {
                    this.context.isBindingElement = false
                    this.context.isAssignmentTarget = true
                    this.expect('.')
                    var i = this.parseIdentifierName()
                    t = this.finalize(e, new a.StaticMemberExpression(t, i))
                  } else if (
                    this.lookahead.type === 10 &&
                    this.lookahead.head
                  ) {
                    var s = this.parseTemplateLiteral()
                    t = this.finalize(e, new a.TaggedTemplateExpression(t, s))
                  } else {
                    break
                  }
                }
                return t
              }
              Parser.prototype.parseUpdateExpression = function () {
                var e
                var t = this.lookahead
                if (this.match('++') || this.match('--')) {
                  var i = this.startNode(t)
                  var r = this.nextToken()
                  e = this.inheritCoverGrammar(this.parseUnaryExpression)
                  if (
                    this.context.strict &&
                    e.type === u.Syntax.Identifier &&
                    this.scanner.isRestrictedWord(e.name)
                  ) {
                    this.tolerateError(n.Messages.StrictLHSPrefix)
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(n.Messages.InvalidLHSInAssignment)
                  }
                  var s = true
                  e = this.finalize(i, new a.UpdateExpression(r.value, e, s))
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else {
                  e = this.inheritCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match('++') || this.match('--')) {
                      if (
                        this.context.strict &&
                        e.type === u.Syntax.Identifier &&
                        this.scanner.isRestrictedWord(e.name)
                      ) {
                        this.tolerateError(n.Messages.StrictLHSPostfix)
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(n.Messages.InvalidLHSInAssignment)
                      }
                      this.context.isAssignmentTarget = false
                      this.context.isBindingElement = false
                      var o = this.nextToken().value
                      var s = false
                      e = this.finalize(
                        this.startNode(t),
                        new a.UpdateExpression(o, e, s)
                      )
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseAwaitExpression = function () {
                var e = this.createNode()
                this.nextToken()
                var t = this.parseUnaryExpression()
                return this.finalize(e, new a.AwaitExpression(t))
              }
              Parser.prototype.parseUnaryExpression = function () {
                var e
                if (
                  this.match('+') ||
                  this.match('-') ||
                  this.match('~') ||
                  this.match('!') ||
                  this.matchKeyword('delete') ||
                  this.matchKeyword('void') ||
                  this.matchKeyword('typeof')
                ) {
                  var t = this.startNode(this.lookahead)
                  var i = this.nextToken()
                  e = this.inheritCoverGrammar(this.parseUnaryExpression)
                  e = this.finalize(t, new a.UnaryExpression(i.value, e))
                  if (
                    this.context.strict &&
                    e.operator === 'delete' &&
                    e.argument.type === u.Syntax.Identifier
                  ) {
                    this.tolerateError(n.Messages.StrictDelete)
                  }
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                } else if (
                  this.context.await &&
                  this.matchContextualKeyword('await')
                ) {
                  e = this.parseAwaitExpression()
                } else {
                  e = this.parseUpdateExpression()
                }
                return e
              }
              Parser.prototype.parseExponentiationExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(this.parseUnaryExpression)
                if (t.type !== u.Syntax.UnaryExpression && this.match('**')) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var i = t
                  var r = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  t = this.finalize(
                    this.startNode(e),
                    new a.BinaryExpression('**', i, r)
                  )
                }
                return t
              }
              Parser.prototype.binaryPrecedence = function (e) {
                var t = e.value
                var i
                if (e.type === 7) {
                  i = this.operatorPrecedence[t] || 0
                } else if (e.type === 4) {
                  i =
                    t === 'instanceof' || (this.context.allowIn && t === 'in')
                      ? 7
                      : 0
                } else {
                  i = 0
                }
                return i
              }
              Parser.prototype.parseBinaryExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(
                  this.parseExponentiationExpression
                )
                var i = this.lookahead
                var r = this.binaryPrecedence(i)
                if (r > 0) {
                  this.nextToken()
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                  var s = [e, this.lookahead]
                  var n = t
                  var o = this.isolateCoverGrammar(
                    this.parseExponentiationExpression
                  )
                  var u = [n, i.value, o]
                  var h = [r]
                  while (true) {
                    r = this.binaryPrecedence(this.lookahead)
                    if (r <= 0) {
                      break
                    }
                    while (u.length > 2 && r <= h[h.length - 1]) {
                      o = u.pop()
                      var c = u.pop()
                      h.pop()
                      n = u.pop()
                      s.pop()
                      var l = this.startNode(s[s.length - 1])
                      u.push(this.finalize(l, new a.BinaryExpression(c, n, o)))
                    }
                    u.push(this.nextToken().value)
                    h.push(r)
                    s.push(this.lookahead)
                    u.push(
                      this.isolateCoverGrammar(
                        this.parseExponentiationExpression
                      )
                    )
                  }
                  var p = u.length - 1
                  t = u[p]
                  var f = s.pop()
                  while (p > 1) {
                    var d = s.pop()
                    var m = f && f.lineStart
                    var l = this.startNode(d, m)
                    var c = u[p - 1]
                    t = this.finalize(l, new a.BinaryExpression(c, u[p - 2], t))
                    p -= 2
                    f = d
                  }
                }
                return t
              }
              Parser.prototype.parseConditionalExpression = function () {
                var e = this.lookahead
                var t = this.inheritCoverGrammar(this.parseBinaryExpression)
                if (this.match('?')) {
                  this.nextToken()
                  var i = this.context.allowIn
                  this.context.allowIn = true
                  var r = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowIn = i
                  this.expect(':')
                  var s = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  t = this.finalize(
                    this.startNode(e),
                    new a.ConditionalExpression(t, r, s)
                  )
                  this.context.isAssignmentTarget = false
                  this.context.isBindingElement = false
                }
                return t
              }
              Parser.prototype.checkPatternParam = function (e, t) {
                switch (t.type) {
                  case u.Syntax.Identifier:
                    this.validateParam(e, t, t.name)
                    break
                  case u.Syntax.RestElement:
                    this.checkPatternParam(e, t.argument)
                    break
                  case u.Syntax.AssignmentPattern:
                    this.checkPatternParam(e, t.left)
                    break
                  case u.Syntax.ArrayPattern:
                    for (var i = 0; i < t.elements.length; i++) {
                      if (t.elements[i] !== null) {
                        this.checkPatternParam(e, t.elements[i])
                      }
                    }
                    break
                  case u.Syntax.ObjectPattern:
                    for (var i = 0; i < t.properties.length; i++) {
                      this.checkPatternParam(e, t.properties[i].value)
                    }
                    break
                  default:
                    break
                }
                e.simple = e.simple && t instanceof a.Identifier
              }
              Parser.prototype.reinterpretAsCoverFormalsList = function (e) {
                var t = [e]
                var i
                var r = false
                switch (e.type) {
                  case u.Syntax.Identifier:
                    break
                  case c:
                    t = e.params
                    r = e.async
                    break
                  default:
                    return null
                }
                i = { simple: true, paramSet: {} }
                for (var s = 0; s < t.length; ++s) {
                  var a = t[s]
                  if (a.type === u.Syntax.AssignmentPattern) {
                    if (a.right.type === u.Syntax.YieldExpression) {
                      if (a.right.argument) {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                      a.right.type = u.Syntax.Identifier
                      a.right.name = 'yield'
                      delete a.right.argument
                      delete a.right.delegate
                    }
                  } else if (
                    r &&
                    a.type === u.Syntax.Identifier &&
                    a.name === 'await'
                  ) {
                    this.throwUnexpectedToken(this.lookahead)
                  }
                  this.checkPatternParam(i, a)
                  t[s] = a
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var s = 0; s < t.length; ++s) {
                    var a = t[s]
                    if (a.type === u.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead)
                    }
                  }
                }
                if (i.message === n.Messages.StrictParamDupe) {
                  var o = this.context.strict ? i.stricted : i.firstRestricted
                  this.throwUnexpectedToken(o, i.message)
                }
                return {
                  simple: i.simple,
                  params: t,
                  stricted: i.stricted,
                  firstRestricted: i.firstRestricted,
                  message: i.message,
                }
              }
              Parser.prototype.parseAssignmentExpression = function () {
                var e
                if (!this.context.allowYield && this.matchKeyword('yield')) {
                  e = this.parseYieldExpression()
                } else {
                  var t = this.lookahead
                  var i = t
                  e = this.parseConditionalExpression()
                  if (
                    i.type === 3 &&
                    i.lineNumber === this.lookahead.lineNumber &&
                    i.value === 'async'
                  ) {
                    if (
                      this.lookahead.type === 3 ||
                      this.matchKeyword('yield')
                    ) {
                      var r = this.parsePrimaryExpression()
                      this.reinterpretExpressionAsPattern(r)
                      e = { type: c, params: [r], async: true }
                    }
                  }
                  if (e.type === c || this.match('=>')) {
                    this.context.isAssignmentTarget = false
                    this.context.isBindingElement = false
                    var s = e.async
                    var o = this.reinterpretAsCoverFormalsList(e)
                    if (o) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead)
                      }
                      this.context.firstCoverInitializedNameError = null
                      var h = this.context.strict
                      var l = this.context.allowStrictDirective
                      this.context.allowStrictDirective = o.simple
                      var p = this.context.allowYield
                      var f = this.context.await
                      this.context.allowYield = true
                      this.context.await = s
                      var d = this.startNode(t)
                      this.expect('=>')
                      var m = void 0
                      if (this.match('{')) {
                        var x = this.context.allowIn
                        this.context.allowIn = true
                        m = this.parseFunctionSourceElements()
                        this.context.allowIn = x
                      } else {
                        m = this.isolateCoverGrammar(
                          this.parseAssignmentExpression
                        )
                      }
                      var D = m.type !== u.Syntax.BlockStatement
                      if (this.context.strict && o.firstRestricted) {
                        this.throwUnexpectedToken(o.firstRestricted, o.message)
                      }
                      if (this.context.strict && o.stricted) {
                        this.tolerateUnexpectedToken(o.stricted, o.message)
                      }
                      e = s
                        ? this.finalize(
                            d,
                            new a.AsyncArrowFunctionExpression(o.params, m, D)
                          )
                        : this.finalize(
                            d,
                            new a.ArrowFunctionExpression(o.params, m, D)
                          )
                      this.context.strict = h
                      this.context.allowStrictDirective = l
                      this.context.allowYield = p
                      this.context.await = f
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(n.Messages.InvalidLHSInAssignment)
                      }
                      if (
                        this.context.strict &&
                        e.type === u.Syntax.Identifier
                      ) {
                        var E = e
                        if (this.scanner.isRestrictedWord(E.name)) {
                          this.tolerateUnexpectedToken(
                            i,
                            n.Messages.StrictLHSAssignment
                          )
                        }
                        if (this.scanner.isStrictModeReservedWord(E.name)) {
                          this.tolerateUnexpectedToken(
                            i,
                            n.Messages.StrictReservedWord
                          )
                        }
                      }
                      if (!this.match('=')) {
                        this.context.isAssignmentTarget = false
                        this.context.isBindingElement = false
                      } else {
                        this.reinterpretExpressionAsPattern(e)
                      }
                      i = this.nextToken()
                      var v = i.value
                      var y = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                      e = this.finalize(
                        this.startNode(t),
                        new a.AssignmentExpression(v, e, y)
                      )
                      this.context.firstCoverInitializedNameError = null
                    }
                  }
                }
                return e
              }
              Parser.prototype.parseExpression = function () {
                var e = this.lookahead
                var t = this.isolateCoverGrammar(this.parseAssignmentExpression)
                if (this.match(',')) {
                  var i = []
                  i.push(t)
                  while (this.lookahead.type !== 2) {
                    if (!this.match(',')) {
                      break
                    }
                    this.nextToken()
                    i.push(
                      this.isolateCoverGrammar(this.parseAssignmentExpression)
                    )
                  }
                  t = this.finalize(
                    this.startNode(e),
                    new a.SequenceExpression(i)
                  )
                }
                return t
              }
              Parser.prototype.parseStatementListItem = function () {
                var e
                this.context.isAssignmentTarget = true
                this.context.isBindingElement = true
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case 'export':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          n.Messages.IllegalExportDeclaration
                        )
                      }
                      e = this.parseExportDeclaration()
                      break
                    case 'import':
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(
                          this.lookahead,
                          n.Messages.IllegalImportDeclaration
                        )
                      }
                      e = this.parseImportDeclaration()
                      break
                    case 'const':
                      e = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'function':
                      e = this.parseFunctionDeclaration()
                      break
                    case 'class':
                      e = this.parseClassDeclaration()
                      break
                    case 'let':
                      e = this.isLexicalDeclaration()
                        ? this.parseLexicalDeclaration({ inFor: false })
                        : this.parseStatement()
                      break
                    default:
                      e = this.parseStatement()
                      break
                  }
                } else {
                  e = this.parseStatement()
                }
                return e
              }
              Parser.prototype.parseBlock = function () {
                var e = this.createNode()
                this.expect('{')
                var t = []
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  t.push(this.parseStatementListItem())
                }
                this.expect('}')
                return this.finalize(e, new a.BlockStatement(t))
              }
              Parser.prototype.parseLexicalBinding = function (e, t) {
                var i = this.createNode()
                var r = []
                var s = this.parsePattern(r, e)
                if (this.context.strict && s.type === u.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(s.name)) {
                    this.tolerateError(n.Messages.StrictVarName)
                  }
                }
                var o = null
                if (e === 'const') {
                  if (
                    !this.matchKeyword('in') &&
                    !this.matchContextualKeyword('of')
                  ) {
                    if (this.match('=')) {
                      this.nextToken()
                      o = this.isolateCoverGrammar(
                        this.parseAssignmentExpression
                      )
                    } else {
                      this.throwError(
                        n.Messages.DeclarationMissingInitializer,
                        'const'
                      )
                    }
                  }
                } else if (
                  (!t.inFor && s.type !== u.Syntax.Identifier) ||
                  this.match('=')
                ) {
                  this.expect('=')
                  o = this.isolateCoverGrammar(this.parseAssignmentExpression)
                }
                return this.finalize(i, new a.VariableDeclarator(s, o))
              }
              Parser.prototype.parseBindingList = function (e, t) {
                var i = [this.parseLexicalBinding(e, t)]
                while (this.match(',')) {
                  this.nextToken()
                  i.push(this.parseLexicalBinding(e, t))
                }
                return i
              }
              Parser.prototype.isLexicalDeclaration = function () {
                var e = this.scanner.saveState()
                this.scanner.scanComments()
                var t = this.scanner.lex()
                this.scanner.restoreState(e)
                return (
                  t.type === 3 ||
                  (t.type === 7 && t.value === '[') ||
                  (t.type === 7 && t.value === '{') ||
                  (t.type === 4 && t.value === 'let') ||
                  (t.type === 4 && t.value === 'yield')
                )
              }
              Parser.prototype.parseLexicalDeclaration = function (e) {
                var t = this.createNode()
                var i = this.nextToken().value
                r.assert(
                  i === 'let' || i === 'const',
                  'Lexical declaration must be either let or const'
                )
                var s = this.parseBindingList(i, e)
                this.consumeSemicolon()
                return this.finalize(t, new a.VariableDeclaration(s, i))
              }
              Parser.prototype.parseBindingRestElement = function (e, t) {
                var i = this.createNode()
                this.expect('...')
                var r = this.parsePattern(e, t)
                return this.finalize(i, new a.RestElement(r))
              }
              Parser.prototype.parseArrayPattern = function (e, t) {
                var i = this.createNode()
                this.expect('[')
                var r = []
                while (!this.match(']')) {
                  if (this.match(',')) {
                    this.nextToken()
                    r.push(null)
                  } else {
                    if (this.match('...')) {
                      r.push(this.parseBindingRestElement(e, t))
                      break
                    } else {
                      r.push(this.parsePatternWithDefault(e, t))
                    }
                    if (!this.match(']')) {
                      this.expect(',')
                    }
                  }
                }
                this.expect(']')
                return this.finalize(i, new a.ArrayPattern(r))
              }
              Parser.prototype.parsePropertyPattern = function (e, t) {
                var i = this.createNode()
                var r = false
                var s = false
                var n = false
                var o
                var u
                if (this.lookahead.type === 3) {
                  var h = this.lookahead
                  o = this.parseVariableIdentifier()
                  var c = this.finalize(i, new a.Identifier(h.value))
                  if (this.match('=')) {
                    e.push(h)
                    s = true
                    this.nextToken()
                    var l = this.parseAssignmentExpression()
                    u = this.finalize(
                      this.startNode(h),
                      new a.AssignmentPattern(c, l)
                    )
                  } else if (!this.match(':')) {
                    e.push(h)
                    s = true
                    u = c
                  } else {
                    this.expect(':')
                    u = this.parsePatternWithDefault(e, t)
                  }
                } else {
                  r = this.match('[')
                  o = this.parseObjectPropertyKey()
                  this.expect(':')
                  u = this.parsePatternWithDefault(e, t)
                }
                return this.finalize(i, new a.Property('init', o, r, u, n, s))
              }
              Parser.prototype.parseObjectPattern = function (e, t) {
                var i = this.createNode()
                var r = []
                this.expect('{')
                while (!this.match('}')) {
                  r.push(this.parsePropertyPattern(e, t))
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return this.finalize(i, new a.ObjectPattern(r))
              }
              Parser.prototype.parsePattern = function (e, t) {
                var i
                if (this.match('[')) {
                  i = this.parseArrayPattern(e, t)
                } else if (this.match('{')) {
                  i = this.parseObjectPattern(e, t)
                } else {
                  if (
                    this.matchKeyword('let') &&
                    (t === 'const' || t === 'let')
                  ) {
                    this.tolerateUnexpectedToken(
                      this.lookahead,
                      n.Messages.LetInLexicalBinding
                    )
                  }
                  e.push(this.lookahead)
                  i = this.parseVariableIdentifier(t)
                }
                return i
              }
              Parser.prototype.parsePatternWithDefault = function (e, t) {
                var i = this.lookahead
                var r = this.parsePattern(e, t)
                if (this.match('=')) {
                  this.nextToken()
                  var s = this.context.allowYield
                  this.context.allowYield = true
                  var n = this.isolateCoverGrammar(
                    this.parseAssignmentExpression
                  )
                  this.context.allowYield = s
                  r = this.finalize(
                    this.startNode(i),
                    new a.AssignmentPattern(r, n)
                  )
                }
                return r
              }
              Parser.prototype.parseVariableIdentifier = function (e) {
                var t = this.createNode()
                var i = this.nextToken()
                if (i.type === 4 && i.value === 'yield') {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(
                      i,
                      n.Messages.StrictReservedWord
                    )
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(i)
                  }
                } else if (i.type !== 3) {
                  if (
                    this.context.strict &&
                    i.type === 4 &&
                    this.scanner.isStrictModeReservedWord(i.value)
                  ) {
                    this.tolerateUnexpectedToken(
                      i,
                      n.Messages.StrictReservedWord
                    )
                  } else {
                    if (
                      this.context.strict ||
                      i.value !== 'let' ||
                      e !== 'var'
                    ) {
                      this.throwUnexpectedToken(i)
                    }
                  }
                } else if (
                  (this.context.isModule || this.context.await) &&
                  i.type === 3 &&
                  i.value === 'await'
                ) {
                  this.tolerateUnexpectedToken(i)
                }
                return this.finalize(t, new a.Identifier(i.value))
              }
              Parser.prototype.parseVariableDeclaration = function (e) {
                var t = this.createNode()
                var i = []
                var r = this.parsePattern(i, 'var')
                if (this.context.strict && r.type === u.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(r.name)) {
                    this.tolerateError(n.Messages.StrictVarName)
                  }
                }
                var s = null
                if (this.match('=')) {
                  this.nextToken()
                  s = this.isolateCoverGrammar(this.parseAssignmentExpression)
                } else if (r.type !== u.Syntax.Identifier && !e.inFor) {
                  this.expect('=')
                }
                return this.finalize(t, new a.VariableDeclarator(r, s))
              }
              Parser.prototype.parseVariableDeclarationList = function (e) {
                var t = { inFor: e.inFor }
                var i = []
                i.push(this.parseVariableDeclaration(t))
                while (this.match(',')) {
                  this.nextToken()
                  i.push(this.parseVariableDeclaration(t))
                }
                return i
              }
              Parser.prototype.parseVariableStatement = function () {
                var e = this.createNode()
                this.expectKeyword('var')
                var t = this.parseVariableDeclarationList({ inFor: false })
                this.consumeSemicolon()
                return this.finalize(e, new a.VariableDeclaration(t, 'var'))
              }
              Parser.prototype.parseEmptyStatement = function () {
                var e = this.createNode()
                this.expect(';')
                return this.finalize(e, new a.EmptyStatement())
              }
              Parser.prototype.parseExpressionStatement = function () {
                var e = this.createNode()
                var t = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(e, new a.ExpressionStatement(t))
              }
              Parser.prototype.parseIfClause = function () {
                if (this.context.strict && this.matchKeyword('function')) {
                  this.tolerateError(n.Messages.StrictFunction)
                }
                return this.parseStatement()
              }
              Parser.prototype.parseIfStatement = function () {
                var e = this.createNode()
                var t
                var i = null
                this.expectKeyword('if')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  t = this.parseIfClause()
                  if (this.matchKeyword('else')) {
                    this.nextToken()
                    i = this.parseIfClause()
                  }
                }
                return this.finalize(e, new a.IfStatement(r, t, i))
              }
              Parser.prototype.parseDoWhileStatement = function () {
                var e = this.createNode()
                this.expectKeyword('do')
                var t = this.context.inIteration
                this.context.inIteration = true
                var i = this.parseStatement()
                this.context.inIteration = t
                this.expectKeyword('while')
                this.expect('(')
                var r = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                } else {
                  this.expect(')')
                  if (this.match(';')) {
                    this.nextToken()
                  }
                }
                return this.finalize(e, new a.DoWhileStatement(i, r))
              }
              Parser.prototype.parseWhileStatement = function () {
                var e = this.createNode()
                var t
                this.expectKeyword('while')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  var r = this.context.inIteration
                  this.context.inIteration = true
                  t = this.parseStatement()
                  this.context.inIteration = r
                }
                return this.finalize(e, new a.WhileStatement(i, t))
              }
              Parser.prototype.parseForStatement = function () {
                var e = null
                var t = null
                var i = null
                var r = true
                var s, o
                var h = this.createNode()
                this.expectKeyword('for')
                this.expect('(')
                if (this.match(';')) {
                  this.nextToken()
                } else {
                  if (this.matchKeyword('var')) {
                    e = this.createNode()
                    this.nextToken()
                    var c = this.context.allowIn
                    this.context.allowIn = false
                    var l = this.parseVariableDeclarationList({ inFor: true })
                    this.context.allowIn = c
                    if (l.length === 1 && this.matchKeyword('in')) {
                      var p = l[0]
                      if (
                        p.init &&
                        (p.id.type === u.Syntax.ArrayPattern ||
                          p.id.type === u.Syntax.ObjectPattern ||
                          this.context.strict)
                      ) {
                        this.tolerateError(
                          n.Messages.ForInOfLoopInitializer,
                          'for-in'
                        )
                      }
                      e = this.finalize(e, new a.VariableDeclaration(l, 'var'))
                      this.nextToken()
                      s = e
                      o = this.parseExpression()
                      e = null
                    } else if (
                      l.length === 1 &&
                      l[0].init === null &&
                      this.matchContextualKeyword('of')
                    ) {
                      e = this.finalize(e, new a.VariableDeclaration(l, 'var'))
                      this.nextToken()
                      s = e
                      o = this.parseAssignmentExpression()
                      e = null
                      r = false
                    } else {
                      e = this.finalize(e, new a.VariableDeclaration(l, 'var'))
                      this.expect(';')
                    }
                  } else if (
                    this.matchKeyword('const') ||
                    this.matchKeyword('let')
                  ) {
                    e = this.createNode()
                    var f = this.nextToken().value
                    if (!this.context.strict && this.lookahead.value === 'in') {
                      e = this.finalize(e, new a.Identifier(f))
                      this.nextToken()
                      s = e
                      o = this.parseExpression()
                      e = null
                    } else {
                      var c = this.context.allowIn
                      this.context.allowIn = false
                      var l = this.parseBindingList(f, { inFor: true })
                      this.context.allowIn = c
                      if (
                        l.length === 1 &&
                        l[0].init === null &&
                        this.matchKeyword('in')
                      ) {
                        e = this.finalize(e, new a.VariableDeclaration(l, f))
                        this.nextToken()
                        s = e
                        o = this.parseExpression()
                        e = null
                      } else if (
                        l.length === 1 &&
                        l[0].init === null &&
                        this.matchContextualKeyword('of')
                      ) {
                        e = this.finalize(e, new a.VariableDeclaration(l, f))
                        this.nextToken()
                        s = e
                        o = this.parseAssignmentExpression()
                        e = null
                        r = false
                      } else {
                        this.consumeSemicolon()
                        e = this.finalize(e, new a.VariableDeclaration(l, f))
                      }
                    }
                  } else {
                    var d = this.lookahead
                    var c = this.context.allowIn
                    this.context.allowIn = false
                    e = this.inheritCoverGrammar(this.parseAssignmentExpression)
                    this.context.allowIn = c
                    if (this.matchKeyword('in')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === u.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(n.Messages.InvalidLHSInForIn)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(e)
                      s = e
                      o = this.parseExpression()
                      e = null
                    } else if (this.matchContextualKeyword('of')) {
                      if (
                        !this.context.isAssignmentTarget ||
                        e.type === u.Syntax.AssignmentExpression
                      ) {
                        this.tolerateError(n.Messages.InvalidLHSInForLoop)
                      }
                      this.nextToken()
                      this.reinterpretExpressionAsPattern(e)
                      s = e
                      o = this.parseAssignmentExpression()
                      e = null
                      r = false
                    } else {
                      if (this.match(',')) {
                        var m = [e]
                        while (this.match(',')) {
                          this.nextToken()
                          m.push(
                            this.isolateCoverGrammar(
                              this.parseAssignmentExpression
                            )
                          )
                        }
                        e = this.finalize(
                          this.startNode(d),
                          new a.SequenceExpression(m)
                        )
                      }
                      this.expect(';')
                    }
                  }
                }
                if (typeof s === 'undefined') {
                  if (!this.match(';')) {
                    t = this.parseExpression()
                  }
                  this.expect(';')
                  if (!this.match(')')) {
                    i = this.parseExpression()
                  }
                }
                var x
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  x = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  var D = this.context.inIteration
                  this.context.inIteration = true
                  x = this.isolateCoverGrammar(this.parseStatement)
                  this.context.inIteration = D
                }
                return typeof s === 'undefined'
                  ? this.finalize(h, new a.ForStatement(e, t, i, x))
                  : r
                  ? this.finalize(h, new a.ForInStatement(s, o, x))
                  : this.finalize(h, new a.ForOfStatement(s, o, x))
              }
              Parser.prototype.parseContinueStatement = function () {
                var e = this.createNode()
                this.expectKeyword('continue')
                var t = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var i = this.parseVariableIdentifier()
                  t = i
                  var r = '$' + i.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      r
                    )
                  ) {
                    this.throwError(n.Messages.UnknownLabel, i.name)
                  }
                }
                this.consumeSemicolon()
                if (t === null && !this.context.inIteration) {
                  this.throwError(n.Messages.IllegalContinue)
                }
                return this.finalize(e, new a.ContinueStatement(t))
              }
              Parser.prototype.parseBreakStatement = function () {
                var e = this.createNode()
                this.expectKeyword('break')
                var t = null
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var i = this.parseVariableIdentifier()
                  var r = '$' + i.name
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      r
                    )
                  ) {
                    this.throwError(n.Messages.UnknownLabel, i.name)
                  }
                  t = i
                }
                this.consumeSemicolon()
                if (
                  t === null &&
                  !this.context.inIteration &&
                  !this.context.inSwitch
                ) {
                  this.throwError(n.Messages.IllegalBreak)
                }
                return this.finalize(e, new a.BreakStatement(t))
              }
              Parser.prototype.parseReturnStatement = function () {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(n.Messages.IllegalReturn)
                }
                var e = this.createNode()
                this.expectKeyword('return')
                var t =
                  (!this.match(';') &&
                    !this.match('}') &&
                    !this.hasLineTerminator &&
                    this.lookahead.type !== 2) ||
                  this.lookahead.type === 8 ||
                  this.lookahead.type === 10
                var i = t ? this.parseExpression() : null
                this.consumeSemicolon()
                return this.finalize(e, new a.ReturnStatement(i))
              }
              Parser.prototype.parseWithStatement = function () {
                if (this.context.strict) {
                  this.tolerateError(n.Messages.StrictModeWith)
                }
                var e = this.createNode()
                var t
                this.expectKeyword('with')
                this.expect('(')
                var i = this.parseExpression()
                if (!this.match(')') && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken())
                  t = this.finalize(this.createNode(), new a.EmptyStatement())
                } else {
                  this.expect(')')
                  t = this.parseStatement()
                }
                return this.finalize(e, new a.WithStatement(i, t))
              }
              Parser.prototype.parseSwitchCase = function () {
                var e = this.createNode()
                var t
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  t = null
                } else {
                  this.expectKeyword('case')
                  t = this.parseExpression()
                }
                this.expect(':')
                var i = []
                while (true) {
                  if (
                    this.match('}') ||
                    this.matchKeyword('default') ||
                    this.matchKeyword('case')
                  ) {
                    break
                  }
                  i.push(this.parseStatementListItem())
                }
                return this.finalize(e, new a.SwitchCase(t, i))
              }
              Parser.prototype.parseSwitchStatement = function () {
                var e = this.createNode()
                this.expectKeyword('switch')
                this.expect('(')
                var t = this.parseExpression()
                this.expect(')')
                var i = this.context.inSwitch
                this.context.inSwitch = true
                var r = []
                var s = false
                this.expect('{')
                while (true) {
                  if (this.match('}')) {
                    break
                  }
                  var o = this.parseSwitchCase()
                  if (o.test === null) {
                    if (s) {
                      this.throwError(n.Messages.MultipleDefaultsInSwitch)
                    }
                    s = true
                  }
                  r.push(o)
                }
                this.expect('}')
                this.context.inSwitch = i
                return this.finalize(e, new a.SwitchStatement(t, r))
              }
              Parser.prototype.parseLabelledStatement = function () {
                var e = this.createNode()
                var t = this.parseExpression()
                var i
                if (t.type === u.Syntax.Identifier && this.match(':')) {
                  this.nextToken()
                  var r = t
                  var s = '$' + r.name
                  if (
                    Object.prototype.hasOwnProperty.call(
                      this.context.labelSet,
                      s
                    )
                  ) {
                    this.throwError(n.Messages.Redeclaration, 'Label', r.name)
                  }
                  this.context.labelSet[s] = true
                  var o = void 0
                  if (this.matchKeyword('class')) {
                    this.tolerateUnexpectedToken(this.lookahead)
                    o = this.parseClassDeclaration()
                  } else if (this.matchKeyword('function')) {
                    var h = this.lookahead
                    var c = this.parseFunctionDeclaration()
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(h, n.Messages.StrictFunction)
                    } else if (c.generator) {
                      this.tolerateUnexpectedToken(
                        h,
                        n.Messages.GeneratorInLegacyContext
                      )
                    }
                    o = c
                  } else {
                    o = this.parseStatement()
                  }
                  delete this.context.labelSet[s]
                  i = new a.LabeledStatement(r, o)
                } else {
                  this.consumeSemicolon()
                  i = new a.ExpressionStatement(t)
                }
                return this.finalize(e, i)
              }
              Parser.prototype.parseThrowStatement = function () {
                var e = this.createNode()
                this.expectKeyword('throw')
                if (this.hasLineTerminator) {
                  this.throwError(n.Messages.NewlineAfterThrow)
                }
                var t = this.parseExpression()
                this.consumeSemicolon()
                return this.finalize(e, new a.ThrowStatement(t))
              }
              Parser.prototype.parseCatchClause = function () {
                var e = this.createNode()
                this.expectKeyword('catch')
                this.expect('(')
                if (this.match(')')) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                var t = []
                var i = this.parsePattern(t)
                var r = {}
                for (var s = 0; s < t.length; s++) {
                  var o = '$' + t[s].value
                  if (Object.prototype.hasOwnProperty.call(r, o)) {
                    this.tolerateError(n.Messages.DuplicateBinding, t[s].value)
                  }
                  r[o] = true
                }
                if (this.context.strict && i.type === u.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(i.name)) {
                    this.tolerateError(n.Messages.StrictCatchVariable)
                  }
                }
                this.expect(')')
                var h = this.parseBlock()
                return this.finalize(e, new a.CatchClause(i, h))
              }
              Parser.prototype.parseFinallyClause = function () {
                this.expectKeyword('finally')
                return this.parseBlock()
              }
              Parser.prototype.parseTryStatement = function () {
                var e = this.createNode()
                this.expectKeyword('try')
                var t = this.parseBlock()
                var i = this.matchKeyword('catch')
                  ? this.parseCatchClause()
                  : null
                var r = this.matchKeyword('finally')
                  ? this.parseFinallyClause()
                  : null
                if (!i && !r) {
                  this.throwError(n.Messages.NoCatchOrFinally)
                }
                return this.finalize(e, new a.TryStatement(t, i, r))
              }
              Parser.prototype.parseDebuggerStatement = function () {
                var e = this.createNode()
                this.expectKeyword('debugger')
                this.consumeSemicolon()
                return this.finalize(e, new a.DebuggerStatement())
              }
              Parser.prototype.parseStatement = function () {
                var e
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    e = this.parseExpressionStatement()
                    break
                  case 7:
                    var t = this.lookahead.value
                    if (t === '{') {
                      e = this.parseBlock()
                    } else if (t === '(') {
                      e = this.parseExpressionStatement()
                    } else if (t === ';') {
                      e = this.parseEmptyStatement()
                    } else {
                      e = this.parseExpressionStatement()
                    }
                    break
                  case 3:
                    e = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration()
                      : this.parseLabelledStatement()
                    break
                  case 4:
                    switch (this.lookahead.value) {
                      case 'break':
                        e = this.parseBreakStatement()
                        break
                      case 'continue':
                        e = this.parseContinueStatement()
                        break
                      case 'debugger':
                        e = this.parseDebuggerStatement()
                        break
                      case 'do':
                        e = this.parseDoWhileStatement()
                        break
                      case 'for':
                        e = this.parseForStatement()
                        break
                      case 'function':
                        e = this.parseFunctionDeclaration()
                        break
                      case 'if':
                        e = this.parseIfStatement()
                        break
                      case 'return':
                        e = this.parseReturnStatement()
                        break
                      case 'switch':
                        e = this.parseSwitchStatement()
                        break
                      case 'throw':
                        e = this.parseThrowStatement()
                        break
                      case 'try':
                        e = this.parseTryStatement()
                        break
                      case 'var':
                        e = this.parseVariableStatement()
                        break
                      case 'while':
                        e = this.parseWhileStatement()
                        break
                      case 'with':
                        e = this.parseWithStatement()
                        break
                      default:
                        e = this.parseExpressionStatement()
                        break
                    }
                    break
                  default:
                    e = this.throwUnexpectedToken(this.lookahead)
                }
                return e
              }
              Parser.prototype.parseFunctionSourceElements = function () {
                var e = this.createNode()
                this.expect('{')
                var t = this.parseDirectivePrologues()
                var i = this.context.labelSet
                var r = this.context.inIteration
                var s = this.context.inSwitch
                var n = this.context.inFunctionBody
                this.context.labelSet = {}
                this.context.inIteration = false
                this.context.inSwitch = false
                this.context.inFunctionBody = true
                while (this.lookahead.type !== 2) {
                  if (this.match('}')) {
                    break
                  }
                  t.push(this.parseStatementListItem())
                }
                this.expect('}')
                this.context.labelSet = i
                this.context.inIteration = r
                this.context.inSwitch = s
                this.context.inFunctionBody = n
                return this.finalize(e, new a.BlockStatement(t))
              }
              Parser.prototype.validateParam = function (e, t, i) {
                var r = '$' + i
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(i)) {
                    e.stricted = t
                    e.message = n.Messages.StrictParamName
                  }
                  if (Object.prototype.hasOwnProperty.call(e.paramSet, r)) {
                    e.stricted = t
                    e.message = n.Messages.StrictParamDupe
                  }
                } else if (!e.firstRestricted) {
                  if (this.scanner.isRestrictedWord(i)) {
                    e.firstRestricted = t
                    e.message = n.Messages.StrictParamName
                  } else if (this.scanner.isStrictModeReservedWord(i)) {
                    e.firstRestricted = t
                    e.message = n.Messages.StrictReservedWord
                  } else if (
                    Object.prototype.hasOwnProperty.call(e.paramSet, r)
                  ) {
                    e.stricted = t
                    e.message = n.Messages.StrictParamDupe
                  }
                }
                if (typeof Object.defineProperty === 'function') {
                  Object.defineProperty(e.paramSet, r, {
                    value: true,
                    enumerable: true,
                    writable: true,
                    configurable: true,
                  })
                } else {
                  e.paramSet[r] = true
                }
              }
              Parser.prototype.parseRestElement = function (e) {
                var t = this.createNode()
                this.expect('...')
                var i = this.parsePattern(e)
                if (this.match('=')) {
                  this.throwError(n.Messages.DefaultRestParameter)
                }
                if (!this.match(')')) {
                  this.throwError(n.Messages.ParameterAfterRestParameter)
                }
                return this.finalize(t, new a.RestElement(i))
              }
              Parser.prototype.parseFormalParameter = function (e) {
                var t = []
                var i = this.match('...')
                  ? this.parseRestElement(t)
                  : this.parsePatternWithDefault(t)
                for (var r = 0; r < t.length; r++) {
                  this.validateParam(e, t[r], t[r].value)
                }
                e.simple = e.simple && i instanceof a.Identifier
                e.params.push(i)
              }
              Parser.prototype.parseFormalParameters = function (e) {
                var t
                t = { simple: true, params: [], firstRestricted: e }
                this.expect('(')
                if (!this.match(')')) {
                  t.paramSet = {}
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(t)
                    if (this.match(')')) {
                      break
                    }
                    this.expect(',')
                    if (this.match(')')) {
                      break
                    }
                  }
                }
                this.expect(')')
                return {
                  simple: t.simple,
                  params: t.params,
                  stricted: t.stricted,
                  firstRestricted: t.firstRestricted,
                  message: t.message,
                }
              }
              Parser.prototype.matchAsyncFunction = function () {
                var e = this.matchContextualKeyword('async')
                if (e) {
                  var t = this.scanner.saveState()
                  this.scanner.scanComments()
                  var i = this.scanner.lex()
                  this.scanner.restoreState(t)
                  e =
                    t.lineNumber === i.lineNumber &&
                    i.type === 4 &&
                    i.value === 'function'
                }
                return e
              }
              Parser.prototype.parseFunctionDeclaration = function (e) {
                var t = this.createNode()
                var i = this.matchContextualKeyword('async')
                if (i) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var r = i ? false : this.match('*')
                if (r) {
                  this.nextToken()
                }
                var s
                var o = null
                var u = null
                if (!e || !this.match('(')) {
                  var h = this.lookahead
                  o = this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(h.value)) {
                      this.tolerateUnexpectedToken(
                        h,
                        n.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(h.value)) {
                      u = h
                      s = n.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(h.value)) {
                      u = h
                      s = n.Messages.StrictReservedWord
                    }
                  }
                }
                var c = this.context.await
                var l = this.context.allowYield
                this.context.await = i
                this.context.allowYield = !r
                var p = this.parseFormalParameters(u)
                var f = p.params
                var d = p.stricted
                u = p.firstRestricted
                if (p.message) {
                  s = p.message
                }
                var m = this.context.strict
                var x = this.context.allowStrictDirective
                this.context.allowStrictDirective = p.simple
                var D = this.parseFunctionSourceElements()
                if (this.context.strict && u) {
                  this.throwUnexpectedToken(u, s)
                }
                if (this.context.strict && d) {
                  this.tolerateUnexpectedToken(d, s)
                }
                this.context.strict = m
                this.context.allowStrictDirective = x
                this.context.await = c
                this.context.allowYield = l
                return i
                  ? this.finalize(t, new a.AsyncFunctionDeclaration(o, f, D))
                  : this.finalize(t, new a.FunctionDeclaration(o, f, D, r))
              }
              Parser.prototype.parseFunctionExpression = function () {
                var e = this.createNode()
                var t = this.matchContextualKeyword('async')
                if (t) {
                  this.nextToken()
                }
                this.expectKeyword('function')
                var i = t ? false : this.match('*')
                if (i) {
                  this.nextToken()
                }
                var r
                var s = null
                var o
                var u = this.context.await
                var h = this.context.allowYield
                this.context.await = t
                this.context.allowYield = !i
                if (!this.match('(')) {
                  var c = this.lookahead
                  s =
                    !this.context.strict && !i && this.matchKeyword('yield')
                      ? this.parseIdentifierName()
                      : this.parseVariableIdentifier()
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(c.value)) {
                      this.tolerateUnexpectedToken(
                        c,
                        n.Messages.StrictFunctionName
                      )
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(c.value)) {
                      o = c
                      r = n.Messages.StrictFunctionName
                    } else if (this.scanner.isStrictModeReservedWord(c.value)) {
                      o = c
                      r = n.Messages.StrictReservedWord
                    }
                  }
                }
                var l = this.parseFormalParameters(o)
                var p = l.params
                var f = l.stricted
                o = l.firstRestricted
                if (l.message) {
                  r = l.message
                }
                var d = this.context.strict
                var m = this.context.allowStrictDirective
                this.context.allowStrictDirective = l.simple
                var x = this.parseFunctionSourceElements()
                if (this.context.strict && o) {
                  this.throwUnexpectedToken(o, r)
                }
                if (this.context.strict && f) {
                  this.tolerateUnexpectedToken(f, r)
                }
                this.context.strict = d
                this.context.allowStrictDirective = m
                this.context.await = u
                this.context.allowYield = h
                return t
                  ? this.finalize(e, new a.AsyncFunctionExpression(s, p, x))
                  : this.finalize(e, new a.FunctionExpression(s, p, x, i))
              }
              Parser.prototype.parseDirective = function () {
                var e = this.lookahead
                var t = this.createNode()
                var i = this.parseExpression()
                var r =
                  i.type === u.Syntax.Literal
                    ? this.getTokenRaw(e).slice(1, -1)
                    : null
                this.consumeSemicolon()
                return this.finalize(
                  t,
                  r ? new a.Directive(i, r) : new a.ExpressionStatement(i)
                )
              }
              Parser.prototype.parseDirectivePrologues = function () {
                var e = null
                var t = []
                while (true) {
                  var i = this.lookahead
                  if (i.type !== 8) {
                    break
                  }
                  var r = this.parseDirective()
                  t.push(r)
                  var s = r.directive
                  if (typeof s !== 'string') {
                    break
                  }
                  if (s === 'use strict') {
                    this.context.strict = true
                    if (e) {
                      this.tolerateUnexpectedToken(
                        e,
                        n.Messages.StrictOctalLiteral
                      )
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(
                        i,
                        n.Messages.IllegalLanguageModeDirective
                      )
                    }
                  } else {
                    if (!e && i.octal) {
                      e = i
                    }
                  }
                }
                return t
              }
              Parser.prototype.qualifiedPropertyName = function (e) {
                switch (e.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true
                  case 7:
                    return e.value === '['
                  default:
                    break
                }
                return false
              }
              Parser.prototype.parseGetterMethod = function () {
                var e = this.createNode()
                var t = false
                var i = this.context.allowYield
                this.context.allowYield = !t
                var r = this.parseFormalParameters()
                if (r.params.length > 0) {
                  this.tolerateError(n.Messages.BadGetterArity)
                }
                var s = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  e,
                  new a.FunctionExpression(null, r.params, s, t)
                )
              }
              Parser.prototype.parseSetterMethod = function () {
                var e = this.createNode()
                var t = false
                var i = this.context.allowYield
                this.context.allowYield = !t
                var r = this.parseFormalParameters()
                if (r.params.length !== 1) {
                  this.tolerateError(n.Messages.BadSetterArity)
                } else if (r.params[0] instanceof a.RestElement) {
                  this.tolerateError(n.Messages.BadSetterRestParameter)
                }
                var s = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  e,
                  new a.FunctionExpression(null, r.params, s, t)
                )
              }
              Parser.prototype.parseGeneratorMethod = function () {
                var e = this.createNode()
                var t = true
                var i = this.context.allowYield
                this.context.allowYield = true
                var r = this.parseFormalParameters()
                this.context.allowYield = false
                var s = this.parsePropertyMethod(r)
                this.context.allowYield = i
                return this.finalize(
                  e,
                  new a.FunctionExpression(null, r.params, s, t)
                )
              }
              Parser.prototype.isStartOfExpression = function () {
                var e = true
                var t = this.lookahead.value
                switch (this.lookahead.type) {
                  case 7:
                    e =
                      t === '[' ||
                      t === '(' ||
                      t === '{' ||
                      t === '+' ||
                      t === '-' ||
                      t === '!' ||
                      t === '~' ||
                      t === '++' ||
                      t === '--' ||
                      t === '/' ||
                      t === '/='
                    break
                  case 4:
                    e =
                      t === 'class' ||
                      t === 'delete' ||
                      t === 'function' ||
                      t === 'let' ||
                      t === 'new' ||
                      t === 'super' ||
                      t === 'this' ||
                      t === 'typeof' ||
                      t === 'void' ||
                      t === 'yield'
                    break
                  default:
                    break
                }
                return e
              }
              Parser.prototype.parseYieldExpression = function () {
                var e = this.createNode()
                this.expectKeyword('yield')
                var t = null
                var i = false
                if (!this.hasLineTerminator) {
                  var r = this.context.allowYield
                  this.context.allowYield = false
                  i = this.match('*')
                  if (i) {
                    this.nextToken()
                    t = this.parseAssignmentExpression()
                  } else if (this.isStartOfExpression()) {
                    t = this.parseAssignmentExpression()
                  }
                  this.context.allowYield = r
                }
                return this.finalize(e, new a.YieldExpression(t, i))
              }
              Parser.prototype.parseClassElement = function (e) {
                var t = this.lookahead
                var i = this.createNode()
                var r = ''
                var s = null
                var o = null
                var u = false
                var h = false
                var c = false
                var l = false
                if (this.match('*')) {
                  this.nextToken()
                } else {
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                  var p = s
                  if (
                    p.name === 'static' &&
                    (this.qualifiedPropertyName(this.lookahead) ||
                      this.match('*'))
                  ) {
                    t = this.lookahead
                    c = true
                    u = this.match('[')
                    if (this.match('*')) {
                      this.nextToken()
                    } else {
                      s = this.parseObjectPropertyKey()
                    }
                  }
                  if (
                    t.type === 3 &&
                    !this.hasLineTerminator &&
                    t.value === 'async'
                  ) {
                    var f = this.lookahead.value
                    if (f !== ':' && f !== '(' && f !== '*') {
                      l = true
                      t = this.lookahead
                      s = this.parseObjectPropertyKey()
                      if (t.type === 3 && t.value === 'constructor') {
                        this.tolerateUnexpectedToken(
                          t,
                          n.Messages.ConstructorIsAsync
                        )
                      }
                    }
                  }
                }
                var d = this.qualifiedPropertyName(this.lookahead)
                if (t.type === 3) {
                  if (t.value === 'get' && d) {
                    r = 'get'
                    u = this.match('[')
                    s = this.parseObjectPropertyKey()
                    this.context.allowYield = false
                    o = this.parseGetterMethod()
                  } else if (t.value === 'set' && d) {
                    r = 'set'
                    u = this.match('[')
                    s = this.parseObjectPropertyKey()
                    o = this.parseSetterMethod()
                  }
                } else if (t.type === 7 && t.value === '*' && d) {
                  r = 'init'
                  u = this.match('[')
                  s = this.parseObjectPropertyKey()
                  o = this.parseGeneratorMethod()
                  h = true
                }
                if (!r && s && this.match('(')) {
                  r = 'init'
                  o = l
                    ? this.parsePropertyMethodAsyncFunction()
                    : this.parsePropertyMethodFunction()
                  h = true
                }
                if (!r) {
                  this.throwUnexpectedToken(this.lookahead)
                }
                if (r === 'init') {
                  r = 'method'
                }
                if (!u) {
                  if (c && this.isPropertyKey(s, 'prototype')) {
                    this.throwUnexpectedToken(t, n.Messages.StaticPrototype)
                  }
                  if (!c && this.isPropertyKey(s, 'constructor')) {
                    if (r !== 'method' || !h || (o && o.generator)) {
                      this.throwUnexpectedToken(
                        t,
                        n.Messages.ConstructorSpecialMethod
                      )
                    }
                    if (e.value) {
                      this.throwUnexpectedToken(
                        t,
                        n.Messages.DuplicateConstructor
                      )
                    } else {
                      e.value = true
                    }
                    r = 'constructor'
                  }
                }
                return this.finalize(i, new a.MethodDefinition(s, u, o, r, c))
              }
              Parser.prototype.parseClassElementList = function () {
                var e = []
                var t = { value: false }
                this.expect('{')
                while (!this.match('}')) {
                  if (this.match(';')) {
                    this.nextToken()
                  } else {
                    e.push(this.parseClassElement(t))
                  }
                }
                this.expect('}')
                return e
              }
              Parser.prototype.parseClassBody = function () {
                var e = this.createNode()
                var t = this.parseClassElementList()
                return this.finalize(e, new a.ClassBody(t))
              }
              Parser.prototype.parseClassDeclaration = function (e) {
                var t = this.createNode()
                var i = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var r =
                  e && this.lookahead.type !== 3
                    ? null
                    : this.parseVariableIdentifier()
                var s = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  s = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var n = this.parseClassBody()
                this.context.strict = i
                return this.finalize(t, new a.ClassDeclaration(r, s, n))
              }
              Parser.prototype.parseClassExpression = function () {
                var e = this.createNode()
                var t = this.context.strict
                this.context.strict = true
                this.expectKeyword('class')
                var i =
                  this.lookahead.type === 3
                    ? this.parseVariableIdentifier()
                    : null
                var r = null
                if (this.matchKeyword('extends')) {
                  this.nextToken()
                  r = this.isolateCoverGrammar(
                    this.parseLeftHandSideExpressionAllowCall
                  )
                }
                var s = this.parseClassBody()
                this.context.strict = t
                return this.finalize(e, new a.ClassExpression(i, r, s))
              }
              Parser.prototype.parseModule = function () {
                this.context.strict = true
                this.context.isModule = true
                this.scanner.isModule = true
                var e = this.createNode()
                var t = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem())
                }
                return this.finalize(e, new a.Module(t))
              }
              Parser.prototype.parseScript = function () {
                var e = this.createNode()
                var t = this.parseDirectivePrologues()
                while (this.lookahead.type !== 2) {
                  t.push(this.parseStatementListItem())
                }
                return this.finalize(e, new a.Script(t))
              }
              Parser.prototype.parseModuleSpecifier = function () {
                var e = this.createNode()
                if (this.lookahead.type !== 8) {
                  this.throwError(n.Messages.InvalidModuleSpecifier)
                }
                var t = this.nextToken()
                var i = this.getTokenRaw(t)
                return this.finalize(e, new a.Literal(t.value, i))
              }
              Parser.prototype.parseImportSpecifier = function () {
                var e = this.createNode()
                var t
                var i
                if (this.lookahead.type === 3) {
                  t = this.parseVariableIdentifier()
                  i = t
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    i = this.parseVariableIdentifier()
                  }
                } else {
                  t = this.parseIdentifierName()
                  i = t
                  if (this.matchContextualKeyword('as')) {
                    this.nextToken()
                    i = this.parseVariableIdentifier()
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                }
                return this.finalize(e, new a.ImportSpecifier(i, t))
              }
              Parser.prototype.parseNamedImports = function () {
                this.expect('{')
                var e = []
                while (!this.match('}')) {
                  e.push(this.parseImportSpecifier())
                  if (!this.match('}')) {
                    this.expect(',')
                  }
                }
                this.expect('}')
                return e
              }
              Parser.prototype.parseImportDefaultSpecifier = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                return this.finalize(e, new a.ImportDefaultSpecifier(t))
              }
              Parser.prototype.parseImportNamespaceSpecifier = function () {
                var e = this.createNode()
                this.expect('*')
                if (!this.matchContextualKeyword('as')) {
                  this.throwError(n.Messages.NoAsAfterImportNamespace)
                }
                this.nextToken()
                var t = this.parseIdentifierName()
                return this.finalize(e, new a.ImportNamespaceSpecifier(t))
              }
              Parser.prototype.parseImportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(n.Messages.IllegalImportDeclaration)
                }
                var e = this.createNode()
                this.expectKeyword('import')
                var t
                var i = []
                if (this.lookahead.type === 8) {
                  t = this.parseModuleSpecifier()
                } else {
                  if (this.match('{')) {
                    i = i.concat(this.parseNamedImports())
                  } else if (this.match('*')) {
                    i.push(this.parseImportNamespaceSpecifier())
                  } else if (
                    this.isIdentifierName(this.lookahead) &&
                    !this.matchKeyword('default')
                  ) {
                    i.push(this.parseImportDefaultSpecifier())
                    if (this.match(',')) {
                      this.nextToken()
                      if (this.match('*')) {
                        i.push(this.parseImportNamespaceSpecifier())
                      } else if (this.match('{')) {
                        i = i.concat(this.parseNamedImports())
                      } else {
                        this.throwUnexpectedToken(this.lookahead)
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken())
                  }
                  if (!this.matchContextualKeyword('from')) {
                    var r = this.lookahead.value
                      ? n.Messages.UnexpectedToken
                      : n.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  }
                  this.nextToken()
                  t = this.parseModuleSpecifier()
                }
                this.consumeSemicolon()
                return this.finalize(e, new a.ImportDeclaration(i, t))
              }
              Parser.prototype.parseExportSpecifier = function () {
                var e = this.createNode()
                var t = this.parseIdentifierName()
                var i = t
                if (this.matchContextualKeyword('as')) {
                  this.nextToken()
                  i = this.parseIdentifierName()
                }
                return this.finalize(e, new a.ExportSpecifier(t, i))
              }
              Parser.prototype.parseExportDeclaration = function () {
                if (this.context.inFunctionBody) {
                  this.throwError(n.Messages.IllegalExportDeclaration)
                }
                var e = this.createNode()
                this.expectKeyword('export')
                var t
                if (this.matchKeyword('default')) {
                  this.nextToken()
                  if (this.matchKeyword('function')) {
                    var i = this.parseFunctionDeclaration(true)
                    t = this.finalize(e, new a.ExportDefaultDeclaration(i))
                  } else if (this.matchKeyword('class')) {
                    var i = this.parseClassDeclaration(true)
                    t = this.finalize(e, new a.ExportDefaultDeclaration(i))
                  } else if (this.matchContextualKeyword('async')) {
                    var i = this.matchAsyncFunction()
                      ? this.parseFunctionDeclaration(true)
                      : this.parseAssignmentExpression()
                    t = this.finalize(e, new a.ExportDefaultDeclaration(i))
                  } else {
                    if (this.matchContextualKeyword('from')) {
                      this.throwError(
                        n.Messages.UnexpectedToken,
                        this.lookahead.value
                      )
                    }
                    var i = this.match('{')
                      ? this.parseObjectInitializer()
                      : this.match('[')
                      ? this.parseArrayInitializer()
                      : this.parseAssignmentExpression()
                    this.consumeSemicolon()
                    t = this.finalize(e, new a.ExportDefaultDeclaration(i))
                  }
                } else if (this.match('*')) {
                  this.nextToken()
                  if (!this.matchContextualKeyword('from')) {
                    var r = this.lookahead.value
                      ? n.Messages.UnexpectedToken
                      : n.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  }
                  this.nextToken()
                  var s = this.parseModuleSpecifier()
                  this.consumeSemicolon()
                  t = this.finalize(e, new a.ExportAllDeclaration(s))
                } else if (this.lookahead.type === 4) {
                  var i = void 0
                  switch (this.lookahead.value) {
                    case 'let':
                    case 'const':
                      i = this.parseLexicalDeclaration({ inFor: false })
                      break
                    case 'var':
                    case 'class':
                    case 'function':
                      i = this.parseStatementListItem()
                      break
                    default:
                      this.throwUnexpectedToken(this.lookahead)
                  }
                  t = this.finalize(
                    e,
                    new a.ExportNamedDeclaration(i, [], null)
                  )
                } else if (this.matchAsyncFunction()) {
                  var i = this.parseFunctionDeclaration()
                  t = this.finalize(
                    e,
                    new a.ExportNamedDeclaration(i, [], null)
                  )
                } else {
                  var o = []
                  var u = null
                  var h = false
                  this.expect('{')
                  while (!this.match('}')) {
                    h = h || this.matchKeyword('default')
                    o.push(this.parseExportSpecifier())
                    if (!this.match('}')) {
                      this.expect(',')
                    }
                  }
                  this.expect('}')
                  if (this.matchContextualKeyword('from')) {
                    this.nextToken()
                    u = this.parseModuleSpecifier()
                    this.consumeSemicolon()
                  } else if (h) {
                    var r = this.lookahead.value
                      ? n.Messages.UnexpectedToken
                      : n.Messages.MissingFromClause
                    this.throwError(r, this.lookahead.value)
                  } else {
                    this.consumeSemicolon()
                  }
                  t = this.finalize(e, new a.ExportNamedDeclaration(null, o, u))
                }
                return t
              }
              return Parser
            })()
            t.Parser = l
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            function assert(e, t) {
              if (!e) {
                throw new Error('ASSERT: ' + t)
              }
            }
            t.assert = assert
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var i = (function () {
              function ErrorHandler() {
                this.errors = []
                this.tolerant = false
              }
              ErrorHandler.prototype.recordError = function (e) {
                this.errors.push(e)
              }
              ErrorHandler.prototype.tolerate = function (e) {
                if (this.tolerant) {
                  this.recordError(e)
                } else {
                  throw e
                }
              }
              ErrorHandler.prototype.constructError = function (e, t) {
                var i = new Error(e)
                try {
                  throw i
                } catch (e) {
                  if (Object.create && Object.defineProperty) {
                    i = Object.create(e)
                    Object.defineProperty(i, 'column', { value: t })
                  }
                }
                return i
              }
              ErrorHandler.prototype.createError = function (e, t, i, r) {
                var s = 'Line ' + t + ': ' + r
                var n = this.constructError(s, i)
                n.index = e
                n.lineNumber = t
                n.description = r
                return n
              }
              ErrorHandler.prototype.throwError = function (e, t, i, r) {
                throw this.createError(e, t, i, r)
              }
              ErrorHandler.prototype.tolerateError = function (e, t, i, r) {
                var s = this.createError(e, t, i, r)
                if (this.tolerant) {
                  this.recordError(s)
                } else {
                  throw s
                }
              }
              return ErrorHandler
            })()
            t.ErrorHandler = i
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.Messages = {
              BadGetterArity: 'Getter must not have any formal parameters',
              BadSetterArity: 'Setter must have exactly one formal parameter',
              BadSetterRestParameter:
                'Setter function argument must not be a rest parameter',
              ConstructorIsAsync:
                'Class constructor may not be an async method',
              ConstructorSpecialMethod:
                'Class constructor may not be an accessor',
              DeclarationMissingInitializer:
                'Missing initializer in %0 declaration',
              DefaultRestParameter: 'Unexpected token =',
              DuplicateBinding: 'Duplicate binding %0',
              DuplicateConstructor: 'A class may only have one constructor',
              DuplicateProtoProperty:
                'Duplicate __proto__ fields are not allowed in object literals',
              ForInOfLoopInitializer:
                '%0 loop variable declaration may not have an initializer',
              GeneratorInLegacyContext:
                'Generator declarations are not allowed in legacy contexts',
              IllegalBreak: 'Illegal break statement',
              IllegalContinue: 'Illegal continue statement',
              IllegalExportDeclaration: 'Unexpected token',
              IllegalImportDeclaration: 'Unexpected token',
              IllegalLanguageModeDirective:
                "Illegal 'use strict' directive in function with non-simple parameter list",
              IllegalReturn: 'Illegal return statement',
              InvalidEscapedReservedWord:
                'Keyword must not contain escaped characters',
              InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
              InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
              InvalidLHSInForIn: 'Invalid left-hand side in for-in',
              InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
              InvalidModuleSpecifier: 'Unexpected token',
              InvalidRegExp: 'Invalid regular expression',
              LetInLexicalBinding:
                'let is disallowed as a lexically bound name',
              MissingFromClause: 'Unexpected token',
              MultipleDefaultsInSwitch:
                'More than one default clause in switch statement',
              NewlineAfterThrow: 'Illegal newline after throw',
              NoAsAfterImportNamespace: 'Unexpected token',
              NoCatchOrFinally: 'Missing catch or finally after try',
              ParameterAfterRestParameter:
                'Rest parameter must be last formal parameter',
              Redeclaration: "%0 '%1' has already been declared",
              StaticPrototype:
                'Classes may not have static property named prototype',
              StrictCatchVariable:
                'Catch variable may not be eval or arguments in strict mode',
              StrictDelete:
                'Delete of an unqualified identifier in strict mode.',
              StrictFunction:
                'In strict mode code, functions can only be declared at top level or inside a block',
              StrictFunctionName:
                'Function name may not be eval or arguments in strict mode',
              StrictLHSAssignment:
                'Assignment to eval or arguments is not allowed in strict mode',
              StrictLHSPostfix:
                'Postfix increment/decrement may not have eval or arguments operand in strict mode',
              StrictLHSPrefix:
                'Prefix increment/decrement may not have eval or arguments operand in strict mode',
              StrictModeWith:
                'Strict mode code may not include a with statement',
              StrictOctalLiteral:
                'Octal literals are not allowed in strict mode.',
              StrictParamDupe:
                'Strict mode function may not have duplicate parameter names',
              StrictParamName:
                'Parameter name eval or arguments is not allowed in strict mode',
              StrictReservedWord: 'Use of future reserved word in strict mode',
              StrictVarName:
                'Variable name may not be eval or arguments in strict mode',
              TemplateOctalLiteral:
                'Octal literals are not allowed in template strings.',
              UnexpectedEOS: 'Unexpected end of input',
              UnexpectedIdentifier: 'Unexpected identifier',
              UnexpectedNumber: 'Unexpected number',
              UnexpectedReserved: 'Unexpected reserved word',
              UnexpectedString: 'Unexpected string',
              UnexpectedTemplate: 'Unexpected quasi %0',
              UnexpectedToken: 'Unexpected token %0',
              UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
              UnknownLabel: "Undefined label '%0'",
              UnterminatedRegExp: 'Invalid regular expression: missing /',
            }
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(9)
            var s = i(4)
            var n = i(11)
            function hexValue(e) {
              return '0123456789abcdef'.indexOf(e.toLowerCase())
            }
            function octalValue(e) {
              return '01234567'.indexOf(e)
            }
            var a = (function () {
              function Scanner(e, t) {
                this.source = e
                this.errorHandler = t
                this.trackComment = false
                this.isModule = false
                this.length = e.length
                this.index = 0
                this.lineNumber = e.length > 0 ? 1 : 0
                this.lineStart = 0
                this.curlyStack = []
              }
              Scanner.prototype.saveState = function () {
                return {
                  index: this.index,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                }
              }
              Scanner.prototype.restoreState = function (e) {
                this.index = e.index
                this.lineNumber = e.lineNumber
                this.lineStart = e.lineStart
              }
              Scanner.prototype.eof = function () {
                return this.index >= this.length
              }
              Scanner.prototype.throwUnexpectedToken = function (e) {
                if (e === void 0) {
                  e = n.Messages.UnexpectedTokenIllegal
                }
                return this.errorHandler.throwError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                )
              }
              Scanner.prototype.tolerateUnexpectedToken = function (e) {
                if (e === void 0) {
                  e = n.Messages.UnexpectedTokenIllegal
                }
                this.errorHandler.tolerateError(
                  this.index,
                  this.lineNumber,
                  this.index - this.lineStart + 1,
                  e
                )
              }
              Scanner.prototype.skipSingleLineComment = function (e) {
                var t = []
                var i, r
                if (this.trackComment) {
                  t = []
                  i = this.index - e
                  r = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - e,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var n = this.source.charCodeAt(this.index)
                  ++this.index
                  if (s.Character.isLineTerminator(n)) {
                    if (this.trackComment) {
                      r.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1,
                      }
                      var a = {
                        multiLine: false,
                        slice: [i + e, this.index - 1],
                        range: [i, this.index - 1],
                        loc: r,
                      }
                      t.push(a)
                    }
                    if (n === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    return t
                  }
                }
                if (this.trackComment) {
                  r.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var a = {
                    multiLine: false,
                    slice: [i + e, this.index],
                    range: [i, this.index],
                    loc: r,
                  }
                  t.push(a)
                }
                return t
              }
              Scanner.prototype.skipMultiLineComment = function () {
                var e = []
                var t, i
                if (this.trackComment) {
                  e = []
                  t = this.index - 2
                  i = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2,
                    },
                    end: {},
                  }
                }
                while (!this.eof()) {
                  var r = this.source.charCodeAt(this.index)
                  if (s.Character.isLineTerminator(r)) {
                    if (
                      r === 13 &&
                      this.source.charCodeAt(this.index + 1) === 10
                    ) {
                      ++this.index
                    }
                    ++this.lineNumber
                    ++this.index
                    this.lineStart = this.index
                  } else if (r === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2
                      if (this.trackComment) {
                        i.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart,
                        }
                        var n = {
                          multiLine: true,
                          slice: [t + 2, this.index - 2],
                          range: [t, this.index],
                          loc: i,
                        }
                        e.push(n)
                      }
                      return e
                    }
                    ++this.index
                  } else {
                    ++this.index
                  }
                }
                if (this.trackComment) {
                  i.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  }
                  var n = {
                    multiLine: true,
                    slice: [t + 2, this.index],
                    range: [t, this.index],
                    loc: i,
                  }
                  e.push(n)
                }
                this.tolerateUnexpectedToken()
                return e
              }
              Scanner.prototype.scanComments = function () {
                var e
                if (this.trackComment) {
                  e = []
                }
                var t = this.index === 0
                while (!this.eof()) {
                  var i = this.source.charCodeAt(this.index)
                  if (s.Character.isWhiteSpace(i)) {
                    ++this.index
                  } else if (s.Character.isLineTerminator(i)) {
                    ++this.index
                    if (i === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index
                    }
                    ++this.lineNumber
                    this.lineStart = this.index
                    t = true
                  } else if (i === 47) {
                    i = this.source.charCodeAt(this.index + 1)
                    if (i === 47) {
                      this.index += 2
                      var r = this.skipSingleLineComment(2)
                      if (this.trackComment) {
                        e = e.concat(r)
                      }
                      t = true
                    } else if (i === 42) {
                      this.index += 2
                      var r = this.skipMultiLineComment()
                      if (this.trackComment) {
                        e = e.concat(r)
                      }
                    } else {
                      break
                    }
                  } else if (t && i === 45) {
                    if (
                      this.source.charCodeAt(this.index + 1) === 45 &&
                      this.source.charCodeAt(this.index + 2) === 62
                    ) {
                      this.index += 3
                      var r = this.skipSingleLineComment(3)
                      if (this.trackComment) {
                        e = e.concat(r)
                      }
                    } else {
                      break
                    }
                  } else if (i === 60 && !this.isModule) {
                    if (
                      this.source.slice(this.index + 1, this.index + 4) ===
                      '!--'
                    ) {
                      this.index += 4
                      var r = this.skipSingleLineComment(4)
                      if (this.trackComment) {
                        e = e.concat(r)
                      }
                    } else {
                      break
                    }
                  } else {
                    break
                  }
                }
                return e
              }
              Scanner.prototype.isFutureReservedWord = function (e) {
                switch (e) {
                  case 'enum':
                  case 'export':
                  case 'import':
                  case 'super':
                    return true
                  default:
                    return false
                }
              }
              Scanner.prototype.isStrictModeReservedWord = function (e) {
                switch (e) {
                  case 'implements':
                  case 'interface':
                  case 'package':
                  case 'private':
                  case 'protected':
                  case 'public':
                  case 'static':
                  case 'yield':
                  case 'let':
                    return true
                  default:
                    return false
                }
              }
              Scanner.prototype.isRestrictedWord = function (e) {
                return e === 'eval' || e === 'arguments'
              }
              Scanner.prototype.isKeyword = function (e) {
                switch (e.length) {
                  case 2:
                    return e === 'if' || e === 'in' || e === 'do'
                  case 3:
                    return (
                      e === 'var' ||
                      e === 'for' ||
                      e === 'new' ||
                      e === 'try' ||
                      e === 'let'
                    )
                  case 4:
                    return (
                      e === 'this' ||
                      e === 'else' ||
                      e === 'case' ||
                      e === 'void' ||
                      e === 'with' ||
                      e === 'enum'
                    )
                  case 5:
                    return (
                      e === 'while' ||
                      e === 'break' ||
                      e === 'catch' ||
                      e === 'throw' ||
                      e === 'const' ||
                      e === 'yield' ||
                      e === 'class' ||
                      e === 'super'
                    )
                  case 6:
                    return (
                      e === 'return' ||
                      e === 'typeof' ||
                      e === 'delete' ||
                      e === 'switch' ||
                      e === 'export' ||
                      e === 'import'
                    )
                  case 7:
                    return e === 'default' || e === 'finally' || e === 'extends'
                  case 8:
                    return (
                      e === 'function' || e === 'continue' || e === 'debugger'
                    )
                  case 10:
                    return e === 'instanceof'
                  default:
                    return false
                }
              }
              Scanner.prototype.codePointAt = function (e) {
                var t = this.source.charCodeAt(e)
                if (t >= 55296 && t <= 56319) {
                  var i = this.source.charCodeAt(e + 1)
                  if (i >= 56320 && i <= 57343) {
                    var r = t
                    t = (r - 55296) * 1024 + i - 56320 + 65536
                  }
                }
                return t
              }
              Scanner.prototype.scanHexEscape = function (e) {
                var t = e === 'u' ? 4 : 2
                var i = 0
                for (var r = 0; r < t; ++r) {
                  if (
                    !this.eof() &&
                    s.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    i = i * 16 + hexValue(this.source[this.index++])
                  } else {
                    return null
                  }
                }
                return String.fromCharCode(i)
              }
              Scanner.prototype.scanUnicodeCodePointEscape = function () {
                var e = this.source[this.index]
                var t = 0
                if (e === '}') {
                  this.throwUnexpectedToken()
                }
                while (!this.eof()) {
                  e = this.source[this.index++]
                  if (!s.Character.isHexDigit(e.charCodeAt(0))) {
                    break
                  }
                  t = t * 16 + hexValue(e)
                }
                if (t > 1114111 || e !== '}') {
                  this.throwUnexpectedToken()
                }
                return s.Character.fromCodePoint(t)
              }
              Scanner.prototype.getIdentifier = function () {
                var e = this.index++
                while (!this.eof()) {
                  var t = this.source.charCodeAt(this.index)
                  if (t === 92) {
                    this.index = e
                    return this.getComplexIdentifier()
                  } else if (t >= 55296 && t < 57343) {
                    this.index = e
                    return this.getComplexIdentifier()
                  }
                  if (s.Character.isIdentifierPart(t)) {
                    ++this.index
                  } else {
                    break
                  }
                }
                return this.source.slice(e, this.index)
              }
              Scanner.prototype.getComplexIdentifier = function () {
                var e = this.codePointAt(this.index)
                var t = s.Character.fromCodePoint(e)
                this.index += t.length
                var i
                if (e === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken()
                  }
                  ++this.index
                  if (this.source[this.index] === '{') {
                    ++this.index
                    i = this.scanUnicodeCodePointEscape()
                  } else {
                    i = this.scanHexEscape('u')
                    if (
                      i === null ||
                      i === '\\' ||
                      !s.Character.isIdentifierStart(i.charCodeAt(0))
                    ) {
                      this.throwUnexpectedToken()
                    }
                  }
                  t = i
                }
                while (!this.eof()) {
                  e = this.codePointAt(this.index)
                  if (!s.Character.isIdentifierPart(e)) {
                    break
                  }
                  i = s.Character.fromCodePoint(e)
                  t += i
                  this.index += i.length
                  if (e === 92) {
                    t = t.substr(0, t.length - 1)
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken()
                    }
                    ++this.index
                    if (this.source[this.index] === '{') {
                      ++this.index
                      i = this.scanUnicodeCodePointEscape()
                    } else {
                      i = this.scanHexEscape('u')
                      if (
                        i === null ||
                        i === '\\' ||
                        !s.Character.isIdentifierPart(i.charCodeAt(0))
                      ) {
                        this.throwUnexpectedToken()
                      }
                    }
                    t += i
                  }
                }
                return t
              }
              Scanner.prototype.octalToDecimal = function (e) {
                var t = e !== '0'
                var i = octalValue(e)
                if (
                  !this.eof() &&
                  s.Character.isOctalDigit(this.source.charCodeAt(this.index))
                ) {
                  t = true
                  i = i * 8 + octalValue(this.source[this.index++])
                  if (
                    '0123'.indexOf(e) >= 0 &&
                    !this.eof() &&
                    s.Character.isOctalDigit(this.source.charCodeAt(this.index))
                  ) {
                    i = i * 8 + octalValue(this.source[this.index++])
                  }
                }
                return { code: i, octal: t }
              }
              Scanner.prototype.scanIdentifier = function () {
                var e
                var t = this.index
                var i =
                  this.source.charCodeAt(t) === 92
                    ? this.getComplexIdentifier()
                    : this.getIdentifier()
                if (i.length === 1) {
                  e = 3
                } else if (this.isKeyword(i)) {
                  e = 4
                } else if (i === 'null') {
                  e = 5
                } else if (i === 'true' || i === 'false') {
                  e = 1
                } else {
                  e = 3
                }
                if (e !== 3 && t + i.length !== this.index) {
                  var r = this.index
                  this.index = t
                  this.tolerateUnexpectedToken(
                    n.Messages.InvalidEscapedReservedWord
                  )
                  this.index = r
                }
                return {
                  type: e,
                  value: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.scanPunctuator = function () {
                var e = this.index
                var t = this.source[this.index]
                switch (t) {
                  case '(':
                  case '{':
                    if (t === '{') {
                      this.curlyStack.push('{')
                    }
                    ++this.index
                    break
                  case '.':
                    ++this.index
                    if (
                      this.source[this.index] === '.' &&
                      this.source[this.index + 1] === '.'
                    ) {
                      this.index += 2
                      t = '...'
                    }
                    break
                  case '}':
                    ++this.index
                    this.curlyStack.pop()
                    break
                  case ')':
                  case ';':
                  case ',':
                  case '[':
                  case ']':
                  case ':':
                  case '?':
                  case '~':
                    ++this.index
                    break
                  default:
                    t = this.source.substr(this.index, 4)
                    if (t === '>>>=') {
                      this.index += 4
                    } else {
                      t = t.substr(0, 3)
                      if (
                        t === '===' ||
                        t === '!==' ||
                        t === '>>>' ||
                        t === '<<=' ||
                        t === '>>=' ||
                        t === '**='
                      ) {
                        this.index += 3
                      } else {
                        t = t.substr(0, 2)
                        if (
                          t === '&&' ||
                          t === '||' ||
                          t === '==' ||
                          t === '!=' ||
                          t === '+=' ||
                          t === '-=' ||
                          t === '*=' ||
                          t === '/=' ||
                          t === '++' ||
                          t === '--' ||
                          t === '<<' ||
                          t === '>>' ||
                          t === '&=' ||
                          t === '|=' ||
                          t === '^=' ||
                          t === '%=' ||
                          t === '<=' ||
                          t === '>=' ||
                          t === '=>' ||
                          t === '**'
                        ) {
                          this.index += 2
                        } else {
                          t = this.source[this.index]
                          if ('<>=!+-*%&|^/'.indexOf(t) >= 0) {
                            ++this.index
                          }
                        }
                      }
                    }
                }
                if (this.index === e) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 7,
                  value: t,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanHexLiteral = function (e) {
                var t = ''
                while (!this.eof()) {
                  if (
                    !s.Character.isHexDigit(this.source.charCodeAt(this.index))
                  ) {
                    break
                  }
                  t += this.source[this.index++]
                }
                if (t.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (
                  s.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseInt('0x' + t, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanBinaryLiteral = function (e) {
                var t = ''
                var i
                while (!this.eof()) {
                  i = this.source[this.index]
                  if (i !== '0' && i !== '1') {
                    break
                  }
                  t += this.source[this.index++]
                }
                if (t.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (!this.eof()) {
                  i = this.source.charCodeAt(this.index)
                  if (
                    s.Character.isIdentifierStart(i) ||
                    s.Character.isDecimalDigit(i)
                  ) {
                    this.throwUnexpectedToken()
                  }
                }
                return {
                  type: 6,
                  value: parseInt(t, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanOctalLiteral = function (e, t) {
                var i = ''
                var r = false
                if (s.Character.isOctalDigit(e.charCodeAt(0))) {
                  r = true
                  i = '0' + this.source[this.index++]
                } else {
                  ++this.index
                }
                while (!this.eof()) {
                  if (
                    !s.Character.isOctalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    break
                  }
                  i += this.source[this.index++]
                }
                if (!r && i.length === 0) {
                  this.throwUnexpectedToken()
                }
                if (
                  s.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  ) ||
                  s.Character.isDecimalDigit(this.source.charCodeAt(this.index))
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseInt(i, 8),
                  octal: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: t,
                  end: this.index,
                }
              }
              Scanner.prototype.isImplicitOctalLiteral = function () {
                for (var e = this.index + 1; e < this.length; ++e) {
                  var t = this.source[e]
                  if (t === '8' || t === '9') {
                    return false
                  }
                  if (!s.Character.isOctalDigit(t.charCodeAt(0))) {
                    return true
                  }
                }
                return true
              }
              Scanner.prototype.scanNumericLiteral = function () {
                var e = this.index
                var t = this.source[e]
                r.assert(
                  s.Character.isDecimalDigit(t.charCodeAt(0)) || t === '.',
                  'Numeric literal must start with a decimal digit or a decimal point'
                )
                var i = ''
                if (t !== '.') {
                  i = this.source[this.index++]
                  t = this.source[this.index]
                  if (i === '0') {
                    if (t === 'x' || t === 'X') {
                      ++this.index
                      return this.scanHexLiteral(e)
                    }
                    if (t === 'b' || t === 'B') {
                      ++this.index
                      return this.scanBinaryLiteral(e)
                    }
                    if (t === 'o' || t === 'O') {
                      return this.scanOctalLiteral(t, e)
                    }
                    if (t && s.Character.isOctalDigit(t.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(t, e)
                      }
                    }
                  }
                  while (
                    s.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    i += this.source[this.index++]
                  }
                  t = this.source[this.index]
                }
                if (t === '.') {
                  i += this.source[this.index++]
                  while (
                    s.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    i += this.source[this.index++]
                  }
                  t = this.source[this.index]
                }
                if (t === 'e' || t === 'E') {
                  i += this.source[this.index++]
                  t = this.source[this.index]
                  if (t === '+' || t === '-') {
                    i += this.source[this.index++]
                  }
                  if (
                    s.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index)
                    )
                  ) {
                    while (
                      s.Character.isDecimalDigit(
                        this.source.charCodeAt(this.index)
                      )
                    ) {
                      i += this.source[this.index++]
                    }
                  } else {
                    this.throwUnexpectedToken()
                  }
                }
                if (
                  s.Character.isIdentifierStart(
                    this.source.charCodeAt(this.index)
                  )
                ) {
                  this.throwUnexpectedToken()
                }
                return {
                  type: 6,
                  value: parseFloat(i),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanStringLiteral = function () {
                var e = this.index
                var t = this.source[e]
                r.assert(
                  t === "'" || t === '"',
                  'String literal must starts with a quote'
                )
                ++this.index
                var i = false
                var a = ''
                while (!this.eof()) {
                  var o = this.source[this.index++]
                  if (o === t) {
                    t = ''
                    break
                  } else if (o === '\\') {
                    o = this.source[this.index++]
                    if (!o || !s.Character.isLineTerminator(o.charCodeAt(0))) {
                      switch (o) {
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            a += this.scanUnicodeCodePointEscape()
                          } else {
                            var u = this.scanHexEscape(o)
                            if (u === null) {
                              this.throwUnexpectedToken()
                            }
                            a += u
                          }
                          break
                        case 'x':
                          var h = this.scanHexEscape(o)
                          if (h === null) {
                            this.throwUnexpectedToken(
                              n.Messages.InvalidHexEscapeSequence
                            )
                          }
                          a += h
                          break
                        case 'n':
                          a += '\n'
                          break
                        case 'r':
                          a += '\r'
                          break
                        case 't':
                          a += '\t'
                          break
                        case 'b':
                          a += '\b'
                          break
                        case 'f':
                          a += '\f'
                          break
                        case 'v':
                          a += '\v'
                          break
                        case '8':
                        case '9':
                          a += o
                          this.tolerateUnexpectedToken()
                          break
                        default:
                          if (o && s.Character.isOctalDigit(o.charCodeAt(0))) {
                            var c = this.octalToDecimal(o)
                            i = c.octal || i
                            a += String.fromCharCode(c.code)
                          } else {
                            a += o
                          }
                          break
                      }
                    } else {
                      ++this.lineNumber
                      if (o === '\r' && this.source[this.index] === '\n') {
                        ++this.index
                      }
                      this.lineStart = this.index
                    }
                  } else if (s.Character.isLineTerminator(o.charCodeAt(0))) {
                    break
                  } else {
                    a += o
                  }
                }
                if (t !== '') {
                  this.index = e
                  this.throwUnexpectedToken()
                }
                return {
                  type: 8,
                  value: a,
                  octal: i,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.scanTemplate = function () {
                var e = ''
                var t = false
                var i = this.index
                var r = this.source[i] === '`'
                var a = false
                var o = 2
                ++this.index
                while (!this.eof()) {
                  var u = this.source[this.index++]
                  if (u === '`') {
                    o = 1
                    a = true
                    t = true
                    break
                  } else if (u === '$') {
                    if (this.source[this.index] === '{') {
                      this.curlyStack.push('${')
                      ++this.index
                      t = true
                      break
                    }
                    e += u
                  } else if (u === '\\') {
                    u = this.source[this.index++]
                    if (!s.Character.isLineTerminator(u.charCodeAt(0))) {
                      switch (u) {
                        case 'n':
                          e += '\n'
                          break
                        case 'r':
                          e += '\r'
                          break
                        case 't':
                          e += '\t'
                          break
                        case 'u':
                          if (this.source[this.index] === '{') {
                            ++this.index
                            e += this.scanUnicodeCodePointEscape()
                          } else {
                            var h = this.index
                            var c = this.scanHexEscape(u)
                            if (c !== null) {
                              e += c
                            } else {
                              this.index = h
                              e += u
                            }
                          }
                          break
                        case 'x':
                          var l = this.scanHexEscape(u)
                          if (l === null) {
                            this.throwUnexpectedToken(
                              n.Messages.InvalidHexEscapeSequence
                            )
                          }
                          e += l
                          break
                        case 'b':
                          e += '\b'
                          break
                        case 'f':
                          e += '\f'
                          break
                        case 'v':
                          e += '\v'
                          break
                        default:
                          if (u === '0') {
                            if (
                              s.Character.isDecimalDigit(
                                this.source.charCodeAt(this.index)
                              )
                            ) {
                              this.throwUnexpectedToken(
                                n.Messages.TemplateOctalLiteral
                              )
                            }
                            e += '\0'
                          } else if (
                            s.Character.isOctalDigit(u.charCodeAt(0))
                          ) {
                            this.throwUnexpectedToken(
                              n.Messages.TemplateOctalLiteral
                            )
                          } else {
                            e += u
                          }
                          break
                      }
                    } else {
                      ++this.lineNumber
                      if (u === '\r' && this.source[this.index] === '\n') {
                        ++this.index
                      }
                      this.lineStart = this.index
                    }
                  } else if (s.Character.isLineTerminator(u.charCodeAt(0))) {
                    ++this.lineNumber
                    if (u === '\r' && this.source[this.index] === '\n') {
                      ++this.index
                    }
                    this.lineStart = this.index
                    e += '\n'
                  } else {
                    e += u
                  }
                }
                if (!t) {
                  this.throwUnexpectedToken()
                }
                if (!r) {
                  this.curlyStack.pop()
                }
                return {
                  type: 10,
                  value: this.source.slice(i + 1, this.index - o),
                  cooked: e,
                  head: r,
                  tail: a,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: i,
                  end: this.index,
                }
              }
              Scanner.prototype.testRegExp = function (e, t) {
                var i = '￿'
                var r = e
                var s = this
                if (t.indexOf('u') >= 0) {
                  r = r
                    .replace(
                      /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                      function (e, t, r) {
                        var a = parseInt(t || r, 16)
                        if (a > 1114111) {
                          s.throwUnexpectedToken(n.Messages.InvalidRegExp)
                        }
                        if (a <= 65535) {
                          return String.fromCharCode(a)
                        }
                        return i
                      }
                    )
                    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, i)
                }
                try {
                  RegExp(r)
                } catch (e) {
                  this.throwUnexpectedToken(n.Messages.InvalidRegExp)
                }
                try {
                  return new RegExp(e, t)
                } catch (e) {
                  return null
                }
              }
              Scanner.prototype.scanRegExpBody = function () {
                var e = this.source[this.index]
                r.assert(
                  e === '/',
                  'Regular expression literal must start with a slash'
                )
                var t = this.source[this.index++]
                var i = false
                var a = false
                while (!this.eof()) {
                  e = this.source[this.index++]
                  t += e
                  if (e === '\\') {
                    e = this.source[this.index++]
                    if (s.Character.isLineTerminator(e.charCodeAt(0))) {
                      this.throwUnexpectedToken(n.Messages.UnterminatedRegExp)
                    }
                    t += e
                  } else if (s.Character.isLineTerminator(e.charCodeAt(0))) {
                    this.throwUnexpectedToken(n.Messages.UnterminatedRegExp)
                  } else if (i) {
                    if (e === ']') {
                      i = false
                    }
                  } else {
                    if (e === '/') {
                      a = true
                      break
                    } else if (e === '[') {
                      i = true
                    }
                  }
                }
                if (!a) {
                  this.throwUnexpectedToken(n.Messages.UnterminatedRegExp)
                }
                return t.substr(1, t.length - 2)
              }
              Scanner.prototype.scanRegExpFlags = function () {
                var e = ''
                var t = ''
                while (!this.eof()) {
                  var i = this.source[this.index]
                  if (!s.Character.isIdentifierPart(i.charCodeAt(0))) {
                    break
                  }
                  ++this.index
                  if (i === '\\' && !this.eof()) {
                    i = this.source[this.index]
                    if (i === 'u') {
                      ++this.index
                      var r = this.index
                      var n = this.scanHexEscape('u')
                      if (n !== null) {
                        t += n
                        for (e += '\\u'; r < this.index; ++r) {
                          e += this.source[r]
                        }
                      } else {
                        this.index = r
                        t += 'u'
                        e += '\\u'
                      }
                      this.tolerateUnexpectedToken()
                    } else {
                      e += '\\'
                      this.tolerateUnexpectedToken()
                    }
                  } else {
                    t += i
                    e += i
                  }
                }
                return t
              }
              Scanner.prototype.scanRegExp = function () {
                var e = this.index
                var t = this.scanRegExpBody()
                var i = this.scanRegExpFlags()
                var r = this.testRegExp(t, i)
                return {
                  type: 9,
                  value: '',
                  pattern: t,
                  flags: i,
                  regex: r,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start: e,
                  end: this.index,
                }
              }
              Scanner.prototype.lex = function () {
                if (this.eof()) {
                  return {
                    type: 2,
                    value: '',
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: this.index,
                    end: this.index,
                  }
                }
                var e = this.source.charCodeAt(this.index)
                if (s.Character.isIdentifierStart(e)) {
                  return this.scanIdentifier()
                }
                if (e === 40 || e === 41 || e === 59) {
                  return this.scanPunctuator()
                }
                if (e === 39 || e === 34) {
                  return this.scanStringLiteral()
                }
                if (e === 46) {
                  if (
                    s.Character.isDecimalDigit(
                      this.source.charCodeAt(this.index + 1)
                    )
                  ) {
                    return this.scanNumericLiteral()
                  }
                  return this.scanPunctuator()
                }
                if (s.Character.isDecimalDigit(e)) {
                  return this.scanNumericLiteral()
                }
                if (
                  e === 96 ||
                  (e === 125 &&
                    this.curlyStack[this.curlyStack.length - 1] === '${')
                ) {
                  return this.scanTemplate()
                }
                if (e >= 55296 && e < 57343) {
                  if (
                    s.Character.isIdentifierStart(this.codePointAt(this.index))
                  ) {
                    return this.scanIdentifier()
                  }
                }
                return this.scanPunctuator()
              }
              return Scanner
            })()
            t.Scanner = a
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.TokenName = {}
            t.TokenName[1] = 'Boolean'
            t.TokenName[2] = '<end>'
            t.TokenName[3] = 'Identifier'
            t.TokenName[4] = 'Keyword'
            t.TokenName[5] = 'Null'
            t.TokenName[6] = 'Numeric'
            t.TokenName[7] = 'Punctuator'
            t.TokenName[8] = 'String'
            t.TokenName[9] = 'RegularExpression'
            t.TokenName[10] = 'Template'
          },
          function (e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            t.XHTMLEntities = {
              quot: '"',
              amp: '&',
              apos: "'",
              gt: '>',
              nbsp: ' ',
              iexcl: '¡',
              cent: '¢',
              pound: '£',
              curren: '¤',
              yen: '¥',
              brvbar: '¦',
              sect: '§',
              uml: '¨',
              copy: '©',
              ordf: 'ª',
              laquo: '«',
              not: '¬',
              shy: '­',
              reg: '®',
              macr: '¯',
              deg: '°',
              plusmn: '±',
              sup2: '²',
              sup3: '³',
              acute: '´',
              micro: 'µ',
              para: '¶',
              middot: '·',
              cedil: '¸',
              sup1: '¹',
              ordm: 'º',
              raquo: '»',
              frac14: '¼',
              frac12: '½',
              frac34: '¾',
              iquest: '¿',
              Agrave: 'À',
              Aacute: 'Á',
              Acirc: 'Â',
              Atilde: 'Ã',
              Auml: 'Ä',
              Aring: 'Å',
              AElig: 'Æ',
              Ccedil: 'Ç',
              Egrave: 'È',
              Eacute: 'É',
              Ecirc: 'Ê',
              Euml: 'Ë',
              Igrave: 'Ì',
              Iacute: 'Í',
              Icirc: 'Î',
              Iuml: 'Ï',
              ETH: 'Ð',
              Ntilde: 'Ñ',
              Ograve: 'Ò',
              Oacute: 'Ó',
              Ocirc: 'Ô',
              Otilde: 'Õ',
              Ouml: 'Ö',
              times: '×',
              Oslash: 'Ø',
              Ugrave: 'Ù',
              Uacute: 'Ú',
              Ucirc: 'Û',
              Uuml: 'Ü',
              Yacute: 'Ý',
              THORN: 'Þ',
              szlig: 'ß',
              agrave: 'à',
              aacute: 'á',
              acirc: 'â',
              atilde: 'ã',
              auml: 'ä',
              aring: 'å',
              aelig: 'æ',
              ccedil: 'ç',
              egrave: 'è',
              eacute: 'é',
              ecirc: 'ê',
              euml: 'ë',
              igrave: 'ì',
              iacute: 'í',
              icirc: 'î',
              iuml: 'ï',
              eth: 'ð',
              ntilde: 'ñ',
              ograve: 'ò',
              oacute: 'ó',
              ocirc: 'ô',
              otilde: 'õ',
              ouml: 'ö',
              divide: '÷',
              oslash: 'ø',
              ugrave: 'ù',
              uacute: 'ú',
              ucirc: 'û',
              uuml: 'ü',
              yacute: 'ý',
              thorn: 'þ',
              yuml: 'ÿ',
              OElig: 'Œ',
              oelig: 'œ',
              Scaron: 'Š',
              scaron: 'š',
              Yuml: 'Ÿ',
              fnof: 'ƒ',
              circ: 'ˆ',
              tilde: '˜',
              Alpha: 'Α',
              Beta: 'Β',
              Gamma: 'Γ',
              Delta: 'Δ',
              Epsilon: 'Ε',
              Zeta: 'Ζ',
              Eta: 'Η',
              Theta: 'Θ',
              Iota: 'Ι',
              Kappa: 'Κ',
              Lambda: 'Λ',
              Mu: 'Μ',
              Nu: 'Ν',
              Xi: 'Ξ',
              Omicron: 'Ο',
              Pi: 'Π',
              Rho: 'Ρ',
              Sigma: 'Σ',
              Tau: 'Τ',
              Upsilon: 'Υ',
              Phi: 'Φ',
              Chi: 'Χ',
              Psi: 'Ψ',
              Omega: 'Ω',
              alpha: 'α',
              beta: 'β',
              gamma: 'γ',
              delta: 'δ',
              epsilon: 'ε',
              zeta: 'ζ',
              eta: 'η',
              theta: 'θ',
              iota: 'ι',
              kappa: 'κ',
              lambda: 'λ',
              mu: 'μ',
              nu: 'ν',
              xi: 'ξ',
              omicron: 'ο',
              pi: 'π',
              rho: 'ρ',
              sigmaf: 'ς',
              sigma: 'σ',
              tau: 'τ',
              upsilon: 'υ',
              phi: 'φ',
              chi: 'χ',
              psi: 'ψ',
              omega: 'ω',
              thetasym: 'ϑ',
              upsih: 'ϒ',
              piv: 'ϖ',
              ensp: ' ',
              emsp: ' ',
              thinsp: ' ',
              zwnj: '‌',
              zwj: '‍',
              lrm: '‎',
              rlm: '‏',
              ndash: '–',
              mdash: '—',
              lsquo: '‘',
              rsquo: '’',
              sbquo: '‚',
              ldquo: '“',
              rdquo: '”',
              bdquo: '„',
              dagger: '†',
              Dagger: '‡',
              bull: '•',
              hellip: '…',
              permil: '‰',
              prime: '′',
              Prime: '″',
              lsaquo: '‹',
              rsaquo: '›',
              oline: '‾',
              frasl: '⁄',
              euro: '€',
              image: 'ℑ',
              weierp: '℘',
              real: 'ℜ',
              trade: '™',
              alefsym: 'ℵ',
              larr: '←',
              uarr: '↑',
              rarr: '→',
              darr: '↓',
              harr: '↔',
              crarr: '↵',
              lArr: '⇐',
              uArr: '⇑',
              rArr: '⇒',
              dArr: '⇓',
              hArr: '⇔',
              forall: '∀',
              part: '∂',
              exist: '∃',
              empty: '∅',
              nabla: '∇',
              isin: '∈',
              notin: '∉',
              ni: '∋',
              prod: '∏',
              sum: '∑',
              minus: '−',
              lowast: '∗',
              radic: '√',
              prop: '∝',
              infin: '∞',
              ang: '∠',
              and: '∧',
              or: '∨',
              cap: '∩',
              cup: '∪',
              int: '∫',
              there4: '∴',
              sim: '∼',
              cong: '≅',
              asymp: '≈',
              ne: '≠',
              equiv: '≡',
              le: '≤',
              ge: '≥',
              sub: '⊂',
              sup: '⊃',
              nsub: '⊄',
              sube: '⊆',
              supe: '⊇',
              oplus: '⊕',
              otimes: '⊗',
              perp: '⊥',
              sdot: '⋅',
              lceil: '⌈',
              rceil: '⌉',
              lfloor: '⌊',
              rfloor: '⌋',
              loz: '◊',
              spades: '♠',
              clubs: '♣',
              hearts: '♥',
              diams: '♦',
              lang: '⟨',
              rang: '⟩',
            }
          },
          function (e, t, i) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: true })
            var r = i(10)
            var s = i(12)
            var n = i(13)
            var a = (function () {
              function Reader() {
                this.values = []
                this.curly = this.paren = -1
              }
              Reader.prototype.beforeFunctionExpression = function (e) {
                return (
                  [
                    '(',
                    '{',
                    '[',
                    'in',
                    'typeof',
                    'instanceof',
                    'new',
                    'return',
                    'case',
                    'delete',
                    'throw',
                    'void',
                    '=',
                    '+=',
                    '-=',
                    '*=',
                    '**=',
                    '/=',
                    '%=',
                    '<<=',
                    '>>=',
                    '>>>=',
                    '&=',
                    '|=',
                    '^=',
                    ',',
                    '+',
                    '-',
                    '*',
                    '**',
                    '/',
                    '%',
                    '++',
                    '--',
                    '<<',
                    '>>',
                    '>>>',
                    '&',
                    '|',
                    '^',
                    '!',
                    '~',
                    '&&',
                    '||',
                    '?',
                    ':',
                    '===',
                    '==',
                    '>=',
                    '<=',
                    '<',
                    '>',
                    '!=',
                    '!==',
                  ].indexOf(e) >= 0
                )
              }
              Reader.prototype.isRegexStart = function () {
                var e = this.values[this.values.length - 1]
                var t = e !== null
                switch (e) {
                  case 'this':
                  case ']':
                    t = false
                    break
                  case ')':
                    var i = this.values[this.paren - 1]
                    t =
                      i === 'if' || i === 'while' || i === 'for' || i === 'with'
                    break
                  case '}':
                    t = false
                    if (this.values[this.curly - 3] === 'function') {
                      var r = this.values[this.curly - 4]
                      t = r ? !this.beforeFunctionExpression(r) : false
                    } else if (this.values[this.curly - 4] === 'function') {
                      var r = this.values[this.curly - 5]
                      t = r ? !this.beforeFunctionExpression(r) : true
                    }
                    break
                  default:
                    break
                }
                return t
              }
              Reader.prototype.push = function (e) {
                if (e.type === 7 || e.type === 4) {
                  if (e.value === '{') {
                    this.curly = this.values.length
                  } else if (e.value === '(') {
                    this.paren = this.values.length
                  }
                  this.values.push(e.value)
                } else {
                  this.values.push(null)
                }
              }
              return Reader
            })()
            var o = (function () {
              function Tokenizer(e, t) {
                this.errorHandler = new r.ErrorHandler()
                this.errorHandler.tolerant = t
                  ? typeof t.tolerant === 'boolean' && t.tolerant
                  : false
                this.scanner = new s.Scanner(e, this.errorHandler)
                this.scanner.trackComment = t
                  ? typeof t.comment === 'boolean' && t.comment
                  : false
                this.trackRange = t
                  ? typeof t.range === 'boolean' && t.range
                  : false
                this.trackLoc = t ? typeof t.loc === 'boolean' && t.loc : false
                this.buffer = []
                this.reader = new a()
              }
              Tokenizer.prototype.errors = function () {
                return this.errorHandler.errors
              }
              Tokenizer.prototype.getNextToken = function () {
                if (this.buffer.length === 0) {
                  var e = this.scanner.scanComments()
                  if (this.scanner.trackComment) {
                    for (var t = 0; t < e.length; ++t) {
                      var i = e[t]
                      var r = this.scanner.source.slice(i.slice[0], i.slice[1])
                      var s = {
                        type: i.multiLine ? 'BlockComment' : 'LineComment',
                        value: r,
                      }
                      if (this.trackRange) {
                        s.range = i.range
                      }
                      if (this.trackLoc) {
                        s.loc = i.loc
                      }
                      this.buffer.push(s)
                    }
                  }
                  if (!this.scanner.eof()) {
                    var a = void 0
                    if (this.trackLoc) {
                      a = {
                        start: {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart,
                        },
                        end: {},
                      }
                    }
                    var o =
                      this.scanner.source[this.scanner.index] === '/' &&
                      this.reader.isRegexStart()
                    var u = o ? this.scanner.scanRegExp() : this.scanner.lex()
                    this.reader.push(u)
                    var h = {
                      type: n.TokenName[u.type],
                      value: this.scanner.source.slice(u.start, u.end),
                    }
                    if (this.trackRange) {
                      h.range = [u.start, u.end]
                    }
                    if (this.trackLoc) {
                      a.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart,
                      }
                      h.loc = a
                    }
                    if (u.type === 9) {
                      var c = u.pattern
                      var l = u.flags
                      h.regex = { pattern: c, flags: l }
                    }
                    this.buffer.push(h)
                  }
                }
                return this.buffer.shift()
              }
              return Tokenizer
            })()
            t.Tokenizer = o
          },
        ])
      })
    },
    277: (e) => {
      'use strict'
      const t = Object.prototype.hasOwnProperty
      e.exports = (e, i) => t.call(e, i)
    },
    710: (e) => {
      'use strict'
      /*!
       * repeat-string <https://github.com/jonschlinkert/repeat-string>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ var t = ''
      var i
      e.exports = repeat
      function repeat(e, r) {
        if (typeof e !== 'string') {
          throw new TypeError('expected a string')
        }
        if (r === 1) return e
        if (r === 2) return e + e
        var s = e.length * r
        if (i !== e || typeof i === 'undefined') {
          i = e
          t = ''
        } else if (t.length >= s) {
          return t.substr(0, s)
        }
        while (s > t.length && r > 1) {
          if (r & 1) {
            t += e
          }
          r >>= 1
          e += e
        }
        t += e
        t = t.substr(0, s)
        return t
      }
    },
  }
  var t = {}
  function __nccwpck_require__(i) {
    var r = t[i]
    if (r !== undefined) {
      return r.exports
    }
    var s = (t[i] = { exports: {} })
    var n = true
    try {
      e[i].call(s.exports, s, s.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete t[i]
    }
    return s.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var i = __nccwpck_require__(256)
  module.exports = i
})()
