;(function () {
  var e = {
    2947: function (e) {
      e.exports = {
        trueFunc: function trueFunc() {
          return true
        },
        falseFunc: function falseFunc() {
          return false
        },
      }
    },
    3387: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.attributeRules = void 0
      var a = t(2947)
      var n = /[-[\]{}()*+?.,\\^$|#\s]/g
      function escapeRegex(e) {
        return e.replace(n, '\\$&')
      }
      var i = new Set([
        'accept',
        'accept-charset',
        'align',
        'alink',
        'axis',
        'bgcolor',
        'charset',
        'checked',
        'clear',
        'codetype',
        'color',
        'compact',
        'declare',
        'defer',
        'dir',
        'direction',
        'disabled',
        'enctype',
        'face',
        'frame',
        'hreflang',
        'http-equiv',
        'lang',
        'language',
        'link',
        'media',
        'method',
        'multiple',
        'nohref',
        'noresize',
        'noshade',
        'nowrap',
        'readonly',
        'rel',
        'rev',
        'rules',
        'scope',
        'scrolling',
        'selected',
        'shape',
        'target',
        'text',
        'type',
        'valign',
        'valuetype',
        'vlink',
      ])
      function shouldIgnoreCase(e, r) {
        return typeof e.ignoreCase === 'boolean'
          ? e.ignoreCase
          : e.ignoreCase === 'quirks'
          ? !!r.quirksMode
          : !r.xmlMode && i.has(e.name)
      }
      r.attributeRules = {
        equals: function (e, r, t) {
          var a = t.adapter
          var n = r.name
          var i = r.value
          if (shouldIgnoreCase(r, t)) {
            i = i.toLowerCase()
            return function (r) {
              var t = a.getAttributeValue(r, n)
              return (
                t != null &&
                t.length === i.length &&
                t.toLowerCase() === i &&
                e(r)
              )
            }
          }
          return function (r) {
            return a.getAttributeValue(r, n) === i && e(r)
          }
        },
        hyphen: function (e, r, t) {
          var a = t.adapter
          var n = r.name
          var i = r.value
          var o = i.length
          if (shouldIgnoreCase(r, t)) {
            i = i.toLowerCase()
            return function hyphenIC(r) {
              var t = a.getAttributeValue(r, n)
              return (
                t != null &&
                (t.length === o || t.charAt(o) === '-') &&
                t.substr(0, o).toLowerCase() === i &&
                e(r)
              )
            }
          }
          return function hyphen(r) {
            var t = a.getAttributeValue(r, n)
            return (
              t != null &&
              (t.length === o || t.charAt(o) === '-') &&
              t.substr(0, o) === i &&
              e(r)
            )
          }
        },
        element: function (e, r, t) {
          var n = t.adapter
          var i = r.name,
            o = r.value
          if (/\s/.test(o)) {
            return a.falseFunc
          }
          var s = new RegExp(
            '(?:^|\\s)'.concat(escapeRegex(o), '(?:$|\\s)'),
            shouldIgnoreCase(r, t) ? 'i' : ''
          )
          return function element(r) {
            var t = n.getAttributeValue(r, i)
            return t != null && t.length >= o.length && s.test(t) && e(r)
          }
        },
        exists: function (e, r, t) {
          var a = r.name
          var n = t.adapter
          return function (r) {
            return n.hasAttrib(r, a) && e(r)
          }
        },
        start: function (e, r, t) {
          var n = t.adapter
          var i = r.name
          var o = r.value
          var s = o.length
          if (s === 0) {
            return a.falseFunc
          }
          if (shouldIgnoreCase(r, t)) {
            o = o.toLowerCase()
            return function (r) {
              var t = n.getAttributeValue(r, i)
              return (
                t != null &&
                t.length >= s &&
                t.substr(0, s).toLowerCase() === o &&
                e(r)
              )
            }
          }
          return function (r) {
            var t
            return (
              !!((t = n.getAttributeValue(r, i)) === null || t === void 0
                ? void 0
                : t.startsWith(o)) && e(r)
            )
          }
        },
        end: function (e, r, t) {
          var n = t.adapter
          var i = r.name
          var o = r.value
          var s = -o.length
          if (s === 0) {
            return a.falseFunc
          }
          if (shouldIgnoreCase(r, t)) {
            o = o.toLowerCase()
            return function (r) {
              var t
              return (
                ((t = n.getAttributeValue(r, i)) === null || t === void 0
                  ? void 0
                  : t.substr(s).toLowerCase()) === o && e(r)
              )
            }
          }
          return function (r) {
            var t
            return (
              !!((t = n.getAttributeValue(r, i)) === null || t === void 0
                ? void 0
                : t.endsWith(o)) && e(r)
            )
          }
        },
        any: function (e, r, t) {
          var n = t.adapter
          var i = r.name,
            o = r.value
          if (o === '') {
            return a.falseFunc
          }
          if (shouldIgnoreCase(r, t)) {
            var s = new RegExp(escapeRegex(o), 'i')
            return function anyIC(r) {
              var t = n.getAttributeValue(r, i)
              return t != null && t.length >= o.length && s.test(t) && e(r)
            }
          }
          return function (r) {
            var t
            return (
              !!((t = n.getAttributeValue(r, i)) === null || t === void 0
                ? void 0
                : t.includes(o)) && e(r)
            )
          }
        },
        not: function (e, r, t) {
          var a = t.adapter
          var n = r.name
          var i = r.value
          if (i === '') {
            return function (r) {
              return !!a.getAttributeValue(r, n) && e(r)
            }
          } else if (shouldIgnoreCase(r, t)) {
            i = i.toLowerCase()
            return function (r) {
              var t = a.getAttributeValue(r, n)
              return (
                (t == null || t.length !== i.length || t.toLowerCase() !== i) &&
                e(r)
              )
            }
          }
          return function (r) {
            return a.getAttributeValue(r, n) !== i && e(r)
          }
        },
      }
    },
    8689: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.compileToken = r.compileUnsafe = r.compile = void 0
      var n = t(8065)
      var i = t(2947)
      var o = a(t(4901))
      var s = t(538)
      var u = t(7088)
      var l = t(4428)
      function compile(e, r, t) {
        var a = compileUnsafe(e, r, t)
        return (0, l.ensureIsTag)(a, r.adapter)
      }
      r.compile = compile
      function compileUnsafe(e, r, t) {
        var a = typeof e === 'string' ? (0, n.parse)(e) : e
        return compileToken(a, r, t)
      }
      r.compileUnsafe = compileUnsafe
      function includesScopePseudo(e) {
        return (
          e.type === 'pseudo' &&
          (e.name === 'scope' ||
            (Array.isArray(e.data) &&
              e.data.some(function (e) {
                return e.some(includesScopePseudo)
              })))
        )
      }
      var c = { type: n.SelectorType.Descendant }
      var p = { type: '_flexibleDescendant' }
      var d = { type: n.SelectorType.Pseudo, name: 'scope', data: null }
      function absolutize(e, r, t) {
        var a = r.adapter
        var n = !!(t === null || t === void 0
          ? void 0
          : t.every(function (e) {
              var r = a.isTag(e) && a.getParent(e)
              return e === l.PLACEHOLDER_ELEMENT || (r && a.isTag(r))
            }))
        for (var i = 0, o = e; i < o.length; i++) {
          var u = o[i]
          if (
            u.length > 0 &&
            (0, s.isTraversal)(u[0]) &&
            u[0].type !== 'descendant'
          ) {
          } else if (n && !u.some(includesScopePseudo)) {
            u.unshift(c)
          } else {
            continue
          }
          u.unshift(d)
        }
      }
      function compileToken(e, r, t) {
        var a
        e = e.filter(function (e) {
          return e.length > 0
        })
        e.forEach(o.default)
        t = (a = r.context) !== null && a !== void 0 ? a : t
        var n = Array.isArray(t)
        var s = t && (Array.isArray(t) ? t : [t])
        absolutize(e, r, s)
        var u = false
        var l = e
          .map(function (e) {
            if (e.length >= 2) {
              var t = e[0],
                a = e[1]
              if (t.type !== 'pseudo' || t.name !== 'scope') {
              } else if (n && a.type === 'descendant') {
                e[1] = p
              } else if (a.type === 'adjacent' || a.type === 'sibling') {
                u = true
              }
            }
            return compileRules(e, r, s)
          })
          .reduce(reduceRules, i.falseFunc)
        l.shouldTestNextSiblings = u
        return l
      }
      r.compileToken = compileToken
      function compileRules(e, r, t) {
        var a
        return e.reduce(
          function (e, a) {
            return e === i.falseFunc
              ? i.falseFunc
              : (0, u.compileGeneralSelector)(e, a, r, t, compileToken)
          },
          (a = r.rootFunc) !== null && a !== void 0 ? a : i.trueFunc
        )
      }
      function reduceRules(e, r) {
        if (r === i.falseFunc || e === i.trueFunc) {
          return e
        }
        if (e === i.falseFunc || r === i.trueFunc) {
          return r
        }
        return function combine(t) {
          return e(t) || r(t)
        }
      }
    },
    7088: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.compileGeneralSelector = void 0
      var a = t(3387)
      var n = t(6463)
      var i = t(8065)
      function compileGeneralSelector(e, r, t, o, s) {
        var u = t.adapter,
          l = t.equals
        switch (r.type) {
          case i.SelectorType.PseudoElement: {
            throw new Error('Pseudo-elements are not supported by css-select')
          }
          case i.SelectorType.ColumnCombinator: {
            throw new Error(
              'Column combinators are not yet supported by css-select'
            )
          }
          case i.SelectorType.Attribute: {
            if (r.namespace != null) {
              throw new Error(
                'Namespaced attributes are not yet supported by css-select'
              )
            }
            if (!t.xmlMode || t.lowerCaseAttributeNames) {
              r.name = r.name.toLowerCase()
            }
            return a.attributeRules[r.action](e, r, t)
          }
          case i.SelectorType.Pseudo: {
            return (0, n.compilePseudoSelector)(e, r, t, o, s)
          }
          case i.SelectorType.Tag: {
            if (r.namespace != null) {
              throw new Error(
                'Namespaced tag names are not yet supported by css-select'
              )
            }
            var c = r.name
            if (!t.xmlMode || t.lowerCaseTags) {
              c = c.toLowerCase()
            }
            return function tag(r) {
              return u.getName(r) === c && e(r)
            }
          }
          case i.SelectorType.Descendant: {
            if (t.cacheResults === false || typeof WeakSet === 'undefined') {
              return function descendant(r) {
                var t = r
                while ((t = u.getParent(t))) {
                  if (u.isTag(t) && e(t)) {
                    return true
                  }
                }
                return false
              }
            }
            var p = new WeakSet()
            return function cachedDescendant(r) {
              var t = r
              while ((t = u.getParent(t))) {
                if (!p.has(t)) {
                  if (u.isTag(t) && e(t)) {
                    return true
                  }
                  p.add(t)
                }
              }
              return false
            }
          }
          case '_flexibleDescendant': {
            return function flexibleDescendant(r) {
              var t = r
              do {
                if (u.isTag(t) && e(t)) return true
              } while ((t = u.getParent(t)))
              return false
            }
          }
          case i.SelectorType.Parent: {
            return function parent(r) {
              return u.getChildren(r).some(function (r) {
                return u.isTag(r) && e(r)
              })
            }
          }
          case i.SelectorType.Child: {
            return function child(r) {
              var t = u.getParent(r)
              return t != null && u.isTag(t) && e(t)
            }
          }
          case i.SelectorType.Sibling: {
            return function sibling(r) {
              var t = u.getSiblings(r)
              for (var a = 0; a < t.length; a++) {
                var n = t[a]
                if (l(r, n)) break
                if (u.isTag(n) && e(n)) {
                  return true
                }
              }
              return false
            }
          }
          case i.SelectorType.Adjacent: {
            if (u.prevElementSibling) {
              return function adjacent(r) {
                var t = u.prevElementSibling(r)
                return t != null && e(t)
              }
            }
            return function adjacent(r) {
              var t = u.getSiblings(r)
              var a
              for (var n = 0; n < t.length; n++) {
                var i = t[n]
                if (l(r, i)) break
                if (u.isTag(i)) {
                  a = i
                }
              }
              return !!a && e(a)
            }
          }
          case i.SelectorType.Universal: {
            if (r.namespace != null && r.namespace !== '*') {
              throw new Error(
                'Namespaced universal selectors are not yet supported by css-select'
              )
            }
            return e
          }
        }
      }
      r.compileGeneralSelector = compileGeneralSelector
    },
    1112: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, r, t, a) {
              if (a === undefined) a = t
              var n = Object.getOwnPropertyDescriptor(r, t)
              if (
                !n ||
                ('get' in n ? !r.__esModule : n.writable || n.configurable)
              ) {
                n = {
                  enumerable: true,
                  get: function () {
                    return r[t]
                  },
                }
              }
              Object.defineProperty(e, a, n)
            }
          : function (e, r, t, a) {
              if (a === undefined) a = t
              e[a] = r[t]
            })
      var n =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, r) {
              Object.defineProperty(e, 'default', {
                enumerable: true,
                value: r,
              })
            }
          : function (e, r) {
              e['default'] = r
            })
      var i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var r = {}
          if (e != null)
            for (var t in e)
              if (t !== 'default' && Object.prototype.hasOwnProperty.call(e, t))
                a(r, e, t)
          n(r, e)
          return r
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.aliases =
        r.pseudos =
        r.filters =
        r.is =
        r.selectOne =
        r.selectAll =
        r.prepareContext =
        r._compileToken =
        r._compileUnsafe =
        r.compile =
          void 0
      var o = i(t(5861))
      var s = t(2947)
      var u = t(8689)
      var l = t(4428)
      var defaultEquals = function (e, r) {
        return e === r
      }
      var c = { adapter: o, equals: defaultEquals }
      function convertOptionFormats(e) {
        var r, t, a, n
        var i = e !== null && e !== void 0 ? e : c
        ;(r = i.adapter) !== null && r !== void 0 ? r : (i.adapter = o)
        ;(t = i.equals) !== null && t !== void 0
          ? t
          : (i.equals =
              (n =
                (a = i.adapter) === null || a === void 0
                  ? void 0
                  : a.equals) !== null && n !== void 0
                ? n
                : defaultEquals)
        return i
      }
      function wrapCompile(e) {
        return function addAdapter(r, t, a) {
          var n = convertOptionFormats(t)
          return e(r, n, a)
        }
      }
      r.compile = wrapCompile(u.compile)
      r._compileUnsafe = wrapCompile(u.compileUnsafe)
      r._compileToken = wrapCompile(u.compileToken)
      function getSelectorFunc(e) {
        return function select(r, t, a) {
          var n = convertOptionFormats(a)
          if (typeof r !== 'function') {
            r = (0, u.compileUnsafe)(r, n, t)
          }
          var i = prepareContext(t, n.adapter, r.shouldTestNextSiblings)
          return e(r, i, n)
        }
      }
      function prepareContext(e, r, t) {
        if (t === void 0) {
          t = false
        }
        if (t) {
          e = appendNextSiblings(e, r)
        }
        return Array.isArray(e) ? r.removeSubsets(e) : r.getChildren(e)
      }
      r.prepareContext = prepareContext
      function appendNextSiblings(e, r) {
        var t = Array.isArray(e) ? e.slice(0) : [e]
        var a = t.length
        for (var n = 0; n < a; n++) {
          var i = (0, l.getNextSiblings)(t[n], r)
          t.push.apply(t, i)
        }
        return t
      }
      r.selectAll = getSelectorFunc(function (e, r, t) {
        return e === s.falseFunc || !r || r.length === 0
          ? []
          : t.adapter.findAll(e, r)
      })
      r.selectOne = getSelectorFunc(function (e, r, t) {
        return e === s.falseFunc || !r || r.length === 0
          ? null
          : t.adapter.findOne(e, r)
      })
      function is(e, r, t) {
        var a = convertOptionFormats(t)
        return (typeof r === 'function' ? r : (0, u.compile)(r, a))(e)
      }
      r.is = is
      r['default'] = r.selectAll
      var p = t(6463)
      Object.defineProperty(r, 'filters', {
        enumerable: true,
        get: function () {
          return p.filters
        },
      })
      Object.defineProperty(r, 'pseudos', {
        enumerable: true,
        get: function () {
          return p.pseudos
        },
      })
      Object.defineProperty(r, 'aliases', {
        enumerable: true,
        get: function () {
          return p.aliases
        },
      })
    },
    538: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.isTraversal = r.procedure = void 0
      r.procedure = {
        universal: 50,
        tag: 30,
        attribute: 1,
        pseudo: 0,
        'pseudo-element': 0,
        'column-combinator': -1,
        descendant: -1,
        child: -1,
        parent: -1,
        sibling: -1,
        adjacent: -1,
        _flexibleDescendant: -1,
      }
      function isTraversal(e) {
        return r.procedure[e.type] < 0
      }
      r.isTraversal = isTraversal
    },
    8680: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.aliases = void 0
      r.aliases = {
        'any-link': ':is(a, area, link)[href]',
        link: ':any-link:not(:visited)',
        disabled:
          ':is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )',
        enabled: ':not(:disabled)',
        checked:
          ':is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)',
        required: ':is(input, select, textarea)[required]',
        optional: ':is(input, select, textarea):not([required])',
        selected:
          'option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)',
        checkbox: '[type=checkbox]',
        file: '[type=file]',
        password: '[type=password]',
        radio: '[type=radio]',
        reset: '[type=reset]',
        image: '[type=image]',
        submit: '[type=submit]',
        parent: ':not(:empty)',
        header: ':is(h1, h2, h3, h4, h5, h6)',
        button: ':is(button, input[type=button])',
        input: ':is(input, textarea, select, button)',
        text: "input:is(:not([type!='']), [type=text])",
      }
    },
    6804: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.filters = void 0
      var n = a(t(7118))
      var i = t(2947)
      function getChildFunc(e, r) {
        return function (t) {
          var a = r.getParent(t)
          return a != null && r.isTag(a) && e(t)
        }
      }
      r.filters = {
        contains: function (e, r, t) {
          var a = t.adapter
          return function contains(t) {
            return e(t) && a.getText(t).includes(r)
          }
        },
        icontains: function (e, r, t) {
          var a = t.adapter
          var n = r.toLowerCase()
          return function icontains(r) {
            return e(r) && a.getText(r).toLowerCase().includes(n)
          }
        },
        'nth-child': function (e, r, t) {
          var a = t.adapter,
            o = t.equals
          var s = (0, n.default)(r)
          if (s === i.falseFunc) return i.falseFunc
          if (s === i.trueFunc) return getChildFunc(e, a)
          return function nthChild(r) {
            var t = a.getSiblings(r)
            var n = 0
            for (var i = 0; i < t.length; i++) {
              if (o(r, t[i])) break
              if (a.isTag(t[i])) {
                n++
              }
            }
            return s(n) && e(r)
          }
        },
        'nth-last-child': function (e, r, t) {
          var a = t.adapter,
            o = t.equals
          var s = (0, n.default)(r)
          if (s === i.falseFunc) return i.falseFunc
          if (s === i.trueFunc) return getChildFunc(e, a)
          return function nthLastChild(r) {
            var t = a.getSiblings(r)
            var n = 0
            for (var i = t.length - 1; i >= 0; i--) {
              if (o(r, t[i])) break
              if (a.isTag(t[i])) {
                n++
              }
            }
            return s(n) && e(r)
          }
        },
        'nth-of-type': function (e, r, t) {
          var a = t.adapter,
            o = t.equals
          var s = (0, n.default)(r)
          if (s === i.falseFunc) return i.falseFunc
          if (s === i.trueFunc) return getChildFunc(e, a)
          return function nthOfType(r) {
            var t = a.getSiblings(r)
            var n = 0
            for (var i = 0; i < t.length; i++) {
              var u = t[i]
              if (o(r, u)) break
              if (a.isTag(u) && a.getName(u) === a.getName(r)) {
                n++
              }
            }
            return s(n) && e(r)
          }
        },
        'nth-last-of-type': function (e, r, t) {
          var a = t.adapter,
            o = t.equals
          var s = (0, n.default)(r)
          if (s === i.falseFunc) return i.falseFunc
          if (s === i.trueFunc) return getChildFunc(e, a)
          return function nthLastOfType(r) {
            var t = a.getSiblings(r)
            var n = 0
            for (var i = t.length - 1; i >= 0; i--) {
              var u = t[i]
              if (o(r, u)) break
              if (a.isTag(u) && a.getName(u) === a.getName(r)) {
                n++
              }
            }
            return s(n) && e(r)
          }
        },
        root: function (e, r, t) {
          var a = t.adapter
          return function (r) {
            var t = a.getParent(r)
            return (t == null || !a.isTag(t)) && e(r)
          }
        },
        scope: function (e, t, a, n) {
          var i = a.equals
          if (!n || n.length === 0) {
            return r.filters.root(e, t, a)
          }
          if (n.length === 1) {
            return function (r) {
              return i(n[0], r) && e(r)
            }
          }
          return function (r) {
            return n.includes(r) && e(r)
          }
        },
        hover: dynamicStatePseudo('isHovered'),
        visited: dynamicStatePseudo('isVisited'),
        active: dynamicStatePseudo('isActive'),
      }
      function dynamicStatePseudo(e) {
        return function dynamicPseudo(r, t, a) {
          var n = a.adapter
          var o = n[e]
          if (typeof o !== 'function') {
            return i.falseFunc
          }
          return function active(e) {
            return o(e) && r(e)
          }
        }
      }
    },
    6463: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.compilePseudoSelector = r.aliases = r.pseudos = r.filters = void 0
      var a = t(2947)
      var n = t(8065)
      var i = t(6804)
      Object.defineProperty(r, 'filters', {
        enumerable: true,
        get: function () {
          return i.filters
        },
      })
      var o = t(6973)
      Object.defineProperty(r, 'pseudos', {
        enumerable: true,
        get: function () {
          return o.pseudos
        },
      })
      var s = t(8680)
      Object.defineProperty(r, 'aliases', {
        enumerable: true,
        get: function () {
          return s.aliases
        },
      })
      var u = t(4428)
      function compilePseudoSelector(e, r, t, l, c) {
        var p = r.name,
          d = r.data
        if (Array.isArray(d)) {
          return u.subselects[p](e, d, t, l, c)
        }
        if (p in s.aliases) {
          if (d != null) {
            throw new Error('Pseudo '.concat(p, " doesn't have any arguments"))
          }
          var f = (0, n.parse)(s.aliases[p])
          return u.subselects.is(e, f, t, l, c)
        }
        if (p in i.filters) {
          return i.filters[p](e, d, t, l)
        }
        if (p in o.pseudos) {
          var g = o.pseudos[p]
          ;(0, o.verifyPseudoArgs)(g, p, d)
          return g === a.falseFunc
            ? a.falseFunc
            : e === a.trueFunc
            ? function (e) {
                return g(e, t, d)
              }
            : function (r) {
                return g(r, t, d) && e(r)
              }
        }
        throw new Error('unmatched pseudo-class :'.concat(p))
      }
      r.compilePseudoSelector = compilePseudoSelector
    },
    6973: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.verifyPseudoArgs = r.pseudos = void 0
      r.pseudos = {
        empty: function (e, r) {
          var t = r.adapter
          return !t.getChildren(e).some(function (e) {
            return t.isTag(e) || t.getText(e) !== ''
          })
        },
        'first-child': function (e, r) {
          var t = r.adapter,
            a = r.equals
          var n = t.getSiblings(e).find(function (e) {
            return t.isTag(e)
          })
          return n != null && a(e, n)
        },
        'last-child': function (e, r) {
          var t = r.adapter,
            a = r.equals
          var n = t.getSiblings(e)
          for (var i = n.length - 1; i >= 0; i--) {
            if (a(e, n[i])) return true
            if (t.isTag(n[i])) break
          }
          return false
        },
        'first-of-type': function (e, r) {
          var t = r.adapter,
            a = r.equals
          var n = t.getSiblings(e)
          var i = t.getName(e)
          for (var o = 0; o < n.length; o++) {
            var s = n[o]
            if (a(e, s)) return true
            if (t.isTag(s) && t.getName(s) === i) {
              break
            }
          }
          return false
        },
        'last-of-type': function (e, r) {
          var t = r.adapter,
            a = r.equals
          var n = t.getSiblings(e)
          var i = t.getName(e)
          for (var o = n.length - 1; o >= 0; o--) {
            var s = n[o]
            if (a(e, s)) return true
            if (t.isTag(s) && t.getName(s) === i) {
              break
            }
          }
          return false
        },
        'only-of-type': function (e, r) {
          var t = r.adapter,
            a = r.equals
          var n = t.getName(e)
          return t.getSiblings(e).every(function (r) {
            return a(e, r) || !t.isTag(r) || t.getName(r) !== n
          })
        },
        'only-child': function (e, r) {
          var t = r.adapter,
            a = r.equals
          return t.getSiblings(e).every(function (r) {
            return a(e, r) || !t.isTag(r)
          })
        },
      }
      function verifyPseudoArgs(e, r, t) {
        if (t === null) {
          if (e.length > 2) {
            throw new Error(
              'pseudo-selector :'.concat(r, ' requires an argument')
            )
          }
        } else if (e.length === 2) {
          throw new Error(
            'pseudo-selector :'.concat(r, " doesn't have any arguments")
          )
        }
      }
      r.verifyPseudoArgs = verifyPseudoArgs
    },
    4428: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__spreadArray) ||
        function (e, r, t) {
          if (t || arguments.length === 2)
            for (var a = 0, n = r.length, i; a < n; a++) {
              if (i || !(a in r)) {
                if (!i) i = Array.prototype.slice.call(r, 0, a)
                i[a] = r[a]
              }
            }
          return e.concat(i || Array.prototype.slice.call(r))
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.subselects =
        r.getNextSiblings =
        r.ensureIsTag =
        r.PLACEHOLDER_ELEMENT =
          void 0
      var n = t(2947)
      var i = t(538)
      r.PLACEHOLDER_ELEMENT = {}
      function ensureIsTag(e, r) {
        if (e === n.falseFunc) return n.falseFunc
        return function (t) {
          return r.isTag(t) && e(t)
        }
      }
      r.ensureIsTag = ensureIsTag
      function getNextSiblings(e, r) {
        var t = r.getSiblings(e)
        if (t.length <= 1) return []
        var a = t.indexOf(e)
        if (a < 0 || a === t.length - 1) return []
        return t.slice(a + 1).filter(r.isTag)
      }
      r.getNextSiblings = getNextSiblings
      var is = function (e, r, t, a, n) {
        var i = { xmlMode: !!t.xmlMode, adapter: t.adapter, equals: t.equals }
        var o = n(r, i, a)
        return function (r) {
          return o(r) && e(r)
        }
      }
      r.subselects = {
        is: is,
        matches: is,
        where: is,
        not: function (e, r, t, a, i) {
          var o = { xmlMode: !!t.xmlMode, adapter: t.adapter, equals: t.equals }
          var s = i(r, o, a)
          if (s === n.falseFunc) return e
          if (s === n.trueFunc) return n.falseFunc
          return function not(r) {
            return !s(r) && e(r)
          }
        },
        has: function (e, t, o, s, u) {
          var l = o.adapter
          var c = { xmlMode: !!o.xmlMode, adapter: l, equals: o.equals }
          var p = t.some(function (e) {
            return e.some(i.isTraversal)
          })
            ? [r.PLACEHOLDER_ELEMENT]
            : undefined
          var d = u(t, c, p)
          if (d === n.falseFunc) return n.falseFunc
          if (d === n.trueFunc) {
            return function (r) {
              return l.getChildren(r).some(l.isTag) && e(r)
            }
          }
          var f = ensureIsTag(d, l)
          var g = d.shouldTestNextSiblings,
            h = g === void 0 ? false : g
          if (p) {
            return function (r) {
              p[0] = r
              var t = l.getChildren(r)
              var n = h ? a(a([], t, true), getNextSiblings(r, l), true) : t
              return e(r) && l.existsOne(f, n)
            }
          }
          return function (r) {
            return e(r) && l.existsOne(f, l.getChildren(r))
          }
        },
      }
    },
    4901: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      var a = t(8065)
      var n = t(538)
      var i = {
        exists: 10,
        equals: 8,
        not: 7,
        start: 6,
        end: 6,
        any: 5,
        hyphen: 4,
        element: 4,
      }
      function sortByProcedure(e) {
        var r = e.map(getProcedure)
        for (var t = 1; t < e.length; t++) {
          var a = r[t]
          if (a < 0) continue
          for (var n = t - 1; n >= 0 && a < r[n]; n--) {
            var i = e[n + 1]
            e[n + 1] = e[n]
            e[n] = i
            r[n + 1] = r[n]
            r[n] = a
          }
        }
      }
      r['default'] = sortByProcedure
      function getProcedure(e) {
        var r = n.procedure[e.type]
        if (e.type === a.SelectorType.Attribute) {
          r = i[e.action]
          if (r === i.equals && e.name === 'id') {
            r = 9
          }
          if (e.ignoreCase) {
            r >>= 1
          }
        } else if (e.type === a.SelectorType.Pseudo) {
          if (!e.data) {
            r = 3
          } else if (e.name === 'has' || e.name === 'contains') {
            r = 0
          } else if (Array.isArray(e.data)) {
            r = 0
            for (var t = 0; t < e.data.length; t++) {
              if (e.data[t].length !== 1) continue
              var o = getProcedure(e.data[t][0])
              if (o === 0) {
                r = 0
                break
              }
              if (o > r) r = o
            }
            if (e.data.length > 1 && r > 0) r -= 1
          } else {
            r = 1
          }
        }
        return r
      }
    },
    8065: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, r, t, a) {
              if (a === undefined) a = t
              var n = Object.getOwnPropertyDescriptor(r, t)
              if (
                !n ||
                ('get' in n ? !r.__esModule : n.writable || n.configurable)
              ) {
                n = {
                  enumerable: true,
                  get: function () {
                    return r[t]
                  },
                }
              }
              Object.defineProperty(e, a, n)
            }
          : function (e, r, t, a) {
              if (a === undefined) a = t
              e[a] = r[t]
            })
      var n =
        (this && this.__exportStar) ||
        function (e, r) {
          for (var t in e)
            if (t !== 'default' && !Object.prototype.hasOwnProperty.call(r, t))
              a(r, e, t)
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.stringify = r.parse = r.isTraversal = void 0
      n(t(5615), r)
      var i = t(2422)
      Object.defineProperty(r, 'isTraversal', {
        enumerable: true,
        get: function () {
          return i.isTraversal
        },
      })
      Object.defineProperty(r, 'parse', {
        enumerable: true,
        get: function () {
          return i.parse
        },
      })
      var o = t(8279)
      Object.defineProperty(r, 'stringify', {
        enumerable: true,
        get: function () {
          return o.stringify
        },
      })
    },
    2422: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.parse = r.isTraversal = void 0
      var a = t(5615)
      var n = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/
      var i = /\\([\da-f]{1,6}\s?|(\s)|.)/gi
      var o = new Map([
        [126, a.AttributeAction.Element],
        [94, a.AttributeAction.Start],
        [36, a.AttributeAction.End],
        [42, a.AttributeAction.Any],
        [33, a.AttributeAction.Not],
        [124, a.AttributeAction.Hyphen],
      ])
      var s = new Set([
        'has',
        'not',
        'matches',
        'is',
        'where',
        'host',
        'host-context',
      ])
      function isTraversal(e) {
        switch (e.type) {
          case a.SelectorType.Adjacent:
          case a.SelectorType.Child:
          case a.SelectorType.Descendant:
          case a.SelectorType.Parent:
          case a.SelectorType.Sibling:
          case a.SelectorType.ColumnCombinator:
            return true
          default:
            return false
        }
      }
      r.isTraversal = isTraversal
      var u = new Set(['contains', 'icontains'])
      function funescape(e, r, t) {
        var a = parseInt(r, 16) - 65536
        return a !== a || t
          ? r
          : a < 0
          ? String.fromCharCode(a + 65536)
          : String.fromCharCode((a >> 10) | 55296, (a & 1023) | 56320)
      }
      function unescapeCSS(e) {
        return e.replace(i, funescape)
      }
      function isQuote(e) {
        return e === 39 || e === 34
      }
      function isWhitespace(e) {
        return e === 32 || e === 9 || e === 10 || e === 12 || e === 13
      }
      function parse(e) {
        var r = []
        var t = parseSelector(r, ''.concat(e), 0)
        if (t < e.length) {
          throw new Error('Unmatched selector: '.concat(e.slice(t)))
        }
        return r
      }
      r.parse = parse
      function parseSelector(e, r, t) {
        var i = []
        function getName(e) {
          var a = r.slice(t + e).match(n)
          if (!a) {
            throw new Error('Expected name, found '.concat(r.slice(t)))
          }
          var i = a[0]
          t += e + i.length
          return unescapeCSS(i)
        }
        function stripWhitespace(e) {
          t += e
          while (t < r.length && isWhitespace(r.charCodeAt(t))) {
            t++
          }
        }
        function readValueWithParenthesis() {
          t += 1
          var e = t
          var a = 1
          for (; a > 0 && t < r.length; t++) {
            if (r.charCodeAt(t) === 40 && !isEscaped(t)) {
              a++
            } else if (r.charCodeAt(t) === 41 && !isEscaped(t)) {
              a--
            }
          }
          if (a) {
            throw new Error('Parenthesis not matched')
          }
          return unescapeCSS(r.slice(e, t - 1))
        }
        function isEscaped(e) {
          var t = 0
          while (r.charCodeAt(--e) === 92) t++
          return (t & 1) === 1
        }
        function ensureNotTraversal() {
          if (i.length > 0 && isTraversal(i[i.length - 1])) {
            throw new Error('Did not expect successive traversals.')
          }
        }
        function addTraversal(e) {
          if (
            i.length > 0 &&
            i[i.length - 1].type === a.SelectorType.Descendant
          ) {
            i[i.length - 1].type = e
            return
          }
          ensureNotTraversal()
          i.push({ type: e })
        }
        function addSpecialAttribute(e, r) {
          i.push({
            type: a.SelectorType.Attribute,
            name: e,
            action: r,
            value: getName(1),
            namespace: null,
            ignoreCase: 'quirks',
          })
        }
        function finalizeSubselector() {
          if (i.length && i[i.length - 1].type === a.SelectorType.Descendant) {
            i.pop()
          }
          if (i.length === 0) {
            throw new Error('Empty sub-selector')
          }
          e.push(i)
        }
        stripWhitespace(0)
        if (r.length === t) {
          return t
        }
        e: while (t < r.length) {
          var l = r.charCodeAt(t)
          switch (l) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13: {
              if (i.length === 0 || i[0].type !== a.SelectorType.Descendant) {
                ensureNotTraversal()
                i.push({ type: a.SelectorType.Descendant })
              }
              stripWhitespace(1)
              break
            }
            case 62: {
              addTraversal(a.SelectorType.Child)
              stripWhitespace(1)
              break
            }
            case 60: {
              addTraversal(a.SelectorType.Parent)
              stripWhitespace(1)
              break
            }
            case 126: {
              addTraversal(a.SelectorType.Sibling)
              stripWhitespace(1)
              break
            }
            case 43: {
              addTraversal(a.SelectorType.Adjacent)
              stripWhitespace(1)
              break
            }
            case 46: {
              addSpecialAttribute('class', a.AttributeAction.Element)
              break
            }
            case 35: {
              addSpecialAttribute('id', a.AttributeAction.Equals)
              break
            }
            case 91: {
              stripWhitespace(1)
              var c = void 0
              var p = null
              if (r.charCodeAt(t) === 124) {
                c = getName(1)
              } else if (r.startsWith('*|', t)) {
                p = '*'
                c = getName(2)
              } else {
                c = getName(0)
                if (r.charCodeAt(t) === 124 && r.charCodeAt(t + 1) !== 61) {
                  p = c
                  c = getName(1)
                }
              }
              stripWhitespace(0)
              var d = a.AttributeAction.Exists
              var f = o.get(r.charCodeAt(t))
              if (f) {
                d = f
                if (r.charCodeAt(t + 1) !== 61) {
                  throw new Error('Expected `=`')
                }
                stripWhitespace(2)
              } else if (r.charCodeAt(t) === 61) {
                d = a.AttributeAction.Equals
                stripWhitespace(1)
              }
              var g = ''
              var h = null
              if (d !== 'exists') {
                if (isQuote(r.charCodeAt(t))) {
                  var m = r.charCodeAt(t)
                  var v = t + 1
                  while (
                    v < r.length &&
                    (r.charCodeAt(v) !== m || isEscaped(v))
                  ) {
                    v += 1
                  }
                  if (r.charCodeAt(v) !== m) {
                    throw new Error("Attribute value didn't end")
                  }
                  g = unescapeCSS(r.slice(t + 1, v))
                  t = v + 1
                } else {
                  var b = t
                  while (
                    t < r.length &&
                    ((!isWhitespace(r.charCodeAt(t)) &&
                      r.charCodeAt(t) !== 93) ||
                      isEscaped(t))
                  ) {
                    t += 1
                  }
                  g = unescapeCSS(r.slice(b, t))
                }
                stripWhitespace(0)
                var y = r.charCodeAt(t) | 32
                if (y === 115) {
                  h = false
                  stripWhitespace(1)
                } else if (y === 105) {
                  h = true
                  stripWhitespace(1)
                }
              }
              if (r.charCodeAt(t) !== 93) {
                throw new Error("Attribute selector didn't terminate")
              }
              t += 1
              var w = {
                type: a.SelectorType.Attribute,
                name: c,
                action: d,
                value: g,
                namespace: p,
                ignoreCase: h,
              }
              i.push(w)
              break
            }
            case 58: {
              if (r.charCodeAt(t + 1) === 58) {
                i.push({
                  type: a.SelectorType.PseudoElement,
                  name: getName(2).toLowerCase(),
                  data:
                    r.charCodeAt(t) === 40 ? readValueWithParenthesis() : null,
                })
                continue
              }
              var T = getName(1).toLowerCase()
              var E = null
              if (r.charCodeAt(t) === 40) {
                if (s.has(T)) {
                  if (isQuote(r.charCodeAt(t + 1))) {
                    throw new Error(
                      'Pseudo-selector '.concat(T, ' cannot be quoted')
                    )
                  }
                  E = []
                  t = parseSelector(E, r, t + 1)
                  if (r.charCodeAt(t) !== 41) {
                    throw new Error(
                      'Missing closing parenthesis in :'
                        .concat(T, ' (')
                        .concat(r, ')')
                    )
                  }
                  t += 1
                } else {
                  E = readValueWithParenthesis()
                  if (u.has(T)) {
                    var A = E.charCodeAt(0)
                    if (A === E.charCodeAt(E.length - 1) && isQuote(A)) {
                      E = E.slice(1, -1)
                    }
                  }
                  E = unescapeCSS(E)
                }
              }
              i.push({ type: a.SelectorType.Pseudo, name: T, data: E })
              break
            }
            case 44: {
              finalizeSubselector()
              i = []
              stripWhitespace(1)
              break
            }
            default: {
              if (r.startsWith('/*', t)) {
                var q = r.indexOf('*/', t + 2)
                if (q < 0) {
                  throw new Error('Comment was not terminated')
                }
                t = q + 2
                if (i.length === 0) {
                  stripWhitespace(0)
                }
                break
              }
              var p = null
              var x = void 0
              if (l === 42) {
                t += 1
                x = '*'
              } else if (l === 124) {
                x = ''
                if (r.charCodeAt(t + 1) === 124) {
                  addTraversal(a.SelectorType.ColumnCombinator)
                  stripWhitespace(2)
                  break
                }
              } else if (n.test(r.slice(t))) {
                x = getName(0)
              } else {
                break e
              }
              if (r.charCodeAt(t) === 124 && r.charCodeAt(t + 1) !== 124) {
                p = x
                if (r.charCodeAt(t + 1) === 42) {
                  x = '*'
                  t += 2
                } else {
                  x = getName(1)
                }
              }
              i.push(
                x === '*'
                  ? { type: a.SelectorType.Universal, namespace: p }
                  : { type: a.SelectorType.Tag, name: x, namespace: p }
              )
            }
          }
        }
        finalizeSubselector()
        return t
      }
    },
    8279: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__spreadArray) ||
        function (e, r, t) {
          if (t || arguments.length === 2)
            for (var a = 0, n = r.length, i; a < n; a++) {
              if (i || !(a in r)) {
                if (!i) i = Array.prototype.slice.call(r, 0, a)
                i[a] = r[a]
              }
            }
          return e.concat(i || Array.prototype.slice.call(r))
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.stringify = void 0
      var n = t(5615)
      var i = ['\\', '"']
      var o = a(a([], i, true), ['(', ')'], false)
      var s = new Set(
        i.map(function (e) {
          return e.charCodeAt(0)
        })
      )
      var u = new Set(
        o.map(function (e) {
          return e.charCodeAt(0)
        })
      )
      var l = new Set(
        a(
          a([], o, true),
          ['~', '^', '$', '*', '+', '!', '|', ':', '[', ']', ' ', '.'],
          false
        ).map(function (e) {
          return e.charCodeAt(0)
        })
      )
      function stringify(e) {
        return e
          .map(function (e) {
            return e.map(stringifyToken).join('')
          })
          .join(', ')
      }
      r.stringify = stringify
      function stringifyToken(e, r, t) {
        switch (e.type) {
          case n.SelectorType.Child:
            return r === 0 ? '> ' : ' > '
          case n.SelectorType.Parent:
            return r === 0 ? '< ' : ' < '
          case n.SelectorType.Sibling:
            return r === 0 ? '~ ' : ' ~ '
          case n.SelectorType.Adjacent:
            return r === 0 ? '+ ' : ' + '
          case n.SelectorType.Descendant:
            return ' '
          case n.SelectorType.ColumnCombinator:
            return r === 0 ? '|| ' : ' || '
          case n.SelectorType.Universal:
            return e.namespace === '*' && r + 1 < t.length && 'name' in t[r + 1]
              ? ''
              : ''.concat(getNamespace(e.namespace), '*')
          case n.SelectorType.Tag:
            return getNamespacedName(e)
          case n.SelectorType.PseudoElement:
            return '::'
              .concat(escapeName(e.name, l))
              .concat(
                e.data === null ? '' : '('.concat(escapeName(e.data, u), ')')
              )
          case n.SelectorType.Pseudo:
            return ':'
              .concat(escapeName(e.name, l))
              .concat(
                e.data === null
                  ? ''
                  : '('.concat(
                      typeof e.data === 'string'
                        ? escapeName(e.data, u)
                        : stringify(e.data),
                      ')'
                    )
              )
          case n.SelectorType.Attribute: {
            if (
              e.name === 'id' &&
              e.action === n.AttributeAction.Equals &&
              e.ignoreCase === 'quirks' &&
              !e.namespace
            ) {
              return '#'.concat(escapeName(e.value, l))
            }
            if (
              e.name === 'class' &&
              e.action === n.AttributeAction.Element &&
              e.ignoreCase === 'quirks' &&
              !e.namespace
            ) {
              return '.'.concat(escapeName(e.value, l))
            }
            var a = getNamespacedName(e)
            if (e.action === n.AttributeAction.Exists) {
              return '['.concat(a, ']')
            }
            return '['
              .concat(a)
              .concat(getActionValue(e.action), '="')
              .concat(escapeName(e.value, s), '"')
              .concat(
                e.ignoreCase === null ? '' : e.ignoreCase ? ' i' : ' s',
                ']'
              )
          }
        }
      }
      function getActionValue(e) {
        switch (e) {
          case n.AttributeAction.Equals:
            return ''
          case n.AttributeAction.Element:
            return '~'
          case n.AttributeAction.Start:
            return '^'
          case n.AttributeAction.End:
            return '$'
          case n.AttributeAction.Any:
            return '*'
          case n.AttributeAction.Not:
            return '!'
          case n.AttributeAction.Hyphen:
            return '|'
          case n.AttributeAction.Exists:
            throw new Error("Shouldn't be here")
        }
      }
      function getNamespacedName(e) {
        return ''
          .concat(getNamespace(e.namespace))
          .concat(escapeName(e.name, l))
      }
      function getNamespace(e) {
        return e !== null
          ? ''.concat(e === '*' ? '*' : escapeName(e, l), '|')
          : ''
      }
      function escapeName(e, r) {
        var t = 0
        var a = ''
        for (var n = 0; n < e.length; n++) {
          if (r.has(e.charCodeAt(n))) {
            a += ''.concat(e.slice(t, n), '\\').concat(e.charAt(n))
            t = n + 1
          }
        }
        return a.length > 0 ? a + e.slice(t) : e
      }
    },
    5615: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.AttributeAction = r.IgnoreCaseMode = r.SelectorType = void 0
      var t
      ;(function (e) {
        e['Attribute'] = 'attribute'
        e['Pseudo'] = 'pseudo'
        e['PseudoElement'] = 'pseudo-element'
        e['Tag'] = 'tag'
        e['Universal'] = 'universal'
        e['Adjacent'] = 'adjacent'
        e['Child'] = 'child'
        e['Descendant'] = 'descendant'
        e['Parent'] = 'parent'
        e['Sibling'] = 'sibling'
        e['ColumnCombinator'] = 'column-combinator'
      })((t = r.SelectorType || (r.SelectorType = {})))
      r.IgnoreCaseMode = {
        Unknown: null,
        QuirksMode: 'quirks',
        IgnoreCase: true,
        CaseSensitive: false,
      }
      var a
      ;(function (e) {
        e['Any'] = 'any'
        e['Element'] = 'element'
        e['End'] = 'end'
        e['Equals'] = 'equals'
        e['Exists'] = 'exists'
        e['Hyphen'] = 'hyphen'
        e['Not'] = 'not'
        e['Start'] = 'start'
      })((a = r.AttributeAction || (r.AttributeAction = {})))
    },
    7537: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.attributeNames = r.elementNames = void 0
      r.elementNames = new Map([
        ['altglyph', 'altGlyph'],
        ['altglyphdef', 'altGlyphDef'],
        ['altglyphitem', 'altGlyphItem'],
        ['animatecolor', 'animateColor'],
        ['animatemotion', 'animateMotion'],
        ['animatetransform', 'animateTransform'],
        ['clippath', 'clipPath'],
        ['feblend', 'feBlend'],
        ['fecolormatrix', 'feColorMatrix'],
        ['fecomponenttransfer', 'feComponentTransfer'],
        ['fecomposite', 'feComposite'],
        ['feconvolvematrix', 'feConvolveMatrix'],
        ['fediffuselighting', 'feDiffuseLighting'],
        ['fedisplacementmap', 'feDisplacementMap'],
        ['fedistantlight', 'feDistantLight'],
        ['fedropshadow', 'feDropShadow'],
        ['feflood', 'feFlood'],
        ['fefunca', 'feFuncA'],
        ['fefuncb', 'feFuncB'],
        ['fefuncg', 'feFuncG'],
        ['fefuncr', 'feFuncR'],
        ['fegaussianblur', 'feGaussianBlur'],
        ['feimage', 'feImage'],
        ['femerge', 'feMerge'],
        ['femergenode', 'feMergeNode'],
        ['femorphology', 'feMorphology'],
        ['feoffset', 'feOffset'],
        ['fepointlight', 'fePointLight'],
        ['fespecularlighting', 'feSpecularLighting'],
        ['fespotlight', 'feSpotLight'],
        ['fetile', 'feTile'],
        ['feturbulence', 'feTurbulence'],
        ['foreignobject', 'foreignObject'],
        ['glyphref', 'glyphRef'],
        ['lineargradient', 'linearGradient'],
        ['radialgradient', 'radialGradient'],
        ['textpath', 'textPath'],
      ])
      r.attributeNames = new Map([
        ['definitionurl', 'definitionURL'],
        ['attributename', 'attributeName'],
        ['attributetype', 'attributeType'],
        ['basefrequency', 'baseFrequency'],
        ['baseprofile', 'baseProfile'],
        ['calcmode', 'calcMode'],
        ['clippathunits', 'clipPathUnits'],
        ['diffuseconstant', 'diffuseConstant'],
        ['edgemode', 'edgeMode'],
        ['filterunits', 'filterUnits'],
        ['glyphref', 'glyphRef'],
        ['gradienttransform', 'gradientTransform'],
        ['gradientunits', 'gradientUnits'],
        ['kernelmatrix', 'kernelMatrix'],
        ['kernelunitlength', 'kernelUnitLength'],
        ['keypoints', 'keyPoints'],
        ['keysplines', 'keySplines'],
        ['keytimes', 'keyTimes'],
        ['lengthadjust', 'lengthAdjust'],
        ['limitingconeangle', 'limitingConeAngle'],
        ['markerheight', 'markerHeight'],
        ['markerunits', 'markerUnits'],
        ['markerwidth', 'markerWidth'],
        ['maskcontentunits', 'maskContentUnits'],
        ['maskunits', 'maskUnits'],
        ['numoctaves', 'numOctaves'],
        ['pathlength', 'pathLength'],
        ['patterncontentunits', 'patternContentUnits'],
        ['patterntransform', 'patternTransform'],
        ['patternunits', 'patternUnits'],
        ['pointsatx', 'pointsAtX'],
        ['pointsaty', 'pointsAtY'],
        ['pointsatz', 'pointsAtZ'],
        ['preservealpha', 'preserveAlpha'],
        ['preserveaspectratio', 'preserveAspectRatio'],
        ['primitiveunits', 'primitiveUnits'],
        ['refx', 'refX'],
        ['refy', 'refY'],
        ['repeatcount', 'repeatCount'],
        ['repeatdur', 'repeatDur'],
        ['requiredextensions', 'requiredExtensions'],
        ['requiredfeatures', 'requiredFeatures'],
        ['specularconstant', 'specularConstant'],
        ['specularexponent', 'specularExponent'],
        ['spreadmethod', 'spreadMethod'],
        ['startoffset', 'startOffset'],
        ['stddeviation', 'stdDeviation'],
        ['stitchtiles', 'stitchTiles'],
        ['surfacescale', 'surfaceScale'],
        ['systemlanguage', 'systemLanguage'],
        ['tablevalues', 'tableValues'],
        ['targetx', 'targetX'],
        ['targety', 'targetY'],
        ['textlength', 'textLength'],
        ['viewbox', 'viewBox'],
        ['viewtarget', 'viewTarget'],
        ['xchannelselector', 'xChannelSelector'],
        ['ychannelselector', 'yChannelSelector'],
        ['zoomandpan', 'zoomAndPan'],
      ])
    },
    4614: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__assign) ||
        function () {
          a =
            Object.assign ||
            function (e) {
              for (var r, t = 1, a = arguments.length; t < a; t++) {
                r = arguments[t]
                for (var n in r)
                  if (Object.prototype.hasOwnProperty.call(r, n)) e[n] = r[n]
              }
              return e
            }
          return a.apply(this, arguments)
        }
      var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, r, t, a) {
              if (a === undefined) a = t
              Object.defineProperty(e, a, {
                enumerable: true,
                get: function () {
                  return r[t]
                },
              })
            }
          : function (e, r, t, a) {
              if (a === undefined) a = t
              e[a] = r[t]
            })
      var i =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, r) {
              Object.defineProperty(e, 'default', {
                enumerable: true,
                value: r,
              })
            }
          : function (e, r) {
              e['default'] = r
            })
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var r = {}
          if (e != null)
            for (var t in e)
              if (t !== 'default' && Object.prototype.hasOwnProperty.call(e, t))
                n(r, e, t)
          i(r, e)
          return r
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var s = o(t(9391))
      var u = t(9280)
      var l = t(7537)
      var c = new Set([
        'style',
        'script',
        'xmp',
        'iframe',
        'noembed',
        'noframes',
        'plaintext',
        'noscript',
      ])
      function formatAttributes(e, r) {
        if (!e) return
        return Object.keys(e)
          .map(function (t) {
            var a, n
            var i = (a = e[t]) !== null && a !== void 0 ? a : ''
            if (r.xmlMode === 'foreign') {
              t = (n = l.attributeNames.get(t)) !== null && n !== void 0 ? n : t
            }
            if (!r.emptyAttrs && !r.xmlMode && i === '') {
              return t
            }
            return (
              t +
              '="' +
              (r.decodeEntities !== false
                ? u.encodeXML(i)
                : i.replace(/"/g, '&quot;')) +
              '"'
            )
          })
          .join(' ')
      }
      var p = new Set([
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'command',
        'embed',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ])
      function render(e, r) {
        if (r === void 0) {
          r = {}
        }
        var t = Array.isArray(e) || e.cheerio ? e : [e]
        var a = ''
        for (var n = 0; n < t.length; n++) {
          a += renderNode(t[n], r)
        }
        return a
      }
      r['default'] = render
      function renderNode(e, r) {
        switch (e.type) {
          case s.Root:
            return render(e.children, r)
          case s.Directive:
          case s.Doctype:
            return renderDirective(e)
          case s.Comment:
            return renderComment(e)
          case s.CDATA:
            return renderCdata(e)
          case s.Script:
          case s.Style:
          case s.Tag:
            return renderTag(e, r)
          case s.Text:
            return renderText(e, r)
        }
      }
      var d = new Set([
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext',
        'annotation-xml',
        'foreignObject',
        'desc',
        'title',
      ])
      var f = new Set(['svg', 'math'])
      function renderTag(e, r) {
        var t
        if (r.xmlMode === 'foreign') {
          e.name =
            (t = l.elementNames.get(e.name)) !== null && t !== void 0
              ? t
              : e.name
          if (e.parent && d.has(e.parent.name)) {
            r = a(a({}, r), { xmlMode: false })
          }
        }
        if (!r.xmlMode && f.has(e.name)) {
          r = a(a({}, r), { xmlMode: 'foreign' })
        }
        var n = '<' + e.name
        var i = formatAttributes(e.attribs, r)
        if (i) {
          n += ' ' + i
        }
        if (
          e.children.length === 0 &&
          (r.xmlMode
            ? r.selfClosingTags !== false
            : r.selfClosingTags && p.has(e.name))
        ) {
          if (!r.xmlMode) n += ' '
          n += '/>'
        } else {
          n += '>'
          if (e.children.length > 0) {
            n += render(e.children, r)
          }
          if (r.xmlMode || !p.has(e.name)) {
            n += '</' + e.name + '>'
          }
        }
        return n
      }
      function renderDirective(e) {
        return '<' + e.data + '>'
      }
      function renderText(e, r) {
        var t = e.data || ''
        if (
          r.decodeEntities !== false &&
          !(!r.xmlMode && e.parent && c.has(e.parent.name))
        ) {
          t = u.encodeXML(t)
        }
        return t
      }
      function renderCdata(e) {
        return '<![CDATA[' + e.children[0].data + ']]>'
      }
      function renderComment(e) {
        return '\x3c!--' + e.data + '--\x3e'
      }
    },
    9391: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.Doctype =
        r.CDATA =
        r.Tag =
        r.Style =
        r.Script =
        r.Comment =
        r.Directive =
        r.Text =
        r.Root =
        r.isTag =
        r.ElementType =
          void 0
      var t
      ;(function (e) {
        e['Root'] = 'root'
        e['Text'] = 'text'
        e['Directive'] = 'directive'
        e['Comment'] = 'comment'
        e['Script'] = 'script'
        e['Style'] = 'style'
        e['Tag'] = 'tag'
        e['CDATA'] = 'cdata'
        e['Doctype'] = 'doctype'
      })((t = r.ElementType || (r.ElementType = {})))
      function isTag(e) {
        return e.type === t.Tag || e.type === t.Script || e.type === t.Style
      }
      r.isTag = isTag
      r.Root = t.Root
      r.Text = t.Text
      r.Directive = t.Directive
      r.Comment = t.Comment
      r.Script = t.Script
      r.Style = t.Style
      r.Tag = t.Tag
      r.CDATA = t.CDATA
      r.Doctype = t.Doctype
    },
    2472: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, r, t, a) {
              if (a === undefined) a = t
              var n = Object.getOwnPropertyDescriptor(r, t)
              if (
                !n ||
                ('get' in n ? !r.__esModule : n.writable || n.configurable)
              ) {
                n = {
                  enumerable: true,
                  get: function () {
                    return r[t]
                  },
                }
              }
              Object.defineProperty(e, a, n)
            }
          : function (e, r, t, a) {
              if (a === undefined) a = t
              e[a] = r[t]
            })
      var n =
        (this && this.__exportStar) ||
        function (e, r) {
          for (var t in e)
            if (t !== 'default' && !Object.prototype.hasOwnProperty.call(r, t))
              a(r, e, t)
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.DomHandler = void 0
      var i = t(9391)
      var o = t(1508)
      n(t(1508), r)
      var s = /\s+/g
      var u = {
        normalizeWhitespace: false,
        withStartIndices: false,
        withEndIndices: false,
        xmlMode: false,
      }
      var l = (function () {
        function DomHandler(e, r, t) {
          this.dom = []
          this.root = new o.Document(this.dom)
          this.done = false
          this.tagStack = [this.root]
          this.lastNode = null
          this.parser = null
          if (typeof r === 'function') {
            t = r
            r = u
          }
          if (typeof e === 'object') {
            r = e
            e = undefined
          }
          this.callback = e !== null && e !== void 0 ? e : null
          this.options = r !== null && r !== void 0 ? r : u
          this.elementCB = t !== null && t !== void 0 ? t : null
        }
        DomHandler.prototype.onparserinit = function (e) {
          this.parser = e
        }
        DomHandler.prototype.onreset = function () {
          this.dom = []
          this.root = new o.Document(this.dom)
          this.done = false
          this.tagStack = [this.root]
          this.lastNode = null
          this.parser = null
        }
        DomHandler.prototype.onend = function () {
          if (this.done) return
          this.done = true
          this.parser = null
          this.handleCallback(null)
        }
        DomHandler.prototype.onerror = function (e) {
          this.handleCallback(e)
        }
        DomHandler.prototype.onclosetag = function () {
          this.lastNode = null
          var e = this.tagStack.pop()
          if (this.options.withEndIndices) {
            e.endIndex = this.parser.endIndex
          }
          if (this.elementCB) this.elementCB(e)
        }
        DomHandler.prototype.onopentag = function (e, r) {
          var t = this.options.xmlMode ? i.ElementType.Tag : undefined
          var a = new o.Element(e, r, undefined, t)
          this.addNode(a)
          this.tagStack.push(a)
        }
        DomHandler.prototype.ontext = function (e) {
          var r = this.options.normalizeWhitespace
          var t = this.lastNode
          if (t && t.type === i.ElementType.Text) {
            if (r) {
              t.data = (t.data + e).replace(s, ' ')
            } else {
              t.data += e
            }
            if (this.options.withEndIndices) {
              t.endIndex = this.parser.endIndex
            }
          } else {
            if (r) {
              e = e.replace(s, ' ')
            }
            var a = new o.Text(e)
            this.addNode(a)
            this.lastNode = a
          }
        }
        DomHandler.prototype.oncomment = function (e) {
          if (this.lastNode && this.lastNode.type === i.ElementType.Comment) {
            this.lastNode.data += e
            return
          }
          var r = new o.Comment(e)
          this.addNode(r)
          this.lastNode = r
        }
        DomHandler.prototype.oncommentend = function () {
          this.lastNode = null
        }
        DomHandler.prototype.oncdatastart = function () {
          var e = new o.Text('')
          var r = new o.NodeWithChildren(i.ElementType.CDATA, [e])
          this.addNode(r)
          e.parent = r
          this.lastNode = e
        }
        DomHandler.prototype.oncdataend = function () {
          this.lastNode = null
        }
        DomHandler.prototype.onprocessinginstruction = function (e, r) {
          var t = new o.ProcessingInstruction(e, r)
          this.addNode(t)
        }
        DomHandler.prototype.handleCallback = function (e) {
          if (typeof this.callback === 'function') {
            this.callback(e, this.dom)
          } else if (e) {
            throw e
          }
        }
        DomHandler.prototype.addNode = function (e) {
          var r = this.tagStack[this.tagStack.length - 1]
          var t = r.children[r.children.length - 1]
          if (this.options.withStartIndices) {
            e.startIndex = this.parser.startIndex
          }
          if (this.options.withEndIndices) {
            e.endIndex = this.parser.endIndex
          }
          r.children.push(e)
          if (t) {
            e.prev = t
            t.next = e
          }
          e.parent = r
          this.lastNode = null
        }
        return DomHandler
      })()
      r.DomHandler = l
      r['default'] = l
    },
    1508: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (e, r) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r
                }) ||
              function (e, r) {
                for (var t in r)
                  if (Object.prototype.hasOwnProperty.call(r, t)) e[t] = r[t]
              }
            return extendStatics(e, r)
          }
          return function (e, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(r) +
                  ' is not a constructor or null'
              )
            extendStatics(e, r)
            function __() {
              this.constructor = e
            }
            e.prototype =
              r === null
                ? Object.create(r)
                : ((__.prototype = r.prototype), new __())
          }
        })()
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (e) {
              for (var r, t = 1, a = arguments.length; t < a; t++) {
                r = arguments[t]
                for (var n in r)
                  if (Object.prototype.hasOwnProperty.call(r, n)) e[n] = r[n]
              }
              return e
            }
          return n.apply(this, arguments)
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.cloneNode =
        r.hasChildren =
        r.isDocument =
        r.isDirective =
        r.isComment =
        r.isText =
        r.isCDATA =
        r.isTag =
        r.Element =
        r.Document =
        r.NodeWithChildren =
        r.ProcessingInstruction =
        r.Comment =
        r.Text =
        r.DataNode =
        r.Node =
          void 0
      var i = t(9391)
      var o = new Map([
        [i.ElementType.Tag, 1],
        [i.ElementType.Script, 1],
        [i.ElementType.Style, 1],
        [i.ElementType.Directive, 1],
        [i.ElementType.Text, 3],
        [i.ElementType.CDATA, 4],
        [i.ElementType.Comment, 8],
        [i.ElementType.Root, 9],
      ])
      var s = (function () {
        function Node(e) {
          this.type = e
          this.parent = null
          this.prev = null
          this.next = null
          this.startIndex = null
          this.endIndex = null
        }
        Object.defineProperty(Node.prototype, 'nodeType', {
          get: function () {
            var e
            return (e = o.get(this.type)) !== null && e !== void 0 ? e : 1
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(Node.prototype, 'parentNode', {
          get: function () {
            return this.parent
          },
          set: function (e) {
            this.parent = e
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(Node.prototype, 'previousSibling', {
          get: function () {
            return this.prev
          },
          set: function (e) {
            this.prev = e
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(Node.prototype, 'nextSibling', {
          get: function () {
            return this.next
          },
          set: function (e) {
            this.next = e
          },
          enumerable: false,
          configurable: true,
        })
        Node.prototype.cloneNode = function (e) {
          if (e === void 0) {
            e = false
          }
          return cloneNode(this, e)
        }
        return Node
      })()
      r.Node = s
      var u = (function (e) {
        a(DataNode, e)
        function DataNode(r, t) {
          var a = e.call(this, r) || this
          a.data = t
          return a
        }
        Object.defineProperty(DataNode.prototype, 'nodeValue', {
          get: function () {
            return this.data
          },
          set: function (e) {
            this.data = e
          },
          enumerable: false,
          configurable: true,
        })
        return DataNode
      })(s)
      r.DataNode = u
      var l = (function (e) {
        a(Text, e)
        function Text(r) {
          return e.call(this, i.ElementType.Text, r) || this
        }
        return Text
      })(u)
      r.Text = l
      var c = (function (e) {
        a(Comment, e)
        function Comment(r) {
          return e.call(this, i.ElementType.Comment, r) || this
        }
        return Comment
      })(u)
      r.Comment = c
      var p = (function (e) {
        a(ProcessingInstruction, e)
        function ProcessingInstruction(r, t) {
          var a = e.call(this, i.ElementType.Directive, t) || this
          a.name = r
          return a
        }
        return ProcessingInstruction
      })(u)
      r.ProcessingInstruction = p
      var d = (function (e) {
        a(NodeWithChildren, e)
        function NodeWithChildren(r, t) {
          var a = e.call(this, r) || this
          a.children = t
          return a
        }
        Object.defineProperty(NodeWithChildren.prototype, 'firstChild', {
          get: function () {
            var e
            return (e = this.children[0]) !== null && e !== void 0 ? e : null
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(NodeWithChildren.prototype, 'lastChild', {
          get: function () {
            return this.children.length > 0
              ? this.children[this.children.length - 1]
              : null
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(NodeWithChildren.prototype, 'childNodes', {
          get: function () {
            return this.children
          },
          set: function (e) {
            this.children = e
          },
          enumerable: false,
          configurable: true,
        })
        return NodeWithChildren
      })(s)
      r.NodeWithChildren = d
      var f = (function (e) {
        a(Document, e)
        function Document(r) {
          return e.call(this, i.ElementType.Root, r) || this
        }
        return Document
      })(d)
      r.Document = f
      var g = (function (e) {
        a(Element, e)
        function Element(r, t, a, n) {
          if (a === void 0) {
            a = []
          }
          if (n === void 0) {
            n =
              r === 'script'
                ? i.ElementType.Script
                : r === 'style'
                ? i.ElementType.Style
                : i.ElementType.Tag
          }
          var o = e.call(this, n, a) || this
          o.name = r
          o.attribs = t
          return o
        }
        Object.defineProperty(Element.prototype, 'tagName', {
          get: function () {
            return this.name
          },
          set: function (e) {
            this.name = e
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(Element.prototype, 'attributes', {
          get: function () {
            var e = this
            return Object.keys(this.attribs).map(function (r) {
              var t, a
              return {
                name: r,
                value: e.attribs[r],
                namespace:
                  (t = e['x-attribsNamespace']) === null || t === void 0
                    ? void 0
                    : t[r],
                prefix:
                  (a = e['x-attribsPrefix']) === null || a === void 0
                    ? void 0
                    : a[r],
              }
            })
          },
          enumerable: false,
          configurable: true,
        })
        return Element
      })(d)
      r.Element = g
      function isTag(e) {
        return (0, i.isTag)(e)
      }
      r.isTag = isTag
      function isCDATA(e) {
        return e.type === i.ElementType.CDATA
      }
      r.isCDATA = isCDATA
      function isText(e) {
        return e.type === i.ElementType.Text
      }
      r.isText = isText
      function isComment(e) {
        return e.type === i.ElementType.Comment
      }
      r.isComment = isComment
      function isDirective(e) {
        return e.type === i.ElementType.Directive
      }
      r.isDirective = isDirective
      function isDocument(e) {
        return e.type === i.ElementType.Root
      }
      r.isDocument = isDocument
      function hasChildren(e) {
        return Object.prototype.hasOwnProperty.call(e, 'children')
      }
      r.hasChildren = hasChildren
      function cloneNode(e, r) {
        if (r === void 0) {
          r = false
        }
        var t
        if (isText(e)) {
          t = new l(e.data)
        } else if (isComment(e)) {
          t = new c(e.data)
        } else if (isTag(e)) {
          var a = r ? cloneChildren(e.children) : []
          var o = new g(e.name, n({}, e.attribs), a)
          a.forEach(function (e) {
            return (e.parent = o)
          })
          if (e.namespace != null) {
            o.namespace = e.namespace
          }
          if (e['x-attribsNamespace']) {
            o['x-attribsNamespace'] = n({}, e['x-attribsNamespace'])
          }
          if (e['x-attribsPrefix']) {
            o['x-attribsPrefix'] = n({}, e['x-attribsPrefix'])
          }
          t = o
        } else if (isCDATA(e)) {
          var a = r ? cloneChildren(e.children) : []
          var s = new d(i.ElementType.CDATA, a)
          a.forEach(function (e) {
            return (e.parent = s)
          })
          t = s
        } else if (isDocument(e)) {
          var a = r ? cloneChildren(e.children) : []
          var u = new f(a)
          a.forEach(function (e) {
            return (e.parent = u)
          })
          if (e['x-mode']) {
            u['x-mode'] = e['x-mode']
          }
          t = u
        } else if (isDirective(e)) {
          var h = new p(e.name, e.data)
          if (e['x-name'] != null) {
            h['x-name'] = e['x-name']
            h['x-publicId'] = e['x-publicId']
            h['x-systemId'] = e['x-systemId']
          }
          t = h
        } else {
          throw new Error('Not implemented yet: '.concat(e.type))
        }
        t.startIndex = e.startIndex
        t.endIndex = e.endIndex
        if (e.sourceCodeLocation != null) {
          t.sourceCodeLocation = e.sourceCodeLocation
        }
        return t
      }
      r.cloneNode = cloneNode
      function cloneChildren(e) {
        var r = e.map(function (e) {
          return cloneNode(e, true)
        })
        for (var t = 1; t < r.length; t++) {
          r[t].prev = r[t - 1]
          r[t - 1].next = r[t]
        }
        return r
      }
    },
    3442: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.getFeed = void 0
      var a = t(3930)
      var n = t(7102)
      function getFeed(e) {
        var r = getOneElement(isValidFeed, e)
        return !r ? null : r.name === 'feed' ? getAtomFeed(r) : getRssFeed(r)
      }
      r.getFeed = getFeed
      function getAtomFeed(e) {
        var r
        var t = e.children
        var a = {
          type: 'atom',
          items: (0, n.getElementsByTagName)('entry', t).map(function (e) {
            var r
            var t = e.children
            var a = { media: getMediaElements(t) }
            addConditionally(a, 'id', 'id', t)
            addConditionally(a, 'title', 'title', t)
            var n =
              (r = getOneElement('link', t)) === null || r === void 0
                ? void 0
                : r.attribs.href
            if (n) {
              a.link = n
            }
            var i = fetch('summary', t) || fetch('content', t)
            if (i) {
              a.description = i
            }
            var o = fetch('updated', t)
            if (o) {
              a.pubDate = new Date(o)
            }
            return a
          }),
        }
        addConditionally(a, 'id', 'id', t)
        addConditionally(a, 'title', 'title', t)
        var i =
          (r = getOneElement('link', t)) === null || r === void 0
            ? void 0
            : r.attribs.href
        if (i) {
          a.link = i
        }
        addConditionally(a, 'description', 'subtitle', t)
        var o = fetch('updated', t)
        if (o) {
          a.updated = new Date(o)
        }
        addConditionally(a, 'author', 'email', t, true)
        return a
      }
      function getRssFeed(e) {
        var r, t
        var a =
          (t =
            (r = getOneElement('channel', e.children)) === null || r === void 0
              ? void 0
              : r.children) !== null && t !== void 0
            ? t
            : []
        var i = {
          type: e.name.substr(0, 3),
          id: '',
          items: (0, n.getElementsByTagName)('item', e.children).map(function (
            e
          ) {
            var r = e.children
            var t = { media: getMediaElements(r) }
            addConditionally(t, 'id', 'guid', r)
            addConditionally(t, 'title', 'title', r)
            addConditionally(t, 'link', 'link', r)
            addConditionally(t, 'description', 'description', r)
            var a = fetch('pubDate', r)
            if (a) t.pubDate = new Date(a)
            return t
          }),
        }
        addConditionally(i, 'title', 'title', a)
        addConditionally(i, 'link', 'link', a)
        addConditionally(i, 'description', 'description', a)
        var o = fetch('lastBuildDate', a)
        if (o) {
          i.updated = new Date(o)
        }
        addConditionally(i, 'author', 'managingEditor', a, true)
        return i
      }
      var i = ['url', 'type', 'lang']
      var o = [
        'fileSize',
        'bitrate',
        'framerate',
        'samplingrate',
        'channels',
        'duration',
        'height',
        'width',
      ]
      function getMediaElements(e) {
        return (0, n.getElementsByTagName)('media:content', e).map(function (
          e
        ) {
          var r = e.attribs
          var t = { medium: r.medium, isDefault: !!r.isDefault }
          for (var a = 0, n = i; a < n.length; a++) {
            var s = n[a]
            if (r[s]) {
              t[s] = r[s]
            }
          }
          for (var u = 0, l = o; u < l.length; u++) {
            var s = l[u]
            if (r[s]) {
              t[s] = parseInt(r[s], 10)
            }
          }
          if (r.expression) {
            t.expression = r.expression
          }
          return t
        })
      }
      function getOneElement(e, r) {
        return (0, n.getElementsByTagName)(e, r, true, 1)[0]
      }
      function fetch(e, r, t) {
        if (t === void 0) {
          t = false
        }
        return (0, a.textContent)(
          (0, n.getElementsByTagName)(e, r, t, 1)
        ).trim()
      }
      function addConditionally(e, r, t, a, n) {
        if (n === void 0) {
          n = false
        }
        var i = fetch(t, a, n)
        if (i) e[r] = i
      }
      function isValidFeed(e) {
        return e === 'rss' || e === 'feed' || e === 'rdf:RDF'
      }
    },
    5509: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.uniqueSort = r.compareDocumentPosition = r.removeSubsets = void 0
      var a = t(2472)
      function removeSubsets(e) {
        var r = e.length
        while (--r >= 0) {
          var t = e[r]
          if (r > 0 && e.lastIndexOf(t, r - 1) >= 0) {
            e.splice(r, 1)
            continue
          }
          for (var a = t.parent; a; a = a.parent) {
            if (e.includes(a)) {
              e.splice(r, 1)
              break
            }
          }
        }
        return e
      }
      r.removeSubsets = removeSubsets
      function compareDocumentPosition(e, r) {
        var t = []
        var n = []
        if (e === r) {
          return 0
        }
        var i = (0, a.hasChildren)(e) ? e : e.parent
        while (i) {
          t.unshift(i)
          i = i.parent
        }
        i = (0, a.hasChildren)(r) ? r : r.parent
        while (i) {
          n.unshift(i)
          i = i.parent
        }
        var o = Math.min(t.length, n.length)
        var s = 0
        while (s < o && t[s] === n[s]) {
          s++
        }
        if (s === 0) {
          return 1
        }
        var u = t[s - 1]
        var l = u.children
        var c = t[s]
        var p = n[s]
        if (l.indexOf(c) > l.indexOf(p)) {
          if (u === r) {
            return 4 | 16
          }
          return 4
        }
        if (u === e) {
          return 2 | 8
        }
        return 2
      }
      r.compareDocumentPosition = compareDocumentPosition
      function uniqueSort(e) {
        e = e.filter(function (e, r, t) {
          return !t.includes(e, r + 1)
        })
        e.sort(function (e, r) {
          var t = compareDocumentPosition(e, r)
          if (t & 2) {
            return -1
          } else if (t & 4) {
            return 1
          }
          return 0
        })
        return e
      }
      r.uniqueSort = uniqueSort
    },
    5861: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, r, t, a) {
              if (a === undefined) a = t
              Object.defineProperty(e, a, {
                enumerable: true,
                get: function () {
                  return r[t]
                },
              })
            }
          : function (e, r, t, a) {
              if (a === undefined) a = t
              e[a] = r[t]
            })
      var n =
        (this && this.__exportStar) ||
        function (e, r) {
          for (var t in e)
            if (t !== 'default' && !Object.prototype.hasOwnProperty.call(r, t))
              a(r, e, t)
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.hasChildren =
        r.isDocument =
        r.isComment =
        r.isText =
        r.isCDATA =
        r.isTag =
          void 0
      n(t(3930), r)
      n(t(8298), r)
      n(t(1655), r)
      n(t(8929), r)
      n(t(7102), r)
      n(t(5509), r)
      n(t(3442), r)
      var i = t(2472)
      Object.defineProperty(r, 'isTag', {
        enumerable: true,
        get: function () {
          return i.isTag
        },
      })
      Object.defineProperty(r, 'isCDATA', {
        enumerable: true,
        get: function () {
          return i.isCDATA
        },
      })
      Object.defineProperty(r, 'isText', {
        enumerable: true,
        get: function () {
          return i.isText
        },
      })
      Object.defineProperty(r, 'isComment', {
        enumerable: true,
        get: function () {
          return i.isComment
        },
      })
      Object.defineProperty(r, 'isDocument', {
        enumerable: true,
        get: function () {
          return i.isDocument
        },
      })
      Object.defineProperty(r, 'hasChildren', {
        enumerable: true,
        get: function () {
          return i.hasChildren
        },
      })
    },
    7102: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.getElementsByTagType =
        r.getElementsByTagName =
        r.getElementById =
        r.getElements =
        r.testElement =
          void 0
      var a = t(2472)
      var n = t(8929)
      var i = {
        tag_name: function (e) {
          if (typeof e === 'function') {
            return function (r) {
              return (0, a.isTag)(r) && e(r.name)
            }
          } else if (e === '*') {
            return a.isTag
          }
          return function (r) {
            return (0, a.isTag)(r) && r.name === e
          }
        },
        tag_type: function (e) {
          if (typeof e === 'function') {
            return function (r) {
              return e(r.type)
            }
          }
          return function (r) {
            return r.type === e
          }
        },
        tag_contains: function (e) {
          if (typeof e === 'function') {
            return function (r) {
              return (0, a.isText)(r) && e(r.data)
            }
          }
          return function (r) {
            return (0, a.isText)(r) && r.data === e
          }
        },
      }
      function getAttribCheck(e, r) {
        if (typeof r === 'function') {
          return function (t) {
            return (0, a.isTag)(t) && r(t.attribs[e])
          }
        }
        return function (t) {
          return (0, a.isTag)(t) && t.attribs[e] === r
        }
      }
      function combineFuncs(e, r) {
        return function (t) {
          return e(t) || r(t)
        }
      }
      function compileTest(e) {
        var r = Object.keys(e).map(function (r) {
          var t = e[r]
          return Object.prototype.hasOwnProperty.call(i, r)
            ? i[r](t)
            : getAttribCheck(r, t)
        })
        return r.length === 0 ? null : r.reduce(combineFuncs)
      }
      function testElement(e, r) {
        var t = compileTest(e)
        return t ? t(r) : true
      }
      r.testElement = testElement
      function getElements(e, r, t, a) {
        if (a === void 0) {
          a = Infinity
        }
        var i = compileTest(e)
        return i ? (0, n.filter)(i, r, t, a) : []
      }
      r.getElements = getElements
      function getElementById(e, r, t) {
        if (t === void 0) {
          t = true
        }
        if (!Array.isArray(r)) r = [r]
        return (0, n.findOne)(getAttribCheck('id', e), r, t)
      }
      r.getElementById = getElementById
      function getElementsByTagName(e, r, t, a) {
        if (t === void 0) {
          t = true
        }
        if (a === void 0) {
          a = Infinity
        }
        return (0, n.filter)(i.tag_name(e), r, t, a)
      }
      r.getElementsByTagName = getElementsByTagName
      function getElementsByTagType(e, r, t, a) {
        if (t === void 0) {
          t = true
        }
        if (a === void 0) {
          a = Infinity
        }
        return (0, n.filter)(i.tag_type(e), r, t, a)
      }
      r.getElementsByTagType = getElementsByTagType
    },
    1655: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.prepend =
        r.prependChild =
        r.append =
        r.appendChild =
        r.replaceElement =
        r.removeElement =
          void 0
      function removeElement(e) {
        if (e.prev) e.prev.next = e.next
        if (e.next) e.next.prev = e.prev
        if (e.parent) {
          var r = e.parent.children
          r.splice(r.lastIndexOf(e), 1)
        }
      }
      r.removeElement = removeElement
      function replaceElement(e, r) {
        var t = (r.prev = e.prev)
        if (t) {
          t.next = r
        }
        var a = (r.next = e.next)
        if (a) {
          a.prev = r
        }
        var n = (r.parent = e.parent)
        if (n) {
          var i = n.children
          i[i.lastIndexOf(e)] = r
        }
      }
      r.replaceElement = replaceElement
      function appendChild(e, r) {
        removeElement(r)
        r.next = null
        r.parent = e
        if (e.children.push(r) > 1) {
          var t = e.children[e.children.length - 2]
          t.next = r
          r.prev = t
        } else {
          r.prev = null
        }
      }
      r.appendChild = appendChild
      function append(e, r) {
        removeElement(r)
        var t = e.parent
        var a = e.next
        r.next = a
        r.prev = e
        e.next = r
        r.parent = t
        if (a) {
          a.prev = r
          if (t) {
            var n = t.children
            n.splice(n.lastIndexOf(a), 0, r)
          }
        } else if (t) {
          t.children.push(r)
        }
      }
      r.append = append
      function prependChild(e, r) {
        removeElement(r)
        r.parent = e
        r.prev = null
        if (e.children.unshift(r) !== 1) {
          var t = e.children[1]
          t.prev = r
          r.next = t
        } else {
          r.next = null
        }
      }
      r.prependChild = prependChild
      function prepend(e, r) {
        removeElement(r)
        var t = e.parent
        if (t) {
          var a = t.children
          a.splice(a.indexOf(e), 0, r)
        }
        if (e.prev) {
          e.prev.next = r
        }
        r.parent = t
        r.prev = e.prev
        r.next = e
        e.prev = r
      }
      r.prepend = prepend
    },
    8929: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.findAll =
        r.existsOne =
        r.findOne =
        r.findOneChild =
        r.find =
        r.filter =
          void 0
      var a = t(2472)
      function filter(e, r, t, a) {
        if (t === void 0) {
          t = true
        }
        if (a === void 0) {
          a = Infinity
        }
        if (!Array.isArray(r)) r = [r]
        return find(e, r, t, a)
      }
      r.filter = filter
      function find(e, r, t, n) {
        var i = []
        for (var o = 0, s = r; o < s.length; o++) {
          var u = s[o]
          if (e(u)) {
            i.push(u)
            if (--n <= 0) break
          }
          if (t && (0, a.hasChildren)(u) && u.children.length > 0) {
            var l = find(e, u.children, t, n)
            i.push.apply(i, l)
            n -= l.length
            if (n <= 0) break
          }
        }
        return i
      }
      r.find = find
      function findOneChild(e, r) {
        return r.find(e)
      }
      r.findOneChild = findOneChild
      function findOne(e, r, t) {
        if (t === void 0) {
          t = true
        }
        var n = null
        for (var i = 0; i < r.length && !n; i++) {
          var o = r[i]
          if (!(0, a.isTag)(o)) {
            continue
          } else if (e(o)) {
            n = o
          } else if (t && o.children.length > 0) {
            n = findOne(e, o.children)
          }
        }
        return n
      }
      r.findOne = findOne
      function existsOne(e, r) {
        return r.some(function (r) {
          return (
            (0, a.isTag)(r) &&
            (e(r) || (r.children.length > 0 && existsOne(e, r.children)))
          )
        })
      }
      r.existsOne = existsOne
      function findAll(e, r) {
        var t
        var n = []
        var i = r.filter(a.isTag)
        var o
        while ((o = i.shift())) {
          var s =
            (t = o.children) === null || t === void 0
              ? void 0
              : t.filter(a.isTag)
          if (s && s.length > 0) {
            i.unshift.apply(i, s)
          }
          if (e(o)) n.push(o)
        }
        return n
      }
      r.findAll = findAll
    },
    3930: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.innerText =
        r.textContent =
        r.getText =
        r.getInnerHTML =
        r.getOuterHTML =
          void 0
      var n = t(2472)
      var i = a(t(4614))
      var o = t(9391)
      function getOuterHTML(e, r) {
        return (0, i.default)(e, r)
      }
      r.getOuterHTML = getOuterHTML
      function getInnerHTML(e, r) {
        return (0, n.hasChildren)(e)
          ? e.children
              .map(function (e) {
                return getOuterHTML(e, r)
              })
              .join('')
          : ''
      }
      r.getInnerHTML = getInnerHTML
      function getText(e) {
        if (Array.isArray(e)) return e.map(getText).join('')
        if ((0, n.isTag)(e)) return e.name === 'br' ? '\n' : getText(e.children)
        if ((0, n.isCDATA)(e)) return getText(e.children)
        if ((0, n.isText)(e)) return e.data
        return ''
      }
      r.getText = getText
      function textContent(e) {
        if (Array.isArray(e)) return e.map(textContent).join('')
        if ((0, n.hasChildren)(e) && !(0, n.isComment)(e)) {
          return textContent(e.children)
        }
        if ((0, n.isText)(e)) return e.data
        return ''
      }
      r.textContent = textContent
      function innerText(e) {
        if (Array.isArray(e)) return e.map(innerText).join('')
        if (
          (0, n.hasChildren)(e) &&
          (e.type === o.ElementType.Tag || (0, n.isCDATA)(e))
        ) {
          return innerText(e.children)
        }
        if ((0, n.isText)(e)) return e.data
        return ''
      }
      r.innerText = innerText
    },
    8298: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.prevElementSibling =
        r.nextElementSibling =
        r.getName =
        r.hasAttrib =
        r.getAttributeValue =
        r.getSiblings =
        r.getParent =
        r.getChildren =
          void 0
      var a = t(2472)
      var n = []
      function getChildren(e) {
        var r
        return (r = e.children) !== null && r !== void 0 ? r : n
      }
      r.getChildren = getChildren
      function getParent(e) {
        return e.parent || null
      }
      r.getParent = getParent
      function getSiblings(e) {
        var r, t
        var a = getParent(e)
        if (a != null) return getChildren(a)
        var n = [e]
        var i = e.prev,
          o = e.next
        while (i != null) {
          n.unshift(i)
          ;(r = i), (i = r.prev)
        }
        while (o != null) {
          n.push(o)
          ;(t = o), (o = t.next)
        }
        return n
      }
      r.getSiblings = getSiblings
      function getAttributeValue(e, r) {
        var t
        return (t = e.attribs) === null || t === void 0 ? void 0 : t[r]
      }
      r.getAttributeValue = getAttributeValue
      function hasAttrib(e, r) {
        return (
          e.attribs != null &&
          Object.prototype.hasOwnProperty.call(e.attribs, r) &&
          e.attribs[r] != null
        )
      }
      r.hasAttrib = hasAttrib
      function getName(e) {
        return e.name
      }
      r.getName = getName
      function nextElementSibling(e) {
        var r
        var t = e.next
        while (t !== null && !(0, a.isTag)(t)) (r = t), (t = r.next)
        return t
      }
      r.nextElementSibling = nextElementSibling
      function prevElementSibling(e) {
        var r
        var t = e.prev
        while (t !== null && !(0, a.isTag)(t)) (r = t), (t = r.prev)
        return t
      }
      r.prevElementSibling = prevElementSibling
    },
    6674: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var n = a(t(1859))
      var i = a(t(2128))
      var o = a(t(4931))
      var s = a(t(9281))
      r.decodeXML = getStrictDecoder(o.default)
      r.decodeHTMLStrict = getStrictDecoder(n.default)
      function getStrictDecoder(e) {
        var r = Object.keys(e).join('|')
        var t = getReplacer(e)
        r += '|#[xX][\\da-fA-F]+|#\\d+'
        var a = new RegExp('&(?:' + r + ');', 'g')
        return function (e) {
          return String(e).replace(a, t)
        }
      }
      var sorter = function (e, r) {
        return e < r ? 1 : -1
      }
      r.decodeHTML = (function () {
        var e = Object.keys(i.default).sort(sorter)
        var r = Object.keys(n.default).sort(sorter)
        for (var t = 0, a = 0; t < r.length; t++) {
          if (e[a] === r[t]) {
            r[t] += ';?'
            a++
          } else {
            r[t] += ';'
          }
        }
        var o = new RegExp(
          '&(?:' + r.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
          'g'
        )
        var s = getReplacer(n.default)
        function replacer(e) {
          if (e.substr(-1) !== ';') e += ';'
          return s(e)
        }
        return function (e) {
          return String(e).replace(o, replacer)
        }
      })()
      function getReplacer(e) {
        return function replace(r) {
          if (r.charAt(1) === '#') {
            if (r.charAt(2) === 'X' || r.charAt(2) === 'x') {
              return s.default(parseInt(r.substr(3), 16))
            }
            return s.default(parseInt(r.substr(2), 10))
          }
          return e[r.slice(1, -1)]
        }
      }
    },
    9281: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var n = a(t(7971))
      function decodeCodePoint(e) {
        if ((e >= 55296 && e <= 57343) || e > 1114111) {
          return '�'
        }
        if (e in n.default) {
          e = n.default[e]
        }
        var r = ''
        if (e > 65535) {
          e -= 65536
          r += String.fromCharCode(((e >>> 10) & 1023) | 55296)
          e = 56320 | (e & 1023)
        }
        r += String.fromCharCode(e)
        return r
      }
      r['default'] = decodeCodePoint
    },
    6032: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var n = a(t(4931))
      var i = getInverseObj(n.default)
      var o = getInverseReplacer(i)
      r.encodeXML = getInverse(i, o)
      var s = a(t(1859))
      var u = getInverseObj(s.default)
      var l = getInverseReplacer(u)
      r.encodeHTML = getInverse(u, l)
      function getInverseObj(e) {
        return Object.keys(e)
          .sort()
          .reduce(function (r, t) {
            r[e[t]] = '&' + t + ';'
            return r
          }, {})
      }
      function getInverseReplacer(e) {
        var r = []
        var t = []
        Object.keys(e).forEach(function (e) {
          return e.length === 1 ? r.push('\\' + e) : t.push(e)
        })
        t.unshift('[' + r.join('') + ']')
        return new RegExp(t.join('|'), 'g')
      }
      var c = /[^\0-\x7F]/g
      var p = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
      function singleCharReplacer(e) {
        return '&#x' + e.charCodeAt(0).toString(16).toUpperCase() + ';'
      }
      function astralReplacer(e, r) {
        var t = e.charCodeAt(0)
        var a = e.charCodeAt(1)
        var n = (t - 55296) * 1024 + a - 56320 + 65536
        return '&#x' + n.toString(16).toUpperCase() + ';'
      }
      function getInverse(e, r) {
        return function (t) {
          return t
            .replace(r, function (r) {
              return e[r]
            })
            .replace(p, astralReplacer)
            .replace(c, singleCharReplacer)
        }
      }
      var d = getInverseReplacer(i)
      function escape(e) {
        return e
          .replace(d, singleCharReplacer)
          .replace(p, astralReplacer)
          .replace(c, singleCharReplacer)
      }
      r.escape = escape
    },
    9280: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      var a = t(6674)
      var n = t(6032)
      function decode(e, r) {
        return (!r || r <= 0 ? a.decodeXML : a.decodeHTML)(e)
      }
      r.decode = decode
      function decodeStrict(e, r) {
        return (!r || r <= 0 ? a.decodeXML : a.decodeHTMLStrict)(e)
      }
      r.decodeStrict = decodeStrict
      function encode(e, r) {
        return (!r || r <= 0 ? n.encodeXML : n.encodeHTML)(e)
      }
      r.encode = encode
      var i = t(6032)
      r.encodeXML = i.encodeXML
      r.encodeHTML = i.encodeHTML
      r.escape = i.escape
      r.encodeHTML4 = i.encodeHTML
      r.encodeHTML5 = i.encodeHTML
      var o = t(6674)
      r.decodeXML = o.decodeXML
      r.decodeHTML = o.decodeHTML
      r.decodeHTMLStrict = o.decodeHTMLStrict
      r.decodeHTML4 = o.decodeHTML
      r.decodeHTML5 = o.decodeHTML
      r.decodeHTML4Strict = o.decodeHTMLStrict
      r.decodeHTML5Strict = o.decodeHTMLStrict
      r.decodeXMLStrict = o.decodeXML
    },
    5902: function (e, r, t) {
      e = t.nmd(e)
      /*! https://mths.be/he v1.2.0 by @mathias | MIT license */ ;(function (
        t
      ) {
        var a = true && r
        var n = true && e && e.exports == a && e
        var i = typeof global == 'object' && global
        if (i.global === i || i.window === i) {
          t = i
        }
        var o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
        var s = /[\x01-\x7F]/g
        var u = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
        var l =
          /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g
        var c = {
          '­': 'shy',
          '‌': 'zwnj',
          '‍': 'zwj',
          '‎': 'lrm',
          '⁣': 'ic',
          '⁢': 'it',
          '⁡': 'af',
          '‏': 'rlm',
          '​': 'ZeroWidthSpace',
          '⁠': 'NoBreak',
          '̑': 'DownBreve',
          '⃛': 'tdot',
          '⃜': 'DotDot',
          '\t': 'Tab',
          '\n': 'NewLine',
          ' ': 'puncsp',
          ' ': 'MediumSpace',
          ' ': 'thinsp',
          ' ': 'hairsp',
          ' ': 'emsp13',
          ' ': 'ensp',
          ' ': 'emsp14',
          ' ': 'emsp',
          ' ': 'numsp',
          ' ': 'nbsp',
          '  ': 'ThickSpace',
          '‾': 'oline',
          _: 'lowbar',
          '‐': 'dash',
          '–': 'ndash',
          '—': 'mdash',
          '―': 'horbar',
          ',': 'comma',
          ';': 'semi',
          '⁏': 'bsemi',
          ':': 'colon',
          '⩴': 'Colone',
          '!': 'excl',
          '¡': 'iexcl',
          '?': 'quest',
          '¿': 'iquest',
          '.': 'period',
          '‥': 'nldr',
          '…': 'mldr',
          '·': 'middot',
          "'": 'apos',
          '‘': 'lsquo',
          '’': 'rsquo',
          '‚': 'sbquo',
          '‹': 'lsaquo',
          '›': 'rsaquo',
          '"': 'quot',
          '“': 'ldquo',
          '”': 'rdquo',
          '„': 'bdquo',
          '«': 'laquo',
          '»': 'raquo',
          '(': 'lpar',
          ')': 'rpar',
          '[': 'lsqb',
          ']': 'rsqb',
          '{': 'lcub',
          '}': 'rcub',
          '⌈': 'lceil',
          '⌉': 'rceil',
          '⌊': 'lfloor',
          '⌋': 'rfloor',
          '⦅': 'lopar',
          '⦆': 'ropar',
          '⦋': 'lbrke',
          '⦌': 'rbrke',
          '⦍': 'lbrkslu',
          '⦎': 'rbrksld',
          '⦏': 'lbrksld',
          '⦐': 'rbrkslu',
          '⦑': 'langd',
          '⦒': 'rangd',
          '⦓': 'lparlt',
          '⦔': 'rpargt',
          '⦕': 'gtlPar',
          '⦖': 'ltrPar',
          '⟦': 'lobrk',
          '⟧': 'robrk',
          '⟨': 'lang',
          '⟩': 'rang',
          '⟪': 'Lang',
          '⟫': 'Rang',
          '⟬': 'loang',
          '⟭': 'roang',
          '❲': 'lbbrk',
          '❳': 'rbbrk',
          '‖': 'Vert',
          '§': 'sect',
          '¶': 'para',
          '@': 'commat',
          '*': 'ast',
          '/': 'sol',
          undefined: null,
          '&': 'amp',
          '#': 'num',
          '%': 'percnt',
          '‰': 'permil',
          '‱': 'pertenk',
          '†': 'dagger',
          '‡': 'Dagger',
          '•': 'bull',
          '⁃': 'hybull',
          '′': 'prime',
          '″': 'Prime',
          '‴': 'tprime',
          '⁗': 'qprime',
          '‵': 'bprime',
          '⁁': 'caret',
          '`': 'grave',
          '´': 'acute',
          '˜': 'tilde',
          '^': 'Hat',
          '¯': 'macr',
          '˘': 'breve',
          '˙': 'dot',
          '¨': 'die',
          '˚': 'ring',
          '˝': 'dblac',
          '¸': 'cedil',
          '˛': 'ogon',
          ˆ: 'circ',
          ˇ: 'caron',
          '°': 'deg',
          '©': 'copy',
          '®': 'reg',
          '℗': 'copysr',
          '℘': 'wp',
          '℞': 'rx',
          '℧': 'mho',
          '℩': 'iiota',
          '←': 'larr',
          '↚': 'nlarr',
          '→': 'rarr',
          '↛': 'nrarr',
          '↑': 'uarr',
          '↓': 'darr',
          '↔': 'harr',
          '↮': 'nharr',
          '↕': 'varr',
          '↖': 'nwarr',
          '↗': 'nearr',
          '↘': 'searr',
          '↙': 'swarr',
          '↝': 'rarrw',
          '↝̸': 'nrarrw',
          '↞': 'Larr',
          '↟': 'Uarr',
          '↠': 'Rarr',
          '↡': 'Darr',
          '↢': 'larrtl',
          '↣': 'rarrtl',
          '↤': 'mapstoleft',
          '↥': 'mapstoup',
          '↦': 'map',
          '↧': 'mapstodown',
          '↩': 'larrhk',
          '↪': 'rarrhk',
          '↫': 'larrlp',
          '↬': 'rarrlp',
          '↭': 'harrw',
          '↰': 'lsh',
          '↱': 'rsh',
          '↲': 'ldsh',
          '↳': 'rdsh',
          '↵': 'crarr',
          '↶': 'cularr',
          '↷': 'curarr',
          '↺': 'olarr',
          '↻': 'orarr',
          '↼': 'lharu',
          '↽': 'lhard',
          '↾': 'uharr',
          '↿': 'uharl',
          '⇀': 'rharu',
          '⇁': 'rhard',
          '⇂': 'dharr',
          '⇃': 'dharl',
          '⇄': 'rlarr',
          '⇅': 'udarr',
          '⇆': 'lrarr',
          '⇇': 'llarr',
          '⇈': 'uuarr',
          '⇉': 'rrarr',
          '⇊': 'ddarr',
          '⇋': 'lrhar',
          '⇌': 'rlhar',
          '⇐': 'lArr',
          '⇍': 'nlArr',
          '⇑': 'uArr',
          '⇒': 'rArr',
          '⇏': 'nrArr',
          '⇓': 'dArr',
          '⇔': 'iff',
          '⇎': 'nhArr',
          '⇕': 'vArr',
          '⇖': 'nwArr',
          '⇗': 'neArr',
          '⇘': 'seArr',
          '⇙': 'swArr',
          '⇚': 'lAarr',
          '⇛': 'rAarr',
          '⇝': 'zigrarr',
          '⇤': 'larrb',
          '⇥': 'rarrb',
          '⇵': 'duarr',
          '⇽': 'loarr',
          '⇾': 'roarr',
          '⇿': 'hoarr',
          '∀': 'forall',
          '∁': 'comp',
          '∂': 'part',
          '∂̸': 'npart',
          '∃': 'exist',
          '∄': 'nexist',
          '∅': 'empty',
          '∇': 'Del',
          '∈': 'in',
          '∉': 'notin',
          '∋': 'ni',
          '∌': 'notni',
          '϶': 'bepsi',
          '∏': 'prod',
          '∐': 'coprod',
          '∑': 'sum',
          '+': 'plus',
          '±': 'pm',
          '÷': 'div',
          '×': 'times',
          '<': 'lt',
          '≮': 'nlt',
          '<⃒': 'nvlt',
          '=': 'equals',
          '≠': 'ne',
          '=⃥': 'bne',
          '⩵': 'Equal',
          '>': 'gt',
          '≯': 'ngt',
          '>⃒': 'nvgt',
          '¬': 'not',
          '|': 'vert',
          '¦': 'brvbar',
          '−': 'minus',
          '∓': 'mp',
          '∔': 'plusdo',
          '⁄': 'frasl',
          '∖': 'setmn',
          '∗': 'lowast',
          '∘': 'compfn',
          '√': 'Sqrt',
          '∝': 'prop',
          '∞': 'infin',
          '∟': 'angrt',
          '∠': 'ang',
          '∠⃒': 'nang',
          '∡': 'angmsd',
          '∢': 'angsph',
          '∣': 'mid',
          '∤': 'nmid',
          '∥': 'par',
          '∦': 'npar',
          '∧': 'and',
          '∨': 'or',
          '∩': 'cap',
          '∩︀': 'caps',
          '∪': 'cup',
          '∪︀': 'cups',
          '∫': 'int',
          '∬': 'Int',
          '∭': 'tint',
          '⨌': 'qint',
          '∮': 'oint',
          '∯': 'Conint',
          '∰': 'Cconint',
          '∱': 'cwint',
          '∲': 'cwconint',
          '∳': 'awconint',
          '∴': 'there4',
          '∵': 'becaus',
          '∶': 'ratio',
          '∷': 'Colon',
          '∸': 'minusd',
          '∺': 'mDDot',
          '∻': 'homtht',
          '∼': 'sim',
          '≁': 'nsim',
          '∼⃒': 'nvsim',
          '∽': 'bsim',
          '∽̱': 'race',
          '∾': 'ac',
          '∾̳': 'acE',
          '∿': 'acd',
          '≀': 'wr',
          '≂': 'esim',
          '≂̸': 'nesim',
          '≃': 'sime',
          '≄': 'nsime',
          '≅': 'cong',
          '≇': 'ncong',
          '≆': 'simne',
          '≈': 'ap',
          '≉': 'nap',
          '≊': 'ape',
          '≋': 'apid',
          '≋̸': 'napid',
          '≌': 'bcong',
          '≍': 'CupCap',
          '≭': 'NotCupCap',
          '≍⃒': 'nvap',
          '≎': 'bump',
          '≎̸': 'nbump',
          '≏': 'bumpe',
          '≏̸': 'nbumpe',
          '≐': 'doteq',
          '≐̸': 'nedot',
          '≑': 'eDot',
          '≒': 'efDot',
          '≓': 'erDot',
          '≔': 'colone',
          '≕': 'ecolon',
          '≖': 'ecir',
          '≗': 'cire',
          '≙': 'wedgeq',
          '≚': 'veeeq',
          '≜': 'trie',
          '≟': 'equest',
          '≡': 'equiv',
          '≢': 'nequiv',
          '≡⃥': 'bnequiv',
          '≤': 'le',
          '≰': 'nle',
          '≤⃒': 'nvle',
          '≥': 'ge',
          '≱': 'nge',
          '≥⃒': 'nvge',
          '≦': 'lE',
          '≦̸': 'nlE',
          '≧': 'gE',
          '≧̸': 'ngE',
          '≨︀': 'lvnE',
          '≨': 'lnE',
          '≩': 'gnE',
          '≩︀': 'gvnE',
          '≪': 'll',
          '≪̸': 'nLtv',
          '≪⃒': 'nLt',
          '≫': 'gg',
          '≫̸': 'nGtv',
          '≫⃒': 'nGt',
          '≬': 'twixt',
          '≲': 'lsim',
          '≴': 'nlsim',
          '≳': 'gsim',
          '≵': 'ngsim',
          '≶': 'lg',
          '≸': 'ntlg',
          '≷': 'gl',
          '≹': 'ntgl',
          '≺': 'pr',
          '⊀': 'npr',
          '≻': 'sc',
          '⊁': 'nsc',
          '≼': 'prcue',
          '⋠': 'nprcue',
          '≽': 'sccue',
          '⋡': 'nsccue',
          '≾': 'prsim',
          '≿': 'scsim',
          '≿̸': 'NotSucceedsTilde',
          '⊂': 'sub',
          '⊄': 'nsub',
          '⊂⃒': 'vnsub',
          '⊃': 'sup',
          '⊅': 'nsup',
          '⊃⃒': 'vnsup',
          '⊆': 'sube',
          '⊈': 'nsube',
          '⊇': 'supe',
          '⊉': 'nsupe',
          '⊊︀': 'vsubne',
          '⊊': 'subne',
          '⊋︀': 'vsupne',
          '⊋': 'supne',
          '⊍': 'cupdot',
          '⊎': 'uplus',
          '⊏': 'sqsub',
          '⊏̸': 'NotSquareSubset',
          '⊐': 'sqsup',
          '⊐̸': 'NotSquareSuperset',
          '⊑': 'sqsube',
          '⋢': 'nsqsube',
          '⊒': 'sqsupe',
          '⋣': 'nsqsupe',
          '⊓': 'sqcap',
          '⊓︀': 'sqcaps',
          '⊔': 'sqcup',
          '⊔︀': 'sqcups',
          '⊕': 'oplus',
          '⊖': 'ominus',
          '⊗': 'otimes',
          '⊘': 'osol',
          '⊙': 'odot',
          '⊚': 'ocir',
          '⊛': 'oast',
          '⊝': 'odash',
          '⊞': 'plusb',
          '⊟': 'minusb',
          '⊠': 'timesb',
          '⊡': 'sdotb',
          '⊢': 'vdash',
          '⊬': 'nvdash',
          '⊣': 'dashv',
          '⊤': 'top',
          '⊥': 'bot',
          '⊧': 'models',
          '⊨': 'vDash',
          '⊭': 'nvDash',
          '⊩': 'Vdash',
          '⊮': 'nVdash',
          '⊪': 'Vvdash',
          '⊫': 'VDash',
          '⊯': 'nVDash',
          '⊰': 'prurel',
          '⊲': 'vltri',
          '⋪': 'nltri',
          '⊳': 'vrtri',
          '⋫': 'nrtri',
          '⊴': 'ltrie',
          '⋬': 'nltrie',
          '⊴⃒': 'nvltrie',
          '⊵': 'rtrie',
          '⋭': 'nrtrie',
          '⊵⃒': 'nvrtrie',
          '⊶': 'origof',
          '⊷': 'imof',
          '⊸': 'mumap',
          '⊹': 'hercon',
          '⊺': 'intcal',
          '⊻': 'veebar',
          '⊽': 'barvee',
          '⊾': 'angrtvb',
          '⊿': 'lrtri',
          '⋀': 'Wedge',
          '⋁': 'Vee',
          '⋂': 'xcap',
          '⋃': 'xcup',
          '⋄': 'diam',
          '⋅': 'sdot',
          '⋆': 'Star',
          '⋇': 'divonx',
          '⋈': 'bowtie',
          '⋉': 'ltimes',
          '⋊': 'rtimes',
          '⋋': 'lthree',
          '⋌': 'rthree',
          '⋍': 'bsime',
          '⋎': 'cuvee',
          '⋏': 'cuwed',
          '⋐': 'Sub',
          '⋑': 'Sup',
          '⋒': 'Cap',
          '⋓': 'Cup',
          '⋔': 'fork',
          '⋕': 'epar',
          '⋖': 'ltdot',
          '⋗': 'gtdot',
          '⋘': 'Ll',
          '⋘̸': 'nLl',
          '⋙': 'Gg',
          '⋙̸': 'nGg',
          '⋚︀': 'lesg',
          '⋚': 'leg',
          '⋛': 'gel',
          '⋛︀': 'gesl',
          '⋞': 'cuepr',
          '⋟': 'cuesc',
          '⋦': 'lnsim',
          '⋧': 'gnsim',
          '⋨': 'prnsim',
          '⋩': 'scnsim',
          '⋮': 'vellip',
          '⋯': 'ctdot',
          '⋰': 'utdot',
          '⋱': 'dtdot',
          '⋲': 'disin',
          '⋳': 'isinsv',
          '⋴': 'isins',
          '⋵': 'isindot',
          '⋵̸': 'notindot',
          '⋶': 'notinvc',
          '⋷': 'notinvb',
          '⋹': 'isinE',
          '⋹̸': 'notinE',
          '⋺': 'nisd',
          '⋻': 'xnis',
          '⋼': 'nis',
          '⋽': 'notnivc',
          '⋾': 'notnivb',
          '⌅': 'barwed',
          '⌆': 'Barwed',
          '⌌': 'drcrop',
          '⌍': 'dlcrop',
          '⌎': 'urcrop',
          '⌏': 'ulcrop',
          '⌐': 'bnot',
          '⌒': 'profline',
          '⌓': 'profsurf',
          '⌕': 'telrec',
          '⌖': 'target',
          '⌜': 'ulcorn',
          '⌝': 'urcorn',
          '⌞': 'dlcorn',
          '⌟': 'drcorn',
          '⌢': 'frown',
          '⌣': 'smile',
          '⌭': 'cylcty',
          '⌮': 'profalar',
          '⌶': 'topbot',
          '⌽': 'ovbar',
          '⌿': 'solbar',
          '⍼': 'angzarr',
          '⎰': 'lmoust',
          '⎱': 'rmoust',
          '⎴': 'tbrk',
          '⎵': 'bbrk',
          '⎶': 'bbrktbrk',
          '⏜': 'OverParenthesis',
          '⏝': 'UnderParenthesis',
          '⏞': 'OverBrace',
          '⏟': 'UnderBrace',
          '⏢': 'trpezium',
          '⏧': 'elinters',
          '␣': 'blank',
          '─': 'boxh',
          '│': 'boxv',
          '┌': 'boxdr',
          '┐': 'boxdl',
          '└': 'boxur',
          '┘': 'boxul',
          '├': 'boxvr',
          '┤': 'boxvl',
          '┬': 'boxhd',
          '┴': 'boxhu',
          '┼': 'boxvh',
          '═': 'boxH',
          '║': 'boxV',
          '╒': 'boxdR',
          '╓': 'boxDr',
          '╔': 'boxDR',
          '╕': 'boxdL',
          '╖': 'boxDl',
          '╗': 'boxDL',
          '╘': 'boxuR',
          '╙': 'boxUr',
          '╚': 'boxUR',
          '╛': 'boxuL',
          '╜': 'boxUl',
          '╝': 'boxUL',
          '╞': 'boxvR',
          '╟': 'boxVr',
          '╠': 'boxVR',
          '╡': 'boxvL',
          '╢': 'boxVl',
          '╣': 'boxVL',
          '╤': 'boxHd',
          '╥': 'boxhD',
          '╦': 'boxHD',
          '╧': 'boxHu',
          '╨': 'boxhU',
          '╩': 'boxHU',
          '╪': 'boxvH',
          '╫': 'boxVh',
          '╬': 'boxVH',
          '▀': 'uhblk',
          '▄': 'lhblk',
          '█': 'block',
          '░': 'blk14',
          '▒': 'blk12',
          '▓': 'blk34',
          '□': 'squ',
          '▪': 'squf',
          '▫': 'EmptyVerySmallSquare',
          '▭': 'rect',
          '▮': 'marker',
          '▱': 'fltns',
          '△': 'xutri',
          '▴': 'utrif',
          '▵': 'utri',
          '▸': 'rtrif',
          '▹': 'rtri',
          '▽': 'xdtri',
          '▾': 'dtrif',
          '▿': 'dtri',
          '◂': 'ltrif',
          '◃': 'ltri',
          '◊': 'loz',
          '○': 'cir',
          '◬': 'tridot',
          '◯': 'xcirc',
          '◸': 'ultri',
          '◹': 'urtri',
          '◺': 'lltri',
          '◻': 'EmptySmallSquare',
          '◼': 'FilledSmallSquare',
          '★': 'starf',
          '☆': 'star',
          '☎': 'phone',
          '♀': 'female',
          '♂': 'male',
          '♠': 'spades',
          '♣': 'clubs',
          '♥': 'hearts',
          '♦': 'diams',
          '♪': 'sung',
          '✓': 'check',
          '✗': 'cross',
          '✠': 'malt',
          '✶': 'sext',
          '❘': 'VerticalSeparator',
          '⟈': 'bsolhsub',
          '⟉': 'suphsol',
          '⟵': 'xlarr',
          '⟶': 'xrarr',
          '⟷': 'xharr',
          '⟸': 'xlArr',
          '⟹': 'xrArr',
          '⟺': 'xhArr',
          '⟼': 'xmap',
          '⟿': 'dzigrarr',
          '⤂': 'nvlArr',
          '⤃': 'nvrArr',
          '⤄': 'nvHarr',
          '⤅': 'Map',
          '⤌': 'lbarr',
          '⤍': 'rbarr',
          '⤎': 'lBarr',
          '⤏': 'rBarr',
          '⤐': 'RBarr',
          '⤑': 'DDotrahd',
          '⤒': 'UpArrowBar',
          '⤓': 'DownArrowBar',
          '⤖': 'Rarrtl',
          '⤙': 'latail',
          '⤚': 'ratail',
          '⤛': 'lAtail',
          '⤜': 'rAtail',
          '⤝': 'larrfs',
          '⤞': 'rarrfs',
          '⤟': 'larrbfs',
          '⤠': 'rarrbfs',
          '⤣': 'nwarhk',
          '⤤': 'nearhk',
          '⤥': 'searhk',
          '⤦': 'swarhk',
          '⤧': 'nwnear',
          '⤨': 'toea',
          '⤩': 'tosa',
          '⤪': 'swnwar',
          '⤳': 'rarrc',
          '⤳̸': 'nrarrc',
          '⤵': 'cudarrr',
          '⤶': 'ldca',
          '⤷': 'rdca',
          '⤸': 'cudarrl',
          '⤹': 'larrpl',
          '⤼': 'curarrm',
          '⤽': 'cularrp',
          '⥅': 'rarrpl',
          '⥈': 'harrcir',
          '⥉': 'Uarrocir',
          '⥊': 'lurdshar',
          '⥋': 'ldrushar',
          '⥎': 'LeftRightVector',
          '⥏': 'RightUpDownVector',
          '⥐': 'DownLeftRightVector',
          '⥑': 'LeftUpDownVector',
          '⥒': 'LeftVectorBar',
          '⥓': 'RightVectorBar',
          '⥔': 'RightUpVectorBar',
          '⥕': 'RightDownVectorBar',
          '⥖': 'DownLeftVectorBar',
          '⥗': 'DownRightVectorBar',
          '⥘': 'LeftUpVectorBar',
          '⥙': 'LeftDownVectorBar',
          '⥚': 'LeftTeeVector',
          '⥛': 'RightTeeVector',
          '⥜': 'RightUpTeeVector',
          '⥝': 'RightDownTeeVector',
          '⥞': 'DownLeftTeeVector',
          '⥟': 'DownRightTeeVector',
          '⥠': 'LeftUpTeeVector',
          '⥡': 'LeftDownTeeVector',
          '⥢': 'lHar',
          '⥣': 'uHar',
          '⥤': 'rHar',
          '⥥': 'dHar',
          '⥦': 'luruhar',
          '⥧': 'ldrdhar',
          '⥨': 'ruluhar',
          '⥩': 'rdldhar',
          '⥪': 'lharul',
          '⥫': 'llhard',
          '⥬': 'rharul',
          '⥭': 'lrhard',
          '⥮': 'udhar',
          '⥯': 'duhar',
          '⥰': 'RoundImplies',
          '⥱': 'erarr',
          '⥲': 'simrarr',
          '⥳': 'larrsim',
          '⥴': 'rarrsim',
          '⥵': 'rarrap',
          '⥶': 'ltlarr',
          '⥸': 'gtrarr',
          '⥹': 'subrarr',
          '⥻': 'suplarr',
          '⥼': 'lfisht',
          '⥽': 'rfisht',
          '⥾': 'ufisht',
          '⥿': 'dfisht',
          '⦚': 'vzigzag',
          '⦜': 'vangrt',
          '⦝': 'angrtvbd',
          '⦤': 'ange',
          '⦥': 'range',
          '⦦': 'dwangle',
          '⦧': 'uwangle',
          '⦨': 'angmsdaa',
          '⦩': 'angmsdab',
          '⦪': 'angmsdac',
          '⦫': 'angmsdad',
          '⦬': 'angmsdae',
          '⦭': 'angmsdaf',
          '⦮': 'angmsdag',
          '⦯': 'angmsdah',
          '⦰': 'bemptyv',
          '⦱': 'demptyv',
          '⦲': 'cemptyv',
          '⦳': 'raemptyv',
          '⦴': 'laemptyv',
          '⦵': 'ohbar',
          '⦶': 'omid',
          '⦷': 'opar',
          '⦹': 'operp',
          '⦻': 'olcross',
          '⦼': 'odsold',
          '⦾': 'olcir',
          '⦿': 'ofcir',
          '⧀': 'olt',
          '⧁': 'ogt',
          '⧂': 'cirscir',
          '⧃': 'cirE',
          '⧄': 'solb',
          '⧅': 'bsolb',
          '⧉': 'boxbox',
          '⧍': 'trisb',
          '⧎': 'rtriltri',
          '⧏': 'LeftTriangleBar',
          '⧏̸': 'NotLeftTriangleBar',
          '⧐': 'RightTriangleBar',
          '⧐̸': 'NotRightTriangleBar',
          '⧜': 'iinfin',
          '⧝': 'infintie',
          '⧞': 'nvinfin',
          '⧣': 'eparsl',
          '⧤': 'smeparsl',
          '⧥': 'eqvparsl',
          '⧫': 'lozf',
          '⧴': 'RuleDelayed',
          '⧶': 'dsol',
          '⨀': 'xodot',
          '⨁': 'xoplus',
          '⨂': 'xotime',
          '⨄': 'xuplus',
          '⨆': 'xsqcup',
          '⨍': 'fpartint',
          '⨐': 'cirfnint',
          '⨑': 'awint',
          '⨒': 'rppolint',
          '⨓': 'scpolint',
          '⨔': 'npolint',
          '⨕': 'pointint',
          '⨖': 'quatint',
          '⨗': 'intlarhk',
          '⨢': 'pluscir',
          '⨣': 'plusacir',
          '⨤': 'simplus',
          '⨥': 'plusdu',
          '⨦': 'plussim',
          '⨧': 'plustwo',
          '⨩': 'mcomma',
          '⨪': 'minusdu',
          '⨭': 'loplus',
          '⨮': 'roplus',
          '⨯': 'Cross',
          '⨰': 'timesd',
          '⨱': 'timesbar',
          '⨳': 'smashp',
          '⨴': 'lotimes',
          '⨵': 'rotimes',
          '⨶': 'otimesas',
          '⨷': 'Otimes',
          '⨸': 'odiv',
          '⨹': 'triplus',
          '⨺': 'triminus',
          '⨻': 'tritime',
          '⨼': 'iprod',
          '⨿': 'amalg',
          '⩀': 'capdot',
          '⩂': 'ncup',
          '⩃': 'ncap',
          '⩄': 'capand',
          '⩅': 'cupor',
          '⩆': 'cupcap',
          '⩇': 'capcup',
          '⩈': 'cupbrcap',
          '⩉': 'capbrcup',
          '⩊': 'cupcup',
          '⩋': 'capcap',
          '⩌': 'ccups',
          '⩍': 'ccaps',
          '⩐': 'ccupssm',
          '⩓': 'And',
          '⩔': 'Or',
          '⩕': 'andand',
          '⩖': 'oror',
          '⩗': 'orslope',
          '⩘': 'andslope',
          '⩚': 'andv',
          '⩛': 'orv',
          '⩜': 'andd',
          '⩝': 'ord',
          '⩟': 'wedbar',
          '⩦': 'sdote',
          '⩪': 'simdot',
          '⩭': 'congdot',
          '⩭̸': 'ncongdot',
          '⩮': 'easter',
          '⩯': 'apacir',
          '⩰': 'apE',
          '⩰̸': 'napE',
          '⩱': 'eplus',
          '⩲': 'pluse',
          '⩳': 'Esim',
          '⩷': 'eDDot',
          '⩸': 'equivDD',
          '⩹': 'ltcir',
          '⩺': 'gtcir',
          '⩻': 'ltquest',
          '⩼': 'gtquest',
          '⩽': 'les',
          '⩽̸': 'nles',
          '⩾': 'ges',
          '⩾̸': 'nges',
          '⩿': 'lesdot',
          '⪀': 'gesdot',
          '⪁': 'lesdoto',
          '⪂': 'gesdoto',
          '⪃': 'lesdotor',
          '⪄': 'gesdotol',
          '⪅': 'lap',
          '⪆': 'gap',
          '⪇': 'lne',
          '⪈': 'gne',
          '⪉': 'lnap',
          '⪊': 'gnap',
          '⪋': 'lEg',
          '⪌': 'gEl',
          '⪍': 'lsime',
          '⪎': 'gsime',
          '⪏': 'lsimg',
          '⪐': 'gsiml',
          '⪑': 'lgE',
          '⪒': 'glE',
          '⪓': 'lesges',
          '⪔': 'gesles',
          '⪕': 'els',
          '⪖': 'egs',
          '⪗': 'elsdot',
          '⪘': 'egsdot',
          '⪙': 'el',
          '⪚': 'eg',
          '⪝': 'siml',
          '⪞': 'simg',
          '⪟': 'simlE',
          '⪠': 'simgE',
          '⪡': 'LessLess',
          '⪡̸': 'NotNestedLessLess',
          '⪢': 'GreaterGreater',
          '⪢̸': 'NotNestedGreaterGreater',
          '⪤': 'glj',
          '⪥': 'gla',
          '⪦': 'ltcc',
          '⪧': 'gtcc',
          '⪨': 'lescc',
          '⪩': 'gescc',
          '⪪': 'smt',
          '⪫': 'lat',
          '⪬': 'smte',
          '⪬︀': 'smtes',
          '⪭': 'late',
          '⪭︀': 'lates',
          '⪮': 'bumpE',
          '⪯': 'pre',
          '⪯̸': 'npre',
          '⪰': 'sce',
          '⪰̸': 'nsce',
          '⪳': 'prE',
          '⪴': 'scE',
          '⪵': 'prnE',
          '⪶': 'scnE',
          '⪷': 'prap',
          '⪸': 'scap',
          '⪹': 'prnap',
          '⪺': 'scnap',
          '⪻': 'Pr',
          '⪼': 'Sc',
          '⪽': 'subdot',
          '⪾': 'supdot',
          '⪿': 'subplus',
          '⫀': 'supplus',
          '⫁': 'submult',
          '⫂': 'supmult',
          '⫃': 'subedot',
          '⫄': 'supedot',
          '⫅': 'subE',
          '⫅̸': 'nsubE',
          '⫆': 'supE',
          '⫆̸': 'nsupE',
          '⫇': 'subsim',
          '⫈': 'supsim',
          '⫋︀': 'vsubnE',
          '⫋': 'subnE',
          '⫌︀': 'vsupnE',
          '⫌': 'supnE',
          '⫏': 'csub',
          '⫐': 'csup',
          '⫑': 'csube',
          '⫒': 'csupe',
          '⫓': 'subsup',
          '⫔': 'supsub',
          '⫕': 'subsub',
          '⫖': 'supsup',
          '⫗': 'suphsub',
          '⫘': 'supdsub',
          '⫙': 'forkv',
          '⫚': 'topfork',
          '⫛': 'mlcp',
          '⫤': 'Dashv',
          '⫦': 'Vdashl',
          '⫧': 'Barv',
          '⫨': 'vBar',
          '⫩': 'vBarv',
          '⫫': 'Vbar',
          '⫬': 'Not',
          '⫭': 'bNot',
          '⫮': 'rnmid',
          '⫯': 'cirmid',
          '⫰': 'midcir',
          '⫱': 'topcir',
          '⫲': 'nhpar',
          '⫳': 'parsim',
          '⫽': 'parsl',
          '⫽⃥': 'nparsl',
          '♭': 'flat',
          '♮': 'natur',
          '♯': 'sharp',
          '¤': 'curren',
          '¢': 'cent',
          $: 'dollar',
          '£': 'pound',
          '¥': 'yen',
          '€': 'euro',
          '¹': 'sup1',
          '½': 'half',
          '⅓': 'frac13',
          '¼': 'frac14',
          '⅕': 'frac15',
          '⅙': 'frac16',
          '⅛': 'frac18',
          '²': 'sup2',
          '⅔': 'frac23',
          '⅖': 'frac25',
          '³': 'sup3',
          '¾': 'frac34',
          '⅗': 'frac35',
          '⅜': 'frac38',
          '⅘': 'frac45',
          '⅚': 'frac56',
          '⅝': 'frac58',
          '⅞': 'frac78',
          '𝒶': 'ascr',
          '𝕒': 'aopf',
          '𝔞': 'afr',
          '𝔸': 'Aopf',
          '𝔄': 'Afr',
          '𝒜': 'Ascr',
          ª: 'ordf',
          á: 'aacute',
          Á: 'Aacute',
          à: 'agrave',
          À: 'Agrave',
          ă: 'abreve',
          Ă: 'Abreve',
          â: 'acirc',
          Â: 'Acirc',
          å: 'aring',
          Å: 'angst',
          ä: 'auml',
          Ä: 'Auml',
          ã: 'atilde',
          Ã: 'Atilde',
          ą: 'aogon',
          Ą: 'Aogon',
          ā: 'amacr',
          Ā: 'Amacr',
          æ: 'aelig',
          Æ: 'AElig',
          '𝒷': 'bscr',
          '𝕓': 'bopf',
          '𝔟': 'bfr',
          '𝔹': 'Bopf',
          ℬ: 'Bscr',
          '𝔅': 'Bfr',
          '𝔠': 'cfr',
          '𝒸': 'cscr',
          '𝕔': 'copf',
          ℭ: 'Cfr',
          '𝒞': 'Cscr',
          ℂ: 'Copf',
          ć: 'cacute',
          Ć: 'Cacute',
          ĉ: 'ccirc',
          Ĉ: 'Ccirc',
          č: 'ccaron',
          Č: 'Ccaron',
          ċ: 'cdot',
          Ċ: 'Cdot',
          ç: 'ccedil',
          Ç: 'Ccedil',
          '℅': 'incare',
          '𝔡': 'dfr',
          ⅆ: 'dd',
          '𝕕': 'dopf',
          '𝒹': 'dscr',
          '𝒟': 'Dscr',
          '𝔇': 'Dfr',
          ⅅ: 'DD',
          '𝔻': 'Dopf',
          ď: 'dcaron',
          Ď: 'Dcaron',
          đ: 'dstrok',
          Đ: 'Dstrok',
          ð: 'eth',
          Ð: 'ETH',
          ⅇ: 'ee',
          ℯ: 'escr',
          '𝔢': 'efr',
          '𝕖': 'eopf',
          ℰ: 'Escr',
          '𝔈': 'Efr',
          '𝔼': 'Eopf',
          é: 'eacute',
          É: 'Eacute',
          è: 'egrave',
          È: 'Egrave',
          ê: 'ecirc',
          Ê: 'Ecirc',
          ě: 'ecaron',
          Ě: 'Ecaron',
          ë: 'euml',
          Ë: 'Euml',
          ė: 'edot',
          Ė: 'Edot',
          ę: 'eogon',
          Ę: 'Eogon',
          ē: 'emacr',
          Ē: 'Emacr',
          '𝔣': 'ffr',
          '𝕗': 'fopf',
          '𝒻': 'fscr',
          '𝔉': 'Ffr',
          '𝔽': 'Fopf',
          ℱ: 'Fscr',
          ﬀ: 'fflig',
          ﬃ: 'ffilig',
          ﬄ: 'ffllig',
          ﬁ: 'filig',
          fj: 'fjlig',
          ﬂ: 'fllig',
          ƒ: 'fnof',
          ℊ: 'gscr',
          '𝕘': 'gopf',
          '𝔤': 'gfr',
          '𝒢': 'Gscr',
          '𝔾': 'Gopf',
          '𝔊': 'Gfr',
          ǵ: 'gacute',
          ğ: 'gbreve',
          Ğ: 'Gbreve',
          ĝ: 'gcirc',
          Ĝ: 'Gcirc',
          ġ: 'gdot',
          Ġ: 'Gdot',
          Ģ: 'Gcedil',
          '𝔥': 'hfr',
          ℎ: 'planckh',
          '𝒽': 'hscr',
          '𝕙': 'hopf',
          ℋ: 'Hscr',
          ℌ: 'Hfr',
          ℍ: 'Hopf',
          ĥ: 'hcirc',
          Ĥ: 'Hcirc',
          ℏ: 'hbar',
          ħ: 'hstrok',
          Ħ: 'Hstrok',
          '𝕚': 'iopf',
          '𝔦': 'ifr',
          '𝒾': 'iscr',
          ⅈ: 'ii',
          '𝕀': 'Iopf',
          ℐ: 'Iscr',
          ℑ: 'Im',
          í: 'iacute',
          Í: 'Iacute',
          ì: 'igrave',
          Ì: 'Igrave',
          î: 'icirc',
          Î: 'Icirc',
          ï: 'iuml',
          Ï: 'Iuml',
          ĩ: 'itilde',
          Ĩ: 'Itilde',
          İ: 'Idot',
          į: 'iogon',
          Į: 'Iogon',
          ī: 'imacr',
          Ī: 'Imacr',
          ĳ: 'ijlig',
          Ĳ: 'IJlig',
          ı: 'imath',
          '𝒿': 'jscr',
          '𝕛': 'jopf',
          '𝔧': 'jfr',
          '𝒥': 'Jscr',
          '𝔍': 'Jfr',
          '𝕁': 'Jopf',
          ĵ: 'jcirc',
          Ĵ: 'Jcirc',
          ȷ: 'jmath',
          '𝕜': 'kopf',
          '𝓀': 'kscr',
          '𝔨': 'kfr',
          '𝒦': 'Kscr',
          '𝕂': 'Kopf',
          '𝔎': 'Kfr',
          ķ: 'kcedil',
          Ķ: 'Kcedil',
          '𝔩': 'lfr',
          '𝓁': 'lscr',
          ℓ: 'ell',
          '𝕝': 'lopf',
          ℒ: 'Lscr',
          '𝔏': 'Lfr',
          '𝕃': 'Lopf',
          ĺ: 'lacute',
          Ĺ: 'Lacute',
          ľ: 'lcaron',
          Ľ: 'Lcaron',
          ļ: 'lcedil',
          Ļ: 'Lcedil',
          ł: 'lstrok',
          Ł: 'Lstrok',
          ŀ: 'lmidot',
          Ŀ: 'Lmidot',
          '𝔪': 'mfr',
          '𝕞': 'mopf',
          '𝓂': 'mscr',
          '𝔐': 'Mfr',
          '𝕄': 'Mopf',
          ℳ: 'Mscr',
          '𝔫': 'nfr',
          '𝕟': 'nopf',
          '𝓃': 'nscr',
          ℕ: 'Nopf',
          '𝒩': 'Nscr',
          '𝔑': 'Nfr',
          ń: 'nacute',
          Ń: 'Nacute',
          ň: 'ncaron',
          Ň: 'Ncaron',
          ñ: 'ntilde',
          Ñ: 'Ntilde',
          ņ: 'ncedil',
          Ņ: 'Ncedil',
          '№': 'numero',
          ŋ: 'eng',
          Ŋ: 'ENG',
          '𝕠': 'oopf',
          '𝔬': 'ofr',
          ℴ: 'oscr',
          '𝒪': 'Oscr',
          '𝔒': 'Ofr',
          '𝕆': 'Oopf',
          º: 'ordm',
          ó: 'oacute',
          Ó: 'Oacute',
          ò: 'ograve',
          Ò: 'Ograve',
          ô: 'ocirc',
          Ô: 'Ocirc',
          ö: 'ouml',
          Ö: 'Ouml',
          ő: 'odblac',
          Ő: 'Odblac',
          õ: 'otilde',
          Õ: 'Otilde',
          ø: 'oslash',
          Ø: 'Oslash',
          ō: 'omacr',
          Ō: 'Omacr',
          œ: 'oelig',
          Œ: 'OElig',
          '𝔭': 'pfr',
          '𝓅': 'pscr',
          '𝕡': 'popf',
          ℙ: 'Popf',
          '𝔓': 'Pfr',
          '𝒫': 'Pscr',
          '𝕢': 'qopf',
          '𝔮': 'qfr',
          '𝓆': 'qscr',
          '𝒬': 'Qscr',
          '𝔔': 'Qfr',
          ℚ: 'Qopf',
          ĸ: 'kgreen',
          '𝔯': 'rfr',
          '𝕣': 'ropf',
          '𝓇': 'rscr',
          ℛ: 'Rscr',
          ℜ: 'Re',
          ℝ: 'Ropf',
          ŕ: 'racute',
          Ŕ: 'Racute',
          ř: 'rcaron',
          Ř: 'Rcaron',
          ŗ: 'rcedil',
          Ŗ: 'Rcedil',
          '𝕤': 'sopf',
          '𝓈': 'sscr',
          '𝔰': 'sfr',
          '𝕊': 'Sopf',
          '𝔖': 'Sfr',
          '𝒮': 'Sscr',
          'Ⓢ': 'oS',
          ś: 'sacute',
          Ś: 'Sacute',
          ŝ: 'scirc',
          Ŝ: 'Scirc',
          š: 'scaron',
          Š: 'Scaron',
          ş: 'scedil',
          Ş: 'Scedil',
          ß: 'szlig',
          '𝔱': 'tfr',
          '𝓉': 'tscr',
          '𝕥': 'topf',
          '𝒯': 'Tscr',
          '𝔗': 'Tfr',
          '𝕋': 'Topf',
          ť: 'tcaron',
          Ť: 'Tcaron',
          ţ: 'tcedil',
          Ţ: 'Tcedil',
          '™': 'trade',
          ŧ: 'tstrok',
          Ŧ: 'Tstrok',
          '𝓊': 'uscr',
          '𝕦': 'uopf',
          '𝔲': 'ufr',
          '𝕌': 'Uopf',
          '𝔘': 'Ufr',
          '𝒰': 'Uscr',
          ú: 'uacute',
          Ú: 'Uacute',
          ù: 'ugrave',
          Ù: 'Ugrave',
          ŭ: 'ubreve',
          Ŭ: 'Ubreve',
          û: 'ucirc',
          Û: 'Ucirc',
          ů: 'uring',
          Ů: 'Uring',
          ü: 'uuml',
          Ü: 'Uuml',
          ű: 'udblac',
          Ű: 'Udblac',
          ũ: 'utilde',
          Ũ: 'Utilde',
          ų: 'uogon',
          Ų: 'Uogon',
          ū: 'umacr',
          Ū: 'Umacr',
          '𝔳': 'vfr',
          '𝕧': 'vopf',
          '𝓋': 'vscr',
          '𝔙': 'Vfr',
          '𝕍': 'Vopf',
          '𝒱': 'Vscr',
          '𝕨': 'wopf',
          '𝓌': 'wscr',
          '𝔴': 'wfr',
          '𝒲': 'Wscr',
          '𝕎': 'Wopf',
          '𝔚': 'Wfr',
          ŵ: 'wcirc',
          Ŵ: 'Wcirc',
          '𝔵': 'xfr',
          '𝓍': 'xscr',
          '𝕩': 'xopf',
          '𝕏': 'Xopf',
          '𝔛': 'Xfr',
          '𝒳': 'Xscr',
          '𝔶': 'yfr',
          '𝓎': 'yscr',
          '𝕪': 'yopf',
          '𝒴': 'Yscr',
          '𝔜': 'Yfr',
          '𝕐': 'Yopf',
          ý: 'yacute',
          Ý: 'Yacute',
          ŷ: 'ycirc',
          Ŷ: 'Ycirc',
          ÿ: 'yuml',
          Ÿ: 'Yuml',
          '𝓏': 'zscr',
          '𝔷': 'zfr',
          '𝕫': 'zopf',
          ℨ: 'Zfr',
          ℤ: 'Zopf',
          '𝒵': 'Zscr',
          ź: 'zacute',
          Ź: 'Zacute',
          ž: 'zcaron',
          Ž: 'Zcaron',
          ż: 'zdot',
          Ż: 'Zdot',
          Ƶ: 'imped',
          þ: 'thorn',
          Þ: 'THORN',
          ŉ: 'napos',
          α: 'alpha',
          Α: 'Alpha',
          β: 'beta',
          Β: 'Beta',
          γ: 'gamma',
          Γ: 'Gamma',
          δ: 'delta',
          Δ: 'Delta',
          ε: 'epsi',
          ϵ: 'epsiv',
          Ε: 'Epsilon',
          ϝ: 'gammad',
          Ϝ: 'Gammad',
          ζ: 'zeta',
          Ζ: 'Zeta',
          η: 'eta',
          Η: 'Eta',
          θ: 'theta',
          ϑ: 'thetav',
          Θ: 'Theta',
          ι: 'iota',
          Ι: 'Iota',
          κ: 'kappa',
          ϰ: 'kappav',
          Κ: 'Kappa',
          λ: 'lambda',
          Λ: 'Lambda',
          μ: 'mu',
          µ: 'micro',
          Μ: 'Mu',
          ν: 'nu',
          Ν: 'Nu',
          ξ: 'xi',
          Ξ: 'Xi',
          ο: 'omicron',
          Ο: 'Omicron',
          π: 'pi',
          ϖ: 'piv',
          Π: 'Pi',
          ρ: 'rho',
          ϱ: 'rhov',
          Ρ: 'Rho',
          σ: 'sigma',
          Σ: 'Sigma',
          ς: 'sigmaf',
          τ: 'tau',
          Τ: 'Tau',
          υ: 'upsi',
          Υ: 'Upsilon',
          ϒ: 'Upsi',
          φ: 'phi',
          ϕ: 'phiv',
          Φ: 'Phi',
          χ: 'chi',
          Χ: 'Chi',
          ψ: 'psi',
          Ψ: 'Psi',
          ω: 'omega',
          Ω: 'ohm',
          а: 'acy',
          А: 'Acy',
          б: 'bcy',
          Б: 'Bcy',
          в: 'vcy',
          В: 'Vcy',
          г: 'gcy',
          Г: 'Gcy',
          ѓ: 'gjcy',
          Ѓ: 'GJcy',
          д: 'dcy',
          Д: 'Dcy',
          ђ: 'djcy',
          Ђ: 'DJcy',
          е: 'iecy',
          Е: 'IEcy',
          ё: 'iocy',
          Ё: 'IOcy',
          є: 'jukcy',
          Є: 'Jukcy',
          ж: 'zhcy',
          Ж: 'ZHcy',
          з: 'zcy',
          З: 'Zcy',
          ѕ: 'dscy',
          Ѕ: 'DScy',
          и: 'icy',
          И: 'Icy',
          і: 'iukcy',
          І: 'Iukcy',
          ї: 'yicy',
          Ї: 'YIcy',
          й: 'jcy',
          Й: 'Jcy',
          ј: 'jsercy',
          Ј: 'Jsercy',
          к: 'kcy',
          К: 'Kcy',
          ќ: 'kjcy',
          Ќ: 'KJcy',
          л: 'lcy',
          Л: 'Lcy',
          љ: 'ljcy',
          Љ: 'LJcy',
          м: 'mcy',
          М: 'Mcy',
          н: 'ncy',
          Н: 'Ncy',
          њ: 'njcy',
          Њ: 'NJcy',
          о: 'ocy',
          О: 'Ocy',
          п: 'pcy',
          П: 'Pcy',
          р: 'rcy',
          Р: 'Rcy',
          с: 'scy',
          С: 'Scy',
          т: 'tcy',
          Т: 'Tcy',
          ћ: 'tshcy',
          Ћ: 'TSHcy',
          у: 'ucy',
          У: 'Ucy',
          ў: 'ubrcy',
          Ў: 'Ubrcy',
          ф: 'fcy',
          Ф: 'Fcy',
          х: 'khcy',
          Х: 'KHcy',
          ц: 'tscy',
          Ц: 'TScy',
          ч: 'chcy',
          Ч: 'CHcy',
          џ: 'dzcy',
          Џ: 'DZcy',
          ш: 'shcy',
          Ш: 'SHcy',
          щ: 'shchcy',
          Щ: 'SHCHcy',
          ъ: 'hardcy',
          Ъ: 'HARDcy',
          ы: 'ycy',
          Ы: 'Ycy',
          ь: 'softcy',
          Ь: 'SOFTcy',
          э: 'ecy',
          Э: 'Ecy',
          ю: 'yucy',
          Ю: 'YUcy',
          я: 'yacy',
          Я: 'YAcy',
          ℵ: 'aleph',
          ℶ: 'beth',
          ℷ: 'gimel',
          ℸ: 'daleth',
        }
        var p = /["&'<>`]/g
        var d = {
          '"': '&quot;',
          '&': '&amp;',
          "'": '&#x27;',
          '<': '&lt;',
          '>': '&gt;',
          '`': '&#x60;',
        }
        var f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/
        var g =
          /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
        var h =
          /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g
        var m = {
          aacute: 'á',
          Aacute: 'Á',
          abreve: 'ă',
          Abreve: 'Ă',
          ac: '∾',
          acd: '∿',
          acE: '∾̳',
          acirc: 'â',
          Acirc: 'Â',
          acute: '´',
          acy: 'а',
          Acy: 'А',
          aelig: 'æ',
          AElig: 'Æ',
          af: '⁡',
          afr: '𝔞',
          Afr: '𝔄',
          agrave: 'à',
          Agrave: 'À',
          alefsym: 'ℵ',
          aleph: 'ℵ',
          alpha: 'α',
          Alpha: 'Α',
          amacr: 'ā',
          Amacr: 'Ā',
          amalg: '⨿',
          amp: '&',
          AMP: '&',
          and: '∧',
          And: '⩓',
          andand: '⩕',
          andd: '⩜',
          andslope: '⩘',
          andv: '⩚',
          ang: '∠',
          ange: '⦤',
          angle: '∠',
          angmsd: '∡',
          angmsdaa: '⦨',
          angmsdab: '⦩',
          angmsdac: '⦪',
          angmsdad: '⦫',
          angmsdae: '⦬',
          angmsdaf: '⦭',
          angmsdag: '⦮',
          angmsdah: '⦯',
          angrt: '∟',
          angrtvb: '⊾',
          angrtvbd: '⦝',
          angsph: '∢',
          angst: 'Å',
          angzarr: '⍼',
          aogon: 'ą',
          Aogon: 'Ą',
          aopf: '𝕒',
          Aopf: '𝔸',
          ap: '≈',
          apacir: '⩯',
          ape: '≊',
          apE: '⩰',
          apid: '≋',
          apos: "'",
          ApplyFunction: '⁡',
          approx: '≈',
          approxeq: '≊',
          aring: 'å',
          Aring: 'Å',
          ascr: '𝒶',
          Ascr: '𝒜',
          Assign: '≔',
          ast: '*',
          asymp: '≈',
          asympeq: '≍',
          atilde: 'ã',
          Atilde: 'Ã',
          auml: 'ä',
          Auml: 'Ä',
          awconint: '∳',
          awint: '⨑',
          backcong: '≌',
          backepsilon: '϶',
          backprime: '‵',
          backsim: '∽',
          backsimeq: '⋍',
          Backslash: '∖',
          Barv: '⫧',
          barvee: '⊽',
          barwed: '⌅',
          Barwed: '⌆',
          barwedge: '⌅',
          bbrk: '⎵',
          bbrktbrk: '⎶',
          bcong: '≌',
          bcy: 'б',
          Bcy: 'Б',
          bdquo: '„',
          becaus: '∵',
          because: '∵',
          Because: '∵',
          bemptyv: '⦰',
          bepsi: '϶',
          bernou: 'ℬ',
          Bernoullis: 'ℬ',
          beta: 'β',
          Beta: 'Β',
          beth: 'ℶ',
          between: '≬',
          bfr: '𝔟',
          Bfr: '𝔅',
          bigcap: '⋂',
          bigcirc: '◯',
          bigcup: '⋃',
          bigodot: '⨀',
          bigoplus: '⨁',
          bigotimes: '⨂',
          bigsqcup: '⨆',
          bigstar: '★',
          bigtriangledown: '▽',
          bigtriangleup: '△',
          biguplus: '⨄',
          bigvee: '⋁',
          bigwedge: '⋀',
          bkarow: '⤍',
          blacklozenge: '⧫',
          blacksquare: '▪',
          blacktriangle: '▴',
          blacktriangledown: '▾',
          blacktriangleleft: '◂',
          blacktriangleright: '▸',
          blank: '␣',
          blk12: '▒',
          blk14: '░',
          blk34: '▓',
          block: '█',
          bne: '=⃥',
          bnequiv: '≡⃥',
          bnot: '⌐',
          bNot: '⫭',
          bopf: '𝕓',
          Bopf: '𝔹',
          bot: '⊥',
          bottom: '⊥',
          bowtie: '⋈',
          boxbox: '⧉',
          boxdl: '┐',
          boxdL: '╕',
          boxDl: '╖',
          boxDL: '╗',
          boxdr: '┌',
          boxdR: '╒',
          boxDr: '╓',
          boxDR: '╔',
          boxh: '─',
          boxH: '═',
          boxhd: '┬',
          boxhD: '╥',
          boxHd: '╤',
          boxHD: '╦',
          boxhu: '┴',
          boxhU: '╨',
          boxHu: '╧',
          boxHU: '╩',
          boxminus: '⊟',
          boxplus: '⊞',
          boxtimes: '⊠',
          boxul: '┘',
          boxuL: '╛',
          boxUl: '╜',
          boxUL: '╝',
          boxur: '└',
          boxuR: '╘',
          boxUr: '╙',
          boxUR: '╚',
          boxv: '│',
          boxV: '║',
          boxvh: '┼',
          boxvH: '╪',
          boxVh: '╫',
          boxVH: '╬',
          boxvl: '┤',
          boxvL: '╡',
          boxVl: '╢',
          boxVL: '╣',
          boxvr: '├',
          boxvR: '╞',
          boxVr: '╟',
          boxVR: '╠',
          bprime: '‵',
          breve: '˘',
          Breve: '˘',
          brvbar: '¦',
          bscr: '𝒷',
          Bscr: 'ℬ',
          bsemi: '⁏',
          bsim: '∽',
          bsime: '⋍',
          bsol: '\\',
          bsolb: '⧅',
          bsolhsub: '⟈',
          bull: '•',
          bullet: '•',
          bump: '≎',
          bumpe: '≏',
          bumpE: '⪮',
          bumpeq: '≏',
          Bumpeq: '≎',
          cacute: 'ć',
          Cacute: 'Ć',
          cap: '∩',
          Cap: '⋒',
          capand: '⩄',
          capbrcup: '⩉',
          capcap: '⩋',
          capcup: '⩇',
          capdot: '⩀',
          CapitalDifferentialD: 'ⅅ',
          caps: '∩︀',
          caret: '⁁',
          caron: 'ˇ',
          Cayleys: 'ℭ',
          ccaps: '⩍',
          ccaron: 'č',
          Ccaron: 'Č',
          ccedil: 'ç',
          Ccedil: 'Ç',
          ccirc: 'ĉ',
          Ccirc: 'Ĉ',
          Cconint: '∰',
          ccups: '⩌',
          ccupssm: '⩐',
          cdot: 'ċ',
          Cdot: 'Ċ',
          cedil: '¸',
          Cedilla: '¸',
          cemptyv: '⦲',
          cent: '¢',
          centerdot: '·',
          CenterDot: '·',
          cfr: '𝔠',
          Cfr: 'ℭ',
          chcy: 'ч',
          CHcy: 'Ч',
          check: '✓',
          checkmark: '✓',
          chi: 'χ',
          Chi: 'Χ',
          cir: '○',
          circ: 'ˆ',
          circeq: '≗',
          circlearrowleft: '↺',
          circlearrowright: '↻',
          circledast: '⊛',
          circledcirc: '⊚',
          circleddash: '⊝',
          CircleDot: '⊙',
          circledR: '®',
          circledS: 'Ⓢ',
          CircleMinus: '⊖',
          CirclePlus: '⊕',
          CircleTimes: '⊗',
          cire: '≗',
          cirE: '⧃',
          cirfnint: '⨐',
          cirmid: '⫯',
          cirscir: '⧂',
          ClockwiseContourIntegral: '∲',
          CloseCurlyDoubleQuote: '”',
          CloseCurlyQuote: '’',
          clubs: '♣',
          clubsuit: '♣',
          colon: ':',
          Colon: '∷',
          colone: '≔',
          Colone: '⩴',
          coloneq: '≔',
          comma: ',',
          commat: '@',
          comp: '∁',
          compfn: '∘',
          complement: '∁',
          complexes: 'ℂ',
          cong: '≅',
          congdot: '⩭',
          Congruent: '≡',
          conint: '∮',
          Conint: '∯',
          ContourIntegral: '∮',
          copf: '𝕔',
          Copf: 'ℂ',
          coprod: '∐',
          Coproduct: '∐',
          copy: '©',
          COPY: '©',
          copysr: '℗',
          CounterClockwiseContourIntegral: '∳',
          crarr: '↵',
          cross: '✗',
          Cross: '⨯',
          cscr: '𝒸',
          Cscr: '𝒞',
          csub: '⫏',
          csube: '⫑',
          csup: '⫐',
          csupe: '⫒',
          ctdot: '⋯',
          cudarrl: '⤸',
          cudarrr: '⤵',
          cuepr: '⋞',
          cuesc: '⋟',
          cularr: '↶',
          cularrp: '⤽',
          cup: '∪',
          Cup: '⋓',
          cupbrcap: '⩈',
          cupcap: '⩆',
          CupCap: '≍',
          cupcup: '⩊',
          cupdot: '⊍',
          cupor: '⩅',
          cups: '∪︀',
          curarr: '↷',
          curarrm: '⤼',
          curlyeqprec: '⋞',
          curlyeqsucc: '⋟',
          curlyvee: '⋎',
          curlywedge: '⋏',
          curren: '¤',
          curvearrowleft: '↶',
          curvearrowright: '↷',
          cuvee: '⋎',
          cuwed: '⋏',
          cwconint: '∲',
          cwint: '∱',
          cylcty: '⌭',
          dagger: '†',
          Dagger: '‡',
          daleth: 'ℸ',
          darr: '↓',
          dArr: '⇓',
          Darr: '↡',
          dash: '‐',
          dashv: '⊣',
          Dashv: '⫤',
          dbkarow: '⤏',
          dblac: '˝',
          dcaron: 'ď',
          Dcaron: 'Ď',
          dcy: 'д',
          Dcy: 'Д',
          dd: 'ⅆ',
          DD: 'ⅅ',
          ddagger: '‡',
          ddarr: '⇊',
          DDotrahd: '⤑',
          ddotseq: '⩷',
          deg: '°',
          Del: '∇',
          delta: 'δ',
          Delta: 'Δ',
          demptyv: '⦱',
          dfisht: '⥿',
          dfr: '𝔡',
          Dfr: '𝔇',
          dHar: '⥥',
          dharl: '⇃',
          dharr: '⇂',
          DiacriticalAcute: '´',
          DiacriticalDot: '˙',
          DiacriticalDoubleAcute: '˝',
          DiacriticalGrave: '`',
          DiacriticalTilde: '˜',
          diam: '⋄',
          diamond: '⋄',
          Diamond: '⋄',
          diamondsuit: '♦',
          diams: '♦',
          die: '¨',
          DifferentialD: 'ⅆ',
          digamma: 'ϝ',
          disin: '⋲',
          div: '÷',
          divide: '÷',
          divideontimes: '⋇',
          divonx: '⋇',
          djcy: 'ђ',
          DJcy: 'Ђ',
          dlcorn: '⌞',
          dlcrop: '⌍',
          dollar: '$',
          dopf: '𝕕',
          Dopf: '𝔻',
          dot: '˙',
          Dot: '¨',
          DotDot: '⃜',
          doteq: '≐',
          doteqdot: '≑',
          DotEqual: '≐',
          dotminus: '∸',
          dotplus: '∔',
          dotsquare: '⊡',
          doublebarwedge: '⌆',
          DoubleContourIntegral: '∯',
          DoubleDot: '¨',
          DoubleDownArrow: '⇓',
          DoubleLeftArrow: '⇐',
          DoubleLeftRightArrow: '⇔',
          DoubleLeftTee: '⫤',
          DoubleLongLeftArrow: '⟸',
          DoubleLongLeftRightArrow: '⟺',
          DoubleLongRightArrow: '⟹',
          DoubleRightArrow: '⇒',
          DoubleRightTee: '⊨',
          DoubleUpArrow: '⇑',
          DoubleUpDownArrow: '⇕',
          DoubleVerticalBar: '∥',
          downarrow: '↓',
          Downarrow: '⇓',
          DownArrow: '↓',
          DownArrowBar: '⤓',
          DownArrowUpArrow: '⇵',
          DownBreve: '̑',
          downdownarrows: '⇊',
          downharpoonleft: '⇃',
          downharpoonright: '⇂',
          DownLeftRightVector: '⥐',
          DownLeftTeeVector: '⥞',
          DownLeftVector: '↽',
          DownLeftVectorBar: '⥖',
          DownRightTeeVector: '⥟',
          DownRightVector: '⇁',
          DownRightVectorBar: '⥗',
          DownTee: '⊤',
          DownTeeArrow: '↧',
          drbkarow: '⤐',
          drcorn: '⌟',
          drcrop: '⌌',
          dscr: '𝒹',
          Dscr: '𝒟',
          dscy: 'ѕ',
          DScy: 'Ѕ',
          dsol: '⧶',
          dstrok: 'đ',
          Dstrok: 'Đ',
          dtdot: '⋱',
          dtri: '▿',
          dtrif: '▾',
          duarr: '⇵',
          duhar: '⥯',
          dwangle: '⦦',
          dzcy: 'џ',
          DZcy: 'Џ',
          dzigrarr: '⟿',
          eacute: 'é',
          Eacute: 'É',
          easter: '⩮',
          ecaron: 'ě',
          Ecaron: 'Ě',
          ecir: '≖',
          ecirc: 'ê',
          Ecirc: 'Ê',
          ecolon: '≕',
          ecy: 'э',
          Ecy: 'Э',
          eDDot: '⩷',
          edot: 'ė',
          eDot: '≑',
          Edot: 'Ė',
          ee: 'ⅇ',
          efDot: '≒',
          efr: '𝔢',
          Efr: '𝔈',
          eg: '⪚',
          egrave: 'è',
          Egrave: 'È',
          egs: '⪖',
          egsdot: '⪘',
          el: '⪙',
          Element: '∈',
          elinters: '⏧',
          ell: 'ℓ',
          els: '⪕',
          elsdot: '⪗',
          emacr: 'ē',
          Emacr: 'Ē',
          empty: '∅',
          emptyset: '∅',
          EmptySmallSquare: '◻',
          emptyv: '∅',
          EmptyVerySmallSquare: '▫',
          emsp: ' ',
          emsp13: ' ',
          emsp14: ' ',
          eng: 'ŋ',
          ENG: 'Ŋ',
          ensp: ' ',
          eogon: 'ę',
          Eogon: 'Ę',
          eopf: '𝕖',
          Eopf: '𝔼',
          epar: '⋕',
          eparsl: '⧣',
          eplus: '⩱',
          epsi: 'ε',
          epsilon: 'ε',
          Epsilon: 'Ε',
          epsiv: 'ϵ',
          eqcirc: '≖',
          eqcolon: '≕',
          eqsim: '≂',
          eqslantgtr: '⪖',
          eqslantless: '⪕',
          Equal: '⩵',
          equals: '=',
          EqualTilde: '≂',
          equest: '≟',
          Equilibrium: '⇌',
          equiv: '≡',
          equivDD: '⩸',
          eqvparsl: '⧥',
          erarr: '⥱',
          erDot: '≓',
          escr: 'ℯ',
          Escr: 'ℰ',
          esdot: '≐',
          esim: '≂',
          Esim: '⩳',
          eta: 'η',
          Eta: 'Η',
          eth: 'ð',
          ETH: 'Ð',
          euml: 'ë',
          Euml: 'Ë',
          euro: '€',
          excl: '!',
          exist: '∃',
          Exists: '∃',
          expectation: 'ℰ',
          exponentiale: 'ⅇ',
          ExponentialE: 'ⅇ',
          fallingdotseq: '≒',
          fcy: 'ф',
          Fcy: 'Ф',
          female: '♀',
          ffilig: 'ﬃ',
          fflig: 'ﬀ',
          ffllig: 'ﬄ',
          ffr: '𝔣',
          Ffr: '𝔉',
          filig: 'ﬁ',
          FilledSmallSquare: '◼',
          FilledVerySmallSquare: '▪',
          fjlig: 'fj',
          flat: '♭',
          fllig: 'ﬂ',
          fltns: '▱',
          fnof: 'ƒ',
          fopf: '𝕗',
          Fopf: '𝔽',
          forall: '∀',
          ForAll: '∀',
          fork: '⋔',
          forkv: '⫙',
          Fouriertrf: 'ℱ',
          fpartint: '⨍',
          frac12: '½',
          frac13: '⅓',
          frac14: '¼',
          frac15: '⅕',
          frac16: '⅙',
          frac18: '⅛',
          frac23: '⅔',
          frac25: '⅖',
          frac34: '¾',
          frac35: '⅗',
          frac38: '⅜',
          frac45: '⅘',
          frac56: '⅚',
          frac58: '⅝',
          frac78: '⅞',
          frasl: '⁄',
          frown: '⌢',
          fscr: '𝒻',
          Fscr: 'ℱ',
          gacute: 'ǵ',
          gamma: 'γ',
          Gamma: 'Γ',
          gammad: 'ϝ',
          Gammad: 'Ϝ',
          gap: '⪆',
          gbreve: 'ğ',
          Gbreve: 'Ğ',
          Gcedil: 'Ģ',
          gcirc: 'ĝ',
          Gcirc: 'Ĝ',
          gcy: 'г',
          Gcy: 'Г',
          gdot: 'ġ',
          Gdot: 'Ġ',
          ge: '≥',
          gE: '≧',
          gel: '⋛',
          gEl: '⪌',
          geq: '≥',
          geqq: '≧',
          geqslant: '⩾',
          ges: '⩾',
          gescc: '⪩',
          gesdot: '⪀',
          gesdoto: '⪂',
          gesdotol: '⪄',
          gesl: '⋛︀',
          gesles: '⪔',
          gfr: '𝔤',
          Gfr: '𝔊',
          gg: '≫',
          Gg: '⋙',
          ggg: '⋙',
          gimel: 'ℷ',
          gjcy: 'ѓ',
          GJcy: 'Ѓ',
          gl: '≷',
          gla: '⪥',
          glE: '⪒',
          glj: '⪤',
          gnap: '⪊',
          gnapprox: '⪊',
          gne: '⪈',
          gnE: '≩',
          gneq: '⪈',
          gneqq: '≩',
          gnsim: '⋧',
          gopf: '𝕘',
          Gopf: '𝔾',
          grave: '`',
          GreaterEqual: '≥',
          GreaterEqualLess: '⋛',
          GreaterFullEqual: '≧',
          GreaterGreater: '⪢',
          GreaterLess: '≷',
          GreaterSlantEqual: '⩾',
          GreaterTilde: '≳',
          gscr: 'ℊ',
          Gscr: '𝒢',
          gsim: '≳',
          gsime: '⪎',
          gsiml: '⪐',
          gt: '>',
          Gt: '≫',
          GT: '>',
          gtcc: '⪧',
          gtcir: '⩺',
          gtdot: '⋗',
          gtlPar: '⦕',
          gtquest: '⩼',
          gtrapprox: '⪆',
          gtrarr: '⥸',
          gtrdot: '⋗',
          gtreqless: '⋛',
          gtreqqless: '⪌',
          gtrless: '≷',
          gtrsim: '≳',
          gvertneqq: '≩︀',
          gvnE: '≩︀',
          Hacek: 'ˇ',
          hairsp: ' ',
          half: '½',
          hamilt: 'ℋ',
          hardcy: 'ъ',
          HARDcy: 'Ъ',
          harr: '↔',
          hArr: '⇔',
          harrcir: '⥈',
          harrw: '↭',
          Hat: '^',
          hbar: 'ℏ',
          hcirc: 'ĥ',
          Hcirc: 'Ĥ',
          hearts: '♥',
          heartsuit: '♥',
          hellip: '…',
          hercon: '⊹',
          hfr: '𝔥',
          Hfr: 'ℌ',
          HilbertSpace: 'ℋ',
          hksearow: '⤥',
          hkswarow: '⤦',
          hoarr: '⇿',
          homtht: '∻',
          hookleftarrow: '↩',
          hookrightarrow: '↪',
          hopf: '𝕙',
          Hopf: 'ℍ',
          horbar: '―',
          HorizontalLine: '─',
          hscr: '𝒽',
          Hscr: 'ℋ',
          hslash: 'ℏ',
          hstrok: 'ħ',
          Hstrok: 'Ħ',
          HumpDownHump: '≎',
          HumpEqual: '≏',
          hybull: '⁃',
          hyphen: '‐',
          iacute: 'í',
          Iacute: 'Í',
          ic: '⁣',
          icirc: 'î',
          Icirc: 'Î',
          icy: 'и',
          Icy: 'И',
          Idot: 'İ',
          iecy: 'е',
          IEcy: 'Е',
          iexcl: '¡',
          iff: '⇔',
          ifr: '𝔦',
          Ifr: 'ℑ',
          igrave: 'ì',
          Igrave: 'Ì',
          ii: 'ⅈ',
          iiiint: '⨌',
          iiint: '∭',
          iinfin: '⧜',
          iiota: '℩',
          ijlig: 'ĳ',
          IJlig: 'Ĳ',
          Im: 'ℑ',
          imacr: 'ī',
          Imacr: 'Ī',
          image: 'ℑ',
          ImaginaryI: 'ⅈ',
          imagline: 'ℐ',
          imagpart: 'ℑ',
          imath: 'ı',
          imof: '⊷',
          imped: 'Ƶ',
          Implies: '⇒',
          in: '∈',
          incare: '℅',
          infin: '∞',
          infintie: '⧝',
          inodot: 'ı',
          int: '∫',
          Int: '∬',
          intcal: '⊺',
          integers: 'ℤ',
          Integral: '∫',
          intercal: '⊺',
          Intersection: '⋂',
          intlarhk: '⨗',
          intprod: '⨼',
          InvisibleComma: '⁣',
          InvisibleTimes: '⁢',
          iocy: 'ё',
          IOcy: 'Ё',
          iogon: 'į',
          Iogon: 'Į',
          iopf: '𝕚',
          Iopf: '𝕀',
          iota: 'ι',
          Iota: 'Ι',
          iprod: '⨼',
          iquest: '¿',
          iscr: '𝒾',
          Iscr: 'ℐ',
          isin: '∈',
          isindot: '⋵',
          isinE: '⋹',
          isins: '⋴',
          isinsv: '⋳',
          isinv: '∈',
          it: '⁢',
          itilde: 'ĩ',
          Itilde: 'Ĩ',
          iukcy: 'і',
          Iukcy: 'І',
          iuml: 'ï',
          Iuml: 'Ï',
          jcirc: 'ĵ',
          Jcirc: 'Ĵ',
          jcy: 'й',
          Jcy: 'Й',
          jfr: '𝔧',
          Jfr: '𝔍',
          jmath: 'ȷ',
          jopf: '𝕛',
          Jopf: '𝕁',
          jscr: '𝒿',
          Jscr: '𝒥',
          jsercy: 'ј',
          Jsercy: 'Ј',
          jukcy: 'є',
          Jukcy: 'Є',
          kappa: 'κ',
          Kappa: 'Κ',
          kappav: 'ϰ',
          kcedil: 'ķ',
          Kcedil: 'Ķ',
          kcy: 'к',
          Kcy: 'К',
          kfr: '𝔨',
          Kfr: '𝔎',
          kgreen: 'ĸ',
          khcy: 'х',
          KHcy: 'Х',
          kjcy: 'ќ',
          KJcy: 'Ќ',
          kopf: '𝕜',
          Kopf: '𝕂',
          kscr: '𝓀',
          Kscr: '𝒦',
          lAarr: '⇚',
          lacute: 'ĺ',
          Lacute: 'Ĺ',
          laemptyv: '⦴',
          lagran: 'ℒ',
          lambda: 'λ',
          Lambda: 'Λ',
          lang: '⟨',
          Lang: '⟪',
          langd: '⦑',
          langle: '⟨',
          lap: '⪅',
          Laplacetrf: 'ℒ',
          laquo: '«',
          larr: '←',
          lArr: '⇐',
          Larr: '↞',
          larrb: '⇤',
          larrbfs: '⤟',
          larrfs: '⤝',
          larrhk: '↩',
          larrlp: '↫',
          larrpl: '⤹',
          larrsim: '⥳',
          larrtl: '↢',
          lat: '⪫',
          latail: '⤙',
          lAtail: '⤛',
          late: '⪭',
          lates: '⪭︀',
          lbarr: '⤌',
          lBarr: '⤎',
          lbbrk: '❲',
          lbrace: '{',
          lbrack: '[',
          lbrke: '⦋',
          lbrksld: '⦏',
          lbrkslu: '⦍',
          lcaron: 'ľ',
          Lcaron: 'Ľ',
          lcedil: 'ļ',
          Lcedil: 'Ļ',
          lceil: '⌈',
          lcub: '{',
          lcy: 'л',
          Lcy: 'Л',
          ldca: '⤶',
          ldquo: '“',
          ldquor: '„',
          ldrdhar: '⥧',
          ldrushar: '⥋',
          ldsh: '↲',
          le: '≤',
          lE: '≦',
          LeftAngleBracket: '⟨',
          leftarrow: '←',
          Leftarrow: '⇐',
          LeftArrow: '←',
          LeftArrowBar: '⇤',
          LeftArrowRightArrow: '⇆',
          leftarrowtail: '↢',
          LeftCeiling: '⌈',
          LeftDoubleBracket: '⟦',
          LeftDownTeeVector: '⥡',
          LeftDownVector: '⇃',
          LeftDownVectorBar: '⥙',
          LeftFloor: '⌊',
          leftharpoondown: '↽',
          leftharpoonup: '↼',
          leftleftarrows: '⇇',
          leftrightarrow: '↔',
          Leftrightarrow: '⇔',
          LeftRightArrow: '↔',
          leftrightarrows: '⇆',
          leftrightharpoons: '⇋',
          leftrightsquigarrow: '↭',
          LeftRightVector: '⥎',
          LeftTee: '⊣',
          LeftTeeArrow: '↤',
          LeftTeeVector: '⥚',
          leftthreetimes: '⋋',
          LeftTriangle: '⊲',
          LeftTriangleBar: '⧏',
          LeftTriangleEqual: '⊴',
          LeftUpDownVector: '⥑',
          LeftUpTeeVector: '⥠',
          LeftUpVector: '↿',
          LeftUpVectorBar: '⥘',
          LeftVector: '↼',
          LeftVectorBar: '⥒',
          leg: '⋚',
          lEg: '⪋',
          leq: '≤',
          leqq: '≦',
          leqslant: '⩽',
          les: '⩽',
          lescc: '⪨',
          lesdot: '⩿',
          lesdoto: '⪁',
          lesdotor: '⪃',
          lesg: '⋚︀',
          lesges: '⪓',
          lessapprox: '⪅',
          lessdot: '⋖',
          lesseqgtr: '⋚',
          lesseqqgtr: '⪋',
          LessEqualGreater: '⋚',
          LessFullEqual: '≦',
          LessGreater: '≶',
          lessgtr: '≶',
          LessLess: '⪡',
          lesssim: '≲',
          LessSlantEqual: '⩽',
          LessTilde: '≲',
          lfisht: '⥼',
          lfloor: '⌊',
          lfr: '𝔩',
          Lfr: '𝔏',
          lg: '≶',
          lgE: '⪑',
          lHar: '⥢',
          lhard: '↽',
          lharu: '↼',
          lharul: '⥪',
          lhblk: '▄',
          ljcy: 'љ',
          LJcy: 'Љ',
          ll: '≪',
          Ll: '⋘',
          llarr: '⇇',
          llcorner: '⌞',
          Lleftarrow: '⇚',
          llhard: '⥫',
          lltri: '◺',
          lmidot: 'ŀ',
          Lmidot: 'Ŀ',
          lmoust: '⎰',
          lmoustache: '⎰',
          lnap: '⪉',
          lnapprox: '⪉',
          lne: '⪇',
          lnE: '≨',
          lneq: '⪇',
          lneqq: '≨',
          lnsim: '⋦',
          loang: '⟬',
          loarr: '⇽',
          lobrk: '⟦',
          longleftarrow: '⟵',
          Longleftarrow: '⟸',
          LongLeftArrow: '⟵',
          longleftrightarrow: '⟷',
          Longleftrightarrow: '⟺',
          LongLeftRightArrow: '⟷',
          longmapsto: '⟼',
          longrightarrow: '⟶',
          Longrightarrow: '⟹',
          LongRightArrow: '⟶',
          looparrowleft: '↫',
          looparrowright: '↬',
          lopar: '⦅',
          lopf: '𝕝',
          Lopf: '𝕃',
          loplus: '⨭',
          lotimes: '⨴',
          lowast: '∗',
          lowbar: '_',
          LowerLeftArrow: '↙',
          LowerRightArrow: '↘',
          loz: '◊',
          lozenge: '◊',
          lozf: '⧫',
          lpar: '(',
          lparlt: '⦓',
          lrarr: '⇆',
          lrcorner: '⌟',
          lrhar: '⇋',
          lrhard: '⥭',
          lrm: '‎',
          lrtri: '⊿',
          lsaquo: '‹',
          lscr: '𝓁',
          Lscr: 'ℒ',
          lsh: '↰',
          Lsh: '↰',
          lsim: '≲',
          lsime: '⪍',
          lsimg: '⪏',
          lsqb: '[',
          lsquo: '‘',
          lsquor: '‚',
          lstrok: 'ł',
          Lstrok: 'Ł',
          lt: '<',
          Lt: '≪',
          LT: '<',
          ltcc: '⪦',
          ltcir: '⩹',
          ltdot: '⋖',
          lthree: '⋋',
          ltimes: '⋉',
          ltlarr: '⥶',
          ltquest: '⩻',
          ltri: '◃',
          ltrie: '⊴',
          ltrif: '◂',
          ltrPar: '⦖',
          lurdshar: '⥊',
          luruhar: '⥦',
          lvertneqq: '≨︀',
          lvnE: '≨︀',
          macr: '¯',
          male: '♂',
          malt: '✠',
          maltese: '✠',
          map: '↦',
          Map: '⤅',
          mapsto: '↦',
          mapstodown: '↧',
          mapstoleft: '↤',
          mapstoup: '↥',
          marker: '▮',
          mcomma: '⨩',
          mcy: 'м',
          Mcy: 'М',
          mdash: '—',
          mDDot: '∺',
          measuredangle: '∡',
          MediumSpace: ' ',
          Mellintrf: 'ℳ',
          mfr: '𝔪',
          Mfr: '𝔐',
          mho: '℧',
          micro: 'µ',
          mid: '∣',
          midast: '*',
          midcir: '⫰',
          middot: '·',
          minus: '−',
          minusb: '⊟',
          minusd: '∸',
          minusdu: '⨪',
          MinusPlus: '∓',
          mlcp: '⫛',
          mldr: '…',
          mnplus: '∓',
          models: '⊧',
          mopf: '𝕞',
          Mopf: '𝕄',
          mp: '∓',
          mscr: '𝓂',
          Mscr: 'ℳ',
          mstpos: '∾',
          mu: 'μ',
          Mu: 'Μ',
          multimap: '⊸',
          mumap: '⊸',
          nabla: '∇',
          nacute: 'ń',
          Nacute: 'Ń',
          nang: '∠⃒',
          nap: '≉',
          napE: '⩰̸',
          napid: '≋̸',
          napos: 'ŉ',
          napprox: '≉',
          natur: '♮',
          natural: '♮',
          naturals: 'ℕ',
          nbsp: ' ',
          nbump: '≎̸',
          nbumpe: '≏̸',
          ncap: '⩃',
          ncaron: 'ň',
          Ncaron: 'Ň',
          ncedil: 'ņ',
          Ncedil: 'Ņ',
          ncong: '≇',
          ncongdot: '⩭̸',
          ncup: '⩂',
          ncy: 'н',
          Ncy: 'Н',
          ndash: '–',
          ne: '≠',
          nearhk: '⤤',
          nearr: '↗',
          neArr: '⇗',
          nearrow: '↗',
          nedot: '≐̸',
          NegativeMediumSpace: '​',
          NegativeThickSpace: '​',
          NegativeThinSpace: '​',
          NegativeVeryThinSpace: '​',
          nequiv: '≢',
          nesear: '⤨',
          nesim: '≂̸',
          NestedGreaterGreater: '≫',
          NestedLessLess: '≪',
          NewLine: '\n',
          nexist: '∄',
          nexists: '∄',
          nfr: '𝔫',
          Nfr: '𝔑',
          nge: '≱',
          ngE: '≧̸',
          ngeq: '≱',
          ngeqq: '≧̸',
          ngeqslant: '⩾̸',
          nges: '⩾̸',
          nGg: '⋙̸',
          ngsim: '≵',
          ngt: '≯',
          nGt: '≫⃒',
          ngtr: '≯',
          nGtv: '≫̸',
          nharr: '↮',
          nhArr: '⇎',
          nhpar: '⫲',
          ni: '∋',
          nis: '⋼',
          nisd: '⋺',
          niv: '∋',
          njcy: 'њ',
          NJcy: 'Њ',
          nlarr: '↚',
          nlArr: '⇍',
          nldr: '‥',
          nle: '≰',
          nlE: '≦̸',
          nleftarrow: '↚',
          nLeftarrow: '⇍',
          nleftrightarrow: '↮',
          nLeftrightarrow: '⇎',
          nleq: '≰',
          nleqq: '≦̸',
          nleqslant: '⩽̸',
          nles: '⩽̸',
          nless: '≮',
          nLl: '⋘̸',
          nlsim: '≴',
          nlt: '≮',
          nLt: '≪⃒',
          nltri: '⋪',
          nltrie: '⋬',
          nLtv: '≪̸',
          nmid: '∤',
          NoBreak: '⁠',
          NonBreakingSpace: ' ',
          nopf: '𝕟',
          Nopf: 'ℕ',
          not: '¬',
          Not: '⫬',
          NotCongruent: '≢',
          NotCupCap: '≭',
          NotDoubleVerticalBar: '∦',
          NotElement: '∉',
          NotEqual: '≠',
          NotEqualTilde: '≂̸',
          NotExists: '∄',
          NotGreater: '≯',
          NotGreaterEqual: '≱',
          NotGreaterFullEqual: '≧̸',
          NotGreaterGreater: '≫̸',
          NotGreaterLess: '≹',
          NotGreaterSlantEqual: '⩾̸',
          NotGreaterTilde: '≵',
          NotHumpDownHump: '≎̸',
          NotHumpEqual: '≏̸',
          notin: '∉',
          notindot: '⋵̸',
          notinE: '⋹̸',
          notinva: '∉',
          notinvb: '⋷',
          notinvc: '⋶',
          NotLeftTriangle: '⋪',
          NotLeftTriangleBar: '⧏̸',
          NotLeftTriangleEqual: '⋬',
          NotLess: '≮',
          NotLessEqual: '≰',
          NotLessGreater: '≸',
          NotLessLess: '≪̸',
          NotLessSlantEqual: '⩽̸',
          NotLessTilde: '≴',
          NotNestedGreaterGreater: '⪢̸',
          NotNestedLessLess: '⪡̸',
          notni: '∌',
          notniva: '∌',
          notnivb: '⋾',
          notnivc: '⋽',
          NotPrecedes: '⊀',
          NotPrecedesEqual: '⪯̸',
          NotPrecedesSlantEqual: '⋠',
          NotReverseElement: '∌',
          NotRightTriangle: '⋫',
          NotRightTriangleBar: '⧐̸',
          NotRightTriangleEqual: '⋭',
          NotSquareSubset: '⊏̸',
          NotSquareSubsetEqual: '⋢',
          NotSquareSuperset: '⊐̸',
          NotSquareSupersetEqual: '⋣',
          NotSubset: '⊂⃒',
          NotSubsetEqual: '⊈',
          NotSucceeds: '⊁',
          NotSucceedsEqual: '⪰̸',
          NotSucceedsSlantEqual: '⋡',
          NotSucceedsTilde: '≿̸',
          NotSuperset: '⊃⃒',
          NotSupersetEqual: '⊉',
          NotTilde: '≁',
          NotTildeEqual: '≄',
          NotTildeFullEqual: '≇',
          NotTildeTilde: '≉',
          NotVerticalBar: '∤',
          npar: '∦',
          nparallel: '∦',
          nparsl: '⫽⃥',
          npart: '∂̸',
          npolint: '⨔',
          npr: '⊀',
          nprcue: '⋠',
          npre: '⪯̸',
          nprec: '⊀',
          npreceq: '⪯̸',
          nrarr: '↛',
          nrArr: '⇏',
          nrarrc: '⤳̸',
          nrarrw: '↝̸',
          nrightarrow: '↛',
          nRightarrow: '⇏',
          nrtri: '⋫',
          nrtrie: '⋭',
          nsc: '⊁',
          nsccue: '⋡',
          nsce: '⪰̸',
          nscr: '𝓃',
          Nscr: '𝒩',
          nshortmid: '∤',
          nshortparallel: '∦',
          nsim: '≁',
          nsime: '≄',
          nsimeq: '≄',
          nsmid: '∤',
          nspar: '∦',
          nsqsube: '⋢',
          nsqsupe: '⋣',
          nsub: '⊄',
          nsube: '⊈',
          nsubE: '⫅̸',
          nsubset: '⊂⃒',
          nsubseteq: '⊈',
          nsubseteqq: '⫅̸',
          nsucc: '⊁',
          nsucceq: '⪰̸',
          nsup: '⊅',
          nsupe: '⊉',
          nsupE: '⫆̸',
          nsupset: '⊃⃒',
          nsupseteq: '⊉',
          nsupseteqq: '⫆̸',
          ntgl: '≹',
          ntilde: 'ñ',
          Ntilde: 'Ñ',
          ntlg: '≸',
          ntriangleleft: '⋪',
          ntrianglelefteq: '⋬',
          ntriangleright: '⋫',
          ntrianglerighteq: '⋭',
          nu: 'ν',
          Nu: 'Ν',
          num: '#',
          numero: '№',
          numsp: ' ',
          nvap: '≍⃒',
          nvdash: '⊬',
          nvDash: '⊭',
          nVdash: '⊮',
          nVDash: '⊯',
          nvge: '≥⃒',
          nvgt: '>⃒',
          nvHarr: '⤄',
          nvinfin: '⧞',
          nvlArr: '⤂',
          nvle: '≤⃒',
          nvlt: '<⃒',
          nvltrie: '⊴⃒',
          nvrArr: '⤃',
          nvrtrie: '⊵⃒',
          nvsim: '∼⃒',
          nwarhk: '⤣',
          nwarr: '↖',
          nwArr: '⇖',
          nwarrow: '↖',
          nwnear: '⤧',
          oacute: 'ó',
          Oacute: 'Ó',
          oast: '⊛',
          ocir: '⊚',
          ocirc: 'ô',
          Ocirc: 'Ô',
          ocy: 'о',
          Ocy: 'О',
          odash: '⊝',
          odblac: 'ő',
          Odblac: 'Ő',
          odiv: '⨸',
          odot: '⊙',
          odsold: '⦼',
          oelig: 'œ',
          OElig: 'Œ',
          ofcir: '⦿',
          ofr: '𝔬',
          Ofr: '𝔒',
          ogon: '˛',
          ograve: 'ò',
          Ograve: 'Ò',
          ogt: '⧁',
          ohbar: '⦵',
          ohm: 'Ω',
          oint: '∮',
          olarr: '↺',
          olcir: '⦾',
          olcross: '⦻',
          oline: '‾',
          olt: '⧀',
          omacr: 'ō',
          Omacr: 'Ō',
          omega: 'ω',
          Omega: 'Ω',
          omicron: 'ο',
          Omicron: 'Ο',
          omid: '⦶',
          ominus: '⊖',
          oopf: '𝕠',
          Oopf: '𝕆',
          opar: '⦷',
          OpenCurlyDoubleQuote: '“',
          OpenCurlyQuote: '‘',
          operp: '⦹',
          oplus: '⊕',
          or: '∨',
          Or: '⩔',
          orarr: '↻',
          ord: '⩝',
          order: 'ℴ',
          orderof: 'ℴ',
          ordf: 'ª',
          ordm: 'º',
          origof: '⊶',
          oror: '⩖',
          orslope: '⩗',
          orv: '⩛',
          oS: 'Ⓢ',
          oscr: 'ℴ',
          Oscr: '𝒪',
          oslash: 'ø',
          Oslash: 'Ø',
          osol: '⊘',
          otilde: 'õ',
          Otilde: 'Õ',
          otimes: '⊗',
          Otimes: '⨷',
          otimesas: '⨶',
          ouml: 'ö',
          Ouml: 'Ö',
          ovbar: '⌽',
          OverBar: '‾',
          OverBrace: '⏞',
          OverBracket: '⎴',
          OverParenthesis: '⏜',
          par: '∥',
          para: '¶',
          parallel: '∥',
          parsim: '⫳',
          parsl: '⫽',
          part: '∂',
          PartialD: '∂',
          pcy: 'п',
          Pcy: 'П',
          percnt: '%',
          period: '.',
          permil: '‰',
          perp: '⊥',
          pertenk: '‱',
          pfr: '𝔭',
          Pfr: '𝔓',
          phi: 'φ',
          Phi: 'Φ',
          phiv: 'ϕ',
          phmmat: 'ℳ',
          phone: '☎',
          pi: 'π',
          Pi: 'Π',
          pitchfork: '⋔',
          piv: 'ϖ',
          planck: 'ℏ',
          planckh: 'ℎ',
          plankv: 'ℏ',
          plus: '+',
          plusacir: '⨣',
          plusb: '⊞',
          pluscir: '⨢',
          plusdo: '∔',
          plusdu: '⨥',
          pluse: '⩲',
          PlusMinus: '±',
          plusmn: '±',
          plussim: '⨦',
          plustwo: '⨧',
          pm: '±',
          Poincareplane: 'ℌ',
          pointint: '⨕',
          popf: '𝕡',
          Popf: 'ℙ',
          pound: '£',
          pr: '≺',
          Pr: '⪻',
          prap: '⪷',
          prcue: '≼',
          pre: '⪯',
          prE: '⪳',
          prec: '≺',
          precapprox: '⪷',
          preccurlyeq: '≼',
          Precedes: '≺',
          PrecedesEqual: '⪯',
          PrecedesSlantEqual: '≼',
          PrecedesTilde: '≾',
          preceq: '⪯',
          precnapprox: '⪹',
          precneqq: '⪵',
          precnsim: '⋨',
          precsim: '≾',
          prime: '′',
          Prime: '″',
          primes: 'ℙ',
          prnap: '⪹',
          prnE: '⪵',
          prnsim: '⋨',
          prod: '∏',
          Product: '∏',
          profalar: '⌮',
          profline: '⌒',
          profsurf: '⌓',
          prop: '∝',
          Proportion: '∷',
          Proportional: '∝',
          propto: '∝',
          prsim: '≾',
          prurel: '⊰',
          pscr: '𝓅',
          Pscr: '𝒫',
          psi: 'ψ',
          Psi: 'Ψ',
          puncsp: ' ',
          qfr: '𝔮',
          Qfr: '𝔔',
          qint: '⨌',
          qopf: '𝕢',
          Qopf: 'ℚ',
          qprime: '⁗',
          qscr: '𝓆',
          Qscr: '𝒬',
          quaternions: 'ℍ',
          quatint: '⨖',
          quest: '?',
          questeq: '≟',
          quot: '"',
          QUOT: '"',
          rAarr: '⇛',
          race: '∽̱',
          racute: 'ŕ',
          Racute: 'Ŕ',
          radic: '√',
          raemptyv: '⦳',
          rang: '⟩',
          Rang: '⟫',
          rangd: '⦒',
          range: '⦥',
          rangle: '⟩',
          raquo: '»',
          rarr: '→',
          rArr: '⇒',
          Rarr: '↠',
          rarrap: '⥵',
          rarrb: '⇥',
          rarrbfs: '⤠',
          rarrc: '⤳',
          rarrfs: '⤞',
          rarrhk: '↪',
          rarrlp: '↬',
          rarrpl: '⥅',
          rarrsim: '⥴',
          rarrtl: '↣',
          Rarrtl: '⤖',
          rarrw: '↝',
          ratail: '⤚',
          rAtail: '⤜',
          ratio: '∶',
          rationals: 'ℚ',
          rbarr: '⤍',
          rBarr: '⤏',
          RBarr: '⤐',
          rbbrk: '❳',
          rbrace: '}',
          rbrack: ']',
          rbrke: '⦌',
          rbrksld: '⦎',
          rbrkslu: '⦐',
          rcaron: 'ř',
          Rcaron: 'Ř',
          rcedil: 'ŗ',
          Rcedil: 'Ŗ',
          rceil: '⌉',
          rcub: '}',
          rcy: 'р',
          Rcy: 'Р',
          rdca: '⤷',
          rdldhar: '⥩',
          rdquo: '”',
          rdquor: '”',
          rdsh: '↳',
          Re: 'ℜ',
          real: 'ℜ',
          realine: 'ℛ',
          realpart: 'ℜ',
          reals: 'ℝ',
          rect: '▭',
          reg: '®',
          REG: '®',
          ReverseElement: '∋',
          ReverseEquilibrium: '⇋',
          ReverseUpEquilibrium: '⥯',
          rfisht: '⥽',
          rfloor: '⌋',
          rfr: '𝔯',
          Rfr: 'ℜ',
          rHar: '⥤',
          rhard: '⇁',
          rharu: '⇀',
          rharul: '⥬',
          rho: 'ρ',
          Rho: 'Ρ',
          rhov: 'ϱ',
          RightAngleBracket: '⟩',
          rightarrow: '→',
          Rightarrow: '⇒',
          RightArrow: '→',
          RightArrowBar: '⇥',
          RightArrowLeftArrow: '⇄',
          rightarrowtail: '↣',
          RightCeiling: '⌉',
          RightDoubleBracket: '⟧',
          RightDownTeeVector: '⥝',
          RightDownVector: '⇂',
          RightDownVectorBar: '⥕',
          RightFloor: '⌋',
          rightharpoondown: '⇁',
          rightharpoonup: '⇀',
          rightleftarrows: '⇄',
          rightleftharpoons: '⇌',
          rightrightarrows: '⇉',
          rightsquigarrow: '↝',
          RightTee: '⊢',
          RightTeeArrow: '↦',
          RightTeeVector: '⥛',
          rightthreetimes: '⋌',
          RightTriangle: '⊳',
          RightTriangleBar: '⧐',
          RightTriangleEqual: '⊵',
          RightUpDownVector: '⥏',
          RightUpTeeVector: '⥜',
          RightUpVector: '↾',
          RightUpVectorBar: '⥔',
          RightVector: '⇀',
          RightVectorBar: '⥓',
          ring: '˚',
          risingdotseq: '≓',
          rlarr: '⇄',
          rlhar: '⇌',
          rlm: '‏',
          rmoust: '⎱',
          rmoustache: '⎱',
          rnmid: '⫮',
          roang: '⟭',
          roarr: '⇾',
          robrk: '⟧',
          ropar: '⦆',
          ropf: '𝕣',
          Ropf: 'ℝ',
          roplus: '⨮',
          rotimes: '⨵',
          RoundImplies: '⥰',
          rpar: ')',
          rpargt: '⦔',
          rppolint: '⨒',
          rrarr: '⇉',
          Rrightarrow: '⇛',
          rsaquo: '›',
          rscr: '𝓇',
          Rscr: 'ℛ',
          rsh: '↱',
          Rsh: '↱',
          rsqb: ']',
          rsquo: '’',
          rsquor: '’',
          rthree: '⋌',
          rtimes: '⋊',
          rtri: '▹',
          rtrie: '⊵',
          rtrif: '▸',
          rtriltri: '⧎',
          RuleDelayed: '⧴',
          ruluhar: '⥨',
          rx: '℞',
          sacute: 'ś',
          Sacute: 'Ś',
          sbquo: '‚',
          sc: '≻',
          Sc: '⪼',
          scap: '⪸',
          scaron: 'š',
          Scaron: 'Š',
          sccue: '≽',
          sce: '⪰',
          scE: '⪴',
          scedil: 'ş',
          Scedil: 'Ş',
          scirc: 'ŝ',
          Scirc: 'Ŝ',
          scnap: '⪺',
          scnE: '⪶',
          scnsim: '⋩',
          scpolint: '⨓',
          scsim: '≿',
          scy: 'с',
          Scy: 'С',
          sdot: '⋅',
          sdotb: '⊡',
          sdote: '⩦',
          searhk: '⤥',
          searr: '↘',
          seArr: '⇘',
          searrow: '↘',
          sect: '§',
          semi: ';',
          seswar: '⤩',
          setminus: '∖',
          setmn: '∖',
          sext: '✶',
          sfr: '𝔰',
          Sfr: '𝔖',
          sfrown: '⌢',
          sharp: '♯',
          shchcy: 'щ',
          SHCHcy: 'Щ',
          shcy: 'ш',
          SHcy: 'Ш',
          ShortDownArrow: '↓',
          ShortLeftArrow: '←',
          shortmid: '∣',
          shortparallel: '∥',
          ShortRightArrow: '→',
          ShortUpArrow: '↑',
          shy: '­',
          sigma: 'σ',
          Sigma: 'Σ',
          sigmaf: 'ς',
          sigmav: 'ς',
          sim: '∼',
          simdot: '⩪',
          sime: '≃',
          simeq: '≃',
          simg: '⪞',
          simgE: '⪠',
          siml: '⪝',
          simlE: '⪟',
          simne: '≆',
          simplus: '⨤',
          simrarr: '⥲',
          slarr: '←',
          SmallCircle: '∘',
          smallsetminus: '∖',
          smashp: '⨳',
          smeparsl: '⧤',
          smid: '∣',
          smile: '⌣',
          smt: '⪪',
          smte: '⪬',
          smtes: '⪬︀',
          softcy: 'ь',
          SOFTcy: 'Ь',
          sol: '/',
          solb: '⧄',
          solbar: '⌿',
          sopf: '𝕤',
          Sopf: '𝕊',
          spades: '♠',
          spadesuit: '♠',
          spar: '∥',
          sqcap: '⊓',
          sqcaps: '⊓︀',
          sqcup: '⊔',
          sqcups: '⊔︀',
          Sqrt: '√',
          sqsub: '⊏',
          sqsube: '⊑',
          sqsubset: '⊏',
          sqsubseteq: '⊑',
          sqsup: '⊐',
          sqsupe: '⊒',
          sqsupset: '⊐',
          sqsupseteq: '⊒',
          squ: '□',
          square: '□',
          Square: '□',
          SquareIntersection: '⊓',
          SquareSubset: '⊏',
          SquareSubsetEqual: '⊑',
          SquareSuperset: '⊐',
          SquareSupersetEqual: '⊒',
          SquareUnion: '⊔',
          squarf: '▪',
          squf: '▪',
          srarr: '→',
          sscr: '𝓈',
          Sscr: '𝒮',
          ssetmn: '∖',
          ssmile: '⌣',
          sstarf: '⋆',
          star: '☆',
          Star: '⋆',
          starf: '★',
          straightepsilon: 'ϵ',
          straightphi: 'ϕ',
          strns: '¯',
          sub: '⊂',
          Sub: '⋐',
          subdot: '⪽',
          sube: '⊆',
          subE: '⫅',
          subedot: '⫃',
          submult: '⫁',
          subne: '⊊',
          subnE: '⫋',
          subplus: '⪿',
          subrarr: '⥹',
          subset: '⊂',
          Subset: '⋐',
          subseteq: '⊆',
          subseteqq: '⫅',
          SubsetEqual: '⊆',
          subsetneq: '⊊',
          subsetneqq: '⫋',
          subsim: '⫇',
          subsub: '⫕',
          subsup: '⫓',
          succ: '≻',
          succapprox: '⪸',
          succcurlyeq: '≽',
          Succeeds: '≻',
          SucceedsEqual: '⪰',
          SucceedsSlantEqual: '≽',
          SucceedsTilde: '≿',
          succeq: '⪰',
          succnapprox: '⪺',
          succneqq: '⪶',
          succnsim: '⋩',
          succsim: '≿',
          SuchThat: '∋',
          sum: '∑',
          Sum: '∑',
          sung: '♪',
          sup: '⊃',
          Sup: '⋑',
          sup1: '¹',
          sup2: '²',
          sup3: '³',
          supdot: '⪾',
          supdsub: '⫘',
          supe: '⊇',
          supE: '⫆',
          supedot: '⫄',
          Superset: '⊃',
          SupersetEqual: '⊇',
          suphsol: '⟉',
          suphsub: '⫗',
          suplarr: '⥻',
          supmult: '⫂',
          supne: '⊋',
          supnE: '⫌',
          supplus: '⫀',
          supset: '⊃',
          Supset: '⋑',
          supseteq: '⊇',
          supseteqq: '⫆',
          supsetneq: '⊋',
          supsetneqq: '⫌',
          supsim: '⫈',
          supsub: '⫔',
          supsup: '⫖',
          swarhk: '⤦',
          swarr: '↙',
          swArr: '⇙',
          swarrow: '↙',
          swnwar: '⤪',
          szlig: 'ß',
          Tab: '\t',
          target: '⌖',
          tau: 'τ',
          Tau: 'Τ',
          tbrk: '⎴',
          tcaron: 'ť',
          Tcaron: 'Ť',
          tcedil: 'ţ',
          Tcedil: 'Ţ',
          tcy: 'т',
          Tcy: 'Т',
          tdot: '⃛',
          telrec: '⌕',
          tfr: '𝔱',
          Tfr: '𝔗',
          there4: '∴',
          therefore: '∴',
          Therefore: '∴',
          theta: 'θ',
          Theta: 'Θ',
          thetasym: 'ϑ',
          thetav: 'ϑ',
          thickapprox: '≈',
          thicksim: '∼',
          ThickSpace: '  ',
          thinsp: ' ',
          ThinSpace: ' ',
          thkap: '≈',
          thksim: '∼',
          thorn: 'þ',
          THORN: 'Þ',
          tilde: '˜',
          Tilde: '∼',
          TildeEqual: '≃',
          TildeFullEqual: '≅',
          TildeTilde: '≈',
          times: '×',
          timesb: '⊠',
          timesbar: '⨱',
          timesd: '⨰',
          tint: '∭',
          toea: '⤨',
          top: '⊤',
          topbot: '⌶',
          topcir: '⫱',
          topf: '𝕥',
          Topf: '𝕋',
          topfork: '⫚',
          tosa: '⤩',
          tprime: '‴',
          trade: '™',
          TRADE: '™',
          triangle: '▵',
          triangledown: '▿',
          triangleleft: '◃',
          trianglelefteq: '⊴',
          triangleq: '≜',
          triangleright: '▹',
          trianglerighteq: '⊵',
          tridot: '◬',
          trie: '≜',
          triminus: '⨺',
          TripleDot: '⃛',
          triplus: '⨹',
          trisb: '⧍',
          tritime: '⨻',
          trpezium: '⏢',
          tscr: '𝓉',
          Tscr: '𝒯',
          tscy: 'ц',
          TScy: 'Ц',
          tshcy: 'ћ',
          TSHcy: 'Ћ',
          tstrok: 'ŧ',
          Tstrok: 'Ŧ',
          twixt: '≬',
          twoheadleftarrow: '↞',
          twoheadrightarrow: '↠',
          uacute: 'ú',
          Uacute: 'Ú',
          uarr: '↑',
          uArr: '⇑',
          Uarr: '↟',
          Uarrocir: '⥉',
          ubrcy: 'ў',
          Ubrcy: 'Ў',
          ubreve: 'ŭ',
          Ubreve: 'Ŭ',
          ucirc: 'û',
          Ucirc: 'Û',
          ucy: 'у',
          Ucy: 'У',
          udarr: '⇅',
          udblac: 'ű',
          Udblac: 'Ű',
          udhar: '⥮',
          ufisht: '⥾',
          ufr: '𝔲',
          Ufr: '𝔘',
          ugrave: 'ù',
          Ugrave: 'Ù',
          uHar: '⥣',
          uharl: '↿',
          uharr: '↾',
          uhblk: '▀',
          ulcorn: '⌜',
          ulcorner: '⌜',
          ulcrop: '⌏',
          ultri: '◸',
          umacr: 'ū',
          Umacr: 'Ū',
          uml: '¨',
          UnderBar: '_',
          UnderBrace: '⏟',
          UnderBracket: '⎵',
          UnderParenthesis: '⏝',
          Union: '⋃',
          UnionPlus: '⊎',
          uogon: 'ų',
          Uogon: 'Ų',
          uopf: '𝕦',
          Uopf: '𝕌',
          uparrow: '↑',
          Uparrow: '⇑',
          UpArrow: '↑',
          UpArrowBar: '⤒',
          UpArrowDownArrow: '⇅',
          updownarrow: '↕',
          Updownarrow: '⇕',
          UpDownArrow: '↕',
          UpEquilibrium: '⥮',
          upharpoonleft: '↿',
          upharpoonright: '↾',
          uplus: '⊎',
          UpperLeftArrow: '↖',
          UpperRightArrow: '↗',
          upsi: 'υ',
          Upsi: 'ϒ',
          upsih: 'ϒ',
          upsilon: 'υ',
          Upsilon: 'Υ',
          UpTee: '⊥',
          UpTeeArrow: '↥',
          upuparrows: '⇈',
          urcorn: '⌝',
          urcorner: '⌝',
          urcrop: '⌎',
          uring: 'ů',
          Uring: 'Ů',
          urtri: '◹',
          uscr: '𝓊',
          Uscr: '𝒰',
          utdot: '⋰',
          utilde: 'ũ',
          Utilde: 'Ũ',
          utri: '▵',
          utrif: '▴',
          uuarr: '⇈',
          uuml: 'ü',
          Uuml: 'Ü',
          uwangle: '⦧',
          vangrt: '⦜',
          varepsilon: 'ϵ',
          varkappa: 'ϰ',
          varnothing: '∅',
          varphi: 'ϕ',
          varpi: 'ϖ',
          varpropto: '∝',
          varr: '↕',
          vArr: '⇕',
          varrho: 'ϱ',
          varsigma: 'ς',
          varsubsetneq: '⊊︀',
          varsubsetneqq: '⫋︀',
          varsupsetneq: '⊋︀',
          varsupsetneqq: '⫌︀',
          vartheta: 'ϑ',
          vartriangleleft: '⊲',
          vartriangleright: '⊳',
          vBar: '⫨',
          Vbar: '⫫',
          vBarv: '⫩',
          vcy: 'в',
          Vcy: 'В',
          vdash: '⊢',
          vDash: '⊨',
          Vdash: '⊩',
          VDash: '⊫',
          Vdashl: '⫦',
          vee: '∨',
          Vee: '⋁',
          veebar: '⊻',
          veeeq: '≚',
          vellip: '⋮',
          verbar: '|',
          Verbar: '‖',
          vert: '|',
          Vert: '‖',
          VerticalBar: '∣',
          VerticalLine: '|',
          VerticalSeparator: '❘',
          VerticalTilde: '≀',
          VeryThinSpace: ' ',
          vfr: '𝔳',
          Vfr: '𝔙',
          vltri: '⊲',
          vnsub: '⊂⃒',
          vnsup: '⊃⃒',
          vopf: '𝕧',
          Vopf: '𝕍',
          vprop: '∝',
          vrtri: '⊳',
          vscr: '𝓋',
          Vscr: '𝒱',
          vsubne: '⊊︀',
          vsubnE: '⫋︀',
          vsupne: '⊋︀',
          vsupnE: '⫌︀',
          Vvdash: '⊪',
          vzigzag: '⦚',
          wcirc: 'ŵ',
          Wcirc: 'Ŵ',
          wedbar: '⩟',
          wedge: '∧',
          Wedge: '⋀',
          wedgeq: '≙',
          weierp: '℘',
          wfr: '𝔴',
          Wfr: '𝔚',
          wopf: '𝕨',
          Wopf: '𝕎',
          wp: '℘',
          wr: '≀',
          wreath: '≀',
          wscr: '𝓌',
          Wscr: '𝒲',
          xcap: '⋂',
          xcirc: '◯',
          xcup: '⋃',
          xdtri: '▽',
          xfr: '𝔵',
          Xfr: '𝔛',
          xharr: '⟷',
          xhArr: '⟺',
          xi: 'ξ',
          Xi: 'Ξ',
          xlarr: '⟵',
          xlArr: '⟸',
          xmap: '⟼',
          xnis: '⋻',
          xodot: '⨀',
          xopf: '𝕩',
          Xopf: '𝕏',
          xoplus: '⨁',
          xotime: '⨂',
          xrarr: '⟶',
          xrArr: '⟹',
          xscr: '𝓍',
          Xscr: '𝒳',
          xsqcup: '⨆',
          xuplus: '⨄',
          xutri: '△',
          xvee: '⋁',
          xwedge: '⋀',
          yacute: 'ý',
          Yacute: 'Ý',
          yacy: 'я',
          YAcy: 'Я',
          ycirc: 'ŷ',
          Ycirc: 'Ŷ',
          ycy: 'ы',
          Ycy: 'Ы',
          yen: '¥',
          yfr: '𝔶',
          Yfr: '𝔜',
          yicy: 'ї',
          YIcy: 'Ї',
          yopf: '𝕪',
          Yopf: '𝕐',
          yscr: '𝓎',
          Yscr: '𝒴',
          yucy: 'ю',
          YUcy: 'Ю',
          yuml: 'ÿ',
          Yuml: 'Ÿ',
          zacute: 'ź',
          Zacute: 'Ź',
          zcaron: 'ž',
          Zcaron: 'Ž',
          zcy: 'з',
          Zcy: 'З',
          zdot: 'ż',
          Zdot: 'Ż',
          zeetrf: 'ℨ',
          ZeroWidthSpace: '​',
          zeta: 'ζ',
          Zeta: 'Ζ',
          zfr: '𝔷',
          Zfr: 'ℨ',
          zhcy: 'ж',
          ZHcy: 'Ж',
          zigrarr: '⇝',
          zopf: '𝕫',
          Zopf: 'ℤ',
          zscr: '𝓏',
          Zscr: '𝒵',
          zwj: '‍',
          zwnj: '‌',
        }
        var v = {
          aacute: 'á',
          Aacute: 'Á',
          acirc: 'â',
          Acirc: 'Â',
          acute: '´',
          aelig: 'æ',
          AElig: 'Æ',
          agrave: 'à',
          Agrave: 'À',
          amp: '&',
          AMP: '&',
          aring: 'å',
          Aring: 'Å',
          atilde: 'ã',
          Atilde: 'Ã',
          auml: 'ä',
          Auml: 'Ä',
          brvbar: '¦',
          ccedil: 'ç',
          Ccedil: 'Ç',
          cedil: '¸',
          cent: '¢',
          copy: '©',
          COPY: '©',
          curren: '¤',
          deg: '°',
          divide: '÷',
          eacute: 'é',
          Eacute: 'É',
          ecirc: 'ê',
          Ecirc: 'Ê',
          egrave: 'è',
          Egrave: 'È',
          eth: 'ð',
          ETH: 'Ð',
          euml: 'ë',
          Euml: 'Ë',
          frac12: '½',
          frac14: '¼',
          frac34: '¾',
          gt: '>',
          GT: '>',
          iacute: 'í',
          Iacute: 'Í',
          icirc: 'î',
          Icirc: 'Î',
          iexcl: '¡',
          igrave: 'ì',
          Igrave: 'Ì',
          iquest: '¿',
          iuml: 'ï',
          Iuml: 'Ï',
          laquo: '«',
          lt: '<',
          LT: '<',
          macr: '¯',
          micro: 'µ',
          middot: '·',
          nbsp: ' ',
          not: '¬',
          ntilde: 'ñ',
          Ntilde: 'Ñ',
          oacute: 'ó',
          Oacute: 'Ó',
          ocirc: 'ô',
          Ocirc: 'Ô',
          ograve: 'ò',
          Ograve: 'Ò',
          ordf: 'ª',
          ordm: 'º',
          oslash: 'ø',
          Oslash: 'Ø',
          otilde: 'õ',
          Otilde: 'Õ',
          ouml: 'ö',
          Ouml: 'Ö',
          para: '¶',
          plusmn: '±',
          pound: '£',
          quot: '"',
          QUOT: '"',
          raquo: '»',
          reg: '®',
          REG: '®',
          sect: '§',
          shy: '­',
          sup1: '¹',
          sup2: '²',
          sup3: '³',
          szlig: 'ß',
          thorn: 'þ',
          THORN: 'Þ',
          times: '×',
          uacute: 'ú',
          Uacute: 'Ú',
          ucirc: 'û',
          Ucirc: 'Û',
          ugrave: 'ù',
          Ugrave: 'Ù',
          uml: '¨',
          uuml: 'ü',
          Uuml: 'Ü',
          yacute: 'ý',
          Yacute: 'Ý',
          yen: '¥',
          yuml: 'ÿ',
        }
        var b = {
          0: '�',
          128: '€',
          130: '‚',
          131: 'ƒ',
          132: '„',
          133: '…',
          134: '†',
          135: '‡',
          136: 'ˆ',
          137: '‰',
          138: 'Š',
          139: '‹',
          140: 'Œ',
          142: 'Ž',
          145: '‘',
          146: '’',
          147: '“',
          148: '”',
          149: '•',
          150: '–',
          151: '—',
          152: '˜',
          153: '™',
          154: 'š',
          155: '›',
          156: 'œ',
          158: 'ž',
          159: 'Ÿ',
        }
        var y = [
          1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133,
          134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
          148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976,
          64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986,
          64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996,
          64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006,
          65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143,
          327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287,
          589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431,
          851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
          1114110, 1114111,
        ]
        var w = String.fromCharCode
        var T = {}
        var E = T.hasOwnProperty
        var has = function (e, r) {
          return E.call(e, r)
        }
        var contains = function (e, r) {
          var t = -1
          var a = e.length
          while (++t < a) {
            if (e[t] == r) {
              return true
            }
          }
          return false
        }
        var merge = function (e, r) {
          if (!e) {
            return r
          }
          var t = {}
          var a
          for (a in r) {
            t[a] = has(e, a) ? e[a] : r[a]
          }
          return t
        }
        var codePointToSymbol = function (e, r) {
          var t = ''
          if ((e >= 55296 && e <= 57343) || e > 1114111) {
            if (r) {
              parseError(
                'character reference outside the permissible Unicode range'
              )
            }
            return '�'
          }
          if (has(b, e)) {
            if (r) {
              parseError('disallowed character reference')
            }
            return b[e]
          }
          if (r && contains(y, e)) {
            parseError('disallowed character reference')
          }
          if (e > 65535) {
            e -= 65536
            t += w(((e >>> 10) & 1023) | 55296)
            e = 56320 | (e & 1023)
          }
          t += w(e)
          return t
        }
        var hexEscape = function (e) {
          return '&#x' + e.toString(16).toUpperCase() + ';'
        }
        var decEscape = function (e) {
          return '&#' + e + ';'
        }
        var parseError = function (e) {
          throw Error('Parse error: ' + e)
        }
        var encode = function (e, r) {
          r = merge(r, encode.options)
          var t = r.strict
          if (t && g.test(e)) {
            parseError('forbidden code point')
          }
          var a = r.encodeEverything
          var n = r.useNamedReferences
          var i = r.allowUnsafeSymbols
          var d = r.decimal ? decEscape : hexEscape
          var escapeBmpSymbol = function (e) {
            return d(e.charCodeAt(0))
          }
          if (a) {
            e = e.replace(s, function (e) {
              if (n && has(c, e)) {
                return '&' + c[e] + ';'
              }
              return escapeBmpSymbol(e)
            })
            if (n) {
              e = e
                .replace(/&gt;\u20D2/g, '&nvgt;')
                .replace(/&lt;\u20D2/g, '&nvlt;')
                .replace(/&#x66;&#x6A;/g, '&fjlig;')
            }
            if (n) {
              e = e.replace(l, function (e) {
                return '&' + c[e] + ';'
              })
            }
          } else if (n) {
            if (!i) {
              e = e.replace(p, function (e) {
                return '&' + c[e] + ';'
              })
            }
            e = e
              .replace(/&gt;\u20D2/g, '&nvgt;')
              .replace(/&lt;\u20D2/g, '&nvlt;')
            e = e.replace(l, function (e) {
              return '&' + c[e] + ';'
            })
          } else if (!i) {
            e = e.replace(p, escapeBmpSymbol)
          }
          return e
            .replace(o, function (e) {
              var r = e.charCodeAt(0)
              var t = e.charCodeAt(1)
              var a = (r - 55296) * 1024 + t - 56320 + 65536
              return d(a)
            })
            .replace(u, escapeBmpSymbol)
        }
        encode.options = {
          allowUnsafeSymbols: false,
          encodeEverything: false,
          strict: false,
          useNamedReferences: false,
          decimal: false,
        }
        var decode = function (e, r) {
          r = merge(r, decode.options)
          var t = r.strict
          if (t && f.test(e)) {
            parseError('malformed character reference')
          }
          return e.replace(h, function (e, a, n, i, o, s, u, l, c) {
            var p
            var d
            var f
            var g
            var h
            var b
            if (a) {
              h = a
              return m[h]
            }
            if (n) {
              h = n
              b = i
              if (b && r.isAttributeValue) {
                if (t && b == '=') {
                  parseError('`&` did not start a character reference')
                }
                return e
              } else {
                if (t) {
                  parseError(
                    'named character reference was not terminated by a semicolon'
                  )
                }
                return v[h] + (b || '')
              }
            }
            if (o) {
              f = o
              d = s
              if (t && !d) {
                parseError(
                  'character reference was not terminated by a semicolon'
                )
              }
              p = parseInt(f, 10)
              return codePointToSymbol(p, t)
            }
            if (u) {
              g = u
              d = l
              if (t && !d) {
                parseError(
                  'character reference was not terminated by a semicolon'
                )
              }
              p = parseInt(g, 16)
              return codePointToSymbol(p, t)
            }
            if (t) {
              parseError(
                'named character reference was not terminated by a semicolon'
              )
            }
            return e
          })
        }
        decode.options = { isAttributeValue: false, strict: false }
        var escape = function (e) {
          return e.replace(p, function (e) {
            return d[e]
          })
        }
        var A = {
          version: '1.2.0',
          encode: encode,
          decode: decode,
          escape: escape,
          unescape: decode,
        }
        if (
          typeof define == 'function' &&
          typeof define.amd == 'object' &&
          define.amd
        ) {
          define(function () {
            return A
          })
        } else if (a && !a.nodeType) {
          if (n) {
            n.exports = A
          } else {
            for (var q in A) {
              has(A, q) && (a[q] = A[q])
            }
          }
        } else {
          t.he = A
        }
      })(this)
    },
    5596: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      function arr_back(e) {
        return e[e.length - 1]
      }
      r['default'] = arr_back
    },
    5417: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.NodeType =
        r.TextNode =
        r.Node =
        r.valid =
        r['default'] =
        r.parse =
        r.HTMLElement =
        r.CommentNode =
          void 0
      var n = t(190)
      Object.defineProperty(r, 'CommentNode', {
        enumerable: true,
        get: function () {
          return a(n).default
        },
      })
      var i = t(3248)
      Object.defineProperty(r, 'HTMLElement', {
        enumerable: true,
        get: function () {
          return a(i).default
        },
      })
      var o = t(8653)
      Object.defineProperty(r, 'parse', {
        enumerable: true,
        get: function () {
          return a(o).default
        },
      })
      Object.defineProperty(r, 'default', {
        enumerable: true,
        get: function () {
          return a(o).default
        },
      })
      var s = t(3494)
      Object.defineProperty(r, 'valid', {
        enumerable: true,
        get: function () {
          return a(s).default
        },
      })
      var u = t(7402)
      Object.defineProperty(r, 'Node', {
        enumerable: true,
        get: function () {
          return a(u).default
        },
      })
      var l = t(111)
      Object.defineProperty(r, 'TextNode', {
        enumerable: true,
        get: function () {
          return a(l).default
        },
      })
      var c = t(5896)
      Object.defineProperty(r, 'NodeType', {
        enumerable: true,
        get: function () {
          return a(c).default
        },
      })
    },
    9958: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var n = a(t(5896))
      function isTag(e) {
        return e && e.nodeType === n.default.ELEMENT_NODE
      }
      function getAttributeValue(e, r) {
        return isTag(e) ? e.getAttribute(r) : undefined
      }
      function getName(e) {
        return ((e && e.rawTagName) || '').toLowerCase()
      }
      function getChildren(e) {
        return e && e.childNodes
      }
      function getParent(e) {
        return e ? e.parentNode : null
      }
      function getText(e) {
        return e.text
      }
      function removeSubsets(e) {
        var r = e.length
        var t
        var a
        var n
        while (--r > -1) {
          t = a = e[r]
          e[r] = null
          n = true
          while (a) {
            if (e.indexOf(a) > -1) {
              n = false
              e.splice(r, 1)
              break
            }
            a = getParent(a)
          }
          if (n) {
            e[r] = t
          }
        }
        return e
      }
      function existsOne(e, r) {
        return r.some(function (r) {
          return isTag(r) ? e(r) || existsOne(e, getChildren(r)) : false
        })
      }
      function getSiblings(e) {
        var r = getParent(e)
        return r && getChildren(r)
      }
      function hasAttrib(e, r) {
        return getAttributeValue(e, r) !== undefined
      }
      function findOne(e, r) {
        var t = null
        for (var a = 0, n = r.length; a < n && !t; a++) {
          var i = r[a]
          if (e(i)) {
            t = i
          } else {
            var o = getChildren(i)
            if (o && o.length > 0) {
              t = findOne(e, o)
            }
          }
        }
        return t
      }
      function findAll(e, r) {
        var t = []
        for (var a = 0, n = r.length; a < n; a++) {
          if (!isTag(r[a])) continue
          if (e(r[a])) t.push(r[a])
          var i = getChildren(r[a])
          if (i) t = t.concat(findAll(e, i))
        }
        return t
      }
      r['default'] = {
        isTag: isTag,
        getAttributeValue: getAttributeValue,
        getName: getName,
        getChildren: getChildren,
        getParent: getParent,
        getText: getText,
        removeSubsets: removeSubsets,
        existsOne: existsOne,
        getSiblings: getSiblings,
        hasAttrib: hasAttrib,
        findOne: findOne,
        findAll: findAll,
      }
    },
    190: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (e, r) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r
                }) ||
              function (e, r) {
                for (var t in r)
                  if (Object.prototype.hasOwnProperty.call(r, t)) e[t] = r[t]
              }
            return extendStatics(e, r)
          }
          return function (e, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(r) +
                  ' is not a constructor or null'
              )
            extendStatics(e, r)
            function __() {
              this.constructor = e
            }
            e.prototype =
              r === null
                ? Object.create(r)
                : ((__.prototype = r.prototype), new __())
          }
        })()
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var i = n(t(7402))
      var o = n(t(5896))
      var s = (function (e) {
        a(CommentNode, e)
        function CommentNode(r, t, a) {
          var n = e.call(this, t, a) || this
          n.rawText = r
          n.nodeType = o.default.COMMENT_NODE
          return n
        }
        CommentNode.prototype.clone = function () {
          return new CommentNode(this.rawText, null)
        }
        Object.defineProperty(CommentNode.prototype, 'text', {
          get: function () {
            return this.rawText
          },
          enumerable: false,
          configurable: true,
        })
        CommentNode.prototype.toString = function () {
          return '\x3c!--'.concat(this.rawText, '--\x3e')
        }
        return CommentNode
      })(i.default)
      r['default'] = s
    },
    3248: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (e, r) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r
                }) ||
              function (e, r) {
                for (var t in r)
                  if (Object.prototype.hasOwnProperty.call(r, t)) e[t] = r[t]
              }
            return extendStatics(e, r)
          }
          return function (e, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(r) +
                  ' is not a constructor or null'
              )
            extendStatics(e, r)
            function __() {
              this.constructor = e
            }
            e.prototype =
              r === null
                ? Object.create(r)
                : ((__.prototype = r.prototype), new __())
          }
        })()
      var n =
        (this && this.__assign) ||
        function () {
          n =
            Object.assign ||
            function (e) {
              for (var r, t = 1, a = arguments.length; t < a; t++) {
                r = arguments[t]
                for (var n in r)
                  if (Object.prototype.hasOwnProperty.call(r, n)) e[n] = r[n]
              }
              return e
            }
          return n.apply(this, arguments)
        }
      var i =
        (this && this.__spreadArray) ||
        function (e, r, t) {
          if (t || arguments.length === 2)
            for (var a = 0, n = r.length, i; a < n; a++) {
              if (i || !(a in r)) {
                if (!i) i = Array.prototype.slice.call(r, 0, a)
                i[a] = r[a]
              }
            }
          return e.concat(i || Array.prototype.slice.call(r))
        }
      var o =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.parse = r.base_parse = void 0
      var s = t(1112)
      var u = o(t(5902))
      var l = o(t(5596))
      var c = o(t(9958))
      var p = o(t(190))
      var d = o(t(7402))
      var f = o(t(111))
      var g = o(t(5896))
      var h = new Set([
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ])
      function decode(e) {
        return JSON.parse(JSON.stringify(u.default.decode(e)))
      }
      var m = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup']
      var v = ['details', 'dialog', 'dd', 'div', 'dt']
      var b = ['fieldset', 'figcaption', 'figure', 'footer', 'form']
      var y = ['table', 'td', 'tr']
      var w = [
        'address',
        'article',
        'aside',
        'blockquote',
        'br',
        'hr',
        'li',
        'main',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'ul',
      ]
      var T = new Set()
      function addToKBlockElement() {
        var e = []
        for (var r = 0; r < arguments.length; r++) {
          e[r] = arguments[r]
        }
        var addToSet = function (e) {
          for (var r = 0; r < e.length; r++) {
            var t = e[r]
            T.add(t)
            T.add(t.toUpperCase())
          }
        }
        for (var t = 0, a = e; t < a.length; t++) {
          var n = a[t]
          addToSet(n)
        }
      }
      addToKBlockElement(m, v, b, y, w)
      var E = (function () {
        function DOMTokenList(e, r) {
          if (e === void 0) {
            e = []
          }
          if (r === void 0) {
            r = function () {
              return null
            }
          }
          this._set = new Set(e)
          this._afterUpdate = r
        }
        DOMTokenList.prototype._validate = function (e) {
          if (/\s/.test(e)) {
            throw new Error(
              "DOMException in DOMTokenList.add: The token '".concat(
                e,
                "' contains HTML space characters, which are not valid in tokens."
              )
            )
          }
        }
        DOMTokenList.prototype.add = function (e) {
          this._validate(e)
          this._set.add(e)
          this._afterUpdate(this)
        }
        DOMTokenList.prototype.replace = function (e, r) {
          this._validate(r)
          this._set.delete(e)
          this._set.add(r)
          this._afterUpdate(this)
        }
        DOMTokenList.prototype.remove = function (e) {
          this._set.delete(e) && this._afterUpdate(this)
        }
        DOMTokenList.prototype.toggle = function (e) {
          this._validate(e)
          if (this._set.has(e)) this._set.delete(e)
          else this._set.add(e)
          this._afterUpdate(this)
        }
        DOMTokenList.prototype.contains = function (e) {
          return this._set.has(e)
        }
        Object.defineProperty(DOMTokenList.prototype, 'length', {
          get: function () {
            return this._set.size
          },
          enumerable: false,
          configurable: true,
        })
        DOMTokenList.prototype.values = function () {
          return this._set.values()
        }
        Object.defineProperty(DOMTokenList.prototype, 'value', {
          get: function () {
            return Array.from(this._set.values())
          },
          enumerable: false,
          configurable: true,
        })
        DOMTokenList.prototype.toString = function () {
          return Array.from(this._set.values()).join(' ')
        }
        return DOMTokenList
      })()
      var A = (function (e) {
        a(HTMLElement, e)
        function HTMLElement(r, t, a, n, i) {
          if (a === void 0) {
            a = ''
          }
          var o = e.call(this, n, i) || this
          o.rawAttrs = a
          o.nodeType = g.default.ELEMENT_NODE
          o.rawTagName = r
          o.rawAttrs = a || ''
          o.id = t.id || ''
          o.childNodes = []
          o.classList = new E(t.class ? t.class.split(/\s+/) : [], function (
            e
          ) {
            return o.setAttribute('class', e.toString())
          })
          if (t.id) {
            if (!a) {
              o.rawAttrs = 'id="'.concat(t.id, '"')
            }
          }
          if (t.class) {
            if (!a) {
              var s = 'class="'.concat(o.classList.toString(), '"')
              if (o.rawAttrs) {
                o.rawAttrs += ' '.concat(s)
              } else {
                o.rawAttrs = s
              }
            }
          }
          return o
        }
        HTMLElement.prototype.quoteAttribute = function (e) {
          if (e == null) {
            return 'null'
          }
          return JSON.stringify(e.replace(/"/g, '&quot;'))
        }
        HTMLElement.prototype.removeChild = function (e) {
          this.childNodes = this.childNodes.filter(function (r) {
            return r !== e
          })
          return this
        }
        HTMLElement.prototype.exchangeChild = function (e, r) {
          var t = this.childNodes
          this.childNodes = t.map(function (t) {
            if (t === e) {
              return r
            }
            return t
          })
          return this
        }
        Object.defineProperty(HTMLElement.prototype, 'tagName', {
          get: function () {
            return this.rawTagName
              ? this.rawTagName.toUpperCase()
              : this.rawTagName
          },
          set: function (e) {
            this.rawTagName = e.toLowerCase()
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'localName', {
          get: function () {
            return this.rawTagName.toLowerCase()
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'isVoidElement', {
          get: function () {
            return h.has(this.localName)
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'rawText', {
          get: function () {
            return this.childNodes.reduce(function (e, r) {
              return (e += r.rawText)
            }, '')
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'textContent', {
          get: function () {
            return decode(this.rawText)
          },
          set: function (e) {
            var r = [new f.default(e, this)]
            this.childNodes = r
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'text', {
          get: function () {
            return decode(this.rawText)
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'structuredText', {
          get: function () {
            var e = []
            var r = [e]
            function dfs(t) {
              if (t.nodeType === g.default.ELEMENT_NODE) {
                if (T.has(t.rawTagName)) {
                  if (e.length > 0) {
                    r.push((e = []))
                  }
                  t.childNodes.forEach(dfs)
                  if (e.length > 0) {
                    r.push((e = []))
                  }
                } else {
                  t.childNodes.forEach(dfs)
                }
              } else if (t.nodeType === g.default.TEXT_NODE) {
                if (t.isWhitespace) {
                  e.prependWhitespace = true
                } else {
                  var a = t.trimmedText
                  if (e.prependWhitespace) {
                    a = ' '.concat(a)
                    e.prependWhitespace = false
                  }
                  e.push(a)
                }
              }
            }
            dfs(this)
            return r
              .map(function (e) {
                return e.join('').replace(/\s{2,}/g, ' ')
              })
              .join('\n')
              .replace(/\s+$/, '')
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.toString = function () {
          var e = this.rawTagName
          if (e) {
            var r = this.rawAttrs ? ' '.concat(this.rawAttrs) : ''
            return this.isVoidElement
              ? '<'.concat(e).concat(r, '>')
              : '<'
                  .concat(e)
                  .concat(r, '>')
                  .concat(this.innerHTML, '</')
                  .concat(e, '>')
          }
          return this.innerHTML
        }
        Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
          get: function () {
            return this.childNodes
              .map(function (e) {
                return e.toString()
              })
              .join('')
          },
          set: function (e) {
            var r = parse(e)
            var t = r.childNodes.length
              ? r.childNodes
              : [new f.default(e, this)]
            resetParent(t, this)
            resetParent(this.childNodes, null)
            this.childNodes = t
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.set_content = function (e, r) {
          if (r === void 0) {
            r = {}
          }
          if (e instanceof d.default) {
            e = [e]
          } else if (typeof e == 'string') {
            var t = parse(e, r)
            e = t.childNodes.length ? t.childNodes : [new f.default(e, this)]
          }
          resetParent(this.childNodes, null)
          resetParent(e, this)
          this.childNodes = e
          return this
        }
        HTMLElement.prototype.replaceWith = function () {
          var e = this
          var r = []
          for (var t = 0; t < arguments.length; t++) {
            r[t] = arguments[t]
          }
          var a = this.parentNode
          var n = r
            .map(function (r) {
              if (r instanceof d.default) {
                return [r]
              } else if (typeof r == 'string') {
                var t = parse(r)
                return t.childNodes.length
                  ? t.childNodes
                  : [new f.default(r, e)]
              }
              return []
            })
            .flat()
          var o = a.childNodes.findIndex(function (r) {
            return r === e
          })
          resetParent([this], null)
          a.childNodes = i(
            i(i([], a.childNodes.slice(0, o), true), resetParent(n, a), true),
            a.childNodes.slice(o + 1),
            true
          )
        }
        Object.defineProperty(HTMLElement.prototype, 'outerHTML', {
          get: function () {
            return this.toString()
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.trimRight = function (e) {
          for (var r = 0; r < this.childNodes.length; r++) {
            var t = this.childNodes[r]
            if (t.nodeType === g.default.ELEMENT_NODE) {
              t.trimRight(e)
            } else {
              var a = t.rawText.search(e)
              if (a > -1) {
                t.rawText = t.rawText.substr(0, a)
                this.childNodes.length = r + 1
              }
            }
          }
          return this
        }
        Object.defineProperty(HTMLElement.prototype, 'structure', {
          get: function () {
            var e = []
            var r = 0
            function write(t) {
              e.push('  '.repeat(r) + t)
            }
            function dfs(e) {
              var t = e.id ? '#'.concat(e.id) : ''
              var a = e.classList.length
                ? '.'.concat(e.classList.value.join('.'))
                : ''
              write(''.concat(e.rawTagName).concat(t).concat(a))
              r++
              e.childNodes.forEach(function (e) {
                if (e.nodeType === g.default.ELEMENT_NODE) {
                  dfs(e)
                } else if (e.nodeType === g.default.TEXT_NODE) {
                  if (!e.isWhitespace) {
                    write('#text')
                  }
                }
              })
              r--
            }
            dfs(this)
            return e.join('\n')
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.removeWhitespace = function () {
          var e = this
          var r = 0
          this.childNodes.forEach(function (t) {
            if (t.nodeType === g.default.TEXT_NODE) {
              if (t.isWhitespace) {
                return
              }
              t.rawText = t.trimmedRawText
            } else if (t.nodeType === g.default.ELEMENT_NODE) {
              t.removeWhitespace()
            }
            e.childNodes[r++] = t
          })
          this.childNodes.length = r
          return this
        }
        HTMLElement.prototype.querySelectorAll = function (e) {
          return (0, s.selectAll)(e, this, {
            xmlMode: true,
            adapter: c.default,
          })
        }
        HTMLElement.prototype.querySelector = function (e) {
          return (0, s.selectOne)(e, this, {
            xmlMode: true,
            adapter: c.default,
          })
        }
        HTMLElement.prototype.getElementsByTagName = function (e) {
          var r = e.toUpperCase()
          var t = []
          var a = []
          var n = this
          var i = 0
          while (i !== undefined) {
            var o = void 0
            do {
              o = n.childNodes[i++]
            } while (i < n.childNodes.length && o === undefined)
            if (o === undefined) {
              n = n.parentNode
              i = a.pop()
              continue
            }
            if (o.nodeType === g.default.ELEMENT_NODE) {
              if (e === '*' || o.tagName === r) t.push(o)
              if (o.childNodes.length > 0) {
                a.push(i)
                n = o
                i = 0
              }
            }
          }
          return t
        }
        HTMLElement.prototype.getElementById = function (e) {
          var r = []
          var t = this
          var a = 0
          while (a !== undefined) {
            var n = void 0
            do {
              n = t.childNodes[a++]
            } while (a < t.childNodes.length && n === undefined)
            if (n === undefined) {
              t = t.parentNode
              a = r.pop()
              continue
            }
            if (n.nodeType === g.default.ELEMENT_NODE) {
              if (n.id === e) {
                return n
              }
              if (n.childNodes.length > 0) {
                r.push(a)
                t = n
                a = 0
              }
            }
          }
          return null
        }
        HTMLElement.prototype.closest = function (e) {
          var r = new Map()
          var t = this
          var a = null
          function findOne(e, t) {
            var a = null
            for (var n = 0, i = t.length; n < i && !a; n++) {
              var o = t[n]
              if (e(o)) {
                a = o
              } else {
                var s = r.get(o)
                if (s) {
                  a = findOne(e, [s])
                }
              }
            }
            return a
          }
          while (t) {
            r.set(t, a)
            a = t
            t = t.parentNode
          }
          t = this
          while (t) {
            var i = (0, s.selectOne)(e, t, {
              xmlMode: true,
              adapter: n(n({}, c.default), {
                getChildren: function (e) {
                  var t = r.get(e)
                  return t && [t]
                },
                getSiblings: function (e) {
                  return [e]
                },
                findOne: findOne,
                findAll: function () {
                  return []
                },
              }),
            })
            if (i) {
              return i
            }
            t = t.parentNode
          }
          return null
        }
        HTMLElement.prototype.appendChild = function (e) {
          e.remove()
          this.childNodes.push(e)
          e.parentNode = this
          return e
        }
        Object.defineProperty(HTMLElement.prototype, 'firstChild', {
          get: function () {
            return this.childNodes[0]
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'lastChild', {
          get: function () {
            return (0, l.default)(this.childNodes)
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'attrs', {
          get: function () {
            if (this._attrs) {
              return this._attrs
            }
            this._attrs = {}
            var e = this.rawAttributes
            for (var r in e) {
              var t = e[r] || ''
              this._attrs[r.toLowerCase()] = decode(t)
            }
            return this._attrs
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'attributes', {
          get: function () {
            var e = {}
            var r = this.rawAttributes
            for (var t in r) {
              var a = r[t] || ''
              e[t] = decode(a)
            }
            return e
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'rawAttributes', {
          get: function () {
            if (this._rawAttrs) {
              return this._rawAttrs
            }
            var e = {}
            if (this.rawAttrs) {
              var r =
                /([a-zA-Z()#][a-zA-Z0-9-_:()#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g
              var t = void 0
              while ((t = r.exec(this.rawAttrs))) {
                var a = t[1]
                var n = t[2] || null
                if (n && (n[0] === "'" || n[0] === '"'))
                  n = n.slice(1, n.length - 1)
                e[a] = n
              }
            }
            this._rawAttrs = e
            return e
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.removeAttribute = function (e) {
          var r = this.rawAttributes
          delete r[e]
          if (this._attrs) {
            delete this._attrs[e]
          }
          this.rawAttrs = Object.keys(r)
            .map(function (e) {
              var t = JSON.stringify(r[e])
              if (t === undefined || t === 'null') {
                return e
              }
              return ''.concat(e, '=').concat(t)
            })
            .join(' ')
          if (e === 'id') {
            this.id = ''
          }
          return this
        }
        HTMLElement.prototype.hasAttribute = function (e) {
          return e.toLowerCase() in this.attrs
        }
        HTMLElement.prototype.getAttribute = function (e) {
          return this.attrs[e.toLowerCase()]
        }
        HTMLElement.prototype.setAttribute = function (e, r) {
          var t = this
          if (arguments.length < 2) {
            throw new Error("Failed to execute 'setAttribute' on 'Element'")
          }
          var a = e.toLowerCase()
          var n = this.rawAttributes
          for (var i in n) {
            if (i.toLowerCase() === a) {
              e = i
              break
            }
          }
          n[e] = String(r)
          if (this._attrs) {
            this._attrs[a] = decode(n[e])
          }
          this.rawAttrs = Object.keys(n)
            .map(function (e) {
              var r = t.quoteAttribute(n[e])
              if (r === 'null' || r === '""') return e
              return ''.concat(e, '=').concat(r)
            })
            .join(' ')
          if (e === 'id') {
            this.id = r
          }
        }
        HTMLElement.prototype.setAttributes = function (e) {
          var r = this
          if (this._attrs) {
            delete this._attrs
          }
          if (this._rawAttrs) {
            delete this._rawAttrs
          }
          this.rawAttrs = Object.keys(e)
            .map(function (t) {
              var a = e[t]
              if (a === 'null' || a === '""') return t
              return ''.concat(t, '=').concat(r.quoteAttribute(String(a)))
            })
            .join(' ')
          return this
        }
        HTMLElement.prototype.insertAdjacentHTML = function (e, r) {
          var t, a, n
          var o = this
          if (arguments.length < 2) {
            throw new Error('2 arguments required')
          }
          var s = parse(r)
          if (e === 'afterend') {
            var u = this.parentNode.childNodes.findIndex(function (e) {
              return e === o
            })
            resetParent(s.childNodes, this.parentNode)
            ;(t = this.parentNode.childNodes).splice.apply(
              t,
              i([u + 1, 0], s.childNodes, false)
            )
          } else if (e === 'afterbegin') {
            resetParent(s.childNodes, this)
            ;(a = this.childNodes).unshift.apply(a, s.childNodes)
          } else if (e === 'beforeend') {
            s.childNodes.forEach(function (e) {
              o.appendChild(e)
            })
          } else if (e === 'beforebegin') {
            var u = this.parentNode.childNodes.findIndex(function (e) {
              return e === o
            })
            resetParent(s.childNodes, this.parentNode)
            ;(n = this.parentNode.childNodes).splice.apply(
              n,
              i([u, 0], s.childNodes, false)
            )
          } else {
            throw new Error(
              "The value provided ('".concat(
                e,
                "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"
              )
            )
          }
          return this
        }
        Object.defineProperty(HTMLElement.prototype, 'nextSibling', {
          get: function () {
            if (this.parentNode) {
              var e = this.parentNode.childNodes
              var r = 0
              while (r < e.length) {
                var t = e[r++]
                if (this === t) return e[r] || null
              }
              return null
            }
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'nextElementSibling', {
          get: function () {
            if (this.parentNode) {
              var e = this.parentNode.childNodes
              var r = 0
              var t = false
              while (r < e.length) {
                var a = e[r++]
                if (t) {
                  if (a instanceof HTMLElement) {
                    return a || null
                  }
                } else if (this === a) {
                  t = true
                }
              }
              return null
            }
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'previousSibling', {
          get: function () {
            if (this.parentNode) {
              var e = this.parentNode.childNodes
              var r = e.length
              while (r > 0) {
                var t = e[--r]
                if (this === t) return e[r - 1] || null
              }
              return null
            }
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'previousElementSibling', {
          get: function () {
            if (this.parentNode) {
              var e = this.parentNode.childNodes
              var r = e.length
              var t = false
              while (r > 0) {
                var a = e[--r]
                if (t) {
                  if (a instanceof HTMLElement) {
                    return a || null
                  }
                } else if (this === a) {
                  t = true
                }
              }
              return null
            }
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(HTMLElement.prototype, 'classNames', {
          get: function () {
            return this.classList.toString()
          },
          enumerable: false,
          configurable: true,
        })
        HTMLElement.prototype.clone = function () {
          return parse(this.toString()).firstChild
        }
        return HTMLElement
      })(d.default)
      r['default'] = A
      var q =
        /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g
      var x = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi
      var D = {
        area: true,
        AREA: true,
        base: true,
        BASE: true,
        br: true,
        BR: true,
        col: true,
        COL: true,
        hr: true,
        HR: true,
        img: true,
        IMG: true,
        input: true,
        INPUT: true,
        link: true,
        LINK: true,
        meta: true,
        META: true,
        source: true,
        SOURCE: true,
        embed: true,
        EMBED: true,
        param: true,
        PARAM: true,
        track: true,
        TRACK: true,
        wbr: true,
        WBR: true,
      }
      var C = {
        li: { li: true, LI: true },
        LI: { li: true, LI: true },
        p: { p: true, div: true, P: true, DIV: true },
        P: { p: true, div: true, P: true, DIV: true },
        b: { div: true, DIV: true },
        B: { div: true, DIV: true },
        td: { td: true, th: true, TD: true, TH: true },
        TD: { td: true, th: true, TD: true, TH: true },
        th: { td: true, th: true, TD: true, TH: true },
        TH: { td: true, th: true, TD: true, TH: true },
        h1: { h1: true, H1: true },
        H1: { h1: true, H1: true },
        h2: { h2: true, H2: true },
        H2: { h2: true, H2: true },
        h3: { h3: true, H3: true },
        H3: { h3: true, H3: true },
        h4: { h4: true, H4: true },
        H4: { h4: true, H4: true },
        h5: { h5: true, H5: true },
        H5: { h5: true, H5: true },
        h6: { h6: true, H6: true },
        H6: { h6: true, H6: true },
      }
      var N = {
        li: { ul: true, ol: true, UL: true, OL: true },
        LI: { ul: true, ol: true, UL: true, OL: true },
        a: { div: true, DIV: true },
        A: { div: true, DIV: true },
        b: { div: true, DIV: true },
        B: { div: true, DIV: true },
        i: { div: true, DIV: true },
        I: { div: true, DIV: true },
        p: { div: true, DIV: true },
        P: { div: true, DIV: true },
        td: { tr: true, table: true, TR: true, TABLE: true },
        TD: { tr: true, table: true, TR: true, TABLE: true },
        th: { tr: true, table: true, TR: true, TABLE: true },
        TH: { tr: true, table: true, TR: true, TABLE: true },
      }
      var S = 'documentfragmentcontainer'
      function base_parse(e, r) {
        if (r === void 0) {
          r = { lowerCaseTagName: false, comment: false }
        }
        var t = r.blockTextElements || {
          script: true,
          noscript: true,
          style: true,
          pre: true,
        }
        var a = Object.keys(t)
        var n = a.map(function (e) {
          return new RegExp('^'.concat(e, '$'), 'i')
        })
        var i = a
          .filter(function (e) {
            return t[e]
          })
          .map(function (e) {
            return new RegExp('^'.concat(e, '$'), 'i')
          })
        function element_should_be_ignore(e) {
          return i.some(function (r) {
            return r.test(e)
          })
        }
        function is_block_text_element(e) {
          return n.some(function (r) {
            return r.test(e)
          })
        }
        var createRange = function (e, r) {
          return [e - v, r - v]
        }
        var o = new A(null, {}, '', null, [0, e.length])
        var s = o
        var u = [o]
        var c = -1
        var d = undefined
        var g
        e = '<'.concat(S, '>').concat(e, '</').concat(S, '>')
        var h = r.lowerCaseTagName
        var m = e.length - (S.length + 2)
        var v = S.length + 2
        while ((g = q.exec(e))) {
          var b = g[0],
            y = g[1],
            w = g[2],
            T = g[3],
            E = g[4]
          var L = b.length
          var k = q.lastIndex - L
          var O = q.lastIndex
          if (c > -1) {
            if (c + L < O) {
              var _ = e.substring(c, k)
              s.appendChild(new f.default(_, s, createRange(c, k)))
            }
          }
          c = q.lastIndex
          if (w === S) continue
          if (b[1] === '!') {
            if (r.comment) {
              var _ = e.substring(k + 4, O - 3)
              s.appendChild(new p.default(_, s, createRange(k, O)))
            }
            continue
          }
          if (h) w = w.toLowerCase()
          if (!y) {
            var P = {}
            for (var R = void 0; (R = x.exec(T)); ) {
              var B = R[1],
                M = R[2]
              var j = M[0] === "'" || M[0] === '"'
              P[B.toLowerCase()] = j ? M.slice(1, M.length - 1) : M
            }
            var H = s.rawTagName
            if (!E && C[H]) {
              if (C[H][w]) {
                u.pop()
                s = (0, l.default)(u)
              }
            }
            if (w === 'a' || w === 'A') {
              if (d !== undefined) {
                u.splice(d)
                s = (0, l.default)(u)
              }
              d = u.length
            }
            var F = q.lastIndex
            var V = F - L
            s = s.appendChild(new A(w, P, T.slice(1), null, createRange(V, F)))
            u.push(s)
            if (is_block_text_element(w)) {
              var U = '</'.concat(w, '>')
              var I = h
                ? e.toLocaleLowerCase().indexOf(U, q.lastIndex)
                : e.indexOf(U, q.lastIndex)
              var G = I === -1 ? m : I
              if (element_should_be_ignore(w)) {
                var _ = e.substring(F, G)
                if (_.length > 0 && /\S/.test(_)) {
                  s.appendChild(new f.default(_, s, createRange(F, G)))
                }
              }
              if (I === -1) {
                c = q.lastIndex = e.length + 1
              } else {
                c = q.lastIndex = I + U.length
                y = '/'
              }
            }
          }
          if (y || E || D[w]) {
            while (true) {
              if (w === 'a' || w === 'A') d = undefined
              if (s.rawTagName === w) {
                s.range[1] = createRange(-1, Math.max(c, O))[1]
                u.pop()
                s = (0, l.default)(u)
                break
              } else {
                var H = s.tagName
                if (N[H]) {
                  if (N[H][w]) {
                    u.pop()
                    s = (0, l.default)(u)
                    continue
                  }
                }
                break
              }
            }
          }
        }
        return u
      }
      r.base_parse = base_parse
      function parse(e, r) {
        if (r === void 0) {
          r = { lowerCaseTagName: false, comment: false }
        }
        var t = base_parse(e, r)
        var a = t[0]
        var _loop_1 = function () {
          var e = t.pop()
          var a = (0, l.default)(t)
          if (e.parentNode && e.parentNode.parentNode) {
            if (e.parentNode === a && e.tagName === a.tagName) {
              if (r.parseNoneClosedTags !== true) {
                a.removeChild(e)
                e.childNodes.forEach(function (e) {
                  a.parentNode.appendChild(e)
                })
                t.pop()
              }
            } else {
              if (r.parseNoneClosedTags !== true) {
                a.removeChild(e)
                e.childNodes.forEach(function (e) {
                  a.appendChild(e)
                })
              }
            }
          } else {
          }
        }
        while (t.length > 1) {
          _loop_1()
        }
        return a
      }
      r.parse = parse
      function resetParent(e, r) {
        return e.map(function (e) {
          e.parentNode = r
          return e
        })
      }
    },
    7402: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      var a = t(5902)
      var n = (function () {
        function Node(e, r) {
          if (e === void 0) {
            e = null
          }
          this.parentNode = e
          this.childNodes = []
          Object.defineProperty(this, 'range', {
            enumerable: false,
            writable: true,
            configurable: true,
            value: r !== null && r !== void 0 ? r : [-1, -1],
          })
        }
        Node.prototype.remove = function () {
          var e = this
          if (this.parentNode) {
            var r = this.parentNode.childNodes
            this.parentNode.childNodes = r.filter(function (r) {
              return e !== r
            })
            this.parentNode = null
          }
          return this
        }
        Object.defineProperty(Node.prototype, 'innerText', {
          get: function () {
            return this.rawText
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(Node.prototype, 'textContent', {
          get: function () {
            return (0, a.decode)(this.rawText)
          },
          set: function (e) {
            this.rawText = (0, a.encode)(e)
          },
          enumerable: false,
          configurable: true,
        })
        return Node
      })()
      r['default'] = n
    },
    111: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__extends) ||
        (function () {
          var extendStatics = function (e, r) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                  e.__proto__ = r
                }) ||
              function (e, r) {
                for (var t in r)
                  if (Object.prototype.hasOwnProperty.call(r, t)) e[t] = r[t]
              }
            return extendStatics(e, r)
          }
          return function (e, r) {
            if (typeof r !== 'function' && r !== null)
              throw new TypeError(
                'Class extends value ' +
                  String(r) +
                  ' is not a constructor or null'
              )
            extendStatics(e, r)
            function __() {
              this.constructor = e
            }
            e.prototype =
              r === null
                ? Object.create(r)
                : ((__.prototype = r.prototype), new __())
          }
        })()
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      var i = t(5902)
      var o = n(t(7402))
      var s = n(t(5896))
      var u = (function (e) {
        a(TextNode, e)
        function TextNode(r, t, a) {
          var n = e.call(this, t, a) || this
          n.nodeType = s.default.TEXT_NODE
          n._rawText = r
          return n
        }
        TextNode.prototype.clone = function () {
          return new TextNode(this._rawText, null)
        }
        Object.defineProperty(TextNode.prototype, 'rawText', {
          get: function () {
            return this._rawText
          },
          set: function (e) {
            this._rawText = e
            this._trimmedRawText = void 0
            this._trimmedText = void 0
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(TextNode.prototype, 'trimmedRawText', {
          get: function () {
            if (this._trimmedRawText !== undefined) return this._trimmedRawText
            this._trimmedRawText = trimText(this.rawText)
            return this._trimmedRawText
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(TextNode.prototype, 'trimmedText', {
          get: function () {
            if (this._trimmedText !== undefined) return this._trimmedText
            this._trimmedText = trimText(this.text)
            return this._trimmedText
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(TextNode.prototype, 'text', {
          get: function () {
            return (0, i.decode)(this.rawText)
          },
          enumerable: false,
          configurable: true,
        })
        Object.defineProperty(TextNode.prototype, 'isWhitespace', {
          get: function () {
            return /^(\s|&nbsp;)*$/.test(this.rawText)
          },
          enumerable: false,
          configurable: true,
        })
        TextNode.prototype.toString = function () {
          return this.rawText
        }
        return TextNode
      })(o.default)
      r['default'] = u
      function trimText(e) {
        var r = 0
        var t
        var a
        while (r >= 0 && r < e.length) {
          if (/\S/.test(e[r])) {
            if (t === undefined) {
              t = r
              r = e.length
            } else {
              a = r
              r = void 0
            }
          }
          if (t === undefined) r++
          else r--
        }
        if (t === undefined) t = 0
        if (a === undefined) a = e.length - 1
        var n = t > 0 && /[^\S\r\n]/.test(e[t - 1])
        var i = a < e.length - 1 && /[^\S\r\n]/.test(e[a + 1])
        return (n ? ' ' : '') + e.slice(t, a + 1) + (i ? ' ' : '')
      }
    },
    5896: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      var t
      ;(function (e) {
        e[(e['ELEMENT_NODE'] = 1)] = 'ELEMENT_NODE'
        e[(e['TEXT_NODE'] = 3)] = 'TEXT_NODE'
        e[(e['COMMENT_NODE'] = 8)] = 'COMMENT_NODE'
      })(t || (t = {}))
      r['default'] = t
    },
    8653: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r['default'] = void 0
      var a = t(3248)
      Object.defineProperty(r, 'default', {
        enumerable: true,
        get: function () {
          return a.parse
        },
      })
    },
    3494: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      var a = t(3248)
      function valid(e, r) {
        if (r === void 0) {
          r = { lowerCaseTagName: false, comment: false }
        }
        var t = (0, a.base_parse)(e, r)
        return Boolean(t.length === 1)
      }
      r['default'] = valid
    },
    3947: function (e, r, t) {
      'use strict'
      var a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      Object.defineProperty(r, '__esModule', { value: true })
      r.generate = r.compile = void 0
      var n = a(t(2947))
      function compile(e) {
        var r = e[0]
        var t = e[1] - 1
        if (t < 0 && r <= 0) return n.default.falseFunc
        if (r === -1)
          return function (e) {
            return e <= t
          }
        if (r === 0)
          return function (e) {
            return e === t
          }
        if (r === 1)
          return t < 0
            ? n.default.trueFunc
            : function (e) {
                return e >= t
              }
        var a = Math.abs(r)
        var i = ((t % a) + a) % a
        return r > 1
          ? function (e) {
              return e >= t && e % a === i
            }
          : function (e) {
              return e <= t && e % a === i
            }
      }
      r.compile = compile
      function generate(e) {
        var r = e[0]
        var t = e[1] - 1
        var a = 0
        if (r < 0) {
          var n = -r
          var i = ((t % n) + n) % n
          return function () {
            var e = i + n * a++
            return e > t ? null : e
          }
        }
        if (r === 0)
          return t < 0
            ? function () {
                return null
              }
            : function () {
                return a++ === 0 ? t : null
              }
        if (t < 0) {
          t += r * Math.ceil(-t / r)
        }
        return function () {
          return r * a++ + t
        }
      }
      r.generate = generate
    },
    7118: function (e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.sequence = r.generate = r.compile = r.parse = void 0
      var a = t(2421)
      Object.defineProperty(r, 'parse', {
        enumerable: true,
        get: function () {
          return a.parse
        },
      })
      var n = t(3947)
      Object.defineProperty(r, 'compile', {
        enumerable: true,
        get: function () {
          return n.compile
        },
      })
      Object.defineProperty(r, 'generate', {
        enumerable: true,
        get: function () {
          return n.generate
        },
      })
      function nthCheck(e) {
        return (0, n.compile)((0, a.parse)(e))
      }
      r['default'] = nthCheck
      function sequence(e) {
        return (0, n.generate)((0, a.parse)(e))
      }
      r.sequence = sequence
    },
    2421: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: true })
      r.parse = void 0
      var t = new Set([9, 10, 12, 13, 32])
      var a = '0'.charCodeAt(0)
      var n = '9'.charCodeAt(0)
      function parse(e) {
        e = e.trim().toLowerCase()
        if (e === 'even') {
          return [2, 0]
        } else if (e === 'odd') {
          return [2, 1]
        }
        var r = 0
        var i = 0
        var o = readSign()
        var s = readNumber()
        if (r < e.length && e.charAt(r) === 'n') {
          r++
          i = o * (s !== null && s !== void 0 ? s : 1)
          skipWhitespace()
          if (r < e.length) {
            o = readSign()
            skipWhitespace()
            s = readNumber()
          } else {
            o = s = 0
          }
        }
        if (s === null || r < e.length) {
          throw new Error("n-th rule couldn't be parsed ('".concat(e, "')"))
        }
        return [i, o * s]
        function readSign() {
          if (e.charAt(r) === '-') {
            r++
            return -1
          }
          if (e.charAt(r) === '+') {
            r++
          }
          return 1
        }
        function readNumber() {
          var t = r
          var i = 0
          while (r < e.length && e.charCodeAt(r) >= a && e.charCodeAt(r) <= n) {
            i = i * 10 + (e.charCodeAt(r) - a)
            r++
          }
          return r === t ? null : i
        }
        function skipWhitespace() {
          while (r < e.length && t.has(e.charCodeAt(r))) {
            r++
          }
        }
      }
      r.parse = parse
    },
    7971: function (e) {
      'use strict'
      e.exports = JSON.parse(
        '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}'
      )
    },
    1859: function (e) {
      'use strict'
      e.exports = JSON.parse(
        '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}'
      )
    },
    2128: function (e) {
      'use strict'
      e.exports = JSON.parse(
        '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}'
      )
    },
    4931: function (e) {
      'use strict'
      e.exports = JSON.parse(
        '{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}'
      )
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var a = r[t]
    if (a !== undefined) {
      return a.exports
    }
    var n = (r[t] = { id: t, loaded: false, exports: {} })
    var i = true
    try {
      e[t].call(n.exports, n, n.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[t]
    }
    n.loaded = true
    return n.exports
  }
  !(function () {
    __nccwpck_require__.nmd = function (e) {
      e.paths = []
      if (!e.children) e.children = []
      return e
    }
  })()
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(5417)
  module.exports = t
})()
