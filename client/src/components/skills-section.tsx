export default function SkillsSection() {
  const skills = [
    {
      name: "SQL",
      description: "Querying, Optimization, and Database Management",
      icon: "fas fa-database",
      level: 85,
      expertise: "Expert"
    },
    {
      name: "Power BI",
      description: "Interactive dashboards and business intelligence",
      icon: "fas fa-chart-bar",
      level: 90,
      expertise: "Expert"
    },
    {
      name: "Excel",
      description: "Advanced formulas, pivot tables, and Power Query",
      icon: "fas fa-table",
      level: 95,
      expertise: "Expert"
    },
    {
      name: "Python",
      description: "Pandas, NumPy, Matplotlib, Seaborn",
      icon: "fab fa-python",
      level: 85,
      expertise: "Advanced"
    },
    {
      name: "Tableau",
      description: "Data visualization and storytelling",
      icon: "fas fa-chart-line",
      level: 88,
      expertise: "Advanced"
    },
    {
      name: "R",
      description: "Statistical analysis and modeling",
      icon: "fab fa-r-project",
      level: 80,
      expertise: "Advanced"
    },
    {
      name: "Machine Learning",
      description: "Predictive modeling and algorithms",
      icon: "fas fa-brain",
      level: 75,
      expertise: "Intermediate"
    },
    {
      name: "Google Analytics",
      description: "Web analytics and digital marketing insights",
      icon: "fab fa-google",
      level: 85,
      expertise: "Advanced"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Skills & Tools</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Proficient in a comprehensive suite of data analysis and visualization tools to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-data-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${skill.icon} text-2xl text-data-blue`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{skill.name}</h3>
                <p className="text-slate-600 mb-4">{skill.description}</p>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-data-blue h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-500 mt-2 block">{skill.expertise}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
