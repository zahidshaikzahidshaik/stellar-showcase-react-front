
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zahid Shaik</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            B.Tech Computer Science Engineering Graduate passionate about web development and innovative technology solutions
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/zahidshaikzahidshaik" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/shaikzahidhussain" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
              <Linkedin size={28} />
            </a>
            <a href="https://www.instagram.com/zahid_shaik_56/?igsh=N2hhOHQ0dHE2YnFi#" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
              <Instagram size={28} />
            </a>
            <a href="https://www.facebook.com/zahid.shaik.3114?rdid=QK713qYaWqW7Cz6J&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1L7vj1u2Md%2F#" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 hover-scale">
              <Facebook size={28} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover-scale"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors duration-200">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
