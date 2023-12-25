const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dict = {};
  for (let i = 0; i < domains.length; i++){
      let arr = domains[i].split('.');
      let key = "";
      for (let j = arr.length - 1; j >= 0; j--){
          key += "." + arr[j];
          if (dict[key] === undefined)
              dict[key] = 0;
          dict[key] += 1
      }
  }
  return dict
}

module.exports = {
  getDNSStats
};
