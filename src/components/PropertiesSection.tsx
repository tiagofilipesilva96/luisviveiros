import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { MapPin, Bed, Bath, Square, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'
import { featuredProperties, type Property } from '@/data/properties'

const ease = { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const }

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      role="link"
      tabIndex={0}
      onClick={() => window.open(property.url, '_blank', 'noopener,noreferrer')}
      onKeyDown={(e) => { if (e.key === 'Enter') window.open(property.url, '_blank', 'noopener,noreferrer') }}
      className="rounded-3xl overflow-hidden bg-white border cursor-pointer transition-shadow duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]"
      style={{ borderColor: 'oklch(0.92 0 0)' }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...ease, delay: index * 0.09 }}
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.99 }}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)' }}
        />
        {property.badge && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
              style={{ background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))', color: 'oklch(0.1 0 0)' }}
            >
              {property.badge}
            </span>
          </div>
        )}
        {property.tag && (
          <div className="absolute top-4 right-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {property.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-3 gap-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-base leading-snug mb-1 line-clamp-2">{property.title}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="size-3.5 shrink-0" style={{ color: 'oklch(0.75 0.12 85)' }} />
              <span className="truncate">{property.location}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-base sm:text-lg font-bold whitespace-nowrap" style={{ color: 'oklch(0.35 0.06 75)' }}>
              {property.price}
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-4 border-t" style={{ borderColor: 'oklch(0.95 0 0)' }}>
          {property.beds  !== undefined && <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Bed    className="size-3.5" /><span>{property.beds} quartos</span></div>}
          {property.baths !== undefined && <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Bath   className="size-3.5" /><span>{property.baths} WC</span></div>}
          {property.area  !== undefined && <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Square className="size-3.5" /><span>{property.area} m²</span></div>}
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href="https://wa.me/351911726049"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-press flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-black"
            style={{ background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))' }}
          >
            <MessageCircle className="size-3.5" />WhatsApp
          </a>
          <a
            href="tel:911726049"
            onClick={(e) => e.stopPropagation()}
            className="btn-press flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-foreground border"
            style={{ borderColor: 'oklch(0.85 0.08 85)' }}
          >
            <Phone className="size-3.5" />Ligar
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function PropertiesSection() {
  return (
    <section id="imoveis" className="relative py-20 md:py-24 -mt-8 md:-mt-12 overflow-hidden cv-auto" style={{ background: 'oklch(0.98 0.005 85)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={ease}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
              style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}>
              Portfólio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Imóveis em <span className="gold-gradient">Destaque</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-lg">
              Propriedades seleccionadas para quem valoriza o melhor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ...ease, delay: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
            className="shrink-0"
          >
            <Link to="/imoveis" className="block">
              <MagneticButton variant="dark">
                Ver todos os imóveis <ArrowRight className="size-4" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
