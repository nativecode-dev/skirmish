import express from 'express'

import registerRoutes from './routes'

export class AppServer {
  constructor(private readonly env: string, private readonly port: number) {}

  start(): Promise<void> {
    const app = registerRoutes(express())

    return new Promise((resolve, reject) => {
      const server = app.listen(this.port, () => {
        resolve()
      })

      console.log(server.address())
    })
  }
}
