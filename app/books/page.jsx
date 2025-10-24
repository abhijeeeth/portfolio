'use client';
import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaStar, FaStarHalf } from 'react-icons/fa';
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
            description: `Do you really control your choices? Or have you only been taught to believe you do?
The Illusion of Free Will pulls back the curtain on the darkest corners of the human mind. It shows how every fear, desire, and insecurity can be bent, twisted, and used—against you, or by you. Once you see how easily people can be read, manipulated, and controlled, you will never look at another person the same way again.
This book is not comfort. It is a weapon. Inside its pages lie the secrets of how humans truly work—their weaknesses, their hidden strings, their illusions of control. Whether you seek power, protection, or truth, what you discover here will change the way you see the world forever.
Dare to open it. But know this: once you step inside, there is no going back.`,
            image: finalcover2,
            amazonLink: 'https://amzn.in/d/1pT0pIZ',
            pothyLink: 'https://store.pothi.com/book/abhijith-shaji-illusion-free-will/',
            flipkartLink: 'https://www.flipkart.com/illusion-free-master-art-control/p/itm02607ec74a342?pid=9789334409581&lid=LSTBOK9789334409581XNDSBN&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc',
            isPublished: true
        },
        {
            id: 2,
            title: 'The Perfect Lie: MASTER THE ART OF MISDIRECTION',
            author: 'Abhijith Shaji',
            category: 'Psychology & Self-Development',
            rating: 3.3,
            reviews: 55,
            description: 'Mastering the Perfect Lie is a bold and insightful guide into the art of deception. Blending psychology, real-life examples, and practical techniques, this book teaches you how to craft convincing lies, avoid getting caught, and detect dishonesty in others. A must-read for anyone curious about the hidden dynamics of truth and deception in everyday life.',
            image: finalcover,
            amazonLink: 'https://amzn.in/d/bSeEfeq',
            pothyLink: 'https://store.pothi.com/book/abhijith-shaji-perfect-lie/',
            flipkartLink: 'https://store.pothi.com/book/abhijith-shaji-perfect-lie/',
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
        },
    ];
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <PageWrapper>
            <section id="books" className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="pt-20 pb-16 text-center">
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Published Works
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Explore my collection of thought-provoking books on psychology, human behavior, and personal development
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {books.map((book, idx) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                                    {book.isPublished ? (
                                        <div className="relative w-36 h-48 md:w-40 md:h-56 flex-shrink-0 group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-md transform group-hover:scale-105 transition-transform duration-500"></div>
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                fill
                                                className="object-contain rounded-md group-hover:scale-105 transition-transform duration-500 z-10"
                                                sizes="(max-width: 768px) 144px, 160px"
                                                priority
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-36 h-48 md:w-40 md:h-56 flex-shrink-0">
                                            <div className="w-full h-full rounded-md bg-gradient-to-br from-gray-700/50 to-gray-800/50 pulse-subtle"></div>
                                        </div>
                                    )}

                                    <div className="flex flex-col space-y-4 flex-1">
                                        {book.isPublished ? (
                                            <>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">{book.title}</h3>
                                                    <p className="text-gray-400 text-base mb-2">by {book.author}</p>
                                                    <span className="inline-block px-2 py-0.5 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full">
                                                        {book.category}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-0.5">
                                                        {renderStars(book.rating)}
                                                    </div>
                                                    <span className="text-gray-400 text-sm">({book.reviews} reviews)</span>
                                                </div>

                                                <p className="text-gray-300 text-sm leading-relaxed">{book.description}</p>

                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    <a
                                                        href={book.amazonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
                                                    >
                                                        <FaAmazon />
                                                        <span>Buy on Amazon</span>
                                                    </a>
                                                    <a
                                                        href={book.flipkartLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
                                                    >
                                                        <span>Buy on Flipkart</span>
                                                    </a>
                                                    <a
                                                        href={book.pothyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
                                                    >
                                                        <FaBookOpen />
                                                        <span>Buy on Pothy</span>
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="space-y-3">
                                                    <div className="h-6 w-3/4 rounded-full bg-gray-800/50 pulse-subtle"></div>
                                                    <div className="h-3 w-1/3 rounded-full bg-gray-800/50 pulse-subtle"></div>
                                                    <div className="h-2 w-1/4 rounded-full bg-gray-800/50 pulse-subtle mt-4"></div>
                                                    <div className="space-y-2 mt-4">
                                                        <div className="h-2 w-full rounded-full bg-gray-800/50 pulse-subtle"></div>
                                                        <div className="h-2 w-5/6 rounded-full bg-gray-800/50 pulse-subtle"></div>
                                                        <div className="h-2 w-4/5 rounded-full bg-gray-800/50 pulse-subtle"></div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-300 text-sm font-medium border border-purple-700/30">
                                                        Coming Soon
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <style jsx global>{`
                @keyframes pulse {
                    0% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                    100% { opacity: 0.3; }
                }
                
                .pulse-subtle {
                    animation: pulse 2s infinite ease-in-out;
                }
            `}</style>
            </section>
        </PageWrapper>
    );
};

export default Books;

