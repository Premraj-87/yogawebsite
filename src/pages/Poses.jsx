import { useState } from "react";
import { poses } from "../data/poses";

import PoseCard from "../components/PoseCard";
import SearchBar from "../components/SearchBar";
import LevelFilter from "../components/LevelFilter";

import useSearch from "../hooks/useSearch";
import { filterByLevel } from "../utils/filterByLevel";

const Poses = () => {
  const [level, setLevel] = useState("");

  const { query, setQuery, filteredData } = useSearch(poses);
  const finalPoses = filterByLevel(filteredData, level);

  return (
    <section className="px-6 md:px-20 py-24 bg-[#f6faf7] min-h-screen">

      {/* PAGE HEADER */}
      <div className="max-w-3xl mb-16">
        <span className="text-sm uppercase tracking-widest text-green-700">
          Pose Library
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-light">
          Explore Yoga Poses
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Discover yoga poses with clear guidance, difficulty levels,
          and benefits to help you build a safe and mindful practice.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-16">
        <SearchBar query={query} setQuery={setQuery} />
        <LevelFilter level={level} setLevel={setLevel} />
      </div>

      {/* POSES GRID */}
      {finalPoses.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {finalPoses.map((pose) => (
            <PoseCard key={pose.id} pose={pose} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-32">
          <p className="text-gray-500">
            No poses found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </section>
  );
};

export default Poses;
