"use client"; // Required since usePathname is a client-side hook
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarSection({ pathname }: { pathname: string }) {
  const { theme } = useTheme();
  const currentPath = usePathname(); // Current path from usePathname (e.g., "/", "/projects")
  const lowerPathname = pathname.toLowerCase(); // Normalize the input prop
  const href = lowerPathname === "/" ? "/" : `/${lowerPathname}`; // Ensure correct href
  const isActive = currentPath === href; // Check if this link is active

  return (
    <Link
      href={href}
      className={`cursor-pointer ${
        isActive
          ? theme === "dark"
            ? "text-white"
            : "text-black"
          : theme === "dark"
          ? "text-[#9A9A9A]"
          : "text-[#5f5e5e]"
      } font-[500] text-[16px] transition-all duration-200 ${
        theme === "dark" ? "hover:text-gray-300" : "hover:text-black"
      }`}
    >
      {lowerPathname === "/"
        ? "Home"
        : lowerPathname.charAt(0).toUpperCase() + lowerPathname.slice(1)}
    </Link>
  );
}
