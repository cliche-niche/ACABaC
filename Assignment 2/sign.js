var fs = require('fs');
var crypto = require('crypto');
var prompt = require('prompt-sync')();


/*This program is for signing. It requires file name of private key, its 
passphrase and the unencrypted text. 
You can choose a different path for the file it signs into, if you want.*/


var priv = prompt("Enter the name of file containing the private key: "); //"private.pem" used in sample input
var priv= fs.readFileSync(priv);

var pass = prompt("Enter the passphrase: "); //"le meow" used in sample input


//content to be signed
var tbs = prompt("Enter the text to be signed: "); //"generic input" used in sample input

//signing
var sig= crypto.createSign('SHA256');
sig.write(tbs);
sig.end();

var s= sig.sign({key: priv, passphrase: pass, padding: crypto.constants.RSA_PKCS1_PSS_PADDING}); //uses PSS padding


var loc= 'sign.txt'; //Default location
var ch= prompt("Do you want to change the file location it writes the sign into? (Y/N)   ");
ch= ch.toUpperCase();
if(ch=='Y' || ch=='YES'){
    loc= prompt("Enter path of new location: ");
}

fs.writeFileSync(loc, s);