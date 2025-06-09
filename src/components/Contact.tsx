
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">john.doe@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-slate-700 p-3 rounded-full text-gray-400 hover:text-white hover:bg-slate-600 transition-all duration-200 hover-scale">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="bg-slate-700 p-3 rounded-full text-gray-400 hover:text-white hover:bg-slate-600 transition-all duration-200 hover-scale">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="bg-slate-700 p-3 rounded-full text-gray-400 hover:text-white hover:bg-slate-600 transition-all duration-200 hover-scale">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center hover-scale"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2024 John Doe. Built with React & TypeScript. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
