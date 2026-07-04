import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import CTA from '../components/CTA.jsx';

const services = [
  {
    n: '01',
    color: 'text-brand-blue',
    ring: 'border-blue-50',
    tint: 'bg-brand-blue/5',
    title: 'Comprehensive Tax Compliance',
    lead: "Staying compliant shouldn't mean waiting for a notice. Our approach to taxation is aggressively proactive.",
    leadColor: 'text-brand-cyan',
    points: [
      ['Flawless Filings (GST, TDS, TCS):', 'End-to-end management of calculations and returns, ensuring absolute accuracy and zero missed deadlines.'],
      ['Dispute & Appeal Architecture:', 'We navigate complex discrepancies — drafting meticulous Statements of Facts, framing robust Grounds of Appeal, and preparing petitions to resolve issues early.'],
      ['Strategic Advisory:', 'Real-time updates on tax amendments that directly impact your bottom line.'],
    ],
  },
  {
    n: '02',
    color: 'text-brand-cyan',
    ring: 'border-cyan-50',
    tint: 'bg-brand-cyan/5',
    title: 'Next-Gen Accounting & Bookkeeping',
    lead: "Your books should tell a clear, beautiful story of your business's health.",
    leadColor: 'text-brand-blue',
    points: [
      ['Meticulous Ledger Management:', 'Day-to-day transaction recording with an eye for detail and compliance.'],
      ['Real-Time Financial Health:', 'Monthly performance reviews, cash flow analysis, and precision reporting.'],
      ['Audit-Ready Always:', 'We maintain your accounts to the highest statutory standards, ready for scrutiny at any moment.'],
    ],
  },
  {
    n: '03',
    color: 'text-indigo-500',
    ring: 'border-indigo-50',
    tint: 'bg-indigo-500/5',
    title: 'Software Integration & Cloud Architecture',
    lead: 'We bring your accounting into the modern era.',
    leadColor: 'text-brand-cyan',
    points: [
      ['Cloud-Space Operations:', 'We set up and optimise your accounting systems to operate seamlessly in secure cloud environments.'],
      ['Seamless Synchronisation:', 'From primary databases to secure storage, your data stays accessible, synced, and protected 24/7.'],
      ['Workflow Optimisation:', 'Integration with essential productivity suites so your reporting is accurate and beautifully presented.'],
    ],
  },
];

const faqs = [
  { q: 'Do you work with startups and small businesses?', a: 'Absolutely. We tailor our engagement to your stage — from first-invoice startups to established enterprises. Our systems scale as you grow.' },
  { q: 'How do you handle GST, TDS and TCS filings?', a: 'We manage the full cycle: calculation, reconciliation, and timely filing of returns, with reminders well ahead of every deadline so nothing is ever missed.' },
  { q: 'Which accounting software do you support?', a: 'We are software-agnostic and integrate with the leading cloud accounting platforms, connecting your bank feeds, invoicing tools, and secure storage into one synced system.' },
  { q: 'Is my financial data kept secure and confidential?', a: 'Yes. Confidentiality is a core principle. Your data lives in secure, encrypted cloud environments with strict access controls — accessible to you 24/7 and no one who should not see it.' },
  { q: 'What does getting started look like?', a: 'It begins with a free strategy session where we understand your business, then architect a chart of accounts and compliance calendar tailored to you. Book a consultation and we take it from there.' },
];

export default function Services() {
  return (
    <div className="pt-40">
      {/* Heading */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <Reveal className="text-sm font-black tracking-widest text-brand-blue uppercase mb-4">Core Services</Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
          Architecting <span className="text-gradient">Financial Clarity</span>
        </Reveal>
      </section>

      {/* Service cards */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="glass-panel p-10 rounded-[2rem] flex flex-col justify-start relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 ${s.tint} rounded-bl-[100%] transition-transform duration-500 group-hover:scale-150 -z-10`}></div>
              <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center ${s.color} font-black text-2xl mb-8 border ${s.ring}`}>
                {s.n}
              </div>
              <h3 className="text-2xl font-black text-brand-text mb-4">{s.title}</h3>
              <p className={`text-base font-semibold ${s.leadColor} mb-8`}>{s.lead}</p>
              <ul className="space-y-5 border-t border-gray-200/50 pt-8 text-sm text-brand-muted font-medium">
                {s.points.map(([strong, rest]) => (
                  <li key={strong}>
                    <strong className="text-brand-text block mb-1 text-base">{strong}</strong> {rest}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">Questions, answered</h2>
        </Reveal>
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center relative z-10">
        <div className="text-8xl text-brand-blue/20 font-serif mb-0 leading-none h-16">&ldquo;</div>
        <Reveal as="blockquote" className="text-3xl md:text-5xl font-bold text-brand-text max-w-4xl mx-auto leading-tight tracking-tight">
          "Financial clarity isn't just about the numbers adding up. It's about knowing your{' '}
          <span className="text-brand-blue">compliance is bulletproof</span> and your{' '}
          <span className="text-brand-cyan">systems are future-ready</span>."
        </Reveal>
      </section>

      <CTA title="Which service fits your needs?" text="Book a strategy session and we'll map the right plan for your business." buttonLabel="Schedule a Consultation" />
    </div>
  );
}
