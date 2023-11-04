import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { About } from "../views/About"
import { Routing } from "./routing"

export const App = () => {
  return (
    <Routes>
      <Route path={Routing.Home} element={<Home />} />
      <Route path={Routing.About} element={<About />} />
    </Routes>
  )
}
