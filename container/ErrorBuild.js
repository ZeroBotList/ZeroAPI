const chalk = require('chalk')

module.exports = class APIError extends Error {
    constructor (message, ephemeral = false) {
        super(typeof message === 'object' ? 'EMBED_ERROR' : message)
        this.embed = typeof message === 'object' ? message : null
        this.ephemeral = ephemeral
    }
}
