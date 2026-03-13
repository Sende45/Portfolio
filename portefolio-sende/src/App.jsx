import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

// Pages & Components
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  return (
    <div className="bg-zinc-50 dark:bg-[#030303] min-h-screen transition-colors duration-700 overflow-x-hidden">
      
      {/* CURSEUR ELITE - Toujours présent mais discret */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-blue-600 rounded-full pointer-events-none z-[999] hidden lg:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
      />

      {/* BARRE DE PROGRESSION TOP */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 origin-left z-[100]" style={{ scaleX }} />

      <Header isScrolled={isScrolled} />

      <main className="relative z-10"> 
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}