;(() => {
  var e = {
    873: (e, t, n) => {
      'use strict'
      var r = n(742)
      var i = []
      e.exports = asap
      function asap(e) {
        var t
        if (i.length) {
          t = i.pop()
        } else {
          t = new RawTask()
        }
        t.task = e
        t.domain = process.domain
        r(t)
      }
      function RawTask() {
        this.task = null
        this.domain = null
      }
      RawTask.prototype.call = function () {
        if (this.domain) {
          this.domain.enter()
        }
        var e = true
        try {
          this.task.call()
          e = false
          if (this.domain) {
            this.domain.exit()
          }
        } finally {
          if (e) {
            r.requestFlush()
          }
          this.task = null
          this.domain = null
          i.push(this)
        }
      }
    },
    742: (e, t, n) => {
      'use strict'
      var r
      var i = typeof setImmediate === 'function'
      e.exports = rawAsap
      function rawAsap(e) {
        if (!s.length) {
          requestFlush()
          o = true
        }
        s[s.length] = e
      }
      var s = []
      var o = false
      var a = 0
      var l = 1024
      function flush() {
        while (a < s.length) {
          var e = a
          a = a + 1
          s[e].call()
          if (a > l) {
            for (var t = 0, n = s.length - a; t < n; t++) {
              s[t] = s[t + a]
            }
            s.length -= a
            a = 0
          }
        }
        s.length = 0
        a = 0
        o = false
      }
      rawAsap.requestFlush = requestFlush
      function requestFlush() {
        var e = process.domain
        if (e) {
          if (!r) {
            r = n(639)
          }
          r.active = process.domain = null
        }
        if (o && i) {
          setImmediate(flush)
        } else {
          process.nextTick(flush)
        }
        if (e) {
          r.active = process.domain = e
        }
      }
    },
    758: (e, t, n) => {
      var r = {}
      e['exports'] = r
      r.themes = {}
      var i = n(837)
      var s = (r.styles = n(77))
      var o = Object.defineProperties
      var a = new RegExp(/[\r\n]+/g)
      r.supportsColor = n(725).supportsColor
      if (typeof r.enabled === 'undefined') {
        r.enabled = r.supportsColor() !== false
      }
      r.enable = function () {
        r.enabled = true
      }
      r.disable = function () {
        r.enabled = false
      }
      r.stripColors = r.strip = function (e) {
        return ('' + e).replace(/\x1B\[\d+m/g, '')
      }
      var l = (r.stylize = function stylize(e, t) {
        if (!r.enabled) {
          return e + ''
        }
        var n = s[t]
        if (!n && t in r) {
          return r[t](e)
        }
        return n.open + e + n.close
      })
      var u = /[|\\{}()[\]^$+*?.]/g
      var escapeStringRegexp = function (e) {
        if (typeof e !== 'string') {
          throw new TypeError('Expected a string')
        }
        return e.replace(u, '\\$&')
      }
      function build(e) {
        var t = function builder() {
          return applyStyle.apply(builder, arguments)
        }
        t._styles = e
        t.__proto__ = h
        return t
      }
      var c = (function () {
        var e = {}
        s.grey = s.gray
        Object.keys(s).forEach(function (t) {
          s[t].closeRe = new RegExp(escapeStringRegexp(s[t].close), 'g')
          e[t] = {
            get: function () {
              return build(this._styles.concat(t))
            },
          }
        })
        return e
      })()
      var h = o(function colors() {}, c)
      function applyStyle() {
        var e = Array.prototype.slice.call(arguments)
        var t = e
          .map(function (e) {
            if (e != null && e.constructor === String) {
              return e
            } else {
              return i.inspect(e)
            }
          })
          .join(' ')
        if (!r.enabled || !t) {
          return t
        }
        var n = t.indexOf('\n') != -1
        var o = this._styles
        var l = o.length
        while (l--) {
          var u = s[o[l]]
          t = u.open + t.replace(u.closeRe, u.open) + u.close
          if (n) {
            t = t.replace(a, function (e) {
              return u.close + e + u.open
            })
          }
        }
        return t
      }
      r.setTheme = function (e) {
        if (typeof e === 'string') {
          console.log(
            'colors.setTheme now only accepts an object, not a string.  ' +
              'If you are trying to set a theme from a file, it is now your (the ' +
              "caller's) responsibility to require the file.  The old syntax " +
              'looked like colors.setTheme(__dirname + ' +
              "'/../themes/generic-logging.js'); The new syntax looks like " +
              'colors.setTheme(require(__dirname + ' +
              "'/../themes/generic-logging.js'));"
          )
          return
        }
        for (var t in e) {
          ;(function (t) {
            r[t] = function (n) {
              if (typeof e[t] === 'object') {
                var i = n
                for (var s in e[t]) {
                  i = r[e[t][s]](i)
                }
                return i
              }
              return r[e[t]](n)
            }
          })(t)
        }
      }
      function init() {
        var e = {}
        Object.keys(c).forEach(function (t) {
          e[t] = {
            get: function () {
              return build([t])
            },
          }
        })
        return e
      }
      var p = function sequencer(e, t) {
        var n = t.split('')
        n = n.map(e)
        return n.join('')
      }
      r.trap = n(822)
      r.zalgo = n(576)
      r.maps = {}
      r.maps.america = n(967)(r)
      r.maps.zebra = n(917)(r)
      r.maps.rainbow = n(410)(r)
      r.maps.random = n(409)(r)
      for (var f in r.maps) {
        ;(function (e) {
          r[e] = function (t) {
            return p(r.maps[e], t)
          }
        })(f)
      }
      o(r, init())
    },
    822: (e) => {
      e['exports'] = function runTheTrap(e, t) {
        var n = ''
        e = e || 'Run the trap, drop the bass'
        e = e.split('')
        var r = {
          a: ['@', 'Ą', 'Ⱥ', 'Ʌ', 'Δ', 'Λ', 'Д'],
          b: ['ß', 'Ɓ', 'Ƀ', 'ɮ', 'β', '฿'],
          c: ['©', 'Ȼ', 'Ͼ'],
          d: ['Ð', 'Ɗ', 'Ԁ', 'ԁ', 'Ԃ', 'ԃ'],
          e: ['Ë', 'ĕ', 'Ǝ', 'ɘ', 'Σ', 'ξ', 'Ҽ', '੬'],
          f: ['Ӻ'],
          g: ['ɢ'],
          h: ['Ħ', 'ƕ', 'Ң', 'Һ', 'Ӈ', 'Ԋ'],
          i: ['༏'],
          j: ['Ĵ'],
          k: ['ĸ', 'Ҡ', 'Ӄ', 'Ԟ'],
          l: ['Ĺ'],
          m: ['ʍ', 'Ӎ', 'ӎ', 'Ԡ', 'ԡ', '൩'],
          n: ['Ñ', 'ŋ', 'Ɲ', 'Ͷ', 'Π', 'Ҋ'],
          o: ['Ø', 'õ', 'ø', 'Ǿ', 'ʘ', 'Ѻ', 'ם', '۝', '๏'],
          p: ['Ƿ', 'Ҏ'],
          q: ['্'],
          r: ['®', 'Ʀ', 'Ȑ', 'Ɍ', 'ʀ', 'Я'],
          s: ['§', 'Ϟ', 'ϟ', 'Ϩ'],
          t: ['Ł', 'Ŧ', 'ͳ'],
          u: ['Ʊ', 'Ս'],
          v: ['ט'],
          w: ['Ш', 'Ѡ', 'Ѽ', '൰'],
          x: ['Ҳ', 'Ӿ', 'Ӽ', 'ӽ'],
          y: ['¥', 'Ұ', 'Ӌ'],
          z: ['Ƶ', 'ɀ'],
        }
        e.forEach(function (e) {
          e = e.toLowerCase()
          var t = r[e] || [' ']
          var i = Math.floor(Math.random() * t.length)
          if (typeof r[e] !== 'undefined') {
            n += r[e][i]
          } else {
            n += e
          }
        })
        return n
      }
    },
    576: (e) => {
      e['exports'] = function zalgo(e, t) {
        e = e || '   he is here   '
        var n = {
          up: [
            '̍',
            '̎',
            '̄',
            '̅',
            '̿',
            '̑',
            '̆',
            '̐',
            '͒',
            '͗',
            '͑',
            '̇',
            '̈',
            '̊',
            '͂',
            '̓',
            '̈',
            '͊',
            '͋',
            '͌',
            '̃',
            '̂',
            '̌',
            '͐',
            '̀',
            '́',
            '̋',
            '̏',
            '̒',
            '̓',
            '̔',
            '̽',
            '̉',
            'ͣ',
            'ͤ',
            'ͥ',
            'ͦ',
            'ͧ',
            'ͨ',
            'ͩ',
            'ͪ',
            'ͫ',
            'ͬ',
            'ͭ',
            'ͮ',
            'ͯ',
            '̾',
            '͛',
            '͆',
            '̚',
          ],
          down: [
            '̖',
            '̗',
            '̘',
            '̙',
            '̜',
            '̝',
            '̞',
            '̟',
            '̠',
            '̤',
            '̥',
            '̦',
            '̩',
            '̪',
            '̫',
            '̬',
            '̭',
            '̮',
            '̯',
            '̰',
            '̱',
            '̲',
            '̳',
            '̹',
            '̺',
            '̻',
            '̼',
            'ͅ',
            '͇',
            '͈',
            '͉',
            '͍',
            '͎',
            '͓',
            '͔',
            '͕',
            '͖',
            '͙',
            '͚',
            '̣',
          ],
          mid: [
            '̕',
            '̛',
            '̀',
            '́',
            '͘',
            '̡',
            '̢',
            '̧',
            '̨',
            '̴',
            '̵',
            '̶',
            '͜',
            '͝',
            '͞',
            '͟',
            '͠',
            '͢',
            '̸',
            '̷',
            '͡',
            ' ҉',
          ],
        }
        var r = [].concat(n.up, n.down, n.mid)
        function randomNumber(e) {
          var t = Math.floor(Math.random() * e)
          return t
        }
        function isChar(e) {
          var t = false
          r.filter(function (n) {
            t = n === e
          })
          return t
        }
        function heComes(e, t) {
          var r = ''
          var i
          var s
          t = t || {}
          t['up'] = typeof t['up'] !== 'undefined' ? t['up'] : true
          t['mid'] = typeof t['mid'] !== 'undefined' ? t['mid'] : true
          t['down'] = typeof t['down'] !== 'undefined' ? t['down'] : true
          t['size'] = typeof t['size'] !== 'undefined' ? t['size'] : 'maxi'
          e = e.split('')
          for (s in e) {
            if (isChar(s)) {
              continue
            }
            r = r + e[s]
            i = { up: 0, down: 0, mid: 0 }
            switch (t.size) {
              case 'mini':
                i.up = randomNumber(8)
                i.mid = randomNumber(2)
                i.down = randomNumber(8)
                break
              case 'maxi':
                i.up = randomNumber(16) + 3
                i.mid = randomNumber(4) + 1
                i.down = randomNumber(64) + 3
                break
              default:
                i.up = randomNumber(8) + 1
                i.mid = randomNumber(6) / 2
                i.down = randomNumber(8) + 1
                break
            }
            var o = ['up', 'mid', 'down']
            for (var a in o) {
              var l = o[a]
              for (var u = 0; u <= i[l]; u++) {
                if (t[l]) {
                  r = r + n[l][randomNumber(n[l].length)]
                }
              }
            }
          }
          return r
        }
        return heComes(e, t)
      }
    },
    967: (e) => {
      e['exports'] = function (e) {
        return function (t, n, r) {
          if (t === ' ') return t
          switch (n % 3) {
            case 0:
              return e.red(t)
            case 1:
              return e.white(t)
            case 2:
              return e.blue(t)
          }
        }
      }
    },
    410: (e) => {
      e['exports'] = function (e) {
        var t = ['red', 'yellow', 'green', 'blue', 'magenta']
        return function (n, r, i) {
          if (n === ' ') {
            return n
          } else {
            return e[t[r++ % t.length]](n)
          }
        }
      }
    },
    409: (e) => {
      e['exports'] = function (e) {
        var t = [
          'underline',
          'inverse',
          'grey',
          'yellow',
          'red',
          'green',
          'blue',
          'white',
          'cyan',
          'magenta',
          'brightYellow',
          'brightRed',
          'brightGreen',
          'brightBlue',
          'brightWhite',
          'brightCyan',
          'brightMagenta',
        ]
        return function (n, r, i) {
          return n === ' '
            ? n
            : e[t[Math.round(Math.random() * (t.length - 2))]](n)
        }
      }
    },
    917: (e) => {
      e['exports'] = function (e) {
        return function (t, n, r) {
          return n % 2 === 0 ? t : e.inverse(t)
        }
      }
    },
    77: (e) => {
      var t = {}
      e['exports'] = t
      var n = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        brightRed: [91, 39],
        brightGreen: [92, 39],
        brightYellow: [93, 39],
        brightBlue: [94, 39],
        brightMagenta: [95, 39],
        brightCyan: [96, 39],
        brightWhite: [97, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgGray: [100, 49],
        bgGrey: [100, 49],
        bgBrightRed: [101, 49],
        bgBrightGreen: [102, 49],
        bgBrightYellow: [103, 49],
        bgBrightBlue: [104, 49],
        bgBrightMagenta: [105, 49],
        bgBrightCyan: [106, 49],
        bgBrightWhite: [107, 49],
        blackBG: [40, 49],
        redBG: [41, 49],
        greenBG: [42, 49],
        yellowBG: [43, 49],
        blueBG: [44, 49],
        magentaBG: [45, 49],
        cyanBG: [46, 49],
        whiteBG: [47, 49],
      }
      Object.keys(n).forEach(function (e) {
        var r = n[e]
        var i = (t[e] = [])
        i.open = '[' + r[0] + 'm'
        i.close = '[' + r[1] + 'm'
      })
    },
    274: (e) => {
      'use strict'
      e.exports = function (e, t) {
        t = t || process.argv
        var n = t.indexOf('--')
        var r = /^-{1,2}/.test(e) ? '' : '--'
        var i = t.indexOf(r + e)
        return i !== -1 && (n === -1 ? true : i < n)
      }
    },
    725: (e, t, n) => {
      'use strict'
      var r = n(37)
      var i = n(274)
      var s = process.env
      var o = void 0
      if (i('no-color') || i('no-colors') || i('color=false')) {
        o = false
      } else if (
        i('color') ||
        i('colors') ||
        i('color=true') ||
        i('color=always')
      ) {
        o = true
      }
      if ('FORCE_COLOR' in s) {
        o = s.FORCE_COLOR.length === 0 || parseInt(s.FORCE_COLOR, 10) !== 0
      }
      function translateLevel(e) {
        if (e === 0) {
          return false
        }
        return { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 }
      }
      function supportsColor(e) {
        if (o === false) {
          return 0
        }
        if (i('color=16m') || i('color=full') || i('color=truecolor')) {
          return 3
        }
        if (i('color=256')) {
          return 2
        }
        if (e && !e.isTTY && o !== true) {
          return 0
        }
        var t = o ? 1 : 0
        if (process.platform === 'win32') {
          var n = r.release().split('.')
          if (
            Number(process.versions.node.split('.')[0]) >= 8 &&
            Number(n[0]) >= 10 &&
            Number(n[2]) >= 10586
          ) {
            return Number(n[2]) >= 14931 ? 3 : 2
          }
          return 1
        }
        if ('CI' in s) {
          if (
            ['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (e) {
              return e in s
            }) ||
            s.CI_NAME === 'codeship'
          ) {
            return 1
          }
          return t
        }
        if ('TEAMCITY_VERSION' in s) {
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION)
            ? 1
            : 0
        }
        if ('TERM_PROGRAM' in s) {
          var a = parseInt((s.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
          switch (s.TERM_PROGRAM) {
            case 'iTerm.app':
              return a >= 3 ? 3 : 2
            case 'Hyper':
              return 3
            case 'Apple_Terminal':
              return 2
          }
        }
        if (/-256(color)?$/i.test(s.TERM)) {
          return 2
        }
        if (
          /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM)
        ) {
          return 1
        }
        if ('COLORTERM' in s) {
          return 1
        }
        if (s.TERM === 'dumb') {
          return t
        }
        return t
      }
      function getSupportLevel(e) {
        var t = supportsColor(e)
        return translateLevel(t)
      }
      e.exports = {
        supportsColor: getSupportLevel,
        stdout: getSupportLevel(process.stdout),
        stderr: getSupportLevel(process.stderr),
      }
    },
    915: (e, t, n) => {
      var r = n(758)
      e['exports'] = r
    },
    263: (e, t, n) => {
      'use strict'
      e.exports = n(554)
    },
    201: (e, t, n) => {
      'use strict'
      var r = n(742)
      function noop() {}
      var i = null
      var s = {}
      function getThen(e) {
        try {
          return e.then
        } catch (e) {
          i = e
          return s
        }
      }
      function tryCallOne(e, t) {
        try {
          return e(t)
        } catch (e) {
          i = e
          return s
        }
      }
      function tryCallTwo(e, t, n) {
        try {
          e(t, n)
        } catch (e) {
          i = e
          return s
        }
      }
      e.exports = Promise
      function Promise(e) {
        if (typeof this !== 'object') {
          throw new TypeError('Promises must be constructed via new')
        }
        if (typeof e !== 'function') {
          throw new TypeError(
            "Promise constructor's argument is not a function"
          )
        }
        this._U = 0
        this._V = 0
        this._W = null
        this._X = null
        if (e === noop) return
        doResolve(e, this)
      }
      Promise._Y = null
      Promise._Z = null
      Promise._0 = noop
      Promise.prototype.then = function (e, t) {
        if (this.constructor !== Promise) {
          return safeThen(this, e, t)
        }
        var n = new Promise(noop)
        handle(this, new Handler(e, t, n))
        return n
      }
      function safeThen(e, t, n) {
        return new e.constructor(function (r, i) {
          var s = new Promise(noop)
          s.then(r, i)
          handle(e, new Handler(t, n, s))
        })
      }
      function handle(e, t) {
        while (e._V === 3) {
          e = e._W
        }
        if (Promise._Y) {
          Promise._Y(e)
        }
        if (e._V === 0) {
          if (e._U === 0) {
            e._U = 1
            e._X = t
            return
          }
          if (e._U === 1) {
            e._U = 2
            e._X = [e._X, t]
            return
          }
          e._X.push(t)
          return
        }
        handleResolved(e, t)
      }
      function handleResolved(e, t) {
        r(function () {
          var n = e._V === 1 ? t.onFulfilled : t.onRejected
          if (n === null) {
            if (e._V === 1) {
              resolve(t.promise, e._W)
            } else {
              reject(t.promise, e._W)
            }
            return
          }
          var r = tryCallOne(n, e._W)
          if (r === s) {
            reject(t.promise, i)
          } else {
            resolve(t.promise, r)
          }
        })
      }
      function resolve(e, t) {
        if (t === e) {
          return reject(
            e,
            new TypeError('A promise cannot be resolved with itself.')
          )
        }
        if (t && (typeof t === 'object' || typeof t === 'function')) {
          var n = getThen(t)
          if (n === s) {
            return reject(e, i)
          }
          if (n === e.then && t instanceof Promise) {
            e._V = 3
            e._W = t
            finale(e)
            return
          } else if (typeof n === 'function') {
            doResolve(n.bind(t), e)
            return
          }
        }
        e._V = 1
        e._W = t
        finale(e)
      }
      function reject(e, t) {
        e._V = 2
        e._W = t
        if (Promise._Z) {
          Promise._Z(e, t)
        }
        finale(e)
      }
      function finale(e) {
        if (e._U === 1) {
          handle(e, e._X)
          e._X = null
        }
        if (e._U === 2) {
          for (var t = 0; t < e._X.length; t++) {
            handle(e, e._X[t])
          }
          e._X = null
        }
      }
      function Handler(e, t, n) {
        this.onFulfilled = typeof e === 'function' ? e : null
        this.onRejected = typeof t === 'function' ? t : null
        this.promise = n
      }
      function doResolve(e, t) {
        var n = false
        var r = tryCallTwo(
          e,
          function (e) {
            if (n) return
            n = true
            resolve(t, e)
          },
          function (e) {
            if (n) return
            n = true
            reject(t, e)
          }
        )
        if (!n && r === s) {
          n = true
          reject(t, i)
        }
      }
    },
    427: (e, t, n) => {
      'use strict'
      var r = n(201)
      e.exports = r
      r.prototype.done = function (e, t) {
        var n = arguments.length ? this.then.apply(this, arguments) : this
        n.then(null, function (e) {
          setTimeout(function () {
            throw e
          }, 0)
        })
      }
    },
    524: (e, t, n) => {
      'use strict'
      var r = n(201)
      e.exports = r
      var i = valuePromise(true)
      var s = valuePromise(false)
      var o = valuePromise(null)
      var a = valuePromise(undefined)
      var l = valuePromise(0)
      var u = valuePromise('')
      function valuePromise(e) {
        var t = new r(r._0)
        t._V = 1
        t._W = e
        return t
      }
      r.resolve = function (e) {
        if (e instanceof r) return e
        if (e === null) return o
        if (e === undefined) return a
        if (e === true) return i
        if (e === false) return s
        if (e === 0) return l
        if (e === '') return u
        if (typeof e === 'object' || typeof e === 'function') {
          try {
            var t = e.then
            if (typeof t === 'function') {
              return new r(t.bind(e))
            }
          } catch (e) {
            return new r(function (t, n) {
              n(e)
            })
          }
        }
        return valuePromise(e)
      }
      var iterableToArray = function (e) {
        if (typeof Array.from === 'function') {
          iterableToArray = Array.from
          return Array.from(e)
        }
        iterableToArray = function (e) {
          return Array.prototype.slice.call(e)
        }
        return Array.prototype.slice.call(e)
      }
      r.all = function (e) {
        var t = iterableToArray(e)
        return new r(function (e, n) {
          if (t.length === 0) return e([])
          var i = t.length
          function res(s, o) {
            if (o && (typeof o === 'object' || typeof o === 'function')) {
              if (o instanceof r && o.then === r.prototype.then) {
                while (o._V === 3) {
                  o = o._W
                }
                if (o._V === 1) return res(s, o._W)
                if (o._V === 2) n(o._W)
                o.then(function (e) {
                  res(s, e)
                }, n)
                return
              } else {
                var a = o.then
                if (typeof a === 'function') {
                  var l = new r(a.bind(o))
                  l.then(function (e) {
                    res(s, e)
                  }, n)
                  return
                }
              }
            }
            t[s] = o
            if (--i === 0) {
              e(t)
            }
          }
          for (var s = 0; s < t.length; s++) {
            res(s, t[s])
          }
        })
      }
      r.reject = function (e) {
        return new r(function (t, n) {
          n(e)
        })
      }
      r.race = function (e) {
        return new r(function (t, n) {
          iterableToArray(e).forEach(function (e) {
            r.resolve(e).then(t, n)
          })
        })
      }
      r.prototype['catch'] = function (e) {
        return this.then(null, e)
      }
    },
    420: (e, t, n) => {
      'use strict'
      var r = n(201)
      e.exports = r
      r.prototype.finally = function (e) {
        return this.then(
          function (t) {
            return r.resolve(e()).then(function () {
              return t
            })
          },
          function (t) {
            return r.resolve(e()).then(function () {
              throw t
            })
          }
        )
      }
    },
    554: (e, t, n) => {
      'use strict'
      e.exports = n(201)
      n(427)
      n(420)
      n(524)
      n(604)
      n(163)
    },
    604: (e, t, n) => {
      'use strict'
      var r = n(201)
      var i = n(873)
      e.exports = r
      r.denodeify = function (e, t) {
        if (typeof t === 'number' && t !== Infinity) {
          return denodeifyWithCount(e, t)
        } else {
          return denodeifyWithoutCount(e)
        }
      }
      var s =
        'function (err, res) {' +
        'if (err) { rj(err); } else { rs(res); }' +
        '}'
      function denodeifyWithCount(e, t) {
        var n = []
        for (var i = 0; i < t; i++) {
          n.push('a' + i)
        }
        var o = [
          'return function (' + n.join(',') + ') {',
          'var self = this;',
          'return new Promise(function (rs, rj) {',
          'var res = fn.call(',
          ['self'].concat(n).concat([s]).join(','),
          ');',
          'if (res &&',
          '(typeof res === "object" || typeof res === "function") &&',
          'typeof res.then === "function"',
          ') {rs(res);}',
          '});',
          '};',
        ].join('')
        return Function(['Promise', 'fn'], o)(r, e)
      }
      function denodeifyWithoutCount(e) {
        var t = Math.max(e.length - 1, 3)
        var n = []
        for (var i = 0; i < t; i++) {
          n.push('a' + i)
        }
        var o = [
          'return function (' + n.join(',') + ') {',
          'var self = this;',
          'var args;',
          'var argLength = arguments.length;',
          'if (arguments.length > ' + t + ') {',
          'args = new Array(arguments.length + 1);',
          'for (var i = 0; i < arguments.length; i++) {',
          'args[i] = arguments[i];',
          '}',
          '}',
          'return new Promise(function (rs, rj) {',
          'var cb = ' + s + ';',
          'var res;',
          'switch (argLength) {',
          n
            .concat(['extra'])
            .map(function (e, t) {
              return (
                'case ' +
                t +
                ':' +
                'res = fn.call(' +
                ['self'].concat(n.slice(0, t)).concat('cb').join(',') +
                ');' +
                'break;'
              )
            })
            .join(''),
          'default:',
          'args[argLength] = cb;',
          'res = fn.apply(self, args);',
          '}',
          'if (res &&',
          '(typeof res === "object" || typeof res === "function") &&',
          'typeof res.then === "function"',
          ') {rs(res);}',
          '});',
          '};',
        ].join('')
        return Function(['Promise', 'fn'], o)(r, e)
      }
      r.nodeify = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments)
          var n = typeof t[t.length - 1] === 'function' ? t.pop() : null
          var s = this
          try {
            return e.apply(this, arguments).nodeify(n, s)
          } catch (e) {
            if (n === null || typeof n == 'undefined') {
              return new r(function (t, n) {
                n(e)
              })
            } else {
              i(function () {
                n.call(s, e)
              })
            }
          }
        }
      }
      r.prototype.nodeify = function (e, t) {
        if (typeof e != 'function') return this
        this.then(
          function (n) {
            i(function () {
              e.call(t, null, n)
            })
          },
          function (n) {
            i(function () {
              e.call(t, n)
            })
          }
        )
      }
    },
    163: (e, t, n) => {
      'use strict'
      var r = n(201)
      e.exports = r
      r.enableSynchronous = function () {
        r.prototype.isPending = function () {
          return this.getState() == 0
        }
        r.prototype.isFulfilled = function () {
          return this.getState() == 1
        }
        r.prototype.isRejected = function () {
          return this.getState() == 2
        }
        r.prototype.getValue = function () {
          if (this._V === 3) {
            return this._W.getValue()
          }
          if (!this.isFulfilled()) {
            throw new Error('Cannot get a value of an unfulfilled promise.')
          }
          return this._W
        }
        r.prototype.getReason = function () {
          if (this._V === 3) {
            return this._W.getReason()
          }
          if (!this.isRejected()) {
            throw new Error(
              'Cannot get a rejection reason of a non-rejected promise.'
            )
          }
          return this._W
        }
        r.prototype.getState = function () {
          if (this._V === 3) {
            return this._W.getState()
          }
          if (this._V === -1 || this._V === -2) {
            return 0
          }
          return this._V
        }
      }
      r.disableSynchronous = function () {
        r.prototype.isPending = undefined
        r.prototype.isFulfilled = undefined
        r.prototype.isRejected = undefined
        r.prototype.getValue = undefined
        r.prototype.getReason = undefined
        r.prototype.getState = undefined
      }
    },
    81: (e) => {
      'use strict'
      e.exports = require('child_process')
    },
    639: (e) => {
      'use strict'
      e.exports = require('domain')
    },
    361: (e) => {
      'use strict'
      e.exports = require('events')
    },
    147: (e) => {
      'use strict'
      e.exports = require('fs')
    },
    685: (e) => {
      'use strict'
      e.exports = require('http')
    },
    687: (e) => {
      'use strict'
      e.exports = require('https')
    },
    37: (e) => {
      'use strict'
      e.exports = require('os')
    },
    17: (e) => {
      'use strict'
      e.exports = require('path')
    },
    477: (e) => {
      'use strict'
      e.exports = require('querystring')
    },
    310: (e) => {
      'use strict'
      e.exports = require('url')
    },
    837: (e) => {
      'use strict'
      e.exports = require('util')
    },
    144: (e) => {
      'use strict'
      e.exports = require('vm')
    },
    642: (e, t, n) => {
      const r = n(361).EventEmitter
      const i = n(81)
      const s = n(17)
      const o = n(147)
      class Help {
        constructor() {
          this.helpWidth = undefined
          this.sortSubcommands = false
          this.sortOptions = false
        }
        visibleCommands(e) {
          const t = e.commands.filter((e) => !e._hidden)
          if (e._hasImplicitHelpCommand()) {
            const n = e._helpCommandnameAndArgs.split(/ +/)
            const r = e.createCommand(n.shift()).helpOption(false)
            r.description(e._helpCommandDescription)
            r._parseExpectedArgs(n)
            t.push(r)
          }
          if (this.sortSubcommands) {
            t.sort((e, t) => e.name().localeCompare(t.name()))
          }
          return t
        }
        visibleOptions(e) {
          const t = e.options.filter((e) => !e.hidden)
          const n =
            e._hasHelpOption &&
            e._helpShortFlag &&
            !e._findOption(e._helpShortFlag)
          const r = e._hasHelpOption && !e._findOption(e._helpLongFlag)
          if (n || r) {
            let i
            if (!n) {
              i = e.createOption(e._helpLongFlag, e._helpDescription)
            } else if (!r) {
              i = e.createOption(e._helpShortFlag, e._helpDescription)
            } else {
              i = e.createOption(e._helpFlags, e._helpDescription)
            }
            t.push(i)
          }
          if (this.sortOptions) {
            const getSortKey = (e) =>
              e.short ? e.short.replace(/^-/, '') : e.long.replace(/^--/, '')
            t.sort((e, t) => getSortKey(e).localeCompare(getSortKey(t)))
          }
          return t
        }
        visibleArguments(e) {
          if (e._argsDescription && e._args.length) {
            return e._args.map(
              (t) => ({
                term: t.name,
                description: e._argsDescription[t.name] || '',
              }),
              0
            )
          }
          return []
        }
        subcommandTerm(e) {
          const t = e._args.map((e) => humanReadableArgName(e)).join(' ')
          return (
            e._name +
            (e._aliases[0] ? '|' + e._aliases[0] : '') +
            (e.options.length ? ' [options]' : '') +
            (t ? ' ' + t : '')
          )
        }
        optionTerm(e) {
          return e.flags
        }
        longestSubcommandTermLength(e, t) {
          return t
            .visibleCommands(e)
            .reduce((e, n) => Math.max(e, t.subcommandTerm(n).length), 0)
        }
        longestOptionTermLength(e, t) {
          return t
            .visibleOptions(e)
            .reduce((e, n) => Math.max(e, t.optionTerm(n).length), 0)
        }
        longestArgumentTermLength(e, t) {
          return t
            .visibleArguments(e)
            .reduce((e, t) => Math.max(e, t.term.length), 0)
        }
        commandUsage(e) {
          let t = e._name
          if (e._aliases[0]) {
            t = t + '|' + e._aliases[0]
          }
          let n = ''
          for (let t = e.parent; t; t = t.parent) {
            n = t.name() + ' ' + n
          }
          return n + t + ' ' + e.usage()
        }
        commandDescription(e) {
          return e.description()
        }
        subcommandDescription(e) {
          return e.description()
        }
        optionDescription(e) {
          if (e.negate) {
            return e.description
          }
          const t = []
          if (e.argChoices) {
            t.push(
              `choices: ${e.argChoices
                .map((e) => JSON.stringify(e))
                .join(', ')}`
            )
          }
          if (e.defaultValue !== undefined) {
            t.push(
              `default: ${
                e.defaultValueDescription || JSON.stringify(e.defaultValue)
              }`
            )
          }
          if (t.length > 0) {
            return `${e.description} (${t.join(', ')})`
          }
          return e.description
        }
        formatHelp(e, t) {
          const n = t.padWidth(e, t)
          const r = t.helpWidth || 80
          const i = 2
          const s = 2
          function formatItem(e, o) {
            if (o) {
              const a = `${e.padEnd(n + s)}${o}`
              return t.wrap(a, r - i, n + s)
            }
            return e
          }
          function formatList(e) {
            return e.join('\n').replace(/^/gm, ' '.repeat(i))
          }
          let o = [`Usage: ${t.commandUsage(e)}`, '']
          const a = t.commandDescription(e)
          if (a.length > 0) {
            o = o.concat([a, ''])
          }
          const l = t
            .visibleArguments(e)
            .map((e) => formatItem(e.term, e.description))
          if (l.length > 0) {
            o = o.concat(['Arguments:', formatList(l), ''])
          }
          const u = t
            .visibleOptions(e)
            .map((e) => formatItem(t.optionTerm(e), t.optionDescription(e)))
          if (u.length > 0) {
            o = o.concat(['Options:', formatList(u), ''])
          }
          const c = t
            .visibleCommands(e)
            .map((e) =>
              formatItem(t.subcommandTerm(e), t.subcommandDescription(e))
            )
          if (c.length > 0) {
            o = o.concat(['Commands:', formatList(c), ''])
          }
          return o.join('\n')
        }
        padWidth(e, t) {
          return Math.max(
            t.longestOptionTermLength(e, t),
            t.longestSubcommandTermLength(e, t),
            t.longestArgumentTermLength(e, t)
          )
        }
        wrap(e, t, n, r = 40) {
          if (e.match(/[\n]\s+/)) return e
          const i = t - n
          if (i < r) return e
          const s = e.substr(0, n)
          const o = e.substr(n)
          const a = ' '.repeat(n)
          const l = new RegExp(
            '.{1,' + (i - 1) + '}([\\s​]|$)|[^\\s​]+?([\\s​]|$)',
            'g'
          )
          const u = o.match(l) || []
          return (
            s +
            u
              .map((e, t) => {
                if (e.slice(-1) === '\n') {
                  e = e.slice(0, e.length - 1)
                }
                return (t > 0 ? a : '') + e.trimRight()
              })
              .join('\n')
          )
        }
      }
      class Option {
        constructor(e, t) {
          this.flags = e
          this.description = t || ''
          this.required = e.includes('<')
          this.optional = e.includes('[')
          this.variadic = /\w\.\.\.[>\]]$/.test(e)
          this.mandatory = false
          const n = _parseOptionFlags(e)
          this.short = n.shortFlag
          this.long = n.longFlag
          this.negate = false
          if (this.long) {
            this.negate = this.long.startsWith('--no-')
          }
          this.defaultValue = undefined
          this.defaultValueDescription = undefined
          this.parseArg = undefined
          this.hidden = false
          this.argChoices = undefined
        }
        default(e, t) {
          this.defaultValue = e
          this.defaultValueDescription = t
          return this
        }
        argParser(e) {
          this.parseArg = e
          return this
        }
        makeOptionMandatory(e = true) {
          this.mandatory = !!e
          return this
        }
        hideHelp(e = true) {
          this.hidden = !!e
          return this
        }
        _concatValue(e, t) {
          if (t === this.defaultValue || !Array.isArray(t)) {
            return [e]
          }
          return t.concat(e)
        }
        choices(e) {
          this.argChoices = e
          this.parseArg = (t, n) => {
            if (!e.includes(t)) {
              throw new InvalidOptionArgumentError(
                `Allowed choices are ${e.join(', ')}.`
              )
            }
            if (this.variadic) {
              return this._concatValue(t, n)
            }
            return t
          }
          return this
        }
        name() {
          if (this.long) {
            return this.long.replace(/^--/, '')
          }
          return this.short.replace(/^-/, '')
        }
        attributeName() {
          return camelcase(this.name().replace(/^no-/, ''))
        }
        is(e) {
          return this.short === e || this.long === e
        }
      }
      class CommanderError extends Error {
        constructor(e, t, n) {
          super(n)
          Error.captureStackTrace(this, this.constructor)
          this.name = this.constructor.name
          this.code = t
          this.exitCode = e
          this.nestedError = undefined
        }
      }
      class InvalidOptionArgumentError extends CommanderError {
        constructor(e) {
          super(1, 'commander.invalidOptionArgument', e)
          Error.captureStackTrace(this, this.constructor)
          this.name = this.constructor.name
        }
      }
      class Command extends r {
        constructor(e) {
          super()
          this.commands = []
          this.options = []
          this.parent = null
          this._allowUnknownOption = false
          this._allowExcessArguments = true
          this._args = []
          this.rawArgs = null
          this._scriptPath = null
          this._name = e || ''
          this._optionValues = {}
          this._storeOptionsAsProperties = false
          this._actionResults = []
          this._actionHandler = null
          this._executableHandler = false
          this._executableFile = null
          this._defaultCommandName = null
          this._exitCallback = null
          this._aliases = []
          this._combineFlagAndOptionalValue = true
          this._description = ''
          this._argsDescription = undefined
          this._enablePositionalOptions = false
          this._passThroughOptions = false
          this._outputConfiguration = {
            writeOut: (e) => process.stdout.write(e),
            writeErr: (e) => process.stderr.write(e),
            getOutHelpWidth: () =>
              process.stdout.isTTY ? process.stdout.columns : undefined,
            getErrHelpWidth: () =>
              process.stderr.isTTY ? process.stderr.columns : undefined,
            outputError: (e, t) => t(e),
          }
          this._hidden = false
          this._hasHelpOption = true
          this._helpFlags = '-h, --help'
          this._helpDescription = 'display help for command'
          this._helpShortFlag = '-h'
          this._helpLongFlag = '--help'
          this._addImplicitHelpCommand = undefined
          this._helpCommandName = 'help'
          this._helpCommandnameAndArgs = 'help [command]'
          this._helpCommandDescription = 'display help for command'
          this._helpConfiguration = {}
        }
        command(e, t, n) {
          let r = t
          let i = n
          if (typeof r === 'object' && r !== null) {
            i = r
            r = null
          }
          i = i || {}
          const s = e.split(/ +/)
          const o = this.createCommand(s.shift())
          if (r) {
            o.description(r)
            o._executableHandler = true
          }
          if (i.isDefault) this._defaultCommandName = o._name
          o._outputConfiguration = this._outputConfiguration
          o._hidden = !!(i.noHelp || i.hidden)
          o._hasHelpOption = this._hasHelpOption
          o._helpFlags = this._helpFlags
          o._helpDescription = this._helpDescription
          o._helpShortFlag = this._helpShortFlag
          o._helpLongFlag = this._helpLongFlag
          o._helpCommandName = this._helpCommandName
          o._helpCommandnameAndArgs = this._helpCommandnameAndArgs
          o._helpCommandDescription = this._helpCommandDescription
          o._helpConfiguration = this._helpConfiguration
          o._exitCallback = this._exitCallback
          o._storeOptionsAsProperties = this._storeOptionsAsProperties
          o._combineFlagAndOptionalValue = this._combineFlagAndOptionalValue
          o._allowExcessArguments = this._allowExcessArguments
          o._enablePositionalOptions = this._enablePositionalOptions
          o._executableFile = i.executableFile || null
          this.commands.push(o)
          o._parseExpectedArgs(s)
          o.parent = this
          if (r) return this
          return o
        }
        createCommand(e) {
          return new Command(e)
        }
        createHelp() {
          return Object.assign(new Help(), this.configureHelp())
        }
        configureHelp(e) {
          if (e === undefined) return this._helpConfiguration
          this._helpConfiguration = e
          return this
        }
        configureOutput(e) {
          if (e === undefined) return this._outputConfiguration
          Object.assign(this._outputConfiguration, e)
          return this
        }
        addCommand(e, t) {
          if (!e._name)
            throw new Error('Command passed to .addCommand() must have a name')
          function checkExplicitNames(e) {
            e.forEach((e) => {
              if (e._executableHandler && !e._executableFile) {
                throw new Error(
                  `Must specify executableFile for deeply nested executable: ${e.name()}`
                )
              }
              checkExplicitNames(e.commands)
            })
          }
          checkExplicitNames(e.commands)
          t = t || {}
          if (t.isDefault) this._defaultCommandName = e._name
          if (t.noHelp || t.hidden) e._hidden = true
          this.commands.push(e)
          e.parent = this
          return this
        }
        arguments(e) {
          return this._parseExpectedArgs(e.split(/ +/))
        }
        addHelpCommand(e, t) {
          if (e === false) {
            this._addImplicitHelpCommand = false
          } else {
            this._addImplicitHelpCommand = true
            if (typeof e === 'string') {
              this._helpCommandName = e.split(' ')[0]
              this._helpCommandnameAndArgs = e
            }
            this._helpCommandDescription = t || this._helpCommandDescription
          }
          return this
        }
        _hasImplicitHelpCommand() {
          if (this._addImplicitHelpCommand === undefined) {
            return (
              this.commands.length &&
              !this._actionHandler &&
              !this._findCommand('help')
            )
          }
          return this._addImplicitHelpCommand
        }
        _parseExpectedArgs(e) {
          if (!e.length) return
          e.forEach((e) => {
            const t = { required: false, name: '', variadic: false }
            switch (e[0]) {
              case '<':
                t.required = true
                t.name = e.slice(1, -1)
                break
              case '[':
                t.name = e.slice(1, -1)
                break
            }
            if (t.name.length > 3 && t.name.slice(-3) === '...') {
              t.variadic = true
              t.name = t.name.slice(0, -3)
            }
            if (t.name) {
              this._args.push(t)
            }
          })
          this._args.forEach((e, t) => {
            if (e.variadic && t < this._args.length - 1) {
              throw new Error(
                `only the last argument can be variadic '${e.name}'`
              )
            }
          })
          return this
        }
        exitOverride(e) {
          if (e) {
            this._exitCallback = e
          } else {
            this._exitCallback = (e) => {
              if (e.code !== 'commander.executeSubCommandAsync') {
                throw e
              } else {
              }
            }
          }
          return this
        }
        _exit(e, t, n) {
          if (this._exitCallback) {
            this._exitCallback(new CommanderError(e, t, n))
          }
          process.exit(e)
        }
        action(e) {
          const listener = (t) => {
            const n = this._args.length
            const r = t.slice(0, n)
            if (this._storeOptionsAsProperties) {
              r[n] = this
            } else {
              r[n] = this.opts()
            }
            r.push(this)
            const i = e.apply(this, r)
            let s = this
            while (s.parent) {
              s = s.parent
            }
            s._actionResults.push(i)
          }
          this._actionHandler = listener
          return this
        }
        createOption(e, t) {
          return new Option(e, t)
        }
        addOption(e) {
          const t = e.name()
          const n = e.attributeName()
          let r = e.defaultValue
          if (e.negate || e.optional || e.required || typeof r === 'boolean') {
            if (e.negate) {
              const t = e.long.replace(/^--no-/, '--')
              r = this._findOption(t) ? this._getOptionValue(n) : true
            }
            if (r !== undefined) {
              this._setOptionValue(n, r)
            }
          }
          this.options.push(e)
          this.on('option:' + t, (t) => {
            const i = this._getOptionValue(n)
            if (t !== null && e.parseArg) {
              try {
                t = e.parseArg(t, i === undefined ? r : i)
              } catch (n) {
                if (n.code === 'commander.invalidOptionArgument') {
                  const r = `error: option '${e.flags}' argument '${t}' is invalid. ${n.message}`
                  this._displayError(n.exitCode, n.code, r)
                }
                throw n
              }
            } else if (t !== null && e.variadic) {
              t = e._concatValue(t, i)
            }
            if (typeof i === 'boolean' || typeof i === 'undefined') {
              if (t == null) {
                this._setOptionValue(n, e.negate ? false : r || true)
              } else {
                this._setOptionValue(n, t)
              }
            } else if (t !== null) {
              this._setOptionValue(n, e.negate ? false : t)
            }
          })
          return this
        }
        _optionEx(e, t, n, r, i) {
          const s = this.createOption(t, n)
          s.makeOptionMandatory(!!e.mandatory)
          if (typeof r === 'function') {
            s.default(i).argParser(r)
          } else if (r instanceof RegExp) {
            const e = r
            r = (t, n) => {
              const r = e.exec(t)
              return r ? r[0] : n
            }
            s.default(i).argParser(r)
          } else {
            s.default(r)
          }
          return this.addOption(s)
        }
        option(e, t, n, r) {
          return this._optionEx({}, e, t, n, r)
        }
        requiredOption(e, t, n, r) {
          return this._optionEx({ mandatory: true }, e, t, n, r)
        }
        combineFlagAndOptionalValue(e = true) {
          this._combineFlagAndOptionalValue = !!e
          return this
        }
        allowUnknownOption(e = true) {
          this._allowUnknownOption = !!e
          return this
        }
        allowExcessArguments(e = true) {
          this._allowExcessArguments = !!e
          return this
        }
        enablePositionalOptions(e = true) {
          this._enablePositionalOptions = !!e
          return this
        }
        passThroughOptions(e = true) {
          this._passThroughOptions = !!e
          if (!!this.parent && e && !this.parent._enablePositionalOptions) {
            throw new Error(
              'passThroughOptions can not be used without turning on enablePositionalOptions for parent command(s)'
            )
          }
          return this
        }
        storeOptionsAsProperties(e = true) {
          this._storeOptionsAsProperties = !!e
          if (this.options.length) {
            throw new Error(
              'call .storeOptionsAsProperties() before adding options'
            )
          }
          return this
        }
        _setOptionValue(e, t) {
          if (this._storeOptionsAsProperties) {
            this[e] = t
          } else {
            this._optionValues[e] = t
          }
        }
        _getOptionValue(e) {
          if (this._storeOptionsAsProperties) {
            return this[e]
          }
          return this._optionValues[e]
        }
        parse(e, t) {
          if (e !== undefined && !Array.isArray(e)) {
            throw new Error(
              'first parameter to parse must be array or undefined'
            )
          }
          t = t || {}
          if (e === undefined) {
            e = process.argv
            if (process.versions && process.versions.electron) {
              t.from = 'electron'
            }
          }
          this.rawArgs = e.slice()
          let n
          switch (t.from) {
            case undefined:
            case 'node':
              this._scriptPath = e[1]
              n = e.slice(2)
              break
            case 'electron':
              if (process.defaultApp) {
                this._scriptPath = e[1]
                n = e.slice(2)
              } else {
                n = e.slice(1)
              }
              break
            case 'user':
              n = e.slice(0)
              break
            default:
              throw new Error(`unexpected parse option { from: '${t.from}' }`)
          }
          if (!this._scriptPath && require.main) {
            this._scriptPath = require.main.filename
          }
          this._name =
            this._name ||
            (this._scriptPath &&
              s.basename(this._scriptPath, s.extname(this._scriptPath)))
          this._parseCommand([], n)
          return this
        }
        parseAsync(e, t) {
          this.parse(e, t)
          return Promise.all(this._actionResults).then(() => this)
        }
        _executeSubCommand(e, t) {
          t = t.slice()
          let n = false
          const r = ['.js', '.ts', '.tsx', '.mjs', '.cjs']
          this._checkForMissingMandatoryOptions()
          let a = this._scriptPath
          if (!a && require.main) {
            a = require.main.filename
          }
          let l
          try {
            const e = o.realpathSync(a)
            l = s.dirname(e)
          } catch (e) {
            l = '.'
          }
          let u = s.basename(a, s.extname(a)) + '-' + e._name
          if (e._executableFile) {
            u = e._executableFile
          }
          const c = s.join(l, u)
          if (o.existsSync(c)) {
            u = c
          } else {
            r.forEach((e) => {
              if (o.existsSync(`${c}${e}`)) {
                u = `${c}${e}`
              }
            })
          }
          n = r.includes(s.extname(u))
          let h
          if (process.platform !== 'win32') {
            if (n) {
              t.unshift(u)
              t = incrementNodeInspectorPort(process.execArgv).concat(t)
              h = i.spawn(process.argv[0], t, { stdio: 'inherit' })
            } else {
              h = i.spawn(u, t, { stdio: 'inherit' })
            }
          } else {
            t.unshift(u)
            t = incrementNodeInspectorPort(process.execArgv).concat(t)
            h = i.spawn(process.execPath, t, { stdio: 'inherit' })
          }
          const p = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP']
          p.forEach((e) => {
            process.on(e, () => {
              if (h.killed === false && h.exitCode === null) {
                h.kill(e)
              }
            })
          })
          const f = this._exitCallback
          if (!f) {
            h.on('close', process.exit.bind(process))
          } else {
            h.on('close', () => {
              f(
                new CommanderError(
                  process.exitCode || 0,
                  'commander.executeSubCommandAsync',
                  '(close)'
                )
              )
            })
          }
          h.on('error', (t) => {
            if (t.code === 'ENOENT') {
              const t = `'${u}' does not exist\n - if '${e._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead\n - if the default executable name is not suitable, use the executableFile option to supply a custom name`
              throw new Error(t)
            } else if (t.code === 'EACCES') {
              throw new Error(`'${u}' not executable`)
            }
            if (!f) {
              process.exit(1)
            } else {
              const e = new CommanderError(
                1,
                'commander.executeSubCommandAsync',
                '(error)'
              )
              e.nestedError = t
              f(e)
            }
          })
          this.runningCommand = h
        }
        _dispatchSubcommand(e, t, n) {
          const r = this._findCommand(e)
          if (!r) this.help({ error: true })
          if (r._executableHandler) {
            this._executeSubCommand(r, t.concat(n))
          } else {
            r._parseCommand(t, n)
          }
        }
        _parseCommand(e, t) {
          const n = this.parseOptions(t)
          e = e.concat(n.operands)
          t = n.unknown
          this.args = e.concat(t)
          if (e && this._findCommand(e[0])) {
            this._dispatchSubcommand(e[0], e.slice(1), t)
          } else if (
            this._hasImplicitHelpCommand() &&
            e[0] === this._helpCommandName
          ) {
            if (e.length === 1) {
              this.help()
            } else {
              this._dispatchSubcommand(e[1], [], [this._helpLongFlag])
            }
          } else if (this._defaultCommandName) {
            outputHelpIfRequested(this, t)
            this._dispatchSubcommand(this._defaultCommandName, e, t)
          } else {
            if (
              this.commands.length &&
              this.args.length === 0 &&
              !this._actionHandler &&
              !this._defaultCommandName
            ) {
              this.help({ error: true })
            }
            outputHelpIfRequested(this, n.unknown)
            this._checkForMissingMandatoryOptions()
            const checkForUnknownOptions = () => {
              if (n.unknown.length > 0) {
                this.unknownOption(n.unknown[0])
              }
            }
            const r = `command:${this.name()}`
            if (this._actionHandler) {
              checkForUnknownOptions()
              const n = this.args.slice()
              this._args.forEach((e, t) => {
                if (e.required && n[t] == null) {
                  this.missingArgument(e.name)
                } else if (e.variadic) {
                  n[t] = n.splice(t)
                  n.length = Math.min(t + 1, n.length)
                }
              })
              if (n.length > this._args.length) {
                this._excessArguments(n)
              }
              this._actionHandler(n)
              if (this.parent) this.parent.emit(r, e, t)
            } else if (this.parent && this.parent.listenerCount(r)) {
              checkForUnknownOptions()
              this.parent.emit(r, e, t)
            } else if (e.length) {
              if (this._findCommand('*')) {
                this._dispatchSubcommand('*', e, t)
              } else if (this.listenerCount('command:*')) {
                this.emit('command:*', e, t)
              } else if (this.commands.length) {
                this.unknownCommand()
              } else {
                checkForUnknownOptions()
              }
            } else if (this.commands.length) {
              this.help({ error: true })
            } else {
              checkForUnknownOptions()
            }
          }
        }
        _findCommand(e) {
          if (!e) return undefined
          return this.commands.find(
            (t) => t._name === e || t._aliases.includes(e)
          )
        }
        _findOption(e) {
          return this.options.find((t) => t.is(e))
        }
        _checkForMissingMandatoryOptions() {
          for (let e = this; e; e = e.parent) {
            e.options.forEach((t) => {
              if (
                t.mandatory &&
                e._getOptionValue(t.attributeName()) === undefined
              ) {
                e.missingMandatoryOptionValue(t)
              }
            })
          }
        }
        parseOptions(e) {
          const t = []
          const n = []
          let r = t
          const i = e.slice()
          function maybeOption(e) {
            return e.length > 1 && e[0] === '-'
          }
          let s = null
          while (i.length) {
            const e = i.shift()
            if (e === '--') {
              if (r === n) r.push(e)
              r.push(...i)
              break
            }
            if (s && !maybeOption(e)) {
              this.emit(`option:${s.name()}`, e)
              continue
            }
            s = null
            if (maybeOption(e)) {
              const t = this._findOption(e)
              if (t) {
                if (t.required) {
                  const e = i.shift()
                  if (e === undefined) this.optionMissingArgument(t)
                  this.emit(`option:${t.name()}`, e)
                } else if (t.optional) {
                  let e = null
                  if (i.length > 0 && !maybeOption(i[0])) {
                    e = i.shift()
                  }
                  this.emit(`option:${t.name()}`, e)
                } else {
                  this.emit(`option:${t.name()}`)
                }
                s = t.variadic ? t : null
                continue
              }
            }
            if (e.length > 2 && e[0] === '-' && e[1] !== '-') {
              const t = this._findOption(`-${e[1]}`)
              if (t) {
                if (
                  t.required ||
                  (t.optional && this._combineFlagAndOptionalValue)
                ) {
                  this.emit(`option:${t.name()}`, e.slice(2))
                } else {
                  this.emit(`option:${t.name()}`)
                  i.unshift(`-${e.slice(2)}`)
                }
                continue
              }
            }
            if (/^--[^=]+=/.test(e)) {
              const t = e.indexOf('=')
              const n = this._findOption(e.slice(0, t))
              if (n && (n.required || n.optional)) {
                this.emit(`option:${n.name()}`, e.slice(t + 1))
                continue
              }
            }
            if (maybeOption(e)) {
              r = n
            }
            if (
              (this._enablePositionalOptions || this._passThroughOptions) &&
              t.length === 0 &&
              n.length === 0
            ) {
              if (this._findCommand(e)) {
                t.push(e)
                if (i.length > 0) n.push(...i)
                break
              } else if (
                e === this._helpCommandName &&
                this._hasImplicitHelpCommand()
              ) {
                t.push(e)
                if (i.length > 0) t.push(...i)
                break
              } else if (this._defaultCommandName) {
                n.push(e)
                if (i.length > 0) n.push(...i)
                break
              }
            }
            if (this._passThroughOptions) {
              r.push(e)
              if (i.length > 0) r.push(...i)
              break
            }
            r.push(e)
          }
          return { operands: t, unknown: n }
        }
        opts() {
          if (this._storeOptionsAsProperties) {
            const e = {}
            const t = this.options.length
            for (let n = 0; n < t; n++) {
              const t = this.options[n].attributeName()
              e[t] = t === this._versionOptionName ? this._version : this[t]
            }
            return e
          }
          return this._optionValues
        }
        _displayError(e, t, n) {
          this._outputConfiguration.outputError(
            `${n}\n`,
            this._outputConfiguration.writeErr
          )
          this._exit(e, t, n)
        }
        missingArgument(e) {
          const t = `error: missing required argument '${e}'`
          this._displayError(1, 'commander.missingArgument', t)
        }
        optionMissingArgument(e) {
          const t = `error: option '${e.flags}' argument missing`
          this._displayError(1, 'commander.optionMissingArgument', t)
        }
        missingMandatoryOptionValue(e) {
          const t = `error: required option '${e.flags}' not specified`
          this._displayError(1, 'commander.missingMandatoryOptionValue', t)
        }
        unknownOption(e) {
          if (this._allowUnknownOption) return
          const t = `error: unknown option '${e}'`
          this._displayError(1, 'commander.unknownOption', t)
        }
        _excessArguments(e) {
          if (this._allowExcessArguments) return
          const t = this._args.length
          const n = t === 1 ? '' : 's'
          const r = this.parent ? ` for '${this.name()}'` : ''
          const i = `error: too many arguments${r}. Expected ${t} argument${n} but got ${e.length}.`
          this._displayError(1, 'commander.excessArguments', i)
        }
        unknownCommand() {
          const e = [this.name()]
          for (let t = this.parent; t; t = t.parent) {
            e.unshift(t.name())
          }
          const t = e.join(' ')
          const n =
            `error: unknown command '${this.args[0]}'.` +
            (this._hasHelpOption ? ` See '${t} ${this._helpLongFlag}'.` : '')
          this._displayError(1, 'commander.unknownCommand', n)
        }
        version(e, t, n) {
          if (e === undefined) return this._version
          this._version = e
          t = t || '-V, --version'
          n = n || 'output the version number'
          const r = this.createOption(t, n)
          this._versionOptionName = r.attributeName()
          this.options.push(r)
          this.on('option:' + r.name(), () => {
            this._outputConfiguration.writeOut(`${e}\n`)
            this._exit(0, 'commander.version', e)
          })
          return this
        }
        description(e, t) {
          if (e === undefined && t === undefined) return this._description
          this._description = e
          this._argsDescription = t
          return this
        }
        alias(e) {
          if (e === undefined) return this._aliases[0]
          let t = this
          if (
            this.commands.length !== 0 &&
            this.commands[this.commands.length - 1]._executableHandler
          ) {
            t = this.commands[this.commands.length - 1]
          }
          if (e === t._name)
            throw new Error("Command alias can't be the same as its name")
          t._aliases.push(e)
          return this
        }
        aliases(e) {
          if (e === undefined) return this._aliases
          e.forEach((e) => this.alias(e))
          return this
        }
        usage(e) {
          if (e === undefined) {
            if (this._usage) return this._usage
            const e = this._args.map((e) => humanReadableArgName(e))
            return []
              .concat(
                this.options.length || this._hasHelpOption ? '[options]' : [],
                this.commands.length ? '[command]' : [],
                this._args.length ? e : []
              )
              .join(' ')
          }
          this._usage = e
          return this
        }
        name(e) {
          if (e === undefined) return this._name
          this._name = e
          return this
        }
        helpInformation(e) {
          const t = this.createHelp()
          if (t.helpWidth === undefined) {
            t.helpWidth =
              e && e.error
                ? this._outputConfiguration.getErrHelpWidth()
                : this._outputConfiguration.getOutHelpWidth()
          }
          return t.formatHelp(this, t)
        }
        _getHelpContext(e) {
          e = e || {}
          const t = { error: !!e.error }
          let n
          if (t.error) {
            n = (e) => this._outputConfiguration.writeErr(e)
          } else {
            n = (e) => this._outputConfiguration.writeOut(e)
          }
          t.write = e.write || n
          t.command = this
          return t
        }
        outputHelp(e) {
          let t
          if (typeof e === 'function') {
            t = e
            e = undefined
          }
          const n = this._getHelpContext(e)
          const r = []
          let i = this
          while (i) {
            r.push(i)
            i = i.parent
          }
          r.slice()
            .reverse()
            .forEach((e) => e.emit('beforeAllHelp', n))
          this.emit('beforeHelp', n)
          let s = this.helpInformation(n)
          if (t) {
            s = t(s)
            if (typeof s !== 'string' && !Buffer.isBuffer(s)) {
              throw new Error(
                'outputHelp callback must return a string or a Buffer'
              )
            }
          }
          n.write(s)
          this.emit(this._helpLongFlag)
          this.emit('afterHelp', n)
          r.forEach((e) => e.emit('afterAllHelp', n))
        }
        helpOption(e, t) {
          if (typeof e === 'boolean') {
            this._hasHelpOption = e
            return this
          }
          this._helpFlags = e || this._helpFlags
          this._helpDescription = t || this._helpDescription
          const n = _parseOptionFlags(this._helpFlags)
          this._helpShortFlag = n.shortFlag
          this._helpLongFlag = n.longFlag
          return this
        }
        help(e) {
          this.outputHelp(e)
          let t = process.exitCode || 0
          if (t === 0 && e && typeof e !== 'function' && e.error) {
            t = 1
          }
          this._exit(t, 'commander.help', '(outputHelp)')
        }
        addHelpText(e, t) {
          const n = ['beforeAll', 'before', 'after', 'afterAll']
          if (!n.includes(e)) {
            throw new Error(
              `Unexpected value for position to addHelpText.\nExpecting one of '${n.join(
                "', '"
              )}'`
            )
          }
          const r = `${e}Help`
          this.on(r, (e) => {
            let n
            if (typeof t === 'function') {
              n = t({ error: e.error, command: e.command })
            } else {
              n = t
            }
            if (n) {
              e.write(`${n}\n`)
            }
          })
          return this
        }
      }
      t = e.exports = new Command()
      t.program = t
      t.Command = Command
      t.Option = Option
      t.CommanderError = CommanderError
      t.InvalidOptionArgumentError = InvalidOptionArgumentError
      t.Help = Help
      function camelcase(e) {
        return e
          .split('-')
          .reduce((e, t) => e + t[0].toUpperCase() + t.slice(1))
      }
      function outputHelpIfRequested(e, t) {
        const n =
          e._hasHelpOption &&
          t.find((t) => t === e._helpLongFlag || t === e._helpShortFlag)
        if (n) {
          e.outputHelp()
          e._exit(0, 'commander.helpDisplayed', '(outputHelp)')
        }
      }
      function humanReadableArgName(e) {
        const t = e.name + (e.variadic === true ? '...' : '')
        return e.required ? '<' + t + '>' : '[' + t + ']'
      }
      function _parseOptionFlags(e) {
        let t
        let n
        const r = e.split(/[ |,]+/)
        if (r.length > 1 && !/^[[<]/.test(r[1])) t = r.shift()
        n = r.shift()
        if (!t && /^-[^-]$/.test(n)) {
          t = n
          n = undefined
        }
        return { shortFlag: t, longFlag: n }
      }
      function incrementNodeInspectorPort(e) {
        return e.map((e) => {
          if (!e.startsWith('--inspect')) {
            return e
          }
          let t
          let n = '127.0.0.1'
          let r = '9229'
          let i
          if ((i = e.match(/^(--inspect(-brk)?)$/)) !== null) {
            t = i[1]
          } else if (
            (i = e.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null
          ) {
            t = i[1]
            if (/^\d+$/.test(i[3])) {
              r = i[3]
            } else {
              n = i[3]
            }
          } else if (
            (i = e.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null
          ) {
            t = i[1]
            n = i[3]
            r = i[4]
          }
          if (t && r !== '0') {
            return `${t}=${n}:${parseInt(r) + 1}`
          }
          return e
        })
      }
    },
  }
  var t = {}
  function __nccwpck_require__(n) {
    var r = t[n]
    if (r !== undefined) {
      return r.exports
    }
    var i = (t[n] = { exports: {} })
    var s = true
    try {
      e[n](i, i.exports, __nccwpck_require__)
      s = false
    } finally {
      if (s) delete t[n]
    }
    return i.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = {}
  ;(() => {
    'use strict'
    var e = n
    /**
     * @license
     * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the license.
     */ const t = __nccwpck_require__(915)
    const r = __nccwpck_require__(147)
    const i = __nccwpck_require__(685)
    const s = __nccwpck_require__(687)
    const o = __nccwpck_require__(17)
    const a = __nccwpck_require__(642)
    const l = __nccwpck_require__(263)
    const u = __nccwpck_require__(477)
    const c = __nccwpck_require__(310)
    const h = __nccwpck_require__(837)
    const p = __nccwpck_require__(144)
    const f = 'amphtml-validator'
    function hasPrefix(e, t) {
      return e.indexOf(t) == 0
    }
    function isHttpOrHttpsUrl(e) {
      return hasPrefix(e, 'http://') || hasPrefix(e, 'https://')
    }
    function readFromFile(e) {
      return new l(function (t, n) {
        r.readFile(e, 'utf8', function (e, r) {
          if (e) {
            n(e)
          } else {
            t(r.trim())
          }
        })
      })
    }
    function readFromReadable(e, t) {
      return new l(function (n, r) {
        const i = []
        t.setEncoding('utf8')
        t.on('data', function (e) {
          i.push(e)
        })
        t.on('end', function () {
          n(i.join(''))
        })
        t.on('error', function (t) {
          r(new Error('Could not read from ' + e + ' - ' + t.message))
        })
      })
    }
    function readFromStdin() {
      return readFromReadable('stdin', process.stdin).then(function (e) {
        process.stdin.resume()
        return e
      })
    }
    function readFromUrl(e, t) {
      return new l(function (n, r) {
        const o = hasPrefix(e, 'http://') ? i : s
        const a = o.request(e, function (t) {
          if (t.statusCode !== 200) {
            t.resume()
            r(
              new Error(
                'Unable to fetch ' + e + ' - HTTP Status ' + t.statusCode
              )
            )
          } else {
            n(t)
          }
        })
        a.setHeader('User-Agent', t)
        a.on('error', function (t) {
          r(new Error('Unable to fetch ' + e + ' - ' + t.message))
        })
        a.end()
      }).then(readFromReadable.bind(null, e))
    }
    function ValidationResult() {
      this.status = 'UNKNOWN'
      this.errors = []
    }
    function ValidationError() {
      this.severity = 'UNKNOWN_SEVERITY'
      this.line = 1
      this.col = 0
      this.message = ''
      this.specUrl = null
      this.code = 'UNKNOWN_CODE'
      this.params = []
    }
    function Validator(e) {
      this.sandbox = p.createContext()
      try {
        new p.Script(e).runInContext(this.sandbox)
      } catch (e) {
        throw new Error(
          'Could not instantiate validator_wasm.js - ' + e.message
        )
      }
    }
    Validator.prototype.init = function () {
      if (this.sandbox.amp.validator.init) {
        return this.sandbox.amp.validator.init()
      } else {
        return l.resolve(undefined)
      }
    }
    Validator.prototype.validateString = function (e, t) {
      const n = this.sandbox.amp.validator.validateString(e, t)
      const r = new ValidationResult()
      r.status = n.status
      for (let e = 0; e < n.errors.length; e++) {
        const t = n.errors[e]
        const i = new ValidationError()
        i.severity = t.severity
        i.line = t.line
        i.col = t.col
        i.message = this.sandbox.amp.validator.renderErrorMessage(t)
        i.specUrl = t.specUrl
        i.code = t.code
        i.params = t.params
        r.errors.push(i)
      }
      return r
    }
    const m = {}
    function getInstance(e, t) {
      const n = e || 'https://cdn.ampproject.org/v0/validator_wasm.js'
      const r = t || f
      if (m.hasOwnProperty(n)) {
        return l.resolve(m[n])
      }
      const i = isHttpOrHttpsUrl(n) ? readFromUrl(n, r) : readFromFile(n)
      return i
        .then(function (e) {
          let t
          try {
            t = new Validator(e)
          } catch (e) {
            throw e
          }
          m[n] = t
          return t
        })
        .then(function (e) {
          return e.init().then(() => e)
        })
    }
    e.getInstance = getInstance
    function newInstance(e) {
      return new Validator(e)
    }
    e.newInstance = newInstance
    function logValidationResult(e, n, r) {
      if (n.status === 'PASS') {
        process.stdout.write(e + ': ' + (r ? t.green('PASS') : 'PASS') + '\n')
      }
      for (let i = 0; i < n.errors.length; i++) {
        const s = n.errors[i]
        let o = e + ':' + s.line + ':' + s.col + ' '
        if (r) {
          o += (s.severity === 'ERROR' ? t.red : t.magenta)(s.message)
        } else {
          o += s.message
        }
        if (s.specUrl) {
          o += ' (see ' + s.specUrl + ')'
        }
        process.stderr.write(o + '\n')
      }
    }
    function main() {
      a.usage(
        '[options] <fileOrUrlOrMinus...>\n\n' +
          '  Validates the files or urls provided as arguments. If "-" is\n' +
          '  specified, reads from stdin instead.'
      )
        .option(
          '--validator_js <fileOrUrl>',
          'The Validator Javascript.\n' +
            '  Latest published version by default, or\n' +
            '  dist/validator_minified.js (built with build.py)\n' +
            '  for development.',
          'https://cdn.ampproject.org/v0/validator_wasm.js'
        )
        .option(
          '--user-agent <userAgent>',
          'User agent string to use in requests.',
          f
        )
        .option(
          '--html_format <AMP|AMP4ADS|AMP4EMAIL>',
          'The input format to be validated.\n' + '  AMP by default.',
          'AMP'
        )
        .option(
          '--format <color|text|json>',
          'How to format the output.\n' +
            '  "color" displays errors/warnings/success in\n' +
            '          red/orange/green.\n' +
            '  "text"  avoids color (e.g., useful in terminals not\n' +
            '          supporting color).\n' +
            '  "json"  emits json corresponding to the ValidationResult\n' +
            '          message in validator.proto.',
          'color'
        )
        .parse(process.argv)
      const e = a.opts()
      if (e.length === 0) {
        a.outputHelp()
        process.exit(1)
      }
      if (
        e.html_format !== 'AMP' &&
        e.html_format !== 'AMP4ADS' &&
        e.html_format !== 'AMP4EMAIL'
      ) {
        process.stderr.write(
          '--html_format must be set to "AMP", "AMP4ADS", or "AMP4EMAIL".\n',
          function () {
            process.exit(1)
          }
        )
      }
      if (e.format !== 'color' && e.format !== 'text' && e.format !== 'json') {
        process.stderr.write(
          '--format must be set to "color", "text", or "json".\n',
          function () {
            process.exit(1)
          }
        )
      }
      const n = []
      for (let t = 0; t < a.args.length; t++) {
        const r = a.args[t]
        if (r === '-') {
          n.push(readFromStdin())
        } else if (isHttpOrHttpsUrl(r)) {
          n.push(readFromUrl(r, e.userAgent))
        } else {
          n.push(readFromFile(r))
        }
      }
      getInstance(e.validator_js, e.userAgent)
        .then(function (r) {
          l.all(n)
            .then(function (t) {
              const n = {}
              let i = false
              for (let s = 0; s < t.length; s++) {
                const o = r.validateString(t[s], e.html_format)
                if (e.format === 'json') {
                  n[a.args[s]] = o
                } else {
                  logValidationResult(
                    a.args[s],
                    o,
                    e.format === 'color' ? true : false
                  )
                }
                if (o.status !== 'PASS') {
                  i = true
                }
              }
              if (e.format === 'json') {
                process.stdout.write(JSON.stringify(n) + '\n', function () {
                  process.exit(i ? 1 : 0)
                })
              } else if (i) {
                process.stderr.write('', function () {
                  process.exit(1)
                })
              } else {
                process.stdout.write('', function () {
                  process.exit(0)
                })
              }
            })
            .catch(function (n) {
              process.stderr.write(
                (e.format == 'color' ? t.red(n.message) : n.message) + '\n',
                function () {
                  process.exit(1)
                }
              )
            })
        })
        .catch(function (n) {
          process.stderr.write(
            (e.format == 'color' ? t.red(n.message) : n.message) + '\n',
            function () {
              process.exit(1)
            }
          )
        })
    }
    e.main = main
  })()
  module.exports = n
})()
