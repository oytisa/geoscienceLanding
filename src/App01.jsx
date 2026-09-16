import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { 
  Home, 
  Map, 
  Layers, 
  Image, 
  Grid, 
  Activity, 
  Globe, 
  Info, 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  ExternalLink,
  TrendingUp,
  Shield,
  Database,
  Compass,
  ChevronRight,
  BarChart3,
  Mail
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
    { id: 1, magnitude: 6.2, location: "Japan", lat: 36.2, lon: 141.2, color: "from-red-600 to-orange-500" },
    { id: 2, magnitude: 5.7, location: "Chile", lat: -35.5, lon: -72.7, color: "from-orange-500 to-yellow-500" },
    { id: 3, magnitude: 4.9, location: "Italy", lat: 42.7, lon: 13.2, color: "from-yellow-500 to-amber-400" },
    { id: 4, magnitude: 4.5, location: "Ethiopia", lat: 9.0, lon: 40.1, color: "from-red-600 to-red-500" },
    { id: 5, magnitude: 5.1, location: "Indonesia", lat: -8.3, lon: 115.2, color: "from-orange-500 to-red-400" },
    { id: 6, magnitude: 6.8, location: "Alaska", lat: 61.2, lon: -150.9, color: "from-red-700 to-red-500" },
  ]

  return (
    <div className="geoglobe-container">
      <div className="geoglobe-inner">
        <h3 className="geoglobe-title">
          <Globe className="geoglobe-icon" />
          Global Seismic Activity
          <span className="live-badge">Live Feed</span>
        </h3>
        
        <div className="world-map-container">
          <div className="world-map">
            {globalQuakes.map((quake) => (
              <button
                key={quake.id}
                className={`earthquake-marker ${quake.color}`}
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
                <p className="quake-label">Recent Event</p>
                <p className="quake-location">{selectedQuake.location}</p>
                <div className="quake-details">
                  <span>Magnitude: <strong>{selectedQuake.magnitude}</strong></span>
                  <span>Depth: 12 km</span>
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
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Activity className="badge-icon" />
          <span>Ethiopia Geospatial Intelligence Hub</span>
        </div>
        <h1 className="hero-title">
          Ethiopia Geoscience
          <span className="hero-title-highlight">Information System</span>
        </h1>
        <p className="hero-description">
          Unlock Africa's geological potential with advanced geospatial data, real-time seismic monitoring, and cutting-edge Earth observation tools.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Explore Data Portal <ChevronRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            Watch Demo
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </div>
  )
}

// --- Feature Card Component ---
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${color}`}>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

// --- Dropdown Component (Reusable for all menus) ---
const Dropdown = ({ items, isOpen, onClose, triggerRef, position = "left" }) => {
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          triggerRef.current && !triggerRef.current.contains(event.target)) {
        onClose()
      }
    }
    
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose, triggerRef])

  if (!isOpen) return null

  return (
    <div 
      ref={dropdownRef} 
      className={`service-dropdown ${position === 'right' ? 'dropdown-right' : 'dropdown-left'}`}
    >
      {items.map((item, idx) => (
        <a key={idx} href={item.href} className="dropdown-item">
          <div className="dropdown-icon">
            {item.icon || <Layers className="dropdown-icon-svg" />}
          </div>
          <div>
            <div className="dropdown-label">{item.label}</div>
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
          <h3>Seismic Activity Monitor</h3>
        </div>
        <span className="live-tag">LIVE</span>
      </div>
      
      <div className="earthquakes-list">
        {recentEarthquakes.map((quake) => (
          <div key={quake.id} className="earthquake-item">
            <div className="earthquake-info">
              <div className={`quake-indicator ${quake.magnitude > 4 ? 'high' : 'low'}`}></div>
              <div>
                <p className="quake-location-text">{quake.location}</p>
                <div className="quake-meta">
                  <span>Depth: {quake.depth}</span>
                  <span>{quake.time}</span>
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
        View Full Seismic Catalog <ChevronRight className="btn-icon-small" />
      </button>
    </div>
  )
}

// --- Main App Component ---
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  
  // Refs for each dropdown trigger
  const geospatialTriggerRef = useRef(null)
  const seismicTriggerRef = useRef(null)
  const geoglobeTriggerRef = useRef(null)
  const aboutTriggerRef = useRef(null)
  const contactTriggerRef = useRef(null)
  
  // Close all dropdowns
  const closeAllDropdowns = () => {
    setOpenDropdown(null)
  }
  
  // Toggle specific dropdown
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName)
  }
  
  // Define dropdown items for Geospatial Services
  const geospatialItems = [
    { 
      label: "Layout Maker", 
      href: "#", 
      description: "Create custom cartographic layouts",
      icon: <Grid size={20} />
    },
    { 
      label: "Map Gallery", 
      href: "#", 
      description: "Explore curated geospatial visualizations",
      icon: <Image size={20} />
    },
    { 
      label: "SheetIndex Maps", 
      href: "#", 
      description: "Indexed topographic sheets",
      icon: <Map size={20} />
    },
    { 
      label: "IGIS", 
      href: "#", 
      description: "Integrated Geoscience Information System",
      icon: <Database size={20} />
    },
  ]
  
  // Define dropdown items for other menus (if needed in future)
  const seismicItems = [
    { label: "Real-time Data", href: "#", description: "Live seismic feed" },
    { label: "Historical Events", href: "#", description: "Past earthquake data" },
  ]
  
  const navItems = [
    { label: "Home", href: "#", icon: <Home size={18} />, hasDropdown: false },
    { 
      label: "Geospatial Services", 
      href: "#", 
      icon: <Layers size={18} />, 
      hasDropdown: true,
      dropdownId: "geospatial",
      dropdownItems: geospatialItems,
      triggerRef: geospatialTriggerRef
    },
    { 
      label: "Seismic Monitor", 
      href: "#seismic", 
      icon: <Activity size={18} />, 
      hasDropdown: false
    },
    { 
      label: "GeoGlobe", 
      href: "#geoglobe", 
      icon: <Globe size={18} />, 
      hasDropdown: false
    },
    { 
      label: "About", 
      href: "#about", 
      icon: <Info size={18} />, 
      hasDropdown: false
    },
    { 
      label: "Contact Us", 
      href: "#contact", 
      icon: <Phone size={18} />, 
      hasDropdown: false
    },
  ]

  const features = [
    { icon: <Database size={24} color="white" />, title: "Geodetic Data Hub", description: "Access high-resolution GPS/GNSS, InSAR, and LiDAR datasets for the East African Rift System.", color: "from-emerald-500 to-teal-500" },
    { icon: <TrendingUp size={24} color="white" />, title: "Tectonic Monitoring", description: "Real-time crustal deformation and strain analysis across the Ethiopian Plateau.", color: "from-blue-500 to-cyan-500" },
    { icon: <Shield size={24} color="white" />, title: "Hazard Assessment", description: "Early warning systems for seismic and volcanic hazards in densely populated areas.", color: "from-amber-500 to-orange-500" },
    { icon: <Compass size={24} color="white" />, title: "Resource Exploration", description: "AI-powered mineral and groundwater prospecting using multispectral imagery.", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <div className="app" onClick={() => closeAllDropdowns()}>
      {/* Navigation Bar */}
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-wrapper">
            {/* Logo */}
            <div className="logo">
              <div className="logo-icon">
                <Globe size={20} color="white" />
              </div>
              <span className="logo-text">Ethiopia Geoscience</span>
              <span className="logo-badge">| EGIS</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navItems.map((item, idx) => (
                <div key={idx} className="nav-item-wrapper">
                  {item.hasDropdown ? (
                    <>
                      <button
                        ref={item.triggerRef}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDropdown(item.dropdownId)
                        }}
                        className={`nav-link dropdown-btn ${openDropdown === item.dropdownId ? 'active' : ''}`}
                      >
                        {item.icon && <span className="nav-icon">{item.icon}</span>}
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
                        closeAllDropdowns()
                      }
                    }}>
                      {item.icon && <span className="nav-icon">{item.icon}</span>}
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <button className="signin-btn">
                Sign In
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
                      <button className="mobile-nav-link" onClick={() => toggleDropdown(`mobile-${item.dropdownId}`)}>
                        {item.icon}
                        {item.label}
                        <ChevronDown size={16} className={`mobile-chevron ${openDropdown === `mobile-${item.dropdownId}` ? 'rotated' : ''}`} />
                      </button>
                      {openDropdown === `mobile-${item.dropdownId}` && (
                        <div className="mobile-submenu">
                          {item.dropdownItems.map((sub, subIdx) => (
                            <a key={subIdx} href={sub.href} className="mobile-submenu-link">
                              <span className="mobile-submenu-icon">{sub.icon}</span>
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
                      {item.icon}
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="mobile-signin">
                <button className="mobile-signin-btn">
                  Sign In
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
            <h2 className="section-title">Advanced Geoscience <span className="gradient-text">Intelligence</span></h2>
            <p className="section-subtitle">Empowering research, policy, and industry with next-generation Earth data.</p>
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
                <h2 className="about-title">About <span className="text-cyan">EGIS</span></h2>
                <p className="about-text">
                  The Ethiopia Geoscience Information System (EGIS) is a pioneering initiative that integrates multi-source geospatial data, 
                  real-time seismic networks, and advanced analytics to support sustainable development, disaster resilience, and natural resource 
                  management across the Horn of Africa.
                </p>
                <div className="stats-grid">
                  <div className="stat-item">
                    <p className="stat-number">10+</p>
                    <p className="stat-label">Years of Data</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-number">50+</p>
                    <p className="stat-label">Research Partners</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <BarChart3 size={48} className="testimonial-icon" />
                <p className="testimonial-text">"EGIS provides the most comprehensive geoscience data infrastructure in East Africa, bridging the gap between raw Earth data and actionable insights."</p>
                <p className="testimonial-author">— Dr. Alemayehu Ayele, Chief Geoscientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
            <p className="section-subtitle">Collaborate with our team of experts</p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-card">
              <form className="contact-form">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <textarea rows={4} placeholder="Your Message" className="form-textarea"></textarea>
                <button className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+251-11-123-4567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon emerald">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">info@egis.et</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon purple">
                  <Map size={24} />
                </div>
                <div>
                  <p className="contact-label">Address</p>
                  <p className="contact-value">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-copyright">&copy; 2025 Ethiopia Geoscience Information System. All data licensed under CC BY-SA 4.0.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">API Access</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App