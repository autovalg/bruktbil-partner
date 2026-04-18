import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

type Car = {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  badges: string[];
};

export default function HomePage() {
  const featuredCars: Car[] = [
    {
      title: "Volkswagen Tiguan",
      subtitle: "2016 • 99 999 km • Automat • Diesel",
      price: "269 890 kr",
      image: "/cars/tiguan.jpg",
      badges: ["150 hk", "4x4", "Highline", "Webasto"],
    },
    {
      title: "BMW X3",
      subtitle: "2015 • 122 300 km • Automat • Diesel",
      price: "259 890 kr",
      image: "/cars/bmw-x3.jpg",
      badges: ["190 hk", "xDrive", "HUD", "360-kamera"],
    },
    {
      title: "BMW X1",
      subtitle: "2016 • 89 800 km • Automat • Diesel",
      price: "249 890 kr",
      image: "/cars/bmw-x1.jpg",
      badges: ["136 hk", "xDrive", "Panorama", "HUD"],
    },
  ];

  const benefits = [
    {
      title: "Varmt",
      text: "Mer showroom enn standardmal.",
    },
    {
      title: "Premium",
      text: "Dypere kontraster og mer eksklusiv stemning.",
    },
    {
      title: "Salgssterkt",
      text: "Bilene fremstår mer attraktive med riktig innramming.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Se aktuelle biler",
      text: "Utvalget presenteres ryddig med tydelig pris, nøkkeldata og et uttrykk som løfter objektene.",
    },
    {
      step: "02",
      title: "Ta kontakt raskt",
      text: "Kunden skal intuitivt forstå hvor de klikker for å melde interesse eller stille spørsmål.",
    },
    {
      step: "03",
      title: "Enklere vei til handel",
      text: "God presentasjon reduserer friksjon og gjør det lettere å konvertere besøk til faktisk henvendelse.",
    },
  ];

  return (
    <main
      className={`${inter.variable} ${playfair.variable} min-h-screen bg-[#0c0907] font-sans text-white`}
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cars/herobruktbilpartner-v2.jpg"
            alt="Bruktbil Partner showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Mye mindre mørkning enn før */}
          <div className="absolute inset-0 bg-black/34" />

          {/* Subtil fade for lesbarhet, men uten å drepe bildet */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/28 to-[#0c0907]" />

          {/* Lett varm tone */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(255,210,170,0.10),transparent_34%)]" />

          {/* Myk venstreside for tekst, men langt mindre tung enn før */}
          <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-black/34 to-transparent" />

          {/* Subtil vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.28)]" />
        </div>

        <div className="relative mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between border-b border-white/10 pb-5">
            <a
              href="#"
              className="font-sans text-lg font-medium uppercase tracking-[0.32em] text-white/95"
            >
              Bruktbil Partner AS
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#utvalg" className="transition hover:text-white">
                Utvalg
              </a>
              <a href="#fordeler" className="transition hover:text-white">
                Hvorfor oss
              </a>
              <a href="#kontakt" className="transition hover:text-white">
                Kontakt
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-12 py-16 lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
            <div className="max-w-3xl">
              {/* FJERNET pill-boksen over headline */}

              <h1 className="max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-[0.92] tracking-[-0.02em] text-[#f3e7db] sm:text-5xl lg:text-[4.8rem]">
                Bruktbiler
                <span className="block">presentert</span>
                <span className="block">med riktig følelse.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                Denne demoen er bygget for å gi Bruktbil Partner AS et mer
                eksklusivt og tillitsbyggende uttrykk. Målet er at nettsiden skal
                føles mer som et premium showroom enn en standard bruktbilside.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#f0ddca]/15 bg-[#f4e8dc]/95 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                >
                  Be om visning
                </a>
                <a
                  href="#utvalg"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/8 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  Se utvalget
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/[0.025] p-4 backdrop-blur-[2px]"
                  >
                    <p className="font-[var(--font-display)] text-[1.5rem] font-semibold leading-none text-[#f1e5d8]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-[rgba(8,8,8,0.16)] p-4 backdrop-blur-[4px]">
                <div className="rounded-[1.5rem] bg-[rgba(255,255,255,0.025)] p-6">
                  <div className="mb-6 flex items-center justify-between border-b border-white/8 pb-4">
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/42">
                        Demo-visning
                      </p>
                      <p className="mt-2 font-[var(--font-display)] text-[1.65rem] font-semibold leading-none text-[#f2e6da]">
                        Bruktbil Partner AS
                      </p>
                    </div>

                    <div className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/58">
                      Premium profil
                    </div>
                  </div>

                  <div className="space-y-3">
                    {featuredCars.map((car) => (
                      <div
                        key={car.title}
                        className="rounded-2xl bg-[rgba(255,255,255,0.035)] p-3 transition hover:bg-[rgba(255,255,255,0.05)]"
                      >
                        <div className="flex gap-4">
                          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-white/5">
                            <Image
                              src={car.image}
                              alt={car.title}
                              fill
                              sizes="128px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                              <div className="min-w-0">
                                <h3 className="truncate font-[var(--font-display)] text-[1.45rem] font-semibold leading-none text-[#f1e6da]">
                                  {car.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-white/60">
                                  {car.subtitle}
                                </p>
                              </div>

                              <div className="text-left md:text-right">
                                <p className="font-[var(--font-display)] text-[1.45rem] font-semibold leading-none text-[#f1e6da]">
                                  {car.price}
                                </p>
                              </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/76">
                              {car.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="rounded-full bg-white/8 px-2.5 py-1"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/[0.03] p-5">
                    <p className="text-sm text-white/48">Tydelig budskap</p>
                    <p className="mt-3 font-[var(--font-display)] text-[1.5rem] font-semibold leading-tight text-[#f1e6da]">
                      Kvalitetsbiler. Ryddig handel. Profesjonell oppfølging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="utvalg"
        className="border-t border-white/8 bg-[linear-gradient(to_bottom,rgba(20,15,12,0.55),rgba(10,8,7,0.98))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/42">
              Utvalgte biler
            </p>
            <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-semibold tracking-tight text-[#f2e6da] sm:text-6xl">
              Et uttrykk som løfter objektene
            </h2>
            <p className="mt-4 leading-8 text-white/65">
              Denne delen er satt opp slik at bilene fremstår mer eksklusive,
              med større bilder, mer luft og en tydeligere premium-retning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCars.map((car) => (
              <div
                key={car.title}
                className="group overflow-hidden rounded-[2rem] bg-white/[0.025] transition hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="relative h-72 overflow-hidden bg-[#211914]">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.50),rgba(0,0,0,0.08))]" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/72 backdrop-blur-[2px]">
                    Til salgs
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-cormorant)] text-[2rem] font-semibold leading-none text-[#f1e6da]">
                        {car.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/55">
                        {car.subtitle}
                      </p>
                    </div>
                    <p className="font-[var(--font-cormorant)] text-[1.9rem] font-semibold leading-none text-[#f1e6da]">
                      {car.price}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/68">
                    {car.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full bg-white/6 px-3 py-1"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#kontakt"
                    className="mt-6 inline-flex text-sm font-medium text-white/84 transition hover:text-white"
                  >
                    Meld interesse →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fordeler" className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/42">
                Hvorfor dette fungerer
              </p>
              <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-semibold tracking-tight text-[#f2e6da] sm:text-6xl">
                Riktig bakgrunn gjør hele forskjellen
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/65">
                Når siden får en varmere og mer fysisk showroom-følelse, blir
                bilene lettere å oppfatte som attraktive, velholdte og seriøst
                presentert.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white/[0.025] p-6 backdrop-blur-[2px]"
                >
                  <h3 className="font-[var(--font-cormorant)] text-[2rem] font-semibold leading-none text-[#f1e6da]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/42">
              Prosess
            </p>
            <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-semibold tracking-tight text-[#f2e6da] sm:text-6xl">
              Enkel vei fra interesse til handel
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] bg-white/[0.025] p-6 backdrop-blur-[2px]"
              >
                <p className="text-sm font-medium text-white/36">{item.step}</p>
                <h3 className="mt-4 font-[var(--font-cormorant)] text-[2rem] font-semibold leading-none text-[#f1e6da]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="border-t border-white/8">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[2.25rem] bg-white/[0.02] backdrop-blur-[3px]">
            <div className="grid gap-10 p-8 md:grid-cols-[1fr_0.9fr] md:p-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/42">
                  Kontakt
                </p>
                <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-semibold tracking-tight text-[#f2e6da] sm:text-6xl">
                  Klar for en tryggere bilhandel?
                </h2>
                <p className="mt-5 max-w-xl leading-8 text-white/65">
                  Ta kontakt for visning, spørsmål eller et konkret tilbud.
                  Målet er rask respons, enkel prosess og profesjonell oppfølging.
                </p>

                <div className="mt-8 space-y-3 text-sm text-white/75">
                  <p>Telefon: 47 16 89 76</p>
                  <p>E-post: [sett inn e-post]</p>
                  <p>Adresse: Dammyr 28B, 1605 Fredrikstad</p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/[0.025] p-6 backdrop-blur-[2px]">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Navn
                    </label>
                    <input
                      type="text"
                      placeholder="Ditt navn"
                      className="w-full rounded-xl bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/28 outline-none transition focus:bg-white/8"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Telefonnummer
                    </label>
                    <input
                      type="text"
                      placeholder="Ditt telefonnummer"
                      className="w-full rounded-xl bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/28 outline-none transition focus:bg-white/8"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">
                      Hva gjelder henvendelsen?
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Skriv gjerne hvilken bil du er interessert i, om du har innbytte, eller om du ønsker finans."
                      className="w-full rounded-xl bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/28 outline-none transition focus:bg-white/8"
                    />
                  </div>

                  <button className="w-full rounded-xl bg-[#f4e8dc]/95 px-5 py-3 text-sm font-semibold text-black transition hover:opacity-95">
                    Send henvendelse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/42 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 Bruktbil Partner AS</p>
          <p>Demo-nettside med varmere premium-profil og showroom-følelse.</p>
        </div>
      </footer>
    </main>
  );
}