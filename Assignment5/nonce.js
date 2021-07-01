var readline = require("readline-sync");
var crypto = require("crypto");
var fs = require("fs");
var now =require("nano-time");

var header = Buffer.allocUnsafe(4); //block header
var before = BigInt(now()), after;

var ind = parseInt(readline.question("Enter the index of header: "), 10); //index, 4 bytes
header.writeInt32BE(ind);

var parent = readline.question("Enter hash of the parent block: "); //hash of the parent block, 32 bytes
var buf = Buffer.from(parent, 'hex');
header = Buffer.concat([header, buf]);

var target = readline.question("Enter the target: "); //target used to find the nonce, 32 bytes

var block = readline.question("Enter the path to file containing block: "); //block body
block = fs.readFileSync(block);
var hash = crypto.createHash('sha256').update(block).digest('hex'); //hash of block body, 32 bytes
buf = Buffer.from(hash, 'hex');
header = Buffer.concat([header, buf]);

buf = Buffer.from(target, 'hex');
header = Buffer.concat([header, buf]);
buf = Buffer.allocUnsafe(8);

var nonce = BigInt('0');
var tmp = header;

while(1){
    header = tmp;
    var time = BigInt(now());
    buf.writeBigInt64BE(time);
    header = Buffer.concat([header, buf]);
    buf.writeBigInt64BE(nonce);
    header = Buffer.concat([header, buf]);
    if(crypto.createHash('sha256').update(header).digest('hex')<=target){
        after = BigInt(now());
        console.log("Nonce:", nonce);
        console.log("Timestamp:", time);
        break;
    }
    nonce = nonce + 1n;
}

console.log("Duration:", (after-before)/(BigInt(1e9))); //Can be used to see the duration of execution

console.log("Hash:", crypto.createHash('sha256').update(header).digest('hex'));