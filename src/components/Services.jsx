import { Scissors, Sparkles, Heart, Clock } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Precision Cut',
    desc: 'Tailored cuts that frame and flatter, finished with expert styling.',
    price: 'from $65',
  },
  {
    icon: Sparkles,
    title: 'Creative Color',
    desc: 'Luminous shades and seamless blends — gloss, balayage, vivid hues.',
    price: 'from $120',
  },
  {
    icon: Heart,
    title: 'Healthy Hair Ritual',
    desc: 'Deep nourishment + scalp care for shine, strength, and softness.',
    price: 'from $55',
  },
  {
    icon: Clock,
    title: 'Express Styling',
    desc: 'Polished blowouts and waves for when you’re on the go.',
    price: 'from $40',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-gradient-to-b from-black to-black/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Signature Services</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Crafted with care, delivered with flair. Choose your vibe — we’ll make it shine.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-lg shadow-pink-500/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80">
                <span>{price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
