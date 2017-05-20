'use strict'
const chalk = require('chalk')

// Plugin to log the url after compilation
module.exports = class LogPlugin {
  constructor (port) {
    this.port = port
  }

  apply (compiler) {
    compiler.plugin('done', () => {
      console.log(`
        > Running at ${chalk.yellow(`http://localhost:${this.port}`)}\n
      `)
    })
  }
}
