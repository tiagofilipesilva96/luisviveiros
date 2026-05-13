import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/MagneticButton'

export function ConsultaSection() {
  return (
    <section className="py-24 px-5 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="reveal"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-3xl overflow-hidden p-12 text-center"
            style={{
              background:
                'linear-gradient(135deg, oklch(0.12 0 0) 0%, oklch(0.18 0.02 70) 100%)',
            }}
          >
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
              <MagneticButton href="tel:911726049" variant="glass">
                911 726 049
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
