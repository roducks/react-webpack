import React from "react"
import { Logo } from "../Logo"
import "./styles.scss"

export const Loader = ({ display }: LoaderProps) => {
  return (
    <>
      {display && (
        <div className="roducks__loader">
          <div className="roducks__loader--icon">
            <Logo />
            <span>Loading ...</span>
          </div>
        </div>
      )}
    </>
  )
}
