;(() => {
  var t = {
    632: (t, r, e) => {
      var i = e(862)
      function retry(t, r) {
        function run(e, o) {
          var n = r || {}
          var a = i.operation(n)
          function bail(t) {
            o(t || new Error('Aborted'))
          }
          function onError(t, r) {
            if (t.bail) {
              bail(t)
              return
            }
            if (!a.retry(t)) {
              o(a.mainError())
            } else if (n.onRetry) {
              n.onRetry(t, r)
            }
          }
          function runAttempt(r) {
            var i
            try {
              i = t(bail, r)
            } catch (t) {
              onError(t, r)
              return
            }
            Promise.resolve(i)
              .then(e)
              .catch(function catchIt(t) {
                onError(t, r)
              })
          }
          a.attempt(runAttempt)
        }
        return new Promise(run)
      }
      t.exports = retry
    },
    862: (t, r, e) => {
      t.exports = e(97)
    },
    97: (t, r, e) => {
      var i = e(848)
      r.operation = function (t) {
        var e = r.timeouts(t)
        return new i(e, {
          forever: t && t.forever,
          unref: t && t.unref,
          maxRetryTime: t && t.maxRetryTime,
        })
      }
      r.timeouts = function (t) {
        if (t instanceof Array) {
          return [].concat(t)
        }
        var r = {
          retries: 10,
          factor: 2,
          minTimeout: 1 * 1e3,
          maxTimeout: Infinity,
          randomize: false,
        }
        for (var e in t) {
          r[e] = t[e]
        }
        if (r.minTimeout > r.maxTimeout) {
          throw new Error('minTimeout is greater than maxTimeout')
        }
        var i = []
        for (var o = 0; o < r.retries; o++) {
          i.push(this.createTimeout(o, r))
        }
        if (t && t.forever && !i.length) {
          i.push(this.createTimeout(o, r))
        }
        i.sort(function (t, r) {
          return t - r
        })
        return i
      }
      r.createTimeout = function (t, r) {
        var e = r.randomize ? Math.random() + 1 : 1
        var i = Math.round(e * r.minTimeout * Math.pow(r.factor, t))
        i = Math.min(i, r.maxTimeout)
        return i
      }
      r.wrap = function (t, e, i) {
        if (e instanceof Array) {
          i = e
          e = null
        }
        if (!i) {
          i = []
          for (var o in t) {
            if (typeof t[o] === 'function') {
              i.push(o)
            }
          }
        }
        for (var n = 0; n < i.length; n++) {
          var a = i[n]
          var s = t[a]
          t[a] = function retryWrapper(i) {
            var o = r.operation(e)
            var n = Array.prototype.slice.call(arguments, 1)
            var a = n.pop()
            n.push(function (t) {
              if (o.retry(t)) {
                return
              }
              if (t) {
                arguments[0] = o.mainError()
              }
              a.apply(this, arguments)
            })
            o.attempt(function () {
              i.apply(t, n)
            })
          }.bind(t, s)
          t[a].options = e
        }
      }
    },
    848: (t) => {
      function RetryOperation(t, r) {
        if (typeof r === 'boolean') {
          r = { forever: r }
        }
        this._originalTimeouts = JSON.parse(JSON.stringify(t))
        this._timeouts = t
        this._options = r || {}
        this._maxRetryTime = (r && r.maxRetryTime) || Infinity
        this._fn = null
        this._errors = []
        this._attempts = 1
        this._operationTimeout = null
        this._operationTimeoutCb = null
        this._timeout = null
        this._operationStart = null
        if (this._options.forever) {
          this._cachedTimeouts = this._timeouts.slice(0)
        }
      }
      t.exports = RetryOperation
      RetryOperation.prototype.reset = function () {
        this._attempts = 1
        this._timeouts = this._originalTimeouts
      }
      RetryOperation.prototype.stop = function () {
        if (this._timeout) {
          clearTimeout(this._timeout)
        }
        this._timeouts = []
        this._cachedTimeouts = null
      }
      RetryOperation.prototype.retry = function (t) {
        if (this._timeout) {
          clearTimeout(this._timeout)
        }
        if (!t) {
          return false
        }
        var r = new Date().getTime()
        if (t && r - this._operationStart >= this._maxRetryTime) {
          this._errors.unshift(new Error('RetryOperation timeout occurred'))
          return false
        }
        this._errors.push(t)
        var e = this._timeouts.shift()
        if (e === undefined) {
          if (this._cachedTimeouts) {
            this._errors.splice(this._errors.length - 1, this._errors.length)
            this._timeouts = this._cachedTimeouts.slice(0)
            e = this._timeouts.shift()
          } else {
            return false
          }
        }
        var i = this
        var o = setTimeout(function () {
          i._attempts++
          if (i._operationTimeoutCb) {
            i._timeout = setTimeout(function () {
              i._operationTimeoutCb(i._attempts)
            }, i._operationTimeout)
            if (i._options.unref) {
              i._timeout.unref()
            }
          }
          i._fn(i._attempts)
        }, e)
        if (this._options.unref) {
          o.unref()
        }
        return true
      }
      RetryOperation.prototype.attempt = function (t, r) {
        this._fn = t
        if (r) {
          if (r.timeout) {
            this._operationTimeout = r.timeout
          }
          if (r.cb) {
            this._operationTimeoutCb = r.cb
          }
        }
        var e = this
        if (this._operationTimeoutCb) {
          this._timeout = setTimeout(function () {
            e._operationTimeoutCb()
          }, e._operationTimeout)
        }
        this._operationStart = new Date().getTime()
        this._fn(this._attempts)
      }
      RetryOperation.prototype.try = function (t) {
        console.log('Using RetryOperation.try() is deprecated')
        this.attempt(t)
      }
      RetryOperation.prototype.start = function (t) {
        console.log('Using RetryOperation.start() is deprecated')
        this.attempt(t)
      }
      RetryOperation.prototype.start = RetryOperation.prototype.try
      RetryOperation.prototype.errors = function () {
        return this._errors
      }
      RetryOperation.prototype.attempts = function () {
        return this._attempts
      }
      RetryOperation.prototype.mainError = function () {
        if (this._errors.length === 0) {
          return null
        }
        var t = {}
        var r = null
        var e = 0
        for (var i = 0; i < this._errors.length; i++) {
          var o = this._errors[i]
          var n = o.message
          var a = (t[n] || 0) + 1
          t[n] = a
          if (a >= e) {
            r = o
            e = a
          }
        }
        return r
      }
    },
  }
  var r = {}
  function __nccwpck_require__(e) {
    var i = r[e]
    if (i !== undefined) {
      return i.exports
    }
    var o = (r[e] = { exports: {} })
    var n = true
    try {
      t[e](o, o.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete r[e]
    }
    return o.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var e = __nccwpck_require__(632)
  module.exports = e
})()
