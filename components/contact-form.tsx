'use client'

import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Kontaktanfrage über die Website von ${name}`
    )
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:pt.aldinger@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-y rounded-xl border border-input bg-card px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
      >
        Nachricht per E-Mail senden
      </button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten
        Nachricht.
      </p>
    </form>
  )
}
