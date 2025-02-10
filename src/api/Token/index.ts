import { request } from ".."
import { endpoints } from "./endpoints"

export const TokenApi = {
  get: async (payload: TokenPayload) =>
    await request.post<TokenResponse>(endpoints.Token, payload),
}
