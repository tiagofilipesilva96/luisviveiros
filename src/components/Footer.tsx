import { Phone, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t"
      style={{
        background: "oklch(0.07 0 0)",
        borderColor: "rgba(180,140,60,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="text-xl font-bold text-white">LUÍS VIVEIROS</p>
              <p
                className="text-sm tracking-[0.2em] uppercase mt-0.5"
                style={{ color: "oklch(0.75 0.12 85)" }}
              >
                Consultor Imobiliário
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Especialista no mercado imobiliário português com mais de 15 anos
              de experiência. Integrado na Century 21, a maior rede imobiliária
              do mundo.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "IG", href: "#" },
                { label: "FB", href: "#" },
                { label: "IN", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(180,140,60,0.15)"
                    e.currentTarget.style.borderColor = "rgba(180,140,60,0.3)"
                    e.currentTarget.style.color = "oklch(0.85 0.1 85)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                  }}
                >
                  <span className="text-xs font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.75 0.12 85)" }}
            >
              Navegação
            </p>
            <div className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Mim", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Imóveis", href: "#imoveis" },
                { label: "Testemunhos", href: "#testemunhos" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.querySelector(link.href)
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.75 0.12 85)" }}
            >
              Contacto
            </p>
            <div className="space-y-4">
              <a
                href="tel:911726049"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(180,140,60,0.1)" }}
                >
                  <Phone className="size-3.5" style={{ color: "oklch(0.75 0.12 85)" }} />
                </div>
                911 726 049
              </a>
              <a
                href="https://wa.me/351911726049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(180,140,60,0.1)" }}
                >
                  <MessageCircle className="size-3.5" style={{ color: "oklch(0.75 0.12 85)" }} />
                </div>
                WhatsApp
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(180,140,60,0.1)" }}
                >
                  <MapPin className="size-3.5" style={{ color: "oklch(0.75 0.12 85)" }} />
                </div>
                Açores, Portugal
              </div>
            </div>

            {/* Century 21 badge */}
            <div
              className="mt-6 px-4 py-3 rounded-2xl"
              style={{
                background: "rgba(180,140,60,0.08)",
                border: "1px solid rgba(180,140,60,0.15)",
              }}
            >
              <p className="text-xs text-white/40">Membro Oficial</p>
              <p
                className="text-sm font-bold"
                style={{ color: "oklch(0.85 0.1 85)" }}
              >
                Century 21 Portugal
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/30 text-xs">
            © {currentYear} Luís Viveiros · Consultor Imobiliário · Century 21.
            Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Mediação Imobiliária Autorizada · AMI n.º XXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
