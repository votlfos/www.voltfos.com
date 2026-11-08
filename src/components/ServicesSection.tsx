import React, { useState } from 'react';
import { 
  Zap, 
  ShieldAlert, 
  BatteryCharging, 
  Flame, 
  Building, 
  Wrench, 
  ArrowRight, 
  X, 
  Check, 
  FileCheck 
} from 'lucide-react';
import { CORE_SERVICES, ServiceCapability } from '../data/companyData';

interface ServicesSectionProps {
  onOpenRfq: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenRfq }) => {
  const [selectedService, setSelectedService] = useState<ServiceCapability | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'lightning-surge':
        return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case 'power-substations':
        return <Zap className="w-6 h-6 text-red-500" />;
      case 'critical-power-ups':
        return <BatteryCharging className="w-6 h-6 text-red-500" />;
      case 'mechanical-building':
        return <Flame className="w-6 h-6 text-red-500" />;
      case 'township-infrastructure':
        return <Building className="w-6 h-6 text-red-500" />;
      case 'facility-recovery':
        return <Wrench className="w-6 h-6 text-red-500" />;
      default:
        return <Zap className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-red-400 uppercase tracking-widest">
            Engineering Capabilities &amp; Disciplines
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Comprehensive Electrical, Mechanical &amp; Specialist Infrastructure Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every service is executed under statutory standards including MS IEC 62305, API RP 545, 
            TNB ESAH v3.1, and Suruhanjaya Tenaga regulations, supported by experienced registered engineers.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, index) => {
            const isMarquee = index === 0 || index === 1; // Give prominent marquee cards

            return (
              <div
                key={service.id}
                className={`group relative rounded-xl border border-slate-800 bg-slate-950/80 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isMarquee ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* Image header if available */}
                {service.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 p-2 bg-slate-950/90 backdrop-blur rounded-lg border border-slate-800">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {!service.image && (
                      <div className="p-2.5 w-fit bg-slate-900 rounded-lg border border-slate-800">
                        {getServiceIcon(service.id)}
                      </div>
                    )}

                    <div className="text-xs font-mono text-slate-400">
                      0{index + 1}. Discipline
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Quick scope badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {service.standards.slice(0, 2).map((std) => (
                        <span
                          key={std}
                          className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer action */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>Explore Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenRfq(service.id)}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
                  Technical Discipline Specification
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
              <p className="leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Scope Checklist */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Engineering Scope of Deliverables
                </div>
                <ul className="space-y-2">
                  {selectedService.scopeList.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Governing Standards */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Statutory &amp; Technical Standards Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.standards.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded text-slate-300"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Landmark Projects */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  Sample Delivered Projects
                </div>
                <div className="space-y-1.5">
                  {selectedService.featuredProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <FileCheck className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenRfq(sId);
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/25 transition-all"
              >
                Inquire on this Capability
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
