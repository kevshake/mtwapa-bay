export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl space-y-6">
        <p className="text-xs tracking-[0.4em] uppercase text-stone-500">
          Mtwapa Bay
        </p>
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-stone-50">
          Luxury Property Management
        </h1>
        <p className="text-lg text-stone-400 font-light leading-relaxed">
          Africa&apos;s premier platform for exceptional properties.
          Curated experiences, effortless management.
        </p>
        <div className="pt-6">
          <a
            href="mailto:hello@mtwapabay.com"
            className="inline-block border border-stone-700 text-stone-300 px-8 py-3 text-sm tracking-widest uppercase hover:border-stone-400 hover:text-stone-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
