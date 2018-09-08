const CryptoJS = require("crypto-js");

module.exports = class Encryption {
  constructor(message = 'He who controls the spice controls the universe', key = 'Shamash') {
    this.message = message;
    this.key = key;
  }

  encrypt(message = this.message, key = this.key) {
    const ciphertext = CryptoJS.AES.encrypt(message, key);
    return ciphertext.toString();
  }

  decrypt(encrypted, key = 'wrongkey') {
    if (key === this.key) {
      const bytes = CryptoJS.AES.decrypt(encrypted, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } else {
      return '';
    }
  }
}
