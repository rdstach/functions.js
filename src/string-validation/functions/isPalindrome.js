const string_util = require('./util/isString');

export default function isPalindrome(str) {
    string_util.isString(str);
    const reverse = str.split("").reverse().join("");

    return str === reverse;
};