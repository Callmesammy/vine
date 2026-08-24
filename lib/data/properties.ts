export interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  category: 'lighting' | 'climate' | 'safety' | 'ergonomics';
}

export interface PropertySpec {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  status: string;
  mainImage: string;
  heroHeadline: string;
  sectionLeftImage: string;
  sectionRightTopImage: string;
  sectionPoolImage: string;
  indoorOutdoorText: string;
  courtyardImage: string;
  waterDetailImage: string;
  loungeSketchImage: string;
  nightHeadline: string;
  nightImage: string;
  lifestyleText: string;
  outdoorLoungeImage: string;
  indoorLivingImage: string;
  livingRoomText: string;
  livingRoomImage: string;
  bedroomText: string;
  bedroomDetailImage: string;
  dreamsText: string;
  bathroomImage: string;
  bedroomSuiteImage: string;
  gallery: string[];
  overview: string;
  automationTier: string;
  automationHighlights: string[];
  specs: PropertySpec[];
  hotspots: Hotspot[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'orchard-villa',
    slug: 'orchard-villa',
    name: 'The Orchard Villa',
    tagline: 'Sun-drenched single-level sanctuary with low-threshold terrace transitions.',
    price: '$2,450,000',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3400,
    lotSize: '0.65 Acres',
    status: 'Immediate Move-In',
    mainImage: '/images/residences/orchard-main.jpg',
    heroHeadline: 'WHERE MODERN DESIGN MERGES WITH THE TROPICS',
    sectionLeftImage: '/images/residences/orchard-left.jpg',
    sectionRightTopImage: '/images/residences/orchard-right-top.jpg',
    sectionPoolImage: '/images/residences/orchard-pool.jpg',
    indoorOutdoorText: 'Blurring the lines between indoors and outdoors, the villa offers a unique way of blending with nature. The mixture of natural materials, high ceilings and large windows creates a sense of openness and connection to the landscape.',
    courtyardImage: '/images/residences/orchard-courtyard.jpg',
    waterDetailImage: '/images/residences/orchard-water.jpg',
    loungeSketchImage: '/images/residences/orchard-lounge.jpg',
    nightHeadline: 'Enjoy dinner under the stars.',
    nightImage: '/images/residences/orchard-night.jpg',
    lifestyleText: 'With its summer kitchen, barbecue, and comfortable outdoor lounge, you can enjoy a true outdoor lifestyle, perfect for relaxing and entertaining.',
    outdoorLoungeImage: '/images/residences/orchard-outdoor-lounge.jpg',
    indoorLivingImage: '/images/residences/orchard-indoor-living.jpg',
    livingRoomText: 'Heart of the house, the bright living room opening onto the swimming pool, comfortably accommodates up to 24 guests for relaxing and sharing.',
    livingRoomImage: '/images/residences/orchard-living-room.jpg',
    bedroomText: 'The three en-suite bedrooms are designed to offer the perfect balance of intimacy and comfort, ensuring a serene stay for every guest.',
    bedroomDetailImage: '/images/residences/orchard-bedroom-detail.jpg',
    dreamsText: 'The perfect haven to embrace the sweetest of dreams.',
    bathroomImage: '/images/residences/orchard-bathroom.jpg',
    bedroomSuiteImage: '/images/residences/orchard-bedroom-suite.jpg',
    gallery: [
      '/images/residences/orchard-main.jpg',
      '/images/residences/orchard-left.jpg',
      '/images/residences/orchard-right-top.jpg',
      '/images/residences/orchard-pool.jpg',
      '/images/residences/orchard-courtyard.jpg',
      '/images/residences/orchard-water.jpg',
      '/images/residences/orchard-lounge.jpg',
      '/images/residences/orchard-night.jpg',
      '/images/residences/orchard-outdoor-lounge.jpg',
      '/images/residences/orchard-indoor-living.jpg',
      '/images/residences/orchard-living-room.jpg',
      '/images/residences/orchard-bedroom-detail.jpg',
      '/images/residences/orchard-bathroom.jpg',
      '/images/residences/orchard-bedroom-suite.jpg'
    ],
    overview: 'Designed around an open olive court, The Orchard Villa blends warm natural timber beams with zero-step threshold sliding doors.',
    automationTier: 'Vine Signature Circadian Suite',
    automationHighlights: [
      'Circadian cove illumination dynamically tuned to daylight',
      'Zero-threshold glass wall slides at touch or voice prompt',
      'Ambient fall-prevention pathways with soft floor-level lighting'
    ],
    specs: [
      { label: 'Living Space', value: '3,400 sq ft' },
      { label: 'Bedrooms', value: '3 En-Suite' },
      { label: 'Bathrooms', value: '3 Full, 1 Powder' }
    ],
    hotspots: []
  },
  {
    id: 'meadow-estate',
    slug: 'meadow-estate',
    name: 'The Meadow Estate',
    tagline: 'Single-story pavilion architecture embracing heated outdoor stone terraces.',
    price: '$3,100,000',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4200,
    lotSize: '1.1 Acres',
    status: 'Available Q4 2026',
    mainImage: '/images/residences/meadow-main.jpg',
    heroHeadline: 'WHERE TIMBER PAVILIONS EMBRACE THE SUN',
    sectionLeftImage: '/images/residences/meadow-left.jpg',
    sectionRightTopImage: '/images/residences/meadow-right-top.jpg',
    sectionPoolImage: '/images/residences/meadow-pool.jpg',
    indoorOutdoorText: 'Harmonizing warm white oak pavilions with stone verandas, The Meadow Estate creates continuous peaceful airflow through high acoustic ceilings.',
    courtyardImage: '/images/residences/meadow-courtyard.jpg',
    waterDetailImage: '/images/residences/meadow-water.jpg',
    loungeSketchImage: '/images/residences/meadow-lounge.jpg',
    nightHeadline: 'Gather under the twilight canopy.',
    nightImage: '/images/residences/meadow-night.jpg',
    lifestyleText: 'Featuring custom stone outdoor hearths and covered dining verandas, entertaining family feels natural and effortless.',
    outdoorLoungeImage: '/images/residences/meadow-outdoor-lounge.jpg',
    indoorLivingImage: '/images/residences/meadow-indoor-living.jpg',
    livingRoomText: 'Anchored by soaring timber roof trusses, the great hall offers seamless pool access and seating for intimate or large gatherings.',
    livingRoomImage: '/images/residences/meadow-living-room.jpg',
    bedroomText: 'Four secluded pavilion bedrooms frame private garden courtyards for complete rest and restorative sleep.',
    bedroomDetailImage: '/images/residences/meadow-bedroom-detail.jpg',
    dreamsText: 'Restorative silence under soaring timber ceilings.',
    bathroomImage: '/images/residences/meadow-bathroom.jpg',
    bedroomSuiteImage: '/images/residences/meadow-bedroom-suite.jpg',
    gallery: [
      '/images/residences/meadow-main.jpg',
      '/images/residences/meadow-left.jpg',
      '/images/residences/meadow-right-top.jpg',
      '/images/residences/meadow-pool.jpg',
      '/images/residences/meadow-courtyard.jpg',
      '/images/residences/meadow-water.jpg',
      '/images/residences/meadow-lounge.jpg',
      '/images/residences/meadow-night.jpg',
      '/images/residences/meadow-outdoor-lounge.jpg',
      '/images/residences/meadow-indoor-living.jpg',
      '/images/residences/meadow-living-room.jpg',
      '/images/residences/meadow-bedroom-detail.jpg',
      '/images/residences/meadow-bathroom.jpg',
      '/images/residences/meadow-bedroom-suite.jpg'
    ],
    overview: 'The Meadow Estate provides generous multi-generational space with non-slip heated outdoor pavers.',
    automationTier: 'Vine Premier Environmental Climate',
    automationHighlights: [
      'Heated non-slip courtyard pavers with auto-melt sensors',
      'Whisper-quiet HEPA filter climate zoning'
    ],
    specs: [
      { label: 'Living Space', value: '4,200 sq ft' },
      { label: 'Bedrooms', value: '4 En-Suite' }
    ],
    hotspots: []
  },
  {
    id: 'palma-residence',
    slug: 'palma-residence',
    name: 'The Palma Residence',
    tagline: 'Lush tropical courtyard sanctuary with seamless indoor-outdoor living.',
    price: '$2,750,000',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3600,
    lotSize: '0.75 Acres',
    status: 'Immediate Move-In',
    mainImage: '/images/residences/palma-main.jpg',
    heroHeadline: 'WHERE PALM SHADOWS MEET ACOUSTIC CALM',
    sectionLeftImage: '/images/residences/palma-left.jpg',
    sectionRightTopImage: '/images/residences/palma-right-top.jpg',
    sectionPoolImage: '/images/residences/palma-pool.jpg',
    indoorOutdoorText: 'Wrapped around a secluded palm courtyard, every suite opens flush to outdoor gardens for quiet morning contemplation.',
    courtyardImage: '/images/residences/palma-courtyard.jpg',
    waterDetailImage: '/images/residences/palma-water.jpg',
    loungeSketchImage: '/images/residences/palma-lounge.jpg',
    nightHeadline: 'Unwind beneath palm starlight.',
    nightImage: '/images/residences/palma-night.jpg',
    lifestyleText: 'Acoustically isolated garden lounges provide quiet sanctuaries for reading, coffee, and afternoon breeze.',
    outdoorLoungeImage: '/images/residences/palma-outdoor-lounge.jpg',
    indoorLivingImage: '/images/residences/palma-indoor-living.jpg',
    livingRoomText: 'Surrounded by tropical gardens and glass pocket walls, the sunlit lounge provides serene indoor-outdoor transition.',
    livingRoomImage: '/images/residences/palma-living-room.jpg',
    bedroomText: 'Acoustically soundproofed master suites feature curbless zero-threshold marble rain showers.',
    bedroomDetailImage: '/images/residences/palma-bedroom-detail.jpg',
    dreamsText: 'Wake up to gentle palm breezes and warm daylight.',
    bathroomImage: '/images/residences/palma-bathroom.jpg',
    bedroomSuiteImage: '/images/residences/palma-bedroom-suite.jpg',
    gallery: [
      '/images/residences/palma-main.jpg',
      '/images/residences/palma-left.jpg',
      '/images/residences/palma-right-top.jpg',
      '/images/residences/palma-pool.jpg',
      '/images/residences/palma-courtyard.jpg',
      '/images/residences/palma-water.jpg',
      '/images/residences/palma-lounge.jpg',
      '/images/residences/palma-night.jpg',
      '/images/residences/palma-outdoor-lounge.jpg',
      '/images/residences/palma-indoor-living.jpg',
      '/images/residences/palma-living-room.jpg',
      '/images/residences/palma-bedroom-detail.jpg',
      '/images/residences/palma-bathroom.jpg',
      '/images/residences/palma-bedroom-suite.jpg'
    ],
    overview: 'Enclosed by tropical palms and acoustic privacy gardens, The Palma Residence offers serene single-level freedom.',
    automationTier: 'Vine Sanctuary Ambient Peace & Wellness',
    automationHighlights: [
      'Automated motorized shade control synced to sun azimuth',
      'Acoustic privacy soundmasking in all outdoor verandas'
    ],
    specs: [
      { label: 'Living Space', value: '3,600 sq ft' },
      { label: 'Bedrooms', value: '3 En-Suite' }
    ],
    hotspots: []
  },
  {
    id: 'solis-estate',
    slug: 'solis-estate',
    name: 'The Solis Estate',
    tagline: 'Golden-hour architectural pavilion with panoramic mountain view terraces.',
    price: '$3,400,000',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4500,
    lotSize: '1.4 Acres',
    status: 'Custom Build',
    mainImage: '/images/residences/solis-main.jpg',
    heroHeadline: 'WHERE GOLDEN SUNSETS MEET MOUNTAIN RIDGE VIEWS',
    sectionLeftImage: '/images/residences/solis-left.jpg',
    sectionRightTopImage: '/images/residences/solis-right-top.jpg',
    sectionPoolImage: '/images/residences/solis-pool.jpg',
    indoorOutdoorText: 'Elevated along golden mountain ridges, sweeping glass portals collapse completely into pocket walls for breathtaking sunset dining.',
    courtyardImage: '/images/residences/solis-courtyard.jpg',
    waterDetailImage: '/images/residences/solis-water.jpg',
    loungeSketchImage: '/images/residences/solis-lounge.jpg',
    nightHeadline: 'Watch the golden ridge fade into stars.',
    nightImage: '/images/residences/solis-night.jpg',
    lifestyleText: 'Perched high above the valley floor, enjoy private poolside sunsets with integrated outdoor chef stations.',
    outdoorLoungeImage: '/images/residences/solis-outdoor-lounge.jpg',
    indoorLivingImage: '/images/residences/solis-indoor-living.jpg',
    livingRoomText: 'Perched along the ridge, double-height ceiling portals flood the main living salon with warm golden hour sunlight.',
    livingRoomImage: '/images/residences/solis-living-room.jpg',
    bedroomText: 'Hillside view suites combine motorized blackout shades with private morning observation decks.',
    bedroomDetailImage: '/images/residences/solis-bedroom-detail.jpg',
    dreamsText: 'Hillside serenity meets effortless automated luxury.',
    bathroomImage: '/images/residences/solis-bathroom.jpg',
    bedroomSuiteImage: '/images/residences/solis-bedroom-suite.jpg',
    gallery: [
      '/images/residences/solis-main.jpg',
      '/images/residences/solis-left.jpg',
      '/images/residences/solis-right-top.jpg',
      '/images/residences/solis-pool.jpg',
      '/images/residences/solis-courtyard.jpg',
      '/images/residences/solis-water.jpg',
      '/images/residences/solis-lounge.jpg',
      '/images/residences/solis-night.jpg',
      '/images/residences/solis-outdoor-lounge.jpg',
      '/images/residences/solis-indoor-living.jpg',
      '/images/residences/solis-living-room.jpg',
      '/images/residences/solis-bedroom-detail.jpg',
      '/images/residences/solis-bathroom.jpg',
      '/images/residences/solis-bedroom-suite.jpg'
    ],
    overview: 'Perched along a quiet hillside ridge, The Solis Estate features warm golden timber cladding and expansive glass walls.',
    automationTier: 'Vine Signature Solar & Zero-Threshold Suite',
    automationHighlights: [
      'Integrated Tesla Solar Roof with Powerwall emergency backup',
      'Biometric voice-controlled zero-threshold entry doors'
    ],
    specs: [
      { label: 'Living Space', value: '4,500 sq ft' },
      { label: 'Bedrooms', value: '4 En-Suite' }
    ],
    hotspots: []
  },
  {
    id: 'luna-residence',
    slug: 'luna-residence',
    name: 'The Luna Residence',
    tagline: 'Quiet evening poolside villa with soft circadian pathway lighting.',
    price: '$2,900,000',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3800,
    lotSize: '0.85 Acres',
    status: 'Immediate Move-In',
    mainImage: '/images/residences/luna-main.jpg',
    heroHeadline: 'WHERE NIGHTTIME COVES ILLUMINATE PEACE',
    sectionLeftImage: '/images/residences/luna-left.jpg',
    sectionRightTopImage: '/images/residences/luna-right-top.jpg',
    sectionPoolImage: '/images/residences/luna-pool.jpg',
    indoorOutdoorText: 'Illuminated by warm recessed cove arrays, The Luna Residence creates serene evening reflection across crystal thermal waters.',
    courtyardImage: '/images/residences/luna-courtyard.jpg',
    waterDetailImage: '/images/residences/luna-water.jpg',
    loungeSketchImage: '/images/residences/luna-lounge.jpg',
    nightHeadline: 'Moonlit reflections over quiet waters.',
    nightImage: '/images/residences/luna-night.jpg',
    lifestyleText: 'Circadian pool light arrays and heated spa benches create an effortless haven for nighttime relaxation.',
    outdoorLoungeImage: '/images/residences/luna-outdoor-lounge.jpg',
    indoorLivingImage: '/images/residences/luna-indoor-living.jpg',
    livingRoomText: 'Designed for peaceful starlit evenings, soft ambient cove lighting turns the central salon into an intimate sanctuary.',
    livingRoomImage: '/images/residences/luna-living-room.jpg',
    bedroomText: 'Integrated circadian lighting arrays gently transition bedroom cove lighting to match your natural sleep cycle.',
    bedroomDetailImage: '/images/residences/luna-bedroom-detail.jpg',
    dreamsText: 'Sleep deeply with automated circadian temperature control.',
    bathroomImage: '/images/residences/luna-bathroom.jpg',
    bedroomSuiteImage: '/images/residences/luna-bedroom-suite.jpg',
    gallery: [
      '/images/residences/luna-main.jpg',
      '/images/residences/luna-left.jpg',
      '/images/residences/luna-right-top.jpg',
      '/images/residences/luna-pool.jpg',
      '/images/residences/luna-courtyard.jpg',
      '/images/residences/luna-water.jpg',
      '/images/residences/luna-lounge.jpg',
      '/images/residences/luna-night.jpg',
      '/images/residences/luna-outdoor-lounge.jpg',
      '/images/residences/luna-indoor-living.jpg',
      '/images/residences/luna-living-room.jpg',
      '/images/residences/luna-bedroom-detail.jpg',
      '/images/residences/luna-bathroom.jpg',
      '/images/residences/luna-bedroom-suite.jpg'
    ],
    overview: 'Designed for peaceful starlit evenings, The Luna Residence features ambient pool cove illumination.',
    automationTier: 'Vine Sanctuary Ambient Peace & Wellness',
    automationHighlights: [
      'Night-vision infrared perimeter sensor monitoring',
      'Curbless zero-threshold spa bath with heated marble floors'
    ],
    specs: [
      { label: 'Living Space', value: '3,800 sq ft' },
      { label: 'Bedrooms', value: '3 En-Suite' }
    ],
    hotspots: []
  }
];

export const HERO_IMAGE = '/images/hero/hero-villa.jpg';
export const VALUES_IMAGE = '/images/hero/values-philosophy.jpg';
export const KITCHEN_IMAGE = '/images/hero/kitchen-detail.jpg';
