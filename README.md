### [Assignment 1](./Assignment1)
This assignment was about **finding** the **nonce**. 
It contains two files:
- [minCrypto.js](./Assignment1/minCrypto.js): It uses `crypto` module to calculate the nonce, the smallest number, 
which, when appended to our data, produces a hash lesser than a given target.
- [mining.js](./Assignment1/mining.js): It is for the same purpose, but uses `node-forge` module.


### [Assignment 2](./Assignment2)
This assignment was about **verifying signatures**.
It contains three `.js` files, [generatePair.js](./Assignment2/generatePair.js) for generating a pair of 
public and private keys, [sign.js](./Assignment2/sign.js) for signing with private key,
and [verify.js](./Assignment2/verify.js) for verifying the signature with the corresponding public key.


### [Assignment 3](./Assignment3)
This assignment was about converting transaction data into **binary format** and storing it in a `.dat` file.
[trData.js](./Assignment3/trData.js) is the only file.