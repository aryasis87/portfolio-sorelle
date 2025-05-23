import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          What my clients say.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechNova',
    avatar: '/images/pp1.png',
    quote: 'Working with McCullum was a game-changer. His attention to detail and creative thinking is truly remarkable.',
  },
  {
    name: 'David Kim',
    role: 'Founder, Designify',
    avatar: '/images/pp4.png',
    quote: 'He delivered exactly what we needed — beautiful design with intuitive UX. Highly recommend!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, AppWorks',
    avatar: '/images/pp2.png',
    quote: 'McCullum transformed our outdated website into a modern experience. The results were outstanding.',
  },
];

function TestimonialCard({ name, role, avatar, quote }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Image src={avatar} alt={name} width={48} height={48} className="rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic flex-grow">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}
