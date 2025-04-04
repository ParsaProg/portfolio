import "./globals.css";
import NavBar from "../components/site/navbar";
import { Geist } from "next/font/google";
import Footer from "@/components/site/footer";
import ThemeProvider from "@/components/utils/themesProvider";
import ThemeWrapper from "./ThemeWrapper";
import { Metadata } from "next";
import favicon from "./favicon.ico";

// Configure the Geist font
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
});

// Define metadata using the metadata API
export const metadata: Metadata = {
  icons: favicon.src,
  title: "Parsa Shaabani Portfolio",
  description:
    "Welcome to Parsa Shaabani's portfolio! 🚀 Explore creative projects, coding adventures, and a timeline of achievements. Connect and build something amazing together! 💡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${favicon.src}/?v=2`} type="image/x-icon" />
        <link rel="icon" href={favicon.src} sizes="any" />
        <link rel="icon" href={favicon.src} type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon.src}
        />
        ّ
        <meta
          name="description"
          content="پارسا شعبانی (Parsa Shaabani) متخصص در برنامه‌نویسی و فرانت‌اند با سابقه درخشان در فرانت‌اند - اطلاعات تماس و نمونه کارها"
        />
        {/* Basic Meta Tags */}
        <meta
          name="description"
          content="Welcome to Parsa Shaabani's portfolio! 🚀 Explore creative projects, coding adventures, and a timeline of achievements. Connect and build something amazing together! 💡"
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Parsa Shaabani Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Parsa Shaabani's portfolio! 🚀 Explore creative projects, coding adventures, and a timeline of achievements. Connect and build something amazing together! 💡"
        />
        <meta
          property="og:image"
          content="https://github.com/ParsaProg/tecama_images/blob/main/IMG_20241227_163947.jpg?raw=true"
        />
        <meta property="og:url" content="https://www.parsashaabani.ir/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parsa Shaabani Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to Parsa Shaabani's portfolio! 🚀 Explore creative projects, coding adventures, and a timeline of achievements. Connect and build something amazing together! 💡"
        />
        <meta
          name="twitter:image"
          content="https://github.com/ParsaProg/tecama_images/blob/main/IMG_20241227_163947.jpg?raw=true"
        />
        {/* Favicon */}
        <title>پارسا شعبانی | برنامه‌نویس حرفه‌ای و توسعه‌دهنده وب</title>
        <meta
          name="description"
          content="پارسا شعبانی - متخصص برنامه‌نویسی با سابقه درخشان در توسعه وب و نرم‌افزار. نمونه کارها و اطلاعات تماس."
        />
        <meta property="og:locale" content="fa_IR" />
      </head>
      <body className={geist.className}>
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
