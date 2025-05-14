"use client"

import { motion } from "framer-motion"
import { defaultVariantsNoDelay } from "@/components/motion.variants"
import Image from "next/image"
import gmailLogo from "@/lib/gmail.png";

export function GmailCard() {
  return (
    <motion.button
      variants={defaultVariantsNoDelay}
      whileHover={{ scale: 1.05 }}
      onClick={() => window.location.href = "mailto:tjmcrill.dev@gmail.com?subject=Hi Tyler!&body=I saw your site at tjmcrill.dev..."}
      className="card-border-multicolor relative col-span-2 col-start-1 row-span-1 row-st md:col-span-2 md:col-start-3 flex items-center justify-center gap-2 overflow-hidden rounded-xl p-4 bg-neutral-900 cursor-pointer"
    >
      <Image
        src={gmailLogo}
        alt="Gmail logo"
        width={24}
        height={24}
        className="h-6 w-6 mix-blend-screen"
      />
      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
        tjmcrill.dev@gmail.com
      </span>
    </motion.button>
  )
}