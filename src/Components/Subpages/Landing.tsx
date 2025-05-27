import React from 'react';
import { ArrowRight, Lock, Shield, BarChart2, Code } from 'lucide-react';

const Landing = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building full-stack <span className="text-indigo-600">privacy</span> into blockchain products
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-12">
              HashCloak is an R&D lab and consultancy specializing in advanced cryptography, security auditing, and privacy infrastructure for blockchain projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center sm:justify-start text-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#projects" 
                className="flex items-center justify-center sm:justify-start text-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform translate-x-3 translate-y-3 opacity-20"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center justify-center text-center">
                    <Lock className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium">Enhanced Privacy</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center justify-center text-center">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium">Security Audits</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center justify-center text-center">
                    <BarChart2 className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium">Advanced Cryptography</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center justify-center text-center">
                    <Code className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium">Expert Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;