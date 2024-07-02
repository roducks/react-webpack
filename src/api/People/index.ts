import { request } from ".."
import { peopleEndpoint } from "./endpoints"
import { peopleFormatter } from "./formatters"

export const People = {
  get: async () =>
    await request()
      .get<PeopleResponse>(peopleEndpoint())
      .then((data) => peopleFormatter(data.people)),
}
