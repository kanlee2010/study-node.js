console.log("argv �Ķ���� ��: " + process.argv.length);
console.log(process.argv);

process.argv.forEach(function(item, index) {
    console.log(index + " " + item);
})