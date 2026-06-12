import type { PortfolioContent } from '../types'

/*
 * CONTENT - single source of truth for the portfolio.
 * Sensitivity policy applied: companies/programs named where already public
 * (DARPA Space-BACN is publicly announced by Mynaric); proprietary algorithm
 * design and internal production methods deliberately generalized to
 * subsystem-category + outcome level. Personal PII (email/phone/address/DOB)
 * intentionally omitted from the public site.
 */

export const content: PortfolioContent = {
  profile: {
    name: 'Constantin Chabirand',
    headline:
      'Embedded Systems Engineer - Safety-Critical Automotive · Space-Grade Lasercom · AI-Augmented Tooling',
    shortDescriptor: 'Embedded Systems Engineer - ASIL-D Automotive · Space Lasercom · AI-Native Development',
    bio: 'Nine years shipping production firmware - ASIL-D powertrain ECUs for Tesla, Mercedes, VW and BMW; DARPA/ESA optical-terminal control firmware; and a 60-engineer AUTOSAR practice built from zero.',
    location: 'Munich, Germany',
    availability:
      'Happily based in Munich, EU - and open to US relocation (H-1B or J-1 Research Scholar / Specialist).',
    languages: [
      'French (native)',
      'English (fluent - TOEIC 960)',
      'German (professional working proficiency)',
    ],
    education: [
      "Diplôme d'Ingénieur (MSc), Embedded Systems - ESEO, Angers, France (2012-2017)",
    ],
    certifications: [
      'Vector CEP for BSW Integration (CEP.BSWInt) - 2021, renewed 2024',
      'TOEIC 960 · Cambridge First Certificate (grade A)',
    ],
    earlier:
      'Embedded SW trainee at Bosch (AUTOSAR infotainment, end-customer GM, 2017); IoT internship at NTUST Taipei (LoRa on STM32F4, 2016); led an 8-person ESEO IoT/BLE project (Raspberry Pi, Android, Yocto).',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/constantin-chabirand-3380468b' },
      { label: 'GitHub', url: 'https://github.com/CynaCons' },
      { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/5825225/constantin-chabirand' },
    ],
  },

  current: [
    {
      title: 'Pegasus - ESA 1 Tbps Optical Test Bench',
      context: 'Mynaric · ESA ScyLight / HydRON',
      blurb:
        'Replaced SSH scripts with WebSocket/JSON-RPC daemons and an MCP layer; voice or text commands now actuate optical hardware and read back photodiodes and power meters in real time. The bench runs superchannels up to 400G.',
      tags: ['ESA', 'MCP', 'FastAPI', '400G'],
      accent: 'domain-space',
    },
    {
      title: 'Single-File Interactive Test Reports',
      context: 'Mynaric · engineering standard',
      blurb:
        'Now the Mynaric reporting standard - a full interactive app (charts, filters, raw dataset) inlined into one portable HTML file via Vite. Zero server, fully offline, shareable instantly.',
      tags: ['Vite', 'Single-file', 'Data viz'],
      accent: 'domain-ai',
    },
    {
      title: 'PowerNote & PowerPlanner',
      context: 'Personal · single-file app-files',
      blurb:
        'Self-contained "app-files" - a notes app and a planner - each shipped as one portable HTML file from a reusable Vite single-file scaffold.',
      tags: ['Vite', 'Single-file', 'TypeScript'],
      accent: 'domain-ai',
    },
  ],

  leadership: {
    title: 'The Department Backbone',
    tagline: 'One engineer to 60+ and €11.2M - founder, technical lead, and the name customers asked for.',
    metrics: ['1 → 60+ engineers', '€11.2M revenue (2023)', '3 offices: Stuttgart · Lyon · Toulouse'],
    bullets: [
      "Scaled T&S Engineering's AUTOSAR practice from 1 to 60+ engineers across Stuttgart, Lyon and Toulouse; €11.2M annual revenue.",
      'Sole author on 50+ technical-commercial pitches to OEMs and Tier 1s across Europe, North America and Asia - RFQ through close.',
      'Founded the AUTOSAR Academy (2021): internal onboarding plus a paid external training service; 26 engineers trained; adopted company-wide.',
      'Stood up the engineering backbone from zero - Jira, Bitbucket, knowledge base, hardware inventory, and remote device and license access - for three-city delivery.',
      'Built a reusable "AUTOSAR Platform" of reference implementations to speed delivery and strengthen bids.',
    ],
  },

  innovations: [
    {
      title: 'Natural-language optical bench control',
      blurb:
        'An MCP tool lets engineers drive the Pegasus bench by voice or text - the agent actuates hardware and reads back photodiodes and power meters in real time.',
      year: '2026',
      accent: 'domain-ai',
    },
    {
      title: 'Pilot-tone demodulation on bare-metal Cortex-M7',
      blurb:
        'A full DSP chain - complex mixer, band-pass, low-pass, FIR - runtime-configurable in frequency and bandwidth with no firmware rebuild; AI-assisted assembly optimisation on the SAMV71.',
      year: '2026',
      accent: 'domain-space',
    },
    {
      title: 'Polarization control - blind 4D search',
      blurb:
        'Stable left/right-hand circular polarization from a 4-parameter blind search under single-Stokes observability; a 2-pass escalation avoids flat zones and adapts to fibre disturbance at runtime.',
      year: '2026',
      accent: 'domain-space',
    },
    {
      title: 'PowerSpawn - multi-agent orchestration',
      blurb:
        'Open-source MCP server coordinating six AI models (Claude, Codex, Copilot, Grok, Gemini, Mistral) on a shared Markdown blackboard via a custom Inter-Agent Context protocol.',
      year: '2025',
      accent: 'domain-ai',
    },
  ],

  timeline: [
    {
      company: 'Mynaric · Lasercom',
      period: '2025 - present',
      accent: 'domain-space',
      commits: [
        {
          label: 'Pegasus - ESA 1 Tbps optical link',
          sublabel: 'superchannels · up to 400G · full SW re-architecture',
          domain: 'space',
          projectId: 'esa-pegasus',
        },
        {
          label: 'DARPA Space-BACN terminal firmware',
          sublabel: 'polarization · DDS pilot tones · CLS demod',
          domain: 'space',
          projectId: 'space-bacn',
        },
        {
          label: 'Production optical calibration tooling',
          sublabel: 'AI-built, per-device characterization',
          domain: 'space',
          projectId: 'optical-calibration',
        },
        {
          label: 'Radeau - in-house CANoe / CANape',
          sublabel: 'Rust + Tauri, deployed on the line',
          domain: 'ai',
          projectId: 'radeau',
        },
      ],
    },
    {
      company: 'T&S Engineering · Automotive',
      period: '2017 - 2025',
      accent: 'domain-auto',
      collapseAfter: 4,
      commits: [
        {
          label: 'AUTOSAR Practice - founded & led',
          sublabel: '1→60 engineers · €11.2M · Academy',
          domain: 'auto',
          projectId: 'autosar-practice',
        },
        {
          label: 'Hybrid powertrain ECU (eDCT) - Mercedes CLA',
          sublabel: '6-core ASIL-D · client ZF',
          domain: 'auto',
          projectId: 'edct',
        },
        {
          label: 'Battery Management ECU - Volkswagen',
          sublabel: 'ARMv8-R · 70% faster validation',
          domain: 'auto',
          projectId: 'bms',
        },
        {
          label: 'Functional-safety consulting',
          sublabel: 'fail-operational EPS · Volvo / Forvia',
          domain: 'auto',
          projectId: 'safety-consulting',
        },
        {
          label: 'Adaptive AUTOSAR - Vector Informatik',
          sublabel: 'C++17 · Yocto Linux',
          domain: 'auto',
          projectId: 'adaptive-autosar',
        },
        {
          label: 'LiDAR ECU - GMSL3 migration',
          sublabel: 'TI TDA4VM · 12 Gbps',
          domain: 'auto',
          projectId: 'lidar-gmsl3',
        },
        {
          label: 'Ultrasonic sensor ECU - Tesla',
          sublabel: 'bare-metal Cortex-M0 · DSI3',
          domain: 'auto',
          projectId: 'uss-tesla',
        },
        {
          label: 'On-board charger ECU - Continental',
          sublabel: 'ISO-15118 · first PHY bring-up',
          domain: 'auto',
          projectId: 'obc-continental',
        },
        {
          label: 'Vector integration packages - BMW (22+ ECUs)',
          sublabel: '5 MCU families',
          domain: 'auto',
          projectId: 'bmw-eip',
        },
      ],
    },
    {
      company: 'Personal · Open Source',
      period: '2025 - present',
      accent: 'domain-ai',
      collapseAfter: 3,
      commits: [
        { label: 'PowerSpawn - multi-agent MCP orchestration', domain: 'ai', projectId: 'powerspawn' },
        { label: 'PowerTimeline - versioned timeline editor', domain: 'ai', projectId: 'powertimeline' },
        { label: 'ARXMLExplorer - AUTOSAR XML editor', domain: 'ai', projectId: 'arxmlexplorer' },
        { label: 'FinOracle - on-device finance ML', domain: 'ai', projectId: 'finoracle' },
        { label: 'STM32 peripherals exploration', domain: 'ai', projectId: 'stm32-explore' },
      ],
    },
    {
      company: 'Foundations',
      period: '2016 - 2017',
      accent: 'border-active',
      commits: [
        { label: 'Embedded SW trainee - Bosch', sublabel: 'AUTOSAR infotainment migration (end-customer GM)' },
        { label: 'IoT internship - NTUST, Taipei', sublabel: 'LoRa on STM32F4' },
        { label: 'IoT / BLE project lead - ESEO', sublabel: '8-person team · Raspberry Pi · Yocto' },
      ],
    },
  ],

  domains: [
    /* ================= SPACE-TECH / LASERCOM ================= */
    {
      key: 'space',
      label: 'Space-Tech / Lasercom',
      icon: 'Satellite',
      accent: 'domain-space',
      tagline:
        'Sole firmware owner - DARPA optical terminal operational in six months, no prior lasercom background.',
      summary:
        'Sole firmware engineer on DARPA Space-BACN at Mynaric - delivered the optical-control stack (polarization, DDS pilot tones, PAT, demodulation) on ARM Cortex-M7 in roughly six months. Operated two terminals against Coherent 100G modems on SDA 4.0 Burst-Mode waveforms, tuning OSNR, BER and polarization-constellation metrics. Now extended to ESA Pegasus (ScyLight / HydRON, targeting 1 Tbps).',
      skills: [
        'Embedded C on ARM Cortex-M7 (Microchip SAMV71)',
        'Real-time DSP with ARM CMSIS-DSP (FIR/IIR, mixers, BPF/LPF)',
        'Free-space optical (FSO) control systems',
        'Polarization control firmware',
        'Pilot-tone generation & demodulation',
        'DMA-fed DAC waveform synthesis',
        'Pointing, Acquisition & Tracking (PAT) firmware',
        'Stepper-motor drive (DMA lookup-table profiles)',
        'Bare-metal real-time control loops',
        'Optical subsystem integration (VOA, tunable filters, EDFA, fast steering mirrors)',
        'Cleanroom / ESD production protocols',
      ],
      projects: [
        {
          id: 'space-bacn',
          title: 'DARPA Space-BACN - Optical Communications Terminal Firmware',
          org: 'Mynaric Lasercom (now part of Rocket Lab)',
          period: '2025 - present',
          role: 'Senior Embedded Software Engineer - sole engineer on the program',
          summary:
            "Sole firmware engineer on DARPA Space-BACN - enabling interoperable optical links between commercial and government LEO constellations. Delivered the optical-control subsystems end-to-end on ARM Cortex-M7 (SAMV71), with no prior lasercom background, in roughly six months.",
          highlights: [
            'Ramped from zero lasercom background to sole firmware owner: started on the benchtop characterizing optical features (EDFAs, fibers, beam control), then moved onto the laser terminal once produced - learning the optical-head tooling from test operators, then operating independently.',
            'Brought up polarization control and sensing, achieving stable left- and right-hand circular polarization on the link.',
            'Implemented embedded Direct Digital Synthesis (DDS) for pilot-tone generation - clean, accurate tones across a wide frequency range at negligible CPU cost.',
            'Built the demodulation chain (band-pass → mixer → low-pass): designed the filters with Constrained Least Squares, then collapsed the whole pipeline into a single pre-computed coefficient set so a tight ISR demodulates in one minimal-compute loop - hand-optimised at the assembly level (AI-assisted).',
            'Controlled EDFA power, divergent-beam and optical-filter subsystems; developed Pointing, Acquisition & Tracking (PAT) behaviour at terminal level.',
            'Operated two optical terminals to establish links on the test bed, and ran the bench against Coherent 100G source modems shooting SDA 4.0 Burst-Mode waveforms - tuning the terminal against OSNR, BER and polarization-constellation metrics.',
            'Built the supporting control app (React + Vite front end, Python back end) for AI-driven test automation, generating single-file interactive HTML test reports.',
          ],
          tech: [
            'Embedded C',
            'ARM Cortex-M7 (SAMV71)',
            'DSP / FIR',
            'Constrained Least Squares + Cholesky',
            'DDS',
            'DMA',
            'Polarization control',
            'EDFA',
            'SDA 4.0 Burst Mode',
            'Coherent 100G',
            'React + Python',
          ],
          links: [],
        },
        {
          id: 'esa-pegasus',
          title: 'Pegasus - ESA 1 Tbps Optical Terminal',
          org: 'Mynaric Lasercom (now part of Rocket Lab)',
          period: '2026 - present',
          role: 'Senior Embedded Software Engineer - software architecture',
          summary:
            "Re-architected Mynaric's ESA Pegasus bench control stack (ScyLight / HydRON, targeting 1 Tbps): replaced SSH scripts with WebSocket/JSON-RPC daemons and an MCP layer for natural-language hardware control. The bench operates wavelength superchannels up to 400G.",
          highlights: [
            'Drive the bench end-to-end: superchannels (many wavelengths in one beam), multiple laser types and modulation formats (e.g. 100G QPSK / DPSK) - reaching up to 400G in tests - across optical amplifiers, wavelength-selective switches and embedded controllers.',
            'Re-architected the control stack: replaced an SSH-and-run-a-script workflow with daemons on the embedded devices speaking WebSocket + JSON-RPC to a control tool (React front end, Python FastAPI back end).',
            'Built an MCP layer for natural-language control of the bench - engineers drive the hardware by voice or text and the agent actuates devices and reads back instruments (photodiodes, power meters).',
          ],
          tech: [
            'React',
            'Python (FastAPI)',
            'WebSocket',
            'JSON-RPC',
            'MCP',
            'Superchannels / WSS',
            'Raspberry Pi',
            'Optical amplifiers',
          ],
          links: [],
        },
        {
          id: 'optical-calibration',
          title: 'Production-Line Optical Calibration Tooling (AI-built)',
          org: 'Mynaric Lasercom (internal tooling, now part of Rocket Lab)',
          period: '2025 - 2026',
          role: 'Designer & sole developer (AI-augmented)',
          summary:
            'End-to-end production calibration tooling for tunable optical filters, composed rapidly with AI-augmented development; generates per-device lookup tables used directly in production firmware.',
          highlights: [
            'Built a complete calibration flow - instrument data parsing, optimal-mapping search, and automated lookup-table generation - in about a day using AI-augmented development.',
            'Automated per-device optical characterization, feeding device-specific tables into production firmware.',
            'Drives hardware over CAN via the in-house Radeau tool - an example of compounding AI-built tooling (Radeau itself was AI-built, then extended to enable this system).',
          ],
          tech: ['Python', 'CAN', 'Radeau', 'Optical spectrum analysis', 'AI-augmented'],
          links: [],
        },
      ],
    },

    /* ================= AUTOMOTIVE / SAFETY-CRITICAL ================= */
    {
      key: 'auto',
      label: 'Automotive / Safety-Critical',
      icon: 'Cpu',
      accent: 'domain-auto',
      tagline: 'ASIL-D production firmware, bare-metal to powertrain - five OEMs, deployed in vehicles.',
      summary:
        'Built and shipped production ECU software across every layer - AUTOSAR BSW, multicore real-time scheduling, functional-safety architecture, EV charging - on hardware from AURIX TC399 TriCore to ARM Cortex-R52 to TI TDA4VM, for Mercedes-Benz, Volkswagen, BMW, Tesla and Continental. Founded and scaled the embedded practice from 1 to 60+ engineers and €11.2M annual revenue.',
      skills: [
        'AUTOSAR Classic BSW (OS, RTE, Dcm, Dem, Com, NvM, E2E, EcuM, BswM, CanTp, SecOC, Csm)',
        'ISO 26262 functional safety to ASIL-D: MPU partitioning, E2E, watchdog stack, mixed-ASIL isolation',
        'Multicore SoCs: AURIX TC3XX (TriCore), ST SR6P6 (Cortex-R52), TI TDA4VM (A72/R5F), NXP S32K, Renesas RH850 / R-Car, ST SPC (PowerPC)',
        'Real-time scheduling: synchronized schedule tables, cross-core task chains, µs-precision timing',
        'Embedded C (expert); Assembly (ARM / TriCore startup & debug)',
        'BSW stacks: Vector MICROSAR, EB Tresos, ETAS, KPIT, Hyundai MobilGene; Vector tools (DaVinci, CANoe, CANape); CEP-certified',
        'Automotive cybersecurity: HSM/SHE, SecOC, Secure Boot/Flashing, IPSec; ISO 21434 (TARA)',
        'CAN / CAN-FD, LIN, FlexRay, J1939, Automotive Ethernet (SOME/IP, DoIP), XCP, ISO 15118 / CCS',
        'ARMv8-R hypervisor (EL1/EL2), MPU, Cortex-M/R/A families',
        'Diagnostics: UDS, OBD-on-UDS, Dcm/Dem/FiM',
        'CI/CD: Jenkins + Python + CANoe.XCP validation pipelines',
        'Debug: Lauterbach TRACE32, GLIWA T1, Greenhills, iSystem/Tasking, UDE, scope, logic analyzer',
      ],
      projects: [
        {
          id: 'edct',
          title: 'Hybrid Powertrain ECU (eDCT) - Mercedes-Benz CLA',
          org: 'T&S Engineering (client: ZF; OEM: Mercedes-Benz)',
          period: '2020 - 2024',
          role: 'BSW Architect & Technical Leader (team up to 14)',
          summary:
            "Built AUTOSAR BSW from scratch across 6 ASIL-D TriCore cores for ZF's first combined gearbox-inverter ECU; architected deterministic 6-core time-sync (sub-millisecond cross-core latency); deployed in the Mercedes-Benz hybrid CLA; led up to 14 engineers.",
          highlights: [
            'Built the full AUTOSAR BSW from scratch across 6 TriCore cores, then engineered custom scheduling middleware with synchronized schedule tables on the vehicle CAN-FD time base - sub-millisecond signal latency across all six cores.',
            'Designed mixed-ASIL safety partitioning (QM / Mixed / ASIL-D) with MPU isolation, E2E protection, watchdog stack and HSM integration; patched the Vector AUTOSAR OS in assembly to fix context-switch bit corruption on a real-time core.',
            'Engineered non-blocking asynchronous HSM/crypto processing, holding deterministic latency under 1 ms.',
            'Led CPU-load reduction taskforces cutting overall load 30%+, and resolved ~10 intermittent production-blocking timing issues over four years.',
            'Led up to 14 engineers (incl. a newly trained ZF Timișoara group), demoed designs directly to Mercedes-Benz engineering, delivered ASPICE L2 docs across the full V-cycle.',
          ],
          tech: [
            'AURIX TC399XE (6-core TriCore)',
            'AUTOSAR (Vector MICROSAR)',
            'ASIL-D / ISO 26262',
            'CAN-FD',
            'HSM / SecOC',
            'Lauterbach',
            'Assembly',
          ],
          links: [],
        },
        {
          id: 'bms',
          title: 'Battery Management System ECU - Volkswagen',
          org: 'T&S Engineering (end customer: Volkswagen)',
          period: '2024',
          role: 'Technical Leader (team of 4)',
          summary:
            "Led BSW and MCAL bring-up on ST SR6P6 (6× ARM Cortex-R52) for a VW battery-management ECU - T&S's first ARMv8-R hypervisor project - and built CI/CD validation that cut test cycles 70%.",
          highlights: [
            'Bring-up of Vector MICROSAR and ST MCAL on the SR6P6, resolving ARMv8-R hypervisor edge cases (CPU modes, prediction engine, MPU) in a direct taskforce with ARM and ST engineers to clear sporadic crashes risking the VW timeline.',
            'Patched the Vector AUTOSAR OS in assembly to fix context-switch bit corruption on ARM Cortex-R52.',
            'Delivered an automated CI/CD validation framework (Jenkins + Python + CANoe.XCP) - validation cycles cut from days to hours (~70%).',
            'Integrated ETAS CycurHSM, ST Safety Library and EL1/EL2 MPU isolation; built a virtual ECU (Vector VTT) as a formal work product.',
          ],
          tech: [
            'ST SR6P6 (Cortex-R52)',
            'ARMv8-R hypervisor',
            'Vector MICROSAR',
            'ST MCAL',
            'ETAS CycurHSM',
            'Jenkins / Python / CANoe.XCP',
            'ASIL-D',
          ],
          links: [],
        },
        {
          id: 'lidar-gmsl3',
          title: 'LiDAR ECU - GMSL3 Migration',
          org: 'T&S Engineering',
          period: '2024 - 2025',
          role: 'Lead Embedded Software Engineer',
          summary:
            'Ported a LiDAR optical data link to GMSL3 on TI TDA4VM (heterogeneous ARM A72 + R5F), integrating a Sony IMX imager over MIPI CSI-2 and achieving stable 12 Gbps pixel streaming over Ethernet.',
          highlights: [
            'Rewrote the SERDES driver stack for Analog Devices GMSL3 on TDA4VM R5F cores - 12 Gbps pixel-data streaming over Ethernet.',
            'Integrated a Sony IMX imager over MIPI CSI-2 (C-PHY/D-PHY); debugged CSI-2 timing, frame sync and lane mapping with scope and I2C analysis during bring-up.',
            'Developed state handling, diagnostics, PTP time sync and Ethernet point-cloud streaming; integrated AUTOSAR BSW (Vector) and FreeRTOS on the heterogeneous SoC.',
          ],
          tech: [
            'TI TDA4VM (A72 + R5F)',
            'GMSL3 SERDES',
            'MIPI CSI-2',
            'Sony IMX',
            'FreeRTOS',
            'AUTOSAR BSW',
            'Ethernet',
          ],
          links: [],
        },
        {
          id: 'uss-tesla',
          title: 'Ultrasonic Parking Sensor ECU - Tesla',
          org: 'T&S Engineering (chip: Elmos; OEM: Tesla)',
          period: '2020 - 2021',
          role: 'Technical Leader & SW Architect (team of 5)',
          summary:
            'Led full V-cycle development (ASPICE SWE.1-6) of bare-metal firmware for a resource-constrained ARM Cortex-M0 ultrasonic parking-sensor ECU supplied into Tesla vehicles, interfacing directly with Tesla engineering.',
          highlights: [
            'Designed and implemented complete bare-metal firmware from scratch on a 32-64 KB OTP Cortex-M0 (Elmos IP): startup code, ISR-driven DSI3 acquisition, serialization, buffer management - no RTOS, custom interrupt-driven scheduling.',
            'Led all ASPICE SWE stages (requirements → qualification test), delivering a full ASPICE-compliant documentation package.',
            'Built a Qt5/QML desktop GUI to visualize ultrasonic echo data over DSI3 for rapid firmware validation.',
          ],
          tech: ['ARM Cortex-M0 (Elmos)', 'Bare-metal C', 'DSI3', 'ASPICE SWE.1-6', 'Qt5 / QML'],
          links: [],
        },
        {
          id: 'obc-continental',
          title: 'On-Board Charger ECU Prototype - Continental',
          org: 'T&S Engineering (end customer: Continental)',
          period: '2023',
          role: 'Software Development Lead (team of 3)',
          summary:
            'Prototyped an EV On-Board Charger ECU on AURIX TC387 using Vector SmartCharging - first bring-up of a Lumissil HomePlug GreenPHY transceiver at Continental - validating the full SLAC/CCS/ISO-15118 charging stack.',
          highlights: [
            'First-ever bring-up of the Lumissil IS32CG5317 HomePlug GreenPHY transceiver (RGMII) at Continental: datasheet analysis, SPI driver, signal-integrity validation.',
            'Integrated and validated the Vector SmartCharging stack (veSCC, SLAC) plus ISO-15118 and CCS on TC387.',
            'Built a full EVSE simulation in CAPL/CANoe for stand-alone OBC validation without physical charging infrastructure.',
          ],
          tech: [
            'AURIX TC387 (TriCore)',
            'Vector SmartCharging',
            'ISO-15118 / CCS',
            'Lumissil HPGP PHY',
            'EB Tresos MCAL',
            'CANoe / CAPL',
          ],
          links: [],
        },
        {
          id: 'bmw-eip',
          title: 'Vector Integration Packages - BMW (22+ ECUs)',
          org: 'T&S Engineering (client: Vector; OEM: BMW)',
          period: '2017 - 2019',
          role: 'Technical Leader & Project Manager (team of 6)',
          summary:
            'Directed a team integrating Vector Extended Integration Packages across 22+ BMW production ECUs spanning five microcontroller families, including complex ADAS SoCs.',
          highlights: [
            'Integrated Vector AUTOSAR BSW and BMW BAC components across 22+ ECUs (TriCore, RH850, NXP S32K, IMX6, R-Car3) - repeatable, validated integration across diverse targets.',
            'Participated in BSW bring-up of complex ADAS SoCs (camera, radar, TCU, LiDAR) and implemented SOME/IP over Automotive Ethernet.',
            'Managed planning, customer reporting, debug sessions and Factory Acceptance Test validations with E-Sys.',
          ],
          tech: [
            'AURIX TriCore',
            'Renesas RH850',
            'NXP S32K',
            'IMX6 / R-Car3',
            'Vector MICROSAR',
            'SOME/IP',
            'UDS / Bootloader',
          ],
          links: [],
        },
        {
          id: 'adaptive-autosar',
          title: 'Adaptive AUTOSAR Validation - Vector Informatik',
          org: 'T&S Engineering (client: Vector Informatik)',
          period: '2019 - 2020',
          role: 'Embedded Software Engineer (C++17 / Linux)',
          summary:
            "Product validation of Vector's Adaptive MICROSAR stack on a Yocto-Linux target - the practice's deep dive into POSIX / Adaptive AUTOSAR alongside its Classic work, for its first customer, Vector Informatik.",
          highlights: [
            'Built a Yocto-based Linux image for an Intel Minnowboard and deployed the Adaptive MICROSAR (aMSR) stack end-to-end.',
            'Developed C++17 Adaptive Applications exercising ara::com, SOME/IP, Persistency, Network Management, Execution Management, Diagnostics and Crypto.',
            'Analyzed TCP/IP and UDP traffic with CANoe and Wireshark during functional-cluster validation.',
          ],
          tech: [
            'Adaptive AUTOSAR (aMSR)',
            'C++17',
            'Yocto / Linux',
            'SOME/IP',
            'ara::com',
            'Intel Minnowboard',
            'Wireshark',
          ],
          links: [],
        },
        {
          id: 'autosar-practice',
          title: 'AUTOSAR Practice - Department Founding & Academy',
          org: 'T&S Engineering, Stuttgart',
          period: '2017 - 2025',
          role: 'Senior Embedded Software Engineer | AUTOSAR Practice Leader',
          summary:
            "Founded and scaled T&S Engineering's AUTOSAR engineering-services practice from a single engineer to a 60+ person team generating €11.2M annual revenue (2023), and created the T&S AUTOSAR Academy that became the company-wide training standard.",
          highlights: [
            'Scaled the AUTOSAR Practice from 1 to 60+ permanent engineers across Stuttgart, Lyon and Toulouse - the first and most successful practice of its kind at T&S.',
            'Vector Informatik was the first customer (2018); the practice went on to serve Mercedes/Daimler, VW, BMW, Renault, Stellantis, Volvo and Hyundai, working across their OEM-specific AUTOSAR extensions.',
            'Founded the T&S AUTOSAR Academy (2021) - internal onboarding plus a paid external training service for customers - and trained 26 engineers; the model was standardized company-wide.',
            'Built an internal "AUTOSAR Platform" of reusable reference implementations and example projects to accelerate delivery and strengthen bids.',
            'Reached €11.2M annual revenue (2023) via a service-supplier model (full project ownership, not staff aug); delivered 50+ technical presentations to OEMs and Tier 1s across Europe, the US, Israel and Korea.',
            'Among the first engineering-service providers to earn the Vector CEP for BSW Integration (2021); closed the engagement with a top-grade reference letter.',
          ],
          tech: [
            'AUTOSAR Classic / Adaptive',
            'Vector MICROSAR',
            'ISO 26262',
            'ISO 21434',
            'ASPICE L2',
            'Vector CEP',
          ],
          links: [
            {
              label: 'T&S AUTOSAR Academy (press)',
              url: 'https://www.technologyandstrategy.com/news/discover-the-t-s-autosar-academy',
            },
          ],
        },
        {
          id: 'safety-consulting',
          title: 'Functional-Safety Consulting - Fail-Operational & Cybersecurity',
          org: 'T&S Engineering (clients incl. Sonceboz/Volvo Trucks, Forvia)',
          period: '2022 - 2025',
          role: 'Functional-Safety Architect & Consultant',
          summary:
            'Advised Tier 1 and OEM clients on functional-safety and cybersecurity architecture, including a fail-operational electric power-steering system and a safety roadmap that won new business.',
          highlights: [
            'Defined a fail-operational safety architecture from scratch for an electric power-steering ECU (client Sonceboz, end customer Volvo Trucks): HARA, E2E protection design, coordination with Vector on early fail-operational BSW.',
            "Authored a 'Roadmap to Safety' for a motor-control ECU at Forvia that won the engagement.",
            'Advised on BSW integration, ISO 26262, ISO 21434 cybersecurity and Software-Defined-Vehicle strategy.',
          ],
          tech: ['ISO 26262', 'Fail-Operational', 'HARA', 'E2E protection', 'ISO 21434'],
          links: [],
        },
      ],
    },

    /* ================= AI TOOLING & PERSONAL ================= */
    {
      key: 'ai',
      label: 'AI Tooling & Personal',
      icon: 'Terminal',
      accent: 'domain-ai',
      tagline: 'Production tools that cut five-figure licensing costs and orchestrate six AI models.',
      summary:
        'Built and shipped multi-agent orchestration (PowerSpawn), desktop tooling that eliminates costly vendor licenses (Radeau, SIL-Twin, ARXMLExplorer), and full-stack web apps validated by hundreds of automated tests.',
      skills: [
        'Multi-agent AI orchestration (MCP; Claude, Codex, Copilot, Grok, Gemini, Mistral)',
        'Python',
        'Rust / Tauri',
        'React 19 / TypeScript / Firebase',
        'Playwright E2E testing',
        'Dart / Flutter',
        'Embedded C (STM32)',
        'LLM API integration (Anthropic, OpenAI, Gemini, Mistral)',
        'Context engineering via shared Markdown state',
      ],
      projects: [
        {
          id: 'powerspawn',
          title: 'PowerSpawn',
          org: 'Open source',
          period: '2025 - present',
          role: 'Sole architect & author',
          summary:
            'A multi-agent AI orchestration system that coordinates Claude Code, Codex CLI, Copilot CLI, Mistral, Gemini and Grok on a shared blackboard using a custom Inter-Agent Context protocol over MCP.',
          highlights: [
            'Coordinates six AI models across two agent classes: CLI agents that edit files and run commands, and API agents that provide web-grounded responses.',
            'Stores shared state in Markdown that survives crashes, enables deterministic audit trails, and extends effective context across sessions.',
            'Decomposes large tasks across specialized agents with a coordinator - directly addressing single-agent context-window limits.',
          ],
          tech: ['Python', 'MCP', 'Claude Code', 'Codex CLI', 'Copilot CLI', 'Gemini / Grok / Mistral APIs'],
          links: [
            { label: 'GitHub', url: 'https://github.com/CynaCons/PowerSpawn' },
            { label: 'Website', url: 'https://powerspawn.com' },
          ],
        },
        {
          id: 'powertimeline',
          title: 'PowerTimeline',
          org: 'Open source',
          period: '2025 - present',
          role: 'Sole architect & author',
          summary:
            'A collaborative roadmap & history timeline editor with Git-like version-control semantics - fork, merge and branch timelines the way developers branch code. Live in production.',
          highlights: [
            'Validated by 400+ Playwright end-to-end tests across the full surface - evidence that AI-generated code can meet production standards under rigorous human-directed testing.',
            'Integrates Gemini for content assistance and Firebase for real-time collaboration.',
            'Built with an ASPICE method and full requirements traceability: SRS → Code → Tests.',
          ],
          tech: ['React 19', 'TypeScript', 'Firebase', 'Gemini API', 'Playwright', 'Vite'],
          links: [
            { label: 'GitHub', url: 'https://github.com/CynaCons/powertimeline' },
            { label: 'Website', url: 'https://powertimeline.com' },
          ],
        },
        {
          id: 'radeau',
          title: 'Radeau',
          org: 'Mynaric (internal tool, now part of Rocket Lab)',
          period: '2025',
          role: 'Sole architect & author (AI-augmented)',
          summary:
            'A modern Rust/Tauri desktop app for CAN/CAN-FD trace analysis and ECU control, built as a production replacement for Vector CANoe at the lasercom facility.',
          highlights: [
            'Deployed on the production line; saves ~$10K per user per year in CANoe licensing for core trace-analysis and calibration use.',
            'Built in about four weeks with AI-assisted development.',
            'Exposes a Python automation API and was extended to drive optical-filter calibration and a software-in-the-loop digital twin.',
          ],
          tech: ['Rust', 'Tauri', 'Python', 'CAN / CAN-FD', 'JSON-RPC'],
          links: [],
        },
        {
          id: 'sil-twin',
          title: 'SIL-Twin',
          org: 'Mynaric (internal tool, now part of Rocket Lab)',
          period: '2025',
          role: 'Sole architect & author (AI-augmented)',
          summary:
            'A software-in-the-loop digital twin that runs real ECU firmware on a PC via a custom SIL-MCAL, integrated into Radeau over JSON-RPC - replacing ~€8K/seat/year commercial virtual-ECU tooling.',
          highlights: [
            'Custom SIL-MCAL replaces the microcontroller HAL so production firmware runs unmodified on a PC.',
            'Mixes real and virtual CAN nodes on the same bus simultaneously - not available in the commercial tools it replaces.',
            'Unblocked firmware development during a hardware shortage, saving ~€8K per seat per year.',
          ],
          tech: ['Embedded C', 'Rust', 'JSON-RPC', 'CAN', 'Virtual ECU / SIL'],
          links: [],
        },
        {
          id: 'arxmlexplorer',
          title: 'ARXMLExplorer',
          org: 'Open source',
          period: '2025',
          role: 'Sole architect & author',
          summary:
            'A free, cross-platform AUTOSAR XML editor & viewer with XSD validation, handling files over 100 MB - a zero-cost alternative to per-seat tooling.',
          highlights: [
            'Handles ARXML files larger than 100 MB with optimized parsing and rendering.',
            'XSD validation, undo/redo, cross-platform (Windows/macOS/Linux) via Flutter.',
            'Used internally at T&S when Vector AUTOSAR licenses were expiring.',
          ],
          tech: ['Dart', 'Flutter'],
          links: [{ label: 'GitHub', url: 'https://github.com/CynaCons/ARXMLExplorer' }],
        },
        {
          id: 'finoracle',
          title: 'FinOracle',
          org: 'Open source',
          period: '2025',
          role: 'Sole architect & author',
          summary:
            'A privacy-first personal-finance analytics app with on-device ML transaction categorization, processing 3,000+ transactions entirely locally.',
          highlights: [
            'Processes 3,000+ transactions with ML categorization, all computation local to preserve privacy.',
            'React + TypeScript, no third-party data sharing.',
          ],
          tech: ['React', 'TypeScript', 'On-device ML'],
          links: [{ label: 'GitHub', url: 'https://github.com/CynaCons/FinOracle' }],
        },
        {
          id: 'stm32-explore',
          title: 'STM32 Peripherals Exploration',
          org: 'Open source',
          period: '2025',
          role: 'Author',
          summary:
            'An embedded-C learning & demonstration repo for STM32 peripheral development - timers, UART, SPI, I2C and interrupt-driven design patterns.',
          highlights: [
            'Bare-metal embedded C targeting STM32 hardware.',
            'Documents peripheral init and ISR-driven data paths at the register level.',
          ],
          tech: ['C', 'STM32', 'Bare-metal'],
          links: [{ label: 'GitHub', url: 'https://github.com/CynaCons/STM32-peripherals-exploration' }],
        },
      ],
    },
  ],
}
