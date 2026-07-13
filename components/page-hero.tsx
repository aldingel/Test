export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b border-border/60 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-sm uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
