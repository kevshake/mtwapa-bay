import { describe, it, expect } from 'vitest';
import { getTenantById, getTenantByUserId, tenants } from './tenant';

describe('tenant model', () => {
  it('exports a non-empty tenants array', () => {
    expect(Array.isArray(tenants)).toBe(true);
    expect(tenants.length).toBeGreaterThan(0);
  });

  it('each tenant has required fields', () => {
    for (const tenant of tenants) {
      expect(tenant).toHaveProperty('id');
      expect(tenant).toHaveProperty('userId');
      expect(tenant).toHaveProperty('firstName');
      expect(tenant).toHaveProperty('lastName');
      expect(tenant).toHaveProperty('email');
      expect(tenant).toHaveProperty('phone');
      expect(tenant).toHaveProperty('emergencyContact');
      expect(tenant).toHaveProperty('createdAt');
    }
  });

  it('emergencyContact has required fields', () => {
    for (const tenant of tenants) {
      expect(tenant.emergencyContact).toHaveProperty('name');
      expect(tenant.emergencyContact).toHaveProperty('phone');
      expect(tenant.emergencyContact).toHaveProperty('relationship');
    }
  });

  it('getTenantById returns correct tenant', () => {
    const tenant = getTenantById('tenant-001');
    expect(tenant).toBeDefined();
    expect(tenant!.firstName).toBe('James');
    expect(tenant!.lastName).toBe('Kariuki');
  });

  it('getTenantById returns undefined for missing id', () => {
    expect(getTenantById('nonexistent')).toBeUndefined();
  });

  it('getTenantByUserId returns correct tenant', () => {
    const tenant = getTenantByUserId('user-003');
    expect(tenant).toBeDefined();
    expect(tenant!.id).toBe('tenant-001');
  });

  it('getTenantByUserId returns undefined for missing userId', () => {
    expect(getTenantByUserId('nonexistent')).toBeUndefined();
  });
});
