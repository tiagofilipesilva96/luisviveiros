import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PropertiesSection } from '@/components/PropertiesSection'
import { ConsultaSection } from '@/components/ConsultaSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <ConsultaSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
