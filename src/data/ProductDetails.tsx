
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiAirplane, GiElectric, GiGasPump, GiHelicopter, GiJetFighter, GiNetworkBars, GiSpeedometer, GiTargetDummy, GiWeight, GiWoodBeam } from "react-icons/gi";
import { RiRadarLine, RiRadioLine } from "react-icons/ri";
import { GiSteelClaws } from "react-icons/gi";
import { FaNetworkWired, FaVideo } from "react-icons/fa";  

export const products = [
  {
    id: 1,
    name: "ICARUS",
    title: "Professional VTOL UAV",
    category: "Defense Series",
    url: "/products/icarus",
    layout:"right",
    description:
      "Advanced vertical take-off and landing unmanned aerial vehicle designed for long-range missions with exceptional flight performance and reliability.",

    gallery: [
      {
        image: "icarus_landed_view.jpg",
        caption: "Icarus landed view",
      },
      {
        image: "icarus_high_altitude.jpg",
        caption: "High-altitude operational view",
      },
      {
        image: "icarus_new_version.jpg",
        caption: "New Icarus prototype - Frame 3",
      },
    ],

    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/icarus-flight-test.mp4",
        description:
          "Drone performance testing in high-altitude mountain terrain.",
      },
      {
        title: "Flight Demonstration",
        url: "https://example.com/icarus-flight-demo.mp4",
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
        text: "Dual power system: Electric + Gas option",
      },
      {
        icon: <RiRadioLine />,
        text: "Advanced GPS communication with RF backup",
      },
      {
        icon: <GiSteelClaws />,
        text: "Composite carbon fiber + fiberglass construction",
      },
    ],

    //  Technical Specifications
    generalSpecifications: {
      wingspan: "2985 mm (117.5 in)",
      length: "2035 mm (80.11 in)",
      height: "463 mm (18.22 in)",
      flyingWeight: "~4.4 kg",
      construction: "Carbon fiber / fiberglass composite",
      power: "Configurable for electric or gas",
      assembly: "ARF (Almost Ready to Fly) kit",
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

    communicationAndPerformance: {
      communication:
        "GPS communication system with RF signal backup to connect ground station.",
      flightPerformance:
        "50-60 min flight time and 60–80 km range under standard conditions. Ground speed 30 m/s depending on wind.",
    },

    specs: ["VTOL Capable", "Autopilot Mode", "Long Range"],
    image: "/drones/ICARUS.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",
  },
  {
    id: 2,
    name: "EAGLE EYE",
    title: "Professional Fixed-Wing UAV",
    category: "Defense Series",
    url: "/products/eagle-eye",
    description:
      "Advanced mid-range fixed-wing unmanned aerial vehicle designed for reliable performance with exceptional flight efficiency and composite construction.",

    //  Image gallery
    gallery: [
      { image: "eagle_view.jpg", caption: "Eagle Eye UAV side view" },
      { image: "eagle_flight.jpg", caption: "In-flight operational view" },
    ],

    // Videos
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/eagle-operational-test.mp4",
        description: "Watch the Eagle Eye UAV in real test flight conditions.",
      },
    ],

    //  Key Features with icons
    keyFeatures: [
      {
        icon: <AiOutlineFieldTime />,
        text: "Extended flight time with reliable mid-range performance",
      },
      {
        icon: <GiElectric />,
        text: "Electric-powered system with rechargeable battery",
      },
      {
        icon: <RiRadioLine />,
        text: "RF + GPS communication with autopilot mode support",
      },
      {
        icon: <GiWoodBeam />,
        text: "Composite last-cut balsa wood construction",
      },
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

    communicationAndPerformance: {
      communication:
        "RF-based communication with ground control station. GPS can be enabled for autopilot mode.",
      flightPerformance:
        "Typical flight time is 50–60 minutes with 60–80 km range under standard conditions. Ground speed: 30 m/s depending on wind.",
    },

    specs: ["Fixed Wing", "Autopilot Mode", "RF + GPS System"],
    image: "/drones/EAGLE EYE.png",
    color: "from-yellow-500 to-orange-600",
    accent: "bg-yellow-500",
  },
  {
    id: 3,
    name: "NAYANAVAT",
    title: "Fuel-Based Training UAV",
    category: "Training Series",
    url: "/products/nayanavat",
    description:
      "Advanced balsa wood based fuel-driven unmanned aerial vehicle designed for military training applications, offering safer and more cost-effective target practice with realistic flight characteristics.",

    //  Media Gallery
    gallery: [
      { image: "P1919214.jpg", caption: "Nayanavat UAV – Front View" },
      {
        image: "nayanavat_view.jpg",
        caption: "Nayanavat training field view",
      },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/nayanavat-flight-test.mp4",
        description: "Watch the Nayanavat UAV military training demonstration.",
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
      {
        icon: <GiWoodBeam />,
        text: "Durable balsa wood and plywood construction",
      },
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
    additionalInfo: {
      militaryTrainingApplications:
        "Used frequently for target practice in military training, offering safer and cost-effective alternatives to manned targets while simulating realistic aircraft maneuvers.",
      keyComponents:
        "Robust construction with a gasoline engine for reliable training performance. Supports up to 2kg payload for additional mission equipment.",
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

    //  Photo Gallery
    gallery: [
      { image: "gandiva_landed.jpg", caption: "Gandiva landed view" },
      {
        image: "gandiva_high_altitude.jpg",
        caption: "High-altitude operational view",
      },
      { image: "gandiva_radar_sim.jpg", caption: "Radar simulation view" },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/gandiva-operational-test.mp4",
        description:
          "Watch the Gandiva demonstrate its high-speed interception capabilities and autonomous flight modes.",
      },
      {
        title: "Radar Integration Demo",
        url: "https://example.com/gandiva-radar-demo.mp4",
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
        icon: <GiNetworkBars />,
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
        "Over-the-horizon compact drone detection radar (COTS/military)",
      range: "5–10 km",
      detectionSpeed: "Detects targets at 0.2–4 m/s airspeed",
      trackingTime: ">5 seconds continuous tracking",
      outputFormat: "Target GPS coordinates (latitude/longitude)",
      integration: "Supports MAVLink, TCP/IP, or custom API integration",
    },

    // Integration Workflow & Applications
    integrationWorkflow: [
      "Detection: Radar identifies a suspicious UAV",
      "Target Data: GPS and motion data extracted",
      "Drone Dispatch: Gandiva moves to intercept",
      "Engagement: Executes target interception mission",
    ],

    additionalInfo: {
      advancedCapabilities:
        "High-speed interceptor drone with swarm coordination and radar-assisted navigation for modern defense operations. Integrated Arduflot controller enables smart autonomous missions with manual override.",
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

    //  Media Gallery
    gallery: [
      { image: "varchas_view.jpg", caption: "Varchas UAV – Front View" },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/varchas-flight-test.mp4",
        description:
          "Watch the Varchas UAV in VTOL and forward flight transition demo.",
      },
    ],

    //  Key Features with React Icons
    keyFeatures: [
      {
        icon: <GiHelicopter />,
        text: "Vertical take-off and landing (VTOL) with hybrid design",
      },
      {
        icon: <AiOutlineFieldTime />,
        text: "45–60 minutes extended endurance flight capability",
      },
      {
        icon: <GiWeight />,
        text: "0.5 kg mission payload capacity",
      },
      {
        icon: <GiAirplane />,
        text: "Efficient fixed-wing flight for long-range operations",
      },
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
    vtolTechnologyApplications: {
      hybridDesignAdvantages:
        "Combines helicopter-like VTOL convenience with fixed-wing endurance for versatile deployment without runway requirements.",
      missionApplications:
        "Suitable for surveillance missions, border patrol, environmental monitoring, and search & rescue operations.",
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

    //  Media Gallery
    gallery: [
      { image: "indrajit_view.jpg", caption: "INDRAJIT FPV Drone View" },
    ],

    //  Video Demonstrations
    videos: [
      {
        title: "Operational Flight Test",
        url: "https://example.com/indrajit-flight-test.mp4",
        description: "Watch the INDRAJIT FPV drone in tactical demonstration.",
      },
    ],

    //  Key Features with React Icons
    keyFeatures: [
      {
        icon: <GiSpeedometer />,
        text: "High-speed performance up to 150 km/h for tactical missions",
      },
      {
        icon: <FaVideo />,
        text: "Advanced FPV system with 10-inch frame and HD video feed",
      },
      {
        icon: <FaNetworkWired />,
        text: "Optical fiber communication with up to 20 km range",
      },
      {
        icon: <FaNetworkWired />,
        text: "Secure signal transmission immune to interference and jamming",
      },
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
      communicationType: "Optic Fiber Communication",
      controlRange:
        "Extended range capability up to 20 kilometers via optical fiber",
    },

    // Additional Information
    additionalInfo: {
      opticalFiberAdvantages:
        "Optical fiber communication ensures secure, interference-free control. Immune to electromagnetic interference and jamming.",
      tacticalApplications:
        "Built for high-speed tactical missions with secure communication needs. Real-time control and HD display improves mission precision.",
    },

    specs: ["FPV Control", "Optical Fiber Communication", "High Speed"],
    image: "/drones/indrajit .png",
    color: "from-gray-700 to-black",
    accent: "bg-gray-800",
  },
];
