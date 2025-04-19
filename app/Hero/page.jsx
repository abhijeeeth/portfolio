'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateMovement = (axis, factor = 20) => {
    return axis === 'x'
      ? (mousePosition.x / window.innerWidth - 0.5) * factor
      : (mousePosition.y / window.innerHeight - 0.5) * factor;
  };

  // New code puzzle game state
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [gameStatus, setGameStatus] = useState('intro'); // 'intro', 'playing', 'success', 'failure'
  const [errorMessage, setErrorMessage] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const gameAreaRef = useRef(null);
  const timerRef = useRef(null);

  // Collection of coding puzzles
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
          // Remove surrounding quotes if present (user might add them)
          const cleanAnswer = answer.replace(/^['"](.*)['"]$/, '$1');
          return cleanAnswer === 'olleh';
        } catch (e) {
          return false;
        }
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
        try {
          return Number(answer) === 15;
        } catch (e) {
          return false;
        }
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
        try {
          return Number(answer) === 9;
        } catch (e) {
          return false;
        }
      },
      hint: "Try using Math.max() or a comparison loop"
    }
  ];

  // Toggle game visibility
  const toggleGame = () => {
    if (showGame) {
      clearInterval(timerRef.current);
      setShowGame(false);
    } else {
      setShowGame(true);
      resetGame();
    }
  };

  // Reset the game state
  const resetGame = () => {
    setPuzzleIndex(0);
    setGameScore(0);
    setUserAnswer('');
    setGameStatus('intro');
    setErrorMessage('');
    setTimer(0);
    clearInterval(timerRef.current);
  };

  // Start the coding challenge
  const startGame = () => {
    setCurrentPuzzle(codePuzzles[puzzleIndex]);
    setGameStatus('playing');
    setTimer(60); // 60 second timer per puzzle

    clearInterval(timerRef.current);
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

  // Check the user's answer
  const checkAnswer = () => {
    if (!currentPuzzle) return;

    if (currentPuzzle.verify(userAnswer)) {
      // Correct answer
      clearInterval(timerRef.current);
      setGameScore(prev => prev + 1);

      if (puzzleIndex >= codePuzzles.length - 1) {
        // Game completed
        setGameStatus('completed');
      } else {
        // Move to next puzzle
        setGameStatus('success');
        setTimeout(() => {
          setPuzzleIndex(prev => prev + 1);
          setUserAnswer('');
          setCurrentPuzzle(codePuzzles[puzzleIndex + 1]);
          setGameStatus('playing');
          setTimer(60);

          // Restart timer for next puzzle
          clearInterval(timerRef.current);
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
        }, 2000);
      }
    } else {
      // Wrong answer
      setErrorMessage('Try again! Your answer is not correct.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Show solution for current puzzle
  const showSolution = () => {
    if (!currentPuzzle) return;
    setUserAnswer(currentPuzzle.solution.split('\n').slice(1, -1).join('\n').trim());
  };

  // Load next puzzle or restart the game
  const handleNextPuzzle = () => {
    if (gameStatus === 'completed') {
      resetGame();
    } else {
      setPuzzleIndex(prev => prev + 1);
      setUserAnswer('');
      setCurrentPuzzle(codePuzzles[puzzleIndex + 1]);
      setGameStatus('playing');
      setTimer(60);

      // Restart timer
      clearInterval(timerRef.current);
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
    }
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Dynamic background with code patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        style={{
          top: '10%',
          left: '15%',
          y: y1
        }}
        animate={{
          x: calculateMovement('x', -15),
          y: calculateMovement('y', -15) + Number(y1.get()),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
        style={{
          bottom: '15%',
          right: '10%',
          y: y2
        }}
        animate={{
          x: calculateMovement('x', 10),
          y: calculateMovement('y', 10) + Number(y2.get()),
        }}
        transition={{ type: 'spring', damping: 50 }}
      />

      {/* Creative elements representing interests */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Writing elements - floating quotes and text */}
        <motion.div
          className="absolute left-[5%] top-[20%] text-blue-500/30 font-serif text-9xl opacity-25 transform -rotate-12"
          animate={{
            y: [0, 15, 0],
            rotate: [-12, -10, -12],
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        >
          "
        </motion.div>
        <motion.div
          className="absolute right-[8%] bottom-[30%] text-blue-500/30 font-serif text-9xl opacity-25 transform rotate-12"
          animate={{
            y: [0, -15, 0],
            rotate: [12, 10, 12],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          "
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content section - 7/12 columns on large screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-7 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              {/* Creative greeting with animated underline */}
              <div className="inline-block text-blue-400 text-xl font-medium relative mb-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-[2px] h-16 bg-blue-500/50"
                  ></motion.div>
                  <span className="relative z-10">Hello, I am</span>
                </div>
              </div>

              <h1 className="font-sans text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tighter relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block"
                >
                  Abhijith Shaji
                </motion.span>
                {/* Decorative elements under name */}
                <div className="flex mt-2 gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: i === 0 ? 160 : i === 1 ? 80 : 40 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                      className={`h-1 bg-blue-500 ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-400' : 'bg-blue-300'}`}
                    ></motion.div>
                  ))}
                </div>
              </h1>
            </motion.div>

            {/* Professional title with creative animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-4 h-4"
                >
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#3b82f6" strokeWidth="2" />
                    <circle cx="10" cy="10" r="2" fill="#3b82f6" />
                  </svg>
                </motion.div>
              </div>
              <div className="text-2xl lg:text-4xl text-gray-300 font-sans flex flex-wrap items-center gap-x-3">
                <span className="text-white font-medium">Im a</span>
                <TypeAnimation
                  sequence={[
                    "Flutter Developer",
                    2000,
                    "Mobile App Specialist",
                    1500,
                    'Next.js Developer',
                    1500,
                    'React.js Developer',
                    1500,
                    'UX/UI Designer',
                    1500,

                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text font-semibold relative"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              Specialized in creating beautiful, high-performance Flutter applications and responsive web experiences. I combine my passion for photography, writing and code to build digital experiences that inspire and engage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start"
            >
              {/* Creative call-to-action button */}
              <a
                href="#contact"
                className="group relative bg-blue-600 overflow-hidden px-8 py-4 rounded-lg font-medium inline-block shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 text-white flex items-center gap-2">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              {/* Interactive social links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/abhijeeeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-white transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/stabhijith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 text-white transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Creative scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4 hidden lg:block"
            >
              <div className="flex items-center gap-x-3">
                <div className="relative h-[30px] w-[18px] rounded-full border border-gray-700 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1 h-2 bg-blue-500 rounded-full mt-2"
                  ></motion.div>
                </div>
                <span className="text-gray-400 text-sm uppercase tracking-widest">Scroll to explore</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Creative showcase section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative h-[550px] w-full">
              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-blue-500/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-blue-500/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Replace the existing game section with the new Code Challenge Game */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button
          onClick={toggleGame}
          className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm mb-4 hover:bg-blue-600/30 transition-all duration-300"
        >
          {showGame ? 'Hide Code Challenge' : 'Try Code Challenge'}
        </button>

        {showGame && (
          <motion.div
            ref={gameAreaRef}
            className="w-[450px] max-w-[90vw] backdrop-blur-md bg-gray-900/70 border border-gray-700/50 rounded-xl relative overflow-hidden mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Header */}
            <div className="p-3 border-b border-gray-700/50 bg-black/30 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <div className="text-xs text-blue-400 font-mono">
                {gameStatus === 'playing' && currentPuzzle ? (
                  <span>Code Challenge: {puzzleIndex + 1}/{codePuzzles.length} - {timer}s</span>
                ) : (
                  <span>Code Challenge</span>
                )}
              </div>
              <div className="text-xs text-blue-300 font-mono">
                Score: <span className="text-white">{gameScore}</span>
              </div>
            </div>

            {/* Game intro */}
            {gameStatus === 'intro' && (
              <div className="p-6 flex flex-col items-center">
                <motion.div
                  className="bg-blue-500/10 p-5 rounded-lg mb-6 w-full border border-blue-500/20"
                  animate={{
                    boxShadow: ['0 0 0 rgba(59, 130, 246, 0.1)', '0 0 20px rgba(59, 130, 246, 0.2)', '0 0 0 rgba(59, 130, 246, 0.1)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Coding Challenge</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Test your coding skills by solving JavaScript challenges. You'll have 60 seconds for each puzzle.
                  </p>
                  <div className="text-xs text-gray-400 p-2 bg-black/30 rounded font-mono mb-3">
                    Complete the missing code to make the function work as expected.
                  </div>
                  <p className="text-xs text-blue-300 italic">
                    Challenges get progressively more difficult. Good luck!
                  </p>
                </motion.div>

                <motion.button
                  className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  onClick={startGame}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Challenge
                </motion.button>
              </div>
            )}

            {/* Game playing screen */}
            {gameStatus === 'playing' && currentPuzzle && (
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{currentPuzzle.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{currentPuzzle.description}</p>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-md p-3 mb-3 font-mono text-xs overflow-x-auto">
                  <div className="text-gray-400">
                    {currentPuzzle.code.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-gray-600 w-6 text-right pr-2">{i + 1}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-2">
                  <span className="bg-black/30 px-2 py-1 rounded">Test: {currentPuzzle.test} → {currentPuzzle.expectedOutput}</span>
                </div>

                <div className="mb-3">
                  <textarea
                    className="w-full bg-gray-900 border border-gray-800 rounded-md p-3 text-blue-300 font-mono text-xs h-16 focus:border-blue-600 focus:outline-none resize-none"
                    placeholder="// Type your solution here"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-xs mb-2">{errorMessage}</div>
                )}

                <div className="flex justify-between">
                  <button
                    className="px-3 py-1.5 text-xs rounded-md bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
                    onClick={() => setErrorMessage(currentPuzzle.hint)}
                  >
                    Get Hint
                  </button>

                  <div>
                    <button
                      className="px-3 py-1.5 text-xs rounded-md bg-gray-800 text-gray-300 mr-2 hover:bg-gray-700 transition-colors"
                      onClick={showSolution}
                    >
                      Show Solution
                    </button>

                    <button
                      className="px-4 py-1.5 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      onClick={checkAnswer}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Success screen */}
            {gameStatus === 'success' && (
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-3"
                >
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Correct!</h3>
                  <p className="text-gray-300 text-sm mt-2">Preparing the next challenge...</p>
                </motion.div>
              </div>
            )}

            {/* Failure screen */}
            {gameStatus === 'failure' && (
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Time's Up!</h3>
                  <p className="text-gray-300 text-sm mt-2">You ran out of time for this challenge.</p>

                  <div className="mt-4 p-3 bg-black/20 rounded text-left text-xs text-gray-400 font-mono">
                    <div className="text-blue-400 mb-1">Solution:</div>
                    {currentPuzzle && currentPuzzle.solution.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </motion.div>

                <div className="flex justify-center gap-3">
                  {puzzleIndex < codePuzzles.length - 1 ? (
                    <button
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      onClick={handleNextPuzzle}
                    >
                      Next Challenge
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      onClick={resetGame}
                    >
                      Try Again
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Game completed screen */}
            {gameStatus === 'completed' && (
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-4"
                >
                  <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-1">Challenge Complete!</h3>
                  <p className="text-2xl font-bold text-white">{gameScore}/{codePuzzles.length}</p>
                  <p className="text-gray-300 text-sm mt-2">
                    {gameScore === codePuzzles.length
                      ? 'Perfect score! Youre a coding genius!'
                      : 'Great effort! Keep practicing to improve.'}
                  </p>
                </motion.div>

                <button
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={resetGame}
                >
                  Play Again
                </button>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Custom cursor effect */}
      <div
        className="fixed w-6 h-6 rounded-full border-2 border-blue-500/50 pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease'
        }}
      ></div>
      <div
        className="fixed w-2 h-2 rounded-full bg-blue-500 pointer-events-none z-50 hidden lg:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </div>
  );
};

export default Hero;
