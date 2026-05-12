import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  variant?: 'gold' | 'dark' | 'glass'
}

export function MagneticButton({
  href,
  target,
  rel,
  onClick,
  children,
  className = '',
  variant = 'gold',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX * distX + distY * distY)

    // Magnetic effect radius: 100px
    if (distance < 100) {
      const magnetStrength = 0.4
      setPosition({
        x: (e.clientX - centerX) * magnetStrength,
        y: (e.clientY - centerY) * magnetStrength,
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const variantStyles = {
    gold: 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black shadow-lg',
    dark: 'bg-gradient-to-br from-gray-900 to-black text-white shadow-lg',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white',
  }

  const Component = href ? motion.a : motion.button

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
        style={{
          background:
            variant === 'gold'
              ? 'radial-gradient(circle, oklch(0.85 0.1 85), transparent)'
              : 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)',
        }}
      />

      {/* Button */}
      <Component
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`btn-press relative flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 ${variantStyles[variant]} ${className}`}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 30,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow:
            variant === 'gold'
              ? '0 20px 40px rgba(180, 140, 60, 0.4)'
              : '0 20px 40px rgba(0, 0, 0, 0.3)',
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['200% 200%', '0% 0%'],
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  )
}
