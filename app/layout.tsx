import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || '#';
const ownerRole = process.env.NEXT_PUBLIC_OWNER_ROLE || '#';
const ownerEmail = process.env.NEXT_PUBLIC_OWNER_EMAIL || 'me@test.com';

export const metadata: Metadata = {
  title: `${ownerName} | ${ownerRole}`,
  description: `Portfolio of ${ownerName}, an IT student from Finland specializing in web development, cloud computing, and cybersecurity.`,
  keywords: ['portfolio', 'web development', 'cloud computing', 'cybersecurity', 'Finland'],
  authors: [{ name: ownerName }],
  creator: ownerName,
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
      },
    ],
  },
  verification: {
    other: {
      me: [ownerEmail],
    },
  },
  appleWebApp: {
    capable: true,
    title: `${ownerName} | Portfolio`,
    statusBarStyle: 'black-translucent',
  },
  applicationName: `${ownerName} | Portfolio`,
  metadataBase: new URL('https://royhgstrm.github.io/portfolio'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="icon" 
          href="/favicon.svg" 
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
