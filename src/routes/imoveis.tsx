import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, MapPin, Bed, Bath, Square, MessageCircle, Phone, Search } from 'lucide-react'
import { properties, type Property } from '@/data/properties'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/imoveis')({
  head: () => ({
    meta: [
      { title: 'Todos os Imóveis — Luís Viveiros · Century 21 Açores' },
      { name: 'description', content: 'Portfólio completo de imóveis nos Açores do consultor Luís Viveiros — Century 21 Azor. Apartamentos, moradias, terrenos e investimento.' },
      { property: 'og:title', content: 'Imóveis nos Açores — Luís Viveiros · Century 21' },
      { property: 'og:description', content: 'Portfólio real de imóveis nos Açores.' },
    ],
  }),
  component: ImoveisPage,
})

function PropCard({ p, i }: { p: Property; i: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="property-card rounded-3xl overflow-hidden bg-white border block"
      style={{ borderColor: 'oklch(0.92 0 0)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (i % 6) * 0.05, duration: 0.45 }}
      viewport={{ once: true, margin: '-40px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={p.image} alt={p.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy" decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent 55%)' }} />
        {p.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))', color: 'oklch(0.1 0 0)' }}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-base leading-snug mb-1 line-clamp-2">{p.title}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="size-3.5 shrink-0" style={{ color: 'oklch(0.75 0.12 85)' }} />
              <span className="truncate">{p.location}</span>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold whitespace-nowrap shrink-0" style={{ color: 'oklch(0.35 0.06 75)' }}>{p.price}</p>
        </div>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-4 border-t text-xs text-muted-foreground" style={{ borderColor: 'oklch(0.95 0 0)' }}>
          {p.beds !== undefined && <span className="flex items-center gap-1.5"><Bed className="size-3.5" />{p.beds} quartos</span>}
          {p.baths !== undefined && <span className="flex items-center gap-1.5"><Bath className="size-3.5" />{p.baths} WC</span>}
          {p.area !== undefined && <span className="flex items-center gap-1.5"><Square className="size-3.5" />{p.area} m²</span>}
        </div>
        <div className="mt-4 flex gap-2">
          <a href="https://wa.me/351911726049" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            className="btn-press flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-black"
            style={{ background: 'linear-gradient(135deg, oklch(0.85 0.1 85), oklch(0.7 0.13 80))' }}>
            <MessageCircle className="size-3.5" />WhatsApp
          </a>
          <a href="tel:911726049" onClick={(e) => e.stopPropagation()}
            className="btn-press flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-foreground border"
            style={{ borderColor: 'oklch(0.85 0.08 85)' }}>
            <Phone className="size-3.5" />Ligar
          </a>
        </div>
      </div>
    </motion.a>
  )
}

function ImoveisPage() {
  const [q, setQ] = useState('')
  const filtered = properties.filter((p) =>
    [p.title, p.location, p.badge ?? ''].join(' ').toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-28 md:pt-32 pb-20" style={{ background: 'oklch(0.98 0.005 85)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Link to="/" className="btn-press inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="size-4" /> Voltar à página inicial
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border"
                style={{ background: 'oklch(0.98 0.02 85)', borderColor: 'oklch(0.85 0.08 85)', color: 'oklch(0.55 0.1 75)' }}>
                Portfólio Completo
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Todos os <span className="gold-gradient">Imóveis</span>
              </h1>
              <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-xl">
                {properties.length} imóveis nos Açores — atualizado a partir do site oficial Century 21.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Pesquisar por localização ou tipo…"
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border text-sm outline-none focus:border-[oklch(0.75_0.12_85)] transition-colors"
                style={{ borderColor: 'oklch(0.92 0.02 85)' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map((p, i) => <PropCard key={p.id} p={p} i={i} />)}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">Nenhum imóvel encontrado para "{q}".</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
