// ============================================================
// RANK & RENT SITE CONFIG — edit this file to change market
// ============================================================

export const siteConfig = {
  // --- Site identity (connector/directory model, not the service provider) ---
  siteName: "Chattanooga Junk Removal Guide",
  displayName: "ChattanoogaJunkRemovalPros.com",
  tagline: "Find Trusted Junk Removal Pros in Chattanooga, TN",
  siteDescription:
    "We help Chattanooga residents find licensed, insured junk removal professionals in their area. Submit your job details and a local pro will contact you with a free quote.",
  contactEmail: "hello@chattanoogajunkremovalpros.com",
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
  heroHeading: "Find a Junk Removal Pro in Chattanooga, TN",
  heroSubheading:
    "Tell us what you need hauled. We'll connect you with a licensed, insured local pro who can handle the job. Free quotes, no obligation.",

  // --- How the service works ---
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

  // --- Services ---
  services: [
    {
      slug: "furniture-removal",
      name: "Furniture Removal",
      shortDesc: "Sofas, beds, dressers, tables. Local pros haul it all.",
      longDesc:
        "Furniture removal is one of the most common junk removal jobs in Chattanooga. Whether you're moving, downsizing, or clearing out a rental, local junk removal pros handle any furniture with no disassembly required on your part. They load, haul, and dispose of or donate items wherever possible.",
      whatToExpect:
        "A typical furniture pickup takes 30 to 60 minutes. The crew handles all loading. Most pros recycle or donate usable pieces to local Chattanooga thrift stores and nonprofits. Expect to pay by volume (truckload fractions) rather than per item.",
      avgCost: "$95 to $250 depending on quantity and access",
      timeEstimate: "30 to 60 minutes for a standard residential pickup",
      icon: "🛋️",
      acceptedItems: [
        "Sofas, loveseats, and sectionals",
        "Beds, frames, and headboards",
        "Dressers, armoires, and wardrobes",
        "Dining tables and chairs",
        "Desks, bookcases, and shelving",
        "Recliners and accent chairs",
        "Outdoor and patio furniture",
      ],
      refusedItems: [
        "Hazardous materials or chemicals",
        "Items contaminated with biohazardous waste",
      ],
      regulatoryNotes: "",
      tips: [
        "Have items near the door or in the driveway if possible, as this saves time and may lower the cost",
        "Mention any tight stairwells or elevator-only buildings when you request a quote",
        "Ask the pro whether your items qualify for donation, which can reduce landfill and sometimes reduces your price",
      ],
      faqs: [
        {
          q: "How much does furniture removal cost in Chattanooga?",
          a: "Most residential furniture removal in Chattanooga starts at $95 to $125 for a single item. A quarter truckload (a few pieces) averages around $144. A half truckload runs approximately $287. The exact price depends on the volume of items and how accessible they are. All quotes are free and given before any work starts.",
        },
        {
          q: "Will the crew come inside my home to remove furniture?",
          a: "Yes. Licensed junk removal professionals provide full-service removal, including loading from inside the home. You do not need to move anything to the curb before they arrive.",
        },
        {
          q: "Can you donate my furniture instead of taking it to the landfill?",
          a: "Many pros make an effort to donate usable furniture to local organizations. In Chattanooga, Habitat for Humanity ReStore (1150 E 14th Street) accepts quality furniture, as does the Samaritan Center (6017 Ooltewah Georgetown Road) and Salvation Army locations on McCallie Avenue and E 28th Street. Note that free donation pickup from these organizations can take 3 to 4 weeks; a junk removal pro can transport your items directly for faster turnaround.",
        },
        {
          q: "Do I need to disassemble furniture before pickup?",
          a: "No. Crews handle disassembly of large pieces like bed frames and sectionals on site. If you have already disassembled something, mention it so the pro knows what to expect.",
        },
        {
          q: "What furniture items do pros refuse to haul?",
          a: "Most furniture is accepted. The only items refused are those contaminated with biohazardous materials or those containing hazardous chemicals. Mattresses are typically hauled as well, though some operators charge a small surcharge per mattress.",
        },
        {
          q: "How quickly can a pro pick up furniture in Chattanooga?",
          a: "Availability varies by provider and day. Some pros offer same-day or next-day service for residential pickups. When you submit your request, note any urgency and the pro will confirm their earliest available time.",
        },
      ],
    },
    {
      slug: "appliance-removal",
      name: "Appliance Removal",
      shortDesc: "Refrigerators, washers, dryers, AC units. Proper disposal handled.",
      longDesc:
        "Appliance disposal in Tennessee requires proper handling due to refrigerants, compressors, and electronic components that cannot go to a standard landfill. Licensed junk removal professionals in Chattanooga know the local disposal requirements and will haul refrigerators, washing machines, dryers, dishwashers, window AC units, and other large appliances safely and legally.",
      whatToExpect:
        "Appliance jobs are typically quick, running 20 to 45 minutes. Pros bring the right equipment for heavy items. Refrigerators and freezers containing refrigerants must be disposed of at a certified facility — a reputable Chattanooga pro will handle this for you.",
      avgCost: "$85 to $175 per appliance depending on type and size",
      timeEstimate: "20 to 45 minutes per appliance",
      icon: "🧺",
      acceptedItems: [
        "Refrigerators and freezers",
        "Washing machines and dryers",
        "Dishwashers",
        "Window air conditioning units",
        "Stoves and ovens",
        "Water heaters",
        "Microwaves",
      ],
      refusedItems: [
        "Appliances still under active warranty (verify with manufacturer first)",
        "Appliances containing unidentified hazardous fluids",
      ],
      regulatoryNotes:
        "Federal EPA law requires refrigerants (Freon) in refrigerators, freezers, and window AC units to be professionally evacuated before the appliance can be legally recycled or landfilled. Regional transfer stations may charge evacuation fees up to $32 per item. This is why appliance removal costs more than standard furniture removal. Hamilton County recycling centers explicitly refuse all appliances and air conditioners. City of Chattanooga Refuse Collection Centers accept appliances from city residents, but only those arriving in a standard pickup truck or smaller, with a valid Tennessee driver's license showing city residency and Hamilton County vehicle tags, and limited to 12 visits per year.",
      tips: [
        "Empty and defrost refrigerators at least 24 hours before pickup",
        "Disconnect washing machines from water lines beforehand if you can",
        "Ask whether the pro is certified to handle refrigerant-containing units",
      ],
      faqs: [
        {
          q: "Why does appliance removal cost more than regular furniture removal?",
          a: "Federal EPA law requires that refrigerants in refrigerators, freezers, and window AC units be professionally evacuated by a certified technician before the appliance can be legally recycled or landfilled. This mandatory process can add up to $32 per item at certified transfer stations, and it requires specialized equipment and training. That compliance cost is passed on in the removal price.",
        },
        {
          q: "Do Hamilton County recycling centers accept old appliances?",
          a: "No. Hamilton County recycling centers explicitly refuse all appliances and air conditioners. You cannot drop off a refrigerator, washer, dryer, or any other major appliance at any county recycling location. A private hauler or the city's Refuse Collection Centers (for eligible city residents) are the practical options.",
        },
        {
          q: "Can I use the City of Chattanooga's bulk pickup or refuse centers to get rid of an appliance?",
          a: "City of Chattanooga bulk pickup does accept heavy appliances. City Refuse Collection Centers (at 4276 Airport Road, 4500 North Access Road, and 1400 West 57th Street) also accept appliances from city residents, but with strict limits: you must present a valid Tennessee driver's license proving city residency and valid Hamilton County vehicle tags, your vehicle cannot be larger than a standard pickup truck, and visits are capped at 12 per calendar year. Landlords and contractors cannot use these services.",
        },
        {
          q: "Do I need to prepare the appliance before the pro arrives?",
          a: "Yes, a few simple steps help. Defrost and empty refrigerators at least 24 hours before pickup. Disconnect washing machines from their water supply lines if possible. If the appliance is still running, turn it off the night before. The pro handles the heavy lifting.",
        },
        {
          q: "Can you remove built-in appliances like over-the-range microwaves or dishwashers?",
          a: "Many pros can handle light disconnection of built-in appliances, but they may need utility lines (water, gas, electrical) already disconnected by a licensed contractor before they arrive. Mention built-ins when you describe your job so the pro can advise you.",
        },
        {
          q: "How much does it cost to remove a single refrigerator in Chattanooga?",
          a: "Single appliance removal in Chattanooga typically starts at $95 to $125 at the minimum, with refrigerators often running $100 to $175 depending on size and whether refrigerant evacuation is required. All quotes are free and given before any work begins.",
        },
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
      timeEstimate: "1 to 3 hours depending on pile size and accessibility",
      icon: "🌿",
      acceptedItems: [
        "Branches and brush",
        "Tree limbs and stumps",
        "Leaves and lawn clippings",
        "Old mulch and soil",
        "Storm debris",
        "Landscaping waste",
        "Stump grindings",
      ],
      refusedItems: [
        "Chemically treated soil or contaminated fill",
        "Pesticide or herbicide containers",
      ],
      regulatoryNotes: "",
      tips: [
        "Bundle branches under 4 feet if possible to speed up loading",
        "Pile debris in an accessible location such as the driveway or curb",
        "Ask whether the pro composts or mulches organic material",
      ],
      faqs: [
        {
          q: "Can I put yard waste at the curb for City of Chattanooga pickup?",
          a: "Yes, city residents can request bulky yard waste pickup through CHA 311, the city's online portal, or by calling 311. Brush and bagged leaves must be in separate piles from other bulky trash. Items must be at the curb by 7:00 a.m. on the Monday of the scheduled collection week. However, city bulk pickup is capped at 12 collection events per property per 12-month period, and landlords and contractors are explicitly prohibited from using this service.",
        },
        {
          q: "How much does yard waste removal cost in Chattanooga?",
          a: "Yard waste removal typically starts at $95 to $125 for small loads and can run $95 to $350 or more for larger piles. Large storm cleanup jobs with multiple truckloads are priced by volume. A quarter truckload averages $144; a full truckload averages $591. The pro will give you a free upfront quote before any work begins.",
        },
        {
          q: "What happens to yard waste after it is hauled away?",
          a: "Many Chattanooga-area pros take organic material like branches, brush, and leaves to composting or mulching facilities rather than landfills. This is both environmentally responsible and often more efficient for disposal logistics. Ask the pro about their disposal practice when you request a quote.",
        },
        {
          q: "Can a pro haul stump grindings and soil?",
          a: "Yes. Stump grindings, excavated soil, gravel, and similar heavy organic debris can be hauled, though heavy materials like soil may be priced differently than lighter brush. Mention the specific materials when requesting your quote.",
        },
        {
          q: "Is storm debris removal different from regular yard waste?",
          a: "The removal process is the same, but storm cleanups can involve larger volumes and sometimes hazardous conditions like downed power lines or unstable trees. Always clear utility hazards before a crew arrives. When Chattanooga experiences major storm events, demand surges and scheduling may take longer. Contact a pro as soon as possible after a storm.",
        },
      ],
    },
    {
      slug: "construction-debris-removal",
      name: "Construction Debris Removal",
      shortDesc: "Drywall, lumber, tile, concrete. Post-reno cleanup handled.",
      longDesc:
        "Renovation projects generate massive amounts of debris including drywall scraps, lumber offcuts, tile, flooring, concrete, insulation, and mixed materials that city waste services will not collect. Chattanooga junk removal professionals who specialize in construction debris have the equipment and disposal relationships to handle this properly. They separate materials for recycling where possible and haul the rest to certified facilities.",
      whatToExpect:
        "Construction debris is charged by volume (fractions of a truckload) and sometimes by weight for heavy materials like concrete. A good pro will give you a per-load price upfront. Expect a truck and two-person crew for most jobs.",
      avgCost: "$125 to $500+ depending on volume and material type",
      timeEstimate: "2 to 6 hours depending on volume and material type",
      icon: "🔨",
      acceptedItems: [
        "Drywall and gypsum board",
        "Lumber and wood framing",
        "Tile and flooring",
        "Concrete and masonry",
        "Roofing materials (check with pro)",
        "Old cabinetry and fixtures",
        "Insulation",
        "Scrap metal",
      ],
      refusedItems: [
        "Asbestos-containing materials",
        "Lead paint debris (may require abatement)",
        "Hazardous chemicals and solvents",
        "Contaminated soil requiring special disposal",
      ],
      regulatoryNotes:
        "City of Chattanooga bulk pickup explicitly prohibits contractor-generated debris. Building materials, lumber, drywall, roofing shingles, concrete, and dirt are all refused by city programs. Contractors and landlords cannot use city bulk pickup services under any circumstances. A private hauler is the only legal option for renovation and demolition waste generated by contractors or on behalf of a rental or commercial property. Drywall and gypsum board have special disposal requirements in Tennessee.",
      tips: [
        "Separate heavy materials (concrete, tile) from light debris, as pros may price these differently",
        "Drywall and gypsum have special disposal requirements in Tennessee, so ask the pro how they handle it",
        "For large renovations, ask about scheduling multiple trips or a temporary dumpster",
      ],
      faqs: [
        {
          q: "Can a contractor use City of Chattanooga bulk pickup for renovation debris?",
          a: "No. The City of Chattanooga bulk trash pickup service explicitly prohibits use by businesses, contractors performing land clearing, and landlords managing rental properties. Building materials, lumber, drywall, roofing materials, concrete, brick, and dirt are all on the city's refused items list. A private hauler is the only legal option for contractor-generated renovation debris.",
        },
        {
          q: "How much does construction debris removal cost?",
          a: "Construction debris removal typically starts at $125 to $150 for small loads. A quarter truckload averages around $144; a full truckload averages $591. Heavy materials like concrete may be priced by weight rather than volume. Drywall and specialty materials can also affect pricing. Get a free on-site quote before work begins.",
        },
        {
          q: "Can you haul drywall and gypsum?",
          a: "Yes, but drywall has special disposal requirements in Tennessee. A reputable Chattanooga hauler will know the correct disposal route for drywall. Mention that you have drywall when requesting a quote so the pro can factor in any handling requirements.",
        },
        {
          q: "What if my renovation debris is mixed — some drywall, some lumber, some tile?",
          a: "Most pros handle mixed loads. Pricing may account for the labor to sort and separate materials that go to different disposal facilities. Describe the mix when requesting your quote for an accurate estimate.",
        },
        {
          q: "Can you haul concrete from a demolition project?",
          a: "Yes, though concrete is heavy and priced accordingly. Some pros handle it by the load, others by weight. Separating concrete from lighter debris helps the pro give you an accurate upfront price.",
        },
        {
          q: "Do I need to have the jobsite cleared before the crew arrives?",
          a: "The crew handles loading from the jobsite. You do not need to haul debris to a central pile unless you want to, though having items accessible speeds up the job. Mention any access restrictions like stairwells, tight doorways, or elevator-only buildings.",
        },
      ],
    },
    {
      slug: "estate-cleanout",
      name: "Estate Cleanout",
      shortDesc: "Full home or room cleanouts handled with efficiency and care.",
      longDesc:
        "Estate cleanouts are among the most emotionally demanding and physically complex junk removal jobs. Whether you're settling a loved one's estate, preparing a property for sale, or clearing out after a tenant, a professional estate cleanout crew in Chattanooga can clear an entire home in one day. Good pros work quickly but carefully, setting aside anything with potential value for donation, auction, or return.",
      whatToExpect:
        "Estate cleanouts are usually priced by truckload or by the day for large jobs. Most crews include sorting and will not just clear everything indiscriminately. Expect multiple trucks and a full crew for a whole-house cleanout. Ask about donation receipts for tax purposes.",
      avgCost: "$300 to $1,500+ depending on home size and volume. Full property cleanouts typically run $1,200 to $2,000+.",
      timeEstimate: "4 to 8 hours for a full house. Large multi-room estates may take multiple days.",
      icon: "🏠",
      acceptedItems: [
        "All household furniture and furnishings",
        "Clothing and personal items (sorted or bagged)",
        "Appliances and electronics",
        "Kitchenware and household goods",
        "Books, décor, and collectibles",
        "Garage and shed contents",
        "Yard and outdoor items",
      ],
      refusedItems: [
        "Hazardous materials (paint, chemicals, motor oil)",
        "Medical waste or sharps",
        "Unidentifiable chemical containers",
      ],
      regulatoryNotes: "",
      tips: [
        "Walk through the property first and tag items to keep before the crew arrives",
        "Ask whether the pro partners with local donation centers, as Chattanooga has several that accept estate items",
        "Check if the pro offers a flat-rate whole-house price vs. per-load pricing for large jobs",
      ],
      faqs: [
        {
          q: "How much does an estate cleanout typically cost in Chattanooga?",
          a: "Full property estate cleanouts in Chattanooga typically generate $1,200 to $2,000 or more depending on the size of the home and the volume of contents. This often represents multiple full truckloads. Room-by-room or partial cleanouts start at the minimum load price of $95 to $125. All quotes are free and given after the pro assesses the property.",
        },
        {
          q: "How long does a full estate cleanout take?",
          a: "A standard single-family home typically takes a full crew 4 to 8 hours. Larger properties, homes with significant accumulation, or multi-story homes may require additional time or a second day. The pro will give you a realistic timeline when they assess the job.",
        },
        {
          q: "Can family members arrange an estate cleanout remotely without being present?",
          a: "Yes. Pros regularly work with out-of-state families coordinating estate cleanouts. You can provide access instructions by phone or email, arrange for a neighbor or neighbor to supervise, or use lockbox access. Discuss remote coordination when you submit your request so the pro can plan accordingly.",
        },
        {
          q: "Will the crew sort through items or just take everything?",
          a: "A professional estate cleanout crew should not simply clear everything without sorting. Good pros set aside items that may have value for donation, estate sale pickup, or return to family members. Walk through the property with the crew leader at the start and communicate clearly what to keep versus remove.",
        },
        {
          q: "Can we get donation receipts for tax purposes?",
          a: "Yes, if the pro donates usable items to organizations like Habitat for Humanity ReStore (1150 E 14th Street, Chattanooga) or Salvation Army, those organizations provide donation receipts that may qualify for a charitable deduction. Ask the pro upfront whether they coordinate donations and can assist with documentation.",
        },
        {
          q: "Which areas of Chattanooga have the most estate cleanout demand?",
          a: "East Ridge, Red Bank, Signal Mountain, and Lookout Mountain all have steadily aging demographics. When elderly residents transition to assisted living or pass away, probate requires clearing decades of accumulated possessions. These areas consistently generate high demand for professional estate cleanout services.",
        },
        {
          q: "Does probate create a deadline for when the property must be cleared?",
          a: "Yes, in many cases. Probate timelines, property sale closings, and lease terminations can all create hard deadlines for estate cleanouts. If you have a firm date, mention it clearly so the pro can schedule accordingly. Many pros in Chattanooga can accommodate urgent timelines.",
        },
      ],
    },
    {
      slug: "hot-tub-removal",
      name: "Hot Tub Removal",
      shortDesc: "Full dismantling, haul-away, and disposal handled end-to-end.",
      longDesc:
        "Hot tub removal is a specialty job that most homeowners cannot do themselves. A standard hot tub weighs 400 to 800 lbs empty and cannot be moved in one piece. It needs to be drained, disconnected from electrical (a licensed electrician must disconnect the breaker first), cut apart with a reciprocating saw, and hauled in sections. Local Chattanooga pros who handle hot tub removal have the tools, the muscle, and the disposal connections to do it correctly.",
      whatToExpect:
        "Plan for 2 to 4 hours for a standard hot tub removal. The crew will cut the tub into manageable sections and haul all foam, fiberglass, and hardware. You'll need to have the electrical disconnected at the breaker before they arrive. The space will be cleared and swept when they leave.",
      avgCost: "$250 to $450 for most standard hot tubs",
      timeEstimate: "2 to 4 hours for a standard residential hot tub",
      icon: "🛁",
      acceptedItems: [
        "Standard above-ground hot tubs and spas",
        "In-ground hot tubs (additional complexity, confirm with pro)",
        "Swim spas",
        "Associated plumbing and hardware",
      ],
      refusedItems: [
        "Active electrical connections (must be disconnected by licensed electrician first)",
        "Hot tubs with full water load (must be drained first)",
      ],
      regulatoryNotes: "",
      tips: [
        "Have an electrician disconnect the power before the pro arrives, as this is a safety requirement",
        "Drain the hot tub at least a day before the scheduled pickup",
        "Clear the access path so the crew can get equipment in and debris out",
      ],
      faqs: [
        {
          q: "How much does hot tub removal cost in Chattanooga?",
          a: "Most standard above-ground hot tub removals in Chattanooga run $250 to $450. The price depends on the size of the tub, access difficulty, and whether the electrical has already been disconnected. All quotes are free and given before work begins.",
        },
        {
          q: "Do I need to hire an electrician before the hot tub removal crew arrives?",
          a: "Yes. The electrical connection to the hot tub must be safely disconnected at the breaker panel by a licensed electrician before the removal crew arrives. This is a safety requirement and cannot be skipped. Schedule the electrician appointment first, then schedule the hot tub removal.",
        },
        {
          q: "Does the crew cut the hot tub apart?",
          a: "Yes. A standard hot tub weighs 400 to 800 lbs empty and cannot be moved in one piece. The crew uses a reciprocating saw to cut the tub into manageable sections, then loads and hauls all foam, fiberglass, shell material, and hardware.",
        },
        {
          q: "How long does hot tub removal take?",
          a: "Most standard hot tub removals take 2 to 4 hours from arrival to completion, including cutting, loading, and cleanup of the work area.",
        },
        {
          q: "Do I need to drain the hot tub before the crew arrives?",
          a: "Yes. Drain the hot tub at least 24 hours before the scheduled pickup. A full hot tub can hold 300 to 500 gallons of water and would be impossible to move safely without draining. Most hot tubs have a drain valve; check your owner's manual if you are unsure how to drain yours.",
        },
        {
          q: "What happens to the hot tub after it is removed?",
          a: "The dismantled sections are hauled to a disposal facility. Some fiberglass and metal components may be recyclable depending on the pro's disposal relationships. The work area will be cleared of all debris when the crew leaves.",
        },
      ],
    },
    {
      slug: "mattress-removal",
      name: "Mattress Removal",
      shortDesc: "Single mattresses or bulk lots. City limits apply — we explain them all.",
      longDesc:
        "Mattress disposal in Chattanooga has more options than most people realize, but each one comes with real limitations. The city's bulk pickup program accepts mattresses, but it is capped at 12 collections per year and is completely off-limits for landlords and property managers. Donation is rarely possible because nearly every local charity refuses mattresses. For most residents, especially those needing fast turnaround or multiple mattresses removed, a professional junk removal pro is the practical answer.",
      whatToExpect:
        "A crew can remove one or multiple mattresses in 15 to 30 minutes for a straightforward residential pickup. Items are hauled directly to a certified disposal facility. If you need a large volume removed from a rental turnover or estate cleanout, the job is priced by truckload.",
      avgCost: "Starting at $95 to $125 for a single mattress. Multiple mattresses priced by truckload volume.",
      timeEstimate: "15 to 30 minutes for a standard residential pickup",
      icon: "🛏️",
      acceptedItems: [
        "Twin, full, queen, and king mattresses",
        "Box springs",
        "Pillow-top mattresses",
        "Memory foam mattresses",
        "Mattress and box spring sets",
      ],
      refusedItems: [
        "Mattresses contaminated with biohazardous materials",
        "Mattresses from commercial establishments (hotels, medical facilities) — confirm with pro",
      ],
      regulatoryNotes:
        "The City of Chattanooga bulk trash pickup program accepts mattresses and box springs. Items must be at the curb by 7:00 a.m. on the Monday of the scheduled pickup week. However, this program is capped at 12 unique collection events per property per 12-month period, and landlords and property managers are explicitly prohibited from using this service for any debris generated by rental properties. The City of Chattanooga Refuse Collection Centers (at 4276 Airport Road, 4500 North Access Road, and 1400 West 57th Street) also accept mattresses, but only from city residents arriving in a standard pickup truck or smaller, with a valid Tennessee driver's license proving city residency and valid Hamilton County vehicle tags, limited to 8 bags per visit and 12 visits per year. Nearly all local donation organizations including Habitat for Humanity ReStore, the Samaritan Center, and Salvation Army refuse mattresses due to hygiene concerns.",
      tips: [
        "Enclose mattresses in plastic wrap or bags if possible to prevent pest spread during transport",
        "Landlords cannot use city bulk pickup for rental property mattress disposal — a private hauler is the only option",
        "If donating is important to you, ask the pro whether they know of any programs that accept clean mattresses — most do not",
      ],
      faqs: [
        {
          q: "Can I put a mattress at the curb for City of Chattanooga pickup?",
          a: "Yes, city residents can request mattress pickup through CHA 311, the online city portal, or by calling 311. The mattress must be at the curb by 7:00 a.m. on the Monday of the scheduled collection week. However, the city caps bulk pickup at 12 collection events per property per 12-month period. Landlords, property managers, and contractors cannot use this service for rental property debris.",
        },
        {
          q: "Can I donate my old mattress in Chattanooga?",
          a: "Almost certainly no. Habitat for Humanity ReStore, the Samaritan Center, and Salvation Army all explicitly refuse mattresses due to hygiene concerns. If you have a nearly new mattress in excellent condition, you can try listing it on local Facebook groups or Craigslist, but most traditional donation channels are closed to mattresses.",
        },
        {
          q: "Can I drop a mattress off at a City refuse center?",
          a: "Yes, city residents can bring mattresses to the three City of Chattanooga Refuse Collection Centers (4276 Airport Road, 4500 North Access Road, 1400 West 57th Street), Tuesday through Friday 10am to 6pm, Saturday 9am to 6pm, Sunday 1pm to 5pm. Your vehicle must be a standard pickup truck or smaller. You need a valid Tennessee driver's license proving city residency and valid Hamilton County vehicle tags. Visits are limited to 8 bags per visit and 12 per calendar year.",
        },
        {
          q: "How much does mattress removal cost?",
          a: "A single mattress removal in Chattanooga typically starts at the minimum load price of $95 to $125. Some operators add a per-mattress surcharge. Multiple mattresses are priced by truckload volume. All quotes are free and given before any work begins.",
        },
        {
          q: "I'm a landlord and a tenant left mattresses behind. What are my options?",
          a: "City bulk pickup is not an option for you. Landlords are explicitly prohibited from using the City of Chattanooga's bulk trash pickup or refuse centers for rental property debris. A private junk removal pro is the only legal route. The cost is typically minimal for one or two mattresses and is often combined with a broader rental turnover cleanout.",
        },
        {
          q: "How do I dispose of a mattress if I don't have a pickup truck?",
          a: "A junk removal pro handles everything including transport. You do not need a vehicle. Submit your request, and a licensed local pro will collect the mattress from wherever it is in your home and haul it away for you.",
        },
      ],
    },
    {
      slug: "garage-cleanout",
      name: "Garage Cleanout",
      shortDesc: "Clear a one-car or two-car garage. Sorting, loading, and haul-away included.",
      longDesc:
        "Garage cleanouts are one of the most satisfying junk removal jobs and one of the most common in Chattanooga's suburban communities. Years of accumulated tools, broken equipment, old furniture, seasonal items, and miscellaneous household overflow get cleared in a single visit. A professional crew handles the sorting and loading — you just need to identify what to keep.",
      whatToExpect:
        "A standard two-car garage cleanout takes 1 to 3 hours. The crew loads everything you want removed, leaving any items you want to keep untouched. Pricing is by volume — typically a quarter to half truckload for most residential garages. Very full garages may require a full truckload.",
      avgCost: "$144 to $300 for most residential garages (quarter to half truckload)",
      timeEstimate: "1 to 3 hours for a standard two-car garage",
      icon: "🏚️",
      acceptedItems: [
        "Old tools and equipment",
        "Broken lawn mowers and outdoor power equipment",
        "Exercise equipment",
        "Sporting goods",
        "Old furniture stored in the garage",
        "Boxes and miscellaneous household overflow",
        "Children's play equipment",
        "Automotive accessories (not fluids)",
      ],
      refusedItems: [
        "Motor oil and automotive fluids",
        "Gasoline and fuel containers",
        "Propane tanks and hazardous chemicals",
        "Paint and solvents",
      ],
      regulatoryNotes: "",
      tips: [
        "Walk through the garage before the crew arrives and mark or move items you want to keep",
        "Move vehicles out of the garage the day before to give the crew full access",
        "Bag or contain any hazardous materials separately — pros cannot haul motor oil, paint, or chemicals",
      ],
      faqs: [
        {
          q: "How much does a garage cleanout cost in Chattanooga?",
          a: "Most residential garage cleanouts fall between a quarter and half truckload in volume, costing roughly $144 to $287. Very full two-car garages may approach a full truckload at around $591. The pro gives you a free upfront quote after seeing the garage.",
        },
        {
          q: "Do I need to bag or box items before the crew arrives?",
          a: "No. The crew loads directly from the garage. Loose items, stacked boxes, and freestanding furniture are all handled as-is. Bagging is only helpful for small loose items like screws or nails that would otherwise scatter.",
        },
        {
          q: "Can the crew sort through items and set aside things I might want to keep?",
          a: "Yes. Walk through the garage with the crew leader at the start and communicate clearly what to keep versus remove. Good pros are careful not to haul anything you want to retain. Marking items with tape or moving them to a corner helps avoid confusion.",
        },
        {
          q: "What garage items will pros not take?",
          a: "Professionals will not haul motor oil, automotive fluids, gasoline, paint, solvents, or propane tanks. These are hazardous materials. Motor oil can be dropped off at several Hamilton County recycling centers. Paint and chemicals can go to the City of Chattanooga Household Hazardous Waste facility at 4063 N Hawthorne Street.",
        },
        {
          q: "When is the best time to schedule a garage cleanout in Chattanooga?",
          a: "March through May is the peak residential cleanout season in Chattanooga as homeowners tackle spring projects. Book early during this period. Fall (October through November) is the second busiest window. Summer and winter typically have faster scheduling availability.",
        },
      ],
    },
    {
      slug: "basement-cleanout",
      name: "Basement Cleanout",
      shortDesc: "Full basement clearing including furniture, appliances, and stored items.",
      longDesc:
        "Basements accumulate decades of stored items that seem too valuable to throw away but are never actually used. When a cleanout becomes necessary for a home sale, renovation, or estate, the job often involves hauling heavy furniture, old appliances, boxes, and miscellaneous items up stairs and out of the house. Professional crews handle the lifting and logistics so you don't have to.",
      whatToExpect:
        "Basement cleanouts are priced by truckload volume. A moderately full basement typically generates a half to full truckload. Stairs and tight access points can add to the time and cost. The crew handles everything from loading to transport.",
      avgCost: "$200 to $500+ depending on volume and stair access",
      timeEstimate: "2 to 5 hours depending on volume, stair access, and layout",
      icon: "🏗️",
      acceptedItems: [
        "Stored furniture and household goods",
        "Old appliances",
        "Boxes and miscellaneous accumulated items",
        "Exercise equipment",
        "Old paint cans (dried, hardened latex only)",
        "Tools and equipment",
      ],
      refusedItems: [
        "Liquid paint and solvents",
        "Motor oil and automotive fluids",
        "Hazardous chemicals and unidentified liquids",
        "Propane tanks",
      ],
      regulatoryNotes: "",
      tips: [
        "Clear a path down the stairs before the crew arrives to allow safe movement of large items",
        "Identify any items you want to keep and move them to one side of the basement",
        "Mention any narrow stairwells, low ceilings, or tight doorways when requesting your quote",
      ],
      faqs: [
        {
          q: "How much does a basement cleanout cost?",
          a: "Basement cleanouts in Chattanooga typically range from $200 to $500 or more depending on how full the basement is and how accessible it is. A half truckload averages $287; a full truckload averages $591. Stairs and tight access points can increase the time and cost. All quotes are free.",
        },
        {
          q: "Will the crew carry items up stairs from the basement?",
          a: "Yes. Stair access is standard for basement cleanouts. The pro will factor in stair access when giving you a quote. Narrow or steep stairs may require more time and affect pricing.",
        },
        {
          q: "What do I do about old paint cans in the basement?",
          a: "Dried, hardened latex paint can be disposed of in regular trash. Oil-based paint is hazardous and must go to the City of Chattanooga Household Hazardous Waste facility at 4063 N Hawthorne Street (Tuesday through Saturday, 8am to 3pm). Latex paint is explicitly refused at the HHW facility because it is non-toxic. Pros cannot haul liquid oil-based paint.",
        },
        {
          q: "What if the basement has very low ceilings or narrow access?",
          a: "Mention these constraints when requesting your quote. A professional crew knows how to navigate tight spaces, but low ceilings can affect what equipment they can bring in and how they load large items. Some items may need to be partially disassembled before removal.",
        },
        {
          q: "Can you clean out a basement that has had water damage?",
          a: "Yes, but water-damaged debris including wet or moldy materials can present additional handling requirements. If you have a known mold situation, mention it when you request a quote. The pro may require all wet items to be pre-bagged or may add a handling fee.",
        },
      ],
    },
    {
      slug: "office-cleanout",
      name: "Office Cleanout",
      shortDesc: "Commercial furniture, equipment, and office contents. Businesses and landlords served.",
      longDesc:
        "Office cleanouts involve removing desks, filing cabinets, chairs, computers, printers, shelving, and miscellaneous equipment from commercial spaces. Whether you're relocating, downsizing, or clearing a tenant's space, a professional crew handles the heavy lifting and disposal. Electronics and IT equipment require special handling for compliance.",
      whatToExpect:
        "Office cleanouts are priced by volume and complexity. A small single-office cleanout may be a quarter to half truckload. A full floor or suite generates multiple truckloads. The crew handles furniture disassembly, electronics sorting, and loading.",
      avgCost: "$200 to $800+ depending on office size and volume",
      timeEstimate: "2 to 6 hours for a standard single-floor office cleanout",
      icon: "🏢",
      acceptedItems: [
        "Desks and office furniture",
        "Filing cabinets",
        "Conference room tables and chairs",
        "Cubicle panels",
        "Printers and copiers",
        "Computers and monitors (e-waste fees may apply)",
        "Shelving and storage units",
        "Kitchen appliances and breakroom furniture",
      ],
      refusedItems: [
        "Hazardous chemicals or industrial waste",
        "Medical or biohazardous waste",
        "Confidential documents (require secure shredding service)",
      ],
      regulatoryNotes:
        "Businesses cannot use City of Chattanooga bulk trash pickup or refuse centers. These services are explicitly restricted to residential use. Contractor and commercial waste requires a private hauler. Businesses operating in Chattanooga must have both a City of Chattanooga business license and a Hamilton County business license. Junk removal companies operating commercially should carry comprehensive general liability and commercial auto insurance.",
      tips: [
        "Back up and wipe all hard drives before a crew removes computers or servers",
        "Separate electronics from furniture for proper e-waste routing",
        "Arrange for confidential document shredding separately before the cleanout crew arrives",
      ],
      faqs: [
        {
          q: "Can a business use City of Chattanooga bulk pickup for office debris?",
          a: "No. City of Chattanooga bulk trash pickup and refuse center services are explicitly for residential use only. Businesses, contractors, and commercial property managers cannot use these services under any circumstances. A private junk removal pro is the only option for commercial cleanout debris.",
        },
        {
          q: "How much does an office cleanout cost?",
          a: "Small office cleanouts (single room, modest furniture) start at $144 to $200 for a quarter truckload. Full office suite or multi-room cleanouts can run $500 to $1,000 or more depending on volume and complexity. All quotes are free and given after the pro assesses the space.",
        },
        {
          q: "Can pros haul old computers, monitors, and printers?",
          a: "Yes, but electronics are subject to e-waste fees. Hamilton County recycling centers accept computers and rechargeable batteries but refuse televisions and most other electronics. The pro will route electronics through appropriate e-waste recyclers. Expect a surcharge for CRT monitors and older TVs.",
        },
        {
          q: "Do I need to have the office vacant before the crew arrives?",
          a: "Not necessarily. The crew can work around remaining occupants or furniture you plan to keep. Communicate clearly what is to be removed versus retained. Moving all 'keep' items to one side of the space helps the crew work efficiently.",
        },
        {
          q: "What do I do with confidential files and documents?",
          a: "Junk removal crews are not equipped for secure document destruction. Arrange for a certified document shredding service to handle confidential materials separately before the cleanout. Pros can haul empty filing cabinets once documents have been removed.",
        },
      ],
    },
    {
      slug: "rental-property-cleanout",
      name: "Rental Property Cleanout",
      shortDesc: "Tenant move-outs, eviction cleanouts, and between-tenant turnovers. Fast service for landlords.",
      longDesc:
        "When a tenant moves out or is evicted, landlords in Chattanooga face a hard reality: city bulk pickup services are completely off-limits for rental property debris. Every item left behind — furniture, appliances, trash, personal belongings — requires a private hauler. Professional junk removal crews serve landlords and property managers throughout Hamilton County and can turn over a rental unit quickly so you can re-list it.",
      whatToExpect:
        "Rental cleanout speed and cost depends on how much the tenant left behind. A light turnover with a few items runs a quarter truckload. A full eviction cleanout with significant furniture and accumulated debris may require multiple truckloads. Pros can often schedule within 24 to 48 hours for landlord cleanouts.",
      avgCost: "$144 to $600+ depending on how much was left behind",
      timeEstimate: "1 to 4 hours depending on volume and property size",
      icon: "🔑",
      acceptedItems: [
        "All tenant-left furniture and household goods",
        "Appliances left behind",
        "Clothing and personal items (bagged)",
        "Trash and miscellaneous debris",
        "Renovation debris from turnover work",
      ],
      refusedItems: [
        "Hazardous materials or unknown chemicals",
        "Medical or biohazardous waste",
        "Motor oil and automotive fluids",
      ],
      regulatoryNotes:
        "The City of Chattanooga bulk trash pickup service explicitly prohibits use by landlords, rental property owners, and property managers. The three City Refuse Collection Centers also reject commercial activity and contractor loads. This prohibition applies to eviction cleanouts, move-out cleanouts, and renovation debris from rental properties. Every piece of tenant left-behind debris legally requires a private hauler. This is not a workaround — it is the only legal option for rental property owners in Chattanooga.",
      tips: [
        "Document everything with photos before the crew arrives for your records",
        "Check with your attorney about tenant property storage requirements before disposing of personal belongings",
        "Combine the cleanout with a minor repair and touch-up visit to maximize crew efficiency",
      ],
      faqs: [
        {
          q: "Can I use Chattanooga's city bulk trash pickup to clean out a rental property?",
          a: "No. The City of Chattanooga bulk trash pickup service explicitly prohibits use by landlords, rental property owners, and property managers. The city's refuse centers are also off-limits for commercial and landlord use. Every piece of tenant left-behind debris from a rental property requires a private hauler. This applies to eviction cleanouts, standard move-out cleanouts, and renovation debris.",
        },
        {
          q: "What is the fastest way to clear a rental property between tenants?",
          a: "A private junk removal crew is the fastest option. Many Chattanooga-area pros can schedule a rental cleanout within 24 to 48 hours. For large volumes, request a crew with multiple trucks. Be prepared with clear access to all units and a list of items to remove versus any items to retain.",
        },
        {
          q: "Am I legally allowed to dispose of a tenant's belongings after eviction?",
          a: "Tennessee law requires landlords to follow specific procedures before disposing of a tenant's belongings after an eviction. Consult with a Tennessee attorney or property manager familiar with state landlord-tenant law before having items removed. Once you have legal clearance to proceed, a junk removal pro handles the physical removal.",
        },
        {
          q: "Can a pro clean out a rental property the same day I call?",
          a: "Same-day availability depends on the pro's schedule and the size of the job. Mention urgency when you submit your request. Some operators serve the landlord market with priority scheduling. For large eviction cleanouts, next-day scheduling is more realistic.",
        },
        {
          q: "How do I handle appliances left behind by a tenant?",
          a: "Appliances left in a rental unit can be hauled by the same crew handling the cleanout. Refrigerators and appliances with refrigerants may carry a small additional disposal fee due to EPA refrigerant evacuation requirements. Mention any appliances when requesting your quote.",
        },
      ],
    },
    {
      slug: "foreclosure-cleanout",
      name: "Foreclosure Cleanout",
      shortDesc: "Bank-owned property clearing for real estate investors and lenders.",
      longDesc:
        "Foreclosure cleanouts serve banks, asset managers, and real estate investors who need properties cleared before listing or rehabilitation work can begin. These jobs often involve significant volumes of furniture, appliances, personal property left by former occupants, and sometimes renovation debris. Professional crews familiar with foreclosure cleanouts understand the documentation and speed requirements involved.",
      whatToExpect:
        "Foreclosure cleanouts are priced by truckload. Properties are often in poor condition with significant accumulated debris. Crews handle the full clearing and loading. Some pros can provide before-and-after documentation photos for the file.",
      avgCost: "$250 to $800+ depending on the size of the property and volume left behind",
      timeEstimate: "2 to 6 hours depending on property size and volume",
      icon: "🏦",
      acceptedItems: [
        "All personal property left by former occupants",
        "Furniture and household goods",
        "Appliances",
        "Renovation and demolition debris",
        "Yard waste and outdoor items",
        "Trash and accumulated debris",
      ],
      refusedItems: [
        "Hazardous materials and unidentified chemicals",
        "Motor oil and automotive fluids",
        "Medical or biohazardous waste",
      ],
      regulatoryNotes:
        "Chattanooga city bulk pickup explicitly prohibits use by landlords, contractors, and investors for any waste generated from non-owner-occupied properties. City refuse centers are restricted to residential owner-occupants. Every item removed from a foreclosure property requires a private hauler. Real estate investors operating in Chattanooga should verify that the foreclosure process has been legally completed before ordering property clearing. Illegal dumping carries significant penalties enforced by City of Chattanooga Code Enforcement.",
      tips: [
        "Confirm legal possession of the property before ordering a cleanout",
        "Request before-and-after photos from the crew for your records",
        "Ask about bulk pricing for multi-property portfolios if you manage multiple foreclosures",
      ],
      faqs: [
        {
          q: "Can I use Chattanooga's city bulk pickup for a foreclosure cleanout?",
          a: "No. City of Chattanooga bulk pickup and refuse centers are restricted to residential owner-occupants. Investors, lenders, and asset managers clearing foreclosure properties must use a private hauler. There are no exceptions to this prohibition.",
        },
        {
          q: "How much does a foreclosure cleanout cost?",
          a: "Foreclosure cleanouts typically range from $250 to $800 or more depending on what was left behind and the size of the property. A minimally furnished property might require only one to two truckloads. Properties with significant furniture, appliances, and accumulated debris can generate multiple truckloads. Quotes are free and given on-site.",
        },
        {
          q: "How quickly can a foreclosure property be cleared?",
          a: "Many Chattanooga pros can schedule within 24 to 48 hours for foreclosure cleanouts. For very large properties, a multi-crew approach may be needed. Mention the urgency and the size of the property when you submit your request.",
        },
        {
          q: "Will the crew provide documentation of what was removed?",
          a: "Ask the pro upfront if they can provide before-and-after photos and a description of what was hauled. This documentation is useful for asset management records and liability purposes. Not all pros offer this as a standard service, so confirm before booking.",
        },
        {
          q: "What if the property contains hazardous materials like old paint or chemicals?",
          a: "Pros cannot haul hazardous materials. Oil-based paint, chemicals, motor oil, and unidentified liquids must be routed to the City of Chattanooga Household Hazardous Waste facility at 4063 N Hawthorne Street. Mention any known hazardous materials when you request the cleanout so the crew can plan around them.",
        },
      ],
    },
    {
      slug: "couch-removal",
      name: "Couch Removal",
      shortDesc: "One couch or a full living room set. Haul-away from anywhere in the home.",
      longDesc:
        "Getting a couch out of your home and properly disposed of is harder than it sounds. Most curbside trash programs won't take oversized furniture, and many people don't have a pickup truck large enough to transport a sectional. A junk removal pro makes it simple: they come inside, carry the couch out, and haul it away — sometimes the same day.",
      whatToExpect:
        "Single couch or loveseat pickups typically take 15 to 30 minutes. Sectionals and large furniture sets take slightly longer. The crew handles all carrying and loading. If the couch is in good condition, the pro may route it to a donation organization.",
      avgCost: "Starting at $95 to $125 for a single couch",
      timeEstimate: "15 to 30 minutes for a standard sofa pickup",
      icon: "🛋️",
      acceptedItems: [
        "Sofas and loveseats",
        "Sectional couches",
        "Sleeper sofas",
        "Futons",
        "Recliners",
        "Chaise lounges",
      ],
      refusedItems: [
        "Couches contaminated with biohazardous materials",
        "Couches from commercial establishments with commercial waste restrictions",
      ],
      regulatoryNotes: "",
      tips: [
        "If the couch is in good condition, ask the pro whether it can be donated rather than landfilled",
        "Clear a path from the couch to the front door before the crew arrives",
        "For sectionals, the crew will typically carry each section separately",
      ],
      faqs: [
        {
          q: "How much does couch removal cost in Chattanooga?",
          a: "A single couch or loveseat removal starts at the minimum load price of $95 to $125. Sectionals or multiple pieces may bring the total closer to a quarter truckload at $144. All quotes are free and given before any work begins.",
        },
        {
          q: "Can I donate my couch instead of having it hauled away?",
          a: "Possibly. Habitat for Humanity ReStore (1150 E 14th Street) accepts couches and loveseats in excellent condition — no rips, heavy stains, or pet hair. The Samaritan Center (6017 Ooltewah Georgetown Road) and Salvation Army also accept furniture in good condition. However, donation pickup from these organizations can take 3 to 4 weeks. A junk removal pro can transport usable furniture to a donation center for faster turnaround.",
        },
        {
          q: "Do I need to carry the couch to the curb before the crew arrives?",
          a: "No. Full-service junk removal means the crew comes inside your home and carries items out. You do not need to move anything to the curb or driveway, though doing so can sometimes reduce time and cost.",
        },
        {
          q: "How do you remove a couch that won't fit through the doorway?",
          a: "Crews are experienced with tight doorways and stairwells. For extremely large sectionals or sofas in small apartments, the crew may remove doors from their hinges or disassemble the couch to get it out. Mention any access challenges when you submit your request.",
        },
        {
          q: "Can you pick up my couch the same day I call?",
          a: "Same-day availability depends on the pro's schedule. For a quick single-item pickup, many Chattanooga pros can accommodate same-day or next-day requests during the week. Weekends may be busier. Mention your preferred timing when you submit your request.",
        },
      ],
    },
    {
      slug: "refrigerator-removal",
      name: "Refrigerator Removal",
      shortDesc: "Old fridge, freezer, or mini-fridge. EPA-compliant refrigerant handling included.",
      longDesc:
        "Refrigerator removal is more complex than moving standard furniture because of federal EPA regulations. Refrigerators, deep freezers, and window AC units contain chlorofluorocarbons (CFCs) and hydrochlorofluorocarbons (HCFCs) that must be professionally evacuated by a certified technician before the appliance can be legally recycled or landfilled. This mandatory step is why refrigerator removal costs more and why most residents cannot simply haul a fridge to the curb or drop it at a recycling center.",
      whatToExpect:
        "A refrigerator removal typically takes 20 to 45 minutes. The crew brings the equipment needed to safely move the appliance and transport it to a certified facility where refrigerant evacuation is handled. Defrost and empty the refrigerator at least 24 hours before pickup.",
      avgCost: "$95 to $175 for most refrigerators. Larger commercial-style units may cost more.",
      timeEstimate: "20 to 45 minutes for a standard residential refrigerator",
      icon: "🧊",
      acceptedItems: [
        "Standard full-size refrigerators",
        "Side-by-side and French door refrigerators",
        "Deep freezers and chest freezers",
        "Mini-fridges and dorm fridges",
        "Refrigerator-freezer combos",
      ],
      refusedItems: [
        "Refrigerators still connected to active gas lines (must be disconnected first)",
        "Built-in refrigerators (may require cabinetry removal first)",
      ],
      regulatoryNotes:
        "Federal EPA law under Section 608 of the Clean Air Act requires that refrigerants in household appliances — including all refrigerators, freezers, and window AC units — be professionally evacuated by an EPA 608-certified technician before the appliance can be legally recycled or landfilled. Regional transfer stations may charge refrigerant evacuation fees of up to $32 per item. Hamilton County recycling centers explicitly refuse all appliances. City of Chattanooga Refuse Collection Centers accept refrigerators from city residents who present a valid Tennessee driver's license showing city residency and valid Hamilton County vehicle tags, but only if arriving in a standard pickup truck or smaller, with visits limited to 12 per calendar year. Landlords and contractors cannot use city refuse services for rental property appliances.",
      tips: [
        "Defrost the refrigerator at least 24 hours before pickup",
        "Empty all contents and remove any shelves or drawers that might shift during transport",
        "Ask the pro if they are EPA 608-certified to handle refrigerant-containing appliances",
      ],
      faqs: [
        {
          q: "Why does refrigerator removal cost more than removing a regular piece of furniture?",
          a: "Federal EPA law requires refrigerants in refrigerators, freezers, and window AC units to be professionally evacuated by an EPA 608-certified technician before the appliance can be legally recycled or landfilled. This mandatory process can cost up to $32 per item at certified transfer stations and requires specialized equipment and training. That compliance cost is built into the removal price.",
        },
        {
          q: "Can I take my old refrigerator to a Hamilton County recycling center?",
          a: "No. Hamilton County recycling centers explicitly refuse all appliances, including refrigerators, freezers, and air conditioners. You cannot drop off any major appliance at any county recycling location.",
        },
        {
          q: "Can I use the City of Chattanooga's bulk pickup or refuse centers for my refrigerator?",
          a: "City bulk pickup does accept heavy appliances including refrigerators for city residents. City Refuse Collection Centers (at 4276 Airport Road, 4500 North Access Road, and 1400 West 57th Street) also accept refrigerators, but only if you arrive in a standard pickup truck or smaller, present a valid Tennessee driver's license proving city residency and valid Hamilton County vehicle tags, and have not exceeded your 12 visits per calendar year. Landlords and contractors cannot use these services.",
        },
        {
          q: "Do I need to defrost the refrigerator before the crew arrives?",
          a: "Yes. Defrost and empty the refrigerator at least 24 hours before pickup. A freezer full of frost is significantly heavier and can create handling difficulties. Remove all food and wipe down the interior.",
        },
        {
          q: "What happens to my old refrigerator after it is removed?",
          a: "The pro transports it to a certified disposal facility where the refrigerant is professionally evacuated, the refrigerant is captured and safely handled, and the metal components are recycled. A reputable pro will not illegally dump appliances, which carries penalties under both EPA and Tennessee law.",
        },
        {
          q: "Can you remove a mini-fridge from a dorm room or apartment?",
          a: "Yes. Mini-fridges are removed the same way as full-size units. They still contain refrigerants and must be handled properly, though the lower weight makes them easier to transport. College students in Collegedale and Chattanooga frequently need mini-fridge removal at the end of the academic year.",
        },
      ],
    },
    {
      slug: "shed-removal",
      name: "Shed Removal",
      shortDesc: "Backyard shed demolition and haul-away. Full debris removal included.",
      longDesc:
        "Shed removal is a combination of light demolition and junk removal. A crew dismantles the shed on site — pulling apart wood or metal panels, breaking down the frame, and hauling all material away. Whether the shed is rotting, storm-damaged, or simply no longer needed, a professional crew clears the space cleanly without leaving debris behind.",
      whatToExpect:
        "A standard garden or tool shed removal takes 2 to 4 hours from start to finish. Larger sheds or those filled with contents may take longer. The contents of the shed must be removed before demolition begins unless the pro agrees to haul everything together. All structural material, roofing, and flooring is removed.",
      avgCost: "Starting at $200 to $400 for a standard backyard shed. Large sheds and those with concrete pads cost more.",
      timeEstimate: "2 to 4 hours for a standard shed without contents",
      icon: "🏘️",
      acceptedItems: [
        "Wood-frame garden sheds",
        "Metal utility sheds",
        "Resin or plastic storage sheds",
        "Shed contents (if arranged with pro)",
        "Associated roofing, flooring, and hardware",
      ],
      refusedItems: [
        "Sheds with active asbestos-containing material (requires abatement first)",
        "Structures with active utility connections that have not been disconnected",
      ],
      regulatoryNotes:
        // MANUAL REVIEW: Verify whether Hamilton County or City of Chattanooga requires a demolition permit for backyard shed removal. Research did not confirm permit requirements for accessory structures. Add this information once verified.
        "",
      tips: [
        "Remove all contents from the shed before the crew arrives, or arrange for the pro to haul contents separately",
        "Check whether the shed has a concrete pad — concrete removal is a separate cost",
        "Verify with your local municipality whether a permit is required for shed demolition",
      ],
      faqs: [
        {
          q: "How much does shed removal cost in Chattanooga?",
          a: "Most standard backyard shed removals in Chattanooga start at $200 to $400. Larger sheds, sheds with attached concrete pads, or very full sheds can cost significantly more. All quotes are free and assessed based on the size and condition of the structure.",
        },
        {
          q: "Do I need a permit to remove a shed in Chattanooga?",
          // MANUAL REVIEW: Research did not confirm whether a permit is required for shed removal in Chattanooga or Hamilton County. Verify with City of Chattanooga Building and Neighborhood Services or Hamilton County before publishing specific guidance.
          a: "Permit requirements for shed removal vary by jurisdiction and structure size. Contact City of Chattanooga Building and Neighborhood Services or Hamilton County to confirm requirements for your specific property before scheduling removal.",
        },
        {
          q: "Does the crew remove the concrete pad under the shed?",
          a: "Concrete pad removal is typically an additional service and cost beyond the shed structure itself. Concrete is heavy and requires proper disposal. If you want the pad removed, mention this when requesting your quote so the pro can price it accurately.",
        },
        {
          q: "What if the shed is full of items?",
          a: "Sheds with contents can be cleared and demolished in the same visit, but this adds time and volume to the job. Mention any shed contents when requesting your quote. Some pros will price the cleanout and the demolition together; others may prefer to do them in two stages.",
        },
        {
          q: "How long does shed removal take?",
          a: "A standard garden shed removal with no contents typically takes 2 to 4 hours. Larger or more complex structures may take longer. Very full sheds with significant contents may require a half day or more.",
        },
      ],
    },
    {
      slug: "piano-removal",
      name: "Piano Removal",
      shortDesc: "Uprights, grands, and spinets. Specialty handling for heavy, delicate instruments.",
      longDesc:
        "Piano removal is one of the most physically demanding and technically complex junk removal jobs. An upright piano typically weighs 400 to 800 lbs; a baby grand or grand piano can weigh 500 to 1,200 lbs. They must be moved on specialized dollies, protected from door frames and flooring, and transported carefully to avoid structural damage to the instrument. Not every junk removal company handles pianos — confirm with the pro before booking.",
      whatToExpect:
        "Piano removal requires a crew of at least two, usually three, with appropriate moving equipment. Jobs typically take 1 to 3 hours depending on access and distance. Stairs and tight corners significantly increase both time and cost. If the piano has sentimental or resale value, consider a piano-specific mover or music store buyback before scheduling removal.",
      avgCost: "Starting at $150 to $300 for a standard upright. Grand piano removal costs more due to weight and complexity.",
      timeEstimate: "1 to 3 hours depending on access and stair configuration",
      icon: "🎹",
      acceptedItems: [
        "Upright pianos and spinets",
        "Baby grand and grand pianos",
        "Digital pianos and electronic keyboards (if oversized)",
        "Player pianos",
      ],
      refusedItems: [
        "Pianos on upper floors of buildings without elevator access (confirm capability with pro)",
        "Pianos with active rodent or pest infestation",
      ],
      regulatoryNotes: "",
      tips: [
        "Verify that the pro has experience with piano removal specifically, as not all junk removal companies handle them",
        "Check with local music stores or piano dealers about buyback or donation options before scheduling removal",
        "Measure doorways and stairwells before the crew arrives to identify any access challenges",
      ],
      faqs: [
        {
          q: "How much does piano removal cost in Chattanooga?",
          // MANUAL REVIEW: Research does not provide specific piano removal pricing from Chattanooga operators. The range below is based on general market knowledge. Verify with local pros before publishing as definitive pricing.
          a: "Piano removal in Chattanooga typically starts at $150 to $300 for a standard upright. Grand piano removal can run $300 to $500 or more depending on the instrument's weight and access complexity. Stairs significantly increase both the risk and the price. All quotes are free and assessed based on the piano and your specific access situation.",
        },
        {
          q: "Can I donate a piano in Chattanooga?",
          a: "Possibly, but options are limited. The Samaritan Center in Ooltewah explicitly refuses pianos. Habitat for Humanity ReStore does not typically accept them. Your best options are to contact local churches, schools, or community centers directly to ask about accepting a working instrument, or to list it on local Facebook groups. If the piano is playable and in reasonable condition, a music store may offer a buyback or know of local organizations that accept donated instruments.",
        },
        {
          q: "Can any junk removal company remove a piano?",
          a: "No. Not all junk removal operators handle pianos. A piano requires specialized dollies, moving straps, and experienced crew members who know how to navigate stairs and tight spaces without damaging the instrument or the home. Confirm with the pro that they have piano removal experience before booking.",
        },
        {
          q: "What if the piano is on an upper floor?",
          a: "Upper-floor piano removal is significantly more complex and costly than ground-floor jobs. A staircase can double or triple the labor time and increase the risk of damage to the stairwell and the instrument. Some crews will not attempt upper-floor grand piano removal at all. Be upfront about stair access when requesting a quote so the pro can assess feasibility.",
        },
        {
          q: "Is my piano worth selling or donating before I have it removed?",
          a: "Many older pianos are not worth the cost of tuning and repair and have little resale value. However, some upright brands retain value and could find a home through Craigslist, Facebook Marketplace, or a piano dealer. If you are unsure, consult a local piano technician for a valuation before scheduling removal.",
        },
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
        "East Ridge sits directly on the Georgia border, a dense inner-ring suburb characterized by mid-century brick ranch homes, established apartment complexes, and compact lot sizes.",
      propertyTypes:
        "Mid-century brick ranch homes, apartment complexes, compact lot sizes. High rental turnover and an aging demographic.",
      commonJobs: [
        "Rapid eviction and rental turnover cleanouts",
        "Estate cleanouts from aging housing stock",
        "Heavy outdated furniture removal",
        "Renovation debris from fix-and-flip activity",
        "Appliance removal",
      ],
      logistics:
        "Properties often have narrow, shared, or deteriorating driveways that may not support the weight or turning radius of large roll-off dumpsters. Agile smaller box trucks or trailer-based operations are more efficient here. City bulk pickup is prohibited for landlords and investors — all rental cleanout debris requires a private hauler.",
      localResources: [] as { name: string; address: string; notes: string }[],
      faqs: [
        {
          q: "Can landlords in East Ridge use Chattanooga city bulk pickup?",
          a: "No. The City of Chattanooga bulk trash pickup service explicitly prohibits use by landlords, property managers, and rental property owners. Every piece of tenant-left debris from a rental property in East Ridge requires a private junk removal hauler. This is the only legal option.",
        },
        {
          q: "What type of junk removal is most common in East Ridge?",
          a: "East Ridge's combination of aging housing stock, high rental density, and active real estate investment drives strong demand for landlord and eviction cleanouts, estate cleanouts, and renovation debris removal. The I-75 corridor rental market creates consistent year-round volume.",
        },
        {
          q: "How much does junk removal cost in East Ridge?",
          a: "Pricing in East Ridge follows the Chattanooga market rate: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. All quotes are free and given before any work begins.",
        },
        {
          q: "Can large dumpsters access East Ridge properties?",
          a: "Not always. Many East Ridge properties have narrow or deteriorating driveways that cannot accommodate large roll-off dumpsters. Smaller box trucks and trailer operations handle most residential pickups without access problems. Mention any driveway constraints when requesting a quote.",
        },
      ],
    },
    {
      slug: "red-bank",
      name: "Red Bank",
      pop: "12,000",
      blurb:
        "Red Bank is geographically surrounded by the City of Chattanooga. Steep and hilly terrain mixed with older suburban housing and newly renovated starter homes defines its character.",
      propertyTypes:
        "Older suburban homes, starter homes undergoing active renovation, steep hillside lots.",
      commonJobs: [
        "Construction and demolition debris from renovation and house-flipping",
        "Old cabinetry, flooring, and drywall",
        "Yard waste from property overhauls",
        "Estate cleanouts from aging housing stock",
      ],
      logistics:
        "Steep hilly terrain creates dumpster placement challenges, particularly in wet weather. Heavy rain can make steep driveways hazardous for large roll-off dumpster delivery and placement. Smaller trucks handle most residential pickups more safely than large commercial vehicles on certain streets.",
      localResources: [
        {
          name: "Red Bank Recycling Center",
          address: "4857 Dayton Blvd, Red Bank, TN",
          notes:
            "Accepts plastics, glass, metals, paper. Tuesday through Friday 10am to 6pm, Saturday 8am to 4pm. Does NOT accept appliances, TVs, or microwaves.",
        },
      ],
      faqs: [
        {
          q: "What kinds of junk removal jobs are most common in Red Bank?",
          a: "Red Bank's active gentrification and house-flipping market drives strong demand for construction and demolition debris removal — drywall, old cabinetry, flooring, and renovation waste. Estate cleanouts from the aging housing stock are also common.",
        },
        {
          q: "Can I use city bulk pickup in Red Bank?",
          a: "Red Bank is a separate independent municipality within Hamilton County. Residents of Red Bank may not have access to the City of Chattanooga bulk pickup program — contact Red Bank city services or the CHA 311 system to confirm eligibility. A private hauler is always an option regardless of municipal boundaries.",
        },
        {
          q: "Are there recycling options in Red Bank?",
          a: "Yes. The Hamilton County Red Bank Recycling Center is located at 4857 Dayton Blvd and accepts plastics, glass, metals, paper, computers, and rechargeable batteries. Hours are Tuesday through Friday 10am to 6pm and Saturday 8am to 4pm. It does not accept appliances, televisions, or microwaves.",
        },
        {
          q: "How does hilly terrain affect junk removal scheduling in Red Bank?",
          a: "Steep grades in Red Bank can be challenging for large roll-off dumpster delivery, particularly on narrow streets or in wet weather when steep driveways become slippery. Smaller box trucks are often more practical. Mention your driveway grade when requesting a quote.",
        },
      ],
    },
    {
      slug: "signal-mountain",
      name: "Signal Mountain",
      pop: "8,500",
      blurb:
        "Signal Mountain is an affluent, geographically isolated community atop the Cumberland Plateau, with historic estates and modern luxury homes on heavily wooded, expansive lots.",
      propertyTypes:
        "Historic estates, modern luxury homes, expansive wooded lots on the Cumberland Plateau.",
      commonJobs: [
        "High-value estate cleanouts",
        "Extensive landscaping debris clearing",
        "High-end remodeling waste",
        "Large furniture from expansive homes",
      ],
      logistics:
        "Access is notoriously difficult. The W Road and Signal Mountain Boulevard feature severe switchbacks and steep grades that are hard on large commercial vehicles — excessive fuel costs and rapid brake wear are common. Many residential driveways are extremely steep. Small, nimble vehicles are preferred over large roll-offs. Residents strongly favor premium white-glove service with careful property handling.",
      localResources: [] as { name: string; address: string; notes: string }[],
      faqs: [
        {
          q: "Can large junk removal trucks access Signal Mountain?",
          a: "Large commercial vehicles face significant challenges on Signal Mountain. The W Road and Signal Mountain Boulevard involve severe switchbacks and steep grades that cause excessive fuel consumption and brake wear. Many residential driveways on the mountain are extremely steep. Smaller, nimble vehicles are the practical choice for most Signal Mountain jobs. Confirm vehicle access when requesting a quote.",
        },
        {
          q: "What kind of service do Signal Mountain residents expect?",
          a: "Signal Mountain residents typically expect premium white-glove service with careful handling of property and belongings. This is especially important for estate cleanouts from historic homes where antiques or fragile items may be present. Communicate your expectations clearly when requesting a quote.",
        },
        {
          q: "How much does junk removal cost on Signal Mountain?",
          a: "Signal Mountain jobs follow the same volume-based pricing as the broader Chattanooga market: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. However, access difficulty may factor into the quote. Get a free assessment before any work begins.",
        },
        {
          q: "Are estate cleanouts common on Signal Mountain?",
          a: "Yes. Signal Mountain has an aging demographic with large historic estates. When elderly residents transition to assisted living or pass away, probate and estate cleanout work is significant. Full property cleanouts from large Signal Mountain homes often generate multiple truckloads and run $1,200 to $2,000 or more.",
        },
      ],
    },
    {
      slug: "hixson",
      name: "Hixson",
      pop: "45,000",
      blurb:
        "Hixson is one of the largest established suburban communities in Hamilton County, stretching north along Highway 153 with large single-family homes, multi-car garages, and wide paved streets.",
      propertyTypes:
        "Large single-family homes, multi-car garages, wide paved driveways, quiet cul-de-sacs. Middle to upper-middle class established suburb.",
      commonJobs: [
        "Seasonal garage cleanouts",
        "Broken major appliances",
        "Children's wooden play sets and outdoor furniture",
        "Bulky landscaping waste",
        "Standard suburban accumulation",
      ],
      logistics:
        "Highly accessible area with wide paved driveways and quiet cul-de-sacs. This makes Hixson ideal territory for drop-off dumpster rentals and full-capacity truck operations. One of the most operationally efficient zones in the Hamilton County market.",
      localResources: [
        {
          name: "Middle Valley Recycling Center",
          address: "1868 Crabtree Road, Hixson, TN 37343",
          notes:
            "Accepts plastics, glass, metals, paper, computers, and rechargeable batteries. Monday and Wednesday 9am to 5pm, Saturday 8am to 4pm. Does NOT accept appliances, TVs, or microwaves. Phone: (423) 843-9317.",
        },
      ],
      faqs: [
        {
          q: "What is the most common junk removal job in Hixson?",
          a: "Hixson's large suburban homes with multi-car garages generate consistent demand for seasonal garage cleanouts. Spring cleaning (March through May) is the peak period. Large appliances, children's outdoor equipment like wooden play sets, and landscaping waste are also frequently hauled.",
        },
        {
          q: "Is there a recycling center near Hixson?",
          a: "Yes. The Hamilton County Middle Valley Recycling Center is located at 1868 Crabtree Road in Hixson and accepts plastics, glass, metals, paper, computers, and rechargeable batteries. Hours are Monday and Wednesday 9am to 5pm and Saturday 8am to 4pm. It does NOT accept appliances, televisions, or microwaves.",
        },
        {
          q: "How much does junk removal cost in Hixson?",
          a: "Hixson pricing follows the Chattanooga market: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. Wide driveways and excellent access typically make Hixson jobs straightforward and efficient.",
        },
        {
          q: "Can I get a roll-off dumpster in Hixson?",
          a: "Yes. Hixson's wide driveways and cul-de-sacs make it one of the most accessible areas in Hamilton County for dumpster rental placement. Some junk removal operators offer short-term dumpster rental as an alternative to full-service pickup. Check with your pro about availability.",
        },
      ],
    },
    {
      slug: "soddy-daisy",
      name: "Soddy-Daisy",
      pop: "14,500",
      blurb:
        "Soddy-Daisy runs north along the Tennessee River and Chickamauga Lake, blending rural acreage with desirable lakefront properties.",
      propertyTypes:
        "Rural acreage, lakefront properties along Chickamauga Lake, older suburban homes, some gravel and unpaved road access.",
      commonJobs: [
        "Shed demolition and removal",
        "Waterlogged boat dock materials",
        "Rusted riding mowers and outdoor equipment",
        "Hot tub removal",
        "Storm debris from heavy tree canopy",
        "General rural accumulation",
      ],
      logistics:
        "Many properties have unpaved, gravel, or dirt access roads that require 4x4 pickup trucks and heavy-duty trailers rather than standard commercial box trucks. Longer drive times between jobs compared to urban zones. Storm events generate significant surge demand for debris removal, particularly from lakefront properties.",
      localResources: [
        {
          name: "Sequoyah Recycling Center",
          address: "9525 Lovell Road, Soddy-Daisy, TN 37379",
          notes:
            "Accepts plastics, glass, metals, paper, computers, and rechargeable batteries. Tuesday, Thursday, and Saturday 8am to 4pm. Does NOT accept appliances, TVs, or microwaves. Phone: (423) 842-2391.",
        },
        {
          name: "Sequoyah Transfer Station",
          address: "9525 Lovell Road, Soddy-Daisy, TN",
          // MANUAL REVIEW: Current public-facing hours and resident fee schedule for the Sequoyah Transfer Station were not confirmed during research. Verify directly before publishing specific details about hours and fees.
          notes:
            "Serves northern Hamilton County. Processes municipal solid waste and construction/demolition debris. Verify current hours and fees directly before visiting.",
        },
      ],
      faqs: [
        {
          q: "What types of junk removal are most common in Soddy-Daisy?",
          a: "Soddy-Daisy's lakefront and rural character drives demand for outdoor and recreational debris removal: sheds, hot tubs, boat dock materials, rusted outdoor equipment, and storm debris from the heavy tree canopy are all common jobs. The area also generates standard residential cleanout volume.",
        },
        {
          q: "Can standard box trucks access Soddy-Daisy properties?",
          a: "Not always. Many Soddy-Daisy properties have unpaved or gravel access roads that are unsuitable for standard commercial box trucks, especially after rain. Operators serving this area often use 4x4 pickups with trailers for rural jobs. Mention your access road conditions when requesting a quote.",
        },
        {
          q: "Is there a recycling center near Soddy-Daisy?",
          a: "Yes. The Sequoyah Recycling Center at 9525 Lovell Road accepts plastics, glass, metals, paper, computers, and rechargeable batteries on Tuesday, Thursday, and Saturday from 8am to 4pm. It does not accept appliances, TVs, or microwaves.",
        },
        {
          q: "How much does junk removal cost in Soddy-Daisy?",
          a: "Pricing follows the Chattanooga market: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. Drive time from urban Chattanooga may factor into scheduling. Get a free upfront quote before any work begins.",
        },
      ],
    },
    {
      slug: "collegedale",
      name: "Collegedale",
      pop: "13,000",
      blurb:
        "Collegedale is a closely-knit suburban municipality east of Chattanooga, anchored by Southern Adventist University, with a unique mix of student housing, university family residences, and residential streets.",
      propertyTypes:
        "Student-targeted apartment complexes, university-owned family housing, single-family residential streets, newer development.",
      commonJobs: [
        "Move-out cleanouts at end of academic year",
        "Mini-fridge and student furniture removal",
        "New construction debris",
        "Apartment turnover cleanouts",
      ],
      logistics:
        "Demand is intensely cyclical, driven almost entirely by the academic calendar. Peak volume in May (spring move-out) and August (pre-semester move-in). Southern Adventist University levies fines of $100 or more for items left behind at move-out, creating concentrated time-sensitive surges when students rapidly vacate.",
      localResources: [] as { name: string; address: string; notes: string }[],
      faqs: [
        {
          q: "When is junk removal most in demand in Collegedale?",
          a: "Demand in Collegedale spikes sharply at two points: early May during spring move-out from Southern Adventist University and mid-August before the fall semester begins. Southern Adventist University enforces mandatory on-campus residency for single students under 23 and levies fines of $100 or more for items left behind at move-out, creating concentrated, time-sensitive junk removal surges.",
        },
        {
          q: "Can Southern Adventist University students get same-day junk removal at move-out?",
          a: "Demand at move-out is high and crews can book up quickly. Contact a pro as early as possible before your move-out date. For urgent same-day needs, mention the urgency and the SAU deadline when you submit your request.",
        },
        {
          q: "What items do students most commonly need removed?",
          a: "The most common items at student move-outs are mini-fridges and dorm refrigerators, futons and low-cost sofas, cheap flat-pack furniture, mattresses, and boxes of miscellaneous goods. Most of these can be loaded in 15 to 30 minutes for a single-room cleanout.",
        },
        {
          q: "How much does student move-out junk removal cost in Collegedale?",
          a: "Most student apartment cleanouts fall in the minimum to quarter truckload range, costing $95 to $144. Add a mattress or a full room of furniture and the price may approach a half truckload at $287. All quotes are free and given before any work begins.",
        },
      ],
    },
    {
      slug: "ooltewah",
      name: "Ooltewah",
      pop: "6,000",
      blurb:
        "Ooltewah is one of Hamilton County's fastest-growing areas, with massive new subdivisions, gated communities, and upscale residential development attracting a continuous influx of new residents.",
      propertyTypes:
        "New subdivisions, gated communities, upscale residential development, some older properties adjacent to newer growth.",
      commonJobs: [
        "Moving-related debris from continuous new resident influx",
        "Furniture replacement as residents upgrade",
        "Packing material and cardboard removal",
        "Move-out cleanouts from rapid apartment turnover",
      ],
      logistics:
        "Highly accessible area with modern roads and infrastructure. Many HOA communities in Ooltewah prohibit dumpsters from remaining in driveways for more than 48 hours, making same-day or next-day full-service removal the preferred option over rental dumpsters.",
      localResources: [
        {
          name: "The Samaritan Center",
          address: "6017 Ooltewah Georgetown Road, Ooltewah, TN",
          notes:
            "Free pickup available within 20 miles for large furniture and appliances that are on the main level of the home. Accepts large working appliances, functional electronics, clothing, decor, and flatware. Closed Saturdays. Does NOT accept pianos, mattresses, hospital beds, water beds, CRT televisions, or unframed mirrors.",
        },
      ],
      faqs: [
        {
          q: "Are dumpsters allowed in Ooltewah driveways?",
          a: "Many HOA communities in Ooltewah prohibit roll-off dumpsters from remaining in driveways for more than 48 hours. This makes same-day or next-day full-service junk removal the preferred option for most Ooltewah residents. Confirm your HOA rules before ordering a dumpster.",
        },
        {
          q: "Is there a donation center near Ooltewah?",
          a: "Yes. The Samaritan Center is located at 6017 Ooltewah Georgetown Road and offers free pickup within a 20-mile radius for large furniture and appliances that are on the main level of the home. They accept working appliances, functional electronics, furniture in good condition, clothing, and decor. They do not accept pianos, mattresses, hospital beds, or CRT televisions. Closed Saturdays.",
        },
        {
          q: "What junk removal services are most common in Ooltewah?",
          a: "Ooltewah's fast growth creates strong demand for move-related debris removal, furniture replacement haul-away, and packing material clearance as new residents move in. The high disposable income in newer developments drives preference for full-service, same-day or next-day removal.",
        },
        {
          q: "How much does junk removal cost in Ooltewah?",
          a: "Pricing follows the Chattanooga market rate: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. Ooltewah's accessible roads and modern infrastructure make most jobs straightforward.",
        },
      ],
    },
    {
      slug: "lookout-mountain",
      name: "Lookout Mountain",
      pop: "2,000",
      blurb:
        "Lookout Mountain straddles the Tennessee-Georgia border with historic, affluent residential properties and narrow, winding roads that require nimble hauling vehicles.",
      propertyTypes:
        "Historic affluent homes, narrow lot lines, densely packed residential streets along the Tennessee-Georgia border.",
      commonJobs: [
        "Probate and estate cleanouts",
        "Upscale remodeling debris",
        "Furniture removal from historic homes",
      ],
      logistics:
        "Municipal roads on Lookout Mountain are exceptionally narrow, winding, and may carry strict weight and access limitations for heavy commercial vehicles. Large roll-off dumpsters and large box trucks are not practical for many residential locations here. Smaller, nimble hauling vehicles are an operational necessity.",
      // MANUAL REVIEW: Research data for Lookout Mountain was less detailed than other communities. Verify local road weight limits, any special access restrictions, and whether Covenant College creates a seasonal academic demand surge similar to Collegedale. Add specific local resources once verified.
      localResources: [] as { name: string; address: string; notes: string }[],
      faqs: [
        {
          q: "Can large trucks access Lookout Mountain residential properties?",
          a: "Many Lookout Mountain roads are narrow, winding, and may have weight restrictions that prevent large commercial vehicles from accessing residential areas. Smaller, nimble hauling vehicles are the practical choice for most Lookout Mountain junk removal jobs. Confirm access constraints when requesting a quote.",
        },
        {
          q: "What are the most common junk removal jobs on Lookout Mountain?",
          a: "Lookout Mountain's historic, affluent community generates primary demand for probate and estate cleanouts and upscale remodeling debris from high-end home renovation projects.",
        },
        {
          q: "Does Covenant College on Lookout Mountain create seasonal demand?",
          // MANUAL REVIEW: Research did not confirm whether Covenant College creates a seasonal student move-out demand surge similar to Southern Adventist University in Collegedale. Verify before publishing specific claims about academic calendar junk removal patterns on Lookout Mountain.
          a: "Covenant College's academic calendar may create some seasonal junk removal demand at end-of-year move-out. Contact a local pro for current availability during the May and August peak periods.",
        },
        {
          q: "How much does junk removal cost on Lookout Mountain?",
          a: "Pricing follows the Chattanooga market: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. Access complexity may affect scheduling. All quotes are free.",
        },
      ],
    },
    {
      slug: "harrison",
      name: "Harrison",
      // MANUAL REVIEW: Research did not provide a confirmed population figure for Harrison, TN. The estimate below is approximate. Verify with U.S. Census data or Hamilton County records.
      pop: "~12,000",
      blurb:
        "Harrison is a suburban and rural community east of Chattanooga, centered around Chickamauga Lake. Older established neighborhoods sit alongside large waterfront estates along the Tennessee River.",
      propertyTypes:
        "Waterfront estates along Chickamauga Lake, older suburban neighborhoods, rural residential properties.",
      commonJobs: [
        "Marine and recreational waste removal",
        "Storm debris cleanup from heavy tree canopy",
        "General residential cleanouts",
        "Waterfront property cleanouts",
        "Hot tub removal",
      ],
      logistics:
        "Highly efficient zone for haulers. Harrison's immediate proximity to the Birchwood II Landfill (9327 Birchwood Pike, Harrison, TN) significantly reduces drive time to disposal, improving job margins and allowing faster turnarounds. This can translate to faster scheduling and competitive pricing for Harrison residents.",
      localResources: [
        {
          name: "Birchwood II Landfill",
          address: "9327 Birchwood Pike, Harrison, TN",
          notes:
            "Monday through Friday, 7am to 3pm. $40 per ton for standard garbage. City of Chattanooga residents can dispose of basic household garbage free, but this explicitly excludes bulky items, appliances, furniture, and construction or demolition waste. Non-city residents pay $2 per bag for first 15 bags before tonnage rates apply. All loads must be fully tarped.",
        },
      ],
      faqs: [
        {
          q: "What makes Harrison a good area for junk removal service?",
          a: "Harrison's proximity to the Birchwood II Landfill at 9327 Birchwood Pike significantly reduces hauler drive time to disposal. This can mean more competitive pricing and faster job scheduling for Harrison residents compared to areas farther from disposal infrastructure.",
        },
        {
          q: "What type of junk removal is most common in Harrison?",
          a: "Harrison's lakefront and rural character generates demand for marine and recreational debris removal, storm cleanup from Chickamauga Lake-area heavy tree canopy, waterfront property cleanouts, and standard residential haul-away.",
        },
        {
          q: "Can I take junk to the Birchwood II Landfill myself?",
          a: "Yes. The Birchwood II Landfill at 9327 Birchwood Pike is open Monday through Friday, 7am to 3pm. City of Chattanooga residents can dispose of basic household garbage for free, but bulky items, appliances, furniture, and construction debris are excluded from the free program. Non-city residents pay $2 per bag for the first 15 bags, then standard tonnage rates apply. All loads must be fully tarped.",
        },
        {
          q: "How much does junk removal cost in Harrison?",
          a: "Harrison pricing follows the Chattanooga market: minimum load $95 to $125, quarter truckload $144, half truckload $287, full truckload $591. The proximity to the Birchwood II Landfill may make some Harrison jobs particularly efficient for local haulers.",
        },
      ],
    },
  ],

  // --- Trust signals ---
  trustPoints: [
    "Pros are licensed and insured in Tennessee",
    "Same-day and next-day availability",
    "Free quotes, no obligation",
    "Pros recycle and donate when possible",
    "Serving all of Hamilton County",
    "Local Chattanooga-area professionals",
  ],

  // --- Homepage and general site FAQs ---
  faqs: [
    {
      q: "Are you the junk removal company?",
      a: "No. ChattanoogaJunkRemovalPros.com is a free referral service. You describe your job, and we connect you with a licensed, insured local junk removal professional who serves your area. The pro contacts you directly with a free quote. You decide whether to book with no pressure.",
    },
    {
      q: "How much does junk removal cost in Chattanooga?",
      a: "Most residential junk removal jobs in Chattanooga start at $95 to $125 for a minimum load or single item. A quarter truckload averages $144; a half truckload averages $287; a three-quarter truckload averages $414; a full truckload averages $591. Specialty jobs like hot tub removal ($250 to $450) and estate cleanouts ($1,200 to $2,000+) are quoted individually. The pro gives you an exact price before any work starts.",
    },
    {
      q: "Is there a limit to how many bulk pickups Chattanooga provides?",
      a: "Yes. The City of Chattanooga bulk trash pickup program is capped at 12 unique collection events per property within any consecutive 12-month period. When you've used all 12, a private junk removal hauler is the only option until the rolling window resets.",
    },
    {
      q: "Can landlords use Chattanooga's bulk trash pickup service?",
      a: "No. The City of Chattanooga explicitly prohibits landlords, property managers, rental property owners, and contractors from using the bulk trash pickup program or the city's Refuse Collection Centers. Every piece of debris from a rental cleanout, eviction, or rental renovation requires a private hauler. There are no exceptions.",
    },
    {
      q: "Can I drive a large truck or trailer to a city refuse center?",
      a: "No. City of Chattanooga Refuse Collection Centers prohibit dump bodies, tandem axle trailers, and any vehicle larger than a standard pickup truck. You must also present a valid Tennessee driver's license proving city residency and valid Hamilton County vehicle tags. Commercial vehicle tags are turned away.",
    },
    {
      q: "How quickly will a pro contact me?",
      a: "During business hours, pros aim to respond as promptly as possible. Response times vary by provider and their current schedule. For urgent needs, mention that in your request and the pro will do their best to prioritize your job.",
    },
    {
      q: "What items can junk removal pros handle?",
      a: "Most pros handle furniture, appliances, electronics, yard waste, construction debris, mattresses, hot tubs, sheds, pianos, and general household clutter. They cannot haul hazardous materials such as liquid paint, chemicals, asbestos, medical waste, or motor oil. Everything else is generally fine.",
    },
    {
      q: "Are the pros you refer licensed and insured?",
      a: "Yes. We only refer to professionals who are licensed to operate in Tennessee and carry liability insurance. You should always confirm insurance with any contractor before work begins.",
    },
    {
      q: "Do pros serve areas outside of Chattanooga proper?",
      a: "Yes. The pros in our network serve all of Hamilton County, including East Ridge, Red Bank, Hixson, Signal Mountain, Soddy-Daisy, Collegedale, Ooltewah, Lookout Mountain, and Harrison.",
    },
    {
      q: "Is there any cost for using this referral service?",
      a: "No. Submitting a request and getting connected to a local pro is completely free. The pro charges for the actual junk removal work and we do not add any fees.",
    },
  ],

  // --- Lead form webhook (Make.com) ---
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL ?? "",

  // --- Stats ---
  stats: {
    prosInNetwork: "8",
    areasServed: "12",
    yearsActive: "7",
  },
};

export type SiteConfig = typeof siteConfig;
