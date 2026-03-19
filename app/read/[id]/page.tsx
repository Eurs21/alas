import Link from "next/link";

export default async function ReaderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // This is a placeholder for your database. 
  // Later, we will fetch this from Supabase.
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
        <button className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-tighter">
          Next Chapter
        </button>
      </nav>

      {/* Comic Panel Container */}
      <div className="pt-20 pb-20 flex flex-col items-center">
        {/* Placeholder Panels - Replace these with your actual art URLs later */}
        <div className="w-full max-w-2xl space-y-0">
          <div className="aspect-[2/3] w-full bg-slate-900 flex items-center justify-center border-b border-white/5">
            <p className="text-slate-500 font-bold italic uppercase tracking-tighter">Panel 01 - {comicTitle}</p>
          </div>
          <div className="aspect-[2/3] w-full bg-slate-800 flex items-center justify-center border-b border-white/5">
            <p className="text-slate-500 font-bold italic uppercase tracking-tighter">Panel 02 - Action Sequence</p>
          </div>
          <div className="aspect-[2/3] w-full bg-slate-900 flex items-center justify-center">
            <p className="text-slate-500 font-bold italic uppercase tracking-tighter">Panel 03 - Cliffhanger</p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <footer className="fixed bottom-0 w-full bg-black/90 p-4 border-t border-white/10 flex justify-center gap-8">
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase">Previous</button>
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase">Comments</button>
        <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase">Share</button>
      </footer>
    </main>
  );
}