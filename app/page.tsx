"use client";
import Link from "next/link";
import useTitle from "./hooks/useTitle";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  useTitle("Home | ParsaShaabani");
  return (
    <div className="mt-[80px] m-auto text-white">
      <h1 className="font-bold text-[3rem] text-center">I made this for you</h1>
      <h2 className="font-[500] text-xl text-center text-[#A1A1AA]">
        Featuring current work and studies in a NextJs-based portfolio.
      </h2>
      <p className="font-[500] text-sm text-center text-[#4ade80] mt-2">
        Inspired by others, I share my open-source derived work with the
        community.
      </p>
      <div className="flex items-center justify-center gap-x-5">
        <Link href={"/projects"}>
          <button className="cursor-pointer hover:bg-neutral-200 transition-all duration-100 bg-white px-3 h-[45px] mt-4 rounded-md text-black text-md font-[500] text-center">
            My Projects
          </button>
        </Link>
        <a
          href="https://github.com/ParsaProg"
          target="_blank"
          className="cursor-pointer hover:bg-[#27272A] border-[1.6px] border-[#27272aa5] transition-all duration-200 bg-black px-3 h-[45px] mt-4 rounded-md text-md font-[500] text-center flex items-center justify-center gap-x-2"
        >
          <FaGithub size={20} />
          GitHub
        </a>
      </div>
    </div>
  );
}
