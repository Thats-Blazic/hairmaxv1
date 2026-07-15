export const SITE = {
  name: 'Hair Max',
  phone: '+381606868462',
  phoneDisplay: '+381 60 68 68 462',
  whatsapp: '381606868462',
  email: 'hairmax888@gmail.com',
  instagram: 'hairmaxprodajakose',
  facebook: 'hairmax',
  address: 'Bulevar Kraljevski 24, Beograd 11000',
}

export const NAV_LINKS = [
  { label: 'Početna', href: '/' },
  { label: 'O nama', href: '/#about' },
  { label: 'Galerija', href: '/#gallery' },
  { label: 'Prodavnica', href: '/#shop' },
  { label: 'Zakazivanje', href: '/#booking' },
  { label: 'Kontakt', href: '/#contact' },
  { label: 'Kurs trepavica', href: '/kurs-trepavice' },
]

export const STATS = [
  { value: 4200, suffix: '+', label: 'Zadovoljnih klijenata' },
  { value: 12, suffix: '', label: 'Godina iskustva' },
  { value: 60, suffix: '+', label: 'Premium proizvoda' },
  { value: 99, suffix: '%', label: 'Zadovoljstvo klijenata' },
]

export const FEATURES = [
  {
    icon: 'Gem',
    title: 'Premium kvalitet',
    description:
      'Samo najfinije etički nabavljene pramenove, ručno birane za besprekorno, prirodan izgled.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Sertifikovani stilisti',
    description:
      'Tim međunarodno sertifikovanih specijalista obučenih u najnovijim luksuznim tehnikama.',
  },
  {
    icon: 'Sparkles',
    title: '100% prirodna kosa',
    description:
      'Čista, neobrađena ljudska kosa koja se savršeno uklapa i traje sezonu za sezonom.',
  },
  {
    icon: 'Crown',
    title: 'Luksuzno iskustvo',
    description:
      'Privatna, raskošna atmosfera osmišljena da svaka poseta bude zaista izuzetna.',
  },
]

export type GalleryCategory =
  | 'Ekstenzije'
  | 'Transformacije'
  | 'Salon'
  | 'Klijenti'

export const GALLERY: {
  src: string
  category: GalleryCategory
  span?: boolean
}[] = [
  { src: '/gallery-1.png', category: 'Ekstenzije', span: true },
  { src: '/gallery-2.png', category: 'Transformacije' },
  { src: '/gallery-3.png', category: 'Salon' },
  { src: '/gallery-4.png', category: 'Klijenti' },
  { src: '/gallery-5.png', category: 'Ekstenzije' },
  { src: '/gallery-6.png', category: 'Salon', span: true },
  { src: '/gallery-7.png', category: 'Transformacije' },
  { src: '/gallery-8.png', category: 'Klijenti' },
]

export type ProductCategory =
  | 'Ravna kosa'
  | 'Kovrdžava kosa'
  | 'Talasasta kosa'
  | 'Plava'
  | 'Braon'
  | 'Crna'

export type Product = {
  id: string
  name: string
  image: string
  length: string
  color: string
  weight: string
  price: number
  rating: number
  category: ProductCategory
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Svilena ravna luksuz',
    image: '/product-straight.png',
    length: '56 cm',
    color: 'Kesten',
    weight: '120 g',
    price: 240,
    rating: 4.9,
    category: 'Ravna kosa',
  },
  {
    id: 'p2',
    name: 'Kaskada kovrdža kutu',
    image: '/product-curly.png',
    length: '51 cm',
    color: 'Espreso',
    weight: '140 g',
    price: 275,
    rating: 4.8,
    category: 'Kovrdžava kosa',
  },
  {
    id: 'p3',
    name: 'Rivijera talas',
    image: '/product-wavy.png',
    length: '61 cm',
    color: 'Moka',
    weight: '130 g',
    price: 260,
    rating: 5.0,
    category: 'Talasasta kosa',
  },
  {
    id: 'p4',
    name: 'Platinasto plava elita',
    image: '/product-blonde.png',
    length: '56 cm',
    color: 'Platina',
    weight: '120 g',
    price: 320,
    rating: 4.9,
    category: 'Plava',
  },
  {
    id: 'p5',
    name: 'Kesten braon signatura',
    image: '/product-brown.png',
    length: '51 cm',
    color: 'Kesten braon',
    weight: '125 g',
    price: 250,
    rating: 4.7,
    category: 'Braon',
  },
  {
    id: 'p6',
    name: 'Crni oniks',
    image: '/product-black.png',
    length: '61 cm',
    color: 'Potpuno crna',
    weight: '135 g',
    price: 285,
    rating: 4.9,
    category: 'Crna',
  },
]

export const WORKING_HOURS = [
  { day: 'Ponedeljak – Petak', hours: '9:00 — 20:00' },
  { day: 'Subota', hours: '10:00 — 18:00' },
  { day: 'Nedelja', hours: 'Zatvoreno' },
]

export const SERVICES_OPTIONS = [
  'Ugradnja ekstenzija',
  'Konsultacija',
  'Feniranje i stilizovanje',
  'Održavanje i ponovna ugradnja',
  'VIP luksuz paket',
  'Usklađivanje boje',
]

export const LASH_COURSE = {
  duration: '2 dana',
  level: 'Početni i napredni nivo',
  modules: [
    'Teorija anatomije trepavica i bezbednosti rada',
    'Upoznavanje materijala i alata profesionalnog kvaliteta',
    'Tehnike klasičnog i volumenskog nadograđivanja',
    'Pravilno izolovanje i lepljenje trepavica',
    'Oblikovanje i dizajn pogleda po tipu lica',
    'Nega trepavica i saveti za klijente',
    'Praktičan rad na modelima pod nadzorom instruktora',
  ],
  includes: [
    'Sertifikat po završetku kursa',
    'Komplet materijala za rad tokom obuke',
    'Mali broj polaznika po grupi',
    'Podrška i konsultacije i posle kursa',
  ],
  highlights: [
    {
      icon: 'GraduationCap',
      title: 'Sertifikovan program',
      description:
        'Strukturiran kurs sa teorijom i praksom, prilagođen početnicima i onima koji žele da unaprede tehniku.',
    },
    {
      icon: 'Users',
      title: 'Mali broj polaznika',
      description:
        'Individualan pristup i dovoljno vremena za vežbu kako biste savladali tehniku lepljenja trepavica.',
    },
    {
      icon: 'Sparkles',
      title: 'Premium materijali',
      description:
        'Radite sa profesionalnim proizvodima i alatima koji se koriste u vrhunskim salonima.',
    },
    {
      icon: 'Award',
      title: 'Sertifikat',
      description:
        'Po uspešnom završetku dobijate sertifikat i spremni ste da započnete svoju karijeru.',
    },
  ],
}
