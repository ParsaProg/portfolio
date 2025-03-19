'use client'; // Required since usePathname is a client-side hook
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarSection({ pathname }: { pathname: string }) {
  const currentPath = usePathname(); // Current path from usePathname (e.g., "/", "/projects")
  const lowerPathname = pathname.toLowerCase(); // Normalize the input prop
  const href = lowerPathname === "/" ? "/" : `/${lowerPathname}`; // Ensure correct href
  const isActive = currentPath === href; // Check if this link is active

  return (
    <Link
      href={href}
      className={`cursor-pointer ${
        isActive ? "text-white" : "text-[#9A9A9A]"
      } font-[500] text-[16px] transition-all duration-200 hover:text-gray-300`}
    >
      {lowerPathname === "/"
        ? "Home"
        : lowerPathname.charAt(0).toUpperCase() + lowerPathname.slice(1)}
    </Link>
  );
}