---
layout: page
title: Custom Hytera Radio Harness
description: KiCAD, Digital Multimeter, Crimping, Splicing
img: assets/img/project1_radio.jpeg
importance: 2
#category: work
#related_publications: true
---


## Overview

As part of Duke Motorsports, I designed and built a custom radio harness for the race car. The harness provides the electrical connection between the car's steering-wheel radio button, the driver's helmet, and the onboard radio system.

The goal was to create a reliable, serviceable connection that would allow the driver to communicate with the team while driving. The harness needed to fit within the vehicle's wiring system, remain secure during operation, and be easy to inspect and repair.

## System Design

The harness connects three main parts of the car's communication system:

- The radio button mounted on the steering wheel, connected through the steering wheel PCB
- The driver's helmet and headset connection
- The onboard radio unit

Pressing the steering-wheel radio button allows the driver to activate communication through the radio system. The helmet-side connector provides the connection to the driver's microphone and speakers, while the radio-side connector interfaces with the vehicle's radio hardware.

The harness was designed around the existing connector locations and routing constraints of the car. This required considering cable length, connector accessibility, strain relief, and the movement of the steering wheel during operation.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/radioHarnessSchematic.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic by James Hakewill, at http://www.jameshakewill.com/radio-harness.pdf
</div>

## Building the Harness

I began by reviewing the radio system's wiring requirements and creating a schematic for the harness. After identifying the required connections, I prepared the wires and assembled the harness using crimped and spliced connections.

The main assembly process included:

1. Mapping the connections between the steering-wheel button, helmet connector, and radio connector
2. Measuring and cutting the wires to the required lengths
3. Stripping and preparing the wire ends
4. Crimping terminals onto the individual deutsch connectors
5. Splicing and insulating the appropriate connections
6. Routing the wires into a single organized harness
7. Securing and labeling the completed assembly

Careful attention was given to the crimped and spliced connections because these points are especially important for maintaining electrical continuity and mechanical reliability.

## Testing and Validation

After assembling the harness, I tested each connection using a digital multimeter. The testing process included:

- Checking continuity between the appropriate connector pins
- Confirming that there were no unintended short circuits
- Verifying the steering-wheel radio button connection
- Inspecting the crimped terminals and spliced joints
- Checking the connector fit and wire routing

Testing each portion of the harness individually helped isolate potential problems before installation in the car. I also inspected the finished harness for loose terminals, exposed conductors, and areas that could experience excessive strain.

## Result

The completed harness provides a dedicated connection between the car's steering-wheel radio button, the driver's helmet, and the onboard radio. It gives the driver a reliable way to communicate with the team while keeping the wiring organized and removable for future maintenance.

This project gave me practical experience with automotive electrical systems, wiring documentation, connector selection, crimping, splicing, and electrical testing. It also reinforced the importance of designing for reliability and serviceability in a system that needs to function under demanding conditions.