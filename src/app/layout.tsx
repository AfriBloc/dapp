import type { Metadata } from "next";
import "./globals.css";
import { schibstedGrotesk } from "../../public/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afribloc.co/"),
  title: {
    template: "%s | Afribloc",
    default: "Afribloc - Global Access to Africa’s Prime Real Estate",
  },
  description:
    "Invest in high-growth cities across Africa, earn monthly dividends from rental income, and share in capital appreciation.",
  openGraph: {
    title: "Afribloc - Global Access to Africa’s Prime Real Estate",
    description:
      "Invest in high-growth cities across Africa, earn monthly dividends from rental income, and share in capital appreciation.",
    url: "https://www.afribloc.co/", 
    siteName: "Afribloc",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Afribloc Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afribloc - Global Access to Africa’s Prime Real Estate",
    description:
      "Invest in high-growth cities across Africa, earn monthly dividends from rental income, and share in capital appreciation.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} font-schibstedGrotesk antialiased`}
      >
        {children}
        <Toaster position="top-right" className="!font-schibstedGrotesk" />
      </body>
    </html>
  );
}
