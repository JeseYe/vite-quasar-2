import CryptoJS from 'crypto-js/crypto-js'

// The default KEY and iv are consistent with the backend, not using the backend passkey
const KEY = CryptoJS.enc.Utf8.parse('aaDJL2d9DfhLZO0z') // Key
const IV = CryptoJS.enc.Utf8.parse('412ADDSSFA342442') // Offset
/**
 * AES encryption: string key iv returns base64
 */
export function encrypt(word, keyStr, ivStr) {
  let key = KEY
  let iv = IV

  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr)
    iv = CryptoJS.enc.Utf8.parse(ivStr)
  }

  let srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  })

  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}
/**
 * AES decryption: string key iv returns base64
 *
 */
export function decrypt(word, keyStr, ivStr) {
  let key = KEY
  let iv = IV

  if (keyStr) {
    key = CryptoJS.enc.Utf8.parse(keyStr)
    iv = CryptoJS.enc.Utf8.parse(ivStr)
  }

  let base64 = CryptoJS.enc.Base64.parse(word)
  let src = CryptoJS.enc.Base64.stringify(base64)

  var decrypt = CryptoJS.AES.decrypt(src, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  })

  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}
