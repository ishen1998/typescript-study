// 枚举
// 数字枚举
// Role是一个数字枚举
// 当不给它的枚举成员赋值时，他们是从0开始一次递增
// 当给枚举成员进行赋值，后面的成员会从赋值成员开始依次递增
// 数字枚举会进行反向映射
enum Role {
  Reporter,
  Developer = 3,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter)
console.log(Role)
// 数字枚举会进行反向映射
console.log(Role[0] === 'Reporter') //true
// 枚举类型的值是一个只读类型的，定义后是不允许修改的
// Role.Reporter = 2 

// 字符串枚举
enum Message {
  Success = '成功了',
  fail = '失败了'
}
// 字符串枚举不会进行反向映射
console.log(Message)
// 异构枚举 数字枚举和字符串枚举的混用（不推荐）
enum Answer {
  N,
  Y = 'yes'
}

// 枚举成员
// 枚举成员类型分为两种：
// 1、常量枚举：a、默认值 b、对已有常量枚举的引用 c、常量表达式
// 2、非常量枚举（需要被计算的表达式）d、e
// 在非常量枚举后定义的枚举成员需要赋初始值 f
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length,
  f = 5
}

// 常量枚举
enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month, 'month')

// 枚举类型
// 在某些情况下，枚举和枚举成员都可用作为单独的类型存在
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 可用超出枚举成员的定义
let e: E = 3
let f: F = 3
// 两种不同的枚举类型是不可以进行比较的
// e === f
let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
// 不同的枚举成员也不可以进行比较
// e1 === e2 //是不可以比较的
console.log(e1 === e3)

// 字符串枚举只能去枚举成员的类型
let g1: G = G.b
// 字符串成员的类型只能是自身
let g2: G.a = G.a

export default void 0