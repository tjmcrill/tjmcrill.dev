"use client"

import { defaultVariantsNoDelay } from "@/components/motion.variants"
import { motion } from "framer-motion"
import { GithubIcon } from "lucide-react"
import Link from "next/link"

export function GitHubCard() {
   const MotionLink = motion.create(Link)
   return (
      <MotionLink
         href={"https://github.com/tjmcrill"}
         target="_blank"
         title="Github profile"
         variants={defaultVariantsNoDelay}
         whileHover={{ scale: 1.05 }}
         className="card-border relative col-span-1 col-start-2 row-span-1 md:col-span-1 md:col-start-2 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-neutral-900 text-white"
      >
         <GithubIcon size={24} />
      </MotionLink>
   )
}