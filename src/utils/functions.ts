export const onDev = () => {
  return process.env["NODE_ENV"] === "development"
}

export const apiLocal = () => {
  return process.env["API_LOCAL"] === "on"
}
