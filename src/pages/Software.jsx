import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Stat from '../components/Stat.jsx';
import Accordion from '../components/Accordion.jsx';
import CTA from '../components/CTA.jsx';

const taxPillars = [
  {
    icon: '🧾',
    bg: 'bg-blue-50',
    title: 'Advanced GST Management',
    points: [
      ['Flawless Filing:', 'Push GSTR-1, GSTR-3B and annual GSTR-9 returns to the portal with a single click — no exports, no re-entry.'],
      ['Smart Reconciliation:', 'Your purchase register is matched against GSTR-2A/2B automatically, so missing Input Tax Credit is caught before it becomes a liability or a departmental notice.'],
      ['E-Invoicing & E-Way Bills:', 'Generate fully compliant e-invoices and waybills in real time, straight from your sales entries.'],
    ],
  },
  {
    icon: '📑',
    bg: 'bg-cyan-50',
    title: 'End-to-End TDS & TCS',
    points: [
      ['Auto-Calculation:', 'TDS on vendor payments and employee salaries is computed automatically at the latest government rates.'],
      ['Effortless Returns:', 'Generate Form 24Q, 26Q and 27Q in minutes, validated and ready for upload.'],
      ['Challans & Certificates:', 'Create challans and issue TDS certificates directly to your deductees from within the software.'],
    ],
  },
  {
    icon: '🏛️',
    bg: 'bg-indigo-50',
    title: 'Income Tax Filing',
    points: [
      ['Auto-Computed Liability:', 'Data flows straight from your final P&L and Balance Sheet into the tax computation — no manual bridging.'],
      ['Every Business Structure:', 'Support for multiple ITR forms, whether you operate as a proprietorship, firm or company.'],
      ['Direct E-Filing:', 'File returns electronically with secure digital signature (DSC) integration.'],
    ],
  },
];

const operations = [
  {
    n: '01',
    color: 'text-brand-blue',
    ring: 'border-blue-50',
    tint: 'bg-brand-blue/5',
    title: 'Financial Accounting',
    lead: 'Books that stay current on their own.',
    leadColor: 'text-brand-cyan',
    points: [
      ['Real-Time Cash Book:', 'Every receipt and payment lands in the cash book the moment it is entered, so your daily position is always current.'],
      ['Bank Reconciliation:', 'Match your books against bank statements in minutes and spot missing or duplicate entries before they distort your numbers.'],
      ['Customisable Ledgers:', 'Structure ledgers and groups around how your business actually works — with trial balance, P&L and Balance Sheet always one click away.'],
    ],
  },
  {
    n: '02',
    color: 'text-brand-cyan',
    ring: 'border-cyan-50',
    tint: 'bg-brand-cyan/5',
    title: 'Inventory Control',
    lead: 'Know exactly what you hold, everywhere.',
    leadColor: 'text-brand-blue',
    points: [
      ['Multi-Warehouse Tracking:', 'Track live stock levels across every warehouse and godown from a single screen.'],
      ['Re-Order Alerts:', 'Set minimum levels per item and get alerted before you run out — never lose a sale to a stock-out.'],
      ['Batch & Expiry Management:', 'Manage batch-wise stock and expiry dates — ideal for pharma, FMCG and food businesses.'],
    ],
  },
  {
    n: '03',
    color: 'text-indigo-500',
    ring: 'border-indigo-50',
    tint: 'bg-indigo-500/5',
    title: 'Payroll & HR',
    lead: 'From attendance to payslip, hands-free.',
    leadColor: 'text-brand-cyan',
    points: [
      ['Attendance Management:', 'Record attendance and leave in one place, feeding straight into salary computation.'],
      ['Automated Salary Runs:', 'Compute salaries in a single run with PF, PT and ESIC deducted automatically.'],
      ['Compliance Built-In:', 'Salary TDS ties directly into your Form 24Q workflow, so payroll and tax filings never drift apart.'],
    ],
  },
];

const desktopEdge = [
  {
    icon: '⚡',
    bg: 'bg-blue-50',
    title: 'Unmatched Speed',
    desc: 'No waiting for web pages to load. The software runs natively on your PC, using its full processing power for heavy tasks like reconciliations and year-end reports.',
  },
  {
    icon: '🔐',
    bg: 'bg-cyan-50',
    title: 'Uncompromising Security',
    desc: 'Your financial data lives entirely on your local machine. Prefer the cloud? Link the backup directory to OneDrive or Google Drive and keep total control over where your data lives.',
  },
  {
    icon: '⌨️',
    bg: 'bg-indigo-50',
    title: 'Keyboard-First Design',
    desc: 'Built for high-speed data entry. Accountants and business owners who live on the keyboard can fly through vouchers without ever touching the mouse.',
  },
];

const alezaSkills = [
  {
    prompt: '"Aleza, give me a breakdown of all outstanding invoices over 60 days."',
    tint: 'bg-blue-50/70',
    title: 'Generate Any Report',
    desc: "Don't hunt through reporting menus. Ask in plain language and Aleza instantly builds the report — ready to export as a PDF or Excel file.",
  },
  {
    prompt: '"Aleza, my trial balance isn\'t matching — find the error."',
    tint: 'bg-cyan-50/70',
    title: 'Find the Error',
    desc: 'Aleza scans your recent entries to identify duplicates, flag unusual expenses and point out mismatched GST rates on invoices.',
  },
  {
    prompt: '"Aleza, how do I add a custom field to my sales invoice?"',
    tint: 'bg-indigo-50/70',
    title: 'Your Interactive Helpdesk',
    desc: 'No 100-page manual required. Aleza answers with step-by-step instructions — or takes you directly to the right settings page.',
  },
];

const steps = [
  { n: '01', color: 'text-brand-blue', ring: 'border-blue-50', title: 'Download & Install', desc: 'Get the lightweight .exe running on your Windows PC in under two minutes. No servers, no complicated setup.' },
  { n: '02', color: 'text-brand-cyan', ring: 'border-cyan-50', title: 'Import Your History', desc: 'Migrate your existing masters, ledgers and inventory data from any other software via a simple Excel or CSV import.' },
  { n: '03', color: 'text-indigo-500', ring: 'border-indigo-50', title: 'Run Your Business', desc: 'Generate invoices, manage stock and pay your team while the system calculates your taxes silently in the background.' },
  { n: '04', color: 'text-purple-500', ring: 'border-purple-50', title: 'Ask Aleza', desc: 'Use your 500 monthly prompts to pull insights, verify your books and file returns as the deadlines approach.' },
];

const trust = [
  {
    icon: '🔄',
    bg: 'bg-blue-50',
    title: 'Always Up-to-Date',
    desc: 'Background updates land automatically the moment tax codes, GST slabs or compliance laws change — you never file on outdated logic.',
  },
  {
    icon: '🔒',
    bg: 'bg-cyan-50',
    title: 'Local Encryption',
    desc: 'Your database is encrypted on your own hard drive, keeping sensitive financial data out of reach of external cloud breaches.',
  },
  {
    icon: '📜',
    bg: 'bg-indigo-50',
    title: 'Complete Audit Trails',
    desc: 'Every entry, edit and deletion is logged with a timestamp and user ID — total transparency when the auditors arrive.',
  },
];

const faqs = [
  {
    q: 'What does the free 14-day trial include?',
    a: 'Full access to the GST and TDS modules plus 50 Aleza AI chats — no credit card required. Download the .exe, install it in under two minutes and evaluate it with your own data.',
  },
  {
    q: 'Which returns can I file from inside the software?',
    a: 'GST returns (GSTR-1, GSTR-3B and annual GSTR-9) with a single click, TDS & TCS returns via Forms 24Q, 26Q and 27Q with challans and certificates, and income tax returns across multiple ITR forms with secure DSC-based e-filing — all without opening a browser.',
  },
  {
    q: 'Can I migrate from my current accounting software?',
    a: 'Yes. Your existing masters, ledgers and inventory data can be imported via Excel or CSV, so most businesses are fully operational on day one without re-entering history.',
  },
  {
    q: 'Where is my data stored, and is it secure?',
    a: 'Your database lives encrypted on your own machine — not on someone else\'s cloud. If you want off-site backups, simply point the backup directory at OneDrive or Google Drive. Every entry, edit and deletion is also logged with a timestamped audit trail.',
  },
  {
    q: 'What happens when tax rules change?',
    a: 'Nothing you need to do. The software receives automatic background updates the moment there is a change in the tax code, GST slabs or compliance laws, so your calculations and returns always follow the latest rules.',
  },
  {
    q: 'How is the software licensed?',
    a: 'Every licence includes the complete ERP, all tax-filing modules and 500 Aleza AI chats each month. Start with the free 14-day trial, then see the Pricing page — we size the licence to your business and give you a clear, honest quote.',
  },
];

export default function Software() {
  return (
    <div className="pt-40">
      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16">
        <Reveal className="inline-block">
          <span className="glass px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-brand-blue mb-6 inline-flex items-center shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse mr-2"></span>
            Desktop ERP · Tax Filing · Aleza AI
          </span>
        </Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight mb-8">
          The Only <span className="text-gradient">ERP & Tax Engine</span> Your Business Will Ever Need
        </Reveal>
        <Reveal as="p" delay={200} className="text-lg md:text-2xl text-brand-muted max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Stop switching between accounting software and government portals. Manage your entire business, automatically
          reconcile complex GST discrepancies, file TDS and Income Tax, and command your data with{' '}
          <strong className="text-brand-text font-black">Aleza</strong> — your built-in AI assistant.
        </Reveal>
        <Reveal delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg">
            Download Free 14-Day Trial (.exe)
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-10 py-5 glass-panel text-brand-text font-bold rounded-2xl hover:bg-white transition-all duration-300 text-lg">
            Book a Live Demo
          </Link>
        </Reveal>
        <Reveal delay={400} className="mt-6 text-sm font-bold text-brand-muted tracking-wide">
          No credit card required · Full GST & TDS access · 50 Aleza AI chats included in the trial
        </Reveal>
      </section>

      {/* Stats */}
      <section className="py-8 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value={500} label="Aleza AI Chats / Month" />
          <Stat value={1} suffix="-Click" label="GST Return Filing" />
          <Stat value={2} prefix="<" suffix=" Min" label="Install & Setup" />
          <Stat value={100} suffix="%" label="Local Data Ownership" />
        </Reveal>
      </section>

      {/* Problem & solution */}
      <section className="py-12 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Why We Built This</div>
              <div className="p-6 rounded-2xl bg-white/50 border border-white/60 shadow-inner">
                <p className="text-2xl italic text-brand-blue font-semibold">
                  "Complexity is costing you time. We've fixed that."
                </p>
              </div>
              <p className="text-brand-muted font-medium leading-relaxed">
                Most businesses run on a patchwork: one program for invoicing, another for payroll, a third for tax
                computation — and a browser full of government portals to actually file the returns. The result is data
                mismatches, compliance errors and wasted hours, every single month.
              </p>
            </div>
            <div className="text-xl text-brand-muted leading-relaxed font-medium space-y-6">
              <p>
                <strong className="text-brand-text font-black">The solution:</strong> a unified, standalone .exe desktop
                application that brings the speed of local processing and the power of{' '}
                <strong className="text-brand-text font-black">full-scale business management into one window</strong>.
              </p>
              <p>
                Enter your data once, and it flows seamlessly into your accounting ledgers, inventory trackers and final
                tax returns. No copy-paste between systems. No mismatched totals the night before a deadline.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Module 01 — Tax compliance engine */}
      <section className="py-12 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-gradient-to-tr from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mb-14 space-y-4">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Core Module 01</div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-text leading-tight">
                The Ultimate <span className="text-gradient">Tax Compliance Engine</span>
              </h2>
              <p className="text-xl text-brand-muted font-medium">
                Direct API integrations mean you file straight to government portals — without ever leaving the ERP.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {taxPillars.map((t) => (
                <div key={t.title} className="bg-white/60 border border-white p-7 rounded-2xl shadow-sm">
                  <div className={`w-14 h-14 rounded-2xl ${t.bg} flex items-center justify-center text-3xl shadow-inner mb-5`}>
                    {t.icon}
                  </div>
                  <h3 className="text-xl font-black text-brand-text mb-4">{t.title}</h3>
                  <ul className="space-y-4 border-t border-gray-200/50 pt-5 text-sm text-brand-muted font-medium">
                    {t.points.map(([strong, rest]) => (
                      <li key={strong}>
                        <strong className="text-brand-text block mb-1 text-base">{strong}</strong> {rest}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Module 02 — Business operations */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Core Module 02</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">Robust Business Operations</h2>
          <p className="text-xl text-brand-muted font-medium">
            Taxes are only the finish line. The engine underneath runs your whole business, every day.
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-8">
          {operations.map((s, i) => (
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

      {/* Module 03 — Desktop advantage */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Core Module 03</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">The Desktop (.exe) Advantage</h2>
          <p className="text-xl text-brand-muted font-medium">
            Why a desktop application? Because your business shouldn't wait for a webpage to load.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {desktopEdge.map((e, i) => (
            <Reveal key={e.title} delay={i * 100} className="glass-panel p-8 rounded-[2rem]">
              <div className={`w-14 h-14 rounded-2xl ${e.bg} flex items-center justify-center text-3xl shadow-inner mb-5`}>
                {e.icon}
              </div>
              <h3 className="text-xl font-black text-brand-text mb-2">{e.title}</h3>
              <p className="text-brand-muted font-medium">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Aleza AI spotlight */}
      <section className="py-12 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel bg-white/40 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Feature Spotlight</div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-text">
                Meet <span className="text-gradient">Aleza AI</span>
              </h2>
              <p className="text-2xl font-bold text-brand-text">Your data, now conversational.</p>
              <p className="text-xl text-brand-muted font-medium">
                Navigating a full ERP shouldn't require a 100-page manual. Aleza is the advanced AI model natively
                integrated into your application — your dedicated financial analyst, support agent and reporting engine,
                all in one chat box. Every licence includes{' '}
                <strong className="text-brand-text font-black">500 AI chats per month</strong>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {alezaSkills.map((a, i) => (
                <Reveal key={a.title} delay={i * 100} className="bg-white/60 border border-white p-7 rounded-2xl shadow-sm flex flex-col">
                  <div className={`${a.tint} border border-white rounded-2xl rounded-bl-md p-5 mb-6 shadow-inner`}>
                    <p className="text-sm italic font-semibold text-brand-text leading-relaxed">{a.prompt}</p>
                  </div>
                  <h3 className="text-xl font-black text-brand-text mb-2">{a.title}</h3>
                  <p className="text-brand-muted font-medium text-sm leading-relaxed">{a.desc}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 bg-white/60 border border-white p-7 rounded-2xl shadow-sm flex items-start space-x-5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-2xl shadow-inner">💬</div>
              <div>
                <h4 className="text-lg font-black text-brand-text mb-1">The 500-Chat Advantage</h4>
                <p className="text-brand-muted font-medium">
                  Your 500 monthly queries are engineered for high-value financial and operational tasks — ample AI
                  power to breeze through month-end closing and tax season without hitting limits.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="py-12 px-6">
        <Reveal className="max-w-7xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-brand-cyan/10 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mb-14 space-y-4">
              <div className="text-sm font-black tracking-widest text-brand-blue uppercase">How It Works</div>
              <h2 className="text-4xl md:text-5xl font-black text-brand-text leading-tight">
                From download to filing in four steps
              </h2>
              <p className="text-xl text-brand-muted font-medium">
                No consultants, no migration projects, no months of onboarding. Just install and run.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((m) => (
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
            </div>
          </div>
        </Reveal>
      </section>

      {/* Trust & security */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">Trust & Security</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">
            Bank-grade security. <span className="text-gradient">Compliance guaranteed.</span>
          </h2>
          <p className="text-xl text-brand-muted font-medium">
            We understand that your business data is your most critical asset. It is treated like one.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 100} className="glass-panel p-8 rounded-[2rem]">
              <div className={`w-14 h-14 rounded-2xl ${t.bg} flex items-center justify-center text-3xl shadow-inner mb-5`}>
                {t.icon}
              </div>
              <h3 className="text-xl font-black text-brand-text mb-2">{t.title}</h3>
              <p className="text-brand-muted font-medium">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-black tracking-widest text-brand-blue uppercase">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-text">Questions, answered</h2>
        </Reveal>
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </section>

      <CTA
        title="Ready to take control of your compliance and operations?"
        text="Stop wasting time on manual entry and disjointed systems. Start your free 14-day trial — no credit card required, with full GST & TDS access and 50 Aleza AI chats included."
        buttonLabel="Download Your Free 14-Day Trial"
      />
    </div>
  );
}
