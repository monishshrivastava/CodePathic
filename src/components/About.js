import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState({});
  const [animationComplete, setAnimationComplete] = useState(false);

  // Optimized intersection observer
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

    // Use a more efficient selector
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Memoized data to prevent unnecessary re-renders
  const stats = useMemo(() => [
    { number: '50+', label: 'AI Projects Delivered', icon: '🚀' },
    { number: '100+', label: 'Happy Clients', icon: '😊' },
    { number: '6+', label: 'Combined Years Experience', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '🛠️' }
  ], []);

  const values = useMemo(() => [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and ML technologies.',
      color: 'blue'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'Every project is crafted with precision, attention to detail, and unwavering quality standards.',
      color: 'yellow'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and bring it to life.',
      color: 'green'
    },
    {
      icon: '🔬',
      title: 'Research-Driven',
      description: 'Our solutions are backed by thorough research and latest technological advancements.',
      color: 'purple'
    }
  ], []);

const team = useMemo(() => [
    {
      name: 'Shiv Narayan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 4+ years of expertise in machine learning and data science. Passionate about creating AI solutions that solve real-world problems and drive business transformation through advanced ML models.',
      skills: ['Machine Learning', 'Data Science', 'Deep Learning', 'Python', 'TensorFlow', 'Statistical Analysis'],
      isFounder: true,
      experience: '4+ Years',
      specialization: 'ML Engineering & Data Science',
      achievements: ['Advanced ML Models', 'Data Science Expert', 'Research Publications']
    },
    {
      name: 'Monish Shrivastava',
      role: 'Co-Founder & Chief Technology Officer',
      bio: 'Experienced technology leader with 2+ years of experience in ML, data science, and full-stack development. Specializes in building scalable AI solutions and driving technological innovation.',
      skills: ['Machine Learning', 'Data Science', 'Web Development', 'App Development', 'Python', 'React'],
      isFounder: true,
      experience: '2+ Years',
      specialization: 'AI/ML & Full-Stack Development',
      achievements: ['50+ Projects Delivered', 'AI Innovation Leader', 'Full-Stack Expert']
    }
  ], []);

  const tabContent = useMemo(() => ({
    mission: {
      title: 'Our Mission',
      content: `To democratize artificial intelligence and make cutting-edge AI solutions 
        accessible to businesses of all sizes. We believe that AI should empower 
        human creativity and solve real-world problems, not replace human intelligence 
        but augment it.`,
      points: [
        { icon: '🎯', text: 'Deliver AI solutions that create measurable business value' },
        { icon: '🌍', text: 'Make AI technology accessible to organizations worldwide' },
        { icon: '🔬', text: 'Pioneer responsible AI development and deployment' },
        { icon: '💡', text: 'Foster innovation through collaborative partnerships' }
      ]
    },
    vision: {
      title: 'Our Vision',
      content: `To be the leading AI innovation partner that bridges the gap between 
        theoretical research and practical applications. We envision a future 
        where AI seamlessly integrates into everyday workflows, enhancing 
        productivity and enabling breakthrough discoveries.`,
      timeline: [
        { year: '2024', content: 'Launch advanced AI research lab and expand capabilities' },
        { year: '2025', content: 'Expand to international markets and strategic partnerships' },
        { year: '2026', content: 'Pioneer quantum-AI hybrid systems and next-gen solutions' },
        { year: '2027', content: 'Establish AI education programs and industry standards' }
      ]
    },
    approach: {
      title: 'Our Approach',
      content: `We follow a research-driven methodology that combines academic rigor 
        with industry pragmatism. Every solution is tailored to our client's 
        unique challenges and built with scalability and sustainability in mind.`,
      steps: [
        {
          number: '01',
          title: 'Research & Analysis',
          description: 'Deep dive into your challenges and opportunities with comprehensive market analysis'
        },
        {
          number: '02',
          title: 'Strategy & Design',
          description: 'Develop comprehensive AI strategy and solution architecture tailored to your needs'
        },
        {
          number: '03',
          title: 'Build & Iterate',
          description: 'Agile development with continuous testing, refinement, and client feedback integration'
        },
        {
          number: '04',
          title: 'Deploy & Scale',
          description: 'Seamless deployment with ongoing support, monitoring, and optimization'
        }
      ]
    }
  }), []);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleCTAClick = useCallback((action) => {
    // Add analytics tracking here if needed
    console.log(`CTA clicked: ${action}`);
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title" data-animate id="hero-title">
            Building Tomorrow's
            <span className="gradient-text"> Intelligence</span>
          </h1>
          <p className="hero-subtitle" data-animate id="hero-subtitle">
            We are a team of passionate innovators, researchers, and developers 
            dedicated to creating AI solutions that transform industries and improve lives.
          </p>
          <div className="hero-stats" data-animate id="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years Combined Experience</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="dna-helix">
            <div className="helix-strand strand-1"></div>
            <div className="helix-strand strand-2"></div>
            <div className="helix-particles">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle" 
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${10 + (i * 4)}%`
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section" data-animate id="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon" aria-hidden="true">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Company Story Tabs */}
      <section className="story-section" data-animate id="story">
        <div className="section-header">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">Discover what drives us forward</p>
        </div>

        <div className="tabs-container">
          <div className="tab-buttons" role="tablist">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabChange(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`${tab}-panel`}
                id={`${tab}-tab`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {Object.entries(tabContent).map(([key, content]) => (
              <div
                key={key}
                className={`tab-panel ${activeTab === key ? 'active fade-in' : ''}`}
                role="tabpanel"
                aria-labelledby={`${key}-tab`}
                id={`${key}-panel`}
                hidden={activeTab !== key}
              >
                <h3>{content.title}</h3>
                <p>{content.content}</p>
                
                {content.points && (
                  <div className="mission-points">
                    {content.points.map((point, index) => (
                      <div key={index} className="point">
                        <span className="point-icon" aria-hidden="true">{point.icon}</span>
                        <span>{point.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {content.timeline && (
                  <div className="vision-timeline">
                    {content.timeline.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-content">{item.content}</div>
                      </div>
                    ))}
                  </div>
                )}

                {content.steps && (
                  <div className="approach-steps">
                    {content.steps.map((step, index) => (
                      <div key={index} className="step">
                        <div className="step-number">{step.number}</div>
                        <div className="step-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="values-section" data-animate id="values">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`value-card ${value.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon" aria-hidden="true">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Team Section - Founders Only */}
      <section className="team-section" data-animate id="team">
        <div className="section-header">
          <h2 className="section-title">Meet Our Founders</h2>
          <p className="section-subtitle">The visionary minds behind CODEPATHIC</p>
        </div>

        <div className="founders-grid">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="founder-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="founder-badge">
                <span className="crown-icon">👑</span>
                <span className="badge-text">{index === 0 ? 'Founder' : 'Co-Founder'}</span>
              </div>
              
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="avatar-glow"></div>
                <div className="experience-badge">
                  {member.experience}
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <div className="member-specialization">{member.specialization}</div>
                <p className="member-bio">{member.bio}</p>
                
                <div className="achievements-section">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <div className="achievements-list">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <span 
                        key={achievementIndex} 
                        className="achievement-tag"
                      >
                        ✨ {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="member-skills">
                  <h4 className="skills-title">Core Expertise</h4>
                  <div className="skills-container">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="skill-tag"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="member-overlay"></div>
            </div>
          ))}
        </div>

                <div className="team-stats">
          <div className="team-stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Combined Years</span>
          </div>
          <div className="team-stat">
            <span className="stat-number">2</span>
            <span className="stat-label">Expert Founders</span>
          </div>
          <div className="team-stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Projects Led</span>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-section" data-animate id="partnership">
        <div className="section-header">
          <h2 className="section-title">Founder Partnership</h2>
          <p className="section-subtitle">A powerful combination of vision and expertise</p>
        </div>

        <div className="partnership-content">
          <div className="partnership-visual">
            <div className="connection-line"></div>
            <div className="founder-nodes">
              <div className="founder-node node-1">
                <span>MS</span>
                <div className="node-pulse"></div>
              </div>
              <div className="founder-node node-2">
                <span>SN</span>
                <div className="node-pulse"></div>
              </div>
            </div>
          </div>

          <div className="partnership-details">
          <div className="partnership-strength">
            <h3>Our Complementary Strengths</h3>
            <div className="strength-grid">
              <div className="strength-item">
                <div className="strength-icon">🔬</div>
                <div className="strength-content">
                  <h4>Deep Technical Expertise</h4>
                  <p>Shiv provides visionary leadership and advanced ML engineering capabilities</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">🚀</div>
                <div className="strength-content">
                  <h4>Innovation & Development</h4>
                  <p>Monish brings full-stack development expertise and technical innovation</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">⚡</div>
                <div className="strength-content">
                  <h4>Rapid Execution</h4>
                  <p>Together, we deliver cutting-edge AI solutions with speed and precision</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">🎯</div>
                <div className="strength-content">
                  <h4>Client-Focused Approach</h4>
                  <p>Our combined experience ensures solutions that truly meet business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section" data-animate id="cta">
        <div className="cta-background">
          <div className="cta-particles">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="cta-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="cta-content">
          <h2 className="cta-title">Ready to Innovate Together?</h2>
          <p className="cta-description">
            Let's discuss how our combined expertise in AI, ML, and development can transform 
            your business challenges into breakthrough opportunities.
          </p>
          
          <div className="cta-highlights">
            <div className="cta-highlight">
              <span className="highlight-icon">💡</span>
              <span>Free Consultation</span>
            </div>
            <div className="cta-highlight">
              <span className="highlight-icon">🚀</span>
              <span>Rapid Prototyping</span>
            </div>
            <div className="cta-highlight">
              <span className="highlight-icon">🎯</span>
              <span>Tailored Solutions</span>
            </div>
          </div>

          <div className="cta-buttons">
            <Link 
              to="/contact" 
              className="cta-button primary"
              onClick={() => handleCTAClick('start-project')}
            >
              <span>Start Your Project</span>
              <div className="button-glow"></div>
            </Link>
            <Link 
              to="/contact" 
              className="cta-button secondary"
              onClick={() => handleCTAClick('schedule-call')}
            >
              <span>Schedule a Call</span>
              <div className="button-icon">📞</div>
            </Link>
          </div>

          <div className="cta-trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span>100% Client Satisfaction</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <span>NDA Protected</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">⚡</span>
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="journey-section" data-animate id="journey">
        <div className="section-header">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">From vision to reality</p>
        </div>

        <div className="journey-timeline">
          <div className="timeline-track"></div>
          <div className="journey-milestones">
            <div className="milestone">
              <div className="milestone-marker">
                <span>🌱</span>
              </div>
              <div className="milestone-content">
                <h4>Foundation</h4>
                <p>CODEPATHIC founded with a vision to democratize AI technology</p>
                <span className="milestone-year">2022</span>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-marker">
                <span>🚀</span>
              </div>
              <div className="milestone-content">
                <h4>First Major Projects</h4>
                <p>Successfully delivered AI solutions for early clients</p>
                <span className="milestone-year">2023</span>
              </div>
            </div>
            
            <div className="milestone">
              <div className="milestone-marker">
                <span>📈</span>
              </div>
              <div className="milestone-content">
                <h4>Rapid Growth</h4>
                <p>Expanded services and built strong client relationships</p>
                <span className="milestone-year">2024</span>
              </div>
            </div>
            
            <div className="milestone future">
              <div className="milestone-marker">
                <span>🌟</span>
              </div>
              <div className="milestone-content">
                <h4>Future Vision</h4>
                <p>Continuing to innovate and lead in AI solutions</p>
                <span className="milestone-year">Beyond</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(About);
