import React, { useEffect, useState, type PropsWithChildren } from "react"

export const Access = ({ view, children }: AccessProps & PropsWithChildren) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setDisplay(["always", "about"].includes(view))
  }, [view])

  return <>{display ? children : "No Access"}</>
}
