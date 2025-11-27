import React from "react";

interface KeyFeature {
  icon: React.ReactNode;
  text: string;
}

interface KeyFeaturesSectionProps {
  keyFeatures: KeyFeature[];
}

const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({
  keyFeatures,
}) => {
  if (!keyFeatures || keyFeatures.length === 0) return null;

  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-1 h-6 bg-orange-500" />
        <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keyFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
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
  );
};

export default KeyFeaturesSection;
