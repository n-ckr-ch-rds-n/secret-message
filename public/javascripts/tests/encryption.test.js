const Encryption = require('../encryption.js');

const encryption = new Encryption();

describe('Encryption', function() {
  it('encrypts and decrypts default message', function() {
    let encrypted = encryption.encrypt();
    expect(encryption.decrypt(encrypted, 'Shamash')).toEqual('He who controls the spice controls the universe');
  })
})
