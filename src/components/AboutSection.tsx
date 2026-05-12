import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

const achievements = [
  'Mais de 200 propriedades vendidas com sucesso',
  '20+ anos de experiência no mercado português',
  'Especialista nos Açores, com profundo conhecimento da região',
  'Consultor certificado Century 21 — CENTURION Producer',
  'Avaliações 5 estrelas de mais de 150 clientes',
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

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
      <section
        id="sobre"
        ref={sectionRef}
        className="py-28 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              className="reveal relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Main photo */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://brumjtydtlxhooqrrsch.supabase.co/storage/v1/object/public/avatars/profile-photo_1d70f6bb-b9cb-4614-9bfb-120f1604ec34.jpg"
                    alt="Luís Viveiros - Consultor Imobiliário Century 21"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3"
                    style={{
                      background:
                        'linear-gradient(to top, oklch(0.1 0 0), transparent)',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-white font-bold text-xl">Luís Viveiros</p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'oklch(0.85 0.1 85)' }}
                    >
                      Consultor Imobiliário · Century 21 Azor
                    </p>
                  </motion.div>
                </motion.div>

                {/* Floating card */}
                <motion.div
                  className="absolute -right-4 top-12 glass-card rounded-2xl p-5 shadow-xl hidden lg:block"
                  style={{
                    background: 'white',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                    border: '1px solid oklch(0.92 0.02 85)',
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                      style={{
                        background:
                          'linear-gradient(135deg, oklch(0.95 0.04 85), oklch(0.88 0.08 82))',
                        color: 'oklch(0.55 0.1 75)',
                      }}
                    >
                      C
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">CENTURION</p>
                      <p className="text-xs text-muted-foreground">Top Producer</p>
                    </div>
                  </div>
                  <div
                    className="h-1 rounded-full"
                    style={{
                      background:
                        'linear-gradient(to right, oklch(0.85 0.1 85), oklch(0.7 0.13 80))',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content side */}
            <div className="reveal space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
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
                  <span className="font-semibold text-foreground">Top Producer</span> e <span className="font-semibold text-foreground">Consultor Imobiliário "Centurião"</span>,
                  o mais alto reconhecimento da marca Century21. Integrado na
                  Century 21 Azor, tenho acesso a ferramentas exclusivas, uma vasta
                  rede de contactos e o suporte de uma marca de confiança
                  internacional.
                </p>
              </motion.div>

              {/* Achievements Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                viewport={{ once: true }}
              >
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 mt-0.5"
                      style={{ color: 'oklch(0.75 0.12 85)' }}
                    />
                    <span className="text-foreground/80 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Awards & Training */}
              <motion.div
                className="grid grid-cols-2 gap-6 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 text-gold">
                    Prémios & Distinções
                  </h4>
                  {awards.map((item, i) => (
                    <motion.p
                      key={i}
                      className="text-xs text-muted-foreground mb-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-semibold text-foreground">{item.year}</span> ·{' '}
                      {item.award}
                    </motion.p>
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 text-gold">
                    Formação
                  </h4>
                  {training.map((item, i) => (
                    <motion.p
                      key={i}
                      className="text-xs text-muted-foreground mb-2"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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
                <MagneticButton
                  href="tel:911726049"
                  variant="dark"
                >
                  <Phone className="size-4" />
                  911 726 049
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}
