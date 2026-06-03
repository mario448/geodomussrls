const root = document.documentElement;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const canvas = document.querySelector(".hero-canvas");
const ctx = canvas.getContext("2d", { alpha: true });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const projectDetails = {
  trieste: {
    status: "Completato",
    title: "Restauro facciata Trieste Porto Vecchio",
    description: "Recupero involucro con intonaci tecnici, ripristini strutturali e nuova protezione salina.",
    duration: "9 mesi",
    area: "3.200 m²",
    result: "+18 anni vita utile"
  },
  udine: {
    status: "In corso",
    title: "Campus residenziale Udine Nord",
    description: "Nuovo complesso NZEB con struttura mista, facciata ventilata e gestione BIM del cronoprogramma.",
    duration: "14 mesi",
    area: "8.400 m²",
    result: "-42% consumi"
  },
  pordenone: {
    status: "Completato",
    title: "Hub industriale Pordenone Ovest",
    description: "Ampliamento produttivo con copertura isolata, pavimenti industriali e fasi a stabilimento attivo.",
    duration: "7 mesi",
    area: "11.800 m²",
    result: "0 giorni fermo"
  },
  gorizia: {
    status: "Progettazione",
    title: "Riqualificazione energetica Gorizia",
    description: "Cappotto termico, copertura ventilata e serramenti coordinati per un condominio anni Settanta.",
    duration: "5 mesi",
    area: "4.600 m²",
    result: "Classe A3"
  }
};

const archiveProjects = [
  { title: "Villa urbana Tavagnacco", city: "Udine", type: "civile", text: "Struttura antisismica, patio interno e finiture minerali." },
  { title: "Condominio classe A4", city: "Gorizia", type: "energia", text: "Cappotto, impianto radiante e serramenti ad alta tenuta." },
  { title: "Linea produttiva coperta", city: "Pordenone", type: "industriale", text: "Ampliamento industriale senza interruzione dell'attività." },
  { title: "Facciata sul Carso", city: "Trieste", type: "energia", text: "Ripristini, isolamento e protezione dalle condizioni marine." },
  { title: "Residenza compatta", city: "Gemona", type: "civile", text: "Casa monofamiliare con cantiere a bassa impronta." },
  { title: "Polo logistico", city: "Codroipo", type: "industriale", text: "Pavimentazioni, portali e gestione acque meteoriche." }
];

let activeFilter = "all";
let searchValue = "";
let animationFrame;

function formatNumber(value) {
  return new Intl.NumberFormat("it-IT").format(Math.round(value));
}

function updateScrollState() {
  const max = document.body.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  root.style.setProperty("--scroll", `${progress * 100}%`);
  root.style.setProperty("--hero-progress", Math.min(window.scrollY / window.innerHeight, 1).toFixed(3));
  header.classList.toggle("scrolled", window.scrollY > 24);

  const process = document.querySelector(".process");
  if (process) {
    const rect = process.getBoundingClientRect();
    const build = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight * .2), .18), 1);
    process.style.setProperty("--build", build.toFixed(3));
  }
}

function sizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(canvas.offsetWidth * ratio);
  canvas.height = Math.floor(canvas.offsetHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawBlueprint(time = 0) {
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(190, 235, 245, .38)";
  ctx.fillStyle = "rgba(240, 130, 53, .7)";

  const offset = reduceMotion ? 0 : (time * .018) % 34;
  for (let x = -60; x < w + 80; x += 34) {
    ctx.beginPath();
    ctx.moveTo(x + offset, h * .18);
    ctx.lineTo(x - w * .18 + offset, h * .92);
    ctx.stroke();
  }

  for (let y = h * .36; y < h + 120; y += 34) {
    ctx.beginPath();
    ctx.moveTo(0, y - offset);
    ctx.lineTo(w, y - h * .18 - offset);
    ctx.stroke();
  }

  const pulse = reduceMotion ? 1 : .55 + Math.sin(time * .003) * .25;
  ctx.globalAlpha = pulse;
  ctx.beginPath();
  ctx.arc(w * .78, h * .38, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  if (!reduceMotion) {
    animationFrame = requestAnimationFrame(drawBlueprint);
  }
}

function setProject(key) {
  const project = projectDetails[key];
  if (!project) return;
  document.querySelectorAll(".pin").forEach((pin) => pin.classList.toggle("active", pin.dataset.project === key));
  document.querySelector("#project-status").textContent = project.status;
  document.querySelector("#project-title").textContent = project.title;
  document.querySelector("#project-description").textContent = project.description;
  document.querySelector("#project-duration").textContent = project.duration;
  document.querySelector("#project-area").textContent = project.area;
  document.querySelector("#project-result").textContent = project.result;
}

function renderArchive() {
  const grid = document.querySelector(".project-grid");
  const needle = searchValue.trim().toLowerCase();
  const items = archiveProjects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.type === activeFilter;
    const haystack = `${project.title} ${project.city} ${project.type} ${project.text}`.toLowerCase();
    return matchesFilter && (!needle || haystack.includes(needle));
  });

  grid.innerHTML = items.map((project) => `
    <article class="project-tile reveal visible">
      <span>${project.city} / ${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.text}</p>
    </article>
  `).join("");
}

function updateEnergy() {
  const surface = Number(document.querySelector("#surface").value);
  const before = surface * 175;
  const after = before * .4;
  const saving = (before - after) * .22;
  document.querySelector("#surface-value").textContent = formatNumber(surface);
  document.querySelector("#before-value").textContent = `${formatNumber(before)} kWh`;
  document.querySelector("#after-value").textContent = `${formatNumber(after)} kWh`;
  document.querySelector("#saving-value").textContent = `Risparmio stimato annuo: ${formatNumber(saving)} euro`;
  document.querySelector("#before-bar").style.setProperty("--bar", "100%");
  document.querySelector("#after-bar").style.setProperty("--bar", "40%");
}

function animateCount(element) {
  const target = Number(element.dataset.count);
  const start = performance.now();
  const duration = 1200;

  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    element.textContent = formatNumber(target * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function initObservers() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .16 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .45 });

  document.querySelectorAll("[data-count]").forEach((element) => countObserver.observe(element));
}

menuToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".pin").forEach((pin) => {
  pin.addEventListener("click", () => setProject(pin.dataset.project));
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderArchive();
  });
});

document.querySelector("#project-search").addEventListener("input", (event) => {
  searchValue = event.target.value;
  renderArchive();
});

document.querySelector("#surface").addEventListener("input", updateEnergy);

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Richiesta pronta per l'invio";
});

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", () => {
  sizeCanvas();
  updateScrollState();
}, { passive: true });

sizeCanvas();
drawBlueprint();
updateScrollState();
setProject("udine");
renderArchive();
updateEnergy();
initObservers();

if (reduceMotion && animationFrame) {
  cancelAnimationFrame(animationFrame);
}
