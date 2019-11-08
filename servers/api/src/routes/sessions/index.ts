import { Application } from 'express'

import getItems from './collection'
import getItem from './get'
import deleteItem from './delete'
import patchItem from './patch'
import postItem from './post'
import putItem from './put'

export default function(app: Application): Application {
  return app
    .get('/sessions', getItems)
    .get('/sessions/{id}', getItem)
    .delete('/sessions', deleteItem)
    .patch('/sessions', patchItem)
    .post('/sessions', postItem)
    .put('/sessions', putItem)
}
