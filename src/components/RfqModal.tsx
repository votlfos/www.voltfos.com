import React, { useState } from 'react';
import { X, CheckCircle2, Send, AlertCircle, Shield } from 'lucide-react';
import { validateRfqForm, RfqFormData } from '../utils/filterProjects';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialContext }) => {
  const [formData, setFormData] = useState<RfqFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: initialContext || 'lightning-surge',
    projectLocation: '',
    estimatedTimeline: 'Immediate / 1-3 Months',
    projectDescription: initialContext ? `Inquiry regarding: ${initialContext}` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateRfqForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    // Generate deterministic inquiry reference
    const refId = `VF-RFQ-${Date.now().toString().slice(-6)}`;
    setSubmittedRef(refId);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceCategory: 'lightning-surge',
      projectLocation: '',
      estimatedTimeline: 'Immediate / 1-3 Months',
      projectDescription: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
              Engineering RFP &amp; Audit Request
            </div>
            <h3 className="text-xl font-bold text-white">
              Request Technical Proposal &amp; Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close RFQ modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Engineering Inquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your technical scope inquiry has been assigned reference code:
              </p>
              <div className="inline-block px-4 py-2 bg-slate-950 border border-red-500/40 rounded-lg font-mono text-sm font-bold text-red-400 tracking-wider">
                {submittedRef}
              </div>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Our Engineering Director (<strong className="text-slate-300">Amir Firdaus</strong>) and technical estimating team will review your specifications and contact you at <strong className="text-slate-300">{formData.email}</strong> within 1-2 business days.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-md shadow-red-600/20 transition-colors"
                >
                  Return to Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Contact Person Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ir. Ahmad / Ts. Rahman"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                  {errors.fullName && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Company / Organization */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Organization / Client / Ministry <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. PETRONAS / PKNS / Main Contractor"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                  {errors.companyName && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.companyName}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Business Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com.my"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Phone / Mobile Contact <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+60 12-345 6789"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                {/* Discipline Category */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Engineering Discipline <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="lightning-surge">Lightning Protection, Surge Suppression &amp; Earthing</option>
                    <option value="power-substations">HV/LV Power Distribution, MSB &amp; Substations</option>
                    <option value="critical-power-ups">Critical Power, Industrial UPS &amp; Battery Racks</option>
                    <option value="mechanical-building">Mechanical Services, HVAC &amp; Fire Protection</option>
                    <option value="township-infrastructure">Township Infrastructure &amp; Street Lighting</option>
                    <option value="facility-recovery">Facility Turnaround, Generators &amp; JKKP Lifts</option>
                  </select>
                </div>

                {/* Site Location */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-300">
                    Project Site Location
                  </label>
                  <input
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Bintulu, Sarawak / Klang Valley"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>

              </div>

              {/* Scope Description */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">
                  Project Description &amp; Requirements <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Detail the technical requirements, equipment specs, or site condition audit needed..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
                {errors.projectDescription && (
                  <div className="flex items-center gap-1 text-[11px] text-rose-400">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.projectDescription}</span>
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-md shadow-red-600/25 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Tender / Proposal Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
