/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { I18nProvider, useI18n } from './lib/i18n';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Download, Github, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Games from './pages/Games';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) setProgress(currentScroll / scrollHeight);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return progress;
}

function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCreativePage = ['/games', '/blog', '/media', '/contact'].includes(location.pathname);

  const navItems = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_experience'), path: '/experience' },
    { name: t('nav_projects'), path: '/projects' },
    { name: t('nav_games'), path: '/games' },
    { name: t('nav_blog'), path: '/blog' },
    { name: t('nav_media'), path: '/media' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-brand-bg/90 backdrop-blur-xl border-brand-parchment/10 h-16"
        : "bg-transparent border-transparent h-24"
    )}>
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-[1.5px] bg-brand-copper/40 transition-none" style={{ width: `${scrollProgress * 100}%` }} />

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-[0.2em] text-brand-parchment hover:text-brand-copper transition-colors">
          X.WANG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-base font-medium transition-colors hover:text-brand-copper",
                location.pathname === item.path 
                  ? "text-brand-copper underline underline-offset-8" 
                  : "text-brand-parchment opacity-60 hover:opacity-100"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-parchment hover:bg-white/5 transition-all"
          >
            <Globe size={14} />
            <span>{locale === 'en' ? 'EN' : '中文'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-parchment" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-brand-bg border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-parchment/60 hover:text-brand-copper"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setLocale(locale === 'en' ? 'zh' : 'en');
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 text-brand-parchment pt-4 border-t border-white/5"
            >
              <Globe size={18} />
              <span>{locale === 'en' ? 'English' : '简体中文'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen"
    >
      {children}
    </motion.main>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/5 bg-brand-bg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-brand-oak text-sm">
        <p>© {new Date().getFullYear()} Xijia Wang. Developed for Impact.</p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://github.com/ht18026" target="_blank" rel="noopener noreferrer" className="hover:text-brand-copper transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:recruitment.memostudio@gmail.com" className="hover:text-brand-copper transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <AppContent />
      </Router>
    </I18nProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isCreativePage = ['/games', '/blog', '/media', '/contact'].includes(location.pathname);

  return (
    <div className={cn(
      "relative selection:bg-brand-copper/30 selection:text-brand-copper min-h-screen transition-colors duration-1000",
      isCreativePage && "creative-theme"
    )}>
      <div className="grain" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/games" element={<PageWrapper><Games /></PageWrapper>} />
          <Route path="/media" element={<PageWrapper><Media /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

