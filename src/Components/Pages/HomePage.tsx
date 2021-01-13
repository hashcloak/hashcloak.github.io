import React from 'react';
import Landing from "../Subpages/Landing";
import Services from "../Subpages/Services"
import Research from "../Subpages/Research";
import Clients from "../Subpages/Clients";
import Navbar from "../Modules/Navbar";
import Footer from "../Modules/Footer";
import Contact from "../Subpages/Contact";
import Blogs from "../Subpages/Blogs";
import Newsletters from "../Subpages/Newsletters";

const useStyles = {
  background: "#141414",
  fontFamily: "Liberation Sans"

}

const HomePage: React.FC = () => {

  return (
    <div style={useStyles} >
      <Navbar />
      <Landing />
      <Services />
      <Research />
      <Clients />
      <Blogs />
      <Newsletters />
      <Contact />
      <Footer />
    </div>
  )
}
export default HomePage;