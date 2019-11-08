import bodyParser from 'body-parser'
import express, { Application } from 'express'

import registerRoutes from './routes'

export class AppServer {
  instance: Application = registerRoutes(express())

  constructor(private readonly environment: string, private readonly port: number) {
    this.instance.use(bodyParser.json())
  }

  run(): Promise<Application> {
    return new Promise((resolve, reject) => {
      const server = this.instance.listen(this.port, error => {
        if (error) {
          reject(error)
        } else {
          resolve(this.instance)
        }
      })

      console.log(this.environment, server.address())
    })
  }
}
