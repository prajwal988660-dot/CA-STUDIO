import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 px-4 pb-10 pt-8">
      <div className="max-w-7xl mx-auto glass rounded-[2rem] p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white shadow-lg">
                CS
              </div>
              <span className="text-lg font-black tracking-widest text-brand-text">CA STUDIO</span>
            </div>
            <p className="text-brand-muted font-medium max-w-xs">
              Proactive accounting, bulletproof compliance, and future-ready financial systems.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-muted mb-4">Explore</h4>
            <ul className="space-y-2 font-semibold text-brand-text">
              <li><Link to="/" className="hover:text-brand-blue">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue">Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-muted mb-4">Get in touch</h4>
            <ul className="space-y-2 font-semibold text-brand-text">
              <li><a href="mailto:official.castud@gmail.com" className="hover:text-brand-blue">official.castud@gmail.com</a></li>
              <li><Link to="/contact" className="hover:text-brand-blue">Book a consultation &rarr;</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200/60 text-center text-xs text-brand-muted font-bold tracking-widest uppercase">
          &copy; {year} CA STUDIO. All Rights Reserved. Engineered for Excellence.
        </div>
      </div>
    </footer>
  );
}
