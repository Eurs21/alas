import Link from "next/link";
// 1. IMPORT IMAGE
import Image from "next/image";

export default async function GenrePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const genreName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // 2. UPDATE YOUR DATA (Use the actual cover you provided)
  const stories = [
    {
      title: "The Sector 7 Protocol",
      slug: "the-sector-7-protocol",
      // Shorten the description for the card, keep full for the read page
      desc: "When the monolith activates, you all shut down.", 
      genre: "action",
      // Point to where you uploaded image_0.png in your /public folder
      coverImage: "/covers/sector-7-protocol-cover.png" 
    },
  ];

  const filteredStories = stories.filter(s => s.genre === slug);

  return (
    <main className="min-h-screen bg-[#020617] text-white p-8">
      <nav className="mb-12">
        <Link href="/" className="text-yellow-400 font-bold uppercase text-[10px] tracking-widest hover:underline">
          ← Back to Library
        </Link>
      </nav>

      <header className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
          {genreName} <span className="text-transparent" style={{ WebkitTextStroke: '1px #facc15' }}>Stories</span>
        </h1>
      </header>

      {/* Grid: 2 columns mobile, 5 desktop for "Google Books" look */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl">
        {filteredStories.length > 0 ? (
          filteredStories.map((story) => (
            <Link key={story.slug} href={`/read/${story.slug}`} className="group flex flex-col">
              
              {/* THE OFFICIAL BOOK COVER BOX (with aspect-2/3) */}
              <div className="relative aspect-2/3 w-full bg-slate-900 border border-white/10 overflow-hidden shadow-2xl group-hover:border-yellow-400 group-hover:shadow-yellow-400/30 transition-all duration-500">
                
                {/* 3. SWITCH FROM <img> TO NEXT.JS <Image /> */}
                <Image 
                  src={story.coverImage} 
                  alt={story.title}
                  fill // Fills the aspect-ratio container
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  priority // Good for above-the-fold covers
                />

                {/* Cover Overlay for Text Contrast */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/30 to-transparent z-10" />
                
                {/* 4. TITLE SHOWN OVERLAPPING THE COVER */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h4 className="text-xl md:text-2xl font-black italic uppercase leading-none group-hover:text-yellow-400 transition-colors drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {story.title}
                    </h4>
                    <p className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest mt-1.5 opacity-90">
                      CH. 1 • Now Live
                    </p>
                </div>

                {/* 5. FLOATING INTEGRATED BADGE (Bottom-Right) */}
                <div className="absolute top-20 -right-0.5 z-20 group-hover:-translate-x-1 transition-transform">
                  <div className="bg-yellow-400 text-black p-2.1 border-t-2 border-b-2 border-l-2 border-black rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-[9px] md:text-xs font-black leading-tight uppercase italic text-left">
                      New<br/>Story<br/>Arc!
                    </p>
                  </div>
                </div>

              </div>

            </Link>
          ))
        ) : (
          <p className="col-span-full text-slate-500 italic uppercase font-bold tracking-widest text-center py-20 border border-dashed border-white/10">
            More {genreName} stories currently in production...
          </p>
        )}
      </div>
    </main>
  );
}