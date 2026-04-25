export type LeaseStatus = 'pending' | 'active' | 'expiring_soon' | 'expired' | 'terminated';

export type PaymentStatus = 'paid' | 'pending' | 'overdue';

export type MaintenanceCategory = 'plumbing' | 'electrical' | 'hvac' | 'structural' | 'appliances' | 'other';

export type MaintenanceStatus = 'open' | 'in_progress' | 'resolved' | 'closed';

export type MaintenancePriority = 'low' | 'medium' | 'high' | 'urgent';

export type DocumentType = 'lease' | 'invoice' | 'receipt' | 'notice' | 'report' | 'certificate';

export interface Lease {
  id: string;
  propertyId: string;
  tenantId: string;
  /** Display name for the property (denormalised for convenience) */
  propertyName: string;
  propertyAddress: string;
  propertyImage: string;
  unit: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  currency: string;
  depositAmount: number;
  status: LeaseStatus;
  renewalOption: boolean;
  noticePeriodDays: number;
  landlordUserId: string;
  landlordName: string;
  landlordContact: string;
  createdAt: string;
}

export interface PaymentRecord {
  id: string;
  leaseId: string;
  period: string;
  amount: number;
  currency: string;
  dueDate: string;
  paidDate?: string;
  status: PaymentStatus;
  reference?: string;
}

export interface MaintenanceRequest {
  id: string;
  leaseId: string;
  title: string;
  category: MaintenanceCategory;
  description: string;
  submittedDate: string;
  status: MaintenanceStatus;
  priority: MaintenancePriority;
  assignedTo?: string;
  resolvedDate?: string;
}

export interface LeaseDocument {
  id: string;
  leaseId: string;
  name: string;
  type: DocumentType;
  date: string;
  size: string;
  url: string;
}

export const leases: Lease[] = [
  {
    id: 'lease-001',
    propertyId: 'prop-002',
    tenantId: 'tenant-001',
    propertyName: 'Bahari Penthouse',
    propertyAddress: 'Nyali Beach, Mombasa, Kenya',
    propertyImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1600&q=85',
    unit: 'Penthouse Level 18',
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    monthlyRent: 4_500,
    currency: 'USD',
    depositAmount: 9_000,
    status: 'active',
    renewalOption: true,
    noticePeriodDays: 60,
    landlordUserId: 'user-002',
    landlordName: 'Mtwapa Bay Advisory',
    landlordContact: 'hello@mtwapabay.com',
    createdAt: '2024-01-01',
  },
];

export const paymentRecords: PaymentRecord[] = [
  {
    id: 'pay-010',
    leaseId: 'lease-001',
    period: 'May 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-05-01',
    status: 'pending',
  },
  {
    id: 'pay-009',
    leaseId: 'lease-001',
    period: 'April 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-04-01',
    paidDate: '2026-04-01',
    status: 'paid',
    reference: 'MBP-20260401',
  },
  {
    id: 'pay-008',
    leaseId: 'lease-001',
    period: 'March 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-03-01',
    paidDate: '2026-03-01',
    status: 'paid',
    reference: 'MBP-20260301',
  },
  {
    id: 'pay-007',
    leaseId: 'lease-001',
    period: 'February 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-02-01',
    paidDate: '2026-02-03',
    status: 'paid',
    reference: 'MBP-20260203',
  },
  {
    id: 'pay-006',
    leaseId: 'lease-001',
    period: 'January 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-01-01',
    paidDate: '2026-01-01',
    status: 'paid',
    reference: 'MBP-20260101',
  },
  {
    id: 'pay-005',
    leaseId: 'lease-001',
    period: 'December 2025',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2025-12-01',
    paidDate: '2025-12-01',
    status: 'paid',
    reference: 'MBP-20251201',
  },
];

export const maintenanceRequests: MaintenanceRequest[] = [
  {
    id: 'maint-004',
    leaseId: 'lease-001',
    title: 'Air conditioning unit — unusual noise',
    category: 'hvac',
    description: 'The main AC unit in the master bedroom has developed a low rattling sound when running.',
    submittedDate: '2026-04-18',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'Coastal HVAC Services',
  },
  {
    id: 'maint-003',
    leaseId: 'lease-001',
    title: 'Pool terrace lighting — two fixtures out',
    category: 'electrical',
    description: 'Two recessed uplights on the northwest corner of the pool terrace have stopped working.',
    submittedDate: '2026-03-22',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'Nyali Electrical Ltd',
    resolvedDate: '2026-03-29',
  },
  {
    id: 'maint-002',
    leaseId: 'lease-001',
    title: 'Guest bathroom tap — slow drip',
    category: 'plumbing',
    description: 'The hot water tap in the second guest bathroom is dripping at approximately one drop per second.',
    submittedDate: '2026-02-10',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'MB Plumbing Solutions',
    resolvedDate: '2026-02-14',
  },
  {
    id: 'maint-001',
    leaseId: 'lease-001',
    title: 'Smart home panel — lobby display unresponsive',
    category: 'electrical',
    description: 'The lobby control panel touchscreen is unresponsive. System functional via mobile app.',
    submittedDate: '2025-12-05',
    status: 'closed',
    priority: 'low',
    assignedTo: 'Smart Systems East Africa',
    resolvedDate: '2025-12-12',
  },
];

export const leaseDocuments: LeaseDocument[] = [
  {
    id: 'doc-001',
    leaseId: 'lease-001',
    name: 'Tenancy Agreement — Bahari Penthouse 2024–2026',
    type: 'lease',
    date: '2024-01-01',
    size: '2.4 MB',
    url: '#',
  },
  {
    id: 'doc-002',
    leaseId: 'lease-001',
    name: 'Security Deposit Receipt — January 2024',
    type: 'receipt',
    date: '2024-01-01',
    size: '180 KB',
    url: '#',
  },
  {
    id: 'doc-003',
    leaseId: 'lease-001',
    name: 'Property Condition Report — Move-in',
    type: 'report',
    date: '2024-01-03',
    size: '8.1 MB',
    url: '#',
  },
  {
    id: 'doc-004',
    leaseId: 'lease-001',
    name: 'Rent Invoice — April 2026',
    type: 'invoice',
    date: '2026-04-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-005',
    leaseId: 'lease-001',
    name: 'Rent Invoice — March 2026',
    type: 'invoice',
    date: '2026-03-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-006',
    leaseId: 'lease-001',
    name: 'Building Insurance Certificate 2026',
    type: 'certificate',
    date: '2026-01-01',
    size: '340 KB',
    url: '#',
  },
  {
    id: 'doc-007',
    leaseId: 'lease-001',
    name: 'Rent Invoice — February 2026',
    type: 'invoice',
    date: '2026-02-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-008',
    leaseId: 'lease-001',
    name: 'Annual Rent Review Notice 2026',
    type: 'notice',
    date: '2025-11-15',
    size: '120 KB',
    url: '#',
  },
];

export function getLeaseById(id: string): Lease | undefined {
  return leases.find((l) => l.id === id);
}

export function getLeasesByTenantId(tenantId: string): Lease[] {
  return leases.filter((l) => l.tenantId === tenantId);
}

export function getPaymentsByLeaseId(leaseId: string): PaymentRecord[] {
  return paymentRecords.filter((p) => p.leaseId === leaseId);
}

export function getMaintenanceByLeaseId(leaseId: string): MaintenanceRequest[] {
  return maintenanceRequests.filter((m) => m.leaseId === leaseId);
}

export function getDocumentsByLeaseId(leaseId: string): LeaseDocument[] {
  return leaseDocuments.filter((d) => d.leaseId === leaseId);
}
