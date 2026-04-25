export interface TenantLease {
  id: string;
  propertyName: string;
  propertyAddress: string;
  propertyImage: string;
  unit: string;
  tenantName: string;
  startDate: string;
  endDate: string;
  monthlyRent: number;
  currency: string;
  depositPaid: number;
  status: 'active' | 'expiring_soon' | 'expired';
  landlord: string;
  landlordContact: string;
}

export interface PaymentRecord {
  id: string;
  period: string;
  amount: number;
  currency: string;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  reference?: string;
}

export interface MaintenanceRequest {
  id: string;
  title: string;
  category: 'plumbing' | 'electrical' | 'hvac' | 'structural' | 'appliances' | 'other';
  description: string;
  submittedDate: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  resolvedDate?: string;
}

export interface TenantDocument {
  id: string;
  name: string;
  type: 'lease' | 'invoice' | 'receipt' | 'notice' | 'report' | 'certificate';
  date: string;
  size: string;
  url: string;
}

export const currentLease: TenantLease = {
  id: 'lease-001',
  propertyName: 'Bahari Penthouse',
  propertyAddress: 'Nyali Beach, Mombasa, Kenya',
  propertyImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1600&q=85',
  unit: 'Penthouse Level 18',
  tenantName: 'James Kariuki',
  startDate: '2024-01-01',
  endDate: '2025-12-31',
  monthlyRent: 4_500,
  currency: 'USD',
  depositPaid: 9_000,
  status: 'active',
  landlord: 'Mtwapa Bay Advisory',
  landlordContact: 'hello@mtwapabay.com',
};

export const paymentHistory: PaymentRecord[] = [
  {
    id: 'pay-010',
    period: 'May 2026',
    amount: 4_500,
    currency: 'USD',
    dueDate: '2026-05-01',
    status: 'pending',
  },
  {
    id: 'pay-009',
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
    title: 'Air conditioning unit — unusual noise',
    category: 'hvac',
    description: 'The main AC unit in the master bedroom has developed a low rattling sound when running. It seems to be coming from the compressor area.',
    submittedDate: '2026-04-18',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'Coastal HVAC Services',
  },
  {
    id: 'maint-003',
    title: 'Pool terrace lighting — two fixtures out',
    category: 'electrical',
    description: 'Two of the recessed uplights on the northwest corner of the pool terrace have stopped working. Bulbs replaced, issue persists.',
    submittedDate: '2026-03-22',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'Nyali Electrical Ltd',
    resolvedDate: '2026-03-29',
  },
  {
    id: 'maint-002',
    title: 'Guest bathroom tap — slow drip',
    category: 'plumbing',
    description: 'The hot water tap in the second guest bathroom is dripping at approximately one drop per second when fully closed.',
    submittedDate: '2026-02-10',
    status: 'resolved',
    priority: 'low',
    assignedTo: 'MB Plumbing Solutions',
    resolvedDate: '2026-02-14',
  },
  {
    id: 'maint-001',
    title: 'Smart home panel — lobby display unresponsive',
    category: 'electrical',
    description: 'The lobby control panel touchscreen is unresponsive. The system is otherwise functional via the mobile app.',
    submittedDate: '2025-12-05',
    status: 'closed',
    priority: 'low',
    assignedTo: 'Smart Systems East Africa',
    resolvedDate: '2025-12-12',
  },
];

export const documents: TenantDocument[] = [
  {
    id: 'doc-001',
    name: 'Tenancy Agreement — Bahari Penthouse 2024–2026',
    type: 'lease',
    date: '2024-01-01',
    size: '2.4 MB',
    url: '#',
  },
  {
    id: 'doc-002',
    name: 'Security Deposit Receipt — January 2024',
    type: 'receipt',
    date: '2024-01-01',
    size: '180 KB',
    url: '#',
  },
  {
    id: 'doc-003',
    name: 'Property Condition Report — Move-in',
    type: 'report',
    date: '2024-01-03',
    size: '8.1 MB',
    url: '#',
  },
  {
    id: 'doc-004',
    name: 'Rent Invoice — April 2026',
    type: 'invoice',
    date: '2026-04-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-005',
    name: 'Rent Invoice — March 2026',
    type: 'invoice',
    date: '2026-03-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-006',
    name: 'Building Insurance Certificate 2026',
    type: 'certificate',
    date: '2026-01-01',
    size: '340 KB',
    url: '#',
  },
  {
    id: 'doc-007',
    name: 'Rent Invoice — February 2026',
    type: 'invoice',
    date: '2026-02-01',
    size: '95 KB',
    url: '#',
  },
  {
    id: 'doc-008',
    name: 'Annual Rent Review Notice 2026',
    type: 'notice',
    date: '2025-11-15',
    size: '120 KB',
    url: '#',
  },
];

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
