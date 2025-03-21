"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: {children: string}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname} // Unique key for every route
        initial={{ x: "100%", opacity: 0 }} // Enter from right
        animate={{ x: 0, opacity: 1 }} // Center and visible
        exit={{ x: "-100%", opacity: 0 }} // Exit to left
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth slide
        style={{
          position: "absolute", // Stack pages for slideshow effect
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflowX: "hidden", // Prevent scroll glitches
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}