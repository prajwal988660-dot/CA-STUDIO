import { Outlet } from 'react-router-dom';
import Background from './Background.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTop from './BackToTop.jsx';

export default function Layout() {
  return (
    <div className="font-sans antialiased selection:bg-brand-blue selection:text-white">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
