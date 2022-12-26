/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-12-24 17:31:39
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-12-24 23:52:54
 * @FilePath: /yysClient/tests/study/常见算法/arithmetic.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//字符串反转

let str = 'Hello  World'
//方式1
const reverseString = function (str) {
    return [...str].reverse().join('')
}
// console.log(reverseString(str))

//方式2 用递减的 for 循环反转字符串

const reverseStringMethon2 = function (str) {
    let newStr=''
   for(let i = str.length - 1; i >= 0; i--) {
       newStr = newStr + str[i]
   }
   return newStr
}

// console.log(reverseStringMethon2(str))
//递归
const reverseStringMethon3 = function (str) {
    if (str === '') return '';
   
   return reverseStringMethon3(str.substr(1)) + str.charAt(0)
}

// console.log(reverseStringMethon3(str))


    const dgfunc = function(arr) {


        return dgfunc(arr)
    }