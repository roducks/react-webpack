import axios, { type AxiosResponse } from "axios"

const API = axios.create({
  baseURL: "http://localhost:3000",
})

const responseBody = (response: AxiosResponse) => response.data

const request = {
  get: async (url: string) => await API.get(url).then(responseBody),
}

const people = {
  get: async () => await request.get("/people"),
}

export { people }
