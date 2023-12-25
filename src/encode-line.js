const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let s = '';
  if (str === '') return '';
  for(let i = 1; i < str.length; i++){ 
      if (str[i] === str[i - 1])
          count += 1
      else {
          if(count === 1)
              s += str[i - 1];
          else
              s += String(count) + str[i - 1];
          count = 1
      }
  }
  if(count === 1)
      s += str[str.length - 1];
  else
      s += String(count) + str[str.length - 1];
return s;
}

module.exports = {
  encodeLine
};
