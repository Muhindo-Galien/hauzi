import { Nunito } from '@next/font/google';
import './globals.css';
import NavBar from './components/navbar/NavBar';
import ClientOnly from './components/ClientOnly';

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className={font.className}>
        <ClientOnly>
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
