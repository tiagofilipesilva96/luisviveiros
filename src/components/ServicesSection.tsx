import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  TrendingUp,
  FileText,
  Handshake,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

const services = [
  {
    icon: Search,
    title: 'Pesquisa Personalizada',
    description:
      'Identifico propriedades que correspondem exatamente ao seu perfil, necessidades e orçamento — poupando-lhe tempo e esforço.',
  },
  {
    icon: TrendingUp,
    title: 'Avaliação de Mercado',
    description:
      'Análise profunda do mercado imobiliário em tempo real para garantir que compra ou vende ao melhor preço justo.',
  },
  {
    icon: Handshake,
    title: 'Negociação Expert',
    description:
      'Mais de 20 anos de experiência em negociação imobiliária ao seu serviço para conquistar as melhores condições.',
  },
  {
    icon: FileText,
    title: 'Apoio Jurídico',
    description:
      'Acompanho todo o processo documental e legal, da proposta à escritura, com total transparência.',
  },
  {
    icon: MapPin,
    title: 'Conhecimento Local',
    description:
      'Especialista nos Açores com conhecimento profundo de cada ilha e oportunidades de investimento imobiliário.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança Certificada',
    description:
      'Consultor certificado pela Century 21 com histórico comprovado de excelência e satisfação dos clientes.',
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20 reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{
              background: 'oklch(0.98 0.02 85)',
              borderColor: 'oklch(0.85 0.08 85)',
              color: 'oklch(0.55 0.1 75)',
            }}
          >
            Os Meus Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Uma experiência{' '}
            <span className="gold-gradient">imobiliária</span>
            <br />
            verdadeiramente diferente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Do primeiro contacto à escritura, acompanho cada passo com
            dedicação, expertise e transparência total.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="reveal group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="h-full p-8 rounded-3xl border transition-all duration-300 cursor-default hover:border-opacity-60"
                style={{
                  borderColor: 'oklch(0.92 0.02 85)',
                  background: 'white',
                }}
                whileHover={{
                  boxShadow: '0 20px 50px rgba(0,0,0,0.06), 0 4px 16px rgba(180,140,60,0.12)',
                  borderColor: 'oklch(0.82 0.09 85)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.9 0.07 82))',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <service.icon
                    className="size-6"
                    style={{ color: 'oklch(0.55 0.1 75)' }}
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Gold accent line */}
                <motion.div
                  className="mt-6 w-10 h-0.5 rounded-full"
                  style={{
                    background:
                      'linear-gradient(to right, oklch(0.75 0.12 85), transparent)',
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            style={{
              background:
                'linear-gradient(135deg, oklch(0.12 0 0) 0%, oklch(0.18 0.02 70) 100%)',
            }}
          >
            {/* Gold decorative dots */}
            <motion.div
              className="absolute top-8 right-12 w-2 h-2 rounded-full opacity-40"
              style={{ background: 'oklch(0.85 0.1 85)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
              style={{
                background: 'rgba(180, 140, 60, 0.15)',
                borderColor: 'rgba(180, 140, 60, 0.3)',
                color: 'oklch(0.85 0.1 85)',
              }}
            >
              Consulta Gratuita
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para encontrar o imóvel perfeito?
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Agende uma consulta gratuita e sem compromisso. Estou disponível
              para si.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="https://wa.me/351911726049?text=Olá%20Luís%2C%20gostaria%20de%20agendar%20uma%20consulta%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
              >
                Agendar Consulta
              </MagneticButton>
              <MagneticButton
                href="tel:911726049"
                variant="glass"
              >
                911 726 049
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
