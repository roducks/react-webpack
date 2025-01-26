import React, { Children, cloneElement, useState } from "react"
import "./style.scss"

export const Tabs = ({ children }: Tabs) => {
  const [active, setActive] = useState<StringNull>(null)
  return (
    <div className="roducks__tabs">
      <div className="roducks__tabs--links">
        {Children.map(children, (child, index) => {
          const el = cloneElement(child as React.ReactElement)

          return (
            <a
              href="#void"
              className={
                active !== null
                  ? active === child.props?.id ?? ""
                    ? "roducks__tabs--links-active"
                    : "roducks__tabs--links-unactive"
                  : index === 0
                  ? "roducks__tabs--links-active"
                  : "roducks__tabs--links-unactive"
              }
              onClick={(e) => {
                e.preventDefault()
                setActive(el.props.id)
              }}
            >
              {el.props.title}
            </a>
          )
        })}
      </div>
      {Children.map(children, (child, index) => {
        const el = cloneElement(child as React.ReactElement, {
          visible: active !== null ? active === child?.props?.id : index === 0,
        })

        return el
      })}
    </div>
  )
}

export const Tab = ({ children, visible = true }: Tab) => {
  return (
    <>{visible && <div className="roducks__tabs--panel">{children}</div>}</>
  )
}
