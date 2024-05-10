;(function () {
  var e = {
    675: function (e, r) {
      'use strict'
      r.byteLength = byteLength
      r.toByteArray = toByteArray
      r.fromByteArray = fromByteArray
      var t = []
      var f = []
      var n = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
      var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
      for (var o = 0, u = i.length; o < u; ++o) {
        t[o] = i[o]
        f[i.charCodeAt(o)] = o
      }
      f['-'.charCodeAt(0)] = 62
      f['_'.charCodeAt(0)] = 63
      function getLens(e) {
        var r = e.length
        if (r % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4')
        }
        var t = e.indexOf('=')
        if (t === -1) t = r
        var f = t === r ? 0 : 4 - (t % 4)
        return [t, f]
      }
      function byteLength(e) {
        var r = getLens(e)
        var t = r[0]
        var f = r[1]
        return ((t + f) * 3) / 4 - f
      }
      function _byteLength(e, r, t) {
        return ((r + t) * 3) / 4 - t
      }
      function toByteArray(e) {
        var r
        var t = getLens(e)
        var i = t[0]
        var o = t[1]
        var u = new n(_byteLength(e, i, o))
        var a = 0
        var s = o > 0 ? i - 4 : i
        var h
        for (h = 0; h < s; h += 4) {
          r =
            (f[e.charCodeAt(h)] << 18) |
            (f[e.charCodeAt(h + 1)] << 12) |
            (f[e.charCodeAt(h + 2)] << 6) |
            f[e.charCodeAt(h + 3)]
          u[a++] = (r >> 16) & 255
          u[a++] = (r >> 8) & 255
          u[a++] = r & 255
        }
        if (o === 2) {
          r = (f[e.charCodeAt(h)] << 2) | (f[e.charCodeAt(h + 1)] >> 4)
          u[a++] = r & 255
        }
        if (o === 1) {
          r =
            (f[e.charCodeAt(h)] << 10) |
            (f[e.charCodeAt(h + 1)] << 4) |
            (f[e.charCodeAt(h + 2)] >> 2)
          u[a++] = (r >> 8) & 255
          u[a++] = r & 255
        }
        return u
      }
      function tripletToBase64(e) {
        return (
          t[(e >> 18) & 63] + t[(e >> 12) & 63] + t[(e >> 6) & 63] + t[e & 63]
        )
      }
      function encodeChunk(e, r, t) {
        var f
        var n = []
        for (var i = r; i < t; i += 3) {
          f =
            ((e[i] << 16) & 16711680) +
            ((e[i + 1] << 8) & 65280) +
            (e[i + 2] & 255)
          n.push(tripletToBase64(f))
        }
        return n.join('')
      }
      function fromByteArray(e) {
        var r
        var f = e.length
        var n = f % 3
        var i = []
        var o = 16383
        for (var u = 0, a = f - n; u < a; u += o) {
          i.push(encodeChunk(e, u, u + o > a ? a : u + o))
        }
        if (n === 1) {
          r = e[f - 1]
          i.push(t[r >> 2] + t[(r << 4) & 63] + '==')
        } else if (n === 2) {
          r = (e[f - 2] << 8) + e[f - 1]
          i.push(t[r >> 10] + t[(r >> 4) & 63] + t[(r << 2) & 63] + '=')
        }
        return i.join('')
      }
    },
    72: function (e, r, t) {
      'use strict'
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ var f = t(675)
      var n = t(783)
      var i =
        typeof Symbol === 'function' && typeof Symbol.for === 'function'
          ? Symbol.for('nodejs.util.inspect.custom')
          : null
      r.Buffer = Buffer
      r.SlowBuffer = SlowBuffer
      r.INSPECT_MAX_BYTES = 50
      var o = 2147483647
      r.kMaxLength = o
      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
      if (
        !Buffer.TYPED_ARRAY_SUPPORT &&
        typeof console !== 'undefined' &&
        typeof console.error === 'function'
      ) {
        console.error(
          'This browser lacks typed array (Uint8Array) support which is required by ' +
            '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
        )
      }
      function typedArraySupport() {
        try {
          var e = new Uint8Array(1)
          var r = {
            foo: function () {
              return 42
            },
          }
          Object.setPrototypeOf(r, Uint8Array.prototype)
          Object.setPrototypeOf(e, r)
          return e.foo() === 42
        } catch (e) {
          return false
        }
      }
      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function () {
          if (!Buffer.isBuffer(this)) return undefined
          return this.buffer
        },
      })
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function () {
          if (!Buffer.isBuffer(this)) return undefined
          return this.byteOffset
        },
      })
      function createBuffer(e) {
        if (e > o) {
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"'
          )
        }
        var r = new Uint8Array(e)
        Object.setPrototypeOf(r, Buffer.prototype)
        return r
      }
      function Buffer(e, r, t) {
        if (typeof e === 'number') {
          if (typeof r === 'string') {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          }
          return allocUnsafe(e)
        }
        return from(e, r, t)
      }
      Buffer.poolSize = 8192
      function from(e, r, t) {
        if (typeof e === 'string') {
          return fromString(e, r)
        }
        if (ArrayBuffer.isView(e)) {
          return fromArrayLike(e)
        }
        if (e == null) {
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
              'or Array-like Object. Received type ' +
              typeof e
          )
        }
        if (
          isInstance(e, ArrayBuffer) ||
          (e && isInstance(e.buffer, ArrayBuffer))
        ) {
          return fromArrayBuffer(e, r, t)
        }
        if (
          typeof SharedArrayBuffer !== 'undefined' &&
          (isInstance(e, SharedArrayBuffer) ||
            (e && isInstance(e.buffer, SharedArrayBuffer)))
        ) {
          return fromArrayBuffer(e, r, t)
        }
        if (typeof e === 'number') {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        }
        var f = e.valueOf && e.valueOf()
        if (f != null && f !== e) {
          return Buffer.from(f, r, t)
        }
        var n = fromObject(e)
        if (n) return n
        if (
          typeof Symbol !== 'undefined' &&
          Symbol.toPrimitive != null &&
          typeof e[Symbol.toPrimitive] === 'function'
        ) {
          return Buffer.from(e[Symbol.toPrimitive]('string'), r, t)
        }
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
            'or Array-like Object. Received type ' +
            typeof e
        )
      }
      Buffer.from = function (e, r, t) {
        return from(e, r, t)
      }
      Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
      Object.setPrototypeOf(Buffer, Uint8Array)
      function assertSize(e) {
        if (typeof e !== 'number') {
          throw new TypeError('"size" argument must be of type number')
        } else if (e < 0) {
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"'
          )
        }
      }
      function alloc(e, r, t) {
        assertSize(e)
        if (e <= 0) {
          return createBuffer(e)
        }
        if (r !== undefined) {
          return typeof t === 'string'
            ? createBuffer(e).fill(r, t)
            : createBuffer(e).fill(r)
        }
        return createBuffer(e)
      }
      Buffer.alloc = function (e, r, t) {
        return alloc(e, r, t)
      }
      function allocUnsafe(e) {
        assertSize(e)
        return createBuffer(e < 0 ? 0 : checked(e) | 0)
      }
      Buffer.allocUnsafe = function (e) {
        return allocUnsafe(e)
      }
      Buffer.allocUnsafeSlow = function (e) {
        return allocUnsafe(e)
      }
      function fromString(e, r) {
        if (typeof r !== 'string' || r === '') {
          r = 'utf8'
        }
        if (!Buffer.isEncoding(r)) {
          throw new TypeError('Unknown encoding: ' + r)
        }
        var t = byteLength(e, r) | 0
        var f = createBuffer(t)
        var n = f.write(e, r)
        if (n !== t) {
          f = f.slice(0, n)
        }
        return f
      }
      function fromArrayLike(e) {
        var r = e.length < 0 ? 0 : checked(e.length) | 0
        var t = createBuffer(r)
        for (var f = 0; f < r; f += 1) {
          t[f] = e[f] & 255
        }
        return t
      }
      function fromArrayBuffer(e, r, t) {
        if (r < 0 || e.byteLength < r) {
          throw new RangeError('"offset" is outside of buffer bounds')
        }
        if (e.byteLength < r + (t || 0)) {
          throw new RangeError('"length" is outside of buffer bounds')
        }
        var f
        if (r === undefined && t === undefined) {
          f = new Uint8Array(e)
        } else if (t === undefined) {
          f = new Uint8Array(e, r)
        } else {
          f = new Uint8Array(e, r, t)
        }
        Object.setPrototypeOf(f, Buffer.prototype)
        return f
      }
      function fromObject(e) {
        if (Buffer.isBuffer(e)) {
          var r = checked(e.length) | 0
          var t = createBuffer(r)
          if (t.length === 0) {
            return t
          }
          e.copy(t, 0, 0, r)
          return t
        }
        if (e.length !== undefined) {
          if (typeof e.length !== 'number' || numberIsNaN(e.length)) {
            return createBuffer(0)
          }
          return fromArrayLike(e)
        }
        if (e.type === 'Buffer' && Array.isArray(e.data)) {
          return fromArrayLike(e.data)
        }
      }
      function checked(e) {
        if (e >= o) {
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum ' +
              'size: 0x' +
              o.toString(16) +
              ' bytes'
          )
        }
        return e | 0
      }
      function SlowBuffer(e) {
        if (+e != e) {
          e = 0
        }
        return Buffer.alloc(+e)
      }
      Buffer.isBuffer = function isBuffer(e) {
        return e != null && e._isBuffer === true && e !== Buffer.prototype
      }
      Buffer.compare = function compare(e, r) {
        if (isInstance(e, Uint8Array))
          e = Buffer.from(e, e.offset, e.byteLength)
        if (isInstance(r, Uint8Array))
          r = Buffer.from(r, r.offset, r.byteLength)
        if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          )
        }
        if (e === r) return 0
        var t = e.length
        var f = r.length
        for (var n = 0, i = Math.min(t, f); n < i; ++n) {
          if (e[n] !== r[n]) {
            t = e[n]
            f = r[n]
            break
          }
        }
        if (t < f) return -1
        if (f < t) return 1
        return 0
      }
      Buffer.isEncoding = function isEncoding(e) {
        switch (String(e).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true
          default:
            return false
        }
      }
      Buffer.concat = function concat(e, r) {
        if (!Array.isArray(e)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        if (e.length === 0) {
          return Buffer.alloc(0)
        }
        var t
        if (r === undefined) {
          r = 0
          for (t = 0; t < e.length; ++t) {
            r += e[t].length
          }
        }
        var f = Buffer.allocUnsafe(r)
        var n = 0
        for (t = 0; t < e.length; ++t) {
          var i = e[t]
          if (isInstance(i, Uint8Array)) {
            i = Buffer.from(i)
          }
          if (!Buffer.isBuffer(i)) {
            throw new TypeError('"list" argument must be an Array of Buffers')
          }
          i.copy(f, n)
          n += i.length
        }
        return f
      }
      function byteLength(e, r) {
        if (Buffer.isBuffer(e)) {
          return e.length
        }
        if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
          return e.byteLength
        }
        if (typeof e !== 'string') {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
              'Received type ' +
              typeof e
          )
        }
        var t = e.length
        var f = arguments.length > 2 && arguments[2] === true
        if (!f && t === 0) return 0
        var n = false
        for (;;) {
          switch (r) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return t
            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(e).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return t * 2
            case 'hex':
              return t >>> 1
            case 'base64':
              return base64ToBytes(e).length
            default:
              if (n) {
                return f ? -1 : utf8ToBytes(e).length
              }
              r = ('' + r).toLowerCase()
              n = true
          }
        }
      }
      Buffer.byteLength = byteLength
      function slowToString(e, r, t) {
        var f = false
        if (r === undefined || r < 0) {
          r = 0
        }
        if (r > this.length) {
          return ''
        }
        if (t === undefined || t > this.length) {
          t = this.length
        }
        if (t <= 0) {
          return ''
        }
        t >>>= 0
        r >>>= 0
        if (t <= r) {
          return ''
        }
        if (!e) e = 'utf8'
        while (true) {
          switch (e) {
            case 'hex':
              return hexSlice(this, r, t)
            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, r, t)
            case 'ascii':
              return asciiSlice(this, r, t)
            case 'latin1':
            case 'binary':
              return latin1Slice(this, r, t)
            case 'base64':
              return base64Slice(this, r, t)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, r, t)
            default:
              if (f) throw new TypeError('Unknown encoding: ' + e)
              e = (e + '').toLowerCase()
              f = true
          }
        }
      }
      Buffer.prototype._isBuffer = true
      function swap(e, r, t) {
        var f = e[r]
        e[r] = e[t]
        e[t] = f
      }
      Buffer.prototype.swap16 = function swap16() {
        var e = this.length
        if (e % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits')
        }
        for (var r = 0; r < e; r += 2) {
          swap(this, r, r + 1)
        }
        return this
      }
      Buffer.prototype.swap32 = function swap32() {
        var e = this.length
        if (e % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits')
        }
        for (var r = 0; r < e; r += 4) {
          swap(this, r, r + 3)
          swap(this, r + 1, r + 2)
        }
        return this
      }
      Buffer.prototype.swap64 = function swap64() {
        var e = this.length
        if (e % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits')
        }
        for (var r = 0; r < e; r += 8) {
          swap(this, r, r + 7)
          swap(this, r + 1, r + 6)
          swap(this, r + 2, r + 5)
          swap(this, r + 3, r + 4)
        }
        return this
      }
      Buffer.prototype.toString = function toString() {
        var e = this.length
        if (e === 0) return ''
        if (arguments.length === 0) return utf8Slice(this, 0, e)
        return slowToString.apply(this, arguments)
      }
      Buffer.prototype.toLocaleString = Buffer.prototype.toString
      Buffer.prototype.equals = function equals(e) {
        if (!Buffer.isBuffer(e))
          throw new TypeError('Argument must be a Buffer')
        if (this === e) return true
        return Buffer.compare(this, e) === 0
      }
      Buffer.prototype.inspect = function inspect() {
        var e = ''
        var t = r.INSPECT_MAX_BYTES
        e = this.toString('hex', 0, t)
          .replace(/(.{2})/g, '$1 ')
          .trim()
        if (this.length > t) e += ' ... '
        return '<Buffer ' + e + '>'
      }
      if (i) {
        Buffer.prototype[i] = Buffer.prototype.inspect
      }
      Buffer.prototype.compare = function compare(e, r, t, f, n) {
        if (isInstance(e, Uint8Array)) {
          e = Buffer.from(e, e.offset, e.byteLength)
        }
        if (!Buffer.isBuffer(e)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. ' +
              'Received type ' +
              typeof e
          )
        }
        if (r === undefined) {
          r = 0
        }
        if (t === undefined) {
          t = e ? e.length : 0
        }
        if (f === undefined) {
          f = 0
        }
        if (n === undefined) {
          n = this.length
        }
        if (r < 0 || t > e.length || f < 0 || n > this.length) {
          throw new RangeError('out of range index')
        }
        if (f >= n && r >= t) {
          return 0
        }
        if (f >= n) {
          return -1
        }
        if (r >= t) {
          return 1
        }
        r >>>= 0
        t >>>= 0
        f >>>= 0
        n >>>= 0
        if (this === e) return 0
        var i = n - f
        var o = t - r
        var u = Math.min(i, o)
        var a = this.slice(f, n)
        var s = e.slice(r, t)
        for (var h = 0; h < u; ++h) {
          if (a[h] !== s[h]) {
            i = a[h]
            o = s[h]
            break
          }
        }
        if (i < o) return -1
        if (o < i) return 1
        return 0
      }
      function bidirectionalIndexOf(e, r, t, f, n) {
        if (e.length === 0) return -1
        if (typeof t === 'string') {
          f = t
          t = 0
        } else if (t > 2147483647) {
          t = 2147483647
        } else if (t < -2147483648) {
          t = -2147483648
        }
        t = +t
        if (numberIsNaN(t)) {
          t = n ? 0 : e.length - 1
        }
        if (t < 0) t = e.length + t
        if (t >= e.length) {
          if (n) return -1
          else t = e.length - 1
        } else if (t < 0) {
          if (n) t = 0
          else return -1
        }
        if (typeof r === 'string') {
          r = Buffer.from(r, f)
        }
        if (Buffer.isBuffer(r)) {
          if (r.length === 0) {
            return -1
          }
          return arrayIndexOf(e, r, t, f, n)
        } else if (typeof r === 'number') {
          r = r & 255
          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (n) {
              return Uint8Array.prototype.indexOf.call(e, r, t)
            } else {
              return Uint8Array.prototype.lastIndexOf.call(e, r, t)
            }
          }
          return arrayIndexOf(e, [r], t, f, n)
        }
        throw new TypeError('val must be string, number or Buffer')
      }
      function arrayIndexOf(e, r, t, f, n) {
        var i = 1
        var o = e.length
        var u = r.length
        if (f !== undefined) {
          f = String(f).toLowerCase()
          if (
            f === 'ucs2' ||
            f === 'ucs-2' ||
            f === 'utf16le' ||
            f === 'utf-16le'
          ) {
            if (e.length < 2 || r.length < 2) {
              return -1
            }
            i = 2
            o /= 2
            u /= 2
            t /= 2
          }
        }
        function read(e, r) {
          if (i === 1) {
            return e[r]
          } else {
            return e.readUInt16BE(r * i)
          }
        }
        var a
        if (n) {
          var s = -1
          for (a = t; a < o; a++) {
            if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
              if (s === -1) s = a
              if (a - s + 1 === u) return s * i
            } else {
              if (s !== -1) a -= a - s
              s = -1
            }
          }
        } else {
          if (t + u > o) t = o - u
          for (a = t; a >= 0; a--) {
            var h = true
            for (var c = 0; c < u; c++) {
              if (read(e, a + c) !== read(r, c)) {
                h = false
                break
              }
            }
            if (h) return a
          }
        }
        return -1
      }
      Buffer.prototype.includes = function includes(e, r, t) {
        return this.indexOf(e, r, t) !== -1
      }
      Buffer.prototype.indexOf = function indexOf(e, r, t) {
        return bidirectionalIndexOf(this, e, r, t, true)
      }
      Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
        return bidirectionalIndexOf(this, e, r, t, false)
      }
      function hexWrite(e, r, t, f) {
        t = Number(t) || 0
        var n = e.length - t
        if (!f) {
          f = n
        } else {
          f = Number(f)
          if (f > n) {
            f = n
          }
        }
        var i = r.length
        if (f > i / 2) {
          f = i / 2
        }
        for (var o = 0; o < f; ++o) {
          var u = parseInt(r.substr(o * 2, 2), 16)
          if (numberIsNaN(u)) return o
          e[t + o] = u
        }
        return o
      }
      function utf8Write(e, r, t, f) {
        return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f)
      }
      function asciiWrite(e, r, t, f) {
        return blitBuffer(asciiToBytes(r), e, t, f)
      }
      function latin1Write(e, r, t, f) {
        return asciiWrite(e, r, t, f)
      }
      function base64Write(e, r, t, f) {
        return blitBuffer(base64ToBytes(r), e, t, f)
      }
      function ucs2Write(e, r, t, f) {
        return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f)
      }
      Buffer.prototype.write = function write(e, r, t, f) {
        if (r === undefined) {
          f = 'utf8'
          t = this.length
          r = 0
        } else if (t === undefined && typeof r === 'string') {
          f = r
          t = this.length
          r = 0
        } else if (isFinite(r)) {
          r = r >>> 0
          if (isFinite(t)) {
            t = t >>> 0
            if (f === undefined) f = 'utf8'
          } else {
            f = t
            t = undefined
          }
        } else {
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
          )
        }
        var n = this.length - r
        if (t === undefined || t > n) t = n
        if ((e.length > 0 && (t < 0 || r < 0)) || r > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds')
        }
        if (!f) f = 'utf8'
        var i = false
        for (;;) {
          switch (f) {
            case 'hex':
              return hexWrite(this, e, r, t)
            case 'utf8':
            case 'utf-8':
              return utf8Write(this, e, r, t)
            case 'ascii':
              return asciiWrite(this, e, r, t)
            case 'latin1':
            case 'binary':
              return latin1Write(this, e, r, t)
            case 'base64':
              return base64Write(this, e, r, t)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, e, r, t)
            default:
              if (i) throw new TypeError('Unknown encoding: ' + f)
              f = ('' + f).toLowerCase()
              i = true
          }
        }
      }
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0),
        }
      }
      function base64Slice(e, r, t) {
        if (r === 0 && t === e.length) {
          return f.fromByteArray(e)
        } else {
          return f.fromByteArray(e.slice(r, t))
        }
      }
      function utf8Slice(e, r, t) {
        t = Math.min(e.length, t)
        var f = []
        var n = r
        while (n < t) {
          var i = e[n]
          var o = null
          var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1
          if (n + u <= t) {
            var a, s, h, c
            switch (u) {
              case 1:
                if (i < 128) {
                  o = i
                }
                break
              case 2:
                a = e[n + 1]
                if ((a & 192) === 128) {
                  c = ((i & 31) << 6) | (a & 63)
                  if (c > 127) {
                    o = c
                  }
                }
                break
              case 3:
                a = e[n + 1]
                s = e[n + 2]
                if ((a & 192) === 128 && (s & 192) === 128) {
                  c = ((i & 15) << 12) | ((a & 63) << 6) | (s & 63)
                  if (c > 2047 && (c < 55296 || c > 57343)) {
                    o = c
                  }
                }
                break
              case 4:
                a = e[n + 1]
                s = e[n + 2]
                h = e[n + 3]
                if (
                  (a & 192) === 128 &&
                  (s & 192) === 128 &&
                  (h & 192) === 128
                ) {
                  c =
                    ((i & 15) << 18) |
                    ((a & 63) << 12) |
                    ((s & 63) << 6) |
                    (h & 63)
                  if (c > 65535 && c < 1114112) {
                    o = c
                  }
                }
            }
          }
          if (o === null) {
            o = 65533
            u = 1
          } else if (o > 65535) {
            o -= 65536
            f.push(((o >>> 10) & 1023) | 55296)
            o = 56320 | (o & 1023)
          }
          f.push(o)
          n += u
        }
        return decodeCodePointsArray(f)
      }
      var u = 4096
      function decodeCodePointsArray(e) {
        var r = e.length
        if (r <= u) {
          return String.fromCharCode.apply(String, e)
        }
        var t = ''
        var f = 0
        while (f < r) {
          t += String.fromCharCode.apply(String, e.slice(f, (f += u)))
        }
        return t
      }
      function asciiSlice(e, r, t) {
        var f = ''
        t = Math.min(e.length, t)
        for (var n = r; n < t; ++n) {
          f += String.fromCharCode(e[n] & 127)
        }
        return f
      }
      function latin1Slice(e, r, t) {
        var f = ''
        t = Math.min(e.length, t)
        for (var n = r; n < t; ++n) {
          f += String.fromCharCode(e[n])
        }
        return f
      }
      function hexSlice(e, r, t) {
        var f = e.length
        if (!r || r < 0) r = 0
        if (!t || t < 0 || t > f) t = f
        var n = ''
        for (var i = r; i < t; ++i) {
          n += s[e[i]]
        }
        return n
      }
      function utf16leSlice(e, r, t) {
        var f = e.slice(r, t)
        var n = ''
        for (var i = 0; i < f.length; i += 2) {
          n += String.fromCharCode(f[i] + f[i + 1] * 256)
        }
        return n
      }
      Buffer.prototype.slice = function slice(e, r) {
        var t = this.length
        e = ~~e
        r = r === undefined ? t : ~~r
        if (e < 0) {
          e += t
          if (e < 0) e = 0
        } else if (e > t) {
          e = t
        }
        if (r < 0) {
          r += t
          if (r < 0) r = 0
        } else if (r > t) {
          r = t
        }
        if (r < e) r = e
        var f = this.subarray(e, r)
        Object.setPrototypeOf(f, Buffer.prototype)
        return f
      }
      function checkOffset(e, r, t) {
        if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint')
        if (e + r > t)
          throw new RangeError('Trying to access beyond buffer length')
      }
      Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
        e = e >>> 0
        r = r >>> 0
        if (!t) checkOffset(e, r, this.length)
        var f = this[e]
        var n = 1
        var i = 0
        while (++i < r && (n *= 256)) {
          f += this[e + i] * n
        }
        return f
      }
      Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
        e = e >>> 0
        r = r >>> 0
        if (!t) {
          checkOffset(e, r, this.length)
        }
        var f = this[e + --r]
        var n = 1
        while (r > 0 && (n *= 256)) {
          f += this[e + --r] * n
        }
        return f
      }
      Buffer.prototype.readUInt8 = function readUInt8(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 1, this.length)
        return this[e]
      }
      Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 2, this.length)
        return this[e] | (this[e + 1] << 8)
      }
      Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 2, this.length)
        return (this[e] << 8) | this[e + 1]
      }
      Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return (
          (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
          this[e + 3] * 16777216
        )
      }
      Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return (
          this[e] * 16777216 +
          ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
        )
      }
      Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
        e = e >>> 0
        r = r >>> 0
        if (!t) checkOffset(e, r, this.length)
        var f = this[e]
        var n = 1
        var i = 0
        while (++i < r && (n *= 256)) {
          f += this[e + i] * n
        }
        n *= 128
        if (f >= n) f -= Math.pow(2, 8 * r)
        return f
      }
      Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
        e = e >>> 0
        r = r >>> 0
        if (!t) checkOffset(e, r, this.length)
        var f = r
        var n = 1
        var i = this[e + --f]
        while (f > 0 && (n *= 256)) {
          i += this[e + --f] * n
        }
        n *= 128
        if (i >= n) i -= Math.pow(2, 8 * r)
        return i
      }
      Buffer.prototype.readInt8 = function readInt8(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 1, this.length)
        if (!(this[e] & 128)) return this[e]
        return (255 - this[e] + 1) * -1
      }
      Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 2, this.length)
        var t = this[e] | (this[e + 1] << 8)
        return t & 32768 ? t | 4294901760 : t
      }
      Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 2, this.length)
        var t = this[e + 1] | (this[e] << 8)
        return t & 32768 ? t | 4294901760 : t
      }
      Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return (
          this[e] |
          (this[e + 1] << 8) |
          (this[e + 2] << 16) |
          (this[e + 3] << 24)
        )
      }
      Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return (
          (this[e] << 24) |
          (this[e + 1] << 16) |
          (this[e + 2] << 8) |
          this[e + 3]
        )
      }
      Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return n.read(this, e, true, 23, 4)
      }
      Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 4, this.length)
        return n.read(this, e, false, 23, 4)
      }
      Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 8, this.length)
        return n.read(this, e, true, 52, 8)
      }
      Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
        e = e >>> 0
        if (!r) checkOffset(e, 8, this.length)
        return n.read(this, e, false, 52, 8)
      }
      function checkInt(e, r, t, f, n, i) {
        if (!Buffer.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (r > n || r < i)
          throw new RangeError('"value" argument is out of bounds')
        if (t + f > e.length) throw new RangeError('Index out of range')
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
        e = +e
        r = r >>> 0
        t = t >>> 0
        if (!f) {
          var n = Math.pow(2, 8 * t) - 1
          checkInt(this, e, r, t, n, 0)
        }
        var i = 1
        var o = 0
        this[r] = e & 255
        while (++o < t && (i *= 256)) {
          this[r + o] = (e / i) & 255
        }
        return r + t
      }
      Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
        e = +e
        r = r >>> 0
        t = t >>> 0
        if (!f) {
          var n = Math.pow(2, 8 * t) - 1
          checkInt(this, e, r, t, n, 0)
        }
        var i = t - 1
        var o = 1
        this[r + i] = e & 255
        while (--i >= 0 && (o *= 256)) {
          this[r + i] = (e / o) & 255
        }
        return r + t
      }
      Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 1, 255, 0)
        this[r] = e & 255
        return r + 1
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 2, 65535, 0)
        this[r] = e & 255
        this[r + 1] = e >>> 8
        return r + 2
      }
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 2, 65535, 0)
        this[r] = e >>> 8
        this[r + 1] = e & 255
        return r + 2
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 4, 4294967295, 0)
        this[r + 3] = e >>> 24
        this[r + 2] = e >>> 16
        this[r + 1] = e >>> 8
        this[r] = e & 255
        return r + 4
      }
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 4, 4294967295, 0)
        this[r] = e >>> 24
        this[r + 1] = e >>> 16
        this[r + 2] = e >>> 8
        this[r + 3] = e & 255
        return r + 4
      }
      Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
        e = +e
        r = r >>> 0
        if (!f) {
          var n = Math.pow(2, 8 * t - 1)
          checkInt(this, e, r, t, n - 1, -n)
        }
        var i = 0
        var o = 1
        var u = 0
        this[r] = e & 255
        while (++i < t && (o *= 256)) {
          if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
            u = 1
          }
          this[r + i] = (((e / o) >> 0) - u) & 255
        }
        return r + t
      }
      Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
        e = +e
        r = r >>> 0
        if (!f) {
          var n = Math.pow(2, 8 * t - 1)
          checkInt(this, e, r, t, n - 1, -n)
        }
        var i = t - 1
        var o = 1
        var u = 0
        this[r + i] = e & 255
        while (--i >= 0 && (o *= 256)) {
          if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
            u = 1
          }
          this[r + i] = (((e / o) >> 0) - u) & 255
        }
        return r + t
      }
      Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 1, 127, -128)
        if (e < 0) e = 255 + e + 1
        this[r] = e & 255
        return r + 1
      }
      Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 2, 32767, -32768)
        this[r] = e & 255
        this[r + 1] = e >>> 8
        return r + 2
      }
      Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 2, 32767, -32768)
        this[r] = e >>> 8
        this[r + 1] = e & 255
        return r + 2
      }
      Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648)
        this[r] = e & 255
        this[r + 1] = e >>> 8
        this[r + 2] = e >>> 16
        this[r + 3] = e >>> 24
        return r + 4
      }
      Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
        e = +e
        r = r >>> 0
        if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648)
        if (e < 0) e = 4294967295 + e + 1
        this[r] = e >>> 24
        this[r + 1] = e >>> 16
        this[r + 2] = e >>> 8
        this[r + 3] = e & 255
        return r + 4
      }
      function checkIEEE754(e, r, t, f, n, i) {
        if (t + f > e.length) throw new RangeError('Index out of range')
        if (t < 0) throw new RangeError('Index out of range')
      }
      function writeFloat(e, r, t, f, i) {
        r = +r
        t = t >>> 0
        if (!i) {
          checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22)
        }
        n.write(e, r, t, f, 23, 4)
        return t + 4
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
        return writeFloat(this, e, r, true, t)
      }
      Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
        return writeFloat(this, e, r, false, t)
      }
      function writeDouble(e, r, t, f, i) {
        r = +r
        t = t >>> 0
        if (!i) {
          checkIEEE754(
            e,
            r,
            t,
            8,
            17976931348623157e292,
            -17976931348623157e292
          )
        }
        n.write(e, r, t, f, 52, 8)
        return t + 8
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
        return writeDouble(this, e, r, true, t)
      }
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
        return writeDouble(this, e, r, false, t)
      }
      Buffer.prototype.copy = function copy(e, r, t, f) {
        if (!Buffer.isBuffer(e))
          throw new TypeError('argument should be a Buffer')
        if (!t) t = 0
        if (!f && f !== 0) f = this.length
        if (r >= e.length) r = e.length
        if (!r) r = 0
        if (f > 0 && f < t) f = t
        if (f === t) return 0
        if (e.length === 0 || this.length === 0) return 0
        if (r < 0) {
          throw new RangeError('targetStart out of bounds')
        }
        if (t < 0 || t >= this.length)
          throw new RangeError('Index out of range')
        if (f < 0) throw new RangeError('sourceEnd out of bounds')
        if (f > this.length) f = this.length
        if (e.length - r < f - t) {
          f = e.length - r + t
        }
        var n = f - t
        if (
          this === e &&
          typeof Uint8Array.prototype.copyWithin === 'function'
        ) {
          this.copyWithin(r, t, f)
        } else if (this === e && t < r && r < f) {
          for (var i = n - 1; i >= 0; --i) {
            e[i + r] = this[i + t]
          }
        } else {
          Uint8Array.prototype.set.call(e, this.subarray(t, f), r)
        }
        return n
      }
      Buffer.prototype.fill = function fill(e, r, t, f) {
        if (typeof e === 'string') {
          if (typeof r === 'string') {
            f = r
            r = 0
            t = this.length
          } else if (typeof t === 'string') {
            f = t
            t = this.length
          }
          if (f !== undefined && typeof f !== 'string') {
            throw new TypeError('encoding must be a string')
          }
          if (typeof f === 'string' && !Buffer.isEncoding(f)) {
            throw new TypeError('Unknown encoding: ' + f)
          }
          if (e.length === 1) {
            var n = e.charCodeAt(0)
            if ((f === 'utf8' && n < 128) || f === 'latin1') {
              e = n
            }
          }
        } else if (typeof e === 'number') {
          e = e & 255
        } else if (typeof e === 'boolean') {
          e = Number(e)
        }
        if (r < 0 || this.length < r || this.length < t) {
          throw new RangeError('Out of range index')
        }
        if (t <= r) {
          return this
        }
        r = r >>> 0
        t = t === undefined ? this.length : t >>> 0
        if (!e) e = 0
        var i
        if (typeof e === 'number') {
          for (i = r; i < t; ++i) {
            this[i] = e
          }
        } else {
          var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f)
          var u = o.length
          if (u === 0) {
            throw new TypeError(
              'The value "' + e + '" is invalid for argument "value"'
            )
          }
          for (i = 0; i < t - r; ++i) {
            this[i + r] = o[i % u]
          }
        }
        return this
      }
      var a = /[^+/0-9A-Za-z-_]/g
      function base64clean(e) {
        e = e.split('=')[0]
        e = e.trim().replace(a, '')
        if (e.length < 2) return ''
        while (e.length % 4 !== 0) {
          e = e + '='
        }
        return e
      }
      function utf8ToBytes(e, r) {
        r = r || Infinity
        var t
        var f = e.length
        var n = null
        var i = []
        for (var o = 0; o < f; ++o) {
          t = e.charCodeAt(o)
          if (t > 55295 && t < 57344) {
            if (!n) {
              if (t > 56319) {
                if ((r -= 3) > -1) i.push(239, 191, 189)
                continue
              } else if (o + 1 === f) {
                if ((r -= 3) > -1) i.push(239, 191, 189)
                continue
              }
              n = t
              continue
            }
            if (t < 56320) {
              if ((r -= 3) > -1) i.push(239, 191, 189)
              n = t
              continue
            }
            t = (((n - 55296) << 10) | (t - 56320)) + 65536
          } else if (n) {
            if ((r -= 3) > -1) i.push(239, 191, 189)
          }
          n = null
          if (t < 128) {
            if ((r -= 1) < 0) break
            i.push(t)
          } else if (t < 2048) {
            if ((r -= 2) < 0) break
            i.push((t >> 6) | 192, (t & 63) | 128)
          } else if (t < 65536) {
            if ((r -= 3) < 0) break
            i.push((t >> 12) | 224, ((t >> 6) & 63) | 128, (t & 63) | 128)
          } else if (t < 1114112) {
            if ((r -= 4) < 0) break
            i.push(
              (t >> 18) | 240,
              ((t >> 12) & 63) | 128,
              ((t >> 6) & 63) | 128,
              (t & 63) | 128
            )
          } else {
            throw new Error('Invalid code point')
          }
        }
        return i
      }
      function asciiToBytes(e) {
        var r = []
        for (var t = 0; t < e.length; ++t) {
          r.push(e.charCodeAt(t) & 255)
        }
        return r
      }
      function utf16leToBytes(e, r) {
        var t, f, n
        var i = []
        for (var o = 0; o < e.length; ++o) {
          if ((r -= 2) < 0) break
          t = e.charCodeAt(o)
          f = t >> 8
          n = t % 256
          i.push(n)
          i.push(f)
        }
        return i
      }
      function base64ToBytes(e) {
        return f.toByteArray(base64clean(e))
      }
      function blitBuffer(e, r, t, f) {
        for (var n = 0; n < f; ++n) {
          if (n + t >= r.length || n >= e.length) break
          r[n + t] = e[n]
        }
        return n
      }
      function isInstance(e, r) {
        return (
          e instanceof r ||
          (e != null &&
            e.constructor != null &&
            e.constructor.name != null &&
            e.constructor.name === r.name)
        )
      }
      function numberIsNaN(e) {
        return e !== e
      }
      var s = (function () {
        var e = '0123456789abcdef'
        var r = new Array(256)
        for (var t = 0; t < 16; ++t) {
          var f = t * 16
          for (var n = 0; n < 16; ++n) {
            r[f + n] = e[t] + e[n]
          }
        }
        return r
      })()
    },
    783: function (e, r) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      r.read = function (e, r, t, f, n) {
        var i, o
        var u = n * 8 - f - 1
        var a = (1 << u) - 1
        var s = a >> 1
        var h = -7
        var c = t ? n - 1 : 0
        var l = t ? -1 : 1
        var p = e[r + c]
        c += l
        i = p & ((1 << -h) - 1)
        p >>= -h
        h += u
        for (; h > 0; i = i * 256 + e[r + c], c += l, h -= 8) {}
        o = i & ((1 << -h) - 1)
        i >>= -h
        h += f
        for (; h > 0; o = o * 256 + e[r + c], c += l, h -= 8) {}
        if (i === 0) {
          i = 1 - s
        } else if (i === a) {
          return o ? NaN : (p ? -1 : 1) * Infinity
        } else {
          o = o + Math.pow(2, f)
          i = i - s
        }
        return (p ? -1 : 1) * o * Math.pow(2, i - f)
      }
      r.write = function (e, r, t, f, n, i) {
        var o, u, a
        var s = i * 8 - n - 1
        var h = (1 << s) - 1
        var c = h >> 1
        var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0
        var p = f ? 0 : i - 1
        var y = f ? 1 : -1
        var g = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0
        r = Math.abs(r)
        if (isNaN(r) || r === Infinity) {
          u = isNaN(r) ? 1 : 0
          o = h
        } else {
          o = Math.floor(Math.log(r) / Math.LN2)
          if (r * (a = Math.pow(2, -o)) < 1) {
            o--
            a *= 2
          }
          if (o + c >= 1) {
            r += l / a
          } else {
            r += l * Math.pow(2, 1 - c)
          }
          if (r * a >= 2) {
            o++
            a /= 2
          }
          if (o + c >= h) {
            u = 0
            o = h
          } else if (o + c >= 1) {
            u = (r * a - 1) * Math.pow(2, n)
            o = o + c
          } else {
            u = r * Math.pow(2, c - 1) * Math.pow(2, n)
            o = 0
          }
        }
        for (; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8) {}
        o = (o << n) | u
        s += n
        for (; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8) {}
        e[t + p - y] |= g * 128
      }
    },
  }
  var r = {}
  function __nccwpck_require__(t) {
    var f = r[t]
    if (f !== undefined) {
      return f.exports
    }
    var n = (r[t] = { exports: {} })
    var i = true
    try {
      e[t](n, n.exports, __nccwpck_require__)
      i = false
    } finally {
      if (i) delete r[t]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(72)
  module.exports = t
})()
