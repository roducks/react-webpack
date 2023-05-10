import axios, { type AxiosResponse } from "axios"
import { peopleTransform } from "./transformers"

const API = axios.create({
  baseURL: "http://localhost:3001",
})

const responseBody = (response: AxiosResponse) => response.data

const request = {
  get: async (url: string) => await API.get(url).then(responseBody),
}

const people = {
  get: async () =>
    await request.get("/people").then((data) => peopleTransform(data)),
}

export { people }
