"use client";

import Link from "next/link";
import { cn } from "@/utils";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ href, className, children, ...props }) => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  
  const isActive = pathname === href ? pathname.includes(href) : href.includes(segment);
  
  const activeClasses = "bg-gray-900 text-white hover:bg-gray-700 dark:bg-slate-50 dark:text-slate-900";
  return (
    <Link href={href} className={cn("py-2 px-3", isActive ? activeClasses : null, className)} {...props}>
      {children}
    </Link>
  );
}

export default NavLink;