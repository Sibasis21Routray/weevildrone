interface TextContentProps {
  heading?: string;
  paragraph?: string | string[];
}

const TextContent: React.FC<TextContentProps> = ({ heading, paragraph }) => {
  // Handle different types of paragraph input using map
  const renderParagraphs = () => {
    if (!paragraph) return null;

    // Convert single paragraph to array for consistent mapping
    const paragraphsArray = Array.isArray(paragraph) ? paragraph : [paragraph];

    return paragraphsArray.map((para, index) => (
      <p key={index} className="text-left text-gray-700 leading-relaxed mb-4">
        {para}
      </p>
    ));
  };

  return (
    <div className="text-left max-w-5xl mx-auto">
      {heading && (
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{heading}</h2>
      )}
      <div className="space-y-4">{renderParagraphs()}</div>
    </div>
  );
};

export default TextContent;
