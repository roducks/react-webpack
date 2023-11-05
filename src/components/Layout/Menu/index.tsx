import React from "react"
import { Routing } from "../../../app/routing"
interface MenuProps {
  display: boolean
}

export const Menu = ({ display = false }: MenuProps) => {
  return (
    <>
      {display && (
        <div className="roducks__container roducks__menu">
          <div className="roducks__menu__container">
            <ul>
              <li>
                <a href="/about">ITEM</a>
              </li>
              <li>
                <a href="/about">ITEM</a>
              </li>
              <li>
                <a href="/about">ITEM</a>
              </li>
              <li className="separator"></li>
              <li>
                <a href={Routing.Logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
