import { ProjectRecord } from '../data/companyData';

export type SectorFilter = 'All' | 'Oil & Gas' | 'Government & Defense' | 'Township & Utilities' | 'Critical Facilities & Commercial';

export interface ProjectStats {
  totalProjects: number;
  uniqueClients: number;
  oilGasCount: number;
  govDefenseCount: number;
  townshipCount: number;
  facilitiesCount: number;
  earliestYear: number;
  latestYear: number;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectLocation: string;
  estimatedTimeline: string;
  projectDescription: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function filterProjects(
  projects: ProjectRecord[],
  query: string = '',
  sector: SectorFilter = 'All',
  minYear: number = 2008
): ProjectRecord[] {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((item) => {
    // Sector filter
    if (sector !== 'All' && item.sector !== sector) {
      return false;
    }

    // Min year filter
    if (item.year < minYear) {
      return false;
    }

    // Text search query
    if (normalizedQuery) {
      const matchClient = item.client.toLowerCase().includes(normalizedQuery);
      const matchProject = item.project.toLowerCase().includes(normalizedQuery);
      const matchLocation = item.location ? item.location.toLowerCase().includes(normalizedQuery) : false;
      const matchStandards = item.standards ? item.standards.some(s => s.toLowerCase().includes(normalizedQuery)) : false;
      const matchDeliverables = item.deliverables ? item.deliverables.some(d => d.toLowerCase().includes(normalizedQuery)) : false;
      const matchYear = item.year.toString().includes(normalizedQuery);

      if (!matchClient && !matchProject && !matchLocation && !matchStandards && !matchDeliverables && !matchYear) {
        return false;
      }
    }

    return true;
  });
}

export function calculateProjectStats(projects: ProjectRecord[]): ProjectStats {
  if (projects.length === 0) {
    return {
      totalProjects: 0,
      uniqueClients: 0,
      oilGasCount: 0,
      govDefenseCount: 0,
      townshipCount: 0,
      facilitiesCount: 0,
      earliestYear: 2008,
      latestYear: 2024
    };
  }

  const clientsSet = new Set<string>();
  let oilGas = 0;
  let govDefense = 0;
  let township = 0;
  let facilities = 0;
  let earliest = projects[0].year;
  let latest = projects[0].year;

  for (const p of projects) {
    clientsSet.add(p.client.trim());
    if (p.sector === 'Oil & Gas') oilGas++;
    else if (p.sector === 'Government & Defense') govDefense++;
    else if (p.sector === 'Township & Utilities') township++;
    else if (p.sector === 'Critical Facilities & Commercial') facilities++;

    if (p.year < earliest) earliest = p.year;
    if (p.year > latest) latest = p.year;
  }

  return {
    totalProjects: projects.length,
    uniqueClients: clientsSet.size,
    oilGasCount: oilGas,
    govDefenseCount: govDefense,
    townshipCount: township,
    facilitiesCount: facilities,
    earliestYear: earliest,
    latestYear: latest
  };
}

export function validateRfqForm(data: RfqFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your organization or company name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  const cleanedPhone = data.phone.replace(/[\s-]/g, '');
  if (!data.phone || cleanedPhone.length < 8 || !/^[+0-9]+$/.test(cleanedPhone)) {
    errors.phone = 'Please provide a valid phone contact number.';
  }

  if (!data.serviceCategory || data.serviceCategory === '') {
    errors.serviceCategory = 'Please select a primary engineering discipline.';
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 10) {
    errors.projectDescription = 'Please describe your project scope or facility requirements (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
