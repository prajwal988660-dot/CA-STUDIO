import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
      <div className="max-w-xl w-full glass-panel rounded-[2.5rem] p-10 md:p-16 text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-2xl shadow-xl flex items-center justify-center text-4xl mb-8">
          ✓
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-brand-text mb-4">Message Sent!</h1>
        <p className="text-xl text-brand-muted font-medium mb-10">
          Thank you for reaching out to <strong className="text-brand-text">CA STUDIO</strong>. We've received your
          message and will get back to you within one business day.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-5 bg-brand-text text-white text-lg font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:bg-gray-800 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
