
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiAirplane, GiElectric, GiGasPump, GiHelicopter, GiJetFighter, GiNetworkBars, GiSpeedometer, GiTargetDummy, GiWeight, GiWoodBeam } from "react-icons/gi";
import { RiRadarLine, RiRadioLine } from "react-icons/ri";
// import { GiSteelClaws } from "react-icons/gi";
import { FaNetworkWired, FaVideo } from "react-icons/fa";  
import { Shield } from "lucide-react";

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

    gallery: [
      {
        image:
          "	https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_5-1-1536x1152.jpg",
        caption: "Icarus landed view",
      },
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-09-17-164335-rbvy6y46mwxiw845rw74fetnu52t581fv9iwdcyid2.png",
        caption: "High-altitude operational view",
      },
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/Icarus_New-Ver_Frame_3-rbvxw33bnu28qfw5776bm5hwpum474x3pi4wq92a9i.jpg",
        caption: "New Icarus prototype - Frame 3",
      },
    ],

    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_Flying_1.mp4",
        description:
          "Drone performance testing in high-altitude mountain terrain.",
      },
      {
        title: "Flight Demonstration",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Icarus_3.mp4",
        description:
          "Complete VTOL takeoff, transition to forward flight, and smooth landing sequence.",
      },
    ],

    keyFeatures: [
      {
        icon: <AiOutlineFieldTime />,
        text: "50–60 min flight time (up to 80 km range)",
      },
      {
        icon: <GiElectric />,
        text: "Configurable for both electric and gas power with composite construction",
      },
      {
        icon: <RiRadioLine />,
        text: "Advanced GPS communication with RF backup",
      },
      // {
      //   icon: <GiSteelClaws />,
      //   text: "Composite carbon fiber + fiberglass construction",
      // },
    ],

    //  Technical Specifications
    generalSpecifications: {
      wingspan: "2985 mm (117.5 in)",
      length: "2035 mm (80.11 in)",
      height: "463 mm (18.22 in)",
      flyingWeight: "~4.4 kg",
      construction: "Carbon fiber / fiberglass composite",
      power: "Configurable for electric or gas",
      assembly: "Typically provided as an ARF (Almost Ready to Fly) kit",
    },

    //  Electric System
    electricPowerSystem: {
      pusherMotor: "AT5220A KV220",
      pusherPropeller: "18 × 12 inch",
      vtolMotor: "V602-KV180 brushless motor",
      vtolESC: "FLAME 60A ESC",
      vtolPropeller: "22×7.4 T-Motor",
      battery: "25.2V 6S 22000mAh LiPo × 2",
      servos: "HITECH D85MG (6 total)",
    },

    radioRequirementsAndFlightPerformance: {
      communicationSystem:
        "Communication between Icarus and ground station happens through GPS communication system. RF signals can be used for communication as well.",
      flightCapabilities:
        "The flight time of a VTOL composite model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and aerodynamic design. A typical flight time is approximately 50-60 min and up to 60-80 km under standard conditions with single charge. The ground speed is 30 m/s which depends on headwind and tail wind.",
    },

    specs: ["VTOL Capable", "Autopilot Mode", "Long Range"],
    image: "/drones/ICARUS.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",
  },
  {
    id: 2,
    name: "EAGLE EYE",
    title: " MID-RANGE FIXED-WING UAV",
    category: "Defense Series",
    url: "/products/eagle-eye",
    description:
      "Advanced mid-range fixed-wing unmanned aerial vehicle designed for reliable performance with exceptional flight efficiency and composite construction.",
    layout: "left",
    //  Image gallery
    gallery: [
      {
        image: "https://weevildrone.co.in/wp-content/uploads/2025/07/i21.jpg",
        caption: "Eagle Eye UAV side view",
      },
      // { image: "eagle_flight.jpg", caption: "In-flight operational view" },
    ],

    // Videos
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/Gandiva_2.mp4#t=1,20",
        description: "Watch the Eagle Eye UAV in real test flight conditions.",
      },
    ],

    //  Key Features with icons
    keyFeatures: [
      {
        icon: <AiOutlineFieldTime />,
        text: "Optimized flight duration with reliable performance under standard conditions",
      },
      {
        icon: <GiElectric />,
        text: "Rechargeable battery system with composite balsa wood construction",
      },
      {
        icon: <RiRadioLine />,
        text: "Advanced GPS communication system designed for reliable operation in busy environments",
      },
      // {
      //   icon: <GiWoodBeam />,
      //   text: "Composite last-cut balsa wood construction",
      // },
    ],

    // General Specifications
    generalSpecifications: {
      wingspan: "2100 mm (83 inches)",
      length: "1500 mm (59 inches)",
      height: "355 mm (14 inches)",
      flyingWeight: "~3 kg",
      construction: "Composite material of last-cut balsa wood",
      power: "Rechargeable electric battery system",
      assembly: "ARF (Almost Ready to Fly) kit",
    },

    //  Power System
    electricPowerSystem: {
      motor: "Brushless motor",
      esc: "22.2V 6S 80A ESC",
      battery: "22.2V 6S 5000mAh LiPo",
      propeller: "15 inch",
      servos: "60 37G 17g servos",
      pusherMotor: "AT5220A KV 220",
    },

    radioRequirementsAndFlightPerformance: {
      communicationSystem:
        "RF signals are used for communication between the Eagle Eye and the ground control station. These signals are used to transmit flight commands and receive telemetry data from the UAV. GPS communication can be used as an autopilot mode.",
      flightCapabilities:
        "The flight time of the Eagle Eye balsa & plywood model operating in autopilot mode depends on several factors such as battery capacity, motor efficiency and aerodynamic design. A typical flight time is approximately 50-60 min and up to 60-80 km under standard conditions with single charge. The ground speed is 30 m/s which depends on headwind and tail wind.",
    },

    specs: ["Fixed Wing", "Autopilot Mode", "RF + GPS System"],
    image: "/drones/EAGLE EYE.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",
  },
  {
    id: 3,
    name: "NAYANAVAT",
    title: "OS 0.46 / 0.56 - FUEL-BASED UAV",
    category: "Training Series",
    url: "/products/nayanavat",
    description:
      "Advanced balsa wood based fuel-driven unmanned aerial vehicle designed for military training applications, offering safer and more cost-effective target practice with realistic flight characteristics.",

    //  Media Gallery
    gallery: [
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/elementor/thumbs/P1919214-scaled-r1tlyi3e4c95faxjh9xp2u38etk61kexe94tpojnzk.jpg",
        caption: "Nayanavat View",
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
    keyFeatures: [
      {
        icon: <AiOutlineFieldTime />,
        text: "15-minute flight time with 2kg payload capacity",
      },
      {
        icon: <GiGasPump />,
        text: "Fuel-based power with OS 0.46 / 0.56 gasoline engine",
      },
      {
        icon: <GiTargetDummy />,
        text: "Designed for military target training simulations",
      },
      // {
      //   icon: <GiWoodBeam />,
      //   text: "Durable balsa wood and plywood construction",
      // },
    ],

    //  Technical Specifications
    generalSpecifications: {
      wingspan: "1200 mm (63 inches)",
      length: "1000 mm (25 inches)",
      height: "350 mm (14 inches)",
      flyingWeight: "~3 kg",
      construction: "Balsa wood and plywood",
      power: "OS 0.46 / 0.56 gasoline engine",
      assembly: "ARF (Almost Ready to Fly) kit",
    },

    performanceSpecifications: {
      serviceCeiling: "3000 m",
      maxHeight: "Depends on eyesight",
      maxFlightTime: "15 minutes",
      maxPayload: "2 kg",
      engineType: "OS 0.46 / 0.56 gasoline engine",
      material: "Balsa wood and plywood construction",
    },

    //  Additional Information Section
    additionalKeyComponentsAndApplications: {
      militaryTrainingApplications:
        "This drone is frequently used for target practice in military training, offering a safer and more cost-effective alternative to manned targets. These drones, often referred to as target drones, are designed to mimic the flight characteristics and radar signatures of various aircraft, including fighter jets, allowing for realistic training scenarios.",
      keyComponents:
        "The Nayanavat OS features robust balsa wood and plywood construction designed to withstand training conditions. The gasoline engine provides reliable power delivery, while the compact design allows for easy transport and deployment in various training environments. Maximum payload capacity of 2kg enables additional equipment integration as needed.",
    },

    specs: ["Fuel Powered", "Military Training", "High Durability"],
    image: "/drones/NAYANAVAT.png",
    color: "from-red-600 to-orange-500",
    accent: "bg-red-600",
  },
  {
    id: 4,
    name: "GANDIVA",
    title: "Interceptor Quadcopter",
    category: "Defense Series",
    url: "/products/gandiva",
    description:
      "Advanced carbon fiber 450 class quadcopter with integrated radar detection capabilities, designed for high-speed interception missions and swarm deployment operations.",
    layout: "left",
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
    keyFeatures: [
      {
        icon: <GiJetFighter />,
        text: "High-speed 25–35 m/s (90–125 km/h) interception performance",
      },
      {
        icon: <RiRadarLine />,
        text: "Radar detection with 5–10 km range",
      },
      {
        icon: <GiNetworkBars />,
        text: "Swarm deployment support for 2–10+ coordinated units",
      },
      {
        icon: <Shield />,
        text: "Carbon fiber 450 class quadcopter frame",
      },
    ],

    //  Technical Specifications
    generalSpecifications: {
      type: "Carbon fiber 450 class quadcopter",
      maxSpeed: "25–35 m/s (90–125 km/h)",
      flightTime: "8–15 minutes (based on payload)",
      communication: "Up to 10 km",
      flightController: "Arduflot based",
      controlMode: "Auto / Guided via GCS or manual failback",
      swarmSupport: "Deployable in swarms (2–10+ units)",
    },

    // Radar Integration Module
    radarIntegration: {
      detection:
        "Over-the-horizon compact drone detection radar (COTS or military grade)",
      range: "5-10 km (optimized for small UAVs like quadcopters)",
      detectionSpeed: "Detects targets at 0.2–4 m/s airspeed",
      trackingTime: ">5 seconds continuous tracking",
      outputFormat: "Target GPS coordinates (latitude/longitude)",
      integration: "Supports MAVLink, TCP/IP, or custom API integration",
    },

    //  Additional Information Section
    radarDroneIntegrationWorkflowAndApplications: {
      integrationWorkflow: [
        "Detection: Radar identifies a suspicious UAV.",
        "Target Data: GPS coordinates and motion vectors are extracted.",
        "Drone Dispatch: Gandiva interceptor is dispatched to target location.",
        "Interception:  Drone engages target using onboard systems or directed countermeasures. The system creates an integrated air defense network capable of autonomous threat response.",
      ],
      advancedCapabilities:
        "The Gandiva Interceptor features high-speed carbon fiber construction enabling rapid deployment and interception capabilities. Swarm coordination allows multiple units to work together for comprehensive area coverage. The Arduflot-based flight controller provides reliable autonomous operation with manual override capabilities for complex mission scenarios.",
    },

    specs: ["High Speed", "Radar Detection", "Swarm Deployment"],
    image: "/drones/GANDIVA.png",
    color: "from-gray-700 to-gray-900",
    accent: "bg-gray-700",
  },
  {
    id: 5,
    name: "VARCHAS",
    title: "Fixed-Wing Hybrid Aircraft",
    category: "Hybrid VTOL Series",
    url: "/products/varchas",
    description:
      "Advanced fixed-wing hybrid aircraft that combines vertical take-off and landing (VTOL) with long-endurance fixed-wing flight, featuring a vertically oriented body at take-off and landing and a horizontal orientation for forward flight.",
    layout: "left",
    //  Media Gallery
    gallery: [
      {
        image:
          "https://weevildrone.co.in/wp-content/uploads/2025/09/varchas-removebg-preview.png",
        caption: "Varchas UAV – Front View",
      },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://weevildrone.co.in/wp-content/uploads/2025/09/1-Bengal-Air-NCC_Training_4-Trim2.mp4#t=1,20",
        description: "Watch the Varchas demonstration",
      },
    ],

    //  Key Features with React Icons
    keyFeatures: [
      {
        icon: <GiHelicopter />,
        text: "Vertical take-off and landing combined with efficient fixed-wing forward flight for maximum versatility",
      },
      {
        icon: <AiOutlineFieldTime />,
        text: "45-60 minutes flight time with efficient aerodynamic design for long-range missions",
      },
      {
        icon: <GiWeight />,
        text: "0.5 kg payload capacity with lightweight 1.5-2.0 kg take-off weight for optimal performance",
      },
      // {
      //   icon: <GiAirplane />,
      //   text: "Efficient fixed-wing flight for long-range operations",
      // },
    ],

    //  Technical Specifications
    generalSpecifications: {
      wingspan: "110 cm",
      fuselage: "60 cm",
      takeoffWeight: "1.5–2.0 kg",
      payloadCapacity: "0.5 kg",
      flightEndurance: "45–60 minutes",
      aircraftType: "Fixed-wing hybrid VTOL aircraft",
    },

    //  Flight Characteristics
    flightCharacteristics: {
      vtolOperation:
        "Vertically oriented body during take-off and landing phases.",
      forwardFlight:
        "Horizontal orientation for efficient long-endurance flight.",
      transitionCapability:
        "Seamless transition between vertical and horizontal flight modes.",
      missionProfile:
        "Ideal for surveillance, reconnaissance, and extended area monitoring missions.",
    },

    //  VTOL Technology & Applications
    vtolTechnologyAndApplications: {
      hybridDesignAdvantages:
        "The VARCHAS combines the best of both worlds - the convenience of vertical take-off and landing like a helicopter, with the efficiency and endurance of fixed-wing flight. This unique design eliminates the need for runways while providing extended flight times that traditional multirotor aircraft cannot achieve.",
      missionApplications:
        "Perfect for surveillance missions, border patrol, environmental monitoring, and search and rescue operations. The 45-60 minute flight endurance with 0.5 kg payload capacity makes it ideal for carrying advanced sensors, cameras, or communication equipment over extended periods and distances.",
    },

    specs: ["VTOL Hybrid", "45–60 min Endurance", "0.5 kg Payload"],
    image: "/drones/varchas.png",
    color: "from-gray-700 to-black",
    accent: "bg-gray-600",
  },
  {
    id: 6,
    name: "INDRAJIT",
    title: "FPV Quadcopter",
    category: "Tactical Series",
    url: "/products/indrajit",
    description:
      "10-inch First-Person View (FPV) Drone, Quad Copter with Optic Fiber Communication, designed for high-speed operations and specialized tactical applications with advanced digital control systems.",
    layout: "left",
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
    keyFeatures: [
      {
        icon: <GiSpeedometer />,
        text: "Cruise speed of 90-100 km/h with top speed reaching 150 km/h for rapid deployment and tactical operations",
      },
      {
        icon: <FaVideo />,
        text: "10-inch First-Person View system with 7-inch digital display for real-time operational control",
      },
      {
        icon: <FaNetworkWired />,
        text: "Advanced 2-20 kilometer optical fiber length with digital signals to optical signals conversion",
      },
      // {
      //   icon: <FaNetworkWired />,
      //   text: "Secure signal transmission immune to interference and jamming",
      // },
    ],

    // Technical Specifications
    generalSpecifications: {
      frameSize: "10 Inch Carbon Fiber Frame",
      range: "5 Kilometers",
      cruiseSpeed: "90–100 km/h",
      topSpeed: "150 km/h",
      aircraftType: "10-inch First-Person View (FPV) Drone, Quad Copter",
      application: "Specialized tactical operations and high-speed missions",
    },

    // Communication System
    communicationSystem: {
      opticalFiberLength: "2 – 20 Kilometer",
      groundControlUnit: "Digital Signals to Optical Signals Conversion",
      lcdDisplay: "7 inch Digital Display",
      communicationType:
        "Optic Fiber Communication for secure, interference-free operation",
      controlRange:
        "Extended range capability up to 20 kilometers via optical fiber",
    },

    // Additional Information
    advancedFeaturesAndApplications: {
      opticalFiberAdvantages:
        "The INDRAJIT's optical fiber communication system provides unparalleled security and reliability. Unlike radio frequency communications, optical fiber is immune to electromagnetic interference, jamming, and interception. The 2-20 kilometer fiber length allows for extended range operations while maintaining real-time control and high-definition video transmission.",
      tacticalApplications:
        "Designed for specialized tactical operations where secure communication is critical. The high-speed performance (up to 150 km/h) combined with the 10-inch carbon fiber frame provides exceptional maneuverability and durability. The 7-inch digital display ensures operators have clear, real-time situational awareness during critical missions.",
    },

    specs: ["FPV Control", "Optical Fiber Communication", "High Speed"],
    image:
      "https://weevildrone.co.in/wp-content/uploads/2025/09/indrajit-removebg-preview.png",
    color: "from-gray-700 to-black",
    accent: "bg-gray-800",
  },
];
