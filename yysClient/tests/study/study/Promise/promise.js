//1.promise 是异步编程的一种解决方案 ,所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
// Promise对象有以下两个特点。

//2.基本用法
let promise = new Promise(function(resol, rej) {
    console.log('Promise');
    // resolve();
    rej()
  });
  
  promise.then(function() {
    console.log('resolved.');
  },function(){
    console.log('reject.');
  });
  
  console.log('Hill!');
  
  //3.Promise 实例具有then方法，也就是说，then方法是定义在原型对象

  const p1 = new Promise(function (resolve, reject) {
    // ...
    resolve('dfdf')
  });
  console.log(p1)
  const p2 = new Promise(function (resolve, reject) {
    // ...
    resolve(p1);
  })

  p2.then(function() {
     console.log('over')
  },function(){
      console.log('reject')
  })