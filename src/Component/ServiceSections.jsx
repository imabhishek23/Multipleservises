import React, { useState, useEffect } from 'react';
import './ServiceSections.css';

const servicesData = [
  {
    id: 1,
    title: "Car/Bike Services",
    formFields: [
      { label: "Pickup Location", type: "text" },
      { label: "Drop Location", type: "text" }
    ],
    contact: "Mechanic Hotline: 1800-123-4567 | Rental: 1800-765-4321",
    image: "car-service.jpg",
    bgColor: "#ffeeba"
  },
  {
    id: 2,
    title: "24/7 Medical Support",
    formFields: [
      { label: "Your Location", type: "text" },
      { label: "Medical Type", type: "select", options: ["Ambulance", "Medicine Delivery", "Doctor Consultation"] }
    ],
    contact: "Emergency: 108 | Pharmacy: 1800-987-6543",
    image: "medical.jpg",
    bgColor: "#cce5ff"
  },
  {
    id: 3,
    title: "Home Electrician",
    formFields: [
      { label: "Address", type: "text" },
      { label: "Issue Type", type: "select", options: ["Wiring", "Fuse", "Installation"] }
    ],
    contact: "Electrician: 1800-112-2334 | Support: help@electric.com",
    image: "electrician.jpg",
    bgColor: "#d4edda"
  },
  {
    id: 4,
    title: "Plumbing Services",
    formFields: [
      { label: "Location", type: "text" },
      { label: "Problem Type", type: "select", options: ["Leakage", "Blockage", "Installation"] }
    ],
    contact: "24/7 Helpline: 1800-445-5667 | WhatsApp: +91 9876543210",
    image: "plumbing.jpg",
    bgColor: "#f8d7da"
  }
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const service = servicesData.find(s => 
          s.title.toLowerCase().replace(/[^a-z0-9]/g, '') === hash.toLowerCase()
        );
        if (service) {
          setSelectedService(service);
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        setSelectedService(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleInputChange = (serviceId, fieldLabel, value) => {
    setFormData(prev => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        [fieldLabel]: value
      }
    }));
  };

  const handleSubmit = (e, service) => {
    e.preventDefault();
    const serviceFormData = formData[service.id] || {};
    console.log('Submitting form for', service.title, serviceFormData);
    // Here you would typically send the data to your backend
    alert(`Service requested for ${service.title}!\nWe'll contact you shortly.`);
  };

  const renderServiceForm = (service) => {
    const serviceFormData = formData[service.id] || {};
    
    return (
      <section 
        id={service.title.toLowerCase().replace(/[^a-z0-9]/g, '')} 
        key={service.id}
        className="service-container" 
        style={{ backgroundColor: service.bgColor }}
      >
        <div className="service-content">
          <h2>{service.title}</h2>
          <div className="service-form-container">
            <form className="service-form" onSubmit={(e) => handleSubmit(e, service)}>
              {service.formFields.map((field, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={`${service.id}-${field.label}`}>{field.label}:</label>
                  {field.type === 'select' ? (
                    <select
                      id={`${service.id}-${field.label}`}
                      value={serviceFormData[field.label] || ''}
                      onChange={(e) => handleInputChange(service.id, field.label, e.target.value)}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={`${service.id}-${field.label}`}
                      placeholder={`Enter ${field.label}`}
                      value={serviceFormData[field.label] || ''}
                      onChange={(e) => handleInputChange(service.id, field.label, e.target.value)}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="request-btn">Request Service</button>
            </form>
            <div className="service-image">
              <img 
                src={`/src/assets/${service.image}`} 
                alt={service.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Service+Image';
                }}
              />
            </div>
          </div>
          <div className="contact-info">
            <p>{service.contact}</p>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="services-wrapper">
      {selectedService ? (
        renderServiceForm(selectedService)
      ) : (
        servicesData.map(service => renderServiceForm(service))
      )}
    </div>
  );
};

export default ServiceSection;