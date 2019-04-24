/*function Person(age) {
    this.age =age;
}
Person.prototype.eat = function(){
    console.log("人的吃");
};
function Student(sex) {
    this.sex = sex;
}

Student.prototype.study = function(){
  console.log('学生学习')
};
Student.prototype = new Person(10);
var stu = new Student("男");

stu.study();*/


/*
* 改变原型对象指向时添加原型方法的正确方式
*
* 在改变原型对象的指向 之前   向原型中添加方法  调用添加的方法是找不到的  ×
* 在改变原型对象的指向 之后  向原型中添加方法  再调用添加的方法   √
*
*
*
* */
function Person(age) {
    this.age =age;
}
Person.prototype.eat = function(){
    console.log("人的吃");
};
function Student(sex) {
    this.sex = sex;
}
Student.prototype = new Person(10);
Student.prototype.study = function(){
    console.log('学生学习')
};
var stu = new Student("男");

stu.study();
stu.eat();
console.log(stu.age);

// Person.prototype.run = function(){
//     console.log("pao")
// };
Person.prototype = {
    constructor:Person,
    go:function(){
        console.log("go")
    }
};
Person.prototype.run = function(){
    console.log("pao")
};
var per = new Person(10);
per.run();
per.go();
console.dir(Person);

console.dir(per);
