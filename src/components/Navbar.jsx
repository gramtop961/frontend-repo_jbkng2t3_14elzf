import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/30 rounded-2xl border border-white/10 shadow-2xl">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#" className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              love<span className="text-pink-400">.</span>hair
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#gallery" className="hover:text-white transition">Gallery</a>
              <a href="#booking" className="hover:text-white transition">Book</a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 py-3 text-white/90">
              <div className="flex flex-col gap-3">
                <a href="#services" onClick={() => setOpen(false)} className="py-2">Services</a>
                <a href="#gallery" onClick={() => setOpen(false)} className="py-2">Gallery</a>
                <a href="#booking" onClick={() => setOpen(false)} className="py-2">Book</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
