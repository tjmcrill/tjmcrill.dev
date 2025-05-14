"use client"

import { defaultVariantsNoDelay } from "@/components/motion.variants"
import { motion } from "framer-motion"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

export function LinkedInCard() {
   const MotionLink = motion.create(Link)
   return (
      <MotionLink
         href={"https://www.linkedin.com/in/tyler-james-mcrill/"}
         target="_blank"
         title="Linkedin profile"
         variants={defaultVariantsNoDelay}
         whileHover={{ scale: 1.05 }}
         className="card-border relative col-span-1 col-start-1 row-span-1 md:col-span-1 md:col-start-0 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-neutral-900 text-white"
      >
         <LinkedinIcon size={24} />
      </MotionLink>
   )
}