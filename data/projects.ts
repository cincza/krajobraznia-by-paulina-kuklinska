export const projectCategories = [
  "Wszystkie",
  "Ogrody przydomowe",
  "Ogrody naturalistyczne",
  "Ogrody formalne",
  "Nasadzenia",
  "Piel\u0119gnacja ogrod\u00f3w",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type SelectableProjectCategory = Exclude<ProjectCategory, "Wszystkie">;

export type Project = {
  id: string;
  title: string;
  location: string;
  description: string;
  category: SelectableProjectCategory;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  featuredOnHome: boolean;
};

export const heroProjectImage = {
  src: "/images/projects/ogrody-naturalistyczne/wa0002.jpg",
  alt: "Naturalistyczny ogr\u00f3d z brzozami, szerokim trawnikiem i kwitn\u0105c\u0105 rabat\u0105 bylinow\u0105",
} as const;

export const projects: Project[] = [
  {
    id: "naturalistyczna-rabata-z-brzozami",
    title: "Naturalistyczna rabata z brzozami",
    location: "Realizacja prywatna",
    description:
      "Szeroka kompozycja bylin, traw i niewielkich drzew porz\u0105dkuje otwart\u0105 dzia\u0142k\u0119 i daje spokojne, reprezentacyjne pierwsze wra\u017cenie.",
    category: "Ogrody naturalistyczne",
    image: "/images/projects/ogrody-naturalistyczne/wa0002.jpg",
    imageAlt:
      "Naturalistyczny ogr\u00f3d z brzozami, szerokim trawnikiem i kwitn\u0105c\u0105 rabat\u0105 bylinow\u0105",
    imageWidth: 1600,
    imageHeight: 1200,
    featuredOnHome: true,
  },
  {
    id: "ogrod-przydomowy-z-rabatami",
    title: "Ogr\u00f3d przydomowy z rabatami",
    location: "Realizacja prywatna",
    description:
      "Czytelny podzia\u0142 na trawnik, warzywnik i kolorowe obrze\u017ca sprawia, \u017ce ogr\u00f3d jest wygodny w codziennym u\u017cytkowaniu i atrakcyjny przez sezon.",
    category: "Ogrody przydomowe",
    image: "/images/projects/ogrody-przydomowe/wa0012.jpg",
    imageAlt:
      "Ogr\u00f3d przydomowy z trawnikiem, warzywnikiem i uporz\u0105dkowanymi rabatami",
    imageWidth: 1600,
    imageHeight: 1200,
    featuredOnHome: true,
  },
  {
    id: "kolorowa-rabata-przy-patio",
    title: "Kolorowa rabata przy patio",
    location: "Realizacja prywatna",
    description:
      "Byliny, trawy i sezonowe akcenty zmi\u0119kczaj\u0105 nawierzchnie przy strefie wypoczynku i prowadz\u0105 ziele\u0144 bli\u017cej domu.",
    category: "Nasadzenia",
    image: "/images/projects/nasadzenia/wa0013.jpg",
    imageAlt:
      "Kolorowa rabata bylinowa przy patio i strefie wypoczynku",
    imageWidth: 1200,
    imageHeight: 1600,
    featuredOnHome: true,
  },
  {
    id: "roze-w-swobodnej-kompozycji",
    title: "R\u00f3\u017ce w swobodnej kompozycji",
    location: "Realizacja prywatna",
    description:
      "Mi\u0119kka kompozycja krzew\u00f3w i bylin pokazuje bardziej romantyczne, naturalistyczne podej\u015bcie do aran\u017cacji ogrodu.",
    category: "Ogrody naturalistyczne",
    image: "/images/projects/ogrody-naturalistyczne/wa0021.jpg",
    imageAlt:
      "R\u00f3\u017ce i byliny w swobodnej kompozycji ogrodowej na kamiennym pod\u0142o\u017cu",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: true,
  },
  {
    id: "formalny-uklad-z-centralna-osia",
    title: "Formalny uk\u0142ad z centraln\u0105 osi\u0105",
    location: "Realizacja prywatna",
    description:
      "Geometryczny rysunek \u015bcie\u017cek i nasadze\u0144 buduje uporz\u0105dkowany charakter ogrodu i dobrze porz\u0105dkuje wi\u0119ksz\u0105 przestrze\u0144.",
    category: "Ogrody formalne",
    image: "/images/projects/ogrody-formalne/wa0044.jpg",
    imageAlt:
      "Formalny ogr\u00f3d z centraln\u0105 kompozycj\u0105 i geometrycznym uk\u0142adem \u015bcie\u017cek",
    imageWidth: 1598,
    imageHeight: 900,
    featuredOnHome: true,
  },
  {
    id: "rabata-przy-schodach-i-tarasie",
    title: "Rabata przy schodach i tarasie",
    location: "Realizacja prywatna",
    description:
      "G\u0119ste, wielowarstwowe nasadzenia podbijaj\u0105 reprezentacyjny charakter domu i tworz\u0105 mocn\u0105, dopracowan\u0105 opraw\u0119 wej\u015bcia.",
    category: "Nasadzenia",
    image: "/images/projects/nasadzenia/wa0076.jpg",
    imageAlt:
      "Nasadzenia przy schodach i tarasie z hortensjami, trawami i bylinami",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: true,
  },
  {
    id: "ogrod-przy-drewnianym-domu",
    title: "Ogr\u00f3d przy drewnianym domu",
    location: "Realizacja prywatna",
    description:
      "Kamie\u0144, trawy ozdobne i hortensje tworz\u0105 reprezentacyjn\u0105 przestrze\u0144 wej\u015bciow\u0105 oraz spokojne t\u0142o dla architektury domu.",
    category: "Ogrody formalne",
    image: "/images/projects/ogrody-formalne/wa0096.jpg",
    imageAlt:
      "Drewniany dom z reprezentacyjnymi nasadzeniami z traw ozdobnych i hortensji",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: true,
  },
  {
    id: "kompozycja-z-trawami-przy-lesnej-bryle",
    title: "Kompozycja z trawami przy le\u015bnej bryle",
    location: "Realizacja prywatna",
    description:
      "Nasadzenia oparte na trawach ozdobnych, hortensjach i ro\u015blinach strukturalnych dobrze wpisuj\u0105 si\u0119 w le\u015bne otoczenie dzia\u0142ki.",
    category: "Ogrody naturalistyczne",
    image: "/images/projects/ogrody-naturalistyczne/wa0100.jpg",
    imageAlt:
      "Naturalistyczna kompozycja z trawami ozdobnymi i hortensjami przy le\u015bnej dzia\u0142ce",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: true,
  },
  {
    id: "warstwowa-rabata-bylinowa",
    title: "Warstwowa rabata bylinowa",
    location: "Realizacja prywatna",
    description:
      "Zestawienie bylin, traw i ro\u015blin strukturalnych pokazuje, jak detal nasadze\u0144 mo\u017ce budowa\u0107 charakter nowoczesnej rabaty.",
    category: "Nasadzenia",
    image: "/images/projects/nasadzenia/wa0025.jpg",
    imageAlt:
      "Warstwowa rabata bylinowa z trawami, peoniami i ro\u015blinami strukturalnymi",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
  {
    id: "rabata-naturalistyczna-przy-lace",
    title: "Rabata naturalistyczna przy \u0142\u0105ce",
    location: "Realizacja prywatna",
    description:
      "Niska kompozycja ro\u015blinna porz\u0105dkuje granic\u0119 trawnika i p\u0142ynnie \u0142\u0105czy ogr\u00f3d z otwartym krajobrazem.",
    category: "Ogrody naturalistyczne",
    image: "/images/projects/ogrody-naturalistyczne/wa0026.jpg",
    imageAlt:
      "Naturalistyczna rabata przy otwartej dzia\u0142ce, trawniku i lekkim zadrzewieniu",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
  {
    id: "nowoczesna-strefa-wejsciowa",
    title: "Nowoczesna strefa wej\u015bciowa",
    location: "Realizacja prywatna",
    description:
      "W\u0105ska rabata w kamieniu prowadzi w stron\u0119 wej\u015bcia i podkre\u015bla wsp\u00f3\u0142czesny charakter bry\u0142y budynku.",
    category: "Nasadzenia",
    image: "/images/projects/nasadzenia/wa0069.jpg",
    imageAlt:
      "Nowoczesna strefa wej\u015bciowa z kamienn\u0105 rabat\u0105 i uporz\u0105dkowanymi nasadzeniami",
    imageWidth: 1536,
    imageHeight: 2048,
    featuredOnHome: false,
  },
  {
    id: "zimozielona-kompozycja-przy-wejsciu",
    title: "Zimozielona kompozycja przy wej\u015bciu",
    location: "Realizacja prywatna",
    description:
      "Bukszpany, sosny i ro\u015bliny o wyrazistej strukturze tworz\u0105 uporz\u0105dkowan\u0105 opraw\u0119 domu atrakcyjn\u0105 r\u00f3wnie\u017c poza sezonem kwitnienia.",
    category: "Ogrody formalne",
    image: "/images/projects/ogrody-formalne/wa0070.jpg",
    imageAlt:
      "Formalna kompozycja zimozielona przy wej\u015bciu z bukszpanami, sosnami i kamienn\u0105 rabat\u0105",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
  {
    id: "rabata-przy-lesnej-elewacji",
    title: "Rabata przy le\u015bnej elewacji",
    location: "Realizacja prywatna",
    description:
      "Hydrangee, trawy i ro\u015bliny okrywowe \u0142agodz\u0105 lini\u0119 domu i spajaj\u0105 architektur\u0119 z otaczaj\u0105cym lasem.",
    category: "Ogrody formalne",
    image: "/images/projects/ogrody-formalne/wa0080.jpg",
    imageAlt:
      "Rabata przy domu i skraju lasu z hortensjami, trawami ozdobnymi i kamiennym wyko\u0144czeniem",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
  {
    id: "lesny-ogrod-z-szerokim-trawnikiem",
    title: "Le\u015bny ogr\u00f3d z szerokim trawnikiem",
    location: "Realizacja prywatna",
    description:
      "Rozleg\u0142y trawnik, kamienne nawierzchnie i niska ziele\u0144 eksponuj\u0105 skal\u0119 dzia\u0142ki i porz\u0105dkuj\u0105 widok przy le\u015bnym otoczeniu.",
    category: "Ogrody formalne",
    image: "/images/projects/ogrody-formalne/wa0086.jpg",
    imageAlt:
      "Le\u015bny ogr\u00f3d formalny z szerokim trawnikiem, kamienn\u0105 nawierzchni\u0105 i murem z kamienia",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
  {
    id: "rabata-wzdluz-ogrodzenia",
    title: "Rabata wzd\u0142u\u017c ogrodzenia",
    location: "Realizacja prywatna",
    description:
      "D\u0142uga, uporz\u0105dkowana kompozycja wzd\u0142u\u017c granicy dzia\u0142ki pokazuje, jak nawet prosta strefa mo\u017ce zyska\u0107 bardziej reprezentacyjny charakter.",
    category: "Ogrody przydomowe",
    image: "/images/projects/ogrody-przydomowe/wa0105.jpg",
    imageAlt:
      "Rabata przydomowa wzd\u0142u\u017c ogrodzenia z bylinami, trawami i obrze\u017cem z kostki",
    imageWidth: 1536,
    imageHeight: 2048,
    featuredOnHome: false,
  },
  {
    id: "pielegnacja-ogrodu-przy-elewacji",
    title: "Piel\u0119gnacja ogrodu przy elewacji",
    location: "Realizacja prywatna",
    description:
      "Piel\u0119gnacja trawnika, \u017cywop\u0142otu i rabat przy elewacji pokazuje uporz\u0105dkowany efekt regularnej opieki nad ogrodem.",
    category: "Piel\u0119gnacja ogrod\u00f3w",
    image: "/images/projects/pielegnacja-ogrodow/wa0072.jpg",
    imageAlt:
      "Wypiel\u0119gnowany ogr\u00f3d przy domu z trawnikiem, \u017cywop\u0142otem i rabat\u0105 kwiatow\u0105 przy elewacji",
    imageWidth: 2048,
    imageHeight: 1536,
    featuredOnHome: false,
  },
];
