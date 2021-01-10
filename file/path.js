
var os = require('os');
console.log('hostname: ' + os.hostname());
console.log('memory: ' + os.freemem());

var path = require('path');
var directories = ['Users', 'Mars', 'docs'];
var dir = directories.join();
console.log('dir: ' + dir);

var dir2 = directories.join(path.sep);
console.log('dir2: ' + dir2);

var filepath = path.join('/Users/Mars', 'notepad.exe');
console.log('filepath: ' + filepath);

var dirname = path.dirname(filepath);
console.log('dirname: ' + dirname);
var basename = path.basename(filepath);
console.log('basename: ' + basename);
var extname = path.extname(filepath);
console.log('extname: ' + extname);
