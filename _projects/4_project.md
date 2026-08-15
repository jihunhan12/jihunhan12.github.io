---
layout: page
title: "Analytical Eco-Driving Control"
description: May, 2016 - Sep, 2017, Sponsored by IFPEN (@IFPEN)
img: assets/img/12.jpg
importance: 1
category: completed
related_publications: false
---

The central question here was how much energy a vehicle can save through control alone, with no change to its hardware. This project aimed to derive analytical insights into energy-efficient driving that reveal the mechanism behind each saving, rather than a number reported by a numerical solver. Algorithms were then developed from those insights for real-time use on a vehicle.

### Fast Optimal Control for Hybrid Powertrains

A hybrid vehicle must continually decide how to divide power between its engine and its battery, and at the design stage that decision has to be resolved for every candidate architecture and component sizing. Since each candidate reveals its true fuel economy only under a near-optimal energy management strategy, the strategies must be generated automatically and rapidly. An optimal control formulation already existed that was fast enough for a design loop, but handling the battery state-of-charge (SoC) limits within it is not trivial: those SoC limits had been enforced with a penalty term, which is computationally expensive and sacrifices the optimality of the underlying solution. This task derived instead how the solution evolves while the battery is held at a limit and how it resumes once it leaves, so that constrained strategies are constructed analytically rather than searched for numerically.

### Fundamentals of Energy-Efficient Driving

Over a fixed distance and travel time, the energy-optimal way to drive is not obvious, and why a particular driving pattern saves energy is equally unclear. Beginning from aerodynamic drag, this task showed that the energy available at the wheel is best used at a low and constant speed. Applying optimal control theory then revealed that the optimal trip is not one continuous cruise but a short sequence of distinct control modes: maximum acceleration, constant-speed cruising, coasting, and maximum braking, where the cruising mode is what improves efficiency and the remaining modes exist only to satisfy the boundary conditions of the trip. For gasoline engines, alternating short periods of maximum engine load with unpowered glides (known as pulse-and-glide) outperforms a steady engine load during cruising, because the engine is more efficient at higher load. Electric vehicles, whose energy use depends quadratically on control input, yield a different optimal pattern entirely.

### Safe and Efficient Driving with Traffic Ahead

Energy-efficient driving must account for the vehicle ahead, since how a vehicle responds to it is critical for both safety and efficiency, yet most speed advisory systems had been derived for an empty road. This task incorporated two state constraints directly into the problem formulation, a minimum safe gap to the preceding vehicle and the posted speed limit, and solved for the energy-minimizing speed profile respecting both. The solution remains closed-form, assembled from unconstrained segments and segments that ride along a constraint boundary, with the junctions between them determined analytically rather than by iteration. Because such a solution does not exist for every terminal speed and arrival time, the controller also establishes which terminal conditions are feasible and adjusts them online. Across a range of preceding-vehicle behaviors it reduced energy use and avoided collisions without extending trip time. This impact was also validated in microscopic traffic simulation (AIMSUN).
