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
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    heroHeadline: 'WHERE MODERN DESIGN MERGES WITH THE TROPICS',
    sectionLeftImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    sectionRightTopImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    sectionPoolImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
    indoorOutdoorText: 'Blurring the lines between indoors and outdoors, the villa offers a unique way of blending with nature. The mixture of natural materials, high ceilings and large windows creates a sense of openness and connection to the landscape.',
    courtyardImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    waterDetailImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    loungeSketchImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    nightHeadline: 'Enjoy dinner under the stars.',
    nightImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=90',
    lifestyleText: 'With its summer kitchen, barbecue, and comfortable outdoor lounge, you can enjoy a true outdoor lifestyle, perfect for relaxing and entertaining.',
    outdoorLoungeImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85',
    indoorLivingImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    livingRoomText: 'Heart of the house, the bright living room opening onto the swimming pool, comfortably accommodates up to 24 guests for relaxing and sharing.',
    livingRoomImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=90',
    bedroomText: 'The three en-suite bedrooms are designed to offer the perfect balance of intimacy and comfort, ensuring a serene stay for every guest.',
    bedroomDetailImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    dreamsText: 'The perfect haven to embrace the sweetest of dreams.',
    bathroomImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    bedroomSuiteImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
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
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    heroHeadline: 'WHERE TIMBER PAVILIONS EMBRACE THE SUN',
    sectionLeftImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85',
    sectionRightTopImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85',
    sectionPoolImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
    indoorOutdoorText: 'Harmonizing warm white oak pavilions with stone verandas, The Meadow Estate creates continuous peaceful airflow through high acoustic ceilings.',
    courtyardImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
    waterDetailImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85',
    loungeSketchImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    nightHeadline: 'Gather under the twilight canopy.',
    nightImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=2400&q=90',
    lifestyleText: 'Featuring custom stone outdoor hearths and covered dining verandas, entertaining family feels natural and effortless.',
    outdoorLoungeImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
    indoorLivingImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85',
    livingRoomText: 'Anchored by soaring timber roof trusses, the great hall offers seamless pool access and seating for intimate or large gatherings.',
    livingRoomImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90',
    bedroomText: 'Four secluded pavilion bedrooms frame private garden courtyards for complete rest and restorative sleep.',
    bedroomDetailImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
    dreamsText: 'Restorative silence under soaring timber ceilings.',
    bathroomImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85',
    bedroomSuiteImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'
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
    mainImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
    heroHeadline: 'WHERE PALM SHADOWS MEET ACOUSTIC CALM',
    sectionLeftImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    sectionRightTopImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85',
    sectionPoolImage: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=85',
    indoorOutdoorText: 'Wrapped around a secluded palm courtyard, every suite opens flush to outdoor gardens for quiet morning contemplation.',
    courtyardImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
    waterDetailImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85',
    loungeSketchImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=85',
    nightHeadline: 'Unwind beneath palm starlight.',
    nightImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=90',
    lifestyleText: 'Acoustically isolated garden lounges provide quiet sanctuaries for reading, coffee, and afternoon breeze.',
    outdoorLoungeImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85',
    indoorLivingImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=85',
    livingRoomText: 'Surrounded by tropical gardens and glass pocket walls, the sunlit lounge provides serene indoor-outdoor transition.',
    livingRoomImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2400&q=90',
    bedroomText: 'Acoustically soundproofed master suites feature curbless zero-threshold marble rain showers.',
    bedroomDetailImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=1600&q=85',
    dreamsText: 'Wake up to gentle palm breezes and warm daylight.',
    bathroomImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
    bedroomSuiteImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85'
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
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    heroHeadline: 'WHERE GOLDEN SUNSETS MEET MOUNTAIN RIDGE VIEWS',
    sectionLeftImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    sectionRightTopImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    sectionPoolImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    indoorOutdoorText: 'Elevated along golden mountain ridges, sweeping glass portals collapse completely into pocket walls for breathtaking sunset dining.',
    courtyardImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    waterDetailImage: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?auto=format&fit=crop&w=1400&q=85',
    loungeSketchImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    nightHeadline: 'Watch the golden ridge fade into stars.',
    nightImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90',
    lifestyleText: 'Perched high above the valley floor, enjoy private poolside sunsets with integrated outdoor chef stations.',
    outdoorLoungeImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
    indoorLivingImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    livingRoomText: 'Perched along the ridge, double-height ceiling portals flood the main living salon with warm golden hour sunlight.',
    livingRoomImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2400&q=90',
    bedroomText: 'Hillside view suites combine motorized blackout shades with private morning observation decks.',
    bedroomDetailImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
    dreamsText: 'Hillside serenity meets effortless automated luxury.',
    bathroomImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    bedroomSuiteImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
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
    mainImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
    heroHeadline: 'WHERE NIGHTTIME COVES ILLUMINATE PEACE',
    sectionLeftImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=85',
    sectionRightTopImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=85',
    sectionPoolImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    indoorOutdoorText: 'Illuminated by warm recessed cove arrays, The Luna Residence creates serene evening reflection across crystal thermal waters.',
    courtyardImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
    waterDetailImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85',
    loungeSketchImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85',
    nightHeadline: 'Moonlit reflections over quiet waters.',
    nightImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=90',
    lifestyleText: 'Circadian pool light arrays and heated spa benches create an effortless haven for nighttime relaxation.',
    outdoorLoungeImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85',
    indoorLivingImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=85',
    livingRoomText: 'Designed for peaceful starlit evenings, soft ambient cove lighting turns the central salon into an intimate sanctuary.',
    livingRoomImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2400&q=90',
    bedroomText: 'Integrated circadian lighting arrays gently transition bedroom cove lighting to match your natural sleep cycle.',
    bedroomDetailImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=1600&q=85',
    dreamsText: 'Sleep deeply with automated circadian temperature control.',
    bathroomImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
    bedroomSuiteImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85'
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

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90';
export const VALUES_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85';
export const KITCHEN_IMAGE = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85';
