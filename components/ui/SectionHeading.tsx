interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "sm" | "md" | "lg" | "xl";
  light?: boolean;
}

const SIZE: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-2xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-7xl lg:text-8xl",
};

export default function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  size = "md",
  light = false,
}: Props) {
  return (
    <Tag
      className={[
        "font-display leading-tight",
        SIZE[size],
        light ? "text-white" : "text-dusk",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
