import igisThumb from '../assets/igis-thumbnail.jpg'
import mapGalleryThumb from '../assets/map-gallery-thumbnail.jpg'
import fieldSurveyThumb from '../assets/field-survey-thumbnail.jpg'
import geoPlannerThumb from '../assets/geoplanner-thumbnail.jpg'

export const geospatialServices = [
  {
    id: "igis",
    title: "IGIS Web Map Services",
    badge: "Core Enterprise Web GIS",
    status: "Live Production",
    thumbnail: igisThumb,
    url: "https://eigis.ecowardens.com/iGIS/app/",
    description: "Enterprise national geological mapping platform providing multi-layered stratigraphy, structural faults, mineral occurrences, and coordinate-based spatial querying across Ethiopia.",
    tags: ["Stratigraphic Layers", "Fault Line Networks", "Spatial Querying", "WMS / WFS Feeds"],
    ctaText: "Launch IGIS Web Map"
  },
  {
    id: "mapgallery",
    title: "Map Gallery / Visualizer",
    badge: "Thematic Cartography",
    status: "Active Visualizer",
    thumbnail: mapGalleryThumb,
    url: "https://eigis.ecowardens.com/mapgallery/",
    description: "Curated high-resolution thematic map portal and raster visualizer showcasing regional geological sheets, multi-spectral satellite imagery, and digital elevation models.",
    tags: ["Thematic Map Sheets", "Satellite Imagery", "3D Digital Elevation", "Survey Archives"],
    ctaText: "Explore Map Gallery"
  },
  {
    id: "fieldsurvey",
    title: "Field Survey Platform",
    badge: "Mobile Field Collector",
    status: "Mobile & Cloud Sync",
    thumbnail: fieldSurveyThumb,
    url: "https://eigis.ecowardens.com/fieldsurvey/",
    description: "Real-time field geology mobile observation application enabling field crews to log GPS waypoints, rock outcrop characteristics, geochemical samples, and borehole lithology.",
    tags: ["GPS Waypoint Logger", "Sample Verification", "Borehole Lithology", "Offline Sync"],
    ctaText: "Open Field Survey"
  },
  {
    id: "geoplanner",
    title: "GeoPlanner Decision Tool",
    badge: "Spatial Analytics & Planning",
    status: "Decision Engine",
    thumbnail: geoPlannerThumb,
    url: "https://eigis.ecowardens.com/geoplanner",
    description: "Multi-criteria spatial decision support platform integrating land suitability analysis, mineral concession buffer management, groundwater modeling, and hazard mitigation zoning.",
    tags: ["Land Suitability", "Hazard Risk Zoning", "Concession Analysis", "Multi-Criteria Models"],
    ctaText: "Access GeoPlanner"
  }
]

export const testimonialsData = [
  {
    name: "Mr. Ijara Tesfaye",
    title: "Director General",
    institution: "Geological Institute of Ethiopia (GIE)",
    initials: "IT",
    badge: "Executive Leadership",
    quote: "EGIS represents a historic milestone in modernizing Ethiopia's geological survey capabilities. By digitalizing our 50-year legacy of Earth data into cloud-native web map services and real-time field survey tools, we are unlocking unprecedented opportunities for sustainable mineral development, national infrastructure planning, and environmental stewardship across the nation."
  },
  {
    name: "Mr. Oytisa Onato",
    title: "Chief Geospatial Engineer",
    institution: "EGIS Platform Architect & Engineering Lead",
    initials: "OO",
    badge: "Platform Architecture",
    quote: "Our mission with the EGIS geospatial suite—spanning IGIS, Map Gallery, Field Survey, and GeoPlanner—is to democratize complex geological and remote-sensing data through modern, lightning-fast web applications. Seamlessly connecting field geologists with GIS analysts and national decision-makers ensures data-driven precision in every survey."
  },
  {
    name: "Dr. Tibebu Kassawmar",
    title: "Chief Geoscientist & Academic Advisor",
    institution: "Senior Geoscience Advisory Council",
    initials: "TK",
    badge: "Geoscience Advisory",
    quote: "EGIS provides the most comprehensive geoscience data infrastructure in East Africa, bridging the gap between raw Earth observation data and actionable insights for sustainable development, natural resource prospecting, and tectonic research."
  }
]

export const initialLocationPoints = [
  { id: 1, city: "Addis Ababa", country: "Ethiopia", code: "ET", flag: "🇪🇹", lat: 9.03, lon: 38.74, time: "Just now", type: "GIE Central Geospatial HQ" },
  { id: 2, city: "Hawassa", country: "Ethiopia", code: "ET", flag: "🇪🇹", lat: 7.05, lon: 38.47, time: "2 min ago", type: "Rift Valley Geoscience Hub" },
  { id: 3, city: "Dire Dawa", country: "Ethiopia", code: "ET", flag: "🇪🇹", lat: 9.60, lon: 41.86, time: "5 min ago", type: "Eastern Regional Office" },
  { id: 4, city: "Bahir Dar", country: "Ethiopia", code: "ET", flag: "🇪🇹", lat: 11.59, lon: 37.39, time: "11 min ago", type: "Lake Tana Basin Center" },
  { id: 5, city: "Mekelle", country: "Ethiopia", code: "ET", flag: "🇪🇹", lat: 13.50, lon: 39.47, time: "18 min ago", type: "Northern Minerals Survey" },
  { id: 6, city: "Nairobi", country: "Kenya", code: "KE", flag: "🇰🇪", lat: -1.29, lon: 36.82, time: "24 min ago", type: "RCMRD East Africa Partner" },
  { id: 7, city: "Geneva", country: "Switzerland", code: "CH", flag: "🇨🇭", lat: 46.20, lon: 6.14, time: "35 min ago", type: "Global Earth Observation Liaison" },
  { id: 8, city: "Denver", country: "United States", code: "US", flag: "🇺🇸", lat: 39.73, lon: -104.99, time: "42 min ago", type: "USGS Tectonic Collaborator" }
]
