"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   return (
      <NextThemesProvider
         attribute="class"
         forcedTheme="dark" // 👈 forces dark mode always
         disableTransitionOnChange
      >
         {children}
      </NextThemesProvider>
   )
}