import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Shield, 
  CheckCircle, 
  FileText, 
  ArrowUpRight, 
  X,
  SlidersHorizontal,
  Star
} from 'lucide-react';
import { COMPANY_PROJECTS, ProjectRecord } from '../data/companyData';
import { filterProjects, calculateProjectStats, SectorFilter } from '../utils/filterProjects';
import { ProjectGallery } from './ProjectGallery';

interface TrackRecordSectionProps {
  onOpenRfq: (serviceContext?: string) => void;
}

export const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({ onOpenRfq }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<SectorFilter>('All');
  const [onlyHighlights, setOnlyHighlights] = useState(false);
  const [minYear, setMinYear] = useState(2008);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectRecord | null>(null);

  const stats = useMemo(() => calculateProjectStats(COMPANY_PROJECTS), []);

  const filteredProjects = useMemo(() => {
    let result = filterProjects(COMPANY_PROJECTS, searchQuery, selectedSector, minYear);
    if (onlyHighlights) {
      result = result.filter(p => p.highlight);
    }
    return result;
  }, [searchQuery, selectedSector, minYear, onlyHighlights]);

  const sectors: SectorFilter[] = [
    'All',
    'Oil & Gas',
    'Government & Defense',
    'Township & Utilities',
    'Critical Facilities & Commercial'
  ];

  return (
    <section id="track-record" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest">
              Unified Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Company Track Record &amp; Project Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Consolidating over 15 years of end-to-end technical execution across offshore oil &amp; gas platforms, 
              defense facilities, township M&amp;E substations, and national critical monitoring systems.
            </p>
          </div>

          {/* Quick Stat Pill-Free Metrics */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400 shrink-0">
            <div>
              <span className="text-xl font-bold text-white tabular-nums">{COMPANY_PROJECTS.length}</span>
              <span className="block text-[11px] text-slate-400">Total Projects</span>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div>
              <span className="text-xl font-bold text-red-400 tabular-nums">{stats.uniqueClients}+</span>
              <span className="block text-[11px] text-slate-400">Key Clients</span>
            </div>
            <div className="h-8 w-px bg-slate-800"></div>
            <div>
              <span className="text-xl font-bold text-emerald-400 tabular-nums">2008-2024</span>
              <span className="block text-[11px] text-slate-400">Execution Span</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, scope, standards (e.g. PETRONAS, MET, PKNS, UPS, IEC 62305)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Toggle Highlighted / Landmark only */}
            <button
              onClick={() => setOnlyHighlights(!onlyHighlights)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
                onlyHighlights
                  ? 'bg-red-500/10 text-red-300 border-red-500/40'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${onlyHighlights ? 'fill-red-400 text-red-400' : ''}`} />
              <span>Marquee Projects Only</span>
            </button>

            {/* Year slider */}
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>From:</span>
              <select
                value={minYear}
                onChange={(e) => setMinYear(Number(e.target.value))}
                className="bg-transparent text-red-400 focus:outline-none cursor-pointer"
              >
                <option value={2008} className="bg-slate-900 text-white">2008</option>
                <option value={2011} className="bg-slate-900 text-white">2011 (Incorporation)</option>
                <option value={2015} className="bg-slate-900 text-white">2015</option>
                <option value={2020} className="bg-slate-900 text-white">2020</option>
              </select>
            </div>

          </div>

          {/* Sector Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/60">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Sector:</span>
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedSector === sec
                    ? 'bg-red-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800/80'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <div>
            Showing <span className="text-white font-semibold tabular-nums">{filteredProjects.length}</span> of <span className="text-white tabular-nums">{COMPANY_PROJECTS.length}</span> verified project records
          </div>
          {(searchQuery || selectedSector !== 'All' || onlyHighlights || minYear > 2008) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSector('All');
                setOnlyHighlights(false);
                setMinYear(2008);
              }}
              className="text-red-400 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveProjectModal(item)}
              className="group bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-red-500/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-red-600/10"
            >
              <div className="space-y-3">
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-red-400 font-semibold tabular-nums">
                    {item.year}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {item.sector}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {item.client}
                </h3>

                {/* Scope Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {item.project}
                </p>

                {/* Location */}
                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>

              {/* Card Footer tags */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {item.standards ? (
                    <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {item.standards[0]}
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                      Standard Verified
                    </span>
                  )}
                </div>

                <span className="text-red-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px] font-medium">
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-slate-900/30 border border-slate-800 rounded-xl space-y-3">
            <FileText className="w-8 h-8 text-slate-600 mx-auto" />
            <div className="text-base font-semibold text-white">No project records match your current filters</div>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try adjusting your search keyword or switching the sector filter to "All" to browse all 45+ documented deliverables.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSector('All');
                setOnlyHighlights(false);
                setMinYear(2008);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Photographic Masonry Evidence Gallery */}
        <ProjectGallery onOpenRfq={onOpenRfq} />

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                  <span className="font-semibold tabular-nums">{activeProjectModal.year}</span>
                  <span>·</span>
                  <span>{activeProjectModal.sector}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {activeProjectModal.client}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Project Scope &amp; Technical Assignment
                </div>
                <p className="text-white leading-relaxed text-sm sm:text-base">
                  {activeProjectModal.project}
                </p>
              </div>

              {activeProjectModal.location && (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Site / Execution Location: <strong className="text-slate-200">{activeProjectModal.location}</strong></span>
                </div>
              )}

              {/* Deliverables */}
              {activeProjectModal.deliverables && activeProjectModal.deliverables.length > 0 && (
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    Engineering Deliverables &amp; Milestones
                  </div>
                  <ul className="space-y-2">
                    {activeProjectModal.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Governing Standards */}
              {activeProjectModal.standards && activeProjectModal.standards.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    Governing Codes &amp; Standards
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.standards.map((std) => (
                      <span
                        key={std}
                        className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded text-red-400"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const clientName = activeProjectModal.client;
                  setActiveProjectModal(null);
                  onOpenRfq(`Inquiry regarding similar scope as ${clientName}`);
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/25 transition-all"
              >
                Inquire Similar Scope
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
