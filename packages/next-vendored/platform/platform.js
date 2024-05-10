;(() => {
  var e = {
    541: function (e, i, t) {
      e = t.nmd(e)
      /*!
       * Platform.js v1.3.6
       * Copyright 2014-2020 Benjamin Tan
       * Copyright 2011-2013 John-David Dalton
       * Available under MIT license
       */ ;(function () {
        'use strict'
        var t = { function: true, object: true }
        var r = (t[typeof window] && window) || this
        var a = r
        var n = t[typeof i] && i
        var o = t['object'] && e && !e.nodeType && e
        var l = n && o && typeof global == 'object' && global
        if (l && (l.global === l || l.window === l || l.self === l)) {
          r = l
        }
        var s = Math.pow(2, 53) - 1
        var f = /\bOpera/
        var b = this
        var c = Object.prototype
        var p = c.hasOwnProperty
        var u = c.toString
        function capitalize(e) {
          e = String(e)
          return e.charAt(0).toUpperCase() + e.slice(1)
        }
        function cleanupOS(e, i, t) {
          var r = {
            '10.0': '10',
            6.4: '10 Technical Preview',
            6.3: '8.1',
            6.2: '8',
            6.1: 'Server 2008 R2 / 7',
            '6.0': 'Server 2008 / Vista',
            5.2: 'Server 2003 / XP 64-bit',
            5.1: 'XP',
            5.01: '2000 SP1',
            '5.0': '2000',
            '4.0': 'NT',
            '4.90': 'ME',
          }
          if (
            i &&
            t &&
            /^Win/i.test(e) &&
            !/^Windows Phone /i.test(e) &&
            (r = r[/[\d.]+$/.exec(e)])
          ) {
            e = 'Windows ' + r
          }
          e = String(e)
          if (i && t) {
            e = e.replace(RegExp(i, 'i'), t)
          }
          e = format(
            e
              .replace(/ ce$/i, ' CE')
              .replace(/\bhpw/i, 'web')
              .replace(/\bMacintosh\b/, 'Mac OS')
              .replace(/_PowerPC\b/i, ' OS')
              .replace(/\b(OS X) [^ \d]+/i, '$1')
              .replace(/\bMac (OS X)\b/, '$1')
              .replace(/\/(\d)/, ' $1')
              .replace(/_/g, '.')
              .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
              .replace(/\bx86\.64\b/gi, 'x86_64')
              .replace(/\b(Windows Phone) OS\b/, '$1')
              .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
              .split(' on ')[0]
          )
          return e
        }
        function each(e, i) {
          var t = -1,
            r = e ? e.length : 0
          if (typeof r == 'number' && r > -1 && r <= s) {
            while (++t < r) {
              i(e[t], t, e)
            }
          } else {
            forOwn(e, i)
          }
        }
        function format(e) {
          e = trim(e)
          return /^(?:webOS|i(?:OS|P))/.test(e) ? e : capitalize(e)
        }
        function forOwn(e, i) {
          for (var t in e) {
            if (p.call(e, t)) {
              i(e[t], t, e)
            }
          }
        }
        function getClassOf(e) {
          return e == null ? capitalize(e) : u.call(e).slice(8, -1)
        }
        function isHostType(e, i) {
          var t = e != null ? typeof e[i] : 'number'
          return (
            !/^(?:boolean|number|string|undefined)$/.test(t) &&
            (t == 'object' ? !!e[i] : true)
          )
        }
        function qualify(e) {
          return String(e).replace(/([ -])(?!$)/g, '$1?')
        }
        function reduce(e, i) {
          var t = null
          each(e, function (r, a) {
            t = i(t, r, a, e)
          })
          return t
        }
        function trim(e) {
          return String(e).replace(/^ +| +$/g, '')
        }
        function parse(e) {
          var i = r
          var t = e && typeof e == 'object' && getClassOf(e) != 'String'
          if (t) {
            i = e
            e = null
          }
          var n = i.navigator || {}
          var o = n.userAgent || ''
          e || (e = o)
          var l = t || b == a
          var s = t
            ? !!n.likeChrome
            : /\bChrome\b/.test(e) && !/internal|\n/i.test(u.toString())
          var c = 'Object',
            p = t ? c : 'ScriptBridgingProxyObject',
            d = t ? c : 'Environment',
            S = t && i.java ? 'JavaPackage' : getClassOf(i.java),
            x = t ? c : 'RuntimeObject'
          var m = /\bJava/.test(S) && i.java
          var g = m && getClassOf(i.environment) == d
          var h = m ? 'a' : 'α'
          var v = m ? 'b' : 'β'
          var O = i.document || {}
          var y = i.operamini || i.opera
          var w = f.test((w = t && y ? y['[[Class]]'] : getClassOf(y)))
            ? w
            : (y = null)
          var M
          var E = e
          var P = []
          var C = null
          var k = e == o
          var B = k && y && typeof y.version == 'function' && y.version()
          var W
          var _ = getLayout([
            { label: 'EdgeHTML', pattern: 'Edge' },
            'Trident',
            { label: 'WebKit', pattern: 'AppleWebKit' },
            'iCab',
            'Presto',
            'NetFront',
            'Tasman',
            'KHTML',
            'Gecko',
          ])
          var R = getName([
            'Adobe AIR',
            'Arora',
            'Avant Browser',
            'Breach',
            'Camino',
            'Electron',
            'Epiphany',
            'Fennec',
            'Flock',
            'Galeon',
            'GreenBrowser',
            'iCab',
            'Iceweasel',
            'K-Meleon',
            'Konqueror',
            'Lunascape',
            'Maxthon',
            { label: 'Microsoft Edge', pattern: '(?:Edge|Edg|EdgA|EdgiOS)' },
            'Midori',
            'Nook Browser',
            'PaleMoon',
            'PhantomJS',
            'Raven',
            'Rekonq',
            'RockMelt',
            { label: 'Samsung Internet', pattern: 'SamsungBrowser' },
            'SeaMonkey',
            { label: 'Silk', pattern: '(?:Cloud9|Silk-Accelerated)' },
            'Sleipnir',
            'SlimBrowser',
            { label: 'SRWare Iron', pattern: 'Iron' },
            'Sunrise',
            'Swiftfox',
            'Vivaldi',
            'Waterfox',
            'WebPositive',
            { label: 'Yandex Browser', pattern: 'YaBrowser' },
            { label: 'UC Browser', pattern: 'UCBrowser' },
            'Opera Mini',
            { label: 'Opera Mini', pattern: 'OPiOS' },
            'Opera',
            { label: 'Opera', pattern: 'OPR' },
            'Chromium',
            'Chrome',
            { label: 'Chrome', pattern: '(?:HeadlessChrome)' },
            { label: 'Chrome Mobile', pattern: '(?:CriOS|CrMo)' },
            { label: 'Firefox', pattern: '(?:Firefox|Minefield)' },
            { label: 'Firefox for iOS', pattern: 'FxiOS' },
            { label: 'IE', pattern: 'IEMobile' },
            { label: 'IE', pattern: 'MSIE' },
            'Safari',
          ])
          var A = getProduct([
            { label: 'BlackBerry', pattern: 'BB10' },
            'BlackBerry',
            { label: 'Galaxy S', pattern: 'GT-I9000' },
            { label: 'Galaxy S2', pattern: 'GT-I9100' },
            { label: 'Galaxy S3', pattern: 'GT-I9300' },
            { label: 'Galaxy S4', pattern: 'GT-I9500' },
            { label: 'Galaxy S5', pattern: 'SM-G900' },
            { label: 'Galaxy S6', pattern: 'SM-G920' },
            { label: 'Galaxy S6 Edge', pattern: 'SM-G925' },
            { label: 'Galaxy S7', pattern: 'SM-G930' },
            { label: 'Galaxy S7 Edge', pattern: 'SM-G935' },
            'Google TV',
            'Lumia',
            'iPad',
            'iPod',
            'iPhone',
            'Kindle',
            { label: 'Kindle Fire', pattern: '(?:Cloud9|Silk-Accelerated)' },
            'Nexus',
            'Nook',
            'PlayBook',
            'PlayStation Vita',
            'PlayStation',
            'TouchPad',
            'Transformer',
            { label: 'Wii U', pattern: 'WiiU' },
            'Wii',
            'Xbox One',
            { label: 'Xbox 360', pattern: 'Xbox' },
            'Xoom',
          ])
          var I = getManufacturer({
            Apple: { iPad: 1, iPhone: 1, iPod: 1 },
            Alcatel: {},
            Archos: {},
            Amazon: { Kindle: 1, 'Kindle Fire': 1 },
            Asus: { Transformer: 1 },
            'Barnes & Noble': { Nook: 1 },
            BlackBerry: { PlayBook: 1 },
            Google: { 'Google TV': 1, Nexus: 1 },
            HP: { TouchPad: 1 },
            HTC: {},
            Huawei: {},
            Lenovo: {},
            LG: {},
            Microsoft: { Xbox: 1, 'Xbox One': 1 },
            Motorola: { Xoom: 1 },
            Nintendo: { 'Wii U': 1, Wii: 1 },
            Nokia: { Lumia: 1 },
            Oppo: {},
            Samsung: {
              'Galaxy S': 1,
              'Galaxy S2': 1,
              'Galaxy S3': 1,
              'Galaxy S4': 1,
            },
            Sony: { PlayStation: 1, 'PlayStation Vita': 1 },
            Xiaomi: { Mi: 1, Redmi: 1 },
          })
          var T = getOS([
            'Windows Phone',
            'KaiOS',
            'Android',
            'CentOS',
            { label: 'Chrome OS', pattern: 'CrOS' },
            'Debian',
            { label: 'DragonFly BSD', pattern: 'DragonFly' },
            'Fedora',
            'FreeBSD',
            'Gentoo',
            'Haiku',
            'Kubuntu',
            'Linux Mint',
            'OpenBSD',
            'Red Hat',
            'SuSE',
            'Ubuntu',
            'Xubuntu',
            'Cygwin',
            'Symbian OS',
            'hpwOS',
            'webOS ',
            'webOS',
            'Tablet OS',
            'Tizen',
            'Linux',
            'Mac OS X',
            'Macintosh',
            'Mac',
            'Windows 98;',
            'Windows ',
          ])
          function getLayout(i) {
            return reduce(i, function (i, t) {
              return (
                i ||
                (RegExp('\\b' + (t.pattern || qualify(t)) + '\\b', 'i').exec(
                  e
                ) &&
                  (t.label || t))
              )
            })
          }
          function getManufacturer(i) {
            return reduce(i, function (i, t, r) {
              return (
                i ||
                ((t[A] ||
                  t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] ||
                  RegExp('\\b' + qualify(r) + '(?:\\b|\\w*\\d)', 'i').exec(
                    e
                  )) &&
                  r)
              )
            })
          }
          function getName(i) {
            return reduce(i, function (i, t) {
              return (
                i ||
                (RegExp('\\b' + (t.pattern || qualify(t)) + '\\b', 'i').exec(
                  e
                ) &&
                  (t.label || t))
              )
            })
          }
          function getOS(i) {
            return reduce(i, function (i, t) {
              var r = t.pattern || qualify(t)
              if (
                !i &&
                (i = RegExp('\\b' + r + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e))
              ) {
                i = cleanupOS(i, r, t.label || t)
              }
              return i
            })
          }
          function getProduct(i) {
            return reduce(i, function (i, t) {
              var r = t.pattern || qualify(t)
              if (
                !i &&
                (i =
                  RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(e) ||
                  RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(e) ||
                  RegExp(
                    '\\b' + r + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)',
                    'i'
                  ).exec(e))
              ) {
                if (
                  (i = String(
                    t.label && !RegExp(r, 'i').test(t.label) ? t.label : i
                  ).split('/'))[1] &&
                  !/[\d.]+/.test(i[0])
                ) {
                  i[0] += ' ' + i[1]
                }
                t = t.label || t
                i = format(
                  i[0]
                    .replace(RegExp(r, 'i'), t)
                    .replace(RegExp('; *(?:' + t + '[_-])?', 'i'), ' ')
                    .replace(RegExp('(' + t + ')[-_.]?(\\w)', 'i'), '$1 $2')
                )
              }
              return i
            })
          }
          function getVersion(i) {
            return reduce(i, function (i, t) {
              return (
                i ||
                (RegExp(
                  t +
                    '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)',
                  'i'
                ).exec(e) || 0)[1] ||
                null
              )
            })
          }
          function toStringPlatform() {
            return this.description || ''
          }
          _ && (_ = [_])
          if (
            /\bAndroid\b/.test(T) &&
            !A &&
            (M = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e))
          ) {
            A = trim(M[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null
          }
          if (I && !A) {
            A = getProduct([I])
          } else if (I && A) {
            A = A.replace(
              RegExp('^(' + qualify(I) + ')[-_.\\s]', 'i'),
              I + ' '
            ).replace(
              RegExp('^(' + qualify(I) + ')[-_.]?(\\w)', 'i'),
              I + ' $2'
            )
          }
          if ((M = /\bGoogle TV\b/.exec(A))) {
            A = M[0]
          }
          if (/\bSimulator\b/i.test(e)) {
            A = (A ? A + ' ' : '') + 'Simulator'
          }
          if (R == 'Opera Mini' && /\bOPiOS\b/.test(e)) {
            P.push('running in Turbo/Uncompressed mode')
          }
          if (R == 'IE' && /\blike iPhone OS\b/.test(e)) {
            M = parse(e.replace(/like iPhone OS/, ''))
            I = M.manufacturer
            A = M.product
          } else if (/^iP/.test(A)) {
            R || (R = 'Safari')
            T =
              'iOS' +
              ((M = / OS ([\d_]+)/i.exec(e))
                ? ' ' + M[1].replace(/_/g, '.')
                : '')
          } else if (R == 'Konqueror' && /^Linux\b/i.test(T)) {
            T = 'Kubuntu'
          } else if (
            (I &&
              I != 'Google' &&
              ((/Chrome/.test(R) && !/\bMobile Safari\b/i.test(e)) ||
                /\bVita\b/.test(A))) ||
            (/\bAndroid\b/.test(T) &&
              /^Chrome/.test(R) &&
              /\bVersion\//i.test(e))
          ) {
            R = 'Android Browser'
            T = /\bAndroid\b/.test(T) ? T : 'Android'
          } else if (R == 'Silk') {
            if (!/\bMobi/i.test(e)) {
              T = 'Android'
              P.unshift('desktop mode')
            }
            if (/Accelerated *= *true/i.test(e)) {
              P.unshift('accelerated')
            }
          } else if (R == 'UC Browser' && /\bUCWEB\b/.test(e)) {
            P.push('speed mode')
          } else if (R == 'PaleMoon' && (M = /\bFirefox\/([\d.]+)\b/.exec(e))) {
            P.push('identifying as Firefox ' + M[1])
          } else if (
            R == 'Firefox' &&
            (M = /\b(Mobile|Tablet|TV)\b/i.exec(e))
          ) {
            T || (T = 'Firefox OS')
            A || (A = M[1])
          } else if (
            !R ||
            (M = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(R))
          ) {
            if (
              R &&
              !A &&
              /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(M + '/') + 8))
            ) {
              R = null
            }
            if (
              (M = A || I || T) &&
              (A || I || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(T))
            ) {
              R =
                /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(T) ? T : M) +
                ' Browser'
            }
          } else if (
            R == 'Electron' &&
            (M = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1])
          ) {
            P.push('Chromium ' + M)
          }
          if (!B) {
            B = getVersion([
              '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
              'Version',
              qualify(R),
              '(?:Firefox|Minefield|NetFront)',
            ])
          }
          if (
            (M =
              (_ == 'iCab' && parseFloat(B) > 3 && 'WebKit') ||
              (/\bOpera\b/.test(R) &&
                (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) ||
              (/\b(?:Midori|Nook|Safari)\b/i.test(e) &&
                !/^(?:Trident|EdgeHTML)$/.test(_) &&
                'WebKit') ||
              (!_ &&
                /\bMSIE\b/i.test(e) &&
                (T == 'Mac OS' ? 'Tasman' : 'Trident')) ||
              (_ == 'WebKit' &&
                /\bPlayStation\b(?! Vita\b)/i.test(R) &&
                'NetFront'))
          ) {
            _ = [M]
          }
          if (
            R == 'IE' &&
            (M = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])
          ) {
            R += ' Mobile'
            T = 'Windows Phone ' + (/\+$/.test(M) ? M : M + '.x')
            P.unshift('desktop mode')
          } else if (/\bWPDesktop\b/i.test(e)) {
            R = 'IE Mobile'
            T = 'Windows Phone 8.x'
            P.unshift('desktop mode')
            B || (B = (/\brv:([\d.]+)/.exec(e) || 0)[1])
          } else if (
            R != 'IE' &&
            _ == 'Trident' &&
            (M = /\brv:([\d.]+)/.exec(e))
          ) {
            if (R) {
              P.push('identifying as ' + R + (B ? ' ' + B : ''))
            }
            R = 'IE'
            B = M[1]
          }
          if (k) {
            if (isHostType(i, 'global')) {
              if (m) {
                M = m.lang.System
                E = M.getProperty('os.arch')
                T =
                  T ||
                  M.getProperty('os.name') + ' ' + M.getProperty('os.version')
              }
              if (g) {
                try {
                  B = i.require('ringo/engine').version.join('.')
                  R = 'RingoJS'
                } catch (e) {
                  if ((M = i.system) && M.global.system == i.system) {
                    R = 'Narwhal'
                    T || (T = M[0].os || null)
                  }
                }
                if (!R) {
                  R = 'Rhino'
                }
              } else if (
                typeof i.process == 'object' &&
                !i.process.browser &&
                (M = i.process)
              ) {
                if (typeof M.versions == 'object') {
                  if (typeof M.versions.electron == 'string') {
                    P.push('Node ' + M.versions.node)
                    R = 'Electron'
                    B = M.versions.electron
                  } else if (typeof M.versions.nw == 'string') {
                    P.push('Chromium ' + B, 'Node ' + M.versions.node)
                    R = 'NW.js'
                    B = M.versions.nw
                  }
                }
                if (!R) {
                  R = 'Node.js'
                  E = M.arch
                  T = M.platform
                  B = /[\d.]+/.exec(M.version)
                  B = B ? B[0] : null
                }
              }
            } else if (getClassOf((M = i.runtime)) == p) {
              R = 'Adobe AIR'
              T = M.flash.system.Capabilities.os
            } else if (getClassOf((M = i.phantom)) == x) {
              R = 'PhantomJS'
              B =
                (M = M.version || null) &&
                M.major + '.' + M.minor + '.' + M.patch
            } else if (
              typeof O.documentMode == 'number' &&
              (M = /\bTrident\/(\d+)/i.exec(e))
            ) {
              B = [B, O.documentMode]
              if ((M = +M[1] + 4) != B[1]) {
                P.push('IE ' + B[1] + ' mode')
                _ && (_[1] = '')
                B[1] = M
              }
              B = R == 'IE' ? String(B[1].toFixed(1)) : B[0]
            } else if (
              typeof O.documentMode == 'number' &&
              /^(?:Chrome|Firefox)\b/.test(R)
            ) {
              P.push('masking as ' + R + ' ' + B)
              R = 'IE'
              B = '11.0'
              _ = ['Trident']
              T = 'Windows'
            }
            T = T && format(T)
          }
          if (
            B &&
            (M =
              /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) ||
              /(?:alpha|beta)(?: ?\d)?/i.exec(
                e + ';' + (k && n.appMinorVersion)
              ) ||
              (/\bMinefield\b/i.test(e) && 'a'))
          ) {
            C = /b/i.test(M) ? 'beta' : 'alpha'
            B =
              B.replace(RegExp(M + '\\+?$'), '') +
              (C == 'beta' ? v : h) +
              (/\d+\+?/.exec(M) || '')
          }
          if (
            R == 'Fennec' ||
            (R == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(T))
          ) {
            R = 'Firefox Mobile'
          } else if (R == 'Maxthon' && B) {
            B = B.replace(/\.[\d.]+/, '.x')
          } else if (/\bXbox\b/i.test(A)) {
            if (A == 'Xbox 360') {
              T = null
            }
            if (A == 'Xbox 360' && /\bIEMobile\b/.test(e)) {
              P.unshift('mobile mode')
            }
          } else if (
            (/^(?:Chrome|IE|Opera)$/.test(R) ||
              (R && !A && !/Browser|Mobi/.test(R))) &&
            (T == 'Windows CE' || /Mobi/i.test(e))
          ) {
            R += ' Mobile'
          } else if (R == 'IE' && k) {
            try {
              if (i.external === null) {
                P.unshift('platform preview')
              }
            } catch (e) {
              P.unshift('embedded')
            }
          } else if (
            (/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(e)) &&
            (M =
              (RegExp(A.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) ||
                0)[1] || B)
          ) {
            M = [M, /BB10/.test(e)]
            T =
              (M[1] ? ((A = null), (I = 'BlackBerry')) : 'Device Software') +
              ' ' +
              M[0]
            B = null
          } else if (
            this != forOwn &&
            A != 'Wii' &&
            ((k && y) ||
              (/Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(e)) ||
              (R == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(T)) ||
              (R == 'IE' &&
                ((T && !/^Win/.test(T) && B > 5.5) ||
                  (/\bWindows XP\b/.test(T) && B > 8) ||
                  (B == 8 && !/\bTrident\b/.test(e))))) &&
            !f.test((M = parse.call(forOwn, e.replace(f, '') + ';'))) &&
            M.name
          ) {
            M = 'ing as ' + M.name + ((M = M.version) ? ' ' + M : '')
            if (f.test(R)) {
              if (/\bIE\b/.test(M) && T == 'Mac OS') {
                T = null
              }
              M = 'identify' + M
            } else {
              M = 'mask' + M
              if (w) {
                R = format(w.replace(/([a-z])([A-Z])/g, '$1 $2'))
              } else {
                R = 'Opera'
              }
              if (/\bIE\b/.test(M)) {
                T = null
              }
              if (!k) {
                B = null
              }
            }
            _ = ['Presto']
            P.push(M)
          }
          if ((M = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1])) {
            M = [parseFloat(M.replace(/\.(\d)$/, '.0$1')), M]
            if (R == 'Safari' && M[1].slice(-1) == '+') {
              R = 'WebKit Nightly'
              C = 'alpha'
              B = M[1].slice(0, -1)
            } else if (
              B == M[1] ||
              B == (M[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])
            ) {
              B = null
            }
            M[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1]
            if (
              M[0] == 537.36 &&
              M[2] == 537.36 &&
              parseFloat(M[1]) >= 28 &&
              _ == 'WebKit'
            ) {
              _ = ['Blink']
            }
            if (!k || (!s && !M[1])) {
              _ && (_[1] = 'like Safari')
              M =
                ((M = M[0]),
                M < 400
                  ? 1
                  : M < 500
                  ? 2
                  : M < 526
                  ? 3
                  : M < 533
                  ? 4
                  : M < 534
                  ? '4+'
                  : M < 535
                  ? 5
                  : M < 537
                  ? 6
                  : M < 538
                  ? 7
                  : M < 601
                  ? 8
                  : M < 602
                  ? 9
                  : M < 604
                  ? 10
                  : M < 606
                  ? 11
                  : M < 608
                  ? 12
                  : '12')
            } else {
              _ && (_[1] = 'like Chrome')
              M =
                M[1] ||
                ((M = M[0]),
                M < 530
                  ? 1
                  : M < 532
                  ? 2
                  : M < 532.05
                  ? 3
                  : M < 533
                  ? 4
                  : M < 534.03
                  ? 5
                  : M < 534.07
                  ? 6
                  : M < 534.1
                  ? 7
                  : M < 534.13
                  ? 8
                  : M < 534.16
                  ? 9
                  : M < 534.24
                  ? 10
                  : M < 534.3
                  ? 11
                  : M < 535.01
                  ? 12
                  : M < 535.02
                  ? '13+'
                  : M < 535.07
                  ? 15
                  : M < 535.11
                  ? 16
                  : M < 535.19
                  ? 17
                  : M < 536.05
                  ? 18
                  : M < 536.1
                  ? 19
                  : M < 537.01
                  ? 20
                  : M < 537.11
                  ? '21+'
                  : M < 537.13
                  ? 23
                  : M < 537.18
                  ? 24
                  : M < 537.24
                  ? 25
                  : M < 537.36
                  ? 26
                  : _ != 'Blink'
                  ? '27'
                  : '28')
            }
            _ &&
              (_[1] +=
                ' ' +
                (M += typeof M == 'number' ? '.x' : /[.+]/.test(M) ? '' : '+'))
            if (R == 'Safari' && (!B || parseInt(B) > 45)) {
              B = M
            } else if (R == 'Chrome' && /\bHeadlessChrome/i.test(e)) {
              P.unshift('headless')
            }
          }
          if (R == 'Opera' && (M = /\bzbov|zvav$/.exec(T))) {
            R += ' '
            P.unshift('desktop mode')
            if (M == 'zvav') {
              R += 'Mini'
              B = null
            } else {
              R += 'Mobile'
            }
            T = T.replace(RegExp(' *' + M + '$'), '')
          } else if (R == 'Safari' && /\bChrome\b/.exec(_ && _[1])) {
            P.unshift('desktop mode')
            R = 'Chrome Mobile'
            B = null
            if (/\bOS X\b/.test(T)) {
              I = 'Apple'
              T = 'iOS 4.3+'
            } else {
              T = null
            }
          } else if (/\bSRWare Iron\b/.test(R) && !B) {
            B = getVersion('Chrome')
          }
          if (
            B &&
            B.indexOf((M = /[\d.]+$/.exec(T))) == 0 &&
            e.indexOf('/' + M + '-') > -1
          ) {
            T = trim(T.replace(M, ''))
          }
          if (T && T.indexOf(R) != -1 && !RegExp(R + ' OS').test(T)) {
            T = T.replace(RegExp(' *' + qualify(R) + ' *'), '')
          }
          if (
            _ &&
            !/\b(?:Avant|Nook)\b/.test(R) &&
            (/Browser|Lunascape|Maxthon/.test(R) ||
              (R != 'Safari' && /^iOS/.test(T) && /\bSafari\b/.test(_[1])) ||
              (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                R
              ) &&
                _[1]))
          ) {
            ;(M = _[_.length - 1]) && P.push(M)
          }
          if (P.length) {
            P = ['(' + P.join('; ') + ')']
          }
          if (I && A && A.indexOf(I) < 0) {
            P.push('on ' + I)
          }
          if (A) {
            P.push((/^on /.test(P[P.length - 1]) ? '' : 'on ') + A)
          }
          if (T) {
            M = / ([\d.+]+)$/.exec(T)
            W = M && T.charAt(T.length - M[0].length - 1) == '/'
            T = {
              architecture: 32,
              family: M && !W ? T.replace(M[0], '') : T,
              version: M ? M[1] : null,
              toString: function () {
                var e = this.version
                return (
                  this.family +
                  (e && !W ? ' ' + e : '') +
                  (this.architecture == 64 ? ' 64-bit' : '')
                )
              },
            }
          }
          if (
            (M = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(E)) &&
            !/\bi686\b/i.test(E)
          ) {
            if (T) {
              T.architecture = 64
              T.family = T.family.replace(RegExp(' *' + M), '')
            }
            if (
              R &&
              (/\bWOW64\b/i.test(e) ||
                (k &&
                  /\w(?:86|32)$/.test(n.cpuClass || n.platform) &&
                  !/\bWin64; x64\b/i.test(e)))
            ) {
              P.unshift('32-bit')
            }
          } else if (
            T &&
            /^OS X/.test(T.family) &&
            R == 'Chrome' &&
            parseFloat(B) >= 39
          ) {
            T.architecture = 64
          }
          e || (e = null)
          var F = {}
          F.description = e
          F.layout = _ && _[0]
          F.manufacturer = I
          F.name = R
          F.prerelease = C
          F.product = A
          F.ua = e
          F.version = R && B
          F.os = T || {
            architecture: null,
            family: null,
            version: null,
            toString: function () {
              return 'null'
            },
          }
          F.parse = parse
          F.toString = toStringPlatform
          if (F.version) {
            P.unshift(B)
          }
          if (F.name) {
            P.unshift(R)
          }
          if (
            T &&
            R &&
            !(T == String(T).split(' ')[0] && (T == R.split(' ')[0] || A))
          ) {
            P.push(A ? '(' + T + ')' : 'on ' + T)
          }
          if (P.length) {
            F.description = P.join(' ')
          }
          return F
        }
        var d = parse()
        if (n && o) {
          forOwn(d, function (e, i) {
            n[i] = e
          })
        } else {
          r.platform = d
        }
      }).call(this)
    },
  }
  var i = {}
  function __nccwpck_require__(t) {
    var r = i[t]
    if (r !== undefined) {
      return r.exports
    }
    var a = (i[t] = { id: t, loaded: false, exports: {} })
    var n = true
    try {
      e[t].call(a.exports, a, a.exports, __nccwpck_require__)
      n = false
    } finally {
      if (n) delete i[t]
    }
    a.loaded = true
    return a.exports
  }
  ;(() => {
    __nccwpck_require__.nmd = (e) => {
      e.paths = []
      if (!e.children) e.children = []
      return e
    }
  })()
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = __nccwpck_require__(541)
  module.exports = t
})()
