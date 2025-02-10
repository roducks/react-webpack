import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { Routing } from "src/app/routing"
import { removeAuthCookie } from "../functions"

export const LogoutView = () => {
  const [goTo, setGoTo] = useState(false)
  const REDIRECT_AFTER_LOGOUT =
    process.env["AUTH_REDIRECT_AFTER_LOGOUT"] ?? Routing.Login

  useEffect(() => {
    removeAuthCookie()
    setGoTo(true)
  }, [])

  return <>{goTo && <Navigate to={REDIRECT_AFTER_LOGOUT} />}</>
}
