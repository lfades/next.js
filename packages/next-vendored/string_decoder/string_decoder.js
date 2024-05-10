;(function () {
  var t = {
    55: function (t, e, r) {
      var n = r(300)
      var i = n.Buffer
      function copyProps(t, e) {
        for (var r in t) {
          e[r] = t[r]
        }
      }
      if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
        t.exports = n
      } else {
        copyProps(n, e)
        e.Buffer = SafeBuffer
      }
      function SafeBuffer(t, e, r) {
        return i(t, e, r)
      }
      SafeBuffer.prototype = Object.create(i.prototype)
      copyProps(i, SafeBuffer)
      SafeBuffer.from = function (t, e, r) {
        if (typeof t === 'number') {
          throw new TypeError('Argument must not be a number')
        }
        return i(t, e, r)
      }
      SafeBuffer.alloc = function (t, e, r) {
        if (typeof t !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        var n = i(t)
        if (e !== undefined) {
          if (typeof r === 'string') {
            n.fill(e, r)
          } else {
            n.fill(e)
          }
        } else {
          n.fill(0)
        }
        return n
      }
      SafeBuffer.allocUnsafe = function (t) {
        if (typeof t !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        return i(t)
      }
      SafeBuffer.allocUnsafeSlow = function (t) {
        if (typeof t !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        return n.SlowBuffer(t)
      }
    },
    300: function (t) {
      'use strict'
      t.exports = require('buffer')
    },
  }
  var e = {}
  function __nccwpck_require__(r) {
    var n = e[r]
    if (n !== undefined) {
      return n.exports
    }
    var i = (e[r] = { exports: {} })
    var s = true
    try {
      t[r](i, i.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete e[r]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var r = {}
  !(function () {
    'use strict'
    var t = r
    var e = __nccwpck_require__(55).Buffer
    var n =
      e.isEncoding ||
      function (t) {
        t = '' + t
        switch (t && t.toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
          case 'raw':
            return true
          default:
            return false
        }
      }
    function _normalizeEncoding(t) {
      if (!t) return 'utf8'
      var e
      while (true) {
        switch (t) {
          case 'utf8':
          case 'utf-8':
            return 'utf8'
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 'utf16le'
          case 'latin1':
          case 'binary':
            return 'latin1'
          case 'base64':
          case 'ascii':
          case 'hex':
            return t
          default:
            if (e) return
            t = ('' + t).toLowerCase()
            e = true
        }
      }
    }
    function normalizeEncoding(t) {
      var r = _normalizeEncoding(t)
      if (typeof r !== 'string' && (e.isEncoding === n || !n(t)))
        throw new Error('Unknown encoding: ' + t)
      return r || t
    }
    t.StringDecoder = StringDecoder
    function StringDecoder(t) {
      this.encoding = normalizeEncoding(t)
      var r
      switch (this.encoding) {
        case 'utf16le':
          this.text = utf16Text
          this.end = utf16End
          r = 4
          break
        case 'utf8':
          this.fillLast = utf8FillLast
          r = 4
          break
        case 'base64':
          this.text = base64Text
          this.end = base64End
          r = 3
          break
        default:
          this.write = simpleWrite
          this.end = simpleEnd
          return
      }
      this.lastNeed = 0
      this.lastTotal = 0
      this.lastChar = e.allocUnsafe(r)
    }
    StringDecoder.prototype.write = function (t) {
      if (t.length === 0) return ''
      var e
      var r
      if (this.lastNeed) {
        e = this.fillLast(t)
        if (e === undefined) return ''
        r = this.lastNeed
        this.lastNeed = 0
      } else {
        r = 0
      }
      if (r < t.length) return e ? e + this.text(t, r) : this.text(t, r)
      return e || ''
    }
    StringDecoder.prototype.end = utf8End
    StringDecoder.prototype.text = utf8Text
    StringDecoder.prototype.fillLast = function (t) {
      if (this.lastNeed <= t.length) {
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed)
        return this.lastChar.toString(this.encoding, 0, this.lastTotal)
      }
      t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length)
      this.lastNeed -= t.length
    }
    function utf8CheckByte(t) {
      if (t <= 127) return 0
      else if (t >> 5 === 6) return 2
      else if (t >> 4 === 14) return 3
      else if (t >> 3 === 30) return 4
      return t >> 6 === 2 ? -1 : -2
    }
    function utf8CheckIncomplete(t, e, r) {
      var n = e.length - 1
      if (n < r) return 0
      var i = utf8CheckByte(e[n])
      if (i >= 0) {
        if (i > 0) t.lastNeed = i - 1
        return i
      }
      if (--n < r || i === -2) return 0
      i = utf8CheckByte(e[n])
      if (i >= 0) {
        if (i > 0) t.lastNeed = i - 2
        return i
      }
      if (--n < r || i === -2) return 0
      i = utf8CheckByte(e[n])
      if (i >= 0) {
        if (i > 0) {
          if (i === 2) i = 0
          else t.lastNeed = i - 3
        }
        return i
      }
      return 0
    }
    function utf8CheckExtraBytes(t, e, r) {
      if ((e[0] & 192) !== 128) {
        t.lastNeed = 0
        return '�'
      }
      if (t.lastNeed > 1 && e.length > 1) {
        if ((e[1] & 192) !== 128) {
          t.lastNeed = 1
          return '�'
        }
        if (t.lastNeed > 2 && e.length > 2) {
          if ((e[2] & 192) !== 128) {
            t.lastNeed = 2
            return '�'
          }
        }
      }
    }
    function utf8FillLast(t) {
      var e = this.lastTotal - this.lastNeed
      var r = utf8CheckExtraBytes(this, t, e)
      if (r !== undefined) return r
      if (this.lastNeed <= t.length) {
        t.copy(this.lastChar, e, 0, this.lastNeed)
        return this.lastChar.toString(this.encoding, 0, this.lastTotal)
      }
      t.copy(this.lastChar, e, 0, t.length)
      this.lastNeed -= t.length
    }
    function utf8Text(t, e) {
      var r = utf8CheckIncomplete(this, t, e)
      if (!this.lastNeed) return t.toString('utf8', e)
      this.lastTotal = r
      var n = t.length - (r - this.lastNeed)
      t.copy(this.lastChar, 0, n)
      return t.toString('utf8', e, n)
    }
    function utf8End(t) {
      var e = t && t.length ? this.write(t) : ''
      if (this.lastNeed) return e + '�'
      return e
    }
    function utf16Text(t, e) {
      if ((t.length - e) % 2 === 0) {
        var r = t.toString('utf16le', e)
        if (r) {
          var n = r.charCodeAt(r.length - 1)
          if (n >= 55296 && n <= 56319) {
            this.lastNeed = 2
            this.lastTotal = 4
            this.lastChar[0] = t[t.length - 2]
            this.lastChar[1] = t[t.length - 1]
            return r.slice(0, -1)
          }
        }
        return r
      }
      this.lastNeed = 1
      this.lastTotal = 2
      this.lastChar[0] = t[t.length - 1]
      return t.toString('utf16le', e, t.length - 1)
    }
    function utf16End(t) {
      var e = t && t.length ? this.write(t) : ''
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed
        return e + this.lastChar.toString('utf16le', 0, r)
      }
      return e
    }
    function base64Text(t, e) {
      var r = (t.length - e) % 3
      if (r === 0) return t.toString('base64', e)
      this.lastNeed = 3 - r
      this.lastTotal = 3
      if (r === 1) {
        this.lastChar[0] = t[t.length - 1]
      } else {
        this.lastChar[0] = t[t.length - 2]
        this.lastChar[1] = t[t.length - 1]
      }
      return t.toString('base64', e, t.length - r)
    }
    function base64End(t) {
      var e = t && t.length ? this.write(t) : ''
      if (this.lastNeed)
        return e + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
      return e
    }
    function simpleWrite(t) {
      return t.toString(this.encoding)
    }
    function simpleEnd(t) {
      return t && t.length ? this.write(t) : ''
    }
  })()
  module.exports = r
})()
