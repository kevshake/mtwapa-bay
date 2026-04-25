export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface Tenant {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationalId?: string;
  passportNumber?: string;
  nationality?: string;
  emergencyContact: EmergencyContact;
  createdAt: string;
}

export const tenants: Tenant[] = [
  {
    id: 'tenant-001',
    userId: 'user-003',
    firstName: 'James',
    lastName: 'Kariuki',
    email: 'james.kariuki@example.com',
    phone: '+254722000003',
    nationalId: '12345678',
    nationality: 'Kenyan',
    emergencyContact: {
      name: 'Grace Kariuki',
      phone: '+254722000004',
      relationship: 'Spouse',
    },
    createdAt: '2024-01-01',
  },
];

export function getTenantById(id: string): Tenant | undefined {
  return tenants.find((t) => t.id === id);
}

export function getTenantByUserId(userId: string): Tenant | undefined {
  return tenants.find((t) => t.userId === userId);
}
