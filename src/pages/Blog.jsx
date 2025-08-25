import React from 'react'
import Card from '../components/Card.jsx'

const posts = [
  { date: 'July 15, 2025', title: 'Energy Award 2025', excerpt: 'Recognized for innovation in solar microgrids powering remote communities.' },
  { date: 'June 10, 2025', title: 'Green Financing', excerpt: 'Partnered with XYZ Bank for accessible solar project financing.' },
  { date: 'May 5, 2025', title: 'Chattogram Office', excerpt: 'Expanding support and service coverage across Bangladesh.' },
]

export default function Blog() {
  return (
    <div className="section">
      <div className="container-g">
        <h1 className="h1">Company News & Blog</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Card key={i} title={`${p.title} — ${p.date}`}>{p.excerpt}</Card>
          ))}
        </div>
      </div>
    </div>
  )
}
