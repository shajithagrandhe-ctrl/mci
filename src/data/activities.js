export const activitiesData = [
  {
    id: "port-development",
    sectorCode: "DIV-01 // INFRASTRUCTURE",
    title: "Port Development & Marine Terminal Management",
    navLabel: "Port Development & Management",
    summary: "State-backed design, dredging operations, and berth management servicing Class-A deepwater terminals, automated gantry systems, and continuous multi-modal container transfer nodes.",
    heroImage: "/assets/images/asset_4_activities_serv.jpg",
    heroAlt: "High-end commercial container port terminal at twilight with automated gantry cranes",
    metrics: [
      { label: "Annual Throughput", value: "24M TEU/yr", sub: "+14.8% YoY Berth Utilization" },
      { label: "Harbor Depth Access", value: "6 Deepwater", sub: "Up to 24,000 TEU Vessel Class" },
      { label: "Sovereign Compliance", value: "100% ISPS", sub: "Certified Supply Chain Security" },
      { label: "Operational Turnaround", value: "99.4% Berth", sub: "Sub-18 hr Avg Port Stay" }
    ],
    verifiedServices: [
      "Port Site Selection",
      "Port Feasibility Study",
      "Port Master Planning",
      "Environmental Consultancy",
      "Port & Terminal Planning and Design",
      "Port & Terminal Construction",
      "Materials Handling",
      "Shipyards Design & Construction",
      "Project Management"
    ],
    suites: [
      {
        icon: "forklift",
        title: "Automated Ship-to-Shore (STS) Cranes",
        desc: "Post-Panamax & Megamax electric STS cranes, automated rail-mounted gantry (ARMG) yards, real-time optical container OCR tracking.",
        specs: ["Outreach: 65m", "Lift Rating: 75-Tonne Twin-Lift", "Power: 100% Electrified"]
      },
      {
        icon: "dock",
        title: "Deep-Water Berthing & Liquid Cargo Jetties",
        desc: "Continuous 1,200m quay walls with reinforced quick-release bollards, pneumatic foam fender systems, and dedicated bunkering lines.",
        specs: ["Quay Draft: 16.5m – 20.5m CD", "ULCV Readiness: 24,000 TEU", "Bunkering: Dual Manifold LNG/VLSFO"]
      },
      {
        icon: "radar",
        title: "Vessel Traffic Management & Towage",
        desc: "Radar, AIS, and hydrographic real-time tidal telemetry tracking vessel movements. Flotilla of 70T–90T bollard pull Azimuth Stern Drive escort tugs.",
        specs: ["VTS Level: IALA V-103 Certified", "Escort Tugs: 85T Bollard Pull ASD", "Pilot Dispatch: 24/7 Dedicated Station"]
      },
      {
        icon: "train",
        title: "Automated Freight & Rail Connectivity",
        desc: "Direct rail-mounted container transshipment yards, customs bonded freight stations (CFS), and cold-chain reefer monitoring infrastructure.",
        specs: ["Rail Linkage: DFC Direct Spur", "Reefer Points: 2,400 Monitored Plugs", "Gate Turnaround: 15-Min Optical Gate"]
      }
    ],
    tableManifest: {
      title: "Port Infrastructure & Berth Specification Sheet",
      headers: ["Terminal Facility", "Basin / Location", "Max Draft", "Quay Length", "Gantry Equipment", "Capacity", "Status"],
      rows: [
        { c1: "Gateway West Terminal 01 // Mumbai", c2: "Offshore Basin A", c3: "16.5m", c4: "850m", c5: "6x Super Post-Panamax STS", c6: "18,000 TEU", status: "Full Capacity", statusType: "standby" },
        { c1: "Deepwater Transshipment Hub // Vizhinjam", c2: "Arabian Sea Deep Outer", c3: "20.5m", c4: "1,200m", c5: "8x Megamax Automation STS", c6: "24,000 TEU Megamax", status: "Open for Berthing", statusType: "operational" },
        { c1: "Eastern Liquid & Energy Jetty 03 // Vizag", c2: "Bay of Bengal Basin", c3: "17.8m", c4: "620m", c5: "Marine Loading Arms", c6: "VLCC 300,000 DWT", status: "Discharge in Progress", statusType: "operational" },
        { c1: "Container Terminal 02 // Ennore", c2: "Coromandel Coast", c3: "16.0m", c4: "730m", c5: "5x Post-Panamax STS", c6: "14,000 TEU Container", status: "Berthing Scheduled", statusType: "standby" },
        { c1: "Bulk & Heavy-Lift Terminal 04 // Paradip", c2: "Mahanadi Offshore Estuary", c3: "18.0m", c4: "550m", c5: "2x Automated Ship Unloaders", c6: "200,000 DWT Capesize", status: "Active Operations", statusType: "operational" }
      ]
    },
    caseStudy: {
      tag: "CAPITAL DREDGING & BERTH EXPANSION PROJECT",
      title: "Mega-Berth 03 Modernization & 20.5m Draft Deepening Campaign",
      challenge: "Seasonal siltation and surging ultra-large container traffic required immediate berth deepening to accommodate 24,000 TEU vessels without suspending ongoing container discharge.",
      solution: "MCI oversaw fast-track capital dredging and quay stabilization of a 1,200m deepwater berth in 14 months, accommodating maiden calls of 24,188 TEU ultra-large container carriers with zero downtime.",
      stats: [
        { label: "Crane Productivity", value: "38 Moves/Hr" },
        { label: "Capital Dredging Executed", value: "1.8M m³" },
        { label: "Lost Time Incidents", value: "Zero (3.2M Hrs)" }
      ]
    }
  },
  {
    id: "offshore-drilling",
    sectorCode: "DIV-02 // ENERGY FLEET",
    title: "Offshore Drilling Support & Energy Fleet Capabilities",
    navLabel: "Oil & Gas Drilling Support",
    summary: "Specialized offshore supply vessels (OSVs), Anchor Handling Tug Supply (AHTS), subsea inspection, and deep-water platform operations across critical maritime hydrocarbon basins.",
    heroImage: "/assets/images/asset_5_activities_serv.jpg",
    heroAlt: "Offshore supply vessel operating near semi-submersible platform",
    metrics: [
      { label: "Dynamic Positioning", value: "DP2 / DP3", sub: "Redundant Propulsion Fleet" },
      { label: "Active Energy Units", value: "22 Active", sub: "Commissioned Offshore Units" },
      { label: "Class Audited", value: "100%", sub: "IMCA & SOLAS Standard" },
      { label: "Standby Response", value: "24/7 Deepwater", sub: "Emergency Rescue Ready" }
    ],
    verifiedServices: [
      "Oil & Gas Drilling Support",
      "Offshore Marine Logistics",
      "Energy Fleet Coordination",
      "Platform and Vessel Support",
      "Technical Consultancy",
      "Dynamic Positioning Management"
    ],
    suites: [
      {
        icon: "oil_barrel",
        title: "Anchor Handling Tug Supply (AHTS)",
        desc: "High bollard pull (up to 180T), deep-water semi-submersible rig towage, four-point anchor laying, and heavy deck equipment dispatch.",
        specs: ["180T Continuous Bollard Pull", "Triple Drum Waterfall Winch", "FiFi-1 & FiFi-2 Firefighting"]
      },
      {
        icon: "inventory_2",
        title: "Platform Supply Vessels (PSV)",
        desc: "High-capacity bulk liquid mud, drill water, fuel oil, brine, and deck cargo operations with DP2 high-precision dynamic positioning.",
        specs: ["Up to 1,020 m² Clear Deck Area", "Dedicated Dry Bulk Tanks", "Automated Hose Handling Crane"]
      },
      {
        icon: "precision_manufacturing",
        title: "Subsea Intervention & ROV Support",
        desc: "Moonpool-equipped vessels, survey sensor suites, underwater pipeline inspections, and seabed telemetry mapping down to 3,000 meters.",
        specs: ["7.2m x 7.2m Integrated Moonpool", "Class II Work-Class ROV Hangars", "Active Heave-Compensated Cranes"]
      },
      {
        icon: "groups",
        title: "Fast Utility & Crew Transfer (CTV)",
        desc: "High-speed passenger transfer under stringent North Sea / IOGP offshore safety protocols with stabilized gangway walk-to-work systems.",
        specs: ["28-34 Knot Sprint Transit", "60-Person Business Class Seating", "Motion-Compensated Gangway"]
      }
    ],
    tableManifest: {
      title: "Technical Fleet Specification Sheet",
      headers: ["Vessel Name & Registry", "Class", "DP Rating", "Clear Deck", "Bollard Pull", "Mud Tank", "Status"],
      rows: [
        { c1: "M/V Sagar Rakshak // Mumbai", c2: "AHTS / Deepwater", c3: "DP2 (Kongsberg)", c4: "680 m²", c5: "180 MT Pull", c6: "780 m³", status: "On Charter", statusType: "operational" },
        { c1: "M/V Trishul Ocean // Kochi", c2: "Large PSV", c3: "DP2 (Converteam)", c4: "1,020 m²", c5: "4,600 DWT", c6: "1,240 m³", status: "Ready Berth", statusType: "operational" },
        { c1: "M/V Samudra Vikrant // Vizag", c2: "Subsea / ROV", c3: "DP3 (Kongsberg)", c4: "850 m²", c5: "150T AHC Crane", c6: "540 m³", status: "On Campaign", statusType: "operational" },
        { c1: "M/V Varun Express // Mangalore", c2: "Fast Crew Transfer", c3: "DP1 Joystick", c4: "140 m²", c5: "60 Pax / 32 Kts", c6: "N/A (Lube)", status: "Active Transit", statusType: "operational" },
        { c1: "M/V Sagar Kiran // Paradip", c2: "AHTS / Firefighting", c3: "DP2 (Kongsberg)", c4: "550 m²", c5: "160 MT Pull", c6: "620 m³", status: "Scheduled Docking", statusType: "standby" }
      ]
    },
    caseStudy: {
      tag: "DEEPWATER BASIN CAMPAIGN",
      title: "Krishna-Godavari Deepwater Exploration Station-Keeping & Rig Towage",
      challenge: "Executing monsoon exploration rig shifts in the Bay of Bengal amidst 6.8m swell events and sustained 45-knot tropical gusts without loss of position.",
      solution: "MCI coordinated a dedicated 5-vessel flotilla sustaining uninterrupted rig support with 0.05m DP station accuracy and zero lost-time incidents throughout the 9-month monsoon season.",
      stats: [
        { label: "Station Uptime", value: "99.88%" },
        { label: "Bulk Deck Transferred", value: "48,000 MT" },
        { label: "LTI Incident Rate", value: "Zero" }
      ]
    }
  },
  {
    id: "marine-repairs",
    sectorCode: "DIV-03 // SHIPBUILDING & YARD",
    title: "Commercial Marine Repairs & Heavy Dry Dock Engineering",
    navLabel: "Marine Repairs & Certifications",
    summary: "Full-spectrum dry dock overhauls, emergency hull fabrication, propulsion shaft alignment, and statutory special periodic surveys (SPS) for vessels up to Capesize and VLCC dimensions.",
    heroImage: "/assets/images/asset_6_activities_serv.jpg",
    heroAlt: "Commercial marine dry dock facility with commercial vessel hull undergoing maintenance",
    metrics: [
      { label: "Graving Docks", value: "4 Docks", sub: "Capesize & Suezmax Ready" },
      { label: "Vertical Lift Syncrolift", value: "12,000 T", sub: "Heavy Syncrolift Transfer" },
      { label: "Overhauls Completed", value: "350+ Units", sub: "Zero-Incident Safety Record" },
      { label: "Machining Capacity", value: "Class 1", sub: "Shaft Lathes up to 24m" }
    ],
    verifiedServices: [
      "Calibration Centre",
      "Fire Fighting & Life Saving Appliances",
      "Immersion Suit & Life Jackets",
      "Non Destructive Testing",
      "Compass Adjustment",
      "Navigational & Bridge Equipment",
      "Container Repairs & IICL Certification",
      "Reconditioning Engine Components",
      "Grab Repairs",
      "Ship Equipment & Spares"
    ],
    suites: [
      {
        icon: "build",
        title: "Heavy Hull Plating & Structural Fabrication",
        desc: "IACS Grade A and DH36 steel renewals with automated submerged arc welding. Ultrasonic thickness gauging and repairs of bulbous bow, side shell, and transom sections.",
        specs: ["AH32/DH36 High-Yield Steel", "Submerged Arc Welding", "NDT / X-Ray Weld Testing"]
      },
      {
        icon: "settings",
        title: "Propulsion Shafting, Rudder & Stern Tube",
        desc: "Laser optical alignment, shaft straightening, controllable pitch propeller (CPP) blade rebuilds, Simplex seal bonding, and precision rudder pintle boring in dry dock.",
        specs: ["Laser Optic Shaft Calibration", "Simplex & Wärtsilä Seal Overhaul", "Pintle In-Situ Boring"]
      },
      {
        icon: "water_drop",
        title: "Hydroblasting, UHP & Marine Coating",
        desc: "Automated robotic 3,000 bar ultra-high-pressure hydroblasting, advanced fouling-release silicone coatings, and IMO PSPC certified ballast tank preservation.",
        specs: ["3,000 Bar UHP Hydroblasting", "Silicone Foul-Release Coating", "IMO PSPC Ballast Compliance"]
      },
      {
        icon: "speed",
        title: "Engine Room & Mechanical Auxiliary Overhaul",
        desc: "Main engine 2-stroke/4-stroke piston and liner overhauls, high-speed turbocharger dynamic balancing, main condenser retubing, and safety valve testing.",
        specs: ["MAN / WinGD / Sulzer Overhaul", "ABB / Napier Turbocharger Bench", "Titanium Plate Exchangers"]
      }
    ],
    tableManifest: {
      title: "Yard Berth & Dry Dock Basin Schedule",
      headers: ["Dry Dock Basin ID", "Type", "Length x Breadth x Draft", "Crane Capacity", "Vessel Class", "Power Utility", "Current Status"],
      rows: [
        { c1: "Basin No. 1", c2: "Graving Dock", c3: "360m x 62m x 12.5m", c4: "2x 150T Gantry + 50T Jib", c5: "Capesize / VLCC", c6: "440V 60Hz / 380V 50Hz", status: "Occupied (Est: Nov 14)", statusType: "standby" },
        { c1: "Basin No. 2", c2: "Graving Dock", c3: "270m x 45m x 10.0m", c4: "2x 80T Level Luffing", c5: "Suezmax / Aframax", c6: "440V / Clean Shore Power", status: "Ready for Berthing", statusType: "operational" },
        { c1: "Floating Dock FD-03", c2: "Floating Dock", c3: "210m x 36m x 8.5m", c4: "2x 25T Traveling Cranes", c5: "Panamax / Tankers / OSVs", c6: "Dedicated Subsea Pumps", status: "Reserved // In Transit", statusType: "standby" },
        { c1: "Syncrolift Platform 01", c2: "Syncrolift Transfer", c3: "130m x 25m x 6.5m", c4: "4x 15T Rail Cranes", c5: "Offshore Supply / Tugs", c6: "Multi-bay Transfer Rail", status: "Active Overhaul", statusType: "operational" }
      ]
    },
    caseStudy: {
      tag: "GROUNDING REPAIR & HULL ALIGNMENT",
      title: "Emergency Ballast Tank Plating & Rudder Stock Renewal — M/T Godavari Pride",
      challenge: "115,000 DWT Aframax sustained severe bottom distortion and internal longitudinal frame buckling following shallow-water grounding in the Arabian Sea.",
      solution: "MCI mobilized emergency diving teams for pre-docking laser telemetry. Upon docking in Basin 02, technicians replaced 48 metric tons of damaged plating and re-bedded the 22-ton rudder assembly with zero defects.",
      stats: [
        { label: "Turnaround Time", value: "14 Days Laytime" },
        { label: "AH36 Steel Renewed", value: "48 MT" },
        { label: "Docking Window SLA", value: "< 18 Hours" }
      ]
    }
  },
  {
    id: "turbine-engineering",
    sectorCode: "DIV-04 // PROPULSION",
    title: "Propulsion Turbine Engineering & Machinery Overhaul",
    navLabel: "Turbine Repairs & Engineering",
    summary: "Precision dynamic balancing, high-pressure steam and gas marine turbine overhaul, reduction gear diagnostics, and auxiliary propulsion system remanufacturing to OEM tolerances.",
    heroImage: "/assets/images/asset_7_activities_serv.jpg",
    heroAlt: "Precision industrial propulsion turbine maintenance and mechanical shaft assembly",
    metrics: [
      { label: "Precision Machining", value: "±0.01 mm", sub: "Sub-Micron Laser Telemetry" },
      { label: "Dynamic Balancing Rig", value: "45 Tonne", sub: "Accommodating 14m LOA Rotors" },
      { label: "Engines & Turbines", value: "2,400+ Units", sub: "Overhauled Across Fleet" },
      { label: "Fly-Out Squad SLA", value: "< 72 Hours", sub: "Global Onboard Deployment" }
    ],
    verifiedServices: [
      "Dynamic Balancing",
      "Motor Rewinding",
      "Reconditioning Engine Components",
      "Refrigeration & Air Conditioning",
      "Marine Machinery Overhaul",
      "Reduction Gear Diagnostics"
    ],
    suites: [
      {
        icon: "settings",
        title: "Marine Gas & Steam Turbine Overhaul",
        desc: "Full blading renewal & root slot wire-EDM, shroud band peening, labyrinth steam gland sealing replacement, and rotor thermal deflection straightening.",
        specs: ["Wire-EDM Root Machining", "Thermal Deflection Straightening", "API 612 / DIN 3962 Class 4"]
      },
      {
        icon: "precision_manufacturing",
        title: "Main Reduction Gearbox Diagnostics",
        desc: "Epicyclic & double-helical gear train profiling, contact tooth pattern and dye penetrant analysis, acoustic vibration spectrum FFT logging, and journal bearing babbiting.",
        specs: ["AGMA 6011 / ISO 1328 Rating", "FFT Vibration Analysis", "White Metal Babbit Centrifugal Cast"]
      },
      {
        icon: "speed",
        title: "Turbocharger Dynamic Balancing",
        desc: "ABB, MAN, Napier & Mitsubishi cartridge overhauls, ultrasonic cleaning & hydro-testing of housings, rotor balancing at operational speeds up to 45,000 RPM.",
        specs: ["Speeds up to 45,000 RPM", "OEM Class A Certified", "Gas Inlet Casing Micro-Restoration"]
      },
      {
        icon: "sync",
        title: "Shaft Line Auxiliary & Thrusters",
        desc: "Controllable pitch propeller hydraulic oil distribution hub rebuilds, bow thruster right-angle bevel gearboxes, steering gear ram actuators, and Simplex stern tube seals.",
        specs: ["SOLAS II-1 Reg 29 Compliant", "Right-Angle Bevel Gearing", "Stern Tube Seal Re-Bonding"]
      }
    ],
    tableManifest: {
      title: "Heavy Machinery Workshop & Test Bench Specification Sheet",
      headers: ["Workshop Bay / Rig", "Technical Specification", "Maximum Capacity", "Precision / Tolerance", "Live Status"],
      rows: [
        { c1: "Bay 01 // Schenck Dynamic Balancer", c2: "Multi-plane dynamic rotor balancing", c3: "45 Tonnes // 14,000mm LOA // 3,200mm Dia", c4: "ISO 1940 Grade G1.0 / G2.5", status: "Active / On Test", statusType: "operational" },
        { c1: "Bay 02 // Horizontal Lathe & Grinder", c2: "Heavy shaft turning, journal superfinishing", c3: "60 Tonnes // 18,000mm Bed // 2,400mm Swing", c4: "Runout: 0.005mm TIR", status: "Available / Standby", statusType: "operational" },
        { c1: "Bay 03 // 5-Axis CNC Blading Center", c2: "Subtractive manufacture of turbine blades", c3: "5,000mm x 3,000mm Travel // Inconel & Ti", c4: "Positional: +0.003mm", status: "In Operation", statusType: "operational" },
        { c1: "Bay 04 // Hydraulic Load Absorption Dyno", c2: "Post-overhaul full endurance test runs", c3: "Up to 25,000 kW (33,500 HP) Continuous", c4: "Class Witnessed Telemetry", status: "Calibrated / Ready", statusType: "operational" },
        { c1: "Bay 05 // In-Situ Line Boring Laser Rig", c2: "Portable on-board engine block & stern tube", c3: "Bore Diameters 150mm - 1,800mm", c4: "Laser Collimation 0.01mm/10m", status: "Deployed Offshore", statusType: "standby" }
      ]
    },
    caseStudy: {
      tag: "OFFSHORE RAPID RESPONSE",
      title: "Emergency LP Steam Turbine Re-Blading & Rotor Trueing — LNG Carrier Dishari",
      challenge: "Foreign object damage to row 4-7 low-pressure rotor blades during high-seas transit resulted in 9.4 mm/s vibration tripping automated shutdown outside Mumbai port limits.",
      solution: "MCI mobilized workshop emergency team: 3D laser-scanned blade root geometry, precision CNC-machined 142 replacement 12Cr stainless blades, and dynamically balanced rotor in 9 days, saving client $1.4M off-hire.",
      stats: [
        { label: "Workshop Turnaround", value: "9 Days Total" },
        { label: "Final Residual Vibration", value: "0.08 mm/s" },
        { label: "Class Sign-Off", value: "100% (DNV & IRS)" }
      ]
    }
  },
  {
    id: "marine-surveys",
    sectorCode: "DIV-05 // STATUTORY AUDIT",
    title: "Marine Surveys, Inspections & Statutory Compliance",
    navLabel: "Marine Surveys & Inspections",
    summary: "Independent non-destructive testing (NDT), ultrasonic thickness measurement (UTM), pre-purchase condition surveys, flag state audits, and statutory SOLAS/MARPOL compliance certifications.",
    heroImage: "/assets/images/asset_8_activities_serv.jpg",
    heroAlt: "Certified marine surveyor in safety gear inspecting commercial vessel hull structure",
    metrics: [
      { label: "Annual Survey Volume", value: "4,800+", sub: "Commercial & Defense Vessels" },
      { label: "Rapid Mobilization", value: "< 24 Hours", sub: "Emergency Surveyor Dispatch" },
      { label: "Regulatory Acceptance", value: "100%", sub: "Full IACS & Flag Delegation" },
      { label: "Measurement Accuracy", value: "±0.05 mm", sub: "Class-Approved Level II NDT" }
    ],
    verifiedServices: [
      "Marine Chartering",
      "Marine Inspections",
      "Gas Free Inspections",
      "Non Destructive Testing",
      "Compass Adjustment",
      "Safety Equipment Checks",
      "Statutory Flag Audits"
    ],
    suites: [
      {
        icon: "fact_check",
        title: "Statutory & Flag State Surveys",
        desc: "Full delegated authority audits under SOLAS (Safety Construction, Safety Equipment, Safety Radio), MARPOL Annexes I-VI, Load Line, and ISM/ISPS codes.",
        specs: ["SOLAS / MARPOL Accredited", "ISM / ISPS Code Certification", "MLC 2006 Labor Protocols"]
      },
      {
        icon: "search_check",
        title: "Hull Structural & NDT Diagnostics",
        desc: "Ultrasonic Thickness Measurement (UTM), Close-up Enhanced Survey Programme (ESP) ballast tank evaluations, Magnetic Particle Testing (MPI), and Dye Penetrant.",
        specs: ["UTM Ultrasonic Gauging", "Phased Array Ultrasonic (PAUT)", "Rope-Access Class Climbers"]
      },
      {
        icon: "settings_input_component",
        title: "Marine Engineering & Machinery Audits",
        desc: "Propulsion crankshaft deflection logging, auxiliary boiler safety valve popping certification, insulation megger verification, and emergency steering gear fail-safe trials.",
        specs: ["Crankshaft Deflection Benchmarks", "Megger Insulation Testing", "Blackout Fail-Safe Proofing"]
      },
      {
        icon: "assignment",
        title: "Pre-Purchase & Condition Surveys",
        desc: "Condition Assessment Programme (CAP) indexing, Remaining On Board (ROB) bunker discrepancy audits, lay-up reactivation certification, and Marine Warranty Surveying (MWS).",
        specs: ["CAP Indexing Level 1/2", "Marine Warranty Survey (MWS)", "BIMCO Standard Templates"]
      }
    ],
    tableManifest: {
      title: "Live Statutory Survey Schedule & Vessel Inspection Manifest",
      headers: ["Vessel Name & IMO", "Audit Category", "Survey Scope / Methodology", "Classification / Registry", "Compliance Status", "Auditor Squad"],
      rows: [
        { c1: "M/V Bharat Jyoti // 9741029", c2: "Special Survey No. 3", c3: "Close-up ESP Tank Survey & UTM", c4: "IRS / DNV GL", status: "Active / In Progress", statusType: "operational" },
        { c1: "M/T Malabar Dawn // 9508112", c2: "Statutory Renewal", c3: "SOLAS Safety Equipment & Radio", c4: "Lloyd's Register", status: "Class Endorsed", statusType: "operational" },
        { c1: "M/V Ocean Pioneer // 9321453", c2: "Pre-Purchase Condition", c3: "Hull CAP Rating & Machinery Trial", c4: "ABS Approved", status: "Report Finalizing", statusType: "standby" },
        { c1: "Barge Sagar Setu // 8912340", c2: "Marine Warranty (MWS)", c3: "Heavy Lift Loadout & Sea Fastening", c4: "Bureau Veritas", status: "Approved for Transit", statusType: "operational" },
        { c1: "M/T Godavari Pride // 9655820", c2: "Damage Condition Survey", c3: "Post-Grounding Bottom Plating NDT", c4: "IRS / ClassNK", status: "Under Attestation", statusType: "standby" }
      ]
    },
    caseStudy: {
      tag: "EMERGENCY FLAG-STATE INTERVENTION",
      title: "Fast-Track Intermediate Survey & Ultrasonic Re-Certification — M/V Dravida Pearl",
      challenge: "Port State Control (PSC) detention warning issued at Visakhapatnam Outer Anchorage due to reported structural pitting exceeding 30% in ballast tank #3 and auxiliary electrical trip faults.",
      solution: "MCI flying squad mobilized in under 6 hours with 3D laser ultrasonic scanning rigs. Performed in-situ weld verification and direct digital submission to Flag Administration, clearing PSC deficiencies in 36 hours.",
      stats: [
        { label: "Resolution Speed", value: "36 Hours Total" },
        { label: "Off-Hire Penalties Avoided", value: "$180,000" },
        { label: "Class Attestation", value: "100% Cleared" }
      ]
    }
  },
  {
    id: "green-technologies",
    sectorCode: "DIV-06 // DECARBONIZATION",
    title: "Maritime Green Technologies & Vessel Decarbonization",
    navLabel: "Green Technologies & Environment",
    summary: "Comprehensive low-carbon marine solutions: IMO CII/EEXI rating optimization, shore-to-ship cold ironing grid integration, scrubbers and selective catalytic reduction (SCR), and dual-fuel retrofits.",
    heroImage: "/assets/images/asset_9_activities_serv.jpg",
    heroAlt: "Clean industrial engineering of maritime green technologies and eco-efficient machinery",
    metrics: [
      { label: "CO2e Reduction", value: "-35%", sub: "Average Vessel Lifecycle Intensity" },
      { label: "Vessels Retrofitted", value: "120+", sub: "Commercial Carriers & Tugs" },
      { label: "IMO MEPC Clearance", value: "100%", sub: "MARPOL Annex VI Ratified" },
      { label: "Cold Ironing Grid", value: "18.5 MW", sub: "High-Voltage Shore Power" }
    ],
    verifiedServices: [
      "Oily Water Separator",
      "Environmental Consultancy",
      "Green Technologies",
      "Marine Equipment Support",
      "Technical Advisory",
      "Ballast Water Management Systems"
    ],
    suites: [
      {
        icon: "local_gas_station",
        title: "Alternative Fuels & Dual-Fuel Conversions",
        desc: "Methanol, LNG, and green ammonia fuel delivery piping systems designed to withstand cryogenic parameters with double-walled IGF-code compliant manifolds.",
        specs: ["Cryogenic Fuel Tank Insulation", "Double-Walled IGF Manifolds", "Autonomous Gas Leak Detection"]
      },
      {
        icon: "filter_alt",
        title: "Exhaust Gas Abatement & Carbon Capture (OCCS)",
        desc: "Hybrid and closed-loop SOx wet scrubbers, Selective Catalytic Reduction (SCR) for IMO Tier III compliance, and cryogenic CO2 liquefaction.",
        specs: ["Modular Onboard Carbon Capture", "Cryogenic CO2 Liquefaction", "Zero-Discharge Washwater Systems"]
      },
      {
        icon: "air",
        title: "Wind-Assisted Propulsion & Clean Hydrodynamics",
        desc: "Flettner rotor sails, suction wings, and rigid wingsails paired with microscopic drag reduction coatings and Mewis Duct energy saving devices.",
        specs: ["Rotor Sail Foundation Engineering", "Air Lubrication Systems (ALS)", "Mewis Duct & PBCP Propeller Boss"]
      },
      {
        icon: "bolt",
        title: "High-Voltage Shore Connection & Microgrids",
        desc: "IEC/IEEE 80005-1 high-voltage shore connection (HVSC) panels, automated cable management, and solid-state Battery Energy Storage Systems (BESS).",
        specs: ["Zero Auxiliary Engine Emissions", "Solid-State BESS Battery Systems", "Hybrid Peak-Shaving Technology"]
      }
    ],
    tableManifest: {
      title: "Vessel Decarbonization & Fleet Energy Efficiency Manifest",
      headers: ["Vessel Name & IMO", "Retrofit Architecture", "Baseline CII", "Target CII", "Annual CO2 Savings", "Workshop Status"],
      rows: [
        { c1: "M/V Ganga Fortune // 9842109", c2: "Rotor Sails (2x 24m) & Waste Heat Recovery", c3: "Rating D (Moderate)", c4: "Rating A (High Performance)", c5: "4,200 MT CO2/yr", status: "Active Retrofit (Kochi)", statusType: "operational" },
        { c1: "M/T Narmada Star // 9520114", c2: "Dual-Fuel Methanol Ready & Scrubber", c3: "Rating E (Non-Compliant)", c4: "Rating B (Compliant)", c5: "3,150 MT CO2/yr", status: "Sea Trials & Gas Cleared", statusType: "operational" },
        { c1: "M/V Kanyakumari // 9611430", c2: "Air Lubrication System (ALS) & Mewis Duct", c3: "Rating C (Borderline)", c4: "Rating B (Comfortable)", c5: "2,800 MT CO2/yr", status: "Engineering Sign-off", statusType: "operational" },
        { c1: "Tug Samudra Veer // 9931021", c2: "Fully Electric Hybrid BESS (2.4 MWh)", c3: "Non-rated Harbor Tug", c4: "Zero-Port Emission", c5: "920 MT CO2/yr", status: "Commissioned & Active", statusType: "operational" },
        { c1: "M/V Indian Ocean // 9703890", c2: "Sub-cooler Reliquefaction & Shaft Generator", c3: "Rating C (Baseline)", c4: "Rating A (Class Leader)", c5: "5,600 MT CO2/yr", status: "Class Verification (DNV)", statusType: "operational" }
      ]
    },
    caseStudy: {
      tag: "AFRAMAX MODERNIZATION CAMPAIGN",
      title: "Rapid CII Rating Elevation & Hybrid Clean Retrofit — M/T Sindhu Ratna",
      challenge: "105,000 DWT tanker faced imminent IMO Carbon Intensity Indicator Category E downgrade, risking commercial off-charter in European trading zones.",
      solution: "MCI green engineering deployed turnkey package: in-situ hydrodynamic propeller boss cap fins, silicone foul-release hull coating during dry dock, and variable frequency drive cooling pumps, completing in 32 days.",
      stats: [
        { label: "Turnaround Time", value: "32 Days Total" },
        { label: "Hydrodynamic Fuel Savings", value: "-21.8% Fuel Burn" },
        { label: "New Attestation", value: "Category B Certified" }
      ]
    }
  },
  {
    id: "ship-design",
    sectorCode: "DIV-07 // NAVAL ARCHITECTURE",
    title: "Ship Design, Naval Architecture & Marine Engineering",
    navLabel: "Yachts & Workboats Design",
    summary: "End-to-end commercial vessel design, computational fluid dynamics (CFD) hull hydrodynamics, structural FEA simulation, class-approved production engineering, and conversion design.",
    heroImage: "/assets/images/asset_21_ship_design_nav.jpg",
    heroAlt: "Commercial container vessel cutting through deep navy blue choppy ocean waters",
    metrics: [
      { label: "Vessel Designs", value: "380+ Hull", sub: "Tankers, Bulkers & Workboats" },
      { label: "Class Approval", value: "99.8%", sub: "First-Pass Verification" },
      { label: "HPC Computing", value: "3.2M+ Cores", sub: "High-Fidelity FEA / CFD Clusters" },
      { label: "Hydrodynamic SLA", value: "< 14 Days", sub: "Feasibility Simulation Models" }
    ],
    verifiedServices: [
      "Yachts & Workboats",
      "Shipyards Design & Construction",
      "Port & Terminal Planning and Design",
      "Marine Engineering Advisory",
      "Project Management",
      "Naval Architecture & Hydrodynamics"
    ],
    suites: [
      {
        icon: "architecture",
        title: "Hull Form Optimization & CFD",
        desc: "Parametric hull morphing, bulbous bow tuning, wave-making resistance minimization, propeller wakefield interaction modeling, and IMO EEDI/EEXI power-speed curves.",
        specs: ["Adjoint Solver Algorithms", "Trim Tables Optimization", "Wake Cavitation Modeling"]
      },
      {
        icon: "grid_4x4",
        title: "FEA & Scantling Calculation",
        desc: "IACS Common Structural Rules (CSR-H) calculations, global hull girder longitudinal bending strength, spectral fatigue life cycle assessments, and bow-flare slamming reinforcement.",
        specs: ["CSR-H Verified Code", "Fatigue Cycle Simulation", "ANSYS Mechanical Integration"]
      },
      {
        icon: "balance",
        title: "Damage & Intact Stability",
        desc: "Deterministic & probabilistic damage stability under SOLAS 2020, probabilistic flooding simulations, Grain Code, MODU stability booklets, and live incline experiment certification.",
        specs: ["SOLAS 2020 Probabilistic Rules", "Incline Experiment Trials", "NAPA Stability Certified"]
      },
      {
        icon: "view_in_ar",
        title: "Production 3D Nesting & Digital Twin",
        desc: "Class-approved shipyard structural fabrication drawings, 3D piping spool isometric models, CNC cutting plate nesting, and laser-scanned retrofit digital twins.",
        specs: ["CNC Nesting Optimization", "Spool Isometrics Generation", "AVEVA Marine Compatibility"]
      }
    ],
    tableManifest: {
      title: "Live Naval Architecture Project Registry & Design Manifest",
      headers: ["Project Code & Vessel Class", "Design Discipline / Hull Type", "Displacement / Capacity", "Efficiency Gain", "Classification Society", "Design Stage & Status"],
      rows: [
        { c1: "MCI-NB-7201 // Chemical Tanker", c2: "Dual-Fuel Methanol Ready // Double Hull", c3: "14,200 m³", c4: "+15.2% Hull Hydro", c5: "IRS (India)", status: "Active Detail Engineering", statusType: "operational" },
        { c1: "MCI-NB-4480 // Escort ASD Tug", c2: "Azimuth Stern Drive // High Escort Braking", c3: "85T Bollard Pull", c4: "+11.4% Dynamic Steering", c5: "DNV GL", status: "Class Approved / Yard Build", statusType: "operational" },
        { c1: "MCI-CV-9102 // Capesize Bulker", c2: "Rotor Sail Aerodynamic Deck Retrofit", c3: "205,000 MT Displ.", c4: "-18.5% CII Energy Index", c5: "Lloyd's Register", status: "CFD Validation & Clearance", statusType: "operational" },
        { c1: "MCI-NB-6310 // OSV Supply", c2: "Offshore Support / FiFi-1 / Oil Recovery", c3: "3,400 DWT", c4: "DP Cap A Approved", c5: "ABS", status: "Sea Trial Hydrostatic Testing", statusType: "operational" },
        { c1: "MCI-DS-1055 // TSHD Dredger", c2: "Custom Shallow-Draft River-Sea Hull", c3: "8,200 MT Displ.", c4: "Low Silt Drag Profile", c5: "Bureau Veritas", status: "Concept Design & Towing Tank", statusType: "standby" }
      ]
    },
    caseStudy: {
      tag: "BASIN AUDIT & HYDRODYNAMIC BREAKTHROUGH",
      title: "Next-Gen 8,500 TEU Green Methanol Container Carrier — Hull Optimization",
      challenge: "Traditional wide-beam container hulls suffer high wave-making resistance at 18-20 knot operating speeds, leading to excessive fuel consumption and challenging EEDI Phase 3 compliance.",
      solution: "MCI deployed 250+ automated parametric CFD iterations using adjoint solver algorithms to re-contour the bulbous bow and stern flow skegs, optimizing propeller inflow uniformity.",
      stats: [
        { label: "Delivered Power", value: "-13.4% Pe" },
        { label: "EEDI Phase 3 Exceeded", value: "+34.2% Margin" },
        { label: "Steel Weight Saved", value: "120 Tonnes" }
      ]
    }
  },
  {
    id: "dredging",
    sectorCode: "DIV-08 // CAPITAL DREDGING",
    title: "Sovereign Capital Dredging & Marine Civil Infrastructure",
    navLabel: "Dredging & Port Construction",
    summary: "Large-scale capital & maintenance dredging, deep navigation channel deepening, island & port land reclamation, coastal revetment armoring, and subsea trenching executed by sovereign dredging fleet.",
    heroImage: "/assets/images/asset_14_dredging_marine.jpg",
    heroAlt: "A massive modern trailing suction hopper dredger operating in deep ocean approach channel",
    metrics: [
      { label: "Annual Excavation", value: "85M+ m³", sub: "Capital & Maintenance Volumes" },
      { label: "Dredge & Survey Fleet", value: "35+ Vessels", sub: "TSHDs, CSDs, Grab Dredgers" },
      { label: "Max Channel Depth", value: "-35.0m CD", sub: "Accommodating Capesize Drafts" },
      { label: "Mobilization SLA", value: "< 48 Hours", sub: "Siltation Rapid Response" }
    ],
    verifiedServices: [
      "Import & Export",
      "Coal Imports",
      "Materials Handling",
      "Port & Terminal Construction",
      "Marine Infrastructure Coordination",
      "Capital & Maintenance Dredging"
    ],
    suites: [
      {
        icon: "waves",
        title: "Trailing Suction Hopper Dredging (TSHD)",
        desc: "Long-distance trailing suction, continuous dredging in high-swell offshore fairways, bottom dumping and rainbowing reclamation for deep-draft container harbors.",
        specs: ["Twin 1,000mm Suction Pipes", "Integrated 3D Real-Time Bathymetry", "Self-Discharge Bow Coupling"]
      },
      {
        icon: "architecture",
        title: "Heavy Cutter Suction & Hard Stratum Breaking",
        desc: "High-torque cutter head dredging in calcified basalt, sandstone, and hard seabed formations without explosive blasting. Subsea pipeline pre-trenching.",
        specs: ["4,500 kW Heavy Rock Cutter Head", "Zero-Blast Eco Excavation", "Spud Carriage for 4-Knot Currents"]
      },
      {
        icon: "domain",
        title: "Port Land Reclamation & Breakwater Armoring",
        desc: "Geotextile containment bunding, hydraulic sand filling, vibroflotation ground improvement, tetrapod/accropode armor placement for deepwater harbor protection.",
        specs: ["Geosynthetic Bund Construction", "250 kPa Post-Reclamation Bearing", "GPS-Guided 40T Crane Placement"]
      },
      {
        icon: "radar",
        title: "Multibeam Bathymetry & Seabed Telemetry",
        desc: "High-resolution multibeam echo sounding (MBES), sub-bottom acoustic profiling, side-scan sonar silt migration monitoring, and real-time nautical chart drafting.",
        specs: ["Dual-Head 400 kHz Multibeam Sonar", "0.02m Vertical Sounding Accuracy", "CARIS HIPS/SIPS Processing"]
      }
    ],
    tableManifest: {
      title: "Live Dredging Operations, Channel Deepening & Fleet Manifest",
      headers: ["Project Code & Sector", "Dredge Architecture / Vessel", "Dredge Volume / Target", "Production Rate & Slurry", "Statutory Authority / Class", "Operational Status"],
      rows: [
        { c1: "MCI-DR-8401 // JNPT Approach", c2: "TSHD Samudra Vikram (12,500 m³ Hopper)", c3: "4.8M m³ (Target: -16.5m CD)", c4: "4,200 m³/hr (1.48 t/m³ Slurry)", c5: "JNPA / IRS Class", status: "Active Capital Dredging", statusType: "operational" },
        { c1: "MCI-CS-3340 // Vadhavan Port Basin", c2: "CSD Vajra Shakti (4,500 kW Heavy Cutter)", c3: "2.2M m³ Basalt (Target: -20.0m CD)", c4: "1,850 m³/hr (High-Density Slurry)", c5: "MoPSW / DNV GL", status: "Hard Rock Excavation", statusType: "operational" },
        { c1: "MCI-RC-5520 // Vizhinjam Transshipment", c2: "Class Barge CB-04 & Hopper", c3: "2.1M m³ Silt (Reclamation Bund Fill)", c4: "Vibroflotation Ground Consolidation", c5: "Vizhinjam Port / IRS", status: "Armoring & Bund Construction", statusType: "operational" },
        { c1: "MCI-MN-1105 // Hooghly River Channel", c2: "TSHD Ganga Rakshak (4,500 m³ Shallow Draft)", c3: "1.9M m³ Silt Sweep (Target: -8.2m CD)", c4: "3,100 m³/hr (Continuous Silt Sweep)", c5: "SMP Kolkata / BV", status: "Continuous Maintenance", statusType: "operational" },
        { c1: "MCI-HY-9042 // Gulf of Khambhat", c2: "RV Sagarnidhi (Hydrographic Catamaran)", c3: "94 km Corridor (Sub-Bottom Profiling)", c4: "High-Res 0.05m Mesh Silt Mapping", c5: "IHO / Indian Navy NHO", status: "Pre-Dredge Survey Active", statusType: "operational" }
      ]
    },
    caseStudy: {
      tag: "NATIONAL MARITIME CORRIDOR 01",
      title: "Sovereign Maritime Deepening Breakthrough // Jawaharlal Nehru Port Fairway Elevation",
      challenge: "Heavy seasonal monsoon siltation reduced JNPT container vessel access to tidal windows, risking off-hire demurrage for ultra-large 20,000+ TEU container vessels.",
      solution: "Deployed twin mega-TSHDs with dynamic trailing dragheads and real-time RTK-GNSS seabed profiling, operating continuously in adverse sea states to excavate 4.8M m³ of consolidated silt and hard clay within 90 days.",
      stats: [
        { label: "Draft Unlocked", value: "-17.5m CD" },
        { label: "Execution Speed", value: "90 Days (-18 Ahead)" },
        { label: "Excavated Mass", value: "4.8M m³" }
      ]
    }
  }
];

export const auxiliaryActivities = [
  {
    id: "gas-detectors",
    icon: "gas_meter",
    title: "Gas Detectors & Multi-Gas Monitoring",
    desc: "Fixed and portable multi-gas telemetry detection systems, sensor calibration bench tests, and ATEX/IECEx intrinsically safe instrumentation.",
    cert: "ATEX Zone 0 Certified",
    tag: "Inventory On Hand"
  },
  {
    id: "scba-safety",
    icon: "masks",
    title: "SCBA & Emergency Escape Apparatus",
    desc: "Self-Contained Breathing Apparatus (SCBA) inspections, EEBA refill compressions, hydrostatic bottle pressure testing under SOLAS Chapter II-2.",
    cert: "SOLAS Ch. II-2 Reg 10",
    tag: "300 Bar Hydro Cert"
  },
  {
    id: "spares-supply",
    icon: "inventory",
    title: "Marine Spare Parts & Global Distribution",
    desc: "Global bonded warehousing for critical auxiliary machinery, centrifugal separator spares, gasket sets, and emergency air-freight consignments.",
    cert: "OEM Direct Supply",
    tag: "24h Bonded Transit"
  },
  {
    id: "chartering",
    icon: "directions_boat",
    title: "Commercial Chartering & Brokering",
    desc: "Voyage and time-charter fixtures for bulk carriers, product tankers, tug flotillas, and ocean-going heavy transport barges.",
    cert: "BIMCO Standard Form",
    tag: "Worldwide Fixtures"
  },
  {
    id: "training",
    icon: "school",
    title: "Maritime Technical Training Institutes",
    desc: "DGS and STCW compliant cadet navigation simulation, engine room resource management (ERM), and high-voltage switchboard certification.",
    cert: "STCW 2010 Manila Amdt",
    tag: "Class A Simulators"
  },
  {
    id: "audit-accreditations",
    icon: "verified_user",
    title: "Comprehensive Audit Accreditations",
    desc: "Direct liaison with DNV, Lloyd's Register, Bureau Veritas, ClassNK, and Indian Register of Shipping (IRS).",
    cert: "Full IACS Recognition",
    tag: "Audited & Certified"
  }
];
