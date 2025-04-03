import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Roy Hagström';
const ownerRole = process.env.NEXT_PUBLIC_OWNER_ROLE || 'IT Student & Web Developer';

export const metadata: Metadata = {
  title: `${ownerName} | ${ownerRole}`,
  description: `Portfolio of ${ownerName}, an IT student from Finland specializing in web development, cloud computing, and cybersecurity.`,
  keywords: ['portfolio', 'web development', 'cloud computing', 'cybersecurity', 'Finland'],
  authors: [{ name: ownerName }],
  creator: ownerName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
