const process = require('node:process')

console.log(1);

Promise.resolve(1).then(() => {
    console.log(4)
})

new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    console.log(5)
})

// 当前宏任务执行完之后，就立即执行，先于异步任务
process.nextTick(() => {
    console.log(3)
})


console.log(2)