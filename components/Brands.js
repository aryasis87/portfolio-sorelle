'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Brands() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Dekorasi Blur Latar */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Judul & Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Working with the best <span className="text-purple-600">brand</span> across the globe.
            </h2>
            <p className="text-base text-gray-600 mb-4">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <Link
              href="#all-brands"
              className="inline-block text-sm text-purple-600 hover:text-purple-800 font-medium underline underline-offset-4 transition"
            >
              View All Brands →
            </Link>
          </div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 md:gap-12"
          >
            {brands.map((brand, i) => (
              <Image
                key={i}
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={40}
                className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const brands = [
  { src: '/images/d1.jpg', alt: 'Indeed' },
  { src: '/images/d2.jpg', alt: 'Netflix' },
  { src: '/images/d3.jpg', alt: 'Shin-Etsu' },
  { src: '/images/d4.jpg', alt: 'ARTEX' },
];
