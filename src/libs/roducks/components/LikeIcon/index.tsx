import React, { useEffect, useState } from "react"
import { Icon } from "../Icon"
import "./style.scss"

export const LikeIcon = ({
  icon = "heart",
  isActive = false,
  counter = null,
  likes = null,
  onLike,
}: LoveIconProps) => {
  const [active, setActive] = useState(false)
  const [likesNumber, setLikesNumber] = useState(0)

  useEffect(() => {
    setActive(isActive)
  }, [isActive])

  useEffect(() => {
    if (counter !== null) setLikesNumber(counter)
  }, [counter])

  return (
    <span className="roducks__like">
      {counter !== null && <span>{likes ?? likesNumber}</span>}
      <a
        className={`roducks__${icon} roducks__${icon}--${
          active ? "active" : "unactive"
        }`}
        onClick={() => {
          setActive((prevState) => !prevState)
          setLikesNumber((prevState) => {
            if (active) {
              return prevState - 1
            } else {
              return prevState + 1
            }
          })
          onLike()
        }}
      >
        <Icon name={icon} />
      </a>
    </span>
  )
}
