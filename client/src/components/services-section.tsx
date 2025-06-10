import { Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Data Analysis & Insights",
      description: "Transform your raw data into actionable insights with comprehensive analysis, statistical modeling, and trend identification.",
      icon: "fas fa-chart-bar",
      features: ["Statistical Analysis", "Trend Analysis", "Performance Metrics"],
      price: "Starting at $500",
      period: "Per project"
    },
    {
      title: "Dashboard Creation",
      description: "Interactive, real-time dashboards using Power BI, Tableau, or Excel to monitor KPIs and business performance.",
      icon: "fas fa-tachometer-alt",
      features: ["Interactive Visualizations", "Real-time Updates", "Custom KPIs"],
      price: "Starting at $800",
      period: "Per dashboard"
    },
    {
      title: "Custom Reporting",
      description: "Automated reporting solutions that deliver regular insights to stakeholders with clear visualizations and recommendations.",
      icon: "fas fa-file-alt",
      features: ["Automated Reports", "Executive Summaries", "Actionable Insights"],
      price: "Starting at $300",
      period: "Per report"
    },
    {
      title: "Data Management",
      description: "Database optimization, data cleaning, ETL processes, and data warehouse setup for improved data quality and accessibility.",
      icon: "fas fa-database",
      features: ["Data Cleaning", "ETL Processes", "Database Optimization"],
      price: "Starting at $1,200",
      period: "Per project"
    },
    {
      title: "Training & Consultation",
      description: "Empower your team with data analysis skills through customized training sessions and strategic consultation.",
      icon: "fas fa-graduation-cap",
      features: ["Team Training", "Strategy Consultation", "Best Practices"],
      price: "$150/hour",
      period: "Hourly rate"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for forecasting, predictive maintenance, and business intelligence applications.",
      icon: "fas fa-brain",
      features: ["Forecasting Models", "Risk Assessment", "Pattern Recognition"],
      price: "Starting at $2,000",
      period: "Per model"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive data analysis and business intelligence services to help your organization make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-data-blue/10 rounded-xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-data-blue`}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-data-blue mb-2">{service.price}</div>
              <p className="text-slate-500 text-sm">{service.period}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-data-blue text-white px-8 py-3 rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-semibold"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
