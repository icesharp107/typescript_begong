import { firebrick } from "color-name"

var llll = [',',1,'v']   //旧时直接赋值
//数组类型 
let list:Array<number> = [1,2,3] 
let names:string[] = ['a','b','c'] 

//变量是任意类型
let input:any= 'nothing'
// symbol,虽然描述是一样，但标识是不一样
const sym1:symbol = Symbol('foo')
const sym2:symbol = Symbol('foo')
console.log(sym1 === sym2)    //false

//tuple，必填，可选?,其余...
const tuple:[number,string,boolean]= [10,'s',true]
const tup:[number,string?,boolean?]= [10,'s',true]
const le:[string,...number[]]=['a',1,2,3]

//枚举合并
enum Months {
    Jan = 1,
    Feb,
    Mar,
    Apr
}
enum Months {
    May = 5,
    Jun
}

//接口语法:定义接口类型
interface Clothes{
    color:string;
    size?:string;   //可选
    readonly price:number; //只读，readonly声明属性只读
    [proName:string]:any;   //[],任意类型
}
function getClothesInfo(clothes:Clothes){
    console.log(clothes.price)
}
//接口实例
let myC:Clothes = {
    color:'black',
    size:'xl',
    price:98,
    activity:'coupon'

}
getClothesInfo(myC)

//类，属性、构造函数、方法；   类指向其构造函数本身
class Calculate{
    public x:number
    public y:number
    constructor(x:number,y:number){
        this.x = x
        this.y = y 
    }
    add(){ return this.x+this.y}
}
// 函数参数：带默认值、可选、剩余
function AAA(exprired=600,name?:string,...args:string[]):void{}

// 字面量:固定表达式；类型有数字/布尔/字符串
let die:1|2|3|4|5
let bool:true | false
let strs:'strs'|'s2r'|'s3r'
let str: 'strings'

//断言：手动指定类型；语法：as type
const user = {} as Clothes  //指定Clothes类型
const users =<Clothes>{}
const uuu = 'EVAN' as any as Clothes  //双重断言，强制转换类型
// !:手动去除null/undefined类型

// 判断类型：字面量、typeof、in、instanceof


//传入形参是数字，返回字符串，c是可选,d是扩展字符串数组（个数不确定）
function add(x:number,y:number,c?:number,...d:string[]):string{
    return (x+y).toString()
}