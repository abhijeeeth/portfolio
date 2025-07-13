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
        <section id="books" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 tracking-tight">
                    Books I Wrote
                </h2>

                <div className="space-y-12">
                    {books.map((book, idx) => (
                        <div
                            key={book.id}
                            className="animate-fade-in rounded-xl overflow-hidden bg-gray-900/70 backdrop-blur shadow-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center">
                                {book.isPublished ? (
                                    <div className="relative w-48 h-64 md:w-56 md:h-72 flex-shrink-0">
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            className="object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 192px, 224px"
                                            priority
                                        />
                                    </div>
                                ) : (
                                    <div className="relative w-48 h-64 md:w-56 md:h-72 flex-shrink-0">
                                        <div className="w-full h-full rounded-lg bg-gray-800/50 shimmer-effect"></div>
                                    </div>
                                )}

                                <div className="flex flex-col space-y-5 flex-1">
                                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">{book.title}</h3>

                                    {book.isPublished ? (
                                        <>
                                            <p className="text-gray-300 leading-relaxed">{book.description}</p>
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                <a
                                                    href={book.amazonLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors duration-300"
                                                >
                                                    <FaAmazon />
                                                    <span>Amazon</span>
                                                </a>
                                                <a
                                                    href={book.pothyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-colors duration-300"
                                                >
                                                    <FaBookOpen />
                                                    <span>Pothy</span>
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="h-20 w-full rounded shimmer-effect"></div>
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                <div className="h-10 w-28 rounded-lg shimmer-effect"></div>
                                                <div className="h-10 w-28 rounded-lg shimmer-effect"></div>
                                            </div>
                                            <p className="text-amber-400 font-semibold text-lg absolute bottom-6 md:bottom-8 right-6 md:right-8">Coming Soon</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                
                @keyframes shimmer {
                    0% {
                        background-position: -468px 0;
                    }
                    100% {
                        background-position: 468px 0;
                    }
                }
                
                .shimmer-effect {
                    background: linear-gradient(to right, #2a2a2a 8%, #3a3a3a 18%, #2a2a2a 33%);
                    background-size: 800px 104px;
                    animation: shimmer 1.5s infinite linear;
                }
            `}</style>
        </section>
    );
};

export default Books;

