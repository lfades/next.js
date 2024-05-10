;(() => {
  'use strict'
  var t = {
    862: (t, e) => {
      Object.defineProperty(e, '__esModule', { value: true })
      function once(t, e, { signal: o } = {}) {
        return new Promise((r, n) => {
          function cleanup() {
            o === null || o === void 0
              ? void 0
              : o.removeEventListener('abort', cleanup)
            t.removeListener(e, onEvent)
            t.removeListener('error', onError)
          }
          function onEvent(...t) {
            cleanup()
            r(t)
          }
          function onError(t) {
            cleanup()
            n(t)
          }
          o === null || o === void 0
            ? void 0
            : o.addEventListener('abort', cleanup)
          t.on(e, onEvent)
          t.on('error', onError)
        })
      }
      e['default'] = once
    },
    448: function (t, e, o) {
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t }
        }
      const n = o(361)
      const i = r(o(937))
      const s = r(o(457))
      const u = i.default('agent-base')
      function isAgent(t) {
        return Boolean(t) && typeof t.addRequest === 'function'
      }
      function isSecureEndpoint() {
        const { stack: t } = new Error()
        if (typeof t !== 'string') return false
        return t
          .split('\n')
          .some(
            (t) =>
              t.indexOf('(https.js:') !== -1 || t.indexOf('node:https:') !== -1
          )
      }
      function createAgent(t, e) {
        return new createAgent.Agent(t, e)
      }
      ;(function (t) {
        class Agent extends n.EventEmitter {
          constructor(t, e) {
            super()
            let o = e
            if (typeof t === 'function') {
              this.callback = t
            } else if (t) {
              o = t
            }
            this.timeout = null
            if (o && typeof o.timeout === 'number') {
              this.timeout = o.timeout
            }
            this.maxFreeSockets = 1
            this.maxSockets = 1
            this.maxTotalSockets = Infinity
            this.sockets = {}
            this.freeSockets = {}
            this.requests = {}
            this.options = {}
          }
          get defaultPort() {
            if (typeof this.explicitDefaultPort === 'number') {
              return this.explicitDefaultPort
            }
            return isSecureEndpoint() ? 443 : 80
          }
          set defaultPort(t) {
            this.explicitDefaultPort = t
          }
          get protocol() {
            if (typeof this.explicitProtocol === 'string') {
              return this.explicitProtocol
            }
            return isSecureEndpoint() ? 'https:' : 'http:'
          }
          set protocol(t) {
            this.explicitProtocol = t
          }
          callback(t, e, o) {
            throw new Error(
              '"agent-base" has no default implementation, you must subclass and override `callback()`'
            )
          }
          addRequest(t, e) {
            const o = Object.assign({}, e)
            if (typeof o.secureEndpoint !== 'boolean') {
              o.secureEndpoint = isSecureEndpoint()
            }
            if (o.host == null) {
              o.host = 'localhost'
            }
            if (o.port == null) {
              o.port = o.secureEndpoint ? 443 : 80
            }
            if (o.protocol == null) {
              o.protocol = o.secureEndpoint ? 'https:' : 'http:'
            }
            if (o.host && o.path) {
              delete o.path
            }
            delete o.agent
            delete o.hostname
            delete o._defaultAgent
            delete o.defaultPort
            delete o.createConnection
            t._last = true
            t.shouldKeepAlive = false
            let r = false
            let n = null
            const i = o.timeout || this.timeout
            const onerror = (e) => {
              if (t._hadError) return
              t.emit('error', e)
              t._hadError = true
            }
            const ontimeout = () => {
              n = null
              r = true
              const t = new Error(
                `A "socket" was not created for HTTP request before ${i}ms`
              )
              t.code = 'ETIMEOUT'
              onerror(t)
            }
            const callbackError = (t) => {
              if (r) return
              if (n !== null) {
                clearTimeout(n)
                n = null
              }
              onerror(t)
            }
            const onsocket = (e) => {
              if (r) return
              if (n != null) {
                clearTimeout(n)
                n = null
              }
              if (isAgent(e)) {
                u(
                  'Callback returned another Agent instance %o',
                  e.constructor.name
                )
                e.addRequest(t, o)
                return
              }
              if (e) {
                e.once('free', () => {
                  this.freeSocket(e, o)
                })
                t.onSocket(e)
                return
              }
              const i = new Error(
                `no Duplex stream was returned to agent-base for \`${t.method} ${t.path}\``
              )
              onerror(i)
            }
            if (typeof this.callback !== 'function') {
              onerror(new Error('`callback` is not defined'))
              return
            }
            if (!this.promisifiedCallback) {
              if (this.callback.length >= 3) {
                u('Converting legacy callback function to promise')
                this.promisifiedCallback = s.default(this.callback)
              } else {
                this.promisifiedCallback = this.callback
              }
            }
            if (typeof i === 'number' && i > 0) {
              n = setTimeout(ontimeout, i)
            }
            if ('port' in o && typeof o.port !== 'number') {
              o.port = Number(o.port)
            }
            try {
              u(
                'Resolving socket for %o request: %o',
                o.protocol,
                `${t.method} ${t.path}`
              )
              Promise.resolve(this.promisifiedCallback(t, o)).then(
                onsocket,
                callbackError
              )
            } catch (t) {
              Promise.reject(t).catch(callbackError)
            }
          }
          freeSocket(t, e) {
            u('Freeing socket %o %o', t.constructor.name, e)
            t.destroy()
          }
          destroy() {
            u('Destroying agent %o', this.constructor.name)
          }
        }
        t.Agent = Agent
        t.prototype = t.Agent.prototype
      })(createAgent || (createAgent = {}))
      t.exports = createAgent
    },
    457: (t, e) => {
      Object.defineProperty(e, '__esModule', { value: true })
      function promisify(t) {
        return function (e, o) {
          return new Promise((r, n) => {
            t.call(this, e, o, (t, e) => {
              if (t) {
                n(t)
              } else {
                r(e)
              }
            })
          })
        }
      }
      e['default'] = promisify
    },
    386: function (t, e, o) {
      var r =
        (this && this.__awaiter) ||
        function (t, e, o, r) {
          function adopt(t) {
            return t instanceof o
              ? t
              : new o(function (e) {
                  e(t)
                })
          }
          return new (o || (o = Promise))(function (o, n) {
            function fulfilled(t) {
              try {
                step(r.next(t))
              } catch (t) {
                n(t)
              }
            }
            function rejected(t) {
              try {
                step(r['throw'](t))
              } catch (t) {
                n(t)
              }
            }
            function step(t) {
              t.done ? o(t.value) : adopt(t.value).then(fulfilled, rejected)
            }
            step((r = r.apply(t, e || [])).next())
          })
        }
      var n =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t }
        }
      Object.defineProperty(e, '__esModule', { value: true })
      const i = n(o(808))
      const s = n(o(404))
      const u = n(o(310))
      const a = n(o(937))
      const c = n(o(862))
      const l = o(448)
      const f = (0, a.default)('http-proxy-agent')
      function isHTTPS(t) {
        return typeof t === 'string' ? /^https:?$/i.test(t) : false
      }
      class HttpProxyAgent extends l.Agent {
        constructor(t) {
          let e
          if (typeof t === 'string') {
            e = u.default.parse(t)
          } else {
            e = t
          }
          if (!e) {
            throw new Error(
              'an HTTP(S) proxy server `host` and `port` must be specified!'
            )
          }
          f('Creating new HttpProxyAgent instance: %o', e)
          super(e)
          const o = Object.assign({}, e)
          this.secureProxy = e.secureProxy || isHTTPS(o.protocol)
          o.host = o.hostname || o.host
          if (typeof o.port === 'string') {
            o.port = parseInt(o.port, 10)
          }
          if (!o.port && o.host) {
            o.port = this.secureProxy ? 443 : 80
          }
          if (o.host && o.path) {
            delete o.path
            delete o.pathname
          }
          this.proxy = o
        }
        callback(t, e) {
          return r(this, void 0, void 0, function* () {
            const { proxy: o, secureProxy: r } = this
            const n = u.default.parse(t.path)
            if (!n.protocol) {
              n.protocol = 'http:'
            }
            if (!n.hostname) {
              n.hostname = e.hostname || e.host || null
            }
            if (n.port == null && typeof e.port) {
              n.port = String(e.port)
            }
            if (n.port === '80') {
              n.port = ''
            }
            t.path = u.default.format(n)
            if (o.auth) {
              t.setHeader(
                'Proxy-Authorization',
                `Basic ${Buffer.from(o.auth).toString('base64')}`
              )
            }
            let a
            if (r) {
              f('Creating `tls.Socket`: %o', o)
              a = s.default.connect(o)
            } else {
              f('Creating `net.Socket`: %o', o)
              a = i.default.connect(o)
            }
            if (t._header) {
              let e
              let o
              f('Regenerating stored HTTP header string for request')
              t._header = null
              t._implicitHeader()
              if (t.output && t.output.length > 0) {
                f(
                  'Patching connection write() output buffer with updated header'
                )
                e = t.output[0]
                o = e.indexOf('\r\n\r\n') + 4
                t.output[0] = t._header + e.substring(o)
                f('Output buffer: %o', t.output)
              } else if (t.outputData && t.outputData.length > 0) {
                f(
                  'Patching connection write() output buffer with updated header'
                )
                e = t.outputData[0].data
                o = e.indexOf('\r\n\r\n') + 4
                t.outputData[0].data = t._header + e.substring(o)
                f('Output buffer: %o', t.outputData[0].data)
              }
            }
            yield (0, c.default)(a, 'connect')
            return a
          })
        }
      }
      e['default'] = HttpProxyAgent
    },
    289: function (t, e, o) {
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t }
        }
      const n = r(o(386))
      function createHttpProxyAgent(t) {
        return new n.default(t)
      }
      ;(function (t) {
        t.HttpProxyAgent = n.default
        t.prototype = n.default.prototype
      })(createHttpProxyAgent || (createHttpProxyAgent = {}))
      t.exports = createHttpProxyAgent
    },
    361: (t) => {
      t.exports = require('events')
    },
    808: (t) => {
      t.exports = require('net')
    },
    937: (t) => {
      t.exports = require('next/dist/compiled/debug')
    },
    404: (t) => {
      t.exports = require('tls')
    },
    310: (t) => {
      t.exports = require('url')
    },
  }
  var e = {}
  function __nccwpck_require__(o) {
    var r = e[o]
    if (r !== undefined) {
      return r.exports
    }
    var n = (e[o] = { exports: {} })
    var i = true
    try {
      t[o].call(n.exports, n, n.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete e[o]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var o = __nccwpck_require__(289)
  module.exports = o
})()
