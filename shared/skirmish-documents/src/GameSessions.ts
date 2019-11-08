import { DocumentStore, Document } from '@skirmish/core'

import { Game } from './Documents/Game'
import { Session } from './Documents/Session'

export interface GameSession extends Document {
  game: Game
  session: Session
}

export class GameSessions extends DocumentStore<GameSession> {}
