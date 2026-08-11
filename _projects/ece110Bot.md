---
layout: page
title: Line-Tracking Bot with Thermal Sensor
description: Arduino Mega, IR Sensor, QTI Sensor, LCD, Breadboarding
img: assets/img/idcTop.jpg
importance: 5
---

## Project Overview
As part of the ECE 110L Integrated Design Challenge, I worked on a team-based autonomous robotics project involving multiple Arduino-controlled mobile robots. The system required each robot to navigate a marked course, collect sensor measurements at specific locations, communicate its results wirelessly, receive data from other robots, and determine a final system response based on the combined measurements.

My primary contribution was developing and integrating an infrared thermal sensing system for detecting temperature-related characteristics of objects on the course.

## System Architecture
Each robot consisted of a mobile chassis, Arduino MEGA microcontroller, motor and servo actuators, navigation sensors, a task-specific object sensor, an XBee wireless module, an LCD, and RGB LED indicators.

The complete system performed the following sequence:

- Followed a marked track using QTI infrared reflectance sensors
- Detected designated hash marks along the track
- Stopped at each hash mark to perform a measurement
- Used the infrared thermal sensor to detect the assigned target condition
- Transmitted the measurement wirelessly using an XBee module
- Received measurements from the other robots
- Displayed the collected data on an LCD
- Analyzed the combined data and selected the appropriate final behavior

This project required the integration of multiple subsystems that were initially developed and tested independently.

## Infrared Thermal Sensor
My team was responsible for the infrared thermal sensor subsystem. The sensor detects infrared radiation emitted by objects and converts the measured thermal energy into an electrical signal that can be read by the Arduino.

The sensor was mounted on the front of the robot and positioned to obtain consistent readings from objects placed along the course. Sensor placement was influenced by:

- Distance from the target object
- Sensor field of view
- Orientation relative to the object
- Ambient temperature
- Mechanical stability during robot movement
- Clearance from the chassis and other components
- Wire length and connection access

The Arduino processed the sensor output in software and used thresholds or programmed decision logic to determine whether the expected thermal object was present. The thermal sensing routine was triggered at the appropriate hash marks so that measurements were associated with the correct locations.

## Autonomous Navigation
The robot used QTI sensors to follow dark lines on a light-colored surface. These sensors use infrared reflection to distinguish between light and dark areas. The sensor outputs were converted into digital states, which represented the robot’s position relative to the line.

Based on the sensor-state combination, the control program adjusted the motor outputs to:

- Move forward
- Correct the robot’s position to the left or right
- Search for the line if it was lost
- Stop at designated hash marks

The robot counted hash marks by identifying the wider transverse markings on the course. At each mark, it stopped, performed the required sensing operation, and used an onboard RGB LED to indicate its progress.

## Wireless Data Communication
Each robot used an XBee module to transmit its measurement to the other robots. The transmitted data included the robot’s identity and its sensor result, allowing receiving robots to associate each value with the correct source.

The communication system needed to account for:

- Multiple robots transmitting within the same system
- Data ordering and message identification
- Serial buffer behavior
- Timing between transmission and reception
- Missing or delayed messages
- Storage of received values for later processing

The program monitored the serial interface, decoded incoming data, and stored the measurements in an array. RGB LEDs provided visual feedback for communication and sensing events, including successful detection, unsuccessful detection, transmission, and reception.

## Data Display and Processing
After receiving the team’s measurements, the robot displayed the values on an LCD. The data was stored in an array so that each robot’s result could be viewed and processed consistently.

The program then calculated a combined result by summing the received values. Based on this calculation, it selected and executed one of several predefined final behaviors. This required the robot to complete the entire processing chain:

Sensor measurement → data encoding → wireless transmission → data reception → array storage → calculation → output behavior

## Software Design
The Arduino program was divided into functions for the major hardware and software tasks. These included:

- Reading and interpreting QTI sensor states
- Controlling the motors and servos
- Detecting and counting hash marks
- Reading the infrared thermal sensor
- Determining whether the target condition was present
- Controlling RGB LED indicators
- Transmitting and receiving XBee data
- Updating the LCD
- Storing received values
- Calculating the combined result
- Executing the final behavior
This modular structure made the code easier to test and debug. Each subsystem could be validated independently before being integrated into the full robot program.

## Testing and Debugging
A significant part of the project involved debugging the interaction between the robot’s hardware and software. Testing included:

- Calibrating QTI sensor thresholds
- Adjusting sensor placement for reliable line following
- Testing hash-mark detection
- Verifying thermal sensor readings at different distances
- Checking sensor behavior under changing environmental conditions
- Testing XBee transmission and reception
- Confirming that data was correctly assigned to each robot
- Verifying LCD output and array formatting
- Running repeated full-system trials on the course
The robot had to maintain reliable navigation while temporarily stopping to sense, communicate, and update its display. Timing, sensor thresholds, physical alignment, and communication reliability were all important factors in the final system performance.

## Skills Demonstrated
This project demonstrates experience with:

- Arduino embedded programming
- Autonomous mobile robotics
- Infrared thermal sensing
- Infrared reflectance sensing
- Motor and servo control
- XBee wireless communication
- Serial data processing
- LCD interfacing
- RGB LED status indication
- Sensor calibration
- Array-based data storage
- Modular software design
- Hardware/software integration
- System-level testing and debugging
- Collaborative engineering development

## Project Outcome
The completed system demonstrated a multi-robot sensing and communication platform capable of navigating a course, collecting measurements, exchanging data wirelessly, displaying system information, and making a decision based on the combined results.

My work focused on the infrared thermal sensing subsystem and its integration with the robot’s navigation and communication software. The project provided practical experience developing a complete embedded system in which sensing, control, wireless communication, data processing, and physical hardware had to operate together reliably.

Collaboration with Jonathan Ransom, with support from Zoe Meadows

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idcFront.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idcSide.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/idcBack.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Front, Side, and Rear views of the bot "Jiggy"
</div>