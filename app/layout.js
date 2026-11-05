import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './NavBar/page';

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
    title: 'Abhijith Shaji | Developer, Author, Photographer',
    description: 'The portfolio of Abhijith Shaji: Flutter developer, author, photographer, and AI student.',
};

export default function RootLayout({ children }) {
    return <html lang="en"><body className={`${sans.variable} ${display.variable}`}><Navbar />{children}</body></html>;
}