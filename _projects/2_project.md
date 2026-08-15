---
layout: page
title: "CAV Eco-Driving: Data to Deployment"
description: Oct, 2018 - June, 2026, Sponsored by DOE (@ANL)
img: assets/img/12.jpg
importance: 1
category: completed
related_publications: false
---

The tasks below are selected topics from a much larger body of work carried out under DOE-funded projects at Argonne National Laboratory, including SMART Mobility 1 and 2, TCF, CDA, and ENACTED. Together they cover everything required for connected and automated vehicles (CAVs) to improve energy efficiency, from the state of today's traffic to a demonstration on a real vehicle. The first part is understanding the road as it is today and reproducing it accurately in simulation. The second is advanced control: speed planning that uses V2X information, coordination with surrounding vehicles, operation across multiple lanes, and strategies adapted to the powertrain, whether combustion or electric with regenerative braking. The third is experimental proof: vehicle platforms, X-in-the-loop testing, and on-road validation. The fourth is system-level evaluation, judging what such control does to an entire corridor of mixed traffic.

## Understanding and Reproducing Today's Traffic

### Large-Scale Driving Data Analysis

Vehicle telematics data arrives as a continuous stream of vehicle states without any indication of the situation that generated it, which makes large datasets difficult to learn from. This task developed a multi-level processing approach that augments the raw trip-level trajectory data, divides it along the time axis into progressively shorter segments, and extracts the parameters each level requires. The pipeline supports analysis at three levels: the representative properties of complete trips, the road events that force a vehicle to reduce speed and the conditions under which they occur, and the driving behavior a driver exhibits in a given situation. Applied to a confidential dataset of more than one million kilometers of driving, collected in collaboration with Hyundai, the results provide measured inputs for trip- and scenario-based test procedures, which would otherwise have to be designed from assumptions.

### Production ACC Impact and Modeling

Adaptive cruise control (ACC) has spread thanks to its convenience, while the effect on fuel consumption in everyday driving has seldom been examined directly. This task examined it using a fleet dataset covering more than one million kilometers of driving, collected in collaboration with GM. Leveraging the multi-level processing approach, the data was analyzed at two levels. At the trip level, engaging the ACC system is associated with a slight increase in fuel consumption once driver and route conditions are controlled for; at the situation level, that penalty is traced to constant-speed cruising, while acceleration and braking show genuine benefits, particularly when a preceding vehicle is present. Reproducing ACC behavior in simulation is equally important, since ACC engagement is frequent on real roads. Using dedicated ACC test data, this task benchmarked the production ACC logic and validated the resulting model in simulation against test data from the same driving conditions.

### Human Driver Modeling

Evaluating CAV performance in simulation depends on the human driver model, which both provides the baseline case and generates the behavior of surrounding vehicles. This task proposed a new high-fidelity human driver model with a hierarchical structure, so that simulated drivers reproduce real behavior more accurately than simple car-following models. The perception and decision layer uses the processed driving data to build data-driven component models that select the driving regime and estimate its parameters. The action layer then generates the trajectories by solving an optimal control problem that minimizes jerk energy, while guaranteeing no rear-end collisions. A random component is added on top, so that simulated drivers differ from one another as real ones do. The proposed model was validated at the trajectory level, showing small errors between the simulated and the collected data.

### Microsimulation Calibration

A microsimulation only reproduces real traffic if its parameters are set from collected data. This task addressed calibration at two levels, each posing a different kind of problem. At the driver level, calibrating a full car-following parameter set for every individual is expensive and, with enough free parameters, risks fitting noise rather than behavior. Reducing the model showed that these parameters are not independent: the accuracy lost depends on which one is fixed first, and fixing one shifts the others. At the network level, sensors count vehicles at a point but not their routes, so time-varying path flows must be inferred. Intersection movement counts, corridor travel times, and signal timing plans were fused into a single estimation problem, recovering those flows for a signalized corridor in Chicago.

## Advanced Control

### V2X-Enabled Eco-Driving Algorithms

The information available to a vehicle will only grow richer, coming from onboard sensors and vehicle-to-everything (V2X) communication. Each source changes what a controller can do, so this task developed a family of eco-driving controllers, each defined by the information it assumes:
- Powertrain-aware control shapes the speed profile around how efficiently the powertrain actually operates, rather than treating energy use as a generic cost.
- V2I-enabled control uses signal timing, first from one intersection and then across a corridor, where the speed planning problem also involves choosing which green windows to aim for.
- Cooperative driving automation uses V2V messages, either to know more about the surrounding vehicles or to seek an agreement among them, so that trajectories are decided jointly rather than one vehicle at a time.
- Human-involved control suggests speed advice rather than issuing commands, taking into account how drivers actually respond.
- Learning-based control adds AI components on top of the optimization-based controllers, covering situations where an analytical solution is hard to derive.

## Experimental Validation

### In-House Staged X-in-the-Loop Testing

Connecting a controller to every piece of real hardware at once makes failures impossible to diagnose, since any element could be responsible. This task built a staged X-in-the-loop testing capability at Argonne that introduces hardware one layer at a time, each stage testing what the previous one could not:
- Software-in-the-loop runs the control software against a fully simulated vehicle and corridor, on a desktop computer.
- V2X-in-the-loop integrates the real communication hardware, exposing its update rate and latency before any vehicle is involved.
- Vehicle-in-the-loop places a real vehicle on a chassis dynamometer, so the powertrain responds to the controller while the road and surrounding traffic remain simulated.
- Track-in-the-loop moves the vehicle onto the Argonne test track, adding the road surface, grade, and vehicle dynamics that a dynamometer cannot reproduce.

Because each stage differs from the previous one by a single element, any problem that appears can be traced to what was just added. The developed controllers were safely validated through these stages, producing energy savings measured on Argonne's own vehicles.

### Mixed-Reality Track Testing with Clemson

This task brought together Argonne's eco-driving planner with Clemson University's control expertise and track-based XIL capabilities, each side contributing what it had already built. The XIL testing enables a real vehicle to drive a real track while responding to the surrounding traffic emulated in simulation. On the testing side, a see-through mixed-reality headset brings the human into the loop, showing the driver virtual vehicles overlaid on the road ahead. On the control side, the work extended eco-driving in two directions: from longitudinal control alone to longitudinal and lateral control together, and from a single-lane simulation environment to a multi-lane one. The platform was run on a two-lane road modeled on a real Chicago corridor, reproducing the cut-ins that determine whether eco-driving helps or hinders the traffic behind it.

### All-Hardware Road Testing with Wisconsin

This task, a collaboration with the University of Wisconsin-Madison, removed simulation entirely, so every element of the experiment was physical hardware. A Level 3 automated vehicle (L3-AV) ran the eco-driving planner along a scaled-down corridor equipped with actual traffic lights, receiving signal phase and timing (SPaT) from them over production vehicle-to-infrastructure (V2I) communication radios. A second L3-AV drove ahead of it and broadcast its own state over vehicle-to-vehicle (V2V) communication, so the car-following constraint was exercised against an actual moving vehicle. The demonstration confirmed that Argonne's eco-driving planner still delivers energy savings when nothing in the loop is simulated.

## System-Level Evaluation

### CAV Mixed-Traffic Benchmark

Controllers claiming to improve mixed traffic are difficult to compare, because each study uses its own simulation, corridor, and key metric. This task released a reproducible benchmark and evaluation framework for longitudinal control of CAVs in mixed traffic. Several representative controllers were evaluated across two freeway settings, an on-ramp corridor and a calibrated stretch of Interstate 24, and scored consistently on four axes: safety, throughput and flow stability, fuel consumption, and interaction with surrounding human drivers. The analysis proceeds from controller comparison, to market penetration, to explanation of effects the models do not capture. Increasing the share of CAVs improved throughput and stability consistently, while safety and fuel outcomes varied more subtly with the modeling principle behind each controller and with the corridor being simulated.
