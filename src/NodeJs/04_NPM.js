var sd = require('silly-datetime');
var md5 = require('md5-node');


b = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
// 2015-07-06 15:10

a = sd.fromNow(+new Date() - 2000);
// a few seconds ago
console.log(b)


console.log(md5(b))
