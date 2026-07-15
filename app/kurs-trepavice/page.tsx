import type { Metadata } from 'next'
import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/navbar'
import { CartDrawer } from '@/components/cart-drawer'
import { LashCourse } from '@/components/lash-course'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Edukacija za nadogradnju trepavica | Hair Max',
  description:
    'Profesionalna edukacija za nadogradnju trepavica u Hair Max ateljeu. Teorija, praksa, sertifikat i premium materijali. Prijavite se preko WhatsApp-a.',
  openGraph: {
    title: 'Edukacija za nadogradnju trepavica | Hair Max',
    description:
      'Naučite profesionalnu tehniku nadograđivanja trepavica u luksuznom ambijentu Hair Max ateljea.',
    images: ['/og-image.png'],
  },
}

export default function KursTrepavicePage() {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main className="overflow-x-hidden">
        <LashCourse />
      </main>
      <Footer />
    </CartProvider>
  )
}
