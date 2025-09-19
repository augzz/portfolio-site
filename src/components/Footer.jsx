import { ArrowUp, Ghost } from "lucide-react"


export const Footer = () => {
  return (
    <footer className="py-4 px-2 bg-card relative border-t border-border mt-8 pt-4 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">Made by augz.<Ghost size={20}/>
      </p>

      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bgg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>
      </a>
    </footer>
  )
}