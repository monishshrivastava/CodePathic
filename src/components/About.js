import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50+', label: 'AI Projects Delivered' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and ML technologies.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'Every project is crafted with precision, attention to detail, and unwavering quality standards.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their vision and bring it to life.'
    },
    {
      icon: '🔬',
      title: 'Research-Driven',
      description: 'Our solutions are backed by thorough research and latest technological advancements.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & AI Architect',
      bio: 'Leading AI researcher with 10+ years in machine learning and neural networks.',
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'TensorFlow']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Full-Stack Developer',
      bio: 'Expert full-stack developer specialized in scalable web applications and cloud architecture.',
      skills: ['React', 'Node.js', 'AWS', 'DevOps']
    },
    {
      name: 'Dr. Raj Patel',
      role: 'Head of Research',
      bio: 'PhD in Computer Science with focus on reinforcement learning and autonomous systems.',
      skills: ['Reinforcement Learning', 'Robotics', 'Python', 'Research']
    }
  ];

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
        </div>
        
        <div className="hero-visual">
          <div className="dna-helix">
            <div className="helix-strand strand-1"></div>
            <div className="helix-strand strand-2"></div>
            <div className="helix-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{
                  animationDelay: `${i * 0.2}s`,
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${10 + (i * 4)}%`
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" data-animate id="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story Tabs */}
      <section className="story-section" data-animate id="story">
        <div className="section-header">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">Discover what drives us forward</p>
        </div>

        <div className="tabs-container">
          <div className="tab-buttons">
            {['mission', 'vision', 'approach'].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'mission' && (
              <div className="tab-panel fade-in">
                <h3>Our Mission</h3>
                <p>
                  To democratize artificial intelligence and make cutting-edge AI solutions 
                  accessible to businesses of all sizes. We believe that AI should empower 
                  human creativity and solve real-world problems, not replace human intelligence 
                  but augment it.
                </p>
                <div className="mission-points">
                  <div className="point">
                    <span className="point-icon">🎯</span>
                    <span>Deliver AI solutions that create measurable business value</span>
                  </div>
                  <div className="point">
                    <span className="point-icon">🌍</span>
                    <span>Make AI technology accessible to organizations worldwide</span>
                  </div>
                  <div className="point">
                    <span className="point-icon">🔬</span>
                    <span>Pioneer responsible AI development and deployment</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="tab-panel fade-in">
                <h3>Our Vision</h3>
                <p>
                  To be the leading AI innovation partner that bridges the gap between 
                  theoretical research and practical applications. We envision a future 
                  where AI seamlessly integrates into everyday workflows, enhancing 
                  productivity and enabling breakthrough discoveries.
                </p>
                <div className="vision-timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">Launch advanced AI research lab</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2025</div>
                    <div className="timeline-content">Expand to international markets</div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2026</div>
                    <div className="timeline-content">Pioneer quantum-AI hybrid systems</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="tab-panel fade-in">
                <h3>Our Approach</h3>
                <p>
                  We follow a research-driven methodology that combines academic rigor 
                  with industry pragmatism. Every solution is tailored to our client's 
                  unique challenges and built with scalability and sustainability in mind.
                </p>
                <div className="approach-steps">
                  <div className="step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h4>Research & Analysis</h4>
                      <p>Deep dive into your challenges and opportunities</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h4>Strategy & Design</h4>
                      <p>Develop comprehensive AI strategy and solution architecture</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h4>Build & Iterate</h4>
                      <p>Agile development with continuous testing and refinement</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                      <h4>Deploy & Scale</h4>
                      <p>Seamless deployment with ongoing support and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" data-animate id="values">
        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div className="value-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" data-animate id="team">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The brilliant minds behind our innovations</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="avatar-glow"></div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-skills">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-animate id="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Innovate Together?</h2>
          <p className="cta-description">
            Let's discuss how our AI expertise can transform your business challenges into opportunities.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">
              <span>Start Your Project</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-button secondary">
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;