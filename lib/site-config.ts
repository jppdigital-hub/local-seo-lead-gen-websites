// ============================================================
// RANK & RENT SITE CONFIG — edit this file to change market
// ============================================================

export const siteConfig = {
  // --- Business identity ---
  businessName: "Chattanooga Junk Removal Pros",
  tagline: "Fast, Affordable Junk Removal in Chattanooga, TN",
  phone: "(423) 555-0192",
  email: "info@chattanoogajunkremovalpros.com",
  domain: "https://chattanoogajunkremovalpros.com",

  // --- Market ---
  niche: "Junk Removal",
  nicheSlug: "junk-removal",
  city: "Chattanooga",
  state: "TN",
  stateFullName: "Tennessee",
  county: "Hamilton County",
  zip: "37401",
  lat: "35.0456",
  lng: "-85.3097",

  // --- Primary SEO keyword ---
  primaryKeyword: "junk removal Chattanooga TN",
  heroHeading: "Chattanooga's #1 Junk Removal Service",
  heroSubheading:
    "Same-day pickup available. We haul furniture, appliances, yard waste, construction debris & more. Serving all of Hamilton County.",

  // --- Services offered ---
  services: [
    {
      slug: "furniture-removal",
      name: "Furniture Removal",
      shortDesc: "Sofas, beds, dressers, tables — we haul it all.",
      longDesc:
        "Whether you're moving, downsizing, or just clearing out, our team picks up any furniture—no disassembly needed. We handle the heavy lifting so you don't have to.",
      price: "Starting at $75",
      icon: "🛋️",
    },
    {
      slug: "appliance-removal",
      name: "Appliance Removal",
      shortDesc: "Refrigerators, washers, dryers, AC units.",
      longDesc:
        "Old appliances are bulky and heavy. Our crew removes fridges, stoves, washers, dryers, and more—responsibly recycling whenever possible.",
      price: "Starting at $85",
      icon: "🧺",
    },
    {
      slug: "yard-waste-removal",
      name: "Yard Waste Removal",
      shortDesc: "Branches, stumps, leaves, landscaping debris.",
      longDesc:
        "After a storm or big yard project, debris piles up fast. We clear brush, branches, old mulch, and landscaping clippings quickly and cleanly.",
      price: "Starting at $95",
      icon: "🌿",
    },
    {
      slug: "construction-debris-removal",
      name: "Construction Debris Removal",
      shortDesc: "Drywall, lumber, tile, concrete — post-reno cleanup.",
      longDesc:
        "Contractors and homeowners trust us for post-renovation debris. We haul drywall, lumber scraps, old flooring, tiles, and more from job sites.",
      price: "Starting at $125",
      icon: "🔨",
    },
    {
      slug: "estate-cleanout",
      name: "Estate Cleanout",
      shortDesc: "Full home or room cleanouts, handled with care.",
      longDesc:
        "Dealing with a loved one's home is hard enough. Our team handles the physical work quickly and respectfully, clearing entire homes or single rooms.",
      price: "Call for quote",
      icon: "🏠",
    },
    {
      slug: "hot-tub-removal",
      name: "Hot Tub Removal",
      shortDesc: "Full dismantling and haul-away.",
      longDesc:
        "Hot tubs are one of the hardest items to dispose of yourself. We dismantle, haul, and dispose of your old hot tub properly—fully insured.",
      price: "Starting at $250",
      icon: "🛁",
    },
  ],

  // --- Service areas (cities/neighborhoods nearby) ---
  areas: [
    { slug: "east-ridge", name: "East Ridge", pop: "21,000" },
    { slug: "red-bank", name: "Red Bank", pop: "12,000" },
    { slug: "signal-mountain", name: "Signal Mountain", pop: "8,500" },
    { slug: "hixson", name: "Hixson", pop: "45,000" },
    { slug: "soddy-daisy", name: "Soddy-Daisy", pop: "14,500" },
    { slug: "collegedale", name: "Collegedale", pop: "13,000" },
    { slug: "ooltewah", name: "Ooltewah", pop: "6,000" },
    { slug: "lookout-mountain", name: "Lookout Mountain", pop: "2,000" },
  ],

  // --- Trust signals ---
  trustPoints: [
    "Licensed & fully insured",
    "Same-day & next-day service available",
    "Upfront pricing — no hidden fees",
    "We recycle & donate when possible",
    "Locally owned & operated",
    "1,200+ happy Chattanooga customers",
  ],

  // --- FAQ (used for FAQPage schema + content) ---
  faqs: [
    {
      q: "How much does junk removal cost in Chattanooga?",
      a: "Most jobs range from $75 to $450 depending on volume. Single items start at $75. We give a free, no-obligation estimate before starting any work.",
    },
    {
      q: "Do you offer same-day junk removal?",
      a: "Yes! We offer same-day service when our schedule allows. Call us before noon for the best chance of same-day pickup.",
    },
    {
      q: "What items do you NOT take?",
      a: "We cannot haul hazardous waste, paint, chemicals, asbestos, or medical waste. Everything else — furniture, appliances, yard debris, construction waste, electronics — is fair game.",
    },
    {
      q: "Do I need to be home for pickup?",
      a: "Not always. For straightforward jobs where items are accessible in the driveway or yard, we can complete the job and send photos. For interior jobs, someone should be present.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We are fully licensed in Tennessee and carry liability insurance on every job.",
    },
    {
      q: "Do you serve areas outside of Chattanooga?",
      a: `Yes — we serve all of Hamilton County including East Ridge, Red Bank, Hixson, Signal Mountain, Soddy-Daisy, Collegedale, and Ooltewah.`,
    },
  ],

  // --- Lead form webhook (Make.com / n8n) ---
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",

  // --- Social proof numbers ---
  stats: {
    jobsCompleted: "1,200+",
    yearsInBusiness: "7",
    citiesServed: "12",
    rating: "4.9",
    reviewCount: "214",
  },
};

export type SiteConfig = typeof siteConfig;
