import React, { useEffect, useRef } from "react"

export const Observer = ({ callback }: ObserverProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }

      if (ref.current !== null) {
        observer.observe(ref.current)
      }

      return () => {
        observer.disconnect()
      }
    })
  }, [callback])

  return <div ref={ref}></div>
}
