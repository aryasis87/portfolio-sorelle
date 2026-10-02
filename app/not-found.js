import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main>
      <PageHeader kicker="Error 404" title="This page" accent="wandered off." subtitle="It doesn’t exist, or it has moved. The projects and the notes are still right where you left them." />
      <section className="bg-white px-4 pb-24">
        <div className="container mx-auto flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            <ArrowLeft size={16} aria-hidden="true" /> Back home
          </Link>
          <Link href="/work" className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
