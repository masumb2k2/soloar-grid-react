import React from 'react'
import Card from '../components/Card.jsx'

export default function Projects() {
  return (
    <div className="section">
      <div className="container-g">
        <h1 className="h1">Project Portfolio</h1>
        <p className="mt-3 max-w-3xl">Selected deployments showcasing our capabilities.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="50kW Factory Rooftop">Grid‑tied PV on an industrial rooftop cutting bills by ~30%.</Card>
          <Card title="2MW Solar Farm">Utility‑scale generation supplying clean energy to the local grid.</Card>
          <Card title="Solar Irrigation">Solar pumping for agriculture—reliable water with lower OPEX.</Card>
          <Card title="School Rooftop 30kW">Clean power for classrooms and labs with safety compliance.</Card>
          <Card title="Warehouse 120kW">Daytime self‑consumption and optimized demand charges.</Card>
          <Card title="Office 15kW Hybrid">Battery‑backed power for outages and critical loads.</Card>
        </div>
      </div>
    </div>
  )
}
