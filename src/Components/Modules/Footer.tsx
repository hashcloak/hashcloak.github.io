import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* First row: HashCloak section */}
        <div className="mb-10 text-center">
          <div className="font-bold text-2xl text-indigo-500 mb-4">HASHCLOAK</div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building full-stack privacy into blockchain products
          </p>
        </div>
        
        {/* Row: Section titles side by side */}
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-lg flex-1 text-center"><a href="#services">Services</a></h3>
          <h3 className="font-bold text-lg flex-1 text-center"><a href="https://calendly.com/d/cmkh-vss-vmm/hashcloak-intro-call">Contact</a></h3>
        </div>
        
        {/* Columns: Section content underneath titles */}
        <div className="flex justify-between mb-8">
          {/* Services content column */}
          <div className="flex-1 text-center">
            <div className="mb-2"><a href="https://calendly.com/d/cmkh-vss-vmm/hashcloak-intro-call" className="text-gray-400 hover:text-white">Security Auditing</a></div>
            <div className="mb-2"><a href="https://calendly.com/d/cmkh-vss-vmm/hashcloak-intro-call" className="text-gray-400 hover:text-white">Bespoke R&D</a></div>
            <div><a href="https://calendly.com/d/cmkh-vss-vmm/hashcloak-intro-call" className="text-gray-400 hover:text-white">Concierge Advisory</a></div>
          </div>

          
          {/* Resources content column */}
          {/*
          <div className="flex-1 text-center">
            <div className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></div>
            <div><a href="#" className="text-gray-400 hover:text-white">Research Papers</a></div>
          </div>
          */}
          
          {/* Contact content column */}
          <div className="flex-1 text-center">
            <div className="mb-2"><span className="text-gray-400">info@hashcloak.com</span></div>
            <div><span className="text-gray-400">Toronto, Canada</span></div>
          </div>
        </div>
        
        {/* Copyright row */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>© {new Date().getFullYear()} HashCloak Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;