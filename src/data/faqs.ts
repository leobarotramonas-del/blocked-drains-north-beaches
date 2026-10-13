import { site, homeFaqs, type Faq } from './site';
import { areas, groups } from './areas';
import { services } from './services';
import { guides } from './guides';

const qa = (question: string, answer: string): Faq => ({ question, answer });
const practical: Faq[] = [
  qa('What details should I have ready when I call?', 'Have your full address, affected fixtures, when the problem started and any previous clearing or inspection details ready. Mention an active overflow first, then describe parking, gates, stairs and the route to the drain.'),
  qa('Does a slow sink mean the main sewer is blocked?', 'Not necessarily. A single slow sink can involve its trap or local waste pipe. Several fixtures backing up together suggest a problem farther along a shared line. Describe the pattern so the plumber can assess the right section.'),
  qa('What should I do while wastewater is overflowing?', 'Stop using affected fixtures and keep people and pets away from wastewater. Do not repeatedly flush, lift sewer covers or enter pits. Call the team with the location of the overflow and the fixtures affected.'),
  qa('Should I tell the plumber about drain chemicals already used?', 'Yes. Give the product name, where it was used and approximately when. This information helps the plumber plan the work safely. Do not add more products or mix drain chemicals while arranging help.'),
  qa('How are stormwater and sewer blockages assessed differently?', 'Stormwater carries rainwater, while wastewater drainage serves fixtures such as toilets and sinks. Tell us whether the problem follows rain or normal fixture use. The affected system and accessible route determine the investigation.'),
  qa('Will every drain repair require excavation?', 'No. Some obstructions only need clearing, and some pipe defects may be suitable for relining. A collapsed or unsuitable section can require replacement. Inspection and access determine the practical options, not a blanket promise of no digging.'),
  qa('Can I ask for camera footage or a written report?', 'Yes. Mention this when booking, especially for strata or repair planning. Confirm what can be recorded, which sections can be inspected and whether footage or reporting is included in the agreed scope.'),
  qa('How can I reduce the chance of another blockage?', 'Keep cooking fats and unsuitable waste out of drains, retain inspection records and follow maintenance advice based on the findings. If an open joint or other structural defect remains, cleaning alone does not repair it.'),
  qa('Does clearing a drain guarantee that it will never block again?', 'No. Clearing removes an obstruction but may leave an underlying defect or future source of debris. We explain what the work achieved, any remaining concerns and whether a separate repair or maintenance plan is worth considering.'),
  qa('Do I need to uncover or open the drain before the visit?', 'No. Describe any known access points without lifting heavy covers or disturbing pipework. Keep the route accessible where safe and tell us about buried openings, landscaping or restricted areas.'),
  qa('What if the property uses an on-site wastewater system?', 'Identify the system before booking and share any maintenance records. Coverage, equipment and the appropriate service scope need confirmation; an on-site system should not be treated as an ordinary public-sewer connection.'),
  qa('Can a drain problem be assessed from photographs alone?', 'Photos can help explain visible symptoms and access, but they cannot establish the condition of hidden pipework. Ask the team how to share relevant information. A recommendation for clearing or repair may still require an on-site assessment.'),
];

const general = [...homeFaqs, ...practical];
const finish = (items: Faq[]) => {
  const unique = [...new Map(items.map(item => [item.question.trim().toLowerCase(), item])).values()];
  if (unique.length < 15) throw new Error(`FAQ set contains only ${unique.length} unique questions`);
  return unique;
};

function areaFaqs(a: (typeof areas)[number]): Faq[] {
  const group = groups[a.group];
  return finish([
    qa(a.question, a.answer),
    qa(`What should I mention when booking drainage work in ${a.name}?`, a.booking),
    qa(`What property details matter for a blocked drain in ${a.name}?`, a.context),
    qa(`How do you plan drainage work around ${group.name}?`, group.text),
    qa(`Can I call about an urgent blocked drain in ${a.name}?`, `Yes. Call ${site.phone} at any hour and describe the overflow, affected fixtures and exact address. Attendance is confirmed for the job; a listed service area does not promise immediate arrival.`),
    qa(`Do you have a separate plumbing office in ${a.name}?`, `No. We provide a mobile drainage service to ${a.name} addresses, subject to availability and access. This page gives local booking information rather than representing a separate office.`),
    qa(`How is the cost of a ${a.name} drain visit determined?`, 'The obstruction, access, inspection requirements and any pipe damage affect the scope. Ask about initial charges and what clearing includes. Reports, repairs and reinstatement should be agreed separately where needed.'),
    qa(`Can you work on shared drains at a ${a.name} property?`, 'Tell us which units or premises are affected and provide the authorised building contact. Shared access, approval and any necessary service interruption need to be planned before work starts.'),
    qa(`Which equipment would you bring to a ${a.name} blockage?`, 'We select suitable fixture tools, mechanical clearing equipment, a water jetter or CCTV based on the symptoms, pipe condition and access. The suburb alone cannot determine the correct method.'),
    qa(`Can you check a recurring blockage before digging in ${a.name}?`, 'Where access and visibility allow, clearing and CCTV can help identify a defect before a repair is proposed. We explain what was inspected and whether relining or targeted replacement is suitable.'),
    ...practical.filter((_, i) => [1,2,3,4,6,7,10].includes(i)),
  ]);
}

function serviceFaqs(s: (typeof services)[number]): Faq[] {
  const name = s.name.startsWith('CCTV') ? s.name : s.name.toLowerCase();
  return finish([
    qa(s.question, s.answer),
    qa(`When should I ask about ${name}?`, s.signs.join('; ') + '. Describe which of these you have noticed when calling.'),
    qa('What can cause the symptoms this service investigates?', s.causes),
    qa(`How does the team approach ${name}?`, s.approach),
    qa('Which tools or materials might the work involve?', s.equipment),
    qa('What are the practical limits of this approach?', s.limits),
    qa('What can I do to help prevent further trouble?', s.prevention),
    qa(`How do I book ${name} on the Northern Beaches?`, `Call ${site.phone} with your full address, symptoms and access information. Mention any active overflow, previous work and shared drains. We confirm the available response and proposed next step.`),
    qa('What charges and scope should be confirmed before work begins?', 'Ask about attendance, initial diagnosis and the proposed work. If findings call for additional inspection, a repair or reinstatement, the extra scope and charges should be explained and agreed before proceeding.'),
    qa('Can this service be arranged for a strata property or business?', 'Discuss the site and affected system when booking. Provide an authorised contact, building access instructions and any reporting requirements. The team confirms what is suitable for the actual property.'),
    qa('Is an immediate appointment guaranteed?', 'No. Urgent calls are welcome 24/7, but attendance depends on current availability, the address, required equipment and safe access. Confirm timing directly with the team.'),
    qa('Will I need to approve a repair if damage is found?', 'A repair is a separate decision from clearing or investigation. Ask to have the findings, proposed repair length, method and limitations explained before agreeing to additional work.'),
    ...practical.filter((_, i) => [3,6,9,11].includes(i)),
  ]);
}

const guideQuestions: Record<string, string[]> = {
  'what-to-do-when-a-drain-overflows': ['Should I stop using every affected fixture?', 'How should I keep the overflow area clear?', 'What symptoms should I describe to the plumber?', 'Who should assess a suspected private or wider network problem?', 'What happens during an overflow assessment?'],
  'blocked-drain-costs': ['Why is there no single price for every blocked drain?', 'How can access affect the work and cost?', 'Are camera inspection and clearing the same charge?', 'Why might a drain repair need a separate proposal?', 'Which pricing questions should I ask before approving work?', 'What information helps the team discuss a suitable scope?'],
  'jetting-relining-or-replacement': ['What can water jetting fix?', 'When might pipe relining be suitable?', 'When is pipe replacement worth considering?', 'How does CCTV help choose a repair?', 'What should I compare between repair proposals?'],
  'why-drains-keep-blocking': ['Why can a drain block again after flow returns?', 'Why investigate where tree roots enter?', 'Are tree roots the only cause of repeat blockages?', 'Can a camera show every hidden defect?', 'How should prevention match the inspection findings?'],
};

const privacy: Faq[] = [
  qa('Can I submit an enquiry form on this website?', 'No. There is no online enquiry form. Call the team to discuss a drainage enquiry.'),
  qa('Do I need a website account to book?', 'No. This website has no account registration facility. Bookings are discussed by telephone.'),
  qa('Can I enter payment details on this website?', 'No. The site has no online payment facility. Discuss payment arrangements for agreed work directly with the team.'),
  qa('What information is useful during a phone enquiry?', 'Your contact details, property address, drainage symptoms and relevant access instructions help the team discuss the enquiry and arrange the requested service.'),
  qa('Why does the team need the property address?', 'The address helps establish coverage, access and practical attendance arrangements. A suburb name alone may not explain how to reach the affected drainage.'),
  qa('Should I provide unrelated personal information?', 'No. Provide only information relevant to the enquiry and drainage job. Ask the team if you are unsure why a detail is needed.'),
  qa('How is enquiry information used?', 'Information you provide is used to discuss your enquiry and arrange the requested service. Ask the team about specific service records or other information-handling questions.'),
  qa('Can the hosting provider process technical visit information?', 'The hosting provider may process technical request information, such as IP address and browser details, to deliver and protect the website.'),
  qa('Are the website videos hosted on an external video platform?', 'The job videos are served directly from this website. They use native playback controls and do not autoplay.'),
  qa('Are the photographs served from this website?', 'Yes. The website serves its photographs directly, including responsive image sizes for different screens.'),
  qa('Does the site always use Google Analytics?', 'Analytics is optional and is included only when configured by the site operator. The privacy page explains what may be collected when it is enabled.'),
  qa('What may optional analytics measure?', 'When enabled, Google Analytics may collect website usage information and phone-link click events using cookies or similar technologies.'),
  qa('Does a phone-link click prove that I made a call?', 'No. A click event indicates that the link was selected, not that the telephone call connected or a booking was completed.'),
  qa('Where can I adjust browser privacy controls?', 'Use the privacy and cookie controls available in your browser. The privacy page also links to Google’s information about its own services.'),
  qa('Who can I contact about information provided with an enquiry?', `Call ${site.phone} and explain your question. Ask the team directly about specific service records or access requests.`),
];

const terms: Faq[] = [
  qa('Does reading a service page confirm a booking?', 'No. Contact the team to agree attendance and the proposed next step for your address.'),
  qa('Does clicking the telephone link confirm attendance?', 'No. A phone-link click does not confirm a booking or arrival time. Confirm those details in your conversation with the team.'),
  qa('Are calls accepted outside ordinary business hours?', 'Urgent calls are welcome 24/7. Actual attendance is confirmed for the address and current availability.'),
  qa('What affects the available arrival time?', 'Urgency, the address, current availability, suitable equipment and safe access all affect attendance.'),
  qa('Is website advice a diagnosis of my property?', 'No. Website drainage advice is general. The property needs assessment before a particular method or result can be recommended.'),
  qa('What should be discussed before initial work is approved?', 'Discuss initial charges, the assessment and the clearing or investigation scope. Ask what is included and what would require further approval.'),
  qa('Is additional repair work automatically included?', 'No. Additional repairs and their scope should be explained and agreed where required.'),
  qa('Should I request a formal inspection report in advance?', 'Yes. Tell the team what reporting you need and confirm whether it is included or separately scoped.'),
  qa('Is surface reinstatement always included?', 'Do not assume it is. Confirm the backfilling and surface work included in the proposed repair, particularly for paving, concrete and landscaping.'),
  qa('Who should authorise work on shared drainage?', 'Provide the contact authorised to approve the work and tell the team about shared drainage and building access. Agree approval arrangements before proceeding.'),
  qa('What access restrictions should I disclose?', 'Mention parking restrictions, gates, stairs, restricted work areas, known hazards and the route to the drain.'),
  qa('Can offshore or restricted-access attendance be assumed?', 'No. These sites require specific access, transport and equipment arrangements to be confirmed.'),
  qa('Does an inspection guarantee that every defect will be visible?', 'No. Camera visibility and equipment access have limits. Ask which sections were inspected and what remains uncertain.'),
  qa('Does clearing include a blanket guarantee against future blockages?', 'No blanket repair guarantee is created by this website. Clearing may leave underlying damage. Ask for the specific product and workmanship terms associated with a repair proposal.'),
  qa('Who should I contact about a quotation or service concern?', `Call ${site.phone} to discuss the work or quotation. The contracting business and licence number are identified in the footer.`),
];

const pageIntros: Record<string, Faq[]> = {
  '/about': [
    qa('Which team carries out this drainage service?', 'The Northern Beaches drain service is provided by the Antons team, with capability in inspection, clearing and explaining suitable pipe repairs.'),
    qa('Where can I find the contractor licence number?', `The supplied NSW contractor licence number is ${site.licence}. The About page links to Service NSW’s trades licence verification so you can check the current register record.`),
    qa('Where can I see examples of the team’s work?', 'Visit Our Work for real team photography and job videos. Identified Kurrajong footage is from outside the Northern Beaches; the gallery represents the wider Antons service network.'),
  ],
  '/contact': [
    qa('How do I contact the drainage team?', `Call ${site.phone}. Explain your Northern Beaches address and symptoms so the team can discuss the available response.`),
    qa('Can I book a time through an online calendar?', 'There is no online booking calendar on this site. Confirm the proposed visit and timing directly with the team by phone.'),
    qa('Can someone else arrange access for my property?', 'Discuss the nominated access contact and who can approve the work when booking. Do not assume attendance is arranged until the details are confirmed.'),
  ],
  '/our-work': [
    qa('Are these real photographs of Antons work?', 'Yes. The gallery uses supplied photographs of the Antons team, drainage equipment and pipework. The images are not examples of a promised result for every property.'),
    qa('Were all gallery jobs completed on the Northern Beaches?', 'No. The gallery draws from the wider Antons service network. Kurrajong videos are explicitly identified as work outside the Northern Beaches; unconfirmed photo locations are not presented as local jobs.'),
    qa('Does a photo show which repair my drain needs?', 'No. Photographs demonstrate practical work and equipment. Your pipe condition, access and inspection findings determine a suitable method.'),
    qa('Will the job videos play automatically?', 'No. Use the video controls to start playback. Videos are not downloaded before playback is requested.'),
  ],
  '/service-areas': [
    qa('Which Northern Beaches areas are listed?', 'Coverage pages include Manly and the southern beaches, Dee Why and the central beaches, Narrabeen and surrounding suburbs, Mona Vale to Palm Beach, and the Forest district. Use the suburb search to find local booking information.'),
    qa('What if my suburb is not in the search results?', `Call ${site.phone} with the exact address. The team can discuss coverage and access rather than assuming an unlisted address can or cannot be attended.`),
    qa('Is offshore coverage the same as ordinary road access?', 'No. Island, offshore and water-access properties need specific confirmation of transport, equipment and scheduling before a visit can be arranged.'),
  ],
  '/services': [
    qa('Which drainage services can I discuss with the team?', 'Services include urgent blockage assessment, CCTV inspection, jetting, root removal, sewer and stormwater clearing, fixture drainage, suitable relining, excavation and shared-drain work.'),
    qa('Do I need to choose a service before calling?', 'No. Describe what you can see, which fixtures are affected and when the issue occurs. The team helps identify the appropriate assessment instead of asking you to diagnose hidden pipework.'),
    qa('How do I compare clearing with structural repair?', 'Clearing removes an obstruction; structural repairs address suitable pipe defects. Read the repair-comparison guide and ask what evidence supports the method proposed for your drain.'),
  ],
  '/drain-advice': [
    qa('Which drain advice guides are available?', 'The guides cover overflow first steps, pricing factors, the differences between jetting, relining and replacement, and reasons a drain may repeatedly block.'),
    qa('Can the guides replace an on-site assessment?', 'No. They help you understand symptoms and prepare questions. Hidden pipe condition and access still need assessment before a particular repair is recommended.'),
    qa('Which guide should I read for a repeated blockage?', 'Start with Why does the same drain keep blocking? Keep a record of previous clearing and inspection findings to discuss with the plumber.'),
  ],
  '/404': [
    qa('How can I find a page that has moved?', 'Use the main navigation to browse services, service areas and drain advice, or return to the homepage using the Antons logo.'),
    qa('Can I still arrange help if a link is unavailable?', `Yes. Call ${site.phone} and describe the drainage issue. A missing website page does not confirm or cancel a booking.`),
  ],
};

export function faqsForPage(pathname: string): { title: string; items: Faq[] } {
  const route = pathname.replace(/\/$/, '') || '/';
  const area = areas.find(a => route === `/service-areas/${a.slug}`);
  if (area) return { title: `Blocked drain questions for ${area.name}.`, items: areaFaqs(area) };
  const service = services.find(s => route === `/services/${s.slug}`);
  if (service) return { title: `Questions about ${service.name.startsWith('CCTV') ? service.name : service.name.toLowerCase()}.`, items: serviceFaqs(service) };
  const guide = guides.find(g => route === `/drain-advice/${g.slug}`);
  if (guide) {
    const questions = guideQuestions[guide.slug];
    return { title: 'More answers about this drain issue.', items: finish([...guide.sections.map((section, i) => qa(questions[i], section[1])), ...general.slice(0, 15 - guide.sections.length)]) };
  }
  if (route === '/privacy') return { title: 'Website privacy questions.', items: finish(privacy) };
  if (route === '/terms') return { title: 'Booking and service questions.', items: finish(terms) };
  return { title: 'Your drainage questions, answered.', items: finish([...(pageIntros[route.replace(/\.html$/, '')] || []), ...general.slice(0, 15)]) };
}
