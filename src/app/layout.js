import { Marcellus } from 'next/font/google';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const marcellus = Marcellus({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Elyse Kanagaratnam',
  description: "Elyse Kanagaratnam's Dev and Film Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={marcellus.className}>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
