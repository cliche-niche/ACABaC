Sample Inputs have been provided at the end with corresponding outputs.

This directory has three `.js` files:
- Pair Generation:            [generatePair.js](./generatePair.js)
- Signing the text:           [sign.js](./sign.js)
- Decryption/ Verification:   [verify.js](./verify.js)

- Private Key in: private.pem
- Passphrase:   le meow
- Public Key in: public.pem

- Unencrypted text
  - Correct sample input: `generic input`
  - Incorrect sample input: `incorrect`

- Encrypted text (in buffer form)
  - In the file "sign.txt", contained in the same folder.
  - The "sign.js" file writes the signature into "sign.txt".


##### SAMPLE INPUT 1
- None required for generatePair.js 
- sign.js:
  - On prompt of: Enter the name of file containing the private key: private.pem
  - On prompt of: Enter the passphrase: le meow
  - On prompt of: Enter the text to be signed: generic input
  - On prompt of: Do you want to change the file location it writes the sign into? (Y/N)   n
- verify.js:
  - On prompt of: Enter the name of file containing the public key: public.pem
  - On prompt of: Do you want to change the path of signed text/ encrypted text? (Y/N)   n
  - On prompt of: Enter the unencrypted text: generic input

Corresponding Output: Signature Verified!


##### SAMPLE INPUT 2
- None required for generatePair.js 
- sign.js:
   - On prompt of: Enter the name of file containing the private key: private.pem
   - On prompt of: Enter the passphrase: le meow
   - On prompt of: Enter the text to be signed: generic input
   - On prompt of: Do you want to change the file location it writes the sign into? (Y/N)   n
- verify.js:
   - On prompt of: Enter the name of file containing the public key: public.pem
   - On prompt of: Do you want to change the path of signed text/ encrypted text? (Y/N)   n
   - On prompt of: Enter the unencrypted text: incorrect

Corresponding Output: Verification failed