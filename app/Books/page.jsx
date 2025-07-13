'use client';
import Image from 'next/image';
import { FaAmazon, FaBookOpen } from 'react-icons/fa';
import finalcover from '../images/finalcover.png'; // import the image

const Books = () => {
    const books = [
        {
            id: 1,
            title: 'The Perfect Lie: MASTER THE ART OF MISDIRECTION',
            author: '',
            description: 'Mastering the Perfect Lie is a bold and insightful guide into the art of deception. Blending psychology, real-life examples, and practical techniques, this book teaches you how to craft convincing lies, avoid getting caught, and detect dishonesty in others. A must-read for anyone curious about the hidden dynamics of truth and deception in everyday life.',
            image: finalcover,
            amazonLink: 'https://amzn.in/d/bSeEfeq',
            pothyLink: 'https://store.pothi.com/book/abhijith-shaji-perfect-lie/',
            isPublished: true
        },
        {
            id: 2,
            title: 'How to Bury Someone',
            isPublished: false
        },
        {
            id: 3,
            title: 'Raksha',
            isPublished: false
        },
    ];
    return (
        <section id="books" className="py-24 bg-gray-950 text-gray-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Publications
                </h2>

                <div className="space-y-8">
                    {books.map((book, idx) => (
                        <div
                            key={book.id}
                            className="fade-in rounded-lg overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-md"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                                {book.isPublished ? (
                                    <div className="relative w-40 h-56 md:w-44 md:h-60 flex-shrink-0">
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            className="object-contain rounded-md hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 160px, 176px"
                                            priority
                                        />
                                    </div>
                                ) : (
                                    <div className="relative w-40 h-56 md:w-44 md:h-60 flex-shrink-0">
                                        <div className="w-full h-full rounded-md bg-gray-800 pulse-subtle"></div>
                                    </div>
                                )}

                                <div className="flex flex-col space-y-4 flex-1">
                                    <h3 className="text-xl font-medium text-white">{book.title}</h3>

                                    {book.isPublished ? (
                                        <>
                                            <p className="text-gray-300 text-sm leading-relaxed">{book.description}</p>
                                            <div className="flex flex-wrap gap-4 pt-3">
                                                <a
                                                    href={book.amazonLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors duration-200"
                                                >
                                                    <FaAmazon />
                                                    <span>Amazon</span>
                                                </a>
                                                <a
                                                    href={book.pothyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors duration-200"
                                                >
                                                    <FaBookOpen />
                                                    <span>Pothy</span>
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-3">
                                                <div className="h-2 w-3/4 rounded-full bg-gray-800"></div>
                                                <div className="h-2 w-full rounded-full bg-gray-800"></div>
                                                <div className="h-2 w-5/6 rounded-full bg-gray-800"></div>
                                            </div>
                                            <div className="flex flex-wrap gap-4 pt-3">
                                                <div className="h-10 w-28 rounded-md bg-gray-800"></div>
                                                <div className="h-10 w-28 rounded-md bg-gray-800"></div>
                                            </div>
                                            <div className="mt-2">
                                                <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs font-medium">
                                                    Coming Soon
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                
                .fade-in {
                    opacity: 0;
                    animation: fadeIn 0.5s ease-out forwards;
                }
                
                @keyframes pulse {
                    0% { opacity: 0.7; }
                    50% { opacity: 0.9; }
                    100% { opacity: 0.7; }
                }
                
                .pulse-subtle {
                    animation: pulse 2s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default Books;

