/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { poses } from "../data/poses";
import { routines } from "../data/routines";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

/* ---------------- STAT COMPONENT ---------------- */

const Stat = ({ number, label }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.3 }}
    className="text-center"
  >
    <p className="text-4xl font-bold">{number}</p>
    <p className="mt-2 text-gray-200">{label}</p>
  </motion.div>
);

/* ---------------- HOME ---------------- */

const Home = () => {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/pic1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-start text-left text-white pt-32 px-6 md:px-20 max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-[56px] font-light leading-[1.15]"
          >
            Flow into peace <br /> one pose at a time
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-12 text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Discover mindful yoga practices designed to improve flexibility,
            build strength, and cultivate inner calm.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-36 grid grid-cols-1 sm:grid-cols-3 gap-16"
          >
            <Stat number="10,000+" label="Happy Students" />
            <Stat number="500+" label="Classes Streamed Monthly" />
            <Stat number="95%" label="Member Satisfaction" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-24 px-6 bg-linear-to-b from-green-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light">
            What We Do
          </h2>
          <p className="mt-6 text-gray-600">
            Thoughtfully curated yoga practices to nurture body & mind.
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-6 px-1 scroll-smooth">
          {poses.slice(0, 9).map((pose) => (
            <motion.div
              key={pose.id}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="group min-w-75 bg-white rounded-3xl shadow-sm hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={pose.image}
                  alt={pose.name}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl">{pose.name}</h3>
                <p className="text-gray-500 text-sm mt-4">
                  Build strength, flexibility and balance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BIG CTA ================= */}
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/pic2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
        >
          <span className="text-sm uppercase tracking-widest text-green-200">
            Yoga Pose Library
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-light max-w-3xl">
            Explore Detailed Yoga Poses
          </h2>

          <p className="mt-8 max-w-2xl text-gray-200">
            Step-by-step guidance with visuals and breathing cues.
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/poses"
              className="mt-12 inline-flex items-center gap-2 bg-green-600 px-10 py-4 rounded-full"
            >
              Explore Yoga Poses →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ROUTINES ================= */}
      <section className="py-28 px-6 md:px-20 bg-[#f6faf7]">
        <div className="grid gap-20 md:grid-cols-2 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-sm uppercase tracking-widest text-green-700">
              Guided Practice
            </span>

            <h2 className="mt-6 text-3xl md:text-5xl font-light">
              Programs that grow with you
            </h2>

            <p className="mt-8 text-gray-600 max-w-md">
              Structured routines designed for steady progress.
            </p>
          </motion.div>

          <div className="space-y-6">
            {routines.slice(0,5).map((routine) => (
              <motion.div
                key={routine.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <div className="flex justify-between text-xs">
                  <span className="uppercase text-green-600">
                    {routine.level}
                  </span>
                  <span className="text-gray-400">
                    {routine.duration}
                  </span>
                </div>

                <h3 className="mt-4 text-xl">{routine.title}</h3>

                <Link
                  to={`/routines/${routine.id}`}
                  className="inline-block mt-6 text-green-700 text-sm hover:underline"
                >
                  View Program →
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 px-6 md:px-20 bg-[#f6faf7]">
  
  {/* Section Header */}
  <div className="max-w-3xl mx-auto text-center">
    <span className="text-xs uppercase tracking-widest text-green-700">
      Community Voices
    </span>

    <h2 className="mt-6 text-3xl md:text-4xl font-light tracking-wide">
      Wellness shaped by real experiences
    </h2>

    <p className="mt-6 text-gray-600 leading-relaxed">
      Hear from members who have built sustainable yoga practices
      through mindful movement, breath, and consistency.
    </p>
  </div>

{/* Testimonials Grid */}
<div className="mt-24 grid gap-16 md:grid-cols-3">
  {[
    {
      img: "/images/home/user1.jpg",
      name: "Aarav Mehta",
      role: "Beginner Practitioner",
      quote:
        "The routines are calming yet effective. I finally feel consistent and confident in my daily practice."
    },
    {
      img: "/images/home/user2.jpg",
      name: "Riya Sharma",
      role: "Wellness Enthusiast",
      quote:
        "The guidance feels thoughtful and balanced. Each session helps me reconnect with my body and breath."
    },
    {
      img: "/images/home/user3.jpg",
      name: "Kabir Verma",
      role: "Intermediate Yogi",
      quote:
        "This platform transformed how I approach yoga — slower, more mindful, and deeply rewarding."
    }
  ].map((t, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center"
    >
      {/* Avatar */}
      <img
        src={t.img}
        alt={t.name}
        className="w-16 h-16 rounded-full mx-auto object-cover"
      />

      {/* Quote */}
      <p className="mt-8 text-gray-600 text-sm leading-relaxed">
        “{t.quote}”
      </p>

      {/* Name */}
      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-800">
          {t.name}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          {t.role}
        </p>
      </div>
    </motion.div>
  ))}
</div>

</section>


    </div>
  );
};

export default Home;
