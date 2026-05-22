// ============================================================
// RANK & RENT SITE CONFIG — edit this file to change market
// ============================================================

export const siteConfig = {
  // --- Site identity (connector/directory model, not the service provider) ---
  siteName: "Chattanooga Junk Removal Guide",
  // Displayed in header, footer, emails
  displayName: "ChattanoogaJunkRemoval.com",
  tagline: "Find Trusted Junk Removal Pros in Chattanooga, TN",
  // Transparent description used in About page and schema
  siteDescription:
    "We help Chattanooga residents find licensed, insured junk removal professionals in their area. Submit your job details and a local pro will contact you with a free quote.",
  contactEmail: "hello@chattanoogajunkremoval.com",
  domain: "https://chattanoogajunkremoval.com",

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
  heroHeading: "Find a Junk Removal Pro in Chattanooga, TN",
  heroSubheading:
    "Tell us what you need hauled. We'll connect you with a licensed, insured local pro who can handle the job, often same day. Free quotes, no obligation.",

  // --- How the service works (connector model, shown prominently) ---
  howItWorks: [
    {
      step: "1",
      title: "Describe Your Job",
      desc: "Tell us what needs to go: furniture, appliances, yard debris, construction waste. Takes 60 seconds.",
    },
    {
      step: "2",
      title: "We Connect You with a Local Pro",
      desc: "Your request goes to a vetted, licensed, and insured junk removal professional serving your area in Chattanooga.",
    },
    {
      step: "3",
      title: "Get a Free Quote and Schedule",
      desc: "The pro contacts you directly with an upfront price. No obligation until you agree.",
    },
  ],

  // --- Services (informational: what pros in this niche handle) ---
  services: [
    {
      slug: "furniture-removal",
      name: "Furniture Removal",
      shortDesc: "Sofas, beds, dressers, tables. Local pros haul it all.",
      longDesc:
        "Furniture removal is one of the most common junk removal jobs in Chattanooga. Whether you're moving, downsizing, or clearing out a rental, local junk removal pros handle any furniture with no disassembly required on your part. They load, haul, and dispose of or donate items wherever possible.",
      whatToExpect:
        "A typical furniture pickup takes 30 to 60 minutes. The crew handles all loading. Most pros recycle or donate usable pieces to local Chattanooga thrift stores and nonprofits. Expect to pay by volume (truckload fractions) rather than per item.",
      avgCost: "$75 to $250 depending on quantity and access",
      icon: "🛋️",
      tips: [
        "Have items near the door or in the driveway if possible, as this saves time and may lower the cost",
        "Mention any tight stairwells or elevator-only buildings when you request a quote",
        "Ask the pro whether your items qualify for donation, which can reduce landfill and sometimes reduces your price",
      ],
    },
    {
      slug: "appliance-removal",
      name: "Appliance Removal",
      shortDesc: "Refrigerators, washers, dryers, AC units. Proper disposal handled.",
      longDesc:
        "Appliance disposal in Tennessee requires proper handling due to refrigerants, compressors, and electronic components that cannot go to a standard landfill. Licensed junk removal professionals in Chattanooga know the local disposal requirements and will haul refrigerators, washing machines, dryers, dishwashers, window AC units, and other large appliances safely and legally.",
      whatToExpect:
        "Appliance jobs are typically quick, running 20 to 45 minutes. Pros bring the right equipment for heavy items. Refrigerators containing Freon must be disposed of at a certified facility; a reputable Chattanooga pro will handle this for you.",
      avgCost: "$85 to $175 per appliance depending on type and size",
      icon: "🧺",
      tips: [
        "Empty and defrost refrigerators at least 24 hours before pickup",
        "Disconnect washing machines from water lines beforehand if you can",
        "Ask whether the pro is certified to handle refrigerant-containing units",
      ],
    },
    {
      slug: "yard-waste-removal",
      name: "Yard Waste Removal",
      shortDesc: "Branches, stumps, leaves, landscaping debris. Cleared fast.",
      longDesc:
        "Chattanooga's humid climate and frequent storms mean yard debris piles up fast. After a storm, a landscaping project, or a tree trim, you can end up with more material than curbside pickup will take. Local junk removal pros handle branches, brush, storm debris, old mulch, stump grindings, soil, and landscaping clippings, truckload after truckload if needed.",
      whatToExpect:
        "Yard waste jobs vary widely in size. A crew can typically clear a residential pile in one visit. Organic material is often taken to composting facilities rather than landfills, which many Chattanooga-area pros prioritize.",
      avgCost: "$95 to $350 depending on volume",
      icon: "🌿",
      tips: [
        "Bundle branches under 4 feet if possible to speed up loading",
        "Pile debris in an accessible location such as the driveway or curb",
        "Ask whether the pro composts or mulches organic material",
      ],
    },
    {
      slug: "construction-debris-removal",
      name: "Construction Debris Removal",
      shortDesc: "Drywall, lumber, tile, concrete. Post-reno cleanup handled.",
      longDesc:
        "Renovation projects generate massive amounts of debris including drywall scraps, lumber offcuts, tile, flooring, concrete, insulation, and mixed materials that city waste services won't collect. Chattanooga junk removal professionals who specialize in construction debris have the equipment and disposal relationships to handle this properly. They separate materials for recycling where possible and haul the rest to certified facilities.",
      whatToExpect:
        "Construction debris is charged by volume (fractions of a truckload) and sometimes by weight for heavy materials like concrete. A good pro will give you a per-load price upfront. Expect a truck and two-person crew for most jobs.",
      avgCost: "$125 to $500+ depending on volume and material type",
      icon: "🔨",
      tips: [
        "Separate heavy materials (concrete, tile) from light debris, as pros may price these differently",
        "Drywall and gypsum have special disposal requirements in Tennessee, so ask the pro how they handle it",
        "For large renovations, ask about scheduling multiple trips or a temporary dumpster",
      ],
    },
    {
      slug: "estate-cleanout",
      name: "Estate Cleanout",
      shortDesc: "Full home or room cleanouts handled with efficiency and care.",
      longDesc:
        "Estate cleanouts are among the most emotionally demanding and physically complex junk removal jobs. Whether you're settling a loved one's estate, preparing a property for sale, or clearing out after a tenant, a professional estate cleanout crew in Chattanooga can clear an entire home in one day. Good pros work quickly but carefully, setting aside anything with potential value for donation, auction, or return.",
      whatToExpect:
        "Estate cleanouts are usually priced by truckload or by the day for large jobs. Most crews include sorting and won't just bulldoze everything. Expect multiple trucks and a full crew for a whole-house cleanout. Ask about donation receipts for tax purposes.",
      avgCost: "$300 to $1,500+ depending on home size and volume",
      icon: "🏠",
      tips: [
        "Walk through the property first and tag items to keep before the crew arrives",
        "Ask whether the pro partners with local donation centers, as Chattanooga has several that accept estate items",
        "Check if the pro offers a flat-rate whole-house price vs. per-load pricing for large jobs",
      ],
    },
    {
      slug: "hot-tub-removal",
      name: "Hot Tub Removal",
      shortDesc: "Full dismantling, haul-away, and disposal handled end-to-end.",
      longDesc:
        "Hot tub removal is a specialty job that most homeowners cannot do themselves. A standard hot tub weighs 400 to 800 lbs empty and cannot be moved in one piece. It needs to be drained, disconnected from electrical (a licensed electrician may need to disconnect the breaker first), cut apart with a reciprocating saw, and hauled in sections. Local Chattanooga pros who handle hot tub removal have the tools, the muscle, and the disposal connections to do it correctly.",
      whatToExpect:
        "Plan for 2 to 4 hours for a standard hot tub removal. The crew will cut the tub into manageable sections and haul all foam, fiberglass, and hardware. You'll need to have the electrical disconnected at the breaker before they arrive. The space will be cleared and swept when they leave.",
      avgCost: "$250 to $450 for most standard hot tubs",
      icon: "🛁",
      tips: [
        "Have an electrician disconnect the power before the pro arrives, as this is a safety requirement",
        "Drain the hot tub at least a day before the scheduled pickup",
        "Clear the access path so the crew can get equipment in and debris out",
      ],
    },
  ],

  // --- Service areas ---
  areas: [
    {
      slug: "east-ridge",
      name: "East Ridge",
      pop: "21,000",
      blurb:
        "East Ridge sits just southeast of downtown Chattanooga along I-75. A mix of older residential neighborhoods and commercial corridors means frequent demand for furniture removal, appliance haul-away, and property cleanouts.",
    },
    {
      slug: "red-bank",
      name: "Red Bank",
      pop: "12,000",
      blurb:
        "Red Bank is a small independent city within Hamilton County, north of Chattanooga along Dayton Boulevard. Its dense residential streets and older housing stock generate consistent demand for estate cleanouts and furniture removal.",
    },
    {
      slug: "signal-mountain",
      name: "Signal Mountain",
      pop: "8,500",
      blurb:
        "Signal Mountain sits atop Walden's Ridge with winding residential roads and a well-established community. Access can be tight, so choosing a pro familiar with the mountain roads matters for large item removal.",
    },
    {
      slug: "hixson",
      name: "Hixson",
      pop: "45,000",
      blurb:
        "Hixson is one of the largest suburban communities in Hamilton County, stretching north along Highway 153. Active real estate turnover and a large number of single-family homes make it a high-demand market for junk removal of all types.",
    },
    {
      slug: "soddy-daisy",
      name: "Soddy-Daisy",
      pop: "14,500",
      blurb:
        "Soddy-Daisy runs along the north shore of Chickamauga Lake. Storm debris removal and yard waste clearance are particularly common here given the lakeside properties and older tree canopy.",
    },
    {
      slug: "collegedale",
      name: "Collegedale",
      pop: "13,000",
      blurb:
        "Collegedale is a growing community east of Chattanooga, home to Southern Adventist University. New construction and active development mean construction debris removal is in consistent demand.",
    },
    {
      slug: "ooltewah",
      name: "Ooltewah",
      pop: "6,000",
      blurb:
        "Ooltewah is a fast-growing suburb east of Chattanooga along I-75. New developments sit alongside older properties, creating demand for both construction debris cleanup and residential junk removal.",
    },
    {
      slug: "lookout-mountain",
      name: "Lookout Mountain",
      pop: "2,000",
      blurb:
        "Lookout Mountain straddles the Tennessee-Georgia border with scenic residential properties and historic homes. Estate cleanouts and furniture removal from older homes are the most common junk removal needs here.",
    },
  ],

  // --- Trust signals (about the directory, not a fake business) ---
  trustPoints: [
    "Pros are licensed and insured in Tennessee",
    "Same-day and next-day availability",
    "Free quotes, no obligation",
    "Pros recycle and donate when possible",
    "Serving all of Hamilton County",
    "Local Chattanooga-area professionals",
  ],

  // --- FAQ ---
  faqs: [
    {
      q: "Are you the junk removal company?",
      a: "No. ChattanoogaJunkRemoval.com is a free referral service. You describe your job, and we connect you with a licensed, insured local junk removal professional who serves your area. The pro contacts you directly with a free quote. You decide whether to book with no pressure.",
    },
    {
      q: "How much does junk removal cost in Chattanooga?",
      a: "Most residential junk removal jobs in Chattanooga range from $75 to $500 depending on volume. Pricing is typically by the truckload or fraction thereof. Single-item pickups (one sofa, one appliance) start around $75 to $100. Full truckloads run $350 to $500. The pro will give you an exact price before any work starts.",
    },
    {
      q: "How quickly will a pro contact me?",
      a: "During business hours (Mon to Sat, 7am to 6pm), pros aim to respond as promptly as possible. Response times vary by provider and their current schedule. For urgent same-day needs, mention that in your request and we'll do our best to connect you with someone available.",
    },
    {
      q: "What items can junk removal pros handle?",
      a: "Most pros handle furniture, appliances, electronics, yard waste, construction debris, mattresses, hot tubs, and general household clutter. They cannot haul hazardous materials such as paint, chemicals, asbestos, medical waste, or motor oil. Everything else is generally fine.",
    },
    {
      q: "Are the pros you refer licensed and insured?",
      a: "Yes. We only refer to professionals who are licensed to operate in Tennessee and carry liability insurance. You should always confirm insurance with any contractor before work begins.",
    },
    {
      q: "Do pros serve areas outside of Chattanooga proper?",
      a: "Yes. The pros in our network serve all of Hamilton County, including East Ridge, Red Bank, Hixson, Signal Mountain, Soddy-Daisy, Collegedale, Ooltewah, and Lookout Mountain.",
    },
    {
      q: "Is there any cost for using this referral service?",
      a: "No. Submitting a request and getting connected to a local pro is completely free. The pro charges for the actual junk removal work and we don't add any fees.",
    },
  ],

  // --- Lead form webhook (Make.com) ---
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",

  // --- Stats (about the local market / directory) ---
  stats: {
    prosInNetwork: "8",
    areasServed: "12",
    yearsActive: "7",
  },
};

export type SiteConfig = typeof siteConfig;
