import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Ambani Bulemi</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Data Analyst & Business Intelligence Specialist helping businesses transform their data into actionable insights for better decision-making.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/bulemi-ambani-722638346"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-data-blue transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/bulemi2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-data-blue transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-data-blue transition-colors duration-200"
              >
                <i className="fab fa-kaggle"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-data-blue transition-colors duration-200"
              >
                <i  className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Data Analysis</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Dashboard Creation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Custom Reporting</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Training</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; 2025 Ambani Bulemi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
