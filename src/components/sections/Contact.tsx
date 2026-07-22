import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { personal, emailjsConfig } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const isEmailjsConfigured = Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey);

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    setStatus('sending');

    if (isEmailjsConfigured) {
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message },
          emailjsConfig.publicKey
        );
        setStatus('sent');
        reset();
      } catch {
        setStatus('error');
      }
    } else {
      // Fallback: EmailJS isn't configured yet, so open the visitor's mail client instead.
      const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `${data.message}\n\n— ${data.name} (${data.email})`
      )}`;
      window.location.href = mailto;
      setStatus('sent');
      reset();
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          description="Open to software engineer roles and interesting conversations. I usually reply within a day."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark bg-surface-raised dark:bg-surface-dark-elevated px-3 py-1 text-xs font-medium text-ink-muted dark:text-ink-inverse-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              {personal.status}
            </div>
            <div className="card-surface p-6 space-y-5">
              <ContactRow icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <ContactRow icon={Phone} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, '')}`} />
              <ContactRow icon={MapPin} label="Location" value={personal.location} />
            </div>
            <div className="card-surface p-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/vijayakumar2006"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex-1 justify-center !py-2.5"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/vijayakumarbtech"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex-1 justify-center !py-2.5"
              >
                <GithubIcon size={15} /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="card-surface p-6 sm:p-8 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register('name', { required: 'Please enter your name' })}
                    className="input-field"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                    })}
                    className="input-field"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                </Field>
              </div>
              <Field label="Subject" error={errors.subject?.message}>
                <input
                  {...register('subject', { required: 'Please add a subject' })}
                  className="input-field"
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                />
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register('message', {
                    required: 'Please add a message',
                    minLength: { value: 10, message: 'Message is too short' },
                  })}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me a bit about the role or project…"
                  aria-invalid={!!errors.message}
                />
              </Field>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-brand-emerald-tint dark:bg-brand-emerald-dark/10 px-4 py-3 text-sm text-brand-emerald dark:text-brand-emerald-dark"
                  >
                    <CheckCircle2 size={16} />
                    {isEmailjsConfigured
                      ? 'Message sent — thanks for reaching out!'
                      : 'Opening your email client to send this message…'}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                  >
                    Something went wrong — please email me directly at {personal.email}.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-tint dark:bg-surface-dark-elevated text-brand-emerald dark:text-brand-emerald-dark">
        <Icon size={15} />
      </div>
      <div>
        <p className="text-xs text-ink-subtle">{label}</p>
        <p className="text-sm font-medium text-ink dark:text-ink-inverse">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-muted dark:text-ink-inverse-muted mb-1.5 block">{label}</span>
      {children}
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </label>
  );
}
