'use client';

import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaLock, FaSatelliteDish, FaRegClock, FaStar, FaStarHalf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import finalcover from '../images/finalcover.png';
import finalcover2 from '../images/cover.png';
import { PageWrapper } from '../Components/PageWrap';

const Books = () => {
    const books = [
        {
            id: 1,
            title: 'The Illusion of Free Will: MASTER THE ART OF CONTROL',
            author: 'Abhijith Shaji',
            category: 'Psychology & Self-Development',
            rating: 4.5,
            reviews: 103,
            description:
                'Do you really control your choices? Or have you only been taught to believe you do? The Illusion of Free Will pulls back the curtain on the darkest corners of the human mind. It shows how every fear, desire, and insecurity can be bent, twisted, and used-against you, or by you. Once you see how easily people can be read, manipulated, and controlled, you will never look at another person the same way again. This book is not comfort. It is a weapon. Inside its pages lie the secrets of how humans truly work-their weaknesses, their hidden strings, their their illusions of control. Whether you seek power, protection, or truth, what you discover here will change the way you see the world forever. Dare to open it. But know this: once you step inside, there is no going back.',
            image: finalcover2,
            amazonLink: 'https://amzn.in/d/1pT0pIZ',
            pothyLink: 'https://store.pothi.com/book/abhijith-shaji-illusion-free-will/',
            flipkartLink:
                'https://www.flipkart.com/illusion-free-master-art-control/p/itm02607ec74a342?pid=9789334409581&lid=LSTBOK9789334409581XNDSBN&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc',
            isPublished: true
        },
        {
            id: 2,
            title: 'The Perfect Lie: MASTER THE ART OF MISDIRECTION',
            author: 'Abhijith Shaji',
            category: 'Psychology & Self-Development',
            rating: 3.3,
            reviews: 55,
            description:
                'Mastering the Perfect Lie is a bold and insightful guide into the art of deception. Blending psychology, real-life examples, and practical techniques, this book teaches you how to craft convincing lies, avoid getting caught, and detect dishonesty in others. A must-read for anyone curious about the hidden dynamics of truth and deception in everyday life.',
            image: finalcover,
            amazonLink: 'https://amzn.in/d/0bU8Ffi6',
            pothyLink: 'https://store.pothi.com/book/abhijith-shaji-perfect-lie/',
            flipkartLink: 'https://dl.flipkart.com/s/FNKj6luuuN',
            isPublished: true
        },
        {
            id: 3,
            title: 'How to Bury Someone',
            isPublished: false
        },
        {
            id: 4,
            title: 'Raksha',
            isPublished: false
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`star-${i}`} className="text-amber-300" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-amber-300" />);
        }

        return stars;
    };

    const publishedBooks = books.filter((book) => book.isPublished);
    const inProgressBooks = books.filter((book) => !book.isPublished);

    return (
        <PageWrapper>
            <section
                id="books"
                className="books-grid relative min-h-screen overflow-hidden bg-[#04070f] text-[#d8e4ff]"
            >
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#02f4ff]/20 blur-[130px]" />
                    <div className="absolute right-[-80px] top-[20%] h-96 w-96 rounded-full bg-[#6eff3b]/10 blur-[130px]" />
                    <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3f66ff]/20 blur-[140px]" />
                </div>
                <div className="scan-line pointer-events-none absolute inset-0 opacity-60" />

                <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="mx-auto max-w-5xl text-center"
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border border-[#00e2ff]/50 bg-[#02152e]/80 px-5 py-2 text-xs uppercase tracking-[0.34em] text-[#7cf7ff]">
                            <FaSatelliteDish />
                            Neural Library Protocol
                        </p>
                        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-[#e5f4ff] sm:text-6xl lg:text-7xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            STORY ARCHIVE
                            <br />
                            // FUTURE MODE
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#a9b9da] sm:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Enter a cinematic shelf of psychological warfare, control, and perception. Each release is
                            treated as a mission file, each draft as an encrypted transmission waiting to be unlocked.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                        className="mx-auto mt-10 grid max-w-5xl gap-4 rounded-3xl border border-[#3f66ff]/35 bg-[#030c1f]/80 p-4 backdrop-blur-md sm:grid-cols-3"
                    >
                        <div className="rounded-2xl border border-[#00d1ff]/30 bg-[#05132a]/80 p-4 text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#78d8ff]">Published Nodes</p>
                            <p className="mt-2 text-4xl text-[#dffbff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{publishedBooks.length}</p>
                        </div>
                        <div className="rounded-2xl border border-[#93ff5e]/30 bg-[#081a21]/80 p-4 text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#b2ff98]">In Build Queue</p>
                            <p className="mt-2 text-4xl text-[#eeffe2]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{inProgressBooks.length}</p>
                        </div>
                        <div className="rounded-2xl border border-[#ae94ff]/30 bg-[#110b24]/80 p-4 text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#c7b6ff]">Active Reviews</p>
                            <p className="mt-2 text-4xl text-[#f2ecff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                {publishedBooks.reduce((sum, book) => sum + book.reviews, 0)}
                            </p>
                        </div>
                    </motion.div>

                    <div className="mt-14 space-y-8">
                        {books.map((book, idx) => (
                            <motion.article
                                key={book.id}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                                className="relative overflow-hidden rounded-3xl border border-[#28467f]/70 bg-[#030d21]/90 p-[1px] shadow-[0_20px_80px_-40px_rgba(2,244,255,0.35)]"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,226,255,0.2),transparent_45%,rgba(110,255,59,0.14))]" />
                                <div className="relative grid gap-6 rounded-[1.45rem] bg-[#041029]/95 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:p-7">
                                    {book.isPublished ? (
                                        <div className="group relative mx-auto h-[300px] w-[210px] overflow-hidden rounded-2xl border border-[#4a85ff]/60 bg-[#08152b] shadow-[0_12px_40px_-20px_rgba(0,226,255,0.45)] md:mx-0 md:h-[330px] md:w-[220px]">
                                            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(3,16,41,0.55),transparent_35%)]" />
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                fill
                                                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                                                sizes="(max-width: 768px) 210px, 220px"
                                                priority={idx < 2}
                                            />
                                        </div>
                                    ) : (
                                        <div className="mx-auto flex h-[300px] w-[210px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#4f72bb] bg-[#07162f] px-5 text-center md:mx-0 md:h-[330px] md:w-[220px]">
                                            <FaLock className="mb-4 text-3xl text-[#95b8ff]" />
                                            <p className="text-lg text-[#d8e5ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                                ACCESS DENIED
                                            </p>
                                            <p className="mt-3 text-xs leading-relaxed text-[#9fb1d6]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                Manuscript under secure construction protocol.
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-col justify-between text-center md:text-left">
                                        {book.isPublished ? (
                                            <>
                                                <div>
                                                    <p className="inline-flex rounded-full border border-[#00e2ff]/45 bg-[#041938] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#8befff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                        {book.category}
                                                    </p>
                                                    <h2 className="mt-3 text-2xl leading-tight text-[#e6f6ff] sm:text-[2rem]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                                        {book.title}
                                                    </h2>
                                                    <p className="mt-2 text-sm text-[#9db0d9]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                        by {book.author}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                                                    <div className="flex items-center gap-1">{renderStars(book.rating)}</div>
                                                    <span className="text-xs uppercase tracking-[0.12em] text-[#95a8d4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                        {book.rating.toFixed(1)} score / {book.reviews} logs
                                                    </span>
                                                </div>

                                                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#aec0e8] sm:text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {book.description}
                                                </p>

                                                <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    <a
                                                        href={book.amazonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#00e2ff]/50 bg-[#03233b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#b9f9ff] transition duration-300 hover:-translate-y-0.5 hover:bg-[#063a5e]"
                                                    >
                                                        <FaAmazon />
                                                        Amazon
                                                    </a>
                                                    <a
                                                        href={book.flipkartLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#7bff5e]/50 bg-[#132f18] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d8ffd0] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a4623]"
                                                    >
                                                        Flipkart
                                                    </a>
                                                    <a
                                                        href={book.pothyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#6a8bff]/55 bg-[#111f45] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d6e1ff] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a2d63]"
                                                    >
                                                        <FaBookOpen />
                                                        Pothy
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="my-auto">
                                                <span className="inline-flex items-center gap-2 rounded-full border border-[#6f91d6]/55 bg-[#0a1f43] px-4 py-1 text-xs uppercase tracking-[0.16em] text-[#bdd4ff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    <FaRegClock />
                                                    In Progress
                                                </span>
                                                <h3 className="mt-4 text-2xl text-[#e6efff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                                    {book.title}
                                                </h3>
                                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#9db4e0]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    This story is currently in stealth production: character psychology,
                                                    pacing simulations, and structural edits are still in flight.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

                    .books-grid {
                        background-image:
                            linear-gradient(to right, rgba(28, 80, 170, 0.16) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(28, 80, 170, 0.16) 1px, transparent 1px);
                        background-size: 42px 42px;
                    }

                    .scan-line {
                        background: linear-gradient(to bottom, transparent 0%, rgba(0, 226, 255, 0.16) 48%, transparent 100%);
                        animation: scanMove 9s linear infinite;
                    }

                    @keyframes scanMove {
                        0% {
                            transform: translateY(-100%);
                        }
                        100% {
                            transform: translateY(100%);
                        }
                    }
                `}</style>
            </section>
        </PageWrapper>
    );
};

export default Books;
