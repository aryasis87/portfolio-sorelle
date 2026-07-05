import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog — Sorelle' };

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Blog" title="Thoughts &" accent="writing." subtitle="Notes on design, process, and building products people love." />

      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto grid gap-5 px-4">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <a href="/contact" className="group flex flex-col justify-between gap-4 rounded-2xl bg-gray-50 p-6 transition hover:bg-blue-50 sm:flex-row sm:items-center md:p-8">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 font-medium text-blue-700">{p.category}</span>
                    <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 md:text-2xl">{p.title}</h2>
                  <p className="mt-2 text-gray-600">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
