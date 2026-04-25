export type PropertyStatus = 'available' | 'reserved' | 'sold';

export type PropertyType = 'villa' | 'penthouse' | 'estate' | 'beachfront' | 'residence';

export interface Amenity {
  icon: string;
  label: string;
}

export interface VirtualTour {
  type: 'matterport' | 'youtube' | 'iframe';
  url: string;
  thumbnail?: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  currency: string;
  priceLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sqm: number;
  landSqm?: number;
  images: string[];
  heroImage: string;
  virtualTour?: VirtualTour;
  amenities: Amenity[];
  features: string[];
  coordinates: { lat: number; lng: number };
  yearBuilt: number;
  architect?: string;
  interiorDesigner?: string;
}

// High-quality Unsplash images for luxury properties (coastal/African/tropical)
export const properties: Property[] = [
  {
    id: 'prop-001',
    slug: 'ocean-crown-villa',
    name: 'Ocean Crown Villa',
    location: 'Mtwapa Creek, Kilifi County',
    country: 'Kenya',
    type: 'villa',
    status: 'available',
    price: 2_850_000,
    currency: 'USD',
    priceLabel: '$2,850,000',
    tagline: 'Where the Indian Ocean meets architectural perfection.',
    description: 'A masterwork of coastal luxury set above Mtwapa Creek with panoramic ocean vistas and private beach access.',
    longDescription: `Ocean Crown Villa redefines coastal living on Kenya's Swahili Coast. Perched above the translucent waters of Mtwapa Creek, this six-bedroom masterpiece was conceived by award-winning architect Studio Kweli as a dialogue between the Swahili architectural tradition and contemporary minimalism.\n\nEvery room frames a different composition of ocean, mangrove, and sky. The double-height living pavilion dissolves into an infinity terrace, while the coral-stone walls and makuti-thatched roof mediate between interior comfort and the equatorial climate. Three saltwater pools cascade toward the creek's edge.\n\nThe property includes a private dhow jetty, a 12-seat outdoor dining pavilion, a curated wine cellar, and a state-of-the-art home cinema. Staff quarters, a vehicle garage for four, and a solar-plus-battery energy system ensure complete self-sufficiency.`,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8_500,
    sqm: 790,
    landSqm: 4_200,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90',
    virtualTour: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
    },
    amenities: [
      { icon: '🏊', label: 'Three Infinity Pools' },
      { icon: '⛵', label: 'Private Dhow Jetty' },
      { icon: '🌿', label: 'Tropical Gardens' },
      { icon: '🍷', label: 'Wine Cellar' },
      { icon: '🎬', label: 'Home Cinema' },
      { icon: '☀️', label: 'Solar Energy System' },
      { icon: '🧖', label: 'Spa & Wellness Pavilion' },
      { icon: '🚗', label: '4-Car Garage' },
      { icon: '🏋️', label: 'Private Gym' },
      { icon: '🍽️', label: 'Outdoor Dining Pavilion' },
    ],
    features: [
      'Panoramic Indian Ocean views',
      'Coral stone & makuti construction',
      'Private beach access',
      '24/7 concierge & security',
      'Smart home automation',
      'Staff quarters',
      'Guest cottage',
    ],
    coordinates: { lat: -3.924, lng: 39.728 },
    yearBuilt: 2023,
    architect: 'Studio Kweli',
    interiorDesigner: 'Atelier Pwani',
  },
  {
    id: 'prop-002',
    slug: 'bahari-penthouse',
    name: 'Bahari Penthouse',
    location: 'Nyali Beach, Mombasa',
    country: 'Kenya',
    type: 'penthouse',
    status: 'available',
    price: 1_200_000,
    currency: 'USD',
    priceLabel: '$1,200,000',
    tagline: "The highest expression of Mombasa's coastal urbanism.",
    description: 'A sky-high sanctuary crowning the Bahari Residences, with 270° views of the Indian Ocean from a triple-aspect wrap-around terrace.',
    longDescription: `Bahari Penthouse occupies the entire uppermost floor of the Bahari Residences tower in Nyali, granting its owner uninterrupted horizon views from Mombasa Island to the open Indian Ocean. The 270-degree wrap-around terrace — over 300 sqm of outdoor living — hosts a heated plunge pool, a summer kitchen, and an alfresco dining zone cooled by ocean breezes.\n\nInside, the 4-bedroom plan is expressed in bleached timber, honed marble, and bespoke Zanzibar furniture. The double-height library-lounge is the residence's social heart, while a private lift and separate staff entrance ensure complete privacy. A dedicated rooftop helipad access point is available for scheduled helicopter transfers to Wilson Airport, Nairobi.`,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5_800,
    sqm: 539,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=85',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=90',
    amenities: [
      { icon: '🌊', label: '270° Ocean Views' },
      { icon: '🛁', label: 'Rooftop Plunge Pool' },
      { icon: '🍳', label: 'Summer Kitchen' },
      { icon: '🚁', label: 'Helipad Access' },
      { icon: '📚', label: 'Double-Height Library' },
      { icon: '🛗', label: 'Private Lift' },
      { icon: '🔐', label: 'Biometric Entry' },
      { icon: '🌅', label: 'Sunrise & Sunset Terraces' },
    ],
    features: [
      '270° panoramic ocean views',
      'Wrap-around terrace 300+ sqm',
      'Helipad access',
      'Concierge service',
      'Private lift',
      'Smart home system',
    ],
    coordinates: { lat: -4.026, lng: 39.717 },
    yearBuilt: 2024,
    interiorDesigner: 'Maison Bahari',
  },
  {
    id: 'prop-003',
    slug: 'kaskazi-estate',
    name: 'Kaskazi Estate',
    location: 'Watamu Marine Park, Kilifi',
    country: 'Kenya',
    type: 'estate',
    status: 'available',
    price: 4_500_000,
    currency: 'USD',
    priceLabel: '$4,500,000',
    tagline: 'A private world within a UNESCO Biosphere Reserve.',
    description: 'Six hectares of coastal forest, two villas, and a private lagoon — an estate of extraordinary ecological and architectural distinction.',
    longDescription: `Kaskazi Estate occupies a privileged six-hectare parcel on the edge of Watamu Marine National Park, itself designated a UNESCO Biosphere Reserve. The property encompasses two distinct residences — the Main Villa (5 bedrooms) and the Dune Pavilion (3 bedrooms) — connected by a boardwalk through indigenous coastal forest.\n\nAt the property's heart lies a private tidal lagoon, accessible by wooden dhow and home to resident hawksbill sea turtles. The naturalist-designed gardens integrate indigenous planting with a vegetable garden, orchard, and medicinal herb spiral. Kaskazi holds a commitment to carbon neutrality through on-site renewables and managed reforestation.`,
    bedrooms: 8,
    bathrooms: 9,
    sqft: 12_000,
    sqm: 1_115,
    landSqm: 60_000,
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85',
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1600&q=85',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=90',
    virtualTour: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=85',
    },
    amenities: [
      { icon: '🌊', label: 'Private Tidal Lagoon' },
      { icon: '🐢', label: 'Sea Turtle Habitat' },
      { icon: '🌴', label: '6 Hectares Coastal Forest' },
      { icon: '☀️', label: 'Carbon-Neutral Operations' },
      { icon: '⛵', label: 'Private Dhow' },
      { icon: '🌿', label: 'Organic Gardens & Orchard' },
      { icon: '🏊', label: 'Lagoon & Infinity Pools' },
      { icon: '🔭', label: 'Stargazing Observatory' },
      { icon: '🍽️', label: 'Private Chef & Staff' },
      { icon: '🚁', label: 'Helicopter Pad' },
    ],
    features: [
      'UNESCO Biosphere Reserve location',
      'Two separate villa residences',
      'Private tidal lagoon',
      'Carbon-neutral estate',
      'Wildlife & conservation program',
      '24/7 resident manager',
    ],
    coordinates: { lat: -3.354, lng: 40.021 },
    yearBuilt: 2021,
    architect: 'Urko Sanchez Architects',
    interiorDesigner: 'Bibi Design Studio',
  },
  {
    id: 'prop-004',
    slug: 'malindi-coral-residence',
    name: 'Malindi Coral Residence',
    location: 'Silversands, Malindi',
    country: 'Kenya',
    type: 'beachfront',
    status: 'available',
    price: 980_000,
    currency: 'USD',
    priceLabel: '$980,000',
    tagline: 'Barefoot luxury on the ivory sands of Malindi.',
    description: 'A five-bedroom beachfront residence of effortless elegance, set directly on the champagne sands of Silversands Beach.',
    longDescription: `Malindi Coral Residence sits with its toes in the sand at Silversands, one of the East African coast's most celebrated beaches. The architecture is a love letter to the Swahili coast tradition — hand-carved coral rag walls, carved wooden shutters, and a sequence of indoor-outdoor living spaces that celebrate the sea breeze.\n\nFive en-suite bedrooms open onto private verandas. The beachfront living room dematerialises into the beach through retractable glass walls. A thatched beach bar, a sundeck, and two swimming pools — one seawater, one freshwater — complete the picture.`,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 4_800,
    sqm: 446,
    landSqm: 1_800,
    images: [
      'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=1600&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85',
      'https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=1600&q=85',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=1920&q=90',
    amenities: [
      { icon: '🏖️', label: 'Direct Beach Access' },
      { icon: '🌊', label: 'Seawater Pool' },
      { icon: '🍹', label: 'Thatched Beach Bar' },
      { icon: '🌅', label: 'Beachfront Sundeck' },
      { icon: '🎣', label: 'Deep-Sea Fishing Arranged' },
      { icon: '🏄', label: 'Water Sports Equipment' },
    ],
    features: [
      'Direct beach frontage',
      'Coral rag architecture',
      'Retractable glass living room',
      'Seawater & freshwater pools',
      'Staff cottage included',
    ],
    coordinates: { lat: -3.211, lng: 40.133 },
    yearBuilt: 2019,
    interiorDesigner: 'Coast Interiors',
  },
  {
    id: 'prop-005',
    slug: 'diani-palm-retreat',
    name: 'Diani Palm Retreat',
    location: 'Diani Beach, Kwale County',
    country: 'Kenya',
    type: 'villa',
    status: 'reserved',
    price: 1_750_000,
    currency: 'USD',
    priceLabel: '$1,750,000',
    tagline: 'The definitive Diani hideaway — private, lush, and luminous.',
    description: 'Set deep in a grove of ancient palms above Diani\'s turquoise reef, this villa is a serene sanctuary of elevated coastal living.',
    longDescription: `Diani Palm Retreat is positioned at the top of a coral ridge, tucked within a grove of centuries-old coconut palms that frame the Indian Ocean below. The villa's architecture is rooted in restraint — board-formed concrete, reclaimed teak, and expanses of glass that draw the landscape inside.\n\nThe generous floor plan flows across a single level: a chef's kitchen, a double-volume living pavilion, a media room, and four bedroom suites each with private outdoor bathrooms in lush garden enclosures. The pool terrace cantilevers over the ridge for theatrical ocean views.`,
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5_200,
    sqm: 483,
    landSqm: 3_500,
    images: [
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1600&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1920&q=90',
    amenities: [
      { icon: '🌴', label: 'Ancient Palm Grove' },
      { icon: '🏊', label: 'Cantilevered Infinity Pool' },
      { icon: '🌊', label: 'Ocean Ridge Views' },
      { icon: '🌿', label: 'Outdoor Garden Bathrooms' },
      { icon: '🍳', label: 'Chef\'s Kitchen' },
      { icon: '🎬', label: 'Media Room' },
    ],
    features: [
      'Coral ridge position',
      'Ancient palm grove setting',
      'Outdoor garden bathrooms',
      'Cantilevered pool terrace',
      'Single-level layout',
    ],
    coordinates: { lat: -4.318, lng: 39.577 },
    yearBuilt: 2022,
    architect: 'Nairobi Modern Studio',
  },
  {
    id: 'prop-006',
    slug: 'lamu-archipelago-manor',
    name: 'Lamu Archipelago Manor',
    location: 'Shela, Lamu Island',
    country: 'Kenya',
    type: 'residence',
    status: 'available',
    price: 3_200_000,
    currency: 'USD',
    priceLabel: '$3,200,000',
    tagline: 'A UNESCO World Heritage manor, reimagined for the 21st century.',
    description: 'A meticulously restored 18th-century Swahili manor in Shela, combining heritage architecture with contemporary luxury.',
    longDescription: `Lamu Archipelago Manor is a rare treasure — a fully restored 18th-century Swahili merchant's residence in the UNESCO World Heritage town of Shela, on Lamu Island. The seven-bedroom manor has been sympathetically renovated over three years, preserving its original carved plasterwork, carved wooden doors, and coral stone construction while introducing discreet contemporary comforts.\n\nThe rooftop terrace, accessible by a carved staircase, offers panoramic views of the Lamu Archipelago and the open ocean. A private courtyard with a plunge pool, a rooftop dining room, and a private jetty on the Lamu Channel complete the offering.`,
    bedrooms: 7,
    bathrooms: 7,
    sqft: 7_200,
    sqm: 669,
    images: [
      'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=1600&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85',
      'https://images.unsplash.com/photo-1600047508788-786f3865b57c?w=1600&q=85',
      'https://images.unsplash.com/photo-1558882224-dda166733046?w=1600&q=85',
    ],
    heroImage: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=1920&q=90',
    virtualTour: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800&q=85',
    },
    amenities: [
      { icon: '🏛️', label: 'UNESCO Heritage Architecture' },
      { icon: '🌊', label: 'Lamu Channel Frontage' },
      { icon: '⛵', label: 'Private Jetty' },
      { icon: '🌹', label: 'Carved Plasterwork Interiors' },
      { icon: '🏊', label: 'Courtyard Plunge Pool' },
      { icon: '🍽️', label: 'Rooftop Dining Room' },
      { icon: '🔐', label: '24/7 Private Security' },
      { icon: '🎨', label: 'Curated Art Collection' },
    ],
    features: [
      'UNESCO World Heritage location',
      '18th-century Swahili architecture',
      'Fully restored heritage interiors',
      'Private channel jetty',
      'No motor vehicles on island',
      'Curated art & antiques included',
    ],
    coordinates: { lat: -2.269, lng: 40.902 },
    yearBuilt: 1780,
    architect: 'Restored by Lamu Heritage Trust',
    interiorDesigner: 'Studio Pwani',
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(price: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
