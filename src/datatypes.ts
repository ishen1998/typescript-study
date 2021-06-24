/**
 * es6的数据类型
 * Boolean
 * Number
 * String
 * Array
 * Function
 * Object
 * Symbol
 * undefined
 * null
 * Typescript包含以上数据类型，自身又扩展了几种
 * void
 * any
 * nerver
 * 元组
 * 枚举
 * 高级类型
 */

//类型注解 相当于强类型语言中的类型声明
//语法 (变量/函数):type
console.log(111111111)
// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string | boolean> = [1, 2, 's', true]

// 元组 确定了数组元素的个数和类型(超过则会报越界问题，但是使用push不会提示越界。不允许使用push)
let tuple: [number, string] = [0, '1']
tuple.push(5)
console.log(tuple, '元组')
// tuple[2] //访问时报错
//函数 ts中参数需要定义好类型,函数返回值也应具备类型（如果不定义ts则会进行类型推断）
let add = (x: number, y: number): number => x + y
// 定义一种函数类型，但是没有实现
let sum: (x: number, y: number) => number
sum = (a, b) => a + b
console.log(sum(1, 3), 'function')
//对象
let obj: object = { x: 1, y: 2 }
let obj1: {} = { x: 1, y: 2 }
// console.log(obj1.x)
// console.log(obj.x) //访问报错因为我们只是简单的指定了obj是object类型，里面的元素我们没有指定
let obj2: { x: number, y: number } = { x: 1, y: 2 }
console.log(obj2.x, 'object')

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2, 'symbol')

// undefined null
// 将变量的类型定义为undefined 或 null 时，这类的变量只能赋值为null / undefined
// 同样需要将undefined / null 赋值给其他变量 则需要配置tsconfig.json:"strictNullChecks": false
// 或者通过联合类型的方式进行赋值
let un: undefined = undefined
let ul: null = null
// 这里将num的类型改为联合类型 number|undefined|null
num = un
num = ul

// any 如果没有特殊情况就不要使用any
let x;
let y: any

// void
let noReturn = () => { }
let noReturn2 = (): void => { }

// never 永远不会有返回值 例如报错或死循环

let error = () => {
  throw new Error()
}
let endless = () => {
  while (true) { }
}

export default void 0