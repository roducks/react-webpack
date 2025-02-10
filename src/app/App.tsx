import React from "react"
import { Routes, Route } from "react-router-dom"
import { Routing } from "./routing"
import { HomeView } from "src/views/Home"
import { LoginView } from "src/views/Auth/Login"
import { LogoutView } from "src/views/Auth/Logout"

export const App = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path={Routing.Home} element={<HomeView />} />
      <Route path={Routing.Login} element={<LoginView />} />
      <Route path={Routing.Logout} element={<LogoutView />} />
      {/* App */}
    </Routes>
  )
}
