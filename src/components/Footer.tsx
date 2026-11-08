import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

interface FooterProps {
  onOpenRfq: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Voltfos_-_New_Logo_2021_Rev_2_6d240ee0.png"
                alt="Voltfos Sdn Bhd"
                className="w-8 h-8 object-contain rounded shrink-0 shadow-md shadow-red-600/30"
                referrerPolicy="no-referrer"
              />
              <span className="text-base font-bold text-white tracking-tight">
                VOLTFOS SDN BHD
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Electrical, Mechanical &amp; Specialist Lightning Protection Engineering Contractor. Registered with SSM, MOF, CIDB Grade G3, Suruhanjaya Tenaga, PETRONAS, MINDEF &amp; TNB.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Registration No: {COMPANY_DETAILS.registrationNo} · GST Id: {COMPANY_DETAILS.gstId}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Engineering Disciplines
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#capabilities" className="hover:text-red-400 transition-colors">
                  Lightning Protection &amp; Surge Suppression (IEC 62305)
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-400 transition-colors">
                  Power Substations, MSB &amp; LV/HV Reticulation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-400 transition-colors">
                  Critical Power, Industrial UPS &amp; Battery Racks
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-red-400 transition-colors">
                  Mechanical, Cleanroom HVAC &amp; Fire Protection
                </a>
              </li>
              <li>
                <a href="#track-record" className="hover:text-red-400 transition-colors">
                  45+ Project Experience &amp; Deliverables
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Inquiry */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Inquiries &amp; Tenders
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#profile" className="hover:text-red-400 transition-colors">
                  Corporate Governance &amp; Profile
                </a>
              </li>
              <li>
                <a href="#accreditations" className="hover:text-red-400 transition-colors">
                  CIDB G3 Licensure &amp; MOF Codes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Contact Ampang Operations Hub
                </a>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenRfq}
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors underline decoration-red-500/50 underline-offset-2 text-left"
                >
                  Request Technical Quotation (RFQ) &rarr;
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} VOLTFOS SDN BHD (961184-X). All rights reserved. 100% Bumiputera Engineering Contractor.
          </div>
          <div className="flex items-center gap-4">
            <a href="#profile" className="hover:text-slate-300 transition-colors">
              Management Profile
            </a>
            <span>·</span>
            <a href="#accreditations" className="hover:text-slate-300 transition-colors">
              CIDB G3 Licensure
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Ampang Jaya HQ
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
