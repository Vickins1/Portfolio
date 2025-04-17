import React from 'react';
import { Inter } from 'next/font/google';
import Header from 'components/Header';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
