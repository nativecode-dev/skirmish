import { AppServer } from './AppServer'

const ENV: string = process.env.NODE_ENV || 'development'
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 0) : 9000

async function main(): Promise<void> {
  const server = new AppServer(ENV, PORT)
  await server.start()
}

main().catch(console.error)
