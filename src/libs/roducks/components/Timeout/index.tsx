import React, { useEffect, useState } from "react"
import { useIdleTimer } from "react-idle-timer"
import { Modal } from "../Modal"
import { Button } from "../Button"

const ONE_MINUTE = 1_000 * 60
const PROMPT_BEFORE_IDLE = ONE_MINUTE

export const Timeout = ({ minutes = 30, onIdle }: TimeoutProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [remaining, setRemaining] = useState(0)

  const onPrompt = () => {
    if (isLastActiveTab()) {
      setOpenModal(true)
    }
  }

  const extendSession = () => {
    setOpenModal(false)
    activate()
  }

  const { isLastActiveTab, getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onPrompt,
    promptBeforeIdle: PROMPT_BEFORE_IDLE,
    timeout: minutes * ONE_MINUTE + PROMPT_BEFORE_IDLE,
    crossTab: true,
    syncTimers: 100,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Modal
      title="Timeout"
      dissmisable={true}
      display={openModal}
      onClose={extendSession}
    >
      Remaining {remaining} seconds
      <Button label="Extend Session" onClick={extendSession} />
    </Modal>
  )
}
