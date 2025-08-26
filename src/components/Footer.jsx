import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-g grid gap-8 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 font-extrabold mb-3">
            <img src="/images/logo.svg" className="h-8 w-8" alt="logo" />
            <span>SolarGrid Power Ltd.</span>
          </div>
          <p className="text-sm text-slate-200">
            Reliable solar energy solutions for businesses and homes in Bangladesh. From design and installation to maintenance and monitoring, we provide complete EPC services.
          </p>
          
          {/* Follow Us */}
          <div className="mt-6">
            <h4 className="font-bold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.facebook.com/SolarGridPower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/solarggridpower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/SolarGridPower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/solarggridpower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-white">Quick Links</h4>
          <ul className="grid gap-2 text-sm">
            <li><Link to="/about" className="hover:underline text-white hover:text-secondary">About Us</Link></li>
            <li><Link to="/products" className="hover:underline text-white hover:text-secondary">Products/Services</Link></li>
            <li><Link to="/projects" className="hover:underline text-white hover:text-secondary">Projects</Link></li>
            <li><Link to="/careers" className="hover:underline text-white hover:text-secondary">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-3 text-white">Contact</h4>
          <ul className="grid gap-2 text-sm">
            <li>House 123, Road 45, Dhaka, Bangladesh</li>
            <li>+880 1234-567890</li>
            <li><a href="mailto:info@soloargridpower.com" className="hover:underline text-white hover:text-secondary">info@soloargridpower.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary dark:bg-secondary py-4 text-center text-sm text-slate-300">
        <p>© 2025 SolarGrid Power Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
