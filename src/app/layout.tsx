import type { Metadata } from 'next';
import './globals.css';
import {
  ralewayBlack,
  ralewayBold,
  ralewayExtrabold,
  ralewayMedium,
  ralewayRegular,
  ralewaySemibold,
} from '@/fonts/constantsFonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Quests',
  description:
    'On the site you can find an interesting quest on your favorite topic and learn all the details about it.',
};

const bodyClasses = `${ralewayBlack.variable} ${ralewayBold.variable} ${ralewayExtrabold.variable} ${ralewayMedium.variable} ${ralewayRegular.variable} ${ralewaySemibold.variable} w-full h-screen flex flex-col gradient-bg`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bodyClasses}>
        <Header />
        <main className='flex-auto '>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
