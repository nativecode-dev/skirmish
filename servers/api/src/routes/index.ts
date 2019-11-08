import { Application } from 'express'

import Users from './users'

const register = (app: Application): Application => {
  app.get('/', (request, response) => {
    response.sendStatus(200)
  })

  return Users(app)
}

export default register
