import { ExternalLink, Clock } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 Power BI Tips for Better Dashboard Design",
      description: "Learn essential design principles to create compelling and user-friendly Power BI dashboards that drive business decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      category: "Tutorial",
      readTime: "5 min read",
      date: "March 15, 2024"
    },
    {
      title: "SQL Query Optimization: From Slow to Lightning Fast",
      description: "Discover advanced SQL optimization techniques that can reduce query execution time by up to 90% with practical examples.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      category: "SQL",
      readTime: "8 min read",
      date: "March 8, 2024"
    },
    {
      title: "Excel Power Query: Automate Your Data Cleaning",
      description: "Master Excel Power Query to automate repetitive data cleaning tasks and save hours of manual work every week.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
      category: "Excel",
      readTime: "6 min read",
      date: "February 28, 2024"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tutorial": "bg-data-blue/10 text-data-blue",
      "SQL": "bg-green-100 text-green-800",
      "Excel": "bg-blue-100 text-blue-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, tips, and tutorials on data analysis, visualization, and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <a
                    href="#"
                    className="text-data-blue hover:text-data-blue-deep transition-colors duration-200 font-medium inline-flex items-center gap-1"
                  >
                    Read More <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-data-blue text-white px-8 py-3 rounded-lg hover:bg-data-blue-deep transition-colors duration-200 font-semibold"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
