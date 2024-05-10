;(() => {
  var e = {
    488: (e, t, n) => {
      'use strict'
      const r = n(81)
      const s = n(423)
      const o = n(449)
      function spawn(e, t, n) {
        const c = s(e, t, n)
        const i = r.spawn(c.command, c.args, c.options)
        o.hookChildProcess(i, c)
        return i
      }
      function spawnSync(e, t, n) {
        const c = s(e, t, n)
        const i = r.spawnSync(c.command, c.args, c.options)
        i.error = i.error || o.verifyENOENTSync(i.status, c)
        return i
      }
      e.exports = spawn
      e.exports.spawn = spawn
      e.exports.sync = spawnSync
      e.exports._parse = s
      e.exports._enoent = o
    },
    449: (e) => {
      'use strict'
      const t = process.platform === 'win32'
      function notFoundError(e, t) {
        return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
          code: 'ENOENT',
          errno: 'ENOENT',
          syscall: `${t} ${e.command}`,
          path: e.command,
          spawnargs: e.args,
        })
      }
      function hookChildProcess(e, n) {
        if (!t) {
          return
        }
        const r = e.emit
        e.emit = function (t, s) {
          if (t === 'exit') {
            const t = verifyENOENT(s, n, 'spawn')
            if (t) {
              return r.call(e, 'error', t)
            }
          }
          return r.apply(e, arguments)
        }
      }
      function verifyENOENT(e, n) {
        if (t && e === 1 && !n.file) {
          return notFoundError(n.original, 'spawn')
        }
        return null
      }
      function verifyENOENTSync(e, n) {
        if (t && e === 1 && !n.file) {
          return notFoundError(n.original, 'spawnSync')
        }
        return null
      }
      e.exports = {
        hookChildProcess: hookChildProcess,
        verifyENOENT: verifyENOENT,
        verifyENOENTSync: verifyENOENTSync,
        notFoundError: notFoundError,
      }
    },
    423: (e, t, n) => {
      'use strict'
      const r = n(17)
      const s = n(907)
      const o = n(268)
      const c = n(408)
      const i = process.platform === 'win32'
      const a = /\.(?:com|exe)$/i
      const u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i
      function detectShebang(e) {
        e.file = s(e)
        const t = e.file && c(e.file)
        if (t) {
          e.args.unshift(e.file)
          e.command = t
          return s(e)
        }
        return e.file
      }
      function parseNonShell(e) {
        if (!i) {
          return e
        }
        const t = detectShebang(e)
        const n = !a.test(t)
        if (e.options.forceShell || n) {
          const n = u.test(t)
          e.command = r.normalize(e.command)
          e.command = o.command(e.command)
          e.args = e.args.map((e) => o.argument(e, n))
          const s = [e.command].concat(e.args).join(' ')
          e.args = ['/d', '/s', '/c', `"${s}"`]
          e.command = process.env.comspec || 'cmd.exe'
          e.options.windowsVerbatimArguments = true
        }
        return e
      }
      function parse(e, t, n) {
        if (t && !Array.isArray(t)) {
          n = t
          t = null
        }
        t = t ? t.slice(0) : []
        n = Object.assign({}, n)
        const r = {
          command: e,
          args: t,
          options: n,
          file: undefined,
          original: { command: e, args: t },
        }
        return n.shell ? r : parseNonShell(r)
      }
      e.exports = parse
    },
    268: (e) => {
      'use strict'
      const t = /([()\][%!^"`<>&|;, *?])/g
      function escapeCommand(e) {
        e = e.replace(t, '^$1')
        return e
      }
      function escapeArgument(e, n) {
        e = `${e}`
        e = e.replace(/(\\*)"/g, '$1$1\\"')
        e = e.replace(/(\\*)$/, '$1$1')
        e = `"${e}"`
        e = e.replace(t, '^$1')
        if (n) {
          e = e.replace(t, '^$1')
        }
        return e
      }
      e.exports.command = escapeCommand
      e.exports.argument = escapeArgument
    },
    408: (e, t, n) => {
      'use strict'
      const r = n(147)
      const s = n(530)
      function readShebang(e) {
        const t = 150
        const n = Buffer.alloc(t)
        let o
        try {
          o = r.openSync(e, 'r')
          r.readSync(o, n, 0, t, 0)
          r.closeSync(o)
        } catch (e) {}
        return s(n.toString())
      }
      e.exports = readShebang
    },
    907: (e, t, n) => {
      'use strict'
      const r = n(17)
      const s = n(200)
      const o = n(799)
      function resolveCommandAttempt(e, t) {
        const n = e.options.env || process.env
        const c = process.cwd()
        const i = e.options.cwd != null
        const a = i && process.chdir !== undefined && !process.chdir.disabled
        if (a) {
          try {
            process.chdir(e.options.cwd)
          } catch (e) {}
        }
        let u
        try {
          u = s.sync(e.command, {
            path: n[o({ env: n })],
            pathExt: t ? r.delimiter : undefined,
          })
        } catch (e) {
        } finally {
          if (a) {
            process.chdir(c)
          }
        }
        if (u) {
          u = r.resolve(i ? e.options.cwd : '', u)
        }
        return u
      }
      function resolveCommand(e) {
        return resolveCommandAttempt(e) || resolveCommandAttempt(e, true)
      }
      e.exports = resolveCommand
    },
    745: (e, t, n) => {
      var r = n(147)
      var s
      if (process.platform === 'win32' || global.TESTING_WINDOWS) {
        s = n(554)
      } else {
        s = n(138)
      }
      e.exports = isexe
      isexe.sync = sync
      function isexe(e, t, n) {
        if (typeof t === 'function') {
          n = t
          t = {}
        }
        if (!n) {
          if (typeof Promise !== 'function') {
            throw new TypeError('callback not provided')
          }
          return new Promise(function (n, r) {
            isexe(e, t || {}, function (e, t) {
              if (e) {
                r(e)
              } else {
                n(t)
              }
            })
          })
        }
        s(e, t || {}, function (e, r) {
          if (e) {
            if (e.code === 'EACCES' || (t && t.ignoreErrors)) {
              e = null
              r = false
            }
          }
          n(e, r)
        })
      }
      function sync(e, t) {
        try {
          return s.sync(e, t || {})
        } catch (e) {
          if ((t && t.ignoreErrors) || e.code === 'EACCES') {
            return false
          } else {
            throw e
          }
        }
      }
    },
    138: (e, t, n) => {
      e.exports = isexe
      isexe.sync = sync
      var r = n(147)
      function isexe(e, t, n) {
        r.stat(e, function (e, r) {
          n(e, e ? false : checkStat(r, t))
        })
      }
      function sync(e, t) {
        return checkStat(r.statSync(e), t)
      }
      function checkStat(e, t) {
        return e.isFile() && checkMode(e, t)
      }
      function checkMode(e, t) {
        var n = e.mode
        var r = e.uid
        var s = e.gid
        var o = t.uid !== undefined ? t.uid : process.getuid && process.getuid()
        var c = t.gid !== undefined ? t.gid : process.getgid && process.getgid()
        var i = parseInt('100', 8)
        var a = parseInt('010', 8)
        var u = parseInt('001', 8)
        var p = i | a
        var f =
          n & u ||
          (n & a && s === c) ||
          (n & i && r === o) ||
          (n & p && o === 0)
        return f
      }
    },
    554: (e, t, n) => {
      e.exports = isexe
      isexe.sync = sync
      var r = n(147)
      function checkPathExt(e, t) {
        var n = t.pathExt !== undefined ? t.pathExt : process.env.PATHEXT
        if (!n) {
          return true
        }
        n = n.split(';')
        if (n.indexOf('') !== -1) {
          return true
        }
        for (var r = 0; r < n.length; r++) {
          var s = n[r].toLowerCase()
          if (s && e.substr(-s.length).toLowerCase() === s) {
            return true
          }
        }
        return false
      }
      function checkStat(e, t, n) {
        if (!e.isSymbolicLink() && !e.isFile()) {
          return false
        }
        return checkPathExt(t, n)
      }
      function isexe(e, t, n) {
        r.stat(e, function (r, s) {
          n(r, r ? false : checkStat(s, e, t))
        })
      }
      function sync(e, t) {
        return checkStat(r.statSync(e), e, t)
      }
    },
    799: (e) => {
      'use strict'
      const pathKey = (e = {}) => {
        const t = e.env || process.env
        const n = e.platform || process.platform
        if (n !== 'win32') {
          return 'PATH'
        }
        return (
          Object.keys(t)
            .reverse()
            .find((e) => e.toUpperCase() === 'PATH') || 'Path'
        )
      }
      e.exports = pathKey
      e.exports['default'] = pathKey
    },
    530: (e, t, n) => {
      'use strict'
      const r = n(401)
      e.exports = (e = '') => {
        const t = e.match(r)
        if (!t) {
          return null
        }
        const [n, s] = t[0].replace(/#! ?/, '').split(' ')
        const o = n.split('/').pop()
        if (o === 'env') {
          return s
        }
        return s ? `${o} ${s}` : o
      }
    },
    401: (e) => {
      'use strict'
      e.exports = /^#!(.*)/
    },
    200: (e, t, n) => {
      const r =
        process.platform === 'win32' ||
        process.env.OSTYPE === 'cygwin' ||
        process.env.OSTYPE === 'msys'
      const s = n(17)
      const o = r ? ';' : ':'
      const c = n(745)
      const getNotFoundError = (e) =>
        Object.assign(new Error(`not found: ${e}`), { code: 'ENOENT' })
      const getPathInfo = (e, t) => {
        const n = t.colon || o
        const s =
          e.match(/\//) || (r && e.match(/\\/))
            ? ['']
            : [
                ...(r ? [process.cwd()] : []),
                ...(t.path || process.env.PATH || '').split(n),
              ]
        const c = r
          ? t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM'
          : ''
        const i = r ? c.split(n) : ['']
        if (r) {
          if (e.indexOf('.') !== -1 && i[0] !== '') i.unshift('')
        }
        return { pathEnv: s, pathExt: i, pathExtExe: c }
      }
      const which = (e, t, n) => {
        if (typeof t === 'function') {
          n = t
          t = {}
        }
        if (!t) t = {}
        const { pathEnv: r, pathExt: o, pathExtExe: i } = getPathInfo(e, t)
        const a = []
        const step = (n) =>
          new Promise((o, c) => {
            if (n === r.length)
              return t.all && a.length ? o(a) : c(getNotFoundError(e))
            const i = r[n]
            const u = /^".*"$/.test(i) ? i.slice(1, -1) : i
            const p = s.join(u, e)
            const f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p
            o(subStep(f, n, 0))
          })
        const subStep = (e, n, r) =>
          new Promise((s, u) => {
            if (r === o.length) return s(step(n + 1))
            const p = o[r]
            c(e + p, { pathExt: i }, (o, c) => {
              if (!o && c) {
                if (t.all) a.push(e + p)
                else return s(e + p)
              }
              return s(subStep(e, n, r + 1))
            })
          })
        return n ? step(0).then((e) => n(null, e), n) : step(0)
      }
      const whichSync = (e, t) => {
        t = t || {}
        const { pathEnv: n, pathExt: r, pathExtExe: o } = getPathInfo(e, t)
        const i = []
        for (let a = 0; a < n.length; a++) {
          const u = n[a]
          const p = /^".*"$/.test(u) ? u.slice(1, -1) : u
          const f = s.join(p, e)
          const l = !p && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + f : f
          for (let e = 0; e < r.length; e++) {
            const n = l + r[e]
            try {
              const e = c.sync(n, { pathExt: o })
              if (e) {
                if (t.all) i.push(n)
                else return n
              }
            } catch (e) {}
          }
        }
        if (t.all && i.length) return i
        if (t.nothrow) return null
        throw getNotFoundError(e)
      }
      e.exports = which
      which.sync = whichSync
    },
    81: (e) => {
      'use strict'
      e.exports = require('child_process')
    },
    147: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    17: (e) => {
      'use strict'
      e.exports = require('path')
    },
  }
  var t = {}
  function __nccwpck_require__(n) {
    var r = t[n]
    if (r !== undefined) {
      return r.exports
    }
    var s = (t[n] = { exports: {} })
    var o = true
    try {
      e[n](s, s.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete t[n]
    }
    return s.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = __nccwpck_require__(488)
  module.exports = n
})()
