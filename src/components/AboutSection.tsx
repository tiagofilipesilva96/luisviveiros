import { motion } from 'framer-motion'
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

const ease = { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const }

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 bg-white overflow-hidden cv-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — subtle fade + gentle rise */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...ease }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
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
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ...ease, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white font-bold text-xl">Luís Viveiros</p>
                  <p className="text-sm font-medium" style={{ color: 'oklch(0.85 0.1 85)' }}>
                    Consultor Imobiliário · Century 21
                  </p>
                </motion.div>
              </div>

              {/* CENTURION badge */}
              <motion.div
                className="absolute -right-4 top-12 rounded-2xl p-5 shadow-xl hidden lg:block"
                style={{ background: 'white', boxShadow: '0 16px 48px rgba(0,0,0,0.10)', border: '1px solid oklch(0.92 0.02 85)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{ background: 'linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))', color: 'oklch(0.55 0.1 75)' }}
                  >C</div>
                  <div>
                    <p className="text-sm font-bold text-foreground">CENTURION</p>
                    <p className="text-xs text-muted-foreground">Top Producer</p>
                  </div>
                </div>
                <div className="h-px rounded-full" style={{ background: 'linear-gradient(to right, oklch(0.85 0.1 85), oklch(0.7 0.13 80))' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content — delayed fade */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: 0.12 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div>
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

              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Top Producer</span> e{' '}
                <span className="font-semibold text-foreground">Consultor Imobiliário "Centurião"</span>,
                o mais alto reconhecimento da marca Century21.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 + i * 0.08 }}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <CheckCircle2 className="size-5 shrink-0 mt-0.5" style={{ color: 'oklch(0.75 0.12 85)' }} />
                  <span className="text-foreground/80 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* Awards & Training */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.22 }}
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.28 }}
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
