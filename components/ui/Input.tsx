import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & { className?: string };
type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  multiline: true;
  rows?: number;
  className?: string;
};

type Props = InputProps | TextareaProps;

function isTextarea(props: Props): props is TextareaProps {
  return "multiline" in props && props.multiline === true;
}

export default function Input({ className = "", ...rest }: Props) {
  const cls = `ds-input ${className}`.trim();

  if (isTextarea(rest)) {
    const { multiline: _m, ...textareaRest } = rest;
    return <textarea className={cls} {...textareaRest} />;
  }

  return <input className={cls} {...(rest as InputProps)} />;
}
