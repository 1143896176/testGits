function Student(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Student.prototype = {
    //必须添加构造器的指向，否则不会找到构造函数，即不知道生成的实例是什么类型的
    // constructor:Student,
    height:'188',
    study:function(){
        console.log('学习使我快乐')
    }
}
var stu = new Student('wang',18,'男');

console.dir(Student);
console.dir(stu);


//原型中的方法是可以相互访问的
function Animal(name,age) {
    this.name = name;
    this.age = age;
}
Animal.prototype.play = function(){
    console.log('玩球');
    this.sleep()
};
Animal.prototype.sleep = function () {
    console.log('睡觉了')
};

Animal.prototype.age = 20;
Animal.prototype.sex = '女';
var dog = new Animal('二狗',18);
dog.play();
console.log(dog.age) ;//18


console.log(dog.sex);//女
/*
* 获取实例对象属性值时，会先从实例对象里获取，如果没有该属性就从创建该实例对象的构造函数的原型对象里获取
* 即：dog.age  > dog.__propto__.age
*
* */

