---
layout: page
title: Hardware Acceleration on a Xilinx Zynq-7020 FPGA
description: FPGA, Vivado, Verilog
img: 
importance: 7
---

## Project Overview
I designed and implemented a hardware accelerator for real-time image processing on a Xilinx Zynq-7020 FPGA using Vivado. The project focused on accelerating Sobel edge detection, an image-processing technique used to identify regions of rapid intensity change and highlight object boundaries.

The accelerator was designed as a streaming image-processing module, allowing image data to be processed as it entered the FPGA rather than requiring the entire frame to be stored and processed sequentially by a software application. The design was then pipelined to improve throughput and achieve an approximately 4× performance improvement compared with the baseline implementation.

## Sobel Edge-Detection Algorithm
The Sobel operator estimates the horizontal and vertical intensity gradients of an image using two 3×3 convolution kernels:

G<sub>x</sub> = 
$$
\begin{bmatrix}
-1 & 0 & 1 \\
-2 & 0 & 2 \\
-1 & 0 & 1
\end{bmatrix}
$$

G<sub>y</sub> = 
$$
\begin{bmatrix}
-1 & -2 & -1 \\
0 & 0 & 0 \\
-1 & -2 & -1
\end{bmatrix}
$$



 
For each pixel, the design calculates the horizontal and vertical gradient components. These values are combined to estimate the edge magnitude, using the approximation:

$$|G_x| + |G_y|$$

rather than the more computationally expensive square-root expression. The resulting value is then converted into an output pixel representing the detected edge strength.

## Streaming Image-Processing Architecture
The accelerator accepts pixels as a continuous stream. To calculate a 3×3 convolution, the module must maintain access to the current pixel and neighboring pixels from the previous two image rows.

The design uses line-buffer and window-generation logic to create the required 3×3 pixel neighborhood. As new pixels arrive, the window shifts and updates so that the Sobel computation can operate on successive image locations.

The main processing stages include:

1. Receive streaming pixel data
2. Store and retrieve neighboring rows using line buffers
3. Construct the current 3×3 pixel window
4. Calculate the horizontal gradient
5. Calculate the vertical gradient
6. Compute the edge magnitude
7. Apply output scaling or saturation
8. Stream the processed pixel to the output

This architecture allows the FPGA to process pixels continuously with minimal software intervention.

## Hardware Pipeline
To improve the processing rate, I divided the Sobel computation into multiple pipeline stages. Instead of completing all arithmetic operations before accepting the next pixel, the accelerator allows different pixels to occupy different stages simultaneously.

The pipeline included operations such as:

- Pixel-window formation
- Signed multiplication or shift-based coefficient application
- Partial-sum generation
- Horizontal and vertical gradient accumulation
- Absolute-value calculation
- Gradient combination
- Output formatting and saturation

After the initial pipeline latency, the design can produce processed pixels at a substantially higher rate. Pipelining also improves timing closure by reducing the amount of combinational logic between sequential registers.

## FPGA Implementation
The accelerator was implemented and integrated using Xilinx Vivado for the Zynq-7020 platform. The design process included:

- RTL development
- Module-level simulation
- Synthesis
- Implementation
- Timing analysis
- FPGA programming
- Hardware validation

The Zynq-7020 combines programmable FPGA logic with an embedded processing system, making it suitable for systems that require both software control and high-throughput hardware processing. The image-processing datapath was implemented in the programmable logic portion of the device.

## Verification
Verification was performed through both simulation and hardware testing.

#### Simulation
Simulation was used to verify:

- Correct line-buffer behavior
- Correct generation of the 3×3 pixel window
- Proper handling of image boundaries
- Correct horizontal and vertical gradient calculations
- Correct pipeline timing and latency
- Proper valid-data propagation
- Correct output formatting

Known image patterns and test vectors were used to compare the hardware output with expected Sobel results.

#### Hardware Testing
After simulation, the design was synthesized and deployed to the Zynq-7020 FPGA. Hardware testing confirmed that the accelerator processed streaming image data correctly and produced the expected edge-detection output.

Testing also evaluated the design’s throughput and timing behavior under realistic operating conditions.

## Performance Improvement
The pipelined FPGA implementation achieved an approximately 4× performance improvement compared with the baseline implementation. This improvement resulted from several architectural decisions:

- Parallel execution of arithmetic operations
- Continuous streaming of image pixels
- Reduced reliance on sequential software processing
- Reuse of line-buffered pixel data
- Pipeline overlap between successive pixels
- Dedicated hardware for convolution and gradient calculations
The result was a higher-throughput image-processing system capable of real-time operation under the target conditions.

## Design Considerations
Several implementation details were important to the performance and reliability of the accelerator:

- Managing the latency introduced by the pipeline
- Keeping the valid signal aligned with each output pixel
- Handling pixels near image boundaries
- Limiting arithmetic width to control FPGA resource usage
- Preventing overflow during gradient accumulation
- Applying saturation when converting gradient values to output pixels
- Meeting the timing requirements of the target clock frequency
- Maintaining a continuous data stream without unnecessary stalls
The design required balancing throughput, resource utilization, numerical precision, and timing performance.

## Skills Demonstrated
This project demonstrates experience with:

- FPGA-based hardware acceleration
- Xilinx Zynq-7020 architecture
- Vivado design and implementation tools
- RTL and synchronous digital design
- Image-processing algorithms
- Sobel edge detection
- Streaming datapath design
- Line buffers and sliding-window processing
- Hardware pipelining
- Fixed-point and signed arithmetic
- RTL simulation
- FPGA synthesis and timing analysis
- Hardware bring-up and validation
- Performance optimization

## Project Outcome
The completed system implemented a pipelined Sobel edge-detection accelerator on a Xilinx Zynq-7020 FPGA. By processing image data as a stream and using dedicated pipelined hardware for the convolution and gradient calculations, the design achieved an approximately 4× improvement in performance over the baseline implementation.

This project provided practical experience designing, verifying, optimizing, and deploying a real-time image-processing system on an FPGA.