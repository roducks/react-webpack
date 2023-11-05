import React from "react"
import { Main } from "src/components/Layout/Main"
import { Home as HomeComponent } from "../components/Home"

export const Home = () => {
  return (
    <Main>
      <div className="roducks__container">
        <div className="roducks__container--white">
          <HomeComponent />
        </div>
      </div>
    </Main>
  )
}
