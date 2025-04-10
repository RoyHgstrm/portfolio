import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const ownerName = process.env.NEXT_PUBLIC_OWNER_NAME || 'Portfolio';

export const metadata: Metadata = {
  title: `Video to Text Demo | ${ownerName}`,
  description: `Interactive demo of the Video to Text Converter application by ${ownerName}`,
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function DemoLayout({
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
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
} 