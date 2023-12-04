'use client';
import { motion, AnimatePresence} from 'framer-motion'

export const LeftWrapper = ({children}) => (
    <>
    <AnimatePresence>

    <motion.div
    initial={{opacity:0, x:30}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:25}}
    transition={{delay:.05}}

    >
        {children}
    </motion.div>
    </AnimatePresence>

</>
);