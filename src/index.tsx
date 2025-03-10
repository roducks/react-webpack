import React from "react"
import { App } from "./app/App"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "./store"
import "./app/App.scss"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
