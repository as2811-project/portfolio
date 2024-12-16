import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anandh Sellamuthu",
  description: "Anandh Sellamuthu's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
