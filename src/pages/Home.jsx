// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

/** ===========================
 *  SLIDER (text over image)
 *  Put these files in: public/images/
 *  hero1.jpg, hero2.jpg, hero3.jpg  (1920x1080 or similar)
 *  =========================== */
const SLIDE_MS = 2000;

const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
    eyebrow: "Bangladesh • Solar EPC",
    title: "SolarGrid Power Ltd.",
    subtitle:
      "On‑Grid Solar for industries — net‑metering, bill savings, bankable warranties.",
    ctaLabel: "Get a Free Site Survey",
    ctaTo: "/contact",
  },
  {
    id: 2,
    image: "/images/hero2.png",
    eyebrow: "Uptime • Efficiency • Savings",
    title: "Hybrid & Off‑Grid Solutions",
    subtitle:
      "Blend solar, grid & batteries for reliable backup and peak‑shaving.",
    ctaLabel: "Explore Solutions",
    ctaTo: "/products",
  },
  {
    id: 3,
    image: "/images/hero3.png",
    eyebrow: "Service Station Projects",
    title: "Solarized Canopies & Backup",
    subtitle:
      "Safety‑compliant canopy PV + storage to keep operations running.",
    ctaLabel: "See Recent Projects",
    ctaTo: "/projects",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, amount: 0.2 },
};
const cardChild = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
  viewport: { once: true, amount: 0.2 },
};

function AutoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[index];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearInterval(t);
  }, [paused]);

  const progress = useMemo(
    () => (100 * (index + 1)) / slides.length,
    [index]
  );

  const go = (dir) => {
    setIndex((i) =>
      dir === "next" ? (i + 1) % slides.length : (i - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className="relative h-[72vh] min-h-[480px] w-full overflow-hidden"
      aria-label="Featured slides"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image layer with crossfade */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 1.01 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text overlay */}
      <div className="relative z-10 h-full">
        <div className="container-g h-full flex items-end md:items-center pb-10 md:pb-0">
          <motion.div key={`txt-${current.id}`} {...fadeUp} className="max-w-3xl text-white">
            <p className="uppercase tracking-wide text-indigo-200/95 text-sm font-semibold">
              {current.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-1 leading-tight">
              {current.title}
            </h1>
            <p className="mt-3 text-indigo-100/95 text-lg">{current.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to={current.ctaTo}>
                <Button className="shadow-soft">{current.ctaLabel}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="backdrop-blur">
                  Talk to an Engineer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* dots + arrows + progress */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 pb-4">
        <div className="container-g">
          <div className="flex items-center justify-between gap-4">
            <div className="pointer-events-auto flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-6 rounded-full transition ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
            <div className="pointer-events-auto hidden sm:flex gap-2">
              <button
                aria-label="Previous slide"
                onClick={() => go("prev")}
                className="h-9 w-9 rounded-full bg-white/80 hover:bg-white text-slate-900 grid place-items-center"
              >
                ‹
              </button>
              <button
                aria-label="Next slide"
                onClick={() => go("next")}
                className="h-9 w-9 rounded-full bg-white/80 hover:bg-white text-slate-900 grid place-items-center"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full overflow-hidden bg-white/20">
            <div className="h-full bg-white transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* status chip */}
      <div className="absolute right-3 top-3 z-10">
        <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
          {paused ? "Paused" : "Auto‑slide"}
        </span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* ===== 1) SLIDER ===== */}
      <AutoSlider />

      {/* ===== 2) WELCOME / INTRO (like reference intro) ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Welcome to SolarGrid Power Ltd. — Electricity Power Solutions in Bangladesh
          </motion.h2>
          <motion.p
            {...fadeIn}
            className="mt-4 max-w-3xl mx-auto text-center text-slate-600 dark:text-slate-300"
          >
            We are a solar EPC company delivering on‑grid, off‑grid and hybrid systems across Bangladesh,
            including service‑station solarization projects. From design & engineering to commissioning & O&amp;M,
            we use tier‑1 components and certified teams to ensure long‑term performance.
          </motion.p>
          <div className="mt-6 text-center">
            <Link to="/contact"><Button className="shadow-soft">Get a Quotation</Button></Link>
          </div>
        </div>
      </section>

      {/* ===== 3) FEATURED SOLUTIONS (like “Our Products”) ===== */}
      <section className="section bg-slate-50 dark:bg-slate-800/40">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Featured Solar Solutions
          </motion.h2>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: "On‑Grid Systems", text: "Rooftop & ground‑mount PV with net‑metering, tariff savings and green credits.", emoji: "🔌" },
              { title: "Off‑Grid Systems", text: "PV + storage for remote sites; reliable autonomy without grid dependency.", emoji: "🏝️" },
              { title: "Hybrid Systems", text: "Smart blend of solar, grid & batteries for uptime and OPEX reduction.", emoji: "⚡" },
              { title: "Service Station Projects", text: "Solar canopies + backup with compliance and safety‑first design.", emoji: "⛽" },
            ].map((item) => (
              <motion.div key={item.title} variants={cardChild}>
                <motion.div whileHover={{ y: -6, scale: 1.02 }} className="card relative overflow-hidden group">
                  <div className="text-3xl">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-2">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
                  <div className="mt-4">
                    <Link to="/products" className="text-indigo-600 font-semibold hover:underline">Learn more →</Link>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 4) SERVICES & SOLUTIONS (like reference) ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">Service &amp; Solution</motion.h2>
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              ["EPC Contractor", "Turn‑key delivery: design, procurement, construction & commissioning."],
              ["Supply & Installation", "Tier‑1 modules, inverters & BOS with certified installation crews."],
              ["Annual Maintenance", "Periodic checks, cleaning, IV‑curve tests, preventive actions."],
              ["Corporate Services", "Energy audits, ESG reporting inputs & sustainability roadmaps."],
              ["Electrical Consultancy", "SLD, protection coordination, earthing & lightning design."],
              ["Power Maintenance", "Troubleshooting, retrofits, and performance optimization."],
            ].map(([title, text]) => (
              <motion.div key={title} variants={cardChild}>
                <motion.div whileHover={{ y: -6 }} className="card h-full">
                  <h3 className="text-lg font-bold text-indigo-600">{title}</h3>
                  <p className="mt-1 text-sm">{text}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 5) AT A GLANCE / CORE VALUES ===== */}
      <section className="section bg-slate-50 dark:bg-slate-800/40">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">SolarGrid at a Glance</motion.h2>
          <motion.ul
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {[
              "We deliver on‑grid, off‑grid and hybrid solar systems nationwide.",
              "Certified engineers with safety‑first workmanship & QA/QC.",
              "Bankable components and manufacturer‑backed warranties.",
              "Transparent proposals with yield & payback models.",
              "Rapid support with local teams and defined SLAs.",
            ].map((text, i) => (
              <motion.li key={i} variants={cardChild} className="card">{text}</motion.li>
            ))}
          </motion.ul>
          <div className="mt-6 text-center">
            <Link to="/about"><Button variant="outline">View Details</Button></Link>
          </div>
        </div>
      </section>

      {/* ===== 6) LEADERSHIP (like reference) ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">Our Leadership</motion.h2>
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {[
              ["Rahim Uddin", "Chairman", "/images/leader1.jpg"],
              ["Farhana Karim", "Managing Director", "/images/leader2.jpg"],
              ["Engr. Ashik Ali", "Head of Engineering", "/images/leader3.jpg"],
            ].map(([name, role, img]) => (
              <motion.article key={name} variants={cardChild} className="card overflow-hidden">
                <div className="aspect-[16/10] w-full bg-slate-200 dark:bg-slate-700">
                  {/* optional image */}
                  {img && <img src={img} alt={name} className="h-full w-full object-cover" />}
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold">{name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-6 text-center">
            <Link to="/about"><Button variant="outline">View All Team Members</Button></Link>
          </div>
        </div>
      </section>

      {/* ===== 7) CLIENTS & AFFILIATIONS / CERTIFICATIONS ===== */}
      <section className="section bg-slate-50 dark:bg-slate-800/40">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">Clients &amp; Affiliations</motion.h2>

          {/* Clients (logo grid) */}
          <motion.div {...staggerParent} className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["c1.png","c2.png","c3.png","c4.png","c5.png","c6.png"].map((f,i)=>(
              <motion.div key={i} variants={cardChild} className="card flex items-center justify-center py-6">
                <img src={`/images/${f}`} alt={`Client ${i+1}`} className="h-8 w-auto opacity-80" />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-indigo-600">Certifications</h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["cert1.png","cert2.png","cert3.png"].map((f,i)=>(
                  <div key={i} className="card flex items-center justify-center py-6">
                    <img src={`/images/${f}`} alt={`Certificate ${i+1}`} className="h-10 w-auto opacity-80" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/about" className="text-indigo-600 font-semibold hover:underline">All Certificates →</Link>
              </div>
            </div>

            {/* Affiliations */}
            <div>
              <h3 className="text-xl font-bold text-indigo-600">Affiliations</h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["aff1.png","aff2.png","aff3.png"].map((f,i)=>(
                  <div key={i} className="card flex items-center justify-center py-6">
                    <img src={`/images/${f}`} alt={`Affiliation ${i+1}`} className="h-10 w-auto opacity-80" />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/about" className="text-indigo-600 font-semibold hover:underline">Our Affiliations →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8) EVENTS / NEWS ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">Events &amp; News</motion.h2>
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {[
              ["33/11KV 10/14 MVA Sub‑Station Commissioning", "Aug 2025", "/images/event1.jpg"],
              ["SolarGrid Awarded Green Energy Partnership", "July 2025", "/images/event2.jpg"],
            ].map(([title, date, img])=>(
              <motion.article key={title} variants={cardChild} className="card overflow-hidden">
                <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700">
                  {img && <img src={img} alt={title} className="h-full w-full object-cover" />}
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{date}</p>
                </div>
                <div className="mt-3">
                  <Link to="/blog" className="text-indigo-600 font-semibold hover:underline">Check Events →</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== 9) CTA ===== */}
      <section className="section relative overflow-hidden">
        <div className="container-g">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="card relative bg-gradient-to-br from-indigo-600 to-indigo-500 text-white"
          >
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-2xl md:text-3xl font-extrabold">Start Your Solar Journey Today</h3>
            <p className="mt-2 text-indigo-100">
              Talk to our engineers about on‑grid, off‑grid, hybrid, or service station projects.
            </p>
            <div className="mt-4">
              <Link to="/contact">
                <Button className="bg-white text-indigo-700 hover:bg-indigo-50">Contact Us Now</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
