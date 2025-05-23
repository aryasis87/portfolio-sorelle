export default function Services() {
  return (
    <section className="py-24 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Daftar Layanan */}
          <div className="space-y-10">
            {[
              {
                number: '01',
                title: 'UI/UX Design',
                items: ['Web Design', 'App Design', 'Dashboard Design'],
              },
              {
                number: '02',
                title: 'Development',
                items: ['Web Development', 'App Development'],
              },
              {
                number: '03',
                title: 'Branding',
                items: ['Brand Logo', 'Brand Promotion'],
              },
            ].map(({ number, title, items }, i) => (
              <div key={i}>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-lg font-bold text-gray-700">{number}</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <ul className="space-y-2 pl-4 border-l-2 border-blue-600">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Kanan: CTA */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Solving problems by the <span className="text-blue-600">services</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
