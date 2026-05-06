import type { Metadata } from 'next';
import { spaceGrotesk } from './fonts';
import Header from './components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'GridLoom',
  description: 'The ultimate collaborative workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
