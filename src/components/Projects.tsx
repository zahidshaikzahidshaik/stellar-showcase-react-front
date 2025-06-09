
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Application using Python',
      description: 'A weather application built using Python that fetches and displays weather data from the OpenWeatherMap API. Features real-time weather updates, 5-day forecasts, weather alerts, and a user-friendly interface with accurate data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tech: ['Python', 'OpenWeatherMap API', 'JSON', 'GUI'],
      github: 'https://github.com/zahidshaikzahidshaik/weather-app-',
      live: '#'
    },
    {
      title: 'Ecommerce Sales Analysis using Apache Spark',
      description: 'An analysis of ecommerce sales data using Apache Spark to gain insights into sales trends and patterns. Includes data cleaning, customer behavior analysis, visualization of key metrics, and seasonal trend analysis.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Apache Spark', 'PySpark', 'Data Analysis', 'Python'],
      github: 'https://github.com/zahidshaikzahidshaik/Ecommerce-Sales-Analysis',
      live: '#'
    },
    {
      title: 'Task Management App using React.js',
      description: 'A task management application built using React.js that allows users to create, update, and delete tasks. Features task prioritization, due date reminders, progress tracking, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
      github: 'https://github.com/zahidshaikzahidshaik/task-management-app',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my projects showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.title} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover-scale">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
