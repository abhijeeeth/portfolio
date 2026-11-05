'use client';

import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import AboutMe from './About/page';
import Books from './books/page';
import Footer from './Contact/ContactMe';
import Hero from './Hero/page';
import QuiltedImageList from './ImageCom/page';
import Projects from './Projects/page';
import Skills from './Skills/page';

function FloatingChatButton() {
    const [showText, setShowText] = useState(false);
    return <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-8 sm:right-8">
        {showText && <a href="https://wa.me/+916238545696" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--ink)] bg-[var(--acid)] px-3 py-2 text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0_var(--ink)]">Let&apos;s connect <ArrowUpRight size={14} /></a>}
        <button onClick={() => setShowText((value) => !value)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--coral)] text-white shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-1" aria-label="Chat with me"><MessageCircle size={21} /></button>
    </div>;
}

export default function Home() {
    return <main className="overflow-hidden bg-[var(--paper)] text-[var(--ink)]"><Hero /><QuiltedImageList /><AboutMe /><Projects /><Books /><Skills /><Footer /><FloatingChatButton /></main>;
}