// 创建类
class Dog {
  constructor(name: string) {
    this.name = name
  }
  name?: string
  readonly age: number = 18
  static sex: string = 'male'
  run() {
    console.log('run....')
  }
}
// 无论在es6 或ts中，类成员的属性都是实例属性
// 类成员的方法都是实例方法
console.log(Dog.prototype)
// name属性在实例上，不在原型上
// 实例的属性必须具备初始值或在构造函数中初始化
let dog = new Dog('大黄')
console.log(dog)
// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
}
// 类修饰符
// public 公共 默认修饰符
// private 私有
// 使用private修饰符 给 constructor 修饰后，这个类将无法被实例化和继承
// 使用private 修饰符 修饰成员属性或方法 后 该成员属性或方法将无法在类外部使用
// class Dog1{
//   private constructor(){}
// }
// let dog1 = new Dog1()
// class d extends Dog1{
//   constructor(){
//     super()
//   }
// }
// protected 受保护
// 使用protected修饰符修饰constructor后，类无法被实例化只能被继承
// 成员属性或方法被protected修饰符修饰后，只能在当前类和子类中使用
// class Dog2 {
//   protected constructor() { }
//   protected run() { }
// }
// let dog3 = new Dog2()
// class dd extends Dog2 {
//   constructor() {
//     super()
//   }
// }
// let dog4 = new dd()
// dog4.run()

// readonly 只读
// 使用readonly的属性将不可修改

// static 静态属性
// 静态属性可以被继承 通过类直接访问
console.log(Dog.sex)
console.log(Husky.sex)
export default void 0