var readline = require("readline-sync");
var crypto = require("crypto");
var fs = require("fs");

var path = readline.question("\nEnter the path: ");
var bin_data = fs.readFileSync(path);

var ind=0;

console.log("Transaction ID: "+crypto.createHash('sha256').update(bin_data).digest('hex'));

console.log("Timestamp: "+(bin_data.readBigInt64BE(ind)).toString()+'\n');
ind += 8;

var ni = bin_data.readInt32BE(ind);
console.log("Number of inputs: "+(ni).toString()+'\n');
ind += 4;

for(var i=0; i<ni; i++){
    console.log(`\tInput ${(i+1).toString()}:`);

    id = bin_data.subarray(ind, ind+32).toString('hex');
    console.log("\t\tTransaction ID: "+id);
    ind += 32;

    index = bin_data.readInt32BE(ind);
    console.log("\t\tIndex: "+ (index).toString());
    ind += 4;

    len = bin_data.readInt32BE(ind);
    console.log("\t\tLength of Signature: "+ (len).toString());
    ind += 4;

    sig = bin_data.subarray(ind, ind+len).toString('hex');
    console.log("\t\tSignature: "+sig);
    ind += len;

    console.log('\n');
}


var no = bin_data.readInt32BE(ind);
console.log("Number of outputs: "+(no).toString());
ind += 4;

for(var i=0; i<no; i++){
    console.log(`\tOutput ${(i+1).toString()}:`);

    coins = bin_data.readBigInt64BE(ind);
    console.log("\t\tNumber of coins: "+ (coins).toString());
    ind += 8;

    len = bin_data.readInt32BE(ind);
    console.log("\t\tLength of public key: "+ (len).toString());
    ind += 4;

    sig = bin_data.subarray(ind, ind+len).toString('utf-8');
    console.log("\t\tPublic Key: "+sig);
    ind += len;
}