import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">Kelvin Thuo</div>
        <ul>
          <li><Link href="#home" className="header-link">Home</Link></li>
          <li><Link href="#about" className="header-link">About</Link></li>
          <li><Link href="#projects" className="header-link">Projects</Link></li>
          <li><Link href="#contact" className="header-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}