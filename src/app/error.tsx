"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiHome, FiRefreshCw } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-red-500 mb-4">!</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Something went wrong
          </h2>
          <p className="text-muted mb-8">
            An unexpected error occurred. Please try again.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border border-border text-foreground hover:bg-card transition-all duration-300"
            >
              <FiRefreshCw size={18} />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            >
              <FiHome size={18} />
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
