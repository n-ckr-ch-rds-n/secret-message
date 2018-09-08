const Encryption = require('../encryption.js');

describe('Encryption', function() {
  it('encrypts and decrypts default message', function() {
    const encryption = new Encryption();
    let encrypted = encryption.encrypt();
    expect(encryption.decrypt(encrypted, 'Shamash')).toEqual('He who controls the spice controls the universe');
  })

  it('can be passed different messages and keys', function() {
    const encryption = new Encryption('message', 'key');
    let encrypted = encryption.encrypt();
    expect(encryption.decrypt(encrypted, 'key')).toEqual('message');
  })

  it('does not decrypt if passed the wrong key', function() {
    const encryption = new Encryption();
    let encrypted = encryption.encrypt();
    expect(encryption.decrypt(encrypted, 'wrongkey')).toEqual('');
  })
})
