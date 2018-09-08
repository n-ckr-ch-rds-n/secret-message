const CryptoJS = require("crypto-js");

module.exports = class Encryption {
  constructor() {
    this.message = 'He who controls the spice controls the universe';
    this.key = 'Shamash';
  }

  encrypt(message = this.message, key = this.key) {
    const ciphertext = CryptoJS.AES.encrypt(message, key);
    return ciphertext.toString();
  }

  decrypt(encrypted, key) {
    const bytes = CryptoJS.AES.decrypt(encrypted, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
}
