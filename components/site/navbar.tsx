"use client";

import Image from "next/image";
import ParsashaabaniImage from "../../public/parsashaabani.jpg";
import NavBarSection from "../ui/navbarlinksections";
import { FaGithub } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [themeDialog, setThemeDialog] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setThemeDialog(false); // Close if clicked outside
      }
    }

    if (themeDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [themeDialog]);

  // Toggle handler for the button
  const handleToggleClick = () => {
    setThemeDialog((prev) => !prev); // Always toggle the state
  };
  return (
    <div className="w-full border-b-[0.5px] border-b-neutral-800 text-white">
      <div className="w-[80%] py-[10px] m-auto flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <Link href={"/"}>
            <Image
              src={ParsashaabaniImage}
              alt="logo"
              width={45}
              height={45}
              className="rounded-full cursor-pointer border-[1px] border-black"
            />
          </Link>
          <NavBarSection pathname="/" />
          <NavBarSection pathname="Projects" />
          <NavBarSection pathname="Tools" />
          <NavBarSection pathname="TimeLine" />
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/ParsaProg"
            target="_blank"
            className="p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#27272A]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://t.me/@Parsa_Shaabani"
            target="_blank"
            className="p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#27272A]"
          >
            <RiTelegram2Fill size={20} />
          </a>

          <div className="relative" ref={menuRef}>
            <div
              onClick={handleToggleClick}
              className="p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#27272A]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </div>
            <AnimatePresence>
              {themeDialog && (
                <motion.div
                  initial={{
                    transform: "translateY(-10px) scaleY(0.9)",
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    transform: "translateY(0px) scale(1)",
                    opacity: 1,
                  }}
                  exit={{
                    transform: "translateY(-10px) scaleY(0.9)",
                    opacity: "0",
                    transition: { ease: "easeInOut", duration: 0.2 },
                  }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="absolute mt-[5px] text-white text-left py-1 px-1 rounded-md bg-black border-[1.5px] border-neutral-800"
                >
                  <section className="cursor-pointer hover:bg-[#27272A] w-[100px] px-1 py-1 rounded-sm">
                    Light
                  </section>
                  <section className="cursor-pointer hover:bg-[#27272A] w-[100px] py-1 px-1 rounded-sm">
                    Dark
                  </section>
                  <section className="cursor-pointer hover:bg-[#27272A] w-[100px] py-1 px-1 rounded-sm">
                    System
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
