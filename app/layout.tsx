import "./globals.css";
import NavBar from "../components/site/navbar";
import { Geist } from "next/font/google";
import Footer from "@/components/site/footer";
import PageTransition from "@/components/site/PageTransition";
import Layout from "@/components/site/PageTransition";

// Configure the Poppins font
const geist = Geist({
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
    <html lang="en">
      <body
        style={{ background: "#09090B", overflowX: "hidden" }}
        className={geist.className}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
