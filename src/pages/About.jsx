// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

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

export default function About() {
  return (
    <div className="relative">
      {/* ===== HEADER / INTRO ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h1 {...fadeIn} className="h1 text-center">
            About SolarGrid Power Ltd.
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="mt-4 max-w-3xl mx-auto text-center text-slate-600 dark:text-slate-300"
          >
            We’re a Bangladesh‑wide **solar EPC** delivering **on‑grid, off‑grid, hybrid**
            and **service‑station** projects—end‑to‑end: design, engineering, procurement,
            construction, commissioning, and O&amp;M. Our mission is dependable clean power with
            tier‑1 components and certified engineers.
          </motion.p>
        </div>
      </section>

      {/* ===== MISSION & VISION (card view with image) ===== */}
      <section className="section bg-slate-50 dark:bg-slate-800/40">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Mission &amp; Vision
          </motion.h2>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {/* Mission card */}
            <motion.article variants={cardChild}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="card overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700">
                  {/* Put /images/mission.jpg in public/images/ */}
                  <img
                    src="/images/mission.jpg"
                    alt="Mission"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-indigo-600">Our Mission</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    Deliver innovative, dependable solar solutions—maximizing uptime, safety,
                    and ROI for Bangladesh’s industries and communities.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
              </motion.div>
            </motion.article>

            {/* Vision card */}
            <motion.article variants={cardChild}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="card overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700">
                  {/* Put /images/vision.jpg in public/images/ */}
                  <img
                    src="/images/vision.jpg"
                    alt="Vision"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-indigo-600">Our Vision</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    A cleaner national grid—where solar is accessible, bankable, and everywhere,
                    powering sustainable growth.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
              </motion.div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* ===== LEADERSHIP & TEAM (4 cards with image + details) ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Leadership &amp; Team
          </motion.h2>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { name: "Rahim Uddin", role: "Chairman", img: "/images/team1.jpg" },
              { name: "Farhana Karim", role: "Managing Director", img: "/images/team2.jpg" },
              { name: "Engr. Ashik Ali", role: "Head of Engineering", img: "/images/team3.jpg" },
              { name: "Nusrat Jahan", role: "Head of Operations", img: "/images/team4.jpg" },
            ].map((m) => (
              <motion.article key={m.name} variants={cardChild}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="card overflow-hidden group h-full"
                >
                  <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-700">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{m.role}</p>
                    <p className="mt-2 text-sm">
                      10+ years in solar EPC, safety‑first leadership, and quality assurance.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (icon cards) ===== */}
      <section className="section bg-slate-50 dark:bg-slate-800/40">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Why Choose Us
          </motion.h2>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Tier‑1 Components",
                text: "Bankable modules, inverters & BOS with strong warranties.",
                icon: "🛡️",
              },
              {
                title: "Certified Engineers",
                text: "NEC‑aligned safety practices, QA/QC checklists, commissioning.",
                icon: "👷‍♂️",
              },
              {
                title: "Transparent ROI",
                text: "Yield simulations, payback modeling, tariff optimization.",
                icon: "📈",
              },
              {
                title: "Nationwide Service",
                text: "Rapid response & SLAs across Bangladesh.",
                icon: "🧭",
              },
              {
                title: "End‑to‑End EPC",
                text: "Design to O&M—one accountable partner.",
                icon: "🔁",
              },
              {
                title: "Monitoring & O&M",
                text: "Real‑time performance and preventive maintenance.",
                icon: "🛰️",
              },
            ].map((i) => (
              <motion.div key={i.title} variants={cardChild}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="card relative overflow-hidden group h-full"
                >
                  <div className="text-3xl">{i.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-600 mt-2">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{i.text}</p>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS (image + text card view) ===== */}
      <section className="section">
        <div className="container-g">
          <motion.h2 {...fadeIn} className="h2 text-center">
            Certifications
          </motion.h2>

          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {[
              { img: "/images/cert1.png", title: "ISO 9001 (QMS)", text: "Quality management for consistent delivery." },
              { img: "/images/cert2.png", title: "ISO 14001 (EMS)", text: "Environmental management and compliance." },
              { img: "/images/cert3.png", title: "OEM Partner", text: "Authorized partnership with leading brands." },
            ].map((c) => (
              <motion.article key={c.title} variants={cardChild}>
                <motion.div whileHover={{ y: -6, scale: 1.02 }} className="card overflow-hidden group h-full">
                  <div className="flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200/70 dark:border-slate-700/60">
                    <img src={c.img} alt={c.title} className="h-12 w-auto" />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-bold text-indigo-600">{c.title}</h3>
                    <p className="mt-1 text-sm">{c.text}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-indigo-500/20 transition-colors" />
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Button variant="outline">See All Certificates</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
