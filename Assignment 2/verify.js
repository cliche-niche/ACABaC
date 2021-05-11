var fs = require('fs');
var crypto = require('crypto');
var prompt = require('prompt-sync')();

/*This program verifies signatures. It requires file name of public key,
file name containing encrypted text, and file name containing unencrypted text, in this order
For convenience, the parameters are provided with reference to the sample input:
    "public.pem"    |   "sign.txt"  |   "cor.txt" for correct verification
                                    |   "inc.txt" for incorrect verification*/

var file = prompt("Enter the name of file containing the public key: ");
var typ = file.substring(file.length-3, file.length); //type of file: pem or pub

var pubKey= fs.readFileSync(file);

const pubKeyObject = crypto.createPublicKey({
    key: pubKey,
    format: typ
})

const publicKey = pubKeyObject.export({
    format: typ,
    type: 'spki'
})

var sig = prompt("Enter name of file having signed content/ encrypted text: ");
sig= fs.readFileSync(sig);

var une = prompt("Enter name of file having unencrypted text: ");
une= fs.readFileSync(une);

//verification
var ver= crypto.createVerify('SHA256');
ver.write(une);
ver.end();
if(ver.verify({key: publicKey, padding: crypto.constants.RSA_PKCS1_PSS_PADDING}, sig)){
    console.log("Signature verified!");
}else{
    console.log("Verification failed");
}