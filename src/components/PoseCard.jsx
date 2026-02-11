import { Link } from "react-router-dom";

const PoseCard = ({ pose }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={pose.image}
          alt={pose.name}
          loading="lazy"
          className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Level Badge */}
        <span className="absolute   top-4 left-4 bg-white/90 text-green-700 text-xs px-3 py-1 rounded-full tracking-wide">
          {pose.level}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-medium">
          {pose.name}
        </h3>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Improve flexibility, balance, and strength through mindful alignment
          and controlled breathing.
        </p>

        <Link
          to={`/poses/${pose.id}`}
          className="inline-flex items-center gap-2 mt-6 text-green-700 text-sm hover:underline"
        >
          View Details
          <span className="text-lg">→</span>
        </Link>
      </div>

    </div>
  );
};

export default PoseCard;
