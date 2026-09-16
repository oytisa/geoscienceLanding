import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { 
  Home, Map, Layers, Image, Grid, Activity, Globe, Info, Phone, 
  Menu, X, ChevronDown, TrendingUp, Shield, Database, Compass, 
  ChevronRight, BarChart3, Mail, Award, Mountain
} from 'lucide-react'

// --- Mock Data for Seismic Monitor ---
const recentEarthquakes = [
  { id: 1, magnitude: 4.8, location: "Awash, Ethiopia", time: "2 hours ago", depth: "10 km", lat: 9.0, lon: 40.1 },
  { id: 2, magnitude: 3.2, location: "Lake Tana Region", time: "Yesterday", depth: "5 km", lat: 12.0, lon: 37.3 },
  { id: 3, magnitude: 2.9, location: "Afar Depression", time: "2 days ago", depth: "8 km", lat: 11.5, lon: 41.5 },
  { id: 4, magnitude: 4.1, location: "Great Rift Valley", time: "3 days ago", depth: "12 km", lat: 7.5, lon: 38.6 },
]

// --- GeoGlobe Component (Global Earthquake Viewer) ---
const GeoGlobe = () => {
  const [selectedQuake, setSelectedQuake] = useState(null)
  
  const globalQuakes = [
    { id: 1, magnitude: 6.2, location: "Japan", lat: 36.2, lon: 141.2 },
    { id: 2, magnitude: 5.7, location: "Chile", lat: -35.5, lon: -72.7 },
    { id: 3, magnitude: 4.9, location: "Italy", lat: 42.7, lon: 13.2 },
    { id: 4, magnitude: 4.5, location: "Ethiopia", lat: 9.0, lon: 40.1 },
    { id: 5, magnitude: 5.1, location: "Indonesia", lat: -8.3, lon: 115.2 },
    { id: 6, magnitude: 6.8, location: "Alaska", lat: 61.2, lon: -150.9 },
  ]

  return (
    <div className="geoglobe-container">
      <div className="geoglobe-inner">
        <h3 className="geoglobe-title">
          <Globe className="geoglobe-icon" />
          Global Seismic Activity
          <span className="live-badge">🌍 Live Feed</span>
        </h3>
        
        <div className="world-map-container">
          <div className="world-map">
            {globalQuakes.map((quake) => (
              <button
                key={quake.id}
                className="earthquake-marker"
                style={{ 
                  left: `${(quake.lon + 180) / 360 * 100}%`, 
                  top: `${(90 - quake.lat) / 180 * 100}%` 
                }}
                onClick={() => setSelectedQuake(quake)}
                title={`${quake.location}: M${quake.magnitude}`}
              >
                <span className="marker-tooltip">
                  M{quake.magnitude} {quake.location}
                </span>
              </button>
            ))}
          </div>
        </div>

        {selectedQuake && (
          <div className="quake-info">
            <div className="quake-info-content">
              <div>
                <p className="quake-label">📡 Recent Event</p>
                <p className="quake-location">{selectedQuake.location}</p>
                <div className="quake-details">
                  <span>⚡ Magnitude: <strong>{selectedQuake.magnitude}</strong></span>
                  <span>📏 Depth: 12 km</span>
                </div>
              </div>
              <button onClick={() => setSelectedQuake(null)} className="close-btn">✕</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// --- Hero Section Component ---
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-emoji">🏛️</span>
          <span>EIGIS - Ethiopia Integrated Geoscience Information System</span>
          <span className="badge-divider">|</span>
          <span>Est. 1968</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-prefix">Welcome to</span>
          Ethiopia Geoscience
          <span className="hero-title-highlight">Information System</span>
        </h1>
        <p className="hero-description">
          🌍 Unlocking Africa's geological treasures through cutting-edge science, 
          real-time monitoring, and sustainable resource management for future generations.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-emoji">📊</span>
            <span className="stat-number">50+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="hero-stat">
            <span className="stat-emoji">🌋</span>
            <span className="stat-number">200+</span>
            <span className="stat-label">Active Stations</span>
          </div>
          <div className="hero-stat">
            <span className="stat-emoji">🤝</span>
            <span className="stat-number">30+</span>
            <span className="stat-label">Global Partners</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary">
            🚀 Explore Data Portal <ChevronRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            📹 Watch Demo
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </div>
  )
}

// --- Feature Card Component ---
const FeatureCard = ({ icon, title, description, emoji }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <div className="feature-emoji">{emoji}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

// --- Dropdown Component (Hover-triggered) ---
const Dropdown = ({ items, isOpen, onClose, triggerRef, position = "left" }) => {
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (!isOpen) onClose(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => onClose(false), 150)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        onClose(false)
      }
    }
    
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [isOpen, onClose, triggerRef])

  if (!isOpen) return null

  return (
    <div 
      ref={dropdownRef} 
      className={`service-dropdown ${position === 'right' ? 'dropdown-right' : 'dropdown-left'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, idx) => (
        <a 
          key={idx} 
          href={item.href} 
          className="dropdown-item"
          target={item.external ? "_blank" : "_self"}
          rel={item.external ? "noopener noreferrer" : ""}
        >
          <div className="dropdown-icon">
            {item.icon || <Layers className="dropdown-icon-svg" />}
          </div>
          <div>
            <div className="dropdown-label">{item.emoji} {item.label}</div>
            <div className="dropdown-desc">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

// --- Seismic Monitor Component ---
const SeismicMonitor = () => {
  return (
    <div className="seismic-monitor">
      <div className="seismic-header">
        <div className="seismic-title">
          <Activity className="seismic-icon" />
          <h3>📊 Seismic Activity Monitor</h3>
        </div>
        <span className="live-tag">🔴 LIVE</span>
      </div>
      
      <div className="earthquakes-list">
        {recentEarthquakes.map((quake) => (
          <div key={quake.id} className="earthquake-item">
            <div className="earthquake-info">
              <div className={`quake-indicator ${quake.magnitude > 4 ? 'high' : 'low'}`}></div>
              <div>
                <p className="quake-location-text">📍 {quake.location}</p>
                <div className="quake-meta">
                  <span>📏 Depth: {quake.depth}</span>
                  <span>⏱️ {quake.time}</span>
                </div>
              </div>
            </div>
            <div className="quake-magnitude">
              <span className={`magnitude-value ${quake.magnitude > 4 ? 'high' : 'low'}`}>{quake.magnitude}</span>
              <span className="magnitude-unit">M</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="view-all-btn">
        📈 View Full Seismic Catalog <ChevronRight className="btn-icon-small" />
      </button>
    </div>
  )
}

// --- Main App Component ---
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  
  // Refs for dropdown triggers
  const geospatialTriggerRef = useRef(null)
  
  // Define dropdown items for Geospatial Services
  const geospatialItems = [
    { 
      label: "Layout Maker", 
      href: "#", 
      description: "Create custom cartographic layouts for geological maps",
      icon: <Grid size={20} />,
      emoji: "🎨"
    },
    { 
      label: "Map Gallery", 
      href: "#", 
      description: "Explore curated geospatial visualizations and thematic maps",
      icon: <Image size={20} />,
      emoji: "🖼️"
    },
    { 
      label: "SheetIndex Maps", 
      href: "#", 
      description: "Indexed topographic sheets and geological surveys",
      icon: <Map size={20} />,
      emoji: "🗺️"
    },
    { 
      label: "IGIS", 
      href: "http://localhost/gie/integrated_app/eigis/", 
      description: "Integrated Geoscience Information System platform",
      icon: <Database size={20} />,
      emoji: "💾",
      external: true
    },
  ]
  
  const navItems = [
    { label: "Home", href: "#", icon: <Home size={18} />, emoji: "🏠" },
    { 
      label: "Geospatial Services", 
      href: "#", 
      icon: <Layers size={18} />, 
      hasDropdown: true,
      dropdownId: "geospatial",
      dropdownItems: geospatialItems,
      triggerRef: geospatialTriggerRef,
      emoji: "🗺️"
    },
    { 
      label: "Seismic Monitor", 
      href: "#seismic", 
      icon: <Activity size={18} />, 
      emoji: "📊"
    },
    { 
      label: "GeoGlobe", 
      href: "#geoglobe", 
      icon: <Globe size={18} />, 
      emoji: "🌍"
    },
    { 
      label: "About", 
      href: "#about", 
      icon: <Info size={18} />, 
      emoji: "ℹ️"
    },
    { 
      label: "Contact Us", 
      href: "#contact", 
      icon: <Phone size={18} />, 
      emoji: "📞"
    },
  ]

  const features = [
    { icon: <Database size={24} color="white" />, title: "Geodetic Data Hub", description: "Access high-resolution GPS/GNSS, InSAR, and LiDAR datasets for the East African Rift System.", emoji: "💾" },
    { icon: <TrendingUp size={24} color="white" />, title: "Tectonic Monitoring", description: "Real-time crustal deformation and strain analysis across the Ethiopian Plateau.", emoji: "📈" },
    { icon: <Shield size={24} color="white" />, title: "Hazard Assessment", description: "Early warning systems for seismic and volcanic hazards in densely populated areas.", emoji: "🛡️" },
    { icon: <Compass size={24} color="white" />, title: "Resource Exploration", description: "AI-powered mineral and groundwater prospecting using multispectral imagery.", emoji: "⚒️" },
  ]

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Logo with GIE Image */}
            <div className="logo">
              <div className="logo-icon">
                <img 
                  src="https://gie.gov.et/images/gielogo.jpg" 
                  alt="GIE Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
                />
              </div>
              <div className="logo-text-wrapper">
                <span className="logo-text">EIGIS</span>
                <span className="logo-subtitle">Ethiopia Integrated Geoscience Information System</span>
              </div>
              <span className="logo-badge">Est. 1968</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navItems.map((item, idx) => (
                <div key={idx} className="nav-item-wrapper">
                  {item.hasDropdown ? (
                    <>
                      <button
                        ref={item.triggerRef}
                        onClick={() => setOpenDropdown(openDropdown === item.dropdownId ? null : item.dropdownId)}
                        className={`nav-link dropdown-btn ${openDropdown === item.dropdownId ? 'active' : ''}`}
                      >
                        <span className="nav-emoji">{item.emoji}</span>
                        {item.label}
                        <ChevronDown size={16} className={`dropdown-chevron ${openDropdown === item.dropdownId ? 'rotated' : ''}`} />
                      </button>
                      <Dropdown 
                        items={item.dropdownItems}
                        isOpen={openDropdown === item.dropdownId}
                        onClose={() => setOpenDropdown(null)}
                        triggerRef={item.triggerRef}
                        position="left"
                      />
                    </>
                  ) : (
                    <a href={item.href} className="nav-link" onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault()
                        const element = document.getElementById(item.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                        setOpenDropdown(null)
                      }
                    }}>
                      <span className="nav-emoji">{item.emoji}</span>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <button className="signin-btn">
                🔐 Sign In
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.hasDropdown ? (
                    <div>
                      <button className="mobile-nav-link" onClick={() => setOpenDropdown(openDropdown === `mobile-${item.dropdownId}` ? null : `mobile-${item.dropdownId}`)}>
                        <span className="nav-emoji">{item.emoji}</span>
                        {item.label}
                        <ChevronDown size={16} className={`mobile-chevron ${openDropdown === `mobile-${item.dropdownId}` ? 'rotated' : ''}`} />
                      </button>
                      {openDropdown === `mobile-${item.dropdownId}` && (
                        <div className="mobile-submenu">
                          {item.dropdownItems.map((sub, subIdx) => (
                            <a 
                              key={subIdx} 
                              href={sub.href} 
                              className="mobile-submenu-link"
                              target={sub.external ? "_blank" : "_self"}
                              rel={sub.external ? "noopener noreferrer" : ""}
                            >
                              <span className="mobile-submenu-emoji">{sub.emoji}</span>
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href} className="mobile-nav-link" onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault()
                        const element = document.getElementById(item.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                          setMobileMenuOpen(false)
                        }
                      }
                    }}>
                      <span className="nav-emoji">{item.emoji}</span>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="mobile-signin">
                <button className="mobile-signin-btn">
                  🔐 Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">✨ Our Capabilities</div>
            <h2 className="section-title">Advanced Geoscience <span className="gradient-text">Intelligence</span></h2>
            <p className="section-subtitle">Empowering research, policy, and industry with next-generation Earth data and analytics.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Seismic Monitor & GeoGlobe Row */}
      <section id="seismic" className="monitor-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🌋 Real-Time <span className="gradient-text">Monitoring</span></h2>
            <p className="section-subtitle">Live seismic activity and global earthquake tracking</p>
          </div>
          <div className="monitor-grid">
            <SeismicMonitor />
            <div id="geoglobe">
              <GeoGlobe />
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-card">
            <div className="about-grid">
              <div>
                <div className="about-badge">🏛️ Our Story</div>
                <h2 className="about-title">About <span className="text-cyan">EIGIS</span></h2>
                <p className="about-text">
                  The <strong>Ethiopia Integrated Geoscience Information System (EIGIS)</strong>, established in 1968, has been at the forefront 
                  of geoscience research and development in the Horn of Africa. EIGIS represents our flagship initiative, integrating multi-source 
                  geospatial data, real-time seismic networks, and advanced analytics to support sustainable development, disaster resilience, 
                  and natural resource management across Ethiopia and beyond.
                </p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-emoji-large">📊</span>
                    <p className="stat-number">10+</p>
                    <p className="stat-label">Terabytes of Data</p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-emoji-large">🤝</span>
                    <p className="stat-number">50+</p>
                    <p className="stat-label">Research Partners</p>
                  </div>
                  <div className="stat-item">
                    <span className="stat-emoji-large">🌍</span>
                    <p className="stat-number">30+</p>
                    <p className="stat-label">Countries Reached</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <BarChart3 size={48} className="testimonial-icon" />
                <p className="testimonial-text">EIGIS provides the most comprehensive geoscience data infrastructure in East Africa, bridging the gap between raw Earth data and actionable insights for sustainable development.</p>
                <div className="testimonial-author">
                  <strong>— Dr. Alemayehu Ayele</strong>
                  <span>Chief Geoscientist, EIGIS</span>
                </div>
                <div className="testimonial-seal">
                  <Award size={20} />
                  <span>ISO 9001:2024 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📬 Get in <span className="gradient-text">Touch</span></h2>
            <p className="section-subtitle">Collaborate with our team of expert geoscientists and engineers</p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-card">
              <form className="contact-form">
                <input type="text" placeholder="👤 Your Name" className="form-input" />
                <input type="email" placeholder="📧 Email Address" className="form-input" />
                <input type="text" placeholder="🏢 Organization" className="form-input" />
                <textarea rows={4} placeholder="💬 Your Message" className="form-textarea"></textarea>
                <button className="submit-btn">
                  📨 Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="contact-label">📞 Phone</p>
                  <p className="contact-value">+251-11-123-4567</p>
                  <p className="contact-detail">Mon-Fri, 9:00 AM - 5:00 PM EAT</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon emerald">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-label">✉️ Email</p>
                  <p className="contact-value">info@eigis.gov.et</p>
                  <p className="contact-detail">support@eigis.gov.et</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon purple">
                  <Map size={24} />
                </div>
                <div>
                  <p className="contact-label">📍 Address</p>
                  <p className="contact-value">Ethiopia Integrated Geoscience Information System</p>
                  <p className="contact-detail">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Mountain size={24} />
                <div>
                  <strong>EIGIS</strong>
                  <span>Ethiopia Integrated Geoscience Information System</span>
                </div>
              </div>
              <p className="footer-motto">Advancing Earth Science for Sustainable Development</p>
            </div>
            <div className="footer-links-group">
              <h4>Quick Links</h4>
              <a href="#" className="footer-link">About EIGIS</a>
              <a href="#" className="footer-link">Data Portal</a>
              <a href="#" className="footer-link">Publications</a>
              <a href="#" className="footer-link">Careers</a>
            </div>
            <div className="footer-links-group">
              <h4>Resources</h4>
              <a href="#" className="footer-link">API Documentation</a>
              <a href="#" className="footer-link">Training Materials</a>
              <a href="#" className="footer-link">Webinars</a>
              <a href="#" className="footer-link">Help Center</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Ethiopia Integrated Geoscience Information System (EIGIS). All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Data Usage Policy</a>
              <a href="#" className="footer-link">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App