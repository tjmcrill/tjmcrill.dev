import { FloatingNav } from "@/components/ui/navbar"
import { JSX } from "react"

export type NavItem = {
   name: string
   link: string
   icon?: JSX.Element
}

const navItems: NavItem[] = [
   { name: "Home", link: "/" },
   { name: "Travels", link: "/travels" },
]

export function Header() {
   return (
      <header className="flex">
         <FloatingNav navItems={navItems} />
      </header>
   )
}