// Lightweight sanity check: import the index.js and call the exported function
try {
  const hello = require('../src/index.js');
  console.log(hello());
} catch (e) {
  console.error('Sanity test failed:', e && e.message ? e.message : e);
  process.exit(1);
}
