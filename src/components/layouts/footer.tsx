import { Github } from "lucide-react"

export function Footer() {
   return (
      <footer className="flex items-center justify-between py-4">
         <p className="text-sm font-light text-neutral-400">
            © {2025}
         </p>
         <a
            href="https://github.com/tjmcrill"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:opacity-75 text-neutral-50"
         >
            <Github size={14} /> tjmcrill.dev
         </a>
      </footer>
   )
}