export const peopleEndpoint = () => {
  return process.env["API_PEOPLE_ENDPOINT"] ?? ""
}
