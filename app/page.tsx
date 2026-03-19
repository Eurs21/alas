import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const genres = [
    { name: 'Action', color: 'border-red-500', icon: '⚔️', desc: 'High-octane battles.' },
    { name: 'Romance', color: 'border-pink-500', icon: '❤️', desc: 'Global heartbeats.' },
    { name: 'Motivational', color: 'border-yellow-400', icon: '🔥', desc: 'Unlock your potential.' },
    { name: 'Adventure', color: 'border-emerald-500', icon: '🗺️', desc: 'Explore the unknown.' },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-3xl font-black italic tracking-tighter text-yellow-400">ALAS.</div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <Link href="/read/the-ace-trader">
            <button className="bg-yellow-400 text-slate-950 px-14 py-5 font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(250,204,21,0.15)]">
              Explore Library</button>
          </Link>
          <button className="hover:text-yellow-400 transition-colors">Pricing</button>
          <button className="hover:text-yellow-400 transition-colors underline decoration-yellow-400 underline-offset-8">Community</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center">
        <div className="mb-6 px-4 py-1.5 border border-yellow-400/20 bg-yellow-400/5 rounded-full text-[10px] font-bold tracking-[0.4em] text-yellow-400 uppercase">
          Pinoy Soul • Global Stories
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
          ACE <span className="text-transparent" style={{ WebkitTextStroke: '1px #facc15' }}>YOUR</span> READ
        </h1>
        <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          Premium digital storytelling. The first 3 chapters of every original series are 
          <span className="text-white font-bold underline decoration-yellow-400 underline-offset-4"> Free Forever.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/read/the-ace-trader">
            <button className="bg-yellow-400 text-slate-950 px-14 py-5 font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_50px_rgba(250,204,21,0.15)]">
              Explore Library
            </button>
          </Link>
          <Link href="/about">
            <button className="border border-slate-800 px-14 py-5 font-black uppercase tracking-widest hover:bg-slate-800 transition-all text-slate-400">
              Learn More
            </button>
          </Link>
        </div>
      </header>

      {/* Genre Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <div key={genre.name} className={`group p-12 border ${genre.color} bg-slate-900/30 backdrop-blur-xl hover:bg-slate-900 transition-all cursor-pointer relative overflow-hidden h-100 flex flex-col justify-end`}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{genre.icon}</div>
              <h3 className="text-3xl font-black italic uppercase group-hover:text-yellow-400 transition-colors mb-2">
                {genre.name}
              </h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                {genre.desc}
              </p>
              {/* Decorative "Alas" Background Text */}
              <div className="absolute -top-10 -right-10 text-[120px] opacity-[0.03] font-black uppercase italic pointer-events-none">
                {genre.name[0]}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}