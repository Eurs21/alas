"use client";

import { CldImage } from 'next-cloudinary';
import Link from "next/link";
import { use } from "react";

// Production Asset IDs
const ENFORCER_ASSET_ID = "enforcer_drone_v4_y7br3a";
const CHASE_ASSET_ID = "enforcer_chase_v1_xslyhw";
const RAVEN_ASSET_ID = "raven_singularity_edge_v1_fe2aei";

export default function ReaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const comicTitle = id.replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50 p-4 flex justify-between items-center">
        <Link href="/" className="text-yellow-400 font-black italic tracking-tighter text-xl">
          ALAS.
        </Link>
        <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
          Reading: <span className="text-white">{comicTitle}</span>
        </div>
        <button className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-tighter hover:bg-white transition-colors">
          Next Chapter
        </button>
      </nav>

      {/* Comic Panel Container */}
      <div className="pt-20 pb-24 flex flex-col items-center select-none">
        <div className="w-full max-w-lg space-y-0 shadow-2xl shadow-green-500/5">
          
          {/* Panel 01: The Enforcer Reveal */}
          <div className="relative w-full border-b border-white/10 overflow-hidden bg-zinc-900">
            <CldImage
              width="1200"
              height="1800"
              src={ENFORCER_ASSET_ID}
              alt="Aegis Enforcer Drone Model v.4"
              crop="fill"
              gravity="center"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
              className="hover:scale-105 transition-transform duration-700 ease-in-out pointer-events-none"
            />
            
            {/* Location Tag */}
            <div className="absolute top-6 left-6 bg-yellow-400 text-black px-3 py-1 font-bold uppercase text-[10px] tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              Neo-Batangas: Sector 7
            </div>

            {/* Narrative Box 1 */}
            <div className="absolute top-16 left-6 max-w-220px bg-white text-black p-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10">
              <p className="text-xs font-black leading-tight uppercase italic">
                "They call them 'Enforcers.' I call them scrap metal in waiting."
              </p>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
              <h2 className="text-4xl md:text-6xl font-black italic text-green-400 opacity-90 tracking-tighter">
                WHIRRRRR...
              </h2>
            </div>
          </div>

          {/* Panel 02: Action Sequence (Kinetic Chase) */}
          <div className="relative w-full border-b border-white/10 overflow-hidden bg-zinc-900">
            <CldImage
              width="1200"
              height="1800"
              src={CHASE_ASSET_ID}
              alt="Enforcer Drone in high-speed pursuit"
              crop="fill"
              gravity="center"
              sizes="(max-width: 768px) 100vw, 512px"
              className="hover:scale-105 transition-transform duration-700 ease-in-out pointer-events-none"
            />

            {/* Narrative Box 2 */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[80%] bg-white text-black p-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10">
              <p className="text-xs font-black leading-tight uppercase italic text-center">
                Vexis thinks they can police these streets with hardware. They forget who built the code.
              </p>
            </div>

            <div className="absolute top-10 right-6 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              <h2 className="text-5xl md:text-7xl font-black italic text-yellow-400 opacity-90 tracking-tighter -rotate-12">
                SHHHH-KRRRR!
              </h2>
            </div>
          </div>

          {/* Panel 03: Cliffhanger (Raven Reveal) */}
          <div className="relative w-full border-b border-white/10 overflow-hidden bg-zinc-900 shadow-2xl shadow-cyan-500/10">
            <CldImage
              width="1200"
              height="1800"
              src={RAVEN_ASSET_ID}
              alt="Raven operative activates the Singularity Edge"
              crop="fill"
              gravity="center"
              sizes="(max-width: 768px) 100vw, 512px"
              className="hover:scale-110 transition-transform duration-1000 ease-in-out pointer-events-none"
            />

            {/* Narrative Box 3 */}
            <div className="absolute top-6 right-6 max-w-200px bg-cyan-400 text-black p-3 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10">
              <p className="text-xs font-black leading-tight uppercase italic">
                Time to show them that code isn't the only thing that can cut.
              </p>
            </div>

            <div className="absolute bottom-8 left-10 md:bottom-12 md:left-14 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <h2 className="text-5xl md:text-7xl font-black italic text-cyan-400 opacity-90 tracking-tighter scale-110">
                KRRR-ZAAAP!
              </h2>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Controls */}
      <footer className="fixed bottom-0 w-full bg-black/90 p-4 border-t border-white/10 flex justify-center gap-8 backdrop-blur-sm z-50">
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Previous</button>
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Comments</button>
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">Share</button>
      </footer>
    </main>
  );
}