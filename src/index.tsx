import React from "react"
import App from "./App"
import { createRoot } from "react-dom/client"
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Reducer from "./store"
import "./App.scss"
const store = createStore(Reducer)

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
