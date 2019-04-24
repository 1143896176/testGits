//面向对象的思想---抽象的过程---实例化的过程
function Person(name,age){
    this.age = age;
    this.name = name;
    this.say = function(){
        console.log(this.name)
    }
}
//通过构造函数实例对象，并初始化
var arr = new Array(1,2,3,4,5);
arr.join('!')
var pre = new Person("wang",12);
//实例对象是通过构造函数来创建的
//实例对象的构造器会指向自己的构造函数
pre.say();
console.dir(pre);
console.dir(Person);
console.log(pre.constructor === Person);
console.log(pre.__proto__.constructor===Person);
console.log(pre.__proto__.constructor===Person.prototype.constructor);

function Animal(name){
    this.name = name
}
var dog = new Animal('二狗');
//判断这个对象是不是这种数据类型
console.log(pre.constructor==Animal);
console.log(pre instanceof Animal);
/*
*
* 总结：
* 实例对象和构造函数之间的关系
* 1.实例对象是通过构造函数来创建的 ---创建的过程叫做实例化
* 2.判断对象的数据类型是不是这个数据类型？
*   1）通过构造器的方式  实例对象.构造器===构造函数名字
*   2）对象 instanceof 构造函数名
* 推荐第二种 因为所有的对象都是继承于Object即：
* pre.constructor==Object   //true
*
*
* */

/*
* 实例对象中有个属性 “__proto__” 也是对象，叫原型，不是标准的属性，浏览器使用的 部分浏览器不支持（ie8）
* 构造函数中有一个属性，prototype,也是对象，叫原型，是标准属性，程序员使用
*
* 原型  --》__proto__或者prototype,都是原型对象，
* 原型的作用：
* 共享数据，节省内存空间
*
* */

/*
*
* 构造函数可以实例化对象
* 构造函数中有一个属性叫prototype,构造函数的原型对象
* 构造函数的原型对象（prototype）中有一个cosrtuctor构造器，这个构造器指向的就是自己所在的原型对象所在的构造函数
* 实例对象的原型对象（__proto__）指向的是该构造函数的原型对象
* 构造函数的原型对象（prototype）中的方法是可以被实例对象直接访问的
*
* */
