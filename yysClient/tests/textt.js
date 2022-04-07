// import requset from '../tests/texttt.js';
// import { qq } from '../tests/texttt.js';
//   let a = requset(2,3);
// // console.log(a)
// console.log(a)
// console.log(qq(1,2,3))
// // "type": "module",
// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });
a.x = 4
console.log(a)
let arr = [1, 2, 3]
const itemCopy = [...arr]
console.log(itemCopy)
let abc = arr.map(function (x) {

    return x + x;
})
console.log(abc)
let aaa = arr.map((x) => {

    return x * x
})
console.log(aaa)


let map = new Map([
    ['name','张三'],
    ['title','Author']
])

console.log(map.keys())
console.log(map.values())