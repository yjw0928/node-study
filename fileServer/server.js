const http = require('node:http')
const url = require('node:url')
const path = require('node:path')
const fs = require('node:fs')

const app = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if (req.method == 'GET' && pathname.indexOf('.js') !== -1) {

        const pathName = path.join(__dirname, 'public', ...(pathname.split('/')))
        console.log(pathName)
        const data = fs.readFileSync(pathName)
        fs.mkdirSync(path.join(__dirname, 'public', 'b.js'))
        fs.cre
        console.log(data)
        res.writeHead(200, 'ok',
            { "Content-Type": "text/javascript;charset=utf-8" }
        )
        res.end(data)
    }

})

app.listen(8000, () => {
    console.log('run server 8000')
})