const { test } = require('node:test');
const assert = require('node:assert/strict');
const helloPaperclip = require('./index.js');

test('helloPaperclip is a function', () => {
  assert.strictEqual(typeof helloPaperclip, 'function');
});

test('helloPaperclip returns expected greeting', () => {
  assert.strictEqual(helloPaperclip(), 'Paperclip workspace is initialized');
});

test('helloPaperclip returns a non-empty string', () => {
  const result = helloPaperclip();
  assert.strictEqual(typeof result, 'string');
  assert.ok(result.length > 0);
});
