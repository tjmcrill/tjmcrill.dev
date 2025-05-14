// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { useEffect, useState } from "react"

// const MotionImage = motion.create(Image)

// const imagePaths = [
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_7059.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00235.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_6937.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00433_Original.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_6880.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00836_Original.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_6062.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00856_Original.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_5550.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00912_Original.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_5415.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/DSC00942_Original.png",
//   "https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/IMG_3792.png"
// ]

// export function ImagesCard() {
//   const [index, setIndex] = useState(0)
//   const [direction, setDirection] = useState(1)
//   const [isPaused, setIsPaused] = useState(false)

//   useEffect(() => {
//     if (isPaused) return

//     const interval = setInterval(() => {
//       setDirection(1)
//       setIndex((prev) => (prev + 1) % imagePaths.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isPaused])

//   const togglePause = () => {
//     setIsPaused((prev) => !prev)
//   }

//   return (
//     <div
//       onClick={togglePause}
//       className="card-border relative col-span-4 row-span-3 overflow-hidden rounded-xl md:col-span-2 md:row-span-5 md:col-start-6 cursor-pointer"
//       title={isPaused ? "Click to resume slideshow" : "Click to pause slideshow"}
//     >
//       <div className="relative h-full w-full">
//         <AnimatePresence custom={direction} mode="popLayout">
//           <MotionImage
//             key={imagePaths[index]}
//             src={imagePaths[index]}
//             alt={`Image ${index + 1}`}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             className="absolute object-cover grayscale-[0.35] filter rounded-xl"
//             custom={direction}
//             initial={{ x: direction * 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -direction * 100, opacity: 0 }}
//             transition={{ x: { duration: 1.2 }, opacity: { duration: 0.8 } }}
//             priority={index === 0}
//           />
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }
