import React from "react"
import { Icon } from "../Icon"
import "./styles.scss"

export const Alert = ({ type, children }: AlertProps) => {
  return (
    <div className={`roducks__alert roducks__alert-${type}`}>
      <div className="roducks__row roducks__row--aligned-center">
        <div className={`roducks__alert--icon roducks__alert--icon-${type}`}>
          <Icon name={type} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
