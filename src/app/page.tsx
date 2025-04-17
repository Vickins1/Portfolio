import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './styles.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} portfolio-container`}>
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