import Link from "next/link";
import React, { ReactNode } from "react";

type FilterLinkProps = {
  href: string;
  active?: boolean;
  label?: string;
  children?: ReactNode;
};

export default function FilterLink({
  href,
  active,
  label,
  children,
}: FilterLinkProps) {
  return (
    <Link href={href} className={`${active ? "font-medium" : "font-thin"}`}>
      {label || children}
    </Link>
  );
}
