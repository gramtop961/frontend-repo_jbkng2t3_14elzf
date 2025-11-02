import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* Gallery */}
        <section id="gallery" className="relative py-16 sm:py-24 bg-gradient-to-b from-black/95 to-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold">Recent looks</h2>
                <p className="mt-2 text-white/70">A peek at styles our clients are loving.</p>
              </div>
              <div className="hidden sm:block text-sm text-white/60">Swipe or scroll</div>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[ 
                'https://images.unsplash.com/photo-1517495306984-f84210f9daa3?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1559599238-0e096e5d2a9b?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517363898874-7372d0f93cd8?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1582092728736-bf57f85b988a?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516977048768-35f7dd7bcd65?q=80&w=1600&auto=format&fit=crop',
              ].map((src, i) => (
                <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <img src={src} alt="Salon style" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Booking />
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <p>© {new Date().getFullYear()} love.hair — All rights reserved.</p>
          <p>
            Designed with <span className="text-pink-400">♥</span> for vibrant self-expression.
          </p>
        </div>
      </footer>
    </div>
  );
}
