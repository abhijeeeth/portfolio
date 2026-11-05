'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'projects', label: 'Projects' }, { id: 'books', label: 'Books' }, { id: 'contact', label: 'Contact' }];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-30% 0px -55% 0px', threshold: 0.01 });
        navItems.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element); });
        return () => observer.disconnect();
    }, []);

    useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [isOpen]);

    const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); window.history.replaceState(null, '', `#${id}`); setActiveSection(id); setIsOpen(false); };

    return <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-7"><nav className="mx-auto flex max-w-[1440px] items-center justify-between border border-[var(--paper)]/50 bg-[var(--ink)] px-4 py-3 text-[var(--paper)] shadow-[4px_4px_0_var(--coral)] sm:px-6">
        <button onClick={() => goTo('home')} className="display-type text-lg font-bold tracking-tight sm:text-xl" aria-label="Go to home">AS<span className="text-[var(--acid)]">.</span></button>
        <div className="hidden items-center gap-7 md:flex">{navItems.map((item, index) => <button key={item.id} onClick={() => goTo(item.id)} className={`eyebrow relative py-2 text-[10px] transition-colors ${activeSection === item.id ? 'text-[var(--acid)]' : 'text-[var(--paper)]/70 hover:text-[var(--paper)]'}`}><span className="mr-2 text-[var(--coral)]">0{index + 1}</span>{item.label}{activeSection === item.id && <motion.span layoutId="nav-line" className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--acid)]" />}</button>)}</div>
        <a href="mailto:st.abhijithh@gmail.com" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--acid)] md:flex">Start a conversation <ArrowUpRight size={15} /></a>
        <button className="flex h-9 w-9 items-center justify-center md:hidden" onClick={() => setIsOpen(true)} aria-label="Open navigation menu"><Menu size={21} /></button>
    </nav><AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[var(--ink)] p-5 text-[var(--paper)] md:hidden"><div className="flex items-center justify-between border-b border-[var(--paper)]/20 pb-5"><span className="display-type text-xl font-bold">AS<span className="text-[var(--acid)]">.</span></span><button onClick={() => setIsOpen(false)} aria-label="Close navigation menu"><X size={25} /></button></div><div className="flex flex-col gap-5 pt-16">{navItems.map((item, index) => <button key={item.id} onClick={() => goTo(item.id)} className={`display-type text-left text-4xl font-bold ${activeSection === item.id ? 'text-[var(--acid)]' : 'text-[var(--paper)]'}`}><span className="mr-3 font-sans text-sm text-[var(--coral)]">0{index + 1}</span>{item.label}</button>)}</div><a href="mailto:st.abhijithh@gmail.com" className="absolute bottom-8 left-5 flex items-center gap-2 text-sm text-[var(--acid)]">st.abhijithh@gmail.com <ArrowUpRight size={16} /></a></motion.div>}</AnimatePresence></header>;
}