'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 overflow-hidden"
    >
      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-0" />

      {/* 🎨 Abstract Shapes */}
      <div className="animate-blob absolute top-10 left-[-50px] w-[300px] h-[300px] bg-blue-200 opacity-30 rounded-full blur-3xl z-0" />
      <div className="animate-blob-slow absolute bottom-[-80px] right-[-60px] w-[240px] h-[240px] bg-purple-200 opacity-30 rounded-full blur-2xl z-0" />
      <div className="animate-blob absolute top-[40%] left-[60%] w-[180px] h-[180px] bg-pink-200 opacity-20 rounded-full blur-2xl z-0 transform -translate-x-1/2 -translate-y-1/2 [animation-delay:3s]" />

      {/* 🔥 Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ⬅️ Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Solving <span className="text-blue-600">modern</span> problems through design.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            I push the limits of creativity to craft user-friendly and memorable digital experiences.
          </p>

          {/* 🚀 CTA + Avatars */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Hire Me
            </motion.a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['pp1.png', 'pp2.png', 'pp3.png', 'pp4.png'].map((src, i) => (
                  <Image
                    key={i}
                    src={`/images/${src}`}
                    alt={`Client ${i + 1}`}
                    width={40}
                    height={40}
                    className="object-cover rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">+10K Worldwide Clients</span>
            </div>
          </div>
        </motion.div>

        {/* ➡️ Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <Image
            src="/images/profile1.jpg"
            alt="Hero Image"
            width={560}
            height={560}
            className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
