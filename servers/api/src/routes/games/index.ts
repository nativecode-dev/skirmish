import { Application } from 'express'

import getItems from './collection'
import getItem from './get'
import deleteItem from './delete'
import patchItem from './patch'
import postItem from './post'
import putItem from './put'

export default function(app: Application): Application {
  return app
    .get('/games', getItems)
    .get('/games/{id}', getItem)
    .delete('/games', deleteItem)
    .patch('/games', patchItem)
    .post('/games', postItem)
    .put('/games', putItem)
}
