import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PropertiesSection } from '@/components/PropertiesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Luís Viveiros — Consultor Imobiliário · Century 21 Açores' },
      { name: 'description', content: 'Luís Viveiros, consultor imobiliário Centurion Top Producer da Century 21 Azor nos Açores. Mais de 20 anos de experiência em imobiliário em São Miguel, Flores e restantes ilhas.' },
      { property: 'og:title', content: 'Luís Viveiros — Consultor Imobiliário Century 21 Açores' },
      { property: 'og:description', content: 'Especialista no mercado imobiliário dos Açores. Consultor Centurion Top Producer.' },
      { property: 'og:image', content: 'https://brumjtydtlxhooqrrsch.supabase.co/storage/v1/object/public/avatars/profile-photo_1d70f6bb-b9cb-4614-9bfb-120f1604ec34.jpg' },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <PropertiesSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
