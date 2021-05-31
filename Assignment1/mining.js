const prompt = require('prompt-sync')();
var forge = require('node-forge');


var target=parseInt('0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', 16); //convert into an integer

const a = prompt('');
var i=1;
while(1){
    var l = forge.md.sha256.create(); //create object
    l.update(a+i); //update with a+i
    
    if(parseInt(l.digest().toHex().toString(), 16)<= target){
        //calculate hash of string and then parse into an integer and then compare
        /*could be done directly by comparing strings too 
        as done in the other program that uses crypto*/
        break;
    }
    i++;
}

console.log(a+i);