export const products = [
  {
    id: 1,
    name: "ICARUS",
    title: "VTOL LONG-RANGE UAV",
    category: "Defense Series",
    url: "/products/icarus",
    layout: "left",
    description:
      "Advanced vertical take-off and landing unmanned aerial vehicle designed for long-range missions with exceptional flight performance and reliability.",

    specs: ["VTOL Capable", "Autopilot Mode", "Long Range"],
    image: "/drones/Icarus.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",

    gallery: [
      {
        image: "/dronesGallery/ICARUS/icarus.jpeg",
        caption: "Icarus prototype - Frame 1",
      },
      {
        image: "/dronesGallery/ICARUS/icarus2.jpeg",
        caption: "Icarus prototype - Frame 2",
      },
      {
        image: "/dronesGallery/ICARUS/Icarus3.jpeg",
        caption: " Icarus prototype - Frame 3",
      },
      {
        image: "/dronesGallery/ICARUS/Icarus4.jpg",
        caption: " Icarus prototype - Frame 4  ",
      },
    ],

    videos: [
      {
        title: "Operational Flight Test ",
        url: "/dronesGallery/ICARUS/Icarus1.mp4",
        description:
          "Drone performance testing in high-altitude mountain terrain.",
      },
      {
        title: "Operational Flight Test",
        url: "/dronesGallery/ICARUS/Icarus2.mp4",
        description: "Drone performance testing.",
      },
      {
        title: "Operational Flight Test",
        url: "/dronesGallery/ICARUS/icarus3.mp4",
        description:
          "Complete VTOL takeoff, transition to forward flight, and smooth landing sequence.",
      },
    ],

    // keyFeatures: [
    //   {
    //     icon: <AiOutlineFieldTime />,
    //     text: "50–60 min flight time (up to 80 km range)",
    //   },
    //   {
    //     icon: <GiElectric />,
    //     text: "Configurable for both electric and gas power with composite construction",
    //   },
    //   {
    //     icon: <RiRadioLine />,
    //     text: "Advanced GPS communication with RF backup",
    //   },
    //   // {
    //   //   icon: <GiSteelClaws />,
    //   //   text: "Composite carbon fiber + fiberglass construction",
    //   // },
    // ],

    //  Technical Specifications

    generalSpecifications: {
      wingspan: "2985 mm (118.11 inches)",
      length: "2030 mm (79.92 inches)",
      height: "610 mm (24 inches)",
      // flyingWeight: "~4.4 kg",
      FrameWeight: " 7.4 kg",
      construction: "Composite material (carbon fiber/fiberglass)",
      power: "Configurable both for electric and engine  power",
      assembly: "Typically provided as an ARF (Almost Ready to Fly) kit",
    },

    operationalCharacteristics: {
      payloadCapacity: " up to 4 kg",
      batteryCapacity: "Larger capacity supports longer flights",
      motorEfficiency: "High-efficiency motors",
      autopilotUsage:
        "Using autopilot and automation in UAVs offers greater safety, efficiency, and reliability. Autopilot reduces human error by maintaining precise flight paths and stabilizing the UAV",
      flightConditions:
        "The UAV is capable of operating in rain and extreme temperatures; however, such conditions, along with high-altitude environments, may affect overall performance",
    },

    additionalKeyComponents: {
      heading: "Composite Model Characteristics",
      paragraph:
        "Composite materials (like carbon fiber or fiberglass) are lightweight yet strong. They enhance structural stiffness, improve durability and are better suited for mounting autopilot components (such as flight controllers, GPS and telemetry). The airframe is adequately  designed to manage vibration from motors and payloads.",
    },

    radioRequirementsAndFlightTime: {
      heading: "Radio Requirements & Flight Time",
      paragraph: [
        "Communication between Icarus and the ground station is through the GPS communication system. RF signals can be used for communication as well. ",
        "The flight time of a VTOL composite model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and payload. A typical flight time is approximately 50–60 min and up to 60-80 km under standard conditions with single charge. ",
      ],
    },

    ardupilot: {
      heading: "Ardupilot",
      paragraph:
        "An open-source autopilot platform that supports multiple flight modes, including Auto mode, Loiter, Stabilize, and Return-to-Launch Pad. Ideal for waypoint missions.",
    },

    flightController: {
      heading: "Flight Controller",
      paragraph:
        "A widely used flight controller compatible with Ardupilot. It provides high processing power, accurate sensor data and real-time control for autonomous flights.",
    },

    advantagesData: {
      heading: "Advantages of a Composite Model Over Traditional Balsa:",
      items: [
        "Higher Strength-to-Weight Ratio: Composite materials are stronger yet lighter.",
        "Better Durability: More resistant to wear, stress and impact of crashes.",
        "Enhanced Aerodynamics: Smooth surfaces reduce drag and improve airflow.",
        "Structural Rigidity: Reduces vibration, ideal for high-precision autopilot operations.",
        "Weather Resistance: Less sensitive to humidity and temperature compared to balsa.",
        "More Payload Capability: Can carry heavier electronics (cameras, sensors, telemetry modules) without compromising structure.",
        "Improved Longevity: Composite airframes last longer",
      ],
    },

    // radioRequirementsAndFlightPerformance: {
    //   communicationSystem:
    //     "Icarus connects easily through ground station via multiple communication options. You can operate it using the aircraft’s Wi-Fi, control it remotely via UDP communication from anywhere with internet access, or use RF signals.",
    //   flightCapabilities:
    //     "The flight time of a VTOL composite model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and aerodynamic design. A typical flight time is approximately 50-60 min and up to 60-80 km under standard conditions with single charge. The ground speed is 30 m/s which depends on headwind and tail wind.",
    // },
  },
  {
    id: 2,
    name: "ICARUS-II",
    title: "VTOL LONG-RANGE UAV",
    category: "Defense Series",
    url: "/products/IcarusII",
    layout: "left",
    description:
      "Advanced vertical take-off and landing unmanned aerial vehicle designed for long-range missions with exceptional flight performance and reliability.",

    specs: ["VTOL Capable", "Autopilot Mode", "Long Range"],
    image: "/drones/ICARUS-II.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",

    // gallery: [
    //   {
    //     image:
    //       "	https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_5-1-1536x1152.jpg",
    //     caption: "Icarus landed view",
    //   },
    //   {
    //     image:
    //       "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-09-17-164335-rbvy6y46mwxiw845rw74fetnu52t581fv9iwdcyid2.png",
    //     caption: "High-altitude operational view",
    //   },
    //   {
    //     image:
    //       "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Icarus_New-Ver_Frame_3-rbvxw33bnu28qfw5776bm5hwpum474x3pi4wq92a9i.jpg",
    //     caption: "New Icarus prototype - Frame 3",
    //   },
    // ],

    // videos: [
    //   {
    //     title: "Operational Flight Test",
    //     url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_Flying_1.mp4",
    //     description:
    //       "Drone performance testing in high-altitude mountain terrain.",
    //   },
    //   {
    //     title: "Flight Demonstration",
    //     url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_3.mp4",
    //     description:
    //       "Complete VTOL takeoff, transition to forward flight, and smooth landing sequence.",
    //   },
    // ],

    // keyFeatures: [
    //   {
    //     icon: <AiOutlineFieldTime />,
    //     text: "50–60 min flight time (up to 80 km range)",
    //   },
    //   {
    //     icon: <GiElectric />,
    //     text: "Configurable for both electric and gas power with composite construction",
    //   },
    //   {
    //     icon: <RiRadioLine />,
    //     text: "Advanced GPS communication with RF backup",
    //   },
    //   // {
    //   //   icon: <GiSteelClaws />,
    //   //   text: "Composite carbon fiber + fiberglass construction",
    //   // },
    // ],

    //  Technical Specifications

    generalSpecifications: {
      wingspan: " 3000mm (118.11 inches)  ",
      length: "2030 mm (79.92 inches)",
      height: "610 mm (24 inches)",
      frameWeight: "7.4 kg",
      // flyingWeight: "~4.4 kg",
      construction: "Composite material (carbon fiber/fiberglass)",
      power: "Configurable both for electric and engine  power",
      assembly: "Typically provided as an ARF (Almost Ready to Fly) kit",
    },

    operationalCharacteristics: {
      payloadCapacity: " Up to 4 kg",
      batteryCapacity: "Larger capacity supports longer flights",
      motorEfficiency: "High-efficiency motors",
      autopilotUsage:
        "Using autopilot and automation in UAVs offers greater safety, efficiency, and reliability. Autopilot reduces human error by maintaining precise flight paths and stabilizing the UAV",
      flightConditions:
        "The UAV is capable of operating in rain and extreme temperatures; however, such conditions, along with high-altitude environments, may affect overall performance",
    },

    additionalKeyComponents: {
      heading: "Composite Model Characteristics",
      paragraph:
        "Composite materials (like carbon fiber or fiberglass) are lightweight yet strong. They enhance structural stiffness, improve durability and are better suited for mounting autopilot components (such as flight controllers, GPS and telemetry). The airframe is adequately  designed to manage vibration from motors and payloads.",
    },

    radioRequirementsAndFlightTime: {
      heading: "Radio Requirements & Flight Time",
      paragraph: [
        "Communication between Icarus and the ground station is through the GPS communication system. RF signals can be used for communication as well.  ",
        "The flight time of a VTOL composite model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and payload. A typical flight time is approximately 50–60 min and up to 60-80 km under standard conditions with single charge. ",
      ],
    },

    ardupilot: {
      heading: "Ardupilot",
      paragraph:
        "An open-source autopilot platform that supports multiple flight modes, including Auto mode, Loiter, Stabilize, and Return-to-Launch Pad. Ideal for waypoint missions.",
    },

    flightController: {
      heading: "Flight Controller",
      paragraph:
        "A widely used flight controller compatible with Ardupilot. It provides high processing power, accurate sensor data and real-time control for autonomous flights.",
    },

    advantagesData: {
      heading: "Advantages of a Composite Model Over Traditional Balsa:",
      items: [
        "Higher Strength-to-Weight Ratio: Composite materials are stronger yet lighter.",
        "Better Durability: More resistant to wear, stress and impact of crashes.",
        "Enhanced Aerodynamics: Smooth surfaces reduce drag and improve airflow.",
        "Structural Rigidity: Reduces vibration, ideal for high-precision autopilot operations.",
        "Weather Resistance: Less sensitive to humidity and temperature compared to balsa.",
        "More Payload Capability: Can carry heavier electronics (cameras, sensors, telemetry modules) without compromising structure.",
        "Improved Longevity: Composite airframes last longer",
      ],
    },

    // flightCharacteristics: {
    //   payloadCapacity:
    //     "Upto 3 kg (if we increase the payload, it will reduce the flight time)",
    //   batteryCapacity: "Larger capacity supports longer flight",
    //   motorEfficiency: "High-efficiency motors produce more thrust.",
    //   aircraftDesign:
    //     "Weight, drag, and airframe shape directly affect energy usage",
    //   autopilotUsage:
    //     "Autopilots help stabilize flight and can improve efficiency and reduce the  time and efforts",
    //   flightConditions:
    //     " Heavy Wind, temperature, and altitude can influence overall performance, both VTOL and Non VTOL",
    //   // vtolPropeller: "22×7.4 T-Motor",
    //   // battery: "25.2V 6S 22000mAh LiPo × 2",
    //   // servos: "HITECH D85MG (6 total)",
    // },

    // radioRequirementsAndFlightPerformance: {
    //   communicationSystem:
    //     "Icarus connects easily through ground station via multiple communication options. You can operate it using the aircraft’s Wi-Fi, control it remotely via UDP communication from anywhere with internet access, or use RF signals.",
    //   flightCapabilities:
    //     "The flight time of a VTOL composite model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and aerodynamic design. A typical flight time is approximately 50-60 min and up to 60-80 km under standard conditions with single charge. The ground speed is 30 m/s which depends on headwind and tail wind.",
    // },
  },
  {
    id: 3,
    name: "EAGLE EYE",
    title: " MID-RANGE FIXED-WING UAV",
    category: "Defense Series",
    url: "/products/eagle-eye",
    description:
      "Advanced mid-range fixed-wing unmanned aerial vehicle designed for reliable performance with exceptional flight efficiency and composite construction.",
    layout: "left",
    specs: ["Fixed Wing", "Autopilot Mode", "RF + GPS System"],
    image: "/drones/EAGLE EYE.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",

    //  Image gallery
    // gallery: [
    //   {
    //     image: "https://weevildrone.co.in/wp-content/uploads/2025/07/i21.jpg",
    //     caption: "Eagle Eye UAV side view",
    //   },
    //   // { image: "eagle_flight.jpg", caption: "In-flight operational view" },
    // ],

    // // Videos
    // videos: [
    //   {
    //     title: "Operational Flight Test",
    //     url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Gandiva_2.mp4#t=1,20",
    //     description: "Watch the Eagle Eye UAV in real test flight conditions.",
    //   },
    // ],

    //  Key Features
    // keyFeatures: [
    //   {
    //     icon: <AiOutlineFieldTime />,
    //     text: "Optimized flight duration with reliable performance under standard conditions",
    //   },
    //   {
    //     icon: <GiElectric />,
    //     text: "Rechargeable battery system with composite balsa wood construction",
    //   },
    //   {
    //     icon: <RiRadioLine />,
    //     text: "Advanced GPS communication system designed for reliable operation in busy environments",
    //   },
    //   // {
    //   //   icon: <GiWoodBeam />,
    //   //   text: "Composite last-cut balsa wood construction",
    //   // },
    // ],

    // General Specifications
    generalSpecifications: {
      wingspan: " 2000 mm (78.74 inches)",
      length: "1900 mm (75 inches)  ",
      height: "355 mm (14inches) ",
      frameWeight: "~ Up To 3 kg ",
      // flyingWeight: "~3 kg",
      construction: "Composite material or Laser-cut balsa wood",
      power: " Rechargeable battery",
      assembly: " Typically provided as an ARF (Almost Ready to Fly) kit",
    },

    flightCharacteristics: {
      payloadCapacity: "Upto 3 kg ",
      batteryCapacity: "Larger capacity supports longer flight",
      motorEfficiency: "High-efficiency motors produce more thrust",
      aircraftDesign:
        "Weight, drag, and airframe shape directly affect energy usage",
      autopilotUsage:
        "Autopilots help stabilize flight and can improve efficiency and reduce the  time and efforts",
      flightConditions:
        " Heavy Wind, temperature, and altitude can influence overall performance, both VTOL and Non VTOL",
      // vtolPropeller: "22×7.4 T-Motor",
      // battery: "25.2V 6S 22000mAh LiPo × 2",
      // servos: "HITECH D85MG (6 total)",
    },

    additionalKeyComponents: {
      heading: "Composite Model Characteristics:",
      paragraph:
        "Composite materials (like carbon fiber or fiberglass) are lightweight yet strong. They enhance structural stiffness, improve durability and are better suited for mounting autopilot components (such as flight controllers, GPS and telemetry). The airframe  is adequately  designed to manage vibration from motors and payloads.",
    },

    radioRequirementsAndFlightTime: {
      heading: "Radio Requirements & Flight Time",
      paragraph: [
        "RF signals are used for communication between the Eagle Eye and the ground control station. These signals are used to transmit control commands and receive data from the Eagle Eye. The specific RF signatures used by the Eagle Eye are designed to be reliable even in busy environments. GPS communication also can be used on a need basis.",
        "The flight time of the Eagle Eye operating in autopilot mode depends on several factors such as battery capacity, motor efficiency. A typical flight time is approximately Up to 40 min and up to 30-50 km under standard conditions with single charge.",
      ],
    },

    ardupilot: {
      heading: "Ardupilot",
      paragraph:
        "An open-source autopilot platform that supports multiple flight modes, including Auto mode, Loiter, Stabilize, and Return-to-Launch. Ideal for waypoint missions.",
    },

    flightController: {
      heading: "Flight Controller",
      paragraph:
        "A widely used flight controller compatible with Ardupilot. It provides high processing power, accurate sensor data and real-time control for autonomous flights.",
    },

    carbonFiberModelCharacteristics: {
      heading: "Carbon Fiber Model Characteristics",
      paragraph:
        "Carbon fiber is exceptionally strong and stiff relative to its weight, making it an excellent material for high-performance model aircraft. Its superior strength-to-weight ratio allows the airframe to withstand significant aerodynamic loads, vibrations, and stresses from autopilot components or propulsion systems. Unlike balsa, carbon fiber is far less prone to warping or structural fatigue, providing long-term durability and consistent performance. ",
    },

    // radioRequirementsAndFlightPerformance: {
    //   communicationSystem:
    //     "RF signals are used for communication between the Eagle Eye and the ground control station. These signals are used to transmit flight commands and receive telemetry data from the UAV. GPS communication can be used as an autopilot mode.",
    //   flightCapabilities:
    //     "The flight time of the Eagle Eye balsa & plywood model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and aerodynamic design. A typical flight time is approximately 50-60 min and up to 60-80 km under standard conditions with single charge. The ground speed is 30 m/s which depends on headwind and tail wind.",
    // },
  },

  {
    id: 4,
    name: "NAYANAVAT",
    title: "OS 0.46 / 0.56 - FUEL-BASED UAV",
    category: "Training Series",
    url: "/products/nayanavat",
    description:
      "Advanced balsa wood based fuel-driven unmanned aerial vehicle designed for military training applications, offering safer and more cost-effective target practice with realistic flight characteristics.",

    specs: ["Fuel Powered", "Military Training", "High Durability"],
    image: "/drones/NAYANAVAT.png",
    color: "from-red-600 to-orange-500",
    accent: "bg-red-600",

    //  Media Gallery
    gallery: [
      {
        image: "/dronesGallery/NAYANAVAT/nayanavat.jpg",
        caption: "Nayanavat Side View",
      },
      {
        image: "/dronesGallery/NAYANAVAT/nayanavat2.png",
        caption: "Nayanavat View",
      },
      {
        image: "/dronesGallery/NAYANAVAT/nayanavat3.jpg",
        caption: "Nayanavat engine",
      },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/1-Bengal-Air-NCC_Training_4-Trim.mp4#t=1,20",
        description: "Watch the Nayanavat demonstration.",
      },
    ],

    //  Key Features with React Icons
    // keyFeatures: [
    //   {
    //     icon: <AiOutlineFieldTime />,
    //     text: "15-minute flight time with 2kg payload capacity",
    //   },
    //   {
    //     icon: <GiGasPump />,
    //     text: "Fuel-based power with OS 0.46 / 0.56 gasoline engine",
    //   },
    //   {
    //     icon: <GiTargetDummy />,
    //     text: "Frequently used for target practice in military training, offering safer alternatives to manned targets",
    //   },
    //   // {
    //   //   icon: <GiWoodBeam />,
    //   //   text: "Durable balsa wood and plywood construction",
    //   // },
    // ],

    //  Technical Specifications
    generalSpecifications: {
      wingspan: "1500 mm (59.05 inches)",
      length: "1160 mm (45.66 inches)",
      height: "260 mm (10.23 inches)",
      frameWeight: "3 kg",
      construction: "Balsa wood and plywood",
      power: "OS 0.46 / 0.56 engine",
      assembly: "Typically provided as an ARF (Almost Ready to Fly) kit ",
      fuelTank: "250 ml",
      maximumHeightReached: "Depend on eyesight",
      maximumFlightTime: "15 minutes ",
      MaximumPayload: "2 Kg",
    },

    // performanceSpecifications: {
    //   serviceCeiling: "3000 m",
    //   maxHeight: "Depends on eyesight",
    //   maxFlightTime: "15 minutes",
    //   maxPayload: "2 kg",
    //   engineType: "OS 0.46 / 0.56 gasoline engine",
    //   material: "Balsa wood and plywood construction",
    // },

    //  Additional Information Section

    additionalKeyComponents: {
      heading: "Additional Key Components",
      paragraph:
        "This drone is frequently used for target practice in military training, offering a safer and more cost-effective alternative to using live aircraft or manned targets. These drones, often referred to as target drones, are designed to mimic the flight characteristics and radar signatures of various aircraft, including fighter jets, allowing for realistic training scenarios.",
    },

    advantagesData: {
      heading: "Benefits of using this drone for target practice :",
      items: [
        "Reduced risk : Training with drones eliminates the danger associated with using manned aircraft or live targets, minimizing the potential for accidents or casualties. ",
        "Cost-effectiveness : Drones are generally more affordable to operate and maintain than manned aircraft or other live targets, making them a more economical option for large-scale training exercises. ",
        "Realistic simulation : Drones can be equipped with advanced technology to simulate the radar cross-section, infrared signature, and flight characteristics of various aircraft, providing a more realistic training experience.",
        "Versatility : Drones can be customized with various payloads, including electronic countermeasures, decoy systems, and even explosive warheads, allowing for a wide range of training scenarios. ",
        "Safety features : Drones can be equipped with safety features to ensure controlled and secure training environments, minimizing the risk of unintended damage or harm. ",
        "Autopilot Usage : Using autopilot and automation in UAVs offers greater safety, efficiency, and reliability. Autopilot reduces human error by maintaining precise flight paths and stabilizing the UAV.",
      ],
    },

    // additionalKeyComponentsAndApplications: {
    //   militaryTrainingApplications:
    //     "This drone is frequently used for target practice in military training, offering a safer and more cost-effective alternative to manned targets. These drones, often referred to as target drones, are designed to mimic the flight characteristics and radar signatures of various aircraft, including fighter jets, allowing for realistic training scenarios.",
    //   keyComponents:
    //     "The Nayanavat OS features robust balsa wood and plywood construction designed to withstand training conditions. The gasoline engine provides reliable power delivery, while the compact design allows for easy transport and deployment in various training environments. Maximum payload capacity of 2kg enables additional equipment integration as needed.",
    // },
  },

  {
    id: 5,
    name: "GANDIVA",
    title: "Interceptor Quadcopter",
    category: "Defense Series",
    url: "/products/gandiva",
    description:
      "Advanced carbon fiber 450 class quadcopter with integrated radar detection capabilities, designed for high-speed interception missions and swarm deployment operations.",
    layout: "left",
    specs: ["High Speed", "Radar Detection", "Swarm Deployment"],
    image: "/drones/GANDIVA.png",
    color: "from-gray-700 to-gray-900",
    accent: "bg-gray-700",

    //  Photo Gallery
    gallery: [
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/2025/09/Gandive_6.jpg",
        caption: "Gandiva landed view",
      },
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-09-17-145242-rbvtfn132wf8ymy73cfvi52ed3flb2yjbda6owyid2.png",
        caption: "High-altitude operational view",
      },
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-09-17-150359-rbvtu2tu2a6tazz5s34kazwav69kjpa3mu1p2xjss6.png",
        caption: "Radar simulation view",
      },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Gandiva_2.mp4#t=1,20",
        description:
          "Watch the Gandiva demonstrate its high-speed interception capabilities and autonomous flight modes.",
      },
      {
        title: "Radar Integration Demo",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Gandiva_Radar-side-simulation-Trim.mp4",
        description:
          "Detailed walkthrough of the radar detection system and autonomous target engagement workflow.",
      },
    ],

    // Key Features with Icons
    // keyFeatures: [
    //   {
    //     icon: <GiJetFighter />,
    //     text: "High-speed 25–35 m/s (90–125 km/h) interception performance",
    //   },
    //   {
    //     icon: <RiRadarLine />,
    //     text: "Advanced radar detection capabilities with 5-10 km range for small UAVs and quadcopters",
    //   },
    //   {
    //     icon: <GiNetworkBars />,
    //     text: "Quantity scalable deployment in swarms of 2-10+ units with coordinated mission capabilities",
    //   },
    //   // {
    //   //   icon: <Shield />,
    //   //   text: "Carbon fiber 450 class quadcopter frame",
    //   // },
    // ],

    //  Technical Specifications
    generalSpecifications: {
      type: "Carbon fiber 450-class quadcopter",
      maxSpeed: "25–35 m/s (90–125 km/h)",
      Payload: "Kinetic tip",
      flightController: "ArduPilot based",
      communication: "Up to 10 km",
      flightTime: " 8–20 minutes (based on payload)",
      controlMode: "Auto / Guided/Stabilized via GCS or manual fallback",
      Quantity: "Scalable – deployable in swarms (2–10 + units)",
      // swarmSupport: "Deployable in swarms (2–10+ units)",
    },

    additionalKeyComponents: {
      heading: "Ground Unit (GCU) / Command & Control Station:",
      paragraph:
        "Enables real-time coordination of multiple interceptor drones simultaneously, with support for 10 or more units depending on bandwidth. It also integrates directly with radar systems to receive target coordinates and continuously transmit dynamic waypoints to each drone for precise interception.",
    },

    missionModes: {
      heading: "Mission Modes:",
      items: [
        "Auto Intercept (Guided)",
        "Burst Mode (Stabilized)",
        "Manual Override (via joystick or GCS)",
        "Return-to-Launch / RTL fallback",
        "Pre-planned swarm response",
      ],
    },

    trackingAndLogging: {
      heading: "Tracking & Logging :",
      items: [
        "Real-time telemetry monitoring for each drone",
        "Post-mission flight logs for review and diagnostics",
      ],
    },

    hardwareComponents: {
      heading: "Hardware Components:",
      items: [
        "Industrial PC / Rugged Laptop : Running Mission Planner or GroundControl",
        "Telemetry Radio Hub : P900 / 928 MHz / SiK (multi-channel or mixed) , Optional master-slave mesh networking for redundancy",
        "Display Interface : Multi-vehicle dashboard with live map overlays ",
        "Drone status : position, battery, health, command status",
        "Optional Touchscreen or Gamepad : For joystick/manual override control",
      ],
    },

    radarIntegrationModule: {
      heading: "Detection Capabilities:",
      items: [
        "Type: Ground-based compact drone-detection radar (COTS or military-grade)",
        "Range: 3 to 5 km (optimized for small UAVs like quadcopters)",
        "Target Resolution: Tracks small drones down to ~0.2 m wingspan",
        "Refresh Rate: 0.1–2 seconds for continuous tracking",
        "Output Format: Provides target GPS coordinates (or relative position), Can be integrated via MAVLink, TCP/IP, or custom API",
      ],
    },

    radarDroneIntegrationWorkflow: {
      heading: "Radar–Drone Integration Workflow :",
      items: [
        "Detection: Radar identifies a suspicious UAV",
        "Target Data: GCU receives target location (GPS / vector data)",
        "Task Assignment: GCU dispatches nearest interceptor via Guided Mode",
        "Autonomous Interception: Drone engages the intruder (ram, net, etc.)",
        "Fallback: Interceptor returns or loiters after engagement/fuel threshold",
      ],
    },

    // Radar Integration Module
    // radarIntegration: {
    //   detection:
    //     "Over-the-horizon compact drone detection radar (COTS or military grade)",
    //   range: "5-10 km (optimized for small UAVs like quadcopters)",
    //   detectionSpeed: "Detects targets at 0.2–4 m/s airspeed",
    //   trackingTime: ">5 seconds continuous tracking",
    //   outputFormat: "Target GPS coordinates (latitude/longitude)",
    //   integration: "Supports MAVLink, TCP/IP, or custom API integration",
    // },

    //  Additional Information Section
    // radarDroneIntegrationWorkflowAndApplications: {
    //   integrationWorkflow: [
    //     "Detection: Radar identifies a suspicious UAV.",
    //     "Target Data: GPS coordinates and motion vectors are extracted.",
    //     "Drone Dispatch: Gandiva interceptor is dispatched to target location.",
    //     "Interception:  Drone engages target using onboard systems or directed countermeasures. The system creates an integrated air defense network capable of autonomous threat response.",
    //   ],
    //   advancedCapabilities:
    //     "The Gandiva Interceptor features high-speed carbon fiber construction enabling rapid deployment and interception capabilities. Swarm coordination allows multiple units to work together for comprehensive area coverage. The ArduPilot-based flight controller provides reliable autonomous operation with manual override capabilities for complex mission scenarios.",
    // },
  },

  {
    id: 6,
    name: "VARCHAS",
    title: "Fixed-Wing Hybrid Aircraft",
    category: "Upcoming Model",
    url: "/products/varchas",
    description:
      "A typical Varchas drone is a fixed-wing hybrid aircraft that combines vertical take-off and landing (VTOL) with long-endurance fixed-wing flight, featuring a vertically oriented body at take-off and landing and a horizontal orientation for forward flight.These systems use rotors for VTOL and typically elevons for control during transition and forward flight, though designs vary from dual-rotor to quad-rotor configurations",
    layout: "left",

    specs: ["VTOL Hybrid", "45–60 min Endurance", "0.5 kg Payload"],
    image: "/drones/varchas.png",
    color: "from-gray-700 to-black",
    accent: "bg-gray-600",

    //  Media Gallery
    // gallery: [
    //   {
    //     image:
    //       "https://weevildrone.co.in/wp-content/uploads/2025/09/varchas-removebg-preview.png",
    //     caption: "Varchas UAV – Front View",
    //   },
    // ],

    // //  Video Demonstrations
    // videos: [
    //   {
    //     title: "Operational Flight Test",
    //     url: "https://weevildrone.co.in/wp-content/uploads/2025/09/1-Bengal-Air-NCC_Training_4-Trim2.mp4#t=1,20",
    //     description: "Watch the Varchas demonstration",
    //   },
    // ],

    overview: {
      heading: "Overview",
      paragraph:
        "The Aero-Vision Tern-X is a state-of-the-art tail-sitter UAV designed for endurance, versatility, and rapid deployment. Its unique design allows it to take off and land like a helicopter in confined spaces and transition seamlessly to efficient, high-speed forward flight like a conventional aircraft, eliminating the need for runways or launch equipment.",
    },

    //  Key Features with React Icons
    // keyFeatures: [
    //   {
    //     icon: <GiHelicopter />,
    //     text: "Vertical take-off and landing combined with efficient fixed-wing forward flight for maximum versatility",
    //   },
    //   {
    //     icon: <AiOutlineFieldTime />,
    //     text: "45-60 minutes flight time with efficient aerodynamic design for long-range missions",
    //   },
    //   {
    //     icon: <GiWeight />,
    //     text: "0.5 kg payload capacity with lightweight 1.5-2.0 kg take-off weight for optimal performance",
    //   },
    //   // {
    //   //   icon: <GiAirplane />,
    //   //   text: "Efficient fixed-wing flight for long-range operations",
    //   // },
    // ],

    //  Technical Specifications
    // generalSpecifications: {
    //   wingspan: "110 cm",
    //   fuselage: "60 cm",
    //   takeoffWeight: "1.5–2.0 kg",
    //   payloadCapacity: "0.5 kg",
    //   flightEndurance: "45–60 minutes",
    //   aircraftType: "Fixed-wing hybrid VTOL aircraft",
    // },

    //  Flight Characteristics
    // flightCharacteristics: {
    //   vtolOperation:
    //     "Vertically oriented body during take-off and landing phases.",
    //   forwardFlight:
    //     "Horizontal orientation for efficient long-endurance flight.",
    //   transitionCapability:
    //     "Seamless transition between vertical and horizontal flight modes.",
    //   missionProfile:
    //     "Ideal for surveillance, reconnaissance, and extended area monitoring missions.",
    // },

    //  VTOL Technology & Applications
    // vtolTechnologyAndApplications: {
    //   hybridDesignAdvantages:
    //     "The VARCHAS combines the best of both worlds - the convenience of vertical take-off and landing like a helicopter, with the efficiency and endurance of fixed-wing flight. This unique design eliminates the need for runways while providing extended flight times that traditional multirotor aircraft cannot achieve.",
    //   missionApplications:
    //     "Perfect for surveillance missions, border patrol, environmental monitoring, and search and rescue operations. The 45-60 minute flight endurance with 0.5 kg payload capacity makes it ideal for carrying advanced sensors, cameras, or communication equipment over extended periods and distances.",
    // },
  },

  {
    id: 7,
    name: "INDRAJIT",
    title: "FPV Quadcopter",
    category: "Tactical Series",
    url: "/products/indrajit",
    description:
      "10-inch First-Person View (FPV) Drone, Quad Copter with Optic Fiber Communication, designed for high-speed operations and specialized tactical applications with advanced digital control systems.",
    layout: "left",

    specs: ["FPV Control", "Optical Fiber Communication", "High Speed"],
    image:
      "https://weevildrone.co.in/wp-content/uploads/2025/09/indrajit-removebg-preview.png",
    color: "from-gray-700 to-black",
    accent: "bg-gray-800",

    //  Media Gallery
    gallery: [
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/2025/09/indrajit-removebg-preview.png",
        caption: "INDRAJIT FPV Drone View",
      },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/1-Bengal-Air-NCC_Training_2.mp4#t=1,20",
        description: "Watch the INDRAJIT FPV drone in tactical demonstration.",
      },
    ],

    //  Key Features with React Icons
    // keyFeatures: [
    //   {
    //     icon: <GiSpeedometer />,
    //     text: "Cruise speed of 90-100 km/h with top speed reaching 150 km/h for rapid deployment and tactical operations",
    //   },
    //   {
    //     icon: <FaVideo />,
    //     text: "10-inch First-Person View system with 7-inch digital display for real-time operational control",
    //   },
    //   {
    //     icon: <FaNetworkWired />,
    //     text: "Advanced 2-20 kilometer optical fiber length with digital signals to optical signals conversion",
    //   },
    //   // {
    //   //   icon: <FaNetworkWired />,
    //   //   text: "Secure signal transmission immune to interference and jamming",
    //   // },
    // ],

    // Technical Specifications
    generalSpecifications: {
      type: "10 inch First Person View Drones with Optic Fibre Communication",
      range: "Available for 2 km / 5 km / 10 km & 20 km",
      cruiseSpeedKMPH: "90–100 km/h",
      batteryBackup: "Backup varies (without payload)",
      powerSource: "Rechargeable battery",
      groundControlUnit: "Converts digital signals to optical signals",
      cameraQuality: "Analog / Digital HD video options",
      assembly: "ARF (Almost Ready to Fly) kit",
    },

    agricultureSector: {
      heading: "Agriculture Sector",
      paragraph: [
        "For tea gardens in hills and remote areas, it’s difficult to do monitoring and survey activities for growth & health of tea plants. At the same time, the survey for plantation of shade trees and audit of shade tree cutting are also difficult.",
        "WeevilsDrones has expertise in videography and image processing to determine the number of shade trees required to be cut or have been cut by the contractor. WD successfully completed a project for an international tree company in West Bengal Dooars region of West Bengal.",
      ],
    },

    advantagesData: {
      heading: "Other scenarios we cover in Agriculture Sectors are",
      items: [
        "Precision Spraying",
        "Crop Monitoring and Assessment",
        "Data-Driven Decision Making",
      ],
    },
    healthCareSector: {
      heading: "Health Care Sector:",
      items: ["Logistics"],
    },

    miningAndElectricalSector: {
      heading: "Mining & Electrical Sector:",
      items: ["SAR Image processing ", "Image Analysis "],
    },

    // Communication System
    // communicationSystem: {
    //   opticalFiberLength: "2 – 20 Kilometer",
    //   groundControlUnit: "Digital Signals to Optical Signals Conversion",
    //   lcdDisplay: "7 inch Digital Display",
    //   communicationType:
    //     "Optic Fiber Communication for secure, interference-free operation",
    //   controlRange:
    //     "Extended range capability up to 20 kilometers via optical fiber",
    // },

    // Additional Information
    // advancedFeaturesAndApplications: {
    //   opticalFiberAdvantages:
    //     "The INDRAJIT's optical fiber communication system provides unparalleled security and reliability. Unlike radio frequency communications, optical fiber is immune to electromagnetic interference, jamming, and interception. The 2-20 kilometer fiber length allows for extended range operations while maintaining real-time control and high-definition video transmission.",
    //   tacticalApplications:
    //     "Designed for specialized tactical operations where secure communication is critical. The high-speed performance (up to 150 km/h) combined with the 10-inch carbon fiber frame provides exceptional maneuverability and durability. The 7-inch digital display ensures operators have clear, real-time situational awareness during critical missions.",
    // },
  },
];
