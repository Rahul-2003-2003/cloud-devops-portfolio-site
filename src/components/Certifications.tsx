
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Cloud Internship",
      issuer: "Amazon Web Services (AWS)",
      date: "Sep 2023 - Nov 2023",
      description: "Comprehensive cloud computing program covering AWS services, architecture, and best practices. Gained hands-on experience with cloud infrastructure, security, and deployment strategies.",
      skills: ["AWS Cloud Services", "Cloud Architecture", "Security Best Practices", "Cost Optimization", "Infrastructure as Code"],
      credentialId: "AWS-2023-CLOUD-INT",
      verifyUrl: "#",
      badge: "🏆"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{cert.badge}</div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{cert.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award size={18} />
                    Skills Acquired:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">More certifications in progress...</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm">Continuous Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm">Goal Oriented</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm">Growth Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
