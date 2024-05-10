;(() => {
  var r = {
    167: (r, e, t) => {
      var s = t(17)
      r.exports = function (r, e) {
        if (e) {
          var t = e.map(function (e) {
            return s.resolve(r, e)
          })
        } else {
          var t = r
        }
        var n = t.slice(1).reduce(function (r, e) {
          if (!e.match(/^([A-Za-z]:)?\/|\\/)) {
            throw new Error('relative path without a basedir')
          }
          var t = e.split(/\/+|\\+/)
          for (
            var s = 0;
            r[s] === t[s] && s < Math.min(r.length, t.length);
            s++
          );
          return r.slice(0, s)
        }, t[0].split(/\/+|\\+/))
        return n.length > 1 ? n.join('/') : '/'
      }
    },
    647: (r, e, t) => {
      'use strict'
      const s = t(17)
      const n = t(147)
      const o = t(167)
      const i = t(20)
      const c = t(940)
      const { env: a, cwd: u } = process
      const isWritable = (r) => {
        try {
          n.accessSync(r, n.constants.W_OK)
          return true
        } catch (r) {
          return false
        }
      }
      function useDirectory(r, e) {
        if (e.create) {
          c.sync(r)
        }
        if (e.thunk) {
          return (...e) => s.join(r, ...e)
        }
        return r
      }
      function getNodeModuleDirectory(r) {
        const e = s.join(r, 'node_modules')
        if (!isWritable(e) && (n.existsSync(e) || !isWritable(s.join(r)))) {
          return
        }
        return e
      }
      r.exports = (r = {}) => {
        if (a.CACHE_DIR && !['true', 'false', '1', '0'].includes(a.CACHE_DIR)) {
          return useDirectory(s.join(a.CACHE_DIR, 'find-cache-dir'), r)
        }
        let { cwd: e = u() } = r
        if (r.files) {
          e = o(e, r.files)
        }
        e = i.sync(e)
        if (!e) {
          return
        }
        const t = getNodeModuleDirectory(e)
        if (!t) {
          return undefined
        }
        return useDirectory(s.join(e, 'node_modules', '.cache', r.name), r)
      }
    },
    940: (r, e, t) => {
      'use strict'
      const s = t(147)
      const n = t(17)
      const { promisify: o } = t(837)
      const i = t(849)
      const c = i.satisfies(process.version, '>=10.12.0')
      const checkPath = (r) => {
        if (process.platform === 'win32') {
          const e = /[<>:"|?*]/.test(r.replace(n.parse(r).root, ''))
          if (e) {
            const e = new Error(`Path contains invalid characters: ${r}`)
            e.code = 'EINVAL'
            throw e
          }
        }
      }
      const processOptions = (r) => {
        const e = { mode: 511, fs: s }
        return { ...e, ...r }
      }
      const permissionError = (r) => {
        const e = new Error(`operation not permitted, mkdir '${r}'`)
        e.code = 'EPERM'
        e.errno = -4048
        e.path = r
        e.syscall = 'mkdir'
        return e
      }
      const makeDir = async (r, e) => {
        checkPath(r)
        e = processOptions(e)
        const t = o(e.fs.mkdir)
        const i = o(e.fs.stat)
        if (c && e.fs.mkdir === s.mkdir) {
          const s = n.resolve(r)
          await t(s, { mode: e.mode, recursive: true })
          return s
        }
        const make = async (r) => {
          try {
            await t(r, e.mode)
            return r
          } catch (e) {
            if (e.code === 'EPERM') {
              throw e
            }
            if (e.code === 'ENOENT') {
              if (n.dirname(r) === r) {
                throw permissionError(r)
              }
              if (e.message.includes('null bytes')) {
                throw e
              }
              await make(n.dirname(r))
              return make(r)
            }
            try {
              const e = await i(r)
              if (!e.isDirectory()) {
                throw new Error('The path is not a directory')
              }
            } catch (r) {
              throw e
            }
            return r
          }
        }
        return make(n.resolve(r))
      }
      r.exports = makeDir
      r.exports.sync = (r, e) => {
        checkPath(r)
        e = processOptions(e)
        if (c && e.fs.mkdirSync === s.mkdirSync) {
          const t = n.resolve(r)
          s.mkdirSync(t, { mode: e.mode, recursive: true })
          return t
        }
        const make = (r) => {
          try {
            e.fs.mkdirSync(r, e.mode)
          } catch (t) {
            if (t.code === 'EPERM') {
              throw t
            }
            if (t.code === 'ENOENT') {
              if (n.dirname(r) === r) {
                throw permissionError(r)
              }
              if (t.message.includes('null bytes')) {
                throw t
              }
              make(n.dirname(r))
              return make(r)
            }
            try {
              if (!e.fs.statSync(r).isDirectory()) {
                throw new Error('The path is not a directory')
              }
            } catch (r) {
              throw t
            }
          }
          return r
        }
        return make(n.resolve(r))
      }
    },
    20: (r, e, t) => {
      'use strict'
      const s = t(17)
      const n = t(55)
      const pkgDir = async (r) => {
        const e = await n('package.json', { cwd: r })
        return e && s.dirname(e)
      }
      r.exports = pkgDir
      r.exports['default'] = pkgDir
      r.exports.sync = (r) => {
        const e = n.sync('package.json', { cwd: r })
        return e && s.dirname(e)
      }
    },
    147: (r) => {
      'use strict'
      r.exports = require('fs')
    },
    55: (r) => {
      'use strict'
      r.exports = require('next/dist/compiled/find-up')
    },
    849: (r) => {
      'use strict'
      r.exports = require('next/dist/compiled/semver')
    },
    17: (r) => {
      'use strict'
      r.exports = require('path')
    },
    837: (r) => {
      'use strict'
      r.exports = require('util')
    },
  }
  var e = {}
  function __nccwpck_require__(t) {
    var s = e[t]
    if (s !== undefined) {
      return s.exports
    }
    var n = (e[t] = { exports: {} })
    var o = true
    try {
      r[t](n, n.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete e[t]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(647)
  module.exports = t
})()
