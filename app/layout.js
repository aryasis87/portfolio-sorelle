import "./globals.css";
import { Inter, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Message from "@/components/Message";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Sorelle","jobTitle":"UI/UX Designer & Developer","url":"https://sorelle.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://sorelle.pintuweb.com"),
  title: "Sorelle — UI/UX Designer & Developer",
  description: "Portfolio of Sorelle, a UI/UX designer & developer crafting memorable, elegant digital experiences.",
  applicationName: "Sorelle",
  keywords: ["UI/UX designer", "developer", "portfolio", "digital experience", "interface design"],
  authors: [{ name: "Sorelle" }],
  creator: "Sorelle",
  publisher: "Sorelle",
  alternates: { canonical: "https://sorelle.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sorelle.pintuweb.com",
    siteName: "Sorelle",
    title: "Sorelle — UI/UX Designer & Developer",
    description: "Portfolio of Sorelle, a UI/UX designer & developer crafting memorable, elegant digital experiences.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sorelle — UI/UX Designer & Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorelle — UI/UX Designer & Developer",
    description: "Portfolio of Sorelle, a UI/UX designer & developer crafting memorable, elegant digital experiences.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
