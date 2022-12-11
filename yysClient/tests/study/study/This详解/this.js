


function test() {
  
}
test()

var obj ={
    name:'dfdf',
    abc:function() {
     console.log(this)
    }

}
obj.abc()


let mm =  (x,y) => {return x+y

}
console.log(mm(1,3))



function callBack(x,y,callback) {
    callback(x+y)
}

callBack(1,9,(result)=> {
    console.log(result )
})

function Person() {}
var person1 = new Person();
var person2 = new Person();


//构造函数
console.log(person1.constructor)


function Car() {
    this.type = 'bmw'
    this.run = function() {
        console.log('run')
    }
}

let car = new Car()

console.log(car.type)
