// app/page.js
import Hero from '@/components/Hero'
import RecentWork from '@/components/RecentWork'
import Brands from '@/components/Brands'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentWork />
      <Brands />
      <Services />
      <Portfolio />
      <Testimonials />
    </main>
  )
}
