const prompt = require('prompt-sync')();
var crypto = require('crypto');

/*much the same as the other one except 
that it uses crypto instead of node-forge*/
var target='0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';

const a = prompt('');
var i=1;
while(1){
    var h=crypto.createHash('sha256').update(a+i);
    if(h.digest('hex')<= target){
        break;
    }
    i++;
}

console.log(a+i);