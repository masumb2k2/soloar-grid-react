import React from 'react'
import Card from '../components/Card.jsx'

export default function Products() {
  return (
    <div className="section">
      <div className="container-g">
        <h1 className="h1">Products & Services</h1>
        <p className="mt-3 max-w-3xl">Comprehensive offerings to meet your renewable energy goals.</p>

        <h2 className="h2 mt-10">Solar Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Solar PV Panels">High‑efficiency modules for rooftops and utility‑scale arrays.</Card>
          <Card title="Inverters">On‑grid and off‑grid inverters with advanced MPPT and monitoring.</Card>
          <Card title="Energy Storage">Lithium‑ion battery systems for backup and peak shaving.</Card>
        </div>

        <h2 className="h2 mt-12">Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Design & Engineering">Load analysis, simulation, and optimized system design.</Card>
          <Card title="Installation">Certified installers delivering safe, high‑quality workmanship.</Card>
          <Card title="O&M & Monitoring">Maintenance plans and real‑time performance tracking.</Card>
        </div>
      </div>
    </div>
  )
}
