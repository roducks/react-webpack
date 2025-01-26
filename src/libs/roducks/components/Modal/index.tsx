import React from "react"
import { Icon } from "../Icon"
import "./styles.scss"

export const Modal = ({
  title = "",
  dissmisable = true,
  display,
  onClose = undefined,
  children,
}: ModalProps) => {
  return (
    <>
      {display && (
        <div className="roducks__modal">
          <div className="roducks__modal--container">
            <div className="roducks__modal--margin">
              <div className="roducks__modal--box">
                <div className="roducks__row roducks__row--aligned-center roducks__row--expanded roducks__modal--header">
                  <h3>{title}</h3>
                  {dissmisable && (
                    <a
                      href="#void"
                      onClick={(e) => {
                        e.preventDefault()
                        onClose?.()
                      }}
                    >
                      <Icon name="remove" />
                    </a>
                  )}
                </div>
                <div className="roducks__modal--content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
