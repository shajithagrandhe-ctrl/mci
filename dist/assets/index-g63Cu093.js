(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const v=[{id:"port-development",sectorCode:"DIV-01 // INFRASTRUCTURE",title:"Port Development & Marine Terminal Management",navLabel:"Port Development & Management",summary:"State-backed design, dredging operations, and berth management servicing Class-A deepwater terminals, automated gantry systems, and continuous multi-modal container transfer nodes.",heroImage:"/assets/images/asset_4_activities_serv.jpg",heroAlt:"High-end commercial container port terminal at twilight with automated gantry cranes",metrics:[{label:"Annual Throughput",value:"24M TEU/yr",sub:"+14.8% YoY Berth Utilization"},{label:"Harbor Depth Access",value:"6 Deepwater",sub:"Up to 24,000 TEU Vessel Class"},{label:"Sovereign Compliance",value:"100% ISPS",sub:"Certified Supply Chain Security"},{label:"Operational Turnaround",value:"99.4% Berth",sub:"Sub-18 hr Avg Port Stay"}],verifiedServices:["Port Site Selection","Port Feasibility Study","Port Master Planning","Environmental Consultancy","Port & Terminal Planning and Design","Port & Terminal Construction","Materials Handling","Shipyards Design & Construction","Project Management"],suites:[{icon:"forklift",title:"Automated Ship-to-Shore (STS) Cranes",desc:"Post-Panamax & Megamax electric STS cranes, automated rail-mounted gantry (ARMG) yards, real-time optical container OCR tracking.",specs:["Outreach: 65m","Lift Rating: 75-Tonne Twin-Lift","Power: 100% Electrified"]},{icon:"dock",title:"Deep-Water Berthing & Liquid Cargo Jetties",desc:"Continuous 1,200m quay walls with reinforced quick-release bollards, pneumatic foam fender systems, and dedicated bunkering lines.",specs:["Quay Draft: 16.5m – 20.5m CD","ULCV Readiness: 24,000 TEU","Bunkering: Dual Manifold LNG/VLSFO"]},{icon:"radar",title:"Vessel Traffic Management & Towage",desc:"Radar, AIS, and hydrographic real-time tidal telemetry tracking vessel movements. Flotilla of 70T–90T bollard pull Azimuth Stern Drive escort tugs.",specs:["VTS Level: IALA V-103 Certified","Escort Tugs: 85T Bollard Pull ASD","Pilot Dispatch: 24/7 Dedicated Station"]},{icon:"train",title:"Automated Freight & Rail Connectivity",desc:"Direct rail-mounted container transshipment yards, customs bonded freight stations (CFS), and cold-chain reefer monitoring infrastructure.",specs:["Rail Linkage: DFC Direct Spur","Reefer Points: 2,400 Monitored Plugs","Gate Turnaround: 15-Min Optical Gate"]}],tableManifest:{title:"Port Infrastructure & Berth Specification Sheet",headers:["Terminal Facility","Basin / Location","Max Draft","Quay Length","Gantry Equipment","Capacity","Status"],rows:[{c1:"Gateway West Terminal 01 // Mumbai",c2:"Offshore Basin A",c3:"16.5m",c4:"850m",c5:"6x Super Post-Panamax STS",c6:"18,000 TEU",status:"Full Capacity",statusType:"standby"},{c1:"Deepwater Transshipment Hub // Vizhinjam",c2:"Arabian Sea Deep Outer",c3:"20.5m",c4:"1,200m",c5:"8x Megamax Automation STS",c6:"24,000 TEU Megamax",status:"Open for Berthing",statusType:"operational"},{c1:"Eastern Liquid & Energy Jetty 03 // Vizag",c2:"Bay of Bengal Basin",c3:"17.8m",c4:"620m",c5:"Marine Loading Arms",c6:"VLCC 300,000 DWT",status:"Discharge in Progress",statusType:"operational"},{c1:"Container Terminal 02 // Ennore",c2:"Coromandel Coast",c3:"16.0m",c4:"730m",c5:"5x Post-Panamax STS",c6:"14,000 TEU Container",status:"Berthing Scheduled",statusType:"standby"},{c1:"Bulk & Heavy-Lift Terminal 04 // Paradip",c2:"Mahanadi Offshore Estuary",c3:"18.0m",c4:"550m",c5:"2x Automated Ship Unloaders",c6:"200,000 DWT Capesize",status:"Active Operations",statusType:"operational"}]},caseStudy:{tag:"CAPITAL DREDGING & BERTH EXPANSION PROJECT",title:"Mega-Berth 03 Modernization & 20.5m Draft Deepening Campaign",challenge:"Seasonal siltation and surging ultra-large container traffic required immediate berth deepening to accommodate 24,000 TEU vessels without suspending ongoing container discharge.",solution:"MCI oversaw fast-track capital dredging and quay stabilization of a 1,200m deepwater berth in 14 months, accommodating maiden calls of 24,188 TEU ultra-large container carriers with zero downtime.",stats:[{label:"Crane Productivity",value:"38 Moves/Hr"},{label:"Capital Dredging Executed",value:"1.8M m³"},{label:"Lost Time Incidents",value:"Zero (3.2M Hrs)"}]}},{id:"offshore-drilling",sectorCode:"DIV-02 // ENERGY FLEET",title:"Offshore Drilling Support & Energy Fleet Capabilities",navLabel:"Oil & Gas Drilling Support",summary:"Specialized offshore supply vessels (OSVs), Anchor Handling Tug Supply (AHTS), subsea inspection, and deep-water platform operations across critical maritime hydrocarbon basins.",heroImage:"/assets/images/asset_5_activities_serv.jpg",heroAlt:"Offshore supply vessel operating near semi-submersible platform",metrics:[{label:"Dynamic Positioning",value:"DP2 / DP3",sub:"Redundant Propulsion Fleet"},{label:"Active Energy Units",value:"22 Active",sub:"Commissioned Offshore Units"},{label:"Class Audited",value:"100%",sub:"IMCA & SOLAS Standard"},{label:"Standby Response",value:"24/7 Deepwater",sub:"Emergency Rescue Ready"}],verifiedServices:["Oil & Gas Drilling Support","Offshore Marine Logistics","Energy Fleet Coordination","Platform and Vessel Support","Technical Consultancy","Dynamic Positioning Management"],suites:[{icon:"oil_barrel",title:"Anchor Handling Tug Supply (AHTS)",desc:"High bollard pull (up to 180T), deep-water semi-submersible rig towage, four-point anchor laying, and heavy deck equipment dispatch.",specs:["180T Continuous Bollard Pull","Triple Drum Waterfall Winch","FiFi-1 & FiFi-2 Firefighting"]},{icon:"inventory_2",title:"Platform Supply Vessels (PSV)",desc:"High-capacity bulk liquid mud, drill water, fuel oil, brine, and deck cargo operations with DP2 high-precision dynamic positioning.",specs:["Up to 1,020 m² Clear Deck Area","Dedicated Dry Bulk Tanks","Automated Hose Handling Crane"]},{icon:"precision_manufacturing",title:"Subsea Intervention & ROV Support",desc:"Moonpool-equipped vessels, survey sensor suites, underwater pipeline inspections, and seabed telemetry mapping down to 3,000 meters.",specs:["7.2m x 7.2m Integrated Moonpool","Class II Work-Class ROV Hangars","Active Heave-Compensated Cranes"]},{icon:"groups",title:"Fast Utility & Crew Transfer (CTV)",desc:"High-speed passenger transfer under stringent North Sea / IOGP offshore safety protocols with stabilized gangway walk-to-work systems.",specs:["28-34 Knot Sprint Transit","60-Person Business Class Seating","Motion-Compensated Gangway"]}],tableManifest:{title:"Technical Fleet Specification Sheet",headers:["Vessel Name & Registry","Class","DP Rating","Clear Deck","Bollard Pull","Mud Tank","Status"],rows:[{c1:"M/V Sagar Rakshak // Mumbai",c2:"AHTS / Deepwater",c3:"DP2 (Kongsberg)",c4:"680 m²",c5:"180 MT Pull",c6:"780 m³",status:"On Charter",statusType:"operational"},{c1:"M/V Trishul Ocean // Kochi",c2:"Large PSV",c3:"DP2 (Converteam)",c4:"1,020 m²",c5:"4,600 DWT",c6:"1,240 m³",status:"Ready Berth",statusType:"operational"},{c1:"M/V Samudra Vikrant // Vizag",c2:"Subsea / ROV",c3:"DP3 (Kongsberg)",c4:"850 m²",c5:"150T AHC Crane",c6:"540 m³",status:"On Campaign",statusType:"operational"},{c1:"M/V Varun Express // Mangalore",c2:"Fast Crew Transfer",c3:"DP1 Joystick",c4:"140 m²",c5:"60 Pax / 32 Kts",c6:"N/A (Lube)",status:"Active Transit",statusType:"operational"},{c1:"M/V Sagar Kiran // Paradip",c2:"AHTS / Firefighting",c3:"DP2 (Kongsberg)",c4:"550 m²",c5:"160 MT Pull",c6:"620 m³",status:"Scheduled Docking",statusType:"standby"}]},caseStudy:{tag:"DEEPWATER BASIN CAMPAIGN",title:"Krishna-Godavari Deepwater Exploration Station-Keeping & Rig Towage",challenge:"Executing monsoon exploration rig shifts in the Bay of Bengal amidst 6.8m swell events and sustained 45-knot tropical gusts without loss of position.",solution:"MCI coordinated a dedicated 5-vessel flotilla sustaining uninterrupted rig support with 0.05m DP station accuracy and zero lost-time incidents throughout the 9-month monsoon season.",stats:[{label:"Station Uptime",value:"99.88%"},{label:"Bulk Deck Transferred",value:"48,000 MT"},{label:"LTI Incident Rate",value:"Zero"}]}},{id:"marine-repairs",sectorCode:"DIV-03 // SHIPBUILDING & YARD",title:"Commercial Marine Repairs & Heavy Dry Dock Engineering",navLabel:"Marine Repairs & Certifications",summary:"Full-spectrum dry dock overhauls, emergency hull fabrication, propulsion shaft alignment, and statutory special periodic surveys (SPS) for vessels up to Capesize and VLCC dimensions.",heroImage:"/assets/images/asset_6_activities_serv.jpg",heroAlt:"Commercial marine dry dock facility with commercial vessel hull undergoing maintenance",metrics:[{label:"Graving Docks",value:"4 Docks",sub:"Capesize & Suezmax Ready"},{label:"Vertical Lift Syncrolift",value:"12,000 T",sub:"Heavy Syncrolift Transfer"},{label:"Overhauls Completed",value:"350+ Units",sub:"Zero-Incident Safety Record"},{label:"Machining Capacity",value:"Class 1",sub:"Shaft Lathes up to 24m"}],verifiedServices:["Calibration Centre","Fire Fighting & Life Saving Appliances","Immersion Suit & Life Jackets","Non Destructive Testing","Compass Adjustment","Navigational & Bridge Equipment","Container Repairs & IICL Certification","Reconditioning Engine Components","Grab Repairs","Ship Equipment & Spares"],suites:[{icon:"build",title:"Heavy Hull Plating & Structural Fabrication",desc:"IACS Grade A and DH36 steel renewals with automated submerged arc welding. Ultrasonic thickness gauging and repairs of bulbous bow, side shell, and transom sections.",specs:["AH32/DH36 High-Yield Steel","Submerged Arc Welding","NDT / X-Ray Weld Testing"]},{icon:"settings",title:"Propulsion Shafting, Rudder & Stern Tube",desc:"Laser optical alignment, shaft straightening, controllable pitch propeller (CPP) blade rebuilds, Simplex seal bonding, and precision rudder pintle boring in dry dock.",specs:["Laser Optic Shaft Calibration","Simplex & Wärtsilä Seal Overhaul","Pintle In-Situ Boring"]},{icon:"water_drop",title:"Hydroblasting, UHP & Marine Coating",desc:"Automated robotic 3,000 bar ultra-high-pressure hydroblasting, advanced fouling-release silicone coatings, and IMO PSPC certified ballast tank preservation.",specs:["3,000 Bar UHP Hydroblasting","Silicone Foul-Release Coating","IMO PSPC Ballast Compliance"]},{icon:"speed",title:"Engine Room & Mechanical Auxiliary Overhaul",desc:"Main engine 2-stroke/4-stroke piston and liner overhauls, high-speed turbocharger dynamic balancing, main condenser retubing, and safety valve testing.",specs:["MAN / WinGD / Sulzer Overhaul","ABB / Napier Turbocharger Bench","Titanium Plate Exchangers"]}],tableManifest:{title:"Yard Berth & Dry Dock Basin Schedule",headers:["Dry Dock Basin ID","Type","Length x Breadth x Draft","Crane Capacity","Vessel Class","Power Utility","Current Status"],rows:[{c1:"Basin No. 1",c2:"Graving Dock",c3:"360m x 62m x 12.5m",c4:"2x 150T Gantry + 50T Jib",c5:"Capesize / VLCC",c6:"440V 60Hz / 380V 50Hz",status:"Occupied (Est: Nov 14)",statusType:"standby"},{c1:"Basin No. 2",c2:"Graving Dock",c3:"270m x 45m x 10.0m",c4:"2x 80T Level Luffing",c5:"Suezmax / Aframax",c6:"440V / Clean Shore Power",status:"Ready for Berthing",statusType:"operational"},{c1:"Floating Dock FD-03",c2:"Floating Dock",c3:"210m x 36m x 8.5m",c4:"2x 25T Traveling Cranes",c5:"Panamax / Tankers / OSVs",c6:"Dedicated Subsea Pumps",status:"Reserved // In Transit",statusType:"standby"},{c1:"Syncrolift Platform 01",c2:"Syncrolift Transfer",c3:"130m x 25m x 6.5m",c4:"4x 15T Rail Cranes",c5:"Offshore Supply / Tugs",c6:"Multi-bay Transfer Rail",status:"Active Overhaul",statusType:"operational"}]},caseStudy:{tag:"GROUNDING REPAIR & HULL ALIGNMENT",title:"Emergency Ballast Tank Plating & Rudder Stock Renewal — M/T Godavari Pride",challenge:"115,000 DWT Aframax sustained severe bottom distortion and internal longitudinal frame buckling following shallow-water grounding in the Arabian Sea.",solution:"MCI mobilized emergency diving teams for pre-docking laser telemetry. Upon docking in Basin 02, technicians replaced 48 metric tons of damaged plating and re-bedded the 22-ton rudder assembly with zero defects.",stats:[{label:"Turnaround Time",value:"14 Days Laytime"},{label:"AH36 Steel Renewed",value:"48 MT"},{label:"Docking Window SLA",value:"< 18 Hours"}]}},{id:"turbine-engineering",sectorCode:"DIV-04 // PROPULSION",title:"Propulsion Turbine Engineering & Machinery Overhaul",navLabel:"Turbine Repairs & Engineering",summary:"Precision dynamic balancing, high-pressure steam and gas marine turbine overhaul, reduction gear diagnostics, and auxiliary propulsion system remanufacturing to OEM tolerances.",heroImage:"/assets/images/asset_7_activities_serv.jpg",heroAlt:"Precision industrial propulsion turbine maintenance and mechanical shaft assembly",metrics:[{label:"Precision Machining",value:"±0.01 mm",sub:"Sub-Micron Laser Telemetry"},{label:"Dynamic Balancing Rig",value:"45 Tonne",sub:"Accommodating 14m LOA Rotors"},{label:"Engines & Turbines",value:"2,400+ Units",sub:"Overhauled Across Fleet"},{label:"Fly-Out Squad SLA",value:"< 72 Hours",sub:"Global Onboard Deployment"}],verifiedServices:["Dynamic Balancing","Motor Rewinding","Reconditioning Engine Components","Refrigeration & Air Conditioning","Marine Machinery Overhaul","Reduction Gear Diagnostics"],suites:[{icon:"settings",title:"Marine Gas & Steam Turbine Overhaul",desc:"Full blading renewal & root slot wire-EDM, shroud band peening, labyrinth steam gland sealing replacement, and rotor thermal deflection straightening.",specs:["Wire-EDM Root Machining","Thermal Deflection Straightening","API 612 / DIN 3962 Class 4"]},{icon:"precision_manufacturing",title:"Main Reduction Gearbox Diagnostics",desc:"Epicyclic & double-helical gear train profiling, contact tooth pattern and dye penetrant analysis, acoustic vibration spectrum FFT logging, and journal bearing babbiting.",specs:["AGMA 6011 / ISO 1328 Rating","FFT Vibration Analysis","White Metal Babbit Centrifugal Cast"]},{icon:"speed",title:"Turbocharger Dynamic Balancing",desc:"ABB, MAN, Napier & Mitsubishi cartridge overhauls, ultrasonic cleaning & hydro-testing of housings, rotor balancing at operational speeds up to 45,000 RPM.",specs:["Speeds up to 45,000 RPM","OEM Class A Certified","Gas Inlet Casing Micro-Restoration"]},{icon:"sync",title:"Shaft Line Auxiliary & Thrusters",desc:"Controllable pitch propeller hydraulic oil distribution hub rebuilds, bow thruster right-angle bevel gearboxes, steering gear ram actuators, and Simplex stern tube seals.",specs:["SOLAS II-1 Reg 29 Compliant","Right-Angle Bevel Gearing","Stern Tube Seal Re-Bonding"]}],tableManifest:{title:"Heavy Machinery Workshop & Test Bench Specification Sheet",headers:["Workshop Bay / Rig","Technical Specification","Maximum Capacity","Precision / Tolerance","Live Status"],rows:[{c1:"Bay 01 // Schenck Dynamic Balancer",c2:"Multi-plane dynamic rotor balancing",c3:"45 Tonnes // 14,000mm LOA // 3,200mm Dia",c4:"ISO 1940 Grade G1.0 / G2.5",status:"Active / On Test",statusType:"operational"},{c1:"Bay 02 // Horizontal Lathe & Grinder",c2:"Heavy shaft turning, journal superfinishing",c3:"60 Tonnes // 18,000mm Bed // 2,400mm Swing",c4:"Runout: 0.005mm TIR",status:"Available / Standby",statusType:"operational"},{c1:"Bay 03 // 5-Axis CNC Blading Center",c2:"Subtractive manufacture of turbine blades",c3:"5,000mm x 3,000mm Travel // Inconel & Ti",c4:"Positional: +0.003mm",status:"In Operation",statusType:"operational"},{c1:"Bay 04 // Hydraulic Load Absorption Dyno",c2:"Post-overhaul full endurance test runs",c3:"Up to 25,000 kW (33,500 HP) Continuous",c4:"Class Witnessed Telemetry",status:"Calibrated / Ready",statusType:"operational"},{c1:"Bay 05 // In-Situ Line Boring Laser Rig",c2:"Portable on-board engine block & stern tube",c3:"Bore Diameters 150mm - 1,800mm",c4:"Laser Collimation 0.01mm/10m",status:"Deployed Offshore",statusType:"standby"}]},caseStudy:{tag:"OFFSHORE RAPID RESPONSE",title:"Emergency LP Steam Turbine Re-Blading & Rotor Trueing — LNG Carrier Dishari",challenge:"Foreign object damage to row 4-7 low-pressure rotor blades during high-seas transit resulted in 9.4 mm/s vibration tripping automated shutdown outside Mumbai port limits.",solution:"MCI mobilized workshop emergency team: 3D laser-scanned blade root geometry, precision CNC-machined 142 replacement 12Cr stainless blades, and dynamically balanced rotor in 9 days, saving client $1.4M off-hire.",stats:[{label:"Workshop Turnaround",value:"9 Days Total"},{label:"Final Residual Vibration",value:"0.08 mm/s"},{label:"Class Sign-Off",value:"100% (DNV & IRS)"}]}},{id:"marine-surveys",sectorCode:"DIV-05 // STATUTORY AUDIT",title:"Marine Surveys, Inspections & Statutory Compliance",navLabel:"Marine Surveys & Inspections",summary:"Independent non-destructive testing (NDT), ultrasonic thickness measurement (UTM), pre-purchase condition surveys, flag state audits, and statutory SOLAS/MARPOL compliance certifications.",heroImage:"/assets/images/asset_8_activities_serv.jpg",heroAlt:"Certified marine surveyor in safety gear inspecting commercial vessel hull structure",metrics:[{label:"Annual Survey Volume",value:"4,800+",sub:"Commercial & Defense Vessels"},{label:"Rapid Mobilization",value:"< 24 Hours",sub:"Emergency Surveyor Dispatch"},{label:"Regulatory Acceptance",value:"100%",sub:"Full IACS & Flag Delegation"},{label:"Measurement Accuracy",value:"±0.05 mm",sub:"Class-Approved Level II NDT"}],verifiedServices:["Marine Chartering","Marine Inspections","Gas Free Inspections","Non Destructive Testing","Compass Adjustment","Safety Equipment Checks","Statutory Flag Audits"],suites:[{icon:"fact_check",title:"Statutory & Flag State Surveys",desc:"Full delegated authority audits under SOLAS (Safety Construction, Safety Equipment, Safety Radio), MARPOL Annexes I-VI, Load Line, and ISM/ISPS codes.",specs:["SOLAS / MARPOL Accredited","ISM / ISPS Code Certification","MLC 2006 Labor Protocols"]},{icon:"search_check",title:"Hull Structural & NDT Diagnostics",desc:"Ultrasonic Thickness Measurement (UTM), Close-up Enhanced Survey Programme (ESP) ballast tank evaluations, Magnetic Particle Testing (MPI), and Dye Penetrant.",specs:["UTM Ultrasonic Gauging","Phased Array Ultrasonic (PAUT)","Rope-Access Class Climbers"]},{icon:"settings_input_component",title:"Marine Engineering & Machinery Audits",desc:"Propulsion crankshaft deflection logging, auxiliary boiler safety valve popping certification, insulation megger verification, and emergency steering gear fail-safe trials.",specs:["Crankshaft Deflection Benchmarks","Megger Insulation Testing","Blackout Fail-Safe Proofing"]},{icon:"assignment",title:"Pre-Purchase & Condition Surveys",desc:"Condition Assessment Programme (CAP) indexing, Remaining On Board (ROB) bunker discrepancy audits, lay-up reactivation certification, and Marine Warranty Surveying (MWS).",specs:["CAP Indexing Level 1/2","Marine Warranty Survey (MWS)","BIMCO Standard Templates"]}],tableManifest:{title:"Live Statutory Survey Schedule & Vessel Inspection Manifest",headers:["Vessel Name & IMO","Audit Category","Survey Scope / Methodology","Classification / Registry","Compliance Status","Auditor Squad"],rows:[{c1:"M/V Bharat Jyoti // 9741029",c2:"Special Survey No. 3",c3:"Close-up ESP Tank Survey & UTM",c4:"IRS / DNV GL",status:"Active / In Progress",statusType:"operational"},{c1:"M/T Malabar Dawn // 9508112",c2:"Statutory Renewal",c3:"SOLAS Safety Equipment & Radio",c4:"Lloyd's Register",status:"Class Endorsed",statusType:"operational"},{c1:"M/V Ocean Pioneer // 9321453",c2:"Pre-Purchase Condition",c3:"Hull CAP Rating & Machinery Trial",c4:"ABS Approved",status:"Report Finalizing",statusType:"standby"},{c1:"Barge Sagar Setu // 8912340",c2:"Marine Warranty (MWS)",c3:"Heavy Lift Loadout & Sea Fastening",c4:"Bureau Veritas",status:"Approved for Transit",statusType:"operational"},{c1:"M/T Godavari Pride // 9655820",c2:"Damage Condition Survey",c3:"Post-Grounding Bottom Plating NDT",c4:"IRS / ClassNK",status:"Under Attestation",statusType:"standby"}]},caseStudy:{tag:"EMERGENCY FLAG-STATE INTERVENTION",title:"Fast-Track Intermediate Survey & Ultrasonic Re-Certification — M/V Dravida Pearl",challenge:"Port State Control (PSC) detention warning issued at Visakhapatnam Outer Anchorage due to reported structural pitting exceeding 30% in ballast tank #3 and auxiliary electrical trip faults.",solution:"MCI flying squad mobilized in under 6 hours with 3D laser ultrasonic scanning rigs. Performed in-situ weld verification and direct digital submission to Flag Administration, clearing PSC deficiencies in 36 hours.",stats:[{label:"Resolution Speed",value:"36 Hours Total"},{label:"Off-Hire Penalties Avoided",value:"$180,000"},{label:"Class Attestation",value:"100% Cleared"}]}},{id:"green-technologies",sectorCode:"DIV-06 // DECARBONIZATION",title:"Maritime Green Technologies & Vessel Decarbonization",navLabel:"Green Technologies & Environment",summary:"Comprehensive low-carbon marine solutions: IMO CII/EEXI rating optimization, shore-to-ship cold ironing grid integration, scrubbers and selective catalytic reduction (SCR), and dual-fuel retrofits.",heroImage:"/assets/images/asset_9_activities_serv.jpg",heroAlt:"Clean industrial engineering of maritime green technologies and eco-efficient machinery",metrics:[{label:"CO2e Reduction",value:"-35%",sub:"Average Vessel Lifecycle Intensity"},{label:"Vessels Retrofitted",value:"120+",sub:"Commercial Carriers & Tugs"},{label:"IMO MEPC Clearance",value:"100%",sub:"MARPOL Annex VI Ratified"},{label:"Cold Ironing Grid",value:"18.5 MW",sub:"High-Voltage Shore Power"}],verifiedServices:["Oily Water Separator","Environmental Consultancy","Green Technologies","Marine Equipment Support","Technical Advisory","Ballast Water Management Systems"],suites:[{icon:"local_gas_station",title:"Alternative Fuels & Dual-Fuel Conversions",desc:"Methanol, LNG, and green ammonia fuel delivery piping systems designed to withstand cryogenic parameters with double-walled IGF-code compliant manifolds.",specs:["Cryogenic Fuel Tank Insulation","Double-Walled IGF Manifolds","Autonomous Gas Leak Detection"]},{icon:"filter_alt",title:"Exhaust Gas Abatement & Carbon Capture (OCCS)",desc:"Hybrid and closed-loop SOx wet scrubbers, Selective Catalytic Reduction (SCR) for IMO Tier III compliance, and cryogenic CO2 liquefaction.",specs:["Modular Onboard Carbon Capture","Cryogenic CO2 Liquefaction","Zero-Discharge Washwater Systems"]},{icon:"air",title:"Wind-Assisted Propulsion & Clean Hydrodynamics",desc:"Flettner rotor sails, suction wings, and rigid wingsails paired with microscopic drag reduction coatings and Mewis Duct energy saving devices.",specs:["Rotor Sail Foundation Engineering","Air Lubrication Systems (ALS)","Mewis Duct & PBCP Propeller Boss"]},{icon:"bolt",title:"High-Voltage Shore Connection & Microgrids",desc:"IEC/IEEE 80005-1 high-voltage shore connection (HVSC) panels, automated cable management, and solid-state Battery Energy Storage Systems (BESS).",specs:["Zero Auxiliary Engine Emissions","Solid-State BESS Battery Systems","Hybrid Peak-Shaving Technology"]}],tableManifest:{title:"Vessel Decarbonization & Fleet Energy Efficiency Manifest",headers:["Vessel Name & IMO","Retrofit Architecture","Baseline CII","Target CII","Annual CO2 Savings","Workshop Status"],rows:[{c1:"M/V Ganga Fortune // 9842109",c2:"Rotor Sails (2x 24m) & Waste Heat Recovery",c3:"Rating D (Moderate)",c4:"Rating A (High Performance)",c5:"4,200 MT CO2/yr",status:"Active Retrofit (Kochi)",statusType:"operational"},{c1:"M/T Narmada Star // 9520114",c2:"Dual-Fuel Methanol Ready & Scrubber",c3:"Rating E (Non-Compliant)",c4:"Rating B (Compliant)",c5:"3,150 MT CO2/yr",status:"Sea Trials & Gas Cleared",statusType:"operational"},{c1:"M/V Kanyakumari // 9611430",c2:"Air Lubrication System (ALS) & Mewis Duct",c3:"Rating C (Borderline)",c4:"Rating B (Comfortable)",c5:"2,800 MT CO2/yr",status:"Engineering Sign-off",statusType:"operational"},{c1:"Tug Samudra Veer // 9931021",c2:"Fully Electric Hybrid BESS (2.4 MWh)",c3:"Non-rated Harbor Tug",c4:"Zero-Port Emission",c5:"920 MT CO2/yr",status:"Commissioned & Active",statusType:"operational"},{c1:"M/V Indian Ocean // 9703890",c2:"Sub-cooler Reliquefaction & Shaft Generator",c3:"Rating C (Baseline)",c4:"Rating A (Class Leader)",c5:"5,600 MT CO2/yr",status:"Class Verification (DNV)",statusType:"operational"}]},caseStudy:{tag:"AFRAMAX MODERNIZATION CAMPAIGN",title:"Rapid CII Rating Elevation & Hybrid Clean Retrofit — M/T Sindhu Ratna",challenge:"105,000 DWT tanker faced imminent IMO Carbon Intensity Indicator Category E downgrade, risking commercial off-charter in European trading zones.",solution:"MCI green engineering deployed turnkey package: in-situ hydrodynamic propeller boss cap fins, silicone foul-release hull coating during dry dock, and variable frequency drive cooling pumps, completing in 32 days.",stats:[{label:"Turnaround Time",value:"32 Days Total"},{label:"Hydrodynamic Fuel Savings",value:"-21.8% Fuel Burn"},{label:"New Attestation",value:"Category B Certified"}]}},{id:"ship-design",sectorCode:"DIV-07 // NAVAL ARCHITECTURE",title:"Ship Design, Naval Architecture & Marine Engineering",navLabel:"Yachts & Workboats Design",summary:"End-to-end commercial vessel design, computational fluid dynamics (CFD) hull hydrodynamics, structural FEA simulation, class-approved production engineering, and conversion design.",heroImage:"/assets/images/asset_21_ship_design_nav.jpg",heroAlt:"Commercial container vessel cutting through deep navy blue choppy ocean waters",metrics:[{label:"Vessel Designs",value:"380+ Hull",sub:"Tankers, Bulkers & Workboats"},{label:"Class Approval",value:"99.8%",sub:"First-Pass Verification"},{label:"HPC Computing",value:"3.2M+ Cores",sub:"High-Fidelity FEA / CFD Clusters"},{label:"Hydrodynamic SLA",value:"< 14 Days",sub:"Feasibility Simulation Models"}],verifiedServices:["Yachts & Workboats","Shipyards Design & Construction","Port & Terminal Planning and Design","Marine Engineering Advisory","Project Management","Naval Architecture & Hydrodynamics"],suites:[{icon:"architecture",title:"Hull Form Optimization & CFD",desc:"Parametric hull morphing, bulbous bow tuning, wave-making resistance minimization, propeller wakefield interaction modeling, and IMO EEDI/EEXI power-speed curves.",specs:["Adjoint Solver Algorithms","Trim Tables Optimization","Wake Cavitation Modeling"]},{icon:"grid_4x4",title:"FEA & Scantling Calculation",desc:"IACS Common Structural Rules (CSR-H) calculations, global hull girder longitudinal bending strength, spectral fatigue life cycle assessments, and bow-flare slamming reinforcement.",specs:["CSR-H Verified Code","Fatigue Cycle Simulation","ANSYS Mechanical Integration"]},{icon:"balance",title:"Damage & Intact Stability",desc:"Deterministic & probabilistic damage stability under SOLAS 2020, probabilistic flooding simulations, Grain Code, MODU stability booklets, and live incline experiment certification.",specs:["SOLAS 2020 Probabilistic Rules","Incline Experiment Trials","NAPA Stability Certified"]},{icon:"view_in_ar",title:"Production 3D Nesting & Digital Twin",desc:"Class-approved shipyard structural fabrication drawings, 3D piping spool isometric models, CNC cutting plate nesting, and laser-scanned retrofit digital twins.",specs:["CNC Nesting Optimization","Spool Isometrics Generation","AVEVA Marine Compatibility"]}],tableManifest:{title:"Live Naval Architecture Project Registry & Design Manifest",headers:["Project Code & Vessel Class","Design Discipline / Hull Type","Displacement / Capacity","Efficiency Gain","Classification Society","Design Stage & Status"],rows:[{c1:"MCI-NB-7201 // Chemical Tanker",c2:"Dual-Fuel Methanol Ready // Double Hull",c3:"14,200 m³",c4:"+15.2% Hull Hydro",c5:"IRS (India)",status:"Active Detail Engineering",statusType:"operational"},{c1:"MCI-NB-4480 // Escort ASD Tug",c2:"Azimuth Stern Drive // High Escort Braking",c3:"85T Bollard Pull",c4:"+11.4% Dynamic Steering",c5:"DNV GL",status:"Class Approved / Yard Build",statusType:"operational"},{c1:"MCI-CV-9102 // Capesize Bulker",c2:"Rotor Sail Aerodynamic Deck Retrofit",c3:"205,000 MT Displ.",c4:"-18.5% CII Energy Index",c5:"Lloyd's Register",status:"CFD Validation & Clearance",statusType:"operational"},{c1:"MCI-NB-6310 // OSV Supply",c2:"Offshore Support / FiFi-1 / Oil Recovery",c3:"3,400 DWT",c4:"DP Cap A Approved",c5:"ABS",status:"Sea Trial Hydrostatic Testing",statusType:"operational"},{c1:"MCI-DS-1055 // TSHD Dredger",c2:"Custom Shallow-Draft River-Sea Hull",c3:"8,200 MT Displ.",c4:"Low Silt Drag Profile",c5:"Bureau Veritas",status:"Concept Design & Towing Tank",statusType:"standby"}]},caseStudy:{tag:"BASIN AUDIT & HYDRODYNAMIC BREAKTHROUGH",title:"Next-Gen 8,500 TEU Green Methanol Container Carrier — Hull Optimization",challenge:"Traditional wide-beam container hulls suffer high wave-making resistance at 18-20 knot operating speeds, leading to excessive fuel consumption and challenging EEDI Phase 3 compliance.",solution:"MCI deployed 250+ automated parametric CFD iterations using adjoint solver algorithms to re-contour the bulbous bow and stern flow skegs, optimizing propeller inflow uniformity.",stats:[{label:"Delivered Power",value:"-13.4% Pe"},{label:"EEDI Phase 3 Exceeded",value:"+34.2% Margin"},{label:"Steel Weight Saved",value:"120 Tonnes"}]}},{id:"dredging",sectorCode:"DIV-08 // CAPITAL DREDGING",title:"Sovereign Capital Dredging & Marine Civil Infrastructure",navLabel:"Dredging & Port Construction",summary:"Large-scale capital & maintenance dredging, deep navigation channel deepening, island & port land reclamation, coastal revetment armoring, and subsea trenching executed by sovereign dredging fleet.",heroImage:"/assets/images/asset_14_dredging_marine.jpg",heroAlt:"A massive modern trailing suction hopper dredger operating in deep ocean approach channel",metrics:[{label:"Annual Excavation",value:"85M+ m³",sub:"Capital & Maintenance Volumes"},{label:"Dredge & Survey Fleet",value:"35+ Vessels",sub:"TSHDs, CSDs, Grab Dredgers"},{label:"Max Channel Depth",value:"-35.0m CD",sub:"Accommodating Capesize Drafts"},{label:"Mobilization SLA",value:"< 48 Hours",sub:"Siltation Rapid Response"}],verifiedServices:["Import & Export","Coal Imports","Materials Handling","Port & Terminal Construction","Marine Infrastructure Coordination","Capital & Maintenance Dredging"],suites:[{icon:"waves",title:"Trailing Suction Hopper Dredging (TSHD)",desc:"Long-distance trailing suction, continuous dredging in high-swell offshore fairways, bottom dumping and rainbowing reclamation for deep-draft container harbors.",specs:["Twin 1,000mm Suction Pipes","Integrated 3D Real-Time Bathymetry","Self-Discharge Bow Coupling"]},{icon:"architecture",title:"Heavy Cutter Suction & Hard Stratum Breaking",desc:"High-torque cutter head dredging in calcified basalt, sandstone, and hard seabed formations without explosive blasting. Subsea pipeline pre-trenching.",specs:["4,500 kW Heavy Rock Cutter Head","Zero-Blast Eco Excavation","Spud Carriage for 4-Knot Currents"]},{icon:"domain",title:"Port Land Reclamation & Breakwater Armoring",desc:"Geotextile containment bunding, hydraulic sand filling, vibroflotation ground improvement, tetrapod/accropode armor placement for deepwater harbor protection.",specs:["Geosynthetic Bund Construction","250 kPa Post-Reclamation Bearing","GPS-Guided 40T Crane Placement"]},{icon:"radar",title:"Multibeam Bathymetry & Seabed Telemetry",desc:"High-resolution multibeam echo sounding (MBES), sub-bottom acoustic profiling, side-scan sonar silt migration monitoring, and real-time nautical chart drafting.",specs:["Dual-Head 400 kHz Multibeam Sonar","0.02m Vertical Sounding Accuracy","CARIS HIPS/SIPS Processing"]}],tableManifest:{title:"Live Dredging Operations, Channel Deepening & Fleet Manifest",headers:["Project Code & Sector","Dredge Architecture / Vessel","Dredge Volume / Target","Production Rate & Slurry","Statutory Authority / Class","Operational Status"],rows:[{c1:"MCI-DR-8401 // JNPT Approach",c2:"TSHD Samudra Vikram (12,500 m³ Hopper)",c3:"4.8M m³ (Target: -16.5m CD)",c4:"4,200 m³/hr (1.48 t/m³ Slurry)",c5:"JNPA / IRS Class",status:"Active Capital Dredging",statusType:"operational"},{c1:"MCI-CS-3340 // Vadhavan Port Basin",c2:"CSD Vajra Shakti (4,500 kW Heavy Cutter)",c3:"2.2M m³ Basalt (Target: -20.0m CD)",c4:"1,850 m³/hr (High-Density Slurry)",c5:"MoPSW / DNV GL",status:"Hard Rock Excavation",statusType:"operational"},{c1:"MCI-RC-5520 // Vizhinjam Transshipment",c2:"Class Barge CB-04 & Hopper",c3:"2.1M m³ Silt (Reclamation Bund Fill)",c4:"Vibroflotation Ground Consolidation",c5:"Vizhinjam Port / IRS",status:"Armoring & Bund Construction",statusType:"operational"},{c1:"MCI-MN-1105 // Hooghly River Channel",c2:"TSHD Ganga Rakshak (4,500 m³ Shallow Draft)",c3:"1.9M m³ Silt Sweep (Target: -8.2m CD)",c4:"3,100 m³/hr (Continuous Silt Sweep)",c5:"SMP Kolkata / BV",status:"Continuous Maintenance",statusType:"operational"},{c1:"MCI-HY-9042 // Gulf of Khambhat",c2:"RV Sagarnidhi (Hydrographic Catamaran)",c3:"94 km Corridor (Sub-Bottom Profiling)",c4:"High-Res 0.05m Mesh Silt Mapping",c5:"IHO / Indian Navy NHO",status:"Pre-Dredge Survey Active",statusType:"operational"}]},caseStudy:{tag:"NATIONAL MARITIME CORRIDOR 01",title:"Sovereign Maritime Deepening Breakthrough // Jawaharlal Nehru Port Fairway Elevation",challenge:"Heavy seasonal monsoon siltation reduced JNPT container vessel access to tidal windows, risking off-hire demurrage for ultra-large 20,000+ TEU container vessels.",solution:"Deployed twin mega-TSHDs with dynamic trailing dragheads and real-time RTK-GNSS seabed profiling, operating continuously in adverse sea states to excavate 4.8M m³ of consolidated silt and hard clay within 90 days.",stats:[{label:"Draft Unlocked",value:"-17.5m CD"},{label:"Execution Speed",value:"90 Days (-18 Ahead)"},{label:"Excavated Mass",value:"4.8M m³"}]}}];function k(){return`
    <div class="mega-menu" id="activities-mega-menu" role="region" aria-label="Activities Mega Menu">
      <div class="container mega-inner">
        <div class="mega-sidebar">
          <div>
            <span class="mega-sidebar-title">Engineering Verticals</span>
            <h3 class="mega-sidebar-heading">Sovereign Industrial Capabilities</h3>
            <p class="mega-sidebar-desc">
              Explore MCI's eight specialized marine engineering, deep-draft infrastructure, and fleet operations divisions.
            </p>
          </div>
          <div style="margin-top: 1.5rem;">
            <a href="/activities" class="btn btn-secondary btn-sm" data-nav-link>
              <span>Browse Full Directory</span>
              <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="mega-grid">
          ${v.map(e=>`
            <a href="/activities/${e.id}" class="mega-item" data-nav-link>
              <div class="mega-item-icon">
                <span class="material-symbols-outlined">${R(e.id)}</span>
              </div>
              <div class="mega-item-info">
                <h4>${e.navLabel||e.title}</h4>
                <p>${e.summary.slice(0,80)}...</p>
              </div>
            </a>
          `).join("")}
        </div>
      </div>
    </div>
  `}function R(e){return{"port-development":"forklift","offshore-drilling":"oil_barrel","marine-repairs":"build","turbine-engineering":"settings","marine-surveys":"fact_check","green-technologies":"eco","ship-design":"architecture",dredging:"waves"}[e]||"anchor"}function O(e){const a=e.startsWith("/activities");return`
    <header class="site-header" id="main-header">
      <!-- Main Navigation Strip -->
      <div class="container header-main">
        <!-- Brand Identity with Official Logo -->
        <a href="/" class="brand-anchor" data-nav-link aria-label="Marine Corporation of India Home">
          <img src="/assets/mci-logo-transparent.png" alt="Marine Corporation of India Logo" class="brand-logo-img" />
          <div class="brand-text-block">
            <span class="brand-name">MCI</span>
            <span class="brand-subtext">Sovereign Infrastructure &amp; Maritime Fleet</span>
          </div>
        </a>

        <!-- Desktop Navigation Bar -->
        <nav class="nav-desktop" aria-label="Main Navigation">
          <a href="/" class="nav-link ${e==="/"?"active":""}" data-nav-link>Home</a>
          <a href="/about" class="nav-link ${e==="/about"?"active":""}" data-nav-link>About</a>
          
          <div class="nav-has-mega">
            <a href="/activities" class="nav-link ${a?"active":""}" data-nav-link id="nav-activities-trigger">
              Activities
            </a>
            ${k()}
          </div>

          <a href="/group" class="nav-link ${e==="/group"?"active":""}" data-nav-link>Group</a>
          <a href="/global-presence" class="nav-link ${e==="/global-presence"?"active":""}" data-nav-link>Global Presence</a>
          <a href="/investor-relations" class="nav-link ${e==="/investor-relations"?"active":""}" data-nav-link>Investor Relations</a>
          <a href="/contact" class="nav-link ${e==="/contact"?"active":""}" data-nav-link>Contact</a>
        </nav>

        <!-- Right Quick Actions -->
        <div class="header-actions">
          <!-- Mobile Hamburger Toggle -->
          <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="drawer-scrim" id="drawer-scrim"></div>
      <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div class="mobile-drawer-header">
          <div class="brand-anchor">
            <img src="/assets/mci-logo-transparent.png" alt="MCI Logo" style="height: 38px;" />
            <div class="brand-text-block">
              <span class="brand-name" style="font-size: 0.9rem;">MCI</span>
              <span class="brand-subtext" style="font-size: 0.6rem;">Group of Companies</span>
            </div>
          </div>
          <button type="button" class="btn btn-sm" id="close-drawer" aria-label="Close Navigation" style="padding: 4px;">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav class="mobile-nav-list">
          <a href="/" class="mobile-nav-link ${e==="/"?"active":""}" data-nav-link>
            <span>Home</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/about" class="mobile-nav-link ${e==="/about"?"active":""}" data-nav-link>
            <span>About</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          
          <div>
            <div class="mobile-nav-link" id="mobile-activities-toggle" style="cursor: pointer;">
              <span>Activities</span>
              <span class="material-symbols-outlined" id="mobile-acc-arrow" style="font-size: 18px;">expand_more</span>
            </div>
            <div class="mobile-activities-accordion" id="mobile-activities-acc">
              <a href="/activities" class="mobile-sub-link" style="font-weight: 700; color: var(--color-secondary);" data-nav-link>
                • Master Activities Directory
              </a>
              ${v.map(i=>`
                <a href="/activities/${i.id}" class="mobile-sub-link" data-nav-link>
                  ${i.navLabel||i.title}
                </a>
              `).join("")}
            </div>
          </div>

          <a href="/group" class="mobile-nav-link ${e==="/group"?"active":""}" data-nav-link>
            <span>Group</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/global-presence" class="mobile-nav-link ${e==="/global-presence"?"active":""}" data-nav-link>
            <span>Global Presence</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/investor-relations" class="mobile-nav-link ${e==="/investor-relations"?"active":""}" data-nav-link>
            <span>Investor Relations</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
          <a href="/contact" class="mobile-nav-link ${e==="/contact"?"active":""}" data-nav-link>
            <span>Contact</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">chevron_right</span>
          </a>
        </nav>

        <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--color-border);">
          <div style="font-size: 0.75rem; color: var(--color-slate); margin-bottom: 0.5rem;">CENTRAL DISPATCH:</div>
          <a href="tel:+912222610940" class="btn btn-primary" style="width: 100%; margin-bottom: 0.5rem;">
            <span class="material-symbols-outlined">call</span>
            <span>+91 22 2261-0940</span>
          </a>
          <a href="tel:+918912561377" class="btn btn-secondary" style="width: 100%;">
            <span class="material-symbols-outlined">location_city</span>
            <span>HQ: +91 891 2561377</span>
          </a>
        </div>
      </div>
    </header>
  `}function P(){return`
    <footer class="site-footer">
      <div class="container">
        <!-- Footer Top Brand & Certification Bar -->
        <div class="footer-top">
          <div class="footer-brand">
            <img src="/assets/mci-logo-transparent.png" alt="MCI Group Logo" class="footer-logo-img" />
            <div>
              <span style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; display: block;">
                MCI
              </span>
              <span style="font-size: 0.75rem; color: var(--color-primary-fixed-dim); display: block; margin-top: 2px;">
                Statutory Maritime Infrastructure &amp; Technical Fleet Operations
              </span>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; font-size: 0.75rem; color: var(--color-primary-fixed-dim);">
            <button type="button" class="btn btn-sm btn-outline-white" id="btn-back-top" aria-label="Scroll back to top" title="Scroll back to top">
              <span class="material-symbols-outlined" style="font-size: 16px;">arrow_upward</span>
            </button>
          </div>
        </div>

        <!-- 4-Column Directory Links -->
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Fleet Operations</h4>
            <div class="footer-links">
              <a href="/activities/port-development" data-nav-link>Port Terminal Management</a>
              <a href="/activities/offshore-drilling" data-nav-link>Offshore Energy Fleet</a>
              <a href="/activities/marine-repairs" data-nav-link>Dry Dock Graving Basins</a>
              <a href="/activities/dredging" data-nav-link>Capital Dredging Corridors</a>
              <a href="/global-presence" data-nav-link>Live Fleet Telemetry</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Governance &amp; Class</h4>
            <div class="footer-links">
              <a href="/about" data-nav-link>Institutional Profile</a>
              <a href="/activities/marine-surveys" data-nav-link>Statutory Survey Directorate</a>
              <a href="/investor-relations" data-nav-link>Multi-Tier Governance</a>
              <a href="/investor-relations" data-nav-link>Regulatory Filings</a>
              <a href="/about" data-nav-link>DGS &amp; IACS Accreditations</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Sustainability &amp; Tech</h4>
            <div class="footer-links">
              <a href="/activities/green-technologies" data-nav-link>CII Decarbonization Charter</a>
              <a href="/activities/turbine-engineering" data-nav-link>Propulsion Machinery Overhaul</a>
              <a href="/activities/ship-design" data-nav-link>CFD Naval Architecture</a>
              <a href="/activities/green-technologies" data-nav-link>Cold-Ironing Shore Power</a>
              <a href="/activities/green-technologies" data-nav-link>MARPOL Annex I-VI Compliance</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Group Headquarters</h4>
            <div class="footer-links">
              <span style="color: var(--color-white); font-weight: 600;">"MCI TOWERS"</span>
              <span style="color: var(--color-cool-gray);">25-12-31, Kotaveedhi, Visakhapatnam 530001, Andhra Pradesh</span>
              <a href="tel:+918912561377">Ph: +91 - 891 - 2561377</a>
              <a href="mailto:info@mcigroup.co">Email: info@mcigroup.co</a>
              <a href="/contact" data-nav-link style="color: var(--color-secondary-container); font-weight: 600; margin-top: 4px;">
                → Operational Dispatch Desk
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright & Bottom Disclaimers -->
        <div class="footer-bottom">
          <p>
            &copy; 2024 Marine Corporation of India (MCI). All maritime operations certified under IMO, ISO 9001 &amp; SOLAS standards. Sovereign infrastructure logistics.
          </p>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span>Founded 1990</span>
            <span>&bull;</span>
            <a href="/investor-relations" data-nav-link style="color: var(--color-cool-gray);">Statutory Disclosures</a>
            <span>&bull;</span>
            <a href="/contact" data-nav-link style="color: var(--color-cool-gray);">Regional Contacts</a>
          </div>
        </div>
      </div>
    </footer>
  `}function T(){return`
    <div class="page-transition">
      <!-- HERO SECTION -->
      <section class="hero" id="home-hero">
        <div class="hero-bg">
          <video class="hero-bg-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
            <source src="/assets/ship-coming-to-frame.mp4" type="video/mp4" />
          </video>
          <div class="hero-gradient"></div>
        </div>

        <div class="container hero-content">
          <h1 class="hero-title">
            Sovereign Maritime Infrastructure, Heavy Engineering &amp; Strategic Ocean Logistics
          </h1>

          <p class="hero-desc">
            Marine Corporation of India deploys end-to-end deepwater engineering, state-of-the-art vessel maintenance, dredging infrastructure, and commercial energy fleet logistics safeguarding national and international trade corridors.
          </p>

          <div class="hero-actions">
            <a href="/activities" class="btn btn-accent btn-lg" data-nav-link>
              <span>Explore Operational Capabilities</span>
              <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
            </a>
            <a href="/global-presence" class="btn btn-outline-white btn-lg" data-nav-link>
              <span class="material-symbols-outlined" style="font-size: 18px;">satellite_alt</span>
              <span>Launch Fleet Telemetry Portal</span>
            </a>
          </div>

          <div class="workflow-strip">
            <div class="workflow-step">
              <strong>Explore</strong>
              <span>Choose a maritime capability or operating region.</span>
            </div>
            <div class="workflow-step">
              <strong>Inspect</strong>
              <span>Open the capability sheet or station profile for details.</span>
            </div>
            <div class="workflow-step">
              <strong>Dispatch</strong>
              <span>Contact operations when the requirement is ready.</span>
            </div>
          </div>
        </div>

      </section>

      <!-- CORE DIVISIONS BENTO GRID -->
      <section class="section section-light" id="capabilities">
        <div class="container">
          <div class="section-header-row">
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">grid_view</span>
                Core Maritime Divisions
              </span>
              <h2 class="section-title">
                Sovereign Industrial Capabilities &amp; Deepwater Logistics
              </h2>
            </div>
            <p class="section-subtitle">
              Precision-engineered marine interventions deployed across strategic ocean sectors, commercial energy support, and coastal harbor expansions.
            </p>
          </div>

          <div class="bento-grid coverflow-grid">
            ${v.slice(0,6).map((a,i)=>`
              <a href="/activities/${a.id}" class="division-card" data-nav-link>
                <div class="division-media">
                  <img src="${a.heroImage}" alt="${a.heroAlt}" class="division-img" />
                  <div class="division-tag">
                    <span class="material-symbols-outlined" style="font-size: 14px;">anchor</span>
                    <span>${a.sectorCode}</span>
                  </div>
                </div>
                <div class="division-body">
                  <div>
                    <h3 class="division-name">${a.title}</h3>
                    <p class="division-desc">${a.summary}</p>
                  </div>
                  <div class="division-footer">
                    <span>${a.metrics[0].value} ${a.metrics[0].label}</span>
                    <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                  </div>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- INSTITUTIONAL PROFILE & CREDIBILITY -->
      <section class="section section-white" id="corporate-profile">
        <div class="container">
          <div class="profile-grid">
            <!-- Left Column: HQ Imagery & Telemetry Callout -->
            <div class="profile-media-box">
              <img src="/assets/images/asset_1_about_mci.jpg" alt="MCI Corporate Headquarters & Operations Control Center" class="profile-img" />
              <div class="profile-floating-badge">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">domain</span>
                  Central Command Tower
                </h4>
                <p>
                  Centralized vessel telemetry, satellite routing control, and emergency incident dispatch in Mumbai &amp; Visakhapatnam HQ.
                </p>
              </div>
            </div>

            <!-- Right Column: Institutional Profile & Accreditations -->
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">account_balance</span>
                Institutional Profile
              </span>
              <h2 class="section-title" style="margin-bottom: 1rem;">
                Sovereign Trust Safeguarding National Oceanic Corridors
              </h2>
              <p class="premium-prose" style="margin-bottom: 1rem;">
                Established under national infrastructure mandates, the Marine Corporation of India (MCI) provides the institutional backbone for national maritime resilience, specialized deep-sea towage, salvage operations, and maritime asset integrity across the Indian Ocean Region (IOR).
              </p>
              <p class="premium-prose" style="margin-bottom: 1.5rem;">
                Our multi-disciplinary team brings together naval architects, master mariners, salvage engineers, and regulatory specialists executing operations in full compliance with United Nations IMO protocols and international classification society requirements.
              </p>

              <div>
                <span style="font-size: 0.725rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-slate); display: block; margin-bottom: 0.75rem;">
                  Statutory Accreditations &amp; Class Approvals
                </span>
                <div class="accreditations-grid">
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">verified</span>
                    <div>
                      <strong>DGS</strong>
                      <span>Govt. of India</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">shield</span>
                    <div>
                      <strong>IRS</strong>
                      <span>Indian Register</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">waves</span>
                    <div>
                      <strong>IWAI</strong>
                      <span>Inland Waterways</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">public</span>
                    <div>
                      <strong>IMO / SOLAS</strong>
                      <span>UN Maritime</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">map</span>
                    <div>
                      <strong>IHO S-44</strong>
                      <span>Hydrographic Class</span>
                    </div>
                  </div>
                  <div class="accreditation-chip">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">military_tech</span>
                    <div>
                      <strong>ISO 9001/14001</strong>
                      <span>Bureau Veritas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GLOBAL REACH & MARITIME CORRIDORS TEASER -->
      <section class="section section-dark" id="global-ports">
        <div class="container">
          <div class="section-header-row">
            <div>
              <span class="section-eyebrow" style="color: var(--color-secondary-container);">
                <span class="material-symbols-outlined" style="font-size: 16px;">hub</span>
                Operational Geography
              </span>
              <h2 class="section-title">
                Strategic Global Reach &amp; Primary Shipping Corridors
              </h2>
            </div>
            <a href="/global-presence" class="btn btn-outline-white" data-nav-link>
              <span>View Global Presence Directory</span>
              <span class="material-symbols-outlined" style="font-size: 16px;">open_in_new</span>
            </a>
          </div>

          <div class="map-container">
            <img src="/assets/images/asset_15_global_presence.jpg" alt="Executive corporate world map with maritime shipping corridors" class="map-bg-img" />
            <div class="map-lux-overlay"></div>
            <div class="map-scanline"></div>
            <div class="map-node map-node-india"><span></span></div>
            <div class="map-node map-node-gulf"><span></span></div>
            <div class="map-node map-node-malacca"><span></span></div>
            <div class="map-node map-node-europe"><span></span></div>
            <div class="map-route map-route-1"></div>
            <div class="map-route map-route-2"></div>
            <div class="map-corridors-overlay">
              <div class="corridor-item">
                <span>Strait of Malacca Transit</span>
                <strong>Active Escort Tier 1</strong>
              </div>
              <div class="corridor-item">
                <span>Arabian Sea Hub</span>
                <strong>Nhava Sheva &amp; Kandla</strong>
              </div>
              <div class="corridor-item">
                <span>Bay of Bengal Channel</span>
                <strong>Visakhapatnam &amp; Paradip</strong>
              </div>
              <div class="corridor-item">
                <span>Middle East Gulf Route</span>
                <strong>Direct Tanker Support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA / INITIATE FLEET DISPATCH -->
      <section class="section section-light" id="desk-cta">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-banner-content">
              <div class="badge badge-accent" style="margin-bottom: 0.75rem;">
                <span class="material-symbols-outlined" style="font-size: 14px;">speed</span>
                24/7 Rapid Mobilization
              </div>
              <h2 class="section-title" style="margin-bottom: 0.5rem;">
                Initiate Fleet Dispatch &amp; Operational Inquiry
              </h2>
              <p style="font-size: 0.95rem; color: var(--color-on-surface-variant); line-height: 1.55;">
                Connect directly with our central duty superintendents for emergency towage, scheduled dry dock reservations, salvage interventions, or sovereign hydrographic project planning.
              </p>
            </div>

            <div class="cta-banner-actions">
              <a href="tel:+912222610940" class="btn btn-primary btn-lg">
                <span class="material-symbols-outlined">call</span>
                <span>+91 22 2261-0940</span>
              </a>
              <a href="/contact" class="btn btn-secondary btn-lg" data-nav-link>
                <span class="material-symbols-outlined">mail</span>
                <span>Send Dispatch Request</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}const w=[{id:"mci-india",name:"Marine Corporation of India",designation:"Flagship Statutory & Heavy Engineering Entity",incorporation:"Founded 1990",hq:"Visakhapatnam, Andhra Pradesh, India",desc:"The primary industrial and statutory anchor of the group, executing deep-water capital dredging, commercial shipyard dry dock engineering, offshore energy logistics, and sovereign maritime infrastructure projects across the Indian sub-continent.",coreCapabilities:["Commercial Shipyard Dry Docking & Graving Facilities","Offshore Energy Support Flotilla & DP2/DP3 Vessel Logistics","Capital & Maintenance Channel Dredging Operations","Statutory Marine Surveys, NDT Ultrasonic Testing & Class Compliance","High-Pressure Turbine Re-blading & Dynamic Balancing","Calibration Centre & Life Saving Appliances (LSA/FFA)"],accreditations:["DGS Approved","IRS Class Authorized","ISO 9001:2015","SOLAS / MARPOL"]},{id:"mega-corp",name:"Mega Corp International",designation:"International Trade & Materials Handling",incorporation:"Group Subsidiary",hq:"Visakhapatnam & International Trading Nodes",desc:"Specialized global commercial trading and materials handling arm managing bulk mineral flows, coal import logistics, multimodal transshipment, and industrial port-terminal bulk supply contracts.",coreCapabilities:["Bulk Coal & Mineral Import Logistics","Port & Rail Multimodal Material Handling","Dry Bulk Vessel Chartering & Voyage Fixtures","Industrial Raw Material Supply Chain Security","Customs Clearance & Bonded Stockyard Management"],accreditations:["BIMCO Member","FIATA Licensed","ISO 14001:2015"]},{id:"marine-charterers",name:"Marine Charterers & Inspectors",designation:"Independent Maritime Assurance & Brokering",incorporation:"Specialized Inspection Division",hq:"Mumbai & Visakhapatnam",desc:"Autonomous marine assurance, chartering brokering, and statutory condition survey agency conducting pre-purchase evaluations, gas-free safety inspections, and marine warranty surveys on behalf of international underwriters and cargo principals.",coreCapabilities:["Commercial Vessel Chartering & Spot Market Brokering","Pre-Purchase & On-Hire / Off-Hire Condition Surveys","Gas-Free Inspections & Tank Entry Certifications","Marine Warranty Surveying (MWS) for Heavy Lift Sea Fastenings","Bunker Discrepancy & Cargo Quantity Audits"],accreditations:["IACS Society Surveyor Cadre","BIMCO Standard Form","ASNT Level II NDT"]},{id:"mci-dubai",name:"MCI World Dubai",designation:"Middle East & Persian Gulf Regional Office",incorporation:"UAE Operational Center",hq:"Dubai Maritime City, United Arab Emirates",desc:"Regional headquarters for the Arabian Gulf and Red Sea corridors, coordinating tanker escort operations, bunkering advisory, offshore oilfield logistics, and marine spare parts staging at key UAE deep-water anchorages.",coreCapabilities:["Persian Gulf & Red Sea Marine Logistics Coordination","Fujairah & Khor Fakkan Offshore Bunkering Advisory","AHTS & Utility Boat Deployments for Gulf Oilfields","Bonded Marine Spare Parts Forward Staging","Emergency Fly-Out Technical Superintendent Dispatch"],accreditations:["Dubai Maritime Authority Certified","ISO 9001:2015"]},{id:"mci-singapore",name:"MCI World Singapore",designation:"Southeast Asia & Malacca Straits Command",incorporation:"Singapore Operational Hub",hq:"Tuas Marine Basin, Singapore",desc:"Southeast Asian operating node overseeing high-density vessel transit support through the Singapore and Malacca Straits, rapid dry-dock spare mobilization, and transshipment cargo coordination connecting East Asia and the Indian Ocean.",coreCapabilities:["Straits of Malacca Transit Support & Safe Passage Advisory","Regional Technical Spares Staging & Direct Vessel Delivery","International Shiprepair Sub-contracting & Yard Supervision","Southeast Asian Port Agent & Crew Logistics Network","Dual-Fuel & Decarbonization Technical Advisory Desk"],accreditations:["MPA Singapore Licensed","ClassNK / DNV GL Liaison"]},{id:"mci-srilanka",name:"MCI World Sri Lanka",designation:"Indian Ocean Transshipment & Agency",incorporation:"Colombo Operating Center",hq:"Colombo Port & Galle Anchorage, Sri Lanka",desc:"Strategic deep-ocean gateway station servicing east-west container shipping lanes, offshore crew changes at Galle OPL, and emergency towage response across the central Indian Ocean trade corridors.",coreCapabilities:["Colombo Deepwater Transshipment Agency Coordination","Off-Port Limits (OPL) Galle Fast Crew Transfer & Supply","Indian Ocean Emergency Towage & Salvage Mobilization","Sludge & Slop Disposal Environmental Compliance","Marine Safety Equipment Testing & SCBA Refills"],accreditations:["Sri Lanka Ports Authority (SLPA) Regulated","ISO 9001:2015"]},{id:"mci-russia",name:"MCI World Russia",designation:"Northern & Black Sea Maritime Gateway",incorporation:"Russian Federation Office",hq:"St. Petersburg & Novorossiysk",desc:"Strategic commercial coordination office facilitating maritime logistics, energy tanker clearances, ice-class vessel chartering advisory, and bilateral freight documentation across Northern Sea and Black Sea terminals.",coreCapabilities:["Black Sea & Baltic Trade Corridor Vessel Coordination","Ice-Class Energy Tanker & Bulker Chartering Advisory","Marine Engine Components & Mechanical Spares Procurement","Bilateral Customs & Maritime Freight Manifest Processing","Technical Translation & Classification Documentation Liaison"],accreditations:["Russian Maritime Register of Shipping (RMRS) Liaison"]}];function L(){return`
    <div class="page-transition">
      <!-- ABOUT HERO -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div>
              <h1 class="hero-title" style="color: var(--color-primary); margin-bottom: 1rem;">
                Architects of Sovereign Maritime Power &amp; Ocean Infrastructure
              </h1>
              <p style="font-size: 1rem; color: var(--color-on-surface-variant); line-height: 1.6; margin-bottom: 2rem;">
                Established to spearhead maritime self-reliance and commercial industrial capability, the Marine Corporation of India (MCI) anchors national port capacity, high-tonnage engineering modernization, and strategic deep-sea fairway maintenance across global sea lanes.
              </p>

              <div class="about-stats-row" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; border-top: 1px solid var(--color-border); padding-top: 1.5rem;">
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">1990</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">FOUNDING YEAR</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">34+ Years Operational Legacy</div>
                </div>
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">142</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">ACTIVE FLEET</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">Sovereign &amp; Auxiliary Units</div>
                </div>
                <div>
                  <div style="font-size: 1.85rem; font-weight: 800; color: var(--color-primary);">100%</div>
                  <div style="font-size: 0.75rem; color: var(--color-slate); font-weight: 600;">CLASS AUDITED</div>
                  <div style="font-size: 0.7rem; color: var(--color-secondary);">SOLAS &amp; IMO Tier-III Ready</div>
                </div>
              </div>
            </div>

            <div class="profile-media-box">
              <img src="/assets/images/asset_1_about_mci.jpg" alt="MCI Central Operations & Command Tower" class="profile-img" />
              <div class="profile-floating-badge">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">domain</span>
                  MCI Central Operations &amp; Command Tower
                </h4>
                <p>24/7 Vessel Traffic Service (VTS) &amp; Deep-Water Port Command.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STRATEGIC MANDATES & CORE PHILOSOPHY -->
      <section class="section section-light">
        <div class="container">
          <div class="section-header-row">
            <div>
              <span class="section-eyebrow">Institutional Foundation</span>
              <h2 class="section-title">Strategic Mandates &amp; Core Philosophy</h2>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">shield</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Sovereign Readiness &amp; Security
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Guaranteed fairway maintenance for strategic maritime passages, emergency deep-water salvage contingencies, and sovereign channel accessibility under all geopolitical and environmental conditions.
              </p>
            </div>

            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">rule</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Classification Integrity
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Adhering rigorously to Indian Register of Shipping (IRS), IACS unified requirements, and International Maritime Organization (IMO) SOLAS conventions across the entire engineering lifecycle.
              </p>
            </div>

            <div class="card" style="padding: 1.75rem;">
              <div class="suite-icon" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined">eco</span>
              </div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem;">
                Decarbonization &amp; Green Corridors
              </h3>
              <p style="font-size: 0.8125rem; color: var(--color-slate); line-height: 1.5; margin-bottom: 1.25rem;">
                Executing the national maritime green transition through cold-ironing shore electrification, dual-fuel LNG bunkering facilities, and low-wake hull engineering for delicate marine ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SOVEREIGN GOVERNANCE MATRIX & GROUP COMPANIES -->
      <section class="section section-white">
        <div class="container">
          <div class="profile-grid">
            <div class="profile-media-box">
              <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI Executive Boardroom & Leadership" class="profile-img" />
              <div class="profile-floating-badge" style="max-width: 320px;">
                <h4>
                  <span class="material-symbols-outlined" style="font-size: 16px;">meeting_room</span>
                  Executive Assembly
                </h4>
                <p>Governing board overseeing strategic capital and statutory fleet operations.</p>
              </div>
            </div>

            <div>
              <span class="section-eyebrow">Executive Stewardship &amp; Oversight</span>
              <h2 class="section-title" style="margin-bottom: 1rem;">Sovereign Governance Matrix</h2>
              <blockquote style="font-size: 0.95rem; font-style: italic; color: var(--color-on-surface-variant); border-left: 3px solid var(--color-secondary); padding-left: 1rem; margin-bottom: 1.5rem;">
                "Our fiduciary duty spans beyond standard balance sheets. As custodians of maritime gateway capabilities, every nautical mile dredged, vessel built, and terminal automated must advance national resilience and commercial flow."
              </blockquote>

              <div style="margin-bottom: 1.5rem;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-slate); letter-spacing: 0.05em; display: block; margin-bottom: 0.75rem;">
                  The Group Companies of MCI:
                </span>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.65rem;">
                  ${w.map(e=>`
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; font-weight: 600; color: var(--color-primary); background: var(--color-surface-container-low); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                      <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary);">check_circle</span>
                      <span>${e.name}</span>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 1rem;">
                <a href="/group" class="btn btn-primary" data-nav-link>
                  <span>Explore Group Structure</span>
                  <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                </a>
                <a href="/investor-relations" class="btn btn-secondary" data-nav-link>
                  <span>Read Annual Charter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONSULT WITH OPERATIONS CTA -->
      <section class="section section-dark">
        <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--color-white); margin-bottom: 0.25rem;">
              Consult with Sovereign Operations Directorate
            </h2>
            <p style="font-size: 0.875rem; color: var(--color-primary-fixed-dim);">
              Direct protocol line for defense coordination, port infrastructure tenders, and deep-water dredge operations.
            </p>
          </div>
          <div style="display: flex; gap: 1rem;">
            <a href="/investor-relations" class="btn btn-outline-white" data-nav-link>
              <span class="material-symbols-outlined" style="font-size: 16px;">download</span>
              <span>Download Corporate Profile PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `}function z(){const e=[{id:"all",label:"All Capabilities"},{id:"infrastructure",label:"Port & Infrastructure"},{id:"energy",label:"Energy & Offshore"},{id:"engineering",label:"Marine Engineering"},{id:"sustainability",label:"Green & Sustainability"}],a={"port-development":"infrastructure","offshore-drilling":"energy","marine-repairs":"engineering","turbine-engineering":"engineering","marine-surveys":"engineering","green-technologies":"sustainability","ship-design":"engineering",dredging:"infrastructure"};return`
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">ACTIVITIES &amp; SERVICES</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>8 ACTIVE DIVISIONS</span>
            <span>FULL OPERATIONAL STATUS</span>
          </div>
        </div>
      </div>

      <!-- ACTIVITIES HERO -->
      <section class="section section-dark activities-hero" style="padding: 3rem 0 2rem; position: relative; overflow: hidden;">
        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 60%, #176b9c22 100%); z-index: 0;"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <span class="section-eyebrow" style="color: var(--color-secondary-container);">
            <span class="material-symbols-outlined" style="font-size: 16px;">grid_view</span>
            Engineering Verticals &amp; Service Divisions
          </span>
          <h1 class="section-title activity-hero-heading" style="margin-top: 0.5rem; font-size: clamp(1.8rem, 3vw, 2.6rem);">
            Sovereign Maritime Industrial Capabilities
          </h1>
          <p style="font-size: 0.95rem; color: var(--color-primary-fixed-dim); max-width: 700px; line-height: 1.65; margin-top: 0.75rem; margin-bottom: 2rem;">
            Eight precision-engineered marine divisions spanning deepwater port infrastructure, energy fleet logistics, commercial shipyard engineering, hydrographic surveys, green propulsion technologies, and naval architectural design.
          </p>

          <!-- FILTER PILLS -->
          <div class="filter-pills">
            ${e.map((i,l)=>`
              <button class="filter-pill ${l===0?"active":""}" data-filter="${i.id}" type="button">${i.label}</button>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- ACTIVITIES GRID -->
      <section class="section section-light" style="padding-top: 2.5rem;">
        <div class="container">
          <div class="activities-grid coverflow-grid">
            ${v.map(i=>`
              <a href="/activities/${i.id}" class="activity-card" data-nav-link data-category="${a[i.id]||"engineering"}">
                <div class="activity-card-media">
                  <img src="${i.heroImage}" alt="${i.heroAlt}" class="activity-card-img" loading="lazy" />
                  <div class="activity-card-overlay"></div>
                </div>
                <div class="activity-card-body">
                  <h3 class="activity-card-title">${i.title}</h3>
                  <div class="activity-card-cta">
                    <span>View Full Capability Sheet</span>
                    <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
                  </div>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="section section-dark" style="padding: 3rem 0;">
        <div class="container">
          <div class="cta-banner">
            <div class="cta-banner-content">
              <div class="badge badge-accent" style="margin-bottom: 0.75rem;">
                <span class="material-symbols-outlined" style="font-size: 14px;">support_agent</span>
                24/7 Rapid Mobilization Available
              </div>
              <h2 class="section-title" style="margin-bottom: 0.5rem;">Request a Capability Briefing</h2>
              <p style="font-size: 0.95rem; color: var(--color-primary-fixed-dim); line-height: 1.55;">
                Connect with our duty superintendents to discuss your specific operational requirements, fleet mobilization timelines, and project scope assessments.
              </p>
            </div>
            <div class="cta-banner-actions">
              <a href="tel:+912222610940" class="btn btn-accent btn-lg">
                <span class="material-symbols-outlined">call</span>
                <span>+91 22 2261-0940</span>
              </a>
              <a href="/contact" class="btn btn-outline-white btn-lg" data-nav-link>
                <span class="material-symbols-outlined">mail</span>
                <span>Send Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}function B(e){const a=v.find(i=>i.id===e);return a?`
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <a href="/activities" data-nav-link>ACTIVITIES</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">${a.sectorCode}</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>FULL OPERATIONAL STATUS</span>
            <span>${a.sectorCode}</span>
          </div>
        </div>
      </div>

      <!-- HERO -->
      <section class="section section-dark" style="padding: 0; position: relative; min-height: 420px; display: flex; align-items: flex-end;">
        <div style="position: absolute; inset: 0; overflow: hidden;">
          <img src="${a.heroImage}" alt="${a.heroAlt}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,26,43,0.97) 0%, rgba(7,26,43,0.65) 50%, rgba(7,26,43,0.2) 100%);"></div>
        </div>
        <div class="container" style="position: relative; z-index: 1; padding: 3rem var(--gutter-desktop);">
          <h1 class="hero-title" style="font-size: clamp(1.6rem, 3.5vw, 2.8rem); max-width: 800px;">${a.title}</h1>
          <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); max-width: 720px; line-height: 1.65; margin-top: 1rem;">${a.summary}</p>
        </div>
      </section>

      <!-- METRICS BAR -->
      <section class="activity-metrics-bar" style="padding: 1.5rem 0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem;">
            ${a.metrics.map(i=>`
              <div style="text-align: center; padding: 0.5rem;">
                <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: #ffffff;">${i.value}</div>
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #ffffff; margin-top: 4px;">${i.label}</div>
                <div style="font-size: 0.7rem; color: #d6d6d6; margin-top: 2px;">${i.sub}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- SERVICE SUITES -->
      <section class="section section-white">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">verified</span>
                Verified Service Portfolio
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Core Technical Capabilities</h2>
              ${a.suites?a.suites.map(i=>`
                <div class="suite-card">
                  <div class="suite-icon">
                    <span class="material-symbols-outlined">${i.icon}</span>
                  </div>
                  <div>
                    <h4 style="font-size: 0.975rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.375rem;">${i.title}</h4>
                    <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); line-height: 1.6; margin-bottom: 0.5rem;">${i.desc}</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.375rem;">
                      ${i.specs.map(l=>`<span style="font-size: 0.7rem; background: var(--color-surface-container); color: var(--color-secondary); padding: 2px 8px; border-radius: 3px; font-weight: 600;">${l}</span>`).join("")}
                    </div>
                  </div>
                </div>
              `).join(""):""}
            </div>

            <div>
              ${a.verifiedServices?`
                <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 1.5rem;">
                  <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-slate); margin-bottom: 1rem;">
                    <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-right: 4px;">checklist</span>
                    Verified Services Manifest
                  </div>
                  <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.5rem;">
                    ${a.verifiedServices.map(i=>`
                      <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--color-charcoal-navy);">
                        <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary); flex-shrink: 0;">check_circle</span>
                        ${i}
                      </li>
                    `).join("")}
                  </ul>
                </div>
              `:""}

              ${a.caseStudy?`
                <div class="activity-case-study" style="border-radius: var(--radius-lg); padding: 1.5rem;">
                  <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary-container); display: block; margin-bottom: 0.5rem;">${a.caseStudy.tag}</span>
                  <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem;">${a.caseStudy.title}</h4>
                  <div style="font-size: 0.8rem; line-height: 1.6; color: var(--color-primary-fixed-dim);">
                    <strong style="color: var(--color-secondary-container);">Challenge:</strong> ${a.caseStudy.challenge}
                  </div>
                  <div style="font-size: 0.8rem; line-height: 1.6; color: var(--color-primary-fixed-dim); margin-top: 0.5rem;">
                    <strong style="color: var(--color-secondary-container);">Solution:</strong> ${a.caseStudy.solution}
                  </div>
                  <div style="display: flex; gap: 1rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    ${a.caseStudy.stats.map(i=>`
                      <div style="text-align: center; flex: 1;">
                        <div style="font-size: 1rem; font-weight: 800; color: var(--color-secondary-container);">${i.value}</div>
                        <div style="font-size: 0.65rem; color: var(--color-primary-fixed-dim); margin-top: 2px;">${i.label}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}
            </div>
          </div>
        </div>
      </section>

      <!-- SPEC TABLE -->
    </div>
  `:'<div class="page-transition"><div class="container" style="padding: 6rem 0; text-align: center;"><h1 style="color: var(--color-primary);">Division Not Found</h1><a href="/activities" data-nav-link class="btn btn-primary" style="margin-top: 1.5rem;">Back to Activities</a></div></div>'}function N(){return`
    <div class="page-transition">
      <!-- GROUP HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 100%);">
        <div class="container">
          <div class="profile-grid">
            <div>
              <div class="badge badge-accent" style="margin-bottom: 1rem;">
                <span class="material-symbols-outlined" style="font-size: 14px;">corporate_fare</span>
                ESTABLISHED 1990 // MULTI-ENTITY CONGLOMERATE
              </div>
              <h1 class="hero-title hero-title-slab" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); margin-bottom: 1rem;">
                MCI Group of Companies
              </h1>
              <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); line-height: 1.65; max-width: 600px; margin-bottom: 2rem;">
                The Marine Corporation of India Group operates as a diversified maritime industrial conglomerate spanning sovereign infrastructure engineering, international trade, independent marine assurance, and technical fleet management across global sea lanes.
              </p>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 480px;">
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">4</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Group Entities</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">34+</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Years Legacy</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">5</div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim);">Nations Active</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI Group Operations" style="width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg);" />
            </div>
          </div>
        </div>
      </section>

      <!-- GROUP ENTITIES -->
      <section class="section section-white">
        <div class="container">
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 2rem;">Constituent Companies &amp; Divisions</h2>
          <div style="display: grid; gap: 1.5rem;">
            ${w.map((e,a)=>`
              <details class="group-entity-card group-entity-disclosure" style="border-left: 4px solid ${a===0?"var(--color-secondary)":"var(--color-border)"};">
                <summary>
                  <span>${e.name}</span>
                  <span class="material-symbols-outlined">expand_more</span>
                </summary>
                <div class="group-entity-details">
                  <div class="group-entity-header">
                    <div>
                      <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 4px;">${e.incorporation}${a===0?" // FLAGSHIP":""}</span>
                      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary); margin-bottom: 4px;">${e.name}</h3>
                      <span style="font-size: 0.8rem; color: var(--color-slate);">${e.designation}</span>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                      <div class="group-location">
                        <span class="material-symbols-outlined" style="font-size: 13px; vertical-align: middle; margin-right: 3px;">location_on</span>
                        ${e.hq}
                      </div>
                    </div>
                  </div>
                  <p style="font-size: 0.875rem; color: var(--color-on-surface-variant); line-height: 1.65; margin: 1rem 0;">${e.desc}</p>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                    ${e.coreCapabilities.map(i=>`
                      <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-charcoal-navy);">
                        <span class="material-symbols-outlined" style="font-size: 14px; color: var(--color-secondary); flex-shrink: 0;">check_circle</span>
                        ${i}
                      </div>
                    `).join("")}
                  </div>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--color-border);">
                    ${e.accreditations.map(i=>`
                      <span style="font-size: 0.7rem; background: var(--color-surface-container); color: var(--color-secondary-dark); padding: 3px 10px; border-radius: var(--radius-full); font-weight: 700; border: 1px solid var(--color-border);">${i}</span>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
        </div>
      </section>

    </div>
  `}const H={overviewMetrics:[{label:"Active Sea Corridors",value:"14",sub:"100% Monitored"},{label:"Forward Fleet Command",value:"142",sub:"Deployed Vessels"},{label:"Emergency Response",value:"< 45m",sub:"Coastal Dispatch"}]};function F(){return`
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">GLOBAL PRESENCE</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>14 ACTIVE SEA CORRIDORS</span>
            <span>LIVE FLEET TELEMETRY</span>
          </div>
        </div>
      </div>

      <!-- HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #001c28 0%, #071a2b 50%, #0d2f4f 100%);">
        <div class="container">
          <span class="section-eyebrow" style="color: var(--color-secondary-container);">
            <span class="material-symbols-outlined" style="font-size: 16px;">satellite_alt</span>
            Live Maritime Operations Network
          </span>
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-top: 0.5rem; margin-bottom: 1rem;">
            Strategic Global Presence &amp; Fleet Network
          </h1>
          <p style="font-size: 0.95rem; color: var(--color-primary-fixed-dim); max-width: 700px; line-height: 1.65; margin-bottom: 2.5rem;">
            MCI's maritime network spans primary shipping lanes across the Indian Ocean Region, with forward fleet commands positioned at critical strategic choke points from the Gulf of Aden to the Strait of Malacca.
          </p>

          <!-- OVERVIEW METRICS -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 600px;">
            ${H.overviewMetrics.map(e=>`
              <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); padding: 1.25rem; text-align: center;">
                <div style="font-size: 2rem; font-weight: 800; color: var(--color-secondary-container); font-family: var(--font-heading);">${e.value}</div>
                <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-primary-fixed-dim); margin-top: 4px;">${e.label}</div>
                <div style="font-size: 0.65rem; color: var(--color-primary-fixed-dim); opacity: 0.6; margin-top: 2px;">${e.sub}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- MAP SECTION -->
      <section class="section section-dark" style="padding: 0;">
        <div style="position: relative; overflow: hidden; height: 340px;">
          <img src="/assets/images/asset_15_global_presence.jpg" alt="Global maritime operations map" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(7,26,43,0.58) 0%, rgba(7,26,43,0.16) 60%, rgba(7,26,43,0.48) 100%);"></div>
          <div style="position: absolute; inset: 0; display: flex; align-items: center;">
            <div class="container">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 800px;">
                ${[{corridor:"Arabian Sea Corridor",status:"Tier 1 — Active"},{corridor:"Bay of Bengal Channel",status:"Tier 1 — Active"},{corridor:"Strait of Malacca Transit",status:"Escort Operations"},{corridor:"Suez Canal Approach",status:"Alliance Tier"}].map(e=>`
                  <div class="corridor-card">
                    <div style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary-container); margin-bottom: 4px;">
                      <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #10b981; margin-right: 6px; vertical-align: middle; animation: pulse-ring 2s infinite;"></span>
                      ${e.status}
                    </div>
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-white);">${e.corridor}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `}const V={pillars:[{code:"PILLAR I // CORE ASSET",title:"State-of-the-Art Dredging & Energy Fleet",desc:"Disciplined capital expenditure directed towards advanced trailing suction hopper dredgers (TSHD) and DP2/DP3 support units to maintain critical navigable draft across Major Ports, de-risking sovereign commerce corridors.",capexFocus:"Fleet Expansion & Technological Refits"},{code:"PILLAR II // INFRASTRUCTURE",title:"Automated Container Terminals & Quays",desc:"Modernization of deepwater quay structures, high-efficiency rail-mounted gantry cranes, and automated berth reservation telemetry driving vessel turnaround times under 22.4 hours.",capexFocus:"Terminal Automation & Berthing Depths"},{code:"PILLAR III // DECARBONIZATION",title:"Green Vessel Conversions & Shore Power",desc:"Dual-fuel LNG/Methanol repowering of coastal tugs, shore-power cold ironing grid installations, and ballast water management retrofits aligned with IMO MEPC 2030 targets.",capexFocus:"Alternative Propulsion & Environmental Compliance"}]};function G(){return`
    <div class="page-transition">
      <section class="section section-dark investor-hero">
        <div class="container">
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); max-width: 800px; margin-bottom: 1rem;">Investor Relations</h1>
          <p style="font-size: 0.975rem; color: #d6d6d6; max-width: 680px; line-height: 1.65;">MCI maintains clear, direct communication with investors and stakeholders.</p>
        </div>
      </section>

      <section class="section section-white">
        <div class="container">
          <span class="section-eyebrow">Investment Framework</span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 2rem;">Strategic Investment Pillars</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${V.pillars.map(e=>`
              <div style="background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; border-top: 3px solid var(--color-secondary);">
                <span style="font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-secondary); display: block; margin-bottom: 0.75rem;">${e.code}</span>
                <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--color-primary); margin-bottom: 0.75rem;">${e.title}</h3>
                <p style="font-size: 0.85rem; color: var(--color-on-surface-variant); line-height: 1.65; margin-bottom: 1rem;">${e.desc}</p>
                <div style="font-size: 0.75rem; background: var(--color-surface-container); color: var(--color-secondary-dark); padding: 0.5rem 0.75rem; border-radius: var(--radius-md); font-weight: 600;">CAPEX FOCUS: ${e.capexFocus}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section section-light">
        <div class="container">
          <span class="section-eyebrow">Investor Contact</span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Direct Investor Relations</h2>
          <div class="investor-profile-card">
            <img src="/assets/images/asset_2_about_mci.jpg" alt="MCI investor relations office" />
            <div>
              <h3>Mr. John Mathew</h3>
              <p>Investor Relation Officer</p>
              <p>MCI Group of Companies</p>
              <a href="mailto:info@mcigroup.co">Email: info@mcigroup.co</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}const c={headOffice:{building:'"MCI TOWERS"',addressLine1:"25-12-31, KOTAVEEDHI",cityPostal:"VISAKHAPATNAM 530001",stateCountry:"Andhra Pradesh, India",phone:"+91 - 891 - 2561377",mobile:"+91 - 984 - 8194806 / 807",email:"info@mcigroup.co",web:"www.mcigroup.co",coordinates:"17.6868° N, 83.2185° E"},regionalOffices:[{country:"India",label:"INDIA Office (Flagship)",email:"india@mcigroup.co",phone:"+91 - 891 - 2561377"},{country:"U.A.E.",label:"U.A.E. Office (Dubai)",email:"dubai@mcigroup.co",phone:"+971 4 388-9100"},{country:"Singapore",label:"SINGAPORE Office",email:"singapore@mcigroup.co",phone:"+65 6778-4200"},{country:"Sri Lanka",label:"SRILANKA Office (Colombo)",email:"lanka@mcigroup.co",phone:"+94 11 243-7800"},{country:"Russia",label:"RUSSIA Office",email:"russia@mcigroup.co",phone:"+7 812 320-1400"}],operationalDesks:[{name:"JNPT / Mumbai Operations Center",location:"Container Berth Terminal 4, Sector Maritime Corridor, Navi Mumbai",phone:"+91 22 2724-4001",email:"ops@marinecorpindia.gov.in",radio:"VHF Channel 16 / 12"},{name:"Kolkata SMP Port Desk",location:"Syama Prasad Mookerjee Port Trust Building, Strand Road, Kolkata",phone:"+91 33 2230-7411",email:"kolkata@marinecorpindia.gov.in",radio:"VHF Channel 16 / 08"},{name:"Vizhinjam Deepwater Maritime Cell",location:"South Breakwater Command Office, Thiruvananthapuram, Kerala",phone:"+91 471 230-1880",email:"vizhinjam@marinecorpindia.gov.in",radio:"VHF Channel 16 / 14"}],inquiryCategories:["Commercial Shipyard Dry Dock Reservation","Offshore Energy Vessel / AHTS Chartering","Port Development & Marine Terminal Concession","Capital Dredging & Channel Deepening Request","Marine Survey, NDT & Statutory Audit Booking","Propulsion Machinery / Turbine Overhaul Work Order","Green Technology & CII Decarbonization Advisory","General Corporate / Group Secretarial Inquiry"]};function $(){return`
    <div class="page-transition">
      <!-- BREADCRUMB -->
      <div class="breadcrumbs-strip">
        <div class="container">
          <div class="breadcrumbs-path">
            <a href="/" data-nav-link>PORTAL DIRECTORY</a>
            <span class="material-symbols-outlined" style="font-size: 14px;">chevron_right</span>
            <span style="color: var(--color-white); font-weight: 600;">CONTACT &amp; OPERATIONS DESK</span>
          </div>
          <div class="breadcrumbs-meta">
            <span>24/7 DUTY SUPERINTENDENTS</span>
          </div>
        </div>
      </div>

      <!-- CONTACT HERO -->
      <section class="section section-dark" style="padding: 3rem 0; background: linear-gradient(135deg, #071a2b 0%, #0d2f4f 100%);">
        <div class="container">
          <div class="badge badge-accent" style="margin-bottom: 1rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">support_agent</span>
            24/7 CENTRAL DISPATCH // OPERATIONS DESK ONLINE
          </div>
          <h1 class="hero-title" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); max-width: 800px; margin-bottom: 1rem;">
            Operations Dispatch &amp; Contact Directory
          </h1>
          <p style="font-size: 0.975rem; color: var(--color-primary-fixed-dim); max-width: 680px; line-height: 1.65;">
            Connect with MCI's central duty superintendents for emergency towage, dry dock reservations, salvage interventions, hydrographic surveys, and corporate inquiries across all regional offices.
          </p>
        </div>
      </section>

      <!-- MAIN CONTACT GRID -->
      <section class="section section-white">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: start;">

            <!-- LEFT: HQ DETAILS + REGIONAL OFFICES -->
            <div>
              <!-- HQ CARD -->
              <div class="contact-hq-card" style="background: #111; color: #fff; border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
                  <img src="/assets/mci-logo-transparent.png" alt="MCI Logo" style="height: 44px;" />
                  <div>
                    <div style="font-size: 1rem; font-weight: 800; font-family: var(--font-heading);">Marine Corporation of India</div>
                    <div style="font-size: 0.7rem; color: var(--color-primary-fixed-dim);">Registered Group Headquarters</div>
                  </div>
                </div>
                <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-secondary-container); margin-bottom: 0.5rem; font-weight: 700;">Head Office</div>
                <div style="font-size: 0.975rem; font-weight: 700; margin-bottom: 4px;">${c.headOffice.building}</div>
                <div style="font-size: 0.85rem; color: var(--color-primary-fixed-dim); line-height: 1.6; margin-bottom: 1.25rem;">
                  ${c.headOffice.addressLine1}<br />
                  ${c.headOffice.cityPostal}<br />
                  ${c.headOffice.stateCountry}
                </div>
                <div style="display: grid; gap: 0.5rem;">
                  <a href="tel:${c.headOffice.phone}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none; font-weight: 600;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">call</span>
                    ${c.headOffice.phone}
                  </a>
                  <a href="tel:${c.headOffice.mobile}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">smartphone</span>
                    ${c.headOffice.mobile}
                  </a>
                  <a href="mailto:${c.headOffice.email}" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-secondary-container); text-decoration: none;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">mail</span>
                    ${c.headOffice.email}
                  </a>
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-primary-fixed-dim);">
                    <span class="material-symbols-outlined" style="font-size: 16px;">public</span>
                    ${c.headOffice.web}
                  </div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-primary-fixed-dim);">
                    <span class="material-symbols-outlined" style="font-size: 16px;">my_location</span>
                    ${c.headOffice.coordinates}
                  </div>
                </div>
              </div>

              <!-- REGIONAL OFFICES -->
              <h3 style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-slate); margin-bottom: 0.75rem;">Regional Office Network</h3>
              <div style="display: grid; gap: 0.5rem;">
                ${c.regionalOffices.map(e=>`
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--color-surface-container-low); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
                    <div>
                      <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary);">${e.label}</div>
                      <a href="mailto:${e.email}" style="font-size: 0.75rem; color: var(--color-secondary-dark); text-decoration: none;">${e.email}</a>
                    </div>
                    <a href="tel:${e.phone}" style="font-size: 0.775rem; color: var(--color-secondary); font-weight: 600; text-decoration: none; white-space: nowrap;">${e.phone}</a>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- RIGHT: INQUIRY FORM -->
            <div>
              <span class="section-eyebrow">
                <span class="material-symbols-outlined" style="font-size: 16px;">send</span>
                Direct Inquiry
              </span>
              <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Submit Operational Inquiry</h2>

              <div id="contact-form-success" style="display: none; padding: 1rem 1.25rem; background: #d4f4e4; border: 1px solid #10b981; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.875rem; color: #0a5c35;">
                <strong>✓ Inquiry Received</strong> — Our team will respond within 2 business hours. For urgent matters, call our 24/7 dispatch line directly.
              </div>

              <form id="contact-page-form" style="display: grid; gap: 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label" for="cp-name">Full Name <span class="required">*</span></label>
                    <input type="text" class="form-input" id="cp-name" name="name" placeholder="Full name" pattern="[A-Za-z]+(?: [A-Za-z]+)*" minlength="2" maxlength="80" title="Use letters and spaces only." required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cp-company">Company / Vessel Owner</label>
                    <input type="text" class="form-input" id="cp-company" name="company" placeholder="Shipping Line / Port Authority" />
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label" for="cp-email">Official Email <span class="required">*</span></label>
                    <input type="email" class="form-input" id="cp-email" name="email" placeholder="contact@lineagency.com" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="cp-phone">Contact Phone <span class="required">*</span></label>
                    <input type="tel" class="form-input" id="cp-phone" name="phone" placeholder="10-digit phone number" inputmode="numeric" pattern="[0-9]{10}" minlength="10" maxlength="10" title="Enter exactly 10 digits." required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-category">Inquiry Category <span class="required">*</span></label>
                  <select class="form-select" id="cp-category" name="category" required>
                    <option value="">Select service area...</option>
                    ${c.inquiryCategories.map(e=>`<option value="${e}">${e}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-vessel">Vessel Name &amp; IMO No. (if applicable)</label>
                  <input type="text" class="form-input" id="cp-vessel" name="vessel" placeholder="e.g. M/V SAGAR PRIDE / IMO 9412086 (optional)" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="cp-message">Operational Brief / Message <span class="required">*</span></label>
                  <textarea class="form-textarea" id="cp-message" name="message" required placeholder="Describe your requirement — port of call, berth specifications, timing, cargo type, or survey scope..." style="min-height: 120px;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                  <span class="material-symbols-outlined">send</span>
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- OPERATIONAL DESKS -->
      <section class="section section-light" style="padding: 3rem 0;">
        <div class="container">
          <span class="section-eyebrow">
            <span class="material-symbols-outlined" style="font-size: 16px;">terminal</span>
            Operations Centers
          </span>
          <h2 class="section-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Key Operational Desks</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${c.operationalDesks.map(e=>`
              <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                  <div style="width: 40px; height: 40px; border-radius: var(--radius-md); background: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary-container); font-size: 18px;">anchor</span>
                  </div>
                  <h4 style="font-size: 0.925rem; font-weight: 700; color: var(--color-primary);">${e.name}</h4>
                </div>
                <p style="font-size: 0.775rem; color: var(--color-slate); margin-bottom: 0.875rem; line-height: 1.5;">${e.location}</p>
                <div style="display: grid; gap: 5px;">
                  <a href="tel:${e.phone}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px; font-weight: 600;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">call</span>${e.phone}
                  </a>
                  <a href="mailto:${e.email}" style="font-size: 0.8rem; color: var(--color-secondary-dark); text-decoration: none; display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>${e.email}
                  </a>
                  <span style="font-size: 0.775rem; color: var(--color-slate); display: flex; align-items: center; gap: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 14px;">radio</span>${e.radio}
                  </span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `}function M(){return window.location.pathname}function _(e){const a=e.match(/^\/activities\/(.+)$/);if(a)return B(a[1]);switch(e){case"/":return T();case"/about":return L();case"/activities":return z();case"/group":return N();case"/global-presence":return F();case"/investor-relations":return G();case"/contact":return $();default:return T()}}function S(e){const a=document.getElementById("header-root"),i=document.getElementById("page-root"),l=document.getElementById("footer-root");a.innerHTML=O(e),i.innerHTML=_(e),l.innerHTML=P(),document.title="MCI",window.scrollTo({top:0,behavior:"instant"}),q()}function U(e){history.pushState(null,"",e),S(e)}function q(){j(),document.querySelectorAll("[data-nav-link]").forEach(t=>{t.removeEventListener("click",A),t.addEventListener("click",A)}),document.querySelectorAll('a[href^="tel:"]').forEach(t=>{var m;const o=(((m=t.getAttribute("href"))==null?void 0:m.replace(/^tel:/,""))||t.textContent||"").replace(/[^\d+]/g,"").replace(/(?!^)\+/g,"");o&&t.setAttribute("href",`tel:${o}`)});const e=document.getElementById("menu-toggle"),a=document.getElementById("mobile-drawer"),i=document.getElementById("drawer-scrim"),l=document.getElementById("close-drawer");function n(){a==null||a.classList.add("open"),i==null||i.classList.add("open"),e==null||e.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}function r(){a==null||a.classList.remove("open"),i==null||i.classList.remove("open"),e==null||e.setAttribute("aria-expanded","false"),document.body.style.overflow=""}e==null||e.addEventListener("click",n),l==null||l.addEventListener("click",r),i==null||i.addEventListener("click",r);const d=document.getElementById("mobile-activities-toggle"),p=document.getElementById("mobile-activities-acc"),g=document.getElementById("mobile-acc-arrow");d==null||d.addEventListener("click",()=>{const t=p==null?void 0:p.classList.toggle("open");g&&(g.textContent=t?"expand_less":"expand_more")});const u=document.getElementById("contact-page-form");u==null||u.addEventListener("submit",t=>{if(t.preventDefault(),!u.reportValidity())return;const s=new FormData(u),o=["MCI Contact Inquiry",`Name: ${s.get("name")}`,`Company / Vessel Owner: ${s.get("company")||"Not provided"}`,`Email: ${s.get("email")}`,`Phone: ${s.get("phone")}`,`Category: ${s.get("category")}`,`Vessel / IMO: ${s.get("vessel")||"Not provided"}`,`Message: ${s.get("message")}`].join(`
`);window.location.href=`https://wa.me/919059483826?text=${encodeURIComponent(o)}`});const h=document.getElementById("main-header");function C(){h&&(window.scrollY>50?h.classList.add("scrolled"):h.classList.remove("scrolled"))}window.removeEventListener("scroll",C),window.addEventListener("scroll",C,{passive:!0});const f=document.getElementById("btn-back-top");f==null||f.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})),document.querySelectorAll(".filter-pill").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".filter-pill").forEach(o=>o.classList.remove("active")),t.classList.add("active");const s=t.dataset.filter;document.querySelectorAll(".activity-card").forEach(o=>{s==="all"||o.dataset.category===s?o.style.display="":o.style.display="none"})})}),document.querySelectorAll(".doc-download-btn").forEach(t=>{t.addEventListener("click",()=>{const s=document.createElement("div");s.style.cssText="position:fixed;bottom:2rem;right:2rem;background:#071a2b;color:#fff;padding:1rem 1.5rem;border-radius:8px;font-size:0.875rem;z-index:9999;box-shadow:0 8px 32px rgba(0,0,0,0.3);",s.innerHTML="<strong>Download Initiated</strong><br>Document access subject to NDA verification.",document.body.appendChild(s),setTimeout(()=>s.remove(),4e3)})}),document.querySelectorAll(".station-tab").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".station-tab").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".station-panel").forEach(o=>o.classList.remove("active")),t.classList.add("active");const s=document.getElementById(`panel-${t.dataset.station}`);s==null||s.classList.add("active")})}),document.querySelectorAll(".table-search").forEach(t=>{t.addEventListener("input",()=>{const s=t.dataset.tableId,o=t.value.toLowerCase(),m=document.getElementById(s);m&&m.querySelectorAll("tbody tr").forEach(y=>{y.style.display=y.textContent.toLowerCase().includes(o)?"":"none"})})}),document.querySelectorAll(".export-csv-btn").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.tableId,o=document.getElementById(s);if(!o)return;const y=Array.from(o.querySelectorAll("tr")).map(D=>Array.from(D.querySelectorAll("th, td")).map(E=>`"${E.textContent.trim().replace(/"/g,'""')}"`).join(",")).join(`
`),x=new Blob([y],{type:"text/csv"}),I=URL.createObjectURL(x),b=document.createElement("a");b.href=I,b.download=`${s}-mci.csv`,b.click(),URL.revokeObjectURL(I)})})}function j(){document.querySelectorAll("button, a.btn").forEach(e=>{if(e.dataset.originButton==="true")return;e.dataset.originButton="true",e.classList.add("origin-button");const a=document.createElement("span");a.className="origin-fill",a.setAttribute("aria-hidden","true"),e.appendChild(a);const i=n=>{const r=e.getBoundingClientRect(),d=n?n.clientX-r.left:r.width/2,p=n?n.clientY-r.top:r.height/2,g=Math.ceil(2*Math.max(Math.hypot(d,p),Math.hypot(r.width-d,p),Math.hypot(d,r.height-p),Math.hypot(r.width-d,r.height-p)));a.style.left=`${d}px`,a.style.top=`${p}px`,a.style.width=`${g}px`,a.style.height=`${g}px`,requestAnimationFrame(()=>{a.classList.add("visible"),e.classList.add("origin-filled")})},l=()=>{a.classList.remove("visible"),e.classList.remove("origin-filled")};e.addEventListener("pointerenter",i),e.addEventListener("pointerdown",i),e.addEventListener("pointerleave",l),e.addEventListener("blur",l),e.addEventListener("focus",()=>{e.matches(":focus-visible")&&i()})})}function A(e){var l,n;const i=e.currentTarget.getAttribute("href");i&&i.startsWith("/")&&(e.preventDefault(),(l=document.getElementById("mobile-drawer"))==null||l.classList.remove("open"),(n=document.getElementById("drawer-scrim"))==null||n.classList.remove("open"),document.body.style.overflow="",U(i))}window.addEventListener("popstate",()=>S(M()));S(M());
