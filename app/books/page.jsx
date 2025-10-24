'use client';
import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaStar, FaStarHalf } from 'react-icons/fa';
import { motion } from 'framer-motion';
// These imports are now ONLY for the <img> tags, not the background.
import finalcover from '../images/finalcover.png';
import finalcover2 from '../images/cover.png';
import { PageWrapper } from '../Components/PageWrap';

const Books = () => {
    const books = [
        // ... (your books array remains unchanged) ...
        {
            id: 1,
            title: 'The Illusion of Free Will: MASTER THE ART OF CONTROL',
            author: 'Abhijith Shaji',
            category: 'Psychology & Self-Development',
            rating: 4.5,
            reviews: 103,
            description: `Do you really control your choices? Or have you only been taught to believe you do? The Illusion of Free Will pulls back the curtain on the darkest corners of the human mind. It shows how every fear, desire, and insecurity can be bent, twisted, and used—against you, or by you. Once you see how easily people can be read, manipulated, and controlled, you will never look at another person the same way again. This book is not comfort. It is a weapon. Inside its pages lie the secrets of how humans truly work—their weaknesses, their hidden strings, their their illusions of control. Whether you seek power, protection, or truth, what you discover here will change the way you see the world forever. Dare to open it. But know this: once you step inside, there is no going back.`,
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
            stars.push(<FaStar key={`star-${i}`} className="text-amber-400" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalf key="half-star" className="text-amber-400" />);
        }
        return stars;
    };

    return (
        <PageWrapper>
            {/* NEW: Added `relative` and `overflow-hidden` to the section
              This contains the new pseudo-element backgrounds.
            */}
            <section
                id="books"
                className="relative overflow-hidden min-h-screen bg-gradient-to-b from-stone-950 to-black text-gray-200 font-serif"
            >
                {/* This container `div` remains `z-10` to sit ON TOP of 
                  the new background layers (which will be z-0).
                */}
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="pt-24 pb-12 text-center">
                        <motion.h1
                            className="text-5xl md:text-7xl font-display font-bold mb-6 text-white"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Echoes in Ink
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto italic"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            A collection of shadows, whispers, and stories bound in print.
                        </motion.p>
                    </div>

                    <motion.div
                        className="my-12 py-8 px-6 max-w-3xl mx-auto bg-stone-900/40 border border-stone-800 rounded-lg text-center backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-display font-semibold text-stone-200 mb-4">From the Artist's Desk</h2>
                        <p className="text-lg text-stone-300 leading-relaxed">
                            As a <b className="text-white">writer</b>, <b className="text-white">photographer</b>, and <b className="text-white">developer</b>, I explore the spaces between light and shadow, code and prose. These works are artifacts of that exploration, each a piece of a larger narrative.
                        </p>
                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 pb-24">
                        {books.map((book, idx) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                                className="relative rounded-lg overflow-hidden transition-all duration-300 group bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-md border border-stone-800/70 hover:border-stone-700 shadow-lg"
                            >
                                <div className={`relative p-8 flex flex-col md:flex-row items-center md:items-start gap-8 z-10 ${!book.isPublished ? 'opacity-60' : ''}`}>
                                    {book.isPublished ? (
                                        <div className="relative w-44 h-60 md:w-52 md:h-[328px] flex-shrink-0 shadow-xl rounded-md transform group-hover:scale-[1.03] transition-transform duration-500 border-2 border-stone-700/60">
                                            <Image
                                                src={book.image}
                                                alt={book.title}
                                                fill
                                                className="object-cover rounded-md"
                                                sizes="(max-width: 768px) 176px, 208px"
                                                priority
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-44 h-60 md:w-52 md:h-[328px] flex-shrink-0 rounded-md bg-stone-800/70 flex flex-col items-center justify-center text-stone-500 text-center p-4 border-2 border-dashed border-stone-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13.5M12 6.253a2.625 2.625 0 00-2.625-2.625h-1.5a2.625 2.625 0 00-2.625 2.625v13.5a2.625 2.625 0 002.625 2.625h1.5a2.625 2.625 0 002.625-2.625M12 6.253a2.625 2.625 0 012.625-2.625h1.5a2.625 2.625 0 012.625 2.625v13.5a2.625 2.625 0 01-2.625 2.625h-1.5a2.625 2.625 0 01-2.625-2.625" />
                                            </svg>
                                            <span className="font-semibold text-lg font-display">{book.title}</span>
                                        </div>
                                    )}

                                    <div className="flex flex-col space-y-4 flex-1 text-center md:text-left">
                                        {book.isPublished ? (
                                            <>
                                                <div>
                                                    <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-2 leading-tight">
                                                        {book.title}
                                                    </h3>
                                                    <p className="text-stone-300 text-lg mb-4">by {book.author}</p>
                                                    <span className="inline-block px-3 py-1 text-xs font-medium text-stone-300 bg-stone-700/50 rounded-full border border-stone-600/50">
                                                        {book.category}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 justify-center md:justify-start">
                                                    <div className="flex items-center gap-0.5">
                                                        {renderStars(book.rating)}
                                                    </div>
                                                    <span className="text-stone-400 text-sm">({book.reviews} reviews)</span>
                                                </div>

                                                <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-prose line-clamp-5">
                                                    {book.description}
                                                </p>

                                                <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start font-sans">
                                                    <a
                                                        href={book.amazonLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-700/80 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
                                                    >
                                                        <FaAmazon />
                                                        <span>Amazon</span>
                                                    </a>
                                                    <a
                                                        href={book.flipkartLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-800/80 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
                                                    >
                                                        <span>Flipkart</span>
                                                    </a>
                                                    <a
                                                        href={book.pothyLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-stone-700/80 hover:bg-stone-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
                                                    >
                                                        <FaBookOpen />
                                                        <span>Pothy</span>
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="space-y-4 text-center md:text-left h-full flex flex-col justify-center">
                                                <div className="mt-6 text-center md:text-left pt-4">
                                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-stone-800 text-stone-400 text-sm font-medium border border-stone-700 italic">
                                                        In the Atelier...
                                                    </span>
                                                </div>
                                                <p className="text-stone-400 text-lg leading-relaxed pt-2">
                                                    This work is currently in progress, taking shape in shadow and thought.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Font Definitions & NEW BACKGROUND STYLES --- */}
                <style jsx global>{`
                    /* --- Font Imports (if you haven't already) --- */
                    /* @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Raleway:wght@400;700&display=swap');
                    */
                    
                    :root {
                        --font-display: 'EB Garamond', serif;
                        --font-serif: 'EB Garamond', serif;
                        --font-sans: 'Raleway', sans-serif;
                    }

                    .font-display { font-family: var(--font-display); }
                    .font-serif { font-family: var(--font-serif); }
                    .font-sans { font-family: var(--font-sans); }

                    /* --- NEW SLOPY BACKGROUND STYLES --- */
                    
                    /* Common styles for both pseudo-elements */
                    #books::before,
                    #books::after {
                        content: '';
                        position: absolute;
                        /* Inset by -20% to make it larger, preventing gaps at the edges when rotated */
                        inset: -20%; 
                        z-index: 0;
                        background-repeat: repeat;
                        background-size: 300px; /* Size of each repeating cover */
                        
                        /* This is the key: subtle, monochrome, and blurred */
                        opacity: 0.03; 
                        filter: grayscale(100%) blur(2px);
                        
                        /* The "slopy" effect */
                        transform: rotate(-15deg); 
                    }

                    /* Layer 1: The Illusion of Free Will */
                    #books::before {
                        /* IMPORTANT: This path assumes your image is at /public/images/cover.png 
                          Adjust if your path is different.
                        */
                        background-image: url('/images/cover.png');
                    }

                    /* Layer 2: The Perfect Lie */
                    #books::after {
                        /* IMPORTANT: This path assumes your image is at /public/images/finalcover.png 
                        */
                        background-image: url('/images/finalcover.png');
                        
                        /* Offset the second pattern so they don't overlap perfectly */
                        background-position: 150px 150px; 
                        
                        /* Optional: rotate it slightly differently for more chaos */
                        /* transform: rotate(-13deg); */ 
                        
                        /* Optional: make it even more subtle */
                         opacity: 0.02;
                    }
                `}</style>
            </section>
        </PageWrapper>
    );
};

export default Books;