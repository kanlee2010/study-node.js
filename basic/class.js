var person = {};
person['name'] = 'My name';
person.age = 20;
person.add = function(a, b) {
    return a + b;
}
console.log("이름: " + person.name);
console.log("나이: " + person['age']);
console.log("더하기 함수1: " + person.add(10, 11));

var person2 = {
    name: 'My name',
    age: 20,
    add: function(a, b) {
        return a+b;
    }
}
console.log("더하기 함수2: " + person2.add(10, 12));

function Person(name, age) {
        this.name = name;
        this.age = age;
}
Person.prototype.walk = function(speed) {
    console.log(this.name + '가 ' + speed + 'km 속도로 걸어 갑니다.');
}
var person = new Person('소녀시대', 20);
person.walk(10);