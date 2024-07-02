import React from "react"
import { PADDING } from "../Roducks"
import "./style.scss"

export const Card = ({ shadow = false, children }: CardsProps) => {
  return (
    <div className={`${PADDING._05rem} roducks__large`}>
      <div
        className={`roducks__card roducks__card--icon-active${
          shadow ? " roducks__card--shadow" : ""
        }`}
      >
        <div className={`${PADDING._1rem} roducks__large roducks__card--inner`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const CardHeader = ({ children }: RoducksComponentChildren) => {
  return <div className="roducks__card--header">{children}</div>
}

export const CardFooter = ({ children }: RoducksComponentChildren) => {
  return <div className="roducks__card--footer">{children}</div>
}
