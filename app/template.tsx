"use client";
import { AnimatePresence, motion } from "motion/react";
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
}
