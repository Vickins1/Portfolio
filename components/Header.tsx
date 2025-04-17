import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">Kelvin Thuo</div>
        <ul className="flex space-x-6">
          <li><Link href="#home" className="hover:text-teal-400 transition-colors">Home</Link></li>
          <li><Link href="#about" className="hover:text-teal-400 transition-colors">About</Link></li>
          <li><Link href="#projects" className="hover:text-teal-400 transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}