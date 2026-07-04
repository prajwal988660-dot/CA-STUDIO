import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';

const principles = [
  { icon: '⚡', bg: 'bg-blue-50', title: 'Proactivity Over Reaction', desc: 'We solve problems before they become notices. Anticipation is the highest form of service.' },
  { icon: '🎯', bg: 'bg-cyan-50', title: 'Precision & Integrity', desc: 'Every figure is defensible, every filing is honest. We would rather be right than convenient.' },
  { icon: '🔒', bg: 'bg-indigo-50', title: 'Confidentiality First', desc: 'Your data is sacred. We guard it with strict access controls and secure, encrypted systems.' },
  { icon: '📡', bg: 'bg-purple-50', title: 'Radical Transparency', desc: 'No jargon, no surprises. You always understand what we did, why we did it, and what it means.' },
  { icon: '🤝', bg: 'bg-blue-50', title: 'Partnership, Not Vendorship', desc: 'We win when you win. We sit on your side of the table as a long-term financial ally.' },
  { icon: '📚', bg: 'bg-cyan-50', title: 'Relentless Learning', desc: 'Tax law never sleeps, so neither does our curiosity. We track every amendment that touches you.' },
];

const method = [
  { n: '01', color: 'text-brand-blue', ring: 'border-blue-50', title: 'Understand', desc: 'We start by learning your business model, goals, and risk appetite — not just your ledgers.' },
  { n: '02', color: 'text-brand-cyan', ring: 'border-cyan-50', title: 'Architect', desc: 'We design a clean chart of accounts and a compliance calendar tailored to your structure.' },
  { n: '03', color: 'text-indigo-500', ring: 'border-indigo-50', title: 'Automate', desc: 'We connect your tools and cloud storage so data flows in accurately, with less manual effort.' },
  { n: '04', color: 'text-purple-500', ring: 'border-purple-50', title: 'Anticipate', desc: 'We monitor deadlines and amendments, flagging risks and opportunities well before they land.' },
];

const edge = [
  { icon: '🛡️', bg: 'bg-blue-50', title: 'Proactive Defense', desc: 'We anticipate tax discrepancies and compliance bottlenecks months before they happen, shielding your business from penalties.' },
  { icon: '⚡', bg: 'bg-cyan-50', title: 'Technological Edge', desc: "We don't just use software; we master it. We transition your legacy systems into sleek, cloud-integrated powerhouses." },
  { icon: '✨', bg: 'bg-purple-50', title: 'Aesthetic Reporting', desc: "Numbers shouldn't be a mess of spreadsheets. We deliver financial insights through clean, legible, and actionable reports." },
];

export default function About() {
  return (
    <div className="pt-40">
      {/* Heading */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16">
        <Reveal className="text-sm font-black tracking-widest text-brand-blue uppercase mb-4">About Us</Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
          The CA STUDIO <span className="text-gradient">Philosophy</span>
        </Reveal>
      </section>

      {/* Philosophy intro */}
      <section className="py-8 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/50 border border-white/60 shadow-inner">
                <p className="text-2xl italic text-brand-blue font-semibold">
                  "We don't just record history; we anticipate the future."
                </p>
              </div>
              <p className="text-brand-muted font-medium leading-relaxed">
                This single idea shapes every engagement we take on. Accounting, to us, is not a rear-view mirror — it
                is a navigation system for where your business is headed next.
              </p>
            </div>
            <div className="text-xl text-brand-muted leading-relaxed font-medium space-y-6">
              <p>
                At CA STUDIO, we believe that modern businesses require more than reactive accounting. You need a{' '}
                <strong className="text-brand-text font-black">financial architecture that breathes with your business</strong> —
                a living structure that adapts as you scale, pivot, and grow.
              </p>
              <p>
                We bridge the gap between complex tax laws and aesthetic, streamlined financial management. By
                integrating top-tier accounting software with deep regulatory expertise, we transform your financial
                data from a mere obligation into a <strong className="text-brand-text font-black">strategic asset</strong>{' '}
                that informs every decision you make.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Who we are */}
      <section className="py-12 px-6">
        <Reveal className="max-w-5xl mx-auto text-center space-y-8">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Who We Are</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text leading-tight">
            Accountants who think like <span className="text-gradient">architects</span>
          </h2>
          <div className="text-xl text-brand-muted font-medium leading-relaxed space-y-6 text-left md:text-center">
            <p>
              Traditional accounting was built for a slower world — one where books were closed once a year and
              compliance meant reacting to a notice after it arrived. That world is gone. Today, tax law shifts
              constantly, data lives in the cloud, and the businesses that win are the ones who see around corners.
            </p>
            <p>
              CA STUDIO was founded on a simple conviction: your finances deserve the same intentional design as your
              product. We combine the rigour of chartered accountancy with the mindset of systems designers — building
              financial structures that are{' '}
              <strong className="text-brand-text font-black">accurate by default, compliant by design, and clear enough for anyone to act on</strong>.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <Reveal className="glass-panel rounded-[2rem] p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-gradient-to-tr from-brand-blue/15 to-transparent rounded-full blur-3xl"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl shadow-inner mb-6">🎯</div>
            <h3 className="text-2xl font-black text-brand-text mb-4">Our Mission</h3>
            <p className="text-lg text-brand-muted font-medium leading-relaxed">
              To free business owners from the anxiety of numbers — delivering flawless compliance, real-time clarity,
              and proactive advice so they can pour their energy into building, not bookkeeping.
            </p>
          </Reveal>
          <Reveal delay={120} className="glass-panel rounded-[2rem] p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-gradient-to-tl from-brand-cyan/15 to-transparent rounded-full blur-3xl"></div>
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-3xl shadow-inner mb-6">🔮</div>
            <h3 className="text-2xl font-black text-brand-text mb-4">Our Vision</h3>
            <p className="text-lg text-brand-muted font-medium leading-relaxed">
              A world where every business — from first invoice to public listing — runs on financial systems so
              intelligent and transparent that compliance is automatic and strategy is obvious.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guiding principles */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Guiding Principles</div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-text">The values behind every number</h2>
            <p className="text-xl text-brand-muted font-medium">
              Principles aren't posters on a wall — they're the rules we apply when no one is watching. These six shape
              how we work.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className="glass-panel p-8 rounded-[2rem]">
                <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center text-3xl shadow-inner mb-5`}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-black text-brand-text mb-2">{p.title}</h3>
                <p className="text-brand-muted font-medium">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proactive Method */}
      <section className="py-12 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mb-14 space-y-4">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Our Approach</div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-text leading-tight">The Proactive Method</h2>
              <p className="text-xl text-brand-muted font-medium">
                A repeatable way of thinking that turns messy financial reality into a calm, compliant, forward-looking
                system.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {method.map((m) => (
                <div key={m.n} className="bg-white/60 border border-white p-7 rounded-2xl shadow-sm flex items-start space-x-5">
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-white shadow-md flex items-center justify-center ${m.color} font-black text-xl border ${m.ring}`}>
                    {m.n}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-brand-text mb-1">{m.title}</h4>
                    <p className="text-brand-muted font-medium">{m.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-white/60 border border-white p-7 rounded-2xl shadow-sm flex items-start space-x-5 md:col-span-2">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-md flex items-center justify-center text-brand-blue font-black text-xl border border-blue-50">
                  05
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-text mb-1">Advise</h4>
                  <p className="text-brand-muted font-medium">
                    Every quarter we translate the numbers into plain-language guidance — what's working, what to fix,
                    and where to grow next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Beyond compliance */}
      <section className="py-12 px-6">
        <Reveal className="max-w-5xl mx-auto glass-panel bg-white/40 rounded-[2.5rem] p-10 md:p-16 text-center space-y-6">
          <div className="text-5xl">💡</div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-text leading-tight">Beyond compliance lies clarity</h2>
          <p className="text-xl text-brand-muted font-medium leading-relaxed">
            Filing on time is the floor, not the ceiling. Our philosophy pushes further: to give you a financial picture
            so clear that decisions become obvious, cash flow stops being a mystery, and growth is a plan — not a
            gamble. That is the difference between an accountant who records your past and a partner who helps you build
            your future.
          </p>
        </Reveal>
      </section>

      {/* The Edge */}
      <section className="py-16 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel bg-white/40 rounded-[2.5rem] p-10 md:p-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Why Choose Us</div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-text leading-tight">The CA STUDIO Edge</h2>
              <p className="text-brand-muted text-xl font-medium leading-relaxed">
                Designed for the modern enterprise. We replace chaos with automated elegance and flawless compliance
                execution.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-6">
              {edge.map((e) => (
                <div key={e.title} className="bg-white/60 border border-white p-6 rounded-2xl shadow-sm flex items-start space-x-6 hover:bg-white transition-colors duration-300">
                  <div className={`w-14 h-14 shrink-0 rounded-xl ${e.bg} flex items-center justify-center text-3xl shadow-inner`}>
                    {e.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-text mb-2">{e.title}</h4>
                    <p className="text-brand-muted font-medium">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CTA title="Let's build something bulletproof." text="Discover how a proactive financial partner changes the way you run your business." buttonLabel="Talk to CA STUDIO" />
    </div>
  );
}
