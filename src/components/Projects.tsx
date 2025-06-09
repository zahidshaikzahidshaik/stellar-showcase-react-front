
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A data visualization dashboard that displays weather patterns and analytics using third-party APIs and interactive charts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Social Media App',
      description: 'A modern social platform with real-time messaging, photo sharing, and social features built with React Native and Firebase.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing different technologies and approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
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
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
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
