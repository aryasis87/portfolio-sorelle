import "./globals.css";
import { Inter, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata = {
  title: "Sorelle — UI/UX Designer & Developer",
  description: "Portfolio of Sorelle, a UI/UX designer & developer crafting memorable digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} bg-white text-gray-900 antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Message />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
