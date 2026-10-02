'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

const CATS = ['All', ...new Set(projects.map((p) => p.category))];

export default function Portfolio() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? projects : projects.filter((p) => p.category === cat);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
          Let’s have a look at my <span className="text-blue-600">portfolio</span>.
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition ${
                cat === c ? 'bg-blue-600 text-white shadow-md' : 'border border-gray-300 text-gray-600 hover:bg-gray-200'
              }`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group relative block rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <span className="relative block w-full h-64 sm:h-72">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-14">
                  <span className="block text-xs text-gray-200 mb-1">{p.category} · {p.role}</span>
                  <span className="block text-white font-semibold text-lg">{p.title}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
