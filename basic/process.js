console.log("argv 파라미터 수: " + process.argv.length);
console.log(process.argv);

process.argv.forEach(function(item, index) {
    console.log(index + " " + item);
})