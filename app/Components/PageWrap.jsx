'use client';
import { motion, AnimatePresence} from 'framer-motion'

export const PageWrapper = ({children}) => (
    <>
    <AnimatePresence>

    <motion.div
    initial={{opacity:0, y:30}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:25}}
    transition={{delay:.05}}

    >
        {children}
    </motion.div>
    </AnimatePresence>

</>
);