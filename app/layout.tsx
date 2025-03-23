import "./globals.css";
import NavBar from "../components/site/navbar";
import { Geist } from "next/font/google";
import Footer from "@/components/site/footer";
import ThemeProvider from "@/components/utils/themesProvider";
import ThemeWrapper from "./ThemeWrapper"; // Import the ThemeWrapper
import Head from "next/head";

// Configure the Inter font
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      <Head>
        <title>Parsa Shaabani Portfolio</title>
        <meta
          name="description"
          content="Welcome to Parsa Shaabani's portfolio! 🚀 Explore creative projects, coding adventures, and a timeline of achievements. Connect and build something amazing together! 💡"
        />
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
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