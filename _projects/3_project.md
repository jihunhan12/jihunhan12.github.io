---
layout: page
title: "Fuel-Optimal Cooperative Merging"
description: Oct, 2017 - Sep, 2018, Sponsored by DOE (@ORNL)
img: assets/img/project_img_3.png
importance: 1
category: completed
related_publications: false
---

Merging onto a highway requires cooperation among vehicles in the merge area, since no single vehicle can resolve the conflict alone and each one's decision constrains the others. This work addressed that problem through the coordination control that determines the order and the speed profiles, together with an assessment of what such control delivers once automated vehicles make up only part of real traffic.

### Fast Analytical Trajectory Solver

Fuel-optimal speed planning was known to produce a sequence of four control modes, maximum acceleration, constant-speed cruising, coasting, and maximum braking, but assembling that sequence for arbitrary boundary conditions had required a numerical optimizer that trades computing time against optimality and depends on a good initial guess. This task showed that the optimal sequence of those modes is determined by the boundary conditions of the trip. Feasibility criteria were established for each sequence, and once the boundary conditions select one, the switching points follow analytically because every mode has an explicit solution. The solver returns the optimal trajectory without iteration, and vehicles equipped with it saved fuel in both single-vehicle and multi-vehicle scenarios.

### Cooperative On-Ramp Merging

When several connected vehicles approach a merge, the questions of who passes first and at what speed cannot be separated. This task built two real-time coordination systems on a common two-layer structure. The upper layer schedules the approaching vehicles on a first-in-first-out basis and assigns each a time to cross the merge area, converting a spatial conflict into an arrival deadline for each vehicle. The lower layer computes the energy-optimal speed profile that meets that deadline and issues it as the reference the vehicle tracks. Both rest on analytical solutions, keeping the systems real-time implementable, and two objectives were compared, one minimizing control effort and one minimizing fuel. In microscopic traffic simulation (VISSIM) both reduced total time spent and total fuel against an uncoordinated baseline and improved safety indicators such as the number of conflicts. A subsequent study in heterogeneous traffic found the benefit peaks under moderate congestion and requires a substantial market penetration of automated vehicles.
