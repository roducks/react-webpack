import React, { useEffect, useState } from "react"
import "./style.scss"

export const Grid = ({
  children,
  columns = null,
  className = null,
  centered = false,
  right = false,
  responsive = false,
  wrap = false,
  wrapReverse = false,
}: GridProps) => {
  const [appliedClassName, setAppliedClassName] = useState<string[]>([])

  useEffect(() => {
    if (className !== null) {
      setAppliedClassName((prevState) => {
        return [...prevState, className]
      })
    }
  }, [className])

  useEffect(() => {
    if (centered) {
      setAppliedClassName((prevState) => {
        return [
          ...prevState,
          "roducks__grid--columns-centered roducks__grid--columns-aligned-center",
        ]
      })
    }
  }, [centered])

  useEffect(() => {
    if (right) {
      setAppliedClassName((prevState) => {
        return [...prevState, "roducks__grid--columns-right"]
      })
    }
  }, [right])

  useEffect(() => {
    if (responsive) {
      setAppliedClassName((prevState) => {
        return [...prevState, "roducks__grid--responsive"]
      })
    }
  }, [responsive])

  useEffect(() => {
    if (wrap) {
      setAppliedClassName((prevState) => {
        return [...prevState, "roducks__grid--wrap"]
      })
    }
  }, [wrap])

  useEffect(() => {
    if (wrapReverse) {
      setAppliedClassName((prevState) => {
        return [...prevState, "roducks__grid--wrap-reverse"]
      })
    }
  }, [wrapReverse])

  return (
    <div
      className={`roducks__grid${
        right !== true ? " roducks__grid--columns-expanded" : ""
      } roducks__grid--columns-${columns ?? "elastic"}${
        appliedClassName.length > 0 ? ` ${appliedClassName.join(" ")}` : ""
      }`}
    >
      {children}
    </div>
  )
}

export const GridItem = ({
  children,
  width = null,
  className = null,
}: GridItemProps) => {
  return (
    <div
      className={`roducks__grid--column${
        width ? ` roducks__grid--column-p${width}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  )
}
