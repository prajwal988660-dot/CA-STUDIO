import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const sections = [
  {
    title: '1. Who We Are',
    body: [
      'CA STUDIO ("we", "us", "our") operates this website and publishes a desktop ERP & tax-filing application with the built-in Aleza AI assistant. This policy explains what information we collect through the website and how data is handled inside the software.',
      'For any privacy question or request, you can reach us at official.castud@gmail.com.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'Contact & demo requests: when you submit the contact form, we receive the details you choose to share — your name, email address, phone number (optional) and message.',
      'Direct communications: if you email or call us, we receive the information you provide in that conversation.',
    ],
    list: [
      'We do not run analytics or advertising trackers on this website.',
      'We do not require you to create an account to browse this website.',
      'We never sell or rent your personal information to anyone.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'We use the details you share solely to respond to your enquiry, schedule demos or consultations, provide the software trial or licence you requested, offer support, and meet our own legal and professional obligations. That is the full list.',
    ],
  },
  {
    title: '4. Your Data Inside the Desktop Software',
    body: [
      'The application is built local-first: the business and financial data you enter is stored in a database on your own machine, encrypted on your hard drive. We do not host your books.',
      'If you enable backups, they are written to a directory you choose — including your own OneDrive or Google Drive — and remain entirely under your control. Return data is transmitted to government portals only when you initiate a filing. Questions you ask Aleza are processed solely to generate your answer inside the application, and every entry, edit and deletion in your books is recorded in a local audit trail with a timestamp and user ID.',
    ],
  },
  {
    title: '5. Third-Party Services',
    body: [
      'This website is hosted on Netlify, which also processes contact-form submissions on our behalf. Fonts are served by Google Fonts, which may log standard technical data (such as your IP address) when delivering them. When you file returns from the software, the relevant data goes directly to the official government portals you are filing with.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We keep enquiry and correspondence data only for as long as it is needed to serve you and meet legal obligations. You may ask us to delete your details at any time. Data inside the software lives on your machine, so its retention is always in your hands.',
    ],
  },
  {
    title: '7. Security',
    body: [
      'The software encrypts your database at rest on your device, and access to enquiry data on our side is restricted to the people who need it to respond to you. No method of transmission or storage is 100% secure, but we design for your data to stay in as few hands as possible — ideally, only yours.',
    ],
  },
  {
    title: '8. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you. Email official.castud@gmail.com and we will act on your request promptly.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'If we change how we handle information, we will update this page and revise the effective date below. Meaningful changes will be highlighted rather than buried.',
    ],
  },
];

export default function Privacy() {
  return (
    <div className="pt-40 pb-8">
      {/* Heading */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <Reveal className="text-sm font-black tracking-widest text-brand-blue uppercase mb-4">Legal</Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
          Privacy <span className="text-gradient">Policy</span>
        </Reveal>
        <Reveal as="p" delay={200} className="mt-8 text-lg md:text-xl text-brand-muted leading-relaxed font-medium">
          The short version: your books live on your machine, your enquiries stay with us, and nothing is ever sold.
          The full version follows.
        </Reveal>
      </section>

      {/* Sections */}
      <section className="px-6 max-w-4xl mx-auto space-y-6">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80} className="glass-panel rounded-[2rem] p-8 md:p-10">
            <h2 className="text-2xl font-black text-brand-text mb-4">{s.title}</h2>
            <div className="space-y-4 text-brand-muted font-medium leading-relaxed">
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-3 pt-2">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="w-6 h-6 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue text-xs font-black shadow-sm mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}

        <Reveal className="glass-panel rounded-[2rem] p-8 md:p-10 text-center space-y-3">
          <p className="text-sm font-black uppercase tracking-widest text-brand-muted">Effective Date: 28 July 2026</p>
          <p className="text-brand-muted font-medium">
            Questions about this policy?{' '}
            <Link to="/contact" className="text-brand-blue font-bold hover:underline">
              Contact us
            </Link>{' '}
            or email{' '}
            <a href="mailto:official.castud@gmail.com" className="text-brand-blue font-bold hover:underline">
              official.castud@gmail.com
            </a>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
