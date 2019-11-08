import { Document } from '@skirmish/core'

export interface Game extends Document {
  id: string
  name: string
  description: string
}
