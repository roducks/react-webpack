import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faFlag } from "@fortawesome/free-solid-svg-icons"
import { usePeople } from "./hooks/usePeople"
import "./style.scss"

export const Home = ({ title = "" }: HomeProps) => {
  const { state, getData } = usePeople()

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <h2>{title}</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faFlag} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTrash} />
        </li>
      </ul>
      {state.isLoaded ? (
        <ul>
          {state.people.map((item: People) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        "Loading ..."
      )}
    </>
  )
}
