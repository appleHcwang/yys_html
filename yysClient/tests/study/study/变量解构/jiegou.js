/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-04-13 11:26:24
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-11-04 17:32:32
 * @FilePath: /yysClient/tests/study/study/变量解构/jiegou.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1. 数组的解构赋值 § ⇧
let [a, b, c] = [1, 2, 3];
console.log(a,b,c)

//2. 对象结构给值
let {foo, bar} = {foo: 'aaa', bar: 'bbb'}

console.log(foo,bar)

//3 .字符串的解构赋值
const [a1, b1, c1, d, e] = 'hello';
console.log(a1,b1,c1,d,e)

//多层对象解构
const school = {
    classes: {
        stu: {
           name: 'Bob',
           age: 24,
        }
     }
  }

  const { classes: { stu: { name } }} = school

  console.log(name)
