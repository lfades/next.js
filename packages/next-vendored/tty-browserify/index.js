;(function () {
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var e = {}
  !(function () {
    var t = e
    t.isatty = function () {
      return false
    }
    function ReadStream() {
      throw new Error('tty.ReadStream is not implemented')
    }
    t.ReadStream = ReadStream
    function WriteStream() {
      throw new Error('tty.WriteStream is not implemented')
    }
    t.WriteStream = WriteStream
  })()
  module.exports = e
})()
