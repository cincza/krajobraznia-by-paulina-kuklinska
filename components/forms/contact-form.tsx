"use client";

import { useState, type FormEvent } from "react";

import { siteConfig } from "@/data/siteConfig";

const inputClassName =
  "min-h-[52px] w-full rounded-[18px] border border-border-muted bg-white/82 px-4 py-3 text-base text-forest transition-colors placeholder:text-anthracite/36 focus:border-forest/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

export function ContactForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const area = String(formData.get("area") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subjectParts = ["Zapytanie o ogród"];

    if (name) {
      subjectParts.push(name);
    }

    if (area) {
      subjectParts.push(area);
    }

    const body = [
      "Dzień dobry,",
      "",
      "przesyłam zapytanie ze strony internetowej.",
      "",
      `Imię: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `E-mail: ${email || "-"}`,
      `Powierzchnia działki: ${area || "-"}`,
      "",
      "Wiadomość:",
      message || "-",
    ].join("\n");

    setStatusMessage(
      "Do czasu uruchomienia formularza wiadomość zostanie przygotowana w Twoim programie pocztowym.",
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subjectParts.join(" - "))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Imię</span>
          <input
            name="name"
            required
            autoComplete="given-name"
            placeholder="Twoje imię"
            className={inputClassName}
          />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">Telefon</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+48 000 000 000"
            className={inputClassName}
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">
            E-mail (opcjonalnie)
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="adres@email.pl"
            className={inputClassName}
          />
        </label>
        <label className="space-y-1.5">
          <span className="text-sm font-medium text-forest">
            Powierzchnia działki
          </span>
          <input
            name="area"
            placeholder="Np. 1200 m²"
            className={inputClassName}
          />
        </label>
      </div>

      <label className="space-y-1.5">
        <span className="text-sm font-medium text-forest">
          Krótka wiadomość
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Napisz krótko, czego dotyczy ogród lub konsultacja."
          className={`${inputClassName} min-h-[132px] resize-y`}
        />
      </label>

      <label className="flex items-start gap-2.5 rounded-[18px] border border-border-muted bg-white/55 px-3.5 py-3 text-sm leading-6 text-anthracite/74">
        <input
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-border-muted accent-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        />
        <span>
          Wyrażam zgodę na kontakt w sprawie zapytania i zapoznałam(-em) się z
          informacją o przetwarzaniu danych.
        </span>
      </label>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
        >
          Wyślij zapytanie
        </button>
        <p
          aria-live="polite"
          className="max-w-xl text-sm leading-6 text-anthracite/64"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
