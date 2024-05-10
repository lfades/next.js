;(function () {
  var e = {
    229: function (e) {
      var t = (e.exports = {})
      var r
      var n
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined')
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined')
      }
      ;(function () {
        try {
          if (typeof setTimeout === 'function') {
            r = setTimeout
          } else {
            r = defaultSetTimout
          }
        } catch (e) {
          r = defaultSetTimout
        }
        try {
          if (typeof clearTimeout === 'function') {
            n = clearTimeout
          } else {
            n = defaultClearTimeout
          }
        } catch (e) {
          n = defaultClearTimeout
        }
      })()
      function runTimeout(e) {
        if (r === setTimeout) {
          return setTimeout(e, 0)
        }
        if ((r === defaultSetTimout || !r) && setTimeout) {
          r = setTimeout
          return setTimeout(e, 0)
        }
        try {
          return r(e, 0)
        } catch (t) {
          try {
            return r.call(null, e, 0)
          } catch (t) {
            return r.call(this, e, 0)
          }
        }
      }
      function runClearTimeout(e) {
        if (n === clearTimeout) {
          return clearTimeout(e)
        }
        if ((n === defaultClearTimeout || !n) && clearTimeout) {
          n = clearTimeout
          return clearTimeout(e)
        }
        try {
          return n(e)
        } catch (t) {
          try {
            return n.call(null, e)
          } catch (t) {
            return n.call(this, e)
          }
        }
      }
      var i = []
      var o = false
      var u
      var a = -1
      function cleanUpNextTick() {
        if (!o || !u) {
          return
        }
        o = false
        if (u.length) {
          i = u.concat(i)
        } else {
          a = -1
        }
        if (i.length) {
          drainQueue()
        }
      }
      function drainQueue() {
        if (o) {
          return
        }
        var e = runTimeout(cleanUpNextTick)
        o = true
        var t = i.length
        while (t) {
          u = i
          i = []
          while (++a < t) {
            if (u) {
              u[a].run()
            }
          }
          a = -1
          t = i.length
        }
        u = null
        o = false
        runClearTimeout(e)
      }
      t.nextTick = function (e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1) {
          for (var r = 1; r < arguments.length; r++) {
            t[r - 1] = arguments[r]
          }
        }
        i.push(new Item(e, t))
        if (i.length === 1 && !o) {
          runTimeout(drainQueue)
        }
      }
      function Item(e, t) {
        this.fun = e
        this.array = t
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array)
      }
      t.title = 'browser'
      t.browser = true
      t.env = {}
      t.argv = []
      t.version = ''
      t.versions = {}
      function noop() {}
      t.on = noop
      t.addListener = noop
      t.once = noop
      t.off = noop
      t.removeListener = noop
      t.removeAllListeners = noop
      t.emit = noop
      t.prependListener = noop
      t.prependOnceListener = noop
      t.listeners = function (e) {
        return []
      }
      t.binding = function (e) {
        throw new Error('process.binding is not supported')
      }
      t.cwd = function () {
        return '/'
      }
      t.chdir = function (e) {
        throw new Error('process.chdir is not supported')
      }
      t.umask = function () {
        return 0
      }
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    var n = t[r]
    if (n !== undefined) {
      return n.exports
    }
    var i = (t[r] = { exports: {} })
    var o = true
    try {
      e[r](i, i.exports, __nccwpck_require__)
      o = false
    } finally {
      if (o) delete t[r]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var r = __nccwpck_require__(229)
  module.exports = r
})()
