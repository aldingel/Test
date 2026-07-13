import type { Metadata } from 'next'
import { ContactCta } from '@/components/contact-cta'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Verhaltenstherapie, Schematherapie, Dialektisch Behaviorale Therapie (DBT), EMDR sowie Coaching und Beratung in der Privatpraxis für Psychotherapie in Berlin-Pankow. Informationen zu Kosten und Abrechnung.',
}

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        title="Therapeutische Ansätze und Angebote"
        description="Integrative Verhaltenstherapie – individuell auf Ihre Ziele und Bedürfnisse abgestimmt. Ich biete auch Videositzungen an."
      />

      {/* Verhaltenstherapie */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
          Integrative Verhaltenstherapie
        </h2>
        <div className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground">
          <p>
            Verhaltenstherapie basiert auf der Annahme, dass die Art, wie wir
            denken, fühlen und uns verhalten, zu einem maßgeblichen Teil
            erlernt ist. Vielleicht wurden wir in unserer Lebensgeschichte für
            bestimmte Verhaltensweisen belohnt (oder bestraft) oder haben
            Denk- oder Verhaltensmuster wichtiger Bezugspersonen übernommen.
            Diese Muster, die vor dem Hintergrund unserer Biografie
            verständlich sind, stehen uns heute manchmal im Weg.
          </p>
          <p className="font-medium text-foreground">
            Die gute Nachricht: Unser Gehirn ist über die gesamte Lebensspanne
            hinweg plastisch. Sie können Ihr Denken, Fühlen und Verhalten
            verändern!
          </p>
          <p>
            Als integrativ arbeitende Verhaltenstherapeutin kenne ich eine
            Vielzahl an wissenschaftlich erprobten Strategien, um Sie bei
            diesem Prozess zu unterstützen. Dabei kommen klassische
            kognitiv-verhaltenstherapeutische Strategien sowie neuere Ansätze,
            wie z.B. achtsamkeitsbasierte Methoden, Schematherapie,
            Dialektisch-Behaviorale Therapie oder EMDR zum Einsatz.
          </p>
          <p>
            Verhaltenstherapie bedeutet Hilfe zur Selbsthilfe: Ziel ist es,
            dass Sie Ihr eigener Coach und Therapeut werden, um Ihren Alltag
            wieder besser bewältigen zu können.
          </p>
        </div>

        <h3 className="mt-10 font-serif text-2xl font-medium text-foreground">
          Was bedeutet Verhaltenstherapie konkret?
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Jede Psychotherapie bei mir ist individuell auf Ihre Ziele und
          Bedürfnisse abgestimmt. Zu einer Verhaltenstherapie kann gehören:
        </p>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {[
            'Neue Verhaltensmuster einüben und im Alltag ausprobieren',
            'Sich im geschützten Rahmen in eine angstbesetzte Situation begeben, um eine korrigierende Erfahrung zu machen',
            'Das Gleichgewicht von Energie raubenden und Kraft spendenden Aktivitäten verändern',
            'Wirkungsvoll Grenzen setzen',
            'Techniken für eine verbesserte Achtsamkeit, Entspannung und Emotionsregulation erlernen',
            'Sich von hinderlichen Glaubenssätzen lösen',
            'Verhaltensmuster in Beziehungen verstehen und verändern, um die Beziehungsqualität zu verbessern',
            'Sich mit belastenden Ereignissen, Gefühlen und Gedanken in einem geschützten Raum auseinandersetzen',
          ].map((item) => (
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
      </section>

      {/* Schematherapie */}
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
            Schematherapie
          </h2>
          <div className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground">
            <p>
              Die Schematherapie nach Jeffrey E. Young folgt der Vorstellung,
              dass in verschiedenen Situationen in unserem Alltag
              unterschiedliche Facetten unserer Persönlichkeit zum Tragen
              kommen. Diese verschiedenen Facetten unserer Persönlichkeit
              nennt man in der Schematherapie &quot;Modi&quot;. Wir haben diese
              im Laufe unseres Lebens erworben, wenn Grundbedürfnisse (z.B.
              nach verlässlichen Beziehungen, Halt, Kontrolle oder einem
              positiven Selbstwertgefühl) nicht ausreichend erfüllt waren.
            </p>
            <p>
              Schematherapie kann helfen, belastende Muster aufzulösen und
              neue Wege zu beschreiten. Zunächst wird in der Therapie ein
              Verständnis der eigenen Schemata und Modi sowie deren Entstehung
              in der Biografie erarbeitet. Dieses sogenannte
              &quot;Modusmodell&quot;, das als &quot;innere Landkarte&quot;
              funktioniert, macht es leichter, das eigene Verhalten und
              Erleben einzuordnen, anzunehmen und zu verstehen. Typisch sind
              Imaginationsübungen und die Arbeit mit Stühlen oder Symbolen.
            </p>
            <p>
              Schematherapie ist anwendbar bei vielen psychischen Symptomen
              oder Belastungen, insbesondere jedoch, wenn es um
              Schwierigkeiten in der Beziehung zu anderen Menschen oder um die
              Loslösung aus hinderlichen Verhaltensmustern geht. Empirisch
              überprüft wurde diese Therapieform besonders zur Behandlung von
              Persönlichkeitsstörungen, insbesondere der Borderlinestörung.
              Mittlerweile gibt es auch wissenschaftliche Studien zur
              Behandlung von Depression, Posttraumatischer Belastungsstörung
              und Essstörungen mithilfe von Schematherapie.
            </p>
          </div>
        </div>
      </section>

      {/* EMDR */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
          EMDR
        </h2>
        <div className="mt-6 flex flex-col gap-5 leading-relaxed text-muted-foreground">
          <p>
            EMDR steht für Eye Movement Desensitization and Reprocessing –
            übersetzt: Desensibilisierung und Verarbeitung durch
            Augenbewegungen. Die Methode wurde von Francine Shapiro
            entwickelt. Bei EMDR werden belastende Situationen unter
            Zuhilfenahme von sogenannter bilateraler Stimulation vorgestellt
            und bearbeitet. Die Methode wird häufig verglichen mit einer
            Zugfahrt: Der/die Patient_in sitzt im Zug und kann durch das
            Fenster das Erlebte aus sicherer Entfernung noch einmal an sich
            vorbeiziehen lassen. Dabei entsteht eine hilfreichere Neubewertung
            des Geschehenen, sodass die belastende Symptomatik zurückgeht.
          </p>
          <p>
            Die Herstellung einer vertrauensvollen Beziehung sowie
            stabilisierende Techniken sind wichtiger Bestandteil der
            Behandlung mit EMDR. Klient_innen wird so ermöglicht, sich in
            einem sicheren Rahmen mit belastenden Situationen
            auseinanderzusetzen.
          </p>
          <p>
            Die Wirksamkeit von EMDR zur Behandlung von Traumafolgestörungen
            ist sehr gut belegt. Der wissenschaftliche Beirat Psychotherapie
            hat EMDR als wissenschaftlich begründete Therapiemethode zur
            Behandlung der Posttraumatischen Belastungsstörung anerkannt. Die
            klinische Erfahrung zeigt, dass EMDR auch bei der Behandlung von
            Ängsten, Panikattacken, Depression, Schmerz und Trauerreaktionen
            hilfreich ist.
          </p>
        </div>
      </section>

      {/* DBT + Coaching */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <article className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Dialektisch Behaviorale Therapie (DBT)
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mit Dialektisch Behavioraler Therapie (nach Linehan) lernen Sie,
              mit intensiven Gefühlen umzugehen und schädigende
              Verhaltensmuster zu verändern. Bei Fragen zu diesem Angebot
              kontaktieren Sie mich gerne direkt.
            </p>
          </article>
          <article className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Coaching und Beratung
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              An einem Wendepunkt? In meiner Praxis biete ich auch Coaching
              und Beratung an. Bei Fragen zu diesem Angebot kontaktieren Sie
              mich gerne direkt.
            </p>
          </article>
        </div>
      </section>

      {/* Kosten */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-balance font-serif text-3xl font-medium text-foreground md:text-4xl">
          Kosten und Abrechnung
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          <article className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Private Krankenversicherung
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Kosten für eine ambulante Psychotherapie werden in der Regel von
              den privaten Krankenkassen übernommen. Da sich die Versicherer
              in ihren Angeboten unterscheiden, empfehle ich Ihnen, sich
              rechtzeitig zu erkundigen, ob und in welchem Umfang
              Psychotherapie in Ihrem Versicherungstarif enthalten ist.
              Grundlage der Abrechnung ist die GOP (Gebührenordnung für
              Psychotherapeuten). Formal finden bei privat Versicherten vier
              sogenannte probatorische Sitzungen statt; im Anschluss beantrage
              ich ein Stundenkontingent bei der Kasse (GOP-Ziffer 870).
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Beihilfe
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Die Beihilfestellen übernehmen in der Regel die Kosten einer
              ambulanten Psychotherapie. Dafür ist ein Antrag auf
              Kostenübernahme notwendig. Die entsprechenden Formulare können
              Sie bei Ihrer Beihilfestelle anfordern. Die schriftliche
              Beantragung erfolgt nach den fünf probatorischen Sitzungen –
              diese sind antragsfrei. Grundlage der Abrechnung ist auch hier
              die GOP.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Heilfürsorge für Bundeswehr und Bundespolizei
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              2018 wurde eine Vereinbarung zwischen der
              Bundespsychotherapeutenkammer und dem Bundesministerium für
              Verteidigung getroffen, die eine Psychotherapie in einer freien
              Privatpraxis ermöglicht. Bei einem Therapiewunsch konsultieren
              Sie vorher Ihren Truppenarzt. Dieser stellt Ihnen eine passende
              Kostenübernahmeerklärung aus.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Selbstzahler
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Coaching- und Beratungsangebote werden grundsätzlich nicht von
              der Krankenkasse übernommen. Auch bei einer Psychotherapie
              besteht die Möglichkeit, die Kosten selbst zu tragen. Es
              entsteht dann keine Pause für die Antragsprüfung und es gibt
              keine Mitteilung an Ihre Krankenkasse über die Durchführung der
              Psychotherapie. Das Honorar richtet sich nach der
              Gebührenordnung für Psychotherapeuten (GOP). Der Regelsatz für
              ein Erstgespräch (50 Minuten) beträgt aktuell um die 130 €. Es
              fallen auch Kosten zusätzlich zur Sitzungsgebühr an (z.B. für
              das Erstellen einer biografischen Anamnese und die Auswertung
              diagnostischer Fragebögen). Sie erhalten ca. alle 8 Wochen eine
              Rechnung.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Gesetzliche Krankenversicherung
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Als approbierte Psychologische Psychotherapeutin mit
              Arztregistereintrag in der Kassenärztlichen Vereinigung Berlin
              bin ich für die Durchführung von Psychotherapie grundsätzlich
              zugelassen. Ich verfüge jedoch NICHT über die
              Abrechnungsgenehmigung für die gesetzlichen Krankenkassen
              (&quot;Kassensitz&quot;). Sollten Sie sich dennoch für eine
              Psychotherapie bei mir entscheiden, müssen Sie die Kosten selbst
              tragen. In Einzelfällen kann es sein, dass Ihre Kasse Ihnen
              diese Kosten im Rahmen des Kostenerstattungsverfahrens
              erstattet.
            </p>
          </article>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Sollte Ihre Versicherung Fragen zu meiner Qualifikation haben,
          können Sie gerne meinen Arztregistereintrag der KV Berlin nennen
          (35255).
        </p>
      </section>

      <ContactCta />
    </main>
  )
}
