import React from 'react';
import Navbar from 'components/templates/Navbar';
import MainVisual from 'components/templates/MainVisual';
import Services from 'components/templates/Services';
import Mission from 'components/templates/Mission';
import Products from 'components/templates/Products';
import Research from 'components/templates/Research';
import Supporters from 'components/templates/Supporters';
import Announcements from 'components/templates/Announcements';
import Contact from 'components/templates/Contact';
import Footer from '../templates/Footer';

const HomePage: React.FC = () => (
  <>
    <div className="flex flex-col justify-center m-0 min-h-full overflow-x-hidden">
      <Navbar />
      <MainVisual />
      <Mission />
      <Products />
      <Services />
      <Research />
      <Supporters />
      <Announcements />
      <Contact />
      <Footer />
    </div>
  </>
);
export default HomePage;
