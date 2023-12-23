const { interfaces } = require('mocha');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  try {
   if (Object.getOwnPropertyNames(date).length > 0)
     throw new RangeError('Invalid date!')
    if (date.getMonth() < 2 || date.getMonth() == 11) return "winter";
    if (date.getMonth() < 5) return "spring";
    if (date.getMonth() < 8) return "summer";
    return "autumn";
  }
  catch(err){
    throw new RangeError('Invalid date!');
  }
}

module.exports = {
  getSeason
};
