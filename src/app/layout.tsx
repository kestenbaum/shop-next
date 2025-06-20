import React from 'react';

import type { Metadata } from 'next';

import Providers from '@/app/Provders';
import Header from '@/components/Header';

import './globals.css';

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
      <body>
        <Providers>
          <div className="container mx-auto px-3.5 w-full">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
