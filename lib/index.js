const nativeFn = require('./processors/nativeFunction.js');

module.exports.processors = {
  '.js': nativeFn
};
