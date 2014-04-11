/* Public domain / CC0 */

function getRandomBytes(length) {
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
 
function generatePassword(length) {
  // To avoid modulo bias, alphabet length must conform to 256 % length == 0, e.g. 64.
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@'.split('');
  var bytes = getRandomBytes(length);
  var result = "", i;
  for (i = 0; i < length; i++) {
    result += alphabet[bytes[i] % alphabet.length];
  }
  return result;
}
