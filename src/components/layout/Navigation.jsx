import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'About', path: '/about' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const mobileMenuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-black/40 backdrop-blur-md border-b border-purple-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-cormorant font-bold tracking-widest text-yellow-500 group-hover:text-yellow-400 transition-colors">
              DARK YOGA
            </span>
            <svg width="18" height="18" viewBox="0 0 100 100" className="text-yellow-500 group-hover:text-yellow-400 transition-colors opacity-80" fill="currentColor">
                <path d="M50 5a45 45 0 1 0 0 90A45 45 0 0 0 50 5zm0 5a40 40 0 0 1 0 80 20 20 0 0 1 0-40 20 20 0 0 0 0-40zm0 15a5 5 0 1 0 0 10A5 5 0 0 0 50 20zm0 40a5 5 0 1 0 0 10A5 5 0 0 0 50 60z"/>
              </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link relative text-gray-300 hover:text-white transition-colors text-sm tracking-wider"
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {!isActive(link.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-8 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm tracking-wider">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/20 min-h-screen"
          >
            <motion.div
              className="flex flex-col gap-6 p-8"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={mobileMenuItemVariants}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg tracking-wider transition-colors ${
                      isActive(link.path)
                        ? 'text-purple-400 font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileMenuItemVariants} className="pt-4 border-t border-purple-500/20">
                <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-md transition-all duration-300 text-sm tracking-wider">
                  BOOK NOW
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
