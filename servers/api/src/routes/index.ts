import { Application } from 'express-serve-static-core'

const register = (app: Application): Application => {
  return app.get('/', (request, response) => {
    response.sendStatus(200)
  })
}

export default register
