import { Inter } from 'next/font/google';
import '../globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className}  relative bg-gradient-to-tr from-blue-100 to-pink-200 bg-cover bg-fixed`}
      >
        <div className='flex items-start justify-between'>
          <div className='hidden min-w-[300px] lg:flex'>
            <Sidebar />
          </div>
          <main className='grid h-full w-full'>
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
