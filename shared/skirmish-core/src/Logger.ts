import { CreateLogger, CreateOptions } from '@nofrills/lincoln-debug'

const options = CreateOptions('skirmish:api')
const logger = CreateLogger(options)

export default logger
