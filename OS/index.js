const os = require('node:os')
const { exec } = require('node:child_process')
console.log(os.platform())
console.log(os.release())
console.log(os.version())


const platform = os.platform()
const open = (url) => {
    if (platform === 'win32') {
        exec(`start ${url}`)
    }
}
open('https://www.baidu.com')
