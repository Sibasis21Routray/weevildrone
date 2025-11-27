import React from "react";

interface AdditionalInformationProps {
  additionalKeyComponentsAndApplications?: any;
  radarDroneIntegrationWorkflowAndApplications?: any;
  vtolTechnologyAndApplications?: any;
  advancedFeaturesAndApplications?: any;
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  additionalKeyComponentsAndApplications,
  radarDroneIntegrationWorkflowAndApplications,
  vtolTechnologyAndApplications,
  advancedFeaturesAndApplications,
}) => {
  const additionalSections = [
    {
      id: "components",
      label: "Components & Applications",
      data: additionalKeyComponentsAndApplications,
    },
    {
      id: "workflow",
      label: "Integration Workflow",
      data: radarDroneIntegrationWorkflowAndApplications,
    },
    {
      id: "technology",
      label: "Technology",
      data: vtolTechnologyAndApplications,
    },
    {
      id: "advanced",
      label: "Advanced Features",
      data: advancedFeaturesAndApplications,
    },
  ].filter((section) => section.data);

  if (additionalSections.length === 0) return null;

  // Render content sections
  const renderContentSection = (data: any, title: string) => (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="bg-gray-900 px-4 py-3">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <div className="p-4 space-y-4">
        {data.militaryTrainingApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Military Training Applications
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.militaryTrainingApplications}
            </p>
          </div>
        )}
        {data.keyComponents && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Key Components
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.keyComponents}
            </p>
          </div>
        )}
        {data.integrationWorkflow &&
          Array.isArray(data.integrationWorkflow) && (
            <div>
              <h5 className="text-base font-semibold text-gray-900 mb-2">
                Integration Workflow
              </h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                {data.integrationWorkflow.map((step: string, index: number) => (
                  <li key={index} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        {data.advancedCapabilities && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Advanced Capabilities
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.advancedCapabilities}
            </p>
          </div>
        )}
        {data.hybridDesignAdvantages && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Hybrid Design Advantages
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.hybridDesignAdvantages}
            </p>
          </div>
        )}
        {data.missionApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Mission Applications
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.missionApplications}
            </p>
          </div>
        )}
        {data.opticalFiberAdvantages && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Optical Fiber Advantages
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.opticalFiberAdvantages}
            </p>
          </div>
        )}
        {data.tacticalApplications && (
          <div>
            <h5 className="text-base font-semibold text-gray-900 mb-2">
              Tactical Applications
            </h5>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.tacticalApplications}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
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
  );
};

export default AdditionalInformation;
