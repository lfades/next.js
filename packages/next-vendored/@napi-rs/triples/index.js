;(() => {
  var a = {
    534: (a) => {
      a.exports.platformArchTriples = {
        darwin: {
          arm64: [
            {
              platform: 'darwin',
              arch: 'arm64',
              abi: null,
              platformArchABI: 'darwin-arm64',
              raw: 'aarch64-apple-darwin',
            },
          ],
          x64: [
            {
              platform: 'darwin',
              arch: 'x64',
              abi: null,
              platformArchABI: 'darwin-x64',
              raw: 'x86_64-apple-darwin',
            },
          ],
        },
        ios: {
          arm64: [
            {
              platform: 'ios',
              arch: 'arm64',
              abi: null,
              platformArchABI: 'ios-arm64',
              raw: 'aarch64-apple-ios',
            },
          ],
          x64: [
            {
              platform: 'ios',
              arch: 'x64',
              abi: null,
              platformArchABI: 'ios-x64',
              raw: 'x86_64-apple-ios',
            },
          ],
        },
        android: {
          arm64: [
            {
              platform: 'android',
              arch: 'arm64',
              abi: null,
              platformArchABI: 'android-arm64',
              raw: 'aarch64-linux-android',
            },
          ],
          arm: [
            {
              platform: 'android',
              arch: 'arm',
              abi: 'eabi',
              platformArchABI: 'android-arm-eabi',
              raw: 'armv7-linux-androideabi',
            },
          ],
          ia32: [
            {
              platform: 'android',
              arch: 'ia32',
              abi: null,
              platformArchABI: 'android-ia32',
              raw: 'i686-linux-android',
            },
          ],
          x64: [
            {
              platform: 'android',
              arch: 'x64',
              abi: null,
              platformArchABI: 'android-x64',
              raw: 'x86_64-linux-android',
            },
          ],
        },
        win32: {
          arm64: [
            {
              platform: 'win32',
              arch: 'arm64',
              abi: 'msvc',
              platformArchABI: 'win32-arm64-msvc',
              raw: 'aarch64-pc-windows-msvc',
            },
          ],
          ia32: [
            {
              platform: 'win32',
              arch: 'ia32',
              abi: 'gnu',
              platformArchABI: 'win32-ia32-gnu',
              raw: 'i686-pc-windows-gnu',
            },
            {
              platform: 'win32',
              arch: 'ia32',
              abi: 'msvc',
              platformArchABI: 'win32-ia32-msvc',
              raw: 'i686-pc-windows-msvc',
            },
          ],
          x64: [
            {
              platform: 'win32',
              arch: 'x64',
              abi: 'gnu',
              platformArchABI: 'win32-x64-gnu',
              raw: 'x86_64-pc-windows-gnu',
            },
            {
              platform: 'win32',
              arch: 'x64',
              abi: 'msvc',
              platformArchABI: 'win32-x64-msvc',
              raw: 'x86_64-pc-windows-msvc',
            },
          ],
        },
        linux: {
          arm64: [
            {
              platform: 'linux',
              arch: 'arm64',
              abi: 'gnu',
              platformArchABI: 'linux-arm64-gnu',
              raw: 'aarch64-unknown-linux-gnu',
            },
            {
              platform: 'linux',
              arch: 'arm64',
              abi: 'musl',
              platformArchABI: 'linux-arm64-musl',
              raw: 'aarch64-unknown-linux-musl',
            },
          ],
          arm: [
            {
              platform: 'linux',
              arch: 'arm',
              abi: 'gnueabihf',
              platformArchABI: 'linux-arm-gnueabihf',
              raw: 'arm-unknown-linux-gnueabihf',
            },
            {
              platform: 'linux',
              arch: 'arm',
              abi: 'musleabihf',
              platformArchABI: 'linux-arm-musleabihf',
              raw: 'arm-unknown-linux-musleabihf',
            },
            {
              platform: 'linux',
              arch: 'arm',
              abi: 'gnueabihf',
              platformArchABI: 'linux-arm-gnueabihf',
              raw: 'armv7-unknown-linux-gnueabihf',
            },
            {
              platform: 'linux',
              arch: 'arm',
              abi: 'musleabihf',
              platformArchABI: 'linux-arm-musleabihf',
              raw: 'armv7-unknown-linux-musleabihf',
            },
          ],
          ia32: [
            {
              platform: 'linux',
              arch: 'ia32',
              abi: 'gnu',
              platformArchABI: 'linux-ia32-gnu',
              raw: 'i686-unknown-linux-gnu',
            },
            {
              platform: 'linux',
              arch: 'ia32',
              abi: 'musl',
              platformArchABI: 'linux-ia32-musl',
              raw: 'i686-unknown-linux-musl',
            },
          ],
          mips: [
            {
              platform: 'linux',
              arch: 'mips',
              abi: 'gnu',
              platformArchABI: 'linux-mips-gnu',
              raw: 'mips-unknown-linux-gnu',
            },
            {
              platform: 'linux',
              arch: 'mips',
              abi: 'musl',
              platformArchABI: 'linux-mips-musl',
              raw: 'mips-unknown-linux-musl',
            },
          ],
          mips64: [
            {
              platform: 'linux',
              arch: 'mips64',
              abi: 'gnuabi64',
              platformArchABI: 'linux-mips64-gnuabi64',
              raw: 'mips64-unknown-linux-gnuabi64',
            },
            {
              platform: 'linux',
              arch: 'mips64',
              abi: 'muslabi64',
              platformArchABI: 'linux-mips64-muslabi64',
              raw: 'mips64-unknown-linux-muslabi64',
            },
          ],
          mips64el: [
            {
              platform: 'linux',
              arch: 'mips64el',
              abi: 'gnuabi64',
              platformArchABI: 'linux-mips64el-gnuabi64',
              raw: 'mips64el-unknown-linux-gnuabi64',
            },
            {
              platform: 'linux',
              arch: 'mips64el',
              abi: 'muslabi64',
              platformArchABI: 'linux-mips64el-muslabi64',
              raw: 'mips64el-unknown-linux-muslabi64',
            },
          ],
          mipsel: [
            {
              platform: 'linux',
              arch: 'mipsel',
              abi: 'gnu',
              platformArchABI: 'linux-mipsel-gnu',
              raw: 'mipsel-unknown-linux-gnu',
            },
            {
              platform: 'linux',
              arch: 'mipsel',
              abi: 'musl',
              platformArchABI: 'linux-mipsel-musl',
              raw: 'mipsel-unknown-linux-musl',
            },
          ],
          powerpc: [
            {
              platform: 'linux',
              arch: 'powerpc',
              abi: 'gnu',
              platformArchABI: 'linux-powerpc-gnu',
              raw: 'powerpc-unknown-linux-gnu',
            },
          ],
          powerpc64: [
            {
              platform: 'linux',
              arch: 'powerpc64',
              abi: 'gnu',
              platformArchABI: 'linux-powerpc64-gnu',
              raw: 'powerpc64-unknown-linux-gnu',
            },
          ],
          powerpc64le: [
            {
              platform: 'linux',
              arch: 'powerpc64le',
              abi: 'gnu',
              platformArchABI: 'linux-powerpc64le-gnu',
              raw: 'powerpc64le-unknown-linux-gnu',
            },
          ],
          riscv64: [
            {
              platform: 'linux',
              arch: 'riscv64',
              abi: 'gnu',
              platformArchABI: 'linux-riscv64-gnu',
              raw: 'riscv64gc-unknown-linux-gnu',
            },
          ],
          s390x: [
            {
              platform: 'linux',
              arch: 's390x',
              abi: 'gnu',
              platformArchABI: 'linux-s390x-gnu',
              raw: 's390x-unknown-linux-gnu',
            },
          ],
          sparc64: [
            {
              platform: 'linux',
              arch: 'sparc64',
              abi: 'gnu',
              platformArchABI: 'linux-sparc64-gnu',
              raw: 'sparc64-unknown-linux-gnu',
            },
          ],
          x64: [
            {
              platform: 'linux',
              arch: 'x64',
              abi: 'gnu',
              platformArchABI: 'linux-x64-gnu',
              raw: 'x86_64-unknown-linux-gnu',
            },
            {
              platform: 'linux',
              arch: 'x64',
              abi: 'gnux32',
              platformArchABI: 'linux-x64-gnux32',
              raw: 'x86_64-unknown-linux-gnux32',
            },
            {
              platform: 'linux',
              arch: 'x64',
              abi: 'musl',
              platformArchABI: 'linux-x64-musl',
              raw: 'x86_64-unknown-linux-musl',
            },
          ],
        },
        freebsd: {
          ia32: [
            {
              platform: 'freebsd',
              arch: 'ia32',
              abi: null,
              platformArchABI: 'freebsd-ia32',
              raw: 'i686-unknown-freebsd',
            },
          ],
          x64: [
            {
              platform: 'freebsd',
              arch: 'x64',
              abi: null,
              platformArchABI: 'freebsd-x64',
              raw: 'x86_64-unknown-freebsd',
            },
          ],
        },
      }
    },
  }
  var r = {}
  function __nccwpck_require__(n) {
    var i = r[n]
    if (i !== undefined) {
      return i.exports
    }
    var l = (r[n] = { exports: {} })
    var u = true
    try {
      a[n](l, l.exports, __nccwpck_require__)
      u = false
    } finally {
      if (u) delete r[n]
    }
    return l.exports
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/'
  var n = __nccwpck_require__(534)
  module.exports = n
})()
