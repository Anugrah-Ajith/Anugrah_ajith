// src/components/MotionWrapper.tsx
import React from 'react';
import { motion, MotionProps, Transition } from 'framer-motion';

/**
 * Wraps children with framer‑motion while respecting the user's
 * "Reduce Motion" accessibility setting.
 */
const MotionWrapper: React.FC<{
  children: React.ReactNode;
  variants?: any;
  initial?: string;
  animate?: string;
  transition?: Transition;
}> = ({ children, variants, initial = 'hidden', animate = 'visible', transition }) => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    return <>{children}</>;
  }
  return (
    <motion.div variants={variants} initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
