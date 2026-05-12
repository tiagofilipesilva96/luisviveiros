import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/MagneticButton'

const properties = [
  { id: 1, image: '/property-1.webp', badge: 'Destaque', badgeColor: 'gold', title: 'Apartamento Premium T4', location: 'Ponta Delgada, Açores', price: '€ 750.000', beds: 4, baths: 3, area: 195, tag: 'Novo' },
  { id: 2, image: '/property-2.webp', badge: 'Exclusivo', badgeColor: 'dark', title: 'Moradia com Piscina', location: 'Furnas, Açores', price: '€ 1.200.000', beds: 5, baths: 4, area: 380, tag: 'Luxo' },
  { id: 3, image: '/property-3.webp', badge: 'Vista Mar', badgeColor: 'gold', title: 'Penthouse Panorâmico T3', location: 'Angra do Heroísmo, Açores', price: '€ 950.000', beds: 3, baths: 2, area: 210, tag: 'Premium' },
  { id: 4, image: '/property-4.webp', badge: 'Investimento', badgeColor: 'dark', title: 'Quinta Histórica', location: 'Santa Maria, Açores', price: '€ 650.000', beds: 6, baths: 4, area: 520, tag: 'Rural' },
  { id: 5, image: '/property-5.webp', badge: 'Novo', badgeColor: 'gold', title: 'Apartamento Design T2', location: 'Horta, Açores', price: '€ 520.000', beds: 2, baths: 2, area: 110, tag: 'Design' },
  { id: 6, image: '/property-6.webp', badge: 'Exclusivo', badgeColor: 'dark', title: 'Villa Frente Mar', location: 'Ribeirinha, Açores', price: '€ 1.800.000', beds: 5, baths: 5, area: 460, tag: 'Açores' },
]

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="reveal property-card rounded-3xl overflow-hidden bg-white border cursor-pointer"
      style={{ borderColor: 'oklch(0.92 0 0)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          decoding="async"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0.4 }}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
        />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
            style={
              property.badgeColor === 'gold'
                ? { background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))', color: 'oklch(0.1 0 0)' }
                : { background: 'rgba(5,5,5,0.85)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }
            }
          >
            {property.badge}
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {property.tag}
          </span>
        </div>

        {/* Buttons on hover */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 flex gap-2"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: hovered ? 'auto' : 'none' } as any}
        >
          <a
            href="https://wa.me/351911726049"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-black"
            style={{ background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))' }}
          >
            <MessageCircle className="size-3.5" />
            WhatsApp
          </a>
          <a
            href="tel:911726049"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <Phone className="size-3.5" />
            Ligar
          </a>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-foreground text-base leading-snug mb-1">{property.title}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="size-3.5 shrink-0" style={{ color: 'oklch(0.75 0.12 85)' }} />
              {property.location}
            </div>
          </div>
          <div className="text-right shrink-0 ml-4">
            <p className="text-lg font-bold" style={{ color: 'oklch(0.35 0.06 75)' }}>
              {property.price}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'oklch(0.95 0 0)' }}>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Bed className="size-3.5" />
            <span>{property.beds} quartos</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Bath className="size-3.5" />
            <span>{property.baths} WC</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Square className="size-3.5" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PropertiesSection() {
  return (
    <section id="imoveis" className="py-28" style={{ background: 'oklch(0.98 0.005 85)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            className="reveal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
              style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}>
              Portfólio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Imóveis em <span className="gold-gradient">Destaque</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-lg">
              Uma seleção exclusiva das propriedades mais especiais do mercado, cuidadosamente escolhidas para si.
            </p>
          </motion.div>

          <motion.div
            className="reveal shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MagneticButton
              href="https://www.century21.pt/agentes/luis-viveiros"
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
            >
              Ver todos os imóveis
              <ArrowRight className="size-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
