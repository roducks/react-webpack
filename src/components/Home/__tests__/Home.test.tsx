import React from "react"
import { render, screen } from "@testing-library/react"
import Home from ".."

describe("My Test", () => {
  test("Home Test", () => {
    render(<Home title="Rod" />)

    expect(screen.getByText("Rod")).toBeTruthy()
  })
})
