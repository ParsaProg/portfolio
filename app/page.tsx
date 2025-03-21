"use client";
import Link from "next/link";
import useTitle from "./hooks/useTitle";
import { FaGithub } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CatImage from "../public/IMG_20241227_163947.jpg";
import ParsaShaabaniImage from "../public/photo_2025-02-17_21-51-13.jpg";
import "../styles/homepage_res.css";
import { MdSportsScore } from "react-icons/md";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const pathname = usePathname();
  const { theme } = useTheme();
  useEffect(() => {
    let intervalId = undefined;

    if (pathname === "/") {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }, 30000);
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [pathname]);
  useTitle("Home | ParsaShaabani");
  return (
    <div
      className={`lg:mt-[150px] mt-[100px] m-auto ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <section className="z-50 sm:px-0 px-2">
        <h1 className="z-50 font-bold lg:text-[3rem] md:text-[2.5rem] text-[2rem] text-center leading-[40px]">
          I made this for you
        </h1>
        <h2
          className={`z-50 mt-3 font-[400] md:text-[1.2rem] text-[1.1rem] text-xl text-center ${
            theme === "dark" ? "text-[#c1c1cd]" : "text-[#696971]"
          }`}
        >
          Featuring current work and studies in a NextJs-based portfolio.
        </h2>
        <p
          className={`z-50 font-[500] text-sm text-center ${
            theme === "dark" ? "text-[#40c671]" : "text-[#15803d]"
          } mt-2`}
        >
          Inspired by others, I share my open-source derived work with the
          community.
        </p>
        <div className="z-50 flex items-center justify-center gap-x-5">
          <Link href={"/projects"} className="z-50">
            <button
              className={`z-50 cursor-pointer  transition-all duration-100 ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-black text-white hover:bg-neutral-800"
              } px-3 h-[45px] mt-4 rounded-md text-md font-[500] text-center`}
            >
              My Projects
            </button>
          </Link>
          <a
            href="https://github.com/ParsaProg"
            target="_blank"
            className={`z-50 cursor-pointer  border-[1.5px] ${
              theme === "dark"
                ? "border-[#27272a] hover:bg-[#27272A]"
                : "border-[#babacc58] hover:bg-[#27272a2d]"
            } transition-all duration-200 ${
              theme === "dark" ? "bg-black" : "bg-white"
            } px-3 h-[45px] mt-4 rounded-md text-md font-[500] text-center flex items-center justify-center gap-x-2`}
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </section>
      <section
        className={`z-20 overflow-hidden main-info-section border-t-[1px] relative ${
          theme === "dark" ? "border-t-neutral-700 " : "border-t-neutral-300 "
        }md:mt-[150px] mt-[50px]`}
      >
        <div className="absolute left-0 top-48 h-96 w-full -translate-y-full [background-image:radial-gradient(closest-side,rgba(123,175,250,0.12)_0%,transparent_100%)]"></div>
        <h5 className="text-[#60a5fa] text-xl mt-5">AboutMe</h5>
        <h1 className="font-bold text-3xl mt-3">
          Programmer & Web developer & Software developer
        </h1>
        <section className=" w-full my-info-section flex items-start justify-start gap-x-[25px] md:mt-10 mt-3 text-justify">
          <p className="mb-5 text-md">
            Hey there! I’m{" "}
            <strong className="text-[#60a5fa]  underline font-[500]">
              Parsa Shaabani
            </strong>
            , a passionate software engineer hailing from the vibrant city of
            Shiraz, Iran 🌿—a place rich in culture and history that inspires
            creativity every day. I’m all about building sleek, scalable, and
            impactful solutions in the digital world. With a strong foundation
            in software engineering, I thrive on turning ideas into reality
            using cutting-edge tools and frameworks like NextJS, React,
            JavaScript, Python, Flutter, Node.js, and Dart 🚀. Whether it’s
            crafting responsive frontends, optimizing backend systems, or diving
            into cross-platform mobile dev, I’m your guy! I’m a tech enthusiast
            at heart 💻, always exploring the latest trends and pushing the
            boundaries of what’s possible. My toolkit is versatile, and I’m
            comfortable hopping between languages and frameworks to get the job
            done. From architecting dynamic web apps with NextJS to prototyping
            mobile experiences with Flutter, I bring precision, creativity, and
            a problem-solving mindset to every project I tackle. Beyond the
            code, I’m a bit of an adrenaline junkie and strategy nerd. I’m
            obsessed with mountaineering ⛰️—there’s nothing like conquering a
            peak to clear the mind and spark inspiration. On the flip side, I’m
            a chess aficionado ♟️ with a competitive edge (and a few trophies to
            prove it!). I’ve also got a love for basketball 🏀, where I channel
            my teamwork and energy into every game. Sports keep me grounded,
            while coding keeps me dreaming big. I’m driven by challenges—whether
            it’s debugging a tricky codebase, outsmarting an opponent on the
            chessboard, or scaling a mountain. If you’re looking for someone who
            blends technical expertise with a zest for life, let’s connect and
            build something amazing together! ✨
          </p>
          <div
            className={`transition-all duration-200 relative ${
              imageIndex === 0 ? "image-index-0" : "image-index-1"
            } rounded-lg`}
          >
            <AnimatePresence>
              {imageIndex === 0 && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-full main-image-index-0 rounded-lg"
                  alt="parsashaabani"
                  src={ParsaShaabaniImage.src}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {" "}
              {imageIndex === 1 && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-full main-image-index-1 rounded-lg"
                  alt="cat"
                  src={CatImage.src}
                />
              )}
            </AnimatePresence>

            <div className="left-[50%] translate-x-[-50%] absolute bottom-3 flex items-center justify-center gap-x-3">
              <div
                onClick={() => setImageIndex(0)}
                className={`cursor-pointer hover:opacity-[0.9] transition-all duration-200 ${
                  imageIndex === 0 ? "bg-black" : "bg-[#0000008b]"
                } p-[13px] rounded-md text-white m-auto border-[0.5px] border-[#ffffff6f]`}
              >
                <IoAccessibility size={15} />
              </div>
              <div
                onClick={() => setImageIndex(1)}
                className={`cursor-pointer hover:opacity-[0.9] transition-all duration-200 ${
                  imageIndex === 1 ? "bg-black" : "bg-[#0000008b]"
                } p-[13px] rounded-md text-white m-auto border-[0.5px] border-[#ffffff6f]`}
              >
                <MdSportsScore size={15} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
