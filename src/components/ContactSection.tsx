import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  CreditCard, 
  ShieldCheck, 
  ArrowUpRight, 
  Printer, 
  Clock 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ContactSectionProps {
  onOpenRfq: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRfq }) => {
  return (
    <section id="contact" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-red-400 uppercase tracking-widest">
            Corporate Headquarters &amp; Operations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Engage Voltfos for Tenders, Site Audits &amp; Turnkey Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Headquartered in Ampang Jaya, Selangor with operational readiness across Peninsular Malaysia, 
            Sarawak, Sabah, and the ASEAN region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left 7 cols: Office details & Communications */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">VOLTFOS SDN BHD</h3>
                  <div className="text-xs text-slate-400 font-mono">
                    Reg: {COMPANY_DETAILS.registrationNo} · GST: {COMPANY_DETAILS.gstId}
                  </div>
                </div>
              </div>

              {/* Grid of contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                
                {/* Office Address */}
                <div className="space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Registered Office &amp; Operations Hub:</span>
                  </div>
                  <p className="text-white pl-6 leading-relaxed">
                    {COMPANY_DETAILS.address.street},<br />
                    {COMPANY_DETAILS.address.postcode} {COMPANY_DETAILS.address.city}, {COMPANY_DETAILS.address.state}, Malaysia
                  </p>
                </div>

                {/* Telephone */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <span>General Telephone:</span>
                  </div>
                  <div className="pl-6 font-mono text-white text-sm">
                    {COMPANY_DETAILS.contacts.phone}
                  </div>
                </div>

                {/* Fax */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Printer className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Facsimile:</span>
                  </div>
                  <div className="pl-6 font-mono text-slate-300 text-sm">
                    {COMPANY_DETAILS.contacts.fax}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Mail className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Official Email:</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href={`mailto:${COMPANY_DETAILS.contacts.email}`}
                      className="block text-slate-200 hover:text-red-400 transition-colors font-medium text-sm"
                    >
                      {COMPANY_DETAILS.contacts.email}
                    </a>
                    <a
                      href={`mailto:${COMPANY_DETAILS.contacts.secondaryEmail}`}
                      className="block text-slate-400 hover:text-red-400 transition-colors text-xs"
                    >
                      {COMPANY_DETAILS.contacts.secondaryEmail}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Banker & Remittance Information */}
            <div className="pt-6 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-semibold font-mono uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-red-400" />
                <span>Banking Credentials</span>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 space-y-1 font-mono text-[11px]">
                <div><span className="text-slate-400">Principal Banker:</span> {COMPANY_DETAILS.principalBanker}</div>
                <div><span className="text-slate-400">SWIFT Code:</span> {COMPANY_DETAILS.swiftCode}</div>
                <div><span className="text-slate-400">Paid-Up Capital:</span> {COMPANY_DETAILS.paidUpCapital} (100% Bumiputera)</div>
              </div>
            </div>

          </div>

          {/* Right 5 cols: Fast CTA & Action Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Submit Tender or Engineering Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a specialist lightning protection risk assessment for an oil storage tank farm, 
                a township LV infrastructure design for TNB clearance, or an industrial UPS battery bank maintenance contract.
              </p>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2 text-xs">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  <span>Immediate Response Guarantee</span>
                </div>
                <p className="text-slate-400 leading-normal">
                  Our Managing &amp; Engineering Director (<strong className="text-slate-200">Amir Firdaus</strong>) directly evaluates preliminary project technical requirements.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={onOpenRfq}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-lg shadow-red-600/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 active:scale-[0.99]"
              >
                <span>Launch Engineering Proposal Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                <span>Working Hours: Mon - Fri</span>
                <span>08:30 - 17:30 (MYT)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
