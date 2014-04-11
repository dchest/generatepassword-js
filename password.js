/*
 * Written by @dchest
 * Public domain / CC0
 */

function generatePassword(length) {

  function getRandomBytes(length) {
    // We use sjcl's generator with paranoia level = 0.
    // It's safer to wait until PRNG is better seeded in older browsers,
    // but this isn't yet implemented.
    var words = sjcl.random.randomWords(Math.ceil(length / 4), 0);
    var bytes = [];
    for (var i = 0; i < words.length; i++) {
      bytes.push((words[i] >>>  0) & 0xff);
      bytes.push((words[i] >>>  8) & 0xff);
      bytes.push((words[i] >>> 16) & 0xff);
      bytes.push((words[i] >>> 24) & 0xff);
    }
    return bytes.slice(0, length);
  }
 
  // To avoid modulo bias, alphabet length must conform to 256 % length == 0, e.g. 64.
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@'.split('');
  var bytes = getRandomBytes(length);
  var result = "", i;
  for (i = 0; i < length; i++) {
    result += alphabet[bytes[i] % alphabet.length];
  }
  return result;
}
