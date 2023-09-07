import { spawn } from 'node:child_process'
import chalk from 'chalk'
import 'dotenv/config'

const folderPath = process.env.FOLDER_PATH || './'

if (process.platform === 'linux') {
  spawn('xdg-open', [folderPath], { detached: true })
  process.exit()
}

console.log(
  chalk.bold(
    chalk.red('Only linux platform is supported!\n\n') +
    chalk.green('If you want, you can contribute to add more options:\n') +
    chalk.underline.yellow('https://github.com/ZaikoXander/open-folder')
  )
)
