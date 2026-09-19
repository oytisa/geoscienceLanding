import * as topojson from 'topojson-client'
import worldData from 'world-atlas/countries-110m.json'

// Extract official geographical GeoJSON features and boundaries
export const landFeatures = topojson.feature(worldData, worldData.objects.land)
export const countryBorders = topojson.mesh(worldData, worldData.objects.countries, (a, b) => a !== b)

// Ethiopia national polygon boundary
export const ethiopiaFeature = topojson.feature(worldData, {
  type: 'GeometryCollection',
  geometries: worldData.objects.countries.geometries.filter(g => g.id === '231')
})
