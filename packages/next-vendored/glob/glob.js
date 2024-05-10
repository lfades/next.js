;(() => {
  var t = {
    442: (t) => {
      'use strict'
      t.exports = balanced
      function balanced(t, e, r) {
        if (t instanceof RegExp) t = maybeMatch(t, r)
        if (e instanceof RegExp) e = maybeMatch(e, r)
        var i = range(t, e, r)
        return (
          i && {
            start: i[0],
            end: i[1],
            pre: r.slice(0, i[0]),
            body: r.slice(i[0] + t.length, i[1]),
            post: r.slice(i[1] + e.length),
          }
        )
      }
      function maybeMatch(t, e) {
        var r = e.match(t)
        return r ? r[0] : null
      }
      balanced.range = range
      function range(t, e, r) {
        var i, a, n, s, o
        var c = r.indexOf(t)
        var h = r.indexOf(e, c + 1)
        var l = c
        if (c >= 0 && h > 0) {
          i = []
          n = r.length
          while (l >= 0 && !o) {
            if (l == c) {
              i.push(l)
              c = r.indexOf(t, l + 1)
            } else if (i.length == 1) {
              o = [i.pop(), h]
            } else {
              a = i.pop()
              if (a < n) {
                n = a
                s = h
              }
              h = r.indexOf(e, l + 1)
            }
            l = c < h && c >= 0 ? c : h
          }
          if (i.length) {
            o = [n, s]
          }
        }
        return o
      }
    },
    800: (t, e, r) => {
      var i = r(381)
      var a = r(442)
      t.exports = expandTop
      var n = '\0SLASH' + Math.random() + '\0'
      var s = '\0OPEN' + Math.random() + '\0'
      var o = '\0CLOSE' + Math.random() + '\0'
      var c = '\0COMMA' + Math.random() + '\0'
      var h = '\0PERIOD' + Math.random() + '\0'
      function numeric(t) {
        return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0)
      }
      function escapeBraces(t) {
        return t
          .split('\\\\')
          .join(n)
          .split('\\{')
          .join(s)
          .split('\\}')
          .join(o)
          .split('\\,')
          .join(c)
          .split('\\.')
          .join(h)
      }
      function unescapeBraces(t) {
        return t
          .split(n)
          .join('\\')
          .split(s)
          .join('{')
          .split(o)
          .join('}')
          .split(c)
          .join(',')
          .split(h)
          .join('.')
      }
      function parseCommaParts(t) {
        if (!t) return ['']
        var e = []
        var r = a('{', '}', t)
        if (!r) return t.split(',')
        var i = r.pre
        var n = r.body
        var s = r.post
        var o = i.split(',')
        o[o.length - 1] += '{' + n + '}'
        var c = parseCommaParts(s)
        if (s.length) {
          o[o.length - 1] += c.shift()
          o.push.apply(o, c)
        }
        e.push.apply(e, o)
        return e
      }
      function expandTop(t) {
        if (!t) return []
        if (t.substr(0, 2) === '{}') {
          t = '\\{\\}' + t.substr(2)
        }
        return expand(escapeBraces(t), true).map(unescapeBraces)
      }
      function identity(t) {
        return t
      }
      function embrace(t) {
        return '{' + t + '}'
      }
      function isPadded(t) {
        return /^-?0\d/.test(t)
      }
      function lte(t, e) {
        return t <= e
      }
      function gte(t, e) {
        return t >= e
      }
      function expand(t, e) {
        var r = []
        var n = a('{', '}', t)
        if (!n || /\$$/.test(n.pre)) return [t]
        var s = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body)
        var c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body)
        var h = s || c
        var l = n.body.indexOf(',') >= 0
        if (!h && !l) {
          if (n.post.match(/,.*\}/)) {
            t = n.pre + '{' + n.body + o + n.post
            return expand(t)
          }
          return [t]
        }
        var u
        if (h) {
          u = n.body.split(/\.\./)
        } else {
          u = parseCommaParts(n.body)
          if (u.length === 1) {
            u = expand(u[0], false).map(embrace)
            if (u.length === 1) {
              var p = n.post.length ? expand(n.post, false) : ['']
              return p.map(function (t) {
                return n.pre + u[0] + t
              })
            }
          }
        }
        var v = n.pre
        var p = n.post.length ? expand(n.post, false) : ['']
        var d
        if (h) {
          var m = numeric(u[0])
          var b = numeric(u[1])
          var g = Math.max(u[0].length, u[1].length)
          var y = u.length == 3 ? Math.abs(numeric(u[2])) : 1
          var _ = lte
          var w = b < m
          if (w) {
            y *= -1
            _ = gte
          }
          var k = u.some(isPadded)
          d = []
          for (var S = m; _(S, b); S += y) {
            var E
            if (c) {
              E = String.fromCharCode(S)
              if (E === '\\') E = ''
            } else {
              E = String(S)
              if (k) {
                var x = g - E.length
                if (x > 0) {
                  var O = new Array(x + 1).join('0')
                  if (S < 0) E = '-' + O + E.slice(1)
                  else E = O + E
                }
              }
            }
            d.push(E)
          }
        } else {
          d = i(u, function (t) {
            return expand(t, false)
          })
        }
        for (var A = 0; A < d.length; A++) {
          for (var G = 0; G < p.length; G++) {
            var j = v + d[A] + p[G]
            if (!e || h || j) r.push(j)
          }
        }
        return r
      }
    },
    381: (t) => {
      t.exports = function (t, r) {
        var i = []
        for (var a = 0; a < t.length; a++) {
          var n = r(t[a], a)
          if (e(n)) i.push.apply(i, n)
          else i.push(n)
        }
        return i
      }
      var e =
        Array.isArray ||
        function (t) {
          return Object.prototype.toString.call(t) === '[object Array]'
        }
    },
    981: (t, e, r) => {
      t.exports = realpath
      realpath.realpath = realpath
      realpath.sync = realpathSync
      realpath.realpathSync = realpathSync
      realpath.monkeypatch = monkeypatch
      realpath.unmonkeypatch = unmonkeypatch
      var i = r(147)
      var a = i.realpath
      var n = i.realpathSync
      var s = process.version
      var o = /^v[0-5]\./.test(s)
      var c = r(623)
      function newError(t) {
        return (
          t &&
          t.syscall === 'realpath' &&
          (t.code === 'ELOOP' ||
            t.code === 'ENOMEM' ||
            t.code === 'ENAMETOOLONG')
        )
      }
      function realpath(t, e, r) {
        if (o) {
          return a(t, e, r)
        }
        if (typeof e === 'function') {
          r = e
          e = null
        }
        a(t, e, function (i, a) {
          if (newError(i)) {
            c.realpath(t, e, r)
          } else {
            r(i, a)
          }
        })
      }
      function realpathSync(t, e) {
        if (o) {
          return n(t, e)
        }
        try {
          return n(t, e)
        } catch (r) {
          if (newError(r)) {
            return c.realpathSync(t, e)
          } else {
            throw r
          }
        }
      }
      function monkeypatch() {
        i.realpath = realpath
        i.realpathSync = realpathSync
      }
      function unmonkeypatch() {
        i.realpath = a
        i.realpathSync = n
      }
    },
    623: (t, e, r) => {
      var i = r(17)
      var a = process.platform === 'win32'
      var n = r(147)
      var s = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG)
      function rethrow() {
        var t
        if (s) {
          var e = new Error()
          t = debugCallback
        } else t = missingCallback
        return t
        function debugCallback(t) {
          if (t) {
            e.message = t.message
            t = e
            missingCallback(t)
          }
        }
        function missingCallback(t) {
          if (t) {
            if (process.throwDeprecation) throw t
            else if (!process.noDeprecation) {
              var e = 'fs: missing callback ' + (t.stack || t.message)
              if (process.traceDeprecation) console.trace(e)
              else console.error(e)
            }
          }
        }
      }
      function maybeCallback(t) {
        return typeof t === 'function' ? t : rethrow()
      }
      var o = i.normalize
      if (a) {
        var c = /(.*?)(?:[\/\\]+|$)/g
      } else {
        var c = /(.*?)(?:[\/]+|$)/g
      }
      if (a) {
        var h = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/
      } else {
        var h = /^[\/]*/
      }
      e.realpathSync = function realpathSync(t, e) {
        t = i.resolve(t)
        if (e && Object.prototype.hasOwnProperty.call(e, t)) {
          return e[t]
        }
        var r = t,
          s = {},
          o = {}
        var l
        var u
        var p
        var v
        start()
        function start() {
          var e = h.exec(t)
          l = e[0].length
          u = e[0]
          p = e[0]
          v = ''
          if (a && !o[p]) {
            n.lstatSync(p)
            o[p] = true
          }
        }
        while (l < t.length) {
          c.lastIndex = l
          var d = c.exec(t)
          v = u
          u += d[0]
          p = v + d[1]
          l = c.lastIndex
          if (o[p] || (e && e[p] === p)) {
            continue
          }
          var m
          if (e && Object.prototype.hasOwnProperty.call(e, p)) {
            m = e[p]
          } else {
            var b = n.lstatSync(p)
            if (!b.isSymbolicLink()) {
              o[p] = true
              if (e) e[p] = p
              continue
            }
            var g = null
            if (!a) {
              var y = b.dev.toString(32) + ':' + b.ino.toString(32)
              if (s.hasOwnProperty(y)) {
                g = s[y]
              }
            }
            if (g === null) {
              n.statSync(p)
              g = n.readlinkSync(p)
            }
            m = i.resolve(v, g)
            if (e) e[p] = m
            if (!a) s[y] = g
          }
          t = i.resolve(m, t.slice(l))
          start()
        }
        if (e) e[r] = t
        return t
      }
      e.realpath = function realpath(t, e, r) {
        if (typeof r !== 'function') {
          r = maybeCallback(e)
          e = null
        }
        t = i.resolve(t)
        if (e && Object.prototype.hasOwnProperty.call(e, t)) {
          return process.nextTick(r.bind(null, null, e[t]))
        }
        var s = t,
          o = {},
          l = {}
        var u
        var p
        var v
        var d
        start()
        function start() {
          var e = h.exec(t)
          u = e[0].length
          p = e[0]
          v = e[0]
          d = ''
          if (a && !l[v]) {
            n.lstat(v, function (t) {
              if (t) return r(t)
              l[v] = true
              LOOP()
            })
          } else {
            process.nextTick(LOOP)
          }
        }
        function LOOP() {
          if (u >= t.length) {
            if (e) e[s] = t
            return r(null, t)
          }
          c.lastIndex = u
          var i = c.exec(t)
          d = p
          p += i[0]
          v = d + i[1]
          u = c.lastIndex
          if (l[v] || (e && e[v] === v)) {
            return process.nextTick(LOOP)
          }
          if (e && Object.prototype.hasOwnProperty.call(e, v)) {
            return gotResolvedLink(e[v])
          }
          return n.lstat(v, gotStat)
        }
        function gotStat(t, i) {
          if (t) return r(t)
          if (!i.isSymbolicLink()) {
            l[v] = true
            if (e) e[v] = v
            return process.nextTick(LOOP)
          }
          if (!a) {
            var s = i.dev.toString(32) + ':' + i.ino.toString(32)
            if (o.hasOwnProperty(s)) {
              return gotTarget(null, o[s], v)
            }
          }
          n.stat(v, function (t) {
            if (t) return r(t)
            n.readlink(v, function (t, e) {
              if (!a) o[s] = e
              gotTarget(t, e)
            })
          })
        }
        function gotTarget(t, a, n) {
          if (t) return r(t)
          var s = i.resolve(d, a)
          if (e) e[n] = s
          gotResolvedLink(s)
        }
        function gotResolvedLink(e) {
          t = i.resolve(e, t.slice(u))
          start()
        }
      }
    },
    129: (t, e, r) => {
      e.setopts = setopts
      e.ownProp = ownProp
      e.makeAbs = makeAbs
      e.finish = finish
      e.mark = mark
      e.isIgnored = isIgnored
      e.childrenIgnored = childrenIgnored
      function ownProp(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      var i = r(17)
      var a = r(923)
      var n = r(230)
      var s = a.Minimatch
      function alphasort(t, e) {
        return t.localeCompare(e, 'en')
      }
      function setupIgnores(t, e) {
        t.ignore = e.ignore || []
        if (!Array.isArray(t.ignore)) t.ignore = [t.ignore]
        if (t.ignore.length) {
          t.ignore = t.ignore.map(ignoreMap)
        }
      }
      function ignoreMap(t) {
        var e = null
        if (t.slice(-3) === '/**') {
          var r = t.replace(/(\/\*\*)+$/, '')
          e = new s(r, { dot: true })
        }
        return { matcher: new s(t, { dot: true }), gmatcher: e }
      }
      function setopts(t, e, r) {
        if (!r) r = {}
        if (r.matchBase && -1 === e.indexOf('/')) {
          if (r.noglobstar) {
            throw new Error('base matching requires globstar')
          }
          e = '**/' + e
        }
        t.silent = !!r.silent
        t.pattern = e
        t.strict = r.strict !== false
        t.realpath = !!r.realpath
        t.realpathCache = r.realpathCache || Object.create(null)
        t.follow = !!r.follow
        t.dot = !!r.dot
        t.mark = !!r.mark
        t.nodir = !!r.nodir
        if (t.nodir) t.mark = true
        t.sync = !!r.sync
        t.nounique = !!r.nounique
        t.nonull = !!r.nonull
        t.nosort = !!r.nosort
        t.nocase = !!r.nocase
        t.stat = !!r.stat
        t.noprocess = !!r.noprocess
        t.absolute = !!r.absolute
        t.maxLength = r.maxLength || Infinity
        t.cache = r.cache || Object.create(null)
        t.statCache = r.statCache || Object.create(null)
        t.symlinks = r.symlinks || Object.create(null)
        setupIgnores(t, r)
        t.changedCwd = false
        var a = process.cwd()
        if (!ownProp(r, 'cwd')) t.cwd = a
        else {
          t.cwd = i.resolve(r.cwd)
          t.changedCwd = t.cwd !== a
        }
        t.root = r.root || i.resolve(t.cwd, '/')
        t.root = i.resolve(t.root)
        if (process.platform === 'win32') t.root = t.root.replace(/\\/g, '/')
        t.cwdAbs = n(t.cwd) ? t.cwd : makeAbs(t, t.cwd)
        if (process.platform === 'win32')
          t.cwdAbs = t.cwdAbs.replace(/\\/g, '/')
        t.nomount = !!r.nomount
        r.nonegate = true
        r.nocomment = true
        t.minimatch = new s(e, r)
        t.options = t.minimatch.options
      }
      function finish(t) {
        var e = t.nounique
        var r = e ? [] : Object.create(null)
        for (var i = 0, a = t.matches.length; i < a; i++) {
          var n = t.matches[i]
          if (!n || Object.keys(n).length === 0) {
            if (t.nonull) {
              var s = t.minimatch.globSet[i]
              if (e) r.push(s)
              else r[s] = true
            }
          } else {
            var o = Object.keys(n)
            if (e) r.push.apply(r, o)
            else
              o.forEach(function (t) {
                r[t] = true
              })
          }
        }
        if (!e) r = Object.keys(r)
        if (!t.nosort) r = r.sort(alphasort)
        if (t.mark) {
          for (var i = 0; i < r.length; i++) {
            r[i] = t._mark(r[i])
          }
          if (t.nodir) {
            r = r.filter(function (e) {
              var r = !/\/$/.test(e)
              var i = t.cache[e] || t.cache[makeAbs(t, e)]
              if (r && i) r = i !== 'DIR' && !Array.isArray(i)
              return r
            })
          }
        }
        if (t.ignore.length)
          r = r.filter(function (e) {
            return !isIgnored(t, e)
          })
        t.found = r
      }
      function mark(t, e) {
        var r = makeAbs(t, e)
        var i = t.cache[r]
        var a = e
        if (i) {
          var n = i === 'DIR' || Array.isArray(i)
          var s = e.slice(-1) === '/'
          if (n && !s) a += '/'
          else if (!n && s) a = a.slice(0, -1)
          if (a !== e) {
            var o = makeAbs(t, a)
            t.statCache[o] = t.statCache[r]
            t.cache[o] = t.cache[r]
          }
        }
        return a
      }
      function makeAbs(t, e) {
        var r = e
        if (e.charAt(0) === '/') {
          r = i.join(t.root, e)
        } else if (n(e) || e === '') {
          r = e
        } else if (t.changedCwd) {
          r = i.resolve(t.cwd, e)
        } else {
          r = i.resolve(e)
        }
        if (process.platform === 'win32') r = r.replace(/\\/g, '/')
        return r
      }
      function isIgnored(t, e) {
        if (!t.ignore.length) return false
        return t.ignore.some(function (t) {
          return t.matcher.match(e) || !!(t.gmatcher && t.gmatcher.match(e))
        })
      }
      function childrenIgnored(t, e) {
        if (!t.ignore.length) return false
        return t.ignore.some(function (t) {
          return !!(t.gmatcher && t.gmatcher.match(e))
        })
      }
    },
    346: (t, e, r) => {
      t.exports = glob
      var i = r(147)
      var a = r(981)
      var n = r(923)
      var s = n.Minimatch
      var o = r(842)
      var c = r(361).EventEmitter
      var h = r(17)
      var l = r(491)
      var u = r(230)
      var p = r(447)
      var v = r(129)
      var d = v.setopts
      var m = v.ownProp
      var b = r(143)
      var g = r(837)
      var y = v.childrenIgnored
      var _ = v.isIgnored
      var w = r(852)
      function glob(t, e, r) {
        if (typeof e === 'function') (r = e), (e = {})
        if (!e) e = {}
        if (e.sync) {
          if (r) throw new TypeError('callback provided to sync glob')
          return p(t, e)
        }
        return new Glob(t, e, r)
      }
      glob.sync = p
      var k = (glob.GlobSync = p.GlobSync)
      glob.glob = glob
      function extend(t, e) {
        if (e === null || typeof e !== 'object') {
          return t
        }
        var r = Object.keys(e)
        var i = r.length
        while (i--) {
          t[r[i]] = e[r[i]]
        }
        return t
      }
      glob.hasMagic = function (t, e) {
        var r = extend({}, e)
        r.noprocess = true
        var i = new Glob(t, r)
        var a = i.minimatch.set
        if (!t) return false
        if (a.length > 1) return true
        for (var n = 0; n < a[0].length; n++) {
          if (typeof a[0][n] !== 'string') return true
        }
        return false
      }
      glob.Glob = Glob
      o(Glob, c)
      function Glob(t, e, r) {
        if (typeof e === 'function') {
          r = e
          e = null
        }
        if (e && e.sync) {
          if (r) throw new TypeError('callback provided to sync glob')
          return new k(t, e)
        }
        if (!(this instanceof Glob)) return new Glob(t, e, r)
        d(this, t, e)
        this._didRealPath = false
        var i = this.minimatch.set.length
        this.matches = new Array(i)
        if (typeof r === 'function') {
          r = w(r)
          this.on('error', r)
          this.on('end', function (t) {
            r(null, t)
          })
        }
        var a = this
        this._processing = 0
        this._emitQueue = []
        this._processQueue = []
        this.paused = false
        if (this.noprocess) return this
        if (i === 0) return done()
        var n = true
        for (var s = 0; s < i; s++) {
          this._process(this.minimatch.set[s], s, false, done)
        }
        n = false
        function done() {
          --a._processing
          if (a._processing <= 0) {
            if (n) {
              process.nextTick(function () {
                a._finish()
              })
            } else {
              a._finish()
            }
          }
        }
      }
      Glob.prototype._finish = function () {
        l(this instanceof Glob)
        if (this.aborted) return
        if (this.realpath && !this._didRealpath) return this._realpath()
        v.finish(this)
        this.emit('end', this.found)
      }
      Glob.prototype._realpath = function () {
        if (this._didRealpath) return
        this._didRealpath = true
        var t = this.matches.length
        if (t === 0) return this._finish()
        var e = this
        for (var r = 0; r < this.matches.length; r++) this._realpathSet(r, next)
        function next() {
          if (--t === 0) e._finish()
        }
      }
      Glob.prototype._realpathSet = function (t, e) {
        var r = this.matches[t]
        if (!r) return e()
        var i = Object.keys(r)
        var n = this
        var s = i.length
        if (s === 0) return e()
        var o = (this.matches[t] = Object.create(null))
        i.forEach(function (r, i) {
          r = n._makeAbs(r)
          a.realpath(r, n.realpathCache, function (i, a) {
            if (!i) o[a] = true
            else if (i.syscall === 'stat') o[r] = true
            else n.emit('error', i)
            if (--s === 0) {
              n.matches[t] = o
              e()
            }
          })
        })
      }
      Glob.prototype._mark = function (t) {
        return v.mark(this, t)
      }
      Glob.prototype._makeAbs = function (t) {
        return v.makeAbs(this, t)
      }
      Glob.prototype.abort = function () {
        this.aborted = true
        this.emit('abort')
      }
      Glob.prototype.pause = function () {
        if (!this.paused) {
          this.paused = true
          this.emit('pause')
        }
      }
      Glob.prototype.resume = function () {
        if (this.paused) {
          this.emit('resume')
          this.paused = false
          if (this._emitQueue.length) {
            var t = this._emitQueue.slice(0)
            this._emitQueue.length = 0
            for (var e = 0; e < t.length; e++) {
              var r = t[e]
              this._emitMatch(r[0], r[1])
            }
          }
          if (this._processQueue.length) {
            var i = this._processQueue.slice(0)
            this._processQueue.length = 0
            for (var e = 0; e < i.length; e++) {
              var a = i[e]
              this._processing--
              this._process(a[0], a[1], a[2], a[3])
            }
          }
        }
      }
      Glob.prototype._process = function (t, e, r, i) {
        l(this instanceof Glob)
        l(typeof i === 'function')
        if (this.aborted) return
        this._processing++
        if (this.paused) {
          this._processQueue.push([t, e, r, i])
          return
        }
        var a = 0
        while (typeof t[a] === 'string') {
          a++
        }
        var s
        switch (a) {
          case t.length:
            this._processSimple(t.join('/'), e, i)
            return
          case 0:
            s = null
            break
          default:
            s = t.slice(0, a).join('/')
            break
        }
        var o = t.slice(a)
        var c
        if (s === null) c = '.'
        else if (u(s) || u(t.join('/'))) {
          if (!s || !u(s)) s = '/' + s
          c = s
        } else c = s
        var h = this._makeAbs(c)
        if (y(this, c)) return i()
        var p = o[0] === n.GLOBSTAR
        if (p) this._processGlobStar(s, c, h, o, e, r, i)
        else this._processReaddir(s, c, h, o, e, r, i)
      }
      Glob.prototype._processReaddir = function (t, e, r, i, a, n, s) {
        var o = this
        this._readdir(r, n, function (c, h) {
          return o._processReaddir2(t, e, r, i, a, n, h, s)
        })
      }
      Glob.prototype._processReaddir2 = function (t, e, r, i, a, n, s, o) {
        if (!s) return o()
        var c = i[0]
        var l = !!this.minimatch.negate
        var u = c._glob
        var p = this.dot || u.charAt(0) === '.'
        var v = []
        for (var d = 0; d < s.length; d++) {
          var m = s[d]
          if (m.charAt(0) !== '.' || p) {
            var b
            if (l && !t) {
              b = !m.match(c)
            } else {
              b = m.match(c)
            }
            if (b) v.push(m)
          }
        }
        var g = v.length
        if (g === 0) return o()
        if (i.length === 1 && !this.mark && !this.stat) {
          if (!this.matches[a]) this.matches[a] = Object.create(null)
          for (var d = 0; d < g; d++) {
            var m = v[d]
            if (t) {
              if (t !== '/') m = t + '/' + m
              else m = t + m
            }
            if (m.charAt(0) === '/' && !this.nomount) {
              m = h.join(this.root, m)
            }
            this._emitMatch(a, m)
          }
          return o()
        }
        i.shift()
        for (var d = 0; d < g; d++) {
          var m = v[d]
          var y
          if (t) {
            if (t !== '/') m = t + '/' + m
            else m = t + m
          }
          this._process([m].concat(i), a, n, o)
        }
        o()
      }
      Glob.prototype._emitMatch = function (t, e) {
        if (this.aborted) return
        if (_(this, e)) return
        if (this.paused) {
          this._emitQueue.push([t, e])
          return
        }
        var r = u(e) ? e : this._makeAbs(e)
        if (this.mark) e = this._mark(e)
        if (this.absolute) e = r
        if (this.matches[t][e]) return
        if (this.nodir) {
          var i = this.cache[r]
          if (i === 'DIR' || Array.isArray(i)) return
        }
        this.matches[t][e] = true
        var a = this.statCache[r]
        if (a) this.emit('stat', e, a)
        this.emit('match', e)
      }
      Glob.prototype._readdirInGlobStar = function (t, e) {
        if (this.aborted) return
        if (this.follow) return this._readdir(t, false, e)
        var r = 'lstat\0' + t
        var a = this
        var n = b(r, lstatcb_)
        if (n) i.lstat(t, n)
        function lstatcb_(r, i) {
          if (r && r.code === 'ENOENT') return e()
          var n = i && i.isSymbolicLink()
          a.symlinks[t] = n
          if (!n && i && !i.isDirectory()) {
            a.cache[t] = 'FILE'
            e()
          } else a._readdir(t, false, e)
        }
      }
      Glob.prototype._readdir = function (t, e, r) {
        if (this.aborted) return
        r = b('readdir\0' + t + '\0' + e, r)
        if (!r) return
        if (e && !m(this.symlinks, t)) return this._readdirInGlobStar(t, r)
        if (m(this.cache, t)) {
          var a = this.cache[t]
          if (!a || a === 'FILE') return r()
          if (Array.isArray(a)) return r(null, a)
        }
        var n = this
        i.readdir(t, readdirCb(this, t, r))
      }
      function readdirCb(t, e, r) {
        return function (i, a) {
          if (i) t._readdirError(e, i, r)
          else t._readdirEntries(e, a, r)
        }
      }
      Glob.prototype._readdirEntries = function (t, e, r) {
        if (this.aborted) return
        if (!this.mark && !this.stat) {
          for (var i = 0; i < e.length; i++) {
            var a = e[i]
            if (t === '/') a = t + a
            else a = t + '/' + a
            this.cache[a] = true
          }
        }
        this.cache[t] = e
        return r(null, e)
      }
      Glob.prototype._readdirError = function (t, e, r) {
        if (this.aborted) return
        switch (e.code) {
          case 'ENOTSUP':
          case 'ENOTDIR':
            var i = this._makeAbs(t)
            this.cache[i] = 'FILE'
            if (i === this.cwdAbs) {
              var a = new Error(e.code + ' invalid cwd ' + this.cwd)
              a.path = this.cwd
              a.code = e.code
              this.emit('error', a)
              this.abort()
            }
            break
          case 'ENOENT':
          case 'ELOOP':
          case 'ENAMETOOLONG':
          case 'UNKNOWN':
            this.cache[this._makeAbs(t)] = false
            break
          default:
            this.cache[this._makeAbs(t)] = false
            if (this.strict) {
              this.emit('error', e)
              this.abort()
            }
            if (!this.silent) console.error('glob error', e)
            break
        }
        return r()
      }
      Glob.prototype._processGlobStar = function (t, e, r, i, a, n, s) {
        var o = this
        this._readdir(r, n, function (c, h) {
          o._processGlobStar2(t, e, r, i, a, n, h, s)
        })
      }
      Glob.prototype._processGlobStar2 = function (t, e, r, i, a, n, s, o) {
        if (!s) return o()
        var c = i.slice(1)
        var h = t ? [t] : []
        var l = h.concat(c)
        this._process(l, a, false, o)
        var u = this.symlinks[r]
        var p = s.length
        if (u && n) return o()
        for (var v = 0; v < p; v++) {
          var d = s[v]
          if (d.charAt(0) === '.' && !this.dot) continue
          var m = h.concat(s[v], c)
          this._process(m, a, true, o)
          var b = h.concat(s[v], i)
          this._process(b, a, true, o)
        }
        o()
      }
      Glob.prototype._processSimple = function (t, e, r) {
        var i = this
        this._stat(t, function (a, n) {
          i._processSimple2(t, e, a, n, r)
        })
      }
      Glob.prototype._processSimple2 = function (t, e, r, i, a) {
        if (!this.matches[e]) this.matches[e] = Object.create(null)
        if (!i) return a()
        if (t && u(t) && !this.nomount) {
          var n = /[\/\\]$/.test(t)
          if (t.charAt(0) === '/') {
            t = h.join(this.root, t)
          } else {
            t = h.resolve(this.root, t)
            if (n) t += '/'
          }
        }
        if (process.platform === 'win32') t = t.replace(/\\/g, '/')
        this._emitMatch(e, t)
        a()
      }
      Glob.prototype._stat = function (t, e) {
        var r = this._makeAbs(t)
        var a = t.slice(-1) === '/'
        if (t.length > this.maxLength) return e()
        if (!this.stat && m(this.cache, r)) {
          var n = this.cache[r]
          if (Array.isArray(n)) n = 'DIR'
          if (!a || n === 'DIR') return e(null, n)
          if (a && n === 'FILE') return e()
        }
        var s
        var o = this.statCache[r]
        if (o !== undefined) {
          if (o === false) return e(null, o)
          else {
            var c = o.isDirectory() ? 'DIR' : 'FILE'
            if (a && c === 'FILE') return e()
            else return e(null, c, o)
          }
        }
        var h = this
        var l = b('stat\0' + r, lstatcb_)
        if (l) i.lstat(r, l)
        function lstatcb_(a, n) {
          if (n && n.isSymbolicLink()) {
            return i.stat(r, function (i, a) {
              if (i) h._stat2(t, r, null, n, e)
              else h._stat2(t, r, i, a, e)
            })
          } else {
            h._stat2(t, r, a, n, e)
          }
        }
      }
      Glob.prototype._stat2 = function (t, e, r, i, a) {
        if (r && (r.code === 'ENOENT' || r.code === 'ENOTDIR')) {
          this.statCache[e] = false
          return a()
        }
        var n = t.slice(-1) === '/'
        this.statCache[e] = i
        if (e.slice(-1) === '/' && i && !i.isDirectory())
          return a(null, false, i)
        var s = true
        if (i) s = i.isDirectory() ? 'DIR' : 'FILE'
        this.cache[e] = this.cache[e] || s
        if (n && s === 'FILE') return a()
        return a(null, s, i)
      }
    },
    447: (t, e, r) => {
      t.exports = globSync
      globSync.GlobSync = GlobSync
      var i = r(147)
      var a = r(981)
      var n = r(923)
      var s = n.Minimatch
      var o = r(346).Glob
      var c = r(837)
      var h = r(17)
      var l = r(491)
      var u = r(230)
      var p = r(129)
      var v = p.setopts
      var d = p.ownProp
      var m = p.childrenIgnored
      var b = p.isIgnored
      function globSync(t, e) {
        if (typeof e === 'function' || arguments.length === 3)
          throw new TypeError(
            'callback provided to sync glob\n' +
              'See: https://github.com/isaacs/node-glob/issues/167'
          )
        return new GlobSync(t, e).found
      }
      function GlobSync(t, e) {
        if (!t) throw new Error('must provide pattern')
        if (typeof e === 'function' || arguments.length === 3)
          throw new TypeError(
            'callback provided to sync glob\n' +
              'See: https://github.com/isaacs/node-glob/issues/167'
          )
        if (!(this instanceof GlobSync)) return new GlobSync(t, e)
        v(this, t, e)
        if (this.noprocess) return this
        var r = this.minimatch.set.length
        this.matches = new Array(r)
        for (var i = 0; i < r; i++) {
          this._process(this.minimatch.set[i], i, false)
        }
        this._finish()
      }
      GlobSync.prototype._finish = function () {
        l(this instanceof GlobSync)
        if (this.realpath) {
          var t = this
          this.matches.forEach(function (e, r) {
            var i = (t.matches[r] = Object.create(null))
            for (var n in e) {
              try {
                n = t._makeAbs(n)
                var s = a.realpathSync(n, t.realpathCache)
                i[s] = true
              } catch (e) {
                if (e.syscall === 'stat') i[t._makeAbs(n)] = true
                else throw e
              }
            }
          })
        }
        p.finish(this)
      }
      GlobSync.prototype._process = function (t, e, r) {
        l(this instanceof GlobSync)
        var i = 0
        while (typeof t[i] === 'string') {
          i++
        }
        var a
        switch (i) {
          case t.length:
            this._processSimple(t.join('/'), e)
            return
          case 0:
            a = null
            break
          default:
            a = t.slice(0, i).join('/')
            break
        }
        var s = t.slice(i)
        var o
        if (a === null) o = '.'
        else if (u(a) || u(t.join('/'))) {
          if (!a || !u(a)) a = '/' + a
          o = a
        } else o = a
        var c = this._makeAbs(o)
        if (m(this, o)) return
        var h = s[0] === n.GLOBSTAR
        if (h) this._processGlobStar(a, o, c, s, e, r)
        else this._processReaddir(a, o, c, s, e, r)
      }
      GlobSync.prototype._processReaddir = function (t, e, r, i, a, n) {
        var s = this._readdir(r, n)
        if (!s) return
        var o = i[0]
        var c = !!this.minimatch.negate
        var l = o._glob
        var u = this.dot || l.charAt(0) === '.'
        var p = []
        for (var v = 0; v < s.length; v++) {
          var d = s[v]
          if (d.charAt(0) !== '.' || u) {
            var m
            if (c && !t) {
              m = !d.match(o)
            } else {
              m = d.match(o)
            }
            if (m) p.push(d)
          }
        }
        var b = p.length
        if (b === 0) return
        if (i.length === 1 && !this.mark && !this.stat) {
          if (!this.matches[a]) this.matches[a] = Object.create(null)
          for (var v = 0; v < b; v++) {
            var d = p[v]
            if (t) {
              if (t.slice(-1) !== '/') d = t + '/' + d
              else d = t + d
            }
            if (d.charAt(0) === '/' && !this.nomount) {
              d = h.join(this.root, d)
            }
            this._emitMatch(a, d)
          }
          return
        }
        i.shift()
        for (var v = 0; v < b; v++) {
          var d = p[v]
          var g
          if (t) g = [t, d]
          else g = [d]
          this._process(g.concat(i), a, n)
        }
      }
      GlobSync.prototype._emitMatch = function (t, e) {
        if (b(this, e)) return
        var r = this._makeAbs(e)
        if (this.mark) e = this._mark(e)
        if (this.absolute) {
          e = r
        }
        if (this.matches[t][e]) return
        if (this.nodir) {
          var i = this.cache[r]
          if (i === 'DIR' || Array.isArray(i)) return
        }
        this.matches[t][e] = true
        if (this.stat) this._stat(e)
      }
      GlobSync.prototype._readdirInGlobStar = function (t) {
        if (this.follow) return this._readdir(t, false)
        var e
        var r
        var a
        try {
          r = i.lstatSync(t)
        } catch (t) {
          if (t.code === 'ENOENT') {
            return null
          }
        }
        var n = r && r.isSymbolicLink()
        this.symlinks[t] = n
        if (!n && r && !r.isDirectory()) this.cache[t] = 'FILE'
        else e = this._readdir(t, false)
        return e
      }
      GlobSync.prototype._readdir = function (t, e) {
        var r
        if (e && !d(this.symlinks, t)) return this._readdirInGlobStar(t)
        if (d(this.cache, t)) {
          var a = this.cache[t]
          if (!a || a === 'FILE') return null
          if (Array.isArray(a)) return a
        }
        try {
          return this._readdirEntries(t, i.readdirSync(t))
        } catch (e) {
          this._readdirError(t, e)
          return null
        }
      }
      GlobSync.prototype._readdirEntries = function (t, e) {
        if (!this.mark && !this.stat) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r]
            if (t === '/') i = t + i
            else i = t + '/' + i
            this.cache[i] = true
          }
        }
        this.cache[t] = e
        return e
      }
      GlobSync.prototype._readdirError = function (t, e) {
        switch (e.code) {
          case 'ENOTSUP':
          case 'ENOTDIR':
            var r = this._makeAbs(t)
            this.cache[r] = 'FILE'
            if (r === this.cwdAbs) {
              var i = new Error(e.code + ' invalid cwd ' + this.cwd)
              i.path = this.cwd
              i.code = e.code
              throw i
            }
            break
          case 'ENOENT':
          case 'ELOOP':
          case 'ENAMETOOLONG':
          case 'UNKNOWN':
            this.cache[this._makeAbs(t)] = false
            break
          default:
            this.cache[this._makeAbs(t)] = false
            if (this.strict) throw e
            if (!this.silent) console.error('glob error', e)
            break
        }
      }
      GlobSync.prototype._processGlobStar = function (t, e, r, i, a, n) {
        var s = this._readdir(r, n)
        if (!s) return
        var o = i.slice(1)
        var c = t ? [t] : []
        var h = c.concat(o)
        this._process(h, a, false)
        var l = s.length
        var u = this.symlinks[r]
        if (u && n) return
        for (var p = 0; p < l; p++) {
          var v = s[p]
          if (v.charAt(0) === '.' && !this.dot) continue
          var d = c.concat(s[p], o)
          this._process(d, a, true)
          var m = c.concat(s[p], i)
          this._process(m, a, true)
        }
      }
      GlobSync.prototype._processSimple = function (t, e) {
        var r = this._stat(t)
        if (!this.matches[e]) this.matches[e] = Object.create(null)
        if (!r) return
        if (t && u(t) && !this.nomount) {
          var i = /[\/\\]$/.test(t)
          if (t.charAt(0) === '/') {
            t = h.join(this.root, t)
          } else {
            t = h.resolve(this.root, t)
            if (i) t += '/'
          }
        }
        if (process.platform === 'win32') t = t.replace(/\\/g, '/')
        this._emitMatch(e, t)
      }
      GlobSync.prototype._stat = function (t) {
        var e = this._makeAbs(t)
        var r = t.slice(-1) === '/'
        if (t.length > this.maxLength) return false
        if (!this.stat && d(this.cache, e)) {
          var a = this.cache[e]
          if (Array.isArray(a)) a = 'DIR'
          if (!r || a === 'DIR') return a
          if (r && a === 'FILE') return false
        }
        var n
        var s = this.statCache[e]
        if (!s) {
          var o
          try {
            o = i.lstatSync(e)
          } catch (t) {
            if (t && (t.code === 'ENOENT' || t.code === 'ENOTDIR')) {
              this.statCache[e] = false
              return false
            }
          }
          if (o && o.isSymbolicLink()) {
            try {
              s = i.statSync(e)
            } catch (t) {
              s = o
            }
          } else {
            s = o
          }
        }
        this.statCache[e] = s
        var a = true
        if (s) a = s.isDirectory() ? 'DIR' : 'FILE'
        this.cache[e] = this.cache[e] || a
        if (r && a === 'FILE') return false
        return a
      }
      GlobSync.prototype._mark = function (t) {
        return p.mark(this, t)
      }
      GlobSync.prototype._makeAbs = function (t) {
        return p.makeAbs(this, t)
      }
    },
    143: (t, e, r) => {
      var i = r(270)
      var a = Object.create(null)
      var n = r(852)
      t.exports = i(inflight)
      function inflight(t, e) {
        if (a[t]) {
          a[t].push(e)
          return null
        } else {
          a[t] = [e]
          return makeres(t)
        }
      }
      function makeres(t) {
        return n(function RES() {
          var e = a[t]
          var r = e.length
          var i = slice(arguments)
          try {
            for (var n = 0; n < r; n++) {
              e[n].apply(null, i)
            }
          } finally {
            if (e.length > r) {
              e.splice(0, r)
              process.nextTick(function () {
                RES.apply(null, i)
              })
            } else {
              delete a[t]
            }
          }
        })
      }
      function slice(t) {
        var e = t.length
        var r = []
        for (var i = 0; i < e; i++) r[i] = t[i]
        return r
      }
    },
    842: (t, e, r) => {
      try {
        var i = r(837)
        if (typeof i.inherits !== 'function') throw ''
        t.exports = i.inherits
      } catch (e) {
        t.exports = r(782)
      }
    },
    782: (t) => {
      if (typeof Object.create === 'function') {
        t.exports = function inherits(t, e) {
          if (e) {
            t.super_ = e
            t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            })
          }
        }
      } else {
        t.exports = function inherits(t, e) {
          if (e) {
            t.super_ = e
            var TempCtor = function () {}
            TempCtor.prototype = e.prototype
            t.prototype = new TempCtor()
            t.prototype.constructor = t
          }
        }
      }
    },
    923: (t, e, r) => {
      t.exports = minimatch
      minimatch.Minimatch = Minimatch
      var i = (function () {
        try {
          return r(17)
        } catch (t) {}
      })() || { sep: '/' }
      minimatch.sep = i.sep
      var a = (minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {})
      var n = r(800)
      var s = {
        '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
        '?': { open: '(?:', close: ')?' },
        '+': { open: '(?:', close: ')+' },
        '*': { open: '(?:', close: ')*' },
        '@': { open: '(?:', close: ')' },
      }
      var o = '[^/]'
      var c = o + '*?'
      var h = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?'
      var l = '(?:(?!(?:\\/|^)\\.).)*?'
      var u = charSet('().*{}+?[]^$\\!')
      function charSet(t) {
        return t.split('').reduce(function (t, e) {
          t[e] = true
          return t
        }, {})
      }
      var p = /\/+/
      minimatch.filter = filter
      function filter(t, e) {
        e = e || {}
        return function (r, i, a) {
          return minimatch(r, t, e)
        }
      }
      function ext(t, e) {
        e = e || {}
        var r = {}
        Object.keys(t).forEach(function (e) {
          r[e] = t[e]
        })
        Object.keys(e).forEach(function (t) {
          r[t] = e[t]
        })
        return r
      }
      minimatch.defaults = function (t) {
        if (!t || typeof t !== 'object' || !Object.keys(t).length) {
          return minimatch
        }
        var e = minimatch
        var r = function minimatch(r, i, a) {
          return e(r, i, ext(t, a))
        }
        r.Minimatch = function Minimatch(r, i) {
          return new e.Minimatch(r, ext(t, i))
        }
        r.Minimatch.defaults = function defaults(r) {
          return e.defaults(ext(t, r)).Minimatch
        }
        r.filter = function filter(r, i) {
          return e.filter(r, ext(t, i))
        }
        r.defaults = function defaults(r) {
          return e.defaults(ext(t, r))
        }
        r.makeRe = function makeRe(r, i) {
          return e.makeRe(r, ext(t, i))
        }
        r.braceExpand = function braceExpand(r, i) {
          return e.braceExpand(r, ext(t, i))
        }
        r.match = function (r, i, a) {
          return e.match(r, i, ext(t, a))
        }
        return r
      }
      Minimatch.defaults = function (t) {
        return minimatch.defaults(t).Minimatch
      }
      function minimatch(t, e, r) {
        assertValidPattern(e)
        if (!r) r = {}
        if (!r.nocomment && e.charAt(0) === '#') {
          return false
        }
        return new Minimatch(e, r).match(t)
      }
      function Minimatch(t, e) {
        if (!(this instanceof Minimatch)) {
          return new Minimatch(t, e)
        }
        assertValidPattern(t)
        if (!e) e = {}
        t = t.trim()
        if (!e.allowWindowsEscape && i.sep !== '/') {
          t = t.split(i.sep).join('/')
        }
        this.options = e
        this.set = []
        this.pattern = t
        this.regexp = null
        this.negate = false
        this.comment = false
        this.empty = false
        this.partial = !!e.partial
        this.make()
      }
      Minimatch.prototype.debug = function () {}
      Minimatch.prototype.make = make
      function make() {
        var t = this.pattern
        var e = this.options
        if (!e.nocomment && t.charAt(0) === '#') {
          this.comment = true
          return
        }
        if (!t) {
          this.empty = true
          return
        }
        this.parseNegate()
        var r = (this.globSet = this.braceExpand())
        if (e.debug)
          this.debug = function debug() {
            console.error.apply(console, arguments)
          }
        this.debug(this.pattern, r)
        r = this.globParts = r.map(function (t) {
          return t.split(p)
        })
        this.debug(this.pattern, r)
        r = r.map(function (t, e, r) {
          return t.map(this.parse, this)
        }, this)
        this.debug(this.pattern, r)
        r = r.filter(function (t) {
          return t.indexOf(false) === -1
        })
        this.debug(this.pattern, r)
        this.set = r
      }
      Minimatch.prototype.parseNegate = parseNegate
      function parseNegate() {
        var t = this.pattern
        var e = false
        var r = this.options
        var i = 0
        if (r.nonegate) return
        for (var a = 0, n = t.length; a < n && t.charAt(a) === '!'; a++) {
          e = !e
          i++
        }
        if (i) this.pattern = t.substr(i)
        this.negate = e
      }
      minimatch.braceExpand = function (t, e) {
        return braceExpand(t, e)
      }
      Minimatch.prototype.braceExpand = braceExpand
      function braceExpand(t, e) {
        if (!e) {
          if (this instanceof Minimatch) {
            e = this.options
          } else {
            e = {}
          }
        }
        t = typeof t === 'undefined' ? this.pattern : t
        assertValidPattern(t)
        if (e.nobrace || !/\{(?:(?!\{).)*\}/.test(t)) {
          return [t]
        }
        return n(t)
      }
      var v = 1024 * 64
      var assertValidPattern = function (t) {
        if (typeof t !== 'string') {
          throw new TypeError('invalid pattern')
        }
        if (t.length > v) {
          throw new TypeError('pattern is too long')
        }
      }
      Minimatch.prototype.parse = parse
      var d = {}
      function parse(t, e) {
        assertValidPattern(t)
        var r = this.options
        if (t === '**') {
          if (!r.noglobstar) return a
          else t = '*'
        }
        if (t === '') return ''
        var i = ''
        var n = !!r.nocase
        var h = false
        var l = []
        var p = []
        var v
        var m = false
        var b = -1
        var g = -1
        var y =
          t.charAt(0) === '.'
            ? ''
            : r.dot
            ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
            : '(?!\\.)'
        var _ = this
        function clearStateChar() {
          if (v) {
            switch (v) {
              case '*':
                i += c
                n = true
                break
              case '?':
                i += o
                n = true
                break
              default:
                i += '\\' + v
                break
            }
            _.debug('clearStateChar %j %j', v, i)
            v = false
          }
        }
        for (var w = 0, k = t.length, S; w < k && (S = t.charAt(w)); w++) {
          this.debug('%s\t%s %s %j', t, w, i, S)
          if (h && u[S]) {
            i += '\\' + S
            h = false
            continue
          }
          switch (S) {
            case '/': {
              return false
            }
            case '\\':
              clearStateChar()
              h = true
              continue
            case '?':
            case '*':
            case '+':
            case '@':
            case '!':
              this.debug('%s\t%s %s %j <-- stateChar', t, w, i, S)
              if (m) {
                this.debug('  in class')
                if (S === '!' && w === g + 1) S = '^'
                i += S
                continue
              }
              _.debug('call clearStateChar %j', v)
              clearStateChar()
              v = S
              if (r.noext) clearStateChar()
              continue
            case '(':
              if (m) {
                i += '('
                continue
              }
              if (!v) {
                i += '\\('
                continue
              }
              l.push({
                type: v,
                start: w - 1,
                reStart: i.length,
                open: s[v].open,
                close: s[v].close,
              })
              i += v === '!' ? '(?:(?!(?:' : '(?:'
              this.debug('plType %j %j', v, i)
              v = false
              continue
            case ')':
              if (m || !l.length) {
                i += '\\)'
                continue
              }
              clearStateChar()
              n = true
              var E = l.pop()
              i += E.close
              if (E.type === '!') {
                p.push(E)
              }
              E.reEnd = i.length
              continue
            case '|':
              if (m || !l.length || h) {
                i += '\\|'
                h = false
                continue
              }
              clearStateChar()
              i += '|'
              continue
            case '[':
              clearStateChar()
              if (m) {
                i += '\\' + S
                continue
              }
              m = true
              g = w
              b = i.length
              i += S
              continue
            case ']':
              if (w === g + 1 || !m) {
                i += '\\' + S
                h = false
                continue
              }
              var x = t.substring(g + 1, w)
              try {
                RegExp('[' + x + ']')
              } catch (t) {
                var O = this.parse(x, d)
                i = i.substr(0, b) + '\\[' + O[0] + '\\]'
                n = n || O[1]
                m = false
                continue
              }
              n = true
              m = false
              i += S
              continue
            default:
              clearStateChar()
              if (h) {
                h = false
              } else if (u[S] && !(S === '^' && m)) {
                i += '\\'
              }
              i += S
          }
        }
        if (m) {
          x = t.substr(g + 1)
          O = this.parse(x, d)
          i = i.substr(0, b) + '\\[' + O[0]
          n = n || O[1]
        }
        for (E = l.pop(); E; E = l.pop()) {
          var A = i.slice(E.reStart + E.open.length)
          this.debug('setting tail', i, E)
          A = A.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (t, e, r) {
            if (!r) {
              r = '\\'
            }
            return e + e + r + '|'
          })
          this.debug('tail=%j\n   %s', A, A, E, i)
          var G = E.type === '*' ? c : E.type === '?' ? o : '\\' + E.type
          n = true
          i = i.slice(0, E.reStart) + G + '\\(' + A
        }
        clearStateChar()
        if (h) {
          i += '\\\\'
        }
        var j = false
        switch (i.charAt(0)) {
          case '[':
          case '.':
          case '(':
            j = true
        }
        for (var M = p.length - 1; M > -1; M--) {
          var I = p[M]
          var R = i.slice(0, I.reStart)
          var C = i.slice(I.reStart, I.reEnd - 8)
          var L = i.slice(I.reEnd - 8, I.reEnd)
          var N = i.slice(I.reEnd)
          L += N
          var T = R.split('(').length - 1
          var P = N
          for (w = 0; w < T; w++) {
            P = P.replace(/\)[+*?]?/, '')
          }
          N = P
          var D = ''
          if (N === '' && e !== d) {
            D = '$'
          }
          var $ = R + C + N + D + L
          i = $
        }
        if (i !== '' && n) {
          i = '(?=.)' + i
        }
        if (j) {
          i = y + i
        }
        if (e === d) {
          return [i, n]
        }
        if (!n) {
          return globUnescape(t)
        }
        var F = r.nocase ? 'i' : ''
        try {
          var B = new RegExp('^' + i + '$', F)
        } catch (t) {
          return new RegExp('$.')
        }
        B._glob = t
        B._src = i
        return B
      }
      minimatch.makeRe = function (t, e) {
        return new Minimatch(t, e || {}).makeRe()
      }
      Minimatch.prototype.makeRe = makeRe
      function makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp
        var t = this.set
        if (!t.length) {
          this.regexp = false
          return this.regexp
        }
        var e = this.options
        var r = e.noglobstar ? c : e.dot ? h : l
        var i = e.nocase ? 'i' : ''
        var n = t
          .map(function (t) {
            return t
              .map(function (t) {
                return t === a
                  ? r
                  : typeof t === 'string'
                  ? regExpEscape(t)
                  : t._src
              })
              .join('\\/')
          })
          .join('|')
        n = '^(?:' + n + ')$'
        if (this.negate) n = '^(?!' + n + ').*$'
        try {
          this.regexp = new RegExp(n, i)
        } catch (t) {
          this.regexp = false
        }
        return this.regexp
      }
      minimatch.match = function (t, e, r) {
        r = r || {}
        var i = new Minimatch(e, r)
        t = t.filter(function (t) {
          return i.match(t)
        })
        if (i.options.nonull && !t.length) {
          t.push(e)
        }
        return t
      }
      Minimatch.prototype.match = function match(t, e) {
        if (typeof e === 'undefined') e = this.partial
        this.debug('match', t, this.pattern)
        if (this.comment) return false
        if (this.empty) return t === ''
        if (t === '/' && e) return true
        var r = this.options
        if (i.sep !== '/') {
          t = t.split(i.sep).join('/')
        }
        t = t.split(p)
        this.debug(this.pattern, 'split', t)
        var a = this.set
        this.debug(this.pattern, 'set', a)
        var n
        var s
        for (s = t.length - 1; s >= 0; s--) {
          n = t[s]
          if (n) break
        }
        for (s = 0; s < a.length; s++) {
          var o = a[s]
          var c = t
          if (r.matchBase && o.length === 1) {
            c = [n]
          }
          var h = this.matchOne(c, o, e)
          if (h) {
            if (r.flipNegate) return true
            return !this.negate
          }
        }
        if (r.flipNegate) return false
        return this.negate
      }
      Minimatch.prototype.matchOne = function (t, e, r) {
        var i = this.options
        this.debug('matchOne', { this: this, file: t, pattern: e })
        this.debug('matchOne', t.length, e.length)
        for (
          var n = 0, s = 0, o = t.length, c = e.length;
          n < o && s < c;
          n++, s++
        ) {
          this.debug('matchOne loop')
          var h = e[s]
          var l = t[n]
          this.debug(e, h, l)
          if (h === false) return false
          if (h === a) {
            this.debug('GLOBSTAR', [e, h, l])
            var u = n
            var p = s + 1
            if (p === c) {
              this.debug('** at the end')
              for (; n < o; n++) {
                if (
                  t[n] === '.' ||
                  t[n] === '..' ||
                  (!i.dot && t[n].charAt(0) === '.')
                )
                  return false
              }
              return true
            }
            while (u < o) {
              var v = t[u]
              this.debug('\nglobstar while', t, u, e, p, v)
              if (this.matchOne(t.slice(u), e.slice(p), r)) {
                this.debug('globstar found match!', u, o, v)
                return true
              } else {
                if (
                  v === '.' ||
                  v === '..' ||
                  (!i.dot && v.charAt(0) === '.')
                ) {
                  this.debug('dot detected!', t, u, e, p)
                  break
                }
                this.debug('globstar swallow a segment, and continue')
                u++
              }
            }
            if (r) {
              this.debug('\n>>> no match, partial?', t, u, e, p)
              if (u === o) return true
            }
            return false
          }
          var d
          if (typeof h === 'string') {
            d = l === h
            this.debug('string match', h, l, d)
          } else {
            d = l.match(h)
            this.debug('pattern match', h, l, d)
          }
          if (!d) return false
        }
        if (n === o && s === c) {
          return true
        } else if (n === o) {
          return r
        } else if (s === c) {
          return n === o - 1 && t[n] === ''
        }
        throw new Error('wtf?')
      }
      function globUnescape(t) {
        return t.replace(/\\(.)/g, '$1')
      }
      function regExpEscape(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
      }
    },
    852: (t, e, r) => {
      var i = r(270)
      t.exports = i(once)
      t.exports.strict = i(onceStrict)
      once.proto = once(function () {
        Object.defineProperty(Function.prototype, 'once', {
          value: function () {
            return once(this)
          },
          configurable: true,
        })
        Object.defineProperty(Function.prototype, 'onceStrict', {
          value: function () {
            return onceStrict(this)
          },
          configurable: true,
        })
      })
      function once(t) {
        var f = function () {
          if (f.called) return f.value
          f.called = true
          return (f.value = t.apply(this, arguments))
        }
        f.called = false
        return f
      }
      function onceStrict(t) {
        var f = function () {
          if (f.called) throw new Error(f.onceError)
          f.called = true
          return (f.value = t.apply(this, arguments))
        }
        var e = t.name || 'Function wrapped with `once`'
        f.onceError = e + " shouldn't be called more than once"
        f.called = false
        return f
      }
    },
    230: (t) => {
      'use strict'
      function posix(t) {
        return t.charAt(0) === '/'
      }
      function win32(t) {
        var e =
          /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/
        var r = e.exec(t)
        var i = r[1] || ''
        var a = Boolean(i && i.charAt(1) !== ':')
        return Boolean(r[2] || a)
      }
      t.exports = process.platform === 'win32' ? win32 : posix
      t.exports.posix = posix
      t.exports.win32 = win32
    },
    270: (t) => {
      t.exports = wrappy
      function wrappy(t, e) {
        if (t && e) return wrappy(t)(e)
        if (typeof t !== 'function')
          throw new TypeError('need wrapper function')
        Object.keys(t).forEach(function (e) {
          wrapper[e] = t[e]
        })
        return wrapper
        function wrapper() {
          var e = new Array(arguments.length)
          for (var r = 0; r < e.length; r++) {
            e[r] = arguments[r]
          }
          var i = t.apply(this, e)
          var a = e[e.length - 1]
          if (typeof i === 'function' && i !== a) {
            Object.keys(a).forEach(function (t) {
              i[t] = a[t]
            })
          }
          return i
        }
      }
    },
    491: (t) => {
      'use strict'
      t.exports = require('assert')
    },
    361: (t) => {
      'use strict'
      t.exports = require('events')
    },
    147: (t) => {
      'use strict'
      t.exports = require('fs')
    },
    17: (t) => {
      'use strict'
      t.exports = require('path')
    },
    837: (t) => {
      'use strict'
      t.exports = require('util')
    },
  }
  var e = {}
  function __nccwpck_require__(r) {
    var i = e[r]
    if (i !== undefined) {
      return i.exports
    }
    var a = (e[r] = { exports: {} })
    var n = true
    try {
      t[r](a, a.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete e[r]
    }
    return a.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var r = __nccwpck_require__(346)
  module.exports = r
})()
