var names = ['소녀시대', '걸스데이', '티아라'];
var users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];
users.push({name:'티아라', age:21});
console.dir(names);
console.dir(users);
console.log("사용자 수: " + users.length);
console.log("첫번째 사용자 수: " + users[0].name);

var op = function(a, b) {
    return a+b;
};
users.push(op);
console.dir(users);
console.log("세번째 배열 요소를 함수로 실행: " + users[3](10, 13));

for(var i=0; i<users.length; i++) {
    console.log("배열 원소 #" + i + " : " + users[i].name);
}

users.forEach(function(item, index) {
    console.log('배열 원소 #' + index + ' : ' + item.name);
});

var elem = users.pop();
console.dir(elem);
users.unshift({name:'티아라', age:29});
console.dir(users);
delete users[1];
console.log("사용자 수: " + users.length);
console.dir(users);

users.splice(1, 1); // (index, count)
console.log("사용자 수: " + users.length);
console.dir(users);

users.splice(1, 0, {name:'에프터스쿨', age:24}); // 중간 추가
console.log("사용자 수: " + users.length);
console.dir(users);

var users2 = users.slice(1, 2); //<-- from에서 to까지 복사
console.dir(users2);
