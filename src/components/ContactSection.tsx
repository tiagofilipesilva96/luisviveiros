import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail } from "lucide-react"

const spring = { type: 'spring' as const, stiffness: 280, damping: 28, mass: 0.8 }
const ease   = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }

const cards = [
  {
    href: "https://wa.me/351911726049",
    target: "_blank",
    rel: "noopener noreferrer",
    dark: true,
    icon: <MessageCircle className="size-6 text-black" />,
    iconBg: "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
    title: "WhatsApp",
    sub: "Resposta imediata",
    value: "911 726 049",
    valueColor: "oklch(0.85 0.1 85)",
    from: { x: -64, opacity: 0 },
  },
  {
    href: "tel:911726049",
    dark: false,
    icon: <Phone className="size-6" style={{ color: "oklch(0.55 0.1 75)" }} />,
    iconBg: "linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))",
    title: "Chamada",
    sub: "Disponivel 9h-20h",
    value: "911 726 049",
    valueColor: "oklch(0.55 0.1 75)",
    from: { y: 64, opacity: 0, scale: 0.88 },
  },
  {
    href: "mailto:luis.viveiros@century21.pt",
    dark: false,
    icon: <Mail className="size-6" style={{ color: "oklch(0.55 0.1 75)" }} />,
    iconBg: "linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))",
    title: "Email",
    sub: "Resposta em 24h",
    value: "luis.viveiros@century21.pt",
    valueColor: "oklch(0.55 0.1 75)",
    from: { x: 64, opacity: 0 },
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-28 bg-white cv-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={ease}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{ background: "oklch(0.98 0.02 85)", borderColor: "oklch(0.85 0.08 85)", color: "oklch(0.55 0.1 75)" }}
          >
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Fale comigo <span className="gold-gradient">hoje mesmo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Estou disponivel para o ajudar. Escolha a forma de contacto mais conveniente para si.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target={card.target}
              rel={card.rel}
              initial={card.from}
              whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{ ...spring, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="btn-press group flex flex-col items-center text-center p-8 rounded-3xl transition-colors duration-200"
              style={card.dark ? {
                background: "linear-gradient(135deg, oklch(0.1 0 0), oklch(0.16 0.02 70))",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              } : {
                background: "white",
                border: "1px solid oklch(0.92 0 0)",
              }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: card.iconBg }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                {card.icon}
              </motion.div>
              <h3 className={`font-semibold mb-2 ${card.dark ? "text-white" : "text-foreground"}`}>{card.title}</h3>
              <p className={`text-sm mb-3 ${card.dark ? "text-white/50" : "text-muted-foreground"}`}>{card.sub}</p>
              <span className="text-sm font-semibold" style={{ color: card.valueColor }}>{card.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "oklch(0.98 0.005 85)", border: "1px solid oklch(0.92 0.02 85)" }}
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.28 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">Consulta gratuita e sem compromisso</h3>
            <p className="text-muted-foreground">Fale comigo hoje e descubra como posso ajuda-lo a encontrar o imovel perfeito.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/351911726049"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-black whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, oklch(0.88 0.09 85), oklch(0.72 0.13 80))", boxShadow: "0 6px 20px rgba(180,140,60,0.3)" }}
            >
              <MessageCircle className="size-4" />Agendar Consulta
            </a>
            <a
              href="tel:911726049"
              className="btn-press flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-foreground border whitespace-nowrap"
              style={{ borderColor: "oklch(0.85 0.08 85)" }}
            >
              <Phone className="size-4" />Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
