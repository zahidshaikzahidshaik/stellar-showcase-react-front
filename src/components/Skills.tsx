
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-400' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-400' },
    { name: 'UI/UX Design', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-500' },
    { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-400' },
    { name: 'GraphQL', level: 78, color: 'from-pink-500 to-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                  style={{ 
                    width: `${skill.level}%`,
                    animation: `slideIn 1s ease-out ${index * 0.1}s both`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {['Frontend', 'Backend', 'Database', 'DevOps'].map((category, index) => (
            <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover-scale">
              <div className="text-2xl font-bold text-blue-400 mb-2">{index + 1}</div>
              <div className="text-white font-semibold">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
