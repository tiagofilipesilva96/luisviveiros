import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ana Sofia Ferreira",
    role: "Compradora · Açores",
    avatar: "AS",
    rating: 5,
    text: "O Luís foi absolutamente excecional em todo o processo de compra do nosso apartamento nos Açores. A sua disponibilidade, conhecimento da região e paciência são únicos. Recomendo a 100%.",
    property: "Apartamento T3 · Ponta Delgada",
  },
  {
    name: "Pedro & Marta Rodrigues",
    role: "Compradores · Açores",
    avatar: "PM",
    rating: 5,
    text: "Procurámos durante 6 meses sem encontrar nada. Em 3 semanas com o Luís encontrámos a nossa casa de sonho nos Açores. A sua rede de contactos e expertise são verdadeiramente impressionantes.",
    property: "Moradia T4 · Furnas",
  },
  {
    name: "Carlos Mendonça",
    role: "Investidor Imobiliário · Açores",
    avatar: "CM",
    rating: 5,
    text: "Já realizei 4 transações com o Luís nos últimos 5 anos nos Açores. É o meu consultor de confiança. Análise de mercado rigorosa, negociação habilidosa e profissionalismo de alto nível.",
    property: "Portfólio de 4 imóveis",
  },
  {
    name: "Isabel Costeira",
    role: "Vendedora · Açores",
    avatar: "IC",
    rating: 5,
    text: "Vendi o meu apartamento 15% acima do preço de mercado graças à estratégia do Luís nos Açores. A sua capacidade de apresentar e valorizar o imóvel é extraordinária. Muito grata!",
    property: "Apartamento T2 · Horta",
  },
  {
    name: "João & Filipa Santos",
    role: "Compradores · Açores",
    avatar: "JF",
    rating: 5,
    text: "O Luís transformou o que parecia impossível em realidade. Encontrou a nossa villa ideal nos Açores dentro do nosso orçamento. Serviço personalizado e genuíno nos Açores.",
    property: "Villa T3 · Ribeirinha",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

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

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setActive(index)
    setTimeout(() => setAnimating(false), 400)
  }

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((active + 1) % testimonials.length)

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [active])

  return (
    <section
      id="testemunhos"
      ref={sectionRef}
      className="py-28 overflow-hidden"
      style={{ background: "oklch(0.08 0 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{
              background: "rgba(180, 140, 60, 0.1)",
              borderColor: "rgba(180, 140, 60, 0.3)",
              color: "oklch(0.85 0.1 85)",
            }}
          >
            Testemunhos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            O que dizem{" "}
            <span className="gold-gradient">os meus clientes</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Mais de 200 famílias e investidores que confiaram em mim para
            encontrar o imóvel perfeito.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="reveal">
          {/* Main testimonial */}
          <div
            className="relative max-w-4xl mx-auto rounded-3xl p-10 md:p-14 mb-8 transition-all duration-400"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(180,140,60,0.15)",
              backdropFilter: "blur(10px)",
              opacity: animating ? 0.6 : 1,
              transform: animating ? "scale(0.99)" : "scale(1)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {/* Quote icon */}
            <Quote
              className="absolute top-8 right-10 opacity-10 size-20"
              style={{ color: "oklch(0.85 0.1 85)" }}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-current"
                  style={{ color: "oklch(0.85 0.1 85)" }}
                />
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-xl md:text-2xl text-white/85 leading-relaxed font-light mb-8 italic">
              "{testimonials[active].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
                  color: "oklch(0.12 0 0)",
                }}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <p className="text-white font-semibold">{testimonials[active].name}</p>
                <p className="text-white/75 text-sm">{testimonials[active].role}</p>
              </div>
              <div className="ml-auto">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(180,140,60,0.1)",
                    border: "1px solid rgba(180,140,60,0.2)",
                    color: "oklch(0.82 0.09 85)",
                  }}
                >
                  {testimonials[active].property}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(180,140,60,0.2)"
                e.currentTarget.style.borderColor = "rgba(180,140,60,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
              }}
            >
              <ChevronLeft className="size-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === active
                        ? "linear-gradient(to right, oklch(0.85 0.1 85), oklch(0.7 0.13 80))"
                        : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="btn-press w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(180,140,60,0.2)"
                e.currentTarget.style.borderColor = "rgba(180,140,60,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
              }}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Mini cards */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "p-4 rounded-2xl text-left transition-all duration-300",
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
                style={{
                  background: i === active ? "rgba(180,140,60,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === active ? "rgba(180,140,60,0.3)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
                    color: "oklch(0.12 0 0)",
                  }}
                >
                  {t.avatar}
                </div>
                <p className="text-white text-xs font-medium truncate">{t.name.split(" ")[0]}</p>
                <p className="text-white/75 text-xs truncate">{t.role.split("·")[0].trim()}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
