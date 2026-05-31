export const siteConfig = {
  companyName: "Krajobra\u017ania by Paulina Kukli\u0144ska",
  shortName: "Krajobra\u017ania",
  locale: "pl_PL",
  url: "https://www.krajobraznia.pl",
  phone: "+48 537 502 985",
  phoneHref: "tel:+48537502985",
  email: "pdrejer92@gmail.com",
  emailHref: "mailto:pdrejer92@gmail.com",
  location: "August\u00f3w i okolice",
  facebookUrl:
    "https://www.facebook.com/people/Krajobra%C5%BAnia-by-Paulina-Kukli%C5%84ska/61577201187805/",
  instagramUrl:
    "https://www.instagram.com/krajobrazniabypaulinakuklinska/",
  logoPath: "/logo/logo-krajobraznia-mark.png",
  logoFullPath: "/logo/logo-krajobraznia.jpg",
  navigation: [
    { label: "Start", href: "/" },
    { label: "Oferta", href: "/oferta" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "O pracowni", href: "/o-pracowni" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  pageLinks: [
    { label: "Start", href: "/" },
    { label: "Oferta", href: "/oferta" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "O pracowni", href: "/o-pracowni" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  hero: {
    eyebrow: "Projektowanie ogrodów",
    title: "Projektujemy ogrody, które zachwycają przez lata",
    description:
      "Krajobra\u017ania by Paulina Kukli\u0144ska. Projekty ogrod\u00f3w dla klient\u00f3w z wojew\u00f3dztwa podlaskiego i warmi\u0144sko-mazurskiego oraz ca\u0142oroczna piel\u0119gnacja ogrod\u00f3w w okolicach Augustowa.",
    locationLabel:
      "Wojew\u00f3dztwo podlaskie i wojew\u00f3dztwo warmi\u0144sko-mazurskie",
    highlights: [
      "Projektowanie ogrod\u00f3w dla klient\u00f3w prywatnych",
      "Ca\u0142oroczna piel\u0119gnacja ogrod\u00f3w w okolicach Augustowa",
      "Szybki kontakt telefoniczny i konsultacja",
    ],
    ctaHighlights: [
      "Indywidualne projekty",
      "Naturalne kompozycje ro\u015blin",
      "Opieka nad ogrodem przez ca\u0142y rok",
    ],
    primaryCtaLabel: "Zadzwo\u0144 i um\u00f3w konsultacj\u0119",
    secondaryCtaLabel: "Zobacz realizacje",
  },
  seo: {
    defaultTitle:
      "Krajobra\u017ania by Paulina Kukli\u0144ska | Projektowanie ogrod\u00f3w w Augustowie i na Podlasiu",
    description:
      "Eleganckie studio projektowania ogrod\u00f3w i przestrzeni zielonych. Strona przygotowana pod portfolio, ofert\u0119, realizacje i kontakt.",
    ogImage: "/images/projects/ogrody-naturalistyczne/wa0002.jpg",
  },
  contactIntro:
    "Najwygodniej zadzwoni\u0107 lub napisa\u0107 mailowo, aby porozmawia\u0107 o projekcie ogrodu albo opiece nad zieleni\u0105.",
  serviceAreaDesign: [
    "wojew\u00f3dztwo podlaskie",
    "wojew\u00f3dztwo warmi\u0144sko-mazurskie",
  ],
  serviceAreaCare: ["August\u00f3w i okolice"],
} as const;

export const contactLinks = [
  {
    label: "Telefon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    kind: "phone",
  },
  {
    label: "E-mail",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    kind: "email",
  },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
  },
  {
    label: "Facebook",
    href: siteConfig.facebookUrl,
  },
] as const;
