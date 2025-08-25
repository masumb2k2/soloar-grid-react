import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Button from '../components/Button.jsx'

export default function Contact() {
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID') // <-- replace with your Formspree ID
  return (
    <div className="section">
      <div className="container-g">
        <h1 className="h1">Contact Us</h1>
        <p className="mt-3 max-w-3xl">Questions or a project in mind? Send us a message and our team will respond promptly.</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section>
            {state.succeeded ? (
              <div className="card">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">Thanks!</h3>
                <p>Your message has been sent. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card grid gap-4">
                <div>
                  <label htmlFor="name" className="font-semibold">Your Name</label>
                  <input id="name" type="text" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/40 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold">Your Email</label>
                  <input id="email" type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/40 px-4 py-2" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="subject" className="font-semibold">Subject</label>
                  <input id="subject" type="text" name="subject" className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/40 px-4 py-2" />
                </div>
                <div>
                  <label htmlFor="message" className="font-semibold">Message</label>
                  <textarea id="message" name="message" rows="6" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/40 px-4 py-2" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <Button type="submit" disabled={state.submitting}>Send Message</Button>
              </form>
            )}
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Tip: Replace the Formspree ID in this page to receive emails.</p>
          </section>

          <section className="grid gap-4">
            <div className="card">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Office</h3>
              <ul className="text-sm grid gap-1">
                <li><strong>Address:</strong> House 123, Road 45, J Block, Baridhara, Dhaka</li>
                <li><strong>Phone:</strong> +880 1234-567890</li>
                <li><strong>Email:</strong> info@soloargridpower.com</li>
              </ul>
            </div>
            <div className="card overflow-hidden">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Map</h3>
              <div className="relative pt-[56.25%]">
                <iframe className="absolute inset-0 w-full h-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Baridhara%20Dhaka%20Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
