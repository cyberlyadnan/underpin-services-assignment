// Importing Google Fonts
import {
  Geist,
  Geist_Mono,
  Caudex,
  Bakbak_One,
  Poppins,
  Orbitron,
} from "next/font/google";

// Import Global Styles
import "./globals.css";

// Import Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

// Define Google Fonts using next/font
const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bakbakOne = Bakbak_One({
  variable: "--font-bakbak",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO optimization
export const metadata = {
  metadataBase: new URL("https://www.demo.com"), // Set this to your actual site URL
  title: "Blackrose Club",
  description: "You can shop your favorite products, join and organize cultural and sports events, sell your products in your own metaverse, and gain yield in an innovative growth market.",
  openGraph: {
    title: "Blackrose Club",
    description: "Explore a world of products, events, and growth in the Blackrose Club.",
    url: "https://www.demo.com", // Change this to your actual URL
    siteName: "Blackrose Club",
    images: [
      {
        url: "/images/vr-user.png", 
        width: 1200,
        height: 630,
        alt: "Blackrose Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackrose Club",
    description: "Join the Blackrose Club for products, events, and metaverse experiences.",
    images: ["/images/vr-user.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caudex.variable} ${bakbakOne.variable} ${orbitron.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <main className="bg-custom-gradient">{children}</main>
        <Footer />
      </body>
    </html>
  );
}