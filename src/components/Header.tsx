
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-display text-2xl font-bold gradient-text dark:bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-white dark:bg-clip-text dark:text-transparent">
            Alexandra Stone
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 dark:text-gray-900 hover:from-gray-800 hover:to-gray-600 dark:hover:from-white dark:hover:to-gray-200 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
