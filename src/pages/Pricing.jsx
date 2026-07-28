import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import CTA from '../components/CTA.jsx';

const plans = [
  {
    name: 'Free Trial',
    price: '₹0',
    period: 'for 14 days',
    tagline: 'Evaluate the full engine with your own data — no strings attached.',
    featured: false,
    features: [
      'Full GST module — filing & reconciliation',
      'Full TDS module — returns, challans & certificates',
      '50 Aleza AI chats during the trial',
      'Installs on your Windows PC in under two minutes',
      'Excel / CSV import of your existing data',
      'No credit card required',
    ],
    cta: 'Start Your Free Trial',
  },
  {
    name: 'Full Licence',
    price: "Let's Talk",
    period: 'sized to your business',
    tagline: 'The complete engine — every module, every filing, all of Aleza.',
    featured: true,
    features: [
      'Everything in the free trial',
      'Complete ERP — accounting, inventory & payroll',
      'One-click GST, TDS & income tax e-filing',
      '500 Aleza AI chats every month',
      'Automatic updates on every tax-law change',
      'Local encryption & complete audit trails',
    ],
    cta: 'Get a Custom Quote',
  },
];

const faqs = [
  {
    q: 'Is the trial really free?',
    a: 'Completely. You get 14 days with full access to the GST and TDS modules and 50 Aleza AI chats — no credit card, no auto-billing, no obligation. Download it, load your own data and see the difference for yourself.',
  },
  {
    q: 'What does a full licence include?',
    a: 'Everything: the complete ERP (financial accounting, inventory and payroll), one-click GST, TDS and income tax filing with challans and certificates, 500 Aleza AI chats every month, automatic compliance updates and full audit trails with local encryption.',
  },
  {
    q: 'How is licence pricing decided?',
    a: 'We size the licence to your business rather than forcing you into a one-size-fits-all tier — factors like team size and the modules you rely on shape the quote. Book a call and we will give you a clear, honest number with no hidden add-ons.',
  },
  {
    q: 'What happens to my data after the trial?',
    a: 'Nothing alarming — your database lives on your own machine, not our servers, so it stays exactly where it is and remains yours. If you continue to a full licence, you simply pick up where you left off.',
  },
];

export default function Pricing() {
  return (
    <div className="pt-40">
      {/* Heading */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <Reveal className="text-sm font-black tracking-widest text-brand-blue uppercase mb-4">Pricing</Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
          Simple, Honest <span className="text-gradient">Pricing</span>
        </Reveal>
        <Reveal as="p" delay={200} className="mt-8 text-lg md:text-2xl text-brand-muted leading-relaxed font-medium">
          Start free, then licence the full engine when you're ready. No hidden tiers, no per-feature surprises —
          every licence includes the complete ERP, every tax module and{' '}
          <strong className="text-brand-text font-black">Aleza AI</strong>.
        </Reveal>
      </section>

      {/* Plans */}
      <section className="py-8 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="glass-panel p-10 rounded-[2rem] flex flex-col relative overflow-hidden">
              {p.featured && (
                <span className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-brand-blue to-brand-cyan shadow-md">
                  Recommended
                </span>
              )}
              <h3 className="text-xl font-black text-brand-text mb-6">{p.name}</h3>
              <div className="mb-2 text-5xl font-black text-gradient leading-none">{p.price}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-muted mb-6">{p.period}</div>
              <p className="text-base font-semibold text-brand-cyan mb-8">{p.tagline}</p>
              <ul className="space-y-4 border-t border-gray-200/50 pt-8 mb-10 text-sm text-brand-muted font-medium flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start space-x-3">
                    <span className="w-6 h-6 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue text-xs font-black shadow-sm mt-0.5">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  p.featured
                    ? 'block text-center px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300'
                    : 'block text-center px-8 py-4 bg-brand-text text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 hover:bg-gray-800 transition-all duration-300'
                }
              >
                {p.cta}
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center text-sm font-bold text-brand-muted tracking-wide">
          Prefer to see it first? <Link to="/contact" className="text-brand-blue hover:underline">Book a live demo</Link>{' '}
          and we'll walk you through the software on your own data.
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">Pricing questions, answered</h2>
        </Reveal>
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </section>

      <CTA
        title="Not sure which plan fits?"
        text="Tell us a little about your business and we'll recommend the right starting point — or just start the free trial and decide with your own data."
        buttonLabel="Talk to CA STUDIO"
      />
    </div>
  );
}
