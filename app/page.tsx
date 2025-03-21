"use client";
import Link from "next/link";
import useTitle from "./hooks/useTitle";
import { FaGithub } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { LuCat } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CatImage from "../public/IMG_20241227_163947.jpg";
import ParsaShaabaniImage from "../public/photo_2025-02-17_21-51-13.jpg";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const pathname = usePathname();
  const { theme } = useTheme();
  useEffect(() => {
    let intervalId = undefined;

    if (pathname === "/") {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }, 10000);
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
      className={`mt-[150px] m-auto ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <section className="z-50">
        <h1 className="z-50 font-bold text-[3rem] text-center">
          I made this for you
        </h1>
        <h2 className={`z-50 font-[400] text-xl text-center ${theme === "dark"? "text-[#c1c1cd]" : "text-[#696971]"}`}>
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
            <button className={`z-50 cursor-pointer  transition-all duration-100 ${theme === "dark"? "bg-white text-black hover:bg-neutral-200": "bg-black text-white hover:bg-neutral-800"} px-3 h-[45px] mt-4 rounded-md text-md font-[500] text-center`}>
              My Projects
            </button>
          </Link>
          <a
            href="https://github.com/ParsaProg"
            target="_blank"
            className={`z-50 cursor-pointer  border-[1.5px] ${theme === "dark"? "border-[#27272a] hover:bg-[#27272A]": "border-[#babacc58] hover:bg-[#27272a2d]"} transition-all duration-200 ${theme === "dark"? "bg-black": "bg-white"} px-3 h-[45px] mt-4 rounded-md text-md font-[500] text-center flex items-center justify-center gap-x-2`}
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </section>
      <section className="z-20 border-t-[1px] relative border-t-neutral-700 mt-[150px] w-full max-w-[1100px] m-auto">
        <div className="absolute left-0 top-0 h-96 w-full -translate-y-full [background-image:radial-gradient(closest-side,rgba(123,175,224,0.12)_0%,transparent_100%)]"></div>
        <h5 className="text-[#60a5fa] text-xl mt-5">Introduction</h5>
        <h1 className="font-bold text-3xl mt-3">
          Programmer & Web developer & Software developer
        </h1>
        <section className=" w-full flex items-start justify-start gap-x-[50px] mt-10 text-justify">
          <p>
            I&apos;m{" "}
            <strong className="font-bold underline cursor-pointer">
              Parsa Shaabani
            </strong>
            , a DevOps and Platform Engineering enthusiast from Fars, The Iran.
            I studied data science and Software Programming at the Vrije
            Universiteit, where I adopted skills in Python, JavaScript, and
            Linux. In my free time, I enjoy working on personal projects or
            playing games with friends. Beyond the screens, you can find me
            vibing to vinyl, watching movies, attending concerts and festivals,
            and sharing laughs with my oversized cat and amazing girlfriend. I
            also enjoy a good whiskey and am always up for a chat or ready to
            help. At Triple, I provided cloud services for clients like
            HEINEKEN, BAM, and citizenM, using Akamai, Azure, and Azure DevOps
            to create and maintain robust, scalable cloud infrastructures.
            Currently, I work at Blender, creating free and open-source 3D
            software. I streamline the build, test, and release processes for
            Blender and related services, aiming to improve both the user and
            developer experience.
          </p>
          <div
            className={`transition-all duration-200 relative ${
              imageIndex === 0 ? "w-[300rem]" : "w-[800rem]"
            } h-[550px] rounded-lg`}
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
                  className="absolute w-full h-[550px] rounded-lg"
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
                  className="absolute w-full h-[550px] rounded-lg"
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
                } p-[13px] rounded-md text-white m-auto`}
              >
                <IoAccessibility size={15} />
              </div>
              <div
                onClick={() => setImageIndex(1)}
                className={`cursor-pointer hover:opacity-[0.9] transition-all duration-200 ${
                  imageIndex === 1 ? "bg-black" : "bg-[#0000008b]"
                } p-[13px] rounded-md text-white m-auto`}
              >
                <LuCat size={15} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
