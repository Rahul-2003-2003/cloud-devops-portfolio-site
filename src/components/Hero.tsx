
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Cloud Enthusiast | DevOps Learner | Python Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Rahul B
            </span>
          </h1>
          <div className="text-xl sm:text-2xl text-gray-600 mb-8 h-8">
            <span className="border-r-2 border-blue-600 animate-pulse">
              {displayText}
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Passionate about cloud technologies and DevOps practices. Building scalable solutions 
            and automating workflows to drive innovation and efficiency.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('resume')}
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/rahul-b-9a9681311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:rahulboobalan20@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
