import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Comprehensive sales analytics dashboard that increased revenue visibility by 40% and reduced reporting time by 75%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Power BI", "SQL"],
      client: "E-commerce Client"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced segmentation model that identified 5 distinct customer personas, leading to 25% increase in targeted marketing ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Power BI"],
      client: "Retail Chain"
    },
    {
      title: "Financial Forecasting Model",
      description: "Predictive model for quarterly revenue forecasting with 95% accuracy, enabling better budget planning and resource allocation.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Excel", "Python"],
      client: "FinTech Startup"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Patient outcome analysis dashboard that helped reduce average treatment time by 20% and improved patient satisfaction scores.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Power BI", "SQL"],
      client: "Medical Center"
    },
    {
      title: "Supply Chain Optimization",
      description: "Machine learning model for inventory optimization that reduced costs by 30% and improved delivery times by 15%.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "ML"],
      client: "Logistics Company"
    },
    {
      title: "Marketing Campaign Analysis",
      description: "Multi-channel campaign performance analysis that optimized ad spend allocation and increased overall ROI by 45%.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Tableau", "GA"],
      client: "Digital Agency"
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "Power BI": "bg-data-blue/10 text-data-blue",
      "SQL": "bg-green-100 text-green-800",
      "Python": "bg-purple-100 text-purple-800",
      "Tableau": "bg-orange-100 text-orange-800",
      "Excel": "bg-blue-100 text-blue-800",
      "R": "bg-red-100 text-red-800",
      "ML": "bg-gray-100 text-gray-800",
      "GA": "bg-blue-100 text-blue-800"
    };
    return colors[tag] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Clients Projects Done</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore some of my recent data analysis projects that delivered measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                {/* <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{project.client}</span>
                  <a
                    href="#"
                    className="text-data-blue hover:text-data-blue-deep transition-colors duration-200 font-medium inline-flex items-center gap-1"
                  >
                    View Case Study <ExternalLink className="h-4 w-4" />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="bg-data-blue text-white px-8 py-3 rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-semibold"
          >
            View All Projects
          </a>
        </div> */}
      </div>
    </section>
  );
}
