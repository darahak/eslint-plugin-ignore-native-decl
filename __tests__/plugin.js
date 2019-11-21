const path = require('path');
const fs = require('fs');
const processor = require('../lib/processors/nativeFunction');

function getFixturePath(file) {
  return path.join(__dirname, 'fixtures', file);
}

function format(file) {
  const text = fs.readFileSync(getFixturePath(file), { encoding: 'utf-8' });
  return processor.preprocess(text);
}

test('Replaces all occurrences of native functions with empty functions', () => {
  const transformed = format('nativeDecl.js')[0];

  expect(transformed).not.toContain('native function');
  expect(transformed).toContain('function() {}');

  expect(transformed).toMatchSnapshot();
});

test('Leaves source code untouched if it has no native function declarations', () => {
  const fixture = 'standardDecl.js';
  const transformed = format(fixture)[0];

  expect(transformed).not.toContain('native function');

  const original = fs.readFileSync(getFixturePath(fixture), {
    encoding: 'utf-8'
  });

  expect(transformed).toEqual(original);

  expect(transformed).toMatchSnapshot();
});

// TODO: Write a test for postprocess().
