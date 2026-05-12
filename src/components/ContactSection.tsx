import { useEffect, useRef } from "react"
import { Phone, MessageCircle, Mail } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{
              background: "oklch(0.98 0.02 85)",
              borderColor: "oklch(0.85 0.08 85)",
              color: "oklch(0.55 0.1 75)",
            }}
          >
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Fale comigo <span className="gold-gradient">hoje mesmo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Estou disponivel para o ajudar. Escolha a forma de contacto mais conveniente para si.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal max-w-4xl mx-auto" style={{ transitionDelay: "0.2s" }}>
          
           <a href="https://wa.me/351911726049"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, oklch(0.1 0 0), oklch(0.16 0.02 70))",
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))" }}
            >
              <MessageCircle className="size-6 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-white/50 text-sm mb-3">Resposta imediata</p>
            <span className="text-sm font-semibold" style={{ color: "oklch(0.85 0.1 85)" }}>
              +351 911 726 049
            </span>
          </a>

          
          <a href="https://wa.me/351911726049"
            className="btn-press group flex flex-col items-center text-center p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: "oklch(0.92 0 0)", background: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.82 0.09 85)"
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.92 0 0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))" }}
            >
              <Phone className="size-6" style={{ color: "oklch(0.55 0.1 75)" }} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Chamada</h3>
            <p className="text-muted-foreground text-sm mb-3">Disponivel 9h-20h</p>
            <span className="text-sm font-semibold" style={{ color: "oklch(0.55 0.1 75)" }}>
              911 726 049
            </span>
          </a>

          
          <a href="mailto:luis.viveiros@century21.pt"
            className="btn-press group flex flex-col items-center text-center p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1"
            style={{ borderColor: "oklch(0.92 0 0)", background: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.82 0.09 85)"
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.92 0 0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))" }}
            >
              <Mail className="size-6" style={{ color: "oklch(0.55 0.1 75)" }} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-3">Resposta em 24h</p>
            <span className="text-sm font-semibold" style={{ color: "oklch(0.55 0.1 75)" }}>
              century21.pt
            </span>
          </a>
        </div>

        <div
          className="mt-16 reveal rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "oklch(0.98 0.005 85)",
            border: "1px solid oklch(0.92 0.02 85)",
          }}
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Consulta gratuita e sem compromisso
            </h3>
            <p className="text-muted-foreground">
              Fale comigo hoje e descubra como posso ajuda-lo a encontrar o imovel perfeito.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            
            <a href="https://wa.me/351911726049"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-black whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, oklch(0.88 0.09 85), oklch(0.72 0.13 80))",
                boxShadow: "0 6px 20px rgba(180, 140, 60, 0.3)",
              }}
            >
              <MessageCircle className="size-4" />
              Agendar Consulta
            </a>
            
            <a href="tel:911726049"
              className="btn-press flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-foreground border transition-colors hover:bg-background whitespace-nowrap"
              style={{ borderColor: "oklch(0.85 0.08 85)" }}
            >
              <Phone className="size-4" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
