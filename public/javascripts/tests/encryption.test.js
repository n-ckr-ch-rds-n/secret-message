const Encryption = require('../encryption.js');

const encryption = new Encryption();

describe('Encryption', function() {
  it('encrypts and decrypts default message', function() {
    let encrypted = encryption.encrypt();
    expect(encryption.decrypt(encrypted, 'Shamash')).toEqual('He who controls the spice controls the universe');
  })

  it('can be passed different messages and keys', function() {
    let encrypted = encryption.encrypt('message', 'key');
    expect(encryption.decrypt(encrypted, 'key')).toEqual('message');
  })

  it('does not decrypt if passed the wrong key', function() {
    let encrypted = encryption.encrypt('message', 'key');
    expect(encryption.decrypt(encrypted, 'wrongkey')).toEqual('');
  })
})
