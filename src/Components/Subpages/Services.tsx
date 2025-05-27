import React from 'react';
import { Shield, Cpu, Lock, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Security Auditing",
      description: "Comprehensive security reviews for cryptographic protocols, smart contracts, and blockchain infrastructure.",
      icon: <Shield className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Bespoke R&D",
      description: "Custom research and implementation of cutting-edge cryptographic solutions for blockchain projects.",
      icon: <Cpu className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Concierge Advisory",
      description: "Direct access to our team of cryptographers and researchers for ongoing support and consultation.",
      icon: <Lock className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer specialized services to help secure and enhance your blockchain projects with cutting-edge cryptography
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;