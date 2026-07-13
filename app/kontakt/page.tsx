import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Video } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie die Privatpraxis für Psychotherapie Lisa-Maria Aldinger in Berlin-Pankow – Grabbeallee 84, 13156 Berlin. Am leichtesten per E-Mail erreichbar.',
}

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Ich freue mich, Sie kennenzulernen."
        description="Ob Sie einen Erstgesprächstermin möchten oder Fragen zu Beratung und Therapie haben – zögern Sie nicht, mich zu kontaktieren. Am leichtesten bin ich per E-Mail erreichbar. Ich melde mich schnellstmöglich zurück."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Praxisdaten
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <MapPin
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-muted-foreground">
                    Privatpraxis für Psychotherapie
                    <br />
                    M.Sc. Psych. Lisa-Maria Aldinger
                    <br />
                    Psychologische Psychotherapeutin
                    <br />
                    Grabbeallee 84, 13156 Berlin
                  </address>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Die Praxis ist barrierefrei.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-foreground">E-Mail</p>
                  <a
                    href="mailto:pt.aldinger@gmail.com"
                    className="mt-1 inline-block text-sm text-muted-foreground underline underline-offset-2 hover:text-primary"
                  >
                    pt.aldinger@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Telefon</p>
                  <a
                    href="tel:+4915224110948"
                    className="mt-1 inline-block text-sm text-muted-foreground underline underline-offset-2 hover:text-primary"
                  >
                    01522 411 0948
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Video className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Videositzungen</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Ich biete auch Videositzungen an.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Karte: Grabbeallee 84, 13156 Berlin"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.3960%2C52.5710%2C13.4120%2C52.5790&layer=mapnik&marker=52.5750%2C13.4040"
                className="h-72 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Nachricht senden
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Bei der Übertragung der Daten im Internet besteht immer die
              Möglichkeit, dass diese durch unbefugte Dritte zur Kenntnis
              genommen oder auch verändert werden können. Mit der
              Kontaktaufnahme erteilen Sie mir die Einwilligung, Ihre Daten
              zum Zwecke der Kontaktaufnahme zu speichern. Ist dieser Zweck
              erfüllt, werden Ihre Daten gelöscht.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <h2 className="font-serif text-2xl font-medium text-foreground">
            Notfälle und Krisen
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-medium text-foreground">
                Berliner Krisendienst
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                24 Stunden am Tag erreichbar und unterstützt in emotionalen
                Notlagen.
              </p>
              <a
                href="tel:0303906300"
                className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
              >
                030 390 63 00
              </a>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-medium text-foreground">Neuhland</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Berät und hilft Kindern, Jugendlichen und jungen Erwachsenen in
                suizidalen Krisen (Mo–Fr 9–18 Uhr).
              </p>
              <a
                href="tel:0308730111"
                className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
              >
                030 873 01 11
              </a>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="font-medium text-foreground">LARA</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Unterstützt Frauen, die Opfer von sexueller Belästigung,
                Missbrauch oder Vergewaltigung geworden sind (Mo–Fr 9–18 Uhr).
              </p>
              <a
                href="tel:0302168888"
                className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
              >
                030 216 88 88
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
