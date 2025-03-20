import "./globals.css";
import NavBar from "../components/site/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/site/footer";
import ThemeProvider from "@/components/utils/themesProvider";
import ThemeWrapper from "./ThemeWrapper"; // Import the ThemeWrapper

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeWrapper>
            <NavBar />
            {children}
            <Footer />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}