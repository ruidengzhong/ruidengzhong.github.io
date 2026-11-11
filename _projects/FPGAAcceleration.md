---
layout: portfolio-detail
title: "FPGA Image Acceleration"
description: "Introductory participation in a graduate-student-led project exploring FPGA acceleration of Sobel edge detection."
img:
importance: 20
tools:
  - "FPGA"
  - "Vivado"
contributions:
  - "Participated alongside graduate students in a lab-based FPGA image-processing project."
  - "My involvement was introductory; the graduate students carried out most of the design and implementation work."
---

## Project overview

The project explored accelerating Sobel edge detection on a Xilinx Zynq-7020 FPGA using Vivado. Its focus was using streaming image processing and pipelining to process image data in hardware.

I participated alongside graduate students on lab computers. This was an introduction to FPGA-based image processing, rather than an independently designed accelerator. The project context below describes the broader technical ideas, not implementation or verification work that I personally completed.

<details class="technical-details" markdown="1">
<summary><h2>Technical context</h2></summary>

### Sobel edge detection

Sobel edge detection identifies changes in image intensity that can indicate object boundaries. It uses neighboring pixels in a 3×3 window to estimate horizontal and vertical intensity gradients, which are combined to represent edge strength.

### Streaming image processing

A streaming architecture processes incoming pixels in sequence. For a neighborhood operation such as Sobel filtering, buffering makes pixels from neighboring rows available for each calculation. This is a general architectural concept; it does not specify the project's exact buffering or interface implementation.

### Pipelining

Pipelining divides a computation into stages so that multiple pixels can be processed at different stages simultaneously. It can increase throughput after the pipeline fills, without necessarily reducing the latency of an individual pixel.

</details>
