/* eslint-disable no-console */
const ora = require('ora')
const chalk = require('chalk')

let isFirstClear = true

module.exports = {
  print(...args) {
    console.log(...args)
  },

  error(...args) {
    if (args[0] instanceof Error) {
      console.error(chalk.red(args[0].stack))
    } else {
      console.error(...args)
    }
  },

  clear: () => {
    // On first run, clear completely so it doesn't show half screen on Windows.
    // On next runs, use a different sequence that properly scrolls back.
    process.stdout.write(isFirstClear ? '\x1bc' : '\x1b[2J\x1b[0f')
    isFirstClear = false
  },

  spinner(...args) {
    return ora(...args)
  }
}
