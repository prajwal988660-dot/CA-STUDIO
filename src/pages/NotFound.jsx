import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
      <div className="max-w-xl w-full glass-panel rounded-[2.5rem] p-10 md:p-16 text-center">
        <div className="text-7xl md:text-8xl font-black text-gradient mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-black text-brand-text mb-4">Page Not Found</h1>
        <p className="text-xl text-brand-muted font-medium mb-10">
          The page you're looking for doesn't exist or has moved.
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
