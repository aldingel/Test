import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactCta } from '@/components/contact-cta'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Ablauf',
  description:
    'So läuft eine Psychotherapie in der Privatpraxis Aldinger in Berlin-Pankow ab: Kennenlernen, gemeinsames Verstehen, Ziele setzen, ins Handeln kommen, Überprüfen und Anpassen.',
}

const steps = [
  {
    number: '01',
    title: 'Kennenlernen.',
    text: 'Die ersten Stunden einer Psychotherapie bieten die Gelegenheit zum gegenseitigen Kennenlernen: Mir ist es wichtig, dass Sie schauen, ob Sie sich mit mir ausreichend wohlfühlen, ob sozusagen "die Chemie stimmt". Denn eine vertrauensvolle Arbeitsbeziehung ist ein wichtiger Faktor für das Gelingen einer Therapie. Um das herauszufinden, kann es auch hilfreich sein, bei mehreren Psychotherapeut_innen Erstgespräche in Anspruch zu nehmen. Ich prüfe ebenfalls, ob ich Ihnen eine gute Behandlung anbieten kann, und gebe Ihnen eine Rückmeldung, wenn ich denke, dass Sie in einer anderen Praxis besser aufgehoben sind.',
  },
  {
    number: '02',
    title: 'Gemeinsam Verstehen.',
    text: 'Während der ersten Sitzungen erhalte ich ein detailliertes Bild Ihrer Symptome, Belastungen, Anliegen und Veränderungsziele. Auch Ihre Stärken, die sogenannten Ressourcen, sollen hier Beachtung finden, denn sie spielen eine wichtige Rolle auf dem Weg zur Veränderung. Wir machen uns gemeinsam ein genaueres Bild Ihrer Beschwerden und entwickeln eine Vorstellung, wie diese entstanden sind und was aktuell eine Besserung verhindert.',
  },
  {
    number: '03',
    title: 'Ziele setzen.',
    text: 'Der nächste Schritt besteht im Konkretisieren Ihrer Ziele: Was soll sich in Ihrem Leben verändern? Was soll wieder möglich werden? Was, das Sie aktuell vermissen, möchten Sie wieder tun können? Und woran würden Sie, ich oder Menschen in Ihrem Umfeld es merken, wenn dies gelungen ist?',
  },
  {
    number: '04',
    title: 'Ins Handeln kommen.',
    text: 'Ist dies geschafft, wählen wir individuell auf Sie zugeschnittene, konkrete Schritte (sogenannte Interventionen) aus, die Sie dem gewünschten Ziel näherbringen können. Dies kann das Einüben neuer Verhaltensweisen, die Beschäftigung mit und Veränderung von Gedankenmustern, das Lernen von Entspannungs- oder Achtsamkeitstechniken und vieles mehr beinhalten.',
  },
  {
    number: '05',
    title: 'Überprüfen und Anpassen.',
    text: 'Immer wieder schauen wir, ob diese Schritte noch für Sie passend und erfolgreich sind. Wenn nötig, werden wir dann Ziele oder Schritte auf dem Weg zu Ihrem Ziel anpassen.',
  },
]

export default function AblaufPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ablauf"
        title="Wie eine Psychotherapie abläuft"
        description="Schritt für Schritt – in Ihrem Tempo und individuell auf Sie abgestimmt."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <ol className="flex flex-col gap-10">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-6">
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-lg font-medium text-primary"
                >
                  {step.number}
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="relative hidden overflow-hidden rounded-2xl shadow-sm lg:block">
            <Image
              src="/images/forest-path.png"
              alt="Ruhiger Waldweg im weichen Morgenlicht"
              fill
              className="object-cover"
              sizes="340px"
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  )
}
