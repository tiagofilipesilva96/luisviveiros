import { motion } from 'framer-motion'
import {
  Search, TrendingUp, FileText, Handshake, MapPin, ShieldCheck,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Pesquisa Personalizada',
    description: 'Identifico propriedades que correspondem exatamente ao seu perfil, necessidades e orçamento — poupando-lhe tempo e esforço.',
  },
  {
    icon: TrendingUp,
    title: 'Avaliação de Mercado',
    description: 'Análise profunda do mercado imobiliário em tempo real para garantir que compra ou vende ao melhor preço justo.',
  },
  {
    icon: Handshake,
    title: 'Negociação Expert',
    description: 'Mais de 20 anos de experiência em negociação imobiliária ao seu serviço para conquistar as melhores condições.',
  },
  {
    icon: FileText,
    title: 'Apoio Jurídico',
    description: 'Acompanho todo o processo documental e legal, da proposta à escritura, com total transparência.',
  },
  {
    icon: MapPin,
    title: 'Conhecimento Local',
    description: 'Especialista nos Açores com conhecimento profundo de cada ilha e oportunidades de investimento imobiliário.',
  },
  {
    icon: ShieldCheck,
    title: 'Confiança Certificada',
    description: 'Consultor certificado pela Century 21 com histórico comprovado de excelência e satisfação dos clientes.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.09 },
  }),
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-28 bg-white cv-auto overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}
          >
            Os Meus Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Uma experiência <span className="gold-gradient">imobiliária</span>
            <br />verdadeiramente diferente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Do primeiro contacto à escritura, acompanho cada passo com dedicação, expertise e transparência total.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group p-6 rounded-2xl border transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
              style={{ borderColor: 'oklch(0.92 0.02 85)', background: 'white' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.9 0.07 82))' }}
              >
                <service.icon className="size-4" style={{ color: 'oklch(0.55 0.1 75)' }} />
              </div>

              <h3 className="text-sm font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>

              <div
                className="mt-5 h-px rounded-full transition-all duration-500 group-hover:w-full"
                style={{ background: 'linear-gradient(to right, oklch(0.75 0.12 85), transparent)', width: '2rem' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
