"use client"

import * as React from "react"
import { type NavItem } from "@/components/layouts/header"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LinkedinIcon } from "lucide-react"

export const FloatingNav = ({
   navItems,
   className,
}: {
   navItems: NavItem[]
   className?: string
}) => {
   const pathname = usePathname()

   return (
      <motion.div
         initial={{
            opacity: 0,
            y: -20,
         }}
         animate={{
            y: 0,
            opacity: 1,
         }}
         transition={{
            duration: 0.35,
            delay: 0.25,
            ease: "backOut",
         }}
         // ? "1px 1px 12px rgba(100,100,100,0.4)"
         //"fixed inset-x-4 top-5 z-[49] mx-auto flex max-w-3xl items-center justify-between overflow-hidden rounded-full border border-neutral-950 border-opacity-[0.03] px-3 py-2 filter backdrop-blur-xl bg-neutral-900/75",
         className={cn(
            "fixed inset-x-4 top-5 z-[49] mx-auto flex max-w-3xl items-center justify-between rounded-full px-3 py-2 filter backdrop-blur-xl",
            className,
         )}
      >
         <div className="flex w-full items-center justify-center">
            <div className="flex">
               {navItems.map((navItem, idx: number) => {
                  const isActive = pathname === navItem.link
                  return (
                     <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                           "relative flex h-8 items-center px-4 text-neutral-50 hover:text-neutral-300",
                        )}
                     >
                        <span
                           className={cn("text-sm sm:block")}
                           style={{
                              textShadow: isActive
                                 ? "1px 1px 12px rgba(100,100,100,0.4)"
                                 : "",
                           }}
                        >
                           <span className="mr-px text-neutral-400">/</span>
                           {navItem.name.toLowerCase()}
                        </span>

                        {isActive && (
                           <>
                              <motion.span
                                 transition={{
                                    ease: "backInOut",
                                    duration: 0.45,
                                 }}
                                 layoutId="active-nav-glow"
                                 className="absolute inset-x-0 top-0 mx-auto h-16 w-10 rounded-full bg-neutral-200/50 blur-[24px] sm:flex"
                              />
                              <motion.span
                                 transition={{
                                    ease: "backInOut",
                                    duration: 0.35,
                                 }}
                                 layoutId="active-nav"
                                 className="absolute inset-x-0 inset-y-0 z-[-1] rounded-full bg-neutral-200/50 sm:flex"
                              />
                           </>
                        )}
                     </Link>
                  )
               })}
            </div>

            {/* GitHub link aligned to end */}
            {/* <a
               href="https://www.linkedin.com/in/tyler-james-mcrill/"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 pr-2 text-sm hover:opacity-75 text-neutral-50"
            >
               <LinkedinIcon size={14} />
            </a> */}
         </div>

      </motion.div>
   )
}