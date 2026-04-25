export type UserRole = 'admin' | 'landlord' | 'tenant' | 'viewer';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  avatarUrl?: string;
  createdAt: string;
  lastLogin?: string;
}

export const users: User[] = [
  {
    id: 'user-001',
    email: 'admin@mtwapabay.com',
    firstName: 'Amina',
    lastName: 'Ochieng',
    role: 'admin',
    phone: '+254700000001',
    createdAt: '2023-01-01',
    lastLogin: '2026-04-24',
  },
  {
    id: 'user-002',
    email: 'hello@mtwapabay.com',
    firstName: 'Mtwapa Bay',
    lastName: 'Advisory',
    role: 'landlord',
    phone: '+254700000000',
    createdAt: '2023-01-01',
    lastLogin: '2026-04-24',
  },
  {
    id: 'user-003',
    email: 'james.kariuki@example.com',
    firstName: 'James',
    lastName: 'Kariuki',
    role: 'tenant',
    phone: '+254722000003',
    createdAt: '2024-01-01',
    lastLogin: '2026-04-20',
  },
];

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function getUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}
