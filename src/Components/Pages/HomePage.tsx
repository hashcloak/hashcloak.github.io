import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, BarChart2, Lock, Shield, Code, Zap, Cpu, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '../Modules/Navbar';
import Footer from '../Modules/Footer';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "HashCloak are a premium team. Excited to see them working on noir again 🎉",
      author: "Zac Williamson",
      company: "Aztec Network",
      link: "https://x.com/Zac_Aztec/status/1900326000740966547"
    },
    {
      quote: "HashCloak has been instrumental for us building our blockchain infrastructure. They have covered very crypto vertical from auditing to writing custom zk circuits in our new language. I’d highly recommend HashCloak for anything crypto related.",
      author: "Nick Dodson",
      company: "Fuel Labs"
    },
    {
      quote: "HashCloak's audit of our Lelantus Spark protocol was thorough and insightful. Their recommendations significantly enhanced the security and privacy guarantees of our implementation.",
      author: "Reuben Yap",
      company: "Firo"
    }
  ];

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

  const projects = [
    {
      title: "Semaphore Implementation in Noir",
      description: "Implemented a full Semaphore stack in Noir—writing the circuit, shipping a proof-generation SDK, and delivering UltraPlonk and UltraHonk Solidity verifiers",
      tags: ["Noir", "Semaphore", "Zero-Knowledge"],
      link: "https://hashcloak.github.io/semaphore-noir-final-report/"
    },
    {
      title: "Publicly Verifiable & Private Collaborative ML Model Training",
      description: "mplemented collaborative logistic-regression training in Noir with co-noir MPC, enabling multiple parties to train privately while publishing a publicly verifiable zero-knowledge proof.",
      tags: ["Privacy-Preserving-ML", "MPC", "Noir"],
      link: "https://hashcloak.github.io/noir-mpc-ml-report/"
    },
    {
      title: "Fuel VM Cryptographic Opcode Integration",
      description: "WebAuthn-based burner wallet offering seamless crypto onboarding through biometric authentication.",
      tags: ["R&D", "Cryptography", "Sway"],
      link: "https://github.com/hashcloak/sway-zkp-verifiers"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Add custom font styling
  useEffect(() => {
    // Add Google Fonts link
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Apply font to all elements
    document.body.style.fontFamily = "'Montserrat', sans-serif";
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const renderMobileMenu = () => null; // Removed - handled by Navbar component

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Building full-stack <span className="text-indigo-600">privacy</span> into blockchain products
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                HashCloak is an R&D lab and consultancy specializing in advanced cryptography, security auditing, and privacy infrastructure for blockchain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/d/cmkh-vss-vmm/hashcloak-intro-call" 
                  className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="#projects" 
                  className="flex items-center justify-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition-colors"
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

      {/* Client Logo Showcase */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Select Past Clients</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 py-6 text-center">
            {/* Ethereum Foundation */}
            <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-105">
              <img src="/logos/ethereum-logo-landscape-purple.svg" alt="Ethereum Foundation" className="h-16 w-auto object-contain mb-3 max-w-[140px]"/>
              <span className="text-lg font-bold text-gray-800">Ethereum Foundation</span>
              <span className="text-sm text-gray-600">MACI & Wagyu Audits</span>
            </div>
            
            {/* Firo */}
            <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-105">
              <img src="/logos/firo-logo.svg" alt="Firo" className="h-16 w-auto object-contain mb-3 max-w-[140px]"/>
              <span className="text-lg font-bold text-gray-800">Firo</span>
              <span className="text-sm text-gray-600">Lelantus Spark Protocol</span>
            </div>
            
            {/* Light Protocol */}
            <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-105">
              <img src="/logos/lighticon.svg" alt="Light Protocol" className="h-16 w-auto object-contain mb-3 max-w-[140px]"/>
              <span className="text-lg font-bold text-gray-800">Light Protocol</span>
              <span className="text-sm text-gray-600">Zero-Knowledge Audits</span>
            </div>
            
            {/* Fuel Labs */}
            <div className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-105">
              <img src="/logos/Fuel_Logo_Black_RGB.svg" alt="Fuel Labs" className="h-16 w-auto object-contain mb-3 max-w-[140px]"/>
              <span className="text-lg font-bold text-gray-800">Fuel Labs</span>
              <span className="text-sm text-gray-600">Cryptographic R&D</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
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

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our latest work in blockchain security, privacy, and cryptographic research
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-indigo-600/60 flex items-center justify-center text-white text-xl font-bold text-center">
                  {project.title}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-indigo-600 font-medium">
                    View details
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Own Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Build Our Own Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond consulting, we develop our own cutting-edge blockchain and privacy solutions
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-lg transform -translate-x-3 -translate-y-3 opacity-20"></div>
                <div className="bg-blue-50 p-8 rounded-lg relative">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">StoffelMPC: From Research to Company</h3>
                  <p className="text-gray-700 mb-4">
                    One of our proudest achievements is StoffelMPC, an MPC framework for building secure multi-party computation extensions for smart contracts. What began as an internal research initiative at HashCloak has evolved into a full product and was spun out as its own independent company, Stoffel Labs.
                  </p>
                  <p className="text-gray-700 mb-6">
                    This success story exemplifies our approach: we don't just advise on blockchain technology—we build it, refine it, and launch it. Our hands-on experience as builders gives us a unique perspective and practical knowledge that purely advisory firms simply can't match.
                  </p>
                  <a 
                    href="https://stoffelmpc.com/?utm_source=hashcloak&utm_medium=hashcloak-site&utm_campaign=hashcloak-ref" 
                    className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    Learn about Stoffel Labs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <a href="https://github.com/hashcloak/Meson">
                  <h4  className="font-bold text-lg mb-2">Meson</h4>
                  </a>
                  <p className="text-gray-600">A mixnet for cryptocurrency transactions providing enhanced privacy for blockchain users while maintaining compliance.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <a href="https://github.com/hashcloak/bonfire">
                  <h4 className="font-bold text-lg mb-2">Bonfire Wallet</h4>
                  </a>
                  <p className="text-gray-600">A WebAuthn-based burner wallet using RISC Zero's Bonsai service for seamless crypto onboarding through biometric authentication.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <a href="https://github.com/hashcloak/Starkacy">
                  <h4 className="font-bold text-lg mb-2">Starkacy</h4>
                  </a>
                  <p className="text-gray-600">Researching and designing cryptographic primitives optimized for efficient execution within Cairo, Starknet's virtual machine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-indigo-200 max-w-2xl mx-auto">
              Don't just take our word for it — here's what our clients have to say about our work
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[240px]">
            {testimonials.map((testimonial, index) => (
  <div 
    key={index}
    className={`absolute inset-0 transition-opacity duration-500 ${
      index === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    {testimonial.link ? (
      // Clickable testimonial - wrap in anchor tag
      <a 
        href={testimonial.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-white text-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
          <div className="h-12 w-12 bg-[#519BEC]/20 rounded-full flex items-center justify-center">
            <span className="font-bold text-[#519BEC]">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{testimonial.author}</h4>
            {testimonial.company && (
              <p className="text-gray-600">{testimonial.company}</p>
            )}
          </div>
        </div>
      </a>
    ) : (
      // Non-clickable testimonial - regular div
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
        <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
          <div className="h-12 w-12 bg-[#519BEC]/20 rounded-full flex items-center justify-center">
            <span className="font-bold text-[#519BEC]">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div className="ml-4">
            <h4 className="font-bold">{testimonial.author}</h4>
            {testimonial.company && (
              <p className="text-gray-600">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
))}
            </div>
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                    index === activeTestimonial ? "bg-white" : "bg-indigo-600/30"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose HashCloak?</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                    <p className="text-gray-600">Our team includes specialists in cryptography, blockchain security, and privacy technologies.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">We've successfully completed audits and R&D projects for leading blockchain protocols.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">We're Builders Too</h3>
                    <p className="text-gray-600">We don't just consult—we build our own products and solutions, including StoffelMPC which spun out as Stoffel Labs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 bg-blue-100 rounded-full p-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Comprehensive Service</h3>
                    <p className="text-gray-600">From audits to bespoke R&D to ongoing support, we offer end-to-end solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Zap className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600">Quick response times and efficient project management.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Lock className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Privacy Focus</h3>
                  <p className="text-gray-600">Privacy is in our DNA - we prioritize it in all our work.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Code className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Builders First</h3>
                  <p className="text-gray-600">We're builders who understand developers' challenges.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Shield className="h-10 w-10 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Secure Process</h3>
                  <p className="text-gray-600">End-to-end encrypted communication and secure collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;