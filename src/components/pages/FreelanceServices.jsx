import React from "react";
import "../../styles/FreelanceServices.css"; // new CSS file for styling

const FreelanceServices = () => {
  const services = [
    {
      title: "Starter",
      price: "$150",
      features: [
        "1–2 page static website",
        "Responsive design",
        "Deployed to Netlify/Render",
      ],
    },
    {
      title: "Business",
      price: "$300",
      features: [
        "Up to 5 pages",
        "Contact form integration",
        "Basic SEO setup",
        "Hosting setup",
      ],
    },
    {
      title: "Premium",
      price: "$600+",
      features: [
        "Custom full-stack application",
        "Authentication (login/register)",
        "Database integration",
        "Advanced features (API, dashboards)",
      ],
    },
  ];

  return (
    <section className="section-bg">
      <div className="container">
        <h2 className="section-title">Freelance Web Development Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <ul className="service-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="checkmark">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary">
                Get Started
              </a>
            </div>
          ))}
        </div>

        <h3 className="section-subtitle">What Clients Say</h3>
        <div className="testimonial-placeholder">
          ✨ Testimonials coming soon ✨
        </div>
      </div>
    </section>
  );
};

export default FreelanceServices;
