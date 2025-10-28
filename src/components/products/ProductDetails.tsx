import React, { useState } from "react";

// Define all possible specification interfaces
interface KeyFeature {
  icon: React.ReactNode;
  text: string;
}

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
  keyFeatures: KeyFeature[];
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
  keyFeatures,
  generalSpecifications,
  electricPowerSystem,
  communicationAndPerformance,
  performanceSpecifications,
  radarIntegration,
  communicationSystem,
  flightCharacteristics,
  additionalKeyComponentsAndApplications,
  radarDroneIntegrationWorkflowAndApplications,
  vtolTechnologyAndApplications,
  advancedFeaturesAndApplications,
}) => {
  const [activeTab, setActiveTab] = useState<string>('general');

  // Dynamic tabs based on available data
  const availableTabs = [
    { id: 'general', label: 'General', data: generalSpecifications },
    { id: 'power', label: 'Power', data: electricPowerSystem },
    { id: 'performance', label: 'Performance', data: performanceSpecifications },
    { id: 'communication', label: 'Communication', data: communicationSystem },
    { id: 'radar', label: 'Radar', data: radarIntegration },
    { id: 'flight', label: 'Flight', data: flightCharacteristics },
  ].filter(tab => tab.data && Object.keys(tab.data).length > 0);

  // Additional content sections
  const additionalSections = [
    { id: 'components', label: 'Components & Applications', data: additionalKeyComponentsAndApplications },
    { id: 'workflow', label: 'Integration Workflow', data: radarDroneIntegrationWorkflowAndApplications },
    { id: 'technology', label: 'Technology', data: vtolTechnologyAndApplications },
    { id: 'advanced', label: 'Advanced Features', data: advancedFeaturesAndApplications },
  ].filter(section => section.data);

  // Helper function to format keys for display
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Render specification cards
  const renderSpecificationCards = (data: any, title: string) => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="bg-gray-900 px-4 py-3">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {Object.entries(data).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row sm:items-start gap-1 p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700 font-medium text-sm sm:w-2/5">
                {formatKey(key)}
              </span>
              <span className="text-gray-900 font-semibold text-sm sm:w-3/5">
                {value as string}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render content sections
  const renderContentSection = (data: any, title: string) => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="bg-gray-900 px-4 py-3">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <div className="p-4 space-y-4">
        {data.militaryTrainingApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Military Training Applications</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.militaryTrainingApplications}</p>
          </div>
        )}
        {data.keyComponents && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Key Components</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.keyComponents}</p>
          </div>
        )}
        {data.integrationWorkflow && Array.isArray(data.integrationWorkflow) && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Integration Workflow</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              {data.integrationWorkflow.map((step: string, index: number) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        )}
        {data.advancedCapabilities && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Advanced Capabilities</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.advancedCapabilities}</p>
          </div>
        )}
        {data.hybridDesignAdvantages && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Hybrid Design Advantages</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.hybridDesignAdvantages}</p>
          </div>
        )}
        {data.missionApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Mission Applications</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.missionApplications}</p>
          </div>
        )}
        {data.opticalFiberAdvantages && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Optical Fiber Advantages</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.opticalFiberAdvantages}</p>
          </div>
        )}
        {data.tacticalApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">Tactical Applications</h5>
            <p className="text-gray-700 text-sm leading-relaxed">{data.tacticalApplications}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white py-12 " ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
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
        </div>

        <div className="space-y-12">
          {/* Key Features Section */}
          {keyFeatures && keyFeatures.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-6 bg-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">
                  Key Features
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex  items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-lg">
                      {feature.icon}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabbed Specifications Section */}
          {availableTabs.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-6 bg-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">
                  Technical Specifications
                </h3>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6">
                {availableTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-orange-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === "general" &&
                  generalSpecifications &&
                  renderSpecificationCards(
                    generalSpecifications,
                    "General Specifications"
                  )}

                {activeTab === "power" &&
                  electricPowerSystem &&
                  renderSpecificationCards(electricPowerSystem, "Power System")}

                {activeTab === "performance" &&
                  performanceSpecifications &&
                  renderSpecificationCards(
                    performanceSpecifications,
                    "Performance Specifications"
                  )}

                {activeTab === "communication" &&
                  communicationSystem &&
                  renderSpecificationCards(
                    communicationSystem,
                    "Communication System"
                  )}

                {activeTab === "radar" &&
                  radarIntegration &&
                  renderSpecificationCards(
                    radarIntegration,
                    "Radar Integration"
                  )}

                {activeTab === "flight" &&
                  flightCharacteristics &&
                  renderSpecificationCards(
                    flightCharacteristics,
                    "Flight Characteristics"
                  )}
              </div>
            </div>
          )}

          {/* Communication & Performance Section */}
          {communicationAndPerformance && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {communicationAndPerformance.communicationSystem && (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="bg-gray-900 px-4 py-3">
                      <h4 className="text-lg font-semibold text-white">
                        Communication System
                      </h4>
                    </div>
                    <div className="p-4 text-left">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {communicationAndPerformance.communicationSystem}
                      </p>
                    </div>
                  </div>
                )}

                {communicationAndPerformance.flightCapabilities && (
                  <div className="bg-white rounded-lg border border-gray-200">
                    <div className="bg-gray-900 px-4 py-3">
                      <h4 className="text-lg font-semibold text-white">
                        Flight Capabilities
                      </h4>
                    </div>
                    <div className="p-4 text-left">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {communicationAndPerformance.flightCapabilities}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Content Sections */}
          {additionalSections.length > 0 && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-6 bg-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">
                  Additional Information
                </h3>
              </div>

              <div className="space-y-6 text-left">
                {additionalSections.map((section) => (
                  <div key={section.id}>
                    {renderContentSection(section.data, section.label)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;