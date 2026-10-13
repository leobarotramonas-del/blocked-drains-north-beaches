export type Service = {
  slug: string; name: string; short: string; intro: string; image: string; alt: string;
  signs: string[]; causes: string; approach: string; equipment: string; limits: string; prevention: string;
  question: string; answer: string;
};
export const services: Service[] = [
  {
    slug: 'emergency-blocked-drains', name: 'Emergency blocked drains', short: 'Overflowing now? Start here.',
    intro: 'A backed-up toilet or sewage overflow needs a clear next step. Call our team for urgent blocked-drain help across the Northern Beaches, with calls welcome 24/7.',
    image: 'pit-clearing', alt: 'Antons plumber clearing debris from an outdoor drainage pit beside a garage',
    signs: ['Sewage escaping from an outdoor gully', 'A toilet rising when another fixture drains', 'Several fixtures backing up together', 'Wastewater spreading towards rooms or walkways'],
    causes: 'An obstruction downstream can stop several fixtures from draining. Roots, compacted wipes and other debris are possible causes, but similar symptoms can also come from pipe damage or a problem beyond the property connection. The pattern of affected fixtures helps narrow the investigation.',
    approach: 'We begin with the active overflow, the affected fixtures and safe access. After assessing the line, the plumber explains the proposed clearing work. Where suitable, we restore flow with jetting or mechanical equipment, then inspect further if the cause remains uncertain or the fault has returned. Any repair is discussed separately.',
    equipment: 'Drain cameras, suitable jetting nozzles and mechanical clearing tools are selected for the access and pipe condition. Protective equipment and control of the work area matter when wastewater is present. An accessible inspection opening can reduce the need to disturb finished surfaces.',
    limits: 'A collapsed pipe cannot simply be jetted back into shape. Heavy rain may also affect the public network, so diagnosis needs to distinguish a private blockage from a wider fault. Attendance timing is confirmed when booking.',
    prevention: 'Stop using affected fixtures while sewage is backing up. Keep children and pets away, do not open sewer covers or enter pits, and tell the plumber if any drain chemicals have been used.',
    question: 'Should I keep flushing to see whether it clears?', answer: 'No. Further flushing can add water to an obstructed line and worsen the overflow. Stop using the affected fixtures and call with details of what is backing up.'
  },
  {
    slug: 'cctv-drain-inspections', name: 'CCTV drain inspections', short: 'See why the blockage returns.',
    intro: 'Understand what is happening inside your drain before committing to a repair. CCTV inspection helps identify visible roots, damaged joints, obstructions and changes in pipe condition.',
    image: 'drain-inspection-action', alt: 'Antons plumber feeding an inspection line into a drain access point beside a rainwater tank',
    signs: ['A drain that blocks again after clearing', 'Unexplained slow drainage across several fixtures', 'Suspected roots or a damaged underground section', 'A need to assess an accessible line before repair'],
    causes: 'A camera helps separate material lodged inside a sound pipe from defects in the pipe itself. Tree roots can enter at openings; joints can move; some sections can hold water or trap debris. Surface symptoms alone cannot establish which of these is present.',
    approach: 'We identify a suitable entry point and assess whether the line is clear enough to inspect. If water and debris hide the view, clearing may be needed first. The camera is guided through accessible sections and the visible findings are explained so you can compare maintenance, a targeted repair or relining where appropriate.',
    equipment: 'A CCTV camera reel, illuminated camera head and monitor provide a view inside the pipe. A compatible locator can help trace a detected defect where conditions allow. Ask when booking if you need saved footage, a written report or documentation for strata, as these requirements affect the scope.',
    limits: 'A camera cannot see through sediment, standing opaque water or a complete obstruction. Tight bends, pipe size and access restrict how far it can travel. The inspection covers accessible sections; it is not a guarantee that every concealed defect will be visible.',
    prevention: 'Keep previous drainage plans and reports if you have them. A comparison with earlier findings can make repeat issues easier to investigate. Do not excavate or remove access covers to prepare for the inspection.',
    question: 'Does every blocked drain need a camera?', answer: 'No. A straightforward fixture obstruction may need a simpler approach. CCTV becomes particularly useful for repeat blockages, suspected pipe damage or planning a more substantial repair.'
  },
  {
    slug: 'high-pressure-water-jetting', name: 'High-pressure water jetting', short: 'Clear build-up with the right approach.',
    intro: 'Professional drain jetting uses controlled water pressure and selected nozzles to remove suitable obstructions and clean accessible pipework. The pipe and the blockage determine the method.',
    image: 'jetting', alt: 'Antons drainage technician handling a hose reel beside a stocked service vehicle',
    signs: ['Grease or sludge restricting a drain', 'Debris lodged in an external drainage line', 'Root growth obstructing suitable pipework', 'A line that needs cleaning before camera inspection'],
    causes: 'Grease, sediment and fibrous material can reduce the open space in a pipe. A partial clearing may leave material on the walls, allowing another restriction to form. Jetting can address suitable build-up, but the reason it collected still needs consideration.',
    approach: 'The plumber checks the entry point and available information about pipe condition, selects a nozzle and works through the restriction in a controlled manner. Drainage is checked after cleaning. If roots or recurring obstruction suggest a defect, we discuss camera inspection and repair options rather than assuming cleaning is the final answer.',
    equipment: 'A professional water jetter, pressure-rated hose and task-specific nozzles allow the operator to direct cleaning inside the line. The water supply, hose route and safe exclusion area are planned before work. Camera equipment may be used to assess the result.',
    limits: 'Pressure is not a substitute for judgement. Fragile, disconnected or collapsed pipework may need a different method or repair. Jetting removes obstruction; it does not seal joints or prevent new roots entering an existing opening.',
    prevention: 'Put cooled cooking fats in the bin, keep unsuitable items out of toilets and follow any maintenance recommendations based on the inspection. Avoid treating repeated blockages as an unavoidable routine.',
    question: 'Is drain jetting the same as using a household pressure washer?', answer: 'No. Drain equipment, nozzles and operating methods are chosen for enclosed pipework. Improvised high-pressure cleaning can cause injury or damage and may push material into a less accessible section.'
  },
  {
    slug: 'tree-root-removal', name: 'Tree roots in drains', short: 'Clear the roots. Understand the entry point.',
    intro: 'A root mass can choke an underground drain long before there is a visible problem above ground. We investigate root intrusion, clear suitable obstructions and explain how to address the damaged entry point.',
    image: 'root-damaged-clay', alt: 'Tree roots visible around a broken terracotta drainage pipe',
    signs: ['Repeat sewer blockages near established planting', 'Gurgling or slow fixtures that briefly improve after clearing', 'Root material found during previous drain work', 'A camera inspection showing roots at a joint'],
    causes: 'Roots can enter drainage through an existing crack, loose connection or defective joint. Once inside, growth catches paper and other material. A nearby tree does not prove the cause: inspection is needed to establish what is inside the pipe and where the entry occurs.',
    approach: 'We use the symptoms and available access to plan clearing, then assess the line with CCTV where suitable. Root-cutting or jetting techniques can restore capacity. If an opening remains, we explain whether targeted replacement, suitable relining or a planned maintenance approach is practical for the actual condition.',
    equipment: 'CCTV equipment helps identify root entry; suitable root-cutting jetter nozzles or mechanical tools address accessible growth. Repair may involve matched pipe and fittings or a selected liner system after preparation. The method depends on pipe size, material and remaining structure.',
    limits: 'Cutting roots does not repair the opening that admitted them. Regrowth can occur, and a heavily damaged section may need replacement. We do not recommend tree removal solely because a drain is blocked.',
    prevention: 'Keep drainage plans when available and consider pipe locations before new planting. After clearing, ask what was found and whether a defect remains. That discussion is more useful than relying on an arbitrary cleaning interval.',
    question: 'Will the roots come back after clearing?', answer: 'They can if the pipe still has an entry point. The next step depends on the defect, access and repair options; the camera findings help make that decision.'
  },
  {
    slug: 'blocked-sewer-drains', name: 'Blocked sewer drains', short: 'Help for multiple fixtures backing up.',
    intro: 'When toilets, showers or outside gullies back up together, the issue may be in a shared section of the sewer drain. We trace the affected line and explain the clearing or repair work it needs.',
    image: 'pipe-repair', alt: 'Exposed replacement drainage pipe and fittings installed beside a house',
    signs: ['Water appearing in a shower when the toilet flushes', 'An outside gully overflowing during household water use', 'Several slow fixtures on the same property', 'Recurring foul drainage from an accessible opening'],
    causes: 'Roots, wipes and foreign objects can restrict the common wastewater line. Defective joints, broken pipework or poor alignment can also catch debris. Some faults sit outside the private system, so finding the affected section is an essential part of diagnosis.',
    approach: 'We establish which fixtures are affected and where wastewater is escaping, then inspect available access points. The proposed work may include clearing, CCTV inspection and identifying the repair location. Where the evidence points to a public network fault, we explain the findings and the appropriate reporting route.',
    equipment: 'Professional drain clearing equipment, CCTV and suitable locating equipment are used according to access. A structural repair may require replacement drainage pipe, junctions and approved fittings matched to the existing installation, with suitable bedding and reinstatement agreed in the scope.',
    limits: 'A sewer blockage and a stormwater problem are different systems. We need to assess the property before attributing responsibility or choosing a repair. Do not assume a sewer main fault from a single blocked toilet.',
    prevention: 'Keep wipes, nappies, sanitary products and other unsuitable material out of the toilet. If sewage is escaping, reduce water use and keep clear until the affected system is assessed.',
    question: 'Is an overflowing outside gully always my responsibility?', answer: 'Not necessarily. The fault location and the way the property connects to the network matter. A licensed assessment helps distinguish private drainage issues from a Sydney Water network fault.'
  },
  {
    slug: 'blocked-stormwater-drains', name: 'Blocked stormwater drains', short: 'Investigate pooling when rain arrives.',
    intro: 'Water ponding at a grate, driveway or yard can signal an obstructed stormwater line, an outlet problem or a drainage design issue. We assess the pathway before choosing the fix.',
    image: 'stormwater-pit', alt: 'New stormwater pit connected to drainage pipes in prepared bedding',
    signs: ['Water collecting above an external grate', 'Pits filling during rainfall', 'Downpipe-connected drains overflowing', 'Silt or leaf litter visible at accessible drainage points'],
    causes: 'Leaves, sediment and roots can obstruct stormwater lines. A damaged pipe, restricted discharge point or insufficient drainage capacity can produce similar surface pooling. The fact that a problem appears in heavy rain does not establish whether cleaning alone will resolve it.',
    approach: 'We discuss when the pooling happens, inspect safe accessible points and identify the likely route to the outlet. Suitable lines can be cleaned and inspected with CCTV. If the issue is a damaged section, the discharge arrangement or inadequate capacity, we explain the further work needed rather than promising jetting will solve every rain event.',
    equipment: 'Drain jetting, CCTV and hand tools for accessible debris are selected for the pipe and entry points. Repairs can require drainage pipe, grates, pits and appropriate bedding. Pipe levels, connections and the lawful discharge route must be considered before altering the system.',
    limits: 'Private drainage work cannot stop regional flooding or guarantee a yard stays dry in every storm. We do not connect stormwater into sewer drains. Overflowing water can conceal electrical or other hazards, so do not wade into it.',
    prevention: 'From a safe position, keep accessible surface grates free of loose leaves. Arrange maintenance before the wet period if blockages recur, and report a blocked public drain to the relevant authority.',
    question: 'Can a blocked stormwater drain cause sewage to overflow?', answer: 'The systems should be separate. Sewage appearing during rain needs assessment because it may involve infiltration, an incorrect connection or a network problem; it should not be treated as ordinary rainwater.'
  },
  {
    slug: 'blocked-toilets', name: 'Blocked toilets', short: 'Get the bathroom working again.',
    intro: 'A rising toilet bowl is stressful, especially when it is the only toilet in the home. We distinguish a local obstruction from a deeper sewer blockage and choose the least disruptive suitable method.',
    image: 'camera', alt: 'Technician inspecting an accessible drain as part of a drainage investigation',
    signs: ['A bowl that rises instead of flushing normally', 'Water that drains away very slowly', 'Gurgling from another fixture when you flush', 'A toilet that repeatedly blocks after normal use'],
    causes: 'Excess paper, wipes or a foreign object can obstruct the toilet or its connection. When other fixtures are affected, the restriction may be farther down the sewer. A poor flush can also involve the cistern or fixture, so the symptom does not always mean an underground blockage.',
    approach: 'We ask what happened before the problem and check whether other fixtures drain. Appropriate toilet-clearing tools may be enough for an isolated obstruction. If the common line is affected, external access and further investigation can be required. Removal of the toilet or extra repair work is discussed before proceeding.',
    equipment: 'Suitable hand or mechanical clearing tools are selected to protect the fixture. A deeper blockage may call for professional jetting and CCTV through an appropriate access point. If the pan must be removed, compatible seals and connectors are checked when reinstating it.',
    limits: 'Repeated flushing can turn a partial blockage into an overflow. Do not force improvised metal tools into the pan. If chemicals have already been added, tell the plumber before anyone works on the fixture.',
    prevention: 'Flush toilet paper and bodily waste only. Keep children’s toys and bathroom products away from the bowl. Seek an assessment if normal use repeatedly causes trouble.',
    question: 'Is a toilet blockage always a quick fix?', answer: 'An isolated obstruction can be straightforward, but a damaged sewer line or shared blockage requires a different scope. We assess the symptoms and access before describing the work needed.'
  },
  {
    slug: 'blocked-sinks-showers', name: 'Blocked sinks & showers', short: 'Sort out slow indoor drains.',
    intro: 'A sink that takes ages to empty or a shower that pools around your feet deserves a cause-based fix. We investigate fixture traps and connected waste lines before recommending wider drainage work.',
    image: 'fixture-repair', alt: 'Antons plumbing work on pipe connections underneath a bathroom vanity',
    signs: ['Water pooling in a shower or basin', 'A kitchen sink emptying slowly', 'Gurgling from a connected waste pipe', 'An odour or recurring blockage after cleaning the strainer'],
    causes: 'Hair and soap deposits often collect in bathroom wastes; grease and food residue can narrow kitchen lines. If several fixtures share the symptoms, the blockage may be farther downstream. Odours can also involve traps or ventilation rather than an obstruction alone.',
    approach: 'We identify the affected fixture and assess accessible traps and connections. A local obstruction is cleared with an appropriate method; a connected line may need mechanical clearing or further inspection. We check discharge afterwards and discuss defective traps, leaking joints or recurring build-up where found.',
    equipment: 'Hand tools and suitable mechanical clearing equipment allow access to many fixture blockages. Replacement traps, seals or waste fittings are selected when a component is damaged. Larger equipment is considered only where the line and access justify it.',
    limits: 'Pouring a stronger product down the drain does not establish the cause. Chemical residue can make later clearing hazardous, and it will not correct a damaged or poorly aligned pipe. Do not mix drain cleaners.',
    prevention: 'Use a strainer, remove accessible hair without dismantling the plumbing, scrape plates into the bin and keep cooking oil out of the sink. Persistent slow drainage deserves inspection.',
    question: 'Should I use chemical drain cleaner first?', answer: 'We recommend speaking with the team if the cause is unclear, the blockage recurs or multiple fixtures are affected. Tell us exactly what has been used so the plumber can plan safe handling.'
  },
  {
    slug: 'pipe-relining', name: 'Pipe relining', short: 'Explore a repair with less excavation.',
    intro: 'For suitable damaged drainage, relining can repair the inside of the existing pipe with less excavation than full replacement. A clear inspection and a suitable host pipe come first.',
    image: 'existing-camera', alt: 'Professional drain inspection equipment used by the Antons team',
    signs: ['Roots repeatedly entering an identifiable defect', 'Accessible cracks or leaking joints in a suitable line', 'Pipe repairs beneath surfaces you want to retain', 'A camera assessment recommending a relining option'],
    causes: 'An opening in the pipe can admit roots or allow leakage while the surrounding pipe remains usable. Relining addresses suitable defects from inside. It is considered only after assessing the shape, access and structural condition of the existing line.',
    approach: 'We assess accessible pipework, discuss the repair length and compare relining with excavation where relevant. Suitable lines are cleaned and prepared before a selected resin liner system is installed and cured. Completion checks and any agreed camera record form part of the repair scope. Ask for the specific product and warranty terms in the quotation.',
    equipment: 'CCTV and pipe-cleaning equipment support preparation and inspection. The selected liner, resin system and installation equipment depend on pipe dimensions, bends, junctions and site conditions. Connections must remain functional after the repair.',
    limits: 'Relining is not a fix for every collapsed, severely displaced or incorrectly graded drain. Some sites still require excavation to gain access or replace an unsuitable section. A quotation should define exactly what is being repaired and what is excluded.',
    prevention: 'Keep the completion documents and follow the specified return-to-service guidance. Ask whether other defects remain outside the repair length so maintenance decisions are based on the whole inspected section.',
    question: 'Is relining always cheaper than replacement?', answer: 'No. Length, access, preparation, reinstatement and pipe condition all affect cost. Compare the complete scope and the disruption of each suitable option, rather than assuming one method is always better.'
  },
  {
    slug: 'drain-repairs-excavation', name: 'Drain repairs & excavation', short: 'Replace what clearing cannot fix.',
    intro: 'A broken or collapsed drain needs a repair suited to the defect. We investigate the location, discuss access and reinstatement, and replace agreed sections with appropriate pipework and fittings.',
    image: 'driveway-excavation', alt: 'Antons plumber working on exposed drainage beside an excavator and hose reel',
    signs: ['A camera revealing a broken or displaced section', 'A blockage that cannot be cleared through the line', 'A known defect unsuitable for relining', 'Persistent drainage problems linked to damaged connections'],
    causes: 'Movement, ageing connections and previous disturbance can leave a line misaligned or broken. Debris then collects at the defect. More cleaning cannot restore the missing pipe wall or correct a significant alignment problem.',
    approach: 'We establish the repair area as far as access and inspection allow, discuss nearby services and agree the excavation and reinstatement scope. The damaged section is exposed and replaced with compatible drainage components. The connection, support and flow are checked before the agreed backfilling and surface work.',
    equipment: 'Drain cameras and location information help plan the work. Hand or mechanical excavation is selected for access and surrounding services. Materials may include drainage-rated PVC, compatible junctions and couplings, inspection openings and suitable bedding rather than improvised connections.',
    limits: 'Underground conditions can change what is practical once exposed. Hard surfaces, retaining structures and restricted access affect the scope. Landscaping, paving and concrete reinstatement should be clear in the quotation.',
    prevention: 'Keep inspection points accessible after landscaping. Retain a record of the repaired location, and advise future contractors where drainage runs before work begins nearby.',
    question: 'Will my whole yard need to be dug up?', answer: 'Not necessarily. A defined defect can sometimes be repaired through a targeted excavation. Access, depth, other services and the extent of damage determine what needs to be opened.'
  },
  {
    slug: 'strata-commercial-drains', name: 'Strata & commercial drains', short: 'A clear plan for shared drainage.',
    intro: 'Shared blockages affect residents, customers and business operations. We work with the authorised contact to investigate the affected line, agree access and explain the drainage work required.',
    image: 'team-excavation', alt: 'Antons team working together on an exposed drainage repair',
    signs: ['Several units reporting slow drainage together', 'A common gully or floor waste backing up', 'Recurring kitchen waste restrictions in a business', 'A need to investigate repeated shared-service faults'],
    causes: 'A blockage in a common line can appear first at a lower fixture. Grease, unsuitable waste, roots or damaged shared pipework can all be involved. Knowing which premises are affected is more useful than assuming the first visible overflow is the fault location.',
    approach: 'We obtain the contact, approval arrangements and access details, then assess the shared or private drainage section. Agreed work can include CCTV, clearing and a repair proposal. We discuss interruptions, safe access and documentation requirements so the people using the building know what to expect.',
    equipment: 'CCTV, jetting and appropriate clearing tools are selected around the actual pipework and access. Reports or recorded footage should be requested during booking. If a commercial site has grease arrestors or trade-waste arrangements, those need to be identified before defining the scope.',
    limits: 'Responsibility for a repair depends on the affected system and property arrangements. We do not promise that every blockage is common property, or that jetting replaces required grease-arrestor servicing.',
    prevention: 'Keep a fault history, accessible plans and a nominated decision-maker. Maintenance should target the materials and defects actually found. Food businesses should follow their trade-waste arrangements as well as good kitchen practices.',
    question: 'What should a strata manager have ready?', answer: 'The site address, affected lots, when symptoms occur, access instructions, the authorised contact and any existing reports. Tell us whether footage or a written scope is required.'
  }
];
