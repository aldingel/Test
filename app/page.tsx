import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ContactCta } from '@/components/contact-cta'

const specialties = [
  {
    title: 'Wenn Angst das Leben einschränkt',
    text: 'So werden Sie mithilfe der kognitiven Verhaltenstherapie wieder Chef_in im Kopf.',
  },
  {
    title: 'Meine innere Welt verstehen',
    text: 'Wie Sie sich mithilfe der Schematherapie von alten Mustern lösen.',
  },
  {
    title: 'Dem Leben wieder Farbe geben',
    text: 'Wie kognitive Verhaltenstherapie bei der Bewältigung von Depression hilft.',
  },
  {
    title: 'Chaos der Gefühle',
    text: 'Mit Dialektisch Behavioraler Therapie (DBT) lernen Sie, mit Gefühlen umzugehen und schädigende Verhaltensmuster zu verändern.',
  },
  {
    title: 'Belastendes verarbeiten',
    text: 'EMDR (Eye Movement Desensitization and Reprocessing) hilft, Traumata und belastende Erfahrungen zu verarbeiten.',
  },
  {
    title: 'An einem Wendepunkt?',
    text: 'In meiner Praxis biete ich auch Coaching und Beratung an – für berufliche und persönliche Umbruchphasen.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[480px] w-full">
          <Image
            src="/images/hero-forest.png"
            alt="Wald im sanften Morgenlicht"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/35" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
              <p className="text-sm uppercase tracking-widest text-background/80">
                Privatpraxis für Psychotherapie in Berlin-Pankow
              </p>
              <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-medium leading-tight text-background md:text-5xl lg:text-6xl">
                Raum für Veränderung – ruhig, wertschätzend, wissenschaftlich
                fundiert.
              </h1>
              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-background/90">
                Verhaltenstherapie, Schematherapie, DBT und EMDR bei M.Sc.
                Psych. Lisa-Maria Aldinger, Psychologische Psychotherapeutin.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                >
                  Erstgespräch anfragen
                </Link>
                <Link
                  href="/leistungen"
                  className="rounded-full border border-background/60 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background/10"
                >
                  Mein Angebot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelle Info */}
      <section className="border-b border-border/60 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <p className="text-pretty text-center text-sm leading-relaxed text-secondary-foreground">
            <span className="font-medium">Aktuell:</span> Zurzeit biete ich
            Therapieplätze für eine bald startende Schematherapiegruppe an.
            Nach einem Erstgespräch finden die Gruppensitzungen am
            Donnerstagvormittag statt. Meine Praxisadresse ist die Grabbeallee
            84, 13156 Berlin.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-balance font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
              Herzlich willkommen in meiner Praxis.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Diese Seiten bieten Ihnen die Gelegenheit, sich über mein Angebot
              zu informieren. Ich biete auch Videositzungen an.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Bitte beachten Sie, dass es sich um eine Privatpraxis handelt.
              Eine Behandlung ist daher ausschließlich für Selbstzahler*innen,
              Privatversicherte sowie gesetzlich Versicherte im Rahmen des
              Kostenerstattungsverfahrens möglich.
            </p>
            <Link
              href="/ueber-mich"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Mehr über mich erfahren
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/leaves-soft.png"
              alt="Grüne Blätter im sanften Sonnenlicht"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Wie ich Sie unterstützen kann */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <h2 className="text-balance text-center font-serif text-3xl font-medium text-foreground md:text-4xl">
            Wie ich Sie unterstützen kann
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
            Als Psychologische Psychotherapeutin mit Schwerpunkt
            Verhaltenstherapie bin ich für die Behandlung des gesamten
            Spektrums an psychischen Erkrankungen ausgebildet.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl bg-card p-7 shadow-sm"
              >
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Alle Leistungen im Überblick
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Über die Therapeutin */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl shadow-sm md:order-first">
            <Image
              src="/images/moss-stone.png"
              alt="Weiches Moos auf einem Stein in ruhigem Licht"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">
              Über mich
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
              M.Sc. Psych. Lisa-Maria Aldinger
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Meine Arbeit basiert auf der integrativen Verhaltenstherapie,
              welche neue verhaltenstherapeutische Ansätze wie Schematherapie
              oder Dialektisch Behaviorale Therapie mit klassisch
              kognitiv-verhaltenstherapeutischen Methoden kombiniert. Ich
              orientiere mich dabei an den neuesten wissenschaftlichen
              Erkenntnissen.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ich lege Wert auf Transparenz und eine vertrauensvolle Beziehung,
              die von Akzeptanz und Wertschätzung geprägt ist.
            </p>
            <Link
              href="/ueber-mich"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Zur Behandlungsphilosophie
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ablauf Teaser */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">
              Ablauf
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
              Wie eine Therapie bei mir abläuft
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Die ersten Stunden bieten Gelegenheit zum gegenseitigen
              Kennenlernen. Gemeinsam entwickeln wir ein Verständnis Ihrer
              Anliegen, setzen konkrete Ziele und wählen individuell auf Sie
              zugeschnittene Schritte, die Sie Ihrem Ziel näherbringen.
            </p>
            <Link
              href="/ablauf"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Den Ablauf kennenlernen
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/forest-path.png"
              alt="Ruhiger Waldweg im weichen Morgenlicht"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  )
}
