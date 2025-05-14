"use client"
import React, { useRef, useEffect } from "react"
import { defaultVariantsNoDelay } from "@/components/motion.variants"
import createGlobe from "cobe"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"
import Image from "next/image"
import osu from "@/lib/osu.png"

export function LocationCard() {
   const canvasRef = useRef<HTMLCanvasElement>(null)
   const pointerInteracting = useRef<number | null>(null)
   const pointerInteractionMovement = useRef(0)

   const fadeMask =
      "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)"

   const r = useMotionValue(0)
   const phiBase = useRef(0)
   const direction = useRef(1)
   const widthRef = useRef(0)

   useAnimationFrame(() => {
      phiBase.current += direction.current * 0.0015

      if (phiBase.current > 5.5) direction.current = -1
      else if (phiBase.current < 3.25) direction.current = 1
   })

   useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const onResize = () => {
         if (canvas) {
            widthRef.current = canvas.offsetWidth
         }
      }

      onResize()
      window.addEventListener("resize", onResize)

      const globe = createGlobe(canvas, {
         devicePixelRatio: 2,
         width: widthRef.current * 2,
         height: widthRef.current * 2,
         phi: 0,
         theta: 0.2,
         dark: 1,
         diffuse: 3,
         mapSamples: 36000,
         mapBrightness: 2.5,
         baseColor: [0.5, 0.5, 0.5],
         markerColor: [1.5, 100 / 255, 100 / 255],
         glowColor: [0.5, 0.5, 0.5],
         markers: [
            { location: [39.983334, -82.983330], size: 0.1 }, // Copenhagen
         ],
         scale: 1,
         onRender: (state) => {
            state.phi = phiBase.current + r.get()
            state.width = widthRef.current * 2
            state.height = widthRef.current * 2
         },
      })

      return () => {
         globe.destroy()
         window.removeEventListener("resize", onResize)
      }
   }, [r])

   return (
      <motion.div
         variants={defaultVariantsNoDelay}
         className="card-border relative col-span-4 col-start-1 row-span-2 row-start-1 flex flex-col gap-6 overflow-hidden rounded-xl p-4 bg-neutral-900 md:col-span-2 md:col-start-1 md:row-span-4 md:row-start-1 md:h-40"
      >
         <div className="z-10 flex items-center justify-between gap-2">
            <h2 className="text-xs sm:text-sm font-medium sm:font-light">Columbus, OH</h2>
            <Image
              src={osu}
              alt="OSU logo"
              width={24}
              height={24}
              className="h-6 w-6 mix-blend-screen"
            />
         </div>
         <div className="absolute inset-x-0 bottom-[-75%] mx-auto aspect-square h-[150%] translate-x-[-12.5%] [@media(max-width:390px)]:h-[320px]">
            <div className="flex h-full w-full items-center justify-center overflow-visible">
               <div
                  style={{
                     width: "100%",
                     aspectRatio: "1/1",
                     WebkitMaskImage: fadeMask,
                     maskImage: fadeMask,
                  }}
               >
                  <canvas
                     ref={canvasRef}
                     onPointerDown={(e) => {
                        pointerInteracting.current =
                          e.clientX - pointerInteractionMovement.current
                        canvasRef.current!.style.cursor = "grabbing"
                        canvasRef.current!.setPointerCapture(e.pointerId)
                      }}
                      onPointerMove={(e) => {
                        if (pointerInteracting.current !== null) {
                          const delta = e.clientX - pointerInteracting.current
                          pointerInteractionMovement.current = delta
                          const scale = e.pointerType === "touch" ? 300 : 200
                          r.set(delta / scale)
                        }
                      }}
                      onPointerUp={(e) => {
                        pointerInteracting.current = null
                        canvasRef.current!.style.cursor = "grab"
                        canvasRef.current!.releasePointerCapture(e.pointerId)
                      }}
                      onPointerCancel={() => {
                        pointerInteracting.current = null
                        canvasRef.current!.style.cursor = "grab"
                      }}
                     style={{
                        width: "100%",
                        height: "100%",
                        contain: "layout paint size",
                        cursor: "auto",
                        userSelect: "none",
                        touchAction: "none"
                     }}
                  />
               </div>
            </div>
         </div>
      </motion.div>
   )
}
