"use client";

import "../../styles/navbar_res.css";
import Image from "next/image";
import ParsashaabaniImage from "../../public/parsashaabani.jpg";
import NavBarSection from "../ui/navbarlinksections";
import { FaGithub } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMenu } from "react-icons/fi";

export default function NavBar() {
  const { setTheme, systemTheme, theme } = useTheme();
  const [themeDialog, setThemeDialog] = useState(false);
  const [routeDialog, setRouteDialog] = useState(false);
  const routeRef = useRef<HTMLDivElement>(null);
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
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        routeRef.current &&
        !routeRef.current.contains(event.target as Node)
      ) {
        setRouteDialog(false); // Close if clicked outside
      }
    }

    if (routeDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [routeDialog]);

  // Toggle handler for the button
  const handleToggleClick = () => {
    setThemeDialog((prev) => !prev); // Always toggle the state
  };
  const handleToggleRouteClick = () => {
    setRouteDialog((prev) => !prev); // Always toggle the state
  };
  return (
    <div
      className={`w-full fixed z-[99] top-0  border-b-[0.5px] ${
        theme === "dark"
          ? "bg-[#09090ba1] border-b-neutral-800 text-white"
          : "bg-[#ffffffa1] border-b-neutral-300 text-black"
      } `}
      style={{
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="navbar-content py-[10px] m-auto flex items-center justify-between">
        <div className="flex items-center gap-x-6 left-side-navbar">
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
          <div className="flex items-center">
            <a
              href="https://github.com/ParsaProg"
              target="_blank"
              className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${
                theme === "dark" ? "hover:bg-[#27272A]" : "hover:bg-[#e1e1e4]"
              }`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://t.me/Parsa_Shaabani"
              target="_blank"
              className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${
                theme === "dark" ? "hover:bg-[#27272A]" : "hover:bg-[#e1e1e4]"
              }`}
            >
              <RiTelegram2Fill size={20} />
            </a>

            <div className="relative" ref={menuRef}>
              <div
                onClick={handleToggleClick}
                className={`p-2 rounded-md cursor-pointer transition-all duration-200 ${
                  theme === "dark" ? "hover:bg-[#27272A]" : "hover:bg-[#e1e1e4]"
                }`}
              >
                {theme === "dark" ? (
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
                ) : (
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
                    className="lucide lucide-sun"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )}
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
                      transition: { ease: "easeInOut", duration: 0.1 },
                    }}
                    transition={{ ease: "easeInOut", duration: 0.1 }}
                    className={`absolute mt-[5px] ${
                      theme === "dark"
                        ? "text-white bg-black border-neutral-800"
                        : "text-black bg-white border-neutral-200"
                    } text-left py-1 px-1 rounded-md  border-[1.5px] `}
                  >
                    <section
                      onClick={() => {
                        setTheme("light");
                        setThemeDialog(false);
                      }}
                      className={`cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-[#27272A]"
                          : "hover:bg-[#d6d6d9]"
                      } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                    >
                      Light
                    </section>
                    <section
                      onClick={() => {
                        setTheme("dark");
                        setThemeDialog(false);
                      }}
                      className={`cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-[#27272A]"
                          : "hover:bg-[#d6d6d9]"
                      } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                    >
                      Dark
                    </section>
                    <section
                      onClick={() => {
                        setTheme(systemTheme || "");
                        setThemeDialog(false);
                      }}
                      className={`cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-[#27272A]"
                          : "hover:bg-[#d6d6d9]"
                      } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                    >
                      System
                    </section>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="menu-icon cursor-pointer relative" ref={routeRef}>
          <FiMenu
            size={20}
            onClick={() => {
              handleToggleRouteClick();
            }}
          />
          <AnimatePresence>
            {routeDialog && (
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
                  transition: { ease: "easeInOut", duration: 0.1 },
                }}
                transition={{ ease: "easeInOut", duration: 0.1 }}
                className={`absolute mt-[5px] ${
                  theme === "dark"
                    ? "text-white bg-black border-neutral-800"
                    : "text-black bg-white border-neutral-200"
                } right-[0px] text-left py-1 px-1 rounded-md flex flex-col border-[1.5px] `}
              >
                <Link
                  href={"/"}
                  className={`cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#27272A]"
                      : "hover:bg-[#d6d6d9]"
                  } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                >
                  Home
                </Link>
                <Link
                  href={"/projects"}
                  className={`cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#27272A]"
                      : "hover:bg-[#d6d6d9]"
                  } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                >
                  Projects
                </Link>
                <Link
                  href={"/tools"}
                  className={`cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#27272A]"
                      : "hover:bg-[#d6d6d9]"
                  } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                >
                  Tools
                </Link>
                <Link
                  href={"/timeline"}
                  className={`cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#27272A]"
                      : "hover:bg-[#d6d6d9]"
                  } w-[100px] px-1 py-1 rounded-sm text-[15px]`}
                >
                  TimeLine
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
