import { describe, it, expect } from 'vitest';
import { getLeaseById, getLeasesByTenantId, leases } from './lease';

describe('lease model', () => {
  it('exports a non-empty leases array', () => {
    expect(Array.isArray(leases)).toBe(true);
    expect(leases.length).toBeGreaterThan(0);
  });

  it('each lease has required fields', () => {
    for (const lease of leases) {
      expect(lease).toHaveProperty('id');
      expect(lease).toHaveProperty('propertyId');
      expect(lease).toHaveProperty('tenantId');
      expect(lease).toHaveProperty('propertyName');
      expect(lease).toHaveProperty('startDate');
      expect(lease).toHaveProperty('endDate');
      expect(lease).toHaveProperty('monthlyRent');
      expect(lease).toHaveProperty('currency');
      expect(lease).toHaveProperty('status');
    }
  });

  it('getLeaseById returns correct lease', () => {
    const lease = getLeaseById('lease-001');
    expect(lease).toBeDefined();
    expect(lease!.propertyName).toBeDefined();
  });

  it('getLeaseById returns undefined for missing id', () => {
    expect(getLeaseById('nonexistent')).toBeUndefined();
  });

  it('getLeasesByTenantId returns array', () => {
    const result = getLeasesByTenantId('tenant-001');
    expect(Array.isArray(result)).toBe(true);
  });

  it('getLeasesByTenantId returns empty array for missing tenant', () => {
    const result = getLeasesByTenantId('nonexistent');
    expect(result).toEqual([]);
  });
});
