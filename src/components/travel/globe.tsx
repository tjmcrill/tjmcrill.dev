"use client"

import React, { useRef, useEffect } from "react"
import createGlobe from "cobe"
import { useMotionValue, useAnimationFrame } from "framer-motion"

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

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
        { location: [39.983334, -82.983330], size: 0.05, }, //columbus
        { location: [41.499321, -81.694359], size: 0.05, }, //cle
        { location: [25.761681, -80.191788], size: 0.05, }, //miami
        { location: [34.052235, -118.243683], size: 0.05, }, //la
        { location: [41.878113, -87.629799], size: 0.05, }, //chicago
        { location: [36.169941, -115.139832], size: 0.05, }, //vegas
        { location: [29.951065, -90.071533], size: 0.05, }, //nola
        { location: [40.712776, -74.005974], size: 0.05, }, //ny
        { location: [34.889359, -82.975616], size: 0.05, }, //cliffs
        { location: [32.776665, -96.796989], size: 0.05, }, //dallas
        { location: [31.629473, -7.981084], size: 0.05, }, //marrakesh
        { location: [31.629473, -7.981084], size: 0.05, }, //marrakesh
        { location: [31.099461, -4.018170], size: 0.05, }, //merzouga
        { location: [35.7703901, -5.803610], size: 0.05, }, //tangier
        { location: [34.059769, -4.965310], size: 0.05, }, //fez
        { location: [53.412910, -8.243890], size: 0.05, }, //ireland
        { location: [55.378052, -3.435973], size: 0.05, }, //UK
        { location: [64.963051, -19.020836], size: 0.05, }, //iceland
        { location: [43.653225, -79.383186], size: 0.05, }, //toronto
        { location: [14.011590, -60.988232], size: 0.05, }, //st lucia
        { location: [36.204823, 138.252930], size: 0.05, }, //japan
        { location: [22.396427, 114.109497], size: 0.05, }, //HK
        { location: [12.879721, 121.774017], size: 0.05, }, //Philippines
        { location: [34.555347, 69.207489], size: 0.05, }, //Kabul
        { location: [36.703770, 67.110062], size: 0.05, }, //Mazar
        { location: [40.463669, -3.749220], size: 0.05, }, //spain
        { location: [38.722252, -9.139337], size: 0.05, }, //lisbon
        { location: [50.110924, 8.682127], size: 0.05, }, //frankfurt
        { location: [36.140751, -5.353585], size: 0.05, }, //gibraltar
        { location: [25.204849, 55.270782], size: 0.05, }, //dubai
        { location: [19.896767, -155.582779], size: 0.05, }, //hawaii
        { location: [9.9312, 76.2673], size: 0.05, }, //kochi
        { location: [17.385, 78.4867], size: 0.05, }, //hyderabad
        { location: [50.0619474, 19.9368564], size: 0.05, }, //krakow,
        { location: [51.1089776, 17.0326689], size: 0.05, }, //wroclaw,
        { location: [50.0874654, 14.4212535], size: 0.05, }, //prague,
        { location: [49.2969114, 19.9504753], size: 0.05, }, //zakopane,
      ],
      scale: 1.25,
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

  const fadeMask =
    "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)"

  return (
    <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
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
  )
}
