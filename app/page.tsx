"use client";
import useTitle from "./hooks/useTitle";

export default function Home() {
  useTitle("Home | ParsaShaabani");
  return (
    <div className="mt-[80px] m-auto text-white">
      <h1 className="font-bold text-[3rem] text-center">I made this for you</h1>
      <h2 className="font-[500] text-xl text-center text-[#A1A1AA]">Featuring current work and studies in a SvelteKit-based portfolio.</h2>
      <p className="font-[500] text-sm text-center text-[#4ade80] mt-3">Inspired by others, I share my open-source derived work with the community.</p>
    </div>
  );
}
