import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ana Figueira",
    avatar: "AF",
    text: "Um muito obrigada ao Luís Viveiros pelo excelente trabalho no processo de venda da minha moradia em Ponta Delgada. A ética e o profissionalismo definem-no a 100%. Dou-lhe todas as estrelas ...",
  },
  {
    name: "Fátima Ramos",
    avatar: "FR",
    text: "Vendi e comprei casa na Century 21, recomendo sobretudo pelo profissionalismo, eficiência e trato, especialmente ao Luís Viveiros pela confiança que transmite, acompanhamento, sensibilidade ...",
  },
  {
    name: "Joachim Holl",
    avatar: "JH",
    text: "Estou muito feliz que o Luís Viveiros tenha me ajudado com tanto conhecimento na venda do meu imóvel. (Fotos, site, autoridades, cartório...) O Luís não só é altamente profissional, com...",
  },
  {
    name: "Marco Oliveira",
    avatar: "MO",
    text: "Luís Viveiros, parabéns pelo excelente profissionalismo, assim como, pela dedicação ao processo de venda, de 1 a 10 não hesito em atribuir o 10. Century21, descomplicada, mas atribuindo a...",
  },
  {
    name: "Laura Pinto",
    avatar: "LP",
    text: "Recomendo o excelente trabalho do Sr. Luís Viveiros, rápido, eficiente e eficaz a encontrar os melhores negócios e com um profissionalismo de excelência. Obrigada Sr. Luís e Century",
  },
  {
    name: "Sandy Ventura",
    avatar: "SV",
    text: "Quero deixar um agradecimento especial ao Luís Viveiros, excelente profissional que me ajudou e muito num processo de venda de imóvel complexo e burocrático. Ele tornou a venda possível e tudo fez para...",
  },
  {
    name: "José Alves",
    avatar: "JA",
    text: "A nossa experiência com esta agência imobiliária correu da melhor forma. Penso que se deve em muito ao trabalho árduo do senhor Luís Viveiros. Esteve sempre atento e a acompanhar...",
  },
  {
    name: "Micaela Pavão",
    avatar: "MP",
    text: "Um muito obrigado à Century21 Azor e em especial ao Luís Viveiros pela rapidez, eficiência e profissionalismo ao longo do processo da venda do nosso imóvel. Não poderíamos estar m...",
  },
  {
    name: "Bruno da Costa",
    avatar: "BC",
    text: "Parabéns Luís. Um grande profissional na sua área. Acompanhou com excelência, um processo rápido. Foi fulcral a tua ajuda! Nota máxima.",
  },
  {
    name: "Natalina Coelho",
    avatar: "NC",
    text: "Sr. Luís Viveiros com a sua positividade fez-me acreditar que venderia a minha casa e assim aconteceu. Ajudou-me a resolver todas as burocracias. É uma pessoa extraordinária e de...",
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
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Mais de 200 famílias e investidores que confiaram em mim para
            encontrar o imóvel perfeito.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="reveal">
          {/* Main testimonial */}
          <div
            className="relative max-w-4xl mx-auto rounded-3xl p-10 md:p-14 mb-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(180,140,60,0.15)",
              backdropFilter: "blur(10px)",
              opacity: animating ? 0.6 : 1,
              transform: animating ? "scale(0.99)" : "scale(1)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <Quote
              className="absolute top-8 right-10 opacity-10 size-20"
              style={{ color: "oklch(0.85 0.1 85)" }}
            />

            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-current"
                  style={{ color: "oklch(0.85 0.1 85)" }}
                />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-white/85 leading-relaxed font-light mb-8 italic">
              "{testimonials[active].text}"
            </blockquote>

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
                <p className="text-white/50 text-sm">Cliente · Century 21 Açores</p>
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
          <div className="mt-10 grid grid-cols-5 md:grid-cols-10 gap-2">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={cn(
                  "p-3 rounded-xl text-left transition-all duration-300",
                  i === active ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
                style={{
                  background: i === active ? "rgba(180,140,60,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === active ? "rgba(180,140,60,0.3)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))",
                    color: "oklch(0.12 0 0)",
                  }}
                >
                  {t.avatar}
                </div>
                <p className="text-white text-xs font-medium truncate text-center">{t.name.split(" ")[0]}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
