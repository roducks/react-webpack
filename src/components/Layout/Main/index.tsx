import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Auth } from "src/views/Auth/Auth"
import { Access } from "src/views/Access"
import { Navbar } from "../Navbar"
import { Timeout, SessionTimeout, Loader } from "@roducks"
import { Routing } from "src/app/routing"

export const Main = ({ view, children }: MainProps) => {
  const navigate = useNavigate()
  const session = useSelector((state: UserSessionState) => state.session)
  const loader = useSelector((state: LoaderState) => state.loader)

  return (
    <>
      <Auth>
        <Access view={view}>
          <Navbar />
          {children}
          <Timeout
            minutes={60}
            onIdle={() => {
              navigate(Routing.Logout)
            }}
          />
          <SessionTimeout
            display={session}
            onTimeout={() => {
              navigate(Routing.Logout)
            }}
          />
        </Access>
      </Auth>
      <Loader display={loader ?? false} />
    </>
  )
}
