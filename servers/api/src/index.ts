import express from 'express'

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 80

const app = express()

app.get('/', (_, response) => {
  response.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('server started...')
})
