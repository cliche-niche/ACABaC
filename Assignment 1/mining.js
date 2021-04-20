const prompt = require('prompt-sync')();
var forge = require('node-forge');


var target=parseInt('0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', 16);

const a = prompt('');
var i=1;
while(1){
    var l = forge.md.sha256.create();
    l.update(a+i);
    if(parseInt(l.digest().toHex().toString(), 16)<= target){
        break;
    }
    i++;
}

console.log(a+i);