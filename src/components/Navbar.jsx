import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Vibe Starter</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
            <a href="#get-started" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Get Started</a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-slate-700">Features</a>
              <a href="#about" className="text-sm text-slate-700">About</a>
              <a href="#contact" className="text-sm text-slate-700">Contact</a>
              <a href="#get-started" className="mt-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
