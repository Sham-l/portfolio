import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CursorTracker from '@components/cursorTracker';
import HomeLinks from '@components/homeLinks';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'min-h-screen md:max-h-screen md:overflow-hidden bg-gradient-to-b from-[#0c1520] via-[#131f30] to-black '}>
        <CursorTracker />
        <div className="">
          
          {children}
        </div>
      </body>
    </html>
  );
}
