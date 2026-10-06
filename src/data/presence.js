export const globalPresenceData = {
  overviewMetrics: [
    { label: "Active Sea Corridors", value: "14", sub: "100% Monitored" },
    { label: "Forward Fleet Command", value: "142", sub: "Deployed Vessels" },
    { label: "Emergency Response", value: "< 45m", sub: "Coastal Dispatch" }
  ],
  stations: [
    {
      id: "visakhapatnam",
      region: "EASTERN SEABOARD // REGISTERED GROUP HEADQUARTERS",
      name: "Visakhapatnam Maritime Base & Group HQ",
      coords: "17.6868° N, 83.2185° E",
      desc: "Central statutory headquarters and heavy industrial engineering command directing group dry docking, calibration labs, deepwater offshore logistics, and Bay of Bengal fleet deployments.",
      specs: [
        { label: "Dry Dock Facility", value: "Graving Dock & Slipway Systems" },
        { label: "Fleet Stationed", value: "AHTS, Tugs & Workboat Flotilla" },
        { label: "Key Mandate", value: "Group Governance & Engineering" },
        { label: "Harbor Reach", value: "Visakhapatnam Outer Harbor & Gangavaram" }
      ],
      superintendent: "Capt. P. S. Rao, Master Mariner",
      phone: "+91 891 2561377",
      email: "india@mcigroup.co"
    },
    {
      id: "mumbai",
      region: "WESTERN SEABOARD HQ",
      name: "Mumbai & JNPT Maritime Base",
      coords: "18.9322° N, 72.8436° E",
      desc: "Primary naval engineering headquarters, housing central hydrographic command, heavy repair drydocks, and deep-water salvage coordination desks.",
      specs: [
        { label: "Drydock Capability", value: "Capesize & VLCC up to 320m" },
        { label: "Bollard Pull Fleet", value: "4 x 120T ASD Tugs on standby" },
        { label: "Survey Launch", value: "IHO Special Order Dual-Frequency" },
        { label: "Fairway Control", value: "Nhava Sheva & Vadhavan Approaches" }
      ],
      superintendent: "Capt. R. Deshmukh, FNI",
      phone: "+91 22 2261-0940",
      email: "ops@marinecorpindia.gov.in"
    },
    {
      id: "vizhinjam-cochin",
      region: "SOUTHERN TRANSSHIPMENT",
      name: "Vizhinjam & Cochin Station",
      coords: "8.3812° N, 76.9944° E",
      desc: "Strategic transshipment corridor direct to the Suez-Malacca oceanic trunk highway. Equipped for ultra-large container vessel escort and dredging.",
      specs: [
        { label: "Natural Channel Depth", value: "20.0m - 24.5m Draft" },
        { label: "Dredging Assets", value: "TSHD Kaveri (12,000 m³ Hopper)" },
        { label: "Escort Pilotage", value: "24,000+ TEU Megamax Certified" },
        { label: "Emergency Salvage", value: "Rapid deployment zone (12nm)" }
      ],
      superintendent: "Cmdr. K. G. Menon (Retd.)",
      phone: "+91 471 230-1880",
      email: "vizhinjam@marinecorpindia.gov.in"
    },
    {
      id: "kolkata-haldia",
      region: "BAY OF BENGAL DIVISION",
      name: "SMP Kolkata & Haldia Complex",
      coords: "22.5204° N, 88.0645° E",
      desc: "Specialized shallow-water estuary hydrography, round-the-clock navigation aid management, and continuous bar dredging on the riverine channels.",
      specs: [
        { label: "Estuary Maintenance", value: "Hooghly River Navigation Channel" },
        { label: "Active Dredging Units", value: "3 x Trailing Suction Hoppers" },
        { label: "Survey Frequency", value: "Daily Multibeam Bathymetry" },
        { label: "Towage & Mooring", value: "Riverine Berthing Assist Tugs" }
      ],
      superintendent: "Capt. A. Sengupta",
      phone: "+91 33 2230-7411",
      email: "kolkata@marinecorpindia.gov.in"
    },
    {
      id: "dubai",
      region: "GULF TRANSIT HUB",
      name: "Middle East Forward Station // Dubai",
      coords: "25.2048° N, 55.2708° E",
      desc: "Corridor liaison office providing escort planning, offshore crew transfers, safety inspections, and high-risk zone routing across Arabian Gulf fairways.",
      specs: [
        { label: "Operations Focus", value: "Hydrocarbon Tanker Escort" },
        { label: "Bunkering Oversight", value: "Fujairah & Oman Anchorage" },
        { label: "ISPS Protocol", value: "Armed Security Embarkation Support" },
        { label: "Spare Delivery", value: "Bonded Rapid Dispatch" }
      ],
      superintendent: "Capt. T. Al-Mansoori",
      phone: "+971 4 388-9100",
      email: "dubai@mcigroup.co"
    },
    {
      id: "singapore",
      region: "MALACCA APPROACHES",
      name: "Singapore & Straits Desk",
      coords: "1.3521° N, 103.8198° E",
      desc: "Coordinated fairway transits, deep-water salvage standby, and bunker quality testing for vessels crossing the Strait of Malacca towards Far East terminals.",
      specs: [
        { label: "Vessel Coverage", value: "Container, Bulk & LNG Carriers" },
        { label: "TSS Monitoring", value: "Live Marine Radar & AIS Relay" },
        { label: "Fleet Base", value: "Tuas Marine Workshop & Spares Depot" },
        { label: "Agency Service", value: "Fast Off-Port Limits (OPL) Supply" }
      ],
      superintendent: "Lin Wei-Ting, Master Mariner",
      phone: "+65 6778-4200",
      email: "singapore@mcigroup.co"
    },
    {
      id: "srilanka",
      region: "CENTRAL INDIAN OCEAN HUB",
      name: "Colombo & Galle Forward Station // Sri Lanka",
      coords: "6.9271° N, 79.8612° E",
      desc: "Round-the-clock Indian Ocean midway service center for east-west container liner services, offshore launch logistics, and salvage operations.",
      specs: [
        { label: "Transshipment Gate", value: "Port of Colombo Berth Services" },
        { label: "OPL Rendezvous", value: "Galle Bay Anchorage Fast Launch" },
        { label: "Safety Servicing", value: "Life Raft & SCBA Hydro Testing" },
        { label: "Sludge Disposal", value: "MARPOL Annex I Environmental Depot" }
      ],
      superintendent: "Capt. S. Jayawardene",
      phone: "+94 11 243-7800",
      email: "lanka@mcigroup.co"
    },
    {
      id: "russia",
      region: "NORTHERN & BALTIC REACH",
      name: "St. Petersburg & Black Sea Desk // Russia",
      coords: "59.9343° N, 30.3351° E",
      desc: "Commercial coordination and maritime documentation agency supporting trade flows through the Gulf of Finland and Novorossiysk energy export terminals.",
      specs: [
        { label: "Trade Corridors", value: "Baltic & Black Sea Marine Fairways" },
        { label: "Vessel Specialization", value: "Ice-Class Bulkers & Oil Tankers" },
        { label: "Technical Liaison", value: "RMRS Survey & Documentation" },
        { label: "Agency Coordination", value: "Bilateral Customs & Cargo Clearances" }
      ],
      superintendent: "Mikhail Voronin, Senior Agent",
      phone: "+7 812 320-1400",
      email: "russia@mcigroup.co"
    }
  ],
  corridors: [
    { name: "Strait of Malacca Transit", status: "Active Escort Tier 1", route: "Indian Ocean to South China Sea" },
    { name: "Arabian Sea Hub", status: "Nhava Sheva, Kandla & Fujairah", route: "Persian Gulf Crude Oil Gateway" },
    { name: "Bay of Bengal Channel", status: "Visakhapatnam, Paradip & Kolkata", route: "Coal & Bulk Mineral Artery" },
    { name: "Middle East Gulf Route", status: "Direct Tanker Support", route: "Strait of Hormuz to Red Sea" }
  ]
};
