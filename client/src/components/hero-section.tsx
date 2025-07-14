import { Download, Linkedin, Github, InstagramIcon, FileText, TwitchIcon, Twitter } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Data into{" "}
              <span className="text-data-blue">Actionable Insights</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Data Analyst & Business Intelligence Specialist with 2+ years of experience helping businesses make data-driven decisions through advanced analytics, visualization, and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-data-blue text-white px-8 py-3 rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-semibold text-center"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-data-blue text-data-blue px-8 py-3 rounded-lg hover:bg-data-blue hover:text-white transition-all duration-200 font-semibold text-center"
              >
                Contact Me
              </button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/bulemi-ambani-722638346"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-data-blue transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/bulemi2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-data-blue transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-data-blue transition-colors duration-200"
              >
                <InstagramIcon className="fab fa-Instagram text-2xl"/>
              </a>
              <a
                href="https://www.X.com/Ambani_2019"
                className="text-slate-600 hover:text-data-blue transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="lg:text-right">
            <img
              src="/Images/photo.jpg" 
              alt=" Proffesional data analyst"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
