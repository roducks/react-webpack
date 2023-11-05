import React from "react"
import { Navbar } from "../Navbar"

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
