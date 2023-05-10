import React, { useEffect, useState } from "react"
import { people } from "../../api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faFlag } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

interface List {
  id: number
  name: string
}

interface DefaultProps {
  title: string
}

const Home = ({ title }: DefaultProps) => {
  const [list, setList] = useState<List[]>([])

  useEffect(() => {
    people
      .get()
      .then((response) => {
        setList(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

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
      <ul>
        {list.map((item: List) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
