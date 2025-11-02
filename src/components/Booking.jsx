import { useState } from 'react';
import { CalendarDays, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Precision Cut');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="relative py-20 sm:py-28 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Book your glow-up</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Choose a service and drop your details. We’ll confirm your appointment time shortly.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/10"><Phone size={16} /></span>
                <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/10"><Mail size={16} /></span>
                <a href="mailto:hello@love.hair" className="hover:text-white transition">hello@love.hair</a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CalendarDays className="text-green-400" size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Request received</h3>
                <p className="mt-2 text-white/80">We’ll be in touch shortly to lock in your time. Can’t wait to see you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/80 mb-1">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none text-white placeholder-white/40 focus:border-pink-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none text-white placeholder-white/40 focus:border-pink-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1">Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none text-white focus:border-pink-500"
                  >
                    <option className="bg-black">Precision Cut</option>
                    <option className="bg-black">Creative Color</option>
                    <option className="bg-black">Healthy Hair Ritual</option>
                    <option className="bg-black">Express Styling</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 font-medium shadow-lg shadow-pink-500/30 transition"
                >
                  Request booking
                </button>
                <p className="text-xs text-white/60">
                  Submitting this form sends a request — we’ll follow up by email to confirm your appointment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
