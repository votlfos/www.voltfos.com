import React, { useState, useMemo } from 'react';
import { 
  Images, 
  Maximize2, 
  X, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  SlidersHorizontal,
  FileCheck
} from 'lucide-react';
import { PROJECT_GALLERY_ITEMS, GalleryItem } from '../data/companyData';
import { SectorFilter } from '../utils/filterProjects';

interface ProjectGalleryProps {
  onOpenRfq: (context?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenRfq }) => {
  const [selectedSector, setSelectedSector] = useState<SectorFilter>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedSector === 'All') return PROJECT_GALLERY_ITEMS;
    return PROJECT_GALLERY_ITEMS.filter((item) => item.sector === selectedSector);
  }, [selectedSector]);

  const sectors: SectorFilter[] = [
    'All',
    'Oil & Gas',
    'Government & Defense',
    'Township & Utilities',
    'Critical Facilities & Commercial'
  ];

  return (
    <div className="pt-16 space-y-8">
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
            <Images className="w-4 h-4" />
            <span>Visual Evidence &amp; Completed Deliverables</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Engineering Site Documentation Gallery
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            High-fidelity photographic records and architectural visualizations of delivered earthing grids, 
            lightning surge bypass systems, municipal substations, and critical standby power installations.
          </p>
        </div>

        {/* Gallery Sector Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                selectedSector === sec
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Layout using CSS Multi-Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="break-inside-avoid group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg hover:border-red-500/60 hover:shadow-red-600/10 transition-all duration-300 cursor-pointer"
          >
            {/* Image Container with Fallback */}
            <div className="relative w-full overflow-hidden bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Gradient scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Top metadata tags */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-slate-950/90 backdrop-blur text-red-400 border border-slate-800/80 font-semibold tabular-nums">
                  {item.year}
                </span>
                <span className="p-1.5 rounded-lg bg-slate-950/80 backdrop-blur text-slate-300 group-hover:text-red-400 border border-slate-800/80 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 space-y-2">
                <div className="text-[11px] font-mono text-slate-300">
                  {item.sector}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {item.title}
                </h4>
                <div className="text-xs text-red-300/90 font-medium truncate">
                  {item.client}
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                  {item.caption}
                </p>

                {/* Standards Pills */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {item.standards.slice(0, 2).map((std) => (
                    <span
                      key={std}
                      className="text-[10px] font-mono text-slate-300 px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / High-Resolution Project Details Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-mono font-bold text-white bg-red-600 rounded">
                  {activeLightboxItem.year}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeLightboxItem.title}
                  </h4>
                  <div className="text-xs text-slate-400">
                    Client: <strong className="text-slate-200">{activeLightboxItem.client}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close project image view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Split view on desktop */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 items-start">
              
              {/* Image View */}
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Technical Dossier */}
              <div className="lg:col-span-5 space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                    Technical Scope &amp; Field Context
                  </div>
                  <p className="text-white leading-relaxed text-sm">
                    {activeLightboxItem.caption}
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>Delivered Engineering Milestone</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeLightboxItem.deliverableSummary}
                  </p>
                </div>

                {/* Standards */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Governing Technical Standards
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeLightboxItem.standards.map((std) => (
                      <span
                        key={std}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded text-red-400"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const context = `${activeLightboxItem.title} (${activeLightboxItem.client})`;
                      setActiveLightboxItem(null);
                      onOpenRfq(`Inquiry regarding ${context}`);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors shadow-md shadow-red-600/25"
                  >
                    <span>Request Similar Engineering Scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div>Sector: <span className="text-white font-medium">{activeLightboxItem.sector}</span></div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="hover:text-white transition-colors"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
