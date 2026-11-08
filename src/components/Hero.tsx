import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenRfq: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq, onExploreProjects }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand Logo & Credential Identifier */}
            <div className="flex items-center gap-3.5 pb-1">
              <img
                src="/assets/aistudio/Voltfos_-_New_Logo_2021_Rev_2_6d240ee0.png"
                alt="Voltfos Engineering Logo"
                className="w-12 h-12 object-contain rounded-xl p-0.5 bg-slate-900 border border-red-500/40 shadow-lg shadow-red-600/20 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                  VOLTFOS SDN BHD
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  SSM 201101033049 (961184-X) · Electrical &amp; Mechanical Specialist
                </span>
              </div>
            </div>

            {/* Clean unboxed metadata kicker (no pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-red-400">
              <span className="font-semibold tracking-wider uppercase">100% Bumiputera</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">CIDB Grade G3 Contractor</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">MOF 30 Bidang Registered</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Est. 2011</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Turnkey Electrical, Mechanical &amp; Specialist Lightning Protection Engineering
            </h1>

            {/* Subtitle / Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Voltfos Sdn Bhd delivers mission-critical engineering solutions across Malaysia and ASEAN. 
              From hazardous storage tank lightning mitigation and offshore platforms to township electrical substations 
              and national early-warning power systems.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRfq}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-lg shadow-red-600/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 active:scale-[0.99]"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-red-500/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>View 45+ Project Track Record</span>
                <ChevronRight className="w-4 h-4 text-red-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Hero High-Fidelity Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_electrical_substation_1793837414465.jpg"
                alt="High-voltage electrical substation and transformer facility"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1">
                <div className="text-xs font-mono text-red-400">
                  Facility Management (M&amp;E Engineering Operations)
                </div>
                <div className="text-sm font-semibold text-white">
                  Comprehensive Electrical &amp; Mechanical Facility Management
                </div>
                <p className="text-xs text-slate-300">
                  Turnkey operations &amp; maintenance covering HT/LV substations, standby generators, HVAC chillers, ventilation, fire protection, and bulk water pumping systems.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
              15+ Years
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Corporate &amp; Field Track Record
            </div>
            <p className="text-xs text-slate-400">Incorporated in 2011 with deep engineering roots across ASEAN</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-extrabold text-red-400 font-mono tabular-nums">
              45+ Major
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Delivered Projects
            </div>
            <p className="text-xs text-slate-400">Petrochemical, defense, government, township &amp; commercial</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
              RM 500,000
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Authorized &amp; Paid-Up Capital
            </div>
            <p className="text-xs text-slate-400">Robust financial stability banked with CIMB Bank Berhad</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              100% Bumiputera
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              CIDB G3 &amp; MOF Certified
            </div>
            <p className="text-xs text-slate-400">Licensed vendor for PETRONAS, MINDEF, TNB, and TM</p>
          </div>
        </div>

        {/* Trusted Clients & Authorities strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="text-xs uppercase tracking-widest text-slate-400 text-center font-medium mb-5">
            Registered Vendor &amp; Trusted Engineering Partner For
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 opacity-80 text-xs sm:text-sm font-semibold tracking-wider text-slate-300">
            <span className="hover:text-red-400 transition-colors">PETRONAS</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">MINDEF MALAYSIA</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">MET MALAYSIA</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">PKNS SELANGOR</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">LEMBAGA GETAH MALAYSIA</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">CHEVRON INDONESIA</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">TNB</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">APMM MARITIM</span>
            <span className="text-slate-700">·</span>
            <span className="hover:text-red-400 transition-colors">RSGC</span>
          </div>
        </div>

      </div>
    </section>
  );
};
