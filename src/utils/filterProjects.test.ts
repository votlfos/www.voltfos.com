import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, calculateProjectStats, validateRfqForm } from './filterProjects';
import { COMPANY_PROJECTS } from '../data/companyData';

test('filterProjects correctly returns all projects when query is empty and sector is All', () => {
  const result = filterProjects(COMPANY_PROJECTS, '', 'All');
  assert.equal(result.length, COMPANY_PROJECTS.length);
  assert.ok(result.length >= 25);
});

test('filterProjects correctly filters by Oil & Gas sector', () => {
  const result = filterProjects(COMPANY_PROJECTS, '', 'Oil & Gas');
  assert.ok(result.length > 0);
  for (const p of result) {
    assert.equal(p.sector, 'Oil & Gas');
  }
});

test('filterProjects correctly filters by text search query (e.g. PETRONAS, MET, PKNS)', () => {
  const petronas = filterProjects(COMPANY_PROJECTS, 'petronas', 'All');
  assert.ok(petronas.length >= 5);
  for (const p of petronas) {
    const text = (p.client + ' ' + p.project).toLowerCase();
    assert.ok(text.includes('petronas'));
  }

  const met = filterProjects(COMPANY_PROJECTS, 'meteorologi', 'All');
  assert.ok(met.length >= 2);
});

test('calculateProjectStats calculates counts and spans accurately', () => {
  const stats = calculateProjectStats(COMPANY_PROJECTS);
  assert.equal(stats.totalProjects, COMPANY_PROJECTS.length);
  assert.ok(stats.uniqueClients >= 15);
  assert.ok(stats.oilGasCount > 0);
  assert.ok(stats.govDefenseCount > 0);
  assert.ok(stats.townshipCount > 0);
  assert.ok(stats.facilitiesCount > 0);
  assert.ok(stats.earliestYear <= 2010);
  assert.ok(stats.latestYear >= 2024);
});

test('validateRfqForm accepts valid form submissions', () => {
  const valid = validateRfqForm({
    fullName: 'Ir. Ahmad Razali',
    companyName: 'PetroTek Engineering Sdn Bhd',
    email: 'ahmad@petrotek.com.my',
    phone: '+60123456789',
    serviceCategory: 'lightning-surge',
    projectLocation: 'Pengerang, Johor',
    estimatedTimeline: 'Q3 2026',
    projectDescription: 'We require a comprehensive lightning protection and tank earthing audit for 4 fuel storage tanks.'
  });

  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('validateRfqForm rejects invalid submissions with actionable field errors', () => {
  const invalid = validateRfqForm({
    fullName: '',
    companyName: '',
    email: 'not-an-email',
    phone: '123',
    serviceCategory: '',
    projectLocation: '',
    estimatedTimeline: '',
    projectDescription: 'short'
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.serviceCategory);
  assert.ok(invalid.errors.projectDescription);
});
