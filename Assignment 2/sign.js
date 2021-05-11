var fs = require('fs');
var crypto = require('crypto');
var prompt = require('prompt-sync')();


/*This program is for signing. It requires file name of private key, its 
passphrase and the file name containing the text that is to be signed, in this order.
For convenience, here are the parameters in reference to sample input:
    "private.pem"   |   "le meow"   |   "cor.txt"       
*/

//sample input has already been signed once


var file = prompt("Enter the name of file containing the private key: ");
var typ = file.substring(file.length-3, file.length); //type of file: pem or pub

var pass = prompt("Enter the passphrase: ");

var privKey= fs.readFileSync(file);

var privKeyObject = crypto.createPrivateKey({
    key: privKey,
    format: typ,
    passphrase: pass
})

var privateKey = privKeyObject.export({
    format: typ,
    type: 'pkcs8',
    cipher: 'aes-256-cbc',
    passphrase: pass
})

//content to be signed
var tbs = prompt("Enter name of file having content to be signed: ");
tbs= fs.readFileSync(tbs);

//signing
var sig= crypto.createSign('SHA256');
sig.write(tbs);
sig.end();

var s= sig.sign({key: privateKey, passphrase: pass, padding: crypto.constants.RSA_PKCS1_PSS_PADDING}); //PSS padding 
fs.writeFileSync('sign.txt', s); //writing the signature in a file