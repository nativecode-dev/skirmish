import { Document } from '@skirmish/core'

export interface UserInfo extends Document {
  id: string
  username: string
}
