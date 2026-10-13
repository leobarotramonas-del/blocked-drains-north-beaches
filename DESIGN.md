---
name: Antons Blocked Drains North Beaches
description: Practical drainage advice, visible workmanship and a clear path to calling.
colors:
  navy: "#081939"
  blue: "#0860df"
  red: "#d81728"
  paper: "#f7f5ef"
  line: "#c6ced8"
  muted: "#48556a"
  white: "#ffffff"
  related: "#e8edf4"
typography:
  display:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(54px, 5.7vw, 88px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 4vw, 60px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.02
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
rounded:
  square: "0px"
spacing:
  paragraph: "18px"
  action-gap: "24px"
  section: "clamp(64px, 7vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  button-call:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "14px 24px"
  input-search:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
    padding: "14px 16px"
---

# Design System: Antons Blocked Drains North Beaches

## Overview

**Creative North Star: "Visible workmanship"**

A direct, capable trade-service identity carried forward from the supplied Ryde site: condensed headlines, generous real photography, warm paper, navy foundations and vivid blue wayfinding. Red marks the phone action. Space and strong type make practical advice easy to scan.

This is an extraction of the completed build, not a new identity proposal. The North Star names the existing direction contract's emphasis on real roots, camera inspection and pipe repairs. The built urgent-help strip is blue; the navy caption, repair section and footer supply the darker anchors.

**Key Characteristics:**

- Condensed display type with open, readable body copy.
- Square controls and flat, rule-separated content.
- Actual team, equipment and drainage photography.
- Prominent telephone actions across desktop and mobile.

## Colors

Primary blue carries highlighted headline phrases, links, section accents and general buttons. Navy provides body text and large grounding fields. Red is the secondary action color for telephone controls. Warm paper is the default canvas; white distinguishes navigation and utility panels, while the cool related surface groups local coverage. Muted text and pale rules support hierarchy without enclosing every item.

**The Call Color Rule.** Red belongs to telephone actions; informational actions use blue or underlined text.

## Typography

Self-hosted Saira Extra Condensed 700 supplies headings and the wordmark; self-hosted Barlow 400, 600 and 700 supplies text, links and controls. Display and regular body fonts are preloaded. Fallback families are recorded in the frontmatter.

The type ramp is condensed and emphatic above relaxed body copy. General headings use the frontmatter ramp. The homepage hero is a deliberate exception: uppercase, a tight line height (0.98), and a desktop size of clamp(68px, 6.5vw, 96px). It becomes 76px at the intermediate breakpoint, 64px on mobile and 56px on narrow phones. Interior mobile page titles are 55px. Body text becomes 17px on mobile; general paragraphs are capped at 70ch, with narrower lead copy. Supporting fine print is 14px with a 1.5 line height.

**The Heading Contrast Rule.** Reserve all-uppercase treatment for the homepage hero and brand; ordinary headings retain natural sentence casing.

## Layout

The shared container is capped at 1240px with 32px side gutters, reduced to 18px on mobile. Section spacing uses the fluid frontmatter token. Desktop layouts combine two-column text/media compositions, three-column service and locality groups, four-step process rows and reading columns with a 330px aside.

At 1150px and below, gaps tighten and the header telephone block disappears. At 760px and below, primary splits and reading layouts stack; services, process steps, galleries and locality groups remain two-column where implemented. The service index becomes one-column. Navigation becomes a native disclosure menu, and a fixed red telephone bar includes bottom safe-area padding. The footer reserves 105px below its content for that bar. At 370px and below, locality groups become one-column. At 1500px and above, hero spacing and image crop adjust.

Photographs use purposeful object-fit crops. The homepage pairs a large root-removal photograph with a framed CCTV inset; this is a surface composition, not a required layout for every page.

## Elevation & Depth

The system is flat by default: paper, white, blue and navy fields plus fine horizontal rules establish hierarchy. Soft shadows are limited to the photographic inset, mobile navigation popover and fixed telephone bar. Their exact values are recorded in the sidecar; do not generalise them into card shadows.

## Shapes

Controls, image fields and panels have square corners. One-pixel dividers organise lists, disclosures and service tiles; the aside has a stronger blue top border. The photographic inset uses a paper frame. Open layouts and spacing do more work than boxes.

## Components

- **Buttons:** solid blue for general actions, red for calls, white bold text, minimum height 56px and square corners. Hover darkens the fill and lifts ordinary buttons by 2px over 180ms ease-out. Call hover uses the implemented darker red. Mobile buttons reduce horizontal padding to 20px and use 16px text.
- **Text links and navigation:** ordinary links retain underlines; desktop navigation uses 15px semibold text and an underlined current item. The mobile menu uses native details/summary, closes on Escape or an outside click, and returns focus to its summary on Escape.
- **Disclosures:** native details/summary presents symptom advice and FAQs with separating rules, blue plus/minus state markers, generous click rows and muted answer copy. These markers communicate state; they are not decorative iconography.
- **Service tiles and indexes:** real photographs, condensed titles, concise muted descriptions and explicit service links. Tiles use a bottom rule and no enclosing raised card. Text indexes use rows with the service name and a secondary link label.
- **Suburb search:** a visible label, white rectangular field, one-pixel slate border and blue caret. Filtering updates a status announcement, hides empty groups and supplies a useful no-results contact link. No booking form or speculative error/disabled styles are defined.
- **Call-to-action band:** blue full-width field, large white heading, concise next-step copy and a red telephone link. Mobile stacks the text and action.
- **Media:** responsive WebP images at 480, 800 and 1200 widths; the main hero image loads eagerly with high priority and other photographs load lazily. Use the real supplied media with accurate context. Job videos are user-initiated and preserve their location qualification.

All interactive elements inherit a visible amber focus outline (3px with 5px offset). Preserve the skip link, semantic landmarks, current-page cues and meaningful image descriptions. Reduced-motion preference disables transitions/animations and smooth scrolling. There is no decorative entrance-animation system.

## Do's and Don'ts

### Do:

- Do preserve the navy, blue, paper and red family identity.
- Do use real supplied work imagery, descriptive alt text and accurate captions.
- Do keep telephone actions prominent and explain booking availability in plain language.
- Do preserve keyboard access, visible focus and reduced-motion support.

### Don't:

- Don't turn service tiles into rounded, shadowed dashboard cards.
- Don't invent job locations, review metrics or guarantees to decorate the interface.
- Don't apply the hero's uppercase treatment to every heading.
- Don't introduce decorative motion or autoplay media.

Source of truth: src/styles/global.css, src/layouts/Layout.astro, src/components and src/pages; checked against the desktop and mobile review captures. Primitive tokens above are normative; the sidecar holds extension metadata and representative component snippets.

