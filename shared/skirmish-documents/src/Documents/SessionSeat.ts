import { Document } from '@skirmish/core'

import { UserInfo } from './UserInfo'

export interface SessionSeat extends Document {
  id: string
  user: UserInfo
}
