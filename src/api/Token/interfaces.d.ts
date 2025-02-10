interface TokenPayload {
  email: string
  password: string
}

interface TokenResponse {
  auth: string
  token: string
}

interface TokenData {
  email: string
  first_name: string
  last_name: string
}
