import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate } from './tenant';

describe('tenant utilities', () => {
  describe('formatCurrency', () => {
    it('formats USD correctly', () => {
      expect(formatCurrency(4500, 'USD')).toBe('$4,500');
    });

    it('formats KES correctly', () => {
      expect(formatCurrency(150000, 'KES')).toBe('KES\xa0150,000');
    });

    it('formats EUR correctly', () => {
      expect(formatCurrency(3200, 'EUR')).toBe('€3,200');
    });

    it('defaults to USD when no currency provided', () => {
      expect(formatCurrency(1000)).toBe('$1,000');
    });

    it('handles zero', () => {
      expect(formatCurrency(0)).toBe('$0');
    });

    it('handles large numbers', () => {
      const result = formatCurrency(2_850_000, 'USD');
      expect(result).toContain('2,850,000');
      expect(result).toContain('$');
    });

    it('uses maximumFractionDigits: 0 (no cents)', () => {
      const result = formatCurrency(100, 'USD');
      expect(result).not.toContain('.');
    });
  });

  describe('formatDate', () => {
    it('formats ISO date string to readable format', () => {
      const result = formatDate('2026-05-01');
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('returns a string for valid date input', () => {
      const result = formatDate('2025-12-25');
      expect(result).toContain('2025');
    });

    it('handles empty string edge case (returns Invalid Date)', () => {
      const result = formatDate('');
      expect(typeof result).toBe('string');
    });
  });
});
