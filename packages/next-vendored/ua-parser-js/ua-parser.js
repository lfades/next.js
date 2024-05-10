;(() => {
  var i = {
    226: function (i, e) {
      ;(function (o, a) {
        'use strict'
        var r = '1.0.35',
          t = '',
          n = '?',
          s = 'function',
          b = 'undefined',
          w = 'object',
          l = 'string',
          d = 'major',
          c = 'model',
          u = 'name',
          p = 'type',
          m = 'vendor',
          f = 'version',
          h = 'architecture',
          v = 'console',
          g = 'mobile',
          k = 'tablet',
          x = 'smarttv',
          _ = 'wearable',
          y = 'embedded',
          q = 350
        var T = 'Amazon',
          S = 'Apple',
          z = 'ASUS',
          N = 'BlackBerry',
          A = 'Browser',
          C = 'Chrome',
          E = 'Edge',
          O = 'Firefox',
          U = 'Google',
          j = 'Huawei',
          P = 'LG',
          R = 'Microsoft',
          M = 'Motorola',
          B = 'Opera',
          V = 'Samsung',
          D = 'Sharp',
          I = 'Sony',
          W = 'Viera',
          F = 'Xiaomi',
          G = 'Zebra',
          H = 'Facebook',
          L = 'Chromium OS',
          Z = 'Mac OS'
        var extend = function (i, e) {
            var o = {}
            for (var a in i) {
              if (e[a] && e[a].length % 2 === 0) {
                o[a] = e[a].concat(i[a])
              } else {
                o[a] = i[a]
              }
            }
            return o
          },
          enumerize = function (i) {
            var e = {}
            for (var o = 0; o < i.length; o++) {
              e[i[o].toUpperCase()] = i[o]
            }
            return e
          },
          has = function (i, e) {
            return typeof i === l
              ? lowerize(e).indexOf(lowerize(i)) !== -1
              : false
          },
          lowerize = function (i) {
            return i.toLowerCase()
          },
          majorize = function (i) {
            return typeof i === l ? i.replace(/[^\d\.]/g, t).split('.')[0] : a
          },
          trim = function (i, e) {
            if (typeof i === l) {
              i = i.replace(/^\s\s*/, t)
              return typeof e === b ? i : i.substring(0, q)
            }
          }
        var rgxMapper = function (i, e) {
            var o = 0,
              r,
              t,
              n,
              b,
              l,
              d
            while (o < e.length && !l) {
              var c = e[o],
                u = e[o + 1]
              r = t = 0
              while (r < c.length && !l) {
                if (!c[r]) {
                  break
                }
                l = c[r++].exec(i)
                if (!!l) {
                  for (n = 0; n < u.length; n++) {
                    d = l[++t]
                    b = u[n]
                    if (typeof b === w && b.length > 0) {
                      if (b.length === 2) {
                        if (typeof b[1] == s) {
                          this[b[0]] = b[1].call(this, d)
                        } else {
                          this[b[0]] = b[1]
                        }
                      } else if (b.length === 3) {
                        if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                          this[b[0]] = d ? b[1].call(this, d, b[2]) : a
                        } else {
                          this[b[0]] = d ? d.replace(b[1], b[2]) : a
                        }
                      } else if (b.length === 4) {
                        this[b[0]] = d
                          ? b[3].call(this, d.replace(b[1], b[2]))
                          : a
                      }
                    } else {
                      this[b] = d ? d : a
                    }
                  }
                }
              }
              o += 2
            }
          },
          strMapper = function (i, e) {
            for (var o in e) {
              if (typeof e[o] === w && e[o].length > 0) {
                for (var r = 0; r < e[o].length; r++) {
                  if (has(e[o][r], i)) {
                    return o === n ? a : o
                  }
                }
              } else if (has(e[o], i)) {
                return o === n ? a : o
              }
            }
            return i
          }
        var $ = {
            '1.0': '/8',
            1.2: '/1',
            1.3: '/3',
            '2.0': '/412',
            '2.0.2': '/416',
            '2.0.3': '/417',
            '2.0.4': '/419',
            '?': '/',
          },
          X = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2e3: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          }
        var K = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [f, [u, 'Chrome']],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [f, [u, 'Edge']],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [u, f],
            [/opios[\/ ]+([\w\.]+)/i],
            [f, [u, B + ' Mini']],
            [/\bopr\/([\w\.]+)/i],
            [f, [u, B]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [u, f],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [f, [u, 'UC' + A]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
            [f, [u, 'WeChat(Win) Desktop']],
            [/micromessenger\/([\w\.]+)/i],
            [f, [u, 'WeChat']],
            [/konqueror\/([\w\.]+)/i],
            [f, [u, 'Konqueror']],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [f, [u, 'IE']],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [f, [u, 'Yandex']],
            [/(avast|avg)\/([\w\.]+)/i],
            [[u, /(.+)/, '$1 Secure ' + A], f],
            [/\bfocus\/([\w\.]+)/i],
            [f, [u, O + ' Focus']],
            [/\bopt\/([\w\.]+)/i],
            [f, [u, B + ' Touch']],
            [/coc_coc\w+\/([\w\.]+)/i],
            [f, [u, 'Coc Coc']],
            [/dolfin\/([\w\.]+)/i],
            [f, [u, 'Dolphin']],
            [/coast\/([\w\.]+)/i],
            [f, [u, B + ' Coast']],
            [/miuibrowser\/([\w\.]+)/i],
            [f, [u, 'MIUI ' + A]],
            [/fxios\/([-\w\.]+)/i],
            [f, [u, O]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[u, '360 ' + A]],
            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
            [[u, /(.+)/, '$1 ' + A], f],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[u, /_/g, ' '], f],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [u, f],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
            [u],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[u, H], f],
            [
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i,
            ],
            [u, f],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [f, [u, 'GSA']],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [f, [u, 'TikTok']],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [f, [u, C + ' Headless']],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[u, C + ' WebView'], f],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [f, [u, 'Android ' + A]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [u, f],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [f, [u, 'Mobile Safari']],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [f, u],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [u, [f, strMapper, $]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [u, f],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[u, 'Netscape'], f],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [f, [u, O + ' Reality']],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
              /panasonic;(viera)/i,
            ],
            [u, f],
            [/(cobalt)\/([\w\.]+)/i],
            [u, [f, /master.|lts./, '']],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[h, 'amd64']],
            [/(ia32(?=;))/i],
            [[h, lowerize]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[h, 'ia32']],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[h, 'arm64']],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[h, 'armhf']],
            [/windows (ce|mobile); ppc;/i],
            [[h, 'arm']],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[h, /ower/, t, lowerize]],
            [/(sun4\w)[;\)]/i],
            [[h, 'sparc']],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[h, lowerize]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [c, [m, V], [p, k]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [c, [m, V], [p, g]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [c, [m, S], [p, g]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [c, [m, S], [p, k]],
            [/(macintosh);/i],
            [c, [m, S]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [c, [m, D], [p, g]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [c, [m, j], [p, k]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [c, [m, j], [p, g]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [c, /_/g, ' '],
              [m, F],
              [p, g],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [c, /_/g, ' '],
              [m, F],
              [p, k],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [c, [m, 'OPPO'], [p, g]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [c, [m, 'Vivo'], [p, g]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [c, [m, 'Realme'], [p, g]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [c, [m, M], [p, g]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [c, [m, M], [p, k]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [c, [m, P], [p, k]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [c, [m, P], [p, g]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [c, [m, 'Lenovo'], [p, k]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [c, /_/g, ' '],
              [m, 'Nokia'],
              [p, g],
            ],
            [/(pixel c)\b/i],
            [c, [m, U], [p, k]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [c, [m, U], [p, g]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [c, [m, I], [p, g]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [c, 'Xperia Tablet'],
              [m, I],
              [p, k],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [c, [m, 'OnePlus'], [p, g]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [c, [m, T], [p, k]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [c, /(.+)/g, 'Fire Phone $1'],
              [m, T],
              [p, g],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [c, m, [p, k]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [c, [m, N], [p, g]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [c, [m, z], [p, k]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [c, [m, z], [p, g]],
            [/(nexus 9)/i],
            [c, [m, 'HTC'], [p, k]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [m, [c, /_/g, ' '], [p, g]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [c, [m, 'Acer'], [p, k]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [c, [m, 'Meizu'], [p, g]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [m, c, [p, g]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [m, c, [p, k]],
            [/(surface duo)/i],
            [c, [m, R], [p, k]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [c, [m, 'Fairphone'], [p, g]],
            [/(u304aa)/i],
            [c, [m, 'AT&T'], [p, g]],
            [/\bsie-(\w*)/i],
            [c, [m, 'Siemens'], [p, g]],
            [/\b(rct\w+) b/i],
            [c, [m, 'RCA'], [p, k]],
            [/\b(venue[\d ]{2,7}) b/i],
            [c, [m, 'Dell'], [p, k]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [c, [m, 'Verizon'], [p, k]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [c, [m, 'Barnes & Noble'], [p, k]],
            [/\b(tm\d{3}\w+) b/i],
            [c, [m, 'NuVision'], [p, k]],
            [/\b(k88) b/i],
            [c, [m, 'ZTE'], [p, k]],
            [/\b(nx\d{3}j) b/i],
            [c, [m, 'ZTE'], [p, g]],
            [/\b(gen\d{3}) b.+49h/i],
            [c, [m, 'Swiss'], [p, g]],
            [/\b(zur\d{3}) b/i],
            [c, [m, 'Swiss'], [p, k]],
            [/\b((zeki)?tb.*\b) b/i],
            [c, [m, 'Zeki'], [p, k]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[m, 'Dragon Touch'], c, [p, k]],
            [/\b(ns-?\w{0,9}) b/i],
            [c, [m, 'Insignia'], [p, k]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [c, [m, 'NextBook'], [p, k]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[m, 'Voice'], c, [p, g]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[m, 'LvTel'], c, [p, g]],
            [/\b(ph-1) /i],
            [c, [m, 'Essential'], [p, g]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [c, [m, 'Envizen'], [p, k]],
            [/\b(trio[-\w\. ]+) b/i],
            [c, [m, 'MachSpeed'], [p, k]],
            [/\btu_(1491) b/i],
            [c, [m, 'Rotor'], [p, k]],
            [/(shield[\w ]+) b/i],
            [c, [m, 'Nvidia'], [p, k]],
            [/(sprint) (\w+)/i],
            [m, c, [p, g]],
            [/(kin\.[onetw]{3})/i],
            [
              [c, /\./g, ' '],
              [m, R],
              [p, g],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [c, [m, G], [p, k]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [c, [m, G], [p, g]],
            [/smart-tv.+(samsung)/i],
            [m, [p, x]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [c, /^/, 'SmartTV'],
              [m, V],
              [p, x],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [m, P],
              [p, x],
            ],
            [/(apple) ?tv/i],
            [m, [c, S + ' TV'], [p, x]],
            [/crkey/i],
            [
              [c, C + 'cast'],
              [m, U],
              [p, x],
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [c, [m, T], [p, x]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [c, [m, D], [p, x]],
            [/(bravia[\w ]+)( bui|\))/i],
            [c, [m, I], [p, x]],
            [/(mitv-\w{5}) bui/i],
            [c, [m, F], [p, x]],
            [/Hbbtv.*(technisat) (.*);/i],
            [m, c, [p, x]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [m, trim],
              [c, trim],
              [p, x],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[p, x]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [m, c, [p, v]],
            [/droid.+; (shield) bui/i],
            [c, [m, 'Nvidia'], [p, v]],
            [/(playstation [345portablevi]+)/i],
            [c, [m, I], [p, v]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [c, [m, R], [p, v]],
            [/((pebble))app/i],
            [m, c, [p, _]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [c, [m, S], [p, _]],
            [/droid.+; (glass) \d/i],
            [c, [m, U], [p, _]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [c, [m, G], [p, _]],
            [/(quest( 2| pro)?)/i],
            [c, [m, H], [p, _]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [m, [p, y]],
            [/(aeobc)\b/i],
            [c, [m, T], [p, y]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [c, [p, g]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [c, [p, k]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[p, k]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[p, g]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [c, [m, 'Generic']],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [f, [u, E + 'HTML']],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [f, [u, 'Blink']],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [u, f],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [f, u],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [u, f],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [u, [f, strMapper, X]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [u, 'Windows'],
              [f, strMapper, X],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /ios;fbsv\/([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [f, /_/g, '.'],
              [u, 'iOS'],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [u, Z],
              [f, /_/g, '.'],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [f, u],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [u, f],
            [/\(bb(10);/i],
            [f, [u, N]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [f, [u, 'Symbian']],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [f, [u, O + ' OS']],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [f, [u, 'webOS']],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [f, [u, 'watchOS']],
            [/crkey\/([\d\.]+)/i],
            [f, [u, C + 'cast']],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[u, L], f],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [u, f],
            [/(sunos) ?([\w\.\d]*)/i],
            [[u, 'Solaris'], f],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [u, f],
          ],
        }
        var UAParser = function (i, e) {
          if (typeof i === w) {
            e = i
            i = a
          }
          if (!(this instanceof UAParser)) {
            return new UAParser(i, e).getResult()
          }
          var r = typeof o !== b && o.navigator ? o.navigator : a
          var n = i || (r && r.userAgent ? r.userAgent : t)
          var v = r && r.userAgentData ? r.userAgentData : a
          var x = e ? extend(K, e) : K
          var _ = r && r.userAgent == n
          this.getBrowser = function () {
            var i = {}
            i[u] = a
            i[f] = a
            rgxMapper.call(i, n, x.browser)
            i[d] = majorize(i[f])
            if (_ && r && r.brave && typeof r.brave.isBrave == s) {
              i[u] = 'Brave'
            }
            return i
          }
          this.getCPU = function () {
            var i = {}
            i[h] = a
            rgxMapper.call(i, n, x.cpu)
            return i
          }
          this.getDevice = function () {
            var i = {}
            i[m] = a
            i[c] = a
            i[p] = a
            rgxMapper.call(i, n, x.device)
            if (_ && !i[p] && v && v.mobile) {
              i[p] = g
            }
            if (
              _ &&
              i[c] == 'Macintosh' &&
              r &&
              typeof r.standalone !== b &&
              r.maxTouchPoints &&
              r.maxTouchPoints > 2
            ) {
              i[c] = 'iPad'
              i[p] = k
            }
            return i
          }
          this.getEngine = function () {
            var i = {}
            i[u] = a
            i[f] = a
            rgxMapper.call(i, n, x.engine)
            return i
          }
          this.getOS = function () {
            var i = {}
            i[u] = a
            i[f] = a
            rgxMapper.call(i, n, x.os)
            if (_ && !i[u] && v && v.platform != 'Unknown') {
              i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z)
            }
            return i
          }
          this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU(),
            }
          }
          this.getUA = function () {
            return n
          }
          this.setUA = function (i) {
            n = typeof i === l && i.length > q ? trim(i, q) : i
            return this
          }
          this.setUA(n)
          return this
        }
        UAParser.VERSION = r
        UAParser.BROWSER = enumerize([u, f, d])
        UAParser.CPU = enumerize([h])
        UAParser.DEVICE = enumerize([c, m, p, v, g, x, k, _, y])
        UAParser.ENGINE = UAParser.OS = enumerize([u, f])
        if (typeof e !== b) {
          if ('object' !== b && i.exports) {
            e = i.exports = UAParser
          }
          e.UAParser = UAParser
        } else {
          if (typeof define === s && define.amd) {
            define(function () {
              return UAParser
            })
          } else if (typeof o !== b) {
            o.UAParser = UAParser
          }
        }
        var Q = typeof o !== b && (o.jQuery || o.Zepto)
        if (Q && !Q.ua) {
          var Y = new UAParser()
          Q.ua = Y.getResult()
          Q.ua.get = function () {
            return Y.getUA()
          }
          Q.ua.set = function (i) {
            Y.setUA(i)
            var e = Y.getResult()
            for (var o in e) {
              Q.ua[o] = e[o]
            }
          }
        }
      })(typeof window === 'object' ? window : this)
    },
  }
  var e = {}
  function __nccwpck_require__(o) {
    var a = e[o]
    if (a !== undefined) {
      return a.exports
    }
    var r = (e[o] = { exports: {} })
    var t = true
    try {
      i[o].call(r.exports, r, r.exports, __nccwpck_require__)
      t = false
    } finally {
      if (t) delete e[o]
    }
    return r.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var o = __nccwpck_require__(226)
  module.exports = o
})()
