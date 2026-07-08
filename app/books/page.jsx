'use client';

import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaLock, FaSatelliteDish, FaRegClock, FaStar, FaStarHalf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import finalcover from '../images/finalcover.png';
import finalcover2 from '../images/cover.png';
import enikettavumPriyapettaAryakk from '../images/Enikettavum Priyapetta Aryakk.png';
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
            title: 'Enikettavum Priyapetta Aryakk',
            image: enikettavumPriyapettaAryakk,
            isPublished: false
        },
        {
            id: 4,
            title: 'Raksha',
            isPublished: false
        },
        // {
        //     id: 5,
        //     title: 'How to Bury Someone',
        //     isPublished: false
        // },
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
                className="books-grid relative min-h-screen overflow-hidden bg-[#0b0d10] text-[#f5f5f2]"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

                <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70">
                            <FaSatelliteDish />
                            Books
                        </p>
                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            A quiet shelf of work
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            A minimal, editorial presentation of published titles and work in progress. The focus stays
                            on the books, their covers, and their status.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                        className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:grid-cols-3"
                    >
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Published</p>
                            <p className="mt-2 text-3xl font-semibold text-white">{publishedBooks.length}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">In progress</p>
                            <p className="mt-2 text-3xl font-semibold text-white">{inProgressBooks.length}</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Reviews</p>
                            <p className="mt-2 text-3xl font-semibold text-white">
                                {publishedBooks.reduce((sum, book) => sum + book.reviews, 0)}
                            </p>
                        </div>
                    </motion.div>

                    <div className="mt-14 space-y-6">
                        {books.map((book, idx) => (
                            <motion.article
                                key={book.id}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_-40px_rgba(0,0,0,0.8)]"
                            >
                                <div className="relative grid gap-6 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:p-7">
                                    {book.isPublished ? (
                                        <div className="group relative mx-auto h-[300px] w-[210px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:mx-0 md:h-[330px] md:w-[220px]">
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
                                        <div className="group relative mx-auto h-[300px] w-[210px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:mx-0 md:h-[330px] md:w-[220px]">
                                            {book.image ? (
                                                <>
                                                    <Image
                                                        src={book.image}
                                                        alt={book.title}
                                                        fill
                                                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                                                        sizes="(max-width: 768px) 210px, 220px"
                                                    />
                                                    <div className="absolute inset-x-0 bottom-0 z-20 bg-black/55 px-3 py-2 text-center backdrop-blur-sm">
                                                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/80">
                                                            In progress
                                                        </p>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                                                    <FaLock className="mb-4 text-2xl text-white/35" />
                                                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                                                        In progress
                                                    </p>
                                                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                                                        Manuscript under construction.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex flex-col justify-between text-center md:text-left">
                                        {book.isPublished ? (
                                            <>
                                                <div>
                                                    <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
                                                        {book.category}
                                                    </p>
                                                    <h2 className="mt-3 text-2xl leading-tight text-white sm:text-[2rem]">
                                                        {book.title}
                                                    </h2>
                                                    <p className="mt-2 text-sm text-white/55">
                                                        by {book.author}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                                                    <div className="flex items-center gap-1">{renderStars(book.rating)}</div>
                                                    <span className="text-[11px] uppercase tracking-[0.12em] text-white/45">
                                                        {book.rating.toFixed(1)} score / {book.reviews} logs
                                                    </span>
                                                </div>

                                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-[15px]">
                                                    {book.description}
                                                </p>

                                                <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                                                    <a
                                                        href={book.amazonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/10"
                                                    >
                                                        <FaAmazon />
                                                        Amazon
                                                    </a>
                                                    <a
                                                        href={book.flipkartLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/10"
                                                    >
                                                        Flipkart
                                                    </a>
                                                    <a
                                                        href={book.pothyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition duration-300 hover:border-white/20 hover:bg-white/10"
                                                    >
                                                        <FaBookOpen />
                                                        Pothy
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="my-auto">
                                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.16em] text-white/60">
                                                    <FaRegClock />
                                                    In Progress
                                                </span>
                                                <h3 className="mt-4 text-2xl text-white">
                                                    {book.title}
                                                </h3>
                                                <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
                                                    This story is currently being shaped and refined.
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
                    .books-grid {
                        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                        background-size: 48px 48px;
                    }
                `}</style>
            </section>
        </PageWrapper>
    );
};

export default Books;
