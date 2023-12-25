const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let num = options.repeatTimes === undefined ? 1 : options.repeatTimes,
    sep = options.separator === undefined  ? "+" : String(options.separator),
    add = options.addition === undefined ?  "" : options.addition === null ? "null" : options.addition.toString(),
    addSep = options.additionSeparator === undefined ? "|" : String(options.additionSeparator),
    addRepTimes = options.additionRepeatTimes === undefined? 1 : options.additionRepeatTimes;
  if (options.addition === null )
    add = 'null';
  else if (typeof options.addition === 'object' && options.addition[Symbol.toPrimitive] != undefined)
    add = String(options.addition[Symbol.toPrimitive]('string'));
  let prom =  Array(addRepTimes).fill(add).join(addSep);
  return Array(num).fill(str+prom).join(sep);
}
module.exports = {
  repeater
};
