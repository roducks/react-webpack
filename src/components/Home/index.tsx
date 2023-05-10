import React, { useEffect, useState } from "react"
import { people } from "src/api"
import "./style.scss"

interface List {
  id: number
  name: string
}

const Home = () => {
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
    <ul>
      {list.map((item: List) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default Home
