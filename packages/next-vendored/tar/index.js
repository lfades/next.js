;(() => {
  var t = {
    2975: (t, e, s) => {
      'use strict'
      const i = s(7147)
      const n = s(1017)
      const r = i.lchown ? 'lchown' : 'chown'
      const o = i.lchownSync ? 'lchownSync' : 'chownSync'
      const h =
        i.lchown &&
        !process.version.match(/v1[1-9]+\./) &&
        !process.version.match(/v10\.[6-9]/)
      const lchownSync = (t, e, s) => {
        try {
          return i[o](t, e, s)
        } catch (t) {
          if (t.code !== 'ENOENT') throw t
        }
      }
      const chownSync = (t, e, s) => {
        try {
          return i.chownSync(t, e, s)
        } catch (t) {
          if (t.code !== 'ENOENT') throw t
        }
      }
      const l = h
        ? (t, e, s, n) => (r) => {
            if (!r || r.code !== 'EISDIR') n(r)
            else i.chown(t, e, s, n)
          }
        : (t, e, s, i) => i
      const a = h
        ? (t, e, s) => {
            try {
              return lchownSync(t, e, s)
            } catch (i) {
              if (i.code !== 'EISDIR') throw i
              chownSync(t, e, s)
            }
          }
        : (t, e, s) => lchownSync(t, e, s)
      const c = process.version
      let readdir = (t, e, s) => i.readdir(t, e, s)
      let readdirSync = (t, e) => i.readdirSync(t, e)
      if (/^v4\./.test(c)) readdir = (t, e, s) => i.readdir(t, s)
      const chown = (t, e, s, n) => {
        i[r](
          t,
          e,
          s,
          l(t, e, s, (t) => {
            n(t && t.code !== 'ENOENT' ? t : null)
          })
        )
      }
      const chownrKid = (t, e, s, r, o) => {
        if (typeof e === 'string')
          return i.lstat(n.resolve(t, e), (i, n) => {
            if (i) return o(i.code !== 'ENOENT' ? i : null)
            n.name = e
            chownrKid(t, n, s, r, o)
          })
        if (e.isDirectory()) {
          chownr(n.resolve(t, e.name), s, r, (i) => {
            if (i) return o(i)
            const h = n.resolve(t, e.name)
            chown(h, s, r, o)
          })
        } else {
          const i = n.resolve(t, e.name)
          chown(i, s, r, o)
        }
      }
      const chownr = (t, e, s, i) => {
        readdir(t, { withFileTypes: true }, (n, r) => {
          if (n) {
            if (n.code === 'ENOENT') return i()
            else if (n.code !== 'ENOTDIR' && n.code !== 'ENOTSUP') return i(n)
          }
          if (n || !r.length) return chown(t, e, s, i)
          let o = r.length
          let h = null
          const then = (n) => {
            if (h) return
            if (n) return i((h = n))
            if (--o === 0) return chown(t, e, s, i)
          }
          r.forEach((i) => chownrKid(t, i, e, s, then))
        })
      }
      const chownrKidSync = (t, e, s, r) => {
        if (typeof e === 'string') {
          try {
            const s = i.lstatSync(n.resolve(t, e))
            s.name = e
            e = s
          } catch (t) {
            if (t.code === 'ENOENT') return
            else throw t
          }
        }
        if (e.isDirectory()) chownrSync(n.resolve(t, e.name), s, r)
        a(n.resolve(t, e.name), s, r)
      }
      const chownrSync = (t, e, s) => {
        let i
        try {
          i = readdirSync(t, { withFileTypes: true })
        } catch (i) {
          if (i.code === 'ENOENT') return
          else if (i.code === 'ENOTDIR' || i.code === 'ENOTSUP')
            return a(t, e, s)
          else throw i
        }
        if (i && i.length) i.forEach((i) => chownrKidSync(t, i, e, s))
        return a(t, e, s)
      }
      t.exports = chownr
      chownr.sync = chownrSync
    },
    644: (t, e, s) => {
      'use strict'
      const i = s(7413)
      const n = s(2361).EventEmitter
      const r = s(7147)
      let o = r.writev
      if (!o) {
        const t = process.binding('fs')
        const e = t.FSReqWrap || t.FSReqCallback
        o = (s, i, n, r) => {
          const done = (t, e) => r(t, e, i)
          const o = new e()
          o.oncomplete = done
          t.writeBuffers(s, i, n, o)
        }
      }
      const h = Symbol('_autoClose')
      const l = Symbol('_close')
      const a = Symbol('_ended')
      const c = Symbol('_fd')
      const u = Symbol('_finished')
      const f = Symbol('_flags')
      const d = Symbol('_flush')
      const p = Symbol('_handleChunk')
      const m = Symbol('_makeBuf')
      const y = Symbol('_mode')
      const b = Symbol('_needDrain')
      const w = Symbol('_onerror')
      const E = Symbol('_onopen')
      const _ = Symbol('_onread')
      const S = Symbol('_onwrite')
      const g = Symbol('_open')
      const R = Symbol('_path')
      const O = Symbol('_pos')
      const k = Symbol('_queue')
      const v = Symbol('_read')
      const T = Symbol('_readSize')
      const L = Symbol('_reading')
      const x = Symbol('_remain')
      const A = Symbol('_size')
      const I = Symbol('_write')
      const D = Symbol('_writing')
      const N = Symbol('_defaultFlag')
      const B = Symbol('_errored')
      class ReadStream extends i {
        constructor(t, e) {
          e = e || {}
          super(e)
          this.readable = true
          this.writable = false
          if (typeof t !== 'string')
            throw new TypeError('path must be a string')
          this[B] = false
          this[c] = typeof e.fd === 'number' ? e.fd : null
          this[R] = t
          this[T] = e.readSize || 16 * 1024 * 1024
          this[L] = false
          this[A] = typeof e.size === 'number' ? e.size : Infinity
          this[x] = this[A]
          this[h] = typeof e.autoClose === 'boolean' ? e.autoClose : true
          if (typeof this[c] === 'number') this[v]()
          else this[g]()
        }
        get fd() {
          return this[c]
        }
        get path() {
          return this[R]
        }
        write() {
          throw new TypeError('this is a readable stream')
        }
        end() {
          throw new TypeError('this is a readable stream')
        }
        [g]() {
          r.open(this[R], 'r', (t, e) => this[E](t, e))
        }
        [E](t, e) {
          if (t) this[w](t)
          else {
            this[c] = e
            this.emit('open', e)
            this[v]()
          }
        }
        [m]() {
          return Buffer.allocUnsafe(Math.min(this[T], this[x]))
        }
        [v]() {
          if (!this[L]) {
            this[L] = true
            const t = this[m]()
            if (t.length === 0)
              return process.nextTick(() => this[_](null, 0, t))
            r.read(this[c], t, 0, t.length, null, (t, e, s) => this[_](t, e, s))
          }
        }
        [_](t, e, s) {
          this[L] = false
          if (t) this[w](t)
          else if (this[p](e, s)) this[v]()
        }
        [l]() {
          if (this[h] && typeof this[c] === 'number') {
            const t = this[c]
            this[c] = null
            r.close(t, (t) => (t ? this.emit('error', t) : this.emit('close')))
          }
        }
        [w](t) {
          this[L] = true
          this[l]()
          this.emit('error', t)
        }
        [p](t, e) {
          let s = false
          this[x] -= t
          if (t > 0) s = super.write(t < e.length ? e.slice(0, t) : e)
          if (t === 0 || this[x] <= 0) {
            s = false
            this[l]()
            super.end()
          }
          return s
        }
        emit(t, e) {
          switch (t) {
            case 'prefinish':
            case 'finish':
              break
            case 'drain':
              if (typeof this[c] === 'number') this[v]()
              break
            case 'error':
              if (this[B]) return
              this[B] = true
              return super.emit(t, e)
            default:
              return super.emit(t, e)
          }
        }
      }
      class ReadStreamSync extends ReadStream {
        [g]() {
          let t = true
          try {
            this[E](null, r.openSync(this[R], 'r'))
            t = false
          } finally {
            if (t) this[l]()
          }
        }
        [v]() {
          let t = true
          try {
            if (!this[L]) {
              this[L] = true
              do {
                const t = this[m]()
                const e =
                  t.length === 0 ? 0 : r.readSync(this[c], t, 0, t.length, null)
                if (!this[p](e, t)) break
              } while (true)
              this[L] = false
            }
            t = false
          } finally {
            if (t) this[l]()
          }
        }
        [l]() {
          if (this[h] && typeof this[c] === 'number') {
            const t = this[c]
            this[c] = null
            r.closeSync(t)
            this.emit('close')
          }
        }
      }
      class WriteStream extends n {
        constructor(t, e) {
          e = e || {}
          super(e)
          this.readable = false
          this.writable = true
          this[B] = false
          this[D] = false
          this[a] = false
          this[b] = false
          this[k] = []
          this[R] = t
          this[c] = typeof e.fd === 'number' ? e.fd : null
          this[y] = e.mode === undefined ? 438 : e.mode
          this[O] = typeof e.start === 'number' ? e.start : null
          this[h] = typeof e.autoClose === 'boolean' ? e.autoClose : true
          const s = this[O] !== null ? 'r+' : 'w'
          this[N] = e.flags === undefined
          this[f] = this[N] ? s : e.flags
          if (this[c] === null) this[g]()
        }
        emit(t, e) {
          if (t === 'error') {
            if (this[B]) return
            this[B] = true
          }
          return super.emit(t, e)
        }
        get fd() {
          return this[c]
        }
        get path() {
          return this[R]
        }
        [w](t) {
          this[l]()
          this[D] = true
          this.emit('error', t)
        }
        [g]() {
          r.open(this[R], this[f], this[y], (t, e) => this[E](t, e))
        }
        [E](t, e) {
          if (this[N] && this[f] === 'r+' && t && t.code === 'ENOENT') {
            this[f] = 'w'
            this[g]()
          } else if (t) this[w](t)
          else {
            this[c] = e
            this.emit('open', e)
            this[d]()
          }
        }
        end(t, e) {
          if (t) this.write(t, e)
          this[a] = true
          if (!this[D] && !this[k].length && typeof this[c] === 'number')
            this[S](null, 0)
          return this
        }
        write(t, e) {
          if (typeof t === 'string') t = Buffer.from(t, e)
          if (this[a]) {
            this.emit('error', new Error('write() after end()'))
            return false
          }
          if (this[c] === null || this[D] || this[k].length) {
            this[k].push(t)
            this[b] = true
            return false
          }
          this[D] = true
          this[I](t)
          return true
        }
        [I](t) {
          r.write(this[c], t, 0, t.length, this[O], (t, e) => this[S](t, e))
        }
        [S](t, e) {
          if (t) this[w](t)
          else {
            if (this[O] !== null) this[O] += e
            if (this[k].length) this[d]()
            else {
              this[D] = false
              if (this[a] && !this[u]) {
                this[u] = true
                this[l]()
                this.emit('finish')
              } else if (this[b]) {
                this[b] = false
                this.emit('drain')
              }
            }
          }
        }
        [d]() {
          if (this[k].length === 0) {
            if (this[a]) this[S](null, 0)
          } else if (this[k].length === 1) this[I](this[k].pop())
          else {
            const t = this[k]
            this[k] = []
            o(this[c], t, this[O], (t, e) => this[S](t, e))
          }
        }
        [l]() {
          if (this[h] && typeof this[c] === 'number') {
            const t = this[c]
            this[c] = null
            r.close(t, (t) => (t ? this.emit('error', t) : this.emit('close')))
          }
        }
      }
      class WriteStreamSync extends WriteStream {
        [g]() {
          let t
          if (this[N] && this[f] === 'r+') {
            try {
              t = r.openSync(this[R], this[f], this[y])
            } catch (t) {
              if (t.code === 'ENOENT') {
                this[f] = 'w'
                return this[g]()
              } else throw t
            }
          } else t = r.openSync(this[R], this[f], this[y])
          this[E](null, t)
        }
        [l]() {
          if (this[h] && typeof this[c] === 'number') {
            const t = this[c]
            this[c] = null
            r.closeSync(t)
            this.emit('close')
          }
        }
        [I](t) {
          let e = true
          try {
            this[S](null, r.writeSync(this[c], t, 0, t.length, this[O]))
            e = false
          } finally {
            if (e)
              try {
                this[l]()
              } catch (t) {}
          }
        }
      }
      e.ReadStream = ReadStream
      e.ReadStreamSync = ReadStreamSync
      e.WriteStream = WriteStream
      e.WriteStreamSync = WriteStreamSync
    },
    7413: (t, e, s) => {
      'use strict'
      const i = s(2361)
      const n = s(2781)
      const r = s(3401)
      const o = s(1576).StringDecoder
      const h = Symbol('EOF')
      const l = Symbol('maybeEmitEnd')
      const a = Symbol('emittedEnd')
      const c = Symbol('emittingEnd')
      const u = Symbol('closed')
      const f = Symbol('read')
      const d = Symbol('flush')
      const p = Symbol('flushChunk')
      const m = Symbol('encoding')
      const y = Symbol('decoder')
      const b = Symbol('flowing')
      const w = Symbol('paused')
      const E = Symbol('resume')
      const _ = Symbol('bufferLength')
      const S = Symbol('bufferPush')
      const g = Symbol('bufferShift')
      const R = Symbol('objectMode')
      const O = Symbol('destroyed')
      const k = global._MP_NO_ITERATOR_SYMBOLS_ !== '1'
      const v =
        (k && Symbol.asyncIterator) || Symbol('asyncIterator not implemented')
      const T = (k && Symbol.iterator) || Symbol('iterator not implemented')
      const isEndish = (t) => t === 'end' || t === 'finish' || t === 'prefinish'
      const isArrayBuffer = (t) =>
        t instanceof ArrayBuffer ||
        (typeof t === 'object' &&
          t.constructor &&
          t.constructor.name === 'ArrayBuffer' &&
          t.byteLength >= 0)
      const isArrayBufferView = (t) =>
        !Buffer.isBuffer(t) && ArrayBuffer.isView(t)
      t.exports = class Minipass extends n {
        constructor(t) {
          super()
          this[b] = false
          this[w] = false
          this.pipes = new r()
          this.buffer = new r()
          this[R] = (t && t.objectMode) || false
          if (this[R]) this[m] = null
          else this[m] = (t && t.encoding) || null
          if (this[m] === 'buffer') this[m] = null
          this[y] = this[m] ? new o(this[m]) : null
          this[h] = false
          this[a] = false
          this[c] = false
          this[u] = false
          this.writable = true
          this.readable = true
          this[_] = 0
          this[O] = false
        }
        get bufferLength() {
          return this[_]
        }
        get encoding() {
          return this[m]
        }
        set encoding(t) {
          if (this[R]) throw new Error('cannot set encoding in objectMode')
          if (
            this[m] &&
            t !== this[m] &&
            ((this[y] && this[y].lastNeed) || this[_])
          )
            throw new Error('cannot change encoding')
          if (this[m] !== t) {
            this[y] = t ? new o(t) : null
            if (this.buffer.length)
              this.buffer = this.buffer.map((t) => this[y].write(t))
          }
          this[m] = t
        }
        setEncoding(t) {
          this.encoding = t
        }
        get objectMode() {
          return this[R]
        }
        set objectMode(t) {
          this[R] = this[R] || !!t
        }
        write(t, e, s) {
          if (this[h]) throw new Error('write after end')
          if (this[O]) {
            this.emit(
              'error',
              Object.assign(
                new Error('Cannot call write after a stream was destroyed'),
                { code: 'ERR_STREAM_DESTROYED' }
              )
            )
            return true
          }
          if (typeof e === 'function') (s = e), (e = 'utf8')
          if (!e) e = 'utf8'
          if (!this[R] && !Buffer.isBuffer(t)) {
            if (isArrayBufferView(t))
              t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)
            else if (isArrayBuffer(t)) t = Buffer.from(t)
            else if (typeof t !== 'string') this.objectMode = true
          }
          if (!this.objectMode && !t.length) {
            if (this[_] !== 0) this.emit('readable')
            if (s) s()
            return this.flowing
          }
          if (
            typeof t === 'string' &&
            !this[R] &&
            !(e === this[m] && !this[y].lastNeed)
          ) {
            t = Buffer.from(t, e)
          }
          if (Buffer.isBuffer(t) && this[m]) t = this[y].write(t)
          if (this.flowing) {
            if (this[_] !== 0) this[d](true)
            this.emit('data', t)
          } else this[S](t)
          if (this[_] !== 0) this.emit('readable')
          if (s) s()
          return this.flowing
        }
        read(t) {
          if (this[O]) return null
          try {
            if (this[_] === 0 || t === 0 || t > this[_]) return null
            if (this[R]) t = null
            if (this.buffer.length > 1 && !this[R]) {
              if (this.encoding)
                this.buffer = new r([Array.from(this.buffer).join('')])
              else
                this.buffer = new r([
                  Buffer.concat(Array.from(this.buffer), this[_]),
                ])
            }
            return this[f](t || null, this.buffer.head.value)
          } finally {
            this[l]()
          }
        }
        [f](t, e) {
          if (t === e.length || t === null) this[g]()
          else {
            this.buffer.head.value = e.slice(t)
            e = e.slice(0, t)
            this[_] -= t
          }
          this.emit('data', e)
          if (!this.buffer.length && !this[h]) this.emit('drain')
          return e
        }
        end(t, e, s) {
          if (typeof t === 'function') (s = t), (t = null)
          if (typeof e === 'function') (s = e), (e = 'utf8')
          if (t) this.write(t, e)
          if (s) this.once('end', s)
          this[h] = true
          this.writable = false
          if (this.flowing || !this[w]) this[l]()
          return this
        }
        [E]() {
          if (this[O]) return
          this[w] = false
          this[b] = true
          this.emit('resume')
          if (this.buffer.length) this[d]()
          else if (this[h]) this[l]()
          else this.emit('drain')
        }
        resume() {
          return this[E]()
        }
        pause() {
          this[b] = false
          this[w] = true
        }
        get destroyed() {
          return this[O]
        }
        get flowing() {
          return this[b]
        }
        get paused() {
          return this[w]
        }
        [S](t) {
          if (this[R]) this[_] += 1
          else this[_] += t.length
          return this.buffer.push(t)
        }
        [g]() {
          if (this.buffer.length) {
            if (this[R]) this[_] -= 1
            else this[_] -= this.buffer.head.value.length
          }
          return this.buffer.shift()
        }
        [d](t) {
          do {} while (this[p](this[g]()))
          if (!t && !this.buffer.length && !this[h]) this.emit('drain')
        }
        [p](t) {
          return t ? (this.emit('data', t), this.flowing) : false
        }
        pipe(t, e) {
          if (this[O]) return
          const s = this[a]
          e = e || {}
          if (t === process.stdout || t === process.stderr) e.end = false
          else e.end = e.end !== false
          const i = { dest: t, opts: e, ondrain: (t) => this[E]() }
          this.pipes.push(i)
          t.on('drain', i.ondrain)
          this[E]()
          if (s && i.opts.end) i.dest.end()
          return t
        }
        addListener(t, e) {
          return this.on(t, e)
        }
        on(t, e) {
          try {
            return super.on(t, e)
          } finally {
            if (t === 'data' && !this.pipes.length && !this.flowing) this[E]()
            else if (isEndish(t) && this[a]) {
              super.emit(t)
              this.removeAllListeners(t)
            }
          }
        }
        get emittedEnd() {
          return this[a]
        }
        [l]() {
          if (
            !this[c] &&
            !this[a] &&
            !this[O] &&
            this.buffer.length === 0 &&
            this[h]
          ) {
            this[c] = true
            this.emit('end')
            this.emit('prefinish')
            this.emit('finish')
            if (this[u]) this.emit('close')
            this[c] = false
          }
        }
        emit(t, e) {
          if (t !== 'error' && t !== 'close' && t !== O && this[O]) return
          else if (t === 'data') {
            if (!e) return
            if (this.pipes.length)
              this.pipes.forEach(
                (t) => t.dest.write(e) === false && this.pause()
              )
          } else if (t === 'end') {
            if (this[a] === true) return
            this[a] = true
            this.readable = false
            if (this[y]) {
              e = this[y].end()
              if (e) {
                this.pipes.forEach((t) => t.dest.write(e))
                super.emit('data', e)
              }
            }
            this.pipes.forEach((t) => {
              t.dest.removeListener('drain', t.ondrain)
              if (t.opts.end) t.dest.end()
            })
          } else if (t === 'close') {
            this[u] = true
            if (!this[a] && !this[O]) return
          }
          const s = new Array(arguments.length)
          s[0] = t
          s[1] = e
          if (arguments.length > 2) {
            for (let t = 2; t < arguments.length; t++) {
              s[t] = arguments[t]
            }
          }
          try {
            return super.emit.apply(this, s)
          } finally {
            if (!isEndish(t)) this[l]()
            else this.removeAllListeners(t)
          }
        }
        collect() {
          const t = []
          if (!this[R]) t.dataLength = 0
          const e = this.promise()
          this.on('data', (e) => {
            t.push(e)
            if (!this[R]) t.dataLength += e.length
          })
          return e.then(() => t)
        }
        concat() {
          return this[R]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this.collect().then((t) =>
                this[R]
                  ? Promise.reject(new Error('cannot concat in objectMode'))
                  : this[m]
                  ? t.join('')
                  : Buffer.concat(t, t.dataLength)
              )
        }
        promise() {
          return new Promise((t, e) => {
            this.on(O, () => e(new Error('stream destroyed')))
            this.on('end', () => t())
            this.on('error', (t) => e(t))
          })
        }
        [v]() {
          const next = () => {
            const t = this.read()
            if (t !== null) return Promise.resolve({ done: false, value: t })
            if (this[h]) return Promise.resolve({ done: true })
            let e = null
            let s = null
            const onerr = (t) => {
              this.removeListener('data', ondata)
              this.removeListener('end', onend)
              s(t)
            }
            const ondata = (t) => {
              this.removeListener('error', onerr)
              this.removeListener('end', onend)
              this.pause()
              e({ value: t, done: !!this[h] })
            }
            const onend = () => {
              this.removeListener('error', onerr)
              this.removeListener('data', ondata)
              e({ done: true })
            }
            const ondestroy = () => onerr(new Error('stream destroyed'))
            return new Promise((t, i) => {
              s = i
              e = t
              this.once(O, ondestroy)
              this.once('error', onerr)
              this.once('end', onend)
              this.once('data', ondata)
            })
          }
          return { next: next }
        }
        [T]() {
          const next = () => {
            const t = this.read()
            const e = t === null
            return { value: t, done: e }
          }
          return { next: next }
        }
        destroy(t) {
          if (this[O]) {
            if (t) this.emit('error', t)
            else this.emit(O)
            return this
          }
          this[O] = true
          this.buffer = new r()
          this[_] = 0
          if (typeof this.close === 'function' && !this[u]) this.close()
          if (t) this.emit('error', t)
          else this.emit(O)
          return this
        }
        static isStream(t) {
          return (
            !!t &&
            (t instanceof Minipass ||
              t instanceof n ||
              (t instanceof i &&
                (typeof t.pipe === 'function' ||
                  (typeof t.write === 'function' &&
                    typeof t.end === 'function'))))
          )
        }
      }
    },
    5540: (t, e, s) => {
      'use strict'
      const i =
        typeof process === 'object' && process
          ? process
          : { stdout: null, stderr: null }
      const n = s(2361)
      const r = s(2781)
      const o = s(1576)
      const h = o.StringDecoder
      const l = Symbol('EOF')
      const a = Symbol('maybeEmitEnd')
      const c = Symbol('emittedEnd')
      const u = Symbol('emittingEnd')
      const f = Symbol('emittedError')
      const d = Symbol('closed')
      const p = Symbol('read')
      const m = Symbol('flush')
      const y = Symbol('flushChunk')
      const b = Symbol('encoding')
      const w = Symbol('decoder')
      const E = Symbol('flowing')
      const _ = Symbol('paused')
      const S = Symbol('resume')
      const g = Symbol('buffer')
      const R = Symbol('pipes')
      const O = Symbol('bufferLength')
      const k = Symbol('bufferPush')
      const v = Symbol('bufferShift')
      const T = Symbol('objectMode')
      const L = Symbol('destroyed')
      const x = Symbol('error')
      const A = Symbol('emitData')
      const I = Symbol('emitEnd')
      const D = Symbol('emitEnd2')
      const N = Symbol('async')
      const B = Symbol('abort')
      const M = Symbol('aborted')
      const C = Symbol('signal')
      const defer = (t) => Promise.resolve().then(t)
      const P = global._MP_NO_ITERATOR_SYMBOLS_ !== '1'
      const F =
        (P && Symbol.asyncIterator) || Symbol('asyncIterator not implemented')
      const z = (P && Symbol.iterator) || Symbol('iterator not implemented')
      const isEndish = (t) => t === 'end' || t === 'finish' || t === 'prefinish'
      const isArrayBuffer = (t) =>
        t instanceof ArrayBuffer ||
        (typeof t === 'object' &&
          t.constructor &&
          t.constructor.name === 'ArrayBuffer' &&
          t.byteLength >= 0)
      const isArrayBufferView = (t) =>
        !Buffer.isBuffer(t) && ArrayBuffer.isView(t)
      class Pipe {
        constructor(t, e, s) {
          this.src = t
          this.dest = e
          this.opts = s
          this.ondrain = () => t[S]()
          e.on('drain', this.ondrain)
        }
        unpipe() {
          this.dest.removeListener('drain', this.ondrain)
        }
        proxyErrors() {}
        end() {
          this.unpipe()
          if (this.opts.end) this.dest.end()
        }
      }
      class PipeProxyErrors extends Pipe {
        unpipe() {
          this.src.removeListener('error', this.proxyErrors)
          super.unpipe()
        }
        constructor(t, e, s) {
          super(t, e, s)
          this.proxyErrors = (t) => e.emit('error', t)
          t.on('error', this.proxyErrors)
        }
      }
      class Minipass extends r {
        constructor(t) {
          super()
          this[E] = false
          this[_] = false
          this[R] = []
          this[g] = []
          this[T] = (t && t.objectMode) || false
          if (this[T]) this[b] = null
          else this[b] = (t && t.encoding) || null
          if (this[b] === 'buffer') this[b] = null
          this[N] = (t && !!t.async) || false
          this[w] = this[b] ? new h(this[b]) : null
          this[l] = false
          this[c] = false
          this[u] = false
          this[d] = false
          this[f] = null
          this.writable = true
          this.readable = true
          this[O] = 0
          this[L] = false
          if (t && t.debugExposeBuffer === true) {
            Object.defineProperty(this, 'buffer', { get: () => this[g] })
          }
          if (t && t.debugExposePipes === true) {
            Object.defineProperty(this, 'pipes', { get: () => this[R] })
          }
          this[C] = t && t.signal
          this[M] = false
          if (this[C]) {
            this[C].addEventListener('abort', () => this[B]())
            if (this[C].aborted) {
              this[B]()
            }
          }
        }
        get bufferLength() {
          return this[O]
        }
        get encoding() {
          return this[b]
        }
        set encoding(t) {
          if (this[T]) throw new Error('cannot set encoding in objectMode')
          if (
            this[b] &&
            t !== this[b] &&
            ((this[w] && this[w].lastNeed) || this[O])
          )
            throw new Error('cannot change encoding')
          if (this[b] !== t) {
            this[w] = t ? new h(t) : null
            if (this[g].length) this[g] = this[g].map((t) => this[w].write(t))
          }
          this[b] = t
        }
        setEncoding(t) {
          this.encoding = t
        }
        get objectMode() {
          return this[T]
        }
        set objectMode(t) {
          this[T] = this[T] || !!t
        }
        get ['async']() {
          return this[N]
        }
        set ['async'](t) {
          this[N] = this[N] || !!t
        }
        [B]() {
          this[M] = true
          this.emit('abort', this[C].reason)
          this.destroy(this[C].reason)
        }
        get aborted() {
          return this[M]
        }
        set aborted(t) {}
        write(t, e, s) {
          if (this[M]) return false
          if (this[l]) throw new Error('write after end')
          if (this[L]) {
            this.emit(
              'error',
              Object.assign(
                new Error('Cannot call write after a stream was destroyed'),
                { code: 'ERR_STREAM_DESTROYED' }
              )
            )
            return true
          }
          if (typeof e === 'function') (s = e), (e = 'utf8')
          if (!e) e = 'utf8'
          const i = this[N] ? defer : (t) => t()
          if (!this[T] && !Buffer.isBuffer(t)) {
            if (isArrayBufferView(t))
              t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)
            else if (isArrayBuffer(t)) t = Buffer.from(t)
            else if (typeof t !== 'string') this.objectMode = true
          }
          if (this[T]) {
            if (this.flowing && this[O] !== 0) this[m](true)
            if (this.flowing) this.emit('data', t)
            else this[k](t)
            if (this[O] !== 0) this.emit('readable')
            if (s) i(s)
            return this.flowing
          }
          if (!t.length) {
            if (this[O] !== 0) this.emit('readable')
            if (s) i(s)
            return this.flowing
          }
          if (typeof t === 'string' && !(e === this[b] && !this[w].lastNeed)) {
            t = Buffer.from(t, e)
          }
          if (Buffer.isBuffer(t) && this[b]) t = this[w].write(t)
          if (this.flowing && this[O] !== 0) this[m](true)
          if (this.flowing) this.emit('data', t)
          else this[k](t)
          if (this[O] !== 0) this.emit('readable')
          if (s) i(s)
          return this.flowing
        }
        read(t) {
          if (this[L]) return null
          if (this[O] === 0 || t === 0 || t > this[O]) {
            this[a]()
            return null
          }
          if (this[T]) t = null
          if (this[g].length > 1 && !this[T]) {
            if (this.encoding) this[g] = [this[g].join('')]
            else this[g] = [Buffer.concat(this[g], this[O])]
          }
          const e = this[p](t || null, this[g][0])
          this[a]()
          return e
        }
        [p](t, e) {
          if (t === e.length || t === null) this[v]()
          else {
            this[g][0] = e.slice(t)
            e = e.slice(0, t)
            this[O] -= t
          }
          this.emit('data', e)
          if (!this[g].length && !this[l]) this.emit('drain')
          return e
        }
        end(t, e, s) {
          if (typeof t === 'function') (s = t), (t = null)
          if (typeof e === 'function') (s = e), (e = 'utf8')
          if (t) this.write(t, e)
          if (s) this.once('end', s)
          this[l] = true
          this.writable = false
          if (this.flowing || !this[_]) this[a]()
          return this
        }
        [S]() {
          if (this[L]) return
          this[_] = false
          this[E] = true
          this.emit('resume')
          if (this[g].length) this[m]()
          else if (this[l]) this[a]()
          else this.emit('drain')
        }
        resume() {
          return this[S]()
        }
        pause() {
          this[E] = false
          this[_] = true
        }
        get destroyed() {
          return this[L]
        }
        get flowing() {
          return this[E]
        }
        get paused() {
          return this[_]
        }
        [k](t) {
          if (this[T]) this[O] += 1
          else this[O] += t.length
          this[g].push(t)
        }
        [v]() {
          if (this[T]) this[O] -= 1
          else this[O] -= this[g][0].length
          return this[g].shift()
        }
        [m](t) {
          do {} while (this[y](this[v]()) && this[g].length)
          if (!t && !this[g].length && !this[l]) this.emit('drain')
        }
        [y](t) {
          this.emit('data', t)
          return this.flowing
        }
        pipe(t, e) {
          if (this[L]) return
          const s = this[c]
          e = e || {}
          if (t === i.stdout || t === i.stderr) e.end = false
          else e.end = e.end !== false
          e.proxyErrors = !!e.proxyErrors
          if (s) {
            if (e.end) t.end()
          } else {
            this[R].push(
              !e.proxyErrors
                ? new Pipe(this, t, e)
                : new PipeProxyErrors(this, t, e)
            )
            if (this[N]) defer(() => this[S]())
            else this[S]()
          }
          return t
        }
        unpipe(t) {
          const e = this[R].find((e) => e.dest === t)
          if (e) {
            this[R].splice(this[R].indexOf(e), 1)
            e.unpipe()
          }
        }
        addListener(t, e) {
          return this.on(t, e)
        }
        on(t, e) {
          const s = super.on(t, e)
          if (t === 'data' && !this[R].length && !this.flowing) this[S]()
          else if (t === 'readable' && this[O] !== 0) super.emit('readable')
          else if (isEndish(t) && this[c]) {
            super.emit(t)
            this.removeAllListeners(t)
          } else if (t === 'error' && this[f]) {
            if (this[N]) defer(() => e.call(this, this[f]))
            else e.call(this, this[f])
          }
          return s
        }
        get emittedEnd() {
          return this[c]
        }
        [a]() {
          if (
            !this[u] &&
            !this[c] &&
            !this[L] &&
            this[g].length === 0 &&
            this[l]
          ) {
            this[u] = true
            this.emit('end')
            this.emit('prefinish')
            this.emit('finish')
            if (this[d]) this.emit('close')
            this[u] = false
          }
        }
        emit(t, e, ...s) {
          if (t !== 'error' && t !== 'close' && t !== L && this[L]) return
          else if (t === 'data') {
            return !this[T] && !e
              ? false
              : this[N]
              ? defer(() => this[A](e))
              : this[A](e)
          } else if (t === 'end') {
            return this[I]()
          } else if (t === 'close') {
            this[d] = true
            if (!this[c] && !this[L]) return
            const t = super.emit('close')
            this.removeAllListeners('close')
            return t
          } else if (t === 'error') {
            this[f] = e
            super.emit(x, e)
            const t =
              !this[C] || this.listeners('error').length
                ? super.emit('error', e)
                : false
            this[a]()
            return t
          } else if (t === 'resume') {
            const t = super.emit('resume')
            this[a]()
            return t
          } else if (t === 'finish' || t === 'prefinish') {
            const e = super.emit(t)
            this.removeAllListeners(t)
            return e
          }
          const i = super.emit(t, e, ...s)
          this[a]()
          return i
        }
        [A](t) {
          for (const e of this[R]) {
            if (e.dest.write(t) === false) this.pause()
          }
          const e = super.emit('data', t)
          this[a]()
          return e
        }
        [I]() {
          if (this[c]) return
          this[c] = true
          this.readable = false
          if (this[N]) defer(() => this[D]())
          else this[D]()
        }
        [D]() {
          if (this[w]) {
            const t = this[w].end()
            if (t) {
              for (const e of this[R]) {
                e.dest.write(t)
              }
              super.emit('data', t)
            }
          }
          for (const t of this[R]) {
            t.end()
          }
          const t = super.emit('end')
          this.removeAllListeners('end')
          return t
        }
        collect() {
          const t = []
          if (!this[T]) t.dataLength = 0
          const e = this.promise()
          this.on('data', (e) => {
            t.push(e)
            if (!this[T]) t.dataLength += e.length
          })
          return e.then(() => t)
        }
        concat() {
          return this[T]
            ? Promise.reject(new Error('cannot concat in objectMode'))
            : this.collect().then((t) =>
                this[T]
                  ? Promise.reject(new Error('cannot concat in objectMode'))
                  : this[b]
                  ? t.join('')
                  : Buffer.concat(t, t.dataLength)
              )
        }
        promise() {
          return new Promise((t, e) => {
            this.on(L, () => e(new Error('stream destroyed')))
            this.on('error', (t) => e(t))
            this.on('end', () => t())
          })
        }
        [F]() {
          let t = false
          const stop = () => {
            this.pause()
            t = true
            return Promise.resolve({ done: true })
          }
          const next = () => {
            if (t) return stop()
            const e = this.read()
            if (e !== null) return Promise.resolve({ done: false, value: e })
            if (this[l]) return stop()
            let s = null
            let i = null
            const onerr = (t) => {
              this.removeListener('data', ondata)
              this.removeListener('end', onend)
              this.removeListener(L, ondestroy)
              stop()
              i(t)
            }
            const ondata = (t) => {
              this.removeListener('error', onerr)
              this.removeListener('end', onend)
              this.removeListener(L, ondestroy)
              this.pause()
              s({ value: t, done: !!this[l] })
            }
            const onend = () => {
              this.removeListener('error', onerr)
              this.removeListener('data', ondata)
              this.removeListener(L, ondestroy)
              stop()
              s({ done: true })
            }
            const ondestroy = () => onerr(new Error('stream destroyed'))
            return new Promise((t, e) => {
              i = e
              s = t
              this.once(L, ondestroy)
              this.once('error', onerr)
              this.once('end', onend)
              this.once('data', ondata)
            })
          }
          return {
            next: next,
            throw: stop,
            return: stop,
            [F]() {
              return this
            },
          }
        }
        [z]() {
          let t = false
          const stop = () => {
            this.pause()
            this.removeListener(x, stop)
            this.removeListener(L, stop)
            this.removeListener('end', stop)
            t = true
            return { done: true }
          }
          const next = () => {
            if (t) return stop()
            const e = this.read()
            return e === null ? stop() : { value: e }
          }
          this.once('end', stop)
          this.once(x, stop)
          this.once(L, stop)
          return {
            next: next,
            throw: stop,
            return: stop,
            [z]() {
              return this
            },
          }
        }
        destroy(t) {
          if (this[L]) {
            if (t) this.emit('error', t)
            else this.emit(L)
            return this
          }
          this[L] = true
          this[g].length = 0
          this[O] = 0
          if (typeof this.close === 'function' && !this[d]) this.close()
          if (t) this.emit('error', t)
          else this.emit(L)
          return this
        }
        static isStream(t) {
          return (
            !!t &&
            (t instanceof Minipass ||
              t instanceof r ||
              (t instanceof n &&
                (typeof t.pipe === 'function' ||
                  (typeof t.write === 'function' &&
                    typeof t.end === 'function'))))
          )
        }
      }
      e.Minipass = Minipass
    },
    5154: (t, e, s) => {
      const i = s(9796).constants || { ZLIB_VERNUM: 4736 }
      t.exports = Object.freeze(
        Object.assign(
          Object.create(null),
          {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_VERSION_ERROR: -6,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            DEFLATE: 1,
            INFLATE: 2,
            GZIP: 3,
            GUNZIP: 4,
            DEFLATERAW: 5,
            INFLATERAW: 6,
            UNZIP: 7,
            BROTLI_DECODE: 8,
            BROTLI_ENCODE: 9,
            Z_MIN_WINDOWBITS: 8,
            Z_MAX_WINDOWBITS: 15,
            Z_DEFAULT_WINDOWBITS: 15,
            Z_MIN_CHUNK: 64,
            Z_MAX_CHUNK: Infinity,
            Z_DEFAULT_CHUNK: 16384,
            Z_MIN_MEMLEVEL: 1,
            Z_MAX_MEMLEVEL: 9,
            Z_DEFAULT_MEMLEVEL: 8,
            Z_MIN_LEVEL: -1,
            Z_MAX_LEVEL: 9,
            Z_DEFAULT_LEVEL: -1,
            BROTLI_OPERATION_PROCESS: 0,
            BROTLI_OPERATION_FLUSH: 1,
            BROTLI_OPERATION_FINISH: 2,
            BROTLI_OPERATION_EMIT_METADATA: 3,
            BROTLI_MODE_GENERIC: 0,
            BROTLI_MODE_TEXT: 1,
            BROTLI_MODE_FONT: 2,
            BROTLI_DEFAULT_MODE: 0,
            BROTLI_MIN_QUALITY: 0,
            BROTLI_MAX_QUALITY: 11,
            BROTLI_DEFAULT_QUALITY: 11,
            BROTLI_MIN_WINDOW_BITS: 10,
            BROTLI_MAX_WINDOW_BITS: 24,
            BROTLI_LARGE_MAX_WINDOW_BITS: 30,
            BROTLI_DEFAULT_WINDOW: 22,
            BROTLI_MIN_INPUT_BLOCK_BITS: 16,
            BROTLI_MAX_INPUT_BLOCK_BITS: 24,
            BROTLI_PARAM_MODE: 0,
            BROTLI_PARAM_QUALITY: 1,
            BROTLI_PARAM_LGWIN: 2,
            BROTLI_PARAM_LGBLOCK: 3,
            BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
            BROTLI_PARAM_SIZE_HINT: 5,
            BROTLI_PARAM_LARGE_WINDOW: 6,
            BROTLI_PARAM_NPOSTFIX: 7,
            BROTLI_PARAM_NDIRECT: 8,
            BROTLI_DECODER_RESULT_ERROR: 0,
            BROTLI_DECODER_RESULT_SUCCESS: 1,
            BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
            BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
            BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
            BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
            BROTLI_DECODER_NO_ERROR: 0,
            BROTLI_DECODER_SUCCESS: 1,
            BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
            BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
            BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
            BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
            BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
            BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
            BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
            BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
            BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
            BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
            BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
            BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
            BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
            BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
            BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
            BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
            BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
            BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
            BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
            BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
            BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
            BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
            BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
            BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
            BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
            BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
            BROTLI_DECODER_ERROR_UNREACHABLE: -31,
          },
          i
        )
      )
    },
    7750: (t, e, s) => {
      'use strict'
      const i = s(9491)
      const n = s(4300).Buffer
      const r = s(9796)
      const o = (e.constants = s(5154))
      const h = s(7413)
      const l = n.concat
      const a = Symbol('_superWrite')
      class ZlibError extends Error {
        constructor(t) {
          super('zlib: ' + t.message)
          this.code = t.code
          this.errno = t.errno
          if (!this.code) this.code = 'ZLIB_ERROR'
          this.message = 'zlib: ' + t.message
          Error.captureStackTrace(this, this.constructor)
        }
        get name() {
          return 'ZlibError'
        }
      }
      const c = Symbol('opts')
      const u = Symbol('flushFlag')
      const f = Symbol('finishFlushFlag')
      const d = Symbol('fullFlushFlag')
      const p = Symbol('handle')
      const m = Symbol('onError')
      const y = Symbol('sawError')
      const b = Symbol('level')
      const w = Symbol('strategy')
      const E = Symbol('ended')
      const _ = Symbol('_defaultFullFlush')
      class ZlibBase extends h {
        constructor(t, e) {
          if (!t || typeof t !== 'object')
            throw new TypeError('invalid options for ZlibBase constructor')
          super(t)
          this[y] = false
          this[E] = false
          this[c] = t
          this[u] = t.flush
          this[f] = t.finishFlush
          try {
            this[p] = new r[e](t)
          } catch (t) {
            throw new ZlibError(t)
          }
          this[m] = (t) => {
            if (this[y]) return
            this[y] = true
            this.close()
            this.emit('error', t)
          }
          this[p].on('error', (t) => this[m](new ZlibError(t)))
          this.once('end', () => this.close)
        }
        close() {
          if (this[p]) {
            this[p].close()
            this[p] = null
            this.emit('close')
          }
        }
        reset() {
          if (!this[y]) {
            i(this[p], 'zlib binding closed')
            return this[p].reset()
          }
        }
        flush(t) {
          if (this.ended) return
          if (typeof t !== 'number') t = this[d]
          this.write(Object.assign(n.alloc(0), { [u]: t }))
        }
        end(t, e, s) {
          if (t) this.write(t, e)
          this.flush(this[f])
          this[E] = true
          return super.end(null, null, s)
        }
        get ended() {
          return this[E]
        }
        write(t, e, s) {
          if (typeof e === 'function') (s = e), (e = 'utf8')
          if (typeof t === 'string') t = n.from(t, e)
          if (this[y]) return
          i(this[p], 'zlib binding closed')
          const r = this[p]._handle
          const o = r.close
          r.close = () => {}
          const h = this[p].close
          this[p].close = () => {}
          n.concat = (t) => t
          let c
          try {
            const e = typeof t[u] === 'number' ? t[u] : this[u]
            c = this[p]._processChunk(t, e)
            n.concat = l
          } catch (t) {
            n.concat = l
            this[m](new ZlibError(t))
          } finally {
            if (this[p]) {
              this[p]._handle = r
              r.close = o
              this[p].close = h
              this[p].removeAllListeners('error')
            }
          }
          if (this[p]) this[p].on('error', (t) => this[m](new ZlibError(t)))
          let f
          if (c) {
            if (Array.isArray(c) && c.length > 0) {
              f = this[a](n.from(c[0]))
              for (let t = 1; t < c.length; t++) {
                f = this[a](c[t])
              }
            } else {
              f = this[a](n.from(c))
            }
          }
          if (s) s()
          return f
        }
        [a](t) {
          return super.write(t)
        }
      }
      class Zlib extends ZlibBase {
        constructor(t, e) {
          t = t || {}
          t.flush = t.flush || o.Z_NO_FLUSH
          t.finishFlush = t.finishFlush || o.Z_FINISH
          super(t, e)
          this[d] = o.Z_FULL_FLUSH
          this[b] = t.level
          this[w] = t.strategy
        }
        params(t, e) {
          if (this[y]) return
          if (!this[p])
            throw new Error('cannot switch params when binding is closed')
          if (!this[p].params)
            throw new Error('not supported in this implementation')
          if (this[b] !== t || this[w] !== e) {
            this.flush(o.Z_SYNC_FLUSH)
            i(this[p], 'zlib binding closed')
            const s = this[p].flush
            this[p].flush = (t, e) => {
              this.flush(t)
              e()
            }
            try {
              this[p].params(t, e)
            } finally {
              this[p].flush = s
            }
            if (this[p]) {
              this[b] = t
              this[w] = e
            }
          }
        }
      }
      class Deflate extends Zlib {
        constructor(t) {
          super(t, 'Deflate')
        }
      }
      class Inflate extends Zlib {
        constructor(t) {
          super(t, 'Inflate')
        }
      }
      const S = Symbol('_portable')
      class Gzip extends Zlib {
        constructor(t) {
          super(t, 'Gzip')
          this[S] = t && !!t.portable
        }
        [a](t) {
          if (!this[S]) return super[a](t)
          this[S] = false
          t[9] = 255
          return super[a](t)
        }
      }
      class Gunzip extends Zlib {
        constructor(t) {
          super(t, 'Gunzip')
        }
      }
      class DeflateRaw extends Zlib {
        constructor(t) {
          super(t, 'DeflateRaw')
        }
      }
      class InflateRaw extends Zlib {
        constructor(t) {
          super(t, 'InflateRaw')
        }
      }
      class Unzip extends Zlib {
        constructor(t) {
          super(t, 'Unzip')
        }
      }
      class Brotli extends ZlibBase {
        constructor(t, e) {
          t = t || {}
          t.flush = t.flush || o.BROTLI_OPERATION_PROCESS
          t.finishFlush = t.finishFlush || o.BROTLI_OPERATION_FINISH
          super(t, e)
          this[d] = o.BROTLI_OPERATION_FLUSH
        }
      }
      class BrotliCompress extends Brotli {
        constructor(t) {
          super(t, 'BrotliCompress')
        }
      }
      class BrotliDecompress extends Brotli {
        constructor(t) {
          super(t, 'BrotliDecompress')
        }
      }
      e.Deflate = Deflate
      e.Inflate = Inflate
      e.Gzip = Gzip
      e.Gunzip = Gunzip
      e.DeflateRaw = DeflateRaw
      e.InflateRaw = InflateRaw
      e.Unzip = Unzip
      if (typeof r.BrotliCompress === 'function') {
        e.BrotliCompress = BrotliCompress
        e.BrotliDecompress = BrotliDecompress
      } else {
        e.BrotliCompress = e.BrotliDecompress = class {
          constructor() {
            throw new Error(
              'Brotli is not supported in this version of Node.js'
            )
          }
        }
      }
    },
    9806: (t, e, s) => {
      const i = s(2288)
      const n = s(7637)
      const { mkdirpNative: r, mkdirpNativeSync: o } = s(3713)
      const { mkdirpManual: h, mkdirpManualSync: l } = s(2561)
      const { useNative: a, useNativeSync: c } = s(7449)
      const mkdirp = (t, e) => {
        t = n(t)
        e = i(e)
        return a(e) ? r(t, e) : h(t, e)
      }
      const mkdirpSync = (t, e) => {
        t = n(t)
        e = i(e)
        return c(e) ? o(t, e) : l(t, e)
      }
      mkdirp.sync = mkdirpSync
      mkdirp.native = (t, e) => r(n(t), i(e))
      mkdirp.manual = (t, e) => h(n(t), i(e))
      mkdirp.nativeSync = (t, e) => o(n(t), i(e))
      mkdirp.manualSync = (t, e) => l(n(t), i(e))
      t.exports = mkdirp
    },
    5509: (t, e, s) => {
      const { dirname: i } = s(1017)
      const findMade = (t, e, s = undefined) => {
        if (s === e) return Promise.resolve()
        return t.statAsync(e).then(
          (t) => (t.isDirectory() ? s : undefined),
          (s) => (s.code === 'ENOENT' ? findMade(t, i(e), e) : undefined)
        )
      }
      const findMadeSync = (t, e, s = undefined) => {
        if (s === e) return undefined
        try {
          return t.statSync(e).isDirectory() ? s : undefined
        } catch (s) {
          return s.code === 'ENOENT' ? findMadeSync(t, i(e), e) : undefined
        }
      }
      t.exports = { findMade: findMade, findMadeSync: findMadeSync }
    },
    2561: (t, e, s) => {
      const { dirname: i } = s(1017)
      const mkdirpManual = (t, e, s) => {
        e.recursive = false
        const n = i(t)
        if (n === t) {
          return e.mkdirAsync(t, e).catch((t) => {
            if (t.code !== 'EISDIR') throw t
          })
        }
        return e.mkdirAsync(t, e).then(
          () => s || t,
          (i) => {
            if (i.code === 'ENOENT')
              return mkdirpManual(n, e).then((s) => mkdirpManual(t, e, s))
            if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i
            return e.statAsync(t).then(
              (t) => {
                if (t.isDirectory()) return s
                else throw i
              },
              () => {
                throw i
              }
            )
          }
        )
      }
      const mkdirpManualSync = (t, e, s) => {
        const n = i(t)
        e.recursive = false
        if (n === t) {
          try {
            return e.mkdirSync(t, e)
          } catch (t) {
            if (t.code !== 'EISDIR') throw t
            else return
          }
        }
        try {
          e.mkdirSync(t, e)
          return s || t
        } catch (i) {
          if (i.code === 'ENOENT')
            return mkdirpManualSync(t, e, mkdirpManualSync(n, e, s))
          if (i.code !== 'EEXIST' && i.code !== 'EROFS') throw i
          try {
            if (!e.statSync(t).isDirectory()) throw i
          } catch (t) {
            throw i
          }
        }
      }
      t.exports = {
        mkdirpManual: mkdirpManual,
        mkdirpManualSync: mkdirpManualSync,
      }
    },
    3713: (t, e, s) => {
      const { dirname: i } = s(1017)
      const { findMade: n, findMadeSync: r } = s(5509)
      const { mkdirpManual: o, mkdirpManualSync: h } = s(2561)
      const mkdirpNative = (t, e) => {
        e.recursive = true
        const s = i(t)
        if (s === t) return e.mkdirAsync(t, e)
        return n(e, t).then((s) =>
          e
            .mkdirAsync(t, e)
            .then(() => s)
            .catch((s) => {
              if (s.code === 'ENOENT') return o(t, e)
              else throw s
            })
        )
      }
      const mkdirpNativeSync = (t, e) => {
        e.recursive = true
        const s = i(t)
        if (s === t) return e.mkdirSync(t, e)
        const n = r(e, t)
        try {
          e.mkdirSync(t, e)
          return n
        } catch (s) {
          if (s.code === 'ENOENT') return h(t, e)
          else throw s
        }
      }
      t.exports = {
        mkdirpNative: mkdirpNative,
        mkdirpNativeSync: mkdirpNativeSync,
      }
    },
    2288: (t, e, s) => {
      const { promisify: i } = s(3837)
      const n = s(7147)
      const optsArg = (t) => {
        if (!t) t = { mode: 511, fs: n }
        else if (typeof t === 'object') t = { mode: 511, fs: n, ...t }
        else if (typeof t === 'number') t = { mode: t, fs: n }
        else if (typeof t === 'string') t = { mode: parseInt(t, 8), fs: n }
        else throw new TypeError('invalid options argument')
        t.mkdir = t.mkdir || t.fs.mkdir || n.mkdir
        t.mkdirAsync = i(t.mkdir)
        t.stat = t.stat || t.fs.stat || n.stat
        t.statAsync = i(t.stat)
        t.statSync = t.statSync || t.fs.statSync || n.statSync
        t.mkdirSync = t.mkdirSync || t.fs.mkdirSync || n.mkdirSync
        return t
      }
      t.exports = optsArg
    },
    7637: (t, e, s) => {
      const i = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform
      const { resolve: n, parse: r } = s(1017)
      const pathArg = (t) => {
        if (/\0/.test(t)) {
          throw Object.assign(
            new TypeError('path must be a string without null bytes'),
            { path: t, code: 'ERR_INVALID_ARG_VALUE' }
          )
        }
        t = n(t)
        if (i === 'win32') {
          const e = /[*|"<>?:]/
          const { root: s } = r(t)
          if (e.test(t.substr(s.length))) {
            throw Object.assign(new Error('Illegal characters in path.'), {
              path: t,
              code: 'EINVAL',
            })
          }
        }
        return t
      }
      t.exports = pathArg
    },
    7449: (t, e, s) => {
      const i = s(7147)
      const n = process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version
      const r = n.replace(/^v/, '').split('.')
      const o = +r[0] > 10 || (+r[0] === 10 && +r[1] >= 12)
      const h = !o ? () => false : (t) => t.mkdir === i.mkdir
      const l = !o ? () => false : (t) => t.mkdirSync === i.mkdirSync
      t.exports = { useNative: h, useNativeSync: l }
    },
    7585: (t, e, s) => {
      'use strict'
      const i = s(3831)
      const n = s(7301)
      const r = s(644)
      const o = s(4975)
      const h = s(1017)
      t.exports = (t, e, s) => {
        if (typeof e === 'function') {
          s = e
        }
        if (Array.isArray(t)) {
          ;(e = t), (t = {})
        }
        if (!e || !Array.isArray(e) || !e.length) {
          throw new TypeError('no files or directories specified')
        }
        e = Array.from(e)
        const n = i(t)
        if (n.sync && typeof s === 'function') {
          throw new TypeError('callback not supported for sync tar functions')
        }
        if (!n.file && typeof s === 'function') {
          throw new TypeError('callback only supported with file option')
        }
        return n.file && n.sync
          ? createFileSync(n, e)
          : n.file
          ? createFile(n, e, s)
          : n.sync
          ? createSync(n, e)
          : create(n, e)
      }
      const createFileSync = (t, e) => {
        const s = new n.Sync(t)
        const i = new r.WriteStreamSync(t.file, { mode: t.mode || 438 })
        s.pipe(i)
        addFilesSync(s, e)
      }
      const createFile = (t, e, s) => {
        const i = new n(t)
        const o = new r.WriteStream(t.file, { mode: t.mode || 438 })
        i.pipe(o)
        const h = new Promise((t, e) => {
          o.on('error', e)
          o.on('close', t)
          i.on('error', e)
        })
        addFilesAsync(i, e)
        return s ? h.then(s, s) : h
      }
      const addFilesSync = (t, e) => {
        e.forEach((e) => {
          if (e.charAt(0) === '@') {
            o({
              file: h.resolve(t.cwd, e.slice(1)),
              sync: true,
              noResume: true,
              onentry: (e) => t.add(e),
            })
          } else {
            t.add(e)
          }
        })
        t.end()
      }
      const addFilesAsync = (t, e) => {
        while (e.length) {
          const s = e.shift()
          if (s.charAt(0) === '@') {
            return o({
              file: h.resolve(t.cwd, s.slice(1)),
              noResume: true,
              onentry: (e) => t.add(e),
            }).then((s) => addFilesAsync(t, e))
          } else {
            t.add(s)
          }
        }
        t.end()
      }
      const createSync = (t, e) => {
        const s = new n.Sync(t)
        addFilesSync(s, e)
        return s
      }
      const create = (t, e) => {
        const s = new n(t)
        addFilesAsync(s, e)
        return s
      }
    },
    9985: (t, e, s) => {
      'use strict'
      const i = s(3831)
      const n = s(5951)
      const r = s(7147)
      const o = s(644)
      const h = s(1017)
      const l = s(2517)
      t.exports = (t, e, s) => {
        if (typeof t === 'function') {
          ;(s = t), (e = null), (t = {})
        } else if (Array.isArray(t)) {
          ;(e = t), (t = {})
        }
        if (typeof e === 'function') {
          ;(s = e), (e = null)
        }
        if (!e) {
          e = []
        } else {
          e = Array.from(e)
        }
        const n = i(t)
        if (n.sync && typeof s === 'function') {
          throw new TypeError('callback not supported for sync tar functions')
        }
        if (!n.file && typeof s === 'function') {
          throw new TypeError('callback only supported with file option')
        }
        if (e.length) {
          filesFilter(n, e)
        }
        return n.file && n.sync
          ? extractFileSync(n)
          : n.file
          ? extractFile(n, s)
          : n.sync
          ? extractSync(n)
          : extract(n)
      }
      const filesFilter = (t, e) => {
        const s = new Map(e.map((t) => [l(t), true]))
        const i = t.filter
        const mapHas = (t, e) => {
          const i = e || h.parse(t).root || '.'
          const n =
            t === i ? false : s.has(t) ? s.get(t) : mapHas(h.dirname(t), i)
          s.set(t, n)
          return n
        }
        t.filter = i ? (t, e) => i(t, e) && mapHas(l(t)) : (t) => mapHas(l(t))
      }
      const extractFileSync = (t) => {
        const e = new n.Sync(t)
        const s = t.file
        const i = r.statSync(s)
        const h = t.maxReadSize || 16 * 1024 * 1024
        const l = new o.ReadStreamSync(s, { readSize: h, size: i.size })
        l.pipe(e)
      }
      const extractFile = (t, e) => {
        const s = new n(t)
        const i = t.maxReadSize || 16 * 1024 * 1024
        const h = t.file
        const l = new Promise((t, e) => {
          s.on('error', e)
          s.on('close', t)
          r.stat(h, (t, n) => {
            if (t) {
              e(t)
            } else {
              const t = new o.ReadStream(h, { readSize: i, size: n.size })
              t.on('error', e)
              t.pipe(s)
            }
          })
        })
        return e ? l.then(e, e) : l
      }
      const extractSync = (t) => new n.Sync(t)
      const extract = (t) => new n(t)
    },
    9262: (t, e, s) => {
      const i = process.env.__FAKE_PLATFORM__ || process.platform
      const n = i === 'win32'
      const r = global.__FAKE_TESTING_FS__ || s(7147)
      const {
        O_CREAT: o,
        O_TRUNC: h,
        O_WRONLY: l,
        UV_FS_O_FILEMAP: a = 0,
      } = r.constants
      const c = n && !!a
      const u = 512 * 1024
      const f = a | h | o | l
      t.exports = !c ? () => 'w' : (t) => (t < u ? f : 'w')
    },
    1703: (t, e, s) => {
      'use strict'
      const i = s(1046)
      const n = s(1017).posix
      const r = s(2933)
      const o = Symbol('slurp')
      const h = Symbol('type')
      class Header {
        constructor(t, e, s, i) {
          this.cksumValid = false
          this.needPax = false
          this.nullBlock = false
          this.block = null
          this.path = null
          this.mode = null
          this.uid = null
          this.gid = null
          this.size = null
          this.mtime = null
          this.cksum = null
          this[h] = '0'
          this.linkpath = null
          this.uname = null
          this.gname = null
          this.devmaj = 0
          this.devmin = 0
          this.atime = null
          this.ctime = null
          if (Buffer.isBuffer(t)) {
            this.decode(t, e || 0, s, i)
          } else if (t) {
            this.set(t)
          }
        }
        decode(t, e, s, i) {
          if (!e) {
            e = 0
          }
          if (!t || !(t.length >= e + 512)) {
            throw new Error('need 512 bytes for header')
          }
          this.path = decString(t, e, 100)
          this.mode = decNumber(t, e + 100, 8)
          this.uid = decNumber(t, e + 108, 8)
          this.gid = decNumber(t, e + 116, 8)
          this.size = decNumber(t, e + 124, 12)
          this.mtime = decDate(t, e + 136, 12)
          this.cksum = decNumber(t, e + 148, 12)
          this[o](s)
          this[o](i, true)
          this[h] = decString(t, e + 156, 1)
          if (this[h] === '') {
            this[h] = '0'
          }
          if (this[h] === '0' && this.path.slice(-1) === '/') {
            this[h] = '5'
          }
          if (this[h] === '5') {
            this.size = 0
          }
          this.linkpath = decString(t, e + 157, 100)
          if (t.slice(e + 257, e + 265).toString() === 'ustar\x0000') {
            this.uname = decString(t, e + 265, 32)
            this.gname = decString(t, e + 297, 32)
            this.devmaj = decNumber(t, e + 329, 8)
            this.devmin = decNumber(t, e + 337, 8)
            if (t[e + 475] !== 0) {
              const s = decString(t, e + 345, 155)
              this.path = s + '/' + this.path
            } else {
              const s = decString(t, e + 345, 130)
              if (s) {
                this.path = s + '/' + this.path
              }
              this.atime = decDate(t, e + 476, 12)
              this.ctime = decDate(t, e + 488, 12)
            }
          }
          let n = 8 * 32
          for (let s = e; s < e + 148; s++) {
            n += t[s]
          }
          for (let s = e + 156; s < e + 512; s++) {
            n += t[s]
          }
          this.cksumValid = n === this.cksum
          if (this.cksum === null && n === 8 * 32) {
            this.nullBlock = true
          }
        }
        [o](t, e) {
          for (const s in t) {
            if (t[s] !== null && t[s] !== undefined && !(e && s === 'path')) {
              this[s] = t[s]
            }
          }
        }
        encode(t, e) {
          if (!t) {
            t = this.block = Buffer.alloc(512)
            e = 0
          }
          if (!e) {
            e = 0
          }
          if (!(t.length >= e + 512)) {
            throw new Error('need 512 bytes for header')
          }
          const s = this.ctime || this.atime ? 130 : 155
          const i = splitPrefix(this.path || '', s)
          const n = i[0]
          const r = i[1]
          this.needPax = i[2]
          this.needPax = encString(t, e, 100, n) || this.needPax
          this.needPax = encNumber(t, e + 100, 8, this.mode) || this.needPax
          this.needPax = encNumber(t, e + 108, 8, this.uid) || this.needPax
          this.needPax = encNumber(t, e + 116, 8, this.gid) || this.needPax
          this.needPax = encNumber(t, e + 124, 12, this.size) || this.needPax
          this.needPax = encDate(t, e + 136, 12, this.mtime) || this.needPax
          t[e + 156] = this[h].charCodeAt(0)
          this.needPax =
            encString(t, e + 157, 100, this.linkpath) || this.needPax
          t.write('ustar\x0000', e + 257, 8)
          this.needPax = encString(t, e + 265, 32, this.uname) || this.needPax
          this.needPax = encString(t, e + 297, 32, this.gname) || this.needPax
          this.needPax = encNumber(t, e + 329, 8, this.devmaj) || this.needPax
          this.needPax = encNumber(t, e + 337, 8, this.devmin) || this.needPax
          this.needPax = encString(t, e + 345, s, r) || this.needPax
          if (t[e + 475] !== 0) {
            this.needPax = encString(t, e + 345, 155, r) || this.needPax
          } else {
            this.needPax = encString(t, e + 345, 130, r) || this.needPax
            this.needPax = encDate(t, e + 476, 12, this.atime) || this.needPax
            this.needPax = encDate(t, e + 488, 12, this.ctime) || this.needPax
          }
          let o = 8 * 32
          for (let s = e; s < e + 148; s++) {
            o += t[s]
          }
          for (let s = e + 156; s < e + 512; s++) {
            o += t[s]
          }
          this.cksum = o
          encNumber(t, e + 148, 8, this.cksum)
          this.cksumValid = true
          return this.needPax
        }
        set(t) {
          for (const e in t) {
            if (t[e] !== null && t[e] !== undefined) {
              this[e] = t[e]
            }
          }
        }
        get type() {
          return i.name.get(this[h]) || this[h]
        }
        get typeKey() {
          return this[h]
        }
        set type(t) {
          if (i.code.has(t)) {
            this[h] = i.code.get(t)
          } else {
            this[h] = t
          }
        }
      }
      const splitPrefix = (t, e) => {
        const s = 100
        let i = t
        let r = ''
        let o
        const h = n.parse(t).root || '.'
        if (Buffer.byteLength(i) < s) {
          o = [i, r, false]
        } else {
          r = n.dirname(i)
          i = n.basename(i)
          do {
            if (Buffer.byteLength(i) <= s && Buffer.byteLength(r) <= e) {
              o = [i, r, false]
            } else if (Buffer.byteLength(i) > s && Buffer.byteLength(r) <= e) {
              o = [i.slice(0, s - 1), r, true]
            } else {
              i = n.join(n.basename(r), i)
              r = n.dirname(r)
            }
          } while (r !== h && !o)
          if (!o) {
            o = [t.slice(0, s - 1), '', true]
          }
        }
        return o
      }
      const decString = (t, e, s) =>
        t
          .slice(e, e + s)
          .toString('utf8')
          .replace(/\0.*/, '')
      const decDate = (t, e, s) => numToDate(decNumber(t, e, s))
      const numToDate = (t) => (t === null ? null : new Date(t * 1e3))
      const decNumber = (t, e, s) =>
        t[e] & 128 ? r.parse(t.slice(e, e + s)) : decSmallNumber(t, e, s)
      const nanNull = (t) => (isNaN(t) ? null : t)
      const decSmallNumber = (t, e, s) =>
        nanNull(
          parseInt(
            t
              .slice(e, e + s)
              .toString('utf8')
              .replace(/\0.*$/, '')
              .trim(),
            8
          )
        )
      const l = { 12: 8589934591, 8: 2097151 }
      const encNumber = (t, e, s, i) =>
        i === null
          ? false
          : i > l[s] || i < 0
          ? (r.encode(i, t.slice(e, e + s)), true)
          : (encSmallNumber(t, e, s, i), false)
      const encSmallNumber = (t, e, s, i) =>
        t.write(octalString(i, s), e, s, 'ascii')
      const octalString = (t, e) => padOctal(Math.floor(t).toString(8), e)
      const padOctal = (t, e) =>
        (t.length === e - 1
          ? t
          : new Array(e - t.length - 1).join('0') + t + ' ') + '\0'
      const encDate = (t, e, s, i) =>
        i === null ? false : encNumber(t, e, s, i.getTime() / 1e3)
      const a = new Array(156).join('\0')
      const encString = (t, e, s, i) =>
        i === null
          ? false
          : (t.write(i + a, e, s, 'utf8'),
            i.length !== Buffer.byteLength(i) || i.length > s)
      t.exports = Header
    },
    3831: (t) => {
      'use strict'
      const e = new Map([
        ['C', 'cwd'],
        ['f', 'file'],
        ['z', 'gzip'],
        ['P', 'preservePaths'],
        ['U', 'unlink'],
        ['strip-components', 'strip'],
        ['stripComponents', 'strip'],
        ['keep-newer', 'newer'],
        ['keepNewer', 'newer'],
        ['keep-newer-files', 'newer'],
        ['keepNewerFiles', 'newer'],
        ['k', 'keep'],
        ['keep-existing', 'keep'],
        ['keepExisting', 'keep'],
        ['m', 'noMtime'],
        ['no-mtime', 'noMtime'],
        ['p', 'preserveOwner'],
        ['L', 'follow'],
        ['h', 'follow'],
      ])
      t.exports = (t) =>
        t
          ? Object.keys(t)
              .map((s) => [e.has(s) ? e.get(s) : s, t[s]])
              .reduce((t, e) => ((t[e[0]] = e[1]), t), Object.create(null))
          : {}
    },
    2933: (t) => {
      'use strict'
      const encode = (t, e) => {
        if (!Number.isSafeInteger(t)) {
          throw Error(
            'cannot encode number outside of javascript safe integer range'
          )
        } else if (t < 0) {
          encodeNegative(t, e)
        } else {
          encodePositive(t, e)
        }
        return e
      }
      const encodePositive = (t, e) => {
        e[0] = 128
        for (var s = e.length; s > 1; s--) {
          e[s - 1] = t & 255
          t = Math.floor(t / 256)
        }
      }
      const encodeNegative = (t, e) => {
        e[0] = 255
        var s = false
        t = t * -1
        for (var i = e.length; i > 1; i--) {
          var n = t & 255
          t = Math.floor(t / 256)
          if (s) {
            e[i - 1] = onesComp(n)
          } else if (n === 0) {
            e[i - 1] = 0
          } else {
            s = true
            e[i - 1] = twosComp(n)
          }
        }
      }
      const parse = (t) => {
        const e = t[0]
        const s =
          e === 128 ? pos(t.slice(1, t.length)) : e === 255 ? twos(t) : null
        if (s === null) {
          throw Error('invalid base256 encoding')
        }
        if (!Number.isSafeInteger(s)) {
          throw Error('parsed number outside of javascript safe integer range')
        }
        return s
      }
      const twos = (t) => {
        var e = t.length
        var s = 0
        var i = false
        for (var n = e - 1; n > -1; n--) {
          var r = t[n]
          var o
          if (i) {
            o = onesComp(r)
          } else if (r === 0) {
            o = r
          } else {
            i = true
            o = twosComp(r)
          }
          if (o !== 0) {
            s -= o * Math.pow(256, e - n - 1)
          }
        }
        return s
      }
      const pos = (t) => {
        var e = t.length
        var s = 0
        for (var i = e - 1; i > -1; i--) {
          var n = t[i]
          if (n !== 0) {
            s += n * Math.pow(256, e - i - 1)
          }
        }
        return s
      }
      const onesComp = (t) => (255 ^ t) & 255
      const twosComp = (t) => ((255 ^ t) + 1) & 255
      t.exports = { encode: encode, parse: parse }
    },
    4975: (t, e, s) => {
      'use strict'
      const i = s(3831)
      const n = s(5222)
      const r = s(7147)
      const o = s(644)
      const h = s(1017)
      const l = s(2517)
      t.exports = (t, e, s) => {
        if (typeof t === 'function') {
          ;(s = t), (e = null), (t = {})
        } else if (Array.isArray(t)) {
          ;(e = t), (t = {})
        }
        if (typeof e === 'function') {
          ;(s = e), (e = null)
        }
        if (!e) {
          e = []
        } else {
          e = Array.from(e)
        }
        const n = i(t)
        if (n.sync && typeof s === 'function') {
          throw new TypeError('callback not supported for sync tar functions')
        }
        if (!n.file && typeof s === 'function') {
          throw new TypeError('callback only supported with file option')
        }
        if (e.length) {
          filesFilter(n, e)
        }
        if (!n.noResume) {
          onentryFunction(n)
        }
        return n.file && n.sync
          ? listFileSync(n)
          : n.file
          ? listFile(n, s)
          : list(n)
      }
      const onentryFunction = (t) => {
        const e = t.onentry
        t.onentry = e
          ? (t) => {
              e(t)
              t.resume()
            }
          : (t) => t.resume()
      }
      const filesFilter = (t, e) => {
        const s = new Map(e.map((t) => [l(t), true]))
        const i = t.filter
        const mapHas = (t, e) => {
          const i = e || h.parse(t).root || '.'
          const n =
            t === i ? false : s.has(t) ? s.get(t) : mapHas(h.dirname(t), i)
          s.set(t, n)
          return n
        }
        t.filter = i ? (t, e) => i(t, e) && mapHas(l(t)) : (t) => mapHas(l(t))
      }
      const listFileSync = (t) => {
        const e = list(t)
        const s = t.file
        let i = true
        let n
        try {
          const o = r.statSync(s)
          const h = t.maxReadSize || 16 * 1024 * 1024
          if (o.size < h) {
            e.end(r.readFileSync(s))
          } else {
            let t = 0
            const i = Buffer.allocUnsafe(h)
            n = r.openSync(s, 'r')
            while (t < o.size) {
              const s = r.readSync(n, i, 0, h, t)
              t += s
              e.write(i.slice(0, s))
            }
            e.end()
          }
          i = false
        } finally {
          if (i && n) {
            try {
              r.closeSync(n)
            } catch (t) {}
          }
        }
      }
      const listFile = (t, e) => {
        const s = new n(t)
        const i = t.maxReadSize || 16 * 1024 * 1024
        const h = t.file
        const l = new Promise((t, e) => {
          s.on('error', e)
          s.on('end', t)
          r.stat(h, (t, n) => {
            if (t) {
              e(t)
            } else {
              const t = new o.ReadStream(h, { readSize: i, size: n.size })
              t.on('error', e)
              t.pipe(s)
            }
          })
        })
        return e ? l.then(e, e) : l
      }
      const list = (t) => new n(t)
    },
    6209: (t, e, s) => {
      'use strict'
      const i = s(9806)
      const n = s(7147)
      const r = s(1017)
      const o = s(2975)
      const h = s(9740)
      class SymlinkError extends Error {
        constructor(t, e) {
          super('Cannot extract through symbolic link')
          this.path = e
          this.symlink = t
        }
        get name() {
          return 'SylinkError'
        }
      }
      class CwdError extends Error {
        constructor(t, e) {
          super(e + ": Cannot cd into '" + t + "'")
          this.path = t
          this.code = e
        }
        get name() {
          return 'CwdError'
        }
      }
      const cGet = (t, e) => t.get(h(e))
      const cSet = (t, e, s) => t.set(h(e), s)
      const checkCwd = (t, e) => {
        n.stat(t, (s, i) => {
          if (s || !i.isDirectory()) {
            s = new CwdError(t, (s && s.code) || 'ENOTDIR')
          }
          e(s)
        })
      }
      t.exports = (t, e, s) => {
        t = h(t)
        const l = e.umask
        const a = e.mode | 448
        const c = (a & l) !== 0
        const u = e.uid
        const f = e.gid
        const d =
          typeof u === 'number' &&
          typeof f === 'number' &&
          (u !== e.processUid || f !== e.processGid)
        const p = e.preserve
        const m = e.unlink
        const y = e.cache
        const b = h(e.cwd)
        const done = (e, i) => {
          if (e) {
            s(e)
          } else {
            cSet(y, t, true)
            if (i && d) {
              o(i, u, f, (t) => done(t))
            } else if (c) {
              n.chmod(t, a, s)
            } else {
              s()
            }
          }
        }
        if (y && cGet(y, t) === true) {
          return done()
        }
        if (t === b) {
          return checkCwd(t, done)
        }
        if (p) {
          return i(t, { mode: a }).then((t) => done(null, t), done)
        }
        const w = h(r.relative(b, t))
        const E = w.split('/')
        mkdir_(b, E, a, y, m, b, null, done)
      }
      const mkdir_ = (t, e, s, i, o, l, a, c) => {
        if (!e.length) {
          return c(null, a)
        }
        const u = e.shift()
        const f = h(r.resolve(t + '/' + u))
        if (cGet(i, f)) {
          return mkdir_(f, e, s, i, o, l, a, c)
        }
        n.mkdir(f, s, onmkdir(f, e, s, i, o, l, a, c))
      }
      const onmkdir = (t, e, s, i, r, o, l, a) => (c) => {
        if (c) {
          n.lstat(t, (u, f) => {
            if (u) {
              u.path = u.path && h(u.path)
              a(u)
            } else if (f.isDirectory()) {
              mkdir_(t, e, s, i, r, o, l, a)
            } else if (r) {
              n.unlink(t, (h) => {
                if (h) {
                  return a(h)
                }
                n.mkdir(t, s, onmkdir(t, e, s, i, r, o, l, a))
              })
            } else if (f.isSymbolicLink()) {
              return a(new SymlinkError(t, t + '/' + e.join('/')))
            } else {
              a(c)
            }
          })
        } else {
          l = l || t
          mkdir_(t, e, s, i, r, o, l, a)
        }
      }
      const checkCwdSync = (t) => {
        let e = false
        let s = 'ENOTDIR'
        try {
          e = n.statSync(t).isDirectory()
        } catch (t) {
          s = t.code
        } finally {
          if (!e) {
            throw new CwdError(t, s)
          }
        }
      }
      t.exports.sync = (t, e) => {
        t = h(t)
        const s = e.umask
        const l = e.mode | 448
        const a = (l & s) !== 0
        const c = e.uid
        const u = e.gid
        const f =
          typeof c === 'number' &&
          typeof u === 'number' &&
          (c !== e.processUid || u !== e.processGid)
        const d = e.preserve
        const p = e.unlink
        const m = e.cache
        const y = h(e.cwd)
        const done = (e) => {
          cSet(m, t, true)
          if (e && f) {
            o.sync(e, c, u)
          }
          if (a) {
            n.chmodSync(t, l)
          }
        }
        if (m && cGet(m, t) === true) {
          return done()
        }
        if (t === y) {
          checkCwdSync(y)
          return done()
        }
        if (d) {
          return done(i.sync(t, l))
        }
        const b = h(r.relative(y, t))
        const w = b.split('/')
        let E = null
        for (let t = w.shift(), e = y; t && (e += '/' + t); t = w.shift()) {
          e = h(r.resolve(e))
          if (cGet(m, e)) {
            continue
          }
          try {
            n.mkdirSync(e, l)
            E = E || e
            cSet(m, e, true)
          } catch (t) {
            const s = n.lstatSync(e)
            if (s.isDirectory()) {
              cSet(m, e, true)
              continue
            } else if (p) {
              n.unlinkSync(e)
              n.mkdirSync(e, l)
              E = E || e
              cSet(m, e, true)
              continue
            } else if (s.isSymbolicLink()) {
              return new SymlinkError(e, e + '/' + w.join('/'))
            }
          }
        }
        return done(E)
      }
    },
    6601: (t) => {
      'use strict'
      t.exports = (t, e, s) => {
        t &= 4095
        if (s) {
          t = (t | 384) & ~18
        }
        if (e) {
          if (t & 256) {
            t |= 64
          }
          if (t & 32) {
            t |= 8
          }
          if (t & 4) {
            t |= 1
          }
        }
        return t
      }
    },
    4711: (t) => {
      const e = Object.create(null)
      const { hasOwnProperty: s } = Object.prototype
      t.exports = (t) => {
        if (!s.call(e, t)) {
          e[t] = t.normalize('NFD')
        }
        return e[t]
      }
    },
    9740: (t) => {
      const e = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
      t.exports = e !== 'win32' ? (t) => t : (t) => t && t.replace(/\\/g, '/')
    },
    7301: (t, e, s) => {
      'use strict'
      class PackJob {
        constructor(t, e) {
          this.path = t || './'
          this.absolute = e
          this.entry = null
          this.stat = null
          this.readdir = null
          this.pending = false
          this.ignore = false
          this.piped = false
        }
      }
      const { Minipass: i } = s(5540)
      const n = s(7750)
      const r = s(5917)
      const o = s(1944)
      const h = o.Sync
      const l = o.Tar
      const a = s(3401)
      const c = Buffer.alloc(1024)
      const u = Symbol('onStat')
      const f = Symbol('ended')
      const d = Symbol('queue')
      const p = Symbol('current')
      const m = Symbol('process')
      const y = Symbol('processing')
      const b = Symbol('processJob')
      const w = Symbol('jobs')
      const E = Symbol('jobDone')
      const _ = Symbol('addFSEntry')
      const S = Symbol('addTarEntry')
      const g = Symbol('stat')
      const R = Symbol('readdir')
      const O = Symbol('onreaddir')
      const k = Symbol('pipe')
      const v = Symbol('entry')
      const T = Symbol('entryOpt')
      const L = Symbol('writeEntryClass')
      const x = Symbol('write')
      const A = Symbol('ondrain')
      const I = s(7147)
      const D = s(1017)
      const N = s(8920)
      const B = s(9740)
      const M = N(
        class Pack extends i {
          constructor(t) {
            super(t)
            t = t || Object.create(null)
            this.opt = t
            this.file = t.file || ''
            this.cwd = t.cwd || process.cwd()
            this.maxReadSize = t.maxReadSize
            this.preservePaths = !!t.preservePaths
            this.strict = !!t.strict
            this.noPax = !!t.noPax
            this.prefix = B(t.prefix || '')
            this.linkCache = t.linkCache || new Map()
            this.statCache = t.statCache || new Map()
            this.readdirCache = t.readdirCache || new Map()
            this[L] = o
            if (typeof t.onwarn === 'function') {
              this.on('warn', t.onwarn)
            }
            this.portable = !!t.portable
            this.zip = null
            if (t.gzip) {
              if (typeof t.gzip !== 'object') {
                t.gzip = {}
              }
              if (this.portable) {
                t.gzip.portable = true
              }
              this.zip = new n.Gzip(t.gzip)
              this.zip.on('data', (t) => super.write(t))
              this.zip.on('end', (t) => super.end())
              this.zip.on('drain', (t) => this[A]())
              this.on('resume', (t) => this.zip.resume())
            } else {
              this.on('drain', this[A])
            }
            this.noDirRecurse = !!t.noDirRecurse
            this.follow = !!t.follow
            this.noMtime = !!t.noMtime
            this.mtime = t.mtime || null
            this.filter =
              typeof t.filter === 'function' ? t.filter : (t) => true
            this[d] = new a()
            this[w] = 0
            this.jobs = +t.jobs || 4
            this[y] = false
            this[f] = false
          }
          [x](t) {
            return super.write(t)
          }
          add(t) {
            this.write(t)
            return this
          }
          end(t) {
            if (t) {
              this.write(t)
            }
            this[f] = true
            this[m]()
            return this
          }
          write(t) {
            if (this[f]) {
              throw new Error('write after end')
            }
            if (t instanceof r) {
              this[S](t)
            } else {
              this[_](t)
            }
            return this.flowing
          }
          [S](t) {
            const e = B(D.resolve(this.cwd, t.path))
            if (!this.filter(t.path, t)) {
              t.resume()
            } else {
              const s = new PackJob(t.path, e, false)
              s.entry = new l(t, this[T](s))
              s.entry.on('end', (t) => this[E](s))
              this[w] += 1
              this[d].push(s)
            }
            this[m]()
          }
          [_](t) {
            const e = B(D.resolve(this.cwd, t))
            this[d].push(new PackJob(t, e))
            this[m]()
          }
          [g](t) {
            t.pending = true
            this[w] += 1
            const e = this.follow ? 'stat' : 'lstat'
            I[e](t.absolute, (e, s) => {
              t.pending = false
              this[w] -= 1
              if (e) {
                this.emit('error', e)
              } else {
                this[u](t, s)
              }
            })
          }
          [u](t, e) {
            this.statCache.set(t.absolute, e)
            t.stat = e
            if (!this.filter(t.path, e)) {
              t.ignore = true
            }
            this[m]()
          }
          [R](t) {
            t.pending = true
            this[w] += 1
            I.readdir(t.absolute, (e, s) => {
              t.pending = false
              this[w] -= 1
              if (e) {
                return this.emit('error', e)
              }
              this[O](t, s)
            })
          }
          [O](t, e) {
            this.readdirCache.set(t.absolute, e)
            t.readdir = e
            this[m]()
          }
          [m]() {
            if (this[y]) {
              return
            }
            this[y] = true
            for (
              let t = this[d].head;
              t !== null && this[w] < this.jobs;
              t = t.next
            ) {
              this[b](t.value)
              if (t.value.ignore) {
                const e = t.next
                this[d].removeNode(t)
                t.next = e
              }
            }
            this[y] = false
            if (this[f] && !this[d].length && this[w] === 0) {
              if (this.zip) {
                this.zip.end(c)
              } else {
                super.write(c)
                super.end()
              }
            }
          }
          get [p]() {
            return this[d] && this[d].head && this[d].head.value
          }
          [E](t) {
            this[d].shift()
            this[w] -= 1
            this[m]()
          }
          [b](t) {
            if (t.pending) {
              return
            }
            if (t.entry) {
              if (t === this[p] && !t.piped) {
                this[k](t)
              }
              return
            }
            if (!t.stat) {
              if (this.statCache.has(t.absolute)) {
                this[u](t, this.statCache.get(t.absolute))
              } else {
                this[g](t)
              }
            }
            if (!t.stat) {
              return
            }
            if (t.ignore) {
              return
            }
            if (!this.noDirRecurse && t.stat.isDirectory() && !t.readdir) {
              if (this.readdirCache.has(t.absolute)) {
                this[O](t, this.readdirCache.get(t.absolute))
              } else {
                this[R](t)
              }
              if (!t.readdir) {
                return
              }
            }
            t.entry = this[v](t)
            if (!t.entry) {
              t.ignore = true
              return
            }
            if (t === this[p] && !t.piped) {
              this[k](t)
            }
          }
          [T](t) {
            return {
              onwarn: (t, e, s) => this.warn(t, e, s),
              noPax: this.noPax,
              cwd: this.cwd,
              absolute: t.absolute,
              preservePaths: this.preservePaths,
              maxReadSize: this.maxReadSize,
              strict: this.strict,
              portable: this.portable,
              linkCache: this.linkCache,
              statCache: this.statCache,
              noMtime: this.noMtime,
              mtime: this.mtime,
              prefix: this.prefix,
            }
          }
          [v](t) {
            this[w] += 1
            try {
              return new this[L](t.path, this[T](t))
                .on('end', () => this[E](t))
                .on('error', (t) => this.emit('error', t))
            } catch (t) {
              this.emit('error', t)
            }
          }
          [A]() {
            if (this[p] && this[p].entry) {
              this[p].entry.resume()
            }
          }
          [k](t) {
            t.piped = true
            if (t.readdir) {
              t.readdir.forEach((e) => {
                const s = t.path
                const i = s === './' ? '' : s.replace(/\/*$/, '/')
                this[_](i + e)
              })
            }
            const e = t.entry
            const s = this.zip
            if (s) {
              e.on('data', (t) => {
                if (!s.write(t)) {
                  e.pause()
                }
              })
            } else {
              e.on('data', (t) => {
                if (!super.write(t)) {
                  e.pause()
                }
              })
            }
          }
          pause() {
            if (this.zip) {
              this.zip.pause()
            }
            return super.pause()
          }
        }
      )
      class PackSync extends M {
        constructor(t) {
          super(t)
          this[L] = h
        }
        pause() {}
        resume() {}
        [g](t) {
          const e = this.follow ? 'statSync' : 'lstatSync'
          this[u](t, I[e](t.absolute))
        }
        [R](t, e) {
          this[O](t, I.readdirSync(t.absolute))
        }
        [k](t) {
          const e = t.entry
          const s = this.zip
          if (t.readdir) {
            t.readdir.forEach((e) => {
              const s = t.path
              const i = s === './' ? '' : s.replace(/\/*$/, '/')
              this[_](i + e)
            })
          }
          if (s) {
            e.on('data', (t) => {
              s.write(t)
            })
          } else {
            e.on('data', (t) => {
              super[x](t)
            })
          }
        }
      }
      M.Sync = PackSync
      t.exports = M
    },
    5222: (t, e, s) => {
      'use strict'
      const i = s(8920)
      const n = s(1703)
      const r = s(2361)
      const o = s(3401)
      const h = 1024 * 1024
      const l = s(5917)
      const a = s(9037)
      const c = s(7750)
      const { nextTick: u } = s(7282)
      const f = Buffer.from([31, 139])
      const d = Symbol('state')
      const p = Symbol('writeEntry')
      const m = Symbol('readEntry')
      const y = Symbol('nextEntry')
      const b = Symbol('processEntry')
      const w = Symbol('extendedHeader')
      const E = Symbol('globalExtendedHeader')
      const _ = Symbol('meta')
      const S = Symbol('emitMeta')
      const g = Symbol('buffer')
      const R = Symbol('queue')
      const O = Symbol('ended')
      const k = Symbol('emittedEnd')
      const v = Symbol('emit')
      const T = Symbol('unzip')
      const L = Symbol('consumeChunk')
      const x = Symbol('consumeChunkSub')
      const A = Symbol('consumeBody')
      const I = Symbol('consumeMeta')
      const D = Symbol('consumeHeader')
      const N = Symbol('consuming')
      const B = Symbol('bufferConcat')
      const M = Symbol('maybeEnd')
      const C = Symbol('writing')
      const P = Symbol('aborted')
      const F = Symbol('onDone')
      const z = Symbol('sawValidEntry')
      const U = Symbol('sawNullBlock')
      const j = Symbol('sawEOF')
      const Z = Symbol('closeStream')
      const noop = (t) => true
      t.exports = i(
        class Parser extends r {
          constructor(t) {
            t = t || {}
            super(t)
            this.file = t.file || ''
            this[z] = null
            this.on(F, (t) => {
              if (this[d] === 'begin' || this[z] === false) {
                this.warn('TAR_BAD_ARCHIVE', 'Unrecognized archive format')
              }
            })
            if (t.ondone) {
              this.on(F, t.ondone)
            } else {
              this.on(F, (t) => {
                this.emit('prefinish')
                this.emit('finish')
                this.emit('end')
              })
            }
            this.strict = !!t.strict
            this.maxMetaEntrySize = t.maxMetaEntrySize || h
            this.filter = typeof t.filter === 'function' ? t.filter : noop
            this.writable = true
            this.readable = false
            this[R] = new o()
            this[g] = null
            this[m] = null
            this[p] = null
            this[d] = 'begin'
            this[_] = ''
            this[w] = null
            this[E] = null
            this[O] = false
            this[T] = null
            this[P] = false
            this[U] = false
            this[j] = false
            this.on('end', () => this[Z]())
            if (typeof t.onwarn === 'function') {
              this.on('warn', t.onwarn)
            }
            if (typeof t.onentry === 'function') {
              this.on('entry', t.onentry)
            }
          }
          [D](t, e) {
            if (this[z] === null) {
              this[z] = false
            }
            let s
            try {
              s = new n(t, e, this[w], this[E])
            } catch (t) {
              return this.warn('TAR_ENTRY_INVALID', t)
            }
            if (s.nullBlock) {
              if (this[U]) {
                this[j] = true
                if (this[d] === 'begin') {
                  this[d] = 'header'
                }
                this[v]('eof')
              } else {
                this[U] = true
                this[v]('nullBlock')
              }
            } else {
              this[U] = false
              if (!s.cksumValid) {
                this.warn('TAR_ENTRY_INVALID', 'checksum failure', {
                  header: s,
                })
              } else if (!s.path) {
                this.warn('TAR_ENTRY_INVALID', 'path is required', {
                  header: s,
                })
              } else {
                const t = s.type
                if (/^(Symbolic)?Link$/.test(t) && !s.linkpath) {
                  this.warn('TAR_ENTRY_INVALID', 'linkpath required', {
                    header: s,
                  })
                } else if (!/^(Symbolic)?Link$/.test(t) && s.linkpath) {
                  this.warn('TAR_ENTRY_INVALID', 'linkpath forbidden', {
                    header: s,
                  })
                } else {
                  const t = (this[p] = new l(s, this[w], this[E]))
                  if (!this[z]) {
                    if (t.remain) {
                      const onend = () => {
                        if (!t.invalid) {
                          this[z] = true
                        }
                      }
                      t.on('end', onend)
                    } else {
                      this[z] = true
                    }
                  }
                  if (t.meta) {
                    if (t.size > this.maxMetaEntrySize) {
                      t.ignore = true
                      this[v]('ignoredEntry', t)
                      this[d] = 'ignore'
                      t.resume()
                    } else if (t.size > 0) {
                      this[_] = ''
                      t.on('data', (t) => (this[_] += t))
                      this[d] = 'meta'
                    }
                  } else {
                    this[w] = null
                    t.ignore = t.ignore || !this.filter(t.path, t)
                    if (t.ignore) {
                      this[v]('ignoredEntry', t)
                      this[d] = t.remain ? 'ignore' : 'header'
                      t.resume()
                    } else {
                      if (t.remain) {
                        this[d] = 'body'
                      } else {
                        this[d] = 'header'
                        t.end()
                      }
                      if (!this[m]) {
                        this[R].push(t)
                        this[y]()
                      } else {
                        this[R].push(t)
                      }
                    }
                  }
                }
              }
            }
          }
          [Z]() {
            u(() => this.emit('close'))
          }
          [b](t) {
            let e = true
            if (!t) {
              this[m] = null
              e = false
            } else if (Array.isArray(t)) {
              this.emit.apply(this, t)
            } else {
              this[m] = t
              this.emit('entry', t)
              if (!t.emittedEnd) {
                t.on('end', (t) => this[y]())
                e = false
              }
            }
            return e
          }
          [y]() {
            do {} while (this[b](this[R].shift()))
            if (!this[R].length) {
              const t = this[m]
              const e = !t || t.flowing || t.size === t.remain
              if (e) {
                if (!this[C]) {
                  this.emit('drain')
                }
              } else {
                t.once('drain', (t) => this.emit('drain'))
              }
            }
          }
          [A](t, e) {
            const s = this[p]
            const i = s.blockRemain
            const n = i >= t.length && e === 0 ? t : t.slice(e, e + i)
            s.write(n)
            if (!s.blockRemain) {
              this[d] = 'header'
              this[p] = null
              s.end()
            }
            return n.length
          }
          [I](t, e) {
            const s = this[p]
            const i = this[A](t, e)
            if (!this[p]) {
              this[S](s)
            }
            return i
          }
          [v](t, e, s) {
            if (!this[R].length && !this[m]) {
              this.emit(t, e, s)
            } else {
              this[R].push([t, e, s])
            }
          }
          [S](t) {
            this[v]('meta', this[_])
            switch (t.type) {
              case 'ExtendedHeader':
              case 'OldExtendedHeader':
                this[w] = a.parse(this[_], this[w], false)
                break
              case 'GlobalExtendedHeader':
                this[E] = a.parse(this[_], this[E], true)
                break
              case 'NextFileHasLongPath':
              case 'OldGnuLongPath':
                this[w] = this[w] || Object.create(null)
                this[w].path = this[_].replace(/\0.*/, '')
                break
              case 'NextFileHasLongLinkpath':
                this[w] = this[w] || Object.create(null)
                this[w].linkpath = this[_].replace(/\0.*/, '')
                break
              default:
                throw new Error('unknown meta: ' + t.type)
            }
          }
          abort(t) {
            this[P] = true
            this.emit('abort', t)
            this.warn('TAR_ABORT', t, { recoverable: false })
          }
          write(t) {
            if (this[P]) {
              return
            }
            if (this[T] === null && t) {
              if (this[g]) {
                t = Buffer.concat([this[g], t])
                this[g] = null
              }
              if (t.length < f.length) {
                this[g] = t
                return true
              }
              for (let e = 0; this[T] === null && e < f.length; e++) {
                if (t[e] !== f[e]) {
                  this[T] = false
                }
              }
              if (this[T] === null) {
                const e = this[O]
                this[O] = false
                this[T] = new c.Unzip()
                this[T].on('data', (t) => this[L](t))
                this[T].on('error', (t) => this.abort(t))
                this[T].on('end', (t) => {
                  this[O] = true
                  this[L]()
                })
                this[C] = true
                const s = this[T][e ? 'end' : 'write'](t)
                this[C] = false
                return s
              }
            }
            this[C] = true
            if (this[T]) {
              this[T].write(t)
            } else {
              this[L](t)
            }
            this[C] = false
            const e = this[R].length ? false : this[m] ? this[m].flowing : true
            if (!e && !this[R].length) {
              this[m].once('drain', (t) => this.emit('drain'))
            }
            return e
          }
          [B](t) {
            if (t && !this[P]) {
              this[g] = this[g] ? Buffer.concat([this[g], t]) : t
            }
          }
          [M]() {
            if (this[O] && !this[k] && !this[P] && !this[N]) {
              this[k] = true
              const t = this[p]
              if (t && t.blockRemain) {
                const e = this[g] ? this[g].length : 0
                this.warn(
                  'TAR_BAD_ARCHIVE',
                  `Truncated input (needed ${t.blockRemain} more bytes, only ${e} available)`,
                  { entry: t }
                )
                if (this[g]) {
                  t.write(this[g])
                }
                t.end()
              }
              this[v](F)
            }
          }
          [L](t) {
            if (this[N]) {
              this[B](t)
            } else if (!t && !this[g]) {
              this[M]()
            } else {
              this[N] = true
              if (this[g]) {
                this[B](t)
                const e = this[g]
                this[g] = null
                this[x](e)
              } else {
                this[x](t)
              }
              while (this[g] && this[g].length >= 512 && !this[P] && !this[j]) {
                const t = this[g]
                this[g] = null
                this[x](t)
              }
              this[N] = false
            }
            if (!this[g] || this[O]) {
              this[M]()
            }
          }
          [x](t) {
            let e = 0
            const s = t.length
            while (e + 512 <= s && !this[P] && !this[j]) {
              switch (this[d]) {
                case 'begin':
                case 'header':
                  this[D](t, e)
                  e += 512
                  break
                case 'ignore':
                case 'body':
                  e += this[A](t, e)
                  break
                case 'meta':
                  e += this[I](t, e)
                  break
                default:
                  throw new Error('invalid state: ' + this[d])
              }
            }
            if (e < s) {
              if (this[g]) {
                this[g] = Buffer.concat([t.slice(e), this[g]])
              } else {
                this[g] = t.slice(e)
              }
            }
          }
          end(t) {
            if (!this[P]) {
              if (this[T]) {
                this[T].end(t)
              } else {
                this[O] = true
                this.write(t)
              }
            }
          }
        }
      )
    },
    8067: (t, e, s) => {
      const i = s(9491)
      const n = s(4711)
      const r = s(2517)
      const { join: o } = s(1017)
      const h = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
      const l = h === 'win32'
      t.exports = () => {
        const t = new Map()
        const e = new Map()
        const getDirs = (t) => {
          const e = t
            .split('/')
            .slice(0, -1)
            .reduce((t, e) => {
              if (t.length) {
                e = o(t[t.length - 1], e)
              }
              t.push(e || '/')
              return t
            }, [])
          return e
        }
        const s = new Set()
        const getQueues = (s) => {
          const i = e.get(s)
          if (!i) {
            throw new Error('function does not have any path reservations')
          }
          return {
            paths: i.paths.map((e) => t.get(e)),
            dirs: [...i.dirs].map((e) => t.get(e)),
          }
        }
        const check = (t) => {
          const { paths: e, dirs: s } = getQueues(t)
          return (
            e.every((e) => e[0] === t) &&
            s.every((e) => e[0] instanceof Set && e[0].has(t))
          )
        }
        const run = (t) => {
          if (s.has(t) || !check(t)) {
            return false
          }
          s.add(t)
          t(() => clear(t))
          return true
        }
        const clear = (n) => {
          if (!s.has(n)) {
            return false
          }
          const { paths: r, dirs: o } = e.get(n)
          const h = new Set()
          r.forEach((e) => {
            const s = t.get(e)
            i.equal(s[0], n)
            if (s.length === 1) {
              t.delete(e)
            } else {
              s.shift()
              if (typeof s[0] === 'function') {
                h.add(s[0])
              } else {
                s[0].forEach((t) => h.add(t))
              }
            }
          })
          o.forEach((e) => {
            const s = t.get(e)
            i(s[0] instanceof Set)
            if (s[0].size === 1 && s.length === 1) {
              t.delete(e)
            } else if (s[0].size === 1) {
              s.shift()
              h.add(s[0])
            } else {
              s[0].delete(n)
            }
          })
          s.delete(n)
          h.forEach((t) => run(t))
          return true
        }
        const reserve = (s, i) => {
          s = l
            ? ['win32 parallelization disabled']
            : s.map((t) => r(o(n(t))).toLowerCase())
          const h = new Set(
            s.map((t) => getDirs(t)).reduce((t, e) => t.concat(e))
          )
          e.set(i, { dirs: h, paths: s })
          s.forEach((e) => {
            const s = t.get(e)
            if (!s) {
              t.set(e, [i])
            } else {
              s.push(i)
            }
          })
          h.forEach((e) => {
            const s = t.get(e)
            if (!s) {
              t.set(e, [new Set([i])])
            } else if (s[s.length - 1] instanceof Set) {
              s[s.length - 1].add(i)
            } else {
              s.push(new Set([i]))
            }
          })
          return run(i)
        }
        return { check: check, reserve: reserve }
      }
    },
    9037: (t, e, s) => {
      'use strict'
      const i = s(1703)
      const n = s(1017)
      class Pax {
        constructor(t, e) {
          this.atime = t.atime || null
          this.charset = t.charset || null
          this.comment = t.comment || null
          this.ctime = t.ctime || null
          this.gid = t.gid || null
          this.gname = t.gname || null
          this.linkpath = t.linkpath || null
          this.mtime = t.mtime || null
          this.path = t.path || null
          this.size = t.size || null
          this.uid = t.uid || null
          this.uname = t.uname || null
          this.dev = t.dev || null
          this.ino = t.ino || null
          this.nlink = t.nlink || null
          this.global = e || false
        }
        encode() {
          const t = this.encodeBody()
          if (t === '') {
            return null
          }
          const e = Buffer.byteLength(t)
          const s = 512 * Math.ceil(1 + e / 512)
          const r = Buffer.allocUnsafe(s)
          for (let t = 0; t < 512; t++) {
            r[t] = 0
          }
          new i({
            path: ('PaxHeader/' + n.basename(this.path)).slice(0, 99),
            mode: this.mode || 420,
            uid: this.uid || null,
            gid: this.gid || null,
            size: e,
            mtime: this.mtime || null,
            type: this.global ? 'GlobalExtendedHeader' : 'ExtendedHeader',
            linkpath: '',
            uname: this.uname || '',
            gname: this.gname || '',
            devmaj: 0,
            devmin: 0,
            atime: this.atime || null,
            ctime: this.ctime || null,
          }).encode(r)
          r.write(t, 512, e, 'utf8')
          for (let t = e + 512; t < r.length; t++) {
            r[t] = 0
          }
          return r
        }
        encodeBody() {
          return (
            this.encodeField('path') +
            this.encodeField('ctime') +
            this.encodeField('atime') +
            this.encodeField('dev') +
            this.encodeField('ino') +
            this.encodeField('nlink') +
            this.encodeField('charset') +
            this.encodeField('comment') +
            this.encodeField('gid') +
            this.encodeField('gname') +
            this.encodeField('linkpath') +
            this.encodeField('mtime') +
            this.encodeField('size') +
            this.encodeField('uid') +
            this.encodeField('uname')
          )
        }
        encodeField(t) {
          if (this[t] === null || this[t] === undefined) {
            return ''
          }
          const e = this[t] instanceof Date ? this[t].getTime() / 1e3 : this[t]
          const s =
            ' ' +
            (t === 'dev' || t === 'ino' || t === 'nlink' ? 'SCHILY.' : '') +
            t +
            '=' +
            e +
            '\n'
          const i = Buffer.byteLength(s)
          let n = Math.floor(Math.log(i) / Math.log(10)) + 1
          if (i + n >= Math.pow(10, n)) {
            n += 1
          }
          const r = n + i
          return r + s
        }
      }
      Pax.parse = (t, e, s) => new Pax(merge(parseKV(t), e), s)
      const merge = (t, e) =>
        e ? Object.keys(t).reduce((e, s) => ((e[s] = t[s]), e), e) : t
      const parseKV = (t) =>
        t
          .replace(/\n$/, '')
          .split('\n')
          .reduce(parseKVLine, Object.create(null))
      const parseKVLine = (t, e) => {
        const s = parseInt(e, 10)
        if (s !== Buffer.byteLength(e) + 1) {
          return t
        }
        e = e.slice((s + ' ').length)
        const i = e.split('=')
        const n = i.shift().replace(/^SCHILY\.(dev|ino|nlink)/, '$1')
        if (!n) {
          return t
        }
        const r = i.join('=')
        t[n] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(n)
          ? new Date(r * 1e3)
          : /^[0-9]+$/.test(r)
          ? +r
          : r
        return t
      }
      t.exports = Pax
    },
    5917: (t, e, s) => {
      'use strict'
      const { Minipass: i } = s(5540)
      const n = s(9740)
      const r = Symbol('slurp')
      t.exports = class ReadEntry extends i {
        constructor(t, e, s) {
          super()
          this.pause()
          this.extended = e
          this.globalExtended = s
          this.header = t
          this.startBlockSize = 512 * Math.ceil(t.size / 512)
          this.blockRemain = this.startBlockSize
          this.remain = t.size
          this.type = t.type
          this.meta = false
          this.ignore = false
          switch (this.type) {
            case 'File':
            case 'OldFile':
            case 'Link':
            case 'SymbolicLink':
            case 'CharacterDevice':
            case 'BlockDevice':
            case 'Directory':
            case 'FIFO':
            case 'ContiguousFile':
            case 'GNUDumpDir':
              break
            case 'NextFileHasLongLinkpath':
            case 'NextFileHasLongPath':
            case 'OldGnuLongPath':
            case 'GlobalExtendedHeader':
            case 'ExtendedHeader':
            case 'OldExtendedHeader':
              this.meta = true
              break
            default:
              this.ignore = true
          }
          this.path = n(t.path)
          this.mode = t.mode
          if (this.mode) {
            this.mode = this.mode & 4095
          }
          this.uid = t.uid
          this.gid = t.gid
          this.uname = t.uname
          this.gname = t.gname
          this.size = t.size
          this.mtime = t.mtime
          this.atime = t.atime
          this.ctime = t.ctime
          this.linkpath = n(t.linkpath)
          this.uname = t.uname
          this.gname = t.gname
          if (e) {
            this[r](e)
          }
          if (s) {
            this[r](s, true)
          }
        }
        write(t) {
          const e = t.length
          if (e > this.blockRemain) {
            throw new Error('writing more to entry than is appropriate')
          }
          const s = this.remain
          const i = this.blockRemain
          this.remain = Math.max(0, s - e)
          this.blockRemain = Math.max(0, i - e)
          if (this.ignore) {
            return true
          }
          if (s >= e) {
            return super.write(t)
          }
          return super.write(t.slice(0, s))
        }
        [r](t, e) {
          for (const s in t) {
            if (t[s] !== null && t[s] !== undefined && !(e && s === 'path')) {
              this[s] = s === 'path' || s === 'linkpath' ? n(t[s]) : t[s]
            }
          }
        }
      }
    },
    1138: (t, e, s) => {
      'use strict'
      const i = s(3831)
      const n = s(7301)
      const r = s(7147)
      const o = s(644)
      const h = s(4975)
      const l = s(1017)
      const a = s(1703)
      t.exports = (t, e, s) => {
        const n = i(t)
        if (!n.file) {
          throw new TypeError('file is required')
        }
        if (n.gzip) {
          throw new TypeError('cannot append to compressed archives')
        }
        if (!e || !Array.isArray(e) || !e.length) {
          throw new TypeError('no files or directories specified')
        }
        e = Array.from(e)
        return n.sync ? replaceSync(n, e) : replace(n, e, s)
      }
      const replaceSync = (t, e) => {
        const s = new n.Sync(t)
        let i = true
        let o
        let h
        try {
          try {
            o = r.openSync(t.file, 'r+')
          } catch (e) {
            if (e.code === 'ENOENT') {
              o = r.openSync(t.file, 'w+')
            } else {
              throw e
            }
          }
          const n = r.fstatSync(o)
          const l = Buffer.alloc(512)
          t: for (h = 0; h < n.size; h += 512) {
            for (let t = 0, e = 0; t < 512; t += e) {
              e = r.readSync(o, l, t, l.length - t, h + t)
              if (h === 0 && l[0] === 31 && l[1] === 139) {
                throw new Error('cannot append to compressed archives')
              }
              if (!e) {
                break t
              }
            }
            const e = new a(l)
            if (!e.cksumValid) {
              break
            }
            const s = 512 * Math.ceil(e.size / 512)
            if (h + s + 512 > n.size) {
              break
            }
            h += s
            if (t.mtimeCache) {
              t.mtimeCache.set(e.path, e.mtime)
            }
          }
          i = false
          streamSync(t, s, h, o, e)
        } finally {
          if (i) {
            try {
              r.closeSync(o)
            } catch (t) {}
          }
        }
      }
      const streamSync = (t, e, s, i, n) => {
        const r = new o.WriteStreamSync(t.file, { fd: i, start: s })
        e.pipe(r)
        addFilesSync(e, n)
      }
      const replace = (t, e, s) => {
        e = Array.from(e)
        const i = new n(t)
        const getPos = (e, s, i) => {
          const cb = (t, s) => {
            if (t) {
              r.close(e, (e) => i(t))
            } else {
              i(null, s)
            }
          }
          let n = 0
          if (s === 0) {
            return cb(null, 0)
          }
          let o = 0
          const h = Buffer.alloc(512)
          const onread = (i, l) => {
            if (i) {
              return cb(i)
            }
            o += l
            if (o < 512 && l) {
              return r.read(e, h, o, h.length - o, n + o, onread)
            }
            if (n === 0 && h[0] === 31 && h[1] === 139) {
              return cb(new Error('cannot append to compressed archives'))
            }
            if (o < 512) {
              return cb(null, n)
            }
            const c = new a(h)
            if (!c.cksumValid) {
              return cb(null, n)
            }
            const u = 512 * Math.ceil(c.size / 512)
            if (n + u + 512 > s) {
              return cb(null, n)
            }
            n += u + 512
            if (n >= s) {
              return cb(null, n)
            }
            if (t.mtimeCache) {
              t.mtimeCache.set(c.path, c.mtime)
            }
            o = 0
            r.read(e, h, 0, 512, n, onread)
          }
          r.read(e, h, 0, 512, n, onread)
        }
        const h = new Promise((s, n) => {
          i.on('error', n)
          let h = 'r+'
          const onopen = (l, a) => {
            if (l && l.code === 'ENOENT' && h === 'r+') {
              h = 'w+'
              return r.open(t.file, h, onopen)
            }
            if (l) {
              return n(l)
            }
            r.fstat(a, (h, l) => {
              if (h) {
                return r.close(a, () => n(h))
              }
              getPos(a, l.size, (r, h) => {
                if (r) {
                  return n(r)
                }
                const l = new o.WriteStream(t.file, { fd: a, start: h })
                i.pipe(l)
                l.on('error', n)
                l.on('close', s)
                addFilesAsync(i, e)
              })
            })
          }
          r.open(t.file, h, onopen)
        })
        return s ? h.then(s, s) : h
      }
      const addFilesSync = (t, e) => {
        e.forEach((e) => {
          if (e.charAt(0) === '@') {
            h({
              file: l.resolve(t.cwd, e.slice(1)),
              sync: true,
              noResume: true,
              onentry: (e) => t.add(e),
            })
          } else {
            t.add(e)
          }
        })
        t.end()
      }
      const addFilesAsync = (t, e) => {
        while (e.length) {
          const s = e.shift()
          if (s.charAt(0) === '@') {
            return h({
              file: l.resolve(t.cwd, s.slice(1)),
              noResume: true,
              onentry: (e) => t.add(e),
            }).then((s) => addFilesAsync(t, e))
          } else {
            t.add(s)
          }
        }
        t.end()
      }
    },
    332: (t, e, s) => {
      const { isAbsolute: i, parse: n } = s(1017).win32
      t.exports = (t) => {
        let e = ''
        let s = n(t)
        while (i(t) || s.root) {
          const i =
            t.charAt(0) === '/' && t.slice(0, 4) !== '//?/' ? '/' : s.root
          t = t.slice(i.length)
          e += i
          s = n(t)
        }
        return [e, t]
      }
    },
    2517: (t) => {
      t.exports = (t) => {
        let e = t.length - 1
        let s = -1
        while (e > -1 && t.charAt(e) === '/') {
          s = e
          e--
        }
        return s === -1 ? t : t.slice(0, s)
      }
    },
    1046: (t, e) => {
      'use strict'
      e.name = new Map([
        ['0', 'File'],
        ['', 'OldFile'],
        ['1', 'Link'],
        ['2', 'SymbolicLink'],
        ['3', 'CharacterDevice'],
        ['4', 'BlockDevice'],
        ['5', 'Directory'],
        ['6', 'FIFO'],
        ['7', 'ContiguousFile'],
        ['g', 'GlobalExtendedHeader'],
        ['x', 'ExtendedHeader'],
        ['A', 'SolarisACL'],
        ['D', 'GNUDumpDir'],
        ['I', 'Inode'],
        ['K', 'NextFileHasLongLinkpath'],
        ['L', 'NextFileHasLongPath'],
        ['M', 'ContinuationFile'],
        ['N', 'OldGnuLongPath'],
        ['S', 'SparseFile'],
        ['V', 'TapeVolumeHeader'],
        ['X', 'OldExtendedHeader'],
      ])
      e.code = new Map(Array.from(e.name).map((t) => [t[1], t[0]]))
    },
    5951: (t, e, s) => {
      'use strict'
      const i = s(9491)
      const n = s(5222)
      const r = s(7147)
      const o = s(644)
      const h = s(1017)
      const l = s(6209)
      const a = s(4099)
      const c = s(8067)
      const u = s(332)
      const f = s(9740)
      const d = s(2517)
      const p = s(4711)
      const m = Symbol('onEntry')
      const y = Symbol('checkFs')
      const b = Symbol('checkFs2')
      const w = Symbol('pruneCache')
      const E = Symbol('isReusable')
      const _ = Symbol('makeFs')
      const S = Symbol('file')
      const g = Symbol('directory')
      const R = Symbol('link')
      const O = Symbol('symlink')
      const k = Symbol('hardlink')
      const v = Symbol('unsupported')
      const T = Symbol('checkPath')
      const L = Symbol('mkdir')
      const x = Symbol('onError')
      const A = Symbol('pending')
      const I = Symbol('pend')
      const D = Symbol('unpend')
      const N = Symbol('ended')
      const B = Symbol('maybeClose')
      const M = Symbol('skip')
      const C = Symbol('doChown')
      const P = Symbol('uid')
      const F = Symbol('gid')
      const z = Symbol('checkedCwd')
      const U = s(6113)
      const j = s(9262)
      const Z = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform
      const Y = Z === 'win32'
      const unlinkFile = (t, e) => {
        if (!Y) {
          return r.unlink(t, e)
        }
        const s = t + '.DELETE.' + U.randomBytes(16).toString('hex')
        r.rename(t, s, (t) => {
          if (t) {
            return e(t)
          }
          r.unlink(s, e)
        })
      }
      const unlinkFileSync = (t) => {
        if (!Y) {
          return r.unlinkSync(t)
        }
        const e = t + '.DELETE.' + U.randomBytes(16).toString('hex')
        r.renameSync(t, e)
        r.unlinkSync(e)
      }
      const uint32 = (t, e, s) => (t === t >>> 0 ? t : e === e >>> 0 ? e : s)
      const cacheKeyNormalize = (t) => d(f(p(t))).toLowerCase()
      const pruneCache = (t, e) => {
        e = cacheKeyNormalize(e)
        for (const s of t.keys()) {
          const i = cacheKeyNormalize(s)
          if (i === e || i.indexOf(e + '/') === 0) {
            t.delete(s)
          }
        }
      }
      const dropCache = (t) => {
        for (const e of t.keys()) {
          t.delete(e)
        }
      }
      class Unpack extends n {
        constructor(t) {
          if (!t) {
            t = {}
          }
          t.ondone = (t) => {
            this[N] = true
            this[B]()
          }
          super(t)
          this[z] = false
          this.reservations = c()
          this.transform =
            typeof t.transform === 'function' ? t.transform : null
          this.writable = true
          this.readable = false
          this[A] = 0
          this[N] = false
          this.dirCache = t.dirCache || new Map()
          if (typeof t.uid === 'number' || typeof t.gid === 'number') {
            if (typeof t.uid !== 'number' || typeof t.gid !== 'number') {
              throw new TypeError('cannot set owner without number uid and gid')
            }
            if (t.preserveOwner) {
              throw new TypeError(
                'cannot preserve owner in archive and also set owner explicitly'
              )
            }
            this.uid = t.uid
            this.gid = t.gid
            this.setOwner = true
          } else {
            this.uid = null
            this.gid = null
            this.setOwner = false
          }
          if (t.preserveOwner === undefined && typeof t.uid !== 'number') {
            this.preserveOwner = process.getuid && process.getuid() === 0
          } else {
            this.preserveOwner = !!t.preserveOwner
          }
          this.processUid =
            (this.preserveOwner || this.setOwner) && process.getuid
              ? process.getuid()
              : null
          this.processGid =
            (this.preserveOwner || this.setOwner) && process.getgid
              ? process.getgid()
              : null
          this.forceChown = t.forceChown === true
          this.win32 = !!t.win32 || Y
          this.newer = !!t.newer
          this.keep = !!t.keep
          this.noMtime = !!t.noMtime
          this.preservePaths = !!t.preservePaths
          this.unlink = !!t.unlink
          this.cwd = f(h.resolve(t.cwd || process.cwd()))
          this.strip = +t.strip || 0
          this.processUmask = t.noChmod ? 0 : process.umask()
          this.umask = typeof t.umask === 'number' ? t.umask : this.processUmask
          this.dmode = t.dmode || 511 & ~this.umask
          this.fmode = t.fmode || 438 & ~this.umask
          this.on('entry', (t) => this[m](t))
        }
        warn(t, e, s = {}) {
          if (t === 'TAR_BAD_ARCHIVE' || t === 'TAR_ABORT') {
            s.recoverable = false
          }
          return super.warn(t, e, s)
        }
        [B]() {
          if (this[N] && this[A] === 0) {
            this.emit('prefinish')
            this.emit('finish')
            this.emit('end')
          }
        }
        [T](t) {
          if (this.strip) {
            const e = f(t.path).split('/')
            if (e.length < this.strip) {
              return false
            }
            t.path = e.slice(this.strip).join('/')
            if (t.type === 'Link') {
              const e = f(t.linkpath).split('/')
              if (e.length >= this.strip) {
                t.linkpath = e.slice(this.strip).join('/')
              } else {
                return false
              }
            }
          }
          if (!this.preservePaths) {
            const e = f(t.path)
            const s = e.split('/')
            if (s.includes('..') || (Y && /^[a-z]:\.\.$/i.test(s[0]))) {
              this.warn('TAR_ENTRY_ERROR', `path contains '..'`, {
                entry: t,
                path: e,
              })
              return false
            }
            const [i, n] = u(e)
            if (i) {
              t.path = n
              this.warn('TAR_ENTRY_INFO', `stripping ${i} from absolute path`, {
                entry: t,
                path: e,
              })
            }
          }
          if (h.isAbsolute(t.path)) {
            t.absolute = f(h.resolve(t.path))
          } else {
            t.absolute = f(h.resolve(this.cwd, t.path))
          }
          if (
            !this.preservePaths &&
            t.absolute.indexOf(this.cwd + '/') !== 0 &&
            t.absolute !== this.cwd
          ) {
            this.warn('TAR_ENTRY_ERROR', 'path escaped extraction target', {
              entry: t,
              path: f(t.path),
              resolvedPath: t.absolute,
              cwd: this.cwd,
            })
            return false
          }
          if (
            t.absolute === this.cwd &&
            t.type !== 'Directory' &&
            t.type !== 'GNUDumpDir'
          ) {
            return false
          }
          if (this.win32) {
            const { root: e } = h.win32.parse(t.absolute)
            t.absolute = e + a.encode(t.absolute.slice(e.length))
            const { root: s } = h.win32.parse(t.path)
            t.path = s + a.encode(t.path.slice(s.length))
          }
          return true
        }
        [m](t) {
          if (!this[T](t)) {
            return t.resume()
          }
          i.equal(typeof t.absolute, 'string')
          switch (t.type) {
            case 'Directory':
            case 'GNUDumpDir':
              if (t.mode) {
                t.mode = t.mode | 448
              }
            case 'File':
            case 'OldFile':
            case 'ContiguousFile':
            case 'Link':
            case 'SymbolicLink':
              return this[y](t)
            case 'CharacterDevice':
            case 'BlockDevice':
            case 'FIFO':
            default:
              return this[v](t)
          }
        }
        [x](t, e) {
          if (t.name === 'CwdError') {
            this.emit('error', t)
          } else {
            this.warn('TAR_ENTRY_ERROR', t, { entry: e })
            this[D]()
            e.resume()
          }
        }
        [L](t, e, s) {
          l(
            f(t),
            {
              uid: this.uid,
              gid: this.gid,
              processUid: this.processUid,
              processGid: this.processGid,
              umask: this.processUmask,
              preserve: this.preservePaths,
              unlink: this.unlink,
              cache: this.dirCache,
              cwd: this.cwd,
              mode: e,
              noChmod: this.noChmod,
            },
            s
          )
        }
        [C](t) {
          return (
            this.forceChown ||
            (this.preserveOwner &&
              ((typeof t.uid === 'number' && t.uid !== this.processUid) ||
                (typeof t.gid === 'number' && t.gid !== this.processGid))) ||
            (typeof this.uid === 'number' && this.uid !== this.processUid) ||
            (typeof this.gid === 'number' && this.gid !== this.processGid)
          )
        }
        [P](t) {
          return uint32(this.uid, t.uid, this.processUid)
        }
        [F](t) {
          return uint32(this.gid, t.gid, this.processGid)
        }
        [S](t, e) {
          const s = t.mode & 4095 || this.fmode
          const i = new o.WriteStream(t.absolute, {
            flags: j(t.size),
            mode: s,
            autoClose: false,
          })
          i.on('error', (s) => {
            if (i.fd) {
              r.close(i.fd, () => {})
            }
            i.write = () => true
            this[x](s, t)
            e()
          })
          let n = 1
          const done = (s) => {
            if (s) {
              if (i.fd) {
                r.close(i.fd, () => {})
              }
              this[x](s, t)
              e()
              return
            }
            if (--n === 0) {
              r.close(i.fd, (s) => {
                if (s) {
                  this[x](s, t)
                } else {
                  this[D]()
                }
                e()
              })
            }
          }
          i.on('finish', (e) => {
            const s = t.absolute
            const o = i.fd
            if (t.mtime && !this.noMtime) {
              n++
              const e = t.atime || new Date()
              const i = t.mtime
              r.futimes(o, e, i, (t) =>
                t ? r.utimes(s, e, i, (e) => done(e && t)) : done()
              )
            }
            if (this[C](t)) {
              n++
              const e = this[P](t)
              const i = this[F](t)
              r.fchown(o, e, i, (t) =>
                t ? r.chown(s, e, i, (e) => done(e && t)) : done()
              )
            }
            done()
          })
          const h = this.transform ? this.transform(t) || t : t
          if (h !== t) {
            h.on('error', (s) => {
              this[x](s, t)
              e()
            })
            t.pipe(h)
          }
          h.pipe(i)
        }
        [g](t, e) {
          const s = t.mode & 4095 || this.dmode
          this[L](t.absolute, s, (s) => {
            if (s) {
              this[x](s, t)
              e()
              return
            }
            let i = 1
            const done = (s) => {
              if (--i === 0) {
                e()
                this[D]()
                t.resume()
              }
            }
            if (t.mtime && !this.noMtime) {
              i++
              r.utimes(t.absolute, t.atime || new Date(), t.mtime, done)
            }
            if (this[C](t)) {
              i++
              r.chown(t.absolute, this[P](t), this[F](t), done)
            }
            done()
          })
        }
        [v](t) {
          t.unsupported = true
          this.warn(
            'TAR_ENTRY_UNSUPPORTED',
            `unsupported entry type: ${t.type}`,
            { entry: t }
          )
          t.resume()
        }
        [O](t, e) {
          this[R](t, t.linkpath, 'symlink', e)
        }
        [k](t, e) {
          const s = f(h.resolve(this.cwd, t.linkpath))
          this[R](t, s, 'link', e)
        }
        [I]() {
          this[A]++
        }
        [D]() {
          this[A]--
          this[B]()
        }
        [M](t) {
          this[D]()
          t.resume()
        }
        [E](t, e) {
          return (
            t.type === 'File' &&
            !this.unlink &&
            e.isFile() &&
            e.nlink <= 1 &&
            !Y
          )
        }
        [y](t) {
          this[I]()
          const e = [t.path]
          if (t.linkpath) {
            e.push(t.linkpath)
          }
          this.reservations.reserve(e, (e) => this[b](t, e))
        }
        [w](t) {
          if (t.type === 'SymbolicLink') {
            dropCache(this.dirCache)
          } else if (t.type !== 'Directory') {
            pruneCache(this.dirCache, t.absolute)
          }
        }
        [b](t, e) {
          this[w](t)
          const done = (s) => {
            this[w](t)
            e(s)
          }
          const checkCwd = () => {
            this[L](this.cwd, this.dmode, (e) => {
              if (e) {
                this[x](e, t)
                done()
                return
              }
              this[z] = true
              start()
            })
          }
          const start = () => {
            if (t.absolute !== this.cwd) {
              const e = f(h.dirname(t.absolute))
              if (e !== this.cwd) {
                return this[L](e, this.dmode, (e) => {
                  if (e) {
                    this[x](e, t)
                    done()
                    return
                  }
                  afterMakeParent()
                })
              }
            }
            afterMakeParent()
          }
          const afterMakeParent = () => {
            r.lstat(t.absolute, (e, s) => {
              if (s && (this.keep || (this.newer && s.mtime > t.mtime))) {
                this[M](t)
                done()
                return
              }
              if (e || this[E](t, s)) {
                return this[_](null, t, done)
              }
              if (s.isDirectory()) {
                if (t.type === 'Directory') {
                  const e =
                    !this.noChmod && t.mode && (s.mode & 4095) !== t.mode
                  const afterChmod = (e) => this[_](e, t, done)
                  if (!e) {
                    return afterChmod()
                  }
                  return r.chmod(t.absolute, t.mode, afterChmod)
                }
                if (t.absolute !== this.cwd) {
                  return r.rmdir(t.absolute, (e) => this[_](e, t, done))
                }
              }
              if (t.absolute === this.cwd) {
                return this[_](null, t, done)
              }
              unlinkFile(t.absolute, (e) => this[_](e, t, done))
            })
          }
          if (this[z]) {
            start()
          } else {
            checkCwd()
          }
        }
        [_](t, e, s) {
          if (t) {
            this[x](t, e)
            s()
            return
          }
          switch (e.type) {
            case 'File':
            case 'OldFile':
            case 'ContiguousFile':
              return this[S](e, s)
            case 'Link':
              return this[k](e, s)
            case 'SymbolicLink':
              return this[O](e, s)
            case 'Directory':
            case 'GNUDumpDir':
              return this[g](e, s)
          }
        }
        [R](t, e, s, i) {
          r[s](e, t.absolute, (e) => {
            if (e) {
              this[x](e, t)
            } else {
              this[D]()
              t.resume()
            }
            i()
          })
        }
      }
      const callSync = (t) => {
        try {
          return [null, t()]
        } catch (t) {
          return [t, null]
        }
      }
      class UnpackSync extends Unpack {
        [_](t, e) {
          return super[_](t, e, () => {})
        }
        [y](t) {
          this[w](t)
          if (!this[z]) {
            const e = this[L](this.cwd, this.dmode)
            if (e) {
              return this[x](e, t)
            }
            this[z] = true
          }
          if (t.absolute !== this.cwd) {
            const e = f(h.dirname(t.absolute))
            if (e !== this.cwd) {
              const s = this[L](e, this.dmode)
              if (s) {
                return this[x](s, t)
              }
            }
          }
          const [e, s] = callSync(() => r.lstatSync(t.absolute))
          if (s && (this.keep || (this.newer && s.mtime > t.mtime))) {
            return this[M](t)
          }
          if (e || this[E](t, s)) {
            return this[_](null, t)
          }
          if (s.isDirectory()) {
            if (t.type === 'Directory') {
              const e = !this.noChmod && t.mode && (s.mode & 4095) !== t.mode
              const [i] = e
                ? callSync(() => {
                    r.chmodSync(t.absolute, t.mode)
                  })
                : []
              return this[_](i, t)
            }
            const [e] = callSync(() => r.rmdirSync(t.absolute))
            this[_](e, t)
          }
          const [i] =
            t.absolute === this.cwd
              ? []
              : callSync(() => unlinkFileSync(t.absolute))
          this[_](i, t)
        }
        [S](t, e) {
          const s = t.mode & 4095 || this.fmode
          const oner = (s) => {
            let n
            try {
              r.closeSync(i)
            } catch (t) {
              n = t
            }
            if (s || n) {
              this[x](s || n, t)
            }
            e()
          }
          let i
          try {
            i = r.openSync(t.absolute, j(t.size), s)
          } catch (t) {
            return oner(t)
          }
          const n = this.transform ? this.transform(t) || t : t
          if (n !== t) {
            n.on('error', (e) => this[x](e, t))
            t.pipe(n)
          }
          n.on('data', (t) => {
            try {
              r.writeSync(i, t, 0, t.length)
            } catch (t) {
              oner(t)
            }
          })
          n.on('end', (e) => {
            let s = null
            if (t.mtime && !this.noMtime) {
              const e = t.atime || new Date()
              const n = t.mtime
              try {
                r.futimesSync(i, e, n)
              } catch (i) {
                try {
                  r.utimesSync(t.absolute, e, n)
                } catch (t) {
                  s = i
                }
              }
            }
            if (this[C](t)) {
              const e = this[P](t)
              const n = this[F](t)
              try {
                r.fchownSync(i, e, n)
              } catch (i) {
                try {
                  r.chownSync(t.absolute, e, n)
                } catch (t) {
                  s = s || i
                }
              }
            }
            oner(s)
          })
        }
        [g](t, e) {
          const s = t.mode & 4095 || this.dmode
          const i = this[L](t.absolute, s)
          if (i) {
            this[x](i, t)
            e()
            return
          }
          if (t.mtime && !this.noMtime) {
            try {
              r.utimesSync(t.absolute, t.atime || new Date(), t.mtime)
            } catch (i) {}
          }
          if (this[C](t)) {
            try {
              r.chownSync(t.absolute, this[P](t), this[F](t))
            } catch (i) {}
          }
          e()
          t.resume()
        }
        [L](t, e) {
          try {
            return l.sync(f(t), {
              uid: this.uid,
              gid: this.gid,
              processUid: this.processUid,
              processGid: this.processGid,
              umask: this.processUmask,
              preserve: this.preservePaths,
              unlink: this.unlink,
              cache: this.dirCache,
              cwd: this.cwd,
              mode: e,
            })
          } catch (t) {
            return t
          }
        }
        [R](t, e, s, i) {
          try {
            r[s + 'Sync'](e, t.absolute)
            i()
            t.resume()
          } catch (e) {
            return this[x](e, t)
          }
        }
      }
      Unpack.Sync = UnpackSync
      t.exports = Unpack
    },
    9472: (t, e, s) => {
      'use strict'
      const i = s(3831)
      const n = s(1138)
      t.exports = (t, e, s) => {
        const r = i(t)
        if (!r.file) {
          throw new TypeError('file is required')
        }
        if (r.gzip) {
          throw new TypeError('cannot append to compressed archives')
        }
        if (!e || !Array.isArray(e) || !e.length) {
          throw new TypeError('no files or directories specified')
        }
        e = Array.from(e)
        mtimeFilter(r)
        return n(r, e, s)
      }
      const mtimeFilter = (t) => {
        const e = t.filter
        if (!t.mtimeCache) {
          t.mtimeCache = new Map()
        }
        t.filter = e
          ? (s, i) => e(s, i) && !(t.mtimeCache.get(s) > i.mtime)
          : (e, s) => !(t.mtimeCache.get(e) > s.mtime)
      }
    },
    8920: (t) => {
      'use strict'
      t.exports = (t) =>
        class extends t {
          warn(t, e, s = {}) {
            if (this.file) {
              s.file = this.file
            }
            if (this.cwd) {
              s.cwd = this.cwd
            }
            s.code = (e instanceof Error && e.code) || t
            s.tarCode = t
            if (!this.strict && s.recoverable !== false) {
              if (e instanceof Error) {
                s = Object.assign(e, s)
                e = e.message
              }
              this.emit('warn', s.tarCode, e, s)
            } else if (e instanceof Error) {
              this.emit('error', Object.assign(e, s))
            } else {
              this.emit('error', Object.assign(new Error(`${t}: ${e}`), s))
            }
          }
        }
    },
    4099: (t) => {
      'use strict'
      const e = ['|', '<', '>', '?', ':']
      const s = e.map((t) => String.fromCharCode(61440 + t.charCodeAt(0)))
      const i = new Map(e.map((t, e) => [t, s[e]]))
      const n = new Map(s.map((t, s) => [t, e[s]]))
      t.exports = {
        encode: (t) => e.reduce((t, e) => t.split(e).join(i.get(e)), t),
        decode: (t) => s.reduce((t, e) => t.split(e).join(n.get(e)), t),
      }
    },
    1944: (t, e, s) => {
      'use strict'
      const { Minipass: i } = s(5540)
      const n = s(9037)
      const r = s(1703)
      const o = s(7147)
      const h = s(1017)
      const l = s(9740)
      const a = s(2517)
      const prefixPath = (t, e) => {
        if (!e) {
          return l(t)
        }
        t = l(t).replace(/^\.(\/|$)/, '')
        return a(e) + '/' + t
      }
      const c = 16 * 1024 * 1024
      const u = Symbol('process')
      const f = Symbol('file')
      const d = Symbol('directory')
      const p = Symbol('symlink')
      const m = Symbol('hardlink')
      const y = Symbol('header')
      const b = Symbol('read')
      const w = Symbol('lstat')
      const E = Symbol('onlstat')
      const _ = Symbol('onread')
      const S = Symbol('onreadlink')
      const g = Symbol('openfile')
      const R = Symbol('onopenfile')
      const O = Symbol('close')
      const k = Symbol('mode')
      const v = Symbol('awaitDrain')
      const T = Symbol('ondrain')
      const L = Symbol('prefix')
      const x = Symbol('hadError')
      const A = s(8920)
      const I = s(4099)
      const D = s(332)
      const N = s(6601)
      const B = A(
        class WriteEntry extends i {
          constructor(t, e) {
            e = e || {}
            super(e)
            if (typeof t !== 'string') {
              throw new TypeError('path is required')
            }
            this.path = l(t)
            this.portable = !!e.portable
            this.myuid = (process.getuid && process.getuid()) || 0
            this.myuser = process.env.USER || ''
            this.maxReadSize = e.maxReadSize || c
            this.linkCache = e.linkCache || new Map()
            this.statCache = e.statCache || new Map()
            this.preservePaths = !!e.preservePaths
            this.cwd = l(e.cwd || process.cwd())
            this.strict = !!e.strict
            this.noPax = !!e.noPax
            this.noMtime = !!e.noMtime
            this.mtime = e.mtime || null
            this.prefix = e.prefix ? l(e.prefix) : null
            this.fd = null
            this.blockLen = null
            this.blockRemain = null
            this.buf = null
            this.offset = null
            this.length = null
            this.pos = null
            this.remain = null
            if (typeof e.onwarn === 'function') {
              this.on('warn', e.onwarn)
            }
            let s = false
            if (!this.preservePaths) {
              const [t, e] = D(this.path)
              if (t) {
                this.path = e
                s = t
              }
            }
            this.win32 = !!e.win32 || process.platform === 'win32'
            if (this.win32) {
              this.path = I.decode(this.path.replace(/\\/g, '/'))
              t = t.replace(/\\/g, '/')
            }
            this.absolute = l(e.absolute || h.resolve(this.cwd, t))
            if (this.path === '') {
              this.path = './'
            }
            if (s) {
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              })
            }
            if (this.statCache.has(this.absolute)) {
              this[E](this.statCache.get(this.absolute))
            } else {
              this[w]()
            }
          }
          emit(t, ...e) {
            if (t === 'error') {
              this[x] = true
            }
            return super.emit(t, ...e)
          }
          [w]() {
            o.lstat(this.absolute, (t, e) => {
              if (t) {
                return this.emit('error', t)
              }
              this[E](e)
            })
          }
          [E](t) {
            this.statCache.set(this.absolute, t)
            this.stat = t
            if (!t.isFile()) {
              t.size = 0
            }
            this.type = getType(t)
            this.emit('stat', t)
            this[u]()
          }
          [u]() {
            switch (this.type) {
              case 'File':
                return this[f]()
              case 'Directory':
                return this[d]()
              case 'SymbolicLink':
                return this[p]()
              default:
                return this.end()
            }
          }
          [k](t) {
            return N(t, this.type === 'Directory', this.portable)
          }
          [L](t) {
            return prefixPath(t, this.prefix)
          }
          [y]() {
            if (this.type === 'Directory' && this.portable) {
              this.noMtime = true
            }
            this.header = new r({
              path: this[L](this.path),
              linkpath:
                this.type === 'Link' ? this[L](this.linkpath) : this.linkpath,
              mode: this[k](this.stat.mode),
              uid: this.portable ? null : this.stat.uid,
              gid: this.portable ? null : this.stat.gid,
              size: this.stat.size,
              mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
              type: this.type,
              uname: this.portable
                ? null
                : this.stat.uid === this.myuid
                ? this.myuser
                : '',
              atime: this.portable ? null : this.stat.atime,
              ctime: this.portable ? null : this.stat.ctime,
            })
            if (this.header.encode() && !this.noPax) {
              super.write(
                new n({
                  atime: this.portable ? null : this.header.atime,
                  ctime: this.portable ? null : this.header.ctime,
                  gid: this.portable ? null : this.header.gid,
                  mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                  path: this[L](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[L](this.linkpath)
                      : this.linkpath,
                  size: this.header.size,
                  uid: this.portable ? null : this.header.uid,
                  uname: this.portable ? null : this.header.uname,
                  dev: this.portable ? null : this.stat.dev,
                  ino: this.portable ? null : this.stat.ino,
                  nlink: this.portable ? null : this.stat.nlink,
                }).encode()
              )
            }
            super.write(this.header.block)
          }
          [d]() {
            if (this.path.slice(-1) !== '/') {
              this.path += '/'
            }
            this.stat.size = 0
            this[y]()
            this.end()
          }
          [p]() {
            o.readlink(this.absolute, (t, e) => {
              if (t) {
                return this.emit('error', t)
              }
              this[S](e)
            })
          }
          [S](t) {
            this.linkpath = l(t)
            this[y]()
            this.end()
          }
          [m](t) {
            this.type = 'Link'
            this.linkpath = l(h.relative(this.cwd, t))
            this.stat.size = 0
            this[y]()
            this.end()
          }
          [f]() {
            if (this.stat.nlink > 1) {
              const t = this.stat.dev + ':' + this.stat.ino
              if (this.linkCache.has(t)) {
                const e = this.linkCache.get(t)
                if (e.indexOf(this.cwd) === 0) {
                  return this[m](e)
                }
              }
              this.linkCache.set(t, this.absolute)
            }
            this[y]()
            if (this.stat.size === 0) {
              return this.end()
            }
            this[g]()
          }
          [g]() {
            o.open(this.absolute, 'r', (t, e) => {
              if (t) {
                return this.emit('error', t)
              }
              this[R](e)
            })
          }
          [R](t) {
            this.fd = t
            if (this[x]) {
              return this[O]()
            }
            this.blockLen = 512 * Math.ceil(this.stat.size / 512)
            this.blockRemain = this.blockLen
            const e = Math.min(this.blockLen, this.maxReadSize)
            this.buf = Buffer.allocUnsafe(e)
            this.offset = 0
            this.pos = 0
            this.remain = this.stat.size
            this.length = this.buf.length
            this[b]()
          }
          [b]() {
            const { fd: t, buf: e, offset: s, length: i, pos: n } = this
            o.read(t, e, s, i, n, (t, e) => {
              if (t) {
                return this[O](() => this.emit('error', t))
              }
              this[_](e)
            })
          }
          [O](t) {
            o.close(this.fd, t)
          }
          [_](t) {
            if (t <= 0 && this.remain > 0) {
              const t = new Error('encountered unexpected EOF')
              t.path = this.absolute
              t.syscall = 'read'
              t.code = 'EOF'
              return this[O](() => this.emit('error', t))
            }
            if (t > this.remain) {
              const t = new Error('did not encounter expected EOF')
              t.path = this.absolute
              t.syscall = 'read'
              t.code = 'EOF'
              return this[O](() => this.emit('error', t))
            }
            if (t === this.remain) {
              for (let e = t; e < this.length && t < this.blockRemain; e++) {
                this.buf[e + this.offset] = 0
                t++
                this.remain++
              }
            }
            const e =
              this.offset === 0 && t === this.buf.length
                ? this.buf
                : this.buf.slice(this.offset, this.offset + t)
            const s = this.write(e)
            if (!s) {
              this[v](() => this[T]())
            } else {
              this[T]()
            }
          }
          [v](t) {
            this.once('drain', t)
          }
          write(t) {
            if (this.blockRemain < t.length) {
              const t = new Error('writing more data than expected')
              t.path = this.absolute
              return this.emit('error', t)
            }
            this.remain -= t.length
            this.blockRemain -= t.length
            this.pos += t.length
            this.offset += t.length
            return super.write(t)
          }
          [T]() {
            if (!this.remain) {
              if (this.blockRemain) {
                super.write(Buffer.alloc(this.blockRemain))
              }
              return this[O]((t) => (t ? this.emit('error', t) : this.end()))
            }
            if (this.offset >= this.length) {
              this.buf = Buffer.allocUnsafe(
                Math.min(this.blockRemain, this.buf.length)
              )
              this.offset = 0
            }
            this.length = this.buf.length - this.offset
            this[b]()
          }
        }
      )
      class WriteEntrySync extends B {
        [w]() {
          this[E](o.lstatSync(this.absolute))
        }
        [p]() {
          this[S](o.readlinkSync(this.absolute))
        }
        [g]() {
          this[R](o.openSync(this.absolute, 'r'))
        }
        [b]() {
          let t = true
          try {
            const { fd: e, buf: s, offset: i, length: n, pos: r } = this
            const h = o.readSync(e, s, i, n, r)
            this[_](h)
            t = false
          } finally {
            if (t) {
              try {
                this[O](() => {})
              } catch (t) {}
            }
          }
        }
        [v](t) {
          t()
        }
        [O](t) {
          o.closeSync(this.fd)
          t()
        }
      }
      const M = A(
        class WriteEntryTar extends i {
          constructor(t, e) {
            e = e || {}
            super(e)
            this.preservePaths = !!e.preservePaths
            this.portable = !!e.portable
            this.strict = !!e.strict
            this.noPax = !!e.noPax
            this.noMtime = !!e.noMtime
            this.readEntry = t
            this.type = t.type
            if (this.type === 'Directory' && this.portable) {
              this.noMtime = true
            }
            this.prefix = e.prefix || null
            this.path = l(t.path)
            this.mode = this[k](t.mode)
            this.uid = this.portable ? null : t.uid
            this.gid = this.portable ? null : t.gid
            this.uname = this.portable ? null : t.uname
            this.gname = this.portable ? null : t.gname
            this.size = t.size
            this.mtime = this.noMtime ? null : e.mtime || t.mtime
            this.atime = this.portable ? null : t.atime
            this.ctime = this.portable ? null : t.ctime
            this.linkpath = l(t.linkpath)
            if (typeof e.onwarn === 'function') {
              this.on('warn', e.onwarn)
            }
            let s = false
            if (!this.preservePaths) {
              const [t, e] = D(this.path)
              if (t) {
                this.path = e
                s = t
              }
            }
            this.remain = t.size
            this.blockRemain = t.startBlockSize
            this.header = new r({
              path: this[L](this.path),
              linkpath:
                this.type === 'Link' ? this[L](this.linkpath) : this.linkpath,
              mode: this.mode,
              uid: this.portable ? null : this.uid,
              gid: this.portable ? null : this.gid,
              size: this.size,
              mtime: this.noMtime ? null : this.mtime,
              type: this.type,
              uname: this.portable ? null : this.uname,
              atime: this.portable ? null : this.atime,
              ctime: this.portable ? null : this.ctime,
            })
            if (s) {
              this.warn('TAR_ENTRY_INFO', `stripping ${s} from absolute path`, {
                entry: this,
                path: s + this.path,
              })
            }
            if (this.header.encode() && !this.noPax) {
              super.write(
                new n({
                  atime: this.portable ? null : this.atime,
                  ctime: this.portable ? null : this.ctime,
                  gid: this.portable ? null : this.gid,
                  mtime: this.noMtime ? null : this.mtime,
                  path: this[L](this.path),
                  linkpath:
                    this.type === 'Link'
                      ? this[L](this.linkpath)
                      : this.linkpath,
                  size: this.size,
                  uid: this.portable ? null : this.uid,
                  uname: this.portable ? null : this.uname,
                  dev: this.portable ? null : this.readEntry.dev,
                  ino: this.portable ? null : this.readEntry.ino,
                  nlink: this.portable ? null : this.readEntry.nlink,
                }).encode()
              )
            }
            super.write(this.header.block)
            t.pipe(this)
          }
          [L](t) {
            return prefixPath(t, this.prefix)
          }
          [k](t) {
            return N(t, this.type === 'Directory', this.portable)
          }
          write(t) {
            const e = t.length
            if (e > this.blockRemain) {
              throw new Error('writing more to entry than is appropriate')
            }
            this.blockRemain -= e
            return super.write(t)
          }
          end() {
            if (this.blockRemain) {
              super.write(Buffer.alloc(this.blockRemain))
            }
            return super.end()
          }
        }
      )
      B.Sync = WriteEntrySync
      B.Tar = M
      const getType = (t) =>
        t.isFile()
          ? 'File'
          : t.isDirectory()
          ? 'Directory'
          : t.isSymbolicLink()
          ? 'SymbolicLink'
          : 'Unsupported'
      t.exports = B
    },
    9414: (t) => {
      'use strict'
      t.exports = function (t) {
        t.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) {
            yield t.value
          }
        }
      }
    },
    3401: (t, e, s) => {
      'use strict'
      t.exports = Yallist
      Yallist.Node = Node
      Yallist.create = Yallist
      function Yallist(t) {
        var e = this
        if (!(e instanceof Yallist)) {
          e = new Yallist()
        }
        e.tail = null
        e.head = null
        e.length = 0
        if (t && typeof t.forEach === 'function') {
          t.forEach(function (t) {
            e.push(t)
          })
        } else if (arguments.length > 0) {
          for (var s = 0, i = arguments.length; s < i; s++) {
            e.push(arguments[s])
          }
        }
        return e
      }
      Yallist.prototype.removeNode = function (t) {
        if (t.list !== this) {
          throw new Error('removing node which does not belong to this list')
        }
        var e = t.next
        var s = t.prev
        if (e) {
          e.prev = s
        }
        if (s) {
          s.next = e
        }
        if (t === this.head) {
          this.head = e
        }
        if (t === this.tail) {
          this.tail = s
        }
        t.list.length--
        t.next = null
        t.prev = null
        t.list = null
        return e
      }
      Yallist.prototype.unshiftNode = function (t) {
        if (t === this.head) {
          return
        }
        if (t.list) {
          t.list.removeNode(t)
        }
        var e = this.head
        t.list = this
        t.next = e
        if (e) {
          e.prev = t
        }
        this.head = t
        if (!this.tail) {
          this.tail = t
        }
        this.length++
      }
      Yallist.prototype.pushNode = function (t) {
        if (t === this.tail) {
          return
        }
        if (t.list) {
          t.list.removeNode(t)
        }
        var e = this.tail
        t.list = this
        t.prev = e
        if (e) {
          e.next = t
        }
        this.tail = t
        if (!this.head) {
          this.head = t
        }
        this.length++
      }
      Yallist.prototype.push = function () {
        for (var t = 0, e = arguments.length; t < e; t++) {
          push(this, arguments[t])
        }
        return this.length
      }
      Yallist.prototype.unshift = function () {
        for (var t = 0, e = arguments.length; t < e; t++) {
          unshift(this, arguments[t])
        }
        return this.length
      }
      Yallist.prototype.pop = function () {
        if (!this.tail) {
          return undefined
        }
        var t = this.tail.value
        this.tail = this.tail.prev
        if (this.tail) {
          this.tail.next = null
        } else {
          this.head = null
        }
        this.length--
        return t
      }
      Yallist.prototype.shift = function () {
        if (!this.head) {
          return undefined
        }
        var t = this.head.value
        this.head = this.head.next
        if (this.head) {
          this.head.prev = null
        } else {
          this.tail = null
        }
        this.length--
        return t
      }
      Yallist.prototype.forEach = function (t, e) {
        e = e || this
        for (var s = this.head, i = 0; s !== null; i++) {
          t.call(e, s.value, i, this)
          s = s.next
        }
      }
      Yallist.prototype.forEachReverse = function (t, e) {
        e = e || this
        for (var s = this.tail, i = this.length - 1; s !== null; i--) {
          t.call(e, s.value, i, this)
          s = s.prev
        }
      }
      Yallist.prototype.get = function (t) {
        for (var e = 0, s = this.head; s !== null && e < t; e++) {
          s = s.next
        }
        if (e === t && s !== null) {
          return s.value
        }
      }
      Yallist.prototype.getReverse = function (t) {
        for (var e = 0, s = this.tail; s !== null && e < t; e++) {
          s = s.prev
        }
        if (e === t && s !== null) {
          return s.value
        }
      }
      Yallist.prototype.map = function (t, e) {
        e = e || this
        var s = new Yallist()
        for (var i = this.head; i !== null; ) {
          s.push(t.call(e, i.value, this))
          i = i.next
        }
        return s
      }
      Yallist.prototype.mapReverse = function (t, e) {
        e = e || this
        var s = new Yallist()
        for (var i = this.tail; i !== null; ) {
          s.push(t.call(e, i.value, this))
          i = i.prev
        }
        return s
      }
      Yallist.prototype.reduce = function (t, e) {
        var s
        var i = this.head
        if (arguments.length > 1) {
          s = e
        } else if (this.head) {
          i = this.head.next
          s = this.head.value
        } else {
          throw new TypeError('Reduce of empty list with no initial value')
        }
        for (var n = 0; i !== null; n++) {
          s = t(s, i.value, n)
          i = i.next
        }
        return s
      }
      Yallist.prototype.reduceReverse = function (t, e) {
        var s
        var i = this.tail
        if (arguments.length > 1) {
          s = e
        } else if (this.tail) {
          i = this.tail.prev
          s = this.tail.value
        } else {
          throw new TypeError('Reduce of empty list with no initial value')
        }
        for (var n = this.length - 1; i !== null; n--) {
          s = t(s, i.value, n)
          i = i.prev
        }
        return s
      }
      Yallist.prototype.toArray = function () {
        var t = new Array(this.length)
        for (var e = 0, s = this.head; s !== null; e++) {
          t[e] = s.value
          s = s.next
        }
        return t
      }
      Yallist.prototype.toArrayReverse = function () {
        var t = new Array(this.length)
        for (var e = 0, s = this.tail; s !== null; e++) {
          t[e] = s.value
          s = s.prev
        }
        return t
      }
      Yallist.prototype.slice = function (t, e) {
        e = e || this.length
        if (e < 0) {
          e += this.length
        }
        t = t || 0
        if (t < 0) {
          t += this.length
        }
        var s = new Yallist()
        if (e < t || e < 0) {
          return s
        }
        if (t < 0) {
          t = 0
        }
        if (e > this.length) {
          e = this.length
        }
        for (var i = 0, n = this.head; n !== null && i < t; i++) {
          n = n.next
        }
        for (; n !== null && i < e; i++, n = n.next) {
          s.push(n.value)
        }
        return s
      }
      Yallist.prototype.sliceReverse = function (t, e) {
        e = e || this.length
        if (e < 0) {
          e += this.length
        }
        t = t || 0
        if (t < 0) {
          t += this.length
        }
        var s = new Yallist()
        if (e < t || e < 0) {
          return s
        }
        if (t < 0) {
          t = 0
        }
        if (e > this.length) {
          e = this.length
        }
        for (var i = this.length, n = this.tail; n !== null && i > e; i--) {
          n = n.prev
        }
        for (; n !== null && i > t; i--, n = n.prev) {
          s.push(n.value)
        }
        return s
      }
      Yallist.prototype.splice = function (t, e, ...s) {
        if (t > this.length) {
          t = this.length - 1
        }
        if (t < 0) {
          t = this.length + t
        }
        for (var i = 0, n = this.head; n !== null && i < t; i++) {
          n = n.next
        }
        var r = []
        for (var i = 0; n && i < e; i++) {
          r.push(n.value)
          n = this.removeNode(n)
        }
        if (n === null) {
          n = this.tail
        }
        if (n !== this.head && n !== this.tail) {
          n = n.prev
        }
        for (var i = 0; i < s.length; i++) {
          n = insert(this, n, s[i])
        }
        return r
      }
      Yallist.prototype.reverse = function () {
        var t = this.head
        var e = this.tail
        for (var s = t; s !== null; s = s.prev) {
          var i = s.prev
          s.prev = s.next
          s.next = i
        }
        this.head = e
        this.tail = t
        return this
      }
      function insert(t, e, s) {
        var i =
          e === t.head ? new Node(s, null, e, t) : new Node(s, e, e.next, t)
        if (i.next === null) {
          t.tail = i
        }
        if (i.prev === null) {
          t.head = i
        }
        t.length++
        return i
      }
      function push(t, e) {
        t.tail = new Node(e, t.tail, null, t)
        if (!t.head) {
          t.head = t.tail
        }
        t.length++
      }
      function unshift(t, e) {
        t.head = new Node(e, null, t.head, t)
        if (!t.tail) {
          t.tail = t.head
        }
        t.length++
      }
      function Node(t, e, s, i) {
        if (!(this instanceof Node)) {
          return new Node(t, e, s, i)
        }
        this.list = i
        this.value = t
        if (e) {
          e.next = this
          this.prev = e
        } else {
          this.prev = null
        }
        if (s) {
          s.prev = this
          this.next = s
        } else {
          this.next = null
        }
      }
      try {
        s(9414)(Yallist)
      } catch (t) {}
    },
    9491: (t) => {
      'use strict'
      t.exports = require('assert')
    },
    4300: (t) => {
      'use strict'
      t.exports = require('buffer')
    },
    6113: (t) => {
      'use strict'
      t.exports = require('crypto')
    },
    2361: (t) => {
      'use strict'
      t.exports = require('events')
    },
    7147: (t) => {
      'use strict'
      t.exports = require('fs')
    },
    1017: (t) => {
      'use strict'
      t.exports = require('path')
    },
    7282: (t) => {
      'use strict'
      t.exports = require('process')
    },
    2781: (t) => {
      'use strict'
      t.exports = require('stream')
    },
    1576: (t) => {
      'use strict'
      t.exports = require('string_decoder')
    },
    3837: (t) => {
      'use strict'
      t.exports = require('util')
    },
    9796: (t) => {
      'use strict'
      t.exports = require('zlib')
    },
  }
  var e = {}
  function __nccwpck_require__(s) {
    var i = e[s]
    if (i !== undefined) {
      return i.exports
    }
    var n = (e[s] = { exports: {} })
    var r = true
    try {
      t[s](n, n.exports, __nccwpck_require__)
      r = false
    } finally {
      if (r) delete e[s]
    }
    return n.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var s = {}
  ;(() => {
    'use strict'
    var t = s
    t.c = t.create = __nccwpck_require__(7585)
    t.r = t.replace = __nccwpck_require__(1138)
    t.t = t.list = __nccwpck_require__(4975)
    t.u = t.update = __nccwpck_require__(9472)
    t.x = t.extract = __nccwpck_require__(9985)
    t.Pack = __nccwpck_require__(7301)
    t.Unpack = __nccwpck_require__(5951)
    t.Parse = __nccwpck_require__(5222)
    t.ReadEntry = __nccwpck_require__(5917)
    t.WriteEntry = __nccwpck_require__(1944)
    t.Header = __nccwpck_require__(1703)
    t.Pax = __nccwpck_require__(9037)
    t.types = __nccwpck_require__(1046)
  })()
  module.exports = s
})()
