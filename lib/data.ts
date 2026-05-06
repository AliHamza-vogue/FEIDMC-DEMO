export interface Estate {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  totalArea: string;
  location: string;
  keyFeatures: string[];
  infrastructure: {
    title: string;
    description: string;
  }[];
  industryFocus: string[];
  image: string;
  highlights: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const estates: Estate[] = [
  {
    id: 'm3-industrial-city',
    name: 'M-3 Industrial City',
    slug: 'm3-industrial-city',
    tagline: "Pakistan's Premier Industrial Hub",
    description: "M-3 Industrial City is the largest industrial estate in South Asia, strategically located on the M-3 Motorway. It offers state-of-the-art infrastructure and a complete ecosystem for industrial excellence.",
    totalArea: '4,500 Acres',
    location: 'Faisalabad, Motorway M-3',
    keyFeatures: ['Large Plot Sizes', 'Dedicated Power Grids', 'Gas & Water Supply', 'Effluent Treatment Plants'],
    infrastructure: [
      { title: 'Road Network', description: 'Wide arterial roads with heavy-duty construction for industrial traffic.' },
      { title: 'Power Grid', description: 'Dedicated 500kV and 220kV grid stations providing uninterrupted power.' },
      { title: 'Water & Gas', description: 'Industrial grade water supply and high-pressure natural gas lines.' },
      { title: 'Waste Management', description: 'Centralized Effluent Treatment Plant (CETP) complying with NEQS.' },
    ],
    industryFocus: ['Textiles', 'Engineering', 'Chemicals', 'Food Processing', 'Pharmaceuticals'],
    image: 'https://picsum.photos/seed/m3_detailed/1200/800',
    highlights: ['Special Economic Zone Status', '10-Year Tax Holiday', 'One-Window Operation'],
    stats: [
      { label: 'Plots Available', value: '142' },
      { label: 'Industries Operational', value: '85' },
      { label: 'Distance from Port', value: '1,100 km' },
    ],
  },
  {
    id: 'allama-iqbal',
    name: 'Allama Iqbal Industrial City',
    slug: 'allama-iqbal',
    tagline: 'CPEC Flagship Project',
    description: 'A priority project under the China-Pakistan Economic Corridor (CPEC), Allama Iqbal Industrial City is designed to attract foreign direct investment and promote high-tech manufacturing.',
    totalArea: '3,217 Acres',
    location: 'Near M-4 Motorway Interchange',
    keyFeatures: ['CPEC Protection', 'High-Tech Zone', 'Foreign Investor Portals', 'Advanced Security'],
    infrastructure: [
      { title: 'Connectivity', description: 'Direct access to the motorway network connecting all major ports.' },
      { title: 'Utility Hubs', description: 'Integrated utility networks with smart monitoring systems.' },
      { title: 'Logistics', description: 'Modern logistics park with warehousing and dry port facilities.' },
    ],
    industryFocus: ['Auto Parts', 'Electronics', 'Value-Added Textiles', 'Packaging'],
    image: 'https://picsum.photos/seed/aiic_detailed/1200/800',
    highlights: ['CPEC Strategic Importance', 'Customs Duty Exemptions', 'Fast-Track Allotment'],
    stats: [
      { label: 'Phase 1 Complete', value: '95%' },
      { label: 'Foreign Investment', value: '$850M' },
      { label: 'Planned Plots', value: '600+' },
    ],
  },
  {
    id: 'value-addition-city',
    name: 'Value Addition City',
    slug: 'value-addition-city',
    tagline: 'Precision for Specialized Manufacturing',
    description: 'Value Addition City is a dedicated space for small and medium-sized industrial units, particularly focusing on value-added exports and specialized manufacturing processes.',
    totalArea: '225 Acres',
    location: 'Sargodha Road, Faisalabad',
    keyFeatures: ['SME Clusters', 'Ready-to-Use Facilities', 'Export Facilitation', 'Subsidized Utilities'],
    infrastructure: [
      { title: 'SME Sheds', description: 'Pre-fabricated sheds for quick industrial startup and operations.' },
      { title: 'Training Center', description: 'Vocational training facilities for skilled labor development.' },
      { title: 'Quality Lab', description: 'Shared testing and quality assurance laboratories.' },
      { title: 'Business Center', description: 'Dedicated office spaces and meeting rooms for export facilitation.' },
    ],
    industryFocus: ['Garments', 'Gifts', 'IT Services', 'Light Engineering', 'Value-Added Exports'],
    image: 'https://picsum.photos/seed/vac_detailed/1200/800',
    highlights: ['Focus on SMEs', 'Ease of Doing Business', 'Strategic Location', 'Export Incentives'],
    stats: [
      { label: 'Units Operational', value: '45' },
      { label: 'Export Revenue', value: '$120M' },
      { label: 'Jobs Created', value: '5,000+' },
      { label: 'Occupancy', value: '82%' },
    ],
  },
  {
    id: 'fiedmc-city',
    name: 'FIEDMC City',
    slug: 'fiedmc-city',
    tagline: 'The Corporate Core of Federation',
    description: 'FIEDMC City is the planned corporate and residential backbone of the industrial ecosystem, providing modern living and business spaces for industrialists and workers alike.',
    totalArea: '500 Acres',
    location: 'Adjacent to M-3 Industrial City',
    keyFeatures: ['Corporate Headquarters', 'Luxury Residential', 'Commercial Centers', 'Educational Institutes'],
    infrastructure: [
      { title: 'Smart Grid', description: 'Next-generation smart energy management for commercial buildings.' },
      { title: 'Digital Infrastructure', description: 'Fiber-optic backbone throughout the city for high-speed connectivity.' },
      { title: 'Green Spaces', description: 'Environmentally friendly parks and sustainable urban planning.' },
      { title: 'Civic Center', description: 'Integrated medical, educational, and community facilities.' },
    ],
    industryFocus: ['Banking', 'Corporate Offices', 'Retail', 'Hospitality', 'Real Estate'],
    image: 'https://picsum.photos/seed/fiedmc_detailed/1200/800',
    highlights: ['Modern Urban Planning', 'Business-Friendly Environment', 'Integrated Living', 'Smart City Features'],
    stats: [
      { label: 'Planned Residents', value: '25,000' },
      { label: 'Office Space', value: '1M Sq Ft' },
      { label: 'Green %', value: '25%' },
      { label: 'Plots Allotted', value: '65%' },
    ],
  },
];
