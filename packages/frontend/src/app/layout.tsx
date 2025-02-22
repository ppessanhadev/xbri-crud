import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-provider';
import './globals.css';

type RootProps = Readonly<{ children: React.ReactNode }>;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'XBRI | CRUD',
  description: 'CRUD para teste tecnico da XBRI.',
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
