import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users, 
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const CompanyProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leadership' | 'mission'>('overview');

  return (
    <section id="profile" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-1.5">
              Corporate Governance &amp; Identity
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Company Profile &amp; Technical Leadership
            </h2>
          </div>

          {/* Segmented Controls for Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Corporate Overview
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'leadership'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Management &amp; Leadership
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'mission'
                  ? 'bg-red-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mission &amp; Policy
            </button>
          </div>
        </div>

        {/* Tab 1: Corporate Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Col 1: Statutory Registration Data */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 lg:p-7 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/Voltfos_-_New_Logo_2021_Rev_2_6d240ee0.png"
                    alt="Voltfos Logo"
                    className="w-7 h-7 object-contain rounded shrink-0 border border-red-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-base font-semibold text-white">Statutory Registration Data</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Incorporated 2011</span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs">
                <div>
                  <dt className="text-slate-400">Company Name</dt>
                  <dd className="font-semibold text-white mt-0.5">{COMPANY_DETAILS.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Registration Number (SSM)</dt>
                  <dd className="font-mono text-slate-200 mt-0.5">{COMPANY_DETAILS.registrationNo}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Nature of Business</dt>
                  <dd className="font-semibold text-slate-200 mt-0.5">{COMPANY_DETAILS.nature}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Equity &amp; Participation</dt>
                  <dd className="font-semibold text-emerald-400 mt-0.5">{COMPANY_DETAILS.equity}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Authorized Capital</dt>
                  <dd className="font-mono font-medium text-slate-200 mt-0.5">{COMPANY_DETAILS.authorizedCapital}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Paid-Up Capital</dt>
                  <dd className="font-mono font-medium text-slate-200 mt-0.5">{COMPANY_DETAILS.paidUpCapital}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Principal Banker</dt>
                  <dd className="text-slate-200 mt-0.5">{COMPANY_DETAILS.principalBanker}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Bank SWIFT Code</dt>
                  <dd className="font-mono text-slate-200 mt-0.5">{COMPANY_DETAILS.swiftCode}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-slate-400">Head Office Location</dt>
                  <dd className="text-slate-200 mt-0.5">
                    {COMPANY_DETAILS.address.street}, {COMPANY_DETAILS.address.postcode} {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.state}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Col 2: Organization Framework & Operational Structure */}
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 lg:p-7 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <Users className="w-5 h-5 text-red-400" />
                  <span className="text-base font-semibold text-white">Operational Structure &amp; Technical Governance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Voltfos operates under an agile, multidisciplinary engineering and construction governance model. Direct executive oversight is led by the Managing &amp; Engineering Director, seamlessly bridging commercial tendering, statutory compliance, and rigorous field execution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-center">
                    <div className="text-xs font-semibold text-white">Engineering &amp; Ops</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">M&amp;E, Oil &amp; Gas, LPS</div>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-center">
                    <div className="text-xs font-semibold text-white">Site Supervisors</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">CIDB &amp; ST Certified</div>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-center">
                    <div className="text-xs font-semibold text-white">Technical Teams</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Rapid Site Deployment</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Operational Tenets
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    <li>Zero-compromise engineering safety protocols complying with NIOSH / OGSP.</li>
                    <li>Direct technical supervision by certified BEM / MBOT registered professionals.</li>
                    <li>End-to-end statutory submissions with TNB, Suruhanjaya Tenaga, and local councils.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Management & Leadership */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {COMPANY_DETAILS.leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                        <div className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                          {leader.role}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                        {leader.role.includes('Engineering') ? (
                          <Award className="w-5 h-5 text-red-400" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <GraduationCap className="w-4 h-4 text-slate-400" />
                      <span>{leader.credentials}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Registrations List */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Professional Memberships &amp; Accreditations
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {leader.registrations.map((reg) => (
                        <div
                          key={reg.body}
                          className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-md"
                        >
                          <div className="text-slate-300 font-medium">{reg.body}</div>
                          {reg.regNo && (
                            <div className="font-mono text-slate-400 text-[11px] mt-0.5">
                              {reg.regNo}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competencies from Resume */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Executive Technical Competencies of Voltfos Leadership</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                  <div className="font-semibold text-white">Power System Protection</div>
                  <div className="text-slate-400 mt-1">LV/HV Substations, Relays, Transformers</div>
                </div>
                <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                  <div className="font-semibold text-white">Lightning &amp; Surge Systems</div>
                  <div className="text-slate-400 mt-1">MS IEC 62305, API RP 545 Tanks</div>
                </div>
                <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                  <div className="font-semibold text-white">Contract Administration</div>
                  <div className="text-slate-400 mt-1">Tendering, VO Governance, Audits</div>
                </div>
                <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                  <div className="font-semibold text-white">Statutory Authority Liaison</div>
                  <div className="text-slate-400 mt-1">TNB, Suruhanjaya Tenaga, SPAN, JKKP</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Mission, Vision & QHSE Policy */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Mutual Benefit &amp; Client Trust</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strive for sustainable mutual benefit between Voltfos, our institutional clients, principal contractors, and the public end-users who depend on uninterrupted utilities.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-200 font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Technical Rigor &amp; Innovation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Focus on core engineering disciplines by continuously adopting modern protection technologies, computational modeling, and statutory compliance frameworks.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Bumiputera Excellence (KBBT)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Enhance Bumiputera participation in national industrial engineering and high-voltage contracting, aspiring to achieve Kontraktor Bumiputera Berprestasi Tinggi status.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
