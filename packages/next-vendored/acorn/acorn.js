;(() => {
  var e = {
    536: function (e, t) {
      ;(function (e, i) {
        true ? i(t) : 0
      })(this, function (e) {
        'use strict'
        var t = {
          3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
          5: 'class enum extends super const export import',
          6: 'enum',
          strict:
            'implements interface let package private protected public static yield',
          strictBind: 'eval arguments',
        }
        var i =
          'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this'
        var s = {
          5: i,
          '5module': i + ' export import',
          6: i + ' const class extends export import super',
        }
        var r = /^in(stanceof)?$/
        var a =
          'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ'
        var n =
          '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿'
        var o = new RegExp('[' + a + ']')
        var h = new RegExp('[' + a + n + ']')
        a = n = null
        var p = [
          0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4,
          48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35,
          5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2,
          1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55,
          7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53,
          11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7,
          1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27,
          35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2,
          24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
          2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1,
          2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43,
          117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38,
          17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264,
          8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
          31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070,
          4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18,
          689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8,
          8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991,
          84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3,
          7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30,
          2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11,
          6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2,
          0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1,
          2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2,
          3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12,
          221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
        ]
        var c = [
          509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166,
          1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46,
          10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2,
          11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0,
          11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8,
          28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71,
          5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2,
          3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5,
          4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306,
          9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1,
          5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9,
          0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10,
          9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
        ]
        function isInAstralSet(e, t) {
          var i = 65536
          for (var s = 0; s < t.length; s += 2) {
            i += t[s]
            if (i > e) {
              return false
            }
            i += t[s + 1]
            if (i >= e) {
              return true
            }
          }
        }
        function isIdentifierStart(e, t) {
          if (e < 65) {
            return e === 36
          }
          if (e < 91) {
            return true
          }
          if (e < 97) {
            return e === 95
          }
          if (e < 123) {
            return true
          }
          if (e <= 65535) {
            return e >= 170 && o.test(String.fromCharCode(e))
          }
          if (t === false) {
            return false
          }
          return isInAstralSet(e, p)
        }
        function isIdentifierChar(e, t) {
          if (e < 48) {
            return e === 36
          }
          if (e < 58) {
            return true
          }
          if (e < 65) {
            return false
          }
          if (e < 91) {
            return true
          }
          if (e < 97) {
            return e === 95
          }
          if (e < 123) {
            return true
          }
          if (e <= 65535) {
            return e >= 170 && h.test(String.fromCharCode(e))
          }
          if (t === false) {
            return false
          }
          return isInAstralSet(e, p) || isInAstralSet(e, c)
        }
        var l = function TokenType(e, t) {
          if (t === void 0) t = {}
          this.label = e
          this.keyword = t.keyword
          this.beforeExpr = !!t.beforeExpr
          this.startsExpr = !!t.startsExpr
          this.isLoop = !!t.isLoop
          this.isAssign = !!t.isAssign
          this.prefix = !!t.prefix
          this.postfix = !!t.postfix
          this.binop = t.binop || null
          this.updateContext = null
        }
        function binop(e, t) {
          return new l(e, { beforeExpr: true, binop: t })
        }
        var u = { beforeExpr: true },
          f = { startsExpr: true }
        var d = {}
        function kw(e, t) {
          if (t === void 0) t = {}
          t.keyword = e
          return (d[e] = new l(e, t))
        }
        var m = {
          num: new l('num', f),
          regexp: new l('regexp', f),
          string: new l('string', f),
          name: new l('name', f),
          privateId: new l('privateId', f),
          eof: new l('eof'),
          bracketL: new l('[', { beforeExpr: true, startsExpr: true }),
          bracketR: new l(']'),
          braceL: new l('{', { beforeExpr: true, startsExpr: true }),
          braceR: new l('}'),
          parenL: new l('(', { beforeExpr: true, startsExpr: true }),
          parenR: new l(')'),
          comma: new l(',', u),
          semi: new l(';', u),
          colon: new l(':', u),
          dot: new l('.'),
          question: new l('?', u),
          questionDot: new l('?.'),
          arrow: new l('=>', u),
          template: new l('template'),
          invalidTemplate: new l('invalidTemplate'),
          ellipsis: new l('...', u),
          backQuote: new l('`', f),
          dollarBraceL: new l('${', { beforeExpr: true, startsExpr: true }),
          eq: new l('=', { beforeExpr: true, isAssign: true }),
          assign: new l('_=', { beforeExpr: true, isAssign: true }),
          incDec: new l('++/--', {
            prefix: true,
            postfix: true,
            startsExpr: true,
          }),
          prefix: new l('!/~', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true,
          }),
          logicalOR: binop('||', 1),
          logicalAND: binop('&&', 2),
          bitwiseOR: binop('|', 3),
          bitwiseXOR: binop('^', 4),
          bitwiseAND: binop('&', 5),
          equality: binop('==/!=/===/!==', 6),
          relational: binop('</>/<=/>=', 7),
          bitShift: binop('<</>>/>>>', 8),
          plusMin: new l('+/-', {
            beforeExpr: true,
            binop: 9,
            prefix: true,
            startsExpr: true,
          }),
          modulo: binop('%', 10),
          star: binop('*', 10),
          slash: binop('/', 10),
          starstar: new l('**', { beforeExpr: true }),
          coalesce: binop('??', 1),
          _break: kw('break'),
          _case: kw('case', u),
          _catch: kw('catch'),
          _continue: kw('continue'),
          _debugger: kw('debugger'),
          _default: kw('default', u),
          _do: kw('do', { isLoop: true, beforeExpr: true }),
          _else: kw('else', u),
          _finally: kw('finally'),
          _for: kw('for', { isLoop: true }),
          _function: kw('function', f),
          _if: kw('if'),
          _return: kw('return', u),
          _switch: kw('switch'),
          _throw: kw('throw', u),
          _try: kw('try'),
          _var: kw('var'),
          _const: kw('const'),
          _while: kw('while', { isLoop: true }),
          _with: kw('with'),
          _new: kw('new', { beforeExpr: true, startsExpr: true }),
          _this: kw('this', f),
          _super: kw('super', f),
          _class: kw('class', f),
          _extends: kw('extends', u),
          _export: kw('export'),
          _import: kw('import', f),
          _null: kw('null', f),
          _true: kw('true', f),
          _false: kw('false', f),
          _in: kw('in', { beforeExpr: true, binop: 7 }),
          _instanceof: kw('instanceof', { beforeExpr: true, binop: 7 }),
          _typeof: kw('typeof', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true,
          }),
          _void: kw('void', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true,
          }),
          _delete: kw('delete', {
            beforeExpr: true,
            prefix: true,
            startsExpr: true,
          }),
        }
        var g = /\r\n?|\n|\u2028|\u2029/
        var x = new RegExp(g.source, 'g')
        function isNewLine(e) {
          return e === 10 || e === 13 || e === 8232 || e === 8233
        }
        var v = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/
        var y = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g
        var k = Object.prototype
        var b = k.hasOwnProperty
        var w = k.toString
        function has(e, t) {
          return b.call(e, t)
        }
        var _ =
          Array.isArray ||
          function (e) {
            return w.call(e) === '[object Array]'
          }
        function wordsRegexp(e) {
          return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$')
        }
        var S = function Position(e, t) {
          this.line = e
          this.column = t
        }
        S.prototype.offset = function offset(e) {
          return new S(this.line, this.column + e)
        }
        var C = function SourceLocation(e, t, i) {
          this.start = t
          this.end = i
          if (e.sourceFile !== null) {
            this.source = e.sourceFile
          }
        }
        function getLineInfo(e, t) {
          for (var i = 1, s = 0; ; ) {
            x.lastIndex = s
            var r = x.exec(e)
            if (r && r.index < t) {
              ++i
              s = r.index + r[0].length
            } else {
              return new S(i, t - s)
            }
          }
        }
        var E = {
          ecmaVersion: null,
          sourceType: 'script',
          onInsertedSemicolon: null,
          onTrailingComma: null,
          allowReserved: null,
          allowReturnOutsideFunction: false,
          allowImportExportEverywhere: false,
          allowAwaitOutsideFunction: null,
          allowSuperOutsideMethod: null,
          allowHashBang: false,
          locations: false,
          onToken: null,
          onComment: null,
          ranges: false,
          program: null,
          sourceFile: null,
          directSourceFile: null,
          preserveParens: false,
        }
        var I = false
        function getOptions(e) {
          var t = {}
          for (var i in E) {
            t[i] = e && has(e, i) ? e[i] : E[i]
          }
          if (t.ecmaVersion === 'latest') {
            t.ecmaVersion = 1e8
          } else if (t.ecmaVersion == null) {
            if (!I && typeof console === 'object' && console.warn) {
              I = true
              console.warn(
                'Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.'
              )
            }
            t.ecmaVersion = 11
          } else if (t.ecmaVersion >= 2015) {
            t.ecmaVersion -= 2009
          }
          if (t.allowReserved == null) {
            t.allowReserved = t.ecmaVersion < 5
          }
          if (_(t.onToken)) {
            var s = t.onToken
            t.onToken = function (e) {
              return s.push(e)
            }
          }
          if (_(t.onComment)) {
            t.onComment = pushComment(t, t.onComment)
          }
          return t
        }
        function pushComment(e, t) {
          return function (i, s, r, a, n, o) {
            var h = { type: i ? 'Block' : 'Line', value: s, start: r, end: a }
            if (e.locations) {
              h.loc = new C(this, n, o)
            }
            if (e.ranges) {
              h.range = [r, a]
            }
            t.push(h)
          }
        }
        var A = 1,
          P = 2,
          N = 4,
          T = 8,
          V = 16,
          L = 32,
          R = 64,
          D = 128,
          O = 256,
          B = A | P | O
        function functionFlags(e, t) {
          return P | (e ? N : 0) | (t ? T : 0)
        }
        var M = 0,
          F = 1,
          U = 2,
          q = 3,
          H = 4,
          G = 5
        var j = function Parser(e, i, r) {
          this.options = e = getOptions(e)
          this.sourceFile = e.sourceFile
          this.keywords = wordsRegexp(
            s[
              e.ecmaVersion >= 6 ? 6 : e.sourceType === 'module' ? '5module' : 5
            ]
          )
          var a = ''
          if (e.allowReserved !== true) {
            a = t[e.ecmaVersion >= 6 ? 6 : e.ecmaVersion === 5 ? 5 : 3]
            if (e.sourceType === 'module') {
              a += ' await'
            }
          }
          this.reservedWords = wordsRegexp(a)
          var n = (a ? a + ' ' : '') + t.strict
          this.reservedWordsStrict = wordsRegexp(n)
          this.reservedWordsStrictBind = wordsRegexp(n + ' ' + t.strictBind)
          this.input = String(i)
          this.containsEsc = false
          if (r) {
            this.pos = r
            this.lineStart = this.input.lastIndexOf('\n', r - 1) + 1
            this.curLine = this.input.slice(0, this.lineStart).split(g).length
          } else {
            this.pos = this.lineStart = 0
            this.curLine = 1
          }
          this.type = m.eof
          this.value = null
          this.start = this.end = this.pos
          this.startLoc = this.endLoc = this.curPosition()
          this.lastTokEndLoc = this.lastTokStartLoc = null
          this.lastTokStart = this.lastTokEnd = this.pos
          this.context = this.initialContext()
          this.exprAllowed = true
          this.inModule = e.sourceType === 'module'
          this.strict = this.inModule || this.strictDirective(this.pos)
          this.potentialArrowAt = -1
          this.potentialArrowInForAwait = false
          this.yieldPos = this.awaitPos = this.awaitIdentPos = 0
          this.labels = []
          this.undefinedExports = Object.create(null)
          if (
            this.pos === 0 &&
            e.allowHashBang &&
            this.input.slice(0, 2) === '#!'
          ) {
            this.skipLineComment(2)
          }
          this.scopeStack = []
          this.enterScope(A)
          this.regexpState = null
          this.privateNameStack = []
        }
        var z = {
          inFunction: { configurable: true },
          inGenerator: { configurable: true },
          inAsync: { configurable: true },
          canAwait: { configurable: true },
          allowSuper: { configurable: true },
          allowDirectSuper: { configurable: true },
          treatFunctionsAsVar: { configurable: true },
          allowNewDotTarget: { configurable: true },
          inClassStaticBlock: { configurable: true },
        }
        j.prototype.parse = function parse() {
          var e = this.options.program || this.startNode()
          this.nextToken()
          return this.parseTopLevel(e)
        }
        z.inFunction.get = function () {
          return (this.currentVarScope().flags & P) > 0
        }
        z.inGenerator.get = function () {
          return (
            (this.currentVarScope().flags & T) > 0 &&
            !this.currentVarScope().inClassFieldInit
          )
        }
        z.inAsync.get = function () {
          return (
            (this.currentVarScope().flags & N) > 0 &&
            !this.currentVarScope().inClassFieldInit
          )
        }
        z.canAwait.get = function () {
          for (var e = this.scopeStack.length - 1; e >= 0; e--) {
            var t = this.scopeStack[e]
            if (t.inClassFieldInit || t.flags & O) {
              return false
            }
            if (t.flags & P) {
              return (t.flags & N) > 0
            }
          }
          return (
            (this.inModule && this.options.ecmaVersion >= 13) ||
            this.options.allowAwaitOutsideFunction
          )
        }
        z.allowSuper.get = function () {
          var e = this.currentThisScope()
          var t = e.flags
          var i = e.inClassFieldInit
          return (t & R) > 0 || i || this.options.allowSuperOutsideMethod
        }
        z.allowDirectSuper.get = function () {
          return (this.currentThisScope().flags & D) > 0
        }
        z.treatFunctionsAsVar.get = function () {
          return this.treatFunctionsAsVarInScope(this.currentScope())
        }
        z.allowNewDotTarget.get = function () {
          var e = this.currentThisScope()
          var t = e.flags
          var i = e.inClassFieldInit
          return (t & (P | O)) > 0 || i
        }
        z.inClassStaticBlock.get = function () {
          return (this.currentVarScope().flags & O) > 0
        }
        j.extend = function extend() {
          var e = [],
            t = arguments.length
          while (t--) e[t] = arguments[t]
          var i = this
          for (var s = 0; s < e.length; s++) {
            i = e[s](i)
          }
          return i
        }
        j.parse = function parse(e, t) {
          return new this(t, e).parse()
        }
        j.parseExpressionAt = function parseExpressionAt(e, t, i) {
          var s = new this(i, e, t)
          s.nextToken()
          return s.parseExpression()
        }
        j.tokenizer = function tokenizer(e, t) {
          return new this(t, e)
        }
        Object.defineProperties(j.prototype, z)
        var W = j.prototype
        var Q = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/
        W.strictDirective = function (e) {
          for (;;) {
            y.lastIndex = e
            e += y.exec(this.input)[0].length
            var t = Q.exec(this.input.slice(e))
            if (!t) {
              return false
            }
            if ((t[1] || t[2]) === 'use strict') {
              y.lastIndex = e + t[0].length
              var i = y.exec(this.input),
                s = i.index + i[0].length
              var r = this.input.charAt(s)
              return (
                r === ';' ||
                r === '}' ||
                (g.test(i[0]) &&
                  !(
                    /[(`.[+\-/*%<>=,?^&]/.test(r) ||
                    (r === '!' && this.input.charAt(s + 1) === '=')
                  ))
              )
            }
            e += t[0].length
            y.lastIndex = e
            e += y.exec(this.input)[0].length
            if (this.input[e] === ';') {
              e++
            }
          }
        }
        W.eat = function (e) {
          if (this.type === e) {
            this.next()
            return true
          } else {
            return false
          }
        }
        W.isContextual = function (e) {
          return this.type === m.name && this.value === e && !this.containsEsc
        }
        W.eatContextual = function (e) {
          if (!this.isContextual(e)) {
            return false
          }
          this.next()
          return true
        }
        W.expectContextual = function (e) {
          if (!this.eatContextual(e)) {
            this.unexpected()
          }
        }
        W.canInsertSemicolon = function () {
          return (
            this.type === m.eof ||
            this.type === m.braceR ||
            g.test(this.input.slice(this.lastTokEnd, this.start))
          )
        }
        W.insertSemicolon = function () {
          if (this.canInsertSemicolon()) {
            if (this.options.onInsertedSemicolon) {
              this.options.onInsertedSemicolon(
                this.lastTokEnd,
                this.lastTokEndLoc
              )
            }
            return true
          }
        }
        W.semicolon = function () {
          if (!this.eat(m.semi) && !this.insertSemicolon()) {
            this.unexpected()
          }
        }
        W.afterTrailingComma = function (e, t) {
          if (this.type === e) {
            if (this.options.onTrailingComma) {
              this.options.onTrailingComma(
                this.lastTokStart,
                this.lastTokStartLoc
              )
            }
            if (!t) {
              this.next()
            }
            return true
          }
        }
        W.expect = function (e) {
          this.eat(e) || this.unexpected()
        }
        W.unexpected = function (e) {
          this.raise(e != null ? e : this.start, 'Unexpected token')
        }
        function DestructuringErrors() {
          this.shorthandAssign =
            this.trailingComma =
            this.parenthesizedAssign =
            this.parenthesizedBind =
            this.doubleProto =
              -1
        }
        W.checkPatternErrors = function (e, t) {
          if (!e) {
            return
          }
          if (e.trailingComma > -1) {
            this.raiseRecoverable(
              e.trailingComma,
              'Comma is not permitted after the rest element'
            )
          }
          var i = t ? e.parenthesizedAssign : e.parenthesizedBind
          if (i > -1) {
            this.raiseRecoverable(i, 'Parenthesized pattern')
          }
        }
        W.checkExpressionErrors = function (e, t) {
          if (!e) {
            return false
          }
          var i = e.shorthandAssign
          var s = e.doubleProto
          if (!t) {
            return i >= 0 || s >= 0
          }
          if (i >= 0) {
            this.raise(
              i,
              'Shorthand property assignments are valid only in destructuring patterns'
            )
          }
          if (s >= 0) {
            this.raiseRecoverable(s, 'Redefinition of __proto__ property')
          }
        }
        W.checkYieldAwaitInDefaultParams = function () {
          if (
            this.yieldPos &&
            (!this.awaitPos || this.yieldPos < this.awaitPos)
          ) {
            this.raise(
              this.yieldPos,
              'Yield expression cannot be a default value'
            )
          }
          if (this.awaitPos) {
            this.raise(
              this.awaitPos,
              'Await expression cannot be a default value'
            )
          }
        }
        W.isSimpleAssignTarget = function (e) {
          if (e.type === 'ParenthesizedExpression') {
            return this.isSimpleAssignTarget(e.expression)
          }
          return e.type === 'Identifier' || e.type === 'MemberExpression'
        }
        var K = j.prototype
        K.parseTopLevel = function (e) {
          var t = Object.create(null)
          if (!e.body) {
            e.body = []
          }
          while (this.type !== m.eof) {
            var i = this.parseStatement(null, true, t)
            e.body.push(i)
          }
          if (this.inModule) {
            for (
              var s = 0, r = Object.keys(this.undefinedExports);
              s < r.length;
              s += 1
            ) {
              var a = r[s]
              this.raiseRecoverable(
                this.undefinedExports[a].start,
                "Export '" + a + "' is not defined"
              )
            }
          }
          this.adaptDirectivePrologue(e.body)
          this.next()
          e.sourceType = this.options.sourceType
          return this.finishNode(e, 'Program')
        }
        var Y = { kind: 'loop' },
          X = { kind: 'switch' }
        K.isLet = function (e) {
          if (this.options.ecmaVersion < 6 || !this.isContextual('let')) {
            return false
          }
          y.lastIndex = this.pos
          var t = y.exec(this.input)
          var i = this.pos + t[0].length,
            s = this.input.charCodeAt(i)
          if (s === 91 || s === 92 || (s > 55295 && s < 56320)) {
            return true
          }
          if (e) {
            return false
          }
          if (s === 123) {
            return true
          }
          if (isIdentifierStart(s, true)) {
            var a = i + 1
            while (isIdentifierChar((s = this.input.charCodeAt(a)), true)) {
              ++a
            }
            if (s === 92 || (s > 55295 && s < 56320)) {
              return true
            }
            var n = this.input.slice(i, a)
            if (!r.test(n)) {
              return true
            }
          }
          return false
        }
        K.isAsyncFunction = function () {
          if (this.options.ecmaVersion < 8 || !this.isContextual('async')) {
            return false
          }
          y.lastIndex = this.pos
          var e = y.exec(this.input)
          var t = this.pos + e[0].length,
            i
          return (
            !g.test(this.input.slice(this.pos, t)) &&
            this.input.slice(t, t + 8) === 'function' &&
            (t + 8 === this.input.length ||
              !(
                isIdentifierChar((i = this.input.charCodeAt(t + 8))) ||
                (i > 55295 && i < 56320)
              ))
          )
        }
        K.parseStatement = function (e, t, i) {
          var s = this.type,
            r = this.startNode(),
            a
          if (this.isLet(e)) {
            s = m._var
            a = 'let'
          }
          switch (s) {
            case m._break:
            case m._continue:
              return this.parseBreakContinueStatement(r, s.keyword)
            case m._debugger:
              return this.parseDebuggerStatement(r)
            case m._do:
              return this.parseDoStatement(r)
            case m._for:
              return this.parseForStatement(r)
            case m._function:
              if (
                e &&
                (this.strict || (e !== 'if' && e !== 'label')) &&
                this.options.ecmaVersion >= 6
              ) {
                this.unexpected()
              }
              return this.parseFunctionStatement(r, false, !e)
            case m._class:
              if (e) {
                this.unexpected()
              }
              return this.parseClass(r, true)
            case m._if:
              return this.parseIfStatement(r)
            case m._return:
              return this.parseReturnStatement(r)
            case m._switch:
              return this.parseSwitchStatement(r)
            case m._throw:
              return this.parseThrowStatement(r)
            case m._try:
              return this.parseTryStatement(r)
            case m._const:
            case m._var:
              a = a || this.value
              if (e && a !== 'var') {
                this.unexpected()
              }
              return this.parseVarStatement(r, a)
            case m._while:
              return this.parseWhileStatement(r)
            case m._with:
              return this.parseWithStatement(r)
            case m.braceL:
              return this.parseBlock(true, r)
            case m.semi:
              return this.parseEmptyStatement(r)
            case m._export:
            case m._import:
              if (this.options.ecmaVersion > 10 && s === m._import) {
                y.lastIndex = this.pos
                var n = y.exec(this.input)
                var o = this.pos + n[0].length,
                  h = this.input.charCodeAt(o)
                if (h === 40 || h === 46) {
                  return this.parseExpressionStatement(
                    r,
                    this.parseExpression()
                  )
                }
              }
              if (!this.options.allowImportExportEverywhere) {
                if (!t) {
                  this.raise(
                    this.start,
                    "'import' and 'export' may only appear at the top level"
                  )
                }
                if (!this.inModule) {
                  this.raise(
                    this.start,
                    "'import' and 'export' may appear only with 'sourceType: module'"
                  )
                }
              }
              return s === m._import
                ? this.parseImport(r)
                : this.parseExport(r, i)
            default:
              if (this.isAsyncFunction()) {
                if (e) {
                  this.unexpected()
                }
                this.next()
                return this.parseFunctionStatement(r, true, !e)
              }
              var p = this.value,
                c = this.parseExpression()
              if (
                s === m.name &&
                c.type === 'Identifier' &&
                this.eat(m.colon)
              ) {
                return this.parseLabeledStatement(r, p, c, e)
              } else {
                return this.parseExpressionStatement(r, c)
              }
          }
        }
        K.parseBreakContinueStatement = function (e, t) {
          var i = t === 'break'
          this.next()
          if (this.eat(m.semi) || this.insertSemicolon()) {
            e.label = null
          } else if (this.type !== m.name) {
            this.unexpected()
          } else {
            e.label = this.parseIdent()
            this.semicolon()
          }
          var s = 0
          for (; s < this.labels.length; ++s) {
            var r = this.labels[s]
            if (e.label == null || r.name === e.label.name) {
              if (r.kind != null && (i || r.kind === 'loop')) {
                break
              }
              if (e.label && i) {
                break
              }
            }
          }
          if (s === this.labels.length) {
            this.raise(e.start, 'Unsyntactic ' + t)
          }
          return this.finishNode(e, i ? 'BreakStatement' : 'ContinueStatement')
        }
        K.parseDebuggerStatement = function (e) {
          this.next()
          this.semicolon()
          return this.finishNode(e, 'DebuggerStatement')
        }
        K.parseDoStatement = function (e) {
          this.next()
          this.labels.push(Y)
          e.body = this.parseStatement('do')
          this.labels.pop()
          this.expect(m._while)
          e.test = this.parseParenExpression()
          if (this.options.ecmaVersion >= 6) {
            this.eat(m.semi)
          } else {
            this.semicolon()
          }
          return this.finishNode(e, 'DoWhileStatement')
        }
        K.parseForStatement = function (e) {
          this.next()
          var t =
            this.options.ecmaVersion >= 9 &&
            this.canAwait &&
            this.eatContextual('await')
              ? this.lastTokStart
              : -1
          this.labels.push(Y)
          this.enterScope(0)
          this.expect(m.parenL)
          if (this.type === m.semi) {
            if (t > -1) {
              this.unexpected(t)
            }
            return this.parseFor(e, null)
          }
          var i = this.isLet()
          if (this.type === m._var || this.type === m._const || i) {
            var s = this.startNode(),
              r = i ? 'let' : this.value
            this.next()
            this.parseVar(s, true, r)
            this.finishNode(s, 'VariableDeclaration')
            if (
              (this.type === m._in ||
                (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
              s.declarations.length === 1
            ) {
              if (this.options.ecmaVersion >= 9) {
                if (this.type === m._in) {
                  if (t > -1) {
                    this.unexpected(t)
                  }
                } else {
                  e.await = t > -1
                }
              }
              return this.parseForIn(e, s)
            }
            if (t > -1) {
              this.unexpected(t)
            }
            return this.parseFor(e, s)
          }
          var a = this.isContextual('let'),
            n = false
          var o = new DestructuringErrors()
          var h = this.parseExpression(t > -1 ? 'await' : true, o)
          if (
            this.type === m._in ||
            (n = this.options.ecmaVersion >= 6 && this.isContextual('of'))
          ) {
            if (this.options.ecmaVersion >= 9) {
              if (this.type === m._in) {
                if (t > -1) {
                  this.unexpected(t)
                }
              } else {
                e.await = t > -1
              }
            }
            if (a && n) {
              this.raise(
                h.start,
                "The left-hand side of a for-of loop may not start with 'let'."
              )
            }
            this.toAssignable(h, false, o)
            this.checkLValPattern(h)
            return this.parseForIn(e, h)
          } else {
            this.checkExpressionErrors(o, true)
          }
          if (t > -1) {
            this.unexpected(t)
          }
          return this.parseFor(e, h)
        }
        K.parseFunctionStatement = function (e, t, i) {
          this.next()
          return this.parseFunction(e, Z | (i ? 0 : J), false, t)
        }
        K.parseIfStatement = function (e) {
          this.next()
          e.test = this.parseParenExpression()
          e.consequent = this.parseStatement('if')
          e.alternate = this.eat(m._else) ? this.parseStatement('if') : null
          return this.finishNode(e, 'IfStatement')
        }
        K.parseReturnStatement = function (e) {
          if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
            this.raise(this.start, "'return' outside of function")
          }
          this.next()
          if (this.eat(m.semi) || this.insertSemicolon()) {
            e.argument = null
          } else {
            e.argument = this.parseExpression()
            this.semicolon()
          }
          return this.finishNode(e, 'ReturnStatement')
        }
        K.parseSwitchStatement = function (e) {
          this.next()
          e.discriminant = this.parseParenExpression()
          e.cases = []
          this.expect(m.braceL)
          this.labels.push(X)
          this.enterScope(0)
          var t
          for (var i = false; this.type !== m.braceR; ) {
            if (this.type === m._case || this.type === m._default) {
              var s = this.type === m._case
              if (t) {
                this.finishNode(t, 'SwitchCase')
              }
              e.cases.push((t = this.startNode()))
              t.consequent = []
              this.next()
              if (s) {
                t.test = this.parseExpression()
              } else {
                if (i) {
                  this.raiseRecoverable(
                    this.lastTokStart,
                    'Multiple default clauses'
                  )
                }
                i = true
                t.test = null
              }
              this.expect(m.colon)
            } else {
              if (!t) {
                this.unexpected()
              }
              t.consequent.push(this.parseStatement(null))
            }
          }
          this.exitScope()
          if (t) {
            this.finishNode(t, 'SwitchCase')
          }
          this.next()
          this.labels.pop()
          return this.finishNode(e, 'SwitchStatement')
        }
        K.parseThrowStatement = function (e) {
          this.next()
          if (g.test(this.input.slice(this.lastTokEnd, this.start))) {
            this.raise(this.lastTokEnd, 'Illegal newline after throw')
          }
          e.argument = this.parseExpression()
          this.semicolon()
          return this.finishNode(e, 'ThrowStatement')
        }
        var $ = []
        K.parseTryStatement = function (e) {
          this.next()
          e.block = this.parseBlock()
          e.handler = null
          if (this.type === m._catch) {
            var t = this.startNode()
            this.next()
            if (this.eat(m.parenL)) {
              t.param = this.parseBindingAtom()
              var i = t.param.type === 'Identifier'
              this.enterScope(i ? L : 0)
              this.checkLValPattern(t.param, i ? H : U)
              this.expect(m.parenR)
            } else {
              if (this.options.ecmaVersion < 10) {
                this.unexpected()
              }
              t.param = null
              this.enterScope(0)
            }
            t.body = this.parseBlock(false)
            this.exitScope()
            e.handler = this.finishNode(t, 'CatchClause')
          }
          e.finalizer = this.eat(m._finally) ? this.parseBlock() : null
          if (!e.handler && !e.finalizer) {
            this.raise(e.start, 'Missing catch or finally clause')
          }
          return this.finishNode(e, 'TryStatement')
        }
        K.parseVarStatement = function (e, t) {
          this.next()
          this.parseVar(e, false, t)
          this.semicolon()
          return this.finishNode(e, 'VariableDeclaration')
        }
        K.parseWhileStatement = function (e) {
          this.next()
          e.test = this.parseParenExpression()
          this.labels.push(Y)
          e.body = this.parseStatement('while')
          this.labels.pop()
          return this.finishNode(e, 'WhileStatement')
        }
        K.parseWithStatement = function (e) {
          if (this.strict) {
            this.raise(this.start, "'with' in strict mode")
          }
          this.next()
          e.object = this.parseParenExpression()
          e.body = this.parseStatement('with')
          return this.finishNode(e, 'WithStatement')
        }
        K.parseEmptyStatement = function (e) {
          this.next()
          return this.finishNode(e, 'EmptyStatement')
        }
        K.parseLabeledStatement = function (e, t, i, s) {
          for (var r = 0, a = this.labels; r < a.length; r += 1) {
            var n = a[r]
            if (n.name === t) {
              this.raise(i.start, "Label '" + t + "' is already declared")
            }
          }
          var o = this.type.isLoop
            ? 'loop'
            : this.type === m._switch
            ? 'switch'
            : null
          for (var h = this.labels.length - 1; h >= 0; h--) {
            var p = this.labels[h]
            if (p.statementStart === e.start) {
              p.statementStart = this.start
              p.kind = o
            } else {
              break
            }
          }
          this.labels.push({ name: t, kind: o, statementStart: this.start })
          e.body = this.parseStatement(
            s ? (s.indexOf('label') === -1 ? s + 'label' : s) : 'label'
          )
          this.labels.pop()
          e.label = i
          return this.finishNode(e, 'LabeledStatement')
        }
        K.parseExpressionStatement = function (e, t) {
          e.expression = t
          this.semicolon()
          return this.finishNode(e, 'ExpressionStatement')
        }
        K.parseBlock = function (e, t, i) {
          if (e === void 0) e = true
          if (t === void 0) t = this.startNode()
          t.body = []
          this.expect(m.braceL)
          if (e) {
            this.enterScope(0)
          }
          while (this.type !== m.braceR) {
            var s = this.parseStatement(null)
            t.body.push(s)
          }
          if (i) {
            this.strict = false
          }
          this.next()
          if (e) {
            this.exitScope()
          }
          return this.finishNode(t, 'BlockStatement')
        }
        K.parseFor = function (e, t) {
          e.init = t
          this.expect(m.semi)
          e.test = this.type === m.semi ? null : this.parseExpression()
          this.expect(m.semi)
          e.update = this.type === m.parenR ? null : this.parseExpression()
          this.expect(m.parenR)
          e.body = this.parseStatement('for')
          this.exitScope()
          this.labels.pop()
          return this.finishNode(e, 'ForStatement')
        }
        K.parseForIn = function (e, t) {
          var i = this.type === m._in
          this.next()
          if (
            t.type === 'VariableDeclaration' &&
            t.declarations[0].init != null &&
            (!i ||
              this.options.ecmaVersion < 8 ||
              this.strict ||
              t.kind !== 'var' ||
              t.declarations[0].id.type !== 'Identifier')
          ) {
            this.raise(
              t.start,
              (i ? 'for-in' : 'for-of') +
                ' loop variable declaration may not have an initializer'
            )
          }
          e.left = t
          e.right = i ? this.parseExpression() : this.parseMaybeAssign()
          this.expect(m.parenR)
          e.body = this.parseStatement('for')
          this.exitScope()
          this.labels.pop()
          return this.finishNode(e, i ? 'ForInStatement' : 'ForOfStatement')
        }
        K.parseVar = function (e, t, i) {
          e.declarations = []
          e.kind = i
          for (;;) {
            var s = this.startNode()
            this.parseVarId(s, i)
            if (this.eat(m.eq)) {
              s.init = this.parseMaybeAssign(t)
            } else if (
              i === 'const' &&
              !(
                this.type === m._in ||
                (this.options.ecmaVersion >= 6 && this.isContextual('of'))
              )
            ) {
              this.unexpected()
            } else if (
              s.id.type !== 'Identifier' &&
              !(t && (this.type === m._in || this.isContextual('of')))
            ) {
              this.raise(
                this.lastTokEnd,
                'Complex binding patterns require an initialization value'
              )
            } else {
              s.init = null
            }
            e.declarations.push(this.finishNode(s, 'VariableDeclarator'))
            if (!this.eat(m.comma)) {
              break
            }
          }
          return e
        }
        K.parseVarId = function (e, t) {
          e.id = this.parseBindingAtom()
          this.checkLValPattern(e.id, t === 'var' ? F : U, false)
        }
        var Z = 1,
          J = 2,
          ee = 4
        K.parseFunction = function (e, t, i, s, r) {
          this.initFunction(e)
          if (
            this.options.ecmaVersion >= 9 ||
            (this.options.ecmaVersion >= 6 && !s)
          ) {
            if (this.type === m.star && t & J) {
              this.unexpected()
            }
            e.generator = this.eat(m.star)
          }
          if (this.options.ecmaVersion >= 8) {
            e.async = !!s
          }
          if (t & Z) {
            e.id = t & ee && this.type !== m.name ? null : this.parseIdent()
            if (e.id && !(t & J)) {
              this.checkLValSimple(
                e.id,
                this.strict || e.generator || e.async
                  ? this.treatFunctionsAsVar
                    ? F
                    : U
                  : q
              )
            }
          }
          var a = this.yieldPos,
            n = this.awaitPos,
            o = this.awaitIdentPos
          this.yieldPos = 0
          this.awaitPos = 0
          this.awaitIdentPos = 0
          this.enterScope(functionFlags(e.async, e.generator))
          if (!(t & Z)) {
            e.id = this.type === m.name ? this.parseIdent() : null
          }
          this.parseFunctionParams(e)
          this.parseFunctionBody(e, i, false, r)
          this.yieldPos = a
          this.awaitPos = n
          this.awaitIdentPos = o
          return this.finishNode(
            e,
            t & Z ? 'FunctionDeclaration' : 'FunctionExpression'
          )
        }
        K.parseFunctionParams = function (e) {
          this.expect(m.parenL)
          e.params = this.parseBindingList(
            m.parenR,
            false,
            this.options.ecmaVersion >= 8
          )
          this.checkYieldAwaitInDefaultParams()
        }
        K.parseClass = function (e, t) {
          this.next()
          var i = this.strict
          this.strict = true
          this.parseClassId(e, t)
          this.parseClassSuper(e)
          var s = this.enterClassBody()
          var r = this.startNode()
          var a = false
          r.body = []
          this.expect(m.braceL)
          while (this.type !== m.braceR) {
            var n = this.parseClassElement(e.superClass !== null)
            if (n) {
              r.body.push(n)
              if (n.type === 'MethodDefinition' && n.kind === 'constructor') {
                if (a) {
                  this.raise(n.start, 'Duplicate constructor in the same class')
                }
                a = true
              } else if (
                n.key &&
                n.key.type === 'PrivateIdentifier' &&
                isPrivateNameConflicted(s, n)
              ) {
                this.raiseRecoverable(
                  n.key.start,
                  "Identifier '#" + n.key.name + "' has already been declared"
                )
              }
            }
          }
          this.strict = i
          this.next()
          e.body = this.finishNode(r, 'ClassBody')
          this.exitClassBody()
          return this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
        }
        K.parseClassElement = function (e) {
          if (this.eat(m.semi)) {
            return null
          }
          var t = this.options.ecmaVersion
          var i = this.startNode()
          var s = ''
          var r = false
          var a = false
          var n = 'method'
          var o = false
          if (this.eatContextual('static')) {
            if (t >= 13 && this.eat(m.braceL)) {
              this.parseClassStaticBlock(i)
              return i
            }
            if (this.isClassElementNameStart() || this.type === m.star) {
              o = true
            } else {
              s = 'static'
            }
          }
          i.static = o
          if (!s && t >= 8 && this.eatContextual('async')) {
            if (
              (this.isClassElementNameStart() || this.type === m.star) &&
              !this.canInsertSemicolon()
            ) {
              a = true
            } else {
              s = 'async'
            }
          }
          if (!s && (t >= 9 || !a) && this.eat(m.star)) {
            r = true
          }
          if (!s && !a && !r) {
            var h = this.value
            if (this.eatContextual('get') || this.eatContextual('set')) {
              if (this.isClassElementNameStart()) {
                n = h
              } else {
                s = h
              }
            }
          }
          if (s) {
            i.computed = false
            i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc)
            i.key.name = s
            this.finishNode(i.key, 'Identifier')
          } else {
            this.parseClassElementName(i)
          }
          if (t < 13 || this.type === m.parenL || n !== 'method' || r || a) {
            var p = !i.static && checkKeyName(i, 'constructor')
            var c = p && e
            if (p && n !== 'method') {
              this.raise(i.key.start, "Constructor can't have get/set modifier")
            }
            i.kind = p ? 'constructor' : n
            this.parseClassMethod(i, r, a, c)
          } else {
            this.parseClassField(i)
          }
          return i
        }
        K.isClassElementNameStart = function () {
          return (
            this.type === m.name ||
            this.type === m.privateId ||
            this.type === m.num ||
            this.type === m.string ||
            this.type === m.bracketL ||
            this.type.keyword
          )
        }
        K.parseClassElementName = function (e) {
          if (this.type === m.privateId) {
            if (this.value === 'constructor') {
              this.raise(
                this.start,
                "Classes can't have an element named '#constructor'"
              )
            }
            e.computed = false
            e.key = this.parsePrivateIdent()
          } else {
            this.parsePropertyName(e)
          }
        }
        K.parseClassMethod = function (e, t, i, s) {
          var r = e.key
          if (e.kind === 'constructor') {
            if (t) {
              this.raise(r.start, "Constructor can't be a generator")
            }
            if (i) {
              this.raise(r.start, "Constructor can't be an async method")
            }
          } else if (e.static && checkKeyName(e, 'prototype')) {
            this.raise(
              r.start,
              'Classes may not have a static property named prototype'
            )
          }
          var a = (e.value = this.parseMethod(t, i, s))
          if (e.kind === 'get' && a.params.length !== 0) {
            this.raiseRecoverable(a.start, 'getter should have no params')
          }
          if (e.kind === 'set' && a.params.length !== 1) {
            this.raiseRecoverable(
              a.start,
              'setter should have exactly one param'
            )
          }
          if (e.kind === 'set' && a.params[0].type === 'RestElement') {
            this.raiseRecoverable(
              a.params[0].start,
              'Setter cannot use rest params'
            )
          }
          return this.finishNode(e, 'MethodDefinition')
        }
        K.parseClassField = function (e) {
          if (checkKeyName(e, 'constructor')) {
            this.raise(
              e.key.start,
              "Classes can't have a field named 'constructor'"
            )
          } else if (e.static && checkKeyName(e, 'prototype')) {
            this.raise(
              e.key.start,
              "Classes can't have a static field named 'prototype'"
            )
          }
          if (this.eat(m.eq)) {
            var t = this.currentThisScope()
            var i = t.inClassFieldInit
            t.inClassFieldInit = true
            e.value = this.parseMaybeAssign()
            t.inClassFieldInit = i
          } else {
            e.value = null
          }
          this.semicolon()
          return this.finishNode(e, 'PropertyDefinition')
        }
        K.parseClassStaticBlock = function (e) {
          e.body = []
          var t = this.labels
          this.labels = []
          this.enterScope(O | R)
          while (this.type !== m.braceR) {
            var i = this.parseStatement(null)
            e.body.push(i)
          }
          this.next()
          this.exitScope()
          this.labels = t
          return this.finishNode(e, 'StaticBlock')
        }
        K.parseClassId = function (e, t) {
          if (this.type === m.name) {
            e.id = this.parseIdent()
            if (t) {
              this.checkLValSimple(e.id, U, false)
            }
          } else {
            if (t === true) {
              this.unexpected()
            }
            e.id = null
          }
        }
        K.parseClassSuper = function (e) {
          e.superClass = this.eat(m._extends)
            ? this.parseExprSubscripts(false)
            : null
        }
        K.enterClassBody = function () {
          var e = { declared: Object.create(null), used: [] }
          this.privateNameStack.push(e)
          return e.declared
        }
        K.exitClassBody = function () {
          var e = this.privateNameStack.pop()
          var t = e.declared
          var i = e.used
          var s = this.privateNameStack.length
          var r = s === 0 ? null : this.privateNameStack[s - 1]
          for (var a = 0; a < i.length; ++a) {
            var n = i[a]
            if (!has(t, n.name)) {
              if (r) {
                r.used.push(n)
              } else {
                this.raiseRecoverable(
                  n.start,
                  "Private field '#" +
                    n.name +
                    "' must be declared in an enclosing class"
                )
              }
            }
          }
        }
        function isPrivateNameConflicted(e, t) {
          var i = t.key.name
          var s = e[i]
          var r = 'true'
          if (
            t.type === 'MethodDefinition' &&
            (t.kind === 'get' || t.kind === 'set')
          ) {
            r = (t.static ? 's' : 'i') + t.kind
          }
          if (
            (s === 'iget' && r === 'iset') ||
            (s === 'iset' && r === 'iget') ||
            (s === 'sget' && r === 'sset') ||
            (s === 'sset' && r === 'sget')
          ) {
            e[i] = 'true'
            return false
          } else if (!s) {
            e[i] = r
            return false
          } else {
            return true
          }
        }
        function checkKeyName(e, t) {
          var i = e.computed
          var s = e.key
          return (
            !i &&
            ((s.type === 'Identifier' && s.name === t) ||
              (s.type === 'Literal' && s.value === t))
          )
        }
        K.parseExport = function (e, t) {
          this.next()
          if (this.eat(m.star)) {
            if (this.options.ecmaVersion >= 11) {
              if (this.eatContextual('as')) {
                e.exported = this.parseIdent(true)
                this.checkExport(t, e.exported.name, this.lastTokStart)
              } else {
                e.exported = null
              }
            }
            this.expectContextual('from')
            if (this.type !== m.string) {
              this.unexpected()
            }
            e.source = this.parseExprAtom()
            this.semicolon()
            return this.finishNode(e, 'ExportAllDeclaration')
          }
          if (this.eat(m._default)) {
            this.checkExport(t, 'default', this.lastTokStart)
            var i
            if (this.type === m._function || (i = this.isAsyncFunction())) {
              var s = this.startNode()
              this.next()
              if (i) {
                this.next()
              }
              e.declaration = this.parseFunction(s, Z | ee, false, i)
            } else if (this.type === m._class) {
              var r = this.startNode()
              e.declaration = this.parseClass(r, 'nullableID')
            } else {
              e.declaration = this.parseMaybeAssign()
              this.semicolon()
            }
            return this.finishNode(e, 'ExportDefaultDeclaration')
          }
          if (this.shouldParseExportStatement()) {
            e.declaration = this.parseStatement(null)
            if (e.declaration.type === 'VariableDeclaration') {
              this.checkVariableExport(t, e.declaration.declarations)
            } else {
              this.checkExport(t, e.declaration.id.name, e.declaration.id.start)
            }
            e.specifiers = []
            e.source = null
          } else {
            e.declaration = null
            e.specifiers = this.parseExportSpecifiers(t)
            if (this.eatContextual('from')) {
              if (this.type !== m.string) {
                this.unexpected()
              }
              e.source = this.parseExprAtom()
            } else {
              for (var a = 0, n = e.specifiers; a < n.length; a += 1) {
                var o = n[a]
                this.checkUnreserved(o.local)
                this.checkLocalExport(o.local)
              }
              e.source = null
            }
            this.semicolon()
          }
          return this.finishNode(e, 'ExportNamedDeclaration')
        }
        K.checkExport = function (e, t, i) {
          if (!e) {
            return
          }
          if (has(e, t)) {
            this.raiseRecoverable(i, "Duplicate export '" + t + "'")
          }
          e[t] = true
        }
        K.checkPatternExport = function (e, t) {
          var i = t.type
          if (i === 'Identifier') {
            this.checkExport(e, t.name, t.start)
          } else if (i === 'ObjectPattern') {
            for (var s = 0, r = t.properties; s < r.length; s += 1) {
              var a = r[s]
              this.checkPatternExport(e, a)
            }
          } else if (i === 'ArrayPattern') {
            for (var n = 0, o = t.elements; n < o.length; n += 1) {
              var h = o[n]
              if (h) {
                this.checkPatternExport(e, h)
              }
            }
          } else if (i === 'Property') {
            this.checkPatternExport(e, t.value)
          } else if (i === 'AssignmentPattern') {
            this.checkPatternExport(e, t.left)
          } else if (i === 'RestElement') {
            this.checkPatternExport(e, t.argument)
          } else if (i === 'ParenthesizedExpression') {
            this.checkPatternExport(e, t.expression)
          }
        }
        K.checkVariableExport = function (e, t) {
          if (!e) {
            return
          }
          for (var i = 0, s = t; i < s.length; i += 1) {
            var r = s[i]
            this.checkPatternExport(e, r.id)
          }
        }
        K.shouldParseExportStatement = function () {
          return (
            this.type.keyword === 'var' ||
            this.type.keyword === 'const' ||
            this.type.keyword === 'class' ||
            this.type.keyword === 'function' ||
            this.isLet() ||
            this.isAsyncFunction()
          )
        }
        K.parseExportSpecifiers = function (e) {
          var t = [],
            i = true
          this.expect(m.braceL)
          while (!this.eat(m.braceR)) {
            if (!i) {
              this.expect(m.comma)
              if (this.afterTrailingComma(m.braceR)) {
                break
              }
            } else {
              i = false
            }
            var s = this.startNode()
            s.local = this.parseIdent(true)
            s.exported = this.eatContextual('as')
              ? this.parseIdent(true)
              : s.local
            this.checkExport(e, s.exported.name, s.exported.start)
            t.push(this.finishNode(s, 'ExportSpecifier'))
          }
          return t
        }
        K.parseImport = function (e) {
          this.next()
          if (this.type === m.string) {
            e.specifiers = $
            e.source = this.parseExprAtom()
          } else {
            e.specifiers = this.parseImportSpecifiers()
            this.expectContextual('from')
            e.source =
              this.type === m.string ? this.parseExprAtom() : this.unexpected()
          }
          this.semicolon()
          return this.finishNode(e, 'ImportDeclaration')
        }
        K.parseImportSpecifiers = function () {
          var e = [],
            t = true
          if (this.type === m.name) {
            var i = this.startNode()
            i.local = this.parseIdent()
            this.checkLValSimple(i.local, U)
            e.push(this.finishNode(i, 'ImportDefaultSpecifier'))
            if (!this.eat(m.comma)) {
              return e
            }
          }
          if (this.type === m.star) {
            var s = this.startNode()
            this.next()
            this.expectContextual('as')
            s.local = this.parseIdent()
            this.checkLValSimple(s.local, U)
            e.push(this.finishNode(s, 'ImportNamespaceSpecifier'))
            return e
          }
          this.expect(m.braceL)
          while (!this.eat(m.braceR)) {
            if (!t) {
              this.expect(m.comma)
              if (this.afterTrailingComma(m.braceR)) {
                break
              }
            } else {
              t = false
            }
            var r = this.startNode()
            r.imported = this.parseIdent(true)
            if (this.eatContextual('as')) {
              r.local = this.parseIdent()
            } else {
              this.checkUnreserved(r.imported)
              r.local = r.imported
            }
            this.checkLValSimple(r.local, U)
            e.push(this.finishNode(r, 'ImportSpecifier'))
          }
          return e
        }
        K.adaptDirectivePrologue = function (e) {
          for (
            var t = 0;
            t < e.length && this.isDirectiveCandidate(e[t]);
            ++t
          ) {
            e[t].directive = e[t].expression.raw.slice(1, -1)
          }
        }
        K.isDirectiveCandidate = function (e) {
          return (
            e.type === 'ExpressionStatement' &&
            e.expression.type === 'Literal' &&
            typeof e.expression.value === 'string' &&
            (this.input[e.start] === '"' || this.input[e.start] === "'")
          )
        }
        var te = j.prototype
        te.toAssignable = function (e, t, i) {
          if (this.options.ecmaVersion >= 6 && e) {
            switch (e.type) {
              case 'Identifier':
                if (this.inAsync && e.name === 'await') {
                  this.raise(
                    e.start,
                    "Cannot use 'await' as identifier inside an async function"
                  )
                }
                break
              case 'ObjectPattern':
              case 'ArrayPattern':
              case 'AssignmentPattern':
              case 'RestElement':
                break
              case 'ObjectExpression':
                e.type = 'ObjectPattern'
                if (i) {
                  this.checkPatternErrors(i, true)
                }
                for (var s = 0, r = e.properties; s < r.length; s += 1) {
                  var a = r[s]
                  this.toAssignable(a, t)
                  if (
                    a.type === 'RestElement' &&
                    (a.argument.type === 'ArrayPattern' ||
                      a.argument.type === 'ObjectPattern')
                  ) {
                    this.raise(a.argument.start, 'Unexpected token')
                  }
                }
                break
              case 'Property':
                if (e.kind !== 'init') {
                  this.raise(
                    e.key.start,
                    "Object pattern can't contain getter or setter"
                  )
                }
                this.toAssignable(e.value, t)
                break
              case 'ArrayExpression':
                e.type = 'ArrayPattern'
                if (i) {
                  this.checkPatternErrors(i, true)
                }
                this.toAssignableList(e.elements, t)
                break
              case 'SpreadElement':
                e.type = 'RestElement'
                this.toAssignable(e.argument, t)
                if (e.argument.type === 'AssignmentPattern') {
                  this.raise(
                    e.argument.start,
                    'Rest elements cannot have a default value'
                  )
                }
                break
              case 'AssignmentExpression':
                if (e.operator !== '=') {
                  this.raise(
                    e.left.end,
                    "Only '=' operator can be used for specifying default value."
                  )
                }
                e.type = 'AssignmentPattern'
                delete e.operator
                this.toAssignable(e.left, t)
                break
              case 'ParenthesizedExpression':
                this.toAssignable(e.expression, t, i)
                break
              case 'ChainExpression':
                this.raiseRecoverable(
                  e.start,
                  'Optional chaining cannot appear in left-hand side'
                )
                break
              case 'MemberExpression':
                if (!t) {
                  break
                }
              default:
                this.raise(e.start, 'Assigning to rvalue')
            }
          } else if (i) {
            this.checkPatternErrors(i, true)
          }
          return e
        }
        te.toAssignableList = function (e, t) {
          var i = e.length
          for (var s = 0; s < i; s++) {
            var r = e[s]
            if (r) {
              this.toAssignable(r, t)
            }
          }
          if (i) {
            var a = e[i - 1]
            if (
              this.options.ecmaVersion === 6 &&
              t &&
              a &&
              a.type === 'RestElement' &&
              a.argument.type !== 'Identifier'
            ) {
              this.unexpected(a.argument.start)
            }
          }
          return e
        }
        te.parseSpread = function (e) {
          var t = this.startNode()
          this.next()
          t.argument = this.parseMaybeAssign(false, e)
          return this.finishNode(t, 'SpreadElement')
        }
        te.parseRestBinding = function () {
          var e = this.startNode()
          this.next()
          if (this.options.ecmaVersion === 6 && this.type !== m.name) {
            this.unexpected()
          }
          e.argument = this.parseBindingAtom()
          return this.finishNode(e, 'RestElement')
        }
        te.parseBindingAtom = function () {
          if (this.options.ecmaVersion >= 6) {
            switch (this.type) {
              case m.bracketL:
                var e = this.startNode()
                this.next()
                e.elements = this.parseBindingList(m.bracketR, true, true)
                return this.finishNode(e, 'ArrayPattern')
              case m.braceL:
                return this.parseObj(true)
            }
          }
          return this.parseIdent()
        }
        te.parseBindingList = function (e, t, i) {
          var s = [],
            r = true
          while (!this.eat(e)) {
            if (r) {
              r = false
            } else {
              this.expect(m.comma)
            }
            if (t && this.type === m.comma) {
              s.push(null)
            } else if (i && this.afterTrailingComma(e)) {
              break
            } else if (this.type === m.ellipsis) {
              var a = this.parseRestBinding()
              this.parseBindingListItem(a)
              s.push(a)
              if (this.type === m.comma) {
                this.raise(
                  this.start,
                  'Comma is not permitted after the rest element'
                )
              }
              this.expect(e)
              break
            } else {
              var n = this.parseMaybeDefault(this.start, this.startLoc)
              this.parseBindingListItem(n)
              s.push(n)
            }
          }
          return s
        }
        te.parseBindingListItem = function (e) {
          return e
        }
        te.parseMaybeDefault = function (e, t, i) {
          i = i || this.parseBindingAtom()
          if (this.options.ecmaVersion < 6 || !this.eat(m.eq)) {
            return i
          }
          var s = this.startNodeAt(e, t)
          s.left = i
          s.right = this.parseMaybeAssign()
          return this.finishNode(s, 'AssignmentPattern')
        }
        te.checkLValSimple = function (e, t, i) {
          if (t === void 0) t = M
          var s = t !== M
          switch (e.type) {
            case 'Identifier':
              if (this.strict && this.reservedWordsStrictBind.test(e.name)) {
                this.raiseRecoverable(
                  e.start,
                  (s ? 'Binding ' : 'Assigning to ') +
                    e.name +
                    ' in strict mode'
                )
              }
              if (s) {
                if (t === U && e.name === 'let') {
                  this.raiseRecoverable(
                    e.start,
                    'let is disallowed as a lexically bound name'
                  )
                }
                if (i) {
                  if (has(i, e.name)) {
                    this.raiseRecoverable(e.start, 'Argument name clash')
                  }
                  i[e.name] = true
                }
                if (t !== G) {
                  this.declareName(e.name, t, e.start)
                }
              }
              break
            case 'ChainExpression':
              this.raiseRecoverable(
                e.start,
                'Optional chaining cannot appear in left-hand side'
              )
              break
            case 'MemberExpression':
              if (s) {
                this.raiseRecoverable(e.start, 'Binding member expression')
              }
              break
            case 'ParenthesizedExpression':
              if (s) {
                this.raiseRecoverable(
                  e.start,
                  'Binding parenthesized expression'
                )
              }
              return this.checkLValSimple(e.expression, t, i)
            default:
              this.raise(e.start, (s ? 'Binding' : 'Assigning to') + ' rvalue')
          }
        }
        te.checkLValPattern = function (e, t, i) {
          if (t === void 0) t = M
          switch (e.type) {
            case 'ObjectPattern':
              for (var s = 0, r = e.properties; s < r.length; s += 1) {
                var a = r[s]
                this.checkLValInnerPattern(a, t, i)
              }
              break
            case 'ArrayPattern':
              for (var n = 0, o = e.elements; n < o.length; n += 1) {
                var h = o[n]
                if (h) {
                  this.checkLValInnerPattern(h, t, i)
                }
              }
              break
            default:
              this.checkLValSimple(e, t, i)
          }
        }
        te.checkLValInnerPattern = function (e, t, i) {
          if (t === void 0) t = M
          switch (e.type) {
            case 'Property':
              this.checkLValInnerPattern(e.value, t, i)
              break
            case 'AssignmentPattern':
              this.checkLValPattern(e.left, t, i)
              break
            case 'RestElement':
              this.checkLValPattern(e.argument, t, i)
              break
            default:
              this.checkLValPattern(e, t, i)
          }
        }
        var ie = function TokContext(e, t, i, s, r) {
          this.token = e
          this.isExpr = !!t
          this.preserveSpace = !!i
          this.override = s
          this.generator = !!r
        }
        var se = {
          b_stat: new ie('{', false),
          b_expr: new ie('{', true),
          b_tmpl: new ie('${', false),
          p_stat: new ie('(', false),
          p_expr: new ie('(', true),
          q_tmpl: new ie('`', true, true, function (e) {
            return e.tryReadTemplateToken()
          }),
          f_stat: new ie('function', false),
          f_expr: new ie('function', true),
          f_expr_gen: new ie('function', true, false, null, true),
          f_gen: new ie('function', false, false, null, true),
        }
        var re = j.prototype
        re.initialContext = function () {
          return [se.b_stat]
        }
        re.curContext = function () {
          return this.context[this.context.length - 1]
        }
        re.braceIsBlock = function (e) {
          var t = this.curContext()
          if (t === se.f_expr || t === se.f_stat) {
            return true
          }
          if (e === m.colon && (t === se.b_stat || t === se.b_expr)) {
            return !t.isExpr
          }
          if (e === m._return || (e === m.name && this.exprAllowed)) {
            return g.test(this.input.slice(this.lastTokEnd, this.start))
          }
          if (
            e === m._else ||
            e === m.semi ||
            e === m.eof ||
            e === m.parenR ||
            e === m.arrow
          ) {
            return true
          }
          if (e === m.braceL) {
            return t === se.b_stat
          }
          if (e === m._var || e === m._const || e === m.name) {
            return false
          }
          return !this.exprAllowed
        }
        re.inGeneratorContext = function () {
          for (var e = this.context.length - 1; e >= 1; e--) {
            var t = this.context[e]
            if (t.token === 'function') {
              return t.generator
            }
          }
          return false
        }
        re.updateContext = function (e) {
          var t,
            i = this.type
          if (i.keyword && e === m.dot) {
            this.exprAllowed = false
          } else if ((t = i.updateContext)) {
            t.call(this, e)
          } else {
            this.exprAllowed = i.beforeExpr
          }
        }
        re.overrideContext = function (e) {
          if (this.curContext() !== e) {
            this.context[this.context.length - 1] = e
          }
        }
        m.parenR.updateContext = m.braceR.updateContext = function () {
          if (this.context.length === 1) {
            this.exprAllowed = true
            return
          }
          var e = this.context.pop()
          if (e === se.b_stat && this.curContext().token === 'function') {
            e = this.context.pop()
          }
          this.exprAllowed = !e.isExpr
        }
        m.braceL.updateContext = function (e) {
          this.context.push(this.braceIsBlock(e) ? se.b_stat : se.b_expr)
          this.exprAllowed = true
        }
        m.dollarBraceL.updateContext = function () {
          this.context.push(se.b_tmpl)
          this.exprAllowed = true
        }
        m.parenL.updateContext = function (e) {
          var t = e === m._if || e === m._for || e === m._with || e === m._while
          this.context.push(t ? se.p_stat : se.p_expr)
          this.exprAllowed = true
        }
        m.incDec.updateContext = function () {}
        m._function.updateContext = m._class.updateContext = function (e) {
          if (
            e.beforeExpr &&
            e !== m._else &&
            !(e === m.semi && this.curContext() !== se.p_stat) &&
            !(
              e === m._return &&
              g.test(this.input.slice(this.lastTokEnd, this.start))
            ) &&
            !(
              (e === m.colon || e === m.braceL) &&
              this.curContext() === se.b_stat
            )
          ) {
            this.context.push(se.f_expr)
          } else {
            this.context.push(se.f_stat)
          }
          this.exprAllowed = false
        }
        m.backQuote.updateContext = function () {
          if (this.curContext() === se.q_tmpl) {
            this.context.pop()
          } else {
            this.context.push(se.q_tmpl)
          }
          this.exprAllowed = false
        }
        m.star.updateContext = function (e) {
          if (e === m._function) {
            var t = this.context.length - 1
            if (this.context[t] === se.f_expr) {
              this.context[t] = se.f_expr_gen
            } else {
              this.context[t] = se.f_gen
            }
          }
          this.exprAllowed = true
        }
        m.name.updateContext = function (e) {
          var t = false
          if (this.options.ecmaVersion >= 6 && e !== m.dot) {
            if (
              (this.value === 'of' && !this.exprAllowed) ||
              (this.value === 'yield' && this.inGeneratorContext())
            ) {
              t = true
            }
          }
          this.exprAllowed = t
        }
        var ae = j.prototype
        ae.checkPropClash = function (e, t, i) {
          if (this.options.ecmaVersion >= 9 && e.type === 'SpreadElement') {
            return
          }
          if (
            this.options.ecmaVersion >= 6 &&
            (e.computed || e.method || e.shorthand)
          ) {
            return
          }
          var s = e.key
          var r
          switch (s.type) {
            case 'Identifier':
              r = s.name
              break
            case 'Literal':
              r = String(s.value)
              break
            default:
              return
          }
          var a = e.kind
          if (this.options.ecmaVersion >= 6) {
            if (r === '__proto__' && a === 'init') {
              if (t.proto) {
                if (i) {
                  if (i.doubleProto < 0) {
                    i.doubleProto = s.start
                  }
                } else {
                  this.raiseRecoverable(
                    s.start,
                    'Redefinition of __proto__ property'
                  )
                }
              }
              t.proto = true
            }
            return
          }
          r = '$' + r
          var n = t[r]
          if (n) {
            var o
            if (a === 'init') {
              o = (this.strict && n.init) || n.get || n.set
            } else {
              o = n.init || n[a]
            }
            if (o) {
              this.raiseRecoverable(s.start, 'Redefinition of property')
            }
          } else {
            n = t[r] = { init: false, get: false, set: false }
          }
          n[a] = true
        }
        ae.parseExpression = function (e, t) {
          var i = this.start,
            s = this.startLoc
          var r = this.parseMaybeAssign(e, t)
          if (this.type === m.comma) {
            var a = this.startNodeAt(i, s)
            a.expressions = [r]
            while (this.eat(m.comma)) {
              a.expressions.push(this.parseMaybeAssign(e, t))
            }
            return this.finishNode(a, 'SequenceExpression')
          }
          return r
        }
        ae.parseMaybeAssign = function (e, t, i) {
          if (this.isContextual('yield')) {
            if (this.inGenerator) {
              return this.parseYield(e)
            } else {
              this.exprAllowed = false
            }
          }
          var s = false,
            r = -1,
            a = -1
          if (t) {
            r = t.parenthesizedAssign
            a = t.trailingComma
            t.parenthesizedAssign = t.trailingComma = -1
          } else {
            t = new DestructuringErrors()
            s = true
          }
          var n = this.start,
            o = this.startLoc
          if (this.type === m.parenL || this.type === m.name) {
            this.potentialArrowAt = this.start
            this.potentialArrowInForAwait = e === 'await'
          }
          var h = this.parseMaybeConditional(e, t)
          if (i) {
            h = i.call(this, h, n, o)
          }
          if (this.type.isAssign) {
            var p = this.startNodeAt(n, o)
            p.operator = this.value
            if (this.type === m.eq) {
              h = this.toAssignable(h, false, t)
            }
            if (!s) {
              t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1
            }
            if (t.shorthandAssign >= h.start) {
              t.shorthandAssign = -1
            }
            if (this.type === m.eq) {
              this.checkLValPattern(h)
            } else {
              this.checkLValSimple(h)
            }
            p.left = h
            this.next()
            p.right = this.parseMaybeAssign(e)
            return this.finishNode(p, 'AssignmentExpression')
          } else {
            if (s) {
              this.checkExpressionErrors(t, true)
            }
          }
          if (r > -1) {
            t.parenthesizedAssign = r
          }
          if (a > -1) {
            t.trailingComma = a
          }
          return h
        }
        ae.parseMaybeConditional = function (e, t) {
          var i = this.start,
            s = this.startLoc
          var r = this.parseExprOps(e, t)
          if (this.checkExpressionErrors(t)) {
            return r
          }
          if (this.eat(m.question)) {
            var a = this.startNodeAt(i, s)
            a.test = r
            a.consequent = this.parseMaybeAssign()
            this.expect(m.colon)
            a.alternate = this.parseMaybeAssign(e)
            return this.finishNode(a, 'ConditionalExpression')
          }
          return r
        }
        ae.parseExprOps = function (e, t) {
          var i = this.start,
            s = this.startLoc
          var r = this.parseMaybeUnary(t, false, false, e)
          if (this.checkExpressionErrors(t)) {
            return r
          }
          return r.start === i && r.type === 'ArrowFunctionExpression'
            ? r
            : this.parseExprOp(r, i, s, -1, e)
        }
        ae.parseExprOp = function (e, t, i, s, r) {
          var a = this.type.binop
          if (a != null && (!r || this.type !== m._in)) {
            if (a > s) {
              var n = this.type === m.logicalOR || this.type === m.logicalAND
              var o = this.type === m.coalesce
              if (o) {
                a = m.logicalAND.binop
              }
              var h = this.value
              this.next()
              var p = this.start,
                c = this.startLoc
              var l = this.parseExprOp(
                this.parseMaybeUnary(null, false, false, r),
                p,
                c,
                a,
                r
              )
              var u = this.buildBinary(t, i, e, l, h, n || o)
              if (
                (n && this.type === m.coalesce) ||
                (o && (this.type === m.logicalOR || this.type === m.logicalAND))
              ) {
                this.raiseRecoverable(
                  this.start,
                  'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses'
                )
              }
              return this.parseExprOp(u, t, i, s, r)
            }
          }
          return e
        }
        ae.buildBinary = function (e, t, i, s, r, a) {
          var n = this.startNodeAt(e, t)
          n.left = i
          n.operator = r
          n.right = s
          return this.finishNode(
            n,
            a ? 'LogicalExpression' : 'BinaryExpression'
          )
        }
        ae.parseMaybeUnary = function (e, t, i, s) {
          var r = this.start,
            a = this.startLoc,
            n
          if (this.isContextual('await') && this.canAwait) {
            n = this.parseAwait(s)
            t = true
          } else if (this.type.prefix) {
            var o = this.startNode(),
              h = this.type === m.incDec
            o.operator = this.value
            o.prefix = true
            this.next()
            o.argument = this.parseMaybeUnary(null, true, h, s)
            this.checkExpressionErrors(e, true)
            if (h) {
              this.checkLValSimple(o.argument)
            } else if (
              this.strict &&
              o.operator === 'delete' &&
              o.argument.type === 'Identifier'
            ) {
              this.raiseRecoverable(
                o.start,
                'Deleting local variable in strict mode'
              )
            } else if (
              o.operator === 'delete' &&
              isPrivateFieldAccess(o.argument)
            ) {
              this.raiseRecoverable(
                o.start,
                'Private fields can not be deleted'
              )
            } else {
              t = true
            }
            n = this.finishNode(o, h ? 'UpdateExpression' : 'UnaryExpression')
          } else {
            n = this.parseExprSubscripts(e, s)
            if (this.checkExpressionErrors(e)) {
              return n
            }
            while (this.type.postfix && !this.canInsertSemicolon()) {
              var p = this.startNodeAt(r, a)
              p.operator = this.value
              p.prefix = false
              p.argument = n
              this.checkLValSimple(n)
              this.next()
              n = this.finishNode(p, 'UpdateExpression')
            }
          }
          if (!i && this.eat(m.starstar)) {
            if (t) {
              this.unexpected(this.lastTokStart)
            } else {
              return this.buildBinary(
                r,
                a,
                n,
                this.parseMaybeUnary(null, false, false, s),
                '**',
                false
              )
            }
          } else {
            return n
          }
        }
        function isPrivateFieldAccess(e) {
          return (
            (e.type === 'MemberExpression' &&
              e.property.type === 'PrivateIdentifier') ||
            (e.type === 'ChainExpression' && isPrivateFieldAccess(e.expression))
          )
        }
        ae.parseExprSubscripts = function (e, t) {
          var i = this.start,
            s = this.startLoc
          var r = this.parseExprAtom(e, t)
          if (
            r.type === 'ArrowFunctionExpression' &&
            this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
          ) {
            return r
          }
          var a = this.parseSubscripts(r, i, s, false, t)
          if (e && a.type === 'MemberExpression') {
            if (e.parenthesizedAssign >= a.start) {
              e.parenthesizedAssign = -1
            }
            if (e.parenthesizedBind >= a.start) {
              e.parenthesizedBind = -1
            }
            if (e.trailingComma >= a.start) {
              e.trailingComma = -1
            }
          }
          return a
        }
        ae.parseSubscripts = function (e, t, i, s, r) {
          var a =
            this.options.ecmaVersion >= 8 &&
            e.type === 'Identifier' &&
            e.name === 'async' &&
            this.lastTokEnd === e.end &&
            !this.canInsertSemicolon() &&
            e.end - e.start === 5 &&
            this.potentialArrowAt === e.start
          var n = false
          while (true) {
            var o = this.parseSubscript(e, t, i, s, a, n, r)
            if (o.optional) {
              n = true
            }
            if (o === e || o.type === 'ArrowFunctionExpression') {
              if (n) {
                var h = this.startNodeAt(t, i)
                h.expression = o
                o = this.finishNode(h, 'ChainExpression')
              }
              return o
            }
            e = o
          }
        }
        ae.parseSubscript = function (e, t, i, s, r, a, n) {
          var o = this.options.ecmaVersion >= 11
          var h = o && this.eat(m.questionDot)
          if (s && h) {
            this.raise(
              this.lastTokStart,
              'Optional chaining cannot appear in the callee of new expressions'
            )
          }
          var p = this.eat(m.bracketL)
          if (
            p ||
            (h && this.type !== m.parenL && this.type !== m.backQuote) ||
            this.eat(m.dot)
          ) {
            var c = this.startNodeAt(t, i)
            c.object = e
            if (p) {
              c.property = this.parseExpression()
              this.expect(m.bracketR)
            } else if (this.type === m.privateId && e.type !== 'Super') {
              c.property = this.parsePrivateIdent()
            } else {
              c.property = this.parseIdent(
                this.options.allowReserved !== 'never'
              )
            }
            c.computed = !!p
            if (o) {
              c.optional = h
            }
            e = this.finishNode(c, 'MemberExpression')
          } else if (!s && this.eat(m.parenL)) {
            var l = new DestructuringErrors(),
              u = this.yieldPos,
              f = this.awaitPos,
              d = this.awaitIdentPos
            this.yieldPos = 0
            this.awaitPos = 0
            this.awaitIdentPos = 0
            var g = this.parseExprList(
              m.parenR,
              this.options.ecmaVersion >= 8,
              false,
              l
            )
            if (r && !h && !this.canInsertSemicolon() && this.eat(m.arrow)) {
              this.checkPatternErrors(l, false)
              this.checkYieldAwaitInDefaultParams()
              if (this.awaitIdentPos > 0) {
                this.raise(
                  this.awaitIdentPos,
                  "Cannot use 'await' as identifier inside an async function"
                )
              }
              this.yieldPos = u
              this.awaitPos = f
              this.awaitIdentPos = d
              return this.parseArrowExpression(
                this.startNodeAt(t, i),
                g,
                true,
                n
              )
            }
            this.checkExpressionErrors(l, true)
            this.yieldPos = u || this.yieldPos
            this.awaitPos = f || this.awaitPos
            this.awaitIdentPos = d || this.awaitIdentPos
            var x = this.startNodeAt(t, i)
            x.callee = e
            x.arguments = g
            if (o) {
              x.optional = h
            }
            e = this.finishNode(x, 'CallExpression')
          } else if (this.type === m.backQuote) {
            if (h || a) {
              this.raise(
                this.start,
                'Optional chaining cannot appear in the tag of tagged template expressions'
              )
            }
            var v = this.startNodeAt(t, i)
            v.tag = e
            v.quasi = this.parseTemplate({ isTagged: true })
            e = this.finishNode(v, 'TaggedTemplateExpression')
          }
          return e
        }
        ae.parseExprAtom = function (e, t) {
          if (this.type === m.slash) {
            this.readRegexp()
          }
          var i,
            s = this.potentialArrowAt === this.start
          switch (this.type) {
            case m._super:
              if (!this.allowSuper) {
                this.raise(this.start, "'super' keyword outside a method")
              }
              i = this.startNode()
              this.next()
              if (this.type === m.parenL && !this.allowDirectSuper) {
                this.raise(
                  i.start,
                  'super() call outside constructor of a subclass'
                )
              }
              if (
                this.type !== m.dot &&
                this.type !== m.bracketL &&
                this.type !== m.parenL
              ) {
                this.unexpected()
              }
              return this.finishNode(i, 'Super')
            case m._this:
              i = this.startNode()
              this.next()
              return this.finishNode(i, 'ThisExpression')
            case m.name:
              var r = this.start,
                a = this.startLoc,
                n = this.containsEsc
              var o = this.parseIdent(false)
              if (
                this.options.ecmaVersion >= 8 &&
                !n &&
                o.name === 'async' &&
                !this.canInsertSemicolon() &&
                this.eat(m._function)
              ) {
                this.overrideContext(se.f_expr)
                return this.parseFunction(
                  this.startNodeAt(r, a),
                  0,
                  false,
                  true,
                  t
                )
              }
              if (s && !this.canInsertSemicolon()) {
                if (this.eat(m.arrow)) {
                  return this.parseArrowExpression(
                    this.startNodeAt(r, a),
                    [o],
                    false,
                    t
                  )
                }
                if (
                  this.options.ecmaVersion >= 8 &&
                  o.name === 'async' &&
                  this.type === m.name &&
                  !n &&
                  (!this.potentialArrowInForAwait ||
                    this.value !== 'of' ||
                    this.containsEsc)
                ) {
                  o = this.parseIdent(false)
                  if (this.canInsertSemicolon() || !this.eat(m.arrow)) {
                    this.unexpected()
                  }
                  return this.parseArrowExpression(
                    this.startNodeAt(r, a),
                    [o],
                    true,
                    t
                  )
                }
              }
              return o
            case m.regexp:
              var h = this.value
              i = this.parseLiteral(h.value)
              i.regex = { pattern: h.pattern, flags: h.flags }
              return i
            case m.num:
            case m.string:
              return this.parseLiteral(this.value)
            case m._null:
            case m._true:
            case m._false:
              i = this.startNode()
              i.value = this.type === m._null ? null : this.type === m._true
              i.raw = this.type.keyword
              this.next()
              return this.finishNode(i, 'Literal')
            case m.parenL:
              var p = this.start,
                c = this.parseParenAndDistinguishExpression(s, t)
              if (e) {
                if (
                  e.parenthesizedAssign < 0 &&
                  !this.isSimpleAssignTarget(c)
                ) {
                  e.parenthesizedAssign = p
                }
                if (e.parenthesizedBind < 0) {
                  e.parenthesizedBind = p
                }
              }
              return c
            case m.bracketL:
              i = this.startNode()
              this.next()
              i.elements = this.parseExprList(m.bracketR, true, true, e)
              return this.finishNode(i, 'ArrayExpression')
            case m.braceL:
              this.overrideContext(se.b_expr)
              return this.parseObj(false, e)
            case m._function:
              i = this.startNode()
              this.next()
              return this.parseFunction(i, 0)
            case m._class:
              return this.parseClass(this.startNode(), false)
            case m._new:
              return this.parseNew()
            case m.backQuote:
              return this.parseTemplate()
            case m._import:
              if (this.options.ecmaVersion >= 11) {
                return this.parseExprImport()
              } else {
                return this.unexpected()
              }
            default:
              this.unexpected()
          }
        }
        ae.parseExprImport = function () {
          var e = this.startNode()
          if (this.containsEsc) {
            this.raiseRecoverable(
              this.start,
              'Escape sequence in keyword import'
            )
          }
          var t = this.parseIdent(true)
          switch (this.type) {
            case m.parenL:
              return this.parseDynamicImport(e)
            case m.dot:
              e.meta = t
              return this.parseImportMeta(e)
            default:
              this.unexpected()
          }
        }
        ae.parseDynamicImport = function (e) {
          this.next()
          e.source = this.parseMaybeAssign()
          if (!this.eat(m.parenR)) {
            var t = this.start
            if (this.eat(m.comma) && this.eat(m.parenR)) {
              this.raiseRecoverable(
                t,
                'Trailing comma is not allowed in import()'
              )
            } else {
              this.unexpected(t)
            }
          }
          return this.finishNode(e, 'ImportExpression')
        }
        ae.parseImportMeta = function (e) {
          this.next()
          var t = this.containsEsc
          e.property = this.parseIdent(true)
          if (e.property.name !== 'meta') {
            this.raiseRecoverable(
              e.property.start,
              "The only valid meta property for import is 'import.meta'"
            )
          }
          if (t) {
            this.raiseRecoverable(
              e.start,
              "'import.meta' must not contain escaped characters"
            )
          }
          if (
            this.options.sourceType !== 'module' &&
            !this.options.allowImportExportEverywhere
          ) {
            this.raiseRecoverable(
              e.start,
              "Cannot use 'import.meta' outside a module"
            )
          }
          return this.finishNode(e, 'MetaProperty')
        }
        ae.parseLiteral = function (e) {
          var t = this.startNode()
          t.value = e
          t.raw = this.input.slice(this.start, this.end)
          if (t.raw.charCodeAt(t.raw.length - 1) === 110) {
            t.bigint = t.raw.slice(0, -1).replace(/_/g, '')
          }
          this.next()
          return this.finishNode(t, 'Literal')
        }
        ae.parseParenExpression = function () {
          this.expect(m.parenL)
          var e = this.parseExpression()
          this.expect(m.parenR)
          return e
        }
        ae.parseParenAndDistinguishExpression = function (e, t) {
          var i = this.start,
            s = this.startLoc,
            r,
            a = this.options.ecmaVersion >= 8
          if (this.options.ecmaVersion >= 6) {
            this.next()
            var n = this.start,
              o = this.startLoc
            var h = [],
              p = true,
              c = false
            var l = new DestructuringErrors(),
              u = this.yieldPos,
              f = this.awaitPos,
              d
            this.yieldPos = 0
            this.awaitPos = 0
            while (this.type !== m.parenR) {
              p ? (p = false) : this.expect(m.comma)
              if (a && this.afterTrailingComma(m.parenR, true)) {
                c = true
                break
              } else if (this.type === m.ellipsis) {
                d = this.start
                h.push(this.parseParenItem(this.parseRestBinding()))
                if (this.type === m.comma) {
                  this.raise(
                    this.start,
                    'Comma is not permitted after the rest element'
                  )
                }
                break
              } else {
                h.push(this.parseMaybeAssign(false, l, this.parseParenItem))
              }
            }
            var g = this.lastTokEnd,
              x = this.lastTokEndLoc
            this.expect(m.parenR)
            if (e && !this.canInsertSemicolon() && this.eat(m.arrow)) {
              this.checkPatternErrors(l, false)
              this.checkYieldAwaitInDefaultParams()
              this.yieldPos = u
              this.awaitPos = f
              return this.parseParenArrowList(i, s, h, t)
            }
            if (!h.length || c) {
              this.unexpected(this.lastTokStart)
            }
            if (d) {
              this.unexpected(d)
            }
            this.checkExpressionErrors(l, true)
            this.yieldPos = u || this.yieldPos
            this.awaitPos = f || this.awaitPos
            if (h.length > 1) {
              r = this.startNodeAt(n, o)
              r.expressions = h
              this.finishNodeAt(r, 'SequenceExpression', g, x)
            } else {
              r = h[0]
            }
          } else {
            r = this.parseParenExpression()
          }
          if (this.options.preserveParens) {
            var v = this.startNodeAt(i, s)
            v.expression = r
            return this.finishNode(v, 'ParenthesizedExpression')
          } else {
            return r
          }
        }
        ae.parseParenItem = function (e) {
          return e
        }
        ae.parseParenArrowList = function (e, t, i, s) {
          return this.parseArrowExpression(this.startNodeAt(e, t), i, s)
        }
        var ne = []
        ae.parseNew = function () {
          if (this.containsEsc) {
            this.raiseRecoverable(this.start, 'Escape sequence in keyword new')
          }
          var e = this.startNode()
          var t = this.parseIdent(true)
          if (this.options.ecmaVersion >= 6 && this.eat(m.dot)) {
            e.meta = t
            var i = this.containsEsc
            e.property = this.parseIdent(true)
            if (e.property.name !== 'target') {
              this.raiseRecoverable(
                e.property.start,
                "The only valid meta property for new is 'new.target'"
              )
            }
            if (i) {
              this.raiseRecoverable(
                e.start,
                "'new.target' must not contain escaped characters"
              )
            }
            if (!this.allowNewDotTarget) {
              this.raiseRecoverable(
                e.start,
                "'new.target' can only be used in functions and class static block"
              )
            }
            return this.finishNode(e, 'MetaProperty')
          }
          var s = this.start,
            r = this.startLoc,
            a = this.type === m._import
          e.callee = this.parseSubscripts(
            this.parseExprAtom(),
            s,
            r,
            true,
            false
          )
          if (a && e.callee.type === 'ImportExpression') {
            this.raise(s, 'Cannot use new with import()')
          }
          if (this.eat(m.parenL)) {
            e.arguments = this.parseExprList(
              m.parenR,
              this.options.ecmaVersion >= 8,
              false
            )
          } else {
            e.arguments = ne
          }
          return this.finishNode(e, 'NewExpression')
        }
        ae.parseTemplateElement = function (e) {
          var t = e.isTagged
          var i = this.startNode()
          if (this.type === m.invalidTemplate) {
            if (!t) {
              this.raiseRecoverable(
                this.start,
                'Bad escape sequence in untagged template literal'
              )
            }
            i.value = { raw: this.value, cooked: null }
          } else {
            i.value = {
              raw: this.input
                .slice(this.start, this.end)
                .replace(/\r\n?/g, '\n'),
              cooked: this.value,
            }
          }
          this.next()
          i.tail = this.type === m.backQuote
          return this.finishNode(i, 'TemplateElement')
        }
        ae.parseTemplate = function (e) {
          if (e === void 0) e = {}
          var t = e.isTagged
          if (t === void 0) t = false
          var i = this.startNode()
          this.next()
          i.expressions = []
          var s = this.parseTemplateElement({ isTagged: t })
          i.quasis = [s]
          while (!s.tail) {
            if (this.type === m.eof) {
              this.raise(this.pos, 'Unterminated template literal')
            }
            this.expect(m.dollarBraceL)
            i.expressions.push(this.parseExpression())
            this.expect(m.braceR)
            i.quasis.push((s = this.parseTemplateElement({ isTagged: t })))
          }
          this.next()
          return this.finishNode(i, 'TemplateLiteral')
        }
        ae.isAsyncProp = function (e) {
          return (
            !e.computed &&
            e.key.type === 'Identifier' &&
            e.key.name === 'async' &&
            (this.type === m.name ||
              this.type === m.num ||
              this.type === m.string ||
              this.type === m.bracketL ||
              this.type.keyword ||
              (this.options.ecmaVersion >= 9 && this.type === m.star)) &&
            !g.test(this.input.slice(this.lastTokEnd, this.start))
          )
        }
        ae.parseObj = function (e, t) {
          var i = this.startNode(),
            s = true,
            r = {}
          i.properties = []
          this.next()
          while (!this.eat(m.braceR)) {
            if (!s) {
              this.expect(m.comma)
              if (
                this.options.ecmaVersion >= 5 &&
                this.afterTrailingComma(m.braceR)
              ) {
                break
              }
            } else {
              s = false
            }
            var a = this.parseProperty(e, t)
            if (!e) {
              this.checkPropClash(a, r, t)
            }
            i.properties.push(a)
          }
          return this.finishNode(i, e ? 'ObjectPattern' : 'ObjectExpression')
        }
        ae.parseProperty = function (e, t) {
          var i = this.startNode(),
            s,
            r,
            a,
            n
          if (this.options.ecmaVersion >= 9 && this.eat(m.ellipsis)) {
            if (e) {
              i.argument = this.parseIdent(false)
              if (this.type === m.comma) {
                this.raise(
                  this.start,
                  'Comma is not permitted after the rest element'
                )
              }
              return this.finishNode(i, 'RestElement')
            }
            if (this.type === m.parenL && t) {
              if (t.parenthesizedAssign < 0) {
                t.parenthesizedAssign = this.start
              }
              if (t.parenthesizedBind < 0) {
                t.parenthesizedBind = this.start
              }
            }
            i.argument = this.parseMaybeAssign(false, t)
            if (this.type === m.comma && t && t.trailingComma < 0) {
              t.trailingComma = this.start
            }
            return this.finishNode(i, 'SpreadElement')
          }
          if (this.options.ecmaVersion >= 6) {
            i.method = false
            i.shorthand = false
            if (e || t) {
              a = this.start
              n = this.startLoc
            }
            if (!e) {
              s = this.eat(m.star)
            }
          }
          var o = this.containsEsc
          this.parsePropertyName(i)
          if (
            !e &&
            !o &&
            this.options.ecmaVersion >= 8 &&
            !s &&
            this.isAsyncProp(i)
          ) {
            r = true
            s = this.options.ecmaVersion >= 9 && this.eat(m.star)
            this.parsePropertyName(i, t)
          } else {
            r = false
          }
          this.parsePropertyValue(i, e, s, r, a, n, t, o)
          return this.finishNode(i, 'Property')
        }
        ae.parsePropertyValue = function (e, t, i, s, r, a, n, o) {
          if ((i || s) && this.type === m.colon) {
            this.unexpected()
          }
          if (this.eat(m.colon)) {
            e.value = t
              ? this.parseMaybeDefault(this.start, this.startLoc)
              : this.parseMaybeAssign(false, n)
            e.kind = 'init'
          } else if (this.options.ecmaVersion >= 6 && this.type === m.parenL) {
            if (t) {
              this.unexpected()
            }
            e.kind = 'init'
            e.method = true
            e.value = this.parseMethod(i, s)
          } else if (
            !t &&
            !o &&
            this.options.ecmaVersion >= 5 &&
            !e.computed &&
            e.key.type === 'Identifier' &&
            (e.key.name === 'get' || e.key.name === 'set') &&
            this.type !== m.comma &&
            this.type !== m.braceR &&
            this.type !== m.eq
          ) {
            if (i || s) {
              this.unexpected()
            }
            e.kind = e.key.name
            this.parsePropertyName(e)
            e.value = this.parseMethod(false)
            var h = e.kind === 'get' ? 0 : 1
            if (e.value.params.length !== h) {
              var p = e.value.start
              if (e.kind === 'get') {
                this.raiseRecoverable(p, 'getter should have no params')
              } else {
                this.raiseRecoverable(p, 'setter should have exactly one param')
              }
            } else {
              if (
                e.kind === 'set' &&
                e.value.params[0].type === 'RestElement'
              ) {
                this.raiseRecoverable(
                  e.value.params[0].start,
                  'Setter cannot use rest params'
                )
              }
            }
          } else if (
            this.options.ecmaVersion >= 6 &&
            !e.computed &&
            e.key.type === 'Identifier'
          ) {
            if (i || s) {
              this.unexpected()
            }
            this.checkUnreserved(e.key)
            if (e.key.name === 'await' && !this.awaitIdentPos) {
              this.awaitIdentPos = r
            }
            e.kind = 'init'
            if (t) {
              e.value = this.parseMaybeDefault(r, a, this.copyNode(e.key))
            } else if (this.type === m.eq && n) {
              if (n.shorthandAssign < 0) {
                n.shorthandAssign = this.start
              }
              e.value = this.parseMaybeDefault(r, a, this.copyNode(e.key))
            } else {
              e.value = this.copyNode(e.key)
            }
            e.shorthand = true
          } else {
            this.unexpected()
          }
        }
        ae.parsePropertyName = function (e) {
          if (this.options.ecmaVersion >= 6) {
            if (this.eat(m.bracketL)) {
              e.computed = true
              e.key = this.parseMaybeAssign()
              this.expect(m.bracketR)
              return e.key
            } else {
              e.computed = false
            }
          }
          return (e.key =
            this.type === m.num || this.type === m.string
              ? this.parseExprAtom()
              : this.parseIdent(this.options.allowReserved !== 'never'))
        }
        ae.initFunction = function (e) {
          e.id = null
          if (this.options.ecmaVersion >= 6) {
            e.generator = e.expression = false
          }
          if (this.options.ecmaVersion >= 8) {
            e.async = false
          }
        }
        ae.parseMethod = function (e, t, i) {
          var s = this.startNode(),
            r = this.yieldPos,
            a = this.awaitPos,
            n = this.awaitIdentPos
          this.initFunction(s)
          if (this.options.ecmaVersion >= 6) {
            s.generator = e
          }
          if (this.options.ecmaVersion >= 8) {
            s.async = !!t
          }
          this.yieldPos = 0
          this.awaitPos = 0
          this.awaitIdentPos = 0
          this.enterScope(functionFlags(t, s.generator) | R | (i ? D : 0))
          this.expect(m.parenL)
          s.params = this.parseBindingList(
            m.parenR,
            false,
            this.options.ecmaVersion >= 8
          )
          this.checkYieldAwaitInDefaultParams()
          this.parseFunctionBody(s, false, true, false)
          this.yieldPos = r
          this.awaitPos = a
          this.awaitIdentPos = n
          return this.finishNode(s, 'FunctionExpression')
        }
        ae.parseArrowExpression = function (e, t, i, s) {
          var r = this.yieldPos,
            a = this.awaitPos,
            n = this.awaitIdentPos
          this.enterScope(functionFlags(i, false) | V)
          this.initFunction(e)
          if (this.options.ecmaVersion >= 8) {
            e.async = !!i
          }
          this.yieldPos = 0
          this.awaitPos = 0
          this.awaitIdentPos = 0
          e.params = this.toAssignableList(t, true)
          this.parseFunctionBody(e, true, false, s)
          this.yieldPos = r
          this.awaitPos = a
          this.awaitIdentPos = n
          return this.finishNode(e, 'ArrowFunctionExpression')
        }
        ae.parseFunctionBody = function (e, t, i, s) {
          var r = t && this.type !== m.braceL
          var a = this.strict,
            n = false
          if (r) {
            e.body = this.parseMaybeAssign(s)
            e.expression = true
            this.checkParams(e, false)
          } else {
            var o =
              this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params)
            if (!a || o) {
              n = this.strictDirective(this.end)
              if (n && o) {
                this.raiseRecoverable(
                  e.start,
                  "Illegal 'use strict' directive in function with non-simple parameter list"
                )
              }
            }
            var h = this.labels
            this.labels = []
            if (n) {
              this.strict = true
            }
            this.checkParams(
              e,
              !a && !n && !t && !i && this.isSimpleParamList(e.params)
            )
            if (this.strict && e.id) {
              this.checkLValSimple(e.id, G)
            }
            e.body = this.parseBlock(false, undefined, n && !a)
            e.expression = false
            this.adaptDirectivePrologue(e.body.body)
            this.labels = h
          }
          this.exitScope()
        }
        ae.isSimpleParamList = function (e) {
          for (var t = 0, i = e; t < i.length; t += 1) {
            var s = i[t]
            if (s.type !== 'Identifier') {
              return false
            }
          }
          return true
        }
        ae.checkParams = function (e, t) {
          var i = Object.create(null)
          for (var s = 0, r = e.params; s < r.length; s += 1) {
            var a = r[s]
            this.checkLValInnerPattern(a, F, t ? null : i)
          }
        }
        ae.parseExprList = function (e, t, i, s) {
          var r = [],
            a = true
          while (!this.eat(e)) {
            if (!a) {
              this.expect(m.comma)
              if (t && this.afterTrailingComma(e)) {
                break
              }
            } else {
              a = false
            }
            var n = void 0
            if (i && this.type === m.comma) {
              n = null
            } else if (this.type === m.ellipsis) {
              n = this.parseSpread(s)
              if (s && this.type === m.comma && s.trailingComma < 0) {
                s.trailingComma = this.start
              }
            } else {
              n = this.parseMaybeAssign(false, s)
            }
            r.push(n)
          }
          return r
        }
        ae.checkUnreserved = function (e) {
          var t = e.start
          var i = e.end
          var s = e.name
          if (this.inGenerator && s === 'yield') {
            this.raiseRecoverable(
              t,
              "Cannot use 'yield' as identifier inside a generator"
            )
          }
          if (this.inAsync && s === 'await') {
            this.raiseRecoverable(
              t,
              "Cannot use 'await' as identifier inside an async function"
            )
          }
          if (this.currentThisScope().inClassFieldInit && s === 'arguments') {
            this.raiseRecoverable(
              t,
              "Cannot use 'arguments' in class field initializer"
            )
          }
          if (this.inClassStaticBlock && (s === 'arguments' || s === 'await')) {
            this.raise(
              t,
              'Cannot use ' + s + ' in class static initialization block'
            )
          }
          if (this.keywords.test(s)) {
            this.raise(t, "Unexpected keyword '" + s + "'")
          }
          if (
            this.options.ecmaVersion < 6 &&
            this.input.slice(t, i).indexOf('\\') !== -1
          ) {
            return
          }
          var r = this.strict ? this.reservedWordsStrict : this.reservedWords
          if (r.test(s)) {
            if (!this.inAsync && s === 'await') {
              this.raiseRecoverable(
                t,
                "Cannot use keyword 'await' outside an async function"
              )
            }
            this.raiseRecoverable(t, "The keyword '" + s + "' is reserved")
          }
        }
        ae.parseIdent = function (e, t) {
          var i = this.startNode()
          if (this.type === m.name) {
            i.name = this.value
          } else if (this.type.keyword) {
            i.name = this.type.keyword
            if (
              (i.name === 'class' || i.name === 'function') &&
              (this.lastTokEnd !== this.lastTokStart + 1 ||
                this.input.charCodeAt(this.lastTokStart) !== 46)
            ) {
              this.context.pop()
            }
          } else {
            this.unexpected()
          }
          this.next(!!e)
          this.finishNode(i, 'Identifier')
          if (!e) {
            this.checkUnreserved(i)
            if (i.name === 'await' && !this.awaitIdentPos) {
              this.awaitIdentPos = i.start
            }
          }
          return i
        }
        ae.parsePrivateIdent = function () {
          var e = this.startNode()
          if (this.type === m.privateId) {
            e.name = this.value
          } else {
            this.unexpected()
          }
          this.next()
          this.finishNode(e, 'PrivateIdentifier')
          if (this.privateNameStack.length === 0) {
            this.raise(
              e.start,
              "Private field '#" +
                e.name +
                "' must be declared in an enclosing class"
            )
          } else {
            this.privateNameStack[this.privateNameStack.length - 1].used.push(e)
          }
          return e
        }
        ae.parseYield = function (e) {
          if (!this.yieldPos) {
            this.yieldPos = this.start
          }
          var t = this.startNode()
          this.next()
          if (
            this.type === m.semi ||
            this.canInsertSemicolon() ||
            (this.type !== m.star && !this.type.startsExpr)
          ) {
            t.delegate = false
            t.argument = null
          } else {
            t.delegate = this.eat(m.star)
            t.argument = this.parseMaybeAssign(e)
          }
          return this.finishNode(t, 'YieldExpression')
        }
        ae.parseAwait = function (e) {
          if (!this.awaitPos) {
            this.awaitPos = this.start
          }
          var t = this.startNode()
          this.next()
          t.argument = this.parseMaybeUnary(null, true, false, e)
          return this.finishNode(t, 'AwaitExpression')
        }
        var oe = j.prototype
        oe.raise = function (e, t) {
          var i = getLineInfo(this.input, e)
          t += ' (' + i.line + ':' + i.column + ')'
          var s = new SyntaxError(t)
          s.pos = e
          s.loc = i
          s.raisedAt = this.pos
          throw s
        }
        oe.raiseRecoverable = oe.raise
        oe.curPosition = function () {
          if (this.options.locations) {
            return new S(this.curLine, this.pos - this.lineStart)
          }
        }
        var he = j.prototype
        var pe = function Scope(e) {
          this.flags = e
          this.var = []
          this.lexical = []
          this.functions = []
          this.inClassFieldInit = false
        }
        he.enterScope = function (e) {
          this.scopeStack.push(new pe(e))
        }
        he.exitScope = function () {
          this.scopeStack.pop()
        }
        he.treatFunctionsAsVarInScope = function (e) {
          return e.flags & P || (!this.inModule && e.flags & A)
        }
        he.declareName = function (e, t, i) {
          var s = false
          if (t === U) {
            var r = this.currentScope()
            s =
              r.lexical.indexOf(e) > -1 ||
              r.functions.indexOf(e) > -1 ||
              r.var.indexOf(e) > -1
            r.lexical.push(e)
            if (this.inModule && r.flags & A) {
              delete this.undefinedExports[e]
            }
          } else if (t === H) {
            var a = this.currentScope()
            a.lexical.push(e)
          } else if (t === q) {
            var n = this.currentScope()
            if (this.treatFunctionsAsVar) {
              s = n.lexical.indexOf(e) > -1
            } else {
              s = n.lexical.indexOf(e) > -1 || n.var.indexOf(e) > -1
            }
            n.functions.push(e)
          } else {
            for (var o = this.scopeStack.length - 1; o >= 0; --o) {
              var h = this.scopeStack[o]
              if (
                (h.lexical.indexOf(e) > -1 &&
                  !(h.flags & L && h.lexical[0] === e)) ||
                (!this.treatFunctionsAsVarInScope(h) &&
                  h.functions.indexOf(e) > -1)
              ) {
                s = true
                break
              }
              h.var.push(e)
              if (this.inModule && h.flags & A) {
                delete this.undefinedExports[e]
              }
              if (h.flags & B) {
                break
              }
            }
          }
          if (s) {
            this.raiseRecoverable(
              i,
              "Identifier '" + e + "' has already been declared"
            )
          }
        }
        he.checkLocalExport = function (e) {
          if (
            this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
            this.scopeStack[0].var.indexOf(e.name) === -1
          ) {
            this.undefinedExports[e.name] = e
          }
        }
        he.currentScope = function () {
          return this.scopeStack[this.scopeStack.length - 1]
        }
        he.currentVarScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e]
            if (t.flags & B) {
              return t
            }
          }
        }
        he.currentThisScope = function () {
          for (var e = this.scopeStack.length - 1; ; e--) {
            var t = this.scopeStack[e]
            if (t.flags & B && !(t.flags & V)) {
              return t
            }
          }
        }
        var ce = function Node(e, t, i) {
          this.type = ''
          this.start = t
          this.end = 0
          if (e.options.locations) {
            this.loc = new C(e, i)
          }
          if (e.options.directSourceFile) {
            this.sourceFile = e.options.directSourceFile
          }
          if (e.options.ranges) {
            this.range = [t, 0]
          }
        }
        var le = j.prototype
        le.startNode = function () {
          return new ce(this, this.start, this.startLoc)
        }
        le.startNodeAt = function (e, t) {
          return new ce(this, e, t)
        }
        function finishNodeAt(e, t, i, s) {
          e.type = t
          e.end = i
          if (this.options.locations) {
            e.loc.end = s
          }
          if (this.options.ranges) {
            e.range[1] = i
          }
          return e
        }
        le.finishNode = function (e, t) {
          return finishNodeAt.call(
            this,
            e,
            t,
            this.lastTokEnd,
            this.lastTokEndLoc
          )
        }
        le.finishNodeAt = function (e, t, i, s) {
          return finishNodeAt.call(this, e, t, i, s)
        }
        le.copyNode = function (e) {
          var t = new ce(this, e.start, this.startLoc)
          for (var i in e) {
            t[i] = e[i]
          }
          return t
        }
        var ue =
          'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS'
        var fe = ue + ' Extended_Pictographic'
        var de = fe
        var me = de + ' EBase EComp EMod EPres ExtPict'
        var ge = { 9: ue, 10: fe, 11: de, 12: me }
        var xe =
          'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu'
        var ve =
          'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb'
        var ye =
          ve +
          ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd'
        var ke =
          ye +
          ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho'
        var be =
          ke +
          ' Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi'
        var we = { 9: ve, 10: ye, 11: ke, 12: be }
        var _e = {}
        function buildUnicodeData(e) {
          var t = (_e[e] = {
            binary: wordsRegexp(ge[e] + ' ' + xe),
            nonBinary: {
              General_Category: wordsRegexp(xe),
              Script: wordsRegexp(we[e]),
            },
          })
          t.nonBinary.Script_Extensions = t.nonBinary.Script
          t.nonBinary.gc = t.nonBinary.General_Category
          t.nonBinary.sc = t.nonBinary.Script
          t.nonBinary.scx = t.nonBinary.Script_Extensions
        }
        buildUnicodeData(9)
        buildUnicodeData(10)
        buildUnicodeData(11)
        buildUnicodeData(12)
        var Se = j.prototype
        var Ce = function RegExpValidationState(e) {
          this.parser = e
          this.validFlags =
            'gim' +
            (e.options.ecmaVersion >= 6 ? 'uy' : '') +
            (e.options.ecmaVersion >= 9 ? 's' : '') +
            (e.options.ecmaVersion >= 13 ? 'd' : '')
          this.unicodeProperties =
            _e[e.options.ecmaVersion >= 12 ? 12 : e.options.ecmaVersion]
          this.source = ''
          this.flags = ''
          this.start = 0
          this.switchU = false
          this.switchN = false
          this.pos = 0
          this.lastIntValue = 0
          this.lastStringValue = ''
          this.lastAssertionIsQuantifiable = false
          this.numCapturingParens = 0
          this.maxBackReference = 0
          this.groupNames = []
          this.backReferenceNames = []
        }
        Ce.prototype.reset = function reset(e, t, i) {
          var s = i.indexOf('u') !== -1
          this.start = e | 0
          this.source = t + ''
          this.flags = i
          this.switchU = s && this.parser.options.ecmaVersion >= 6
          this.switchN = s && this.parser.options.ecmaVersion >= 9
        }
        Ce.prototype.raise = function raise(e) {
          this.parser.raiseRecoverable(
            this.start,
            'Invalid regular expression: /' + this.source + '/: ' + e
          )
        }
        Ce.prototype.at = function at(e, t) {
          if (t === void 0) t = false
          var i = this.source
          var s = i.length
          if (e >= s) {
            return -1
          }
          var r = i.charCodeAt(e)
          if (!(t || this.switchU) || r <= 55295 || r >= 57344 || e + 1 >= s) {
            return r
          }
          var a = i.charCodeAt(e + 1)
          return a >= 56320 && a <= 57343 ? (r << 10) + a - 56613888 : r
        }
        Ce.prototype.nextIndex = function nextIndex(e, t) {
          if (t === void 0) t = false
          var i = this.source
          var s = i.length
          if (e >= s) {
            return s
          }
          var r = i.charCodeAt(e),
            a
          if (
            !(t || this.switchU) ||
            r <= 55295 ||
            r >= 57344 ||
            e + 1 >= s ||
            (a = i.charCodeAt(e + 1)) < 56320 ||
            a > 57343
          ) {
            return e + 1
          }
          return e + 2
        }
        Ce.prototype.current = function current(e) {
          if (e === void 0) e = false
          return this.at(this.pos, e)
        }
        Ce.prototype.lookahead = function lookahead(e) {
          if (e === void 0) e = false
          return this.at(this.nextIndex(this.pos, e), e)
        }
        Ce.prototype.advance = function advance(e) {
          if (e === void 0) e = false
          this.pos = this.nextIndex(this.pos, e)
        }
        Ce.prototype.eat = function eat(e, t) {
          if (t === void 0) t = false
          if (this.current(t) === e) {
            this.advance(t)
            return true
          }
          return false
        }
        function codePointToString(e) {
          if (e <= 65535) {
            return String.fromCharCode(e)
          }
          e -= 65536
          return String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320)
        }
        Se.validateRegExpFlags = function (e) {
          var t = e.validFlags
          var i = e.flags
          for (var s = 0; s < i.length; s++) {
            var r = i.charAt(s)
            if (t.indexOf(r) === -1) {
              this.raise(e.start, 'Invalid regular expression flag')
            }
            if (i.indexOf(r, s + 1) > -1) {
              this.raise(e.start, 'Duplicate regular expression flag')
            }
          }
        }
        Se.validateRegExpPattern = function (e) {
          this.regexp_pattern(e)
          if (
            !e.switchN &&
            this.options.ecmaVersion >= 9 &&
            e.groupNames.length > 0
          ) {
            e.switchN = true
            this.regexp_pattern(e)
          }
        }
        Se.regexp_pattern = function (e) {
          e.pos = 0
          e.lastIntValue = 0
          e.lastStringValue = ''
          e.lastAssertionIsQuantifiable = false
          e.numCapturingParens = 0
          e.maxBackReference = 0
          e.groupNames.length = 0
          e.backReferenceNames.length = 0
          this.regexp_disjunction(e)
          if (e.pos !== e.source.length) {
            if (e.eat(41)) {
              e.raise("Unmatched ')'")
            }
            if (e.eat(93) || e.eat(125)) {
              e.raise('Lone quantifier brackets')
            }
          }
          if (e.maxBackReference > e.numCapturingParens) {
            e.raise('Invalid escape')
          }
          for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
            var s = i[t]
            if (e.groupNames.indexOf(s) === -1) {
              e.raise('Invalid named capture referenced')
            }
          }
        }
        Se.regexp_disjunction = function (e) {
          this.regexp_alternative(e)
          while (e.eat(124)) {
            this.regexp_alternative(e)
          }
          if (this.regexp_eatQuantifier(e, true)) {
            e.raise('Nothing to repeat')
          }
          if (e.eat(123)) {
            e.raise('Lone quantifier brackets')
          }
        }
        Se.regexp_alternative = function (e) {
          while (e.pos < e.source.length && this.regexp_eatTerm(e)) {}
        }
        Se.regexp_eatTerm = function (e) {
          if (this.regexp_eatAssertion(e)) {
            if (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e)) {
              if (e.switchU) {
                e.raise('Invalid quantifier')
              }
            }
            return true
          }
          if (
            e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)
          ) {
            this.regexp_eatQuantifier(e)
            return true
          }
          return false
        }
        Se.regexp_eatAssertion = function (e) {
          var t = e.pos
          e.lastAssertionIsQuantifiable = false
          if (e.eat(94) || e.eat(36)) {
            return true
          }
          if (e.eat(92)) {
            if (e.eat(66) || e.eat(98)) {
              return true
            }
            e.pos = t
          }
          if (e.eat(40) && e.eat(63)) {
            var i = false
            if (this.options.ecmaVersion >= 9) {
              i = e.eat(60)
            }
            if (e.eat(61) || e.eat(33)) {
              this.regexp_disjunction(e)
              if (!e.eat(41)) {
                e.raise('Unterminated group')
              }
              e.lastAssertionIsQuantifiable = !i
              return true
            }
          }
          e.pos = t
          return false
        }
        Se.regexp_eatQuantifier = function (e, t) {
          if (t === void 0) t = false
          if (this.regexp_eatQuantifierPrefix(e, t)) {
            e.eat(63)
            return true
          }
          return false
        }
        Se.regexp_eatQuantifierPrefix = function (e, t) {
          return (
            e.eat(42) ||
            e.eat(43) ||
            e.eat(63) ||
            this.regexp_eatBracedQuantifier(e, t)
          )
        }
        Se.regexp_eatBracedQuantifier = function (e, t) {
          var i = e.pos
          if (e.eat(123)) {
            var s = 0,
              r = -1
            if (this.regexp_eatDecimalDigits(e)) {
              s = e.lastIntValue
              if (e.eat(44) && this.regexp_eatDecimalDigits(e)) {
                r = e.lastIntValue
              }
              if (e.eat(125)) {
                if (r !== -1 && r < s && !t) {
                  e.raise('numbers out of order in {} quantifier')
                }
                return true
              }
            }
            if (e.switchU && !t) {
              e.raise('Incomplete quantifier')
            }
            e.pos = i
          }
          return false
        }
        Se.regexp_eatAtom = function (e) {
          return (
            this.regexp_eatPatternCharacters(e) ||
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e)
          )
        }
        Se.regexp_eatReverseSolidusAtomEscape = function (e) {
          var t = e.pos
          if (e.eat(92)) {
            if (this.regexp_eatAtomEscape(e)) {
              return true
            }
            e.pos = t
          }
          return false
        }
        Se.regexp_eatUncapturingGroup = function (e) {
          var t = e.pos
          if (e.eat(40)) {
            if (e.eat(63) && e.eat(58)) {
              this.regexp_disjunction(e)
              if (e.eat(41)) {
                return true
              }
              e.raise('Unterminated group')
            }
            e.pos = t
          }
          return false
        }
        Se.regexp_eatCapturingGroup = function (e) {
          if (e.eat(40)) {
            if (this.options.ecmaVersion >= 9) {
              this.regexp_groupSpecifier(e)
            } else if (e.current() === 63) {
              e.raise('Invalid group')
            }
            this.regexp_disjunction(e)
            if (e.eat(41)) {
              e.numCapturingParens += 1
              return true
            }
            e.raise('Unterminated group')
          }
          return false
        }
        Se.regexp_eatExtendedAtom = function (e) {
          return (
            e.eat(46) ||
            this.regexp_eatReverseSolidusAtomEscape(e) ||
            this.regexp_eatCharacterClass(e) ||
            this.regexp_eatUncapturingGroup(e) ||
            this.regexp_eatCapturingGroup(e) ||
            this.regexp_eatInvalidBracedQuantifier(e) ||
            this.regexp_eatExtendedPatternCharacter(e)
          )
        }
        Se.regexp_eatInvalidBracedQuantifier = function (e) {
          if (this.regexp_eatBracedQuantifier(e, true)) {
            e.raise('Nothing to repeat')
          }
          return false
        }
        Se.regexp_eatSyntaxCharacter = function (e) {
          var t = e.current()
          if (isSyntaxCharacter(t)) {
            e.lastIntValue = t
            e.advance()
            return true
          }
          return false
        }
        function isSyntaxCharacter(e) {
          return (
            e === 36 ||
            (e >= 40 && e <= 43) ||
            e === 46 ||
            e === 63 ||
            (e >= 91 && e <= 94) ||
            (e >= 123 && e <= 125)
          )
        }
        Se.regexp_eatPatternCharacters = function (e) {
          var t = e.pos
          var i = 0
          while ((i = e.current()) !== -1 && !isSyntaxCharacter(i)) {
            e.advance()
          }
          return e.pos !== t
        }
        Se.regexp_eatExtendedPatternCharacter = function (e) {
          var t = e.current()
          if (
            t !== -1 &&
            t !== 36 &&
            !(t >= 40 && t <= 43) &&
            t !== 46 &&
            t !== 63 &&
            t !== 91 &&
            t !== 94 &&
            t !== 124
          ) {
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_groupSpecifier = function (e) {
          if (e.eat(63)) {
            if (this.regexp_eatGroupName(e)) {
              if (e.groupNames.indexOf(e.lastStringValue) !== -1) {
                e.raise('Duplicate capture group name')
              }
              e.groupNames.push(e.lastStringValue)
              return
            }
            e.raise('Invalid group')
          }
        }
        Se.regexp_eatGroupName = function (e) {
          e.lastStringValue = ''
          if (e.eat(60)) {
            if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) {
              return true
            }
            e.raise('Invalid capture group name')
          }
          return false
        }
        Se.regexp_eatRegExpIdentifierName = function (e) {
          e.lastStringValue = ''
          if (this.regexp_eatRegExpIdentifierStart(e)) {
            e.lastStringValue += codePointToString(e.lastIntValue)
            while (this.regexp_eatRegExpIdentifierPart(e)) {
              e.lastStringValue += codePointToString(e.lastIntValue)
            }
            return true
          }
          return false
        }
        Se.regexp_eatRegExpIdentifierStart = function (e) {
          var t = e.pos
          var i = this.options.ecmaVersion >= 11
          var s = e.current(i)
          e.advance(i)
          if (s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) {
            s = e.lastIntValue
          }
          if (isRegExpIdentifierStart(s)) {
            e.lastIntValue = s
            return true
          }
          e.pos = t
          return false
        }
        function isRegExpIdentifierStart(e) {
          return isIdentifierStart(e, true) || e === 36 || e === 95
        }
        Se.regexp_eatRegExpIdentifierPart = function (e) {
          var t = e.pos
          var i = this.options.ecmaVersion >= 11
          var s = e.current(i)
          e.advance(i)
          if (s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) {
            s = e.lastIntValue
          }
          if (isRegExpIdentifierPart(s)) {
            e.lastIntValue = s
            return true
          }
          e.pos = t
          return false
        }
        function isRegExpIdentifierPart(e) {
          return (
            isIdentifierChar(e, true) ||
            e === 36 ||
            e === 95 ||
            e === 8204 ||
            e === 8205
          )
        }
        Se.regexp_eatAtomEscape = function (e) {
          if (
            this.regexp_eatBackReference(e) ||
            this.regexp_eatCharacterClassEscape(e) ||
            this.regexp_eatCharacterEscape(e) ||
            (e.switchN && this.regexp_eatKGroupName(e))
          ) {
            return true
          }
          if (e.switchU) {
            if (e.current() === 99) {
              e.raise('Invalid unicode escape')
            }
            e.raise('Invalid escape')
          }
          return false
        }
        Se.regexp_eatBackReference = function (e) {
          var t = e.pos
          if (this.regexp_eatDecimalEscape(e)) {
            var i = e.lastIntValue
            if (e.switchU) {
              if (i > e.maxBackReference) {
                e.maxBackReference = i
              }
              return true
            }
            if (i <= e.numCapturingParens) {
              return true
            }
            e.pos = t
          }
          return false
        }
        Se.regexp_eatKGroupName = function (e) {
          if (e.eat(107)) {
            if (this.regexp_eatGroupName(e)) {
              e.backReferenceNames.push(e.lastStringValue)
              return true
            }
            e.raise('Invalid named reference')
          }
          return false
        }
        Se.regexp_eatCharacterEscape = function (e) {
          return (
            this.regexp_eatControlEscape(e) ||
            this.regexp_eatCControlLetter(e) ||
            this.regexp_eatZero(e) ||
            this.regexp_eatHexEscapeSequence(e) ||
            this.regexp_eatRegExpUnicodeEscapeSequence(e, false) ||
            (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
            this.regexp_eatIdentityEscape(e)
          )
        }
        Se.regexp_eatCControlLetter = function (e) {
          var t = e.pos
          if (e.eat(99)) {
            if (this.regexp_eatControlLetter(e)) {
              return true
            }
            e.pos = t
          }
          return false
        }
        Se.regexp_eatZero = function (e) {
          if (e.current() === 48 && !isDecimalDigit(e.lookahead())) {
            e.lastIntValue = 0
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_eatControlEscape = function (e) {
          var t = e.current()
          if (t === 116) {
            e.lastIntValue = 9
            e.advance()
            return true
          }
          if (t === 110) {
            e.lastIntValue = 10
            e.advance()
            return true
          }
          if (t === 118) {
            e.lastIntValue = 11
            e.advance()
            return true
          }
          if (t === 102) {
            e.lastIntValue = 12
            e.advance()
            return true
          }
          if (t === 114) {
            e.lastIntValue = 13
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_eatControlLetter = function (e) {
          var t = e.current()
          if (isControlLetter(t)) {
            e.lastIntValue = t % 32
            e.advance()
            return true
          }
          return false
        }
        function isControlLetter(e) {
          return (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
        }
        Se.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
          if (t === void 0) t = false
          var i = e.pos
          var s = t || e.switchU
          if (e.eat(117)) {
            if (this.regexp_eatFixedHexDigits(e, 4)) {
              var r = e.lastIntValue
              if (s && r >= 55296 && r <= 56319) {
                var a = e.pos
                if (
                  e.eat(92) &&
                  e.eat(117) &&
                  this.regexp_eatFixedHexDigits(e, 4)
                ) {
                  var n = e.lastIntValue
                  if (n >= 56320 && n <= 57343) {
                    e.lastIntValue = (r - 55296) * 1024 + (n - 56320) + 65536
                    return true
                  }
                }
                e.pos = a
                e.lastIntValue = r
              }
              return true
            }
            if (
              s &&
              e.eat(123) &&
              this.regexp_eatHexDigits(e) &&
              e.eat(125) &&
              isValidUnicode(e.lastIntValue)
            ) {
              return true
            }
            if (s) {
              e.raise('Invalid unicode escape')
            }
            e.pos = i
          }
          return false
        }
        function isValidUnicode(e) {
          return e >= 0 && e <= 1114111
        }
        Se.regexp_eatIdentityEscape = function (e) {
          if (e.switchU) {
            if (this.regexp_eatSyntaxCharacter(e)) {
              return true
            }
            if (e.eat(47)) {
              e.lastIntValue = 47
              return true
            }
            return false
          }
          var t = e.current()
          if (t !== 99 && (!e.switchN || t !== 107)) {
            e.lastIntValue = t
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_eatDecimalEscape = function (e) {
          e.lastIntValue = 0
          var t = e.current()
          if (t >= 49 && t <= 57) {
            do {
              e.lastIntValue = 10 * e.lastIntValue + (t - 48)
              e.advance()
            } while ((t = e.current()) >= 48 && t <= 57)
            return true
          }
          return false
        }
        Se.regexp_eatCharacterClassEscape = function (e) {
          var t = e.current()
          if (isCharacterClassEscape(t)) {
            e.lastIntValue = -1
            e.advance()
            return true
          }
          if (
            e.switchU &&
            this.options.ecmaVersion >= 9 &&
            (t === 80 || t === 112)
          ) {
            e.lastIntValue = -1
            e.advance()
            if (
              e.eat(123) &&
              this.regexp_eatUnicodePropertyValueExpression(e) &&
              e.eat(125)
            ) {
              return true
            }
            e.raise('Invalid property name')
          }
          return false
        }
        function isCharacterClassEscape(e) {
          return (
            e === 100 ||
            e === 68 ||
            e === 115 ||
            e === 83 ||
            e === 119 ||
            e === 87
          )
        }
        Se.regexp_eatUnicodePropertyValueExpression = function (e) {
          var t = e.pos
          if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
            var i = e.lastStringValue
            if (this.regexp_eatUnicodePropertyValue(e)) {
              var s = e.lastStringValue
              this.regexp_validateUnicodePropertyNameAndValue(e, i, s)
              return true
            }
          }
          e.pos = t
          if (this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
            var r = e.lastStringValue
            this.regexp_validateUnicodePropertyNameOrValue(e, r)
            return true
          }
          return false
        }
        Se.regexp_validateUnicodePropertyNameAndValue = function (e, t, i) {
          if (!has(e.unicodeProperties.nonBinary, t)) {
            e.raise('Invalid property name')
          }
          if (!e.unicodeProperties.nonBinary[t].test(i)) {
            e.raise('Invalid property value')
          }
        }
        Se.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
          if (!e.unicodeProperties.binary.test(t)) {
            e.raise('Invalid property name')
          }
        }
        Se.regexp_eatUnicodePropertyName = function (e) {
          var t = 0
          e.lastStringValue = ''
          while (isUnicodePropertyNameCharacter((t = e.current()))) {
            e.lastStringValue += codePointToString(t)
            e.advance()
          }
          return e.lastStringValue !== ''
        }
        function isUnicodePropertyNameCharacter(e) {
          return isControlLetter(e) || e === 95
        }
        Se.regexp_eatUnicodePropertyValue = function (e) {
          var t = 0
          e.lastStringValue = ''
          while (isUnicodePropertyValueCharacter((t = e.current()))) {
            e.lastStringValue += codePointToString(t)
            e.advance()
          }
          return e.lastStringValue !== ''
        }
        function isUnicodePropertyValueCharacter(e) {
          return isUnicodePropertyNameCharacter(e) || isDecimalDigit(e)
        }
        Se.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
          return this.regexp_eatUnicodePropertyValue(e)
        }
        Se.regexp_eatCharacterClass = function (e) {
          if (e.eat(91)) {
            e.eat(94)
            this.regexp_classRanges(e)
            if (e.eat(93)) {
              return true
            }
            e.raise('Unterminated character class')
          }
          return false
        }
        Se.regexp_classRanges = function (e) {
          while (this.regexp_eatClassAtom(e)) {
            var t = e.lastIntValue
            if (e.eat(45) && this.regexp_eatClassAtom(e)) {
              var i = e.lastIntValue
              if (e.switchU && (t === -1 || i === -1)) {
                e.raise('Invalid character class')
              }
              if (t !== -1 && i !== -1 && t > i) {
                e.raise('Range out of order in character class')
              }
            }
          }
        }
        Se.regexp_eatClassAtom = function (e) {
          var t = e.pos
          if (e.eat(92)) {
            if (this.regexp_eatClassEscape(e)) {
              return true
            }
            if (e.switchU) {
              var i = e.current()
              if (i === 99 || isOctalDigit(i)) {
                e.raise('Invalid class escape')
              }
              e.raise('Invalid escape')
            }
            e.pos = t
          }
          var s = e.current()
          if (s !== 93) {
            e.lastIntValue = s
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_eatClassEscape = function (e) {
          var t = e.pos
          if (e.eat(98)) {
            e.lastIntValue = 8
            return true
          }
          if (e.switchU && e.eat(45)) {
            e.lastIntValue = 45
            return true
          }
          if (!e.switchU && e.eat(99)) {
            if (this.regexp_eatClassControlLetter(e)) {
              return true
            }
            e.pos = t
          }
          return (
            this.regexp_eatCharacterClassEscape(e) ||
            this.regexp_eatCharacterEscape(e)
          )
        }
        Se.regexp_eatClassControlLetter = function (e) {
          var t = e.current()
          if (isDecimalDigit(t) || t === 95) {
            e.lastIntValue = t % 32
            e.advance()
            return true
          }
          return false
        }
        Se.regexp_eatHexEscapeSequence = function (e) {
          var t = e.pos
          if (e.eat(120)) {
            if (this.regexp_eatFixedHexDigits(e, 2)) {
              return true
            }
            if (e.switchU) {
              e.raise('Invalid escape')
            }
            e.pos = t
          }
          return false
        }
        Se.regexp_eatDecimalDigits = function (e) {
          var t = e.pos
          var i = 0
          e.lastIntValue = 0
          while (isDecimalDigit((i = e.current()))) {
            e.lastIntValue = 10 * e.lastIntValue + (i - 48)
            e.advance()
          }
          return e.pos !== t
        }
        function isDecimalDigit(e) {
          return e >= 48 && e <= 57
        }
        Se.regexp_eatHexDigits = function (e) {
          var t = e.pos
          var i = 0
          e.lastIntValue = 0
          while (isHexDigit((i = e.current()))) {
            e.lastIntValue = 16 * e.lastIntValue + hexToInt(i)
            e.advance()
          }
          return e.pos !== t
        }
        function isHexDigit(e) {
          return (
            (e >= 48 && e <= 57) ||
            (e >= 65 && e <= 70) ||
            (e >= 97 && e <= 102)
          )
        }
        function hexToInt(e) {
          if (e >= 65 && e <= 70) {
            return 10 + (e - 65)
          }
          if (e >= 97 && e <= 102) {
            return 10 + (e - 97)
          }
          return e - 48
        }
        Se.regexp_eatLegacyOctalEscapeSequence = function (e) {
          if (this.regexp_eatOctalDigit(e)) {
            var t = e.lastIntValue
            if (this.regexp_eatOctalDigit(e)) {
              var i = e.lastIntValue
              if (t <= 3 && this.regexp_eatOctalDigit(e)) {
                e.lastIntValue = t * 64 + i * 8 + e.lastIntValue
              } else {
                e.lastIntValue = t * 8 + i
              }
            } else {
              e.lastIntValue = t
            }
            return true
          }
          return false
        }
        Se.regexp_eatOctalDigit = function (e) {
          var t = e.current()
          if (isOctalDigit(t)) {
            e.lastIntValue = t - 48
            e.advance()
            return true
          }
          e.lastIntValue = 0
          return false
        }
        function isOctalDigit(e) {
          return e >= 48 && e <= 55
        }
        Se.regexp_eatFixedHexDigits = function (e, t) {
          var i = e.pos
          e.lastIntValue = 0
          for (var s = 0; s < t; ++s) {
            var r = e.current()
            if (!isHexDigit(r)) {
              e.pos = i
              return false
            }
            e.lastIntValue = 16 * e.lastIntValue + hexToInt(r)
            e.advance()
          }
          return true
        }
        var Ee = function Token(e) {
          this.type = e.type
          this.value = e.value
          this.start = e.start
          this.end = e.end
          if (e.options.locations) {
            this.loc = new C(e, e.startLoc, e.endLoc)
          }
          if (e.options.ranges) {
            this.range = [e.start, e.end]
          }
        }
        var Ie = j.prototype
        Ie.next = function (e) {
          if (!e && this.type.keyword && this.containsEsc) {
            this.raiseRecoverable(
              this.start,
              'Escape sequence in keyword ' + this.type.keyword
            )
          }
          if (this.options.onToken) {
            this.options.onToken(new Ee(this))
          }
          this.lastTokEnd = this.end
          this.lastTokStart = this.start
          this.lastTokEndLoc = this.endLoc
          this.lastTokStartLoc = this.startLoc
          this.nextToken()
        }
        Ie.getToken = function () {
          this.next()
          return new Ee(this)
        }
        if (typeof Symbol !== 'undefined') {
          Ie[Symbol.iterator] = function () {
            var e = this
            return {
              next: function () {
                var t = e.getToken()
                return { done: t.type === m.eof, value: t }
              },
            }
          }
        }
        Ie.nextToken = function () {
          var e = this.curContext()
          if (!e || !e.preserveSpace) {
            this.skipSpace()
          }
          this.start = this.pos
          if (this.options.locations) {
            this.startLoc = this.curPosition()
          }
          if (this.pos >= this.input.length) {
            return this.finishToken(m.eof)
          }
          if (e.override) {
            return e.override(this)
          } else {
            this.readToken(this.fullCharCodeAtPos())
          }
        }
        Ie.readToken = function (e) {
          if (isIdentifierStart(e, this.options.ecmaVersion >= 6) || e === 92) {
            return this.readWord()
          }
          return this.getTokenFromCode(e)
        }
        Ie.fullCharCodeAtPos = function () {
          var e = this.input.charCodeAt(this.pos)
          if (e <= 55295 || e >= 56320) {
            return e
          }
          var t = this.input.charCodeAt(this.pos + 1)
          return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888
        }
        Ie.skipBlockComment = function () {
          var e = this.options.onComment && this.curPosition()
          var t = this.pos,
            i = this.input.indexOf('*/', (this.pos += 2))
          if (i === -1) {
            this.raise(this.pos - 2, 'Unterminated comment')
          }
          this.pos = i + 2
          if (this.options.locations) {
            x.lastIndex = t
            var s
            while ((s = x.exec(this.input)) && s.index < this.pos) {
              ++this.curLine
              this.lineStart = s.index + s[0].length
            }
          }
          if (this.options.onComment) {
            this.options.onComment(
              true,
              this.input.slice(t + 2, i),
              t,
              this.pos,
              e,
              this.curPosition()
            )
          }
        }
        Ie.skipLineComment = function (e) {
          var t = this.pos
          var i = this.options.onComment && this.curPosition()
          var s = this.input.charCodeAt((this.pos += e))
          while (this.pos < this.input.length && !isNewLine(s)) {
            s = this.input.charCodeAt(++this.pos)
          }
          if (this.options.onComment) {
            this.options.onComment(
              false,
              this.input.slice(t + e, this.pos),
              t,
              this.pos,
              i,
              this.curPosition()
            )
          }
        }
        Ie.skipSpace = function () {
          e: while (this.pos < this.input.length) {
            var e = this.input.charCodeAt(this.pos)
            switch (e) {
              case 32:
              case 160:
                ++this.pos
                break
              case 13:
                if (this.input.charCodeAt(this.pos + 1) === 10) {
                  ++this.pos
                }
              case 10:
              case 8232:
              case 8233:
                ++this.pos
                if (this.options.locations) {
                  ++this.curLine
                  this.lineStart = this.pos
                }
                break
              case 47:
                switch (this.input.charCodeAt(this.pos + 1)) {
                  case 42:
                    this.skipBlockComment()
                    break
                  case 47:
                    this.skipLineComment(2)
                    break
                  default:
                    break e
                }
                break
              default:
                if (
                  (e > 8 && e < 14) ||
                  (e >= 5760 && v.test(String.fromCharCode(e)))
                ) {
                  ++this.pos
                } else {
                  break e
                }
            }
          }
        }
        Ie.finishToken = function (e, t) {
          this.end = this.pos
          if (this.options.locations) {
            this.endLoc = this.curPosition()
          }
          var i = this.type
          this.type = e
          this.value = t
          this.updateContext(i)
        }
        Ie.readToken_dot = function () {
          var e = this.input.charCodeAt(this.pos + 1)
          if (e >= 48 && e <= 57) {
            return this.readNumber(true)
          }
          var t = this.input.charCodeAt(this.pos + 2)
          if (this.options.ecmaVersion >= 6 && e === 46 && t === 46) {
            this.pos += 3
            return this.finishToken(m.ellipsis)
          } else {
            ++this.pos
            return this.finishToken(m.dot)
          }
        }
        Ie.readToken_slash = function () {
          var e = this.input.charCodeAt(this.pos + 1)
          if (this.exprAllowed) {
            ++this.pos
            return this.readRegexp()
          }
          if (e === 61) {
            return this.finishOp(m.assign, 2)
          }
          return this.finishOp(m.slash, 1)
        }
        Ie.readToken_mult_modulo_exp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1)
          var i = 1
          var s = e === 42 ? m.star : m.modulo
          if (this.options.ecmaVersion >= 7 && e === 42 && t === 42) {
            ++i
            s = m.starstar
            t = this.input.charCodeAt(this.pos + 2)
          }
          if (t === 61) {
            return this.finishOp(m.assign, i + 1)
          }
          return this.finishOp(s, i)
        }
        Ie.readToken_pipe_amp = function (e) {
          var t = this.input.charCodeAt(this.pos + 1)
          if (t === e) {
            if (this.options.ecmaVersion >= 12) {
              var i = this.input.charCodeAt(this.pos + 2)
              if (i === 61) {
                return this.finishOp(m.assign, 3)
              }
            }
            return this.finishOp(e === 124 ? m.logicalOR : m.logicalAND, 2)
          }
          if (t === 61) {
            return this.finishOp(m.assign, 2)
          }
          return this.finishOp(e === 124 ? m.bitwiseOR : m.bitwiseAND, 1)
        }
        Ie.readToken_caret = function () {
          var e = this.input.charCodeAt(this.pos + 1)
          if (e === 61) {
            return this.finishOp(m.assign, 2)
          }
          return this.finishOp(m.bitwiseXOR, 1)
        }
        Ie.readToken_plus_min = function (e) {
          var t = this.input.charCodeAt(this.pos + 1)
          if (t === e) {
            if (
              t === 45 &&
              !this.inModule &&
              this.input.charCodeAt(this.pos + 2) === 62 &&
              (this.lastTokEnd === 0 ||
                g.test(this.input.slice(this.lastTokEnd, this.pos)))
            ) {
              this.skipLineComment(3)
              this.skipSpace()
              return this.nextToken()
            }
            return this.finishOp(m.incDec, 2)
          }
          if (t === 61) {
            return this.finishOp(m.assign, 2)
          }
          return this.finishOp(m.plusMin, 1)
        }
        Ie.readToken_lt_gt = function (e) {
          var t = this.input.charCodeAt(this.pos + 1)
          var i = 1
          if (t === e) {
            i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2
            if (this.input.charCodeAt(this.pos + i) === 61) {
              return this.finishOp(m.assign, i + 1)
            }
            return this.finishOp(m.bitShift, i)
          }
          if (
            t === 33 &&
            e === 60 &&
            !this.inModule &&
            this.input.charCodeAt(this.pos + 2) === 45 &&
            this.input.charCodeAt(this.pos + 3) === 45
          ) {
            this.skipLineComment(4)
            this.skipSpace()
            return this.nextToken()
          }
          if (t === 61) {
            i = 2
          }
          return this.finishOp(m.relational, i)
        }
        Ie.readToken_eq_excl = function (e) {
          var t = this.input.charCodeAt(this.pos + 1)
          if (t === 61) {
            return this.finishOp(
              m.equality,
              this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
            )
          }
          if (e === 61 && t === 62 && this.options.ecmaVersion >= 6) {
            this.pos += 2
            return this.finishToken(m.arrow)
          }
          return this.finishOp(e === 61 ? m.eq : m.prefix, 1)
        }
        Ie.readToken_question = function () {
          var e = this.options.ecmaVersion
          if (e >= 11) {
            var t = this.input.charCodeAt(this.pos + 1)
            if (t === 46) {
              var i = this.input.charCodeAt(this.pos + 2)
              if (i < 48 || i > 57) {
                return this.finishOp(m.questionDot, 2)
              }
            }
            if (t === 63) {
              if (e >= 12) {
                var s = this.input.charCodeAt(this.pos + 2)
                if (s === 61) {
                  return this.finishOp(m.assign, 3)
                }
              }
              return this.finishOp(m.coalesce, 2)
            }
          }
          return this.finishOp(m.question, 1)
        }
        Ie.readToken_numberSign = function () {
          var e = this.options.ecmaVersion
          var t = 35
          if (e >= 13) {
            ++this.pos
            t = this.fullCharCodeAtPos()
            if (isIdentifierStart(t, true) || t === 92) {
              return this.finishToken(m.privateId, this.readWord1())
            }
          }
          this.raise(
            this.pos,
            "Unexpected character '" + codePointToString$1(t) + "'"
          )
        }
        Ie.getTokenFromCode = function (e) {
          switch (e) {
            case 46:
              return this.readToken_dot()
            case 40:
              ++this.pos
              return this.finishToken(m.parenL)
            case 41:
              ++this.pos
              return this.finishToken(m.parenR)
            case 59:
              ++this.pos
              return this.finishToken(m.semi)
            case 44:
              ++this.pos
              return this.finishToken(m.comma)
            case 91:
              ++this.pos
              return this.finishToken(m.bracketL)
            case 93:
              ++this.pos
              return this.finishToken(m.bracketR)
            case 123:
              ++this.pos
              return this.finishToken(m.braceL)
            case 125:
              ++this.pos
              return this.finishToken(m.braceR)
            case 58:
              ++this.pos
              return this.finishToken(m.colon)
            case 96:
              if (this.options.ecmaVersion < 6) {
                break
              }
              ++this.pos
              return this.finishToken(m.backQuote)
            case 48:
              var t = this.input.charCodeAt(this.pos + 1)
              if (t === 120 || t === 88) {
                return this.readRadixNumber(16)
              }
              if (this.options.ecmaVersion >= 6) {
                if (t === 111 || t === 79) {
                  return this.readRadixNumber(8)
                }
                if (t === 98 || t === 66) {
                  return this.readRadixNumber(2)
                }
              }
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return this.readNumber(false)
            case 34:
            case 39:
              return this.readString(e)
            case 47:
              return this.readToken_slash()
            case 37:
            case 42:
              return this.readToken_mult_modulo_exp(e)
            case 124:
            case 38:
              return this.readToken_pipe_amp(e)
            case 94:
              return this.readToken_caret()
            case 43:
            case 45:
              return this.readToken_plus_min(e)
            case 60:
            case 62:
              return this.readToken_lt_gt(e)
            case 61:
            case 33:
              return this.readToken_eq_excl(e)
            case 63:
              return this.readToken_question()
            case 126:
              return this.finishOp(m.prefix, 1)
            case 35:
              return this.readToken_numberSign()
          }
          this.raise(
            this.pos,
            "Unexpected character '" + codePointToString$1(e) + "'"
          )
        }
        Ie.finishOp = function (e, t) {
          var i = this.input.slice(this.pos, this.pos + t)
          this.pos += t
          return this.finishToken(e, i)
        }
        Ie.readRegexp = function () {
          var e,
            t,
            i = this.pos
          for (;;) {
            if (this.pos >= this.input.length) {
              this.raise(i, 'Unterminated regular expression')
            }
            var s = this.input.charAt(this.pos)
            if (g.test(s)) {
              this.raise(i, 'Unterminated regular expression')
            }
            if (!e) {
              if (s === '[') {
                t = true
              } else if (s === ']' && t) {
                t = false
              } else if (s === '/' && !t) {
                break
              }
              e = s === '\\'
            } else {
              e = false
            }
            ++this.pos
          }
          var r = this.input.slice(i, this.pos)
          ++this.pos
          var a = this.pos
          var n = this.readWord1()
          if (this.containsEsc) {
            this.unexpected(a)
          }
          var o = this.regexpState || (this.regexpState = new Ce(this))
          o.reset(i, r, n)
          this.validateRegExpFlags(o)
          this.validateRegExpPattern(o)
          var h = null
          try {
            h = new RegExp(r, n)
          } catch (e) {}
          return this.finishToken(m.regexp, { pattern: r, flags: n, value: h })
        }
        Ie.readInt = function (e, t, i) {
          var s = this.options.ecmaVersion >= 12 && t === undefined
          var r = i && this.input.charCodeAt(this.pos) === 48
          var a = this.pos,
            n = 0,
            o = 0
          for (
            var h = 0, p = t == null ? Infinity : t;
            h < p;
            ++h, ++this.pos
          ) {
            var c = this.input.charCodeAt(this.pos),
              l = void 0
            if (s && c === 95) {
              if (r) {
                this.raiseRecoverable(
                  this.pos,
                  'Numeric separator is not allowed in legacy octal numeric literals'
                )
              }
              if (o === 95) {
                this.raiseRecoverable(
                  this.pos,
                  'Numeric separator must be exactly one underscore'
                )
              }
              if (h === 0) {
                this.raiseRecoverable(
                  this.pos,
                  'Numeric separator is not allowed at the first of digits'
                )
              }
              o = c
              continue
            }
            if (c >= 97) {
              l = c - 97 + 10
            } else if (c >= 65) {
              l = c - 65 + 10
            } else if (c >= 48 && c <= 57) {
              l = c - 48
            } else {
              l = Infinity
            }
            if (l >= e) {
              break
            }
            o = c
            n = n * e + l
          }
          if (s && o === 95) {
            this.raiseRecoverable(
              this.pos - 1,
              'Numeric separator is not allowed at the last of digits'
            )
          }
          if (this.pos === a || (t != null && this.pos - a !== t)) {
            return null
          }
          return n
        }
        function stringToNumber(e, t) {
          if (t) {
            return parseInt(e, 8)
          }
          return parseFloat(e.replace(/_/g, ''))
        }
        function stringToBigInt(e) {
          if (typeof BigInt !== 'function') {
            return null
          }
          return BigInt(e.replace(/_/g, ''))
        }
        Ie.readRadixNumber = function (e) {
          var t = this.pos
          this.pos += 2
          var i = this.readInt(e)
          if (i == null) {
            this.raise(this.start + 2, 'Expected number in radix ' + e)
          }
          if (
            this.options.ecmaVersion >= 11 &&
            this.input.charCodeAt(this.pos) === 110
          ) {
            i = stringToBigInt(this.input.slice(t, this.pos))
            ++this.pos
          } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
            this.raise(this.pos, 'Identifier directly after number')
          }
          return this.finishToken(m.num, i)
        }
        Ie.readNumber = function (e) {
          var t = this.pos
          if (!e && this.readInt(10, undefined, true) === null) {
            this.raise(t, 'Invalid number')
          }
          var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48
          if (i && this.strict) {
            this.raise(t, 'Invalid number')
          }
          var s = this.input.charCodeAt(this.pos)
          if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
            var r = stringToBigInt(this.input.slice(t, this.pos))
            ++this.pos
            if (isIdentifierStart(this.fullCharCodeAtPos())) {
              this.raise(this.pos, 'Identifier directly after number')
            }
            return this.finishToken(m.num, r)
          }
          if (i && /[89]/.test(this.input.slice(t, this.pos))) {
            i = false
          }
          if (s === 46 && !i) {
            ++this.pos
            this.readInt(10)
            s = this.input.charCodeAt(this.pos)
          }
          if ((s === 69 || s === 101) && !i) {
            s = this.input.charCodeAt(++this.pos)
            if (s === 43 || s === 45) {
              ++this.pos
            }
            if (this.readInt(10) === null) {
              this.raise(t, 'Invalid number')
            }
          }
          if (isIdentifierStart(this.fullCharCodeAtPos())) {
            this.raise(this.pos, 'Identifier directly after number')
          }
          var a = stringToNumber(this.input.slice(t, this.pos), i)
          return this.finishToken(m.num, a)
        }
        Ie.readCodePoint = function () {
          var e = this.input.charCodeAt(this.pos),
            t
          if (e === 123) {
            if (this.options.ecmaVersion < 6) {
              this.unexpected()
            }
            var i = ++this.pos
            t = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)
            ++this.pos
            if (t > 1114111) {
              this.invalidStringToken(i, 'Code point out of bounds')
            }
          } else {
            t = this.readHexChar(4)
          }
          return t
        }
        function codePointToString$1(e) {
          if (e <= 65535) {
            return String.fromCharCode(e)
          }
          e -= 65536
          return String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320)
        }
        Ie.readString = function (e) {
          var t = '',
            i = ++this.pos
          for (;;) {
            if (this.pos >= this.input.length) {
              this.raise(this.start, 'Unterminated string constant')
            }
            var s = this.input.charCodeAt(this.pos)
            if (s === e) {
              break
            }
            if (s === 92) {
              t += this.input.slice(i, this.pos)
              t += this.readEscapedChar(false)
              i = this.pos
            } else if (s === 8232 || s === 8233) {
              if (this.options.ecmaVersion < 10) {
                this.raise(this.start, 'Unterminated string constant')
              }
              ++this.pos
              if (this.options.locations) {
                this.curLine++
                this.lineStart = this.pos
              }
            } else {
              if (isNewLine(s)) {
                this.raise(this.start, 'Unterminated string constant')
              }
              ++this.pos
            }
          }
          t += this.input.slice(i, this.pos++)
          return this.finishToken(m.string, t)
        }
        var Ae = {}
        Ie.tryReadTemplateToken = function () {
          this.inTemplateElement = true
          try {
            this.readTmplToken()
          } catch (e) {
            if (e === Ae) {
              this.readInvalidTemplateToken()
            } else {
              throw e
            }
          }
          this.inTemplateElement = false
        }
        Ie.invalidStringToken = function (e, t) {
          if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
            throw Ae
          } else {
            this.raise(e, t)
          }
        }
        Ie.readTmplToken = function () {
          var e = '',
            t = this.pos
          for (;;) {
            if (this.pos >= this.input.length) {
              this.raise(this.start, 'Unterminated template')
            }
            var i = this.input.charCodeAt(this.pos)
            if (
              i === 96 ||
              (i === 36 && this.input.charCodeAt(this.pos + 1) === 123)
            ) {
              if (
                this.pos === this.start &&
                (this.type === m.template || this.type === m.invalidTemplate)
              ) {
                if (i === 36) {
                  this.pos += 2
                  return this.finishToken(m.dollarBraceL)
                } else {
                  ++this.pos
                  return this.finishToken(m.backQuote)
                }
              }
              e += this.input.slice(t, this.pos)
              return this.finishToken(m.template, e)
            }
            if (i === 92) {
              e += this.input.slice(t, this.pos)
              e += this.readEscapedChar(true)
              t = this.pos
            } else if (isNewLine(i)) {
              e += this.input.slice(t, this.pos)
              ++this.pos
              switch (i) {
                case 13:
                  if (this.input.charCodeAt(this.pos) === 10) {
                    ++this.pos
                  }
                case 10:
                  e += '\n'
                  break
                default:
                  e += String.fromCharCode(i)
                  break
              }
              if (this.options.locations) {
                ++this.curLine
                this.lineStart = this.pos
              }
              t = this.pos
            } else {
              ++this.pos
            }
          }
        }
        Ie.readInvalidTemplateToken = function () {
          for (; this.pos < this.input.length; this.pos++) {
            switch (this.input[this.pos]) {
              case '\\':
                ++this.pos
                break
              case '$':
                if (this.input[this.pos + 1] !== '{') {
                  break
                }
              case '`':
                return this.finishToken(
                  m.invalidTemplate,
                  this.input.slice(this.start, this.pos)
                )
            }
          }
          this.raise(this.start, 'Unterminated template')
        }
        Ie.readEscapedChar = function (e) {
          var t = this.input.charCodeAt(++this.pos)
          ++this.pos
          switch (t) {
            case 110:
              return '\n'
            case 114:
              return '\r'
            case 120:
              return String.fromCharCode(this.readHexChar(2))
            case 117:
              return codePointToString$1(this.readCodePoint())
            case 116:
              return '\t'
            case 98:
              return '\b'
            case 118:
              return '\v'
            case 102:
              return '\f'
            case 13:
              if (this.input.charCodeAt(this.pos) === 10) {
                ++this.pos
              }
            case 10:
              if (this.options.locations) {
                this.lineStart = this.pos
                ++this.curLine
              }
              return ''
            case 56:
            case 57:
              if (this.strict) {
                this.invalidStringToken(this.pos - 1, 'Invalid escape sequence')
              }
              if (e) {
                var i = this.pos - 1
                this.invalidStringToken(
                  i,
                  'Invalid escape sequence in template string'
                )
                return null
              }
            default:
              if (t >= 48 && t <= 55) {
                var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0]
                var r = parseInt(s, 8)
                if (r > 255) {
                  s = s.slice(0, -1)
                  r = parseInt(s, 8)
                }
                this.pos += s.length - 1
                t = this.input.charCodeAt(this.pos)
                if ((s !== '0' || t === 56 || t === 57) && (this.strict || e)) {
                  this.invalidStringToken(
                    this.pos - 1 - s.length,
                    e
                      ? 'Octal literal in template string'
                      : 'Octal literal in strict mode'
                  )
                }
                return String.fromCharCode(r)
              }
              if (isNewLine(t)) {
                return ''
              }
              return String.fromCharCode(t)
          }
        }
        Ie.readHexChar = function (e) {
          var t = this.pos
          var i = this.readInt(16, e)
          if (i === null) {
            this.invalidStringToken(t, 'Bad character escape sequence')
          }
          return i
        }
        Ie.readWord1 = function () {
          this.containsEsc = false
          var e = '',
            t = true,
            i = this.pos
          var s = this.options.ecmaVersion >= 6
          while (this.pos < this.input.length) {
            var r = this.fullCharCodeAtPos()
            if (isIdentifierChar(r, s)) {
              this.pos += r <= 65535 ? 1 : 2
            } else if (r === 92) {
              this.containsEsc = true
              e += this.input.slice(i, this.pos)
              var a = this.pos
              if (this.input.charCodeAt(++this.pos) !== 117) {
                this.invalidStringToken(
                  this.pos,
                  'Expecting Unicode escape sequence \\uXXXX'
                )
              }
              ++this.pos
              var n = this.readCodePoint()
              if (!(t ? isIdentifierStart : isIdentifierChar)(n, s)) {
                this.invalidStringToken(a, 'Invalid Unicode escape')
              }
              e += codePointToString$1(n)
              i = this.pos
            } else {
              break
            }
            t = false
          }
          return e + this.input.slice(i, this.pos)
        }
        Ie.readWord = function () {
          var e = this.readWord1()
          var t = m.name
          if (this.keywords.test(e)) {
            t = d[e]
          }
          return this.finishToken(t, e)
        }
        var Pe = '8.5.0'
        j.acorn = {
          Parser: j,
          version: Pe,
          defaultOptions: E,
          Position: S,
          SourceLocation: C,
          getLineInfo: getLineInfo,
          Node: ce,
          TokenType: l,
          tokTypes: m,
          keywordTypes: d,
          TokContext: ie,
          tokContexts: se,
          isIdentifierChar: isIdentifierChar,
          isIdentifierStart: isIdentifierStart,
          Token: Ee,
          isNewLine: isNewLine,
          lineBreak: g,
          lineBreakG: x,
          nonASCIIwhitespace: v,
        }
        function parse(e, t) {
          return j.parse(e, t)
        }
        function parseExpressionAt(e, t, i) {
          return j.parseExpressionAt(e, t, i)
        }
        function tokenizer(e, t) {
          return j.tokenizer(e, t)
        }
        e.Node = ce
        e.Parser = j
        e.Position = S
        e.SourceLocation = C
        e.TokContext = ie
        e.Token = Ee
        e.TokenType = l
        e.defaultOptions = E
        e.getLineInfo = getLineInfo
        e.isIdentifierChar = isIdentifierChar
        e.isIdentifierStart = isIdentifierStart
        e.isNewLine = isNewLine
        e.keywordTypes = d
        e.lineBreak = g
        e.lineBreakG = x
        e.nonASCIIwhitespace = v
        e.parse = parse
        e.parseExpressionAt = parseExpressionAt
        e.tokContexts = se
        e.tokTypes = m
        e.tokenizer = tokenizer
        e.version = Pe
        Object.defineProperty(e, '__esModule', { value: true })
      })
    },
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var t = {}
  e[536](0, t)
  module.exports = t
})()
