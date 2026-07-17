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
  { label: 'Edukacija Za trepavice', href: '/kurs-trepavice' },
]

export const STATS = [
  { value: 4200, suffix: '+', label: 'Zadovoljnih klijenata' },
  { value: 20, suffix: '+', label: 'Godina u svetu kose' },
  { value: 60, suffix: '+', label: 'Premium proizvoda' },
  { value: 99, suffix: '%', label: 'Zadovoljstvo klijenata' },
]

export const FEATURES = [
  {
    icon: 'Gem',
    title: 'Premium 100% prirodna kosa sa punim krajevima. ',
    description:
      'Samo najfinije etički nabavljene pramenove, ručno birane za besprekorno, prirodan izgled.',
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
  | 'Keratin'
  | 'Nanokeratin'
  | 'Ring'
  | 'Nanoring'
  | 'WEFT-kosa na tre'

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Keratin',
  'Nanokeratin',
  'Ring',
  'Nanoring',
  'WEFT-kosa na tre',
]

export type Product = {
  id: string
  name: string
  image: string
  length: string
  weight: string
  price: number
  rating: number
  category: ProductCategory
}

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Svilena ravna luksuz',
    image: '/kose/kosa-1.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 240,
    rating: 4.9,
    category: 'Keratin',
  },
  {
    id: 'p2',
    name: 'Kaskada kovrdža kutu',
    image: '/kose/kosa-2.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 275,
    rating: 4.8,
    category: 'Nanokeratin',
  },
  {
    id: 'p3',
    name: 'Rivijera talas',
    image: '/kose/kosa-3.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 260,
    rating: 5.0,
    category: 'Ring',
  },
  {
    id: 'p4',
    name: 'Platinasto plava elita',
    image: '/kose/kosa-4.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 320,
    rating: 4.9,
    category: 'Nanoring',
  },
  {
    id: 'p5',
    name: 'Kesten braon signatura',
    image: '/kose/kosa-5.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 250,
    rating: 4.7,
    category: 'WEFT-kosa na tre',
  },
  {
    id: 'p6',
    name: 'Crni oniks',
    image: '/kose/kosa-6.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 285,
    rating: 4.9,
    category: 'Keratin',
  },
  {
    id: 'p7',
    name: 'Prirodni keratin mix',
    image: '/kose/kosa-7.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 270,
    rating: 4.8,
    category: 'Nanokeratin',
  },
  {
    id: 'p8',
    name: 'Platinasti keratin luksuz',
    image: '/kose/kosa-8.png',
    length: '60cm-70cm',
    weight: '100gr',
    price: 310,
    rating: 5.0,
    category: 'Keratin',
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
    'Sertifikat po završetku edukacije',
    'Komplet materijala za rad tokom obuke',
    'Mali broj polaznika po grupi',
    'Podrška i konsultacije i posle edukacije',
  ],
  highlights: [
    {
      icon: 'GraduationCap',
      title: 'Sertifikovan program',
      description:
        'Strukturirana edukacija sa teorijom i praksom, prilagođena početnicima i onima koji žele da unaprede tehniku.',
    },
    {
      icon: 'Users',
      title: 'Mali broj polaznika',
      description:
        'Individualan pristup i dovoljno vremena za vežbu kako biste savladali tehniku nadograđivanja trepavica.',
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
