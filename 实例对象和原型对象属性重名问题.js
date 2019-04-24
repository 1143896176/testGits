function Person (age,sex){
    this.age =age;
    this.sex = sex;
}
Person.prototype.sex = '女';
var per = new Person(10,"男");

console.log(per.sex);

Person.prototype.sex = "moiwjfiowe";
console.log(per.sex);
per.sex = "1234";
console.log(per.sex);
/*
*
* 实例对象访问这个属性，应该先从实例对像中找，找到了就直接用，没找到就去原型对象里找，找到了就直接用
* 如果实例对象和原型对象里都没有找到呢？
* 找不到就直接创建这个属性，并赋值为undefined
*
* 通过实例对象不能改变原型对象中的属性值 ！
*
* 如果必须改变原型对象的属性值怎末办？ 重新做一遍原型对象属性的赋值操作
*
* */
