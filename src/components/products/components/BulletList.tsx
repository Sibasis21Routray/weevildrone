


interface BulletListProps {
  heading?: string;
  items?: string[];
}
const BulletList: React.FC<BulletListProps> = ({ heading, items }) => {
  return (
    <div className="max-w-5xl text-left pl-6 ">
      {/* Dynamic Heading */}
      {heading && (
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{heading}</h2>
      )}

      {/* Dynamic Bullet Points */}
      <ul className="space-y-1">
        {items &&
          items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-tertiary mr-3 mt-1">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BulletList;
