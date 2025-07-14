import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 ">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto ">
            Passionate about uncovering stories hidden in data and translating complex analytics into clear, actionable business strategies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Data analytics workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm text-slate-700 leading-relaxed ">
              I hold a Bachelor's degree in Business Information Technology, Certication in Data Science (Data Analysis and Machine Learning) and over 3 years of hands-on experience,
               I specialize in transforming raw data into meaningful insights that drive business growth. My expertise spans across various industries including finance, healthcare, and e-commerce.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed  ">
              I believe that great data analysis is not just about numbers it's about understanding the story behind the data and presenting it in a way that empowers decision-makers to take confident action.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-data-blue mb-2">50+</div>
                <div className="text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-data-blue mb-2">50+</div>
                <div className="text-slate-600 font-medium">Clients Served</div>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="/resume.pdf"
                download="Ambani_Bulemi_Resume.pdf"
                className="inline-flex items-center gap-2 text-data-blue hover:text-data-blue-deep transition-colors duration-200 font-semibold"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
