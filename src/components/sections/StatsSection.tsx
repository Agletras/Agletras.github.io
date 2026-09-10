export function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/5 divide-x divide-y md:divide-y-0 divide-white/5 bg-black">
          
          <div className="text-center px-4 py-16">
            <div className="text-6xl md:text-7xl font-bold mb-4 text-white tracking-tighter">70+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Security Labs<br/>Completed</div>
          </div>
          
          <div className="text-center px-4 py-16">
            <div className="text-6xl md:text-7xl font-bold mb-4 text-white tracking-tighter">4+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Research<br/>Domains</div>
          </div>
          
          <div className="text-center px-4 py-16">
            <div className="text-xl md:text-3xl font-bold mb-4 text-white flex items-center justify-center h-[60px] md:h-[72px] tracking-tight">Open Source</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Research<br/>Philosophy</div>
          </div>
          
          <div className="text-center px-4 py-16">
            <div className="text-xl md:text-3xl font-bold mb-4 text-white flex items-center justify-center h-[60px] md:h-[72px] tracking-tight">Security First</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Engineering<br/>Approach</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
