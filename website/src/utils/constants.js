import React from "react";
import {
  Flame, Building2, HardHat, Truck,
} from "lucide-react";

/* ═══════════════════════════════════════════
   BRAND
   ═══════════════════════════════════════════ */
export const BRAND = {
  name: "Vatumwa Civils & Construction",
  shortName: "Vatumwa",
  phone: "078 767 7834",
  email: "info@vatumwacivils.co.zw",
  address: "12 Industrial Road, Harare, Zimbabwe",
  tagline: "Building Africa's Future, One Foundation at a Time",
  founded: "2018",
  logo: "/logo.png",
};

export const COLORS = {
  navy: "#0B1D35",
  deepNavy: "#060F1F",
  navyLight: "#132B4D",
  navyMid: "#1A2E4A",
  gold: "#F5B731",
  goldLight: "#FFD166",
  goldDark: "#D49B1F",
  white: "#FFFFFF",
  offWhite: "#F7F8FA",
  gray100: "#F1F5F9",
  gray200: "#E2E8F0",
  gray400: "#94A3B8",
  gray600: "#475569",
  gray800: "#1E293B",
};

/* ═══════════════════════════════════════════
   IMAGES — each has a "vision" comment describing the ideal photo
   ═══════════════════════════════════════════ */
export const IMAGES = {
  /* Vision: Dramatic construction crane against golden sunset sky */
  heroMain: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  /* Vision: Aerial view of massive construction site */
  heroAbout: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  /* Vision: Close-up of steel framework — precision engineering */
  heroServices: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1920&q=80",
  /* Vision: Beautifully composed construction materials, blueprints */
  heroGallery: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
  /* Vision: Professional office with architectural models */
  heroContact: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  /* Vision: LPG gas cylinders neatly arranged */
  gasService: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1920&q=80",
  /* Vision: Road construction with heavy machinery */
  civilService: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80",
  /* Vision: Modern commercial building under construction */
  structuralService: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
  /* Vision: Fleet of water bowsers and construction vehicles */
  logisticsService: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=1920&q=80",
  /* Vision: Construction team in safety gear reviewing plans */
  team1: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
  /* Vision: Senior engineer at construction site */
  team2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  /* Vision: Female engineer with blueprint */
  team3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  /* Vision: Project manager inspecting site */
  team4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  /* Vision: Glass and steel building facade */
  project1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  /* Vision: Bridge / overpass construction */
  project2: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&q=80",
  /* Vision: Residential development */
  project3: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1920&q=80",
  /* Vision: Industrial warehouse construction */
  project4: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1920&q=80",
  /* Vision: Water pipeline infrastructure */
  project5: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  /* Vision: Night construction with dramatic lighting */
  project6: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=1920&q=80",
};

export const GALLERY_IMAGES = {
  /* Vision: Concrete pouring / foundation work */
  g1: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
  /* Vision: Tower crane lifting steel */
  g2: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  /* Vision: Excavator on site */
  g3: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  /* Vision: Blueprints on table with tools */
  g4: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  /* Vision: Completed modern building */
  g5: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  /* Vision: Gas storage tanks */
  g6: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80",
  /* Vision: Steel framework close up */
  g7: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&q=80",
  /* Vision: Road with fresh asphalt */
  g8: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
  /* Vision: Surveying equipment and landscape */
  g9: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  /* Vision: Welding sparks */
  g10: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  /* Vision: Sunset behind completed structure */
  g11: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80",
  /* Vision: Crane from below */
  g12: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
  /* Vision: Workers pouring concrete */
  g13: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  /* Vision: Heavy truck on construction road */
  g14: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=800&q=80",
  /* Vision: Steel rebar grid */
  g15: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
};

/* ═══════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════ */
export const SERVICES = [
  {
    icon: Flame,
    title: "Gas Refill & Exchange",
    slug: "gas-refill",
    short: "Premium LPG solutions for homes and businesses",
    desc: "Complete LPG gas cylinder refill and exchange services. We supply residential, commercial, and industrial clients with safe, certified gas solutions. Our rapid turnaround and bulk delivery options ensure you never run out.",
    features: ["Same-day delivery across Harare", "Bulk supply for industrial use", "Safety-certified cylinders", "24/7 emergency gas supply", "Competitive wholesale pricing", "Corporate account management"],
    img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1920&q=80",
  },
  {
    icon: Building2,
    title: "Civil Engineering",
    slug: "civil-engineering",
    short: "Infrastructure that transforms communities",
    desc: "Comprehensive civil engineering solutions including road construction, drainage systems, water reticulation, sewer networks, and earthworks. We bring precision engineering to every infrastructure project across Southern Africa.",
    features: ["Road construction & rehabilitation", "Drainage & stormwater systems", "Water reticulation networks", "Sewer system installation", "Earthworks & grading", "Bridge & culvert construction"],
    img: "/civil.jpeg",
  },
  {
    icon: HardHat,
    title: "Structural Construction",
    slug: "structural-construction",
    short: "World-class buildings from concept to completion",
    desc: "From commercial complexes to industrial facilities and residential developments, we deliver structural excellence. Our team manages every phase — design, steel erection, concrete works, and finishing — to international standards.",
    features: ["Commercial & office buildings", "Industrial warehouse facilities", "Steel structure fabrication", "Reinforced concrete works", "Residential developments", "Renovation & restoration"],
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
  },
  {
    icon: Truck,
    title: "Plant Hire & Logistics",
    slug: "plant-hire",
    short: "Heavy equipment and transport solutions",
    desc: "Full fleet of construction equipment available for hire. Water bowser services, material transport, crane hire, and earthmoving machinery. Reliable logistics that keep your project on schedule and on budget.",
    features: ["Water bowser hire & delivery", "Mobile & tower crane services", "Excavators & loaders", "Graders & compaction rollers", "Material transport fleet", "Tipper truck services"],
    img: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=1920&q=80",
  },
];

/* ═══════════════════════════════════════════
   STATS, TESTIMONIALS, TIMELINE, GALLERY
   ═══════════════════════════════════════════ */
export const STATS = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Team Members" },
];

export const TESTIMONIALS = [
  { name: "David Moyo", role: "CEO, Moyo Properties", text: "Vatumwa delivered our 200-unit housing complex three weeks ahead of schedule. Their professionalism and attention to detail are unmatched in Zimbabwe.", rating: 5 },
  { name: "Sarah Ndlovu", role: "Operations Director, ZimEnergy", text: "Their gas supply reliability is exceptional. We've had zero interruptions since switching to Vatumwa for our industrial gas needs. Truly dependable partners.", rating: 5 },
  { name: "James Chikwanha", role: "Municipal Engineer, Harare", text: "The road rehabilitation project exceeded our expectations. Vatumwa's civil engineering team brought innovation and efficiency to every phase of the build.", rating: 5 },
  { name: "Grace Mutasa", role: "Architect, MutasaDesign Studio", text: "Working with Vatumwa on steel structures is a pleasure. Their precision in interpreting architectural plans and executing complex builds is remarkable.", rating: 5 },
];

export const TIMELINE = [
  { year: "2018", title: "Company Founded", desc: "Vatumwa Civils & Construction established in Harare with a vision to transform African infrastructure." },
  { year: "2019", title: "First Major Contract", desc: "Awarded the Harare South road rehabilitation project, marking our entry into large-scale civil works." },
  { year: "2020", title: "Gas Division Launch", desc: "Expanded into LPG gas refill and exchange services, addressing a critical market need across Zimbabwe." },
  { year: "2022", title: "Fleet Expansion", desc: "Acquired water bowsers, cranes, and earthmoving equipment to offer comprehensive plant hire services." },
  { year: "2024", title: "Regional Growth", desc: "Expanded operations across Southern Africa with projects in Mozambique and Botswana." },
  { year: "2026", title: "Industry Leader", desc: "Recognized as one of Zimbabwe's top civil engineering firms with 250+ completed projects." },
];

export const GALLERY_ITEMS = [
  { img: GALLERY_IMAGES.g1, title: "Foundation Works", category: "construction", desc: "Commercial foundation pour — Harare CBD" },
  { img: GALLERY_IMAGES.g2, title: "Crane Operations", category: "construction", desc: "Tower crane assembly — Industrial Park" },
  { img: GALLERY_IMAGES.g3, title: "Site Preparation", category: "civils", desc: "Bulk earthworks — Highway Extension Project" },
  { img: GALLERY_IMAGES.g4, title: "Blueprint Review", category: "planning", desc: "Design consultation — Borrowdale Estate" },
  { img: GALLERY_IMAGES.g5, title: "Commercial Tower", category: "construction", desc: "Completed office complex — CBD" },
  { img: GALLERY_IMAGES.g6, title: "Gas Infrastructure", category: "gas", desc: "LPG storage facility — Industrial Zone" },
  { img: GALLERY_IMAGES.g7, title: "Steel Framework", category: "construction", desc: "Structural steel erection — Warehouse" },
  { img: GALLERY_IMAGES.g8, title: "Residential Estate", category: "civils", desc: "Housing development — Mount Pleasant" },
  { img: GALLERY_IMAGES.g9, title: "Aerial Survey", category: "planning", desc: "Project surveying — Chitungwiza bypass" },
  { img: GALLERY_IMAGES.g10, title: "Industrial Build", category: "construction", desc: "Manufacturing plant — Msasa" },
  { img: GALLERY_IMAGES.g11, title: "Night Operations", category: "construction", desc: "24-hour construction schedule" },
  { img: GALLERY_IMAGES.g12, title: "Vertical Rise", category: "construction", desc: "Multi-storey construction — CBD" },
  { img: GALLERY_IMAGES.g13, title: "Water Infrastructure", category: "civils", desc: "Pipeline installation — Chitungwiza" },
  { img: GALLERY_IMAGES.g14, title: "Fleet Logistics", category: "logistics", desc: "Equipment mobilization — Beitbridge" },
  { img: GALLERY_IMAGES.g15, title: "Bridge Construction", category: "civils", desc: "Overpass reinforcement — Mbare" },
];

export const SEARCHABLE_CONTENT = [
  { text: "Gas Refill and Exchange Services LPG", page: "/services", section: "gas-refill" },
  { text: "LPG Gas Cylinders Delivery Supply Bulk", page: "/services", section: "gas-refill" },
  { text: "Civil Engineering Road Construction Infrastructure", page: "/services", section: "civil-engineering" },
  { text: "Drainage Water Sewer Reticulation Systems", page: "/services", section: "civil-engineering" },
  { text: "Structural Construction Buildings Commercial", page: "/services", section: "structural" },
  { text: "Steel Structures Concrete Works Industrial", page: "/services", section: "structural" },
  { text: "Plant Hire Equipment Rental Machinery", page: "/services", section: "plant-hire" },
  { text: "Water Bowser Crane Truck Excavator", page: "/services", section: "plant-hire" },
  { text: "About Company History Story Founded 2018", page: "/about", section: "story" },
  { text: "Our Team Leadership Management Engineers", page: "/about", section: "team" },
  { text: "Projects Portfolio Gallery Completed Work", page: "/gallery", section: "grid" },
  { text: "Contact Phone Email Address Location Harare", page: "/contact", section: "form" },
  { text: "Safety Certifications Quality ISO Standards", page: "/about", section: "values" },
  { text: "Testimonials Reviews Client Feedback Ratings", page: "/", section: "testimonials" },
  { text: "Careers Employment Jobs Opportunities", page: "/contact", section: "form" },
  { text: "Quote Estimate Pricing Cost Budget", page: "/contact", section: "form" },
  { text: "Timeline Milestones Journey Growth", page: "/about", section: "timeline" },
  { text: "Zimbabwe Harare Africa Southern Construction", page: "/about", section: "story" },
];

export const TEAM_MEMBERS = [
  {
    img: IMAGES.team2,
    name: "Tatenda Mukombe",
    role: "Founder & CEO",
    bio: "15+ years in construction leadership across Southern Africa.",
  },
  {
    img: IMAGES.team3,
    name: "Ruvimbo Chisango",
    role: "Head of Civil Engineering",
    bio: "BSc Civil Engineering (UCT). Specialist in water infrastructure.",
  },
  {
    img: IMAGES.team4,
    name: "Farai Madzivire",
    role: "Operations Director",
    bio: "Manages fleet logistics, plant hire, and project delivery.",
  },
];

export const FEATURED_PROJECTS = [
  { img: IMAGES.project1, title: "Harare Financial Center", cat: "Commercial", year: "2025" },
  { img: IMAGES.project2, title: "Beitbridge Highway Extension", cat: "Civil Engineering", year: "2024" },
  { img: IMAGES.project3, title: "Mount Pleasant Estate", cat: "Residential", year: "2024" },
  { img: IMAGES.project4, title: "Msasa Industrial Park", cat: "Industrial", year: "2023" },
  { img: IMAGES.project5, title: "Chitungwiza Water Network", cat: "Infrastructure", year: "2023" },
  { img: IMAGES.project6, title: "Kariba Dam Access Road", cat: "Civil Engineering", year: "2022" },
];
