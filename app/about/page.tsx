import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans">
      <nav className="p-8 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-yellow-400">ALAS.</Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-400 uppercase mb-4">The Manifesto</h2>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-12">
          WHY WE <span className="text-transparent" style={{ WebkitTextStroke: '1px #facc15' }}>ACE</span>
        </h1>

        <div className="space-y-12 text-lg md:text-xl text-slate-400 leading-relaxed">
          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">01. The Highest Card</h3>
            <p>
              In the Philippines, <span className="text-white italic">Alas</span> is the Ace. It is the card that changes the game. 
              We believe digital stories should do the same. We don't just publish chapters; we deliver the "Ace"—the peak 
              of Action, Romance, Motivation, and Adventure.
            </p>
          </section>

          <section className="border-l-2 border-yellow-400 pl-8 py-2">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">02. Precise Execution</h3>
            <p>
              Derived from the precision of market analysis and institutional strategy, our "Ace" philosophy 
              is about cutting through the noise. We prioritize quality over quantity. Every panel is an entry; 
              every story is a high-probability setup for inspiration.
            </p>
          </section>

          <section>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">03. The $0 Barrier</h3>
            <p>
              Greatness shouldn't be paywalled before it's proven. By offering the first 3 chapters of 
              every series for free, we ensure our readers can <span className="text-yellow-400 font-bold">Ace their read </span> 
              without friction. We trust our stories to earn your support.
            </p>
          </section>
        </div>

        <div className="mt-20 p-10 bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <p className="italic text-slate-300 mb-6">
            "We are a Filipino-led platform with a global vision. We aren't just building a store; 
            we're building a standard for how digital comics are consumed in the modern era."
          </p>
          <div className="text-sm font-bold text-yellow-400 uppercase tracking-widest">— Eurie Butor, Founder</div>
        </div>
      </div>
    </main>
  );
}