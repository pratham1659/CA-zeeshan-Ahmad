import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import { Field, Input, Select, Textarea } from '../components/ui/Field'
import { services } from '../data/services'
import { site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import { submitForm } from '../lib/submitForm'

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email'),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,14}$/, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please choose a service'),
  message: z.string().trim().min(10, 'Please tell us a little more (at least 10 characters)'),
  consent: z.literal('on', { error: 'Please agree so we can contact you' }),
})

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  usePageTitle('Contact')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: bots fill hidden fields, humans don't
    if (data.get('website')) return

    const result = schema.safeParse(Object.fromEntries(data))
    if (!result.success) {
      const next: Errors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors
        next[key] ??= issue.message
      }
      setErrors(next)
      return
    }
    setErrors({})

    setStatus('sending')
    const { consent: _consent, ...values } = result.data
    const ok = await submitForm(`New enquiry from ${values.name}`, values)
    if (ok) form.reset()
    setStatus(ok ? 'success' : 'error')
  }

  const err = (k: keyof Errors) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
  })

  return (
    <Section eyebrow="Contact" title="Let's talk" intro="Send us your question and we will get back to you within one business day.">
      <div className="grid gap-10 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          {status === 'success' ? (
            <div role="status" className="py-10 text-center">
              <Icon name="check" size={48} className="mx-auto text-leaf-dark" />
              <h3 className="mt-4 text-xl font-bold">Thank you!</h3>
              <p className="mt-2 text-muted">We have received your message and will be in touch shortly.</p>
              <Button className="mt-6" variant="secondary" onClick={() => setStatus('idle')}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}>
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" {...err('name')} />
                </Field>
                <Field id="phone" label="Phone" error={errors.phone}>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" {...err('phone')} />
                </Field>
              </div>
              <Field id="email" label="Email" error={errors.email}>
                <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" {...err('email')} />
              </Field>
              <Field id="service" label="Service you need" error={errors.service}>
                <Select id="service" name="service" defaultValue="" {...err('service')}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </Select>
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <Textarea id="message" name="message" rows={5} placeholder="How can we help?" {...err('message')} />
              </Field>

              {/* Honeypot field, hidden from users and screen readers */}
              <div className="hidden" aria-hidden="true">
                <input name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" name="consent" className="mt-1 size-5 accent-accent" {...err('consent')} />
                  I agree to be contacted about my enquiry.
                </label>
                {errors.consent && (
                  <p id="consent-error" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.consent}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <p role="alert" className="rounded-xl p-3 text-sm border border-red-200 bg-red-50 text-red-700">
                  Sorry, we could not send your message. Please call or email us directly.
                </p>
              )}

              <Button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto">
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          )}
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h3 className="mb-4 text-lg font-bold">Contact details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="phone" size={20} className="shrink-0 text-leaf-dark" />
                <div className="space-y-1">
                  {site.phones.map((p) => (
                    <a key={p.href} href={p.href} className="block transition hover:text-accent hover:underline">
                      {p.display} <span className="text-muted">({p.label})</span>
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" size={20} className="shrink-0 text-leaf-dark" />
                <div className="min-w-0 space-y-1">
                  {site.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block break-all transition hover:text-accent hover:underline">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" size={20} className="shrink-0 text-leaf-dark" />
                <a href={site.mapHref} target="_blank" rel="noreferrer" className="transition hover:text-accent hover:underline">
                  {site.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={20} className="shrink-0 text-leaf-dark" />
                <span>{site.hours}</span>
              </li>
            </ul>
            <Button href={site.whatsappHref} target="_blank" rel="noreferrer" variant="secondary" className="mt-6 w-full">
              <Icon name="whatsapp" size={20} /> Chat on WhatsApp
            </Button>
          </Card>
          <div className="overflow-hidden rounded-2xl border border-accent/15 shadow-card">
            <iframe
              title="Office location map"
              src={site.mapEmbedSrc}
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-64 w-full border-0"
              loading="lazy"
            />
            <a
              href={site.mapHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-t border-accent/15 bg-white px-4 py-3 font-semibold text-accent transition hover:bg-gold-light active:scale-95"
            >
              <Icon name="pin" size={20} /> Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
