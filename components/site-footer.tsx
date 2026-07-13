import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="font-serif text-lg font-medium text-foreground">
            Kontakt
          </h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
            Privatpraxis für Psychotherapie
            <br />
            M.Sc. Psych. Lisa-Maria Aldinger
            <br />
            Psychologische Psychotherapeutin
            <br />
            Grabbeallee 84, 13156 Berlin
            <br />
            <a
              href="tel:+4915224110948"
              className="underline underline-offset-2 hover:text-primary"
            >
              01522 411 0948
            </a>
            <br />
            <a
              href="mailto:pt.aldinger@gmail.com"
              className="underline underline-offset-2 hover:text-primary"
            >
              pt.aldinger@gmail.com
            </a>
          </address>
          <p className="mt-3 text-sm text-muted-foreground">
            Die Praxis ist barrierefrei.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-medium text-foreground">
            Information
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Bei der Übertragung der Daten im Internet besteht immer die
            Möglichkeit, dass diese durch unbefugte Dritte zur Kenntnis
            genommen oder auch verändert werden können. Mit der Kontaktaufnahme
            erteilen Sie mir die Einwilligung, Ihre Daten zum Zwecke der
            Kontaktaufnahme zu speichern. Ist dieser Zweck erfüllt, werden Ihre
            Daten gelöscht.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg font-medium text-foreground">
            Notfälle und Krisen
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              Der <strong className="font-medium">Berliner Krisendienst</strong>{' '}
              ist 24 Stunden am Tag erreichbar (030 390 63 00) und unterstützt
              in emotionalen Notlagen.
            </li>
            <li>
              <strong className="font-medium">Neuhland</strong> berät und hilft
              Kindern, Jugendlichen und jungen Erwachsenen in suizidalen Krisen
              (030 873 01 11, Mo–Fr 9–18 Uhr).
            </li>
            <li>
              <strong className="font-medium">LARA</strong> unterstützt Frauen,
              die Opfer von sexueller Belästigung, Missbrauch oder
              Vergewaltigung geworden sind (030 216 88 88, Mo–Fr 9–18 Uhr).
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} Privatpraxis für Psychotherapie
            Lisa-Maria Aldinger
          </p>
          <nav aria-label="Rechtliches" className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-primary hover:underline"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-primary hover:underline"
            >
              Datenschutzerklärung
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
