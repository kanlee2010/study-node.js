var fs = require('fs');
var data = fs.readFileSync('../package.json', 'utf8');
console.log("readFileSync:");
console.log(data);

fs.readFile('../package.json', 'utf8', function(err, data) {
    console.log("readFile:");
    console.log(data);
});
