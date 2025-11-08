"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-8 px-6 py-3 rounded-lg bg-gray-600/30 backdrop-blur-lg ">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-md transition ${
              active ? "text-blue-500" : "text-white hover:text-gray-400"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
