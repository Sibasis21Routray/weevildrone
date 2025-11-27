import React from "react";

interface CommunicationAndPerformance {
  communication?: string;
  flightPerformance?: string;
  communicationSystem?: string;
  flightCapabilities?: string;
}

interface CommunicationPerformanceProps {
  communicationAndPerformance?: CommunicationAndPerformance;
}

const CommunicationPerformance: React.FC<CommunicationPerformanceProps> = ({
  communicationAndPerformance,
}) => {
  if (!communicationAndPerformance) return null;

  return (
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
  );
};

export default CommunicationPerformance;
