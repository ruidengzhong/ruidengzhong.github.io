---
layout: portfolio-detail
title: "FSAE Wiring Harness"
description: "Wiring harness development for the 2026–2027 Duke Motorsports car, connecting electrical design with vehicle packaging."
img:
importance: 12
# Optional dates, for example: "August 2026". Leave blank to hide.
start_date: "August 2026"
end_date: "October 2026"
# Set to true to show the In progress badge; false hides it.
in_progress: false
tools:
  - "RapidHarness"
  - "Altium"
  - "SolidWorks"
  - "Wiring Harness Fabrication"
outcome: "Completed wiring harness development for the 2026–2027 Duke Motorsports car in collaboration with the electrical subteam."
contributions:
  - "Collaborated with the Duke Motorsports electrical subteam, including Lu Wang and Dylan Wang, on the vehicle wiring harness."
  - "Developed the harness in RapidHarness as part of the team's vehicle electrical integration work."
# Add image paths below, for example: /assets/img/harness-rapidharness.png
# Export only the portion of the RapidHarness schematic you want to show.
rapidharness_image: ""
solidworks_image: ""
altium_image: ""
---

## Project overview

A race car's wiring harness connects its electrical components into a working system. For the 2026–2027 Duke Motorsports car, I worked with the electrical subteam, including Lu Wang and Dylan Wang, to develop the vehicle harness in RapidHarness.

The project brought together electrical connectivity and physical packaging: a connection must be correct on the schematic, but its wiring also needs a practical route through the car. RapidHarness, SolidWorks, and Altium provide complementary views of that problem, from individual connections to the surrounding assembly and circuit interfaces.

## Electrical connectivity — RapidHarness

The harness schematic describes how electrical connections travel between components. At this level, the important information is the relationship between a signal, its wire, and the connector pin at each end. Clear connection definitions help keep individual branches understandable as they become part of the larger vehicle harness.

For a vehicle-scale harness, useful design checks include:

- Matching connector pin assignments to the intended component interfaces.
- Keeping power, return, and signal connections clearly identified.
- Organizing branches so that each connection can be traced through the documentation.
- Keeping wire and connector labels consistent between the schematic and physical assembly.

The selected schematic view below provides space to highlight one portion of the harness at a readable scale.

{% if page.rapidharness_image != blank and page.rapidharness_image %}
{% include figure.liquid path=page.rapidharness_image alt="Selected portion of the Duke Motorsports wiring harness schematic in RapidHarness" class="img-fluid rounded" %}
{% else %}

<div class="border rounded p-5 text-center" role="img" aria-label="Image placeholder: selected RapidHarness schematic">
  Selected RapidHarness schematic
</div>
{% endif %}
<div class="caption">RapidHarness — selected portion of the vehicle wiring schematic.</div>

## Physical packaging — SolidWorks

The assembly view connects the electrical design to the physical space available in the car. A schematic establishes which components connect; the mechanical assembly provides context for where those components sit and how a harness can reach them.

Routing considerations include branch lengths, connector access, support locations, and clearance from moving parts, sharp edges, and heat sources. Serviceability also matters: connectors should remain accessible for assembly, inspection, and component replacement. These constraints make harness development an integration task involving both electrical and mechanical systems.

{% if page.solidworks_image != blank and page.solidworks_image %}
{% include figure.liquid path=page.solidworks_image alt="SolidWorks assembly showing the vehicle packaging context for the Duke Motorsports wiring harness" class="img-fluid rounded" %}
{% else %}

<div class="border rounded p-5 text-center" role="img" aria-label="Image placeholder: SolidWorks assembly">
  SolidWorks assembly
</div>
{% endif %}
<div class="caption">SolidWorks — assembly and packaging context for the wiring harness.</div>

## Circuit interfaces — Altium

The circuit schematic provides another level of detail for understanding the interfaces connected by the harness. Connector pins and net names link the circuit-level design to the wiring documentation. Reading these views together helps establish what each connection is intended to carry and where it belongs in the larger system.

Important interface checks include agreement on connector numbering, signal names, supply connections, and return paths. Keeping these definitions consistent makes the documentation easier to follow when assembling or troubleshooting the vehicle's electrical system.

{% if page.altium_image != blank and page.altium_image %}
{% include figure.liquid path=page.altium_image alt="Altium schematic showing circuit interfaces associated with the Duke Motorsports wiring harness" class="img-fluid rounded" %}
{% else %}

<div class="border rounded p-5 text-center" role="img" aria-label="Image placeholder: Altium schematic">
  Altium schematic
</div>
{% endif %}
<div class="caption">Altium — circuit schematic and electrical interface context.</div>

## Engineering perspective

This project connects three representations of the same engineering problem: electrical connections, physical placement, and circuit behavior. A useful harness design brings these views into agreement so that the wiring is understandable as part of the complete car, rather than as an isolated set of connections.
