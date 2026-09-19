import { ExternalLink, Layers, Map, Compass, Database } from 'lucide-react'
import { geospatialServices } from '../data/geospatialData'

const getServiceIcon = (id) => {
  switch (id) {
    case 'igis': return <Layers size={20} />
    case 'mapgallery': return <Map size={20} />
    case 'fieldsurvey': return <Compass size={20} />
    case 'geoplanner': return <Database size={20} />
    default: return <Layers size={20} />
  }
}

export const GeospatialServices = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🗺️ National Spatial Data Infrastructure</div>
          <h2 className="section-title">
            The Four Core <span className="gradient-text">Geospatial Services</span>
          </h2>
          <p className="section-subtitle">
            Authoritative cloud applications providing interactive mapping, cartographic galleries, mobile field surveys, and spatial planning tools for Ethiopia.
          </p>
        </div>

        <div className="services-grid-4">
          {geospatialServices.map((service) => (
            <div key={service.id} id={`card-${service.id}`} className="service-thumb-card" style={{ scrollMarginTop: '110px' }}>
              {/* Thumbnail Container */}
              <div className="service-thumb-media">
                <img 
                  src={service.thumbnail} 
                  alt={service.title} 
                  className="service-thumb-img"
                  loading="lazy"
                />
                <div className="service-thumb-overlay"></div>
                <div className="service-thumb-badge">
                  {service.badge}
                </div>
                <div className="service-thumb-status">
                  <span className="service-thumb-status-dot"></span>
                  {service.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="service-card-body">
                <div className="service-card-header">
                  <div className="service-card-icon-wrap">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>

                <p className="service-card-desc">{service.description}</p>

                {/* Capability tags */}
                <div className="service-tags-list">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Launch Button */}
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="service-launch-btn"
                  title={`Open ${service.title} in new tab`}
                >
                  <span>{service.ctaText}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
