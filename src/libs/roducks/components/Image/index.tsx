import * as React from "react"

export const Image = ({ src }: ImageProps) => {
  return <>{src !== null && <img src={src} alt="" />}</>
}
