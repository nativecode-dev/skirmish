import { GameSessions } from '@skirmish/documents'
import { Request, Response } from 'express'

export default async function(request: Request, response: Response): Promise<Response> {
  const sessions = new GameSessions('game-sessions')
  const all = await sessions.all()
  response.send(all)
  return response
}
