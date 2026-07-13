import Link from 'next/link'

export function ContactCta() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-24">
        <h2 className="max-w-2xl text-balance font-serif text-3xl font-medium text-accent-foreground md:text-4xl">
          Ich freue mich, Sie kennenzulernen.
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-accent-foreground/85">
          Ob Sie einen Erstgesprächstermin möchten oder Fragen zu Beratung und
          Therapie haben – zögern Sie nicht, mich zu kontaktieren. Am
          leichtesten bin ich per E-Mail erreichbar. Ich melde mich
          schnellstmöglich zurück.
        </p>
        <Link
          href="/kontakt"
          className="rounded-full bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
        >
          Termin vereinbaren
        </Link>
      </div>
    </section>
  )
}
