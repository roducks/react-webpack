import React, { useEffect, useState, type PropsWithChildren } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { Routing } from "src/app/routing"
import { authCheck } from "../functions"
import { useJwt } from "react-jwt"

export const Auth = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState(false)
  const [goTo, setGoTo] = useState(false)
  const LOGIN_URL = process.env["AUTH_LOGIN_URL"] ?? Routing.Login
  const token = localStorage.getItem("APP_TOKEN") ?? null
  const { decodedToken } = useJwt(token ?? "")

  useEffect(() => {
    if (authCheck() && token !== null) {
      if (decodedToken !== null) {
        const user = decodedToken?.data
        dispatch({
          type: "user",
          payload: {
            id: 0,
            username: "none",
            firstname: user.first_name,
            lastname: user.last_name,
          },
        })
        setDisplay(true)
      }
    } else {
      setGoTo(true)
    }
  }, [token, decodedToken, dispatch])

  return (
    <>
      {goTo && <Navigate to={LOGIN_URL} />}
      {display && children}
    </>
  )
}
