import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

const Research = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Research areas data
  const researchAreas = useMemo(() => [
    {
      id: 'ml',
      title: 'Machine Learning',
      icon: '🤖',
      description: 'Advanced algorithms for pattern recognition, predictive modeling, and automated decision-making systems.',
      technologies: ['Deep Learning', 'Neural Networks', 'Ensemble Methods', 'Reinforcement Learning'],
      color: 'blue'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      icon: '💬',
      description: 'Understanding and generating human language through computational methods and AI models.',
      technologies: ['Transformers', 'BERT', 'GPT Models', 'Sentiment Analysis'],
      color: 'green'
    },
    {
      id: 'cv',
      title: 'Computer Vision',
      icon: '👁️',
      description: 'Enabling machines to interpret and understand visual information from the world around them.',
      technologies: ['CNNs', 'Object Detection', 'Image Segmentation', 'Face Recognition'],
      color: 'purple'
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: '📊',
      description: 'Extracting insights from complex datasets using statistical methods and machine learning techniques.',
      technologies: ['Statistical Analysis', 'Data Mining', 'Predictive Analytics', 'Big Data'],
      color: 'orange'
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: '🌐',
      description: 'Building scalable web applications with modern frameworks and AI integration.',
      technologies: ['React', 'Node.js', 'AI APIs', 'Cloud Computing'],
      color: 'cyan'
    },
    {
      id: 'app-dev',
      title: 'App Development',
      icon: '📱',
      description: 'Creating intelligent mobile applications with AI-powered features and seamless user experiences.',
      technologies: ['React Native', 'Flutter', 'Mobile AI', 'Cross-platform'],
      color: 'red'
    }
  ], []);

  // Research focus areas
  const researchFocus = useMemo(() => [
    {
      title: 'AI Ethics & Responsible Development',
      description: 'Ensuring AI systems are developed and deployed ethically with consideration for societal impact.',
      icon: '⚖️'
    },
    {
      title: 'Explainable AI',
      description: 'Making AI decision-making processes transparent and interpretable for better trust and adoption.',
      icon: '🔍'
    },
    {
      title: 'Edge Computing & Optimization',
      description: 'Optimizing AI models for deployment on resource-constrained devices and edge environments.',
      icon: '⚡'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Designing AI systems that enhance human capabilities rather than replace human intelligence.',
      icon: '🤝'
    }
  ], []);

  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <div className="research-container">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="hero-content">
          <h1 className="hero-title" data-animate id="hero-title">
            Research & 
            <span className="gradient-text"> Innovation</span>
          </h1>
          <p className="hero-subtitle" data-animate id="hero-subtitle">
            Our research division focuses on cutting-edge AI and ML technologies, 
            pushing the boundaries of what's possible and creating tomorrow's solutions today.
          </p>
          <div className="hero-stats" data-animate id="hero-stats">
            <div className="research-stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Research Areas</span>
            </div>
            <div className="research-stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="research-stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Innovation Potential</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="research-animation">
            <div className="neural-network">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="neural-node"
                  style={{
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${20 + Math.floor(i / 4) * 30}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="neural-connection"
                  style={{
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="research-areas-section" data-animate id="research-areas">
        <div className="section-header">
          <h2 className="section-title">Research Areas</h2>
          <p className="section-subtitle">Exploring the frontiers of artificial intelligence and technology</p>
        </div>

        <div className="research-areas-grid">
          {researchAreas.map((area, index) => (
            <div 
              key={area.id} 
              className={`research-area-card ${area.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="area-icon">{area.icon}</div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>
              
              <div className="area-technologies">
                {area.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="area-footer">
                <Link to="/contact" className="explore-btn">
                  Learn More <span>→</span>
                </Link>
              </div>
              
              <div className="area-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="research-focus-section" data-animate id="research-focus">
        <div className="section-header">
          <h2 className="section-title">Research Focus</h2>
          <p className="section-subtitle">Key areas driving our innovation and development</p>
        </div>

        <div className="focus-grid">
          {researchFocus.map((focus, index) => (
            <div 
              key={index} 
              className="focus-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="focus-icon">{focus.icon}</div>
              <h3 className="focus-title">{focus.title}</h3>
              <p className="focus-description">{focus.description}</p>
              <div className="focus-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section" data-animate id="methodology">
        <div className="section-header">
          <h2 className="section-title">Our Research Methodology</h2>
          <p className="section-subtitle">A systematic approach to innovation and discovery</p>
        </div>

        <div className="methodology-steps">
          <div className="methodology-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Problem Identification</h3>
              <p>We identify real-world challenges that can benefit from AI and ML solutions, focusing on practical applications with measurable impact.</p>
            </div>
          </div>

          <div className="methodology-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Literature Review & Analysis</h3>
              <p>Comprehensive analysis of existing research, identifying gaps and opportunities for innovation in the chosen domain.</p>
            </div>
          </div>

          <div className="methodology-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Hypothesis Formation</h3>
              <p>Developing testable hypotheses based on theoretical foundations and preliminary observations.</p>
            </div>
          </div>

          <div className="methodology-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Experimentation & Development</h3>
              <p>Implementing and testing solutions through rigorous experimentation, prototyping, and iterative development.</p>
            </div>
          </div>

          <div className="methodology-step">
            <div className="step-number">05</div>
            <div className="step-content">
              <h3>Validation & Testing</h3>
              <p>Comprehensive testing and validation of results using appropriate metrics and real-world scenarios.</p>
            </div>
          </div>

          <div className="methodology-step">
            <div className="step-number">06</div>
            <div className="step-content">
              <h3>Documentation & Sharing</h3>
              <p>Documenting findings and sharing knowledge with the community through publications and open-source contributions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="collaboration-section" data-animate id="collaboration">
        <div className="section-header">
          <h2 className="section-title">Research Collaboration</h2>
          <p className="section-subtitle">Building partnerships for breakthrough innovations</p>
        </div>

        <div className="collaboration-content">
          <div className="collaboration-types">
            <div className="collaboration-type">
              <div className="collab-icon">🎓</div>
              <h3>Academic Partnerships</h3>
              <p>Collaborating with universities and research institutions to advance the state of AI and ML research.</p>
            </div>

            <div className="collaboration-type">
              <div className="collab-icon">🏢</div>
              <h3>Industry Collaboration</h3>
              <p>Working with industry partners to solve real-world problems and translate research into practical applications.</p>
            </div>

            <div className="collaboration-type">
              <div className="collab-icon">🌍</div>
              <h3>Open Source Community</h3>
              <p>Contributing to and collaborating with the global open-source community to accelerate innovation.</p>
            </div>

            <div className="collaboration-type">
              <div className="collab-icon">🔬</div>
              <h3>Research Networks</h3>
              <p>Participating in research networks and conferences to share knowledge and stay at the forefront of technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="research-cta-section" data-animate id="research-cta">
        <div className="cta-content">
          <h2 className="cta-title">Join Our Research Journey</h2>
          <p className="cta-description">
            Interested in collaborating on cutting-edge AI research or have a challenging problem that needs innovative solutions?
          </p>
          
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              <span>Start Collaboration</span>
              <div className="button-glow"></div>
            </Link>
            <Link to="/contact" className="cta-button secondary">
              <span>Discuss Research Ideas</span>
            </Link>
          </div>

          <div className="research-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🔬</span>
              <span>Cutting-edge Research</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🤝</span>
              <span>Collaborative Approach</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <span>Real-world Impact</span>
            </div>
          </div>
        </div>

        <div className="cta-visual">
          <div className="research-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="research-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Research);