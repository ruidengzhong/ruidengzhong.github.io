---
layout: page
title: Doppler String Phantom
description: Python, Arduino, OnShape, 3D Printing, Ultrasound, Digital Multimeter
img: assets/img/dopplerPhoto.jpg
importance: 6
---

## Project Overview
The Doppler String Phantom is an adjustable laboratory platform designed to simulate blood flow for testing and calibrating Doppler ultrasound systems. The device uses a motor-driven string loop traveling through an acrylic tank to reproduce controlled flow speeds. An ultrasound transducer is positioned against the tank and measures the motion of the string, allowing the measured Doppler velocity to be compared with the commanded speed of the phantom.

The project was developed to provide a lower-cost and more accessible alternative to commercial ultrasound flow phantoms. Commercial systems can be expensive and may not provide the flexibility needed to simulate different vessel-flow conditions. This phantom was designed for use in biomedical engineering research and ultrasound calibration experiments run by Dr. David Bradway at Duke's [Nightingale Lab](https://kathynightingalelab.pratt.duke.edu/).


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dopplerGroupPhoto.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Photo at the Pratt Design Expo Fall 2025
</div>

## System Design
The phantom consists of several integrated mechanical, electrical, and software subsystems:

- Acrylic water tank
- Motor-driven string loop
- Pulley assembly
- Adjustable tensioning mechanism
- Motor driver
- Arduino-based control system
- External power supply
- Computer interface for speed and motion control
- Ultrasound transducer positioned against the tank

The string travels around a pulley system inside the acrylic tank. When the motor rotates, the string moves through the water and produces a repeatable motion that can be detected by the ultrasound transducer. This motion serves as a physical approximation of blood flow for Doppler measurement experiments.

The system supports both constant-speed and pulsatile operation. The phantom can be configured to move the string at speeds ranging from approximately 10 to 400 cm/s, allowing it to represent a range of flow conditions.

## Motion-Control System
An Arduino controls the motor through a dedicated motor driver. The control system allows a user to specify the desired string speed and operating mode through a computer-based interface.

The motor driver provides the current and voltage required to operate the motor while allowing the Arduino to control the motor’s behavior. The power supply provides the necessary electrical power to the motor driver and control electronics.

The control system was designed to support:

- Adjustable flow speeds
- Constant-speed operation
- Pulsatile motion profiles
- Repeatable test conditions
- User control through a computer interface built in Python

The system’s mechanical speed was calibrated so that the commanded motor settings corresponded to known string velocities.

## Mechanical Design
The main structure was constructed from clear acrylic, allowing the internal pulley system and string motion to remain visible during operation. The transparent tank also allows an ultrasound transducer to be placed against the side of the phantom while maintaining visual access to the test setup.

The pulley assembly guides the string through the tank and helps maintain a consistent motion path. String tension is important because changes in tension can affect the string’s motion, introduce slack, or cause inconsistent velocity. To address this issue, the design incorporates an adjustable tensioning pulley.

The team also designed a 3D-printed enclosure for the motor driver and power supply. This enclosure would improve organization, protect the electrical components, and provide a more compact and convenient final product.

The pulley system along with the different enclosures were all designed in OnShape, and 3D-printed at the Foundry.

## Ultrasound Measurement
A Doppler ultrasound transducer is placed against the acrylic tank to measure the apparent motion of the string. The ultrasound system produces an image and Doppler measurement corresponding to the moving string.

The measured velocity is compared with the programmed phantom velocity to evaluate accuracy. This comparison provides a way to determine whether the physical system is producing the intended flow-like motion and whether the ultrasound measurement is within the desired tolerance.

The poster shows Doppler ultrasound output from the phantom, demonstrating that the moving string can be detected and visualized by the ultrasound system.

## Design Requirements
The system was designed to meet several performance requirements:

- Operate continuously for at least two years of expected use
- Support speeds between 10 and 400 cm/s
- Support at least three distinct speed settings
- Simulate pulsatile flow
- Maintain flow accuracy within ±10% of the commanded speed
- Weigh less than 30 pounds
- Operate from wall power
- Remain affordable, with a target cost below $300
- Operate safely without creating significant hazards
- Provide a convenient and adjustable laboratory platform

## Testing and Results
The completed prototype was tested against the design criteria using mechanical endurance testing, speed testing, user surveys, and ultrasound measurements.

#### Durability
The phantom was operated continuously for one hour at the maximum tested speed of 400 cm/s. Motor temperature was monitored throughout the test.

Result: Pass

Maximum measured motor temperature: approximately 104.7°F

#### Convenience
Researchers and laboratory users completed a Likert-scale survey evaluating the usability and convenience of the phantom.

Result: Pass

Average convenience rating: 4.9/5
Wall-powered operation
Measured weight: approximately 23.5 pounds

#### Accuracy
A pre-calibrated ultrasound system was used to evaluate the phantom at multiple constant-speed settings.

Result: Partial Pass

Three speed settings were tested
Measured flow values were within approximately 10% of the commanded speed
Additional testing is planned to evaluate the full operating range and improve calibration accuracy.

#### Adjustability
The phantom was tested at multiple speed settings between 10 and 400 cm/s, including both constant and pulsatile operating modes.

Result: Pass

Average adjustability rating: 4.7/5
Supported speed range: approximately 10–400 cm/s

#### Affordability
The cost of the purchased components was calculated to evaluate the design against the project budget.

Result: Pass

Total component cost: approximately $210

#### Safety
Users evaluated the safety and usability of the device during testing.

Result: Pass

Average safety rating: 4.7/5

## Engineering Challenges
Several engineering considerations influenced the final design:

- Maintaining consistent string tension
- Preventing the string from slipping on the pulleys
- Producing repeatable speeds across the operating range
- Positioning the ultrasound transducer against the acrylic tank
- Preventing water spillage and splash from the string
- Protecting the motor driver and power electronics
- Balancing speed adjustability with mechanical stability
- Ensuring that the structure remained lightweight while supporting the moving assembly
- Calibrating the physical string speed against ultrasound measurements

The use of an adjustable tensioning pulley was an important design feature because string length and tension can vary during assembly and operation. Future development of the 3D-printed electronics enclosure would further improve the device’s usability and reliability.

## Skills Demonstrated
This project demonstrates experience with:

- CAD with OnShape
- Python-Arduino interface design
- Biomedical instrumentation
- Doppler ultrasound measurement
- Mechanical system design
- Motor and pulley mechanisms
- Arduino-based control systems
- Motor driver integration
- Speed control and calibration
- Sensor and transducer placement
- System testing and validation
- Design requirements development
- Cost analysis
- User-centered engineering design
- Hardware packaging and enclosure design

## Project Outcome
The Doppler String Phantom provides an affordable, adjustable, and repeatable platform for simulating blood-flow motion during ultrasound experiments. The prototype successfully demonstrated controlled string movement across a wide speed range, compatibility with Doppler ultrasound measurement, and reliable operation during initial testing.

With a total component cost of approximately $210 and a measured weight of about 23.5 pounds, the system met its affordability and convenience goals. Continued testing will focus on improving velocity calibration and validating accuracy across the complete operating range. The final device is intended for use in biomedical research and ultrasound laboratory environments.

The team were the winners of the "Most Innovative Design" Award at the Pratt Design Expo, Fall 2025.


Collaboration with Gustav Koh, Rohan Deshmukh, and Michael Messina




<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dopplerPoster.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Poster presentation
</div>