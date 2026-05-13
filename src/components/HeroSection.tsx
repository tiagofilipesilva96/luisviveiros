import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Star, Award, Users } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

const stats = [
  { icon: Star, value: '20+', label: 'Anos de Experiência' },
  { icon: Users, value: '98%', label: 'Clientes Satisfeitos' },
  { icon: Award, value: 'CENTURION', label: 'Top Producer' },
]

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number
    const handleScroll = () => {
      if (parallaxRef.current) {
        animationFrameId = requestAnimationFrame(() => {
          if (parallaxRef.current) {
            const scrollY = window.scrollY
            parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
          }
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-foreground"
    >
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img
          src="/luis-viveiros-hero.webp"
          alt="Luís Viveiros - Consultor Imobiliário"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
          style={{ minHeight: '110%' }}
        />
        {/* Sophisticated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background:
              'linear-gradient(105deg, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.65) 40%, rgba(5,5,5,0.4) 70%, rgba(5,5,5,0.3) 100%)',
          }}
        />
        {/* Gold accent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(180,140,60,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Gold decorative line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          background:
            'linear-gradient(to bottom, transparent, oklch(0.75 0.12 85), transparent)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border"
            style={{
              background: 'rgba(180, 140, 60, 0.15)',
              borderColor: 'rgba(180, 140, 60, 0.4)',
              color: 'oklch(0.85 0.1 85)',
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ background: 'oklch(0.85 0.1 85)' }}
            />
            Century 21 Azor · Açores · Portugal
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6"
          >
            O Imóvel{' '}
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span
                className="gold-gradient-animate"
                style={{ display: 'inline' }}
              >
                dos seus sonhos
              </span>
            </motion.span>
            começa aqui.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
          >
            Licenciado em Gestão de Empresas, com mais de 20 anos de experiência
            no mercado imobiliário. Top Producer e Consultor Imobiliário
            "Centurião" — o mais alto reconhecimento da marca Century21.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              href="https://wa.me/351911726049?text=Olá%20Luís%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços%20imobiliários."
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
            >
              <MessageCircle className="size-5" />
              WhatsApp Agora
            </MagneticButton>
            <MagneticButton
              href="tel:911726049"
              variant="glass"
            >
              <Phone className="size-5" />
              911 726 049
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Star
                    className="size-4 fill-current"
                    style={{ color: 'oklch(0.85 0.1 85)' }}
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              <span className="text-white font-semibold">4.9/5</span> · Mais de 150 avaliações
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div
          className="max-w-7xl mx-auto px-6"
          style={{ paddingBottom: '0' }}
        >
          <div
            className="grid grid-cols-3 rounded-t-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(180,140,60,0.2)',
              borderLeft: '1px solid rgba(180,140,60,0.2)',
              borderRight: '1px solid rgba(180,140,60,0.2)',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center py-6 px-4 border-r last:border-r-0"
                style={{ borderColor: 'rgba(180,140,60,0.15)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <stat.icon
                  className="size-5 mb-2"
                  style={{ color: 'oklch(0.85 0.1 85)' }}
                />
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/50 text-center mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase rotate-90 mb-2">
          Scroll
        </span>
        <ChevronDown className="size-5 text-white/40" />
      </motion.div>

      {/* Smooth fade to white next section */}
      <div className="hero-fade-bottom" aria-hidden="true" />
    </section>
  )
}
