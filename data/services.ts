export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "projektowanie-ogrodow",
    number: "01",
    title: "Projektowanie ogrodów",
    description:
      "Indywidualne projekty ogrodów dopasowane do potrzeb klientów, warunków działki i charakteru otoczenia.",
    details: [
      "układ funkcjonalny ogrodu",
      "dopasowanie do warunków działki",
      "spójna koncepcja dopasowana do otoczenia",
    ],
  },
  {
    id: "ogrody-naturalistyczne-formalne",
    number: "02",
    title: "Ogrody naturalistyczne i formalne",
    description:
      "Tworzenie harmonijnych przestrzeni opartych na sprawdzonych rozwiązaniach i roślinach odpowiednich dla regionu.",
    details: [
      "kompozycje naturalistyczne i formalne",
      "rośliny odpowiednie dla regionu",
      "spokojny i elegancki charakter ogrodu",
    ],
  },
  {
    id: "nasadzenia-przesadzanie-roslin",
    number: "03",
    title: "Nasadzenia i przesadzanie roślin",
    description:
      "Dobór, sadzenie oraz przesadzanie drzew, krzewów i bylin z uwzględnieniem ich przyszłego rozwoju.",
    details: [
      "dobór roślin do warunków ogrodu",
      "sadzenie drzew, krzewów i bylin",
      "przesadzanie z myślą o dalszym wzroście",
    ],
  },
  {
    id: "formowanie-przycinanie-roslin",
    number: "04",
    title: "Formowanie i przycinanie roślin",
    description:
      "Pielęgnacja roślin ozdobnych, żywopłotów oraz drzew w celu zachowania zdrowia i estetycznego wyglądu.",
    details: [
      "przycinanie roślin ozdobnych",
      "formowanie żywopłotów",
      "utrzymanie zdrowia i estetyki roślin",
    ],
  },
  {
    id: "caloroczna-pielegnacja-ogrodow",
    number: "05",
    title: "Całoroczna pielęgnacja ogrodów",
    description:
      "Regularna opieka nad ogrodem obejmująca nawożenie, pielenie, porządki sezonowe i bieżące prace pielęgnacyjne.",
    details: [
      "nawożenie i pielenie",
      "grabienie liści i porządki sezonowe",
      "stała opieka nad ogrodem przez cały rok",
    ],
  },
  {
    id: "konsultacje-wycena",
    number: "06",
    title: "Konsultacje i wycena",
    description:
      "Na podstawie zdjęć oraz powierzchni działki możliwe jest przygotowanie orientacyjnych widełek cenowych jeszcze przed spotkaniem.",
    details: [
      "wstępna analiza na podstawie zdjęć",
      "orientacyjne widełki cenowe",
      "lepsze przygotowanie do pierwszej rozmowy",
    ],
  },
];
