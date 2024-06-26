import type { Metadata } from 'next';

import './globals.css';
import '/public/styles/font.css';
import NavBar from '@/components/ui/nav-bar/NavBar';

export const metadata: Metadata = {
  title: 'UnivFit',
  description: 'This is UnivFit',
  icons: {
    icon: '/favicon/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="icon" href="/favicon/favicon.png" />
      </head>
      <body className="h-full font-pretendard">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
