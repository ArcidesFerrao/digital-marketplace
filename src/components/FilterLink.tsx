import Link from "next/link";
import React from "react";

type FilterLinkProps = {
  href: string;
  active: boolean;
  label: string;
};

export default function FilterLink({ href, active, label }: FilterLinkProps) {
  return (
    <Link href={href} className={`${active ? "font-medium" : "font-thin"}`}>
      {label}
    </Link>
  );
}
