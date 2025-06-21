import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NextAuthProvider } from '@/components/session-provider';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'SnapStack - AI-Powered Next.js Platform Builder',
  description: 'Build production-ready Next.js applications with authentication, payments, and backend logic through visual AI-powered tools.',
  keywords: ['Next.js', 'AI', 'Platform', 'Authentication', 'Payments', 'Code Generation'],
  authors: [{ name: 'SnapStack Team' }],
  openGraph: {
    title: 'SnapStack - AI-Powered Next.js Platform Builder',
    description: 'Build production-ready Next.js applications with authentication, payments, and backend logic through visual AI-powered tools.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geist.variable} font-sans antialiased`}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}