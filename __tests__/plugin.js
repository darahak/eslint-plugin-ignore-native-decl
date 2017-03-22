const path = require('path');
const fs = require('fs');
const processor = require('../lib/processors/nativeFunction');

function format(file) {
  const filePath = path.join(__dirname, 'fixtures', file);
  const text = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return processor.preprocess(text);
}

test('Replaces all occurrences of native functions with empty functions', () => {
  const transformed = format('nativeDecl.js')[0];
  expect(transformed).not.toContain('native');
  expect(transformed).toContain('function() {}');
});
