import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });
  const [isVisible, setIsVisible] = useState({});
  
  // Replace 'xpzgkqyw' with your actual Formspree form ID
  const [state, handleFormspreeSubmit] = useForm("xkgqzrgk");

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

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const sendToWhatsApp = useCallback((data) => {
    const message = `
🚀 *New Project Inquiry from CODEPATHIC Website*

👤 *Client Details:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone || 'Not provided'}
• Company: ${data.company || 'Not specified'}

📋 *Project Information:*
• Project Type: ${data.projectType}
• Budget Range: ${data.budget || 'Not specified'}
• Timeline: ${data.timeline || 'Not specified'}
• Preferred Contact: ${data.preferredContact}

💬 *Message:*
${data.message}

---
*Sent via CODEPATHIC Contact Form*
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8462983010?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab (background)
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ['name', 'email', 'projectType', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Submit to Formspree
    await handleFormspreeSubmit(e);
  }, [formData, handleFormspreeSubmit]);

  // Handle success
  useEffect(() => {
    if (state.succeeded) {
      // Send to WhatsApp
      sendToWhatsApp(formData);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          preferredContact: 'email'
        });
      }, 3000);
    }
  }, [state.succeeded, formData, sendToWhatsApp]);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'codepathic1@gmail.com',
      link: 'mailto:codepathic1@gmail.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+91 8462983010',
      link: 'https://wa.me/918462983010'
    },
    {
      icon: '🌍',
      title: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: '⏰',
      title: 'Response Time',
      value: '24 Hours',
      link: null
    }
  ];

  const projectTypes = [
    'AI/ML Development',
    'Web Development',
    'Mobile App Development',
    'Data Science & Analytics',
    'Computer Vision',
    'Natural Language Processing',
    'Automation Solutions',
    'Consulting & Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under 5,000',
    '5,000 - 15,000',
    '15,000 - 50,000',
    '50,000 - 100,000',
    'Above 100,000',
    'Let\'s Discuss'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title" data-animate id="hero-title">
            Let's Build Something
            <span className="gradient-text"> Amazing Together</span>
          </h1>
          <p className="hero-subtitle" data-animate id="hero-subtitle">
            Ready to start your next project? Get in touch with our team of experts 
            and let's transform your ideas into reality.
          </p>
        </div>
        
        <div className="hero-visual">
          <div className="contact-animation">
            <div className="message-bubbles">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="message-bubble"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    left: `${20 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 40}%`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section" data-animate id="contact-info">
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="contact-info-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="info-icon">{info.icon}</div>
              <h3 className="info-title">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="info-value link"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {info.value}
                </a>
              ) : (
                <span className="info-value">{info.value}</span>
              )}
              <div className="info-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" data-animate id="contact-form">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">Start Your Project</h2>
            <p className="form-subtitle">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_to" value="monishshrivastava99@gmail.com" />
            <input type="hidden" name="_subject" value="New Project Inquiry from CODEPATHIC Website" />
            <input type="hidden" name="_next" value="thank-you" />
            
            <div className="form-grid">
              {/* Personal Information */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              {/* Project Information */}
              <div className="form-group">
                <label htmlFor="projectType" className="form-label">
                  Project Type <span className="required">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget" className="form-label">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline" className="form-label">Project Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact" className="form-label">Preferred Contact Method</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="video">Video Call</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">
                Project Description <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
                rows="6"
                required
              />
            </div>

            {/* Submit Status */}
            {state.succeeded && (
              <div className="submit-status success">
                <span className="status-icon">✅</span>
                <span className="status-message">
                  Thank you! Your message has been sent successfully. We'll get back to you within 24 hours!
                </span>
              </div>
            )}

            {state.errors && state.errors.length > 0 && (
              <div className="submit-status error">
                <span className="status-icon">❌</span>
                <span className="status-message">
                  There was an error sending your message. Please try again.
                </span>
              </div>
            )}

            {/* Submit Button */}
            <div className="form-submit">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-icon">🚀</span>
                  </>
                )}
                <div className="btn-glow"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact-section" data-animate id="quick-contact">
        <div className="quick-contact-content">
          <h2 className="quick-contact-title">Need Quick Assistance?</h2>
          <p className="quick-contact-subtitle">
            For urgent inquiries or quick questions, reach out to us directly
          </p>

          <div className="quick-contact-buttons">
            <a 
              href="https://wa.me/919074775130?text=Hi%20CODEPATHIC%20team!%20I'm%20interested%20in%20your%20AI/ML%20services.%20Can%20we%20discuss%20my%20project?"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-btn whatsapp"
            >
              <span className="btn-icon">💬</span>
              <span>WhatsApp Chat</span>
              <span className="btn-status">Online</span>
            </a>

            <a 
              href="mailto:monishshrivastava99@gmail.com?subject=Project%20Inquiry%20-%20CODEPATHIC&body=Hi%20CODEPATHIC%20team,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Type:%20%0ABudget:%20%0ATimeline:%20%0A%0APlease%20let%20me%20know%20when%20we%20can%20schedule%20a%20call.%0A%0ABest%20regards"
              className="quick-btn email"
            >
              <span className="btn-icon">📧</span>
              <span>Send Email</span>
              <span className="btn-status">24h Response</span>
            </a>

            <a 
              href="tel:+919074775130"
              className="quick-btn phone"
            >
              <span className="btn-icon">📞</span>
              <span>Call Now</span>
              <span className="btn-status">Available</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" data-animate id="faq">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to common questions</p>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3 className="faq-question">How quickly can you start my project?</h3>
            <p className="faq-answer">
              We can typically start new projects within 1-2 weeks, depending on our current workload and project complexity. For urgent projects, we offer expedited timelines.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What's included in your AI/ML services?</h3>
            <p className="faq-answer">
              Our services include consultation, data analysis, model development, training, deployment, and ongoing support. We provide end-to-end solutions tailored to your needs.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Do you work with international clients?</h3>
            <p className="faq-answer">
              Yes! We work with clients globally and are experienced in remote collaboration across different time zones. We use modern communication tools to ensure seamless project delivery.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">What's your typical project timeline?</h3>
            <p className="faq-answer">
              Project timelines vary based on complexity. Simple projects: 2-4 weeks, Medium projects: 1-3 months, Complex projects: 3-6 months. We provide detailed timelines during consultation.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Do you provide ongoing support?</h3>
            <p className="faq-answer">
              Absolutely! We offer various support packages including maintenance, updates, monitoring, and feature enhancements to ensure your solution continues to perform optimally.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">Can you work with our existing team?</h3>
            <p className="faq-answer">
              Yes, we excel at collaborative projects. We can integrate with your existing development team, provide training, or work as an extended team to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-section" data-animate id="trust">
        <div className="trust-content">
          <h2 className="trust-title">Why Choose CODEPATHIC?</h2>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <h3>Proven Expertise</h3>
              <p>6+ years combined experience in AI/ML and development</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <h3>Confidentiality</h3>
              <p>Your data and ideas are protected with strict NDAs</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Agile development process with regular updates</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">💯</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality control processes</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🤝</div>
              <h3>Long-term Partnership</h3>
              <p>We build lasting relationships with our clients</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🌟</div>
              <h3>Innovation Focus</h3>
              <p>Cutting-edge solutions using latest technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Contact);