import { routines } from "../data/routines";
import RoutineCard from "../components/RoutineCard";

const Routines = () => {
  return (
    <section className="px-6 md:px-20 py-24 bg-[#f6faf7] min-h-screen">

      {/* PAGE HEADER */}
      <div className="max-w-3xl mb-16">
        <span className="text-sm uppercase tracking-widest text-green-700">
          Guided Practice
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-light">
          Yoga Routines
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Explore structured yoga routines designed to support consistency,
          balance, and mindful progression — from short daily flows to
          deeper guided programs.
        </p>
      </div>

      {/* ROUTINES GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {routines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} />
        ))}
      </div>

    </section>
  );
};

export default Routines;
