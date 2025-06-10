import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200 transition-all duration-200 ${
      isScrolled ? 'bg-white/98' : 'bg-white/95'
    } backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-data-blue">Sarah Chen</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-data-blue text-white px-4 py-2 rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-data-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-data-blue transition-colors duration-200 font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 bg-data-blue text-white rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-medium mt-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
