import { describe, it, expect } from 'vitest';
import { metadata } from '../lib/metadata';

describe('layout metadata', () => {
  it('has a title', () => {
    expect(metadata.title).toBeDefined();
    expect(typeof metadata.title).toBe('string');
    expect(metadata.title.length).toBeGreaterThan(0);
  });

  it('has a description', () => {
    expect(metadata.description).toBeDefined();
    expect(typeof metadata.description).toBe('string');
    expect(metadata.description.length).toBeGreaterThan(0);
  });

  it('title contains Mtwapa Bay', () => {
    expect(metadata.title).toContain('Mtwapa Bay');
  });

  it('description mentions Africa or luxury', () => {
    const desc = (metadata.description as string).toLowerCase();
    expect(desc.includes('africa') || desc.includes('luxury')).toBe(true);
  });

  it('metadataBase is set to the correct domain', () => {
    expect(metadata.metadataBase).toBeDefined();
    expect(metadata.metadataBase!.toString()).toBe('https://mtwapabay.com/');
  });
});
