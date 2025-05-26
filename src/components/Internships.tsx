
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const experiences = [
    {
      role: "Cloud Analyst",
      company: "Aastrazen Technologies",
      duration: "Sep 2023 - Nov 2023",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Gained hands-on experience with AWS cloud services and infrastructure management",
        "Implemented Docker containerization for improved application deployment",
        "Worked with Jenkins for continuous integration and deployment automation",
        "Collaborated on cloud migration projects and cost optimization strategies",
        "Developed monitoring and alerting solutions for cloud infrastructure"
      ],
      technologies: ["AWS", "Docker", "Jenkins", "Linux", "CloudWatch", "EC2", "S3"]
    },
    {
      role: "Software Developer",
      company: "Aastrazen Technologies",
      duration: "Jun 2023 - Aug 2023",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Developed Python scripts for automation and data processing tasks",
        "Implemented quality assurance automation using Python testing frameworks",
        "Enhanced web applications with improved user interface and functionality",
        "Collaborated with cross-functional teams in agile development environment",
        "Contributed to code reviews and maintained coding standards"
      ],
      technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "Git", "Selenium", "PyTest"]
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My internship experiences have provided me with practical knowledge in cloud computing, DevOps, and software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 bg-gradient-to-r from-white to-blue-50/30"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {experience.role}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-blue-600">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {experience.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-600 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {experience.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-800 hover:shadow-md transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
