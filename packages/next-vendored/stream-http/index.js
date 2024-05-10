;(function () {
  var e = {
    523: function (e) {
      e.exports = {
        100: 'Continue',
        101: 'Switching Protocols',
        102: 'Processing',
        200: 'OK',
        201: 'Created',
        202: 'Accepted',
        203: 'Non-Authoritative Information',
        204: 'No Content',
        205: 'Reset Content',
        206: 'Partial Content',
        207: 'Multi-Status',
        208: 'Already Reported',
        226: 'IM Used',
        300: 'Multiple Choices',
        301: 'Moved Permanently',
        302: 'Found',
        303: 'See Other',
        304: 'Not Modified',
        305: 'Use Proxy',
        307: 'Temporary Redirect',
        308: 'Permanent Redirect',
        400: 'Bad Request',
        401: 'Unauthorized',
        402: 'Payment Required',
        403: 'Forbidden',
        404: 'Not Found',
        405: 'Method Not Allowed',
        406: 'Not Acceptable',
        407: 'Proxy Authentication Required',
        408: 'Request Timeout',
        409: 'Conflict',
        410: 'Gone',
        411: 'Length Required',
        412: 'Precondition Failed',
        413: 'Payload Too Large',
        414: 'URI Too Long',
        415: 'Unsupported Media Type',
        416: 'Range Not Satisfiable',
        417: 'Expectation Failed',
        418: "I'm a teapot",
        421: 'Misdirected Request',
        422: 'Unprocessable Entity',
        423: 'Locked',
        424: 'Failed Dependency',
        425: 'Unordered Collection',
        426: 'Upgrade Required',
        428: 'Precondition Required',
        429: 'Too Many Requests',
        431: 'Request Header Fields Too Large',
        451: 'Unavailable For Legal Reasons',
        500: 'Internal Server Error',
        501: 'Not Implemented',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        504: 'Gateway Timeout',
        505: 'HTTP Version Not Supported',
        506: 'Variant Also Negotiates',
        507: 'Insufficient Storage',
        508: 'Loop Detected',
        509: 'Bandwidth Limit Exceeded',
        510: 'Not Extended',
        511: 'Network Authentication Required',
      }
    },
    782: function (e) {
      if (typeof Object.create === 'function') {
        e.exports = function inherits(e, t) {
          if (t) {
            e.super_ = t
            e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            })
          }
        }
      } else {
        e.exports = function inherits(e, t) {
          if (t) {
            e.super_ = t
            var TempCtor = function () {}
            TempCtor.prototype = t.prototype
            e.prototype = new TempCtor()
            e.prototype.constructor = e
          }
        }
      }
    },
    646: function (e) {
      'use strict'
      const t = {}
      function createErrorType(e, r, n) {
        if (!n) {
          n = Error
        }
        function getMessage(e, t, n) {
          if (typeof r === 'string') {
            return r
          } else {
            return r(e, t, n)
          }
        }
        class NodeError extends n {
          constructor(e, t, r) {
            super(getMessage(e, t, r))
          }
        }
        NodeError.prototype.name = n.name
        NodeError.prototype.code = e
        t[e] = NodeError
      }
      function oneOf(e, t) {
        if (Array.isArray(e)) {
          const r = e.length
          e = e.map((e) => String(e))
          if (r > 2) {
            return `one of ${t} ${e.slice(0, r - 1).join(', ')}, or ` + e[r - 1]
          } else if (r === 2) {
            return `one of ${t} ${e[0]} or ${e[1]}`
          } else {
            return `of ${t} ${e[0]}`
          }
        } else {
          return `of ${t} ${String(e)}`
        }
      }
      function startsWith(e, t, r) {
        return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
      }
      function endsWith(e, t, r) {
        if (r === undefined || r > e.length) {
          r = e.length
        }
        return e.substring(r - t.length, r) === t
      }
      function includes(e, t, r) {
        if (typeof r !== 'number') {
          r = 0
        }
        if (r + t.length > e.length) {
          return false
        } else {
          return e.indexOf(t, r) !== -1
        }
      }
      createErrorType(
        'ERR_INVALID_OPT_VALUE',
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"'
        },
        TypeError
      )
      createErrorType(
        'ERR_INVALID_ARG_TYPE',
        function (e, t, r) {
          let n
          if (typeof t === 'string' && startsWith(t, 'not ')) {
            n = 'must not be'
            t = t.replace(/^not /, '')
          } else {
            n = 'must be'
          }
          let i
          if (endsWith(e, ' argument')) {
            i = `The ${e} ${n} ${oneOf(t, 'type')}`
          } else {
            const r = includes(e, '.') ? 'property' : 'argument'
            i = `The "${e}" ${r} ${n} ${oneOf(t, 'type')}`
          }
          i += `. Received type ${typeof r}`
          return i
        },
        TypeError
      )
      createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF')
      createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
        return 'The ' + e + ' method is not implemented'
      })
      createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close')
      createErrorType('ERR_STREAM_DESTROYED', function (e) {
        return 'Cannot call ' + e + ' after a stream was destroyed'
      })
      createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times')
      createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable')
      createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end')
      createErrorType(
        'ERR_STREAM_NULL_VALUES',
        'May not write null values to stream',
        TypeError
      )
      createErrorType(
        'ERR_UNKNOWN_ENCODING',
        function (e) {
          return 'Unknown encoding: ' + e
        },
        TypeError
      )
      createErrorType(
        'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
        'stream.unshift() after end event'
      )
      e.exports.q = t
    },
    403: function (e, t, r) {
      'use strict'
      var n =
        Object.keys ||
        function (e) {
          var t = []
          for (var r in e) {
            t.push(r)
          }
          return t
        }
      e.exports = Duplex
      var i = r(709)
      var a = r(337)
      r(782)(Duplex, i)
      {
        var o = n(a.prototype)
        for (var s = 0; s < o.length; s++) {
          var f = o[s]
          if (!Duplex.prototype[f]) Duplex.prototype[f] = a.prototype[f]
        }
      }
      function Duplex(e) {
        if (!(this instanceof Duplex)) return new Duplex(e)
        i.call(this, e)
        a.call(this, e)
        this.allowHalfOpen = true
        if (e) {
          if (e.readable === false) this.readable = false
          if (e.writable === false) this.writable = false
          if (e.allowHalfOpen === false) {
            this.allowHalfOpen = false
            this.once('end', onend)
          }
        }
      }
      Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark
        },
      })
      Object.defineProperty(Duplex.prototype, 'writableBuffer', {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer()
        },
      })
      Object.defineProperty(Duplex.prototype, 'writableLength', {
        enumerable: false,
        get: function get() {
          return this._writableState.length
        },
      })
      function onend() {
        if (this._writableState.ended) return
        process.nextTick(onEndNT, this)
      }
      function onEndNT(e) {
        e.end()
      }
      Object.defineProperty(Duplex.prototype, 'destroyed', {
        enumerable: false,
        get: function get() {
          if (
            this._readableState === undefined ||
            this._writableState === undefined
          ) {
            return false
          }
          return this._readableState.destroyed && this._writableState.destroyed
        },
        set: function set(e) {
          if (
            this._readableState === undefined ||
            this._writableState === undefined
          ) {
            return
          }
          this._readableState.destroyed = e
          this._writableState.destroyed = e
        },
      })
    },
    889: function (e, t, r) {
      'use strict'
      e.exports = PassThrough
      var n = r(170)
      r(782)(PassThrough, n)
      function PassThrough(e) {
        if (!(this instanceof PassThrough)) return new PassThrough(e)
        n.call(this, e)
      }
      PassThrough.prototype._transform = function (e, t, r) {
        r(null, e)
      }
    },
    709: function (e, t, r) {
      'use strict'
      e.exports = Readable
      var n
      Readable.ReadableState = ReadableState
      var i = r(361).EventEmitter
      var a = function EElistenerCount(e, t) {
        return e.listeners(t).length
      }
      var o = r(678)
      var s = r(300).Buffer
      var f = global.Uint8Array || function () {}
      function _uint8ArrayToBuffer(e) {
        return s.from(e)
      }
      function _isUint8Array(e) {
        return s.isBuffer(e) || e instanceof f
      }
      var l = r(837)
      var u
      if (l && l.debuglog) {
        u = l.debuglog('stream')
      } else {
        u = function debug() {}
      }
      var d = r(379)
      var c = r(25)
      var h = r(776),
        p = h.getHighWaterMark
      var b = r(646).q,
        y = b.ERR_INVALID_ARG_TYPE,
        g = b.ERR_STREAM_PUSH_AFTER_EOF,
        _ = b.ERR_METHOD_NOT_IMPLEMENTED,
        v = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
      var m
      var w
      var R
      r(782)(Readable, o)
      var S = c.errorOrDestroy
      var E = ['error', 'close', 'destroy', 'pause', 'resume']
      function prependListener(e, t, r) {
        if (typeof e.prependListener === 'function')
          return e.prependListener(t, r)
        if (!e._events || !e._events[t]) e.on(t, r)
        else if (Array.isArray(e._events[t])) e._events[t].unshift(r)
        else e._events[t] = [r, e._events[t]]
      }
      function ReadableState(e, t, i) {
        n = n || r(403)
        e = e || {}
        if (typeof i !== 'boolean') i = t instanceof n
        this.objectMode = !!e.objectMode
        if (i) this.objectMode = this.objectMode || !!e.readableObjectMode
        this.highWaterMark = p(this, e, 'readableHighWaterMark', i)
        this.buffer = new d()
        this.length = 0
        this.pipes = null
        this.pipesCount = 0
        this.flowing = null
        this.ended = false
        this.endEmitted = false
        this.reading = false
        this.sync = true
        this.needReadable = false
        this.emittedReadable = false
        this.readableListening = false
        this.resumeScheduled = false
        this.paused = true
        this.emitClose = e.emitClose !== false
        this.autoDestroy = !!e.autoDestroy
        this.destroyed = false
        this.defaultEncoding = e.defaultEncoding || 'utf8'
        this.awaitDrain = 0
        this.readingMore = false
        this.decoder = null
        this.encoding = null
        if (e.encoding) {
          if (!m) m = r(704).s
          this.decoder = new m(e.encoding)
          this.encoding = e.encoding
        }
      }
      function Readable(e) {
        n = n || r(403)
        if (!(this instanceof Readable)) return new Readable(e)
        var t = this instanceof n
        this._readableState = new ReadableState(e, this, t)
        this.readable = true
        if (e) {
          if (typeof e.read === 'function') this._read = e.read
          if (typeof e.destroy === 'function') this._destroy = e.destroy
        }
        o.call(this)
      }
      Object.defineProperty(Readable.prototype, 'destroyed', {
        enumerable: false,
        get: function get() {
          if (this._readableState === undefined) {
            return false
          }
          return this._readableState.destroyed
        },
        set: function set(e) {
          if (!this._readableState) {
            return
          }
          this._readableState.destroyed = e
        },
      })
      Readable.prototype.destroy = c.destroy
      Readable.prototype._undestroy = c.undestroy
      Readable.prototype._destroy = function (e, t) {
        t(e)
      }
      Readable.prototype.push = function (e, t) {
        var r = this._readableState
        var n
        if (!r.objectMode) {
          if (typeof e === 'string') {
            t = t || r.defaultEncoding
            if (t !== r.encoding) {
              e = s.from(e, t)
              t = ''
            }
            n = true
          }
        } else {
          n = true
        }
        return readableAddChunk(this, e, t, false, n)
      }
      Readable.prototype.unshift = function (e) {
        return readableAddChunk(this, e, null, true, false)
      }
      function readableAddChunk(e, t, r, n, i) {
        u('readableAddChunk', t)
        var a = e._readableState
        if (t === null) {
          a.reading = false
          onEofChunk(e, a)
        } else {
          var o
          if (!i) o = chunkInvalid(a, t)
          if (o) {
            S(e, o)
          } else if (a.objectMode || (t && t.length > 0)) {
            if (
              typeof t !== 'string' &&
              !a.objectMode &&
              Object.getPrototypeOf(t) !== s.prototype
            ) {
              t = _uint8ArrayToBuffer(t)
            }
            if (n) {
              if (a.endEmitted) S(e, new v())
              else addChunk(e, a, t, true)
            } else if (a.ended) {
              S(e, new g())
            } else if (a.destroyed) {
              return false
            } else {
              a.reading = false
              if (a.decoder && !r) {
                t = a.decoder.write(t)
                if (a.objectMode || t.length !== 0) addChunk(e, a, t, false)
                else maybeReadMore(e, a)
              } else {
                addChunk(e, a, t, false)
              }
            }
          } else if (!n) {
            a.reading = false
            maybeReadMore(e, a)
          }
        }
        return !a.ended && (a.length < a.highWaterMark || a.length === 0)
      }
      function addChunk(e, t, r, n) {
        if (t.flowing && t.length === 0 && !t.sync) {
          t.awaitDrain = 0
          e.emit('data', r)
        } else {
          t.length += t.objectMode ? 1 : r.length
          if (n) t.buffer.unshift(r)
          else t.buffer.push(r)
          if (t.needReadable) emitReadable(e)
        }
        maybeReadMore(e, t)
      }
      function chunkInvalid(e, t) {
        var r
        if (
          !_isUint8Array(t) &&
          typeof t !== 'string' &&
          t !== undefined &&
          !e.objectMode
        ) {
          r = new y('chunk', ['string', 'Buffer', 'Uint8Array'], t)
        }
        return r
      }
      Readable.prototype.isPaused = function () {
        return this._readableState.flowing === false
      }
      Readable.prototype.setEncoding = function (e) {
        if (!m) m = r(704).s
        var t = new m(e)
        this._readableState.decoder = t
        this._readableState.encoding = this._readableState.decoder.encoding
        var n = this._readableState.buffer.head
        var i = ''
        while (n !== null) {
          i += t.write(n.data)
          n = n.next
        }
        this._readableState.buffer.clear()
        if (i !== '') this._readableState.buffer.push(i)
        this._readableState.length = i.length
        return this
      }
      var T = 1073741824
      function computeNewHighWaterMark(e) {
        if (e >= T) {
          e = T
        } else {
          e--
          e |= e >>> 1
          e |= e >>> 2
          e |= e >>> 4
          e |= e >>> 8
          e |= e >>> 16
          e++
        }
        return e
      }
      function howMuchToRead(e, t) {
        if (e <= 0 || (t.length === 0 && t.ended)) return 0
        if (t.objectMode) return 1
        if (e !== e) {
          if (t.flowing && t.length) return t.buffer.head.data.length
          else return t.length
        }
        if (e > t.highWaterMark) t.highWaterMark = computeNewHighWaterMark(e)
        if (e <= t.length) return e
        if (!t.ended) {
          t.needReadable = true
          return 0
        }
        return t.length
      }
      Readable.prototype.read = function (e) {
        u('read', e)
        e = parseInt(e, 10)
        var t = this._readableState
        var r = e
        if (e !== 0) t.emittedReadable = false
        if (
          e === 0 &&
          t.needReadable &&
          ((t.highWaterMark !== 0
            ? t.length >= t.highWaterMark
            : t.length > 0) ||
            t.ended)
        ) {
          u('read: emitReadable', t.length, t.ended)
          if (t.length === 0 && t.ended) endReadable(this)
          else emitReadable(this)
          return null
        }
        e = howMuchToRead(e, t)
        if (e === 0 && t.ended) {
          if (t.length === 0) endReadable(this)
          return null
        }
        var n = t.needReadable
        u('need readable', n)
        if (t.length === 0 || t.length - e < t.highWaterMark) {
          n = true
          u('length less than watermark', n)
        }
        if (t.ended || t.reading) {
          n = false
          u('reading or ended', n)
        } else if (n) {
          u('do read')
          t.reading = true
          t.sync = true
          if (t.length === 0) t.needReadable = true
          this._read(t.highWaterMark)
          t.sync = false
          if (!t.reading) e = howMuchToRead(r, t)
        }
        var i
        if (e > 0) i = fromList(e, t)
        else i = null
        if (i === null) {
          t.needReadable = t.length <= t.highWaterMark
          e = 0
        } else {
          t.length -= e
          t.awaitDrain = 0
        }
        if (t.length === 0) {
          if (!t.ended) t.needReadable = true
          if (r !== e && t.ended) endReadable(this)
        }
        if (i !== null) this.emit('data', i)
        return i
      }
      function onEofChunk(e, t) {
        u('onEofChunk')
        if (t.ended) return
        if (t.decoder) {
          var r = t.decoder.end()
          if (r && r.length) {
            t.buffer.push(r)
            t.length += t.objectMode ? 1 : r.length
          }
        }
        t.ended = true
        if (t.sync) {
          emitReadable(e)
        } else {
          t.needReadable = false
          if (!t.emittedReadable) {
            t.emittedReadable = true
            emitReadable_(e)
          }
        }
      }
      function emitReadable(e) {
        var t = e._readableState
        u('emitReadable', t.needReadable, t.emittedReadable)
        t.needReadable = false
        if (!t.emittedReadable) {
          u('emitReadable', t.flowing)
          t.emittedReadable = true
          process.nextTick(emitReadable_, e)
        }
      }
      function emitReadable_(e) {
        var t = e._readableState
        u('emitReadable_', t.destroyed, t.length, t.ended)
        if (!t.destroyed && (t.length || t.ended)) {
          e.emit('readable')
          t.emittedReadable = false
        }
        t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark
        flow(e)
      }
      function maybeReadMore(e, t) {
        if (!t.readingMore) {
          t.readingMore = true
          process.nextTick(maybeReadMore_, e, t)
        }
      }
      function maybeReadMore_(e, t) {
        while (
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && t.length === 0))
        ) {
          var r = t.length
          u('maybeReadMore read 0')
          e.read(0)
          if (r === t.length) break
        }
        t.readingMore = false
      }
      Readable.prototype._read = function (e) {
        S(this, new _('_read()'))
      }
      Readable.prototype.pipe = function (e, t) {
        var r = this
        var n = this._readableState
        switch (n.pipesCount) {
          case 0:
            n.pipes = e
            break
          case 1:
            n.pipes = [n.pipes, e]
            break
          default:
            n.pipes.push(e)
            break
        }
        n.pipesCount += 1
        u('pipe count=%d opts=%j', n.pipesCount, t)
        var i =
          (!t || t.end !== false) &&
          e !== process.stdout &&
          e !== process.stderr
        var o = i ? onend : unpipe
        if (n.endEmitted) process.nextTick(o)
        else r.once('end', o)
        e.on('unpipe', onunpipe)
        function onunpipe(e, t) {
          u('onunpipe')
          if (e === r) {
            if (t && t.hasUnpiped === false) {
              t.hasUnpiped = true
              cleanup()
            }
          }
        }
        function onend() {
          u('onend')
          e.end()
        }
        var s = pipeOnDrain(r)
        e.on('drain', s)
        var f = false
        function cleanup() {
          u('cleanup')
          e.removeListener('close', onclose)
          e.removeListener('finish', onfinish)
          e.removeListener('drain', s)
          e.removeListener('error', onerror)
          e.removeListener('unpipe', onunpipe)
          r.removeListener('end', onend)
          r.removeListener('end', unpipe)
          r.removeListener('data', ondata)
          f = true
          if (n.awaitDrain && (!e._writableState || e._writableState.needDrain))
            s()
        }
        r.on('data', ondata)
        function ondata(t) {
          u('ondata')
          var i = e.write(t)
          u('dest.write', i)
          if (i === false) {
            if (
              ((n.pipesCount === 1 && n.pipes === e) ||
                (n.pipesCount > 1 && indexOf(n.pipes, e) !== -1)) &&
              !f
            ) {
              u('false write response, pause', n.awaitDrain)
              n.awaitDrain++
            }
            r.pause()
          }
        }
        function onerror(t) {
          u('onerror', t)
          unpipe()
          e.removeListener('error', onerror)
          if (a(e, 'error') === 0) S(e, t)
        }
        prependListener(e, 'error', onerror)
        function onclose() {
          e.removeListener('finish', onfinish)
          unpipe()
        }
        e.once('close', onclose)
        function onfinish() {
          u('onfinish')
          e.removeListener('close', onclose)
          unpipe()
        }
        e.once('finish', onfinish)
        function unpipe() {
          u('unpipe')
          r.unpipe(e)
        }
        e.emit('pipe', r)
        if (!n.flowing) {
          u('pipe resume')
          r.resume()
        }
        return e
      }
      function pipeOnDrain(e) {
        return function pipeOnDrainFunctionResult() {
          var t = e._readableState
          u('pipeOnDrain', t.awaitDrain)
          if (t.awaitDrain) t.awaitDrain--
          if (t.awaitDrain === 0 && a(e, 'data')) {
            t.flowing = true
            flow(e)
          }
        }
      }
      Readable.prototype.unpipe = function (e) {
        var t = this._readableState
        var r = { hasUnpiped: false }
        if (t.pipesCount === 0) return this
        if (t.pipesCount === 1) {
          if (e && e !== t.pipes) return this
          if (!e) e = t.pipes
          t.pipes = null
          t.pipesCount = 0
          t.flowing = false
          if (e) e.emit('unpipe', this, r)
          return this
        }
        if (!e) {
          var n = t.pipes
          var i = t.pipesCount
          t.pipes = null
          t.pipesCount = 0
          t.flowing = false
          for (var a = 0; a < i; a++) {
            n[a].emit('unpipe', this, { hasUnpiped: false })
          }
          return this
        }
        var o = indexOf(t.pipes, e)
        if (o === -1) return this
        t.pipes.splice(o, 1)
        t.pipesCount -= 1
        if (t.pipesCount === 1) t.pipes = t.pipes[0]
        e.emit('unpipe', this, r)
        return this
      }
      Readable.prototype.on = function (e, t) {
        var r = o.prototype.on.call(this, e, t)
        var n = this._readableState
        if (e === 'data') {
          n.readableListening = this.listenerCount('readable') > 0
          if (n.flowing !== false) this.resume()
        } else if (e === 'readable') {
          if (!n.endEmitted && !n.readableListening) {
            n.readableListening = n.needReadable = true
            n.flowing = false
            n.emittedReadable = false
            u('on readable', n.length, n.reading)
            if (n.length) {
              emitReadable(this)
            } else if (!n.reading) {
              process.nextTick(nReadingNextTick, this)
            }
          }
        }
        return r
      }
      Readable.prototype.addListener = Readable.prototype.on
      Readable.prototype.removeListener = function (e, t) {
        var r = o.prototype.removeListener.call(this, e, t)
        if (e === 'readable') {
          process.nextTick(updateReadableListening, this)
        }
        return r
      }
      Readable.prototype.removeAllListeners = function (e) {
        var t = o.prototype.removeAllListeners.apply(this, arguments)
        if (e === 'readable' || e === undefined) {
          process.nextTick(updateReadableListening, this)
        }
        return t
      }
      function updateReadableListening(e) {
        var t = e._readableState
        t.readableListening = e.listenerCount('readable') > 0
        if (t.resumeScheduled && !t.paused) {
          t.flowing = true
        } else if (e.listenerCount('data') > 0) {
          e.resume()
        }
      }
      function nReadingNextTick(e) {
        u('readable nexttick read 0')
        e.read(0)
      }
      Readable.prototype.resume = function () {
        var e = this._readableState
        if (!e.flowing) {
          u('resume')
          e.flowing = !e.readableListening
          resume(this, e)
        }
        e.paused = false
        return this
      }
      function resume(e, t) {
        if (!t.resumeScheduled) {
          t.resumeScheduled = true
          process.nextTick(resume_, e, t)
        }
      }
      function resume_(e, t) {
        u('resume', t.reading)
        if (!t.reading) {
          e.read(0)
        }
        t.resumeScheduled = false
        e.emit('resume')
        flow(e)
        if (t.flowing && !t.reading) e.read(0)
      }
      Readable.prototype.pause = function () {
        u('call pause flowing=%j', this._readableState.flowing)
        if (this._readableState.flowing !== false) {
          u('pause')
          this._readableState.flowing = false
          this.emit('pause')
        }
        this._readableState.paused = true
        return this
      }
      function flow(e) {
        var t = e._readableState
        u('flow', t.flowing)
        while (t.flowing && e.read() !== null) {}
      }
      Readable.prototype.wrap = function (e) {
        var t = this
        var r = this._readableState
        var n = false
        e.on('end', function () {
          u('wrapped end')
          if (r.decoder && !r.ended) {
            var e = r.decoder.end()
            if (e && e.length) t.push(e)
          }
          t.push(null)
        })
        e.on('data', function (i) {
          u('wrapped data')
          if (r.decoder) i = r.decoder.write(i)
          if (r.objectMode && (i === null || i === undefined)) return
          else if (!r.objectMode && (!i || !i.length)) return
          var a = t.push(i)
          if (!a) {
            n = true
            e.pause()
          }
        })
        for (var i in e) {
          if (this[i] === undefined && typeof e[i] === 'function') {
            this[i] = (function methodWrap(t) {
              return function methodWrapReturnFunction() {
                return e[t].apply(e, arguments)
              }
            })(i)
          }
        }
        for (var a = 0; a < E.length; a++) {
          e.on(E[a], this.emit.bind(this, E[a]))
        }
        this._read = function (t) {
          u('wrapped _read', t)
          if (n) {
            n = false
            e.resume()
          }
        }
        return this
      }
      if (typeof Symbol === 'function') {
        Readable.prototype[Symbol.asyncIterator] = function () {
          if (w === undefined) {
            w = r(871)
          }
          return w(this)
        }
      }
      Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark
        },
      })
      Object.defineProperty(Readable.prototype, 'readableBuffer', {
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer
        },
      })
      Object.defineProperty(Readable.prototype, 'readableFlowing', {
        enumerable: false,
        get: function get() {
          return this._readableState.flowing
        },
        set: function set(e) {
          if (this._readableState) {
            this._readableState.flowing = e
          }
        },
      })
      Readable._fromList = fromList
      Object.defineProperty(Readable.prototype, 'readableLength', {
        enumerable: false,
        get: function get() {
          return this._readableState.length
        },
      })
      function fromList(e, t) {
        if (t.length === 0) return null
        var r
        if (t.objectMode) r = t.buffer.shift()
        else if (!e || e >= t.length) {
          if (t.decoder) r = t.buffer.join('')
          else if (t.buffer.length === 1) r = t.buffer.first()
          else r = t.buffer.concat(t.length)
          t.buffer.clear()
        } else {
          r = t.buffer.consume(e, t.decoder)
        }
        return r
      }
      function endReadable(e) {
        var t = e._readableState
        u('endReadable', t.endEmitted)
        if (!t.endEmitted) {
          t.ended = true
          process.nextTick(endReadableNT, t, e)
        }
      }
      function endReadableNT(e, t) {
        u('endReadableNT', e.endEmitted, e.length)
        if (!e.endEmitted && e.length === 0) {
          e.endEmitted = true
          t.readable = false
          t.emit('end')
          if (e.autoDestroy) {
            var r = t._writableState
            if (!r || (r.autoDestroy && r.finished)) {
              t.destroy()
            }
          }
        }
      }
      if (typeof Symbol === 'function') {
        Readable.from = function (e, t) {
          if (R === undefined) {
            R = r(727)
          }
          return R(Readable, e, t)
        }
      }
      function indexOf(e, t) {
        for (var r = 0, n = e.length; r < n; r++) {
          if (e[r] === t) return r
        }
        return -1
      }
    },
    170: function (e, t, r) {
      'use strict'
      e.exports = Transform
      var n = r(646).q,
        i = n.ERR_METHOD_NOT_IMPLEMENTED,
        a = n.ERR_MULTIPLE_CALLBACK,
        o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = n.ERR_TRANSFORM_WITH_LENGTH_0
      var f = r(403)
      r(782)(Transform, f)
      function afterTransform(e, t) {
        var r = this._transformState
        r.transforming = false
        var n = r.writecb
        if (n === null) {
          return this.emit('error', new a())
        }
        r.writechunk = null
        r.writecb = null
        if (t != null) this.push(t)
        n(e)
        var i = this._readableState
        i.reading = false
        if (i.needReadable || i.length < i.highWaterMark) {
          this._read(i.highWaterMark)
        }
      }
      function Transform(e) {
        if (!(this instanceof Transform)) return new Transform(e)
        f.call(this, e)
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }
        this._readableState.needReadable = true
        this._readableState.sync = false
        if (e) {
          if (typeof e.transform === 'function') this._transform = e.transform
          if (typeof e.flush === 'function') this._flush = e.flush
        }
        this.on('prefinish', prefinish)
      }
      function prefinish() {
        var e = this
        if (
          typeof this._flush === 'function' &&
          !this._readableState.destroyed
        ) {
          this._flush(function (t, r) {
            done(e, t, r)
          })
        } else {
          done(this, null, null)
        }
      }
      Transform.prototype.push = function (e, t) {
        this._transformState.needTransform = false
        return f.prototype.push.call(this, e, t)
      }
      Transform.prototype._transform = function (e, t, r) {
        r(new i('_transform()'))
      }
      Transform.prototype._write = function (e, t, r) {
        var n = this._transformState
        n.writecb = r
        n.writechunk = e
        n.writeencoding = t
        if (!n.transforming) {
          var i = this._readableState
          if (n.needTransform || i.needReadable || i.length < i.highWaterMark)
            this._read(i.highWaterMark)
        }
      }
      Transform.prototype._read = function (e) {
        var t = this._transformState
        if (t.writechunk !== null && !t.transforming) {
          t.transforming = true
          this._transform(t.writechunk, t.writeencoding, t.afterTransform)
        } else {
          t.needTransform = true
        }
      }
      Transform.prototype._destroy = function (e, t) {
        f.prototype._destroy.call(this, e, function (e) {
          t(e)
        })
      }
      function done(e, t, r) {
        if (t) return e.emit('error', t)
        if (r != null) e.push(r)
        if (e._writableState.length) throw new s()
        if (e._transformState.transforming) throw new o()
        return e.push(null)
      }
    },
    337: function (e, t, r) {
      'use strict'
      e.exports = Writable
      function WriteReq(e, t, r) {
        this.chunk = e
        this.encoding = t
        this.callback = r
        this.next = null
      }
      function CorkedRequest(e) {
        var t = this
        this.next = null
        this.entry = null
        this.finish = function () {
          onCorkedFinish(t, e)
        }
      }
      var n
      Writable.WritableState = WritableState
      var i = { deprecate: r(769) }
      var a = r(678)
      var o = r(300).Buffer
      var s = global.Uint8Array || function () {}
      function _uint8ArrayToBuffer(e) {
        return o.from(e)
      }
      function _isUint8Array(e) {
        return o.isBuffer(e) || e instanceof s
      }
      var f = r(25)
      var l = r(776),
        u = l.getHighWaterMark
      var d = r(646).q,
        c = d.ERR_INVALID_ARG_TYPE,
        h = d.ERR_METHOD_NOT_IMPLEMENTED,
        p = d.ERR_MULTIPLE_CALLBACK,
        b = d.ERR_STREAM_CANNOT_PIPE,
        y = d.ERR_STREAM_DESTROYED,
        g = d.ERR_STREAM_NULL_VALUES,
        _ = d.ERR_STREAM_WRITE_AFTER_END,
        v = d.ERR_UNKNOWN_ENCODING
      var m = f.errorOrDestroy
      r(782)(Writable, a)
      function nop() {}
      function WritableState(e, t, i) {
        n = n || r(403)
        e = e || {}
        if (typeof i !== 'boolean') i = t instanceof n
        this.objectMode = !!e.objectMode
        if (i) this.objectMode = this.objectMode || !!e.writableObjectMode
        this.highWaterMark = u(this, e, 'writableHighWaterMark', i)
        this.finalCalled = false
        this.needDrain = false
        this.ending = false
        this.ended = false
        this.finished = false
        this.destroyed = false
        var a = e.decodeStrings === false
        this.decodeStrings = !a
        this.defaultEncoding = e.defaultEncoding || 'utf8'
        this.length = 0
        this.writing = false
        this.corked = 0
        this.sync = true
        this.bufferProcessing = false
        this.onwrite = function (e) {
          onwrite(t, e)
        }
        this.writecb = null
        this.writelen = 0
        this.bufferedRequest = null
        this.lastBufferedRequest = null
        this.pendingcb = 0
        this.prefinished = false
        this.errorEmitted = false
        this.emitClose = e.emitClose !== false
        this.autoDestroy = !!e.autoDestroy
        this.bufferedRequestCount = 0
        this.corkedRequestsFree = new CorkedRequest(this)
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var e = this.bufferedRequest
        var t = []
        while (e) {
          t.push(e)
          e = e.next
        }
        return t
      }
      ;(function () {
        try {
          Object.defineProperty(WritableState.prototype, 'buffer', {
            get: i.deprecate(
              function writableStateBufferGetter() {
                return this.getBuffer()
              },
              '_writableState.buffer is deprecated. Use _writableState.getBuffer ' +
                'instead.',
              'DEP0003'
            ),
          })
        } catch (e) {}
      })()
      var w
      if (
        typeof Symbol === 'function' &&
        Symbol.hasInstance &&
        typeof Function.prototype[Symbol.hasInstance] === 'function'
      ) {
        w = Function.prototype[Symbol.hasInstance]
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(e) {
            if (w.call(this, e)) return true
            if (this !== Writable) return false
            return e && e._writableState instanceof WritableState
          },
        })
      } else {
        w = function realHasInstance(e) {
          return e instanceof this
        }
      }
      function Writable(e) {
        n = n || r(403)
        var t = this instanceof n
        if (!t && !w.call(Writable, this)) return new Writable(e)
        this._writableState = new WritableState(e, this, t)
        this.writable = true
        if (e) {
          if (typeof e.write === 'function') this._write = e.write
          if (typeof e.writev === 'function') this._writev = e.writev
          if (typeof e.destroy === 'function') this._destroy = e.destroy
          if (typeof e.final === 'function') this._final = e.final
        }
        a.call(this)
      }
      Writable.prototype.pipe = function () {
        m(this, new b())
      }
      function writeAfterEnd(e, t) {
        var r = new _()
        m(e, r)
        process.nextTick(t, r)
      }
      function validChunk(e, t, r, n) {
        var i
        if (r === null) {
          i = new g()
        } else if (typeof r !== 'string' && !t.objectMode) {
          i = new c('chunk', ['string', 'Buffer'], r)
        }
        if (i) {
          m(e, i)
          process.nextTick(n, i)
          return false
        }
        return true
      }
      Writable.prototype.write = function (e, t, r) {
        var n = this._writableState
        var i = false
        var a = !n.objectMode && _isUint8Array(e)
        if (a && !o.isBuffer(e)) {
          e = _uint8ArrayToBuffer(e)
        }
        if (typeof t === 'function') {
          r = t
          t = null
        }
        if (a) t = 'buffer'
        else if (!t) t = n.defaultEncoding
        if (typeof r !== 'function') r = nop
        if (n.ending) writeAfterEnd(this, r)
        else if (a || validChunk(this, n, e, r)) {
          n.pendingcb++
          i = writeOrBuffer(this, n, a, e, t, r)
        }
        return i
      }
      Writable.prototype.cork = function () {
        this._writableState.corked++
      }
      Writable.prototype.uncork = function () {
        var e = this._writableState
        if (e.corked) {
          e.corked--
          if (
            !e.writing &&
            !e.corked &&
            !e.bufferProcessing &&
            e.bufferedRequest
          )
            clearBuffer(this, e)
        }
      }
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(e) {
        if (typeof e === 'string') e = e.toLowerCase()
        if (
          !(
            [
              'hex',
              'utf8',
              'utf-8',
              'ascii',
              'binary',
              'base64',
              'ucs2',
              'ucs-2',
              'utf16le',
              'utf-16le',
              'raw',
            ].indexOf((e + '').toLowerCase()) > -1
          )
        )
          throw new v(e)
        this._writableState.defaultEncoding = e
        return this
      }
      Object.defineProperty(Writable.prototype, 'writableBuffer', {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer()
        },
      })
      function decodeChunk(e, t, r) {
        if (
          !e.objectMode &&
          e.decodeStrings !== false &&
          typeof t === 'string'
        ) {
          t = o.from(t, r)
        }
        return t
      }
      Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark
        },
      })
      function writeOrBuffer(e, t, r, n, i, a) {
        if (!r) {
          var o = decodeChunk(t, n, i)
          if (n !== o) {
            r = true
            i = 'buffer'
            n = o
          }
        }
        var s = t.objectMode ? 1 : n.length
        t.length += s
        var f = t.length < t.highWaterMark
        if (!f) t.needDrain = true
        if (t.writing || t.corked) {
          var l = t.lastBufferedRequest
          t.lastBufferedRequest = {
            chunk: n,
            encoding: i,
            isBuf: r,
            callback: a,
            next: null,
          }
          if (l) {
            l.next = t.lastBufferedRequest
          } else {
            t.bufferedRequest = t.lastBufferedRequest
          }
          t.bufferedRequestCount += 1
        } else {
          doWrite(e, t, false, s, n, i, a)
        }
        return f
      }
      function doWrite(e, t, r, n, i, a, o) {
        t.writelen = n
        t.writecb = o
        t.writing = true
        t.sync = true
        if (t.destroyed) t.onwrite(new y('write'))
        else if (r) e._writev(i, t.onwrite)
        else e._write(i, a, t.onwrite)
        t.sync = false
      }
      function onwriteError(e, t, r, n, i) {
        --t.pendingcb
        if (r) {
          process.nextTick(i, n)
          process.nextTick(finishMaybe, e, t)
          e._writableState.errorEmitted = true
          m(e, n)
        } else {
          i(n)
          e._writableState.errorEmitted = true
          m(e, n)
          finishMaybe(e, t)
        }
      }
      function onwriteStateUpdate(e) {
        e.writing = false
        e.writecb = null
        e.length -= e.writelen
        e.writelen = 0
      }
      function onwrite(e, t) {
        var r = e._writableState
        var n = r.sync
        var i = r.writecb
        if (typeof i !== 'function') throw new p()
        onwriteStateUpdate(r)
        if (t) onwriteError(e, r, n, t, i)
        else {
          var a = needFinish(r) || e.destroyed
          if (!a && !r.corked && !r.bufferProcessing && r.bufferedRequest) {
            clearBuffer(e, r)
          }
          if (n) {
            process.nextTick(afterWrite, e, r, a, i)
          } else {
            afterWrite(e, r, a, i)
          }
        }
      }
      function afterWrite(e, t, r, n) {
        if (!r) onwriteDrain(e, t)
        t.pendingcb--
        n()
        finishMaybe(e, t)
      }
      function onwriteDrain(e, t) {
        if (t.length === 0 && t.needDrain) {
          t.needDrain = false
          e.emit('drain')
        }
      }
      function clearBuffer(e, t) {
        t.bufferProcessing = true
        var r = t.bufferedRequest
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount
          var i = new Array(n)
          var a = t.corkedRequestsFree
          a.entry = r
          var o = 0
          var s = true
          while (r) {
            i[o] = r
            if (!r.isBuf) s = false
            r = r.next
            o += 1
          }
          i.allBuffers = s
          doWrite(e, t, true, t.length, i, '', a.finish)
          t.pendingcb++
          t.lastBufferedRequest = null
          if (a.next) {
            t.corkedRequestsFree = a.next
            a.next = null
          } else {
            t.corkedRequestsFree = new CorkedRequest(t)
          }
          t.bufferedRequestCount = 0
        } else {
          while (r) {
            var f = r.chunk
            var l = r.encoding
            var u = r.callback
            var d = t.objectMode ? 1 : f.length
            doWrite(e, t, false, d, f, l, u)
            r = r.next
            t.bufferedRequestCount--
            if (t.writing) {
              break
            }
          }
          if (r === null) t.lastBufferedRequest = null
        }
        t.bufferedRequest = r
        t.bufferProcessing = false
      }
      Writable.prototype._write = function (e, t, r) {
        r(new h('_write()'))
      }
      Writable.prototype._writev = null
      Writable.prototype.end = function (e, t, r) {
        var n = this._writableState
        if (typeof e === 'function') {
          r = e
          e = null
          t = null
        } else if (typeof t === 'function') {
          r = t
          t = null
        }
        if (e !== null && e !== undefined) this.write(e, t)
        if (n.corked) {
          n.corked = 1
          this.uncork()
        }
        if (!n.ending) endWritable(this, n, r)
        return this
      }
      Object.defineProperty(Writable.prototype, 'writableLength', {
        enumerable: false,
        get: function get() {
          return this._writableState.length
        },
      })
      function needFinish(e) {
        return (
          e.ending &&
          e.length === 0 &&
          e.bufferedRequest === null &&
          !e.finished &&
          !e.writing
        )
      }
      function callFinal(e, t) {
        e._final(function (r) {
          t.pendingcb--
          if (r) {
            m(e, r)
          }
          t.prefinished = true
          e.emit('prefinish')
          finishMaybe(e, t)
        })
      }
      function prefinish(e, t) {
        if (!t.prefinished && !t.finalCalled) {
          if (typeof e._final === 'function' && !t.destroyed) {
            t.pendingcb++
            t.finalCalled = true
            process.nextTick(callFinal, e, t)
          } else {
            t.prefinished = true
            e.emit('prefinish')
          }
        }
      }
      function finishMaybe(e, t) {
        var r = needFinish(t)
        if (r) {
          prefinish(e, t)
          if (t.pendingcb === 0) {
            t.finished = true
            e.emit('finish')
            if (t.autoDestroy) {
              var n = e._readableState
              if (!n || (n.autoDestroy && n.endEmitted)) {
                e.destroy()
              }
            }
          }
        }
        return r
      }
      function endWritable(e, t, r) {
        t.ending = true
        finishMaybe(e, t)
        if (r) {
          if (t.finished) process.nextTick(r)
          else e.once('finish', r)
        }
        t.ended = true
        e.writable = false
      }
      function onCorkedFinish(e, t, r) {
        var n = e.entry
        e.entry = null
        while (n) {
          var i = n.callback
          t.pendingcb--
          i(r)
          n = n.next
        }
        t.corkedRequestsFree.next = e
      }
      Object.defineProperty(Writable.prototype, 'destroyed', {
        enumerable: false,
        get: function get() {
          if (this._writableState === undefined) {
            return false
          }
          return this._writableState.destroyed
        },
        set: function set(e) {
          if (!this._writableState) {
            return
          }
          this._writableState.destroyed = e
        },
      })
      Writable.prototype.destroy = f.destroy
      Writable.prototype._undestroy = f.undestroy
      Writable.prototype._destroy = function (e, t) {
        t(e)
      }
    },
    871: function (e, t, r) {
      'use strict'
      var n
      function _defineProperty(e, t, r) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        } else {
          e[t] = r
        }
        return e
      }
      var i = r(698)
      var a = Symbol('lastResolve')
      var o = Symbol('lastReject')
      var s = Symbol('error')
      var f = Symbol('ended')
      var l = Symbol('lastPromise')
      var u = Symbol('handlePromise')
      var d = Symbol('stream')
      function createIterResult(e, t) {
        return { value: e, done: t }
      }
      function readAndResolve(e) {
        var t = e[a]
        if (t !== null) {
          var r = e[d].read()
          if (r !== null) {
            e[l] = null
            e[a] = null
            e[o] = null
            t(createIterResult(r, false))
          }
        }
      }
      function onReadable(e) {
        process.nextTick(readAndResolve, e)
      }
      function wrapForNext(e, t) {
        return function (r, n) {
          e.then(function () {
            if (t[f]) {
              r(createIterResult(undefined, true))
              return
            }
            t[u](r, n)
          }, n)
        }
      }
      var c = Object.getPrototypeOf(function () {})
      var h = Object.setPrototypeOf(
        ((n = {
          get stream() {
            return this[d]
          },
          next: function next() {
            var e = this
            var t = this[s]
            if (t !== null) {
              return Promise.reject(t)
            }
            if (this[f]) {
              return Promise.resolve(createIterResult(undefined, true))
            }
            if (this[d].destroyed) {
              return new Promise(function (t, r) {
                process.nextTick(function () {
                  if (e[s]) {
                    r(e[s])
                  } else {
                    t(createIterResult(undefined, true))
                  }
                })
              })
            }
            var r = this[l]
            var n
            if (r) {
              n = new Promise(wrapForNext(r, this))
            } else {
              var i = this[d].read()
              if (i !== null) {
                return Promise.resolve(createIterResult(i, false))
              }
              n = new Promise(this[u])
            }
            this[l] = n
            return n
          },
        }),
        _defineProperty(n, Symbol.asyncIterator, function () {
          return this
        }),
        _defineProperty(n, 'return', function _return() {
          var e = this
          return new Promise(function (t, r) {
            e[d].destroy(null, function (e) {
              if (e) {
                r(e)
                return
              }
              t(createIterResult(undefined, true))
            })
          })
        }),
        n),
        c
      )
      var p = function createReadableStreamAsyncIterator(e) {
        var t
        var r = Object.create(
          h,
          ((t = {}),
          _defineProperty(t, d, { value: e, writable: true }),
          _defineProperty(t, a, { value: null, writable: true }),
          _defineProperty(t, o, { value: null, writable: true }),
          _defineProperty(t, s, { value: null, writable: true }),
          _defineProperty(t, f, {
            value: e._readableState.endEmitted,
            writable: true,
          }),
          _defineProperty(t, u, {
            value: function value(e, t) {
              var n = r[d].read()
              if (n) {
                r[l] = null
                r[a] = null
                r[o] = null
                e(createIterResult(n, false))
              } else {
                r[a] = e
                r[o] = t
              }
            },
            writable: true,
          }),
          t)
        )
        r[l] = null
        i(e, function (e) {
          if (e && e.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
            var t = r[o]
            if (t !== null) {
              r[l] = null
              r[a] = null
              r[o] = null
              t(e)
            }
            r[s] = e
            return
          }
          var n = r[a]
          if (n !== null) {
            r[l] = null
            r[a] = null
            r[o] = null
            n(createIterResult(undefined, true))
          }
          r[f] = true
        })
        e.on('readable', onReadable.bind(null, r))
        return r
      }
      e.exports = p
    },
    379: function (e, t, r) {
      'use strict'
      function ownKeys(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          if (t)
            n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })
          r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {}
          if (t % 2) {
            ownKeys(Object(r), true).forEach(function (t) {
              _defineProperty(e, t, r[t])
            })
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          } else {
            ownKeys(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
          }
        }
        return e
      }
      function _defineProperty(e, t, r) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        } else {
          e[t] = r
        }
        return e
      }
      function _classCallCheck(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError('Cannot call a class as a function')
        }
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          n.enumerable = n.enumerable || false
          n.configurable = true
          if ('value' in n) n.writable = true
          Object.defineProperty(e, n.key, n)
        }
      }
      function _createClass(e, t, r) {
        if (t) _defineProperties(e.prototype, t)
        if (r) _defineProperties(e, r)
        return e
      }
      var n = r(300),
        i = n.Buffer
      var a = r(837),
        o = a.inspect
      var s = (o && o.custom) || 'inspect'
      function copyBuffer(e, t, r) {
        i.prototype.copy.call(e, t, r)
      }
      e.exports = (function () {
        function BufferList() {
          _classCallCheck(this, BufferList)
          this.head = null
          this.tail = null
          this.length = 0
        }
        _createClass(BufferList, [
          {
            key: 'push',
            value: function push(e) {
              var t = { data: e, next: null }
              if (this.length > 0) this.tail.next = t
              else this.head = t
              this.tail = t
              ++this.length
            },
          },
          {
            key: 'unshift',
            value: function unshift(e) {
              var t = { data: e, next: this.head }
              if (this.length === 0) this.tail = t
              this.head = t
              ++this.length
            },
          },
          {
            key: 'shift',
            value: function shift() {
              if (this.length === 0) return
              var e = this.head.data
              if (this.length === 1) this.head = this.tail = null
              else this.head = this.head.next
              --this.length
              return e
            },
          },
          {
            key: 'clear',
            value: function clear() {
              this.head = this.tail = null
              this.length = 0
            },
          },
          {
            key: 'join',
            value: function join(e) {
              if (this.length === 0) return ''
              var t = this.head
              var r = '' + t.data
              while ((t = t.next)) {
                r += e + t.data
              }
              return r
            },
          },
          {
            key: 'concat',
            value: function concat(e) {
              if (this.length === 0) return i.alloc(0)
              var t = i.allocUnsafe(e >>> 0)
              var r = this.head
              var n = 0
              while (r) {
                copyBuffer(r.data, t, n)
                n += r.data.length
                r = r.next
              }
              return t
            },
          },
          {
            key: 'consume',
            value: function consume(e, t) {
              var r
              if (e < this.head.data.length) {
                r = this.head.data.slice(0, e)
                this.head.data = this.head.data.slice(e)
              } else if (e === this.head.data.length) {
                r = this.shift()
              } else {
                r = t ? this._getString(e) : this._getBuffer(e)
              }
              return r
            },
          },
          {
            key: 'first',
            value: function first() {
              return this.head.data
            },
          },
          {
            key: '_getString',
            value: function _getString(e) {
              var t = this.head
              var r = 1
              var n = t.data
              e -= n.length
              while ((t = t.next)) {
                var i = t.data
                var a = e > i.length ? i.length : e
                if (a === i.length) n += i
                else n += i.slice(0, e)
                e -= a
                if (e === 0) {
                  if (a === i.length) {
                    ++r
                    if (t.next) this.head = t.next
                    else this.head = this.tail = null
                  } else {
                    this.head = t
                    t.data = i.slice(a)
                  }
                  break
                }
                ++r
              }
              this.length -= r
              return n
            },
          },
          {
            key: '_getBuffer',
            value: function _getBuffer(e) {
              var t = i.allocUnsafe(e)
              var r = this.head
              var n = 1
              r.data.copy(t)
              e -= r.data.length
              while ((r = r.next)) {
                var a = r.data
                var o = e > a.length ? a.length : e
                a.copy(t, t.length - e, 0, o)
                e -= o
                if (e === 0) {
                  if (o === a.length) {
                    ++n
                    if (r.next) this.head = r.next
                    else this.head = this.tail = null
                  } else {
                    this.head = r
                    r.data = a.slice(o)
                  }
                  break
                }
                ++n
              }
              this.length -= n
              return t
            },
          },
          {
            key: s,
            value: function value(e, t) {
              return o(
                this,
                _objectSpread({}, t, { depth: 0, customInspect: false })
              )
            },
          },
        ])
        return BufferList
      })()
    },
    25: function (e) {
      'use strict'
      function destroy(e, t) {
        var r = this
        var n = this._readableState && this._readableState.destroyed
        var i = this._writableState && this._writableState.destroyed
        if (n || i) {
          if (t) {
            t(e)
          } else if (e) {
            if (!this._writableState) {
              process.nextTick(emitErrorNT, this, e)
            } else if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true
              process.nextTick(emitErrorNT, this, e)
            }
          }
          return this
        }
        if (this._readableState) {
          this._readableState.destroyed = true
        }
        if (this._writableState) {
          this._writableState.destroyed = true
        }
        this._destroy(e || null, function (e) {
          if (!t && e) {
            if (!r._writableState) {
              process.nextTick(emitErrorAndCloseNT, r, e)
            } else if (!r._writableState.errorEmitted) {
              r._writableState.errorEmitted = true
              process.nextTick(emitErrorAndCloseNT, r, e)
            } else {
              process.nextTick(emitCloseNT, r)
            }
          } else if (t) {
            process.nextTick(emitCloseNT, r)
            t(e)
          } else {
            process.nextTick(emitCloseNT, r)
          }
        })
        return this
      }
      function emitErrorAndCloseNT(e, t) {
        emitErrorNT(e, t)
        emitCloseNT(e)
      }
      function emitCloseNT(e) {
        if (e._writableState && !e._writableState.emitClose) return
        if (e._readableState && !e._readableState.emitClose) return
        e.emit('close')
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false
          this._readableState.reading = false
          this._readableState.ended = false
          this._readableState.endEmitted = false
        }
        if (this._writableState) {
          this._writableState.destroyed = false
          this._writableState.ended = false
          this._writableState.ending = false
          this._writableState.finalCalled = false
          this._writableState.prefinished = false
          this._writableState.finished = false
          this._writableState.errorEmitted = false
        }
      }
      function emitErrorNT(e, t) {
        e.emit('error', t)
      }
      function errorOrDestroy(e, t) {
        var r = e._readableState
        var n = e._writableState
        if ((r && r.autoDestroy) || (n && n.autoDestroy)) e.destroy(t)
        else e.emit('error', t)
      }
      e.exports = {
        destroy: destroy,
        undestroy: undestroy,
        errorOrDestroy: errorOrDestroy,
      }
    },
    698: function (e, t, r) {
      'use strict'
      var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE
      function once(e) {
        var t = false
        return function () {
          if (t) return
          t = true
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) {
            n[i] = arguments[i]
          }
          e.apply(this, n)
        }
      }
      function noop() {}
      function isRequest(e) {
        return e.setHeader && typeof e.abort === 'function'
      }
      function eos(e, t, r) {
        if (typeof t === 'function') return eos(e, null, t)
        if (!t) t = {}
        r = once(r || noop)
        var i = t.readable || (t.readable !== false && e.readable)
        var a = t.writable || (t.writable !== false && e.writable)
        var o = function onlegacyfinish() {
          if (!e.writable) f()
        }
        var s = e._writableState && e._writableState.finished
        var f = function onfinish() {
          a = false
          s = true
          if (!i) r.call(e)
        }
        var l = e._readableState && e._readableState.endEmitted
        var u = function onend() {
          i = false
          l = true
          if (!a) r.call(e)
        }
        var d = function onerror(t) {
          r.call(e, t)
        }
        var c = function onclose() {
          var t
          if (i && !l) {
            if (!e._readableState || !e._readableState.ended) t = new n()
            return r.call(e, t)
          }
          if (a && !s) {
            if (!e._writableState || !e._writableState.ended) t = new n()
            return r.call(e, t)
          }
        }
        var h = function onrequest() {
          e.req.on('finish', f)
        }
        if (isRequest(e)) {
          e.on('complete', f)
          e.on('abort', c)
          if (e.req) h()
          else e.on('request', h)
        } else if (a && !e._writableState) {
          e.on('end', o)
          e.on('close', o)
        }
        e.on('end', u)
        e.on('finish', f)
        if (t.error !== false) e.on('error', d)
        e.on('close', c)
        return function () {
          e.removeListener('complete', f)
          e.removeListener('abort', c)
          e.removeListener('request', h)
          if (e.req) e.req.removeListener('finish', f)
          e.removeListener('end', o)
          e.removeListener('close', o)
          e.removeListener('finish', f)
          e.removeListener('end', u)
          e.removeListener('error', d)
          e.removeListener('close', c)
        }
      }
      e.exports = eos
    },
    727: function (e, t, r) {
      'use strict'
      function asyncGeneratorStep(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o)
          var f = s.value
        } catch (e) {
          r(e)
          return
        }
        if (s.done) {
          t(f)
        } else {
          Promise.resolve(f).then(n, i)
        }
      }
      function _asyncToGenerator(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (n, i) {
            var a = e.apply(t, r)
            function _next(e) {
              asyncGeneratorStep(a, n, i, _next, _throw, 'next', e)
            }
            function _throw(e) {
              asyncGeneratorStep(a, n, i, _next, _throw, 'throw', e)
            }
            _next(undefined)
          })
        }
      }
      function ownKeys(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          if (t)
            n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })
          r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {}
          if (t % 2) {
            ownKeys(Object(r), true).forEach(function (t) {
              _defineProperty(e, t, r[t])
            })
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          } else {
            ownKeys(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
          }
        }
        return e
      }
      function _defineProperty(e, t, r) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        } else {
          e[t] = r
        }
        return e
      }
      var n = r(646).q.ERR_INVALID_ARG_TYPE
      function from(e, t, r) {
        var i
        if (t && typeof t.next === 'function') {
          i = t
        } else if (t && t[Symbol.asyncIterator]) i = t[Symbol.asyncIterator]()
        else if (t && t[Symbol.iterator]) i = t[Symbol.iterator]()
        else throw new n('iterable', ['Iterable'], t)
        var a = new e(_objectSpread({ objectMode: true }, r))
        var o = false
        a._read = function () {
          if (!o) {
            o = true
            next()
          }
        }
        function next() {
          return _next2.apply(this, arguments)
        }
        function _next2() {
          _next2 = _asyncToGenerator(function* () {
            try {
              var e = yield i.next(),
                t = e.value,
                r = e.done
              if (r) {
                a.push(null)
              } else if (a.push(yield t)) {
                next()
              } else {
                o = false
              }
            } catch (e) {
              a.destroy(e)
            }
          })
          return _next2.apply(this, arguments)
        }
        return a
      }
      e.exports = from
    },
    442: function (e, t, r) {
      'use strict'
      var n
      function once(e) {
        var t = false
        return function () {
          if (t) return
          t = true
          e.apply(void 0, arguments)
        }
      }
      var i = r(646).q,
        a = i.ERR_MISSING_ARGS,
        o = i.ERR_STREAM_DESTROYED
      function noop(e) {
        if (e) throw e
      }
      function isRequest(e) {
        return e.setHeader && typeof e.abort === 'function'
      }
      function destroyer(e, t, i, a) {
        a = once(a)
        var s = false
        e.on('close', function () {
          s = true
        })
        if (n === undefined) n = r(698)
        n(e, { readable: t, writable: i }, function (e) {
          if (e) return a(e)
          s = true
          a()
        })
        var f = false
        return function (t) {
          if (s) return
          if (f) return
          f = true
          if (isRequest(e)) return e.abort()
          if (typeof e.destroy === 'function') return e.destroy()
          a(t || new o('pipe'))
        }
      }
      function call(e) {
        e()
      }
      function pipe(e, t) {
        return e.pipe(t)
      }
      function popCallback(e) {
        if (!e.length) return noop
        if (typeof e[e.length - 1] !== 'function') return noop
        return e.pop()
      }
      function pipeline() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r]
        }
        var n = popCallback(t)
        if (Array.isArray(t[0])) t = t[0]
        if (t.length < 2) {
          throw new a('streams')
        }
        var i
        var o = t.map(function (e, r) {
          var a = r < t.length - 1
          var s = r > 0
          return destroyer(e, a, s, function (e) {
            if (!i) i = e
            if (e) o.forEach(call)
            if (a) return
            o.forEach(call)
            n(i)
          })
        })
        return t.reduce(pipe)
      }
      e.exports = pipeline
    },
    776: function (e, t, r) {
      'use strict'
      var n = r(646).q.ERR_INVALID_OPT_VALUE
      function highWaterMarkFrom(e, t, r) {
        return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null
      }
      function getHighWaterMark(e, t, r, i) {
        var a = highWaterMarkFrom(t, i, r)
        if (a != null) {
          if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
            var o = i ? r : 'highWaterMark'
            throw new n(o, a)
          }
          return Math.floor(a)
        }
        return e.objectMode ? 16 : 16 * 1024
      }
      e.exports = { getHighWaterMark: getHighWaterMark }
    },
    678: function (e, t, r) {
      e.exports = r(781)
    },
    726: function (e, t, r) {
      var n = r(781)
      if (process.env.READABLE_STREAM === 'disable' && n) {
        e.exports = n.Readable
        Object.assign(e.exports, n)
        e.exports.Stream = n
      } else {
        t = e.exports = r(709)
        t.Stream = n || t
        t.Readable = t
        t.Writable = r(337)
        t.Duplex = r(403)
        t.Transform = r(170)
        t.PassThrough = r(889)
        t.finished = r(698)
        t.pipeline = r(442)
      }
    },
    55: function (e, t, r) {
      var n = r(300)
      var i = n.Buffer
      function copyProps(e, t) {
        for (var r in e) {
          t[r] = e[r]
        }
      }
      if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
        e.exports = n
      } else {
        copyProps(n, t)
        t.Buffer = SafeBuffer
      }
      function SafeBuffer(e, t, r) {
        return i(e, t, r)
      }
      SafeBuffer.prototype = Object.create(i.prototype)
      copyProps(i, SafeBuffer)
      SafeBuffer.from = function (e, t, r) {
        if (typeof e === 'number') {
          throw new TypeError('Argument must not be a number')
        }
        return i(e, t, r)
      }
      SafeBuffer.alloc = function (e, t, r) {
        if (typeof e !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        var n = i(e)
        if (t !== undefined) {
          if (typeof r === 'string') {
            n.fill(t, r)
          } else {
            n.fill(t)
          }
        } else {
          n.fill(0)
        }
        return n
      }
      SafeBuffer.allocUnsafe = function (e) {
        if (typeof e !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        return i(e)
      }
      SafeBuffer.allocUnsafeSlow = function (e) {
        if (typeof e !== 'number') {
          throw new TypeError('Argument must be a number')
        }
        return n.SlowBuffer(e)
      }
    },
    813: function (e, t, r) {
      var n = r(450)
      var i = r(254)
      var a = r(911)
      var o = r(523)
      var s = r(310)
      var f = t
      f.request = function (e, t) {
        if (typeof e === 'string') e = s.parse(e)
        else e = a(e)
        var r =
          global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''
        var i = e.protocol || r
        var o = e.hostname || e.host
        var f = e.port
        var l = e.path || '/'
        if (o && o.indexOf(':') !== -1) o = '[' + o + ']'
        e.url = (o ? i + '//' + o : '') + (f ? ':' + f : '') + l
        e.method = (e.method || 'GET').toUpperCase()
        e.headers = e.headers || {}
        var u = new n(e)
        if (t) u.on('response', t)
        return u
      }
      f.get = function get(e, t) {
        var r = f.request(e, t)
        r.end()
        return r
      }
      f.ClientRequest = n
      f.IncomingMessage = i.IncomingMessage
      f.Agent = function () {}
      f.Agent.defaultMaxSockets = 4
      f.globalAgent = new f.Agent()
      f.STATUS_CODES = o
      f.METHODS = [
        'CHECKOUT',
        'CONNECT',
        'COPY',
        'DELETE',
        'GET',
        'HEAD',
        'LOCK',
        'M-SEARCH',
        'MERGE',
        'MKACTIVITY',
        'MKCOL',
        'MOVE',
        'NOTIFY',
        'OPTIONS',
        'PATCH',
        'POST',
        'PROPFIND',
        'PROPPATCH',
        'PURGE',
        'PUT',
        'REPORT',
        'SEARCH',
        'SUBSCRIBE',
        'TRACE',
        'UNLOCK',
        'UNSUBSCRIBE',
      ]
    },
    301: function (e, t) {
      t.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)
      t.writableStream = isFunction(global.WritableStream)
      t.abortController = isFunction(global.AbortController)
      var r
      function getXHR() {
        if (r !== undefined) return r
        if (global.XMLHttpRequest) {
          r = new global.XMLHttpRequest()
          try {
            r.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
          } catch (e) {
            r = null
          }
        } else {
          r = null
        }
        return r
      }
      function checkTypeSupport(e) {
        var t = getXHR()
        if (!t) return false
        try {
          t.responseType = e
          return t.responseType === e
        } catch (e) {}
        return false
      }
      t.arraybuffer = t.fetch || checkTypeSupport('arraybuffer')
      t.msstream = !t.fetch && checkTypeSupport('ms-stream')
      t.mozchunkedarraybuffer =
        !t.fetch && checkTypeSupport('moz-chunked-arraybuffer')
      t.overrideMimeType =
        t.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)
      function isFunction(e) {
        return typeof e === 'function'
      }
      r = null
    },
    450: function (e, t, r) {
      var n = r(301)
      var i = r(782)
      var a = r(254)
      var o = r(726)
      var s = a.IncomingMessage
      var f = a.readyStates
      function decideMode(e, t) {
        if (n.fetch && t) {
          return 'fetch'
        } else if (n.mozchunkedarraybuffer) {
          return 'moz-chunked-arraybuffer'
        } else if (n.msstream) {
          return 'ms-stream'
        } else if (n.arraybuffer && e) {
          return 'arraybuffer'
        } else {
          return 'text'
        }
      }
      var l = (e.exports = function (e) {
        var t = this
        o.Writable.call(t)
        t._opts = e
        t._body = []
        t._headers = {}
        if (e.auth)
          t.setHeader(
            'Authorization',
            'Basic ' + Buffer.from(e.auth).toString('base64')
          )
        Object.keys(e.headers).forEach(function (r) {
          t.setHeader(r, e.headers[r])
        })
        var r
        var i = true
        if (
          e.mode === 'disable-fetch' ||
          ('requestTimeout' in e && !n.abortController)
        ) {
          i = false
          r = true
        } else if (e.mode === 'prefer-streaming') {
          r = false
        } else if (e.mode === 'allow-wrong-content-type') {
          r = !n.overrideMimeType
        } else if (
          !e.mode ||
          e.mode === 'default' ||
          e.mode === 'prefer-fast'
        ) {
          r = true
        } else {
          throw new Error('Invalid value for opts.mode')
        }
        t._mode = decideMode(r, i)
        t._fetchTimer = null
        t.on('finish', function () {
          t._onFinish()
        })
      })
      i(l, o.Writable)
      l.prototype.setHeader = function (e, t) {
        var r = this
        var n = e.toLowerCase()
        if (u.indexOf(n) !== -1) return
        r._headers[n] = { name: e, value: t }
      }
      l.prototype.getHeader = function (e) {
        var t = this._headers[e.toLowerCase()]
        if (t) return t.value
        return null
      }
      l.prototype.removeHeader = function (e) {
        var t = this
        delete t._headers[e.toLowerCase()]
      }
      l.prototype._onFinish = function () {
        var e = this
        if (e._destroyed) return
        var t = e._opts
        var r = e._headers
        var i = null
        if (t.method !== 'GET' && t.method !== 'HEAD') {
          i = new Blob(e._body, { type: (r['content-type'] || {}).value || '' })
        }
        var a = []
        Object.keys(r).forEach(function (e) {
          var t = r[e].name
          var n = r[e].value
          if (Array.isArray(n)) {
            n.forEach(function (e) {
              a.push([t, e])
            })
          } else {
            a.push([t, n])
          }
        })
        if (e._mode === 'fetch') {
          var o = null
          if (n.abortController) {
            var s = new AbortController()
            o = s.signal
            e._fetchAbortController = s
            if ('requestTimeout' in t && t.requestTimeout !== 0) {
              e._fetchTimer = global.setTimeout(function () {
                e.emit('requestTimeout')
                if (e._fetchAbortController) e._fetchAbortController.abort()
              }, t.requestTimeout)
            }
          }
          global
            .fetch(e._opts.url, {
              method: e._opts.method,
              headers: a,
              body: i || undefined,
              mode: 'cors',
              credentials: t.withCredentials ? 'include' : 'same-origin',
              signal: o,
            })
            .then(
              function (t) {
                e._fetchResponse = t
                e._connect()
              },
              function (t) {
                global.clearTimeout(e._fetchTimer)
                if (!e._destroyed) e.emit('error', t)
              }
            )
        } else {
          var l = (e._xhr = new global.XMLHttpRequest())
          try {
            l.open(e._opts.method, e._opts.url, true)
          } catch (t) {
            process.nextTick(function () {
              e.emit('error', t)
            })
            return
          }
          if ('responseType' in l) l.responseType = e._mode
          if ('withCredentials' in l) l.withCredentials = !!t.withCredentials
          if (e._mode === 'text' && 'overrideMimeType' in l)
            l.overrideMimeType('text/plain; charset=x-user-defined')
          if ('requestTimeout' in t) {
            l.timeout = t.requestTimeout
            l.ontimeout = function () {
              e.emit('requestTimeout')
            }
          }
          a.forEach(function (e) {
            l.setRequestHeader(e[0], e[1])
          })
          e._response = null
          l.onreadystatechange = function () {
            switch (l.readyState) {
              case f.LOADING:
              case f.DONE:
                e._onXHRProgress()
                break
            }
          }
          if (e._mode === 'moz-chunked-arraybuffer') {
            l.onprogress = function () {
              e._onXHRProgress()
            }
          }
          l.onerror = function () {
            if (e._destroyed) return
            e.emit('error', new Error('XHR error'))
          }
          try {
            l.send(i)
          } catch (t) {
            process.nextTick(function () {
              e.emit('error', t)
            })
            return
          }
        }
      }
      function statusValid(e) {
        try {
          var t = e.status
          return t !== null && t !== 0
        } catch (e) {
          return false
        }
      }
      l.prototype._onXHRProgress = function () {
        var e = this
        if (!statusValid(e._xhr) || e._destroyed) return
        if (!e._response) e._connect()
        e._response._onXHRProgress()
      }
      l.prototype._connect = function () {
        var e = this
        if (e._destroyed) return
        e._response = new s(e._xhr, e._fetchResponse, e._mode, e._fetchTimer)
        e._response.on('error', function (t) {
          e.emit('error', t)
        })
        e.emit('response', e._response)
      }
      l.prototype._write = function (e, t, r) {
        var n = this
        n._body.push(e)
        r()
      }
      l.prototype.abort = l.prototype.destroy = function () {
        var e = this
        e._destroyed = true
        global.clearTimeout(e._fetchTimer)
        if (e._response) e._response._destroyed = true
        if (e._xhr) e._xhr.abort()
        else if (e._fetchAbortController) e._fetchAbortController.abort()
      }
      l.prototype.end = function (e, t, r) {
        var n = this
        if (typeof e === 'function') {
          r = e
          e = undefined
        }
        o.Writable.prototype.end.call(n, e, t, r)
      }
      l.prototype.flushHeaders = function () {}
      l.prototype.setTimeout = function () {}
      l.prototype.setNoDelay = function () {}
      l.prototype.setSocketKeepAlive = function () {}
      var u = [
        'accept-charset',
        'accept-encoding',
        'access-control-request-headers',
        'access-control-request-method',
        'connection',
        'content-length',
        'cookie',
        'cookie2',
        'date',
        'dnt',
        'expect',
        'host',
        'keep-alive',
        'origin',
        'referer',
        'te',
        'trailer',
        'transfer-encoding',
        'upgrade',
        'via',
      ]
    },
    254: function (e, t, r) {
      var n = r(301)
      var i = r(782)
      var a = r(726)
      var o = (t.readyStates = {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4,
      })
      var s = (t.IncomingMessage = function (e, t, r, i) {
        var o = this
        a.Readable.call(o)
        o._mode = r
        o.headers = {}
        o.rawHeaders = []
        o.trailers = {}
        o.rawTrailers = []
        o.on('end', function () {
          process.nextTick(function () {
            o.emit('close')
          })
        })
        if (r === 'fetch') {
          o._fetchResponse = t
          o.url = t.url
          o.statusCode = t.status
          o.statusMessage = t.statusText
          t.headers.forEach(function (e, t) {
            o.headers[t.toLowerCase()] = e
            o.rawHeaders.push(t, e)
          })
          if (n.writableStream) {
            var s = new WritableStream({
              write: function (e) {
                return new Promise(function (t, r) {
                  if (o._destroyed) {
                    r()
                  } else if (o.push(Buffer.from(e))) {
                    t()
                  } else {
                    o._resumeFetch = t
                  }
                })
              },
              close: function () {
                global.clearTimeout(i)
                if (!o._destroyed) o.push(null)
              },
              abort: function (e) {
                if (!o._destroyed) o.emit('error', e)
              },
            })
            try {
              t.body.pipeTo(s).catch(function (e) {
                global.clearTimeout(i)
                if (!o._destroyed) o.emit('error', e)
              })
              return
            } catch (e) {}
          }
          var f = t.body.getReader()
          function read() {
            f.read()
              .then(function (e) {
                if (o._destroyed) return
                if (e.done) {
                  global.clearTimeout(i)
                  o.push(null)
                  return
                }
                o.push(Buffer.from(e.value))
                read()
              })
              .catch(function (e) {
                global.clearTimeout(i)
                if (!o._destroyed) o.emit('error', e)
              })
          }
          read()
        } else {
          o._xhr = e
          o._pos = 0
          o.url = e.responseURL
          o.statusCode = e.status
          o.statusMessage = e.statusText
          var l = e.getAllResponseHeaders().split(/\r?\n/)
          l.forEach(function (e) {
            var t = e.match(/^([^:]+):\s*(.*)/)
            if (t) {
              var r = t[1].toLowerCase()
              if (r === 'set-cookie') {
                if (o.headers[r] === undefined) {
                  o.headers[r] = []
                }
                o.headers[r].push(t[2])
              } else if (o.headers[r] !== undefined) {
                o.headers[r] += ', ' + t[2]
              } else {
                o.headers[r] = t[2]
              }
              o.rawHeaders.push(t[1], t[2])
            }
          })
          o._charset = 'x-user-defined'
          if (!n.overrideMimeType) {
            var u = o.rawHeaders['mime-type']
            if (u) {
              var d = u.match(/;\s*charset=([^;])(;|$)/)
              if (d) {
                o._charset = d[1].toLowerCase()
              }
            }
            if (!o._charset) o._charset = 'utf-8'
          }
        }
      })
      i(s, a.Readable)
      s.prototype._read = function () {
        var e = this
        var t = e._resumeFetch
        if (t) {
          e._resumeFetch = null
          t()
        }
      }
      s.prototype._onXHRProgress = function () {
        var e = this
        var t = e._xhr
        var r = null
        switch (e._mode) {
          case 'text':
            r = t.responseText
            if (r.length > e._pos) {
              var n = r.substr(e._pos)
              if (e._charset === 'x-user-defined') {
                var i = Buffer.alloc(n.length)
                for (var a = 0; a < n.length; a++) i[a] = n.charCodeAt(a) & 255
                e.push(i)
              } else {
                e.push(n, e._charset)
              }
              e._pos = r.length
            }
            break
          case 'arraybuffer':
            if (t.readyState !== o.DONE || !t.response) break
            r = t.response
            e.push(Buffer.from(new Uint8Array(r)))
            break
          case 'moz-chunked-arraybuffer':
            r = t.response
            if (t.readyState !== o.LOADING || !r) break
            e.push(Buffer.from(new Uint8Array(r)))
            break
          case 'ms-stream':
            r = t.response
            if (t.readyState !== o.LOADING) break
            var s = new global.MSStreamReader()
            s.onprogress = function () {
              if (s.result.byteLength > e._pos) {
                e.push(Buffer.from(new Uint8Array(s.result.slice(e._pos))))
                e._pos = s.result.byteLength
              }
            }
            s.onload = function () {
              e.push(null)
            }
            s.readAsArrayBuffer(r)
            break
        }
        if (e._xhr.readyState === o.DONE && e._mode !== 'ms-stream') {
          e.push(null)
        }
      }
    },
    704: function (e, t, r) {
      'use strict'
      var n = r(55).Buffer
      var i =
        n.isEncoding ||
        function (e) {
          e = '' + e
          switch (e && e.toLowerCase()) {
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
      function _normalizeEncoding(e) {
        if (!e) return 'utf8'
        var t
        while (true) {
          switch (e) {
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
              return e
            default:
              if (t) return
              e = ('' + e).toLowerCase()
              t = true
          }
        }
      }
      function normalizeEncoding(e) {
        var t = _normalizeEncoding(e)
        if (typeof t !== 'string' && (n.isEncoding === i || !i(e)))
          throw new Error('Unknown encoding: ' + e)
        return t || e
      }
      t.s = StringDecoder
      function StringDecoder(e) {
        this.encoding = normalizeEncoding(e)
        var t
        switch (this.encoding) {
          case 'utf16le':
            this.text = utf16Text
            this.end = utf16End
            t = 4
            break
          case 'utf8':
            this.fillLast = utf8FillLast
            t = 4
            break
          case 'base64':
            this.text = base64Text
            this.end = base64End
            t = 3
            break
          default:
            this.write = simpleWrite
            this.end = simpleEnd
            return
        }
        this.lastNeed = 0
        this.lastTotal = 0
        this.lastChar = n.allocUnsafe(t)
      }
      StringDecoder.prototype.write = function (e) {
        if (e.length === 0) return ''
        var t
        var r
        if (this.lastNeed) {
          t = this.fillLast(e)
          if (t === undefined) return ''
          r = this.lastNeed
          this.lastNeed = 0
        } else {
          r = 0
        }
        if (r < e.length) return t ? t + this.text(e, r) : this.text(e, r)
        return t || ''
      }
      StringDecoder.prototype.end = utf8End
      StringDecoder.prototype.text = utf8Text
      StringDecoder.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length) {
          e.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          )
          return this.lastChar.toString(this.encoding, 0, this.lastTotal)
        }
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length)
        this.lastNeed -= e.length
      }
      function utf8CheckByte(e) {
        if (e <= 127) return 0
        else if (e >> 5 === 6) return 2
        else if (e >> 4 === 14) return 3
        else if (e >> 3 === 30) return 4
        return e >> 6 === 2 ? -1 : -2
      }
      function utf8CheckIncomplete(e, t, r) {
        var n = t.length - 1
        if (n < r) return 0
        var i = utf8CheckByte(t[n])
        if (i >= 0) {
          if (i > 0) e.lastNeed = i - 1
          return i
        }
        if (--n < r || i === -2) return 0
        i = utf8CheckByte(t[n])
        if (i >= 0) {
          if (i > 0) e.lastNeed = i - 2
          return i
        }
        if (--n < r || i === -2) return 0
        i = utf8CheckByte(t[n])
        if (i >= 0) {
          if (i > 0) {
            if (i === 2) i = 0
            else e.lastNeed = i - 3
          }
          return i
        }
        return 0
      }
      function utf8CheckExtraBytes(e, t, r) {
        if ((t[0] & 192) !== 128) {
          e.lastNeed = 0
          return '�'
        }
        if (e.lastNeed > 1 && t.length > 1) {
          if ((t[1] & 192) !== 128) {
            e.lastNeed = 1
            return '�'
          }
          if (e.lastNeed > 2 && t.length > 2) {
            if ((t[2] & 192) !== 128) {
              e.lastNeed = 2
              return '�'
            }
          }
        }
      }
      function utf8FillLast(e) {
        var t = this.lastTotal - this.lastNeed
        var r = utf8CheckExtraBytes(this, e, t)
        if (r !== undefined) return r
        if (this.lastNeed <= e.length) {
          e.copy(this.lastChar, t, 0, this.lastNeed)
          return this.lastChar.toString(this.encoding, 0, this.lastTotal)
        }
        e.copy(this.lastChar, t, 0, e.length)
        this.lastNeed -= e.length
      }
      function utf8Text(e, t) {
        var r = utf8CheckIncomplete(this, e, t)
        if (!this.lastNeed) return e.toString('utf8', t)
        this.lastTotal = r
        var n = e.length - (r - this.lastNeed)
        e.copy(this.lastChar, 0, n)
        return e.toString('utf8', t, n)
      }
      function utf8End(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) return t + '�'
        return t
      }
      function utf16Text(e, t) {
        if ((e.length - t) % 2 === 0) {
          var r = e.toString('utf16le', t)
          if (r) {
            var n = r.charCodeAt(r.length - 1)
            if (n >= 55296 && n <= 56319) {
              this.lastNeed = 2
              this.lastTotal = 4
              this.lastChar[0] = e[e.length - 2]
              this.lastChar[1] = e[e.length - 1]
              return r.slice(0, -1)
            }
          }
          return r
        }
        this.lastNeed = 1
        this.lastTotal = 2
        this.lastChar[0] = e[e.length - 1]
        return e.toString('utf16le', t, e.length - 1)
      }
      function utf16End(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed
          return t + this.lastChar.toString('utf16le', 0, r)
        }
        return t
      }
      function base64Text(e, t) {
        var r = (e.length - t) % 3
        if (r === 0) return e.toString('base64', t)
        this.lastNeed = 3 - r
        this.lastTotal = 3
        if (r === 1) {
          this.lastChar[0] = e[e.length - 1]
        } else {
          this.lastChar[0] = e[e.length - 2]
          this.lastChar[1] = e[e.length - 1]
        }
        return e.toString('base64', t, e.length - r)
      }
      function base64End(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed)
          return t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
        return t
      }
      function simpleWrite(e) {
        return e.toString(this.encoding)
      }
      function simpleEnd(e) {
        return e && e.length ? this.write(e) : ''
      }
    },
    769: function (e) {
      e.exports = deprecate
      function deprecate(e, t) {
        if (config('noDeprecation')) {
          return e
        }
        var r = false
        function deprecated() {
          if (!r) {
            if (config('throwDeprecation')) {
              throw new Error(t)
            } else if (config('traceDeprecation')) {
              console.trace(t)
            } else {
              console.warn(t)
            }
            r = true
          }
          return e.apply(this, arguments)
        }
        return deprecated
      }
      function config(e) {
        try {
          if (!global.localStorage) return false
        } catch (e) {
          return false
        }
        var t = global.localStorage[e]
        if (null == t) return false
        return String(t).toLowerCase() === 'true'
      }
    },
    911: function (e) {
      e.exports = extend
      var t = Object.prototype.hasOwnProperty
      function extend() {
        var e = {}
        for (var r = 0; r < arguments.length; r++) {
          var n = arguments[r]
          for (var i in n) {
            if (t.call(n, i)) {
              e[i] = n[i]
            }
          }
        }
        return e
      }
    },
    300: function (e) {
      'use strict'
      e.exports = require('buffer')
    },
    361: function (e) {
      'use strict'
      e.exports = require('events')
    },
    781: function (e) {
      'use strict'
      e.exports = require('stream')
    },
    310: function (e) {
      'use strict'
      e.exports = require('url')
    },
    837: function (e) {
      'use strict'
      e.exports = require('util')
    },
  }
  var t = {}
  function __nccwpck_require__(r) {
    var n = t[r]
    if (n !== undefined) {
      return n.exports
    }
    var i = (t[r] = { exports: {} })
    var a = true
    try {
      e[r](i, i.exports, __nccwpck_require__)
      a = false
    } finally {
      if (a) delete t[r]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var r = __nccwpck_require__(813)
  module.exports = r
})()
