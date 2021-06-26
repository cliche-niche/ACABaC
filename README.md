### [Assignment 1](./Assignment1)
This assignment was about **finding** the **nonce**. 
It contains two files:
- [minCrypto.js](./Assignment1/minCrypto.js): It uses `crypto` module to calculate the nonce, the smallest number, 
which, when appended to our data, produces a hash lesser than a given target.
- [mining.js](./Assignment1/mining.js): It is for the same purpose, but uses `node-forge` module.


### [Assignment 2](./Assignment2)
This assignment was about **verifying signatures**.

It contains three `.js` files:
- [generatePair.js](./Assignment2/generatePair.js) for generating a pair of public and private keys
- [sign.js](./Assignment2/sign.js) for signing with private key
- [verify.js](./Assignment2/verify.js) for verifying the signature with the corresponding public key.


### [Assignment 3](./Assignment3)
This assignment was about converting transaction data into **binary format** and storing it in a `.dat` file.

[trData.js](./Assignment3/trData.js) is the only file.

### [Assignment 4](./Assignment4)
This assignment was the opposite of the previous assignment. It takes input in **binary format** and prints the details of transaction data.

[readBinData.js](./Assignment4/readBinData.js) is the only file.


### [Assignment 5](./Assignment5)
This assignment calculates the block header for a given block body by asking for index of the block, hash of the parent block, target (corresponding to which a nonce is calculated), and lastly, the path to file containing the block.
It also uses the timestamp of the moment when a nonce value is used. 

[nonce.js](./Assignment5/nonce.js) is the only `.js` file.