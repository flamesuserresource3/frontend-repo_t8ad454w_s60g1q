import { Shield, Zap, LayoutGrid, Settings } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Thoughtful foundations with sensible defaults and modern best practices.',
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Optimized build tooling and snappy interactions out of the box.',
  },
  {
    icon: LayoutGrid,
    title: 'Composable UI',
    desc: 'Clean, reusable components that scale with your product.',
  },
  {
    icon: Settings,
    title: 'Easy to extend',
    desc: 'Well-structured codebase that adapts to your needs quickly.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-y border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Everything you need to start strong</h2>
          <p className="mt-3 text-sm text-slate-600">
            A balanced set of essentials so you can focus on building your product, not boilerplate.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
