import React, { useState } from "react";

// Import interfaces or define them here
interface TechnicalSpecificationsProps {
  generalSpecifications?: any;
  operationalCharacteristics?: any;
  electricPowerSystem?: any;
  performanceSpecifications?: any;
  communicationSystem?: any;
  radarIntegration?: any;
  flightCharacteristics?: any;
}

const TechnicalSpecifications: React.FC<TechnicalSpecificationsProps> = ({
  generalSpecifications,
  operationalCharacteristics,
  electricPowerSystem,
  performanceSpecifications,
  communicationSystem,
  radarIntegration,
  flightCharacteristics,
}) => {
  const [activeTab, setActiveTab] = useState<string>("general");

  // Dynamic tabs based on available data
  const availableTabs = [
    {
      id: "general",
      label: "General Specifications",
      data: generalSpecifications,
    },
    {
      id: "operationalCharacteristics",
      label: "Operational Characteristics",
      data: operationalCharacteristics,
    },
    { id: "power", label: "Electric Power System", data: electricPowerSystem },
    {
      id: "performance",
      label: "Performance",
      data: performanceSpecifications,
    },
    { id: "communication", label: "Communication", data: communicationSystem },
    { id: "radar", label: "Radar", data: radarIntegration },
    {
      id: "flight",
      label: "Flight Characteristics",
      data: flightCharacteristics,
    },
  ].filter((tab) => tab.data && Object.keys(tab.data).length > 0);

  if (availableTabs.length === 0) return null;

  // Helper function to format keys for display
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
              <span className="text-gray-700 text-sm sm:w-3/5">
                {value as string}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
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

        {activeTab === "operationalCharacteristics" &&
          operationalCharacteristics &&
          renderSpecificationCards(
            operationalCharacteristics,
            "Operational Characteristics"
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
          renderSpecificationCards(communicationSystem, "Communication System")}

        {activeTab === "radar" &&
          radarIntegration &&
          renderSpecificationCards(radarIntegration, "Radar Integration")}

        {activeTab === "flight" &&
          flightCharacteristics &&
          renderSpecificationCards(
            flightCharacteristics,
            "Flight Characteristics"
          )}
      </div>
    </div>
  );
};

export default TechnicalSpecifications;
