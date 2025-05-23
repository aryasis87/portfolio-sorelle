'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function RecentWork() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dekorasi Abstrak */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Judul dan Statistik */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
        >
          {/* Judul */}
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gray-300 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center tracking-tight leading-snug">
              <span className="text-black">My</span>
              <span className="text-blue-600 ml-2">recent work.</span>
            </h2>
          </div>

          {/* Statistik */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm text-gray-600 w-full md:w-auto">
            <Stat label="100+ Project completed" />
            <Stat label="50+ Design project" />
            <Stat label="30+ Dev project" />
            <Stat label="96.7% Satisfied clients" />
          </div>
        </motion.div>

        {/* Grid Proyek */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-500">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  <button
                    aria-label={`View details of ${project.title}`}
                    className="bg-white text-blue-600 rounded-full p-1 ml-2 hover:bg-blue-100 transition"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 whitespace-nowrap"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Komponen Statistik
function Stat({ label }) {
  return (
    <div className="border-b border-gray-200 pb-2 md:border-0 md:pb-0">
      <p>{label}</p>
    </div>
  );
}

// Data Proyek
const projects = [
  {
    title: 'VPN App Design',
    image: '/images/w1.jpg',
  },
  {
    title: 'Medical Website Design',
    image: '/images/w2.jpg',
  },
  {
    title: 'Finance Dashboard Design',
    image: '/images/w3.jpg',
  },
];
