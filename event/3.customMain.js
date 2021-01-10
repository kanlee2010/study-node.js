var calc = require('./3.custom_event');

var calc1 = new calc();
calc1.emit('stop');

console.log("Calc에 stop 이벤트 전달함.");