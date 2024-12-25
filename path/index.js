const path = require('node:path');

// 返回给定路径的最后一部分
console.log(path.basename('/a/b/c.js'))

// 返回文件目录
console.log(path.dirname('/a/b/c.js'))

//返回文件扩展名，没有就返回空
console.log(path.extname('/a/b/c.js'))

//路径拼接
console.log(path.join(__dirname, '/a', 'b'))

//路径解析 返回的是绝对路径
console.log(path.resolve('./index.js'))

console.log(path.parse(path.resolve())) // path.format 互补

console.log(path.sep)




