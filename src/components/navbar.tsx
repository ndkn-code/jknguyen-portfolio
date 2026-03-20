"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { href: "/", label: "Work", active: true },
    { href: "/#about", label: "About" },
    { href: "mailto:ndkn.work@gmail.com", label: "Contact" },
    { href: "/ndkn_resume_APM.pdf", label: "Resume", external: true },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="sticky top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl text-sm tracking-tight"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          Jack Nguyen
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              className={`transition-colors ${
                link.active && isHome
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold border-b-2 border-primary pb-1"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:ndkn.work@gmail.com"
          className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 active:scale-95 duration-150 transition-all"
        >
          Let&apos;s Talk
        </a>
      </div>
      <div className="bg-zinc-100 dark:bg-zinc-800 h-[1px] w-full" />
    </motion.nav>
  );
}
