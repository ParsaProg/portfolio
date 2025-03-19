"use client";

import useTitle from "../hooks/useTitle";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  useTitle("Projects | ParsaShaabani");
  return (
    <AnimatePresence>
      <div className="mt-[150px] m-auto text-white">
        <h1 className="z-50 font-bold text-[3rem] text-center">
          Projects I've realized
        </h1>
        <h2 className="z-50 font-[500] text-xl text-center text-[#A1A1AA]">
          Explore some of the projects I worked on in the past.
        </h2>
      </div>
    </AnimatePresence>
  );
}
