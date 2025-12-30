import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import './Home.css';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingTexts = [
    'AI Innovation',
    'Machine Learning',
    'Web Development',
    'App Development',
    'Research Solutions'
  ];

  useEffect(() => {
    const typeText = () => {
      const text = typingTexts[textIndex];
      if (isTyping) {
        if (currentText.length < text.length) {
          setCurrentText(text.substring(0, currentText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsTyping(true);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, textIndex, isTyping, typingTexts]);

  // Structured Data for Home Page
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CODEPATHIC",
      "url": "https://www.codepathic.com",
      "logo": "https://www.codepathic.com/logo512.png",
      "description": "Leading AI/ML development company specializing in artificial intelligence, machine learning, web development, and data science solutions.",
      "foundingDate": "2022",
      "sameAs": [
        "https://www.instagram.com/codepathic/",
        "https://github.com/codepathic",
        "https://linkedin.com/company/codepathic"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@codepathic.com",
        "availableLanguage": ["English"]
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "6",
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Development",
              "description": "Custom AI solutions that learn, adapt, and evolve with your business needs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Machine Learning",
              "description": "Predictive models and data-driven insights"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CODEPATHIC",
      "url": "https://www.codepathic.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.codepathic.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "CODEPATHIC",
      "image": "https://www.codepathic.com/logo512.png",
      "url": "https://www.codepathic.com",
      "priceRange": "$$-$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "100"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.codepathic.com"
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="CODEPATHIC - AI/ML Development & Data Science Solutions | Leading AI Company"
        description="Transform your ideas into intelligent solutions with CODEPATHIC. Leading AI/ML development company offering cutting-edge artificial intelligence, machine learning, web development, app development, and data science services. 50+ successful projects, 100+ happy clients, 24/7 support."
        keywords="AI development, machine learning services, ML solutions, data science, web development, app development, CODEPATHIC, artificial intelligence company, AI consulting, tech innovation, neural networks, deep learning, predictive analytics, custom AI solutions"
        canonical="https://www.codepathic.com"
        schemaData={schemaData}
      />

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="glitch-container">
              <h1 className="hero-title glitch" data-text="CODEPATHIC">
                CODEPATHIC
              </h1>
            </div>
            
            <div className="typing-container">
              <h2 className="hero-subtitle">
                Pioneering <span className="typing-text">{currentText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>

            <p className="hero-description">
              Transforming ideas into intelligent solutions through cutting-edge AI, 
              machine learning, and full-stack development. Your vision, powered by tomorrow's technology.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="cta-button primary">
                <span>Start Your Project</span>
                <div className="button-glow"></div>
              </Link>
              <Link to="/projects" className="cta-button secondary">
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="ai-brain">
              <div className="brain-core"></div>
              <div className="neural-connections">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`connection connection-${i + 1}`}></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section" aria-label="Company Statistics">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">AI Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="services-preview" aria-label="Our Services">
          <div className="section-header">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">Cutting-edge solutions for modern challenges</p>
          </div>

          <div className="services-grid">
            <article className="service-card ai-card">
              <div className="card-icon" aria-hidden="true">🧠</div>
              <h3>Artificial Intelligence</h3>
              <p>Custom AI solutions that learn, adapt, and evolve with your business needs.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>

            <article className="service-card ml-card">
              <div className="card-icon" aria-hidden="true">🔬</div>
              <h3>Machine Learning</h3>
              <p>Predictive models and data-driven insights to power your decision making.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>

            <article className="service-card web-card">
              <div className="card-icon" aria-hidden="true">🌐</div>
              <h3>Web Development</h3>
              <p>Responsive, scalable web applications built with modern technologies.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>

            <article className="service-card app-card">
              <div className="card-icon" aria-hidden="true">📱</div>
              <h3>App Development</h3>
              <p>Native and cross-platform mobile apps that engage and delight users.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>

            <article className="service-card research-card">
              <div className="card-icon" aria-hidden="true">🔍</div>
              <h3>Research & Innovation</h3>
              <p>Breakthrough research and experimental technologies for tomorrow's solutions.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>

            <article className="service-card consulting-card">
              <div className="card-icon" aria-hidden="true">💡</div>
              <h3>Tech Consulting</h3>
              <p>Strategic guidance to navigate the complex landscape of emerging technologies.</p>
              <div className="card-glow" aria-hidden="true"></div>
            </article>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section" aria-label="Get Started">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build the Future?</h2>
            <p className="cta-description">
              Let's transform your ideas into revolutionary AI-powered solutions.
            </p>
            <Link to="/contact" className="cta-button mega">
              <span>Get Started Today</span>
              <div className="button-particles" aria-hidden="true">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
