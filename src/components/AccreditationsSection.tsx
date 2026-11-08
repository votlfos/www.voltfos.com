import React, { useState } from 'react';
import { ShieldCheck, Award, BookOpen, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const AccreditationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cidb' | 'clients' | 'standards'>('cidb');

  return (
    <section id="accreditations" className="py-20 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest">
              Regulatory Compliance &amp; Credentials
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Statutory Registrations, CIDB G3 &amp; Engineering Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Voltfos maintains active registrations with Malaysia's statutory boards, national utilities, 
              defense bodies, and multinational energy corporations.
            </p>
          </div>

          {/* Segmented Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('cidb')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'cidb'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CIDB G3 Specializations
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'clients'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Approved Bodies &amp; MOF
            </button>
            <button
              onClick={() => setActiveTab('standards')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'standards'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Statutory Standards
            </button>
          </div>
        </div>

        {/* Tab 1: CIDB Specializations */}
        {activeTab === 'cidb' && (
          <div className="space-y-6">
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="text-slate-400">CIDB Registration Ref: </span>
                  <span className="font-mono font-semibold text-white">0120130827-WP151970</span>
                  <span className="text-slate-500 mx-2">·</span>
                  <span className="text-red-400 font-semibold">Grade G3</span>
                  <span className="text-slate-500 mx-2">·</span>
                  <span className="text-emerald-400">PPK, SPKK &amp; STB Certified</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Bumiputera Status Certified
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPANY_DETAILS.cidbSpecializations.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-lg hover:border-slate-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                      {item.code}
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">{item.grade} · {item.category.split(' - ')[0]}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {item.desc}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Approved Bodies & MOF */}
        {activeTab === 'clients' && (
          <div className="space-y-8">
            <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Award className="w-4 h-4 text-red-400" />
                <span>Ministry of Finance Malaysia (MOF) Active Registration</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                <span>Certificate No: <strong className="text-slate-200">K63730167511963818</strong></span>
                <span>·</span>
                <span>Reference: <strong className="text-slate-200">357-02187911</strong></span>
                <span>·</span>
                <span className="text-emerald-400 font-semibold">30 Active Registered Bidang Codes</span>
              </div>
              <p className="text-xs text-slate-300 pt-1">
                Authorized across Power Generation, Substation Equipment &amp; Cables (140101-140302), 
                Upstream &amp; Downstream Petroleum Equipment (130401-130402), Fire Protection (120601-120602), 
                Telecommunications (210201-210203), and Air Conditioning Maintenance (220301).
              </p>
            </div>

            {/* List of 14 Registered Bodies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMPANY_DETAILS.registrations.map((reg) => (
                <div
                  key={reg.id}
                  className="p-4 bg-slate-950/60 border border-slate-800 rounded-lg flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-red-400 shrink-0 mt-0.5">
                    {reg.id < 10 ? `0${reg.id}` : reg.id}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-bold text-white">
                      {reg.body}
                    </div>
                    {reg.referenceNo && (
                      <div className="text-[11px] font-mono text-slate-400">
                        {reg.referenceNo}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{reg.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Statutory Standards & Codes */}
        {activeTab === 'standards' && (
          <div id="standards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPANY_DETAILS.engineeringStandards.map((std) => (
                <div
                  key={std.code}
                  className="p-6 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3 hover:border-red-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-red-400 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20">
                      {std.code}
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {std.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {std.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
