import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung der Privatpraxis für Psychologische Psychotherapie Lisa-Maria Aldinger, Berlin-Pankow.',
}

export default function DatenschutzPage() {
  return (
    <main>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Welche personenbezogenen Daten werden erhoben?
            </h2>
            <p className="mt-3">
              Es werden personenbezogene Daten nur dann erhoben und genutzt,
              wenn ein gesetzlicher Grund für die Erhebung und Nutzung
              vorliegt. Wir erheben und verwenden personenbezogene Daten nur,
              soweit dies zur Bereitstellung einer funktionsfähigen Webseite
              sowie unserer Inhalte und Leistungen erforderlich ist.
            </p>
            <p className="mt-3">
              Als personenbezogene Daten gelten sämtliche Informationen, die
              dazu dienen, einen Rückschluss auf Ihre Person zuzulassen (z.B.
              Vor- und Nachname, E-Mail-Adresse, Telefonnummer).
            </p>
            <p className="mt-3">
              Aufgrund Ihrer freiwilligen Eingaben auf der Webseite erheben
              wir Daten auf dem Kontaktformular (Vor- und Nachname und Ihre
              E-Mail-Adresse). Die von Ihnen eingegebenen Daten dienen alleine
              der Kontaktaufnahme und werden gelöscht, sobald sie für die
              Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich
              sind. Weitere Daten erheben wir nicht.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Welche Informationen werden noch erfasst?
            </h2>
            <p className="mt-3">
              Beim Aufruf der Webseite wird Ihre IP-Adresse mit dem Zeitpunkt
              und Inhalt Ihres Abrufs einschließlich der übertragenen
              Datenmenge und der Meldung, ob der Abruf erfolgreich war,
              erfasst. Die vorübergehende Speicherung der IP-Adresse erfolgt,
              um die Funktionsfähigkeit der Webseite sicherzustellen. Diese
              Daten werden nach Ende des Zugriffs auf die Webseite gelöscht,
              weil mit der Erreichung des Zweckes die Erhebung nicht mehr
              erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Auf welche Weise werden Daten erfasst?
            </h2>
            <p className="mt-3">
              Die Daten, die bei jedem Zugriff der Seite erhoben werden,
              werden automatisch protokolliert; ansonsten nur aufgrund Ihrer
              Eingabe.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Wofür werden die Daten genutzt?
            </h2>
            <p className="mt-3">
              Die Daten werden ausschließlich zur Bereitstellung, Optimierung
              und Sicherheit des Internetangebots genutzt. Mit Ihrer
              Einwilligung werden Ihre Daten nur zur Entgegennahme Ihrer
              Mitteilung genutzt.
            </p>
            <p className="mt-3">
              Die Daten werden nicht genutzt zur Profilbildung oder zu
              Werbezwecken und werden nicht an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Welche Rechte haben Besucher_innen der Webseite?
            </h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft über die zu Ihrer Person
              gespeicherten Daten sowie das Recht auf Berichtigung, Löschung
              oder Einschränkung der Verarbeitung. Sie können eine erteilte
              Einwilligung jederzeit widerrufen und haben das Recht, sich bei
              der zuständigen Aufsichtsbehörde zu beschweren.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium text-foreground">
              Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              Lisa-Maria Aldinger
              <br />
              Privatpraxis für Psychologische Psychotherapie
              <br />
              Grabbeallee 84, 13156 Berlin
              <br />
              E-Mail: pt.aldinger@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
