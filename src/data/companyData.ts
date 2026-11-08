export interface ProjectRecord {
  id: string;
  client: string;
  project: string;
  year: number;
  sector: 'Oil & Gas' | 'Government & Defense' | 'Township & Utilities' | 'Critical Facilities & Commercial';
  highlight?: boolean;
  standards?: string[];
  deliverables?: string[];
  location?: string;
}

export interface ServiceCapability {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  scopeList: string[];
  standards: string[];
  featuredProjects: string[];
}

export interface RegistrationItem {
  id: number;
  body: string;
  referenceNo?: string;
  category?: string;
  status: string;
}

export const COMPANY_DETAILS = {
  name: 'VOLTFOS SDN BHD',
  legalName: 'VOLTFOS SDN BHD',
  logo: '/assets/aistudio/Voltfos_-_New_Logo_2021_Rev_2_6d240ee0.png',
  nature: 'Sendirian Berhad (Private Limited)',
  registrationNo: '201101033049 (961184-X)',
  gstId: '001747177472',
  incorporationDate: '22 September 2011',
  equity: '100% Bumiputera',
  authorizedCapital: 'RM 500,000.00',
  paidUpCapital: 'RM 500,000.00',
  principalBanker: 'CIMB Bank Berhad',
  swiftCode: 'CIMBBMYKL',
  accountNo: '800-348-1294',
  address: {
    street: 'No 11A, Jalan 8A, Ampang Jaya',
    postcode: '68000',
    city: 'Ampang',
    state: 'Selangor Darul Ehsan',
    country: 'Malaysia'
  },
  contacts: {
    phone: '+603 4251 5187',
    fax: '+603 4251 3187',
    email: 'info@voltfos.com',
    secondaryEmail: 'voltfos@gmail.com',
    website: 'www.voltfos.com'
  },
  leadership: [
    {
      name: 'Amir Firdaus',
      role: 'Managing Director & Engineering Director',
      credentials: 'B.Eng (Hons) Electrical Power (UNITEN), Dip. Electrical (UNITEN)',
      registrations: [
        { body: 'Board of Engineers Malaysia (BEM)', regNo: 'GE55625A' },
        { body: 'Malaysia Board of Technologists (MBOT)', regNo: 'GT20110094' },
        { body: 'Institution of Engineers Malaysia (IEM)', regNo: '43106' },
        { body: 'Associate ASEAN Engineer (AAE)', regNo: 'Member' },
        { body: 'CIDB Malaysia', regNo: 'EWK3 Electrical Supervisor' },
        { body: 'NIOSH / PETRONAS', regNo: 'Oil & Gas Safety Passport (OGSP)' }
      ],
      bio: 'Over 15 years of distinguished leadership across power systems, lightning and surge suppression, oil & gas upstream/downstream facilities, and national critical infrastructure. Former Lead Engineer at Rizal Hood Jurutera Perunding, Regional Director at for US company and Project Engineer for BPE Engineering & Services Sdn Bhd (BPE Energy)'
    },
    {
      name: 'Eniliana',
      role: 'Managing Director & Financial Controller',
      credentials: 'Higher Diploma in Accounting (Stamford College), LCCI',
      registrations: [
        { body: 'Corporate Financial Management', regNo: '17+ Years Experience' },
        { body: 'Contract & Cost Recovery Specialist', regNo: 'Oil & Gas and Engineering' }
      ],
      bio: 'Over 17 years managing corporate finance, taxation, contract administration, and financial compliance for oil & gas consultancies, engineering operations, and corporate entities including Imagnia Group of Companies and Advantage Depth Engineering.'
    }
  ],
  registrations: [
    { id: 1, body: 'Companies Commission Of Malaysia (SSM)', status: 'Active Registered' },
    { id: 2, body: 'Ministry Of Finance (MOF)', referenceNo: 'K63730167511963818 / 357-02187911', status: 'Active (30 Bidang Codes)' },
    { id: 3, body: 'Ministry Of Finance (MOF) Bumiputera', referenceNo: 'Certified Bumiputera Status', status: 'Active' },
    { id: 4, body: 'CIDB Perakuan Pendaftaran (PPK)', referenceNo: '0120130827-WP151970', status: 'Active Grade G3' },
    { id: 5, body: 'CIDB Sijil Perolehan Kerja Kerajaan (SPKK)', status: 'Certified Government Procurement' },
    { id: 6, body: 'CIDB Sijil Taraf Bumiputera (STB)', status: 'Certified Bumiputera Contractor' },
    { id: 7, body: 'Suruhanjaya Tenaga (Energy Commission)', status: 'Compliant & Registered' },
    { id: 8, body: 'Tenaga Nasional Berhad (TNB)', status: 'Approved Vendor' },
    { id: 9, body: 'Petroliam Nasional Berhad (PETRONAS)', status: 'Approved Vendor' },
    { id: 10, body: 'Ministry Of Defence Malaysia (MINDEF)', status: 'Approved Vendor' },
    { id: 11, body: 'Telekom Malaysia Berhad (TM)', status: 'Approved Vendor' },
    { id: 12, body: 'Putrajaya Holdings (PJH)', status: 'Approved Vendor' },
    { id: 13, body: 'Felda Global Ventures Berhad (FELDA)', status: 'Approved Vendor' },
    { id: 14, body: 'Boustead Naval Shipyard', status: 'Approved Vendor' }
  ],
  cidbSpecializations: [
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E03', desc: 'Building Automation Systems' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E06', desc: 'Specialized Lighting Systems' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E10', desc: 'Uninterruptible Power Supply (UPS) Systems' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E11', desc: 'General Electrical Works' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E14', desc: 'Computer & Data Network Cabling' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E16', desc: 'Street Lighting & Traffic Signal Systems' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E17', desc: 'Low Voltage Underground Cabling Reticulation' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E21', desc: 'Low Voltage Overhead Lines' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'E32', desc: 'Low Voltage Generating Sets' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'M01', desc: 'Air Conditioning & Mechanical Ventilation' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'M04', desc: 'Fire Prevention & Fire Protection Systems' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'M15', desc: 'Diverse Mechanical Equipment & Installations' },
    { category: 'ME - Mechanical & Electrical', grade: 'G3', code: 'M20', desc: 'General Mechanical Maintenance' },
    { category: 'B - Building', grade: 'G3', code: 'B04', desc: 'Building Construction Works' },
    { category: 'B - Building', grade: 'G3', code: 'B07', desc: 'Interior Decoration & Refurbishment' },
    { category: 'CE - Civil Engineering', grade: 'G3', code: 'CE21', desc: 'General Civil Engineering Construction' },
    { category: 'CE - Civil Engineering', grade: 'G3', code: 'CE32', desc: 'Civil Engineering Maintenance Works' },
    { category: 'ME - Mechanical & Electrical', grade: 'G2', code: 'E04', desc: 'Low Voltage Electrical Installations' }
  ],
  partnerBrands: [
    { name: 'SkyScan', specialty: 'Early Warning Lightning Detectors', origin: 'USA' },
    { name: 'StrikeAlert', specialty: 'Personal & Field Lightning Detectors', origin: 'USA' },
    { name: 'Protec', specialty: 'Advanced Surge & Lightning Solutions', origin: 'International' },
    { name: 'APC by Schneider', specialty: 'Industrial Critical Power & UPS', origin: 'Global' },
    { name: 'NeuroPower', specialty: 'Power Solutions & Uninterruptible Supply', origin: 'Malaysia' },
    { name: 'Duval', specialty: 'Auto Recloser Motorized RCCD Systems', origin: 'France / Int.' },
    { name: 'Panasonic', specialty: 'Industrial Sealed Maintenance-Free Batteries', origin: 'Japan' },
    { name: 'Powerbatt', specialty: 'Heavy Duty Industrial Power Batteries', origin: 'Global' },
    { name: 'Leoch', specialty: 'Industrial Stationary VRLA Batteries', origin: 'Global' },
    { name: 'Cal-Lab', specialty: 'High Reliability Surge Protection Modules', origin: 'Malaysia' },
    { name: 'Belco', specialty: 'Specialized Industrial Surge Protection', origin: 'Malaysia' }
  ],
  engineeringStandards: [
    { code: 'MS IEC 62305', title: 'Protection Against Lightning (Parts 1 - 4)', scope: 'Risk Assessment, Physical Damage, and Surge Protection in Structures' },
    { code: 'API RP 545', title: 'Lightning Protection of Aboveground Storage Tanks', scope: 'Flammable & Combustible Liquid Tanks, Bypass Conductors & RGA' },
    { code: 'NFPA 780', title: 'Standard for Installation of Lightning Protection Systems', scope: 'Industrial, Petrochemical & Government Structures' },
    { code: 'BS 6651:1999', title: 'Code of Practice for Protection of Structures Against Lightning', scope: 'Historical & Industrial Structural Standards' },
    { code: 'ESAH v3.1', title: 'TNB Electricity Supply Application Handbook', scope: 'Substation Design, Intake Connections & LV/HV Distribution' },
    { code: 'Suruhanjaya Tenaga (ST)', title: 'Guidelines for Electrical Domestic & Industrial Wiring', scope: 'National Safety, Competency & Verification Regulations' },
    { code: 'SPAN Guidelines', title: 'Malaysian Sewerage & Water Reticulation Guidelines', scope: 'Uniform Technical Guidelines for Building & Infrastructure' },
    { code: 'UBBL 1984 & BOMBA 2006', title: 'Uniform Building By-Laws & Fire Protection Guide', scope: 'Statutory Life Safety, Fire Alarm, Pumps & Egress Systems' }
  ]
};

export const COMPANY_PROJECTS: ProjectRecord[] = [
  // 2024 - 2022 PKNS & High profile infrastructure
  {
    id: 'p-2024-pkns-2b',
    client: 'Perbadanan Kemajuan Negeri Selangor (PKNS)',
    project: 'Pembangunan Tasik 2B, Antara Gapi - Main Electrical & Mechanical Infrastructure Design, Load Calculations, Street Lighting & TNB Authority Clearance',
    year: 2024,
    sector: 'Township & Utilities',
    highlight: true,
    standards: ['ESAH v3.1', 'TNB Standards', 'JKR Street Lighting', 'SPAN'],
    deliverables: ['Load Demand Profiles', 'Substation Layout Coordination', 'Street Lighting Photometrics', 'OSC 3.0 Plus Approvals'],
    location: 'Antara Gapi, Selangor'
  },
  {
    id: 'p-2024-pkns-3a',
    client: 'Perbadanan Kemajuan Negeri Selangor (PKNS)',
    project: 'Pembangunan Seksyen 3A, Antara Gapi - Complete Infrastructure Electrical Engineering, LV Reticulation & Street Lighting Network',
    year: 2024,
    sector: 'Township & Utilities',
    standards: ['ESAH v3.1', 'TNB Substation Guide v2.0'],
    deliverables: ['LV Underground Distribution Route', 'Feeder Pillar Design', 'Authority Coordination'],
    location: 'Antara Gapi, Selangor'
  },
  {
    id: 'p-2024-ppdcbb-turnaround',
    client: 'Perbadanan Pengurusan D’Casa Bandar Baru (PPDCBB)',
    project: 'Comprehensive Facility Asset Recovery - 350kVA Generator Overhaul, JKKP Elevator Recommissioning, Water Pump Overhaul, Bulk Meter to Air Selangor Migration',
    year: 2024,
    sector: 'Critical Facilities & Commercial',
    highlight: true,
    standards: ['JKKP (Act 139)', 'Suruhanjaya Tenaga', 'Air Selangor Guidelines', 'UBBL 1984'],
    deliverables: ['350kVA Standby Genset Major Service', 'Capacitor Bank Power Factor Correction', 'RFID Autogate & CCTV Infrastructure', 'Swimming Pool Electrical Reticulation'],
    location: 'Ampang, Selangor'
  },
  {
    id: 'p-2023-umpsa',
    client: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    project: 'Comprehensive Campus Engineering Audit & Reassessment for Electrical, Mechanical, Structural & Civil Systems',
    year: 2023,
    sector: 'Critical Facilities & Commercial',
    highlight: true,
    standards: ['MS IEC 62305', 'ST Regulations', 'UBBL 1984'],
    deliverables: ['Campus-Wide Asset Condition Assessment', 'Power Distribution Audit', 'Life-Safety Risk Mitigation Strategy'],
    location: 'Gambang, Pahang'
  },
  {
    id: 'p-2023-mindef-muara-tuang',
    client: 'Ministry of Defence Malaysia (MINDEF) / SESCO',
    project: 'Small Arm & Virtual Training Simulator Facility - 300kVA 11/0.433kV Substation Delivery, Specialized LV Circuitry & AV Distribution',
    year: 2023,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['Sarawak Energy SESCO Standards', 'MINDEF Specifications', 'MS IEC 62305'],
    deliverables: ['300kVA Transformer Substation Delivery', 'Simulator LV Clean Power Network', 'Acoustic & AV Power Isolation'],
    location: 'Muara Tuang, Kuching, Sarawak'
  },
  {
    id: 'p-2023-al-suffi',
    client: 'Al Suffi Resources Sdn Bhd',
    project: 'Mixed Development Complex - Full Multi-Disciplinary Engineering Design (Electrical, Mechanical, Structural & Civil Works)',
    year: 2023,
    sector: 'Township & Utilities',
    standards: ['Uniform Building By-Laws', 'SPAN', 'TNB ESAH'],
    deliverables: ['M&E Building Services Layout', 'Structural Load Calculations', 'Site Utilities Reticulation'],
    location: 'Batu Pahat, Johor'
  },
  {
    id: 'p-2022-asasi-tepat',
    client: 'Asasi Tepat Development Sdn Bhd',
    project: 'Recovery Complex Development - Integrated Civil & Structural and Electrical & Mechanical Solutions',
    year: 2022,
    sector: 'Township & Utilities',
    standards: ['UBBL', 'ST Wiring Regulations'],
    deliverables: ['Civil Foundation & Structural Frame Design', 'Electrical Power & Lighting Reticulation'],
    location: 'Klang, Selangor'
  },
  {
    id: 'p-2022-pengasih',
    client: 'Persatuan PENGASIH Malaysia',
    project: 'Bentong Complex Development - Comprehensive C&S and M&E Engineering Deliverables',
    year: 2022,
    sector: 'Township & Utilities',
    standards: ['BOMBA 2006', 'Suruhanjaya Tenaga'],
    deliverables: ['Integrated Electrical Power Distribution', 'Drainage & Civil Reticulation'],
    location: 'Bentong, Pahang'
  },
  {
    id: 'p-2021-lgm-led',
    client: 'Lembaga Getah Malaysia (LGM)',
    project: '11.5m x 57.3m Landmark LED Display Screen & Dedicated Low Voltage Transformer Substation Room Design',
    year: 2021,
    sector: 'Critical Facilities & Commercial',
    highlight: true,
    standards: ['TNB Standards', 'MS 1936', 'BS 5950 Structural Steel'],
    deliverables: ['Dedicated LV Substation Transformer Room', 'Structural Wind-Load Steel Framing', 'Power Distribution & Harmonic Filters'],
    location: 'Jalan Ampang, Kuala Lumpur'
  },
  {
    id: 'p-2021-lgm-rrim',
    client: 'Lembaga Getah Malaysia (LGM)',
    project: 'High-Precision Electrical Wiring & Clean Power Installation for New Testing Laboratory at USTL RRIM Sungai Buloh',
    year: 2021,
    sector: 'Critical Facilities & Commercial',
    standards: ['MS IEC 60364', 'Suruhanjaya Tenaga'],
    deliverables: ['Sensitive Laboratory Instrument Circuitry', 'Clean Grounding System', 'Emergency Isolation Panels'],
    location: 'Sungai Buloh, Selangor'
  },
  {
    id: 'p-2021-chong-seng',
    client: 'Chong Seng Development Sdn Bhd',
    project: 'Recovery Complex Project - Total Engineering Deliverables (Civil, Structural, Electrical & Mechanical)',
    year: 2021,
    sector: 'Township & Utilities',
    standards: ['UBBL', 'ESAH'],
    deliverables: ['C&S and M&E Integrated Schematic Design'],
    location: 'Si Rusa, Negeri Sembilan'
  },
  // Government Critical Power & MET Malaysia
  {
    id: 'p-2020-met-malaysia-3',
    client: 'Jabatan Meteorologi Malaysia (MET Malaysia)',
    project: 'National Earthquake & Tsunami Early Warning Network - Multi-Station Industrial UPS & Battery Bank Deployment Across Peninsular, Sabah & Sarawak',
    year: 2020,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['MET Malaysia Technical Specs', 'IEC 62040-3', 'IEEE 1184'],
    deliverables: ['Turnkey Industrial Battery Banks', 'Seismic Power Conditioning Units', 'Nationwide Multi-State Commissioning'],
    location: 'Nationwide (Peninsular, Sabah & Sarawak)'
  },
  {
    id: 'p-2020-isn-detectors',
    client: 'Institut Sukan Negara (ISN)',
    project: 'Specialized Lightning Detection Units Supply, Installation & Safety Protocol Training for National Athletes',
    year: 2020,
    sector: 'Government & Defense',
    standards: ['MS IEC 62305', 'OSHA 1994'],
    deliverables: ['Early Warning Electromagnetic Detectors', 'Safety Protocol & Threshold Calibration Training'],
    location: 'Bukit Jalil, Kuala Lumpur'
  },
  {
    id: 'p-2020-lgm-maint',
    client: 'Lembaga Getah Malaysia (LGM)',
    project: 'Annual Electrical Maintenance & Safety Audit for LGM Complex',
    year: 2020,
    sector: 'Critical Facilities & Commercial',
    standards: ['Suruhanjaya Tenaga ST Regulations'],
    deliverables: ['Switchboard Thermal Imaging', 'Ground Resistance Testing', 'Circuit Breaker Secondary Injection'],
    location: 'Sungai Buloh, Selangor'
  },
  {
    id: 'p-2019-met-malaysia-2',
    client: 'Jabatan Meteorologi Malaysia (MET Malaysia)',
    project: 'Earthquake & Tsunami Detection Power System Supply & Verification Across 13 Strategic Remote Stations',
    year: 2019,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['MET Specs', 'IEC 62040'],
    deliverables: ['Autonomous DC Battery Backup Racks', 'Solar/Mains Dual Hybrid Charging Rectifiers'],
    location: '13 Stations across Sabah, Sarawak & Peninsular'
  },
  {
    id: 'p-2019-apmm',
    client: 'Agensi Penguatkuasaan Maritim Malaysia (APMM)',
    project: 'Turnkey Supply, Delivery and Installation of Critical Electrical Power Components at APMM Headquarters',
    year: 2019,
    sector: 'Government & Defense',
    standards: ['JKR Standards', 'ST Guidelines'],
    deliverables: ['Sub-distribution Boards Overhaul', 'Critical Power Feeder Protection'],
    location: 'Putrajaya / Klang'
  },
  {
    id: 'p-2019-fam',
    client: 'Persatuan Bolasepak Malaysia (FAM)',
    project: 'Supply, Field Calibration and Operational Training of Lightning Detector Alert Systems for National Stadium Facilities',
    year: 2019,
    sector: 'Critical Facilities & Commercial',
    standards: ['MS IEC 62305'],
    deliverables: ['Field Electromagnetic Sensor Units', 'Referees & Staff Safety Protocol Training'],
    location: 'Kelana Jaya, Selangor'
  },
  {
    id: 'p-2019-utm-holdings',
    client: 'UTM Holdings Sdn Bhd',
    project: 'Bangunan UTM Holdings Renovation Works - Integrated M&E and Civil Refurbishment',
    year: 2019,
    sector: 'Critical Facilities & Commercial',
    standards: ['UBBL', 'ST Regulations'],
    deliverables: ['Office Lighting & Power Reticulation', 'Civil Partitioning & HVAC Ducting Refit'],
    location: 'Kuala Lumpur'
  },
  {
    id: 'p-2018-met-malaysia-1',
    client: 'Jabatan Meteorologi Malaysia (MET Malaysia)',
    project: 'Turnkey Power System Supply & Deployment for Seismological & Tsunami Stations Across 31 Remote Locations',
    year: 2018,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['MET Technical Standard', 'IEEE 485'],
    deliverables: ['31 Remote Stations Deployed', 'High-Discharge Deep Cycle Battery Strings', 'UPS Rectifier Systems'],
    location: '31 Locations in Peninsular, Sabah & Sarawak'
  },
  {
    id: 'p-2018-petronas-bif-ccr',
    client: 'Petronas Carigali Sdn Bhd (BIF)',
    project: 'Bintulu Integrated Facility (BIF) - Central Control Room (CCR) Critical Grounding Assessment & Loop Impedance Study',
    year: 2018,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['Petronas Technical Standards (PTS)', 'MS IEC 62305', 'IEEE 81'],
    deliverables: ['Precision Instrument Earth Loop Impedance Mapping', 'Transient Noise Isolation Scheme', 'Rectification Schedule'],
    location: 'Bintulu, Sarawak'
  },
  {
    id: 'p-2018-mindef-ups',
    client: 'Ministry of Defence Malaysia (MINDEF)',
    project: 'Preventive Maintenance, Battery Health Diagnostics & Load Bank Testing for 40kVA and 20kVA Industrial UPS Systems',
    year: 2018,
    sector: 'Government & Defense',
    standards: ['MINDEF Defence Tech Standard', 'IEC 62040'],
    deliverables: ['40kVA UPS at Jalan Padang Tembak', '20kVA UPS at DSP Sg Buloh', 'Impedance & Capacity Load Bank Testing'],
    location: 'Kuala Lumpur & Sg Buloh'
  },
  {
    id: 'p-2018-mab',
    client: 'Malaysia Airlines Berhad (MAB)',
    project: 'Supply, Calibration and Aviation Operations Safety Training of Lightning Warning Detector Units',
    year: 2018,
    sector: 'Critical Facilities & Commercial',
    standards: ['Aviation Ground Safety Protocols', 'MS IEC 62305'],
    deliverables: ['Tarmac & Hangar Lightning Alert Sensor Units', 'Ground Crew Warning System Integration'],
    location: 'KLIA, Sepang'
  },
  // Oil & Gas - Petronas Offshore & Onshore
  {
    id: 'p-2017-petronas-bif-rect',
    client: 'Petronas Carigali Sdn Bhd (BIF Onshore)',
    project: 'Bintulu Integrated Facilities (BIF) - Site-Wide Lightning Protection, Surge Protection & Grounding System Rectification and Testing',
    year: 2017,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['PTS 13.64.01', 'API RP 545', 'MS IEC 62305', 'NFPA 780'],
    deliverables: ['Full Terminal Earth Grid Reconstruction', 'Surge Arrester Replacement on Critical Switchgear', 'Equipotential Bonding Certifications'],
    location: 'Bintulu, Sarawak'
  },
  {
    id: 'p-2017-petronas-bokor',
    client: 'Petronas Carigali Sdn Bhd (BOKOR, BETTY, LAILA Platforms)',
    project: 'Offshore Production Platforms - Comprehensive Lightning Protection, Surge Suppression & Earthing Engineering Study',
    year: 2017,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['Petronas Technical Standards (PTS)', 'IEC 62305-3'],
    deliverables: ['Offshore Derrick & Heli-Deck Protection Assessment', 'Instrumentation Loop Surge Protection Design'],
    location: 'Offshore Sarawak Basin'
  },
  {
    id: 'p-2017-mindef-padang-tembak',
    client: 'Ministry of Defence Malaysia (MINDEF)',
    project: 'High Security Complex Padang Tembak - Turnkey Proposal, Engineering Design & Installation of LPS, Surge Protection & Lightning Event Counters',
    year: 2017,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['MS IEC 62305', 'MINDEF Specifications'],
    deliverables: ['Early Streamer / Franklin Air Terminal Network', 'Lightning Event Counter Logging Systems', 'Low Impedance Earth Pits (<1 Ohm)'],
    location: 'Padang Tembak, Kuala Lumpur'
  },
  {
    id: 'p-2017-wct-ijm',
    client: 'WCT / IJM / Acreworks Construction Consortium',
    project: 'Major Infrastructure & Highway Projects - Fleet Deployment of Early Warning Lightning Detection Units and Occupational Safety Briefings',
    year: 2017,
    sector: 'Township & Utilities',
    standards: ['CIDB Safety Guidelines', 'OSHA 1994'],
    deliverables: ['Portable & Base Station Lightning Sensors', 'Crane & Heavy Plant Lightning Evacuation Protocols'],
    location: 'Klang Valley Infrastructure Corridors'
  },
  {
    id: 'p-2016-petronas-bif-study',
    client: 'Petronas Carigali Sdn Bhd (BIF)',
    project: 'Bintulu Integrated Facilities - Baseline Comprehensive Engineering Study for Lightning Protection, Surge Protection & Site-Wide Earthing',
    year: 2016,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['PTS', 'API RP 545', 'IEC 62305'],
    deliverables: ['Comprehensive Site Audit Dossier', 'Rolling Sphere Risk Analysis', 'Deficiency Rectification Roadmap'],
    location: 'Bintulu, Sarawak'
  },
  {
    id: 'p-2016-mindef-karak',
    client: 'MINDEF / SD Advance Solution Sdn Bhd',
    project: 'Kem Mempaga Karak - Integrated Security & Surveillance System (ISSS) Spare Parts Supply & Technical Maintenance Consultancy',
    year: 2016,
    sector: 'Government & Defense',
    standards: ['MINDEF Defence Tech Standard'],
    deliverables: ['CCTV & Perimeter Sensor Surge Protection', 'Preventive Maintenance Service Framework'],
    location: 'Karak, Pahang'
  },
  {
    id: 'p-2016-mpaj-ups',
    client: 'Majlis Perbandaran Ampang Jaya (MPAJ)',
    project: 'Municipal Headquarters Data Center - Uninterruptible Power Supply (UPS) Servicing, Battery Bank Replacement & Capacity Upgrade',
    year: 2016,
    sector: 'Government & Defense',
    standards: ['Suruhanjaya Tenaga', 'IEC 62040'],
    deliverables: ['Data Center UPS Rectifier Overhaul', 'Battery String Replacement', 'Static Transfer Switch Verification'],
    location: 'Ampang Jaya, Selangor'
  },
  {
    id: 'p-2015-mosti-antenna',
    client: 'Agensi Angkasa Negara (MOSTI / Malaysian Space Agency)',
    project: 'Satellite Tracking Antenna Facility - Turnkey Delivery, Installation & Commissioning of Complete M&E Systems, Industrial UPS & Fire Alarm System',
    year: 2015,
    sector: 'Government & Defense',
    highlight: true,
    standards: ['MOSTI Aerospace Standards', 'UBBL 1984', 'BOMBA Guide 2006', 'MS IEC 60364'],
    deliverables: ['Antenna Building Main Power Distribution', 'Clean Online UPS Power Conditioning', 'Clean Gas & Addressable Fire Alarm System'],
    location: 'Banting / Selangor'
  },
  {
    id: 'p-2015-petronas-kumang',
    client: 'Petronas Carigali Sdn Bhd (KUMANG Offshore Cluster)',
    project: 'Kumang Gas Field Offshore Facilities - Specialist Study for Lightning Protection, Surge Protection & Structural Bonding',
    year: 2015,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['Petronas Technical Standards (PTS)', 'API RP 545', 'IEC 62305'],
    deliverables: ['Offshore Flare Boom & Vent Stack LPS Audit', 'Surge Suppressor Matrix for SCADA Telemetry'],
    location: 'Offshore Bintulu, Sarawak'
  },
  {
    id: 'p-2014-petronas-temana',
    client: 'Petronas Carigali Sdn Bhd (TEMANA Offshore Platforms)',
    project: 'Temana Cluster Offshore Facilities - Electrical Earthing, Lightning Protection & Surge Diverter Engineering Reassessment',
    year: 2014,
    sector: 'Oil & Gas',
    standards: ['PTS 13.64.01', 'IEC 62305'],
    deliverables: ['Offshore Rig Grounding Verification', 'Explosion-Proof Area Earthing Integrity'],
    location: 'Offshore Sarawak'
  },
  {
    id: 'p-2014-petronas-bcot',
    client: 'Petronas Carigali Sdn Bhd (Bintulu Crude Oil Terminal - BCOT)',
    project: 'Crude Oil Storage Terminal - Comprehensive Study for Lightning Protection, Surge Protection & Atmospheric Storage Tank Earthing',
    year: 2014,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['API RP 545', 'PTS', 'NFPA 780'],
    deliverables: ['Floating Roof Tank Grounding Bypass Verification', 'Substation Lightning Earthing Network Design'],
    location: 'Bintulu, Sarawak'
  },
  {
    id: 'p-2014-rsgc',
    client: 'The Royal Selangor Golf Club (RSGC)',
    project: 'Premier Sports & Clubhouse Facility - Complete Electrical System Upgrade, New Lightning Protection System & Earthing Upgrades, Facility CCTV System',
    year: 2014,
    sector: 'Critical Facilities & Commercial',
    highlight: true,
    standards: ['MS IEC 62305', 'Suruhanjaya Tenaga Regulations'],
    deliverables: ['Clubhouse & Course Lightning Protection', 'Grounding Grid Re-engineering', 'Facility-Wide CCTV Security Surveillance'],
    location: 'Kuala Lumpur'
  },
  {
    id: 'p-2014-club-med',
    client: 'Club Med Cherating Beach Holiday Villages',
    project: 'Coastal Resort Facility - Specialist Engineering Study and Installation of Lightning & Surge Protection Systems',
    year: 2014,
    sector: 'Critical Facilities & Commercial',
    standards: ['MS IEC 62305', 'BS 6651'],
    deliverables: ['Chalet & Central Pavilion Lightning Network', 'Telecommunication & PBX Surge Diverters'],
    location: 'Cherating, Pahang'
  },
  // Regional & International (Chevron Indonesia, ExxonMobil, SOGT)
  {
    id: 'p-2013-chevron-indonesia',
    client: 'PT Wilson Walton / Chevron Indonesia',
    project: 'Chevron Balikpapan & Lawe-Lawe Terminals, Indonesia - Large Atmospheric Floating Roof Tank Lightning Protection Study, Audit, Design & Supervision (MYR 750,000 Volume)',
    year: 2013,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['API RP 545', 'LASTFIRE Standards', 'NFPA 780', 'IEC 62305'],
    deliverables: ['Retractable Grounding Assembly (RGA) Design', 'Tank Rim Seal Risk Assessment', 'Single-Handed Delivery of MYR 750k Scope'],
    location: 'Balikpapan & Lawe-Lawe, East Kalimantan, Indonesia'
  },
  {
    id: 'p-2013-sogt-samsung',
    client: 'Petronas / Samsung / KNM Petrosab Engineering Sdn Bhd',
    project: 'Sabah Oil & Gas Terminal (SOGT) Project - Design & Supervision of Lightning Protection Devices for Heavy Industrial Floating Roof Storage Tanks',
    year: 2013,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['Petronas Technical Standards (PTS)', 'API RP 545', 'IEC 62305'],
    deliverables: ['Floating Roof Storage Tank Lightning Protectors', 'Supervised Commissioning at SOGT Site'],
    location: 'Kimanis, Sabah'
  },
  {
    id: 'p-2013-pakistan-hc',
    client: 'High Commissioner for the Islamic Republic of Pakistan',
    project: 'High Commission Chancery Complex - Turnkey Consultation, Design and Installation of Electrical Upgrades, Surge Suppression & LPS',
    year: 2013,
    sector: 'Government & Defense',
    standards: ['MS IEC 62305', 'Suruhanjaya Tenaga'],
    deliverables: ['Diplomatic Mission Power Overhaul', 'Low-Impedance Earthing Installation', 'Telecommunications Surge Suppression'],
    location: 'Kuala Lumpur'
  },
  {
    id: 'p-2013-jotun-coatings',
    client: 'Jotun Powder Coatings (Malaysia) Sdn Bhd',
    project: 'Industrial Chemical Manufacturing Facility - Electrical Safety Audits, Earthing Verification & Lightning Protection Upgrades',
    year: 2013,
    sector: 'Critical Facilities & Commercial',
    standards: ['DOSH / JKKP', 'MS IEC 62305', 'IEC 60079 Hazardous Areas'],
    deliverables: ['Powder Coating Solvent Storage Earthing Audit', 'Static Discharge Bonding Verification'],
    location: 'Nilai, Negeri Sembilan'
  },
  {
    id: 'p-2013-fmc-technologies',
    client: 'FMC Wellhead Equipment Sdn Bhd',
    project: 'Subsea & Wellhead Manufacturing Plant - Design, Sizing & Supply of Industrial Uninterruptible Power Supply (APC by Schneider Electric)',
    year: 2013,
    sector: 'Oil & Gas',
    standards: ['IEC 62040-3'],
    deliverables: ['High Reliability Industrial APC UPS Configuration', 'Load Isolation & Harmonic Mitigation'],
    location: 'Port Klang, Selangor'
  },
  {
    id: 'p-2012-exxonmobil-singapore',
    client: 'ExxonMobil Singapore / PEC Ltd',
    project: 'Jurong Island Petrochemical Complex - Specialist Consultation & Engineering Design for Upgrading Lightning Protection on Floating Roof Storage Tanks',
    year: 2012,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['API RP 545', 'NFPA 780', 'IEC 62305'],
    deliverables: ['Floating Roof Tank Rim Bond Engineering', 'Subcontractor Technical Supervision'],
    location: 'Jurong Island, Singapore'
  },
  {
    id: 'p-2012-nestle',
    client: 'Nestle (Malaysia) / Profile Budi Sdn Bhd',
    project: 'Nestle Seksyen 15 Shah Alam - Repair, Overhaul & Maintenance of 18 Specialized Cleanroom Air Conditioning & Ventilation Units',
    year: 2012,
    sector: 'Critical Facilities & Commercial',
    standards: ['ISO 14644 Cleanroom Standards', 'BOMBA Guide'],
    deliverables: ['18 Units Cleanroom HVAC Overhaul', 'HEPA Filtration & Pressure Balance Verification'],
    location: 'Shah Alam, Selangor'
  },
  {
    id: 'p-2011-nikmat-mujur',
    client: 'Nikmat Mujur Petroleum Sdn Bhd',
    project: 'Oil Storage Depot Facility - Turnkey Design, Engineering Rejuvenation & Installation of Electrical Infrastructure, Lightning & Surge Protection',
    year: 2011,
    sector: 'Oil & Gas',
    standards: ['API RP 545', 'Suruhanjaya Tenaga Regulations', 'MS IEC 62305'],
    deliverables: ['Terminal Power Distribution Rebuild', 'Tank Farm Equipotential Grounding Grid', 'Primary Switchboard Installation'],
    location: 'Meru / Kemuning, Selangor'
  },
  {
    id: 'p-2009-pgb-maintenance',
    client: 'PETRONAS Gas Berhad (PGB)',
    project: 'Comprehensive 2+1 Year Contract - Electrical Maintenance & Infrastructure Engineering Services Across 3 Major Sites (KLIA, Subang, Klang)',
    year: 2009,
    sector: 'Oil & Gas',
    highlight: true,
    standards: ['Petronas Technical Standards (PTS)', 'Electricity Regulations 1994'],
    deliverables: ['Multi-Site Preventative Maintenance Execution', 'Emergency Fault Callout Readiness', 'Gas Leakage Mapping Consultation'],
    location: 'KLIA, Subang & Klang'
  },
  {
    id: 'p-2008-klia',
    client: 'Malaysia Airports Berhad / KLIA Facilities',
    project: 'Kuala Lumpur International Airport (KLIA) - Electrical Distribution Survey, DC Battery Maintenance & Substation Verification',
    year: 2008,
    sector: 'Township & Utilities',
    standards: ['PTS', 'Electricity Supply Act 1990', 'BS 6651'],
    deliverables: ['Airside & Landside Electrical Distribution Audit', 'DC Battery Bank Servicing'],
    location: 'KLIA, Sepang'
  },
  {
    id: 'p-2008-mcot-bcot-earthing',
    client: 'PETRONAS Carigali Sdn Bhd (MCOT / BCOT)',
    project: 'Miri Crude Oil Terminal (MCOT) & Bintulu Crude Oil Terminal (BCOT) - Detailed LPS Study & Engineering Design for Crude Oil Storage Tank Earthing',
    year: 2008,
    sector: 'Oil & Gas',
    standards: ['PTS', 'API RP 545', 'BS 6651'],
    deliverables: ['Tank Earthing System Detail Design Drawings', 'Soil Resistivity Survey & Cathodic Protection Interface'],
    location: 'Miri & Bintulu, Sarawak'
  }
];

export const CORE_SERVICES: ServiceCapability[] = [
  {
    id: 'lightning-surge',
    title: 'Lightning Protection, Surge Suppression & Earthing Systems',
    shortDesc: 'End-to-end lightning risk assessments, early warning detection networks, surge diverters, and deep earthing compliant with MS IEC 62305 and API RP 545.',
    fullDesc: 'Voltfos Sdn Bhd is an industry recognized specialist in structural and industrial lightning protection. We provide risk assessments using rolling sphere, protective angle, and mesh methods, design specialized earthing grids (<1 Ohm), and protect hazardous storage tanks, offshore platforms, telecommunication towers, and national facilities.',
    image: '/src/assets/images/oil_gas_terminal_earthing_1793837416302.jpg',
    scopeList: [
      'Site risk assessment & rolling sphere modeling per MS IEC 62305',
      'Floating roof tank lightning protection & bypass conductors per API RP 545',
      'Early warning electromagnetic lightning detector supply (SkyScan, StrikeAlert)',
      'Transient Voltage Surge Suppressors (TVSS / SPD) for power, telecoms & SCADA',
      'Deep earth electrode installation, earth grid enhancement & loop impedance testing',
      'Lightning event counter logging and condition monitoring'
    ],
    standards: ['MS IEC 62305 (Parts 1-4)', 'API RP 545', 'NFPA 780', 'BS 6651', 'PTS 13.64.01'],
    featuredProjects: [
      'Petronas Bintulu Integrated Facility (BIF) Site-Wide Earthing & LPS Rectification',
      'Chevron Indonesia (Balikpapan & Lawe-Lawe) Floating Roof Tank Protection',
      'SOGT Sabah Oil & Gas Terminal Floating Roof Tank Protection',
      'Royal Selangor Golf Club (RSGC) Grounding Grid & Lightning Protection Upgrades'
    ]
  },
  {
    id: 'power-substations',
    title: 'High & Low Voltage Power Distribution & Substations',
    shortDesc: 'Substation engineering, transformer delivery (up to 33kV/11kV), Main Switchboards (MSB), power factor correction, and underground/overhead cable reticulation.',
    fullDesc: 'From high-density residential developments to defense testing facilities, Voltfos designs, installs, tests, and commissions complete power distribution infrastructure strictly adhering to Tenaga Nasional Berhad (TNB) and Sarawak Energy (SESCO) standards.',
    image: '/src/assets/images/main_switchboard_power_room_1793837416706.jpg',
    scopeList: [
      'Substation layout design, transformer installation & testing (300kVA+)',
      'Low Voltage Main Switchboard (MSB) fabrication, busbar sizing & relay coordination',
      'Underground cable trenching, jointing, cable pulling & high-voltage pressure testing',
      'Capacitor bank supply & automatic power factor correction (PFC) maintenance',
      'Secondary injection testing, protection relay calibrations & ACB servicing',
      'Suruhanjaya Tenaga (ST) recertification, inspection & endorsement'
    ],
    standards: ['Electricity Supply Application Handbook (ESAH v3.1)', 'TNB Substation Standards Guide v2.0', 'Suruhanjaya Tenaga Wiring Guidelines', 'MS IEC 60364'],
    featuredProjects: [
      'PKNS Antara Gapi (Tasik 2B & Seksyen 3A) Township Electrical Infrastructure',
      'MINDEF Muara Tuang 300kVA 11/0.433kV Transformer Substation & Simulator Distribution',
      'Lembaga Getah Malaysia (LGM) 57.3m LED Screen LV Substation Room',
      'PPDCBB 350kVA Standby Generator Major Overhaul & Capacitor Bank Rectification'
    ]
  },
  {
    id: 'critical-power-ups',
    title: 'Uninterruptible Power Supply (UPS) & DC Battery Systems',
    shortDesc: 'Turnkey industrial UPS, seismic monitoring power systems, battery bank impedance diagnostics, and high-reliability backup power for national critical infrastructure.',
    fullDesc: 'Voltfos provides mission-critical power continuity for government warning systems, defense command centers, data facilities, and healthcare assets. We specialize in industrial-grade APC by Schneider Electric and NeuroPower UPS systems, deep-cycle VRLA stationary battery strings, and automated transfer switches.',
    image: '/src/assets/images/critical_ups_battery_system_1793837417496.jpg',
    scopeList: [
      'Industrial online double-conversion UPS deployment (10kVA to 500kVA+)',
      'Turnkey multi-station DC battery bank supply & rack integration',
      'Battery internal impedance testing, conductance testing & load bank discharge tests',
      'Static transfer switches (STS) and dual-redundant distribution paths',
      'Preventive maintenance contracts with 24/7 emergency response SLA',
      'Seismic & tsunami detection telemetry autonomous power supply systems'
    ],
    standards: ['IEC 62040-3', 'IEEE 1184 (Battery Systems for UPS)', 'IEEE 485', 'PTS Standards'],
    featuredProjects: [
      'Jabatan Meteorologi Malaysia (MET): 3-Year 31-Station Earthquake & Tsunami Power System',
      'MINDEF Jalan Padang Tembak (40kVA) & DSP Sg Buloh (20kVA) UPS Maintenance',
      'FMC Wellhead Equipment Subsea Manufacturing Plant APC Industrial UPS',
      'Majlis Perbandaran Ampang Jaya (MPAJ) Data Center UPS Servicing & Upgrades'
    ]
  },
  {
    id: 'mechanical-building',
    title: 'Mechanical, HVAC, Fire Protection & Cleanroom Systems',
    shortDesc: 'Industrial ventilation, precision cleanroom air conditioning, pumping systems, and active fire fighting systems compliant with BOMBA and UBBL standards.',
    fullDesc: 'Delivering comprehensive mechanical engineering solutions from pharmaceutical and food-grade cleanrooms to municipal water pumping stations. Voltfos integrates chiller plants, air handling units, fire hydrants, gas suppression, and centralized building automation.',
    image: '/src/assets/images/hero_electrical_substation_1793837414465.jpg',
    scopeList: [
      'Cleanroom HVAC design, HEPA filter validation & pressure zoning (ISO 14644)',
      'Central chiller water systems, cassette split units & ductwork reticulation',
      'Automatic fire alarm, smoke evacuation, sprinkler & clean gas fire suppression',
      'Industrial booster pump rooms, hydro-pneumatic water reticulation & piping',
      'Building Automation Systems (BAS) & smart energy metering',
      'BOMBA annual fire safety audits & compliance certification'
    ],
    standards: ['Uniform Building By-Laws (UBBL 1984)', 'BOMBA Guide to Fire Protection 2006', 'ISO 14644', 'SPAN Water Reticulation Guidelines'],
    featuredProjects: [
      'Agensi Angkasa Negara (MOSTI) Satellite Antenna Facility M&E, Fire Alarm & HVAC',
      'Nestle Shah Alam Clean Room - 18 Units Industrial Air Conditioning Overhaul',
      'PPDCBB Booster Water Pump Room Complete Refurbishment & Piping Overhaul',
      'Lembaga Getah Malaysia Bangunan Getah Asli Air Conditioning Overhaul'
    ]
  },
  {
    id: 'township-infrastructure',
    title: 'Township Infrastructure, Civil Utilities & Street Lighting',
    shortDesc: 'Master utility planning, public roadway illumination, underground services coordination, and OSC 3.0 Plus municipal authority approvals.',
    fullDesc: 'Partnering with state development corporations, local authorities, and tier-one developers to engineer durable civil-electrical infrastructure. We deliver photometric street lighting designs, underground service trenches, and statutory liaison across TNB, SPAN, JKR, and Local Municipal Councils.',
    image: '/src/assets/images/hero_electrical_substation_1793837414465.jpg',
    scopeList: [
      'Complete township electrical & mechanical infrastructure design and load calculations',
      'Energy-efficient LED street lighting design & JKR photometric compliance',
      'Coordination via One Stop Center (KPKT OSC 3.0 Plus) online authority submission',
      'Malaysian Sewerage Industry & SPAN Water Reticulation alignment',
      'Underground utility routing and conflict resolution with GIS mapping',
      'Road reserve cable ducting, road crossing thrust-boring & inspection chambers'
    ],
    standards: ['ESAH v3.1', 'JKR Street Lighting Specification', 'SPAN Sewerage Industry Guidelines', 'KPKT OSC 3.0 Plus'],
    featuredProjects: [
      'PKNS Pembangunan Tasik 2B, Antara Gapi Infrastructure Master Engineering',
      'PKNS Pembangunan Seksyen 3A, Antara Gapi LV Reticulation & Street Lighting',
      'Al Suffi Resources Mixed Development Civil, Structural & M&E Works',
      'Asasi Tepat Recovery Complex Development Infrastructure Solutions'
    ]
  },
  {
    id: 'facility-recovery',
    title: 'Asset Management, Statutory Compliance & Facility Turnarounds',
    shortDesc: 'Comprehensive engineering turnaround of distressed residential and commercial properties, standby generators, elevator recommissioning, and water migration.',
    fullDesc: 'Voltfos provides strategic technical advisory for Joint Management Bodies (JMB), Management Corporations (MC), and institutional asset owners. We restore non-compliant engineering assets to full operational status under JKKP, Suruhanjaya Tenaga, and Air Selangor guidelines.',
    image: '/src/assets/images/main_switchboard_power_room_1793837416706.jpg',
    scopeList: [
      'Standby generating set (350kVA+) overhaul, synchronization & load testing',
      'Passenger & cargo elevator revival, machine room overhaul & JKKP compliance (Act 139)',
      'Water bulk-to-individual meter migration with state utility providers (Air Selangor)',
      'Facility security modernization: Smart RFID barrier autogates, CCTV & WiFi mesh',
      'PU injection waterproofing, structural repair & swimming pool electrical overhaul',
      'Strata Management Act 757 advisory, CAPEX/OPEX engineering budgeting'
    ],
    standards: ['Strata Management Act 757', 'Akta Kilang dan Jentera 1967 (Act 139)', 'Air Selangor Standards', 'Suruhanjaya Tenaga Regulations'],
    featuredProjects: [
      'Perbadanan Pengurusan D’Casa Bandar Baru 2-Year Complete Asset Turnaround',
      'Universiti Malaysia Pahang Al-Sultan Abdullah Total Campus Condition Audit',
      'Royal Selangor Golf Club Electrical System & Security Infrastructure Overhaul',
      'Majlis Perbandaran Ampang Jaya (MPAJ) Facilities Servicing'
    ]
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  client: string;
  year: number;
  sector: 'Oil & Gas' | 'Government & Defense' | 'Township & Utilities' | 'Critical Facilities & Commercial';
  image: string;
  aspectRatio: '16:9' | '3:4' | '4:3' | '1:1';
  caption: string;
  standards: string[];
  deliverableSummary: string;
}

export const PROJECT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-petronas-bif',
    title: 'Site-Wide Earthing & Lightning Protection Audit',
    client: 'PETRONAS Carigali Sdn Bhd (Bintulu Integrated Facility)',
    year: 2017,
    sector: 'Oil & Gas',
    image: '/src/assets/images/petronas_bif_earthing_audit_1793838173559.jpg',
    aspectRatio: '16:9',
    caption: 'Grounding pit impedance testing, equipotential bonding, and lightning mast certification across gas compression plant.',
    standards: ['PTS 13.64.01', 'API RP 545', 'MS IEC 62305'],
    deliverableSummary: 'Full terminal earth grid reconstruction and surge arrester protection on critical control room instrumentation.'
  },
  {
    id: 'gal-pkns-antara-gapi',
    title: 'Township Infrastructure & LED Street Lighting',
    client: 'Perbadanan Kemajuan Negeri Selangor (PKNS)',
    year: 2024,
    sector: 'Township & Utilities',
    image: '/src/assets/images/pkns_township_street_lighting_1793838175377.jpg',
    aspectRatio: '3:4',
    caption: 'Turnkey low-voltage reticulation, outdoor feeder pillars, and photometric street lighting for Antara Gapi residential development.',
    standards: ['ESAH v3.1', 'JKR Street Lighting', 'SPAN Guidelines'],
    deliverableSummary: 'Complete M&E infrastructure design, underground cable routing, and municipal OSC 3.0 Plus statutory clearance.'
  },
  {
    id: 'gal-met-malaysia-ups',
    title: 'National Seismic & Tsunami Early Warning Power Systems',
    client: 'Jabatan Meteorologi Malaysia (MET Malaysia)',
    year: 2020,
    sector: 'Government & Defense',
    image: '/src/assets/images/met_malaysia_tsunami_station_1793838176128.jpg',
    aspectRatio: '4:3',
    caption: 'Autonomous solar-hybrid industrial UPS and high-reliability deep cycle battery backup strings deployed across 31 remote seismic stations.',
    standards: ['IEEE 1184', 'IEC 62040-3', 'MET Technical Specs'],
    deliverableSummary: 'Multi-year turnkey supply, delivery, and preventive maintenance ensuring continuous 24/7 telemetry uptime.'
  },
  {
    id: 'gal-floating-tank-rga',
    title: 'Floating Roof Storage Tank Retractable Grounding (RGA)',
    client: 'PT Wilson Walton / Chevron Indonesia & SOGT',
    year: 2013,
    sector: 'Oil & Gas',
    image: '/src/assets/images/tank_farm_lightning_bypass_1793838177081.jpg',
    aspectRatio: '1:1',
    caption: 'Heavy-duty retractable bypass conductor assembly bridging tank shell and floating pontoon roof to eliminate lightning spark ignition risks.',
    standards: ['API RP 545', 'LASTFIRE Recommendations', 'NFPA 780'],
    deliverableSummary: 'Designed and supervised installation on multiple petroleum floating roof storage tanks.'
  },
  {
    id: 'gal-standby-genset-overhaul',
    title: '350kVA Standby Generator Set Major Overhaul',
    client: 'Perbadanan Pengurusan D’Casa Bandar Baru (PPDCBB)',
    year: 2024,
    sector: 'Critical Facilities & Commercial',
    image: '/src/assets/images/standby_genset_350kva_room_1793838177783.jpg',
    aspectRatio: '4:3',
    caption: 'Complete overhaul of 350kVA diesel generating set, radiator refurbishment, vibration damping, and automatic transfer switch (ATS) calibration.',
    standards: ['Suruhanjaya Tenaga Regulations', 'UBBL 1984', 'Akta 139'],
    deliverableSummary: 'Full recertification with Suruhanjaya Tenaga, synchronized load-bank discharge testing, and emergency backup assurance.'
  },
  {
    id: 'gal-lgm-led-substation',
    title: '57.3m Landmark LED Display & Dedicated LV Substation',
    client: 'Lembaga Getah Malaysia (LGM)',
    year: 2021,
    sector: 'Critical Facilities & Commercial',
    image: '/src/assets/images/landmark_led_transformer_substation_1793838178138.jpg',
    aspectRatio: '3:4',
    caption: 'Structural steel truss engineering and dedicated low-voltage transformer room for 11,514mm x 57,280mm billboard on Jalan Ampang.',
    standards: ['BS 5950 Structural Steel', 'TNB Standards', 'MS 1936'],
    deliverableSummary: 'High-power distribution, harmonic filtration, and specialized transformer room delivery with local authority clearance.'
  }
];

