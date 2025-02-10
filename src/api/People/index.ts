import { api } from ".."
import { endpoints } from "./endpoints"
import { formatters } from "./formatters"

export const People = {
  get: async () =>
    await api()
      .get<PeopleResponse>(endpoints.getPeople)
      .then((data) => formatters.getPeople(data.people)),
}
