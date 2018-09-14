import { internal, external } from './url'

export const getInternalURL = urlName => {
  const url = internal[urlName]

  const protocol = Cypress.env('PROTOCOL')
  const host = Cypress.env('HOST')
  const port = Cypress.env('PORT')
  const _port = port ? `:${port}` : ''

  const baseName = `${protocol}://${host}${_port}`
  return new URL(url, baseName).href
}

export const getExternalURL = urlName => {
  return external[urlName]
}