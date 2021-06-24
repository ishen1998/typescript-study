// 函数定义
function add(x: number, y: number) {
  return x + y
}

let add1: (x: number, y: number) => number

let add2 = (x: number, y: number) => x + y

interface Add {
  (x: number, y: number): number
}

// 可选参数
// 可选参数必须位于必选参数之后
function add3(x: number, y?: number) {
  return y ? x + y : x
}
console.log(add3(1), add3(1, 2))

// 参数默认值
function add4(x: number, y: number = 0, z: number, q: number = 1) {
  console.log(x + y + z + q)
  console.log(x, y, z, q)
}
// 默认参数值在必选参数前必须传递一个undefined，这样后面的必传参数就可以获取到正确传递的值
add4(1, undefined, 3)

// 剩余参数
function add5(x: number, ...rest: number[]) {
  console.log(rest)
  return x + rest.reduce((pre, cru) => pre + cru)
}
console.log(add5(1, 2, 3, 4, 5))

// 函数重载
// 先定义函数声明
function add6(...rest: number[]): number;
function add6(...rest: string[]): string;
// 重载实现方法
function add6(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    console.log(rest.join(''))
  }
  if (typeof first === 'number') {
    console.log(rest.reduce((pre, cru) => pre + cru))
  }
}
add6(1, 5, 6, 8, 9)
add6('a', 'p', 'p', 'l', 'e')
export default void 0