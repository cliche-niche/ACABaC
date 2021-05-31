var crypto = require('crypto');
var fs = require('fs');

//generating the keys, changing passphrase changes keys
var {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      //how does a french cat laugh?
      passphrase: 'le meow'
    }
});

//writing the pair into separate files
fs.writeFileSync('public.pem', publicKey);
fs.writeFileSync('private.pem', privateKey);