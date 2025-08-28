import React, { useState } from 'react';
import './Projects.css';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'research', label: 'Research' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'Real-time analytics dashboard with predictive insights using machine learning algorithms.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Interactive Visualizations'],
      status: 'Completed',
      client: 'TechCorp Industries',
      duration: '6 months',
      impact: '40% increase in decision-making efficiency'
    },
    {
      id: 2,
      title: 'Smart Inventory Management System',
      category: 'web',
      description: 'Intelligent inventory system with automated reordering and demand forecasting.',
      image: '📦',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      features: ['Automated Reordering', 'Demand Forecasting', 'Real-time Tracking'],
      status: 'In Progress',
      client: 'RetailMax Solutions',
      duration: '4 months',
      impact: '30% reduction in inventory costs'
    },
    {
      id: 3,
      title: 'Health Monitoring Mobile App',
      category: 'mobile',
      description: 'Cross-platform mobile app for personal health tracking with AI-powered insights.',
      image: '🏥',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'HealthKit'],
      features: ['Vital Signs Monitoring', 'AI Health Insights', 'Doctor Consultation'],
      status: 'Completed',
      client: 'HealthTech Innovations',
      duration: '8 months',
      impact: '50,000+ active users'
    },
    {
      id: 4,
      title: 'Computer Vision Quality Control',
      category: 'ai',
      description: 'Automated quality control system using computer vision for manufacturing.',
      image: '👁️',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'Docker'],
      features: ['Defect Detection', 'Real-time Processing', 'Quality Reports'],
      status: 'Completed',
      client: 'ManufacturingPro Inc.',
      duration: '5 months',
      impact: '95% accuracy in defect detection'
    },
    {
      id: 5,
      title: 'Natural Language Processing Research',
      category: 'research',
      description: 'Advanced NLP research for multilingual sentiment analysis and translation.',
      image: '🔬',
      technologies: ['Python', 'BERT', 'Transformers', 'NLTK'],
      features: ['Multilingual Support', 'Sentiment Analysis', 'Real-time Translation'],
      status: 'Ongoing',
      client: 'University Research Lab',
      duration: '12 months',
      impact: '3 published research papers'
    },
    {
      id: 6,
      title: 'E-commerce Platform with AI Recommendations',
      category: 'web',
      description: 'Modern e-commerce platform with AI-powered product recommendations.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      features: ['AI Recommendations', 'Real-time Chat', 'Advanced Search'],
      status: 'Completed',
      client: 'ShopSmart Online',
      duration: '7 months',
      impact: '60% increase in sales conversion'
    },
    {
      id: 7,
      title: 'IoT Data Analytics Platform',
      category: 'ai',
      description: 'Scalable platform for processing and analyzing IoT sensor data.',
      image: '📊',
      technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana'],
      features: ['Real-time Analytics', 'Predictive Maintenance', 'Alert System'],
      status: 'In Progress',
      client: 'SmartCity Solutions',
      duration: '9 months',
      impact: 'Processing 1M+ data points daily'
    },
    {
      id: 8,
      title: 'Fitness Tracker Mobile App',
      category: 'mobile',
      description: 'Comprehensive fitness tracking app with social features and AI coaching.',
      image: '💪',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'Google Fit'],
      features: ['Workout Tracking', 'AI Personal Coach', 'Social Challenges'],
      status: 'Completed',
      client: 'FitLife Technologies',
      duration: '6 months',
      impact: '100,000+ downloads'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="hero-subtitle">
            Showcasing innovative solutions that drive real business results
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="project-impact">
                  <span className="impact-label">Impact:</span>
                  <span className="impact-value">{project.impact}</span>
                </div>
              </div>
              
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.image}</div>
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <span className={`modal-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>
            
            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-details-grid">
                <div className="detail-item">
                  <h4>Client</h4>
                  <p>{selectedProject.client}</p>
                </div>
                <div className="detail-item">
                  <h4>Duration</h4>
                  <p>{selectedProject.duration}</p>
                </div>
                <div className="detail-item">
                  <h4>Impact</h4>
                  <p>{selectedProject.impact}</p>
                </div>
              </div>
              
              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tech-stack">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag-large">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="cta-button primary">
                <span>Start Similar Project</span>
              </button>
              <button className="cta-button secondary">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's create something amazing together. Contact us to discuss your next project.
          </p>
          <div className="cta-buttons">
            <button className="cta-button mega">
              <span>Get Started Today</span>
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

export default Projects;