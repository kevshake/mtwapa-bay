import { describe, it, expect } from 'vitest';
import config from '../next.config';

describe('next.config', () => {
  it('exports a config object', () => {
    expect(config).toBeDefined();
    expect(typeof config).toBe('object');
  });
});
