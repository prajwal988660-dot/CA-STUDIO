import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const initial = { name: '', email: '', phone: '', message: '', 'bot-field': '' };

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please tell us how we can help.';
    return e;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSubmitError('');
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      navigate('/success');
    } catch (err) {
      setSubmitError('Something went wrong sending your message. Please try again, or email us directly.');
      setSubmitting(false);
    }
  };

  const inputClass = (field) => `field ${errors[field] ? 'invalid' : ''}`;

  return (
    <div className="pt-40 pb-24">
      {/* Heading */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-16">
        <Reveal className="text-sm font-black tracking-widest text-brand-blue uppercase mb-4">Contact</Reveal>
        <Reveal as="h1" delay={100} className="text-5xl md:text-7xl font-black text-brand-text leading-tight">
          Let's Redefine Your <span className="text-gradient">Finances</span>
        </Reveal>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <Reveal className="glass-panel rounded-[3rem] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-start bg-gradient-to-br from-white/80 to-white/40">
          {/* Contact details */}
          <div className="space-y-8 relative z-10">
            <p className="text-xl text-brand-muted font-medium">
              Let's build a proactive accounting system tailored to your exact operational needs. Reach out and we'll
              get back to you within one business day.
            </p>
            <div className="space-y-4 pt-2 text-lg font-bold text-brand-text">
              <a href="mailto:official.castud@gmail.com" className="flex items-center space-x-5 p-5 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
                <span className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-inner">@</span>
                <span>
                  <span className="block text-xs font-black text-brand-muted uppercase tracking-widest">Email Us</span>
                  official.castud@gmail.com
                </span>
              </a>
              <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
                <span className="w-12 h-12 rounded-xl bg-brand-cyan flex items-center justify-center text-white shadow-inner">📞</span>
                <span>
                  <span className="block text-xs font-black text-brand-muted uppercase tracking-widest">Call Us</span>
                  <a href="tel:+917026372221" className="block hover:text-brand-blue transition-colors">+91 70263 72221</a>
                  <a href="tel:+917026632227" className="block hover:text-brand-blue transition-colors">+91 70266 32227</a>
                </span>
              </div>
              <a
                href="https://maps.app.goo.gl/L2VxZ1wsqEwLzn6p9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-5 p-5 rounded-2xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all"
              >
                <span className="w-12 h-12 rounded-xl bg-brand-text flex items-center justify-center text-white shadow-inner">📍</span>
                <span>
                  <span className="block text-xs font-black text-brand-muted uppercase tracking-widest">Location</span>
                  <span className="block text-base leading-snug">
                    2nd Floor, BSR Memoirs, No 15 &amp; 16, New BEL Road, Mathikere, Bengaluru, Karnataka 560094
                  </span>
                  <span className="block text-xs font-bold text-brand-blue mt-1">Open in Google Maps &rarr;</span>
                </span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10">
            <h2 className="text-2xl font-black text-brand-text mb-2">Book a Strategy Session</h2>
            <p className="text-brand-muted font-medium mb-8">Tell us a little about your business and we'll be in touch.</p>

            <form name="contact" onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* honeypot */}
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" value={form['bot-field']} onChange={handleChange} />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-text mb-2">Name</label>
                <input id="name" type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" className={inputClass('name')} placeholder="Your full name" />
                {errors.name && <p className="mt-1 text-sm font-semibold text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-text mb-2">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" className={inputClass('email')} placeholder="you@company.com" />
                {errors.email && <p className="mt-1 text-sm font-semibold text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-brand-text mb-2">
                  Phone <span className="font-medium text-brand-muted">(optional)</span>
                </label>
                <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" className="field" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-text mb-2">How can we help?</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputClass('message')} placeholder="Briefly describe what you need..."></textarea>
                {errors.message && <p className="mt-1 text-sm font-semibold text-red-500">{errors.message}</p>}
              </div>

              {submitError && <p className="text-sm font-semibold text-red-500">{submitError}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-10 py-5 bg-brand-text text-white text-lg font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:bg-gray-800 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
