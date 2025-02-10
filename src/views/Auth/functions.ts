import Cookies from "js-cookie"
import CryptoJS from "crypto-js"

const encrypt = (key: StringNull, value: StringNull) => {
  if (key === null || value === null) {
    return null
  }

  return CryptoJS.AES.encrypt(key, value).toString()
}

const decrypt = (value: string, secret: StringNull) => {
  if (secret === null) {
    return ""
  }

  const bytes = CryptoJS.AES.decrypt(value, secret)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export const authCookie = () => {
  return Cookies.get("APP_AUTH")
}

export const removeAuthCookie = () => {
  return Cookies.remove("APP_AUTH")
}

export const isAuth = () => {
  return authCookie() !== undefined
}

export const setAuth = () => {
  const enc = encrypt(
    process.env["REACT_APP_API_KEY"] ?? null,
    process.env["REACT_APP_API_SECRET"] ?? null
  )

  if (enc !== null) Cookies.set("APP_AUTH", enc)
}

export const authCheck = () => {
  if (isAuth()) {
    const originalText = decrypt(
      authCookie(),
      process.env["REACT_APP_API_SECRET"] ?? null
    )

    return originalText === process.env["REACT_APP_API_KEY"]
  }

  return false
}
