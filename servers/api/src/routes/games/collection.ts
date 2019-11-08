import { Games } from '@skirmish/documents'
import { Request, Response } from 'express'

export default async function(request: Request, response: Response): Promise<Response> {
  const games = new Games('games')
  const all = await games.all()
  response.send(all)
  return response
}
