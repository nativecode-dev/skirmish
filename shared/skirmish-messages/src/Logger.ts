import { CreateLogger, CreateOptions } from '@nofrills/lincoln-debug'

const options = CreateOptions('skirmish:messages')
const logger = CreateLogger(options)

export default logger
