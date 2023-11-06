import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTrash,
  faFlag,
  faChevronUp,
  faChevronDown,
  faCaretUp,
  faCaretDown,
  faRemove,
  faTriangleExclamation,
  faCircleExclamation,
  faCircleInfo,
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
    case "remove":
      icon = faRemove
      break
    case "warning":
      icon = faTriangleExclamation
      break
    case "error":
      icon = faCircleExclamation
      break
    case "info":
      icon = faCircleInfo
      break
  }

  return <>{icon !== null && <FontAwesomeIcon icon={icon} />}</>
}
