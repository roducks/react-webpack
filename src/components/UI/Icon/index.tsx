import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTrash,
  faFlag,
  faChevronUp,
  faChevronDown,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons"

export const Icon = ({ name }: IconProps) => {
  let icon = null

  switch (name) {
    case "trash":
      icon = faTrash
      break

    case "flag":
      icon = faFlag
      break
    case "chevron-up":
      icon = faChevronUp
      break
    case "chevron-down":
      icon = faChevronDown
      break
    case "caret-up":
      icon = faCaretUp
      break
    case "caret-down":
      icon = faCaretDown
      break
  }

  return <>{icon !== null && <FontAwesomeIcon icon={icon} />}</>
}
