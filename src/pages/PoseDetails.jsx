import { useParams, Link } from "react-router-dom";
import { poses } from "../data/poses";

const PoseDetails = () => {
  const { id } = useParams();
  const pose = poses.find((p) => p.id === Number(id));

  if (!pose) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Pose not found</p>
      </div>
    );
  }

  return (
    <section className="px-6 md:px-20 py-24 bg-[#f6faf7] min-h-screen">

      {/* Back */}
      <Link
        to="/poses"
        className="text-sm text-green-700 hover:underline"
      >
        ← Back to poses
      </Link>

      {/* HEADER */}
      <div className="mt-10 grid gap-14 md:grid-cols-2 items-start">

        {/* IMAGE */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm">
          <img
            src={pose.image}
            alt={pose.name}
            loading="lazy"
            className="w-full h-[420px] object-cover"
          />

          {/* Level Badge */}
          <span className="absolute top-4 left-4 bg-white/90 text-green-700 text-xs px-3 py-1 rounded-full">
            {pose.level}
          </span>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-3xl md:text-5xl font-light">
            {pose.name}
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            {pose.description}
          </p>

          {/* Meta */}
          <div className="mt-8 flex gap-10 text-sm text-gray-600">
            <p>
              <span className="font-medium">Level:</span> {pose.level}
            </p>
            <p>
              <span className="font-medium">Duration:</span> {pose.duration}
            </p>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="mt-20 max-w-3xl">
        <h3 className="text-2xl font-light">
          Benefits of this pose
        </h3>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-gray-600">
          {pose.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-600 mt-1">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default PoseDetails;
