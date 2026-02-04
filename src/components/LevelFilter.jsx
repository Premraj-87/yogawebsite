const LevelFilter = ({ level, setLevel }) => {
  return (
    <div className="relative w-full md:w-56">
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="
          w-full
          h-12
          px-5
          pr-10
          rounded-full
          bg-white
          border
          border-gray-200
          text-sm
          text-gray-700
          appearance-none
          focus:outline-none
          focus:ring-2
          focus:ring-green-200/40
          focus:border-green-100
          transition
          cursor-pointer
        "
      >
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* Custom Arrow */}
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        ▾
      </span>
    </div>
  );
};

export default LevelFilter;
