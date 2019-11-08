import { Document } from '@skirmish/core'

import { SessionSeat } from './SessionSeat'

export interface Session extends Document {
  id: string
  seats: SessionSeat[]
}
