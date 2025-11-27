import React from "react";
import CommunicationPerformance from "./CommunicationPerformance";
import AdditionalInformation from "./AdditionalInformation";
import TechnicalSpecifications from "./TechnicalSpecifications";
import KeyFeaturesSection from "./KeyFeaturesSection";
import CTASection from "./CTASection";
import TextContent from "./components/TextContent";
import BulletList from "./components/BulletList";

// Define all possible specification interfaces
// interface KeyFeature {
//   icon: React.ReactNode;
//   text: string;
// }

interface GeneralSpecifications {
  wingspan?: string;
  length?: string;
  height?: string;
  flyingWeight?: string;
  construction?: string;
  power?: string;
  assembly?: string;
  type?: string;
  maxSpeed?: string;
  flightTime?: string;
  communication?: string;
  flightController?: string;
  controlMode?: string;
  swarmSupport?: string;
  frameSize?: string;
  range?: string;
  cruiseSpeed?: string;
  topSpeed?: string;
  aircraftType?: string;
  application?: string;
  takeoffWeight?: string;
  payloadCapacity?: string;
  flightEndurance?: string;
  serviceCeiling?: string;
  maxHeight?: string;
  maxFlightTime?: string;
  maxPayload?: string;
  engineType?: string;
  material?: string;
  [key: string]: string | undefined;
}


interface ElectricPowerSystem {
  pusherMotor?: string;
  pusherPropeller?: string;
  vtolMotor?: string;
  vtolESC?: string;
  vtolPropeller?: string;
  battery?: string;
  servos?: string;
  motor?: string;
  esc?: string;
  propeller?: string;
  [key: string]: string | undefined;
}

interface CommunicationAndPerformance {
  communication?: string;
  flightPerformance?: string;
  communicationSystem?: string;
  flightCapabilities?: string;
}

interface PerformanceSpecifications {
  serviceCeiling?: string;
  maxHeight?: string;
  maxFlightTime?: string;
  maxPayload?: string;
  engineType?: string;
  material?: string;
  [key: string]: string | undefined;
}

interface RadarIntegration {
  detection?: string;
  range?: string;
  detectionSpeed?: string;
  trackingTime?: string;
  outputFormat?: string;
  integration?: string;
  [key: string]: string | undefined;
}

interface CommunicationSystem {
  opticalFiberLength?: string;
  groundControlUnit?: string;
  lcdDisplay?: string;
  communicationType?: string;
  controlRange?: string;
  [key: string]: string | undefined;
}

interface FlightCharacteristics {
  vtolOperation?: string;
  forwardFlight?: string;
  transitionCapability?: string;
  missionProfile?: string;
  [key: string]: string | undefined;
}

interface ProductDetailsProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  productData: any;
  // productName: string;
  // keyFeatures: KeyFeature[];
  generalSpecifications?: GeneralSpecifications;
  electricPowerSystem?: ElectricPowerSystem;
  communicationAndPerformance?: CommunicationAndPerformance;
  performanceSpecifications?: PerformanceSpecifications;
  radarIntegration?: RadarIntegration;
  communicationSystem?: CommunicationSystem;
  flightCharacteristics?: FlightCharacteristics;
  additionalKeyComponentsAndApplications?: any;
  radarDroneIntegrationWorkflowAndApplications?: any;
  vtolTechnologyAndApplications?: any;
  advancedFeaturesAndApplications?: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  sectionRef,
  productData ,
}) => {

  console.log(
    "Product Data in ProductDetails:",
    productData.operationalCharacteristics
  );

  return (
    <div className="bg-white py-12" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-left mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-0.5 bg-orange-500" />
            <span className="text-xs uppercase tracking-wider text-gray-600 font-medium">
              Specifications
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Technical <span className="text-orange-500">Details</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl">
            Comprehensive specifications and features
          </p>
        </div> */}

        <div className="space-y-12">
          {/* Key Features Section */}
          {productData.keyFeatures && productData.keyFeatures.length > 0 && (
            <KeyFeaturesSection keyFeatures={productData.keyFeatures} />
          )}

          {/* Technical Specifications */}
          {(productData.generalSpecifications ||
            productData.operationalCharacteristics ||
            productData.electricPowerSystem ||
            productData.performanceSpecifications ||
            productData.communicationSystem ||
            productData.radarIntegration ||
            productData.flightCharacteristics) && (
            <TechnicalSpecifications
              generalSpecifications={productData.generalSpecifications}
              operationalCharacteristics={
                productData.operationalCharacteristics
              }
              electricPowerSystem={productData.electricPowerSystem}
              performanceSpecifications={productData.performanceSpecifications}
              communicationSystem={productData.communicationSystem}
              radarIntegration={productData.radarIntegration}
              flightCharacteristics={productData.flightCharacteristics}
            />
          )}

          {/* Additional paragraphs */}

          {productData.radioRequirementsAndFlightTime && (
            <TextContent
              heading={productData.radioRequirementsAndFlightTime.heading}
              paragraph={productData.radioRequirementsAndFlightTime.paragraph}
            />
          )}
          {productData.additionalKeyComponents && (
            <TextContent
              heading={productData.additionalKeyComponents.heading}
              paragraph={productData.additionalKeyComponents.paragraph}
            />
          )}

          {/* ardupilot paragraphs */}
          {productData.ardupilot && (
            <TextContent
              heading={productData.ardupilot.heading}
              paragraph={productData.ardupilot.paragraph}
            />
          )}

          {/* flightController paragraphs */}
          {productData.ardupilot && (
            <TextContent
              heading={productData.flightController.heading}
              paragraph={productData.flightController.paragraph}
            />
          )}

          {/* overview paragraphs */}
          {productData.overview && (
            <TextContent
              heading={productData.overview.heading}
              paragraph={productData.overview.paragraph}
            />
          )}

          {/* carbonFiberModelCharacteristics paragraphs */}
          {productData.carbonFiberModelCharacteristics && (
            <TextContent
              heading={productData.carbonFiberModelCharacteristics.heading}
              paragraph={productData.carbonFiberModelCharacteristics.paragraph}
            />
          )}
          {/* agricultureSector paragraphs */}
          {productData.agricultureSector && (
            <TextContent
              heading={productData.agricultureSector.heading}
              paragraph={productData.agricultureSector.paragraph}
            />
          )}

          {/* Bullet list */}
          {productData.advantagesData && (
            <BulletList
              heading={productData.advantagesData.heading}
              items={productData.advantagesData.items}
            />
          )}

          {productData.missionModes && (
            <BulletList
              heading={productData.missionModes.heading}
              items={productData.missionModes.items}
            />
          )}

          {productData.trackingAndLogging && (
            <BulletList
              heading={productData.trackingAndLogging.heading}
              items={productData.trackingAndLogging.items}
            />
          )}

          {productData.hardwareComponents && (
            <BulletList
              heading={productData.hardwareComponents.heading}
              items={productData.hardwareComponents.items}
            />
          )}

          {productData.radarIntegrationModule && (
            <BulletList
              heading={productData.radarIntegrationModule.heading}
              items={productData.radarIntegrationModule.items}
            />
          )}

          {productData.radarDroneIntegrationWorkflow && (
            <BulletList
              heading={productData.radarDroneIntegrationWorkflow.heading}
              items={productData.radarDroneIntegrationWorkflow.items}
            />
          )}

          {productData.healthCareSector && (
            <BulletList
              heading={productData.healthCareSector.heading}
              items={productData.healthCareSector.items}
            />
          )}

          {productData.miningAndElectricalSector && (
            <BulletList
              heading={productData.miningAndElectricalSector.heading}
              items={productData.miningAndElectricalSector.items}
            />
          )}

          {/* Communication & Performance */}
          {productData.communicationAndPerformance && (
            <CommunicationPerformance
              communicationAndPerformance={
                productData.communicationAndPerformance
              }
            />
          )}

          {/* Additional Information */}
          {(productData.additionalKeyComponentsAndApplications ||
            productData.radarDroneIntegrationWorkflowAndApplications ||
            productData.vtolTechnologyAndApplications ||
            productData.advancedFeaturesAndApplications) && (
            <AdditionalInformation
              additionalKeyComponentsAndApplications={
                productData.additionalKeyComponentsAndApplications
              }
              radarDroneIntegrationWorkflowAndApplications={
                productData.radarDroneIntegrationWorkflowAndApplications
              }
              vtolTechnologyAndApplications={
                productData.vtolTechnologyAndApplications
              }
              advancedFeaturesAndApplications={
                productData.advancedFeaturesAndApplications
              }
            />
          )}

          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;