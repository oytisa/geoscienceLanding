import { useState, useEffect, useRef } from 'react'
import './App.css'
import { 
  Home, Map, Layers, Globe, Info, Phone, 
  Menu, X, ChevronDown, Database, Compass, 
  ChevronRight, Mail
} from 'lucide-react'
import { GeospatialServices } from './components/GeospatialServices'
import { AboutSection } from './components/AboutSection'
import { VisitorLocationCounter } from './components/VisitorLocationCounter'
import { GieLogo } from './components/GieLogo'

// --- Hero Section Component with Video Background ---
const Hero = () => {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="hero-video-bg">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
          poster="https://d2j2uxe7jasn0r.cloudfront.net/watermarks/video/BYepXPt-nlg20mgtf/videoblocks-earth-sunrise_hog-_eii3__e36eabaf36ad258d5911bff4bb8bbdfb__P360.mp4"
        >
          <source 
            src="https://d2j2uxe7jasn0r.cloudfront.net/watermarks/video/BYepXPt-nlg20mgtf/videoblocks-earth-sunrise_hog-_eii3__e36eabaf36ad258d5911bff4bb8bbdfb__P360.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-emoji">🏛️</span>
          <span>Integrated Geospatial Information System</span>
          <span className="badge-divider">|</span>
          <span>Since 1968</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-prefix"> </span>
          Integrated Geospatial
          <span className="hero-title-highlight">Information System</span>
        </h1>
        <p className="hero-description">
          🌍 Authoritative national geospatial geological data infrastructure unlocking Ethiopia's geological treasures through cutting-edge science, 
          interactive cloud mapping, and sustainable Earth resource management.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-emoji">📊</span>
            <span className="stat-number">GIE 50+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="hero-stat">
            <span className="stat-emoji">🗺️</span>
            <span className="stat-number">4</span>
            <span className="stat-label">Geospatial Services</span>
          </div>
          <div className="hero-stat">
            <span className="stat-emoji">🤝</span>
            <span className="stat-number">30+</span>
            <span className="stat-label">Global Partners</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a 
            href="#services" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            🚀 Explore 4 Geospatial Services <ChevronRight className="btn-icon" />
          </a>
          <a 
            href="#visitors" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('visitors')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            🌐 Live Visitor & Location Points
          </a>
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

// --- Dropdown Component (Hover-triggered) ---
const Dropdown = ({ items, isOpen, onClose, position = "left" }) => {
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
      if (dropdownRef.current && !dropdownRef.current.parentElement?.contains(event.target)) {
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
  }, [isOpen, onClose])

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

// --- Main App Component ---
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  
  // Navigation items pointing directly to their respective cards and sections
  const navItems = [
    { label: "Home", href: "#", icon: <Home size={18} />, emoji: "🏠" },
    { 
      label: "Webmap Services", 
      href: "#card-igis", 
      cardId: "card-igis",
      icon: <Layers size={18} />, 
      emoji: "🌐",
      externalUrl: "https://eigis.ecowardens.com/iGIS/app/"
    },
    { 
      label: "Map Gallery", 
      href: "#card-mapgallery", 
      cardId: "card-mapgallery",
      icon: <Map size={18} />, 
      emoji: "🖼️",
      externalUrl: "https://eigis.ecowardens.com/mapgallery/"
    },
    { 
      label: "Field Survey", 
      href: "#card-fieldsurvey", 
      cardId: "card-fieldsurvey",
      icon: <Compass size={18} />, 
      emoji: "🧭",
      externalUrl: "https://eigis.ecowardens.com/fieldsurvey/"
    },
    { 
      label: "GeoPlanner", 
      href: "#card-geoplanner", 
      cardId: "card-geoplanner",
      icon: <Database size={18} />, 
      emoji: "📐",
      externalUrl: "https://eigis.ecowardens.com/geoplanner"
    },
    { 
      label: "About EGIS", 
      href: "#about", 
      icon: <Info size={18} />, 
      emoji: "ℹ️",
      isSecondary: true
    },
    { 
      label: "Live Visitors", 
      href: "#visitors", 
      icon: <Globe size={18} />, 
      emoji: "📊",
      isSecondary: true
    },
    { 
      label: "Contact Us", 
      href: "#contact", 
      icon: <Phone size={18} />, 
      emoji: "📞",
      isSecondary: true
    },
  ]

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Official GIE Logo */}
            <a href="#" className="logo" aria-label="Geological Institute of Ethiopia">
              <GieLogo height={56} />
              <span className="logo-badge">Since 1968</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navItems.map((item, idx) => (
                <div key={idx} className="nav-item-wrapper">
                  {item.hasDropdown ? (
                    <>
                      <button
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
                        position="left"
                      />
                    </>
                  ) : (
                    <a 
                      href={item.href} 
                      className={`nav-link ${item.isSecondary ? 'nav-link-secondary' : ''}`} 
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault()
                          const targetId = item.href.substring(1)
                          const element = targetId === '' ? document.body : document.getElementById(targetId)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                            // If pointing to a card, add a brief subtle focus animation
                            if (targetId.startsWith('card-')) {
                              element.classList.add('service-card-focused')
                              setTimeout(() => {
                                element.classList.remove('service-card-focused')
                              }, 2000)
                            }
                          }
                          setOpenDropdown(null)
                        }
                      }}
                    >
                      <span className="nav-emoji">{item.emoji}</span>
                      <span className="nav-text-label">{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
              {/* Hidden: already linked to Webmap Services
              <a 
                href="https://eigis.ecowardens.com/iGIS/app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="signin-btn"
                style={{ textDecoration: 'none' }}
              >
                🚀 Launch IGIS
              </a>
              */}
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" aria-label="Toggle navigation menu">
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
                    <a 
                      href={item.href} 
                      className="mobile-nav-link" 
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault()
                          const targetId = item.href.substring(1)
                          const element = targetId === '' ? document.body : document.getElementById(targetId)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                            if (targetId.startsWith('card-')) {
                              element.classList.add('service-card-focused')
                              setTimeout(() => {
                                element.classList.remove('service-card-focused')
                              }, 2000)
                            }
                            setMobileMenuOpen(false)
                          }
                        }
                      }}
                    >
                      <span className="nav-emoji">{item.emoji}</span>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              {/* Hidden: already linked to Webmap Services
              <div className="mobile-signin">
                <a 
                  href="https://eigis.ecowardens.com/iGIS/app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-signin-btn"
                  style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}
                >
                  🚀 Launch IGIS Portal
                </a>
              </div>
              */}
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section with Video Background */}
      <Hero />
      
      {/* The Four Core Geospatial Services with Thumbnails & Direct Launch Links */}
      <GeospatialServices />
      
      {/* About EGIS Section with Geospatial Summary & 3 Leadership Testimonials */}
      <AboutSection />
      
      {/* Real Number of Page Visitors with Location Point Counter & SVG Interactive Map */}
      <VisitorLocationCounter />
      
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📬 Get in <span className="gradient-text">Touch</span></h2>
            <p className="section-subtitle">Collaborate with our team of expert geoscientists, GIS engineers, and spatial analysts</p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out to EGIS. Our team will contact you shortly.') }}>
                <input type="text" placeholder="👤 Your Name" required className="form-input" />
                <input type="email" placeholder="📧 Email Address" required className="form-input" />
                <input type="text" placeholder="🏢 Organization / Ministry / University" className="form-input" />
                <textarea rows={4} placeholder="💬 Your Inquiry or Data Request" required className="form-textarea"></textarea>
                <button type="submit" className="submit-btn">
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
                  <p className="contact-value">+251-91612-7724</p>
                  <p className="contact-detail">Mon-Fri, 8:30 AM - 5:00 PM EAT</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon emerald">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-label">✉️ Email</p>
                  <p className="contact-value">info@gie.gov.et</p>
                  <p className="contact-detail">support@eigis.ecowardens.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon purple">
                  <Map size={24} />
                </div>
                <div>
                  <p className="contact-label">📍 HeadOffice</p>
                  <p className="contact-value">Geological Institute of Ethiopia (GIE)</p>
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
                <GieLogo height={44} theme="light" />
              </div>
              <p className="footer-motto">Advancing Authoritative Earth Science for Sustainable National Development</p>
            </div>
            <div className="footer-links-group">
              <h4>Geospatial Services</h4>
              <a href="https://eigis.ecowardens.com/iGIS/app/" target="_blank" rel="noopener noreferrer" className="footer-link">IGIS Web Map</a>
              <a href="https://eigis.ecowardens.com/mapgallery/" target="_blank" rel="noopener noreferrer" className="footer-link">Map Gallery</a>
              <a href="https://eigis.ecowardens.com/fieldsurvey/" target="_blank" rel="noopener noreferrer" className="footer-link">Field Survey</a>
              <a href="https://eigis.ecowardens.com/geoplanner" target="_blank" rel="noopener noreferrer" className="footer-link">GeoPlanner</a>
            </div>
            <div className="footer-links-group">
              <h4>Institutional</h4>
              <a href="#about" className="footer-link">About GIE & EGIS</a>
              <a href="#visitors" className="footer-link">Visitor Telemetry</a>
              <a href="#contact" className="footer-link">Inquiries & Support</a>
              <a href="https://gie.gov.et" target="_blank" rel="noopener noreferrer" className="footer-link">Geological Institute Portal</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© {new Date().getFullYear()} Geological Institute of Ethiopia (GIE) & EGIS Platform. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="footer-link">Spatial Data Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Open Geoscience License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App