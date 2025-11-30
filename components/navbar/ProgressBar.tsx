"use client";

import React from "react";
import { motion, useScroll, useSpring, SpringOptions } from "framer-motion";

// --- CONSTANTS ---
// High Z-index ensures the progress bar always sits on top of all other elements.
const PROGRESS_BAR_Z_INDEX = "z-[9999]"; 

// Framer Motion spring configuration for smooth, snappy movement
const SPRING_OPTIONS: SpringOptions = {
  stiffness: 180,
  damping: 30,
};

/* ---------------------------------- */
/* SCROLL PROGRESS BAR COMPONENT */
/* ---------------------------------- */
/**
 * A fixed horizontal bar that tracks the user's scroll progress through the page.
 */
const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a smooth, animated value based on scrollYProgress using a spring.
  const scaleX = useSpring(scrollYProgress, SPRING_OPTIONS);

  return (
    <motion.div
      // Fixed at the top, thin height (3px), primary color, starting from the left.
      className={`fixed top-0 left-0 h-[3px] bg-primary origin-left ${PROGRESS_BAR_Z_INDEX}`}
      // Apply the animated scaleX value to the x-axis scale property.
      style={{ scaleX }}
      aria-label="Page scroll progress"
      role="progressbar"
    />
  );
};

export default ProgressBar;