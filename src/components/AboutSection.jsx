import { Award, ShieldCheck } from 'lucide-react'
import { testimonialsData } from '../data/geospatialData'

export const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="about-badge">🏛️ Institutional Heritage</div>
          <h2 className="about-title">
            About <span className="text-cyan">EIGIS</span> & Geospatial Services
          </h2>

          <p className="about-text">
            The <strong> EIGIS Geospatial Services (EIGIS)</strong>, operating under the mandate of the 
            <strong> Geological Institute of Ethiopia (GIE, Est. 1968)</strong>, serves as the authoritative national repository and 
            dissemination gateway for Earth science, geodetic, and mineral spatial information in the Horn of Africa.
          </p>

          {/* Requested summary paragraph of the geospatial services */}
          <div className="about-summary-block">
            <strong>Geospatial Services Architecture:</strong> The EGIS Geospatial Architecture unifies Ethiopia's core national 
            geological knowledge into an interoperable, cloud-native ecosystem. Through four integrated pillars—the flagship 
            <strong> Webmap Services</strong> for enterprise GIS data dissemination, the <strong>Map Gallery/Visualizer</strong> for rich 
            thematic exploration, the <strong>Field Survey platform</strong> for digitized real-time geological sampling and borehole verification, 
            and <strong>GeoPlanner</strong> for spatial decision support. EGIS Geospatil Services empowers government ministries, academic 
            researchers, and exploration industries with authoritative geospatial intelligence that accelerates sustainable resource discovery, 
            infrastructure resilience, and green growth.
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-emoji-large">📊</span>
              <p className="stat-number">50+ Yrs</p>
              <p className="stat-label">Geological Heritage</p>
            </div>
            <div className="stat-item">
              <span className="stat-emoji-large">🗺️</span>
              <p className="stat-number">4 Pillars</p>
              <p className="stat-label">Geospatial Suite</p>
            </div>
            <div className="stat-item">
              <span className="stat-emoji-large">🌍</span>
              <p className="stat-number">100%</p>
              <p className="stat-label">National Coverage</p>
            </div>
          </div>

          {/* Executive & Leadership Testimonials */}
          <div className="testimonials-section">
            <div className="testimonials-title-wrap">
              <div className="section-badge">💬 Leadership Insights</div>
              <h3 className="section-title" style={{ fontSize: '1.8rem' }}>
                Executive & Engineering <span className="gradient-text">Perspectives</span>
              </h3>
            </div>

            <div className="testimonials-grid-3">
              {testimonialsData.map((t, idx) => (
                <div key={idx} className="testimonial-card-item">
                  <div className="testimonial-quote-mark">“</div>
                  <p className="testimonial-quote-text">{t.quote}</p>
                  
                  <div className="testimonial-person">
                    <div className="testimonial-avatar-initials">
                      {t.initials}
                    </div>
                    <div className="testimonial-info-block">
                      <strong>{t.name}</strong>
                      <span>{t.title}</span>
                      <div className="testimonial-org-tag">{t.badge}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
              color: 'var(--eigis-gray)',
              fontSize: '0.85rem'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={18} color="var(--eigis-primary)" />
                ISO 9001:2024 Geological Standards
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={18} color="var(--eigis-secondary)" />
                Official Ministry of Mines & Energy Verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
