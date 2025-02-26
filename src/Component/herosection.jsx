import React, { useState } from "react";
import "./HeroSection.css";

const images = [
  "src/assets/slide1.jpg",
  "src/assets/slide2.jpg",
  "src/assets/slide3.jpg",
  "src/assets/slide4.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Hero Section - Full Screen with Service Names */}
      <div className="hero-section">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <img src={images[currentIndex]} alt="Service Slide" className="slide-img" />
        <div className="service-box-overlay">
          <h2>Our Services</h2>
          <p>🚗 Car Service | 🏍️ Bike Service | 💊 24/7 Medical Delivery | 🔧 Home Plumbing</p>
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-box">🚗 Car Service</div>
        <div className="service-box">🏍️ Bike Service</div>
        <div className="service-box">💊 24/7 Medical Delivery</div>
        <div className="service-box">🔧 Home Plumbing</div>
      </div>

      {/* Collaboration Section */}
      <div className="collaboration-section">
        <h2>Collaboration With</h2>
        <div className="collab-images">
          <img src="src/assets/collab1.avif" alt="Collab 1" />
          <img src="src/assets/collab2.avif" alt="Collab 2" />
          <img src="src/assets/collab3.avif" alt="Collab 3" />
        </div>
      </div>

      {/* Contact Us Section */}
      

   

      {/* Contact Us Section with Map */}
      <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="map-container">
            <iframe 
              title="company-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5662812216445!2d77.2310157150821!3d28.613741982424785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9dc4a07%3A0x74254c3d5f138124!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1718807957978!5m2!1sen!2sin"
              className="map-iframe"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <span>📌</span>
              <p>123, XYZ Street, City, India</p>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <p>support@yourcompany.com</p>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-item">
              <span>⏰</span>
              <p>Open 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="#facebook">📘</a>
          <a href="#twitter">🐦</a>
          <a href="#instagram">📸</a>
          <a href="#linkedin">💼</a>
        </div>
        <p>© 2024 Your Company Name. All rights reserved</p>
      </footer>
    </div>
  );
};

export default HeroSection;
