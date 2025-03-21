"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before applying styles
  useEffect(() => {

    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a fallback or null during SSR
    return <>{children}</>;
  }
  

  return (
    <div
      style={
        theme === "dark"
          ? { background: "#09090B", overflowX: "hidden" }
          : { background: "white", overflowX: "hidden" }
      }
    >
      {children}
    </div>
  );
}