import React from 'react'
import Card from '../components/Card.jsx'

export default function Careers() {
  return (
    <div className="section">
      <div className="container-g">
        <h1 className="h1">Career Opportunities</h1>
        <p className="mt-3 max-w-3xl">Join our team and help drive Bangladesh’s clean‑energy transition.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Sales & Marketing Manager"><p><strong>Location:</strong> Dhaka</p><p>Lead sales strategy, develop solar project pipeline, manage client relationships.</p><p><strong>Req:</strong> Bachelor’s degree; 5+ years in energy sector sales.</p></Card>
          <Card title="Solar Project Engineer"><p><strong>Location:</strong> Chattogram</p><p>PV system design, site assessments, installation QA & commissioning.</p><p><strong>Req:</strong> B.Sc. EEE; 3+ years solar project experience.</p></Card>
          <Card title="O&M Technician"><p><strong>Location:</strong> Rajshahi</p><p>Routine maintenance, troubleshooting, performance monitoring & reporting.</p><p><strong>Req:</strong> Diploma/Trade; hands‑on PV experience preferred.</p></Card>
        </div>
        <div className="mt-12 card"><h2 className="text-2xl font-bold text-indigo-600 mb-2">How to Apply</h2><p>Send your CV and cover letter to <a className="text-indigo-600 hover:underline" href="mailto:hr@soloargridpower.com">hr@soloargridpower.com</a>. Use the job title in the subject line.</p></div>
      </div>
    </div>
  )
}
