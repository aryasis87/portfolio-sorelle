'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', 'UI/UX', 'Web', 'App', 'Branding'];

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected" accent="projects." subtitle="A mix of UI/UX, web, app, and branding work I’m proud of." />

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.a
                  key={p.title}
                  href="#"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 backdrop-blur">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">{p.title}</h3>
                      <span className="text-xs text-gray-400">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
