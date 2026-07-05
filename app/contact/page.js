'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true); // TODO: hubungkan ke backend/email
  };

  const field = 'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s work" accent="together." subtitle="Open for freelance & collaboration. Tell me about your project and I’ll get back to you." />

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-5">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Info icon={MapPin} label="Location" value={profile.location} />
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" /> Available for new projects
              </span>
              <p className="mt-2 text-sm text-gray-600">Currently booking projects for the next quarter.</p>
            </div>
            <div className="flex flex-wrap gap-5 pt-1">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 transition hover:text-blue-600">{s.label}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={28} /></div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">Message sent!</h2>
                <p className="mt-1 text-gray-600">Thanks, {form.name}. I’ll reply to {form.email} soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 rounded-full border border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={field} />
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="Your email" required className={field} />
                </div>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project…" rows={6} required className={`${field} resize-none`} />
                <button type="submit" className="w-full rounded-full bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={20} /></span>
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="mt-0.5 font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
