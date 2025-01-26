import React, { useEffect, useState } from "react"
import { Modal } from "../Modal"

export const SessionTimeout = ({
  display,
  onTimeout,
  seconds = 10,
}: SessionTimeout) => {
  const [secondsInt, setSecondsInt] = useState(0)
  const [start, setStart] = useState(false)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    setSecondsInt(seconds)
    setStart(true)
  }, [seconds])

  useEffect(() => {
    let interval = null

    if (display) {
      interval = setInterval(() => {
        setSecondsInt((prevState) => prevState - 1)
      }, 1000)
    }

    if (stop && display) {
      if (interval !== null) clearInterval(interval)
    }

    return () => {
      if (interval !== null) clearInterval(interval)
    }
  }, [stop, display])

  useEffect(() => {
    if (secondsInt === 0 && start) {
      setStop(true)
      onTimeout()
    }
  }, [secondsInt, start, onTimeout])

  return (
    <Modal title="Session Timeout" display={display} dissmisable={false}>
      <p>
        You will be logged off in{" "}
        <span style={{ color: "#c00" }}>{secondsInt}</span> seconds.
      </p>
    </Modal>
  )
}
