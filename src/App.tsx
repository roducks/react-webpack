import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./views/HomePage"
import AboutMe from "./views/AboutMe"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  )
}

export default App
