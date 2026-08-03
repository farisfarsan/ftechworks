"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { ripple } from "@/lib/ripple";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: React.ReactNode;
  };

export default function RippleLink({ onClick, ...rest }: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    ripple(e);
    onClick?.(e);
  }
  return <Link {...rest} onClick={handleClick} />;
}
