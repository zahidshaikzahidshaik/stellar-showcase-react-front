
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a full-stack developer who loves turning complex problems into simple, beautiful solutions. 
              With expertise in modern web technologies, I create applications that are not only functional 
              but also provide exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">30+</div>
                <div className="text-gray-400">Clients</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
              </div>
              <p className="text-gray-400">
                Building scalable applications using React, Node.js, and modern databases
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="flex items-center mb-4">
                <Palette className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
              </div>
              <p className="text-gray-400">
                Creating intuitive interfaces that users love to interact with
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="flex items-center mb-4">
                <Zap className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Performance Optimization</h3>
              </div>
              <p className="text-gray-400">
                Ensuring applications are fast, efficient, and scalable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
