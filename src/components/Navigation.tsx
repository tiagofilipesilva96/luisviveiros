import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Contacto", href: "#contacto" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      // Turn opaque when the Sobre Mim section (first white block after hero) touches the nav
      const sobre = document.querySelector("#sobre")
      if (sobre) {
        const top = sobre.getBoundingClientRect().top
        setScrolled(top <= 72)
      } else {
        setScrolled(window.scrollY > 80)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setActiveSection(href.replace("#", ""))
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center gap-3 group"
        >
          <div className="flex flex-col">
            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-300",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              LUÍS VIVEIROS
            </span>
            <span
              className={cn(
                "text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300",
                scrolled ? "text-gold" : "text-yellow-300/90"
              )}
              style={{ color: scrolled ? "oklch(0.75 0.12 85)" : undefined }}
            >
              Century 21 · Consultor
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                scrolled
                  ? "text-foreground/70 hover:text-foreground hover:bg-accent"
                  : "text-white/80 hover:text-white hover:bg-white/10",
                activeSection === link.href.replace("#", "") &&
                  (scrolled ? "text-foreground bg-accent" : "text-white bg-white/10")
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:911726049"
            className="btn-press flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black transition-all duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
              boxShadow: "0 4px 15px rgba(180, 140, 60, 0.35)",
            }}
          >
            <Phone className="size-4" />
            911 726 049
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass-nav mx-4 mt-2 rounded-2xl p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl text-foreground hover:bg-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="tel:911726049"
              className="btn-press w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black"
              style={{
                background: "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
              }}
            >
              <Phone className="size-4" />
              Ligar: 911 726 049
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
