import { Application } from 'express'

import getItems from './collection'
import getItem from './get'
import deleteItem from './delete'
import patchItem from './patch'
import postItem from './post'
import putItem from './put'

export default function(app: Application): Application {
  return app
    .get('/users', getItems)
    .get('/users/{id}', getItem)
    .delete('/users', deleteItem)
    .patch('/users', patchItem)
    .post('/users', postItem)
    .put('/users', putItem)
}
