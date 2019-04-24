
/*
* 编程思想：
*面向过程：什么事情都亲力亲为，事无巨细，面面俱到，步步紧跟，有条不紊 注重过程
*面向对象：注重结果
* 面向对象的设计思想：
* 抽象出class
* 根据class创建实例
* 指挥实例得到结果
* */

//创建对象的三种方式
//1.字面量
//2.调用系统构造函数
//3.自定义构造函数

//1  2 创建的对象分不清楚对象属于神魔类
//3自定义
function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.play = function(){
        console.log('huiwang')
    }
}
//创建对象---》实例化一个对象，同时对属性进行初始化
var per = new Person('wang','18','男');
console.log(per instanceof Person)
/*
*
* 1.开辟空间存储对象
* 2.把this设置为当前的对象
* 3.设置属性和方法的值
* 4.把this对象返回
* */
