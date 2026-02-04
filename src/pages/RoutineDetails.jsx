import { useParams, useNavigate } from "react-router-dom";
import { routines } from "../data/routines";
import { poses } from "../data/poses";

const RoutineDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const routine = routines.find((r) => r.id === Number(id));

  if (!routine) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6faf7]">
        <p className="text-gray-500 mb-6">Routine not found</p>
        <button
          onClick={() => navigate("/routines")}
          className="text-green-700 hover:underline"
        >
          ← Back to Routines
        </button>
      </div>
    );
  }

  // Resolve poses (id OR object)
  const routinePoses = routine.poses
    .map((pose) => {
      if (typeof pose === "object" && pose.id) return pose;
      return poses.find((p) => p.id === pose);
    })
    .filter(Boolean);

  return (
    <section className="px-6 md:px-20 py-24 bg-[#f6faf7] min-h-screen">

      {/* Back */}
      <button
        onClick={() => navigate("/routines")}
        className="text-sm text-green-700 hover:underline"
      >
        ← Back to Routines
      </button>

      {/* HEADER */}
      <div className="mt-10 grid gap-14 md:grid-cols-2 items-center">

        {/* LEFT TEXT */}
        <div>
          <span className="text-sm uppercase tracking-widest text-green-700">
            Guided Routine
          </span>

          <h1 className="mt-6 text-3xl md:text-5xl font-light">
            {routine.title}
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            A thoughtfully structured yoga routine designed to help you move
            with awareness, build strength, and cultivate inner balance through
            a guided sequence of poses.
          </p>

          {/* Meta */}
          <div className="mt-8 flex gap-8 text-sm text-gray-600">
            <span>
              <strong>Level:</strong> {routine.level}
            </span>
            <span>
              <strong>Duration:</strong> {routine.duration}
            </span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-light mb-4">
            What this routine offers
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• Structured pose sequence</li>
            <li>• Smooth transitions</li>
            <li>• Breath-aware movement</li>
            <li>• Beginner to friendly progression</li>
          </ul>
        </div>
      </div>

      {/* POSES LIST */}
      <div className="mt-24">
        <h2 className="text-2xl font-light mb-10">
          Poses included in this routine
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {routinePoses.map((pose) => (
            <div
              key={pose.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={pose.image}
                alt={pose.name}
                loading="lazy"
                className="w-full h-60 object-cover "
              />

              <div className="p-6">
                <h3 className="text-lg font-medium">
                  {pose.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Level: {pose.level}
                </p>

                {pose.duration && (
                  <p className="mt-1 text-sm text-gray-500">
                    Duration: {pose.duration}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default RoutineDetails;
