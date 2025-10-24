'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

// --- SVG Icons for the UI ---

const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"></path>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
  </svg>
);

// --- Main Hero Component ---

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse parallax movement for background elements
  const calculateParallax = (axis, factor = 20) => {
    if (!isBrowser) return 0;
    const pos = axis === 'x' ? mousePosition.x : mousePosition.y;
    const dim = axis === 'x' ? window.innerWidth : window.innerHeight;
    return (pos / (dim || 1) - 0.5) * factor;
  };

  // 3D tilt transform for the phone
  const calculateTransform = () => {
    if (!isBrowser) return 'perspective(1000px)';
    const x = calculateParallax('x', 20); // Tilt left/right
    const y = calculateParallax('y', -20); // Tilt up/down (inverted)
    return `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  };


  // --- START: Original Code Puzzle Game State & Logic (Unaltered) ---
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [gameStatus, setGameStatus] = useState('intro'); // 'intro', 'playing', 'success', 'failure', 'completed'
  const [errorMessage, setErrorMessage] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const codePuzzles = [
    {
      title: "String Reversal",
      description: "Complete the function to reverse the input string",
      code: `function reverseString(str) {\n  // Your code here\n  \n}`,
      solution: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}`,
      test: `reverseString('hello')`,
      expectedOutput: `'olleh'`,
      verify: answer => {
        try {
          const cleanAnswer = answer.replace(/^['"](.*)['"]$/, '$1');
          return cleanAnswer === 'olleh';
        } catch (e) { return false; }
      },
      hint: "Try using string methods like split(), reverse(), and join()"
    },
    {
      title: "Calculate Sum",
      description: "Complete the function to calculate the sum of all numbers in the array",
      code: `function sumArray(numbers) {\n  // Your code here\n  \n}`,
      solution: `function sumArray(numbers) {\n  return numbers.reduce((sum, num) => sum + num, 0);\n}`,
      test: `sumArray([1, 2, 3, 4, 5])`,
      expectedOutput: `15`,
      verify: answer => {
        try { return Number(answer) === 15; } catch (e) { return false; }
      },
      hint: "Try using array methods like reduce() or a for loop"
    },
    {
      title: "Find Maximum",
      description: "Complete the function to find the maximum value in the array",
      code: `function findMax(numbers) {\n  // Your code here\n  \n}`,
      solution: `function findMax(numbers) {\n  return Math.max(...numbers);\n}`,
      test: `findMax([3, 7, 2, 9, 1])`,
      expectedOutput: `9`,
      verify: answer => {
        try { return Number(answer) === 9; } catch (e) { return false; }
      },
      hint: "Try using Math.max() or a comparison loop"
    },
    {
      title: "Filter Array",
      description: "Complete the function to filter out all numbers less than 10",
      code: `function filterSmallNumbers(arr) {\n  // Your code here\n  \n}`,
      solution: `function filterSmallNumbers(arr) {\n  return arr.filter(num => num >= 10);\n}`,
      test: `filterSmallNumbers([5, 12, 8, 20, 3])`,
      expectedOutput: `[12, 20]`,
      verify: answer => {
        try {
          const result = JSON.parse(answer.replace(/'/g, '"'));
          return Array.isArray(result) && result.length === 2 && result.includes(12) && result.includes(20);
        } catch (e) { return false; }
      },
      hint: "Try using the array filter() method with a condition"
    },
    {
      title: "Object Property Counter",
      description: "Complete the function to count the number of properties in an object",
      code: `function countProperties(obj) {\n  // Your code here\n  \n}`,
      solution: `function countProperties(obj) {\n  return Object.keys(obj).length;\n}`,
      test: `countProperties({name: 'John', age: 30, city: 'New York'})`,
      expectedOutput: `3`,
      verify: answer => {
        try { return Number(answer) === 3; } catch (e) { return false; }
      },
      hint: "Try using Object.keys() or a for...in loop"
    }
  ];

  const toggleGame = () => {
    if (showGame) {
      if (timerRef.current && isBrowser) {
        clearInterval(timerRef.current);
      }
      setShowGame(false);
      // Reset game when closing
      resetGame();
    } else {
      setShowGame(true);
      // Reset game when opening
      resetGame();
    }
  };

  const resetGame = () => {
    setPuzzleIndex(0);
    setGameScore(0);
    setUserAnswer('');
    setGameStatus('intro');
    setErrorMessage('');
    setTimer(0);
    if (timerRef.current && isBrowser) {
      clearInterval(timerRef.current);
    }
  };

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameStatus('failure');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startGame = () => {
    if (!isBrowser) return;
    setCurrentPuzzle(codePuzzles[puzzleIndex]);
    setGameStatus('playing');
    setTimer(60);
    startTimer();
  };

  const checkAnswer = () => {
    if (!currentPuzzle || !isBrowser) return;

    if (currentPuzzle.verify(userAnswer)) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setGameScore(prev => prev + 1);

      if (puzzleIndex >= codePuzzles.length - 1) {
        setGameStatus('completed');
      } else {
        setGameStatus('success');
        setTimeout(() => {
          setPuzzleIndex(prev => prev + 1);
          setUserAnswer('');
          setCurrentPuzzle(codePuzzles[puzzleIndex + 1]);
          setGameStatus('playing');
          setTimer(60);
          startTimer();
        }, 2000);
      }
    } else {
      setErrorMessage('Try again! Your answer is not correct.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const showSolution = () => {
    if (!currentPuzzle) return;
    setUserAnswer(currentPuzzle.solution.split('\n').slice(1, -1).join('\n').trim());
  };

  const handleNextPuzzle = () => {
    if (!isBrowser) return;

    if (gameStatus === 'completed') {
      resetGame();
    } else {
      // This logic is for 'failure' state
      setPuzzleIndex(prev => prev + 1);
      setUserAnswer('');
      setCurrentPuzzle(codePuzzles[puzzleIndex + 1]);
      setGameStatus('playing');
      setTimer(60);
      startTimer();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current && isBrowser) {
        clearInterval(timerRef.current);
      }
    };
  }, [isBrowser]);
  // --- END: Original Code Puzzle Game State & Logic ---


  // --- New JSX Structure ---

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 to-black relative overflow-hidden p-4">

      {/* Background Floating "Widgets" */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{
          x: calculateParallax('x', -20),
          y: calculateParallax('y', -30),
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[15%] w-48 h-48 bg-indigo-500/10 rounded-2xl blur-xl"
        animate={{
          x: calculateParallax('x', 40),
          y: calculateParallax('y', 20),
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute top-[20%] right-[25%] w-24 h-24 bg-white/5 rounded-full blur-md"
        animate={{
          x: calculateParallax('x', -10),
          y: calculateParallax('y', 15),
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* --- The Phone --- */}
      <motion.div
        className="relative w-[360px] h-[740px] bg-gray-800/60 backdrop-blur-lg border border-white/20 rounded-[48px] shadow-2xl shadow-black/30"
        style={{ transform: calculateTransform() }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Phone Frame Elements */}
        <div className="absolute inset-0 border-[10px] border-black rounded-[48px] pointer-events-none z-10"></div>
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-20"></div>
        <div className="absolute -left-[3px] top-28 w-1 h-20 bg-black rounded-l-md"></div>
        <div className="absolute -right-[3px] top-36 w-1 h-8 bg-black rounded-r-md"></div>
        <div className="absolute -right-[3px] top-48 w-1 h-8 bg-black rounded-r-md"></div>

        {/* Phone Screen */}
        <div className="w-full h-full rounded-[38px] overflow-hidden bg-gray-900 relative">

          <AnimatePresence mode="wait">
            {!showGame ? (
              // --- Home Screen ---
              <motion.div
                key="home"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full h-full flex flex-col"
              >
                {/* Wallpaper */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-0"></div>

                {/* Home Screen Content */}
                <div className="relative z-10 p-8 flex-1 flex flex-col justify-center items-center text-center">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-lg mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                  >
                    {/* You could put a logo or photo here */}
                    <img
                      src="https://github.com/abhijeeeth.png"
                      alt="Abhijith Shaji"
                      className="w-full h-full rounded-full object-cover border-2 border-white/50"
                    />
                  </motion.div>
                  <h1 className="font-bold text-4xl text-white mb-1">
                    Abhijith Shaji
                  </h1>
                  <div className="text-xl text-gray-300 font-sans h-8">
                    <TypeAnimation
                      sequence={[
                        "Flutter Developer", 2000,
                        "Mobile App Specialist", 1500,
                        "Author", 2000,
                        "Data Scientist", 1500,
                        'Next.js Developer', 1500,
                        'React.js Developer', 1500,
                      ]}
                      wrapper="span"
                      speed={40}
                      repeat={Infinity}
                      className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text font-semibold"
                    />
                  </div>
                </div>

                {/* Dock */}
                <div className="relative z-10 p-4 bg-black/20 backdrop-blur-sm">
                  <div className="flex justify-around items-center">
                    <AppIcon
                      icon={<CodeBracketIcon />}
                      label="CodeSim"
                      onClick={toggleGame}
                      isPrimary={true}
                    />
                    <AppIcon
                      icon={<FolderIcon />}
                      label="Projects"
                      onClick={() => window.location.href = '#projects'}
                    />
                    <AppIcon
                      icon={<MailIcon />}
                      label="Contact"
                      onClick={() => window.location.href = '#contact'}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              // --- CodeSim App Screen ---
              <motion.div
                key="game"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Flutter-like transition
                className="w-full h-full flex flex-col bg-gray-900"
              >
                {/* App Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-700/50 bg-gray-800">
                  <button
                    onClick={toggleGame}
                    className="text-blue-400 p-1 rounded-full hover:bg-gray-700"
                  >
                    <ArrowLeftIcon />
                  </button>
                  <h2 className="text-sm font-bold text-white">
                    CodeSim Challenge
                  </h2>
                  <div className="text-sm text-blue-300 font-mono">
                    {gameStatus === 'playing' ? `00:${timer.toString().padStart(2, '0')}` : `S: ${gameScore}`}
                  </div>
                </div>

                {/* App Body - Renders based on gameStatus */}
                <div className="flex-1 overflow-y-auto p-5 text-white">
                  {/* Game Intro */}
                  {gameStatus === 'intro' && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div
                        className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="text-xl font-bold text-blue-300 mb-3">Welcome to CodeSim</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Test your JavaScript skills. You have 60 seconds per puzzle.
                        </p>
                        <p className="text-xs text-gray-400 italic">
                          Good luck, developer!
                        </p>
                      </motion.div>
                      <motion.button
                        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full"
                        onClick={startGame}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Challenge
                      </motion.button>
                    </div>
                  )}

                  {/* Game Playing */}
                  {gameStatus === 'playing' && currentPuzzle && (
                    <motion.div
                      key={puzzleIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h3 className="text-lg font-semibold text-blue-300 mb-1">{currentPuzzle.title}</h3>
                      <p className="text-sm text-gray-300 mb-4">{currentPuzzle.description}</p>

                      <pre className="bg-gray-800 border border-gray-700 rounded-md p-3 mb-3 font-mono text-xs overflow-x-auto text-gray-400">
                        {currentPuzzle.code}
                      </pre>

                      <div className="text-xs text-gray-400 mb-4 p-2 bg-gray-800 rounded">
                        <span className="font-semibold text-blue-300">Test:</span> {currentPuzzle.test} → {currentPuzzle.expectedOutput}
                      </div>

                      <textarea
                        className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-blue-300 font-mono text-sm h-24 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                        placeholder="// Your solution here..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                      />

                      {errorMessage && (
                        <div className="text-red-400 text-xs mt-2 mb-2">{errorMessage}</div>
                      )}

                      <div className="flex justify-between mt-4">
                        <button
                          className="px-3 py-2 text-xs rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                          onClick={() => setErrorMessage(currentPuzzle.hint)}
                        >
                          Hint
                        </button>
                        <div>
                          <button
                            className="px-3 py-2 text-xs rounded-md bg-gray-700 text-gray-300 mr-2 hover:bg-gray-600 transition-colors"
                            onClick={showSolution}
                          >
                            Solution
                          </button>
                          <button
                            className="px-5 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            onClick={checkAnswer}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Success Screen */}
                  {gameStatus === 'success' && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                          <CheckIcon className="text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-400">Correct!</h3>
                        <p className="text-gray-300 text-sm mt-2">Loading next puzzle...</p>
                      </motion.div>
                    </div>
                  )}

                  {/* Failure Screen */}
                  {gameStatus === 'failure' && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                          <XIcon className="text-red-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-red-400">Time's Up!</h3>
                        <p className="text-gray-300 text-sm mt-2 mb-4">You ran out of time.</p>

                        <div className="w-full text-left p-3 bg-gray-800 rounded text-xs text-gray-400 font-mono mb-6">
                          <div className="text-blue-300 mb-1">Solution:</div>
                          <pre>{currentPuzzle && currentPuzzle.solution}</pre>
                        </div>

                        {puzzleIndex < codePuzzles.length - 1 ? (
                          <button
                            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            onClick={handleNextPuzzle}
                          >
                            Next Challenge
                          </button>
                        ) : (
                          <button
                            className="px-6 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                            onClick={resetGame}
                          >
                            Try Again
                          </button>
                        )}
                      </motion.div>
                    </div>
                  )}

                  {/* Game Completed Screen */}
                  {gameStatus === 'completed' && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                          <StarIcon className="text-blue-300" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-300">Challenge Complete!</h3>
                        <p className="text-4xl font-bold text-white my-2">{gameScore}/{codePuzzles.length}</p>
                        <p className="text-gray-300 text-sm mt-2 mb-6">
                          {gameScore === codePuzzles.length
                            ? 'Perfect score! You are a coding master.'
                            : 'Great effort! Keep practicing.'}
                        </p>
                        <button
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                          onClick={resetGame}
                        >
                          <RefreshIcon />
                          Play Again
                        </button>
                      </motion.div>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};

// --- Helper Component for App Icons ---
const AppIcon = ({ icon, label, onClick, isPrimary = false }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-1.5 text-white w-20 group"
  >
    <div className={`
      w-14 h-14 rounded-2xl flex items-center justify-center
      transition-all duration-200
      ${isPrimary
        ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30'
        : 'bg-white/10 group-hover:bg-white/20'}
      group-hover:scale-105 group-active:scale-95
    `}>
      {icon}
    </div>
    <span className="text-xs text-gray-200">{label}</span>
  </button>
);

export default Hero;