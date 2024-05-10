;(() => {
  var __webpack_modules__ = {
    395: (e) => {
      'use strict'
      class LoadingLoaderError extends Error {
        constructor(e) {
          super(e)
          this.name = 'LoaderRunnerError'
          Error.captureStackTrace(this, this.constructor)
        }
      }
      e.exports = LoadingLoaderError
    },
    754: (module, __unused_webpack_exports, __nccwpck_require__) => {
      var LoaderLoadingError = __nccwpck_require__(395)
      var url
      module.exports = function loadLoader(loader, callback) {
        if (loader.type === 'module') {
          try {
            if (url === undefined) url = __nccwpck_require__(310)
            var loaderUrl = url.pathToFileURL(loader.path)
            var modulePromise = eval(
              'import(' + JSON.stringify(loaderUrl.toString()) + ')'
            )
            modulePromise.then(function (e) {
              handleResult(loader, e, callback)
            }, callback)
            return
          } catch (e) {
            callback(e)
          }
        } else {
          try {
            var module = require(loader.path)
          } catch (e) {
            if (e instanceof Error && e.code === 'EMFILE') {
              var retry = loadLoader.bind(null, loader, callback)
              if (typeof setImmediate === 'function') {
                return setImmediate(retry)
              } else {
                return process.nextTick(retry)
              }
            }
            return callback(e)
          }
          return handleResult(loader, module, callback)
        }
      }
      function handleResult(e, r, n) {
        if (typeof r !== 'function' && typeof r !== 'object') {
          return n(
            new LoaderLoadingError(
              "Module '" +
                e.path +
                "' is not a loader (export function or es6 module)"
            )
          )
        }
        e.normal = typeof r === 'function' ? r : r.default
        e.pitch = r.pitch
        e.raw = r.raw
        if (typeof e.normal !== 'function' && typeof e.pitch !== 'function') {
          return n(
            new LoaderLoadingError(
              "Module '" +
                e.path +
                "' is not a loader (must have normal or pitch function)"
            )
          )
        }
        n()
      }
    },
    147: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    310: (e) => {
      'use strict'
      e.exports = require('url')
    },
  }
  var __webpack_module_cache__ = {}
  function __nccwpck_require__(e) {
    var r = __webpack_module_cache__[e]
    if (r !== undefined) {
      return r.exports
    }
    var n = (__webpack_module_cache__[e] = { exports: {} })
    var t = true
    try {
      __webpack_modules__[e](n, n.exports, __nccwpck_require__)
      t = false
    } finally {
      if (t) delete __webpack_module_cache__[e]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var __webpack_exports__ = {}
  ;(() => {
    var e = __webpack_exports__
    var r = __nccwpck_require__(147)
    var n = r.readFile.bind(r)
    var t = __nccwpck_require__(754)
    function utf8BufferToString(e) {
      var r = e.toString('utf-8')
      if (r.charCodeAt(0) === 65279) {
        return r.substr(1)
      } else {
        return r
      }
    }
    const a = /^((?:\0.|[^?#\0])*)(\?(?:\0.|[^#\0])*)?(#.*)?$/
    function parsePathQueryFragment(e) {
      var r = a.exec(e)
      return {
        path: r[1].replace(/\0(.)/g, '$1'),
        query: r[2] ? r[2].replace(/\0(.)/g, '$1') : '',
        fragment: r[3] || '',
      }
    }
    function dirname(e) {
      if (e === '/') return '/'
      var r = e.lastIndexOf('/')
      var n = e.lastIndexOf('\\')
      var t = e.indexOf('/')
      var a = e.indexOf('\\')
      var o = r > n ? r : n
      var u = r > n ? t : a
      if (o < 0) return e
      if (o === u) return e.substr(0, o + 1)
      return e.substr(0, o)
    }
    function createLoaderObject(e) {
      var r = {
        path: null,
        query: null,
        fragment: null,
        options: null,
        ident: null,
        normal: null,
        pitch: null,
        raw: null,
        data: null,
        pitchExecuted: false,
        normalExecuted: false,
      }
      Object.defineProperty(r, 'request', {
        enumerable: true,
        get: function () {
          return (
            r.path.replace(/#/g, '\0#') +
            r.query.replace(/#/g, '\0#') +
            r.fragment
          )
        },
        set: function (e) {
          if (typeof e === 'string') {
            var n = parsePathQueryFragment(e)
            r.path = n.path
            r.query = n.query
            r.fragment = n.fragment
            r.options = undefined
            r.ident = undefined
          } else {
            if (!e.loader)
              throw new Error(
                'request should be a string or object with loader and options (' +
                  JSON.stringify(e) +
                  ')'
              )
            r.path = e.loader
            r.fragment = e.fragment || ''
            r.type = e.type
            r.options = e.options
            r.ident = e.ident
            if (r.options === null) r.query = ''
            else if (r.options === undefined) r.query = ''
            else if (typeof r.options === 'string') r.query = '?' + r.options
            else if (r.ident) r.query = '??' + r.ident
            else if (typeof r.options === 'object' && r.options.ident)
              r.query = '??' + r.options.ident
            else r.query = '?' + JSON.stringify(r.options)
          }
        },
      })
      r.request = e
      if (Object.preventExtensions) {
        Object.preventExtensions(r)
      }
      return r
    }
    function runSyncOrAsync(e, r, n, t) {
      var a = true
      var o = false
      var u = false
      var i = false
      r.async = function async() {
        if (o) {
          if (i) return
          throw new Error('async(): The callback was already called.')
        }
        a = false
        return c
      }
      var c = (r.callback = function () {
        if (o) {
          if (i) return
          throw new Error('callback(): The callback was already called.')
        }
        o = true
        a = false
        try {
          t.apply(null, arguments)
        } catch (e) {
          u = true
          throw e
        }
      })
      try {
        var s = (function LOADER_EXECUTION() {
          return e.apply(r, n)
        })()
        if (a) {
          o = true
          if (s === undefined) return t()
          if (s && typeof s === 'object' && typeof s.then === 'function') {
            return s.then(function (e) {
              t(null, e)
            }, t)
          }
          return t(null, s)
        }
      } catch (e) {
        if (u) throw e
        if (o) {
          if (typeof e === 'object' && e.stack) console.error(e.stack)
          else console.error(e)
          return
        }
        o = true
        i = true
        t(e)
      }
    }
    function convertArgs(e, r) {
      if (!r && Buffer.isBuffer(e[0])) e[0] = utf8BufferToString(e[0])
      else if (r && typeof e[0] === 'string') e[0] = Buffer.from(e[0], 'utf-8')
    }
    function iteratePitchingLoaders(e, r, n) {
      if (r.loaderIndex >= r.loaders.length) return processResource(e, r, n)
      var a = r.loaders[r.loaderIndex]
      if (a.pitchExecuted) {
        r.loaderIndex++
        return iteratePitchingLoaders(e, r, n)
      }
      t(a, function (t) {
        if (t) {
          r.cacheable(false)
          return n(t)
        }
        var o = a.pitch
        a.pitchExecuted = true
        if (!o) return iteratePitchingLoaders(e, r, n)
        runSyncOrAsync(
          o,
          r,
          [r.remainingRequest, r.previousRequest, (a.data = {})],
          function (t) {
            if (t) return n(t)
            var a = Array.prototype.slice.call(arguments, 1)
            var o = a.some(function (e) {
              return e !== undefined
            })
            if (o) {
              r.loaderIndex--
              iterateNormalLoaders(e, r, a, n)
            } else {
              iteratePitchingLoaders(e, r, n)
            }
          }
        )
      })
    }
    function processResource(e, r, n) {
      r.loaderIndex = r.loaders.length - 1
      var t = r.resourcePath
      if (t) {
        e.processResource(r, t, function (t) {
          if (t) return n(t)
          var a = Array.prototype.slice.call(arguments, 1)
          e.resourceBuffer = a[0]
          iterateNormalLoaders(e, r, a, n)
        })
      } else {
        iterateNormalLoaders(e, r, [null], n)
      }
    }
    function iterateNormalLoaders(e, r, n, t) {
      if (r.loaderIndex < 0) return t(null, n)
      var a = r.loaders[r.loaderIndex]
      if (a.normalExecuted) {
        r.loaderIndex--
        return iterateNormalLoaders(e, r, n, t)
      }
      var o = a.normal
      a.normalExecuted = true
      if (!o) {
        return iterateNormalLoaders(e, r, n, t)
      }
      convertArgs(n, a.raw)
      runSyncOrAsync(o, r, n, function (n) {
        if (n) return t(n)
        var a = Array.prototype.slice.call(arguments, 1)
        iterateNormalLoaders(e, r, a, t)
      })
    }
    e.getContext = function getContext(e) {
      var r = parsePathQueryFragment(e).path
      return dirname(r)
    }
    e.runLoaders = function runLoaders(e, r) {
      var t = e.resource || ''
      var a = e.loaders || []
      var o = e.context || {}
      var u =
        e.processResource ||
        ((e, r, n, t) => {
          r.addDependency(n)
          e(n, t)
        }).bind(null, e.readResource || n)
      var i = t && parsePathQueryFragment(t)
      var c = i ? i.path : undefined
      var s = i ? i.query : undefined
      var l = i ? i.fragment : undefined
      var d = c ? dirname(c) : null
      var f = true
      var p = []
      var _ = []
      var y = []
      a = a.map(createLoaderObject)
      o.context = d
      o.loaderIndex = 0
      o.loaders = a
      o.resourcePath = c
      o.resourceQuery = s
      o.resourceFragment = l
      o.async = null
      o.callback = null
      o.cacheable = function cacheable(e) {
        if (e === false) {
          f = false
        }
      }
      o.dependency = o.addDependency = function addDependency(e) {
        p.push(e)
      }
      o.addContextDependency = function addContextDependency(e) {
        _.push(e)
      }
      o.addMissingDependency = function addMissingDependency(e) {
        y.push(e)
      }
      o.getDependencies = function getDependencies() {
        return p.slice()
      }
      o.getContextDependencies = function getContextDependencies() {
        return _.slice()
      }
      o.getMissingDependencies = function getMissingDependencies() {
        return y.slice()
      }
      o.clearDependencies = function clearDependencies() {
        p.length = 0
        _.length = 0
        y.length = 0
        f = true
      }
      Object.defineProperty(o, 'resource', {
        enumerable: true,
        get: function () {
          if (o.resourcePath === undefined) return undefined
          return (
            o.resourcePath.replace(/#/g, '\0#') +
            o.resourceQuery.replace(/#/g, '\0#') +
            o.resourceFragment
          )
        },
        set: function (e) {
          var r = e && parsePathQueryFragment(e)
          o.resourcePath = r ? r.path : undefined
          o.resourceQuery = r ? r.query : undefined
          o.resourceFragment = r ? r.fragment : undefined
        },
      })
      Object.defineProperty(o, 'request', {
        enumerable: true,
        get: function () {
          return o.loaders
            .map(function (e) {
              return e.request
            })
            .concat(o.resource || '')
            .join('!')
        },
      })
      Object.defineProperty(o, 'remainingRequest', {
        enumerable: true,
        get: function () {
          if (o.loaderIndex >= o.loaders.length - 1 && !o.resource) return ''
          return o.loaders
            .slice(o.loaderIndex + 1)
            .map(function (e) {
              return e.request
            })
            .concat(o.resource || '')
            .join('!')
        },
      })
      Object.defineProperty(o, 'currentRequest', {
        enumerable: true,
        get: function () {
          return o.loaders
            .slice(o.loaderIndex)
            .map(function (e) {
              return e.request
            })
            .concat(o.resource || '')
            .join('!')
        },
      })
      Object.defineProperty(o, 'previousRequest', {
        enumerable: true,
        get: function () {
          return o.loaders
            .slice(0, o.loaderIndex)
            .map(function (e) {
              return e.request
            })
            .join('!')
        },
      })
      Object.defineProperty(o, 'query', {
        enumerable: true,
        get: function () {
          var e = o.loaders[o.loaderIndex]
          return e.options && typeof e.options === 'object'
            ? e.options
            : e.query
        },
      })
      Object.defineProperty(o, 'data', {
        enumerable: true,
        get: function () {
          return o.loaders[o.loaderIndex].data
        },
      })
      if (Object.preventExtensions) {
        Object.preventExtensions(o)
      }
      var h = { resourceBuffer: null, processResource: u }
      iteratePitchingLoaders(h, o, function (e, n) {
        if (e) {
          return r(e, {
            cacheable: f,
            fileDependencies: p,
            contextDependencies: _,
            missingDependencies: y,
          })
        }
        r(null, {
          result: n,
          resourceBuffer: h.resourceBuffer,
          cacheable: f,
          fileDependencies: p,
          contextDependencies: _,
          missingDependencies: y,
        })
      })
    }
  })()
  module.exports = __webpack_exports__
})()
