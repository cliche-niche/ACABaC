var readline = require("readline-sync");
var crypto = require("crypto");
var fs = require("fs");
var now =require("nano-time");

var header = Buffer.allocUnsafe(116); //block header
var offset=0;
var before = BigInt(now()), after;

var ind = parseInt(readline.question("Enter the index of header: "), 10); //index
header.writeInt32BE(ind, offset);
offset += 4;

var parent = readline.question("Enter hash of the parent block: "); //hash of the parent block
var hash = crypto.createHash('sha256').update(parent).digest('hex');
header.write(hash, offset);
offset += 32;

var target = readline.question("Enter the target: "); //target used to find the nonce

var block = readline.question("Enter the path to file containing block: "); //block body
block = fs.readFileSync(block);
hash = crypto.createHash('sha256').update(block).digest('hex');
header.write(hash, offset);
offset += 32;

header.write(target, offset, 'hex');
offset += 32;

var nonce = BigInt('0');

while(1){
    var time = BigInt(now());
    header.writeBigInt64BE(time, offset);
    header.writeBigInt64BE(nonce, offset+8);
    if(crypto.createHash('sha256').update(header).digest('hex')<target){
        after = BigInt(now());
        console.log("Nonce:", nonce);
        console.log("Timestamp:", time);
        break;
    }
    nonce = nonce + 1n;
}

console.log((after-before)/(BigInt(1e9))); //Can be used to see the duration of execution

console.log(crypto.createHash('sha256').update(header).digest('hex'));
fs.writeFileSync("block.dat", header);

/*
7
41a82375fb23603aeb2129e6d05e2b4eb63b576db435f8e4ff2ad62ad4200fda
0000000f00000000000000000000000000000000000000000000000000000000
C:\Users\adity\Desktop\ACA\Assignment5\sample.dat

*/