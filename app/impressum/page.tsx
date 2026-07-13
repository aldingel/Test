import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum der Privatpraxis für Psychologische Psychotherapie Lisa-Maria Aldinger, Berlin-Pankow.',
}

export default function ImpressumPage() {
  return (
    <main>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-3">
              Lisa-Maria Aldinger
              <br />
              Privatpraxis für Psychologische Psychotherapie
              <br />
              Grabbeallee 84
              <br />
              13156 Berlin
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Kontakt
            </h2>
            <p className="mt-3">
              Telefon: 01522 411 0948
              <br />
              E-Mail: pt.aldinger@gmail.com
              <br />
              Website: www.pankowpsychotherapie.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Berufsbezeichnung
            </h2>
            <p className="mt-3">
              Psychologische Psychotherapeutin (verliehen in der
              Bundesrepublik Deutschland durch das Landesamt für Gesundheit
              und Soziales von Berlin)
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Zuständige Aufsichtsbehörden
            </h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>
                Senatsverwaltung für Gesundheit, Oranienstraße 106, 10969
                Berlin, Telefon: 030 90280
              </li>
              <li>
                Kassenärztliche Vereinigung Berlin, Masurenallee 6A, 14057
                Berlin, Telefon: 030 310030
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Zuständige Kammer
            </h2>
            <p className="mt-3">
              Kammer für Psychologische Psychotherapeuten und Kinder- und
              Jugendlichenpsychotherapeuten im Land Berlin (PTK Berlin)
              <br />
              Kurfürstendamm 184, 10707 Berlin
              <br />
              Telefon: 030 8871400
              <br />
              <a
                href="http://www.psychotherapeutenkammer-berlin.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary"
              >
                www.psychotherapeutenkammer-berlin.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Berufsrechtliche Regelungen
            </h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>
                Berufsordnung der Kammer für Psychologische Psychotherapeuten
                und Kinder- und Jugendlichenpsychotherapeuten im Land Berlin
              </li>
              <li>Psychotherapeutengesetz</li>
            </ol>
            <p className="mt-3">
              Die Regelungen können bei der Psychotherapeutenkammer Berlin
              eingesehen werden.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
