
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'AWS', 'Docker', 'Jenkins', 'Python', 'Linux', 'Git',
    'CI/CD', 'Kubernetes', 'Terraform', 'Ansible', 'MongoDB', 'React.js'
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                I'm a passionate technologist with a strong foundation in cloud computing and DevOps practices. 
                Currently pursuing my career in cloud technologies, I'm dedicated to building scalable, efficient, 
                and automated solutions.
              </p>
              <p className="mb-6">
                My journey has taken me through hands-on experience with AWS cloud services, containerization 
                with Docker, and CI/CD pipeline automation using Jenkins. I believe in the power of automation 
                to transform how we build and deploy software.
              </p>
              <p>
                <strong>Career Objective:</strong> To leverage my technical skills in cloud computing and DevOps 
                to contribute to innovative projects while continuously learning and growing in the field of 
                modern software infrastructure.
              </p>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
