;(() => {
  'use strict'
  var e = {
    400: (e, r, t) => {
      const s = t(903)
      const a = /^(.+?|\([\s\S]+?\))\s+from\s+("[^"]*"|'[^']*'|[\w-]+)$/
      const n = /(?:\s+|^)([\w-]+):?(.*?)$/
      const o = /^([\w-]+)(?:\s+as\s+([\w-]+))?/
      e.exports = (e) => {
        let r = 0
        const t =
          (e && e.createImportedName) ||
          ((e) => `i__const_${e.replace(/\W/g, '_')}_${r++}`)
        return {
          postcssPlugin: 'postcss-modules-values',
          prepare(e) {
            const r = []
            const p = {}
            return {
              Once(i, c) {
                i.walkAtRules(/value/i, (i) => {
                  const c = i.params.match(a)
                  if (c) {
                    let [, e, s] = c
                    if (p[s]) {
                      s = p[s]
                    }
                    const a = e
                      .replace(/^\(\s*([\s\S]+)\s*\)$/, '$1')
                      .split(/\s*,\s*/)
                      .map((e) => {
                        const r = o.exec(e)
                        if (r) {
                          const [, e, s = e] = r
                          const a = t(s)
                          p[s] = a
                          return { theirName: e, importedName: a }
                        } else {
                          throw new Error(
                            `@import statement "${e}" is invalid!`
                          )
                        }
                      })
                    r.push({ path: s, imports: a })
                    i.remove()
                    return
                  }
                  if (i.params.indexOf('@value') !== -1) {
                    e.warn('Invalid value definition: ' + i.params)
                  }
                  let [, l, u] = `${i.params}${i.raws.between}`.match(n)
                  const m = u.replace(/\/\*((?!\*\/).*?)\*\//g, '')
                  if (m.length === 0) {
                    e.warn('Invalid value definition: ' + i.params)
                    i.remove()
                    return
                  }
                  let _ = /^\s+$/.test(m)
                  if (!_) {
                    u = u.trim()
                  }
                  p[l] = s.replaceValueSymbols(u, p)
                  i.remove()
                })
                if (!Object.keys(p).length) {
                  return
                }
                s.replaceSymbols(i, p)
                const l = Object.keys(p).map((e) =>
                  c.decl({ value: p[e], prop: e, raws: { before: '\n  ' } })
                )
                if (l.length > 0) {
                  const e = c.rule({
                    selector: ':export',
                    raws: { after: '\n' },
                  })
                  e.append(l)
                  i.prepend(e)
                }
                r.reverse().forEach(({ path: e, imports: r }) => {
                  const t = c.rule({
                    selector: `:import(${e})`,
                    raws: { after: '\n' },
                  })
                  r.forEach(({ theirName: e, importedName: r }) => {
                    t.append({ value: e, prop: r, raws: { before: '\n  ' } })
                  })
                  i.prepend(t)
                })
              },
            }
          },
        }
      }
      e.exports.postcss = true
    },
    903: (e) => {
      e.exports = require('next/dist/compiled/icss-utils')
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var s = r[t]
    if (s !== undefined) {
      return s.exports
    }
    var a = (r[t] = { exports: {} })
    var n = true
    try {
      e[t](a, a.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete r[t]
    }
    return a.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(400)
  module.exports = t
})()
