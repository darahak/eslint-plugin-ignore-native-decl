const Applause = require('applause');

module.exports = {
  // Here, you can strip out any non-JS content
  // and split into multiple strings to lint.
  preprocess(text, fileName) {
    const applause = Applause.create({
      patterns: [
        {
          match: /native\s+function\s+(\w+)\s*\(\)/g,
          replacement: 'var $1 = function() {}'
        }
      ]
    });

    const substitute = applause.replace(text);
    return [substitute.content];
  },
  // `messages` argument contains two-dimensional array of Message objects
  // where each top-level array item contains array of lint messages related
  // to the text that was returned in array from preprocess() method.
  postprocess(messages, fileName) {
    const message = messages[0];
    return message;
  }
};
