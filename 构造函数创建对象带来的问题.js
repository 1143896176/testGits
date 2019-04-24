function Person(name,age) {
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log('吃红烧土豆，没有肉')
    }
}
Person.prototype.say=function(){
    console.log('我说：“吃红烧土豆，没有肉”')
};
var per1 = new Person('wang1','18');
var per2 = new Person('wang2','19');


console.log(per1.eat==per2.eat);  //false

//eat（）会存在每个对象内存中，浪费内存空间
console.log(per1.say==per2.say);   //true
/*
* 通过原型来解决----
* 1.数据共享，节省内存空间
* */
