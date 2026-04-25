import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"label">;

export default function Label({ className = "", children, ...rest }: Props) {
  return (
    <label className={`ds-label ${className}`.trim()} {...rest}>
      {children}
    </label>
  );
}
