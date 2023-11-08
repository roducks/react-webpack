import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Login } from "../views/Login"
import { About } from "../views/About"
import { Routing } from "./routing"

export const App = () => {
  return (
    <Routes>
      <Route path={Routing.Home} element={<Home />} />
      <Route path={Routing.Login} element={<Login />} />
      <Route path={Routing.About} element={<About />} />
    </Routes>
  )
}
