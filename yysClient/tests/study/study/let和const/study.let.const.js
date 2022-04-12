//*
// ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
//

var a = []

for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i)
    }
    
}
a[6]()

//  let 不存在变量提升 § ⇧
// var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

// 为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

// console.log(foo); // 输出undefined
// var foo = 2;

// let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;


//3.  const 命令 
const PI = 3.1415;
// PI = 3 // 报错
// const声明一个只读的常量。一旦声明，常量的值就不能改变。

 console.log(PI)

//  const的作用域与let命令相同：只在声明所在的块级作用域内有效。

// 本质
// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
// 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），
// 变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
const foo = {}
foo.prop = 123
foo.prop = 1
// foo = {}; 报错
console.log(foo)


// 4 . 顶层对象的属性 § ⇧

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined


/*
5. globalThis 对象 § ⇧
JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
Node 里面，顶层对象是global，但其他环境都不支持。
*/