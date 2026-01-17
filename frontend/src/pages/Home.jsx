import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Download, Code, Database, Cpu, Terminal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';
import mockData from '../utils/mock';

const Home = () => {
  const { personalInfo, experience, education, projects, skills } = mockData;

  const handleDownloadResume = () => {
    window.open('https://customer-assets.emergentagent.com/job_0ddd62b4-3916-4ddc-a706-cda936530007/artifacts/lr0uk7hz_KandagatlaAnoop_Resume.pdf', '_blank');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold font-mono">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-white">KA</span>
              <span className="text-cyan-400">/&gt;</span>
            </div>
            <div className="hidden md:flex space-x-8 font-mono text-sm">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <Button 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-mono text-sm"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            <div className="font-mono text-cyan-400 text-sm animate-pulse">Hi, my name is</div>
            <h1 className="text-6xl md:text-8xl font-bold font-mono">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 font-mono">
              AI Engineer.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-mono leading-relaxed">
              I'm an AI Engineer specializing in building practical AI solutions. Currently focused on 
              <span className="text-cyan-400"> deep learning</span>, 
              <span className="text-blue-400"> computer vision</span>, and 
              <span className="text-cyan-400"> natural language processing</span>.
            </p>
            <div className="flex gap-4 pt-6">
              <Button 
                onClick={handleDownloadResume}
                className="rgb-border-button bg-black hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-500/20 border-2 border-cyan-500 text-cyan-400 font-mono px-8 py-6 text-lg"
              >
                View Resume
              </Button>
              <a href="#contact">
                <Button 
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-mono px-8 py-6 text-lg"
                >
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-2">
              <span className="text-cyan-400">02.</span> Professional Journey
            </h2>
            <p className="text-gray-400 font-mono">Roles I've worked in over time</p>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="rgb-border-card bg-black border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-2xl font-mono text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-mono text-gray-400">{exp.company}</CardDescription>
                    </div>
                    <div className="text-green-400 font-mono text-sm font-bold">{exp.date}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 font-mono">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-2">
              <span className="text-cyan-400">03.</span> Educational Journey
            </h2>
            <p className="text-gray-400 font-mono">Academic achievements and learning path</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="rgb-border-card bg-black/80 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-mono text-white">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg font-mono text-gray-400">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-green-400 font-mono text-sm font-bold">{edu.date}</div>
                  <div className="text-gray-400 font-mono text-sm">{edu.location}</div>
                  {edu.focus && (
                    <div className="pt-4">
                      <p className="text-cyan-400 font-mono text-sm font-bold mb-2">Focus Areas:</p>
                      <p className="text-gray-300 font-mono text-sm">{edu.focus}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-2">
              <span className="text-cyan-400">04.</span> Things I've Worked On
            </h2>
            <p className="text-gray-400 font-mono">Some of them</p>
          </div>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="rgb-border-card bg-black border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h3 className="text-3xl font-bold font-mono mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-mono mb-4 leading-relaxed">{project.description}</p>
                    <ul className="space-y-2 mb-6 text-gray-400 font-mono text-sm">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-2">
              <span className="text-cyan-400">05.</span> What I Work With
            </h2>
            <p className="text-gray-400 font-mono">Technologies and tools in my stack</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="rgb-border-card bg-black/80 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-mono text-cyan-400 flex items-center gap-2">
                    {category === 'AI/ML' && <Cpu className="h-5 w-5" />}
                    {category === 'Data Engineering' && <Database className="h-5 w-5" />}
                    {category === 'Backend' && <Code className="h-5 w-5" />}
                    {category === 'Tools' && <Terminal className="h-5 w-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs font-mono bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-cyan-500/30 text-gray-300 rounded hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold font-mono mb-2">
              <span className="text-cyan-400">06.</span> Get In Touch
            </h2>
            <p className="text-gray-400 font-mono">Let's build something amazing together</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="rgb-border-card bg-black border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400 font-mono">Email</p>
                    <p className="text-white font-mono">{personalInfo.email}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rgb-border-card bg-black border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400 font-mono">Location</p>
                    <p className="text-white font-mono">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex gap-4 pt-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rgb-icon-button p-4 bg-black border-2 border-cyan-500/30 hover:border-cyan-500 rounded-lg transition-all duration-300">
                  <Github className="h-6 w-6 text-cyan-400" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rgb-icon-button p-4 bg-black border-2 border-blue-500/30 hover:border-blue-500 rounded-lg transition-all duration-300">
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input 
                name="name"
                placeholder="Name" 
                required
                className="bg-black border-cyan-500/30 focus:border-cyan-500 text-white font-mono"
              />
              <Input 
                name="email"
                type="email"
                placeholder="Email" 
                required
                className="bg-black border-cyan-500/30 focus:border-cyan-500 text-white font-mono"
              />
              <Input 
                name="subject"
                placeholder="Subject" 
                required
                className="bg-black border-cyan-500/30 focus:border-cyan-500 text-white font-mono"
              />
              <Textarea 
                name="message"
                placeholder="Message" 
                required
                rows={6}
                className="bg-black border-cyan-500/30 focus:border-cyan-500 text-white font-mono resize-none"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 font-mono"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 font-mono text-sm">
            Built with <span className="text-cyan-400">React</span> • Designed by <span className="text-blue-400">{personalInfo.name}</span>
          </p>
          <p className="text-gray-600 font-mono text-xs mt-2">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;