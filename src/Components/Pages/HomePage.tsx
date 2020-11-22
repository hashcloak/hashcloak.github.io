import React from 'react';
import Landing from "../Subpages/Landing";
import Services from "../Subpages/Services"
import Research from "../Subpages/Research";
import Clients from "../Subpages/Clients";
import Navbar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import Contact from "../Subpages/Contact"

const HomePage: React.FC = () => {
  return (
    <div style={{ background: "#141414" }}>
      <Navbar />
      <Landing />
      <Services />
      <Research />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
export default HomePage;