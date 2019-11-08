import { CreateLogger, CreateOptions } from '@nofrills/lincoln-debug'

const options = CreateOptions('skirmish:documents')
const logger = CreateLogger(options)

export default logger
