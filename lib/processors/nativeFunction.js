module.exports = {
  // Here, you can strip out any non-JS content
  // and split into multiple strings to lint.
  preprocess(text /*, fileName*/) {
    const substitute = text.replace(
      /native\s+function\s+(\w+)\s*\(\)/g,
      (match, p1) => `var ${p1} = function() {}`
    );

    return substitute ? [substitute] : [text];
  },
  // `messages` argument contains two-dimensional array of Message objects
  // where each top-level array item contains array of lint messages related
  // to the text that was returned in array from preprocess() method.
  postprocess(messages /*, fileName*/) {
    return messages[0];
  }
};
