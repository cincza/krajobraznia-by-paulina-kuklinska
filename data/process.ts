export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Pierwsza rozmowa i wstępne rozpoznanie potrzeb, skali inwestycji oraz oczekiwanego charakteru ogrodu.",
  },
  {
    number: "02",
    title: "Konsultacja",
    description:
      "Spotkanie lub rozmowa projektowa, podczas której zbierane są informacje o miejscu, stylu życia i priorytetach.",
  },
  {
    number: "03",
    title: "Koncepcja",
    description:
      "Układ funkcjonalny, nastrój przestrzeni i kierunek estetyczny przygotowane jako baza do dalszych decyzji.",
  },
  {
    number: "04",
    title: "Projekt",
    description:
      "Doprecyzowanie rozwiązań, materiałów oraz zieleni w formie gotowej do przekazania do kolejnego etapu.",
  },
  {
    number: "05",
    title: "Realizacja",
    description:
      "Etap wdrożenia założeń projektowych i uporządkowania wykonania tak, by efekt końcowy był spójny z koncepcją.",
  },
  {
    number: "06",
    title: "Opieka nad ogrodem",
    description:
      "Możliwość dalszego wsparcia, wskazówek pielęgnacyjnych i spokojnego prowadzenia zieleni po zakończeniu prac.",
  },
];
