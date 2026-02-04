import { Link } from "react-router-dom";

export const RoutineCard = ({ routine }) => {
  if (!routine) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold">{routine.title}</h3>
      <p className="text-sm text-gray-500">{routine.level}</p>
      <p className="text-sm">{routine.duration}</p>

      <Link
        to={`/routines/${routine.id}`}
        className="text-green-600 mt-2 inline-block"
      >
        View Routine →
      </Link>
    </div>
  );
};

export default RoutineCard;
