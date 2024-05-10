;(function () {
  var __webpack_modules__ = {
    950: function (__unused_webpack_module, exports) {
      var indexOf = function (e, t) {
        if (e.indexOf) return e.indexOf(t)
        else
          for (var r = 0; r < e.length; r++) {
            if (e[r] === t) return r
          }
        return -1
      }
      var Object_keys = function (e) {
        if (Object.keys) return Object.keys(e)
        else {
          var t = []
          for (var r in e) t.push(r)
          return t
        }
      }
      var forEach = function (e, t) {
        if (e.forEach) return e.forEach(t)
        else
          for (var r = 0; r < e.length; r++) {
            t(e[r], r, e)
          }
      }
      var defineProp = (function () {
        try {
          Object.defineProperty({}, '_', {})
          return function (e, t, r) {
            Object.defineProperty(e, t, {
              writable: true,
              enumerable: false,
              configurable: true,
              value: r,
            })
          }
        } catch (e) {
          return function (e, t, r) {
            e[t] = r
          }
        }
      })()
      var globals = [
        'Array',
        'Boolean',
        'Date',
        'Error',
        'EvalError',
        'Function',
        'Infinity',
        'JSON',
        'Math',
        'NaN',
        'Number',
        'Object',
        'RangeError',
        'ReferenceError',
        'RegExp',
        'String',
        'SyntaxError',
        'TypeError',
        'URIError',
        'decodeURI',
        'decodeURIComponent',
        'encodeURI',
        'encodeURIComponent',
        'escape',
        'eval',
        'isFinite',
        'isNaN',
        'parseFloat',
        'parseInt',
        'undefined',
        'unescape',
      ]
      function Context() {}
      Context.prototype = {}
      var Script = (exports.Script = function NodeScript(e) {
        if (!(this instanceof Script)) return new Script(e)
        this.code = e
      })
      Script.prototype.runInContext = function (e) {
        if (!(e instanceof Context)) {
          throw new TypeError("needs a 'context' argument.")
        }
        var t = document.createElement('iframe')
        if (!t.style) t.style = {}
        t.style.display = 'none'
        document.body.appendChild(t)
        var r = t.contentWindow
        var n = r.eval,
          o = r.execScript
        if (!n && o) {
          o.call(r, 'null')
          n = r.eval
        }
        forEach(Object_keys(e), function (t) {
          r[t] = e[t]
        })
        forEach(globals, function (t) {
          if (e[t]) {
            r[t] = e[t]
          }
        })
        var c = Object_keys(r)
        var i = n.call(r, this.code)
        forEach(Object_keys(r), function (t) {
          if (t in e || indexOf(c, t) === -1) {
            e[t] = r[t]
          }
        })
        forEach(globals, function (t) {
          if (!(t in e)) {
            defineProp(e, t, r[t])
          }
        })
        document.body.removeChild(t)
        return i
      }
      Script.prototype.runInThisContext = function () {
        return eval(this.code)
      }
      Script.prototype.runInNewContext = function (e) {
        var t = Script.createContext(e)
        var r = this.runInContext(t)
        if (e) {
          forEach(Object_keys(t), function (r) {
            e[r] = t[r]
          })
        }
        return r
      }
      forEach(Object_keys(Script.prototype), function (e) {
        exports[e] = Script[e] = function (t) {
          var r = Script(t)
          return r[e].apply(r, [].slice.call(arguments, 1))
        }
      })
      exports.isContext = function (e) {
        return e instanceof Context
      }
      exports.createScript = function (e) {
        return exports.Script(e)
      }
      exports.createContext = Script.createContext = function (e) {
        var t = new Context()
        if (typeof e === 'object') {
          forEach(Object_keys(e), function (r) {
            t[r] = e[r]
          })
        }
        return t
      }
    },
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var __webpack_exports__ = {}
  __webpack_modules__[950](0, __webpack_exports__)
  module.exports = __webpack_exports__
})()
