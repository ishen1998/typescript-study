// let add: (x: number, y: number) => number
interface Add {
  (x: number, y: number): number,

}
let add: Add = (a, b) => a + b

console.log(add(2, 6))

// 混合类型接口
interface Lib {
  (): void,
  version: string,
  doSomething(): void
}
function getLib() {
  let lib: Lib = (() => { }) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {
    console.log('to do some thing')
  }
  return lib
}
let lib1 = getLib()
console.log(lib1.version)






console.log(lib1.doSomething())
export default void 0