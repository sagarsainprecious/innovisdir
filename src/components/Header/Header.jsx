import React from "react";
import logo from '../../assets/images/logo.png'
import '../../assets/stylesheets/style.css';
import HeroSectionVideo from '../../assets/images/header-law.mp4' 
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Addresses from "../Addresses/Addresses";
import Teams from "../Teams/Teams";

//extra styles

function Header() {
  return (
    <>
    <section className="navbar-section px-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container-width d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img className="logo-img" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
            style={{ color: 'white'}}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" style={{ color: '#A28655'}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#team_section"
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <section className="header-section px-0">
            <video autoPlay loop muted playsInline controls={false} preload="auto" className="header-video">
                <source type="video/mp4" src={HeroSectionVideo} />
            </video>
            <div className="overlay"></div>
            <div className="header-content">  
                <div>Innovis Law Partners</div>
                <div>Everything in Legal solutions</div>
                <div>IPR | Corporate | Civil | Criminal</div>
            </div>
    </section>

    <HeroSection />
    <Services />
    <Testimonials />
    {/* team  */}
    <Teams />
    <Addresses />
    <Footer />
    </>
  );
}

export default Header;
