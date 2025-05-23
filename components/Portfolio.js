import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
          Let’s have a look at my <span className="text-blue-600">portfolio</span>.
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {['All', 'Web Design', 'Mobile App', 'Dashboard', 'Branding'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`px-5 py-2 rounded-md text-sm font-medium transition
                ${
                  cat === 'All'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-200'
                }`}
              aria-pressed={cat === 'All'}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ title, category, image }, i) => (
            <ProjectCard key={i} title={title} category={category} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { title: "Real Estate Website", category: "Web Design", image: "/images/r1.webp" },
  { title: "NFT Dashboard Design", category: "Dashboard", image: "/images/r2.webp" },
  { title: "Habit Tracker App", category: "Mobile App", image: "/images/r3.webp" },
  { title: "Finance Dashboard", category: "Dashboard", image: "/images/r4.webp" },
  { title: "E-commerce Branding", category: "Branding", image: "/images/r5.webp" },
  { title: "Medical Website UI", category: "Web Design", image: "/images/r6.webp" },
];

function ProjectCard({ title, category, image }) {
  return (
    <article
      tabIndex={0}
      aria-label={`${title}, category: ${category}`}
      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      <div className="relative w-full h-64 sm:h-72">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          priority={false}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <div>
            <p className="text-xs text-gray-300 mb-1">{category}</p>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      </div>
    </article>
  );
}
