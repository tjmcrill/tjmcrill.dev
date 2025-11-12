"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Info, X } from "lucide-react"
import jakib from "@/lib/jakib.png"
import { defaultVariantsNoDelay } from "@/components/motion.variants"

export function JakibCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      {/* CARD */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        variants={defaultVariantsNoDelay}
        whileHover={{ scale: 1.05 }}
        className="card-border relative col-span-8 col-start-1 row-span-1 md:col-span-5 md:col-start-3 md:row-span-2 flex gap-4 overflow-hidden rounded-xl p-4 bg-neutral-900 will-change-transform cursor-pointer"
      >
        <div className="flex items-center">
          <Image
            src={jakib}
            alt="Jakib logo"
            width={40}
            height={40}
            className="h-10 w-10 mix-blend-screen will-change-transform"
            unoptimized
          />
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="text-sm font-medium text-neutral-200">
              Jakib AI LLC.
            </div>
            <Info size={16} />
          </div>
          <div className="flex flex-row items-start justify-between gap-1 text-white transition-colors w-full">
            <span className="text-sm font-light text-neutral-400">
              Software Engineer
            </span>
            <span className="hidden md:inline text-sm font-light text-neutral-400">
              Jul 2025 – Present
            </span>
            {/* Mobile */}
            <span className="inline md:hidden text-sm font-light text-neutral-400">
              2025 – Present
            </span>
          </div>
        </div>
        
      </motion.button>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)} // Click outside
          >
            <motion.div
              className="relative w-full max-w-md rounded-xl bg-neutral-900 p-6 text-white shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent outside click
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-semibold mb-1">Jakib AI LLC.</h2>
              <p className="text-sm text-neutral-400 mb-4">
                Software Engineer • July 2025 – Present
              </p>
              <div className="space-y-2 text-sm text-neutral-300 leading-relaxed">
                <p>
                At Jakib AI, I architect custom AI solutions that drive measurable growth for companies across industries and scales.
                I specialize in building production-grade AI products tailored to each client's unique challenges—from intelligent recruiting pipelines that surface top talent faster, to RAG-powered chat interfaces that transform how teams access and leverage their knowledge bases.
                My stack: Next.js, React, TypeScript, Python, FastAPI, Modal, and Vercel—chosen for rapid iteration, bulletproof reliability, and seamless scalability from MVP to enterprise.                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
