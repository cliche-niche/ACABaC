var readline = require("readline-sync");
var crypto = require("crypto");
var fs = require("fs");
var now =require("nano-time");


var tr_data = Buffer.from('', 'ascii'); //the whole transaction data
var buf; //for intermediate buffers

var time = BigInt(now()); //current time


var ni = parseInt(readline.question("\nEnter the number of inputs: "), 10); //number of inputs, 32 bit integer
buf = Buffer.allocUnsafe(4); //allocate 4 bytes to buf, then write `ni` into it, then concatenate buf with tr_data
buf.writeInt32BE(ni);
tr_data = Buffer.concat([tr_data, buf]); //this pattern is followed with every concatenation

for(var i=0; i<ni; i++){

    console.log(`\nInput #${(i+1).toString()}:`);

    var id = readline.question("Enter Transaction ID: "); //transaction id, in hex form
    buf = Buffer.from(id, 'hex');
    tr_data = Buffer.concat([tr_data, buf]);

    var ind = parseInt(readline.question("Enter index of output: "), 10); //index of output, 32 bit integer
    buf = Buffer.allocUnsafe(4);
    buf.writeInt32BE(ind);
    tr_data = Buffer.concat([tr_data, buf]);

    var lsig = parseInt(readline.question("Enter the length of signature: "), 10); //length of signature, 32 bit integer
    buf.writeInt32BE(lsig);
    tr_data = Buffer.concat([tr_data, buf]);

    var sign = readline.question("Enter the signature: "); //signature, in hex form
    buf = Buffer.from(sign, 'hex');
    tr_data = Buffer.concat([tr_data, buf]);

}


var no = parseInt(readline.question("\n\nEnter the number of outputs: "), 10); //number of outputs
buf = Buffer.allocUnsafe(4);
buf.writeInt32BE(no);
tr_data = Buffer.concat([tr_data, buf]);

for(var i=0; i<no; i++){

    console.log(`\nOutput #${(i+1).toString()}+:`);

    var nc = BigInt(readline.question("Enter the number of coins: ")); //number of coins, 64 bit integer
    buf = Buffer.allocUnsafe(8);
    buf.writeBigInt64BE(nc);
    tr_data = Buffer.concat([tr_data, buf]);

    var lpub = parseInt(readline.question("Enter the length of public key: "), 10); //length of public key, 32 bit integer
    buf = Buffer.allocUnsafe(4);
    buf.writeInt32BE(lpub);
    tr_data = Buffer.concat([tr_data, buf]);

    var pub = readline.question("Enter the public key: "); //public key, in .pem format
    buf = Buffer.from(pub, 'base64');
    tr_data = Buffer.concat([tr_data, buf]);
    
}


buf = Buffer.allocUnsafe(8);
buf.writeBigInt64BE(time);
tr_data = Buffer.concat([buf, tr_data]);

var tr_id = crypto.createHash('sha256').update(tr_data).digest('hex');

var fileName = tr_id + ".dat";

fs.writeFileSync(fileName, tr_data);


/* 
time: take time=> convert to bigInt=> convert to 8 bytes

input: num of inputs, [trans id, index of output, len of sig, signature]
size:    32 bits       32 bytes     4 bytes         4 bytes=>  x bytes  

output: num of outputs, [num of coins, len of pubKey, pubkey]
size:       32 bits         8 bytes        4 bytes => x bytes
*/