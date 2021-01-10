console.log("안녕하세요");
console.log('안녕하세요');
console.log("숫자 %d 입니다.", 10);
console.log("문자열 %s 입니다.", "안녕");
var person = {
    name : "소녀시대",
    age:20
};
console.log("json 객체 %j", person);
console.dir(person);

console.time("duration time");
var result = 0;
for(var i=0;i<1000;i++){
    result+=i;
}
console.timeEnd("duration time");

console.log("파일 이름: %s", __filename);
console.log("경로: %s", __dirname);