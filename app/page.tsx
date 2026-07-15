import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/navbar'
import { CartDrawer } from '@/components/cart-drawer'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Shop } from '@/components/shop'
import { Booking } from '@/components/booking'
import { Location } from '@/components/location'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <Stats />
        <About />
        <Gallery />
        <Shop />
        <Booking />
        <Location />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  )
}
