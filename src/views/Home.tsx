import React from "react"
// import { Main } from "src/components/Layout/Main"
import { Container } from "src/libs/roducks/components/Container"
import { Home as HomeComponent } from "../components/Home"

export const Home = () => {
  return (
    <Container>
      <HomeComponent />
    </Container>
  )
}
