import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { MapPin, Bed, Bath, Square, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'
import { featuredProperties, type Property } from '@/data/properties'

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      role="link"
      tabIndex={0}
      onClick={() => window.open(property.url, '_blank', 'noopener,noreferrer')}
      onKeyDown={(e) => { if (e.key === 'Enter') window.open(property.url, '_blank', 'noopener,noreferrer') }}
      className="reveal property-card rounded-3xl overflow-hidden bg-white border cursor-pointer block"
      style={{ borderColor: 'oklch(0.92 0 0)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0.4 }}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
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
              style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              {property.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
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
          {property.beds !== undefined && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Bed className="size-3.5" /><span>{property.beds} quartos</span>
            </div>
          )}
          {property.baths !== undefined && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Bath className="size-3.5" /><span>{property.baths} WC</span>
            </div>
          )}
          {property.area !== undefined && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Square className="size-3.5" /><span>{property.area} m²</span>
            </div>
          )}
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
    <section id="imoveis" className="py-20 md:py-24 -mt-8 md:-mt-12" style={{ background: 'oklch(0.98 0.005 85)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <motion.div
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
              style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}>
              Portfólio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Imóveis em <span className="gold-gradient">Destaque</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-lg">
              Seleção real do meu portfólio nos Açores, atualizada a partir do site oficial Century 21.
            </p>
          </motion.div>

          <motion.div
            className="reveal shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/imoveis" className="block">
              <MagneticButton variant="dark">
                Ver todos os imóveis
                <ArrowRight className="size-4" />
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
