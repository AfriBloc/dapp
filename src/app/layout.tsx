import type { Metadata } from "next";
import "./globals.css";
import { schibstedGrotesk } from "../../public/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Afribloc",
    default: "Afribloc - Global Access to Africa’s Prime Real Estate",
  },
  description:
    "From Lagos to Nairobi, invest in high-growth cities, earn monthly dividends from rental income, and share in capital appreciation at exit.",
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
