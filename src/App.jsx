import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="get-started" className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Ready to build something great?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Start with a clean, well-designed foundation and focus on what matters most: your product.
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 sm:justify-end">
                <a
                  href="#"
                  className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800"
                >
                  Create Project
                </a>
                <a
                  href="#features"
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
