import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { Routing } from "src/app/routing"
import { authCheck, setAuth } from "../functions"
import { TokenApi } from "src/api/Token"

export const LoginView = () => {
  const dispatch = useDispatch()
  const [display, setdisplay] = useState(false)
  const [goTo, setGoTo] = useState(false)
  const [email, setEmail] = useState<StringNull>(null)
  const [password, setPassword] = useState<StringNull>(null)

  const submit = () => {
    const payload = {
      email: email ?? "",
      password: password ?? "",
    }

    dispatch({ type: "loader" })
    TokenApi.get(payload)
      .then((res) => {
        setAuth()
        localStorage.setItem("APP_TOKEN", res.auth)
        setGoTo(true)
      })
      .catch((err) => {
        console.error(err)
        setEmail(null)
        setPassword(null)
      })
      .finally(() => {
        dispatch({ type: "loader" })
      })
  }

  useEffect(() => {
    if (!authCheck()) {
      setdisplay(true)
    } else {
      setGoTo(true)
    }
  }, [])

  return (
    <>
      {goTo && <Navigate to={Routing.Home} />}
      {display && (
        <form
          name="auth"
          action="/"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div>
            <input
              type="text"
              name="email"
              value={email ?? ""}
              onChange={(e) => {
                const value = e.target.value === "" ? null : e.target.value
                setEmail(value)
              }}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password ?? ""}
              onChange={(e) => {
                const value = e.target.value === "" ? null : e.target.value
                setPassword(value)
              }}
            />
          </div>
          <button type="submit" onClick={submit}>
            Log in
          </button>
        </form>
      )}
    </>
  )
}
