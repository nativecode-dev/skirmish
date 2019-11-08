import { Application } from 'express'

import getUsers from './collection'
import getUser from './get'
import deleteUser from './delete'
import patchUser from './patch'
import postUser from './post'
import putUser from './put'

export default function(app: Application): Application {
  return app
    .get('/users', getUsers)
    .get('/users/{id}', getUser)
    .delete('/users', deleteUser)
    .patch('/users', patchUser)
    .post('/users', postUser)
    .put('/users', putUser)
}
