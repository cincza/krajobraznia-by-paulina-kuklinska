export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "opinia-01",
    name: "Klientka prywatna",
    location: "Augustów",
    quote:
      "Tu pojawi się docelowa opinia o współpracy, wrażeniach z procesu i efekcie końcowym. Układ karty jest gotowy na prawdziwy cytat klienta.",
  },
  {
    id: "opinia-02",
    name: "Właściciele ogrodu",
    location: "Podlasie",
    quote:
      "Wersja demonstracyjna pokazuje miejsce na elegancki, krótki komentarz budujący wiarygodność i spokojny charakter marki.",
  },
  {
    id: "opinia-03",
    name: "Inwestorzy",
    location: "Suwałki",
    quote:
      "Po podmianie treści ta sekcja może stać się mocnym społecznych dowodem jakości, bez przeciążania strony nadmiarem tekstu.",
  },
];
