interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h3";
}

export default function SectionEyebrow({ children, className = "", as: Tag = "p" }: Props) {
  return (
    <Tag className={`ds-eyebrow ${className}`.trim()}>
      {children}
    </Tag>
  );
}
