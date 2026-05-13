import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

const achievements = [
  '20+ anos de experiência no mercado português',
  'Especialista nos Açores, com profundo conhecimento da região',
  'Consultor certificado Century 21 — CENTURION Producer',
  'Parceiro de referência em investimento imobiliário',
]

const awards = [
  { year: '2025', award: 'CENTURION Producer' },
  { year: '2024', award: 'Centurion Producer' },
  { year: '2023', award: 'Master Diamond Producer' },
]

const training = [
  'CREATE 21 - Golden Edition',
  'Prevenção de Branqueamento de Capitais',
  'Negociação Imobiliária Avançada',
]

const spring = { type: 'spring' as const, stiffness: 60, damping: 13 }

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-28 bg-white overflow-hidden cv-auto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side — sweeps in from far left with parallax depth */}
          <motion.div
            initial={{ opacity: 0, x: -120, rotateY: 18, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.05 }}
            viewport={{ once: true, margin: '-80px' }}
            style={{ y: imageY, perspective: 1000 }}
          >
            <div className="relative">
              <motion.div
                className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src="https://brumjtydtlxhooqrrsch.supabase.co/storage/v1/object/public/avatars/profile-photo_1d70f6bb-b9cb-4614-9bfb-120f1604ec34.jpg"
                  alt="Luís Viveiros - Consultor Imobiliário Century 21"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width="448"
                  height="560"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, oklch(0.1 0 0), transparent)' }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white font-bold text-xl">Luís Viveiros</p>
                  <p className="text-sm font-medium" style={{ color: 'oklch(0.85 0.1 85)' }}>
                    Consultor Imobiliário · Century 21
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-12 glass-card rounded-2xl p-5 shadow-xl hidden lg:block"
                style={{ background: 'white', boxShadow: '0 20px 50px rgba(0,0,0,0.12)', border: '1px solid oklch(0.92 0.02 85)' }}
                initial={{ opacity: 0, scale: 0.7, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ ...spring, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ background: 'linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))', color: 'oklch(0.55 0.1 75)' }}
                  >
                    C
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">CENTURION</p>
                    <p className="text-xs text-muted-foreground">Top Producer</p>
                  </div>
                </div>
                <div className="h-1 rounded-full" style={{ background: 'linear-gradient(to right, oklch(0.85 0.1 85), oklch(0.7 0.13 80))' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content side — sweeps in from right */}
          <motion.div
            style={{ y: textY }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
                style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}
              >
                Sobre Mim
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Licenciado em Gestão de{' '}
                <span className="gold-gradient">Empresas</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Com mais de 20 anos de experiência no ramo imobiliário, na
                gestão de negócios e relações humanas, dedico-me inteiramente a
                cada cliente, tratando cada transação como se fosse a minha
                própria casa.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                <span className="font-semibold text-foreground">Top Producer</span> e{' '}
                <span className="font-semibold text-foreground">Consultor Imobiliário "Centurião"</span>,
                o mais alto reconhecimento da marca Century21.
              </p>
            </motion.div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.12 + i * 0.09 }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <CheckCircle2 className="size-5 shrink-0 mt-0.5" style={{ color: 'oklch(0.75 0.12 85)' }} />
                  <span className="text-foreground/80 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* Awards & Training */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 text-gold">Prémios & Distinções</h4>
                {awards.map((item, i) => (
                  <p key={i} className="text-xs text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">{item.year}</span> · {item.award}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 text-gold">Formação</h4>
                {training.map((item, i) => (
                  <p key={i} className="text-xs text-muted-foreground mb-2">{item}</p>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MagneticButton
                href="https://wa.me/351911726049?text=Olá%20Luís%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
              >
                <MessageCircle className="size-4" />
                Falar no WhatsApp
              </MagneticButton>
              <MagneticButton href="tel:911726049" variant="dark">
                <Phone className="size-4" />
                911 726 049
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
