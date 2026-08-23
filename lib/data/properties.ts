export interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
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
  status: 'Immediate Move-In' | 'Available Q4 2026' | 'Custom Build';
  mainImage: string;
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
    slug: 'the-orchard-villa',
    name: 'The Orchard Villa',
    tagline: 'Sun-drenched single-level sanctuary with low-threshold terrace transitions.',
    price: '$2,450,000',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3400,
    lotSize: '0.65 Acres',
    status: 'Immediate Move-In',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80'
    ],
    overview: 'Designed around an open olive court, The Orchard Villa blends warm natural timber beams with zero-step threshold sliding doors. Every room is bathed in gentle natural light, supported by invisible circadian illumination that adjusts automatically to your internal rhythm.',
    automationTier: 'Vine Signature Circadian & Zero-Threshold Suite',
    automationHighlights: [
      'Circadian cove illumination dynamically tuned to daylight',
      'Zero-threshold glass wall slides at touch or voice prompt',
      'Ambient fall-prevention pathways with soft floor-level lighting',
      'Touchless motorized cabinetry with anti-pinch sensors'
    ],
    specs: [
      { label: 'Living Space', value: '3,400 sq ft' },
      { label: 'Bedrooms', value: '3 En-Suite' },
      { label: 'Bathrooms', value: '3 Full, 1 Powder' },
      { label: 'Accessibility Rating', value: 'WCAG AAA / Zero-Step' },
      { label: 'Garage', value: '2-Car EV Automated' }
    ],
    hotspots: [
      {
        id: 'hs-1',
        x: 35,
        y: 40,
        title: 'Circadian Cove Lighting',
        description: 'Warm LED arrays shift temperature from 2700K morning glow to 1800K night resting warmth.',
        category: 'lighting'
      },
      {
        id: 'hs-2',
        x: 65,
        y: 55,
        title: 'Zero-Step Sliding Portal',
        description: 'Flush-recessed floor track eliminates tripping hazards when entering outdoor lounge.',
        category: 'ergonomics'
      },
      {
        id: 'hs-3',
        x: 50,
        y: 75,
        title: 'Radar Fall Safeguard Sensor',
        description: 'Non-optical radar monitors posture and movement without intrusive video cameras.',
        category: 'safety'
      }
    ]
  },
  {
    id: 'meadow-estate',
    slug: 'the-meadow-estate',
    name: 'The Meadow Estate',
    tagline: 'Single-story pavilion architecture embracing heated outdoor stone terraces.',
    price: '$3,100,000',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4200,
    lotSize: '1.1 Acres',
    status: 'Available Q4 2026',
    mainImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80'
    ],
    overview: 'The Meadow Estate provides generous multi-generational space with non-slip heated outdoor pavers and level courtyard access. Intelligent climate systems continuously monitor air purity, humidity, and temperature to maintain pristine comfort.',
    automationTier: 'Vine Premier Environmental & Voice Climate',
    automationHighlights: [
      'Heated non-slip courtyard pavers with auto-melt sensors',
      'Whisper-quiet HEPA filter climate zoning in every pavilion',
      'Intuitive touchless morning bar with motorized counters',
      'Integrated VIP Concierge direct voice connection'
    ],
    specs: [
      { label: 'Living Space', value: '4,200 sq ft' },
      { label: 'Bedrooms', value: '4 En-Suite' },
      { label: 'Bathrooms', value: '4 Full, 1 Powder' },
      { label: 'Accessibility Rating', value: 'WCAG AAA / Level Grounds' },
      { label: 'Pool', value: 'Zero-Depth Ramp Entry Heated Pool' }
    ],
    hotspots: [
      {
        id: 'hs-me-1',
        x: 42,
        y: 30,
        title: 'HEPA Micro-Climate Zone',
        description: 'Multi-stage air purification cleanses room air 6 times per hour quietly.',
        category: 'climate'
      },
      {
        id: 'hs-me-2',
        x: 70,
        y: 60,
        title: 'Zero-Depth Ramp Entry',
        description: 'Gentle sloped entrance into heated therapeutic swimming pool with handrails.',
        category: 'ergonomics'
      }
    ]
  },
  {
    id: 'haven-residence',
    slug: 'the-haven-residence',
    name: 'The Haven Residence',
    tagline: 'Quiet sanctuary master suite with integrated zero-barrier wellness bath.',
    price: '$2,850,000',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3100,
    lotSize: '0.50 Acres',
    status: 'Immediate Move-In',
    mainImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1400&q=80'
    ],
    overview: 'Thoughtfully scaled for intimate comfort, The Haven Residence emphasizes restful sleep and stress-free living. The primary suite features acoustically dampened walls, organic tactile linen textures, and a curbless walk-in spa bath.',
    automationTier: 'Vine Sanctuary Ambient Peace & Wellness',
    automationHighlights: [
      'Acoustically treated sound-dampening suite insulation',
      'Curbless zero-threshold wet room with heated floating bench',
      'Automatic gentle wake-up illumination simulating sunrise',
      'Discreet emergency assistance points recessed at bedside'
    ],
    specs: [
      { label: 'Living Space', value: '3,100 sq ft' },
      { label: 'Bedrooms', value: '3 En-Suite' },
      { label: 'Bathrooms', value: '3 Full Spa Baths' },
      { label: 'Accessibility Rating', value: 'WCAG AAA / Curbless' },
      { label: 'Courtyard', value: 'Enclosed Sensory Garden' }
    ],
    hotspots: [
      {
        id: 'hs-hr-1',
        x: 30,
        y: 45,
        title: 'Curbless Wet Room',
        description: 'Level floor transition with radiant floor heating and concealed linear drain.',
        category: 'ergonomics'
      },
      {
        id: 'hs-hr-2',
        x: 75,
        y: 35,
        title: 'Bedside Emergency Call Beacon',
        description: 'Tactile brass button and voice-triggered assistance line connected directly to concierge.',
        category: 'safety'
      }
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Circadian Well-Being',
    description: 'Illumination that naturally mimics daylight cycles, encouraging restful sleep and bright, energetic mornings without glare.',
    iconName: 'Sun'
  },
  {
    title: 'Zero-Barrier Living',
    description: 'Architectural flush tracks, 36-inch wide doorways, and level transitions that welcome effortless movement for every decade of life.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Ambient Peace of Mind',
    description: 'Invisible, camera-free radar safeguards that monitor wellness and prevent falls, ensuring privacy while offering total reassurance.',
    iconName: 'HeartHandshake'
  }
];

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85';
export const VALUES_IMAGE = 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1400&q=80';
export const KITCHEN_IMAGE = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80';
