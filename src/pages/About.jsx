const About = () => {
  return (
    <section className="bg-white">

      {/* HERO STRIP */}
      <div className="relative h-[60vh] bg-green-900 flex items-center">
        <div className="absolute inset-0 bg-[url('/images/home/pic1.jpg')] bg-cover bg-center opacity-30" />

        <div className="relative z-10 px-6 md:px-24 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-extralight leading-tight">
            Yoga is a conversation <br /> between body and breath
          </h1>

          <p className="mt-6 max-w-xl text-green-100 leading-relaxed">
            This platform was created to help you slow down, tune inward,
            and build a mindful practice that feels natural and sustainable.
          </p>
        </div>
      </div>

      {/* STORY FLOW */}
      <div className="px-6 md:px-24 py-24 max-w-6xl mx-auto space-y-28">

        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <h2 className="text-3xl font-light">
            Not a workout. <br /> A way of living.
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            We believe yoga should meet you where you are — not force you into
            shapes or routines. Every pose, every routine here is designed
            to support awareness, mobility, and calm in daily life.
          </p>
        </div>

        {/* FLOATING CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-green-50 p-8 rounded-3xl -translate-y-6">
            <span className="text-sm uppercase tracking-widest text-green-700">
              Philosophy
            </span>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Presence over perfection. Breath over force. Consistency over
              intensity.
            </p>
            
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <span className="text-sm uppercase tracking-widest text-green-700">
              Practice
            </span>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Clear pose guidance, thoughtful sequencing, and calm pacing
              that respects your body’s rhythm.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl translate-y-6">
            <span className="text-sm uppercase tracking-widest text-green-700">
              Promise
            </span>
            <p className="mt-4 text-gray-700 leading-relaxed">
              A distraction-free space to reconnect, recharge, and build
              a lifelong wellness habit.
            </p>
          </div>

        </div>

        {/* QUOTE STRIP */}
        <div className="bg-green-900 text-white rounded-3xl p-12 text-center">
          <p className="text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            “Yoga is not about touching your toes.  
            It’s about what you learn on the way down.”
          </p>
        </div>

        {/* FINAL CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-light">
            Your practice. Your pace.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you arrive stressed, curious, or tired — this space
            welcomes you exactly as you are.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
