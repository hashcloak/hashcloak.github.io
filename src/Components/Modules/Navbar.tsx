import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderMobileMenu = () => (
    <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="font-bold text-xl text-indigo-600 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>
        <img src="/logos/hashcloak_logo_colour-logo-text.png" alt="HashCloak" className="h-20 w-20 object-contain mb-3"/>
        </div>
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li><a className="block py-2 text-lg font-medium hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" className="block py-2 text-lg font-medium hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#projects" className="block py-2 text-lg font-medium hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>Work</a></li>
          <li><a href="#testimonials" className="block py-2 text-lg font-medium hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" className="block py-2 text-lg font-medium hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Menu */}
      {renderMobileMenu()}

      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-600 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>
          <img src="/logos/hashcloak_logo_colour-logo-text.png" alt="HashCloak" className="h-20 w-20 object-contain mb-3"/>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a className="text-sm font-medium hover:text-indigo-600">Home</a></li>
              <li><a href="#services" className="text-sm font-medium hover:text-indigo-600">Services</a></li>
              <li><a href="#projects" className="text-sm font-medium hover:text-indigo-600">Work</a></li>
              <li><a href="#testimonials" className="text-sm font-medium hover:text-indigo-600">Testimonials</a></li>
              <li><a href="#contact" className="text-sm font-medium hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <a 
            href="#contact" 
            className="hidden md:flex items-center text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;