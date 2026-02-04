const Meditation = () => {
  return (
    <section className="min-h-screen bg-[#f6faf7] px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="max-w-3xl">
        <span className="text-sm uppercase tracking-widest text-green-700">
          Mindfulness
        </span>

        <h1 className="mt-6 text-3xl md:text-5xl font-light">
          Guided Meditation for Inner Calm
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Meditation helps quiet the mind, reduce stress, and cultivate a deeper
          connection with your breath and body. Explore simple, guided practices
          designed for clarity, presence, and emotional balance.
        </p>
      </div>

      {/* PRACTICES */}
      <div className="mt-20 grid gap-10 md:grid-cols-3">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-light">
            Breathing Awareness
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            A gentle practice that focuses on natural breathing to calm the
            nervous system and bring awareness to the present moment.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            Duration: 5–10 minutes
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-light">
            Body Scan Meditation
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Gradually shift attention through the body to release tension,
            improve relaxation, and develop mindful awareness.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            Duration: 10–15 minutes
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-light">
            Loving-Kindness Practice
          </h3>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Cultivate compassion and positive intention by gently directing
            kindness toward yourself and others.
          </p>
          <p className="mt-6 text-xs text-gray-500">
            Duration: 8–12 minutes
          </p>
        </div>

      </div>

      {/* FOOT NOTE */}
      <div className="mt-24 max-w-2xl">
        <p className="text-gray-500 text-sm leading-relaxed">
          You don’t need silence or perfection to meditate — just a few moments
          of presence. Begin where you are, and allow your practice to grow
          naturally.
        </p>
      </div>

    </section>
  );
};

export default Meditation;
