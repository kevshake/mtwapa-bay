import type { PropertyStatus } from "@/lib/properties";

const LABEL: Record<PropertyStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

interface Props {
  status: PropertyStatus;
  className?: string;
}

export default function Badge({ status, className = "" }: Props) {
  return (
    <span className={`badge badge-${status} ${className}`.trim()}>
      {LABEL[status]}
    </span>
  );
}
