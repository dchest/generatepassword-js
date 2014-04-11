Safe pseudorandom password generator in JavaScript
==================================================

Uses [sjcl](https://github.com/bitwiseshiftleft/sjcl)'s random number
generator, which is based on Fortuna and is seeded with
window.crypto.getRandomValues on modern browsers and DOM events on old
browsers. (We could use just window.crypto.getRandomValues if we didn't have to
support older browsers, but such is life.)

Generates passwords using this alphabet:

    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@

which contains 64 characters (if you want to modify the alphabet, take care not
to introduce modulo bias -- use alphabet lengths which are power of two).


Example
-------

	generatePassword(16) // => "depaThWbS3En_FEb"	


Public domain dedication
------------------------

Written in 2014 by Dmitry Chestnykh <dmitry@codingrobots.com>

To the extent possible under law, the author(s) have dedicated all copyright
and related and neighboring rights to this software to the public domain
worldwide. This software is distributed without any warranty.  You should have
received a copy of the CC0 Public Domain Dedication along with this software.
If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.


SJCL (included sjcl.min.js) has its own license (dual-licensed: BSD or GPL2):
https://github.com/bitwiseshiftleft/sjcl/blob/master/README/COPYRIGHT
