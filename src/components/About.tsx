
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            B.Tech Computer Science Engineering graduate passionate about creating innovative web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a graduate B.Tech Computer Science Engineering student passionate about web development. 
              I enjoy working on innovative projects that combine Python, PySpark, and React.js, as well as 
              HTML, CSS, and JavaScript.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to actively contribute to impactful projects by utilizing my technical skills in 
              Python, MySQL, and Apache Spark, while embracing opportunities for continuous learning and 
              career advancement in a dynamic work environment.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am always eager to take on new challenges and expand my knowledge in various technologies. 
              I believe in the power of collaboration and teamwork to achieve outstanding results.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">B.Tech</div>
                <div className="text-gray-400">Degree</div>
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
                Building scalable applications using React.js, Python, and modern databases like MySQL
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="flex items-center mb-4">
                <Palette className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
              </div>
              <p className="text-gray-400">
                Analyzing data using Apache Spark and PySpark to gain valuable business insights
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="flex items-center mb-4">
                <Zap className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">API Integration</h3>
              </div>
              <p className="text-gray-400">
                Creating applications with real-time data using APIs and ensuring optimal performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
