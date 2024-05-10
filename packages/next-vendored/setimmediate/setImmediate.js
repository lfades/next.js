;(function () {
  var e = {
    189: function () {
      ;(function (e, t) {
        'use strict'
        if (e.setImmediate) {
          return
        }
        var n = 1
        var a = {}
        var s = false
        var i = e.document
        var r
        function setImmediate(e) {
          if (typeof e !== 'function') {
            e = new Function('' + e)
          }
          var t = new Array(arguments.length - 1)
          for (var s = 0; s < t.length; s++) {
            t[s] = arguments[s + 1]
          }
          var i = { callback: e, args: t }
          a[n] = i
          r(n)
          return n++
        }
        function clearImmediate(e) {
          delete a[e]
        }
        function run(e) {
          var n = e.callback
          var a = e.args
          switch (a.length) {
            case 0:
              n()
              break
            case 1:
              n(a[0])
              break
            case 2:
              n(a[0], a[1])
              break
            case 3:
              n(a[0], a[1], a[2])
              break
            default:
              n.apply(t, a)
              break
          }
        }
        function runIfPresent(e) {
          if (s) {
            setTimeout(runIfPresent, 0, e)
          } else {
            var t = a[e]
            if (t) {
              s = true
              try {
                run(t)
              } finally {
                clearImmediate(e)
                s = false
              }
            }
          }
        }
        function installNextTickImplementation() {
          r = function (e) {
            process.nextTick(function () {
              runIfPresent(e)
            })
          }
        }
        function canUsePostMessage() {
          if (e.postMessage && !e.importScripts) {
            var t = true
            var n = e.onmessage
            e.onmessage = function () {
              t = false
            }
            e.postMessage('', '*')
            e.onmessage = n
            return t
          }
        }
        function installPostMessageImplementation() {
          var t = 'setImmediate$' + Math.random() + '$'
          var onGlobalMessage = function (n) {
            if (
              n.source === e &&
              typeof n.data === 'string' &&
              n.data.indexOf(t) === 0
            ) {
              runIfPresent(+n.data.slice(t.length))
            }
          }
          if (e.addEventListener) {
            e.addEventListener('message', onGlobalMessage, false)
          } else {
            e.attachEvent('onmessage', onGlobalMessage)
          }
          r = function (n) {
            e.postMessage(t + n, '*')
          }
        }
        function installMessageChannelImplementation() {
          var e = new MessageChannel()
          e.port1.onmessage = function (e) {
            var t = e.data
            runIfPresent(t)
          }
          r = function (t) {
            e.port2.postMessage(t)
          }
        }
        function installReadyStateChangeImplementation() {
          var e = i.documentElement
          r = function (t) {
            var n = i.createElement('script')
            n.onreadystatechange = function () {
              runIfPresent(t)
              n.onreadystatechange = null
              e.removeChild(n)
              n = null
            }
            e.appendChild(n)
          }
        }
        function installSetTimeoutImplementation() {
          r = function (e) {
            setTimeout(runIfPresent, 0, e)
          }
        }
        var o = Object.getPrototypeOf && Object.getPrototypeOf(e)
        o = o && o.setTimeout ? o : e
        if ({}.toString.call(e.process) === '[object process]') {
          installNextTickImplementation()
        } else if (canUsePostMessage()) {
          installPostMessageImplementation()
        } else if (e.MessageChannel) {
          installMessageChannelImplementation()
        } else if (i && 'onreadystatechange' in i.createElement('script')) {
          installReadyStateChangeImplementation()
        } else {
          installSetTimeoutImplementation()
        }
        o.setImmediate = setImmediate
        o.clearImmediate = clearImmediate
      })(
        typeof self === 'undefined'
          ? typeof global === 'undefined'
            ? this
            : global
          : self
      )
    },
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = {}
  e[189]()
  module.exports = t
})()
