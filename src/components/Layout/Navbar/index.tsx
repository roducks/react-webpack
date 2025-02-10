import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Icon } from "src/components/../libs/roducks/components/Icon"
import { Logo } from "src/libs/roducks/components/Logo"
import { Menu } from "../Menu"

export const Navbar = () => {
  const user = useSelector((state: UserState) => state.user)
  const [displayMenu, setDisplayMenu] = useState<boolean>(false)

  return (
    <>
      <div className="roducks__navbar">
        <div className="roducks__navbar__container">
          <div className="roducks__navbar__inner roducks__container roducks__row roducks__row--aligned-center roducks__row--spaced">
            <div className="roducks__navbar__logo">
              <a href="/" className="roducks__navbar__item">
                <Logo />{" "}
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setDisplayMenu((prevState) => !prevState)
                }}
              >
                <span>
                  {user.firstname} {user.lastname}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Menu display={displayMenu} />
      <div className="roducks__navbar__item roducks__navbar__sep"></div>
    </>
  )
}
