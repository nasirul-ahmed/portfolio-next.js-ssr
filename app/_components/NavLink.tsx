"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: Route<string>;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-4xl text-sm font-bold transition-colors
        ${
          isActive
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        }`}
    >
      {children}
    </Link>
  );
}
