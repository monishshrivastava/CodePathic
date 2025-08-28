import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'ai-development',
      title: 'AI Development',
      icon: '🧠',
      description: 'Custom artificial intelligence solutions tailored to your business needs.',
      features: [
        'Machine Learning Models',
        'Neural Networks',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'AI Strategy Consulting'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK'],
      pricing: 'Starting from $5,000'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      icon: '🔬',
      description: 'Advanced ML algorithms and models for data-driven decision making.',
      features: [
        'Data Analysis & Preprocessing',
        'Model Training & Optimization',
        'Deep Learning Solutions',
        'Reinforcement Learning',
        'MLOps & Deployment',
        'Performance Monitoring'
      ],
      technologies: ['Python', 'R', 'Jupyter', 'MLflow', 'Kubernetes'],
      pricing: 'Starting from $3,000'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: '🌐',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      features: [
        'Responsive Web Design',
        'Frontend Development',
        'Backend API Development',
        'Database Design',
        'Cloud Deployment',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      pricing: 'Starting from $2,500'
    },
    {
      id: 'app-development',
      title: 'App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting from $4,000'
    },
    {
      id: 'research',
      title: 'Research & Innovation',
      icon: '🔍',
      description: 'Cutting-edge research and experimental technology development.',
      features: [
        'Applied Research',
        'Prototype Development',
        'Technical Feasibility Studies',
        'Innovation Consulting',
        'White Paper Creation',
        'Patent Support'
      ],
      technologies: ['Custom Solutions', 'Emerging Tech', 'Experimental Frameworks'],
      pricing: 'Custom Quotes'
    },
    {
      id: 'consulting',
      title: 'Tech Consulting',
      icon: '💡',
      description: 'Strategic technology consulting to guide your digital transformation.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Architecture Review',
        'Team Training',
        'Process Optimization',
        'Innovation Workshops'
      ],
      technologies: ['Agile', 'DevOps', 'Cloud Architecture', 'Best Practices'],
      pricing: 'Starting from $1,500'
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="hero-subtitle">
            Comprehensive AI and technology solutions to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${activeService === index ? 'active' : ''}`}
              onClick={() => setActiveService(index)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>Key Features:</h4>
                <ul>
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-pricing">{service.pricing}</div>
              
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="details-container">
          <div className="details-content">
            <div className="details-header">
              <div className="detail-icon">{services[activeService].icon}</div>
              <div>
                <h2 className="detail-title">{services[activeService].title}</h2>
                <p className="detail-description">{services[activeService].description}</p>
              </div>
            </div>

            <div className="details-grid">
              <div className="features-section">
                <h3>Complete Feature Set</h3>
                <div className="features-list">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-section">
                <h3>Technologies We Use</h3>
                <div className="tech-stack">
                  {services[activeService].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-cta">
              <button className="cta-button primary">
                <span>Get Started</span>
                <div className="button-glow"></div>
              </button>
              <button className="cta-button secondary">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">How we deliver exceptional results</p>
        </div>

        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Discovery & Analysis</h3>
              <p>We dive deep into your business needs, challenges, and goals to understand the perfect solution.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Strategy & Planning</h3>
              <p>Develop a comprehensive strategy with clear milestones, timelines, and deliverables.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Development & Testing</h3>
              <p>Agile development with continuous testing, feedback loops, and iterative improvements.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Deployment & Support</h3>
              <p>Seamless deployment with comprehensive training and ongoing support for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss which service is the perfect fit for your needs
          </p>
          <div className="cta-buttons">
            <button className="cta-button mega">
              <span>Start Your Project</span>
              <div className="button-particles">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;