import { num2, num1, fn } from './1.js'

import result from './2.js'

// 按需导入导出
// 按需导出
// 1.export const num1=1
// 按需导入
// import { num } from 'js文件模块名'
// 默认导入导出
// 默认导出
// export default 值
// 要导出多个值，可以为对象
// 默认导入
// import 变量 form 'js文件模块名'

console.log(num1)
console.log(num2)
console.log(result)
console.log(result.aa)

console.log(fn(num1, num2))
