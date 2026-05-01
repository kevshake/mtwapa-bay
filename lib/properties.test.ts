import { describe, it, expect } from 'vitest';
import { getPropertyBySlug, formatPrice, properties } from './properties';

describe('properties', () => {
  it('exports a non-empty properties array', () => {
    expect(Array.isArray(properties)).toBe(true);
    expect(properties.length).toBeGreaterThan(0);
  });

  it('each property has required fields', () => {
    for (const prop of properties) {
      expect(prop).toHaveProperty('id');
      expect(prop).toHaveProperty('slug');
      expect(prop).toHaveProperty('name');
      expect(prop).toHaveProperty('type');
      expect(prop).toHaveProperty('status');
      expect(prop).toHaveProperty('price');
      expect(prop).toHaveProperty('currency');
      expect(prop).toHaveProperty('bedrooms');
      expect(prop).toHaveProperty('bathrooms');
      expect(prop).toHaveProperty('coordinates');
      expect(prop).toHaveProperty('images');
      expect(Array.isArray(prop.images)).toBe(true);
      expect(prop.images.length).toBeGreaterThan(0);
    }
  });

  it('property coordinates are valid', () => {
    for (const prop of properties) {
      expect(prop.coordinates.lat).toBeGreaterThan(-90);
      expect(prop.coordinates.lat).toBeLessThan(90);
      expect(prop.coordinates.lng).toBeGreaterThan(-180);
      expect(prop.coordinates.lng).toBeLessThan(180);
    }
  });

  it('property slugs are unique', () => {
    const slugs = properties.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('property IDs are unique', () => {
    const ids = properties.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  describe('getPropertyBySlug', () => {
    it('returns the correct property', () => {
      const prop = getPropertyBySlug('ocean-crown-villa');
      expect(prop).toBeDefined();
      expect(prop!.id).toBe('prop-001');
      expect(prop!.name).toBe('Ocean Crown Villa');
    });

    it('returns undefined for nonexistent slug', () => {
      expect(getPropertyBySlug('nonexistent-slug')).toBeUndefined();
    });
  });

  describe('formatPrice', () => {
    it('formats price with USD default', () => {
      const result = formatPrice(2_850_000);
      expect(result).toContain('2,850,000');
      expect(result).toContain('$');
    });

    it('formats price with explicit currency', () => {
      expect(formatPrice(1_200_000, 'USD')).toContain('$');
    });

    it('handles zero price', () => {
      expect(typeof formatPrice(0)).toBe('string');
      expect(formatPrice(0).length).toBeGreaterThan(0);
    });
  });
});
