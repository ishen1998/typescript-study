// 接口
interface List {
  readonly id: number, //通过readonly 将id设置为只读
  name: string,
  age?: number // 可选属性
  [x: string]: any //字符串索引
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name, item.age)
  })
}
let result = {
  data: [
    { id: 1, name: 'sq', sex: 'male' },
    { id: 2, name: 'sw', age: 18 }
  ]
}
// result 数据类型并不是完全符合Result接口规范
// 但是ts并没有报错，是因为ts采用的是鸭式变形法
// 如果一只鸟长的想鸭子，叫的像鸭子，游的像鸭子，那么我们可以认为它就是鸭子

render(result)
//当我们将上述数据直接传递给render
// 那么此时不会通过ts的类型检查
// render({
//   data: [
//     { id: 1, name: 'sq', sex: 'male' },
//     { id: 2, name: 'sw' }
//   ]
// })
// 处理这种数据时，有三种方式
// 1 通过创建变量赋值给它
// let result = {
//   data: [
//     { id: 1, name: 'sq', sex: 'male' },
//     { id: 2, name: 'sw' }
//   ]
// }
// 2 利用类型断言 告诉编译器，使用者明确知道这种数据格式属于Result 两种方法

// render({
//   data: [
//     { id: 1, name: 'sq', sex: 'male' },
//     { id: 2, name: 'sw' }
//   ]
// } as Result)
// render(<Result>{
//   data: [
//     { id: 1, name: 'sq', sex: 'male' },
//     { id: 2, name: 'sw' }
//   ]
// })
// 3 字符串索引签名


// 数字索引接口
interface StringArray {
  [index: number]: string //用任意的一个数字去索引StringArray 会得到一个字符串
}
let chars: StringArray = ['A', 'B']

// 字符串索引接口
interface Names {
  [x: string]: string,
  // y:number 定义了字符串索引后是不能添加数字类型的成员了，因为字符索引和数字索引是可以混用的
  [z: number]: string //此时返回值类型必须是字符索引的类型的子集
}
interface Names2 {
  [x: string]: any,
  [z: number]: number
}
export default void 0