export const site = {
  name: 'Antons Blocked Drains North Beaches',
  shortName: 'Antons Blocked Drains',
  operator: 'Antons Plumbing & Gas',
  licence: '210933C',
  phone: '0493 824 176',
  tel: 'tel:+61493824176',
  url: 'https://blockeddrainsnorthenbeaches.com.au',
};
export type Faq = { question: string; answer: string };
export const homeFaqs: Faq[] = [
  { question: 'Can you help with an urgent blocked drain?', answer: 'Yes. Call 0493 824 176 at any time. Tell us whether sewage is overflowing, how many fixtures are affected and your suburb. We confirm availability and the next practical step during the call.' },
  { question: 'What will it cost to unblock my drain?', answer: 'The cost depends on access, where the obstruction is, the equipment required and whether pipe damage is found. Ask about the call-out, initial diagnosis and clearing scope when booking. Any additional inspection or repair should be explained and agreed before it proceeds.' },
  { question: 'Do you use a drain camera and high-pressure jetting?', answer: 'Yes. CCTV helps assess accessible pipework, and a high-pressure water jetter can clear suitable obstructions. A heavily blocked line may need clearing before the camera can see the pipe wall. We choose equipment for the pipe condition and access available.' },
  { question: 'Why does the same drain keep blocking?', answer: 'Roots, an offset joint, a damaged section, a sagging pipe or persistent grease build-up can leave an underlying problem after flow returns. A camera inspection helps distinguish another cleaning job from a repair that addresses the defect.' },
  { question: 'Can you repair drains without digging?', answer: 'Pipe relining may be suitable where the existing pipe can be cleaned, accessed and prepared for a liner. A collapsed section or unsuitable alignment can require excavation and replacement. We explain the evidence and options before recommending either approach.' },
  { question: 'Do you attend apartments, strata and businesses?', answer: 'Yes. Let us know about shared drains, affected units, the authorised contact and access arrangements. We can plan diagnosis and agreed works around the building, trading hours and any necessary service interruption.' },
  { question: 'Do you have an office in every suburb you cover?', answer: 'No. This is a mobile drainage service covering Northern Beaches addresses, with availability confirmed when you call. The suburb pages explain booking and property considerations; they do not represent separate local offices.' },
];
export const steps = [
  ['Tell us what is happening', 'Share your suburb, affected fixtures and whether there is an active overflow. We discuss urgency, access and availability.'],
  ['Find the cause', 'We assess the drainage, choose a safe access point and explain the initial work. CCTV may follow clearing when visibility is limited.'],
  ['Clear or repair appropriately', 'Jetting, mechanical clearing or agreed pipe repairs are selected for what is actually in the line and the condition of the pipe.'],
  ['Check the result', 'We check drainage flow and explain any remaining defects, maintenance needs or separately quoted repair options.'],
];
export const sources = {
  council: 'https://www.northernbeaches.nsw.gov.au/council/about-northern-beaches-council/wards-and-suburbs',
  blockages: 'https://www.sydneywater.com.au/plumbing-building-developing/plumbing/wastewater-blockages.html',
  report: 'https://www.sydneywater.com.au/water-the-environment/what-you-can-do/report-fault.html',
};
