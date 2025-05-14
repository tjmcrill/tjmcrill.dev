import { Footer } from "@/components/layouts/footer"
import { Header } from "@/components/layouts/header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"

const sora = Sora({ subsets: ["latin"] })

const metainfo = {
   name: "Tyler McRill",
   description: "Front-End Engineer from the United States 🇺🇸",
   url: "https://tjmcrill.dev",
   image: "/meta/meta.png",
}

export const metadata: Metadata = {
   metadataBase: new URL(metainfo.url),
   title: metainfo.name,
   description: metainfo.description,
   authors: {
      name: metainfo.name,
      url: metainfo.url,
   },
   creator: metainfo.name,
   openGraph: {
      type: "website",
      url: metainfo.url,
      title: metainfo.name,
      description: metainfo.description,
      images: metainfo.image,
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className="dark" suppressHydrationWarning>
         <body className={cn(sora.className)}>
            <ThemeProvider>
               <div className="mx-auto w-full max-w-2xl px-6 flex min-h-screen flex-col">
                  <Header />
                  <main className="flex flex-1 flex-col pb-20 pt-28">
                     {children}
                  </main>
                  <Footer />
               </div>
            </ThemeProvider>
            <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/noise.png)] opacity-[0.17]" />
            <SpeedInsights />
         </body>
      </html>
   )
}