'use client';

import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaRegClock, FaStar, FaStarHalf } from 'react-icons/fa';
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

    return (
        <PageWrapper>
            <section
                id="books"
                className="relative min-h-screen overflow-hidden bg-[#0d1218] text-[#e9e6dc]"
            >
                <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#2f4f4f]/40 blur-3xl" />
                    <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#6c5b3e]/30 blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#3a2f28]/40 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: -22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <p className="mb-4 inline-flex items-center rounded-full border border-[#9a8460]/40 bg-[#101822]/80 px-4 py-1 text-xs tracking-[0.26em] text-[#c8b489] uppercase">
                            Author Portfolio
                        </p>
                        <h1 className="text-4xl font-semibold leading-tight text-[#f3ede0] sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Echoes In Ink
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#c8c2b3] sm:text-lg" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                            A curated shelf of psychological thrillers and unfinished manuscripts, where control,
                            deception, and human nature meet in print.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
                        className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#8e7b5c]/45 bg-gradient-to-br from-[#151d27]/90 to-[#10151d]/90 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.85)] backdrop-blur"
                    >
                        <h2 className="text-2xl text-[#eadfca]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            From the Artist&apos;s Desk
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-[#c6beae] sm:text-base" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                            As a writer, photographer, and developer, I treat every book as an atmosphere: built from
                            psychology, tension, and detail. These titles are not just stories, but crafted experiences.
                        </p>
                    </motion.div>

                    <div className="mt-14 space-y-8">
                        {books.map((book, idx) => (
                            <motion.article
                                key={book.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                                className="group relative overflow-hidden rounded-3xl border border-[#7d6a4d]/40 bg-gradient-to-br from-[#111923]/90 via-[#111822]/85 to-[#0f141d]/90 p-1 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(182,152,102,0.16),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className={`relative flex flex-col gap-8 rounded-[1.2rem] bg-[#0f151d]/85 p-6 md:flex-row md:p-7 ${!book.isPublished ? 'opacity-70' : ''}`}>
                                    {book.isPublished ? (
                                        <div className="relative mx-auto h-[290px] w-[200px] shrink-0 overflow-hidden rounded-2xl border border-[#8d7653]/45 shadow-2xl md:mx-0 md:h-[330px] md:w-[220px]">
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                                sizes="(max-width: 768px) 200px, 220px"
                                                priority
                                            />
                                        </div>
                                    ) : (
                                        <div className="mx-auto flex h-[290px] w-[200px] shrink-0 flex-col items-center justify-center rounded-2xl border border-dashed border-[#7c6c53]/55 bg-[#151b24] px-4 text-center md:mx-0 md:h-[330px] md:w-[220px]">
                                            <FaRegClock className="mb-4 text-4xl text-[#8c7a5f]" />
                                            <p className="text-xl text-[#ddd1b7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                                {book.title}
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-1 flex-col justify-between text-center md:text-left">
                                        {book.isPublished ? (
                                            <>
                                                <div>
                                                    <p className="mb-2 inline-block rounded-full border border-[#8a785a]/45 bg-[#1a222f] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#c9b48c]" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                        {book.category}
                                                    </p>
                                                    <h3 className="text-3xl leading-tight text-[#f5ecda] sm:text-[2.1rem]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                                        {book.title}
                                                    </h3>
                                                    <p className="mt-2 text-sm text-[#bbb4a5]" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                        by {book.author}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                                                    <div className="flex items-center gap-1">{renderStars(book.rating)}</div>
                                                    <span className="text-xs uppercase tracking-[0.12em] text-[#a9a18f]" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                        {book.reviews} reviews
                                                    </span>
                                                </div>

                                                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#c9c2b2] sm:text-[15px]" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                    {book.description}
                                                </p>

                                                <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                    <a
                                                        href={book.amazonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#8f7750] bg-[#a3762f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#fff5df] transition hover:-translate-y-0.5 hover:bg-[#b18133]"
                                                    >
                                                        <FaAmazon />
                                                        Amazon
                                                    </a>
                                                    <a
                                                        href={book.flipkartLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#4f6f88] bg-[#2b4e67] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e5eef5] transition hover:-translate-y-0.5 hover:bg-[#346183]"
                                                    >
                                                        Flipkart
                                                    </a>
                                                    <a
                                                        href={book.pothyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-lg border border-[#6e6656] bg-[#464035] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f0e9dc] transition hover:-translate-y-0.5 hover:bg-[#575043]"
                                                    >
                                                        <FaBookOpen />
                                                        Pothy
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="my-auto">
                                                <span className="inline-flex items-center rounded-full border border-[#7f6a4d]/50 bg-[#151d28] px-4 py-1 text-xs uppercase tracking-[0.16em] text-[#b9a584]" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>
                                                    In Progress
                                                </span>
                                                <p className="mt-4 text-lg leading-relaxed text-[#c6bba7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                                    This manuscript is still being shaped through drafts, edits, and long nights.
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
                    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=M+PLUS+1p:wght@300;400;500;700&display=swap');
                `}</style>
            </section>
        </PageWrapper>
    );
};

export default Books;
