function createObject(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.say = function(){
        console.log('hi')
    }
    return obj
}

function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.play = function(){
        console.log('huiwang')
    }
}
var pre1 = createObject('wang',12);

/*
* 共同点：都是函数，都可以创建对象，都可以传入参数
*
* 工厂模式：
* 函数名是小写
* 有new
* 有返回值
*new的对象是当前对象
*通过调用函数创建对象
* 
* 自定义构造函数：
* 函数名首字大写
* 没有new
* 没有返回值
*this是当前对象
*通过new的方式来创建对象
* */
