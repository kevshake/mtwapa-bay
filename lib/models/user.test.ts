import { describe, it, expect } from 'vitest';
import { getUserById, getUserByEmail, users } from './user';

describe('user model', () => {
  it('exports a non-empty users array', () => {
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  it('each user has required fields', () => {
    for (const user of users) {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('firstName');
      expect(user).toHaveProperty('lastName');
      expect(user).toHaveProperty('role');
      expect(user).toHaveProperty('createdAt');
    }
  });

  it('getUserById returns correct user', () => {
    const user = getUserById('user-001');
    expect(user).toBeDefined();
    expect(user!.email).toBe('admin@mtwapabay.com');
    expect(user!.role).toBe('admin');
  });

  it('getUserById returns undefined for missing id', () => {
    expect(getUserById('nonexistent')).toBeUndefined();
  });

  it('getUserByEmail returns correct user', () => {
    const user = getUserByEmail('hello@mtwapabay.com');
    expect(user).toBeDefined();
    expect(user!.id).toBe('user-002');
    expect(user!.role).toBe('landlord');
  });

  it('getUserByEmail returns undefined for missing email', () => {
    expect(getUserByEmail('nobody@example.com')).toBeUndefined();
  });

  it('getUserByEmail is case-sensitive', () => {
    expect(getUserByEmail('HELLO@mtwapabay.com')).toBeUndefined();
  });
});
