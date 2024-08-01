require('./comp.js')
console.log(globalThis.a, global.a)
//脚本执行目录
console.log(__dirname)
// 执行文件目录
console.log(__filename)

// process 进程相关
//脚本参数
console.log(process.argv)
// 脚本执行目录
console.log(`cwd==========> ${process.cwd()}`)