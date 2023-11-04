import { request } from ".."
import { getEndpoint } from "./endpoints"
import { formatter } from "./formatter"

export const People = {
  get: async () =>
    await request
      .get<PeopleResponse>(getEndpoint())
      .then((data) => formatter(data.people)),
}
