import { Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
            <Sparkles size={14} className="text-fuchsia-600" />
            Beautiful, fast, and ready to ship
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Build delightful apps with a modern starter
          </h1>
          <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base">
            A polished React + Tailwind foundation with thoughtful components and animations. Ship your idea with confidence and style.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#get-started"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              See Features
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="ml-2 text-xs text-slate-600">Loved by early users</span>
          </div>
        </div>
      </div>
    </section>
  );
}
