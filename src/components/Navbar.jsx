import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'Philosophy' },
  { to: '/services', label: 'Services' },
  { to: '/software', label: 'Software' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-brand-blue ${
      isActive ? 'text-brand-blue' : 'text-brand-muted'
    }`;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto glass h-20 rounded-2xl flex items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-3 group" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
            CS
          </div>
          <span className="text-xl font-black tracking-widest text-brand-text">CA STUDIO</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block px-6 py-2.5 rounded-xl text-sm font-bold bg-brand-text text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Consult Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-11 h-11 rounded-xl glass flex items-center justify-center text-xl text-brand-text"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 glass rounded-2xl p-3 space-y-1 text-brand-text font-semibold">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl hover:bg-white/70 ${isActive ? 'text-brand-blue' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-xl bg-brand-text text-white text-center mt-2"
          >
            Consult Us
          </Link>
        </div>
      )}
    </header>
  );
}
