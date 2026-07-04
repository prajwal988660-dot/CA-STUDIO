import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Stat from '../components/Stat.jsx';
import CTA from '../components/CTA.jsx';

const services = [
  { n: '01', color: 'text-brand-blue', ring: 'border-blue-50', title: 'Tax Compliance', desc: 'Proactive GST, TDS & TCS filings, plus expert dispute and appeal handling — zero missed deadlines.' },
  { n: '02', color: 'text-brand-cyan', ring: 'border-cyan-50', title: 'Accounting & Bookkeeping', desc: 'Meticulous ledgers, real-time financial health reviews, and audit-ready books at all times.' },
  { n: '03', color: 'text-indigo-500', ring: 'border-indigo-50', title: 'Software & Cloud', desc: 'Cloud-first accounting setup, seamless data sync, and workflow optimisation for the modern firm.' },
];

export default function Home() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal className="inline-block">
            <span className="glass px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-brand-blue mb-8 inline-flex items-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse mr-2"></span>
              Next-Generation Accounting
            </span>
          </Reveal>
          <Reveal as="h1" delay={100} className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-brand-text leading-[1.05]">
            Precision Meets <br />
            <span className="text-gradient">Proactive Growth.</span>
          </Reveal>
          <Reveal as="p" delay={200} className="text-lg md:text-2xl text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Beyond traditional bookkeeping. <strong className="text-brand-text font-black">CA STUDIO</strong> engineers
            flawless financial ecosystems, advanced tax compliance, and seamless software integrations so you can focus
            on building your empire.
          </Reveal>
          <Reveal delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg">
              Elevate Your Finances
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-10 py-5 glass-panel text-brand-text font-bold rounded-2xl hover:bg-white transition-all duration-300 text-lg">
              Explore Our Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value={500} suffix="+" label="Filings Managed" />
          <Stat value={100} suffix="%" label="On-Time Compliance" />
          <Stat value={12} suffix="+" label="Years of Expertise" />
          <Stat value={24} suffix="/7" label="Cloud Access" />
        </Reveal>
      </section>

      {/* Services preview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">Architecting Financial Clarity</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="glass-panel p-8 rounded-[2rem]">
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center ${s.color} font-black text-2xl mb-6 border ${s.ring}`}>
                {s.n}
              </div>
              <h3 className="text-xl font-black text-brand-text mb-3">{s.title}</h3>
              <p className="text-brand-muted font-medium">{s.desc}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-block px-8 py-4 glass-panel rounded-2xl font-bold text-brand-text hover:bg-white transition-all">
            See all services &rarr;
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="text-8xl text-brand-blue/20 font-serif mb-0 leading-none h-16">&ldquo;</div>
        <Reveal as="blockquote" className="text-3xl md:text-5xl font-bold text-brand-text max-w-4xl mx-auto leading-tight tracking-tight">
          "Financial clarity isn't just about the numbers adding up. It's about knowing your{' '}
          <span className="text-brand-blue">compliance is bulletproof</span> and your{' '}
          <span className="text-brand-cyan">systems are future-ready</span>."
        </Reveal>
      </section>

      <CTA />
    </div>
  );
}
