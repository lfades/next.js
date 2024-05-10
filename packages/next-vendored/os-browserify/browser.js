;(function () {
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = {}
  !(function () {
    var e = n
    e.endianness = function () {
      return 'LE'
    }
    e.hostname = function () {
      if (typeof location !== 'undefined') {
        return location.hostname
      } else return ''
    }
    e.loadavg = function () {
      return []
    }
    e.uptime = function () {
      return 0
    }
    e.freemem = function () {
      return Number.MAX_VALUE
    }
    e.totalmem = function () {
      return Number.MAX_VALUE
    }
    e.cpus = function () {
      return []
    }
    e.type = function () {
      return 'Browser'
    }
    e.release = function () {
      if (typeof navigator !== 'undefined') {
        return navigator.appVersion
      }
      return ''
    }
    e.networkInterfaces = e.getNetworkInterfaces = function () {
      return {}
    }
    e.arch = function () {
      return 'javascript'
    }
    e.platform = function () {
      return 'browser'
    }
    e.tmpdir = e.tmpDir = function () {
      return '/tmp'
    }
    e.EOL = '\n'
    e.homedir = function () {
      return '/'
    }
  })()
  module.exports = n
})()
