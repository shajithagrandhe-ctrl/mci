const activities = [
  {
    id: "port-development",
    title: "Port Development & Management",
    routeTitle: "Port Development & Marine Terminal Management",
    summary: "Port planning, site selection, terminal development, construction coordination and materials handling services.",
    services: [
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
    tags: ["Port planning", "Terminals", "Project management"]
  },
  {
    id: "offshore-drilling",
    title: "Oil & Gas Drilling",
    routeTitle: "Offshore Drilling / Energy Fleet",
    summary: "Marine support services for oil, gas and offshore energy activity, organized as a discoverable service pathway.",
    services: [
      "Oil & Gas Drilling Support",
      "Offshore Marine Logistics",
      "Energy Fleet Coordination",
      "Platform and Vessel Support",
      "Technical Consultancy"
    ],
    tags: ["Offshore", "Energy", "Marine logistics"]
  },
  {
    id: "marine-repairs",
    title: "Marine Repairs & Certifications",
    routeTitle: "Commercial Marine Repairs / Dry Dock Engineering",
    summary: "Repair, inspection and certification-oriented marine engineering services reflected in the supplied group material.",
    services: [
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
    tags: ["Repairs", "Certification", "Equipment"]
  },
  {
    id: "turbine-engineering",
    title: "Turbine Repairs",
    routeTitle: "Propulsion / Turbine Engineering / Machinery Overhaul",
    summary: "Machinery repair and overhaul services for marine and industrial equipment categories.",
    services: [
      "Dynamic Balancing",
      "Motor Rewinding",
      "Reconditioning Engine Components",
      "Refrigeration & Air Conditioning",
      "Marine Machinery Overhaul"
    ],
    tags: ["Machinery", "Overhaul", "Balancing"]
  },
  {
    id: "marine-surveys",
    title: "Marine Chartering & Inspections",
    routeTitle: "Marine Surveys / Inspections / Statutory Compliance",
    summary: "Inspection, chartering and survey pathways presented without unsupported operational claims.",
    services: [
      "Marine Chartering",
      "Marine Inspections",
      "Gas Free Inspections",
      "Non Destructive Testing",
      "Compass Adjustment",
      "Safety Equipment Checks"
    ],
    tags: ["Inspections", "Survey", "Chartering"]
  },
  {
    id: "green-technologies",
    title: "Green Technologies",
    routeTitle: "Maritime Green Technologies / Decarbonization",
    summary: "Environmental and technical service categories including oily water separator support from the supplied Activities list.",
    services: [
      "Oily Water Separator",
      "Environmental Consultancy",
      "Green Technologies",
      "Marine Equipment Support",
      "Technical Advisory"
    ],
    tags: ["Environment", "OWS", "Advisory"]
  },
  {
    id: "ship-design",
    title: "Yachts & Workboats",
    routeTitle: "Ship Design / Naval Architecture / Marine Engineering",
    summary: "Shipyard, workboat and marine design support connected to the supplied Activities directory.",
    services: [
      "Yachts & Workboats",
      "Shipyards Design & Construction",
      "Port & Terminal Planning and Design",
      "Marine Engineering Advisory",
      "Project Management"
    ],
    tags: ["Design", "Workboats", "Engineering"]
  },
  {
    id: "dredging",
    title: "Import & Export",
    routeTitle: "Dredging / Marine Infrastructure",
    summary: "Marine infrastructure and trade support category, kept factual to the supplied directory labels.",
    services: [
      "Import & Export",
      "Coal Imports",
      "Materials Handling",
      "Port & Terminal Construction",
      "Marine Infrastructure Coordination"
    ],
    tags: ["Infrastructure", "Materials", "Trade"]
  },
  {
    id: "gas-detectors",
    title: "Gas Detectors",
    routeTitle: "Gas Detectors & Monitoring",
    summary: "Gas detection equipment categories listed in the supplied Group screen.",
    services: ["Single Gas Detector", "Multi Gas Detector", "Fixed Gas System", "Gas Free Inspections"],
    tags: ["Detectors", "Inspection", "Equipment"]
  },
  {
    id: "training-institutes",
    title: "Training Institutes",
    routeTitle: "Training Institutes",
    summary: "Training category from the supplied Activities directory.",
    services: ["Training Institutes", "Marine Equipment Orientation", "Safety Equipment Familiarization"],
    tags: ["Training", "Safety", "Marine"]
  }
];

const groupEntities = [
  "Marine Corporation of India",
  "Mega Corp International",
  "Marine Charterers & Inspectors",
  "MCI World Dubai",
  "MCI World Singapore",
  "MCI World Sri Lanka",
  "MCI World Russia"
];

const contact = {
  address: ['"MCI TOWERS"', "25-12-31, KOTAVEEDHI", "VISAKHAPATNAM 530001"],
  phone: "+91 - 891 - 2561377",
  mobile: "+91 - 984 - 8194806/807",
  email: "info@mcigroup.co",
  web: "www.mcigroup.co",
  emails: [
    ["GROUP Email", "info@mcigroup.co"],
    ["INDIA Office", "india@mcigroup.co"],
    ["U.A.E. Office", "dubai@mcigroup.co"],
    ["SINGAPORE Office", "singapore@mcigroup.co"],
    ["RUSSIA Office", "russia@mcigroup.co"],
    ["SRILANKA Office", "lanka@mcigroup.co"]
  ]
};

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/activities": renderActivities,
  "/group": renderGroup,
  "/global-presence": renderGlobalPresence,
  "/investor-relations": renderInvestor,
  "/contact": renderContact
};

const main = document.querySelector("#main");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const activitiesNav = document.querySelector("[data-activities-nav]");
const megaLinks = document.querySelector("[data-mega-links]");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function path() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function navigate(url) {
  window.history.pushState({}, "", url);
  render();
}

function section(title, body) {
  return `<section class="page reveal"><h1 class="section-title">${title}</h1>${body}</section>`;
}

function markActive() {
  const current = path();
  document.querySelectorAll("[data-link]").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === current || (href !== "/" && current.startsWith(href));
    link.classList.toggle("active", isActive);
  });
}

function setupMegaMenu() {
  megaLinks.innerHTML = activities.slice(0, 8).map((item) => (
    `<a href="/activities/${item.id}" data-link>${escapeHtml(item.routeTitle)}</a>`
  )).join("");
}

function activityCards(limit = activities.length) {
  return activities.slice(0, limit).map((item) => `
    <article class="activity-card">
      <span class="eyebrow">${escapeHtml(item.title)}</span>
      <h3>${escapeHtml(item.routeTitle)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <div class="tag-list">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <a class="btn secondary" href="/activities/${item.id}" data-link>View Details</a>
    </article>
  `).join("");
}

function renderHome() {
  return section("Marine Corporation of India", `
    <div class="panel hero-panel">
      <div>
        <span class="eyebrow">MCI Group of Companies</span>
        <h1>Marine, energy, port and industrial service pathways.</h1>
        <p class="lead">
          The redesigned MCI website brings the supplied corporate pages, Activities directory and service-detail references into one connected frontend experience.
        </p>
        <div class="actions">
          <a class="btn" href="/activities" data-link>Explore Activities</a>
          <a class="btn secondary" href="/contact" data-link>Contact MCI</a>
        </div>
      </div>
      <div class="corporate-card">
        <h2>Recognizable MCI workflow</h2>
        <p>
          Header navigation opens the Activities menu, leads to the tabbed directory, then into detailed activity pages with related content and contact routes.
        </p>
      </div>
    </div>
    <div class="panel reveal" style="margin-top:2rem">
      <span class="eyebrow">Primary Capabilities</span>
      <h2>Activities represented in the supplied material</h2>
      <div class="home-grid">${activityCards(6)}</div>
    </div>
  `);
}

function renderAbout() {
  return section("About Us", `
    <div class="panel about-grid">
      <div class="corporate-card">
        <h2>MCI Group</h2>
        <p>
          The driving passion to constantly improve, constantly strive, and constantly challenge the status quo saw a micro enterprise transform into a global entity.
        </p>
        <p>
          Founded in 1990, the MCI Group is presented in the supplied source as a diversified, multi-locational conglomerate with interests in Marine, Oil & Gas, Ports, Coal, Power & Shipping.
        </p>
      </div>
      <div>
        <h2>The Group Companies of:</h2>
        <div class="card-grid">
          ${groupEntities.map((entity) => `<div class="check-item"><span class="check"></span><span>${escapeHtml(entity)}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `);
}

function renderActivities() {
  const activeId = new URLSearchParams(window.location.search).get("tab") || activities[0].id;
  const active = activities.find((item) => item.id === activeId) || activities[0];
  return section("Activities", `
    <div class="panel tabs-layout" data-tabs>
      <div class="tab-list" role="tablist" aria-label="Activities categories">
        ${activities.map((item) => `
          <button
            type="button"
            role="tab"
            data-tab="${item.id}"
            aria-selected="${item.id === active.id}"
            aria-controls="activity-panel"
          >${escapeHtml(item.title)}</button>
        `).join("")}
      </div>
      <div class="tab-panel" id="activity-panel" role="tabpanel" tabindex="0">
        ${activityPanel(active)}
      </div>
    </div>
  `);
}

function activityPanel(item) {
  return `
    <span class="eyebrow">${escapeHtml(item.routeTitle)}</span>
    <p class="lead">${escapeHtml(item.summary)}</p>
    <ul class="service-list">
      ${item.services.map((service) => `<li><span class="check"></span><span>${escapeHtml(service)}</span></li>`).join("")}
    </ul>
    <div class="actions">
      <a class="btn" href="/activities/${item.id}" data-link>Open Detail Page</a>
      <a class="btn secondary" href="/contact" data-link>Send Enquiry</a>
    </div>
  `;
}

function renderActivityDetail(item) {
  return section(item.routeTitle, `
    <div class="panel">
      <div class="breadcrumb">
        <a href="/activities" data-link>Activities</a><span>/</span><span>${escapeHtml(item.title)}</span>
      </div>
      <div class="detail-hero">
        <div>
          <span class="eyebrow">Activity Detail</span>
          <h1>${escapeHtml(item.routeTitle)}</h1>
          <p class="lead">${escapeHtml(item.summary)}</p>
          <div class="actions">
            <a class="btn" href="/contact" data-link>Submit Activity Enquiry</a>
            <a class="btn secondary" href="/activities?tab=${item.id}" data-link>Return to Directory</a>
          </div>
        </div>
        <aside class="detail-aside">
          <strong>Service scope</strong>
          <p>This page preserves the supplied service structure while avoiding unsupported statistics, vessel names, financials, certifications or claims.</p>
        </aside>
      </div>
      <div class="card-grid related-strip">
        ${item.services.map((service) => `
          <div class="corporate-card">
            <div class="check-item"><span class="check"></span><h3>${escapeHtml(service)}</h3></div>
          </div>
        `).join("")}
      </div>
      <div class="related-strip">
        <h2>Related Activities</h2>
        <div class="card-grid">
          ${activities.filter((candidate) => candidate.id !== item.id).slice(0, 3).map((candidate) => `
            <a class="activity-card" href="/activities/${candidate.id}" data-link>
              <span class="eyebrow">${escapeHtml(candidate.title)}</span>
              <h3>${escapeHtml(candidate.routeTitle)}</h3>
              <p>${escapeHtml(candidate.summary)}</p>
            </a>
          `).join("")}
        </div>
      </div>
    </div>
  `);
}

function renderGroup() {
  return section("Group", `
    <div class="panel tabs-layout" data-group-tabs>
      <div class="tab-list" role="tablist" aria-label="MCI group entities">
        ${groupEntities.map((entity, index) => `<button type="button" role="tab" aria-selected="${index === 0}" data-group="${escapeHtml(entity)}">${escapeHtml(entity)}</button>`).join("")}
      </div>
      <div class="tab-panel" id="group-panel">
        ${groupPanel(groupEntities[0])}
      </div>
    </div>
  `);
}

function groupPanel(entity) {
  const services = entity === "Marine Corporation of India"
    ? activities[2].services.concat(["SCBA / BASCCA SETS", "Single Gas Detector", "Multi Gas Detector", "Fixed Gas System"])
    : ["Marine services", "Regional contact pathway", "Activity coordination"];
  return `
    <span class="eyebrow">Group Entity</span>
    <h2>${escapeHtml(entity)}</h2>
    <ul class="service-list">
      ${services.map((service) => `<li><span class="check"></span><span>${escapeHtml(service)}</span></li>`).join("")}
    </ul>
  `;
}

function renderGlobalPresence() {
  const locations = ["India", "U.A.E.", "Singapore", "Russia", "Sri Lanka"];
  return section("Global Presence", `
    <div class="panel">
      <div class="map-card" data-map>
        <span class="star-pin" style="left:50%;top:40%">★</span>
        <span class="pin" style="left:43%;top:35%"></span>
        <span class="pin" style="left:38%;top:32%"></span>
        <span class="pin" style="left:59%;top:36%"></span>
        <span class="pin" style="left:69%;top:30%"></span>
        <span class="pin" style="left:55%;top:53%"></span>
      </div>
      <p class="lead">
        The supplied contact and group material identifies India, U.A.E., Singapore, Russia and Sri Lanka contact pathways. The map is interactive only for those supplied locations.
      </p>
      <div class="location-list" data-locations>
        ${locations.map((location, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-location="${location}">${location}</button>`).join("")}
      </div>
      <p class="form-status" data-location-output>Selected presence: India</p>
    </div>
  `);
}

function renderInvestor() {
  return section("Investor Relationship", `
    <div class="panel">
      <span class="eyebrow">Corporate Information</span>
      <h1>Investor Relationship</h1>
      <p class="lead">
        The supplied materials include an Investor Relationship navigation destination but do not provide verified financial figures, share prices, ratings, stock identifiers or performance data.
      </p>
      <div class="card-grid">
        <div class="corporate-card"><h3>Verified Content Policy</h3><p>No financial data is fabricated in this implementation.</p></div>
        <div class="corporate-card"><h3>Corporate Enquiries</h3><p>Use the supplied contact channels for corporate and investor relationship enquiries.</p></div>
        <div class="corporate-card"><h3>Document Area</h3><p>Reserved for verified investor documents when supplied.</p></div>
      </div>
      <div class="actions"><a class="btn" href="/contact" data-link>Contact MCI</a></div>
    </div>
  `);
}

function renderContact() {
  return section("Contact Us", `
    <div class="panel contact-grid">
      <div class="large-logo">
        <span>
          <span class="brand-mark" aria-hidden="true"><span class="wheel">MCI</span><span class="anchor-shank"></span></span>
          <span class="brand-text"><strong>MCI</strong><small>Group of Companies</small></span>
        </span>
      </div>
      <div class="info-lines">
        <p><strong>Head Office :</strong><br>${contact.address.map(escapeHtml).join("<br>")}</p>
        <p>
          Ph&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${escapeHtml(contact.phone)}<br>
          Mob&nbsp;&nbsp;&nbsp;&nbsp;: ${escapeHtml(contact.mobile)}<br>
          Email&nbsp;&nbsp;: <a href="mailto:${contact.email}">${escapeHtml(contact.email)}</a><br>
          Web&nbsp;&nbsp;&nbsp;&nbsp;: ${escapeHtml(contact.web)}
        </p>
        <p><strong>Email Contacts :</strong></p>
        ${contact.emails.map(([label, email]) => `<div>${escapeHtml(label)} : <a href="mailto:${email}">${escapeHtml(email)}</a></div>`).join("")}
      </div>
    </div>
    <form class="panel reveal" style="margin-top:2rem" data-contact-form novalidate>
      <h2>Send Us a Message</h2>
      <div class="form-grid">
        ${field("name", "Name", "text")}
        ${field("mobile", "Mobile No", "tel")}
        ${field("email", "Email", "email")}
        <div class="form-field full">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <span class="error" data-error-for="message"></span>
        </div>
      </div>
      <div class="actions"><button class="btn" type="submit">Send</button></div>
      <div class="form-status" role="status" aria-live="polite" data-form-status></div>
    </form>
  `);
}

function field(name, label, type) {
  return `
    <div class="form-field">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" required />
      <span class="error" data-error-for="${name}"></span>
    </div>
  `;
}

function render() {
  const current = path();
  const match = current.match(/^\/activities\/([^/]+)$/);
  if (match) {
    const item = activities.find((activity) => activity.id === match[1]);
    main.innerHTML = item ? renderActivityDetail(item) : renderActivities();
  } else {
    main.innerHTML = (routes[current] || renderHome)();
  }
  main.focus({ preventScroll: true });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  activitiesNav.classList.remove("open");
  markActive();
  bindPage();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function bindPage() {
  document.querySelectorAll("[data-tabs] [role='tab']").forEach((button) => {
    button.addEventListener("click", () => {
      const item = activities.find((activity) => activity.id === button.dataset.tab);
      if (!item) return;
      document.querySelectorAll("[data-tabs] [role='tab']").forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
      document.querySelector("#activity-panel").innerHTML = activityPanel(item);
      window.history.replaceState({}, "", `/activities?tab=${item.id}`);
      bindLinks();
    });
  });

  document.querySelectorAll("[data-group-tabs] [role='tab']").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-group-tabs] [role='tab']").forEach((tab) => tab.setAttribute("aria-selected", String(tab === button)));
      document.querySelector("#group-panel").innerHTML = groupPanel(button.dataset.group);
    });
  });

  const locationOutput = document.querySelector("[data-location-output]");
  document.querySelectorAll("[data-location]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-location]").forEach((item) => item.classList.toggle("active", item === button));
      locationOutput.textContent = `Selected presence: ${button.dataset.location}`;
    });
  });

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const errors = {};
      ["name", "mobile", "email", "message"].forEach((name) => {
        if (!String(data.get(name) || "").trim()) errors[name] = "This field is required.";
      });
      if (data.get("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email"))) {
        errors.email = "Enter a valid email address.";
      }
      form.querySelectorAll("[data-error-for]").forEach((node) => {
        node.textContent = errors[node.dataset.errorFor] || "";
      });
      const status = form.querySelector("[data-form-status]");
      if (Object.keys(errors).length) {
        status.textContent = "Please correct the highlighted fields.";
        return;
      }
      form.reset();
      status.textContent = "Your enquiry has been prepared in the frontend. No backend submission is configured for this version.";
    });
  }

  bindLinks();
  reveal();
}

function bindLinks() {
  document.querySelectorAll("a[data-link]").forEach((link) => {
    link.onclick = (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:")) return;
      if (link.classList.contains("nav-dropdown-trigger") && window.matchMedia("(max-width: 760px)").matches) {
        event.preventDefault();
        activitiesNav.classList.toggle("open");
        link.setAttribute("aria-expanded", String(activitiesNav.classList.contains("open")));
        return;
      }
      event.preventDefault();
      navigate(href);
    };
  });
}

function reveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  nodes.forEach((node) => observer.observe(node));
}

setupMegaMenu();
bindLinks();
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    nav.classList.remove("open");
    activitiesNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
document.querySelector("[data-back-top]").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("popstate", render);
render();
