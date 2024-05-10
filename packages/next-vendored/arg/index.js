;(() => {
  var e = {
    774: (e) => {
      const r = Symbol('arg flag')
      function arg(
        e,
        { argv: t, permissive: n = false, stopAtPositional: o = false } = {}
      ) {
        if (!e) {
          throw new Error('Argument specification object is required')
        }
        const i = { _: [] }
        t = t || process.argv.slice(2)
        const a = {}
        const s = {}
        for (const t of Object.keys(e)) {
          if (!t) {
            throw new TypeError('Argument key cannot be an empty string')
          }
          if (t[0] !== '-') {
            throw new TypeError(
              `Argument key must start with '-' but found: '${t}'`
            )
          }
          if (t.length === 1) {
            throw new TypeError(
              `Argument key must have a name; singular '-' keys are not allowed: ${t}`
            )
          }
          if (typeof e[t] === 'string') {
            a[t] = e[t]
            continue
          }
          let n = e[t]
          let o = false
          if (
            Array.isArray(n) &&
            n.length === 1 &&
            typeof n[0] === 'function'
          ) {
            const [e] = n
            n = (r, t, n = []) => {
              n.push(e(r, t, n[n.length - 1]))
              return n
            }
            o = e === Boolean || e[r] === true
          } else if (typeof n === 'function') {
            o = n === Boolean || n[r] === true
          } else {
            throw new TypeError(
              `Type missing or not a function or valid array type: ${t}`
            )
          }
          if (t[1] !== '-' && t.length > 2) {
            throw new TypeError(
              `Short argument keys (with a single hyphen) must have only one character: ${t}`
            )
          }
          s[t] = [n, o]
        }
        for (let e = 0, r = t.length; e < r; e++) {
          const r = t[e]
          if (o && i._.length > 0) {
            i._ = i._.concat(t.slice(e))
            break
          }
          if (r === '--') {
            i._ = i._.concat(t.slice(e + 1))
            break
          }
          if (r.length > 1 && r[0] === '-') {
            const o =
              r[1] === '-' || r.length === 2
                ? [r]
                : r
                    .slice(1)
                    .split('')
                    .map((e) => `-${e}`)
            for (let r = 0; r < o.length; r++) {
              const l = o[r]
              const [f, u] = l[1] === '-' ? l.split('=', 2) : [l, undefined]
              let c = f
              while (c in a) {
                c = a[c]
              }
              if (!(c in s)) {
                if (n) {
                  i._.push(l)
                  continue
                } else {
                  const e = new Error(`Unknown or unexpected option: ${f}`)
                  e.code = 'ARG_UNKNOWN_OPTION'
                  throw e
                }
              }
              const [p, _] = s[c]
              if (!_ && r + 1 < o.length) {
                throw new TypeError(
                  `Option requires argument (but was followed by another short argument): ${f}`
                )
              }
              if (_) {
                i[c] = p(true, c, i[c])
              } else if (u === undefined) {
                if (
                  t.length < e + 2 ||
                  (t[e + 1].length > 1 && t[e + 1][0] === '-')
                ) {
                  const e = f === c ? '' : ` (alias for ${c})`
                  throw new Error(`Option requires argument: ${f}${e}`)
                }
                i[c] = p(t[e + 1], c, i[c])
                ++e
              } else {
                i[c] = p(u, c, i[c])
              }
            }
          } else {
            i._.push(r)
          }
        }
        return i
      }
      arg.flag = (e) => {
        e[r] = true
        return e
      }
      arg.COUNT = arg.flag((e, r, t) => (t || 0) + 1)
      e.exports = arg
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var n = r[t]
    if (n !== undefined) {
      return n.exports
    }
    var o = (r[t] = { exports: {} })
    var i = true
    try {
      e[t](o, o.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[t]
    }
    return o.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(774)
  module.exports = t
})()
