import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function CTA({
  title = 'Ready to redefine your financial structure?',
  text = "Let's build a proactive accounting system tailored to your exact operational needs.",
  buttonLabel = 'Book a Strategy Session',
}) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <Reveal className="glass-panel rounded-[2.5rem] p-10 md:p-16 text-center bg-gradient-to-br from-white/80 to-white/40">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text mb-6">{title}</h2>
        <p className="text-xl text-brand-muted font-medium max-w-2xl mx-auto mb-10">{text}</p>
        <Link
          to="/contact"
          className="inline-block px-10 py-5 bg-brand-text text-white text-lg font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:bg-gray-800 transition-all duration-300"
        >
          {buttonLabel}
        </Link>
      </Reveal>
    </section>
  );
}
