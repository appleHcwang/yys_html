/*
函数参数的默认值
*/
function log(x,y=2) {
   if(typeof y === 'undefined') {
    console.log(x,y,typeof y)
   } else {
    console.log(x,y,typeof y)
   }
    y = y || 'wod'
    // console.log(x,y,typeof y,flag)
}
log(1)

/*
rest 参数 （形式为...变量名）
用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多
*/
function add(...values) {
   let sum = 0;
   for (var val  of values) {
       sum = sum + val   
   }
 return sum;
}
console.log(add(2,3,5))

function sortNumbers() {
  let arr  = Array.from(arguments)
  arr.sort(function (m, n) {
    if (m < n) return -1
    else if (m > n) return 1
    else return 0
   });
   return arr
}

 let arr = sortNumbers(3,1,4,2);
 console.log(arr)
 
 /*
 函数的name属性
 */
function foo() {}
console.log(foo.name)
//匿名函数
var f = function() {}
console.log(f.name)

/*
箭头函数
*/
var f = (v , w)=>{
  if (v) {
    v = 8
  }
  return v - w;
};
//等价于
var m = function (v){
    return v
}
 
console.log(f(1,6))