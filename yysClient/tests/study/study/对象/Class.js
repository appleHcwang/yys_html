
//属性简洁表示方法
const foo = 'bar'
const baz = {foo}
console.log(baz,baz.foo)

// 属性名表达式 § ⇧
// JavaScript 定义对象的属性，有两种方法。
 const obj = {}
 obj.name = 'cvc'
  
 let a = 'boy'
 let b = 'age'

 obj[a + b] = 18

 console.log(obj.boyage)