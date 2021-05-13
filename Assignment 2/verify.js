var fs = require('fs');
var crypto = require('crypto');
var prompt = require('prompt-sync')();

/*This program verifies signatures. It requires file name of 
public key, path of encrypted text, and unencrypted text.
You can choose a different path for encrypted text if you want.*/


//public key
var pub = prompt("Enter the name of file containing the public key: "); //public.pem
pub = fs.readFileSync(pub);


//path of encrypted text
var sig = "sign.txt"; //Default location, as signed into by sign.js
var ch = prompt("Do you want to change the path of signed text/ encrypted text? (Y/N)   ");
ch = ch.toUpperCase();
if(ch=="Y" || ch=="YES"){
    var sig = prompt("Enter new path of encrypted text: ");
}
sig = fs.readFileSync(sig);

//unencrypted text
var une = prompt("Enter the unencrypted text: ");

//verification
var ver= crypto.createVerify("SHA256");
ver.write(une);
ver.end();

if(ver.verify({key: pub, padding: crypto.constants.RSA_PKCS1_PSS_PADDING}, sig)){
    console.log("Signature verified!");
}else{
    console.log("Verification failed");
}