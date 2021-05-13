Sample Inputs have been provided at the end with corresponding outputs.

Pair Generation:            generatePair.js
Signing the text:           sign.js
Decryption/ Verification:   verify.js

Private Key in: private.pem
Passphrase: le meow
Public Key in: public.pem

Unencrypted text
Correct sample input: "generic input" (w/o the quotes)
Incorrect sample input: "incorrect" (w/o the quotes)

Encrypted text (in buffer form)
In the file "sign.txt", contained in the same folder.
The "sign.js" file writes the signature into "sign.txt".

### SAMPLE INPUT 1 ###
*None required for generatePair.js 
*sign.js:
        On prompt of>> Enter the name of file containing the private key: private.pem
        On prompt of>> Enter the passphrase: le meow
        On prompt of>> Enter the text to be signed: generic input
        On prompt of>> Do you want to change the file location it writes the sign into? (Y/N)   n
        ^Input can be changed for file location
*verify.js:
        On prompt of>> Enter the name of file containing the public key: public.pem
        On prompt of>> Do you want to change the path of signed text/ encrypted text? (Y/N)   n
        On prompt of>> Enter the unencrypted text: generic input
        ^^Input can be changed for path

Corresponding Output: Signature Verified!


### SAMPLE INPUT 2 ###
*None required for generatePair.js 
*sign.js:
        On prompt of>> Enter the name of file containing the private key: private.pem
        On prompt of>> Enter the passphrase: le meow
        On prompt of>> Enter the text to be signed: generic input
        On prompt of>> Do you want to change the file location it writes the sign into? (Y/N)   n
        ^Input can be changed for file location
*verify.js:
        On prompt of>> Enter the name of file containing the public key: public.pem
        On prompt of>> Do you want to change the path of signed text/ encrypted text? (Y/N)   n
        On prompt of>> Enter the unencrypted text: incorrect
        ^^Input can be changed for path

Corresponding Output: Verification failed