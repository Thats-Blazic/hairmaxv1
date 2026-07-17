import { MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { SITE, NAV_LINKS } from '@/lib/site-data'

const SERVICES = [
  'Ekstenzije za kosu',
  'Feniranje i stilizovanje',
  'Usklađivanje boje',
  'Održavanje',
  'VIP luksuz paket',
  'Edukacija za nadogradnju trepavica',
]

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/60 bg-background px-5 pb-8 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-serif text-2xl">
              Hair <span className="gold-text-gradient">Max</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium kvalitet kose za one koji ne pristaju na manje. 100% prirodne
              ekstenzije, pažljivo birane pramenove i stručna usluga — duge, guste,
              prelepe. Ti biraš, mi pružamo.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: 'https://www.instagram.com/hairmaxprodajakose', label: 'Instagram' },
                { icon: FacebookIcon, href: `https://facebook.com/${SITE.facebook}`, label: 'Facebook' },
                { icon: MessageCircle, href: `https://wa.me/${SITE.whatsapp}`, label: 'WhatsApp' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg">Brzi linkovi</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg">Usluge</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Hair Max. Sva prava zadržana.
          </p>
          <p>Dizajn i kod Ghost Force Studio.</p>
        </div>
      </div>
    </footer>
  )
}
