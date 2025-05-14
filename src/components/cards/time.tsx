"use client"

import { defaultVariantsNoDelay } from "@/components/motion.variants"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TimeCard() {
   const [time, setTime] = useState<Date | null>(null)

   useEffect(() => {
      setTime(new Date())
      const interval = setInterval(() => setTime(new Date()), 10000)

      return () => clearInterval(interval)
   }, [])

   const timeString = time?.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York", // Forces ET
   })

   return (
      <motion.div
         variants={defaultVariantsNoDelay}
         className="card-border relative col-span-4 col-start-5 row-start-1 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl p-2 bg-neutral-900 md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-5"
      >
         <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
               Current time (ET)
            </p>
         </div>
         <h2 className="text-xl font-semibold text-white">
            {timeString}
         </h2>
      </motion.div>
   )
}
