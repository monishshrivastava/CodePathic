import React, { useState, useEffect } from 'react';
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

  return (
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
            <button className="cta-button primary">
              <span>Start Your Project</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-button secondary">
              <span>View Our Work</span>
            </button>
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
      <section className="stats-section">
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
      <section className="services-preview">
        <div className="section-header">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">Cutting-edge solutions for modern challenges</p>
        </div>

        <div className="services-grid">
          <div className="service-card ai-card">
            <div className="card-icon">🧠</div>
            <h3>Artificial Intelligence</h3>
            <p>Custom AI solutions that learn, adapt, and evolve with your business needs.</p>
            <div className="card-glow"></div>
          </div>

          <div className="service-card ml-card">
            <div className="card-icon">🔬</div>
            <h3>Machine Learning</h3>
            <p>Predictive models and data-driven insights to power your decision making.</p>
            <div className="card-glow"></div>
          </div>

          <div className="service-card web-card">
            <div className="card-icon">🌐</div>
            <h3>Web Development</h3>
            <p>Responsive, scalable web applications built with modern technologies.</p>
            <div className="card-glow"></div>
          </div>

          <div className="service-card app-card">
            <div className="card-icon">📱</div>
            <h3>App Development</h3>
            <p>Native and cross-platform mobile apps that engage and delight users.</p>
            <div className="card-glow"></div>
          </div>

          <div className="service-card research-card">
            <div className="card-icon">🔍</div>
            <h3>Research & Innovation</h3>
            <p>Breakthrough research and experimental technologies for tomorrow's solutions.</p>
            <div className="card-glow"></div>
          </div>

          <div className="service-card consulting-card">
            <div className="card-icon">💡</div>
            <h3>Tech Consulting</h3>
            <p>Strategic guidance to navigate the complex landscape of emerging technologies.</p>
            <div className="card-glow"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Build the Future?</h2>
          <p className="cta-description">
            Let's transform your ideas into revolutionary AI-powered solutions.
          </p>
          <button className="cta-button mega">
            <span>Get Started Today</span>
            <div className="button-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="particle"></div>
              ))}
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;