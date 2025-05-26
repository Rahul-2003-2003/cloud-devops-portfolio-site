
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Attendance System using Face Biometrics",
      description: "Developed an AI-powered attendance tracking system that significantly improved accuracy using facial recognition technology. The system automates the attendance process while maintaining high security standards.",
      techStack: ["Python", "Facial Recognition API", "Machine Learning", "OpenCV"],
      github: "#",
      demo: "#",
      features: [
        "Real-time facial recognition",
        "Automated attendance tracking",
        "Admin dashboard for management",
        "Improved accuracy over traditional methods"
      ]
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Built automated cloud infrastructure provisioning using Infrastructure as Code principles. Implemented scalable and cost-effective cloud solutions with proper monitoring and alerting.",
      techStack: ["AWS", "Terraform", "Jenkins", "Docker", "Linux"],
      github: "#",
      demo: "#",
      features: [
        "Automated infrastructure provisioning",
        "CI/CD pipeline integration",
        "Cost optimization strategies",
        "Comprehensive monitoring setup"
      ]
    },
    {
      title: "DevOps Pipeline Implementation",
      description: "Designed and implemented a complete DevOps pipeline for application deployment, including automated testing, building, and deployment processes with proper version control.",
      techStack: ["Jenkins", "Docker", "Kubernetes", "Git", "Python"],
      github: "#",
      demo: "#",
      features: [
        "Automated testing and deployment",
        "Container orchestration",
        "Version control integration",
        "Rollback capabilities"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in cloud computing, DevOps, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
