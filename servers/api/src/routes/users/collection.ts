import { Users } from '@skirmish/documents'
import { Request, Response } from 'express'

export default async function(request: Request, response: Response): Promise<Response> {
  const users = new Users('users')
  const all = await users.all()
  response.send(all)
  return response
}
