/*
 * @Author: appleHcwang 2372233634@qq.com
 * @Date: 2022-07-06 10:04:40
 * @LastEditors: appleHcwang 2372233634@qq.com
 * @LastEditTime: 2022-11-01 20:27:25
 * @FilePath: /yysClient/tests/study/study/函数/function.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
函数参数的默认值
*/
// function log(x,y=2) {
//    if(typeof y === 'undefined') {
//     console.log(x,y,typeof y)
//    } else {
//     console.log(x,y,typeof y)
//    }
//     y = y || 'wod'
//     // console.log(x,y,typeof y,flag)
// }
// log(1)

// /*
// rest 参数 （形式为...变量名）
// 用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多
// */
// function add(...values) {
//    let sum = 0;
//    for (var val  of values) {
//        sum = sum + val   
//    }
//  return sum;
// }
// console.log(add(2,3,5))

// function sortNumbers() {
//   let arr  = Array.from(arguments)
//   arr.sort(function (m, n) {
//     if (m < n) return -1
//     else if (m > n) return 1
//     else return 0
//    });
//    return arr
// }

//  let arr = sortNumbers(3,1,4,2);
//  console.log(arr)

//  /*
//  函数的name属性
//  */
// function foo() {}
// console.log(foo.name)
// //匿名函数
// var f = function() {}
// console.log(f.name)

// /*
// 箭头函数
// */
// var f = (v , w)=>{
//   if (v) {
//     v = 8
//   }
//   return v - w;
// };
// //等价于
// var m = function (v){
//     return v
// }

// console.log(f(1,6))


// //闭包
// var addd = (function(){
//  var counter = 0;
//  return function(){
//    return counter + 1
//  }
// })()
// var x = addd()
// console.log(x)



// function fm() {
//   var v = 8;

//   var c = function (){
//       return v;
//   };

//   return v;
// }



// console.log(fm())


// let fw = function () {
//   this.a = 1;
//   this.b = 9;
// }
// /* 这么写也一样
// function f() {
//  this.a = 1;
//  this.b = 2;
// }
// */
// let o = new fw(); // {a: 1, b: 2}

// console.log(o)

//闭包相关
console.log('=======================================================')
// var n = 10; //
// function fn() {
//   var n = 20; //
//   function f() {
//     n++;
//     console.log(n);
//   }
//   f()
//   return f;
// }
// var x = fn();
// x()
// x()

 var q = (function mm() {
  console.log('立即执行')
  return '3'
})()


console.log(typeof q)

let aa = {
  aan:'fg'
}
console.log(aa.aab)

if(aa.aab) {
  console.log('mmm')
} else {
  console.log('nnn')
}



let str = 'abcdef1234'

for(let i = 0; i < str.length; i++) {

  console.log(str[i])
}


var Parent = function(x,y) {

  return x + y

}
var p1 = new Parent()

p1.name = 'sdd'


console.log(p1.name) 

function car(make,mode,year) {
this.make = make
this.mode = mode
this.year = year
}

const car1 = new car('dd','dd','pp')

console.log(car1)

console.log(typeof p1)

let arr = []

console.log(Array.isArray(arr))

//toFixed 四舍五入 
console.log((0.1 + 0.2).toFixed(1))


var pp = {
 
 print:function(x,y,callback){
   callback(x+y)
  console.log(x,y)
 }
}

pp.print(1,9,function(res) {
   console.log(res)
})