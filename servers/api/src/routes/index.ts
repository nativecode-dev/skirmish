import { Application } from 'express'

import Games from './games'
import Sessions from './sessions'
import Users from './users'

const register = (app: Application): Application => {
  app.get('/', (_, response) => {
    response.sendStatus(200)
  })

  return Games(Sessions(Users(app)))
}

export default register
