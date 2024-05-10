;(() => {
  var t = {
    399: (t, e, n) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.detector = void 0
      const r = n(230)
      const i = Object.keys(r.typeHandlers)
      const s = {
        56: 'psd',
        66: 'bmp',
        68: 'dds',
        71: 'gif',
        73: 'tiff',
        77: 'tiff',
        82: 'webp',
        105: 'icns',
        137: 'png',
        255: 'jpg',
      }
      function detector(t) {
        const e = t[0]
        if (e in s) {
          const n = s[e]
          if (n && r.typeHandlers[n].validate(t)) {
            return n
          }
        }
        const finder = (e) => r.typeHandlers[e].validate(t)
        return i.find(finder)
      }
      e.detector = detector
    },
    501: function (t, e, n) {
      'use strict'
      var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          function adopt(t) {
            return t instanceof n
              ? t
              : new n(function (e) {
                  e(t)
                })
          }
          return new (n || (n = Promise))(function (n, i) {
            function fulfilled(t) {
              try {
                step(r.next(t))
              } catch (t) {
                i(t)
              }
            }
            function rejected(t) {
              try {
                step(r['throw'](t))
              } catch (t) {
                i(t)
              }
            }
            function step(t) {
              t.done ? n(t.value) : adopt(t.value).then(fulfilled, rejected)
            }
            step((r = r.apply(t, e || [])).next())
          })
        }
      Object.defineProperty(e, '__esModule', { value: true })
      e.types =
        e.setConcurrency =
        e.disableTypes =
        e.disableFS =
        e.imageSize =
          void 0
      const i = n(147)
      const s = n(17)
      const o = n(927)
      const c = n(230)
      const a = n(399)
      const u = 512 * 1024
      const l = new o.default({ concurrency: 100, autostart: true })
      const d = { disabledFS: false, disabledTypes: [] }
      function lookup(t, e) {
        const n = a.detector(t)
        if (typeof n !== 'undefined') {
          if (d.disabledTypes.indexOf(n) > -1) {
            throw new TypeError('disabled file type: ' + n)
          }
          if (n in c.typeHandlers) {
            const r = c.typeHandlers[n].calculate(t, e)
            if (r !== undefined) {
              r.type = n
              return r
            }
          }
        }
        throw new TypeError(
          'unsupported file type: ' + n + ' (file: ' + e + ')'
        )
      }
      function asyncFileToBuffer(t) {
        return r(this, void 0, void 0, function* () {
          const e = yield i.promises.open(t, 'r')
          const { size: n } = yield e.stat()
          if (n <= 0) {
            yield e.close()
            throw new Error('Empty file')
          }
          const r = Math.min(n, u)
          const s = Buffer.alloc(r)
          yield e.read(s, 0, r, 0)
          yield e.close()
          return s
        })
      }
      function syncFileToBuffer(t) {
        const e = i.openSync(t, 'r')
        const { size: n } = i.fstatSync(e)
        if (n <= 0) {
          i.closeSync(e)
          throw new Error('Empty file')
        }
        const r = Math.min(n, u)
        const s = Buffer.alloc(r)
        i.readSync(e, s, 0, r, 0)
        i.closeSync(e)
        return s
      }
      t.exports = e = imageSize
      e['default'] = imageSize
      function imageSize(t, e) {
        if (Buffer.isBuffer(t)) {
          return lookup(t)
        }
        if (typeof t !== 'string' || d.disabledFS) {
          throw new TypeError('invalid invocation. input should be a Buffer')
        }
        const n = s.resolve(t)
        if (typeof e === 'function') {
          l.push(() =>
            asyncFileToBuffer(n)
              .then((t) => process.nextTick(e, null, lookup(t, n)))
              .catch(e)
          )
        } else {
          const t = syncFileToBuffer(n)
          return lookup(t, n)
        }
      }
      e.imageSize = imageSize
      const disableFS = (t) => {
        d.disabledFS = t
      }
      e.disableFS = disableFS
      const disableTypes = (t) => {
        d.disabledTypes = t
      }
      e.disableTypes = disableTypes
      const setConcurrency = (t) => {
        l.concurrency = t
      }
      e.setConcurrency = setConcurrency
      e.types = Object.keys(c.typeHandlers)
    },
    326: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.readUInt = void 0
      function readUInt(t, e, n, r) {
        n = n || 0
        const i = r ? 'BE' : 'LE'
        const s = 'readUInt' + e + i
        return t[s].call(t, n)
      }
      e.readUInt = readUInt
    },
    230: (t, e, n) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.typeHandlers = void 0
      const r = n(798)
      const i = n(925)
      const s = n(813)
      const o = n(259)
      const c = n(341)
      const a = n(541)
      const u = n(852)
      const l = n(182)
      const d = n(32)
      const h = n(707)
      const f = n(179)
      const p = n(457)
      const g = n(438)
      const y = n(12)
      const v = n(167)
      const w = n(185)
      e.typeHandlers = {
        bmp: r.BMP,
        cur: i.CUR,
        dds: s.DDS,
        gif: o.GIF,
        icns: c.ICNS,
        ico: a.ICO,
        j2c: u.J2C,
        jp2: l.JP2,
        jpg: d.JPG,
        ktx: h.KTX,
        png: f.PNG,
        pnm: p.PNM,
        psd: g.PSD,
        svg: y.SVG,
        tiff: v.TIFF,
        webp: w.WEBP,
      }
    },
    798: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.BMP = void 0
      e.BMP = {
        validate(t) {
          return 'BM' === t.toString('ascii', 0, 2)
        },
        calculate(t) {
          return {
            height: Math.abs(t.readInt32LE(22)),
            width: t.readUInt32LE(18),
          }
        },
      }
    },
    925: (t, e, n) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.CUR = void 0
      const r = n(541)
      const i = 2
      e.CUR = {
        validate(t) {
          if (t.readUInt16LE(0) !== 0) {
            return false
          }
          return t.readUInt16LE(2) === i
        },
        calculate(t) {
          return r.ICO.calculate(t)
        },
      }
    },
    813: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.DDS = void 0
      e.DDS = {
        validate(t) {
          return t.readUInt32LE(0) === 542327876
        },
        calculate(t) {
          return { height: t.readUInt32LE(12), width: t.readUInt32LE(16) }
        },
      }
    },
    259: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.GIF = void 0
      const n = /^GIF8[79]a/
      e.GIF = {
        validate(t) {
          const e = t.toString('ascii', 0, 6)
          return n.test(e)
        },
        calculate(t) {
          return { height: t.readUInt16LE(8), width: t.readUInt16LE(6) }
        },
      }
    },
    341: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.ICNS = void 0
      const n = 4 + 4
      const r = 4
      const i = 4
      const s = {
        ICON: 32,
        'ICN#': 32,
        'icm#': 16,
        icm4: 16,
        icm8: 16,
        'ics#': 16,
        ics4: 16,
        ics8: 16,
        is32: 16,
        s8mk: 16,
        icp4: 16,
        icl4: 32,
        icl8: 32,
        il32: 32,
        l8mk: 32,
        icp5: 32,
        ic11: 32,
        ich4: 48,
        ich8: 48,
        ih32: 48,
        h8mk: 48,
        icp6: 64,
        ic12: 32,
        it32: 128,
        t8mk: 128,
        ic07: 128,
        ic08: 256,
        ic13: 256,
        ic09: 512,
        ic14: 512,
        ic10: 1024,
      }
      function readImageHeader(t, e) {
        const n = e + i
        return [t.toString('ascii', e, n), t.readUInt32BE(n)]
      }
      function getImageSize(t) {
        const e = s[t]
        return { width: e, height: e, type: t }
      }
      e.ICNS = {
        validate(t) {
          return 'icns' === t.toString('ascii', 0, 4)
        },
        calculate(t) {
          const e = t.length
          const i = t.readUInt32BE(r)
          let s = n
          let o = readImageHeader(t, s)
          let c = getImageSize(o[0])
          s += o[1]
          if (s === i) {
            return c
          }
          const a = { height: c.height, images: [c], width: c.width }
          while (s < i && s < e) {
            o = readImageHeader(t, s)
            c = getImageSize(o[0])
            s += o[1]
            a.images.push(c)
          }
          return a
        },
      }
    },
    541: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.ICO = void 0
      const n = 1
      const r = 2 + 2 + 2
      const i = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4
      function getSizeFromOffset(t, e) {
        const n = t.readUInt8(e)
        return n === 0 ? 256 : n
      }
      function getImageSize(t, e) {
        const n = r + e * i
        return {
          height: getSizeFromOffset(t, n + 1),
          width: getSizeFromOffset(t, n),
        }
      }
      e.ICO = {
        validate(t) {
          if (t.readUInt16LE(0) !== 0) {
            return false
          }
          return t.readUInt16LE(2) === n
        },
        calculate(t) {
          const e = t.readUInt16LE(4)
          const n = getImageSize(t, 0)
          if (e === 1) {
            return n
          }
          const r = [n]
          for (let n = 1; n < e; n += 1) {
            r.push(getImageSize(t, n))
          }
          const i = { height: n.height, images: r, width: n.width }
          return i
        },
      }
    },
    852: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.J2C = void 0
      e.J2C = {
        validate(t) {
          return t.toString('hex', 0, 4) === 'ff4fff51'
        },
        calculate(t) {
          return { height: t.readUInt32BE(12), width: t.readUInt32BE(8) }
        },
      }
    },
    182: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.JP2 = void 0
      const n = {
        ftyp: '66747970',
        ihdr: '69686472',
        jp2h: '6a703268',
        jp__: '6a502020',
        rreq: '72726571',
        xml_: '786d6c20',
      }
      const calculateRREQLength = (t) => {
        const e = t.readUInt8(0)
        let n = 1 + 2 * e
        const r = t.readUInt16BE(n)
        const i = r * (2 + e)
        n = n + 2 + i
        const s = t.readUInt16BE(n)
        const o = s * (16 + e)
        return n + 2 + o
      }
      const parseIHDR = (t) => ({
        height: t.readUInt32BE(4),
        width: t.readUInt32BE(8),
      })
      e.JP2 = {
        validate(t) {
          const e = t.toString('hex', 4, 8)
          const r = t.readUInt32BE(0)
          if (e !== n.jp__ || r < 1) {
            return false
          }
          const i = r + 4
          const s = t.readUInt32BE(r)
          const o = t.slice(i, i + s)
          return o.toString('hex', 0, 4) === n.ftyp
        },
        calculate(t) {
          const e = t.readUInt32BE(0)
          const r = t.readUInt16BE(e + 2)
          let i = e + 4 + r
          const s = t.toString('hex', i, i + 4)
          switch (s) {
            case n.rreq:
              const e = 4
              i = i + 4 + e + calculateRREQLength(t.slice(i + 4))
              return parseIHDR(t.slice(i + 8, i + 24))
            case n.jp2h:
              return parseIHDR(t.slice(i + 8, i + 24))
            default:
              throw new TypeError(
                'Unsupported header found: ' + t.toString('ascii', i, i + 4)
              )
          }
        },
      }
    },
    32: (t, e, n) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.JPG = void 0
      const r = n(326)
      const i = '45786966'
      const s = 2
      const o = 6
      const c = 2
      const a = '4d4d'
      const u = '4949'
      const l = 12
      const d = 2
      function isEXIF(t) {
        return t.toString('hex', 2, 6) === i
      }
      function extractSize(t, e) {
        return { height: t.readUInt16BE(e), width: t.readUInt16BE(e + 2) }
      }
      function extractOrientation(t, e) {
        const n = 8
        const i = o + n
        const s = r.readUInt(t, 16, i, e)
        for (let n = 0; n < s; n++) {
          const s = i + d + n * l
          const o = s + l
          if (s > t.length) {
            return
          }
          const c = t.slice(s, o)
          const a = r.readUInt(c, 16, 0, e)
          if (a === 274) {
            const t = r.readUInt(c, 16, 2, e)
            if (t !== 3) {
              return
            }
            const n = r.readUInt(c, 32, 4, e)
            if (n !== 1) {
              return
            }
            return r.readUInt(c, 16, 8, e)
          }
        }
      }
      function validateExifBlock(t, e) {
        const n = t.slice(s, e)
        const r = n.toString('hex', o, o + c)
        const i = r === a
        const l = r === u
        if (i || l) {
          return extractOrientation(n, i)
        }
      }
      function validateBuffer(t, e) {
        if (e > t.length) {
          throw new TypeError('Corrupt JPG, exceeded buffer limits')
        }
        if (t[e] !== 255) {
          throw new TypeError('Invalid JPG, marker table corrupted')
        }
      }
      e.JPG = {
        validate(t) {
          const e = t.toString('hex', 0, 2)
          return 'ffd8' === e
        },
        calculate(t) {
          t = t.slice(4)
          let e
          let n
          while (t.length) {
            const r = t.readUInt16BE(0)
            if (isEXIF(t)) {
              e = validateExifBlock(t, r)
            }
            validateBuffer(t, r)
            n = t[r + 1]
            if (n === 192 || n === 193 || n === 194) {
              const n = extractSize(t, r + 5)
              if (!e) {
                return n
              }
              return { height: n.height, orientation: e, width: n.width }
            }
            t = t.slice(r + 2)
          }
          throw new TypeError('Invalid JPG, no size found')
        },
      }
    },
    707: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.KTX = void 0
      const n = 'KTX 11'
      e.KTX = {
        validate(t) {
          return n === t.toString('ascii', 1, 7)
        },
        calculate(t) {
          return { height: t.readUInt32LE(40), width: t.readUInt32LE(36) }
        },
      }
    },
    179: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.PNG = void 0
      const n = 'PNG\r\n\n'
      const r = 'IHDR'
      const i = 'CgBI'
      e.PNG = {
        validate(t) {
          if (n === t.toString('ascii', 1, 8)) {
            let e = t.toString('ascii', 12, 16)
            if (e === i) {
              e = t.toString('ascii', 28, 32)
            }
            if (e !== r) {
              throw new TypeError('Invalid PNG')
            }
            return true
          }
          return false
        },
        calculate(t) {
          if (t.toString('ascii', 12, 16) === i) {
            return { height: t.readUInt32BE(36), width: t.readUInt32BE(32) }
          }
          return { height: t.readUInt32BE(20), width: t.readUInt32BE(16) }
        },
      }
    },
    457: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.PNM = void 0
      const n = {
        P1: 'pbm/ascii',
        P2: 'pgm/ascii',
        P3: 'ppm/ascii',
        P4: 'pbm',
        P5: 'pgm',
        P6: 'ppm',
        P7: 'pam',
        PF: 'pfm',
      }
      const r = Object.keys(n)
      const i = {
        default: (t) => {
          let e = []
          while (t.length > 0) {
            const n = t.shift()
            if (n[0] === '#') {
              continue
            }
            e = n.split(' ')
            break
          }
          if (e.length === 2) {
            return { height: parseInt(e[1], 10), width: parseInt(e[0], 10) }
          } else {
            throw new TypeError('Invalid PNM')
          }
        },
        pam: (t) => {
          const e = {}
          while (t.length > 0) {
            const n = t.shift()
            if (n.length > 16 || n.charCodeAt(0) > 128) {
              continue
            }
            const [r, i] = n.split(' ')
            if (r && i) {
              e[r.toLowerCase()] = parseInt(i, 10)
            }
            if (e.height && e.width) {
              break
            }
          }
          if (e.height && e.width) {
            return { height: e.height, width: e.width }
          } else {
            throw new TypeError('Invalid PAM')
          }
        },
      }
      e.PNM = {
        validate(t) {
          const e = t.toString('ascii', 0, 2)
          return r.includes(e)
        },
        calculate(t) {
          const e = t.toString('ascii', 0, 2)
          const r = n[e]
          const s = t.toString('ascii', 3).split(/[\r\n]+/)
          const o = i[r] || i.default
          return o(s)
        },
      }
    },
    438: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.PSD = void 0
      e.PSD = {
        validate(t) {
          return '8BPS' === t.toString('ascii', 0, 4)
        },
        calculate(t) {
          return { height: t.readUInt32BE(14), width: t.readUInt32BE(18) }
        },
      }
    },
    12: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.SVG = void 0
      const n = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/
      const r = {
        height: /\sheight=(['"])([^%]+?)\1/,
        root: n,
        viewbox: /\sviewBox=(['"])(.+?)\1/i,
        width: /\swidth=(['"])([^%]+?)\1/,
      }
      const i = 2.54
      const s = {
        in: 96,
        cm: 96 / i,
        em: 16,
        ex: 8,
        m: (96 / i) * 100,
        mm: 96 / i / 10,
        pc: 96 / 72 / 12,
        pt: 96 / 72,
        px: 1,
      }
      const o = new RegExp(
        `^([0-9.]+(?:e\\d+)?)(${Object.keys(s).join('|')})?$`
      )
      function parseLength(t) {
        const e = o.exec(t)
        if (!e) {
          return undefined
        }
        return Math.round(Number(e[1]) * (s[e[2]] || 1))
      }
      function parseViewbox(t) {
        const e = t.split(' ')
        return { height: parseLength(e[3]), width: parseLength(e[2]) }
      }
      function parseAttributes(t) {
        const e = t.match(r.width)
        const n = t.match(r.height)
        const i = t.match(r.viewbox)
        return {
          height: n && parseLength(n[2]),
          viewbox: i && parseViewbox(i[2]),
          width: e && parseLength(e[2]),
        }
      }
      function calculateByDimensions(t) {
        return { height: t.height, width: t.width }
      }
      function calculateByViewbox(t, e) {
        const n = e.width / e.height
        if (t.width) {
          return { height: Math.floor(t.width / n), width: t.width }
        }
        if (t.height) {
          return { height: t.height, width: Math.floor(t.height * n) }
        }
        return { height: e.height, width: e.width }
      }
      e.SVG = {
        validate(t) {
          const e = String(t)
          return n.test(e)
        },
        calculate(t) {
          const e = t.toString('utf8').match(r.root)
          if (e) {
            const t = parseAttributes(e[0])
            if (t.width && t.height) {
              return calculateByDimensions(t)
            }
            if (t.viewbox) {
              return calculateByViewbox(t, t.viewbox)
            }
          }
          throw new TypeError('Invalid SVG')
        },
      }
    },
    167: (t, e, n) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.TIFF = void 0
      const r = n(147)
      const i = n(326)
      function readIFD(t, e, n) {
        const s = i.readUInt(t, 32, 4, n)
        let o = 1024
        const c = r.statSync(e).size
        if (s + o > c) {
          o = c - s - 10
        }
        const a = Buffer.alloc(o)
        const u = r.openSync(e, 'r')
        r.readSync(u, a, 0, o, s)
        r.closeSync(u)
        return a.slice(2)
      }
      function readValue(t, e) {
        const n = i.readUInt(t, 16, 8, e)
        const r = i.readUInt(t, 16, 10, e)
        return (r << 16) + n
      }
      function nextTag(t) {
        if (t.length > 24) {
          return t.slice(12)
        }
      }
      function extractTags(t, e) {
        const n = {}
        let r = t
        while (r && r.length) {
          const t = i.readUInt(r, 16, 0, e)
          const s = i.readUInt(r, 16, 2, e)
          const o = i.readUInt(r, 32, 4, e)
          if (t === 0) {
            break
          } else {
            if (o === 1 && (s === 3 || s === 4)) {
              n[t] = readValue(r, e)
            }
            r = nextTag(r)
          }
        }
        return n
      }
      function determineEndianness(t) {
        const e = t.toString('ascii', 0, 2)
        if ('II' === e) {
          return 'LE'
        } else if ('MM' === e) {
          return 'BE'
        }
      }
      const s = ['49492a00', '4d4d002a']
      e.TIFF = {
        validate(t) {
          return s.includes(t.toString('hex', 0, 4))
        },
        calculate(t, e) {
          if (!e) {
            throw new TypeError("Tiff doesn't support buffer")
          }
          const n = determineEndianness(t) === 'BE'
          const r = readIFD(t, e, n)
          const i = extractTags(r, n)
          const s = i[256]
          const o = i[257]
          if (!s || !o) {
            throw new TypeError('Invalid Tiff. Missing tags')
          }
          return { height: o, width: s }
        },
      }
    },
    185: (t, e) => {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: true })
      e.WEBP = void 0
      function calculateExtended(t) {
        return { height: 1 + t.readUIntLE(7, 3), width: 1 + t.readUIntLE(4, 3) }
      }
      function calculateLossless(t) {
        return {
          height: 1 + (((t[4] & 15) << 10) | (t[3] << 2) | ((t[2] & 192) >> 6)),
          width: 1 + (((t[2] & 63) << 8) | t[1]),
        }
      }
      function calculateLossy(t) {
        return {
          height: t.readInt16LE(8) & 16383,
          width: t.readInt16LE(6) & 16383,
        }
      }
      e.WEBP = {
        validate(t) {
          const e = 'RIFF' === t.toString('ascii', 0, 4)
          const n = 'WEBP' === t.toString('ascii', 8, 12)
          const r = 'VP8' === t.toString('ascii', 12, 15)
          return e && n && r
        },
        calculate(t) {
          const e = t.toString('ascii', 12, 16)
          t = t.slice(20, 30)
          if (e === 'VP8X') {
            const e = t[0]
            const n = (e & 192) === 0
            const r = (e & 1) === 0
            if (n && r) {
              return calculateExtended(t)
            } else {
              throw new TypeError('Invalid WebP')
            }
          }
          if (e === 'VP8 ' && t[0] !== 47) {
            return calculateLossy(t)
          }
          const n = t.toString('hex', 3, 6)
          if (e === 'VP8L' && n !== '9d012a') {
            return calculateLossless(t)
          }
          throw new TypeError('Invalid WebP')
        },
      }
    },
    842: (t, e, n) => {
      try {
        var r = n(837)
        if (typeof r.inherits !== 'function') throw ''
        t.exports = r.inherits
      } catch (e) {
        t.exports = n(782)
      }
    },
    782: (t) => {
      if (typeof Object.create === 'function') {
        t.exports = function inherits(t, e) {
          if (e) {
            t.super_ = e
            t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            })
          }
        }
      } else {
        t.exports = function inherits(t, e) {
          if (e) {
            t.super_ = e
            var TempCtor = function () {}
            TempCtor.prototype = e.prototype
            t.prototype = new TempCtor()
            t.prototype.constructor = t
          }
        }
      }
    },
    927: (t, e, n) => {
      var r = n(842)
      var i = n(361).EventEmitter
      t.exports = Queue
      t.exports['default'] = Queue
      function Queue(t) {
        if (!(this instanceof Queue)) {
          return new Queue(t)
        }
        i.call(this)
        t = t || {}
        this.concurrency = t.concurrency || Infinity
        this.timeout = t.timeout || 0
        this.autostart = t.autostart || false
        this.results = t.results || null
        this.pending = 0
        this.session = 0
        this.running = false
        this.jobs = []
        this.timers = {}
      }
      r(Queue, i)
      var s = ['pop', 'shift', 'indexOf', 'lastIndexOf']
      s.forEach(function (t) {
        Queue.prototype[t] = function () {
          return Array.prototype[t].apply(this.jobs, arguments)
        }
      })
      Queue.prototype.slice = function (t, e) {
        this.jobs = this.jobs.slice(t, e)
        return this
      }
      Queue.prototype.reverse = function () {
        this.jobs.reverse()
        return this
      }
      var o = ['push', 'unshift', 'splice']
      o.forEach(function (t) {
        Queue.prototype[t] = function () {
          var e = Array.prototype[t].apply(this.jobs, arguments)
          if (this.autostart) {
            this.start()
          }
          return e
        }
      })
      Object.defineProperty(Queue.prototype, 'length', {
        get: function () {
          return this.pending + this.jobs.length
        },
      })
      Queue.prototype.start = function (t) {
        if (t) {
          callOnErrorOrEnd.call(this, t)
        }
        this.running = true
        if (this.pending >= this.concurrency) {
          return
        }
        if (this.jobs.length === 0) {
          if (this.pending === 0) {
            done.call(this)
          }
          return
        }
        var e = this
        var n = this.jobs.shift()
        var r = true
        var i = this.session
        var s = null
        var o = false
        var c = null
        var a = n.hasOwnProperty('timeout') ? n.timeout : this.timeout
        function next(t, a) {
          if (r && e.session === i) {
            r = false
            e.pending--
            if (s !== null) {
              delete e.timers[s]
              clearTimeout(s)
            }
            if (t) {
              e.emit('error', t, n)
            } else if (o === false) {
              if (c !== null) {
                e.results[c] = Array.prototype.slice.call(arguments, 1)
              }
              e.emit('success', a, n)
            }
            if (e.session === i) {
              if (e.pending === 0 && e.jobs.length === 0) {
                done.call(e)
              } else if (e.running) {
                e.start()
              }
            }
          }
        }
        if (a) {
          s = setTimeout(function () {
            o = true
            if (e.listeners('timeout').length > 0) {
              e.emit('timeout', next, n)
            } else {
              next()
            }
          }, a)
          this.timers[s] = s
        }
        if (this.results) {
          c = this.results.length
          this.results[c] = null
        }
        this.pending++
        e.emit('start', n)
        var u = n(next)
        if (u && u.then && typeof u.then === 'function') {
          u.then(function (t) {
            return next(null, t)
          }).catch(function (t) {
            return next(t || true)
          })
        }
        if (this.running && this.jobs.length > 0) {
          this.start()
        }
      }
      Queue.prototype.stop = function () {
        this.running = false
      }
      Queue.prototype.end = function (t) {
        clearTimers.call(this)
        this.jobs.length = 0
        this.pending = 0
        done.call(this, t)
      }
      function clearTimers() {
        for (var t in this.timers) {
          var e = this.timers[t]
          delete this.timers[t]
          clearTimeout(e)
        }
      }
      function callOnErrorOrEnd(t) {
        var e = this
        this.on('error', onerror)
        this.on('end', onend)
        function onerror(t) {
          e.end(t)
        }
        function onend(n) {
          e.removeListener('error', onerror)
          e.removeListener('end', onend)
          t(n, this.results)
        }
      }
      function done(t) {
        this.session++
        this.running = false
        this.emit('end', t)
      }
    },
    361: (t) => {
      'use strict'
      t.exports = require('events')
    },
    147: (t) => {
      'use strict'
      t.exports = require('fs')
    },
    17: (t) => {
      'use strict'
      t.exports = require('path')
    },
    837: (t) => {
      'use strict'
      t.exports = require('util')
    },
  }
  var e = {}
  function __nccwpck_require__(n) {
    var r = e[n]
    if (r !== undefined) {
      return r.exports
    }
    var i = (e[n] = { exports: {} })
    var s = true
    try {
      t[n].call(i.exports, i, i.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete e[n]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = __nccwpck_require__(501)
  module.exports = n
})()
