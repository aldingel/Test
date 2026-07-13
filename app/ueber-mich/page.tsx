import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactCta } from '@/components/contact-cta'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Behandlungsphilosophie, Qualifikationen und Werdegang von M.Sc. Psych. Lisa-Maria Aldinger, Psychologische Psychotherapeutin (Verhaltenstherapie) in Berlin-Pankow.',
}

const spectrum = [
  'Borderline Persönlichkeitsstörung, Probleme im Umgang mit Emotionen, selbstverletzendes Verhalten oder Suizidgedanken',
  'Depressionen',
  'Schwierigkeiten bei der Bewältigung von belastenden Erlebnissen, Traumatherapie, sexualisierte Gewalt, Posttraumatische Belastungsstörung',
  'Schwierigkeiten in Partnerschaften und anderen Beziehungen, sog. "Persönlichkeitsstörungen"',
  '"Queere" Themen, z.B. sexuelle Identität und Orientierung, Coming Out',
  'Selbstwert, Schwierigkeiten, Grenzen zu setzen',
  'Ängste, Panik und Phobien',
  'Krisen',
  'Burnout oder andere Probleme am Arbeitsplatz',
  'Bipolare Erkrankungen',
  'Schlafstörungen',
  'Essstörungen – Bulimie oder Binge-Eating-Störung',
  'Zwänge',
  'Psychosen, z.B. Schizophrenie',
]

const career = [
  {
    period: 'seit 2018',
    text: 'Ambulante psychotherapeutische Tätigkeit an der Berliner Fortbildungsakademie im Einzel- und Gruppensetting',
  },
  {
    period: '2018',
    text: 'Psychologin am Vivantes-Humboldt Klinikum Berlin',
  },
  {
    period: '2018–2019',
    text: 'Psychologin am Immanuel-Klinikum Rüdersdorf',
  },
  {
    period: '2014–2018',
    text: 'Psychologische Beratung bei LARA Fachstelle gegen sexualisierte Gewalt an Frauen*',
  },
]

const education = [
  {
    period: 'seit 2019',
    text: 'Weiterbildung Gruppenpsychotherapie',
  },
  {
    period: 'seit 2019',
    text: 'Weiterbildung in EMDR (Eye Movement Desensitization and Reprocessing), Institut für Traumatherapie, Berlin',
  },
  {
    period: '2016–2020',
    text: 'Ausbildung zur Psychologischen Psychotherapeutin mit Schwerpunkt Verhaltenstherapie, Berliner Fortbildungsakademie',
  },
  {
    period: '2014–2016',
    text: 'Master of Science in Klinischer Psychologie, Freie Universität Berlin',
  },
  {
    period: '2010–2014',
    text: 'Bachelor of Science Psychologie, Humboldt-Universität zu Berlin und University of the Western Cape, Kapstadt',
  },
]

export default function UeberMichPage() {
  return (
    <main>
      <PageHero
        eyebrow="Über mich"
        title="Behandlungsphilosophie"
        description="M.Sc. Psych. Lisa-Maria Aldinger – Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              Meine Arbeit basiert auf der integrativen Verhaltenstherapie,
              welche neue verhaltenstherapeutische Ansätze (z.B. Schematherapie
              oder Dialektisch Behaviorale Therapie) mit klassisch
              kognitiv-verhaltenstherapeutischen Methoden kombiniert. Ich
              orientiere mich dabei an den neuesten wissenschaftlichen
              Erkenntnissen.
            </p>
            <p>
              Ich schätze es sehr, durch meine Arbeit im Kontakt mit vielen
              verschiedenen Menschen zu sein und diese auf dem Weg zu mehr
              Lebensqualität begleiten zu dürfen.
            </p>
            <p>
              Ich lege Wert auf Transparenz und eine vertrauensvolle Beziehung,
              die von Akzeptanz und Wertschätzung geprägt ist. Wichtig sind mir
              auch ein individuell auf Sie zugeschnittenes Behandlungskonzept
              sowie die Nutzung Ihrer individuellen Stärken und Kraftquellen
              für die Bewältigung von Schwierigkeiten.
            </p>
            <p>
              Ich arbeite gerne mit Methoden der Schematherapie, der
              Dialektisch Behavioralen Therapie (nach Linehan) und des EMDR.
              Auch Gewaltfreie Kommunikation (nach Marshall B. Rosenberg) und
              Achtsames Selbstmitgefühl (&quot;Mindful Self-Compassion&quot;
              nach Kristin Neff) finden Eingang in meine therapeutische Arbeit.
            </p>
            <p>
              Selbstverständlich arbeite ich mit Klient_innen aller
              Geschlechtsidentitäten und sexuellen Orientierungen.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
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

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
            Behandlungsspektrum
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Als Psychologische Psychotherapeutin mit Schwerpunkt
            Verhaltenstherapie bin ich für die Behandlung des gesamten
            Spektrums an psychischen Erkrankungen ausgebildet. Hier ein
            Ausschnitt des Behandlungsspektrums:
          </p>
          <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {spectrum.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Bisherige berufliche Tätigkeit
            </h2>
            <ul className="mt-8 flex flex-col gap-6 border-l-2 border-primary/30 pl-6">
              {career.map((item) => (
                <li key={item.text}>
                  <p className="text-sm font-medium text-primary">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Aus- und Weiterbildungen
            </h2>
            <ul className="mt-8 flex flex-col gap-6 border-l-2 border-primary/30 pl-6">
              {education.map((item) => (
                <li key={item.text}>
                  <p className="text-sm font-medium text-primary">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-secondary p-8">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Mitgliedschaften
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
            <li>Mitglied der Psychotherapeutenkammer Berlin</li>
            <li>
              Mitglied der Deutschen Psychotherapeutenvereinigung (DPtV)
            </li>
            <li>Eintrag ins Arztregister der KV Berlin</li>
          </ul>
        </div>
      </section>

      <ContactCta />
    </main>
  )
}
